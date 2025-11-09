export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Predict what content will perform before you hit publish
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Upload a post idea or paste a caption. Our model scores virality, suggests improvements, and recommends the best time and platform to post.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#predict" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
                Get Predictions
              </a>
              <a href="#insights" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow border border-slate-200 hover:bg-slate-50 transition">
                Explore Insights
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              No login required. Free to try.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/20 border border-slate-200 p-4">
              <div className="h-full w-full rounded-xl bg-white shadow-inner border border-slate-100 p-4">
                <div className="h-4 w-24 rounded bg-indigo-100" />
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="h-24 rounded-lg bg-indigo-50 border border-indigo-100" />
                  <div className="h-24 rounded-lg bg-fuchsia-50 border border-fuchsia-100" />
                  <div className="h-24 rounded-lg bg-blue-50 border border-blue-100" />
                </div>
                <div className="mt-4 h-2 w-2/3 rounded bg-slate-100" />
                <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
