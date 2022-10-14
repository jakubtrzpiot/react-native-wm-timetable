import {View, Text, Pressable} from 'react-native';
import {useContext} from 'react';
import {Context} from '../Context';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  const {date, setDate, theme} = useContext(Context);
  const previousDay = () => {
    if (new Date().getTime() - date.getTime() < 7 * 24 * 60 * 60 * 1000) {
      setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000));
    }
  };
  const nextDay = () => {
    if (date.getTime() - new Date().getTime() < 14 * 24 * 60 * 60 * 1000) {
      setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
    }
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
          color: theme == 'light' ? '#991e72' : '#212121',
          radius: 50,
        }}
        onPress={previousDay}>
        {<Icon name="angle-left" size={28} color="#fff" />}
      </Pressable>
      <Pressable
        className="grow items-center justify-center"
        android_ripple={{
          color: theme == 'light' ? '#991e72' : '#212121',
          radius: 60,
        }}
        onPress={backToToday}>
        <Text className="text-[#e0e0e0] font-bold text-[15px]">{`${day}/${month}/${year}`}</Text>
      </Pressable>

      <Pressable
        className="px-14 items-center justify-center"
        android_ripple={{
          color: theme == 'light' ? '#991e72' : '#212121',
          radius: 50,
        }}
        onPress={nextDay}>
        {<Icon name="angle-right" size={28} color="#fff" />}
      </Pressable>
    </View>
  );
};

export default Navbar;
