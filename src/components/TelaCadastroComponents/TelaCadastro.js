import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'


export default function TelaCadastroComponents() {

  

  return (
    <View style={styles.container}>
        <Image
        source={require("../../assets/LogoSecundaria-removebg-preview (1).png")}
        style={styles.logo}
        />
       
        <View style={styles.line}/>

        {/* <TextInput style={styles.textInput}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    logo: {
        position: 'absolute',
        top: '3%',
        left: '25%',
        height: "10%",
        width: '50%'
      },
      line: {
        width: '110%', // largura da linha (pode ser ajustada conforme necessário)
        height: 0.5, // altura da linha
        backgroundColor: 'whitesmoke', // cor da linha
        position: 'absolute',
        top: "12%",
        alignSelf: 'center'
      }
})