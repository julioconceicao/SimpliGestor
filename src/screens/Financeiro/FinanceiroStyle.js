import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3E5DFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center', // Centraliza o texto do botão horizontalmente
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', // Adiciona negrito para destacar o texto do botão
  },
  resultadoLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultado: {
    fontSize: 18,
  },
});

export default styles;
