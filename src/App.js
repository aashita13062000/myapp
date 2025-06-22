import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; 
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
       <About /> 
       <Projects />
       <Contact />
      <Resume /> 
      <Footer />
    </div>
  );
}

export default App;
