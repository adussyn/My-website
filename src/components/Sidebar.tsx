"use client";

import Link from "next/link";
import { useState } from "react";

const portfolioItems = [
  "Editorial Beauty",
  "Glamour",
  "Natural Beauty",
  "Fashion I",
  "Fashion II",
  "Hair",
  "Lifestyle",
  "Advertising",
  "Motion",
];

const topLevelItems = ["Education", "About", "Contact"];

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const [portfoliosOpen, setPortfoliosOpen] = useState(false);

  return (
    <ul className="flex flex-col gap-3">
      <li>
        <button
          type="button"
          onClick={() => setPortfoliosOpen(!portfoliosOpen)}
          className="group flex items-center gap-1.5 text-[13px] font-normal uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:text-[rgb(241,33,57)]"
        >
          Portfolios
          <svg
            className={`h-2.5 w-2.5 transition-transform ${portfoliosOpen ? "rotate-180" : ""}`}
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {portfoliosOpen && (
          <ul className="mt-3 flex flex-col gap-2.5 border-l border-neutral-200 pl-4">
            {portfolioItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={onNavigate}
                  className="text-[12px] font-light uppercase tracking-[0.15em] text-neutral-500 transition-colors hover:text-[rgb(241,33,57)]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
      {topLevelItems.map((item) => (
        <li key={item}>
          <a
            href="#"
            onClick={onNavigate}
            className="text-[13px] font-normal uppercase tracking-[0.18em] text-neutral-800 transition-colors hover:text-[rgb(241,33,57)]"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Logo() {
  return (
    <Link href="/" className="block">
      <span className="font-[family-name:var(--font-script)] text-5xl leading-none text-neutral-900">
        Yassyn
      </span>
      <span className="mt-3 block text-[10px] font-light uppercase tracking-[0.35em] text-neutral-500">
        Fashion &amp; Beauty
      </span>
    </Link>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-[300px] flex-col overflow-y-auto bg-white px-12 py-14 lg:flex">
        <Logo />
        <nav className="mt-14" aria-label="Main">
          <NavList />
        </nav>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/95 px-6 py-4 backdrop-blur lg:hidden">
        <Link href="/" className="font-[family-name:var(--font-script)] text-3xl text-neutral-900">
          Yassyn
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-px w-6 bg-neutral-900 transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-neutral-900 transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </header>
      {mobileOpen && (
        <nav
          className="fixed inset-x-0 top-[65px] z-20 border-b border-neutral-100 bg-white px-8 py-8 lg:hidden"
          aria-label="Main"
        >
          <NavList onNavigate={() => setMobileOpen(false)} />
        </nav>
      )}
    </>
  );
}
