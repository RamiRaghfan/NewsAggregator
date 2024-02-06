import React, { useState } from 'react';
import './App.css';
import NewsList from './components/views/newsList/newsList';
import Navigation from './components/layout/NavigationBar/Navigation';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/themes/themes';
import { GlobalStyle } from './components/themes/GlobalStyle';





const App: React.FC = () => {

  const [theme, setTheme] = useState(lightTheme); // Start with light theme

const toggleTheme = () => {
  theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
};
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <GlobalStyle theme={theme} />
      <Navigation />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NewsList/>
    </div>
    </ThemeProvider>

  );
};


export default App;
