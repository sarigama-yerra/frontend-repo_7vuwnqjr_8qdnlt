import { Rocket, Brain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 sticky top-0 z-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-content-center text-white">
            <Brain className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">
            Creator AI Predictor
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#predict" className="hover:text-slate-900 transition-colors">Predict</a>
          <a href="#insights" className="hover:text-slate-900 transition-colors">Insights</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        </nav>
        <button className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow hover:shadow-md active:scale-[0.99] transition">
          <Rocket className="h-4 w-4" />
          Try it
        </button>
      </div>
    </header>
  );
}
