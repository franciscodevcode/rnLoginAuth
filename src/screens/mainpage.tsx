import auth from '@react-native-firebase/auth';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const MainScreen = () => {
  const handleSignOut = () => {
    auth().signOut()  
  }
  return (
    <View style={{height: '100%', width: '100%', flex:1, backgroundColor:'red'}}>
    <StatusBar translucent backgroundColor={'transparent'}/>
     <View style={{marginTop:40}}>

      <TouchableOpacity onPress={handleSignOut} style={{padding:20, borderWidth:2}}>
        <Text style={{color: 'white', fontSize: 30}}>LogOUT</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MainScreen;
