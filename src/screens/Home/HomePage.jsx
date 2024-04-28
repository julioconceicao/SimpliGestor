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
        <TouchableOpacity style={styles.botaoDia}>
          <FontAwesome name='check-square-o' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelDia}>Dia</Text>
      </View>
      
      <View style={styles.buttonServicosContainer}>
        <TouchableOpacity style={styles.botaoServicos}>
          <Foundation name='database' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelServicos}>Servicos</Text>
      </View>
      
      <View style={styles.buttonFinancasContainer}>
        <TouchableOpacity style={styles.botaoFinancas} onPress={() => navigation.navigate('Financeiro')}>
          <FontAwesome name='dollar' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelFinancas}>Financas</Text>
      </View>
      
      <View style={styles.buttonHistoricoContainer}>
        <TouchableOpacity style={styles.botaoHistorico} >
          <FontAwesome name='history' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelHistorico}>Historico</Text>
      </View>
      
      <View style={styles.buttonLembretesContainer}>
        <TouchableOpacity style={styles.botaoLembretes}>
          <FontAwesome name='bell' size={50} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.labelLembretes}>Lembretes</Text>
      </View>
      
    </View>
  );
}
