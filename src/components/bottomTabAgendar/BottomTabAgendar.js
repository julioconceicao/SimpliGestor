import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function BottomTabAgendar() {
  return (
    <View style={styles.container}>        
        <Text style={styles.btAgendar}>Agendar</Text>
    </View>
  );
}



export const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 65,
    backgroundColor: '#3E5DFF',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderTopRightRadius: 28,
    borderTopColor: 'grey',
    borderWidth: 2,
    borderLeftWidth: 0,
    
    
    
  },
  btAgendar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});