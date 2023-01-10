import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
  
    <NavigationContainer>
      <Stack.Navigator > 
      <Stack.Screen name="About" component={About} options={{ headerlargeTitle:true,headerTitleAlign: 'center' }} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})