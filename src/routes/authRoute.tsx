import  React, {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login';
import MainScreen from '../screens/mainpage';
import SplashScreen from '../screens/splash';
import SignIn from '../screens/signIn/signIn';



const Stack = createNativeStackNavigator();
export type RootStackParamList = {
    Splash: undefined
    Login: undefined
    Main: undefined
    SignIn: undefined

  };


const AuthRoutes = () => {
  return (
  
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
   
  );
};

export default AuthRoutes