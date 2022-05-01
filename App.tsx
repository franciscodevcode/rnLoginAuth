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
import Routes from './src/routes'

const App = () => {
  return (
    <View style={style.container}>
      <Routes />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  
  },
})
export default App
