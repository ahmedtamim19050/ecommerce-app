import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import ProductImageSlider from '../component/ProductImageSlider';
import ProductImage from '../data/NewArrivalData'
const { width, height } = Dimensions.get('screen')

const ProductSingle = ({navigation}) => {
  return (
    <View style={styles.container}>
         <FlatList horizontal 
    // snapToAlignment='center' 
    showsHorizontalScrollIndicator={false}
    data={ProductImage} 
    renderItem={({ item }) => <ProductImageSlider item={item} navigation={navigation}/>} />

     <View style={styles.infoSec}>

     </View>
    </View>
  )
}

export default ProductSingle

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#59569D',
  },
  infoSec:{
    height:200,
    backgroundColor:'#fff',
    marginTop:50,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  }
})