

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Router} from 'react-native-router-flux'
import Routes from './src/components/routes'
import {Container} from 'native-base'
import Login from './src/components/login'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes/>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container:{
    display:'flex',
    height:'100%',
    width:'100%',
    alignItems:'center',
    backgroundColor:'white'
  }
});

export default App;
