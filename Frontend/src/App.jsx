import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Grid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
