import React, { Component } from 'react'
import Category from './Category';
import categories from '../data/CategoriData';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import CategoryQuery from '../data/CategoryQuery';


const CategoriSlider = ({navigation}) => {
  const categories=CategoryQuery();
  return (
    <FlatList horizontal 
    // snapToAlignment='center' 
    showsHorizontalScrollIndicator={false}
    data={categories.data} 
    renderItem={({ item }) => <Category item={item} key={item.id}  navigation={navigation}/>} />
  )
}

export default CategoriSlider

const styles = StyleSheet.create({})
