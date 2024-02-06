// Navigation.tsx
import React from 'react';
import { Nav, SearchInput, ButtonContainer } from './Navigation.styles';
import { StyledButton } from '../button/Button.style';

const Navigation: React.FC = () => {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  const handleCategorySelect = (selectedCategory: string) => {
    // Handle category selection logic here
    console.log(`Selected category: ${selectedCategory}`);
  };

  return (
    <Nav>
      <ButtonContainer>
        {categories.map((category, index) => (
          <StyledButton
            key={index}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </StyledButton>
        ))}
      </ButtonContainer>
      <SearchInput type="text" placeholder="Search by keyword" />
    </Nav>
  );
};

export default Navigation;
