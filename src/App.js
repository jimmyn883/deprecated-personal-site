import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import resumeData from './resumeData.json';

export default function App() {

  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Portfolio data={resumeData.portfolio}/>
    </div>
  );
}
