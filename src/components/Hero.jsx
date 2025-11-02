import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-400/20 to-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            New: Polished UI kit with Tailwind
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Launch beautiful apps faster.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A modern starter with thoughtfully crafted components, clean aesthetics, and delightful micro‑interactions. Build your next idea without the busywork.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
            >
              Get started for free
            </a>
            <a
              href="#live-demo"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Live demo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {[
              "No setup hassle",
              "Production ready",
              "Loved by builders",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
