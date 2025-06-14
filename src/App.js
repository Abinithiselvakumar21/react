import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landingpage';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Newsletter from './pages/NewsLetter';
import Footer from './pages/Footer';

function App() {
  return (
    <>
   <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Destinations />
      <Newsletter />
      <Footer />
    </div>
     </>
  );
}

export default App;
