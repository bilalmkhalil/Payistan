import { StyleSheet } from 'react-native';
import { Cairo_600SemiBold } from '@expo-google-fonts/cairo';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  
    blcContainer: {
      height: '35%',
      backgroundColor: '#e67e22',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  
    trctTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 10,
    },

    // Last Transactions
    transContainer: {
        display: 'grid',
        margin: 10,
    },

    // Login Page
    authContainer: {
        flex: 1,
        padding: 15,
    },

    leftIcon: {
      marginRight: 10,
    },

    rightIcon: {
      marginLeft: 10
    },
      
    loginInput: {
      color: 'gray',
      height: 55,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      elevation: 2,
      // borderWidth: 1.5,
      // borderColor: '#1b1e23',
    },

    inputField: {
      width: '78%',
      fontSize: 17
    },

    loginButton: {
      backgroundColor: '#1b1e23',
      alignItems: 'center',
      borderRadius: 5,
      margin: 10,
      padding: 15,
    },

    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },

    loginFooter: {
      flexDirection: 'row',
      marginTop: 30,
      padding: 10
    }
});