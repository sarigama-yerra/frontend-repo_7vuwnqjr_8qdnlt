import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PredictForm from "./components/PredictForm";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-indigo-50/40 to-fuchsia-50/40">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PredictForm />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
