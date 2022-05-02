import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    if (email == null || email.trim().length == 0) {
      alert('Digite um email válido');
      return false;
    }
    if (password == null || password.trim().length == 0) {
      alert('Digite uma senha válida');
      return false;
    }
    setIsLoading(true);
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail(''), setPassword('');
        })
        .catch(error => {
          alert('Email/Senha incorreto'),
          setIsLoading(false)
            console.log(error, 'deu erro ao validar credenciais');
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error, 'Erro ao tentar login')
      setIsLoading(false)
    }
  };

  const handleForgotPassword = () => {
    if (email == null || email.trim().length == 0) {
      alert('Digite um email válido');
      return false;
    }
   
    try {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => alert('Enviamos um email pra você!!!'))
        .then(() => {
          setEmail(''), setPassword('');
        })
        .catch(error => {
          alert('Email/Senha incorreto'),
            console.log(error, 'deu erro ao validar credenciais');
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error, 'deu erro ao validar credenciais');
    }
  };
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={{
          fontSize: 35,
          padding: 20,
          fontWeight: 'bold',
          color: '#096b63',
        }}>
        Entrar:
      </Text>
      <View style={{margin: 20, width: '85%', alignSelf: 'center'}}>
        <Text style={styles.labelTxt}>Email:</Text>
        <TextInput
          defaultValue={email}
          onChangeText={e => setEmail(e)}
          style={styles.inputStyle}
          placeholder={'example@gmail.com'}
        />
        <Text style={styles.labelTxt}>Senha:</Text>
        <TextInput
          defaultValue={password}
          onChangeText={e => setPassword(e)}
          style={styles.inputStyle}
          placeholder={'******'}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        disabled={isLoading}
        onPress={handleSignIn}
        style={styles.loginBtn}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.loginTxt}>LOGIN</Text>
        )}
      </TouchableOpacity>
      <View style={styles.secondaryWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.signInBtn}>
          <Text style={styles.createNewTxt}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleForgotPassword}
          style={styles.signInBtn}>
          <Text style={styles.createNewTxt}>Esqueceu senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    height: '100%',
    width: '100%',
    backgroundColor: '#f7f7f7',
    marginTop:40
  },
  inputStyle: {
    padding: 15,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#096b63',
    elevation: 7,
    borderRadius: 5,
    marginBottom: 30,
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  loginBtn: {
    // padding: 20,
    elevation: 20,
    borderRadius: 10,
    width: '50%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#096b63',
  },

  loginTxt: {
    fontSize: 17,
    color: '#ffff',
  },
  labelTxt: {
    fontSize: 20,
    color: '#096b63',
    paddingBottom: 10,
  },
  createNewTxt: {
    fontSize: 18,
    color: '#161616',
    fontWeight: '600',
  },
  signInBtn: {
    margin: 20,
    // height:40,
    // backgroundColor: '#ffff',
  },
  secondaryWrapper: {
    marginTop: 20,
    // alignSelf: 'center',
    alignItems: 'center',
    // alignContent:'space-around',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default LoginScreen;
