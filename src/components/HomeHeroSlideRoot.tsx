"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

/** Time each slide stays on screen before advancing (carousel cadence). */
const AUTO_ADVANCE_MS = 5000;
const GRID_ROWS = 3;
const GRID_COLS = 4;
const TILE_MOVE_DURATION_MS = 600;
const TILE_FADE_DURATION_MS = 400;
const TILE_STAGGER_MS = 60;
const TEXT_ENTRY_DELAY_MS = 400;

function encodeSrc(src: string) {
  return src.split("/").map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg))).join("/");
}

type SlideCtx = {
  imageCount: number;
  activeDotIndex: number;
  transitioning: boolean;
  textCycle: number;
  textDelayMs: number;
  goToIndex: (i: number) => void;
};

const HomeHeroSlideContext = createContext<SlideCtx | null>(null);

/** Call only inside `<HomeHeroSlideRoot>` — drives stagger re-play when the banner slide changes. */
export function useHomeHeroSlideContext(): SlideCtx | null {
  return useContext(HomeHeroSlideContext);
}

export function HomeHeroSlideDots({ className = "" }: { className?: string }) {
  const ctx = useContext(HomeHeroSlideContext);
  if (!ctx) return null;

  return (
    <div
      className={`flex justify-center gap-2 ${className}`}
      role="tablist"
      aria-label="Hero banner slides"
    >
      {Array.from({ length: ctx.imageCount }, (_, idx) => (
        <button
          key={idx}
          type="button"
          role="tab"
          aria-selected={idx === ctx.activeDotIndex}
          disabled={ctx.transitioning}
          onClick={() => ctx.goToIndex(idx)}
          className={`h-3 w-3 rounded-full border transition-all disabled:cursor-not-allowed disabled:opacity-45 ${
            idx === ctx.activeDotIndex
              ? "scale-100 border-white bg-white"
              : "scale-95 border-[rgba(255,255,255,0.4)] bg-transparent hover:border-white/60"
          }`}
          aria-label={`Show banner image ${idx + 1}`}
        />
      ))}
    </div>
  );
}

type HomeHeroSlideRootProps = {
  images: readonly string[];
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  /** Overrides default hero gradient overlay (e.g. lighter wash for light-themed sites). */
  overlayClassName?: string;
  /** Accessible name for the hero landmark (defaults to homepage copy). */
  ariaLabel?: string;
};

const DEFAULT_HERO_OVERLAY =
  "pointer-events-none absolute inset-0 z-[9] bg-[rgba(0,0,0,0.35)]";

export function HomeHeroSlideRoot({
  images,
  children,
  className = "",
  pauseOnHover = true,
  overlayClassName = DEFAULT_HERO_OVERLAY,
  ariaLabel = "Homepage hero",
}: HomeHeroSlideRootProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textCycle, setTextCycle] = useState(1);
  const [transition, setTransition] = useState<{
    from: number;
    to: number;
    key: number;
  } | null>(null);
  const transitionEpoch = useRef(0);
  const transitionLayerRef = useRef<HTMLDivElement | null>(null);

  const goToIndex = useCallback(
    (next: number) => {
      const len = images.length;
      const normalized = ((next % len) + len) % len;
      if (normalized === displayIndex || transition !== null) return;
      transitionEpoch.current += 1;
      setTransition({
        from: displayIndex,
        to: normalized,
        key: transitionEpoch.current,
      });
    },
    [displayIndex, images.length, transition]
  );

  useEffect(() => {
    if (!transitionLayerRef.current || !transition) return;
    if (reduceMotion) {
      const id = window.setTimeout(() => {
        setDisplayIndex(transition.to);
        setTransition(null);
        setTextCycle((prev) => prev + 1);
      }, 140);
      return () => window.clearTimeout(id);
    }

    const layer = transitionLayerRef.current;
    layer.innerHTML = "";
    const incoming = encodeSrc(images[transition.to]);
    const layerRect = layer.getBoundingClientRect();
    const layerW = Math.max(1, layerRect.width);
    const layerH = Math.max(1, layerRect.height);
    let done = false;

    const doneTransition = () => {
      if (done) return;
      done = true;
      setDisplayIndex(transition.to);
      setTransition(null);
      setTextCycle((prev) => prev + 1);
      if (transitionLayerRef.current) transitionLayerRef.current.innerHTML = "";
    };
    const timers: number[] = [];
    const tileW = layerW / GRID_COLS;
    const tileH = layerH / GRID_ROWS;
    let maxDelay = 0;

    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const tile = document.createElement("div");
        tile.className = "absolute overflow-hidden";
        tile.style.width = `${tileW}px`;
        tile.style.height = `${tileH}px`;
        tile.style.top = `${row * tileH}px`;
        tile.style.left = `${col * tileW}px`;

        const startX = -layerW;
        const startY = Math.random() * 200 - 100;
        const angle = (Math.random() - 0.5) * 30;
        tile.style.opacity = "0";
        tile.style.transform = `translateX(${startX}px) translateY(${startY}px) rotate(${angle}deg)`;
        tile.style.transition = `transform ${TILE_MOVE_DURATION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${TILE_FADE_DURATION_MS}ms ease`;
        tile.style.willChange = "transform, opacity";

        const inner = document.createElement("div");
        inner.className = "absolute";
        inner.style.width = `${layerW}px`;
        inner.style.height = `${layerH}px`;
        inner.style.top = `${-(row * tileH)}px`;
        inner.style.left = `${-(col * tileW)}px`;
        inner.style.backgroundImage = `url("${incoming}")`;
        inner.style.backgroundSize = "cover";
        inner.style.backgroundPosition = "center";
        inner.style.backgroundRepeat = "no-repeat";
        tile.appendChild(inner);

        layer.appendChild(tile);

        const delay = (row * GRID_COLS + col) * TILE_STAGGER_MS;
        maxDelay = Math.max(maxDelay, delay);
        timers.push(
          window.setTimeout(() => {
            tile.style.opacity = "1";
            tile.style.transform = "translateX(0px) translateY(0px) rotate(0deg)";
          }, delay)
        );
      }
    }

    const finishTimeout = window.setTimeout(() => doneTransition(), maxDelay + TILE_MOVE_DURATION_MS);
    timers.push(finishTimeout);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      if (!done) doneTransition();
    };
  }, [images, reduceMotion, transition]);

  useEffect(() => {
    if (transition !== null || (pauseOnHover && isPaused)) return;
    const id = window.setTimeout(() => goToIndex(displayIndex + 1), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [displayIndex, transition, isPaused, pauseOnHover, goToIndex]);

  const currentSrc = images[displayIndex];
  const ctxValue = useMemo<SlideCtx>(
    () => ({
      imageCount: images.length,
      activeDotIndex: transition ? transition.to : displayIndex,
      transitioning: transition !== null,
      textCycle,
      textDelayMs: TEXT_ENTRY_DELAY_MS,
      goToIndex,
    }),
    [images.length, transition, displayIndex, goToIndex, textCycle]
  );

  return (
    <HomeHeroSlideContext.Provider value={ctxValue}>
      <section
        className={`relative flex w-full flex-col overflow-x-hidden ${className}`}
        onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
        onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
        aria-label={ariaLabel}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            key={`${displayIndex}-${textCycle}`}
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat hero-ken-burns"
            style={{
              backgroundImage: `url("${encodeSrc(currentSrc)}")`,
            }}
          />
        </div>

        {transition ? (
          <div ref={transitionLayerRef} className="pointer-events-none absolute inset-0 z-[8] overflow-hidden" />
        ) : null}

        <div className={overlayClassName} aria-hidden />

        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </section>
    </HomeHeroSlideContext.Provider>
  );
}

export function useHomeHeroTextAnimation() {
  const ctx = useContext(HomeHeroSlideContext);
  return {
    textCycle: ctx?.textCycle ?? 0,
    textDelayMs: ctx?.textDelayMs ?? TEXT_ENTRY_DELAY_MS,
  };
}
