import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

export default function PredictForm() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      // For now, no backend route is guaranteed in this task. We'll simulate a quick client-side score.
      // If a backend is added later, swap this fetch call accordingly:
      // const res = await fetch(`${backend}/predict`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text })});
      // const data = await res.json(); setResult(data)

      await new Promise((r) => setTimeout(r, 900));
      const score = Math.min(100, Math.max(1, Math.round((text.length % 100) || 42)));
      const sentiment = score > 66 ? "High" : score > 33 ? "Medium" : "Low";
      const tips = [
        "Open with a strong hook in the first 2 seconds.",
        "Use numbers and outcomes (e.g., '3 ways to...').",
        "Tighten your call-to-action and add one hashtag.",
      ];
      setResult({ score, sentiment, tips });
    } catch (e) {
      setResult({ error: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="predict" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Get a prediction</h2>
        <p className="mt-2 text-slate-600">Paste your caption or post idea. We’ll score its potential and share quick fixes.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write or paste your content here..."
            className="w-full h-36 rounded-xl border border-slate-200 bg-white p-4 outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 placeholder:text-slate-400"
          />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Scoring...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Predict Performance
                </>
              )}
            </button>
            <span className="text-sm text-slate-500">No data stored. Client-side demo.</span>
          </div>
        </form>

        {result && (
          <div className="mt-6 rounded-xl border border-slate-200 p-5 bg-gradient-to-br from-slate-50 to-white">
            {result.error ? (
              <p className="text-red-600">{result.error}</p>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">Predicted Score</div>
                  <div className="text-2xl font-bold text-slate-900">{result.score}/100</div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      result.score > 66 ? "bg-green-500" : result.score > 33 ? "bg-amber-500" : "bg-rose-500"
                    }`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>
                <div className="text-sm text-slate-600">Confidence: {result.sentiment}</div>
                <div>
                  <div className="text-sm font-medium text-slate-900 mb-2">Quick Tips</div>
                  <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    {result.tips?.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
