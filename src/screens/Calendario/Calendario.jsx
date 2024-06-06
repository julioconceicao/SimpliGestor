import React from 'react';
import { View, Text } from 'react-native';
import CalendarioComponent from '../../components/CalendarioComponent/CalendarioComponent';

import { styles } from './CalendarioStyle';

export default function Calendario() {

  return (
    <View style={styles.container}>
        <CalendarioComponent/>

       
    </View>

    
  );
}