import { Shield, Zap, Rocket, Star } from "lucide-react";

const features = [
  {
    title: "Blazing Fast",
    description:
      "Vite-powered dev environment and optimized builds so you can move from idea to prototype in minutes.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Secure by Default",
    description:
      "Sensibly structured patterns and best practices that keep your app robust and maintainable.",
    icon: Shield,
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Beautiful UI",
    description:
      "Elegant components and typography out of the box, powered by Tailwind and modern design tokens.",
    icon: Star,
    color: "from-indigo-400 to-violet-500",
  },
  {
    title: "Launch Ready",
    description:
      "Deploy with confidence. The stack is production‑friendly and scales with your product.",
    icon: Rocket,
    color: "from-pink-400 to-fuchsia-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Craft. Ship. Delight.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Everything you need to hit the ground running and build delightful experiences.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr ${color} text-white shadow` }>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-slate-100 to-white opacity-0 blur-xl transition group-hover:opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
