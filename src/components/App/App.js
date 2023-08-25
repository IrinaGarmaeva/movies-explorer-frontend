import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Stack from "../Stack/Stack";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Footer from '../Footer/Footer';

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
            <Student />
            <Portfolio />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
