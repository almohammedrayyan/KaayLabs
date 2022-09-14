import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './pages/home';
import Header from './pages/header';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
