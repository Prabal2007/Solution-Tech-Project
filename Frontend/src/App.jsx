import { useState } from 'react'
import hero from './assets/hero.png'
import Navbar from './components/navbar'
import Footer from './components/footer'
import grid from './components/grid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <div className="cards">
        <Card
          percent={65}
          cost={3000}
          title="Handmade Dhokra Craft Horse Katora"
          link={hero}
        />
      </div> */}
      <grid/>
      <Footer />
    </>
  );
}

export default App;