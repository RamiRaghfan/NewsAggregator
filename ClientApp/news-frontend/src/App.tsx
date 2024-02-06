import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import NewsList from './components/views/newsList/newsList';
import GlobalStyle from './components/themes/GlobalStyle';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <NewsList/>
      {/* Other components */}
    </div>
  );
};


export default App;
