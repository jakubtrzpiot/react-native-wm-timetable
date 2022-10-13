import React, {useState, useEffect} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useColorScheme} from 'react-native';

export const Context = React.createContext();
export const ContextProvider = ({children}) => {
  const [date, setDate] = useState(new Date());
  const [theme, setTheme] = useState(null);

  const defaultTheme = useColorScheme();

  useEffect(() => {
    setTheme(defaultTheme);
  }, [defaultTheme]);

  const previousDay = () => {
    setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000));
  };
  const nextDay = () => {
    setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
  };
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      className="flex-1 bg-white dark:bg-black"
      onSwipeLeft={nextDay}
      onSwipeRight={previousDay}
      onSwipeconfig={config}>
      <Context.Provider value={{date, setDate, theme, setTheme}}>
        {children}
      </Context.Provider>
    </GestureRecognizer>
  );
};
