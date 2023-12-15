import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* Other components */}
    </div>
  );
};


export default App;
