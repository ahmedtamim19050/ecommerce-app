import React, { Component } from 'react'
import Category from './Category';
import categories from '../data/CategoriData';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'


const CategoriSlider = ({navigation}) => {
  return (
    <FlatList horizontal 
    // snapToAlignment='center' 
    showsHorizontalScrollIndicator={false}
    data={categories} 
    renderItem={({ item }) => <Category item={item}  navigation={navigation}/>} />
  )
}

export default CategoriSlider

const styles = StyleSheet.create({})
