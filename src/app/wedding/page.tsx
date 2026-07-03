import Image from "next/image";
import Header from "@/components/Header";

const galleryPhotos = [
  "wedding-rings-box",
  "wedding-couple-field-walk",
  "wedding-dress-back-detail",
  "wedding-couple-window-portrait",
  "wedding-aisle-path",
  "wedding-rings-abstract",
  "wedding-couple-portrait-outdoor",
  "wedding-bride-robe-laugh",
  "wedding-champagne-reception",
  "wedding-bride-blue-dress",
  "wedding-couple-kiss-forest",
  "wedding-couple-balloon-silhouette",
  "wedding-party-group",
  "wedding-bride-hallway",
  "wedding-groom-lifting-bride",
  "wedding-bouquet-detail",
  "wedding-rings-golden-light",
  "wedding-groom-carry-bride-field",
  "wedding-makeup-artist-candid",
  "wedding-couple-holding-hands",
  "wedding-dress-beaded-detail",
  "wedding-couple-night-portrait",
  "wedding-aisle-bride-walking",
];

export default function Wedding() {
  return (
    <div className="min-h-dvh bg-black">
      <Header />

      {/* Hero */}
      <div className="relative h-[92vh] w-full overflow-hidden">
        <Image
          src="/wedding-photos/wedding-hero-chateau.jpg"
          alt="Bride and groom at a chateau, reflected in the water"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 sm:text-xs">
            Weddings
          </p>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-3xl uppercase leading-tight tracking-[0.04em] text-white sm:text-5xl">
            Your Wedding, Told As It Truly Felt
          </h1>
          <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-white/70 sm:text-xs">
            Germany &middot; Worldwide
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
          Philosophy
        </p>
        <p className="mt-6 font-[family-name:var(--font-display)] text-xl leading-relaxed text-white/90 sm:text-2xl">
          My approach is rooted in authenticity. I believe that when you are
          asked to pose, you lose the magic of the moment and the essence of
          who you truly are.
        </p>
      </div>

      {/* Masonry gallery */}
      <div className="columns-1 gap-3 px-3 pb-20 sm:columns-2 sm:gap-4 sm:px-4 lg:columns-3 xl:columns-4">
        {galleryPhotos.map((photo) => (
          <div
            key={photo}
            className="mb-3 break-inside-avoid overflow-hidden sm:mb-4"
          >
            <Image
              src={`/wedding-photos/${photo}.jpg`}
              alt=""
              width={800}
              height={1200}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-white/10 px-4 py-20 text-center sm:py-28">
        <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
          Let&apos;s Tell Your Story
        </h2>
        <a
          href="mailto:Adussyn@gmail.com"
          className="mt-8 inline-block rounded-full border border-white px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black sm:text-xs"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
