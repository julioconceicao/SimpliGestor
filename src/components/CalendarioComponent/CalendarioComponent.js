import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Modal, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';

//Configurando localidade
LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

const CalendarioComponent = () => {
  // Formatar a data atual para exibir o nome do mês
  const navigation = useNavigation();
  const dataAtual = moment().format('YYYY-MM-DD');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const markedDates = {
    '2024-06-08': { disabled: true },
    '2024-06-10': { marked: true },
    '2024-06-11': { marked: true },
    '2024-06-12': { selected: true, marked: true, selectedColor: '#f08080' },
    '2024-06-13': { selected: true, marked: true, selectedColor: '#f08080' },
    '2024-06-14': { selected: true, marked: true, selectedColor: '#f08080' },
    '2024-06-15': { selected: true, marked: true, selectedColor: '#00ced1' },
    '2024-06-17': { selected: true, marked: true, selectedColor: '#00ced1' },
    '2024-06-18': { selected: true, marked: true, selectedColor: '#00ced1' },
    '2024-06-19': { selected: true, marked: true, selectedColor: '#00ced1' },
  };

  const TelaAgendar = () => {
    setModalVisible(true);
  };

  const handleDayPress = (dia) => {
    const data = dia.dateString;

    if (markedDates[data]) {
      if (markedDates[data].selectedColor === '#f08080') {
        Alert.alert("Data Indisponível", `Data cheia.`);
      } else if (markedDates[data].selectedColor === '#00ced1') {
        setSelectedDate(data);
        TelaAgendar();
      }
    } else {
      Alert.alert("Data não marcada", `A data ${data} não possui marcação específica.`);
    }
  };

  const handleTimeSelectionConfirm = (time) => {
    setModalVisible(false);
    Alert.alert("Horário Comfirmado", `Você selecionou o horário ${time} para a data ${moment(selectedDate).format('DD [de] MMMM [de] YYYY')}`);
    // Navegar para outra tela, por exemplo:
    // navigation.navigate('Details', { date: selectedDate, time });
  };

  return (
    <View>
      <Calendar
        style={{ 
          width: 400, 
          borderRadius: 8, 
          position: 'absolute',
          alignSelf: 'center',
          top: -280
        }}
        current={dataAtual} // Usar a data formatada com o nome do mês
        minDate={'2024-01-01'}
        maxDate={'2024-12-31'}
        monthFormat={'MMMM yyyy'}
        markedDates={markedDates}
        markingType={'custom'}
        onDayPress={(day) => handleDayPress(day)}
        theme={{
          selectedDayBackgroundColor: '#00ced1',
          todayTextColor: '#3E5DFF',
          dayTextColor: 'black',
          textDisabledColor: 'gray',
          dotColor: 'blue',
          arrowColor: 'gray',
          monthTextColor: '#3E5DFF',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <Text style={styles.agenda}>Agenda Mensal</Text>
      <Text style={styles.disponiveis}></Text> 
      <Text style={styles.disponiveisText}>Disponível</Text> 
      <Text style={styles.cheia}></Text> 
      <Text style={styles.cheiaText}>Indisponível</Text> 

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <ScrollView style={{flex: 1, paddingTop: '15%'}}>
          <View style={{ backgroundColor: 'white', padding: 50, borderRadius: 10,  }}>
            <Text style={{fontSize:25, alignItems: 'center', top: -25}}>Selecione um horário: </Text>

            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('09:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white' }}>09:00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('10:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white' }}>10:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 5,}}
              onPress={() => handleTimeSelectionConfirm('11:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF',  textAlign: 'center', borderRadius: 8, color: 'white'}}>11:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('12:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white'}}>12:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('13:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white'}}>13:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('14:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white'}}>14:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('15:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white'}}>15:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => handleTimeSelectionConfirm('16:00')}
            >
              <Text style={{fontSize: 30, padding: 5, backgroundColor: '#3E5DFF', textAlign: 'center', borderRadius: 8, color: 'white'}}>16:00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{paddingTop: 20, alignItems: 'center'}}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{
                fontSize: 20,
                backgroundColor: '#dcdcdc', 
                width: 120, 
                height: 45, 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center',
                borderRadius: 8,
                paddingTop: 4,


              }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  agenda: {
    fontSize: 20,
    position: 'absolute',
    top: -330,
    alignSelf: 'center',
    color: 'grey',
  },

  disponiveis: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 100,
    left: -200,
    color: 'grey',
    backgroundColor: '#00ced1',
    borderRadius: 55
  },

  disponiveisText: {
    position: 'absolute',
    fontSize: 20,
    top: 95,
    left: -170,
    color: 'grey',
  },

  cheia: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 150,
    left: -200,
    backgroundColor: '#f08080',
    borderRadius: 55
  },

  cheiaText: {
    position: 'absolute',
    fontSize: 20,
    top: 142,
    left: -170,
    color: 'grey',
  }
});

export default CalendarioComponent;