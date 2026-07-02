export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black">
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400/20 via-fuchsia-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <main className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-zinc-400">
          Welcome
        </span>

        <h1 className="text-balance bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
          Hello, I&apos;m Yassyn
        </h1>

        <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

        <p className="max-w-md text-balance text-base text-zinc-500 sm:text-lg">
          This page was crafted to test a single premium Next.js page.
        </p>
      </main>
    </div>
  );
}
