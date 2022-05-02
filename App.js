import React from 'react'
import LoginScreen from './src/screens/login/login'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import Routes from './src/routes/index'

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar translucent backgroundColor={'#f7f7f7'}/>
      <Routes />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
})
export default App
