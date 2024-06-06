import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Perfil/PerfilStyle';

export function Perfil() {
  const navigation = useNavigation(); // Movido para dentro do componente

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={[styles.label, styles.grayText]}>Nome:</Text>
        <Text style={[styles.info, styles.darkGrayText]}>Melry Hellen</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.item}>
        <Text style={[styles.label, styles.grayText]}>E-mail:</Text>
        <Text style={[styles.info, styles.darkGrayText]}>meruelen@email.com.br</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.item}>
        <Text style={[styles.label, styles.grayText]}>CPF:</Text>
        <Text style={[styles.info, styles.darkGrayText]}>123.456.789-10</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.item}>
        <Text style={[styles.label, styles.grayText]}>Endereço:</Text>
        <Text style={[styles.info, styles.darkGrayText]}>Rua do Morango</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.item}>
        <Text style={[styles.label, styles.grayText]}>Telefone:</Text>
        <Text style={[styles.info, styles.darkGrayText]}>(12) 3456-7890</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.item}>
        <Text style={[styles.label, styles.grayText]}>Cargo:</Text>
        <Text style={[styles.info, styles.darkGrayText]}>Gerente Comercial</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            navigation.navigate('TelaLogin'); // Navega para a tela de login
          }}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
