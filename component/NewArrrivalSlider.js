import React, { Component } from 'react'
import newArrivalProducts from '../data/NewArrivalData';
import NewArrival from './NewArrival';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
const NewArrrivalSlider = ({navigation}) => {
  return (
    <FlatList horizontal 
    // snapToAlignment='center' 
    showsHorizontalScrollIndicator={false}
    data={newArrivalProducts} 
    renderItem={({ item }) => <NewArrival item={item} navigation={navigation}/>} />
  )
}

export default NewArrrivalSlider

const styles = StyleSheet.create({})
