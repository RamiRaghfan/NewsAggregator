// Navigation.tsx
import React from 'react';
import { Nav, SearchInput, ButtonContainer } from './Navigation.styles';
import { StyledButton } from '../button/Button.style';

type NavigationProps = {
  onCategorySelect: (category: string) => void;
};



const Navigation: React.FC<NavigationProps> = ({ onCategorySelect }) => {
  
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  
  const handleCategoryClick = (category: string) => {
    onCategorySelect(category); // Call the passed callback function with the selected category
  };

  return (
    <Nav>
      <ButtonContainer>
        {categories.map((category, index) => (
          <StyledButton
          key={index}
          onClick={() => handleCategoryClick(category)}
                    
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
