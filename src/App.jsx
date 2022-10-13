/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ContextProvider} from './Context';
import Header from './components/Header';
import ScheduleScreen from './screens/ScheduleScreen';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <ScheduleScreen />
      <Navbar />
    </ContextProvider>
  );
};

export default App;
