import Image from "next/image";
import Sidebar from "@/components/Sidebar";

// Column assignment mirrors a masonry layout: three independent stacks.
const columns = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
];

function photoSrc(n: number) {
  return `/photos/photo-${String(n).padStart(2, "0")}.svg`;
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Sidebar />

      <main className="flex-1 px-4 py-6 sm:px-6 lg:ml-[300px] lg:px-10 lg:py-14">
        <h1 className="sr-only">Yassyn | Fashion &amp; Beauty Photographer</h1>

        <div className="mx-auto flex max-w-[1400px] gap-2.5">
          {columns.map((column, i) => (
            <div key={i} className="flex flex-1 flex-col gap-2.5">
              {column.map((n) => (
                <a
                  key={n}
                  href="#"
                  className="group relative block overflow-hidden"
                >
                  <Image
                    src={photoSrc(n)}
                    alt={`Portfolio placeholder ${n}`}
                    width={534}
                    height={800}
                    className="h-auto w-full transition-opacity duration-300 group-hover:opacity-85"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          ))}
        </div>

        <footer className="mt-16 pb-4 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.25em] text-neutral-400">
            &copy;2026 Yassyn Photography
          </p>
        </footer>
      </main>
    </div>
  );
}
