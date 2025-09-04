import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorVariant = 'blue' | 'pink' | 'green' | 'purple';

interface ThemeContextType {
  colorVariant: ColorVariant;
  setColorVariant: (variant: ColorVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorVariant, setColorVariant] = useState<ColorVariant>('blue');

  useEffect(() => {
    // Apply the color variant to the document root
    const root = document.documentElement;
    
    // Remove all variant classes first
    root.classList.remove('variant-blue', 'variant-pink', 'variant-green', 'variant-purple');
    
    // Add the current variant class
    root.classList.add(`variant-${colorVariant}`);
  }, [colorVariant]);

  return (
    <ThemeContext.Provider value={{ colorVariant, setColorVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};