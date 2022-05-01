import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'

import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [login, seLogin] = useState()
  const [isLoading, seIsLoading] = useState()
  const [password, sePassword] = useState()

  
  return (
    <View style={styles.sectionContainer}>
      <View style={{margin: 20, width: '90%', alignSelf: 'center'}}>
        <Text>Email:</Text>
        <TextInput style={styles.inputStyle} />
        <Text>Senha:</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <TouchableOpacity onPress={() => null} style={styles.loginBtn}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signInBtn}>
        <Text style={}>Criar Conta</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
    backgroundColor: '##f0f0f0',

  },
  inputStyle: {
    padding: 15,
    borderWidth: 0.8,
    borderRadius: 10,
    margin: 15,
  },
  loginBtn: {
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    // height:40,
    backgroundColor: '#fff',
  },

  signInBtn: {
    padding: 20,
    
    width: '50%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    // height:40,
    // backgroundColor: '#ffff',
  },
})

export default LoginScreen
