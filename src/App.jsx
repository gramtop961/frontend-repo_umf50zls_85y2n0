import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Simple CTA section */}
        <section id="get-started" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to build something great?</h3>
                <p className="mt-2 text-slate-600">
                  Start with a clean, modern foundation and ship your product faster.
                </p>
                <div className="mt-6">
                  <a
                    href="#live-demo"
                    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
                  >
                    Preview the template
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 blur-2xl" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
