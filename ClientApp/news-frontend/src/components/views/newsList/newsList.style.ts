// NewsListStyles.ts

import styled from 'styled-components';

export const NewsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem; // Adjusted to ensure the content is below the navbar
`;

export const NewsItem = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s ease-in-out;
  background-color: #272822; // Monokai background color
  color: #f8f8f2; // Monokai text color

  &:hover {
    transform: scale(1.03); // Slight scale-up on hover
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 200px; // Fixed height for images
  border-radius: 8px 8px 0 0; // Round the top corners
  object-fit: cover; // Ensure images cover the entire space
`;

export const NewsTitle = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

export const NewsDescription = styled.p`
  font-size: 0.9rem;
  color: #f8f8f2; // Monokai text color for readability
`;

export const NewsLink = styled.a`
  display: block; // Ensures the link covers the image area
  margin-bottom: 0.5rem;
`;
