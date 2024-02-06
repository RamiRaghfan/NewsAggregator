// Navigation.styles.ts
import styled from 'styled-components';
import { ThemeType } from '../../themes/themes';

export const StyledButton = styled.button<{ theme: ThemeType }>`
  background-color: transparent;
  color: ${props => props.theme.text};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  position: relative;
  font-family: 'Roboto', sans-serif; 
  font-size: 1rem; 
  font-weight: 500; 

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 2px;
    background-color: ${props => props.theme.toggleBorder};
  }

  &:last-child::after {
    content: none;
  }

  &:first-child::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    background-color: ${props => props.theme.toggleBorder};
  }
`;
