import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FullPage from './src/compenents/stacks/FullPage';



export default function App() {

 

  return (
    
      <NativeBaseProvider>
      <FullPage />
      <StatusBar style="auto" />
      </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
