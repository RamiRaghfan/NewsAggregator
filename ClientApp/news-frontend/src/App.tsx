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


const [category, setCategory] = useState('technology'); // Default category
const [error, setError] = useState('');

const handleCategorySelect = (selectedCategory: string) => {
   setCategory(selectedCategory);
};
return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle theme={theme} />
      <Navigation onCategorySelect={handleCategorySelect} />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NewsList
        category={category} 
        country={'us'} 
        error={error} 
        setError={setError} 
      />
    </div>
  </ThemeProvider>
);

};


export default App;
