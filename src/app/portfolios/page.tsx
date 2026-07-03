"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

type Category = "Fashion" | "Weddings" | "Real Estate";

const filters: Array<Category | "All"> = ["All", "Fashion", "Weddings", "Real Estate"];

const tiles: Array<{
  title: string;
  category: Category;
  photo: string;
}> = [
  { title: "Editorial", category: "Fashion", photo: "photo-01.webp" },
  { title: "Couture", category: "Fashion", photo: "photo-03.webp" },
  { title: "Campaign", category: "Fashion", photo: "photo-05.webp" },
  { title: "Beauty", category: "Fashion", photo: "photo-06.webp" },
  { title: "Night Out", category: "Fashion", photo: "photo-07.webp" },
  { title: "After Party", category: "Fashion", photo: "photo-08.webp" },
  { title: "Street Style", category: "Fashion", photo: "photo-09.webp" },
  { title: "Girls' Night", category: "Fashion", photo: "photo-10.jpg" },
  { title: "Cover Story", category: "Fashion", photo: "photo-11.jpg" },
  { title: "Tailored", category: "Fashion", photo: "photo-12.webp" },
  { title: "Off Duty", category: "Fashion", photo: "photo-13.jpg" },
  { title: "Muse", category: "Fashion", photo: "photo-14.webp" },
  { title: "Tulle", category: "Fashion", photo: "photo-15.webp" },
  { title: "Lookbook", category: "Fashion", photo: "photo-16.webp" },
  { title: "Soirée", category: "Fashion", photo: "photo-17.webp" },
  { title: "Duo", category: "Fashion", photo: "photo-18.webp" },
  { title: "Just Married", category: "Weddings", photo: "photo-02.webp" },
  { title: "Interiors", category: "Real Estate", photo: "photo-04.webp" },
];

export default function Portfolios() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? tiles : tiles.filter((tile) => tile.category === active);

  return (
    <div className="min-h-dvh bg-black">
      <Header active="Portfolios" />

      {/* Category filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 px-4 py-6 sm:gap-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors sm:text-xs ${
              active === filter
                ? "border-white bg-white text-black"
                : "border-white/30 text-white/80 hover:border-white hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((tile) => (
          <a
            key={tile.title}
            href="#"
            className="group relative aspect-4/5 overflow-hidden"
          >
            <Image
              src={`/photos/${tile.photo}`}
              alt={tile.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-white sm:text-3xl">
                {tile.title}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
