import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  Button,
  OptionsList,
  OptionItem,
} from './dropdown-menu.style'; // Import your styled components

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  defaultOption?: string;
  buttonText?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  defaultOption,
  buttonText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || '');

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {buttonText || selectedOption}
      </Button>
      {isOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <OptionItem
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
