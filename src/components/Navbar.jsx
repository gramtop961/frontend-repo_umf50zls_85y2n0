import { Rocket, Star, Shield, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">VibeLaunch</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
            <a href="#faq" className="transition hover:text-slate-900">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:inline-flex">Sign in</button>
            <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              Get started
              <Zap className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
