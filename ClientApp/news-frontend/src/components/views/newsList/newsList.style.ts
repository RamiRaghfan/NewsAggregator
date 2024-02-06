// NewsListStyles.ts

import styled, { css } from 'styled-components';
import { ThemeType } from '../../themes/themes';

const patternStyle = css`
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 0,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px,
    transparent 50%
  );
`;

export const PatternBlock = styled.div<{ theme: ThemeType }>`
  height: 200px; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.cardBackground};
  ${patternStyle}
`;


export const NewsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem; // Adjusted to ensure the content is below the navbar
`;

  export const NewsItem = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text}; // Use theme text color for consistency
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s ease-in-out;

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
  color: ${props => props.theme.text}; 
`;

export const NewsLink = styled.a`
  display: block; // Ensures the link covers the image area
  margin-bottom: 0.5rem;
`;
