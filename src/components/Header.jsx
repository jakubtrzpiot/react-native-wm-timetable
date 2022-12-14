import {View, Text} from 'react-native';
import {useContext} from 'react';
import {Context} from '../Context';

const Header = () => {
  //make a drawer menu with user settings, pick a plan button and a theme toggle button
  const {date} = useContext(Context);
  //check if week is even or odd starting from monday
  const week =
    Math.floor(
      (date.getTime() - new Date(2021, 8, 13).getTime()) /
        (7 * 24 * 60 * 60 * 1000),
    ) % 2;
  const isEven = week % 2 === 0 ? true : false;
  let day = date.getDay() === 0 ? 6 : date.getDay() - 1;
  switch (day) {
    case 0:
      day = 'Poniedziałek';
      break;
    case 1:
      day = 'Wtorek';
      break;
    case 2:
      day = 'Środa';
      break;
    case 3:
      day = 'Czwartek';
      break;
    case 4:
      day = 'Piątek';
      break;
    case 5:
      day = 'Sobota';
      break;
    case 6:
      day = 'Niedziela';
      break;
  }

  return (
    <View className="pt-2 pb-4 px-4 flex-row justify-end items-center">
      <Text className="text-black dark:text-[#e0e0e0]">
        {isEven ? 'Parzysty' : 'Nieparzysty'}
      </Text>
      <Text className="text-black dark:text-[#e0e0e0] text-lg absolute w-screen text-center font-bold">
        {day}
      </Text>
    </View>
  );
};

export default Header;
