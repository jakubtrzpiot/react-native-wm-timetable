import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScheduleTile = ({subject, teacher, type, room, startAt, endAt, week}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h}>
        {subject}
        <Text style={styles.p}> {type}</Text>
      </Text>
      <Text style={styles.p}>
        {teacher} - {room}
      </Text>
      <Text style={styles.time}>
        {startAt} - {endAt} Tydzień: {!week ? 'P/N' : week.toUpperCase}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 20,
    borderColor: '#AF0B7F',
    borderWidth: 3,
  },
  h: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  p: {fontSize: 14, color: 'black'},
  time: {fontSize: 12, color: 'grey'},
});

export default ScheduleTile;
