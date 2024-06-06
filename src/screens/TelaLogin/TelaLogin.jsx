import React, { useEffect } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text,} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import SwipeButton from '../../components/swipeButton/SwipeButton'; // Certifique-se de que o caminho esteja correto
import { styles } from './TelaLoginStyle';

export default function TelaLogin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_azul_simpligestor2.png")}
        style={styles.logo}
      />
      
      {/* Input email e senha */}
      <TextInput style={styles.textInputEmail} placeholder='Email' />
      <TextInput style={styles.textInputSenha} placeholder='Senha' secureTextEntry={true} />

      {/* Botão para entrar (Tela de login) */}
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






