import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import NewsList from './components/views/newsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <NewsList/>
      {/* Other components */}
    </div>
  );
};


export default App;
