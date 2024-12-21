import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar'; // Add Navbar
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
