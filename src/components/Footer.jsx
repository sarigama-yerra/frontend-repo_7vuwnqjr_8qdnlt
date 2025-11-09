export default function Footer() {
  return (
    <footer id="about" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-slate-900 font-semibold">Creator AI Predictor</div>
            <p className="text-sm text-slate-500 mt-1">Predict, iterate, and publish smarter content.</p>
          </div>
          <div className="text-sm text-slate-500">Built with love for creators. No sign-up required.</div>
        </div>
      </div>
    </footer>
  );
}
