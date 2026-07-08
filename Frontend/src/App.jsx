import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Sidebar from "./components/Sidebar";
import SortBy from "./components/SortBy";
import "./App.css";
import { useState } from "react";

function App() {
  const [sortBy, setSortBy] = useState("default");

  return (
    <div className="app-root">
      <Navbar />
      <main className="page-layout">
        <aside className="sidebar-column">
          <Sidebar />
        </aside>
        <section className="content-column">
          <SortBy
            sortBy={sortBy}
            setSortBy={setSortBy}/>
          <Grid sortBy={sortBy}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
