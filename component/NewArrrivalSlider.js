import React, { Component,useRef } from 'react'
import newArrivalProducts from '../data/NewArrivalData';
import NewArrival from './NewArrival';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import Pagination from './Pagination';
import NewArrivalQuery from '../data/NewArrivalQuery';
import Loader from './Loader';

const { width, height } = Dimensions.get('screen')
const NewArrrivalSlider = ({ navigation }) => {
  const newArrival=NewArrivalQuery();
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = event => {
    Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          }
        }
      },
    ], {
      useNativeDriver: false,
    })(event);
  }
  return (
    <View>
      {
        newArrival.isLoading ?(
          <Loader/>
        ):
        (
          <FlatList horizontal pagingEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          data={newArrival.data}
          onScroll={handleOnScroll}
    
          renderItem={({ item }) => <NewArrival key={item.id} item={item} navigation={navigation} />} />
        )
      }
      <Pagination data={newArrivalProducts} scrollX={scrollX}/>

    </View>


  )
}

export default NewArrrivalSlider

const styles = StyleSheet.create({})
