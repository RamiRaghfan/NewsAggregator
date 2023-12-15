import React, { useState, useEffect } from 'react';
import { fetchNews } from '../services/newsServices';
import { Article } from '../types/news';

const NewsList: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAndSetNews = async () => {
      try {
        const fetchedNews = await fetchNews('us', 'technology'); // Example parameters
        setNews(fetchedNews.articles);
      } catch (error) {
        setError('Failed to load news');
      }
    };

    fetchAndSetNews();
  }, []);

  if (error) return <div>{error}</div>;
  if (!news.length) return <div>Loading...</div>;

  return (
    <ul>
      {news.map((article, index) => (
        <li key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/*TODO ADD IMAGES AND STYLING*/}
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
