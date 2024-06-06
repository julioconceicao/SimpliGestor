import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemsContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  item: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    color: '#717F7F',
  },
  info: {
    fontSize: 16,
    lineHeight: 24,
    
  },
  title: {
    fontSize: 20,
    color: '#505050',
  },
  valor: {
    fontSize: 23,
    marginTop: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
    marginTop: 23, 
  },
});