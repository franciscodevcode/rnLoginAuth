import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login';
import MainScreen from './screens/mainpage';
import SplashScreen from './screens/splash';
import SignIn from './screens/signIn/signIn';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
    Splash: undefined
    Login: undefined
    Main:{ currentData: any}

  };

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes