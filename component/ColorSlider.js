import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import brandData from '../data/BrandData';
import ColorSliderItem from './ColorSliderItem';

const ColorSlider = () => {
  return (
    <FlatList horizontal 
    // snapToAlignment='center' 
    showsHorizontalScrollIndicator={false}
    data={brandData} 
    renderItem={({ item }) => <ColorSliderItem item={item} />} />
  )
}

export default ColorSlider

const styles = StyleSheet.create({})