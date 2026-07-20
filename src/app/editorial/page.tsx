import Image from "next/image";
import Header from "@/components/Header";

const galleryPhotos = Array.from(
  { length: 34 },
  (_, i) => `editorial-${String(i + 1).padStart(2, "0")}`
);

export default function Editorial() {
  return (
    <div className="min-h-dvh bg-black">
      <Header active="Portfolios" />

      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/editorial-photos/editorial-01.webp"
          alt="Editorial fashion photography"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start px-6 pb-8 text-left sm:px-16 sm:pb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 sm:text-xs">
            Fashion
          </p>
          <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-2xl uppercase leading-tight tracking-[0.04em] text-white sm:text-4xl">
            Editorial
          </h1>
        </div>
      </div>

      {/* Masonry gallery */}
      <div className="columns-1 gap-3 px-3 py-12 sm:columns-2 sm:gap-4 sm:px-4 sm:py-16 lg:columns-3 xl:columns-4">
        {galleryPhotos.map((photo) => (
          <div
            key={photo}
            className="mb-3 break-inside-avoid overflow-hidden sm:mb-4"
          >
            <Image
              src={`/editorial-photos/${photo}.webp`}
              alt=""
              width={800}
              height={1200}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="border-t border-white/10 bg-neutral-900 py-16 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
          Interested in working together?
        </p>
        <a
          href="mailto:Adussyn@gmail.com"
          className="mt-6 inline-block border border-white/50 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80 transition-colors hover:border-white hover:text-white"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
