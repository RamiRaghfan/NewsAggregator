// Navigation.styles.ts
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center items */
  background-color: #333;
  padding: 10px;
`;

export const CategorySelect = styled.select`
  padding: 5px;
  margin-right: 10px;
  background-color: #fff; /* Add a white background color */
  border: none;
  border-radius: 4px;
  color: #333; /* Text color */
`;

export const SearchInput = styled.input`
  padding: 5px;
  background-color: #fff; /* Add a white background color */
  border: none;
  border-radius: 4px;
  color: #333; /* Text color */
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add a smooth background color transition */

  &:hover {
    background-color: #0077b6; /* Change background color on hover */
  }
`;
