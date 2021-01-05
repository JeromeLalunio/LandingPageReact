import './App.css';

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Welcome />
      <About />
      <Products />
      <Testimonials />
      <Services />
      <Contact />

    </div>
  );
}

export default App;
