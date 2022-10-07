import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import data from '../data/schedule.json';
import ScheduleTile from '../components/scheduleTile';

const ScheduleScreen = () => {
  const schedule = data[0].semester[0].groups[0].schedule[0];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h}>Plan zajęć</Text>
      {schedule.map((item, index) => (
        <ScheduleTile key={index} {...item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  h: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingBottom: 8,
  },
});

export default ScheduleScreen;
