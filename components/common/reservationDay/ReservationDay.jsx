import { Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from '../../../styles/style'



const ReservationDay = ({ day, date, month, year, setPickedDate, btnStyle, txtStyle,  index }) => {
    
  const handlePress = () => {
    setPickedDate({
        day,
        date,
        month,
        year,
        index
    });
  }
  return (
      <TouchableOpacity style={btnStyle} onPress={() => handlePress()}>
          <Text style={txtStyle}>{day}</Text>
          <Text style={txtStyle}>{date}</Text>
      </TouchableOpacity>
  );
}

export default ReservationDay