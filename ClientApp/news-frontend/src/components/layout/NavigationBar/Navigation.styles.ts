// Navigation.styles.ts
import styled from 'styled-components';
import { ThemeType } from '../../themes/themes';

export const Nav = styled.nav<{ theme: ThemeType }>`

  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center items */
  padding: 15px;
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
  gap: 0px;
`;

