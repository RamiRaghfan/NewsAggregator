import React, { useState, useEffect } from 'react';
import { fetchNews } from '../../services/newsServices';
import { Article } from '../../types/news';
import {
  NewsDescription, NewsImage, NewsItem, NewsLink, NewsListContainer,
  NewsTitle, PatternBlock, SkeletonWrapper, SkeletonItem, SkeletonImage, SkeletonText, SkeletonParagraph
} from './newsList.style';

type NewsListProps = {
  category: string;
  country: string;
  error: string;
  setError: (error: string) => void;
};

const NewsList: React.FC<NewsListProps> = ({ country, category, error, setError }) => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAndSetNews = async () => {
      try {
        const fetchedNews = await fetchNews(country, category);
        setNews(fetchedNews.articles);
        setLoading(false);
      } catch (error) {
        setError('Failed to load news');
        setLoading(false);
      }
    };

    fetchAndSetNews();
  }, [country, category, setError]);

  if (error) return <div>{error}</div>;

  return (
    <NewsListContainer>
      {loading ? (
        Array.from({ length: 25 }).map((_, index) => (
          <SkeletonItem key={index}>
            <SkeletonImage />
            <SkeletonText />
            <SkeletonParagraph />
          </SkeletonItem>
        ))
      ) : (
        news.map((article, index) => (
          <NewsItem key={index}>
            <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
              {article.urlToImage ? (
                <NewsImage src={article.urlToImage} alt={article.title} />
              ) : (
                <PatternBlock>Article Image Unavailable</PatternBlock>
              )}
            </NewsLink>
            <NewsTitle>{article.title}</NewsTitle>
            <NewsDescription>{article.description}</NewsDescription>
          </NewsItem>
        ))
      )}
    </NewsListContainer>
  );
};

export default NewsList;
