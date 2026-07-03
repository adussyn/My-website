"use client";

import Image from "next/image";
import Header from "@/components/Header";

function Field({
  label,
  type = "text",
  required = true,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.15em] text-white/80">
        {label}{" "}
        {required && (
          <span className="normal-case tracking-normal text-white/40">
            (required)
          </span>
        )}
      </span>
      <input
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
      />
    </label>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    path: "M12 4.3c2.5 0 2.8 0 3.8.06 2.55.11 3.74 1.32 3.85 3.85.05 1 .06 1.28.06 3.79s-.01 2.8-.06 3.79c-.11 2.52-1.3 3.74-3.85 3.85-1 .05-1.3.06-3.8.06s-2.8-.01-3.8-.06c-2.55-.12-3.74-1.34-3.85-3.86-.05-.99-.06-1.28-.06-3.78s.01-2.8.06-3.79C4.46 5.68 5.65 4.47 8.2 4.36c1-.05 1.3-.06 3.8-.06zM12 2.4c-2.55 0-2.87.01-3.87.06-3.4.16-5.3 2.05-5.46 5.46-.05 1-.06 1.32-.06 3.88s.01 2.88.06 3.88c.16 3.4 2.05 5.3 5.46 5.46 1 .05 1.32.06 3.87.06s2.87-.01 3.87-.06c3.4-.16 5.3-2.06 5.46-5.46.05-1 .06-1.32.06-3.88s-.01-2.88-.06-3.88c-.16-3.4-2.05-5.3-5.46-5.46-1-.05-1.32-.06-3.87-.06zm0 4.57a5.03 5.03 0 100 10.06 5.03 5.03 0 000-10.06zm0 8.3a3.27 3.27 0 110-6.54 3.27 3.27 0 010 6.54zm5.23-9.68a1.18 1.18 0 100 2.35 1.18 1.18 0 000-2.35z",
  },
  {
    label: "YouTube",
    path: "M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 002.42 7.2 26 26 0 002 12a26 26 0 00.42 4.81 2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 001.76-1.77A26 26 0 0022 12a26 26 0 00-.42-4.81zM10 15.13V8.87L15.25 12 10 15.13z",
  },
  {
    label: "X",
    path: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.46 21H2.38l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43z",
  },
  {
    label: "Facebook",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.12-2.45-.12-2.4 0-4.05 1.46-4.05 4.15v2.32H7.5V13h2.7v8h3.3z",
  },
];

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

const couples = [
  { names: "Kyra + Fabian", photo: "wedding-couple-window-portrait" },
  { names: "Ayman + Umaima", photo: "wedding-ayman-umaima" },
  { names: "Nasra + Egide", photo: "wedding-couple-field-walk" },
  { names: "Jolie + Simon", photo: "wedding-jolie-simon" },
  { names: "Laura + Romano", photo: "wedding-laura-romano" },
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

      {/* Secure your date CTA */}
      <div className="border-t border-white/10 bg-neutral-900 py-16 text-center">
        <a
          href="#contact"
          className="inline-block border border-white/50 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80 transition-colors hover:border-white hover:text-white"
        >
          Secure Your Date
        </a>
      </div>

      {/* Real couples */}
      <div className="border-t border-white/10 px-4 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {couples.map((couple) => (
            <div key={couple.names} className="text-center">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={`/wedding-photos/${couple.photo}.jpg`}
                  alt={couple.names}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover grayscale"
                />
              </div>
              <p className="mt-4 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.1em] text-white">
                {couple.names}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/wedding-photos/wedding-bouquet-detail.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative grid grid-cols-1 gap-16 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-8 lg:px-16">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-white">
              Name
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="First Name" />
              <Field label="Last Name" />
            </div>
            <Field label="Email" type="email" />
            <Field label="Phone" type="tel" />
            <Field label="Wedding Date" type="date" />
            <Field label="Wedding Venue, City, State" />
            <label className="block">
              <span className="text-xs uppercase tracking-[0.15em] text-white/80">
                Leave a message
              </span>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-md border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-full border border-white px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Send
            </button>
          </form>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-[0.15em] text-white sm:text-4xl">
              Contact Us
            </h2>
            <a
              href="mailto:Adussyn@gmail.com"
              className="mt-5 text-sm text-white/70 transition-colors hover:text-white"
            >
              Adussyn@gmail.com
            </a>
            <div className="mt-10 flex items-center gap-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
