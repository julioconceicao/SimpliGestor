import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    item: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    info: {
      fontSize: 16 ,
      marginBottom: 10,
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      marginBottom: 10,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#292929',
      padding: 15,
      borderRadius: 11,
      alignItems: 'center',
      width: 144,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    grayText: {
      color: '#505050',
    },
    darkGrayText: {
      color: '#717F7F',
    },
  });

  export default styles;