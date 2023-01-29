import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RangeSlider from "./RangeSlider";

const PriceRange = () => {
  return (
    <View>
      <RangeSlider from={4} to={200} />
    </View>
  )
}

export default PriceRange

const styles = StyleSheet.create({})