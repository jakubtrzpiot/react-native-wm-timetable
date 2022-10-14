import React, {useContext} from 'react';
import {Context} from '../Context';
import {ScrollView, Text, StatusBar} from 'react-native';
import data from '../data/schedule.json';
import ScheduleTile from '../components/ScheduleTile';

const ScheduleScreen = () => {
  const {date, theme} = useContext(Context);
  let day = date.getDay() === 0 ? 6 : date.getDay() - 1;
  const schedule = [0, 1, 2, 3, 4].includes(day) ? data.K.K2[day] : null;

  let week =
    Math.floor(
      (date.getTime() - new Date(2021, 8, 13).getTime()) /
        (7 * 24 * 60 * 60 * 1000),
    ) % 2;

  week % 2 === 0 ? (week = 'p') : (week = 'n');

  const groups = ['l3', 'k3'];

  return (
    <ScrollView>
      <StatusBar
        barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme == 'light' ? '#fff' : '#000'}
      />
      {schedule ? (
        schedule.map((item, index) => {
          if (groups.includes(item.group) || !item.group) {
            if (item.week === week || !item.week) {
              return <ScheduleTile key={index} {...item} />;
            }
          }
        })
      ) : (
        <Text className="w-full text-center text-black dark:text-[#e0e0e0] self-center py-3 text-[15px] border-t border-[#e0e0e0] dark:border-[#212121]">
          Brak zajęć w tym dniu
        </Text>
      )}
    </ScrollView>
  );
};

export default ScheduleScreen;
