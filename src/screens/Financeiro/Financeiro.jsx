import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './FinanceiroStyle';

const FinancasPage = () => {
  const [ganhoDiario, setGanhoDiario] = useState('');
  const [gasto, setGasto] = useState('');
  const [reposicoes, setReposicoes] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularGanhos = () => {
    // Calcula o resultado dos ganhos
    const ganhoTotal = parseFloat(ganhoDiario) - parseInt(reposicoes);
    const resultadoCalculado = ganhoTotal - parseFloat(gasto);
    setResultado(resultadoCalculado.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ganho Diário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ganho diário"
        value={ganhoDiario}
        onChangeText={text => setGanhoDiario(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gasto do Dia</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o gasto"
        value={gasto}
        onChangeText={text => setGasto(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Despesa Fixa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite as despesas fixas"
        value={reposicoes}
        onChangeText={text => setReposicoes(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={calcularGanhos}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultadoLabel}>Resultado do Dia</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

export default FinancasPage;
