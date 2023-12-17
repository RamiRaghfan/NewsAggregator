// src/styles/NewsListStyles.ts
import styled from 'styled-components';

export const NewsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid layout */
  gap: 1rem;
  margin-top: 2rem;
`;

export const NewsItem = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: background-color 0.2s ease-in-out; /* Smooth background color transition */

  &:hover {
    background-color: #f5f5f5; /* Change background color on hover */
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover; /* Ensure images cover the entire space */
`;

export const NewsTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

export const NewsDescription = styled.p`
  color: #555;
  font-size: 1rem;
`;

export const NewsLink = styled.a`
  margin-top: 0.5rem;
  color: #1a0dab;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
