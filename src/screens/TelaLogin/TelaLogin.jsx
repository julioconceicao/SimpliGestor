import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity   } from 'react-native';
import { styles } from './TelaLoginStyle';
import SwipeButton from '../../components/swipeButton/SwipeButton.jsx';
import { useNavigation } from '@react-navigation/native';



export default function TelaLogin() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_azul_simpligestor2.png")}
        style={styles.logo}
      />
      
      {/*input email e senha*/}
      <TextInput style={styles.textInputEmail} placeholder='Email' />
      <TextInput style={styles.textInputSenha} placeholder='Senha' secureTextEntry={true} />


      {/* Botao para entrar (Tela de login) */}
      <TouchableOpacity 
        style={styles.botaoEntrar} 
        onPress={() => navigation.navigate('HomePage')} 
      >
        <Text style={styles.text}>Acessar</Text>
      </TouchableOpacity>
      
      <SwipeButton/>
      
    </View>
    
  );
}

