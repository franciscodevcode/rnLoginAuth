import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login';
import MainScreen from '../screens/mainpage';
import SplashScreen from '../screens/splash';
import SignIn from '../screens/signIn/signIn';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import AuthRoutes from './authRoute';
import LoginRoutes from './loginRoute';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
  SignIn: undefined;
};

const Routes = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  });
  return (
    <>
      <NavigationContainer>
        {user ? <AuthRoutes /> : <LoginRoutes />}
      </NavigationContainer>
    </>
  );
};

export default Routes;
