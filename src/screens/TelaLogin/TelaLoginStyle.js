import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'whitesmoke',
      },

      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },

      logo: {
        marginLeft: '11%',
        width: 300,
        height: 300,
      },

      textInputEmail: {
        width: '100%',
        height: 50,
        backgroundColor: '#dcdcdc',
        borderRadius: 30,
        paddingLeft: 15
      },
      
      textInputSenha: {
        width: '100%',
        height: 50,
        backgroundColor: '#dcdcdc',
        borderRadius: 30,
        paddingLeft: 15,
        marginTop: 15
      },
      botaoEntrar: {
        marginTop: 45,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#3E5DFF',
        
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },

      
});