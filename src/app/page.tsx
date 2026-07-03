import Image from "next/image";
import Header from "@/components/Header";

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

      <Header variant="overlay" />

      {/* Centered logotype */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4">
        <Image
          src="/yassyn-logo.png"
          alt="Yassyn Nizeyimana Photography"
          width={1080}
          height={1080}
          priority
          className="w-[clamp(16rem,55vw,34rem)] [filter:drop-shadow(0_2px_30px_rgba(0,0,0,0.45))]"
        />
      </div>
    </div>
  );
}
