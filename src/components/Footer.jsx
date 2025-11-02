export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} VibeLaunch. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#privacy" className="transition hover:text-slate-900">Privacy</a>
            <a href="#terms" className="transition hover:text-slate-900">Terms</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
