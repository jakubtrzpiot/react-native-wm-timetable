import React, {useContext} from 'react';
import {Context} from '../Context';
import {ScrollView, Text, StatusBar} from 'react-native';
import data from '../data/schedule.json';
import ScheduleTile from '../components/ScheduleTile';

const ScheduleScreen = () => {
  const {date, theme} = useContext(Context);
  let day = date.getDay() === 0 ? 6 : date.getDay() - 1;
  const schedule = [0, 1, 2, 3, 4].includes(day) ? data.AiR.A3[day] : null;

  return (
    <ScrollView>
      <StatusBar
        barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme == 'light' ? '#fff' : '#000'}
      />
      {schedule ? (
        schedule.map((item, index) => <ScheduleTile key={index} {...item} />)
      ) : (
        <Text className="text-black dark:text-[#e0e0e0] self-center">
          Brak zajęć w tym dniu
        </Text>
      )}
    </ScrollView>
  );
};

export default ScheduleScreen;
