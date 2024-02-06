import React, { useState, useEffect } from 'react';
import { fetchNews } from '../../services/newsServices';
import { Article } from '../../types/news';
import { NewsDescription, NewsImage, NewsItem, NewsLink, NewsListContainer, NewsTitle } from './newsList.style';

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
    <NewsListContainer>
      {news.map((article, index) => (
        <NewsItem key={index}>
          <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
            <NewsImage src={article.urlToImage} alt={article.title} />
          </NewsLink>
          <NewsTitle>{article.title}</NewsTitle>
          <NewsDescription>{article.description}</NewsDescription>
          {/* Other content like author and published date can go here */}
        </NewsItem>
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
