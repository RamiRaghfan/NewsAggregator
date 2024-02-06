// Navigation.styles.ts
import styled from 'styled-components';
import { ThemeType } from '../../themes/themes';


export const LogoPlaceholder = styled.div`
  height: 50px; // Adjust the height as needed
  width: 50px; // Adjust the width as needed
  background-color: #ccc; // This is just a placeholder, use an actual image or logo here
  margin-right: 20px; // Spacing between the logo and the category buttons
`;


export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const UserButtonPlaceholder = styled.div`
  height: 30px; // Adjust the size as needed
  width: 30px; // Adjust the size as needed
  background-color: #ccc; // Placeholder color, replace with actual content or icon
  border-radius: 50%; // Makes it a circle
  margin-left: 15px; // Space from the previous element
`;

export const NotificationsButtonPlaceholder = styled(UserButtonPlaceholder)`
`;

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

