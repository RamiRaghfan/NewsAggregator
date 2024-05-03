import styled, { css, keyframes } from 'styled-components';
import { ThemeType } from '../../themes/themes';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

export const SkeletonItem = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out forwards; 
`;

export const SkeletonImage = styled.div<{ theme: ThemeType }>`
  width: 100%;
  height: 200px;
  background-color: #1a1d2a; 
  border-radius: 8px 8px 0 0;
  overflow: hidden; 
`;

export const SkeletonText = styled.div<{ theme: ThemeType }>`
  height: 10px;
  margin: 10px 0;
  background: #1a1d2a;
  border-radius: 4px;
`;

export const SkeletonParagraph = styled(SkeletonText)`
  width: 80%;
  margin: 10px 0;
`;

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
  margin-top: 2rem;
`;


export const NewsItem = styled.div<{ theme: ThemeType }>`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: opacity 0.5s ease-out, transform 0.2s ease-in-out;
  opacity: 1; // Ensures items are fully visible by default

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


