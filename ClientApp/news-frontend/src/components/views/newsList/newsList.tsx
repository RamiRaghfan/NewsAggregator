import React, { useState, useEffect } from 'react';
import { fetchNews } from '../../services/newsServices';
import { Article } from '../../types/news';
import { NewsDescription, NewsImage, NewsItem, NewsLink, NewsListContainer, NewsTitle, PatternBlock} from './newsList.style';

type NewsListProps = {
  category: string;
  country: string;
  error: string;
  setError: (error: string) => void;
};

const NewsList: React.FC<NewsListProps> = ({country,category, error, setError }) => {
  const [news, setNews] = useState<Article[]>([]);
  
  useEffect(() => {
    const fetchAndSetNews = async () => {
      try {
        const fetchedNews = await fetchNews(country, category); // Example parameters
        setNews(fetchedNews.articles);
      } catch (error) {
        setError('Failed to load news');
      }
    };

    fetchAndSetNews();
  }, [country,category, setError]);

  if (error) return <div>{error}</div>;
  if (!news.length) return <div>Loading...</div>;

  return (
    <NewsListContainer>
      {news.map((article, index) => (
        <NewsItem key={index}>
          <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
            {article.urlToImage ? (
              <NewsImage src={article.urlToImage} alt={article.title} />
            ) : (
              // Render the PatternBlock when there is no image
              <PatternBlock>Article Image Unavailable</PatternBlock>
            )}
          </NewsLink>
          <NewsTitle>{article.title}</NewsTitle>
          <NewsDescription>{article.description}</NewsDescription>
        </NewsItem>
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
