import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './FinanceiroStyle';

export default function Financeiro() {
  return (
    <View style={styles.container}>
        <Text>Financeiro</Text>
    </View>
  );
}