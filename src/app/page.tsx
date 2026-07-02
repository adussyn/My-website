import Image from "next/image";

const navItems = ["Portfolios", "Motion", "Education", "About", "Contact"];

// Each column loops independently at its own speed for a layered,
// parallax-like feel. Content is rendered twice for a seamless loop.
const columns: { photos: string[]; duration: string }[] = [
  {
    photos: ["photo-05.webp", "photo-01.webp", "photo-07.webp", "photo-15.webp"],
    duration: "70s",
  },
  {
    photos: ["photo-08.webp", "photo-10.jpg", "photo-12.webp", "photo-16.webp"],
    duration: "95s",
  },
  {
    photos: ["photo-09.webp", "photo-03.webp", "photo-11.jpg", "photo-18.webp"],
    duration: "80s",
  },
  {
    photos: ["photo-14.webp", "photo-06.webp", "photo-13.jpg", "photo-17.webp"],
    duration: "105s",
  },
];

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-white/70 transition-colors hover:text-white"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d={path} />
      </svg>
    </a>
  );
}

const socials = [
  {
    label: "Facebook",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.12-2.45-.12-2.4 0-4.05 1.46-4.05 4.15v2.32H7.5V13h2.7v8h3.3z",
  },
  {
    label: "Instagram",
    path: "M12 4.3c2.5 0 2.8 0 3.8.06 2.55.11 3.74 1.32 3.85 3.85.05 1 .06 1.28.06 3.79s-.01 2.8-.06 3.79c-.11 2.52-1.3 3.74-3.85 3.85-1 .05-1.3.06-3.8.06s-2.8-.01-3.8-.06c-2.55-.12-3.74-1.34-3.85-3.86-.05-.99-.06-1.28-.06-3.78s.01-2.8.06-3.79C4.46 5.68 5.65 4.47 8.2 4.36c1-.05 1.3-.06 3.8-.06zM12 2.4c-2.55 0-2.87.01-3.87.06-3.4.16-5.3 2.05-5.46 5.46-.05 1-.06 1.32-.06 3.88s.01 2.88.06 3.88c.16 3.4 2.05 5.3 5.46 5.46 1 .05 1.32.06 3.87.06s2.87-.01 3.87-.06c3.4-.16 5.3-2.06 5.46-5.46.05-1 .06-1.32.06-3.88s-.01-2.88-.06-3.88c-.16-3.4-2.05-5.3-5.46-5.46-1-.05-1.32-.06-3.87-.06zm0 4.57a5.03 5.03 0 100 10.06 5.03 5.03 0 000-10.06zm0 8.3a3.27 3.27 0 110-6.54 3.27 3.27 0 010 6.54zm5.23-9.68a1.18 1.18 0 100 2.35 1.18 1.18 0 000-2.35z",
  },
  {
    label: "X",
    path: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.46 21H2.38l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43z",
  },
  {
    label: "YouTube",
    path: "M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 002.42 7.2 26 26 0 002 12a26 26 0 00.42 4.81 2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 001.76-1.77A26 26 0 0022 12a26 26 0 00-.42-4.81zM10 15.13V8.87L15.25 12 10 15.13z",
  },
];

export default function Home() {
  return (
    <div className="relative h-dvh overflow-hidden bg-black">
      {/* Sliding photo collage */}
      <div className="absolute inset-0 flex gap-2 px-2 sm:gap-3 sm:px-3">
        {columns.map((column, i) => (
          <div
            key={i}
            className={`flex-1 overflow-hidden ${i >= 2 ? "hidden sm:block" : ""}`}
          >
            <div
              className="marquee-column flex flex-col gap-2 sm:gap-3"
              style={{ "--marquee-duration": column.duration } as React.CSSProperties}
            >
              {[...column.photos, ...column.photos].map((photo, j) => (
                <div key={j} className="relative w-full shrink-0">
                  <Image
                    src={`/photos/${photo}`}
                    alt=""
                    width={750}
                    height={1125}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    priority={j < 2}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft vignette so type and nav stay legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/50" />

      {/* Top navigation */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-center px-4 py-5">
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:text-white/60 sm:text-[13px] sm:tracking-[0.22em]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute right-5 top-5 hidden items-center gap-4 lg:flex">
          {socials.map((s) => (
            <SocialIcon key={s.label} label={s.label} path={s.path} />
          ))}
        </div>
      </header>

      {/* Centered logotype */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4">
        <h1 className="text-center font-[family-name:var(--font-display)] font-normal leading-[0.82] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
          <span className="block text-[clamp(3.5rem,13vw,11rem)] tracking-[0.04em]">
            YASSYN
          </span>
          <span className="mt-[-0.12em] block text-[clamp(1.9rem,7vw,6rem)] tracking-[0.18em]">
            NIZEYIMANA
          </span>
        </h1>
      </div>
    </div>
  );
}
