import { useEffect } from "react";
import { ArrowDown, CalendarDays, DollarSign, ExternalLink, Flame, Users, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export default function SunnyBinjolaSite() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = "auto";
      }
    };
  }, []);

  // Dev-time sanity checks (lightweight tests)
  useEffect(() => {
    const isProd = (import.meta?.env?.MODE) === "production";
    if (isProd || typeof window === "undefined") return;
    setTimeout(() => {
      const header = document.querySelector("header.sticky");
      console.assert(!!header, "[TEST] header renders");
      ["#coaching", "#mens-circle", "#anger", "#about"].forEach(sel => {
        const el = document.querySelector(sel);
        console.assert(!!el, `[TEST] section exists: ${sel}`);
      });
      const coachingImg = document.querySelector('#coaching img');
      const mensImg = document.querySelector('#mens-circle img');
      const angerImg = document.querySelector('#anger img');
      console.assert(coachingImg?.src.includes('image02'), '[TEST] coaching uses image02');
      console.assert(mensImg?.src.includes('image03'), '[TEST] mens uses image03');
      console.assert(angerImg?.src.includes('image01'), '[TEST] anger uses image01');
    }, 0);
  }, []);

  const links = {
    calendly: "https://calendly.com/sunnybinjola/discovery-call",
    stripeFull: "https://buy.stripe.com/5kQ00ja8A0152Fk0HE9oc00",
    stripeInstallments: "https://buy.stripe.com/bJe9ATcgI7txa7M2PM9oc01",
    instagram: "https://instagram.com/sunnybinjola",
    facebook: "https://facebook.com/sunnybinjola",
    youtube: "https://youtube.com/@sunnybinjola",
    x: "https://x.com/sunnybinjola",
    blog: "https://sunnys-newsletter.beehiiv.com/", // external Beehiiv site
    beehiivSite: "https://sunnys-newsletter.beehiiv.com/",
    beehiivSubscribe: "https://sunnys-newsletter.beehiiv.com/subscribe",
  };

  const images = {
    background: "https://sunnybinjola.carrd.co/assets/images/bg.jpg?v=dc89ff31",
    coaching: "https://sunnybinjola.carrd.co/assets/images/image01.jpg?v=dc89ff31", // 1:1 Coaching now uses image01
    mens: "https://sunnybinjola.carrd.co/assets/images/image03.jpg?v=dc89ff31",     // Men's Circle stays the same
    anger: "https://sunnybinjola.carrd.co/assets/images/image02.jpg?v=dc89ff31",    // Anger Workshops now uses image02
  };

  return (
    <div className="min-h-screen text-neutral-100 selection:bg-amber-200/40 relative">
      {/* Global background image across entire page with overlay BEHIND content */}
      <div className="fixed inset-0 -z-10">
        <img src={images.background} alt="Background" className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-neutral-950/40"/>
      </div>

      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-transparent">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-black tracking-[0.2em] text-sm sm:text-base drop-shadow-md">
            SUNNY BINJOLA
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-100 drop-shadow-md">
            <a href="#coaching" className="hover:text-white">1:1 Coaching</a>
            <a href="#mens-circle" className="hover:text-white">Men's Circle</a>
            <a href="#anger" className="hover:text-white">Anger Workshops</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href={links.blog} target="_blank" rel="noreferrer" className="hover:text-white">Blog</a>
            <a href={links.calendly} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-1.5 hover:bg-white/5">
              <CalendarDays className="h-4 w-4"/>
              Book a free call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.08em] text-center leading-tight drop-shadow-lg">
            <span className="block">FEEL DEEPLY. LEAD TRUTHFULLY.</span>
            <span className="block">LIVE FULLY AWAKE.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-neutral-100 text-base sm:text-lg leading-relaxed mx-auto text-center drop-shadow-md">
            I guide men and women through transformational work— from emotional alchemy and
            purpose activation to systems, money, and masculine embodiment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={links.calendly} className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:opacity-90 whitespace-nowrap">
              <CalendarDays className="h-5 w-5" /> BOOK A FREE CALL
            </a>
            <a href="#coaching" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">
              <ArrowDown className="h-5 w-5" /> Learn more
            </a>
          </div>
        </div>
      </section>

      {/* 1:1 Coaching */}
      <section id="coaching" className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-neutral-100 mb-2 drop-shadow-md">EMBODIMENT. STRUCTURE. PURPOSE. PEACE</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold drop-shadow-md">1:1 Coaching</h2>
            <p className="mt-4 text-neutral-100 leading-relaxed drop-shadow-md">
              Coaching is a mix of deep presence and disciplined action. We’ll work on:
            </p>
            <ul className="mt-6 space-y-3 text-neutral-100">
              {[
                "Nervous system training",
                "Masculine/feminine integration",
                "Heartbreak and grief recovery",
                "Relational dynamics & boundaries",
                "Purpose, structure & accountability",
                "Financial healing & money confidence",
                "Daily discipline + systems that serve your soul",
              ].map((item) => (
                <li key={item} className="flex gap-3 drop-shadow-sm">
                  <span className="h-6 w-6 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                    <ExternalLink className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <div>
                <a href={links.calendly} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:opacity-90 whitespace-nowrap">
                  <CalendarDays className="h-4 w-4"/> APPLY FOR COACHING
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={links.stripeFull} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 hover:bg-white/5 whitespace-nowrap">
                  <DollarSign className="h-4 w-4"/> Pay in Full
                </a>
                <a href={links.stripeInstallments} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 hover:bg-white/5 whitespace-nowrap">
                  <DollarSign className="h-4 w-4"/> Pay in Installments
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={images.coaching} alt="1:1 Coaching" className="w-full rounded-3xl border border-white/10 shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* Men's Circle */}
      <section id="mens-circle" className="py-14 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={images.mens} alt="Men's Circle" className="w-full rounded-3xl border border-white/10 shadow-2xl"/>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-100 drop-shadow-md">
              <Users className="h-3.5 w-3.5"/> THURSDAY 4–6 PM PST
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold drop-shadow-md">MONTHLY MEN'S CIRCLE</h2>
            <p className="mt-4 text-neutral-100 leading-relaxed drop-shadow-md">
              A space for honest reflection, breath, challenge, and brotherhood.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={links.calendly} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:opacity-90">
                <Users className="h-4 w-4"/> Join the Circle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Anger Workshops */}
      <section id="anger" className="py-14 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-100 drop-shadow-md">
              <Flame className="h-3.5 w-3.5"/> Anger Alchemy: Transform Fire into Fuel
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold drop-shadow-md">ANGER WORKSHOPS</h2>
            <p className="mt-4 text-neutral-100 leading-relaxed drop-shadow-md">
              These workshops create a safe, somatic space to access and move rage, grief, and stuck emotion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={links.calendly} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:opacity-90">
                <CalendarDays className="h-4 w-4"/> Sign Up for the Next Workshop
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={images.anger} alt="Anger Workshops" className="w-full rounded-3xl border border-white/10 shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold drop-shadow-md">About</h2>
          <p className="mt-4 text-neutral-100 leading-relaxed drop-shadow-md">
            I’m Sunny. I hold space for what's real. I support individuals on their path to deeper emotional
            integrity, spiritual growth, and practical life mastery. I’ve helped people heal heartbreak, build
            discipline, and lead with clarity in life, love, and work.
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-neutral-900/60 p-6 drop-shadow-md">
            <h3 className="text-lg font-semibold">Stay in touch</h3>
            <p className="mt-2 text-neutral-100">Prefer email? Book a 15‑min discovery call or read my newsletter.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={links.calendly} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:opacity-90">
                <CalendarDays className="h-4 w-4"/> Book a free call
              </a>
              <a href={links.beehiivSite} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 hover:bg-white/5">
                View newsletter
              </a>
              <a href={links.beehiivSubscribe} className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:opacity-90">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative drop-shadow-md">
          <p className="text-sm text-neutral-100">© {new Date().getFullYear()} SUNNY BINJOLA</p>
          <div className="flex items-center gap-4 text-neutral-100">
            <a aria-label="Instagram" href={links.instagram} target="_blank" rel="noreferrer" className="hover:text-white"><Instagram className="h-5 w-5"/></a>
            <a aria-label="Facebook" href={links.facebook} target="_blank" rel="noreferrer" className="hover:text-white"><Facebook className="h-5 w-5"/></a>
            <a aria-label="YouTube" href={links.youtube} target="_blank" rel="noreferrer" className="hover:text-white"><Youtube className="h-5 w-5"/></a>
            <a aria-label="X (Twitter)" href={links.x} target="_blank" rel="noreferrer" className="hover:text-white"><Twitter className="h-5 w-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

