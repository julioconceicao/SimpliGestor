import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import TelaCadastro from '../../screens/TelaCadastro/TelaCadastro';
import { useNavigation } from '@react-navigation/native';


const SwipeButton = () => {

  const navigation = useNavigation();
  const [isProfessional, setIsProfessional] = useState(false);

  const toggleSwitch = () => {
    setIsProfessional(previousState => !previousState);
  };

      

  return (
      <>
        <TouchableOpacity onPress={toggleSwitch}>
          <View style={[styles.switch, isProfessional ? styles.switchProfessional : styles.switchClient]}>
            <View style={styles.switchInner}>
              <View style={[styles.switchToggle, isProfessional ? styles.switchToggleOn : styles.switchToggleOff]}>
                <Text style={styles.text}>
                  {isProfessional ? 'Profissional' : 'Cliente'}
                </Text>
              </View>
            </View>
          </View>     
        </TouchableOpacity>
      
        <View style={styles.line}/>
      
        <TouchableOpacity 
          style={styles.clickCadastro} 
          onPress={() => navigation.navigate('TelaCadastro')}
        > 
          <Text style={styles.textCadastro}>É novo por aqui ? Toque aqui para criar uma conta</Text>
        </TouchableOpacity>
      </>

    
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 251, // aumentando em 50%
    height: 55, // aumentando em 50%
    borderRadius: 37.5, // metade da altura para manter o formato oval
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    // marginTop: 125,
    // marginLeft: 62,
    elevation: 10,
    borderWidth: 1.5, // Adiciona uma borda
    borderColor: 'rgba(0,0,0,0.3)', // Cor da borda
    position: 'absolute',
    top: 120,
    left: 65,
    
    
  },
  switchClient: {
    
    backgroundColor: 'whitesmoke', // Altere para a cor cinza claro
  },
  switchProfessional: {
    backgroundColor: 'whitesmoke', // Altere para a cor cinza mais escuro ou preto
  },
  switchInner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    position: 'relative',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  switchToggle: {
    width: 126, // metade da largura do container externo
    height: 50, // metade da altura para manter o formato oval
    borderRadius: 45, // metade da largura para manter o formato oval
    backgroundColor: '#3E5DFF', // Altere para a cor ciano ou turquesa brilhante
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.2 ,
    
  },
  switchToggleOn: {
    transform: [{ translateX: 105 }], // 180 (largura do botão) - 90 (largura do botão interno)
  },
  switchToggleOff: {
    transform: [{ translateX: -13 }],
  },

  line: {
    width: 500, // largura da linha (pode ser ajustada conforme necessário)
    height: 1, // altura da linha
    backgroundColor: 'grey', // cor da linha
    position: 'absolute',
    top: "98%",
    alignSelf: 'center'
  },
  clickCadastro: {
    paddingTop: 15,
    marginLeft: 15,
    
  },

  textCadastro: {
    color: '#3E5DFF',
    textDecorationLine: 'underline',
    position: 'absolute',
    top: 297
  },

});

export default SwipeButton;


























