import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../../components/BarraDePesquisa/BarraDePesquisa'; 

import { styles } from './LembretesStyle';

export function Lembretes() {
  return (
    <View style={styles.container}>
        <Text>Lembretes</Text>
    </View>
  );
}