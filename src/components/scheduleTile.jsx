import React, {useContext} from 'react';
import {Context} from '../Context';
import {View, Text, Pressable, Dimensions} from 'react-native';

const ScheduleTile = ({nr, subject, teacher, type, room, week}) => {
  const {theme} = useContext(Context);
  const width = Dimensions.get('window').width;
  nr -= 1;
  const timetable = [
    ['7:30', '8:15'],
    ['8:15', '9:00'],
    ['9:15', '10:00'],
    ['10:00', '10:45'],
    ['11:00', '11:45'],
    ['11:45', '12:30'],
    ['12:45', '13:30'],
    ['13:30', '14:15'],
    ['14:30', '15:15'],
    ['15:15', '16:00'],
    ['16:15', '17:00'],
    ['17:00', '17:45'],
    ['18:00', '18:45'],
    ['18:45', '19:30'],
    ['19:45', '20:30'],
    ['20:30', '21:15'],
  ];
  switch (type) {
    case 'w':
      type = 'Wykład';
      break;
    case 'c':
      type = 'Ćwiczenia';
      break;
    case 'l':
      type = 'Laboratorium';
      break;
    case 'lt':
      type = 'Lektorat';
      break;
    case 'p':
      type = 'Projekt';
      break;
    case 'sz':
      type = 'Szkolenie';
      break;
    default:
      type = 'Nieznany';
  }
  return (
    <Pressable
      android_ripple={{
        color: theme == 'light' ? '#e0e0e0' : '#212121',
        radius: width,
      }}
      className="flex-row pr-4 h-[68px] border-t border-[#e0e0e0] dark:border-[#212121] items-center">
      <Text className="text-3xl text-black dark:text-[#e0e0e0] w-[30px] text-center mx-4">
        {nr + 1}
      </Text>
      <View className="w-[32px] mr-2 items-center">
        <Text className="text-[#757575] dark:text-[#bdbdbd] pb-1">
          {timetable[nr][0]}
        </Text>
        <Text className="text-[#757575] dark:text-[#bdbdbd]">
          {timetable[nr][1]}
        </Text>
      </View>
      <View>
        <Text className="text-black dark:text-[#e0e0e0] pb-1">
          <Text className="text-[15px]">{subject}</Text> ({type})
        </Text>
        <Text className="text-[#757575] dark:text-[#bdbdbd]">{`${room}   ${teacher}`}</Text>
      </View>
    </Pressable>
  );
};

export default ScheduleTile;
