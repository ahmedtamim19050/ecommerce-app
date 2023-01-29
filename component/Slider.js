import { View, Text, StyleSheet,Animated } from 'react-native'
import React,{useRef} from 'react';
import Slides from '../data/index';

import { FlatList } from 'react-native-gesture-handler';
import SlideItem from './SlideItem';
import Pagination from './Pagination';


const Slider = () => {
    const scrollX=useRef(new Animated.Value(0)).current;
    const handleOnScroll =event =>{
    Animated.event([
        {
            nativeEvent:{
                contentOffset:{
                    x : scrollX,
                }
            }
        },
    ],{
        useNativeDriver:false,
    })(event);
  }


    return (

        <View>
            <FlatList horizontal pagingEnabled 
            snapToAlignment='center' 
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
         
            data={Slides} 
            renderItem={({ item }) => <SlideItem key={item.id} item={item} />} />
            <Pagination data={Slides} scrollX={scrollX}/>

       
        </View>

    )
}

export default Slider

const styles = StyleSheet.create({



});