import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation.js';
import Header from './components/header.js';
import Section from './components/section.js';
import Footer from './components/footer.js';
import React,{ useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar count={count} />
      <Header/>
      <Section count={count} setCount={setCount}/>
      <Footer/>
    </div>
  );
}

export default App;
