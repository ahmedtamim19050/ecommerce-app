import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import NewArrivalQuery from '../data/NewArrivalQuery';
import products from '../data/ProductsData';
import Loader from './Loader';
import Product from './Product';

const TopsalesSlider = ({navigation}) => {
  const newArrival=NewArrivalQuery();

    return (

      <View style={styles.container}>
        {
          newArrival.isLoading ? (
            <Loader/>
          ):(
            <FlatList horizontal
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            data={newArrival.data}
            renderItem={({ item }) => <Product key={item.id} navigation={navigation} item={item} />} />
          )
        }

      </View>
    )
  }


export default TopsalesSlider

const styles = StyleSheet.create({
container:{
  marginHorizontal:10,
}


});
