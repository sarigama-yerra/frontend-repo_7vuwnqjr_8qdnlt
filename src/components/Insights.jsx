import { TrendingUp, Clock, Hash } from "lucide-react";

export default function Insights() {
  const trends = [
    { icon: TrendingUp, title: "Hooks that work", tip: "Start with a bold claim or a surprising stat." },
    { icon: Clock, title: "Best time to post", tip: "Weekdays 8–10am and 5–7pm local time often perform better." },
    { icon: Hash, title: "Hashtag strategy", tip: "Use 1–3 targeted hashtags instead of a long list." },
  ];

  return (
    <section id="insights" className="py-16 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Actionable insights</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Use these patterns to shape your next post. These are based on aggregate performance across platforms.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map(({ icon: Icon, title, tip }) => (
            <div key={title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-700 grid place-content-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-slate-900">{title}</div>
              <div className="text-sm text-slate-600 mt-1">{tip}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
