import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BrandSliderItem from './BrandSliderItem'
import { FlatList } from 'react-native-gesture-handler';
import brandData from '../data/BrandData';


const BrandSliders = () => {
  return (
    <View>
        <FlatList horizontal 
    // snapToAlignment='center' 
    showsHorizontalScrollIndicator={false}
    data={brandData} 
    renderItem={({ item }) => <BrandSliderItem item={item} key={item.id}/>} />

    </View>
  )
}

export default BrandSliders

const styles = StyleSheet.create({})