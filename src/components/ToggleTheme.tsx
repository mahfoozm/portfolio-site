import React, { useContext } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';
import { FiSun } from 'react-icons/fi';
import { StyledToggle } from '../styles/componentStyles';
import { ThemeModeContext } from 'src/contexts/ThemeModeContext';

interface IToggleThemeProps {
  className?: string;
}

const ToggleTheme: React.FC<IToggleThemeProps> = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeModeContext);

  return (
    <StyledToggle className={className} onClick={toggleTheme}>
      {theme === 'light' ? (
        <RiMoonClearLine className='icons' />
      ) : (
        <FiSun className='icons' />
      )}
    </StyledToggle>
  );
};

export default ToggleTheme;
