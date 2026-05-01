"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { Route, ShieldCheck, Award } from "lucide-react";

/** Refs run before useEffect; observer must exist when nodes register — useLayoutEffect + Set. */
function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pendingRef = useRef(new Set<HTMLDivElement>());

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 12% 0px" }
    );
    observerRef.current = observer;
    pendingRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      observerRef.current = null;
      pendingRef.current.clear();
    };
  }, []);

  return useCallback((node: HTMLDivElement | null) => {
    if (node) {
      pendingRef.current.add(node);
      observerRef.current?.observe(node);
    }
  }, []);
}

export default function About() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";
  const revealRef = useScrollReveal();

  const leadership = [
    {
      initials: "JM",
      name: "James Mwangi",
      title: "Chief Executive Officer",
      bio: "Leading eawestern's vision across all service divisions.",
    },
    {
      initials: "AK",
      name: "Amina Kamau",
      title: "Head of Insurance",
      bio: "ICPAK-certified with 15 years in risk management.",
    },
    {
      initials: "DO",
      name: "David Ochieng",
      title: "Safari Operations Director",
      bio: "Expert in East African wildlife and luxury travel.",
    },
    {
      initials: "FW",
      name: "Faith Wanjiku",
      title: "Automotive Division Lead",
      bio: "Overseeing our growing fleet and leasing portfolio.",
    },
  ];

  const values = [
    {
      title: "Integrity",
      body: "We keep our promises — every time, no exceptions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L5 6V11C5 16 8.4 20.7 12 22C15.6 20.7 19 16 19 11V6L12 3Z" stroke="var(--color-gold)" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      body: "Quality service delivered with precision and care.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z" stroke="var(--color-gold)" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Safety",
      body: "Your security and peace of mind come first.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="11" width="12" height="9" rx="2" stroke="var(--color-gold)" strokeWidth="1.8" />
          <path d="M9 11V8.5C9 6.6 10.6 5 12.5 5C14.4 5 16 6.6 16 8.5V11" stroke="var(--color-gold)" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Customer Care",
      body: "We serve with heart — going beyond the transaction to build lasting relationships with every client.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 20C9 17.4 5 14.7 5 10.8C5 8.7 6.7 7 8.8 7C10.1 7 11.3 7.7 12 8.8C12.7 7.7 13.9 7 15.2 7C17.3 7 19 8.7 19 10.8C19 14.7 15 17.4 12 20Z" stroke="var(--color-gold)" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Reliability",
      body: "We deliver what we say we will — on time, every time, across all our service areas.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="var(--color-gold)" strokeWidth="1.8" />
          <path d="M8.8 12.2L10.9 14.3L15.3 9.9" stroke="var(--color-gold)" strokeWidth="1.8" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="ew-about-root font-sans antialiased"
      style={{
        backgroundColor: "#0D1F2D",
        color: "#FFFFFF",
        ["--ew-navy" as string]: "#0D1F2D",
        ["--ew-navy-mid" as string]: "#142535",
        ["--ew-navy-light" as string]: "#1C3347",
        ["--ew-gold" as string]: "var(--color-gold)",
        ["--ew-gold-light" as string]: "var(--color-gold-light)",
        ["--ew-white" as string]: "#FFFFFF",
        ["--ew-muted" as string]: "rgba(255,255,255,0.65)",
        ["--ew-border" as string]: "rgba(255,255,255,0.1)",
        ["--ew-section-pad" as string]: "92px",
      }}
    >
      <NavBar locale={locale} />

      <main style={{ paddingTop: "82px" }}>
        <HeroSlider locale={locale} variant="about" pauseOnHover={false} />

        <section className="ew-section" style={{ background: "#0D1F2D" }}>
          <div ref={revealRef} className="reveal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <div className="ew-story-grid" style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: "36px", alignItems: "start" }}>
              <div>
                <p style={{ color: "var(--color-gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>Our Story</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", color: "#FFFFFF", marginBottom: "16px", fontWeight: 400 }}>The eawestern story</h2>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "22px", color: "var(--color-gold)", marginBottom: "26px" }}>
                  Your Trusted Partner in Travel, Car Hire & Insurance
                </p>
                {[
                  "At eawestern, we believe every journey deserves confidence — whether you're exploring East Africa's wild beauty, protecting what matters most, or simply getting where you need to go.",
                  "We began with one mission: to make travel, insurance, and mobility effortless for everyone. Today, we connect adventurers, families, and businesses to trusted experiences and reliable solutions across the region.",
                  "Rooted in local expertise and guided by global standards, we've earned a reputation for transparency, reliability, and personal care. From tailor-made safaris to car rentals and insurance support.",
                ].map((text) => (
                  <p key={text} style={{ paddingLeft: "20px", borderLeft: "3px solid var(--color-gold)", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
                    {text}
                  </p>
                ))}
              </div>
              <div style={{ border: "2px solid var(--color-gold)", padding: "3px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", marginBottom: "3px" }}>
                  <div className="ew-story-tile" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <img
                      src="/images/maasai.jpg"
                      alt="Safari experience"
                      className="ew-story-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                    />
                  </div>
                  <div className="ew-story-tile" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <img
                      src="/images/carCard2.png"
                      alt="Car hire experience"
                      className="ew-story-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                    />
                  </div>
                </div>
                <div className="ew-story-tile" style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <img
                    src="/images/fam.png"
                    alt="Insurance family"
                    className="ew-story-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ew-section" style={{ background: "#142535", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-gold) 8%, transparent), color-mix(in srgb, var(--color-gold) 8%, transparent) 2px, transparent 2px, transparent 18px)" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,31,45,0.85)" }} />
          <div ref={revealRef} className="reveal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <p style={{ color: "var(--color-gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center", marginBottom: "18px" }}>Our Philosophy</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", textAlign: "center", marginBottom: "22px", fontWeight: 400 }}>
              Your <span style={{ color: "var(--color-gold)" }}>Confidence</span> is Our <span style={{ color: "var(--color-gold)" }}>Currency</span>.
            </h2>
            <p style={{ maxWidth: "680px", margin: "0 auto 42px", textAlign: "center", fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
              We built eawestern to be the single point of accountability for your most critical needs. Every service — Tours, Insurance, Car Hire — is a pillar of our commitment to your Confidence. This isn't just cross-selling; it's a strategic, integrated model.
            </p>
            <div className="ew-philosophy-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
              {[
                { t: "A-to-Z Logistics", d: "Total control over the traveler's experience.", icon: Route },
                { t: "Risk Mitigation", d: "Every service benefits from the deep risk knowledge of our insurance division.", icon: ShieldCheck },
                { t: "Unwavering Support", d: "A single, dedicated team answers your call, whether you're stranded on a safari road or filing a complex claim.", icon: Award },
              ].map((card) => {
                const Icon = card.icon;
                return (
                <div key={card.t} className="ew-philosophy-pillar" style={{ background: "#0F2A3D", border: "1px solid rgba(255,255,255,0.06)", padding: "42px 30px", textAlign: "center" }}>
                  <div style={{ width: "64px", height: "64px", margin: "0 auto 26px", border: "1px solid color-mix(in srgb, var(--color-gold) 20%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-gold)" }}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-playfair text-[26px] font-semibold leading-snug md:text-[30px]" style={{ marginBottom: "12px" }}>
                    {card.t}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.85] text-white/70">{card.d}</p>
                </div>
              )})}
            </div>
          </div>
        </section>

        <section className="ew-section" style={{ background: "#0D1F2D" }}>
          <div ref={revealRef} className="reveal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ color: "var(--color-gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px", textAlign: "center" }}>What Sets Us Apart</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", textAlign: "center", marginBottom: "38px", fontWeight: 400 }}>
              The eawestern <span style={{ color: "var(--color-gold)" }}>Pillars of Trust</span>
            </h2>
            <div className="ew-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {[
                {
                  title: "Integrated Local Expertise",
                  img: "/images/card1.png",
                  body: "Our team combines F&B (Travel), Finance (Insurance), and Logistics (Car Hire) experts — all locally fluent — to give you an advantage no single-service company can match.",
                },
                {
                  title: "Proactive Claims & Support",
                  img: "/images/card2.png",
                  body: "When others stall, we advocate. We see our role as actively securing your peace of mind, not passively providing a service.",
                },
                {
                  title: "Commitment to East Africa",
                  img: "/images/card3.png",
                  body: "We are a licensed Kenyan company, deeply invested in sustainable tourism, community support, and providing local employment.",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="ew-pillar-card"
                  style={{
                    background: "#0F2A3D",
                    color: "#FFFFFF",
                    padding: "26px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    boxShadow: "none",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "18px",
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <h3
                      className="font-playfair font-semibold tracking-tight text-white md:text-[34px] text-[28px]"
                      style={{ marginBottom: "14px", lineHeight: 1.2 }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-[15px] font-normal leading-[1.8] text-white/70">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ew-section" style={{ background: "#0D1F2D" }}>
          <div ref={revealRef} className="reveal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ color: "var(--color-gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center", marginBottom: "12px" }}>Our Core Values</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", textAlign: "center", marginBottom: "38px", fontWeight: 400 }}>
              How We Deliver <span style={{ color: "var(--color-gold)" }}>Value</span>
            </h2>
            <div className="ew-values-top" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px", marginBottom: "22px" }}>
              {values.slice(0, 3).map((v) => (
                <div key={v.title} className="ew-value-card" style={{ background: "#0F2A3D", border: "1px solid rgba(255,255,255,0.06)", padding: "44px 34px", textAlign: "center", transition: "all 0.3s ease" }}>
                  <div style={{ width: "70px", height: "70px", border: "1px solid color-mix(in srgb, var(--color-gold) 22%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--color-gold)" }}>
                    {v.icon}
                  </div>
                  <h3 className="font-playfair text-[26px] font-semibold leading-snug md:text-[30px]" style={{ marginBottom: "14px" }}>
                    {v.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.9] text-white/60">{v.body}</p>
                </div>
              ))}
            </div>
            <div className="ew-values-bottom" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px" }}>
              {values.slice(3).map((v) => (
                <div key={v.title} className="ew-value-card" style={{ background: "#0F2A3D", border: "1px solid rgba(255,255,255,0.06)", padding: "44px 34px", textAlign: "center", transition: "all 0.3s ease" }}>
                  <div style={{ width: "70px", height: "70px", border: "1px solid color-mix(in srgb, var(--color-gold) 22%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--color-gold)" }}>
                    {v.icon}
                  </div>
                  <h3 className="font-playfair text-[26px] font-semibold leading-snug md:text-[30px]" style={{ marginBottom: "14px" }}>
                    {v.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.9] text-white/60">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ew-section" style={{ background: "#142535", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--color-gold) 8%, transparent), transparent 50%), radial-gradient(circle at 80% 80%, color-mix(in srgb, var(--color-gold) 6%, transparent), transparent 50%)" }} />
          <div ref={revealRef} className="reveal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <div className="ew-why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "center" }}>
              <div>
                <p style={{ color: "var(--color-gold)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "12px" }}>Our Home</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", marginBottom: "16px", fontWeight: 400 }}>Deeply Rooted in East Africa</h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.8, marginBottom: "14px" }}>
                  East Africa is not just where we operate — it's who we are. From the Maasai Mara to the Nairobi CBD, from Mombasa's coast to Mount Kilimanjaro, we know this region intimately.
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
                  Our local expertise means faster claims, better safari routes, more reliable vehicles, and partners who genuinely understand your needs.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {["Nairobi, Kenya", "Mombasa", "East Africa Region"].map((pill) => (
                    <span key={pill} style={{ border: "1px solid var(--color-gold)", color: "var(--color-gold)", fontSize: "12px", padding: "6px 16px", borderRadius: "20px" }}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ height: "400px", background: "#1C3347", border: "1px solid rgba(255,255,255,0.12)", position: "relative", overflow: "hidden" }}>
                <img
                  src="/images/map.png"
                  alt="East Africa region map"
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.95 }}
                />
                <span style={{ position: "absolute", left: "52.5%", top: "47.5%", width: "10px", height: "10px", borderRadius: "999px", background: "var(--color-gold)", boxShadow: "0 0 0 4px color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
                <span style={{ position: "absolute", left: "58.1%", top: "62.2%", width: "10px", height: "10px", borderRadius: "999px", background: "var(--color-gold)", boxShadow: "0 0 0 4px color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
                <span style={{ position: "absolute", left: "45.8%", top: "55.8%", width: "10px", height: "10px", borderRadius: "999px", background: "var(--color-gold)", boxShadow: "0 0 0 4px color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="ew-section" style={{ background: "#0D1F2D", borderTop: "1px solid color-mix(in srgb, var(--color-gold) 10%, transparent)" }}>
          <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.12)", background: "linear-gradient(180deg, #12283B 0%, #102437 100%)", padding: "72px 40px", textAlign: "center" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: 1.15, marginBottom: "18px", fontWeight: 400 }}>
                Ready to Experience the <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>eawestern difference?</span>
              </h2>
              <div style={{ width: "86px", height: "2px", background: "var(--color-gold)", margin: "0 auto 26px" }} />
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "17px", lineHeight: 1.85, maxWidth: "760px", margin: "0 auto 40px" }}>
                Join the thousands of clients who choose guaranteed excellence over settling for less. Our experts craft your next adventure, secure your legacy, and manage every detail of your travel or corporate logistics.
              </p>
              <Link
                href={`/${locale}/contact`}
                style={{
                  background: "linear-gradient(90deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
                  color: "#0D1F2D",
                  padding: "16px 34px",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                Contact Us Today →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
        .ew-value-card:hover {
          border-color: color-mix(in srgb, var(--color-gold) 30%, transparent) !important;
          background: color-mix(in srgb, #0F2A3D 85%, var(--color-gold) 15%) !important;
        }
        .ew-section {
          padding: var(--ew-section-pad) 0 !important;
        }
        .ew-hero-tile-image {
          opacity: 1;
          filter: none;
          transform: scale(1);
          transition: transform 900ms ease;
        }
        .ew-hero-tile:hover .ew-hero-tile-image {
          transform: scale(1.04);
        }
        .ew-hero-tile:hover .ew-hero-tile-label {
          color: rgba(255,255,255,0.72) !important;
        }
        .ew-story-img {
          filter: none;
          transform: scale(1);
          transition: transform 900ms ease;
        }
        .ew-story-tile:hover .ew-story-img {
          transform: scale(1.04);
        }
        .ew-pillar-card:hover .ew-pillar-bg {
          opacity: 0.32 !important;
          filter: grayscale(0%) !important;
          transform: scale(1.02) !important;
        }
        @media (max-width: 1024px) {
          .ew-hero { grid-template-columns: 1fr !important; }
          .ew-hero-photos { display: none !important; }
          .ew-story-grid { grid-template-columns: 1fr !important; }
          .ew-philosophy-grid { grid-template-columns: 1fr !important; }
          .ew-pillars { grid-template-columns: 1fr !important; }
          .ew-team-grid { grid-template-columns: 1fr 1fr !important; }
          .ew-values-top { grid-template-columns: 1fr !important; }
          .ew-values-bottom { grid-template-columns: 1fr !important; }
          .ew-credentials { grid-template-columns: 1fr !important; }
          .ew-testimonials { grid-template-columns: 1fr !important; }
          .ew-why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .ew-about-root { --ew-section-pad: 72px; }
          .ew-hero-left { padding: 100px 24px 60px !important; }
          .ew-stats-row { flex-wrap: wrap; gap: 24px !important; }
          .ew-team-grid { grid-template-columns: 1fr !important; }
          .ew-philosophy-pillar { padding: 32px 22px !important; }
        }
        @media (max-width: 640px) {
          .ew-philosophy-grid { gap: 14px !important; }
          .ew-philosophy-pillar h3 { font-size: 24px !important; line-height: 1.2 !important; }
          .ew-pillar-card h3 { font-size: 22px !important; line-height: 1.25 !important; }
          .ew-value-card h3 { font-size: 22px !important; line-height: 1.25 !important; }
          .ew-story-grid h2 { font-size: 28px !important; }
          .ew-why-grid h2 { font-size: 28px !important; }
        }
      `}</style>
    </div>
  );
}

