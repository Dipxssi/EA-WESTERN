"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const C = {
  forest: "#1a3a2a",
  gold: "#c9a96e",
  cream: "#f5f0e8",
  offWhite: "#f5f1ea",
  footer: "#2c1f0e",
};

function useFadeInOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-fade]");
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("safari-philosophy-fade-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function PhilosophyNav({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = (href: string, exactOnly?: boolean) => {
    if (!pathname) return "sp-nav-link";
    const isExact = pathname === href || pathname === `${href}/`;
    const isPrefix = pathname.startsWith(`${href}/`);
    const active = exactOnly ? isExact : isExact || isPrefix;
    return active ? "sp-nav-link sp-nav-active" : "sp-nav-link";
  };

  const mainHref = `/${locale}`;
  const safariHome = `/${locale}/safaris`;

  return (
    <header
      className="sp-nav"
      style={{ backgroundColor: C.forest, borderBottom: `1px solid rgba(201, 169, 110, 0.22)` }}
    >
      <div className="sp-nav-inner">
        <Link href={mainHref} className="sp-logo" aria-label="eawestern home">
          <span className="sp-logo-box">EW</span>
        </Link>
        <nav className="sp-nav-links" aria-label="Safari microsite">
          <Link className={navClass(mainHref, true)} href={mainHref}>
            Main Home
          </Link>
          <Link
            className={pathname === safariHome || pathname === `${safariHome}/` ? "sp-nav-link sp-nav-active" : "sp-nav-link"}
            href={safariHome}
          >
            Home
          </Link>
          <Link className={navClass(`/${locale}/safaris/destinations`)} href={`/${locale}/safaris/destinations`}>
            Destinations
          </Link>
          <Link className={navClass(`/${locale}/safaris/philosophy`)} href={`/${locale}/safaris/philosophy`}>
            Philosophy
          </Link>
          <Link className={navClass(`/${locale}/safaris/packages`)} href={`/${locale}/safaris/packages`}>
            Packages
          </Link>
          <Link className={navClass(`/${locale}/safaris/contact`)} href={`/${locale}/safaris/contact`}>
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="sp-nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`sp-mobile-panel ${mobileOpen ? "sp-mobile-panel-open" : ""}`}>
        <Link href={mainHref} onClick={() => setMobileOpen(false)}>
          Main Home
        </Link>
        <Link href={safariHome} onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href={`/${locale}/safaris/destinations`} onClick={() => setMobileOpen(false)}>
          Destinations
        </Link>
        <Link href={`/${locale}/safaris/philosophy`} onClick={() => setMobileOpen(false)}>
          Philosophy
        </Link>
        <Link href={`/${locale}/safaris/packages`} onClick={() => setMobileOpen(false)}>
          Packages
        </Link>
        <Link href={`/${locale}/safaris/contact`} onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}

const principleCards = [
  {
    n: "01",
    title: "A Structured Approach to Exploration",
    image: "/images/sf.png",
    body: [
      "We do not design trips randomly or rely on generic packages. Each itinerary is built around seasonal wildlife movement, travel distances and terrain, lodge positioning and accessibility, and client pace and comfort preferences.",
      "The result is a safari that feels natural, well-paced, and effortless—without unnecessary fatigue or rushed transitions.",
    ],
  },
  {
    n: "02",
    title: "Respect for Wildlife & Ecosystems",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    body: [
      "Wildlife experiences should never come at the expense of the environment. We operate within established conservation guidelines to protect ecological balance while delivering outstanding game viewing.",
    ],
    bullets: ["Responsible game viewing distances", "Minimal disruption to animal behavior", "Use of designated routes and park regulations"],
  },
  {
    n: "03",
    title: "Local Expertise, Real Insight",
    image: "/images/guide.png",
    body: ["Our safaris are led by experienced East African professionals who understand the land beyond surface-level knowledge."],
    bullets: ["Better wildlife tracking", "Smarter route adjustments", "Deeper cultural context", "Safer, more informed decision-making"],
  },
  {
    n: "04",
    title: "Partnership with Responsible Lodges",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    body: [
      "Where you stay matters as much as where you go.",
      "We work with lodges and camps that follow sustainable tourism practices, support conservation initiatives, and engage and employ local communities—so your journey contributes positively to the regions you visit.",
    ],
  },
];

export default function PhilosophyPageClient({ locale }: { locale: string }) {
  useFadeInOnScroll();

  return (
    <div className="safari-philosophy-page" style={{ backgroundColor: C.offWhite, color: "#333", fontFamily: "'Inter', sans-serif", scrollBehavior: "smooth" }}>
      <style>{`
        .safari-philosophy-page { scroll-behavior: smooth; overflow-x: hidden; max-width: 100%; }
        .safari-philosophy-page * { box-sizing: border-box; }
        .sp-nav { position: sticky; top: 0; z-index: 50; }
        .sp-nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; min-height: 68px; }
        .sp-logo { text-decoration: none; display: flex; align-items: center; }
        .sp-logo-box { width: 38px; height: 38px; border: 1px solid ${C.gold}; color: ${C.gold}; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; letter-spacing: 0.02em; }
        .sp-nav-links { display: none; gap: 1.75rem; align-items: center; }
        @media (min-width: 768px) { .sp-nav-links { display: flex; } }
        .sp-nav-link { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(245,240,232,0.72); text-decoration: none; transition: color 0.3s; }
        .sp-nav-link:hover { color: ${C.gold}; }
        .sp-nav-active { color: ${C.gold}; }
        .sp-nav-toggle { display: flex; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; }
        @media (min-width: 768px) { .sp-nav-toggle { display: none; } }
        .sp-nav-toggle span { display: block; width: 22px; height: 2px; background: ${C.gold}; }
        .sp-mobile-panel { display: none; flex-direction: column; padding: 0 20px 20px; gap: 0; background: ${C.forest}; border-top: 1px solid rgba(201,169,110,0.15); }
        .sp-mobile-panel a { color: ${C.cream}; text-decoration: none; padding: 14px 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .sp-mobile-panel-open { display: flex; }
        @media (min-width: 768px) { .sp-mobile-panel, .sp-mobile-panel-open { display: none !important; } }
        .sp-hero { position: relative; min-height: 78vh; display: flex; align-items: center; justify-content: center; padding: 100px 20px 80px; }
        .sp-hero-bg { position: absolute; inset: 0; }
        .sp-hero-bg img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .sp-hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.55); }
        .sp-hero-inner { position: relative; z-index: 2; max-width: 900px; text-align: center; }
        .sp-eyebrow { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 18px; }
        .sp-eyebrow-line { width: 36px; height: 1px; background: ${C.gold}; }
        .sp-eyebrow-text { font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; color: ${C.gold}; font-weight: 500; }
        .sp-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(1.85rem, 5vw, 3.25rem); font-weight: 400; color: ${C.cream}; line-height: 1.12; margin: 0 0 20px; }
        .sp-hero h1 em { font-style: italic; color: ${C.gold}; }
        .sp-hero-sub { font-size: clamp(15px, 2vw, 17px); color: rgba(245,240,232,0.88); line-height: 1.75; max-width: 620px; margin: 0 auto 28px; font-weight: 400; }
        .sp-pills { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .sp-pill { border: 1px solid ${C.gold}; color: ${C.gold}; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; padding: 10px 18px; border-radius: 999px; background: rgba(26,58,42,0.35); }
        .sp-section { padding: 72px 20px; max-width: 1100px; margin: 0 auto; }
        .sp-section-title { font-family: 'Playfair Display', serif; font-size: clamp(1.75rem, 4vw, 2.35rem); text-align: center; color: ${C.forest}; margin: 0 0 40px; font-weight: 600; }
        .sp-grid-2 { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 768px) { .sp-grid-2 { grid-template-columns: 1fr 1fr; } }
        .sp-card { background: #fff; border: 1px solid rgba(26,58,42,0.12); border-radius: 10px; overflow: hidden; transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease; }
        .sp-card:hover { transform: translateY(-4px); border-color: ${C.gold}; box-shadow: 0 14px 40px rgba(26,58,42,0.08); }
        .sp-card-img { width: 100%; height: 200px; object-fit: cover; display: block; border-radius: 10px 10px 0 0; }
        .sp-card-body { padding: 22px 22px 26px; }
        .sp-num { font-size: 11px; letter-spacing: 0.2em; color: ${C.gold}; font-weight: 600; margin-bottom: 8px; }
        .sp-card h3 { font-family: 'Playfair Display', serif; font-size: 1.35rem; color: ${C.forest}; margin: 0 0 14px; font-weight: 600; line-height: 1.25; }
        .sp-card p { font-size: 15px; line-height: 1.8; color: #4a4a46; margin: 0 0 12px; font-weight: 400; }
        .sp-card ul { margin: 0; padding: 0; list-style: none; }
        .sp-card li { display: flex; gap: 10px; align-items: flex-start; font-size: 15px; line-height: 1.65; color: #4a4a46; margin-bottom: 10px; }
        .sp-card li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: ${C.gold}; margin-top: 8px; flex-shrink: 0; }
        .sp-logistics { background: ${C.forest}; color: ${C.cream}; padding: 0; }
        .sp-logistics-grid { display: grid; grid-template-columns: 1fr; max-width: 1200px; margin: 0 auto; min-height: 480px; }
        @media (min-width: 768px) { .sp-logistics-grid { grid-template-columns: 1fr 1fr; } }
        .sp-logistics-visual { position: relative; min-height: 280px; }
        @media (min-width: 768px) { .sp-logistics-visual { min-height: auto; } }
        .sp-logistics-visual img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 280px; }
        @media (min-width: 768px) { .sp-logistics-visual img { min-height: 100%; border-radius: 0 0 0 12px; } }
        .sp-logistics-visual .ovl { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(26,58,42,0.55) 0%, transparent 70%); }
        @media (min-width: 768px) { .sp-logistics-visual img { border-radius: 12px 0 0 12px; } }
        .sp-logistics-copy { padding: 48px 24px 56px; display: flex; flex-direction: column; justify-content: center; }
        @media (min-width: 768px) { .sp-logistics-copy { padding: 56px 48px 56px 40px; } }
        .sp-logistics-copy .eyebrow { justify-content: flex-start; margin-bottom: 14px; }
        .sp-logistics-copy h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.65rem, 3.5vw, 2.25rem); margin: 0 0 18px; font-weight: 600; line-height: 1.2; }
        .sp-logistics-copy > p { font-size: 15px; line-height: 1.85; opacity: 0.9; margin: 0 0 28px; max-width: 480px; }
        .sp-row { display: grid; grid-template-columns: auto 1fr; gap: 16px; margin-bottom: 22px; align-items: start; }
        .sp-ring { width: 14px; height: 14px; border: 2px solid ${C.gold}; border-radius: 50%; margin-top: 4px; }
        .sp-row strong { display: block; font-size: 15px; color: ${C.cream}; margin-bottom: 6px; font-weight: 600; }
        .sp-row span { font-size: 14px; line-height: 1.7; opacity: 0.85; }
        .sp-resp { background: ${C.offWhite}; padding: 72px 20px; }
        .sp-resp-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 36px; align-items: stretch; }
        @media (min-width: 768px) { .sp-resp-inner { grid-template-columns: 1fr 1fr; gap: 48px; } }
        .sp-resp h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.1rem); color: ${C.forest}; margin: 14px 0 18px; font-weight: 600; }
        .sp-resp p { font-size: 15px; line-height: 1.85; color: #4a4a46; margin: 0 0 14px; }
        .sp-resp ul { list-style: none; padding: 0; margin: 18px 0 0; }
        .sp-resp li { padding-left: 18px; position: relative; margin-bottom: 12px; font-size: 15px; line-height: 1.65; color: #4a4a46; }
        .sp-resp li::before { content: ""; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background: ${C.gold}; }
        .sp-resp-img-wrap { min-height: 320px; border-radius: 0 12px 12px 0; overflow: hidden; box-shadow: 12px 18px 40px rgba(26,58,42,0.12); }
        @media (max-width: 767px) { .sp-resp-img-wrap { border-radius: 12px; min-height: 260px; } }
        .sp-resp-img-wrap img { width: 100%; height: 100%; min-height: 320px; object-fit: cover; display: block; }
        .sp-means { background: ${C.forest}; color: ${C.cream}; padding: 28px 20px; }
        .sp-means-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; align-items: stretch; }
        @media (min-width: 768px) {
          .sp-means-inner { flex-direction: row; align-items: center; gap: 32px; }
        }
        .sp-means h3 { font-family: 'Playfair Display', serif; font-size: 1.25rem; margin: 0; font-weight: 600; flex-shrink: 0; }
        .sp-means-div { width: 100%; height: 1px; background: rgba(201,169,110,0.25); }
        @media (min-width: 768px) { .sp-means-div { width: 1px; height: 44px; } }
        .sp-chips { display: flex; flex-wrap: wrap; gap: 10px; flex: 1; }
        .sp-chip { border: 1px solid ${C.gold}; color: ${C.gold}; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 8px 14px; border-radius: 999px; }
        .sp-cta { padding: 80px 20px; text-align: center; background: ${C.offWhite}; }
        .sp-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.65rem, 3.5vw, 2.2rem); color: ${C.forest}; margin: 16px auto 14px; max-width: 640px; font-weight: 600; line-height: 1.25; }
        .sp-cta p { font-size: 15px; color: #5a5a54; max-width: 520px; margin: 0 auto 28px; line-height: 1.8; }
        .sp-btn { display: inline-block; background: ${C.forest}; color: ${C.cream}; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; padding: 16px 32px; border-radius: 999px; text-decoration: none; font-weight: 500; border: 1px solid ${C.gold}; transition: background 0.3s, color 0.3s; }
        .sp-btn:hover { background: ${C.gold}; color: ${C.forest}; }
        .sp-footer { background: ${C.footer}; color: ${C.cream}; padding: 36px 20px; }
        .sp-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; align-items: flex-start; }
        @media (min-width: 768px) { .sp-footer-inner { flex-direction: row; justify-content: space-between; align-items: center; } }
        .sp-footer-brand { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.15rem; }
        .sp-footer-links { display: flex; flex-wrap: wrap; gap: 18px; }
        .sp-footer-links a { color: rgba(245,240,232,0.75); text-decoration: none; font-size: 13px; transition: color 0.3s; }
        .sp-footer-links a:hover { color: ${C.gold}; }
        [data-fade] { opacity: 0; transform: translateY(14px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .safari-philosophy-fade-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          [data-fade] { opacity: 1; transform: none; transition: none; }
          .sp-card:hover { transform: none; }
        }
      `}</style>

      <PhilosophyNav locale={locale} />

      <section className="sp-hero" data-fade>
        <div className="sp-hero-bg" aria-hidden>
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600"
            alt=""
            loading="lazy"
          />
          <div className="sp-hero-overlay" />
        </div>
        <div className="sp-hero-inner">
          <div className="sp-eyebrow">
            <span className="sp-eyebrow-line" />
            <span className="sp-eyebrow-text">Philosophy</span>
            <span className="sp-eyebrow-line" />
          </div>
          <h1>
            Designed with Purpose. Delivered with <em>Precision.</em>
          </h1>
          <p className="sp-hero-sub">
            A safari is more than a journey—it is a carefully structured experience that connects people, landscapes, and wildlife in a meaningful way.
          </p>
          <div className="sp-pills">
            {["Intentional Design", "Local Expertise", "Responsible Travel", "Seamless Logistics"].map((t) => (
              <span key={t} className="sp-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ background: C.offWhite }}>
        <h2 className="sp-section-title" data-fade>
          Our Principles
        </h2>
        <div className="sp-grid-2">
          {principleCards.map((c) => (
            <article key={c.n} className="sp-card" data-fade>
              <img className="sp-card-img" src={c.image} alt="" loading="lazy" />
              <div className="sp-card-body">
                <div className="sp-num">{c.n}</div>
                <h3>{c.title}</h3>
                {c.body.map((para, pi) => (
                  <p key={`${c.n}-p-${pi}`}>{para}</p>
                ))}
                {c.bullets && (
                  <ul>
                    {c.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sp-logistics" data-fade>
        <div className="sp-logistics-grid">
          <div className="sp-logistics-visual">
            <img src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900" alt="" loading="lazy" />
            <div className="ovl" aria-hidden />
          </div>
          <div className="sp-logistics-copy">
            <div className="eyebrow sp-eyebrow">
              <span className="sp-eyebrow-line" />
              <span className="sp-eyebrow-text">Integrated Logistics</span>
            </div>
            <h2>Seamless from Arrival to Departure</h2>
            <p>
              A safari involves many moving parts—transport, accommodation, timing, and coordination. We manage it internally so you are never
              juggling disconnected providers.
            </p>
            <div className="sp-row">
              <span className="sp-ring" aria-hidden />
              <div>
                <strong>Responsible travel</strong>
                <span>Efficient routing, compliant vehicles, and partners who share our standards for ecology and community respect.</span>
              </div>
            </div>
            <div className="sp-row">
              <span className="sp-ring" aria-hidden />
              <div>
                <strong>Designed around you</strong>
                <span>Pace, priorities, and group dynamics inform every suggestion—from lodge style to daily rhythm on the ground.</span>
              </div>
            </div>
            <div className="sp-row">
              <span className="sp-ring" aria-hidden />
              <div>
                <strong>The outcome</strong>
                <span>A journey that feels calm, coherent, and intentional—so you stay present for the wildlife and the moments that matter.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-resp">
        <div className="sp-resp-inner">
          <div data-fade>
            <div className="sp-eyebrow" style={{ justifyContent: "flex-start" }}>
              <span className="sp-eyebrow-line" style={{ background: C.gold }} />
              <span className="sp-eyebrow-text">Care &amp; continuity</span>
            </div>
            <h2>Responsible Travel Without Compromise</h2>
            <p>
              We believe sustainability and comfort can coexist. Intentional planning reduces unnecessary driving, honors park rules, and supports
              lodges that reinvest in conservation and local livelihoods.
            </p>
            <ul>
              <li>Efficient routing to reduce unnecessary travel</li>
              <li>Well-maintained, compliant vehicles</li>
              <li>Support for eco-conscious partners</li>
              <li>Respect for local cultures and communities</li>
            </ul>
          </div>
          <div className="sp-resp-img-wrap" data-fade>
            <img src="/images/safariview.png" alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="sp-means" data-fade>
        <div className="sp-means-inner">
          <h3>What this means for you</h3>
          <div className="sp-means-div" aria-hidden />
          <div className="sp-chips">
            {[
              "Better Wildlife Sightings",
              "Less Travel Fatigue",
              "Reliable Logistics",
              "Authentic Local Insight",
              "Eco-Responsible Journey",
            ].map((t) => (
              <span key={t} className="sp-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta" data-fade>
        <div className="sp-eyebrow">
          <span className="sp-eyebrow-line" style={{ background: C.gold }} />
          <span className="sp-eyebrow-text">Begin Your Journey</span>
          <span className="sp-eyebrow-line" style={{ background: C.gold }} />
        </div>
        <h2>Let us design a safari that reflects how you want to experience it.</h2>
        <p>Share your dates, travel style, and priorities—we will build a route and stay mix that fits.</p>
        <Link href={`/${locale}/safaris/contact`} className="sp-btn">
          Request a consultation
        </Link>
      </section>

      <footer className="sp-footer">
        <div className="sp-footer-inner">
          <div className="sp-footer-brand">eawestern</div>
          <div className="sp-footer-links">
            <Link href={`/${locale}/safaris/contact`}>Contact</Link>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
