import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import products from '../data/ProductsData';
import Product from './Product';

export class TopsalesSlider extends Component {
  render() {
    return (

      <View style={styles.container}>
        <FlatList horizontal
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => <Product item={item} />} />
      </View>
    )
  }
}

export default TopsalesSlider

const styles = StyleSheet.create({
container:{
  marginHorizontal:10,
}


});
