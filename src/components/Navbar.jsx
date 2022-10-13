import {View, Text, Pressable} from 'react-native';
import {useContext} from 'react';
import {Context} from '../Context';

const Navbar = () => {
  const {date, setDate, theme} = useContext(Context);
  const previousDay = () => {
    setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000));
  };
  const nextDay = () => {
    setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
  };
  backToToday = () => {
    setDate(new Date());
  };

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <View className="flex-row bg-primary dark:bg-black justify-between h-14">
      <Pressable
        className="px-14 items-center justify-center"
        android_ripple={{
          color: theme == 'light' ? '#8c1c6a' : '#212121',
          radius: 96,
        }}
        onPress={previousDay}>
        <Text className="text-3xl text-[#e0e0e0] font-bold">{'<'}</Text>
      </Pressable>
      <Pressable
        className="grow items-center justify-center"
        android_ripple={{
          color: theme == 'light' ? '#8c1c6a' : '#212121',
          radius: 100,
        }}
        onPress={backToToday}>
        <Text className="text-[#e0e0e0] font-bold">{`${day}/${month}/${year}`}</Text>
      </Pressable>

      <Pressable
        className="px-14 items-center justify-center"
        android_ripple={{
          color: theme == 'light' ? '#8c1c6a' : '#212121',
          radius: 96,
        }}
        onPress={nextDay}>
        <Text className="text-3xl text-[#e0e0e0] font-bold">{'>'}</Text>
      </Pressable>
    </View>
  );
};

export default Navbar;
