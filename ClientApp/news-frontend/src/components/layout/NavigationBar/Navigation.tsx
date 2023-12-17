// Navigation.tsx
import React from 'react';
import { Nav, SearchInput, ButtonContainer, StyledButton } from './Navigation.styles';

const Navigation: React.FC = () => {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

  const handleCategorySelect = (selectedCategory: string) => {
    // Handle category selection logic here
    console.log(`Selected category: ${selectedCategory}`);
  };

  return (
    <Nav>
      <SearchInput type="text" placeholder="Search by keyword" />
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
    </Nav>
  );
};

export default Navigation;
