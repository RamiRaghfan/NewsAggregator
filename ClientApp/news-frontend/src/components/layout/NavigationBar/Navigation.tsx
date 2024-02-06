// Navigation.tsx
import React from 'react';
import { Nav, ButtonContainer, SearchButton, UserButtonPlaceholder, NotificationsButtonPlaceholder } from './Navigation.styles';
import { StyledButton } from '../button/Button.style';
import SearchIcon from '@mui/icons-material/Search'; // Import the MUI search icon

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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        <UserButtonPlaceholder /> {/* Placeholder for user button */}
        <NotificationsButtonPlaceholder /> {/* Placeholder for notifications button */}
      </div>  
    </Nav>
  );
};

export default Navigation;
