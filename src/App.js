import React from 'react';
// import logo from './logo.svg';
import './App.module.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import NewPosition from './components/newPosition/newPosition';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NewPosition />
    </div>
  );
}

export default App;
