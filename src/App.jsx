import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar/>
      <div className="pt-12">
        <Header/>
        <Hero1/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
