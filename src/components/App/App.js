import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Stack from "../Stack/Stack";
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="root">
      <div className="page">
        <div className="container">
          <Header />
          <main>
            <Hero />
            <About />
            <Stack />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
