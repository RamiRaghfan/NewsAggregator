import React, { useState, useEffect } from 'react';
import { fetchNews } from '../../services/newsServices';
import { Article } from '../../types/news';
import { NewsListContainer, NewsItem, NewsImage, NewsTitle, NewsDescription } from './newsList.style'; // Updated import

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

  const handleNewsItemClick = (url: string) => {
    window.open(url, '_blank'); // Open the article URL in a new tab
  };

  if (error) return <div>{error}</div>;
  if (!news.length) return <div>Loading...</div>;

  return (
    <NewsListContainer>
      {news.map((article, index) => (
        <NewsItem
          key={index}
          onClick={() => handleNewsItemClick(article.url)}
          style={{ cursor: 'pointer' }} 
        >
          {article.urlToImage && (
            <NewsImage src={article.urlToImage} alt={article.title} />
          )}
          <NewsTitle>{article.title}</NewsTitle>
          <NewsDescription>{article.description}</NewsDescription>
        </NewsItem>
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
