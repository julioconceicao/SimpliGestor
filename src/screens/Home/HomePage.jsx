import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity  } from 'react-native';
import { styles } from './HomePageStyle';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/BarraDePesquisa/BarraDePesquisa';
import { Ionicons, Foundation, FontAwesome, EvilIcons } from '@expo/vector-icons';
import Financeiro from '../Financeiro/Financeiro';


export default function HomePage() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       
      <SearchBar />

      
      <View style={styles.buttonAgendaContainer}>
        <TouchableOpacity style={styles.botaoAgenda} onPress={() => navigation.navigate('Calendario')}>
          <Ionicons name='calendar' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelAgenda}>Agenda</Text>
      </View>

      <View style={styles.buttonDiaContainer}>
        <TouchableOpacity style={styles.botaoDia} onPress={() => navigation.navigate('Agenda Diaria')}>
          <FontAwesome name='check-square-o' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelDia}>Dia</Text>
      </View>
      
      <View style={styles.buttonServicosContainer}>
        <TouchableOpacity style={styles.botaoServicos} onPress={() => navigation.navigate('Servicos')}>
          <Foundation name='database' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelServicos}>Serviços</Text>
      </View>
      
      <View style={styles.buttonFinancasContainer}>
        <TouchableOpacity style={styles.botaoFinancas} onPress={() => navigation.navigate('Financeiro')}>
          <FontAwesome name='dollar' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelFinancas}>Finanças</Text>
      </View>
      
      <View style={styles.buttonHistoricoContainer}>
        <TouchableOpacity style={styles.botaoHistorico} onPress={() => navigation.navigate('Historico')}>
          <FontAwesome name='history' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelHistorico}>Histórico</Text>
      </View>
      
      <View style={styles.buttonLembretesContainer}>
        <TouchableOpacity style={styles.botaoLembretes} onPress={() => navigation.navigate('Lembretes')}>
          <FontAwesome name='bell' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelLembretes}>Lembretes</Text>
      </View>
      
    </View>
  );
}
