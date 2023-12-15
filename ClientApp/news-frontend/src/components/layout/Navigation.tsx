import React from 'react';
import { Nav, CategorySelect, SearchInput } from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <Nav>
      <CategorySelect>
        {/* Categories options will go here */}
      </CategorySelect>
      <SearchInput type="text" placeholder="Search by keyword" />
      {/* Search button will go here */}
    </Nav>
  );
};

export default Navigation;
