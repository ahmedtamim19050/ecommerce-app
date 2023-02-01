import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { AntDesign, Octicons, Fontisto,Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')

const ProductImageSlider = ({item}) => {
  return (
    <View>
     <View style={styles.imageSec}>
     <Image style={styles.image} resizeMode='cover' source={item.image}/>
     {/* <AntDesign style={styles.leftArrow} name="left" size={18} color="black" />
     <AntDesign style={styles.rightArrow} name="right" size={18} color="black" /> */}
     </View>
    </View>
  )
}

export default ProductImageSlider

const styles = StyleSheet.create({
    imageSec:{
        width,
        height:350,
        position:'relative',
    },
    image:{
        height:'100%',
        width:'100%',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
    },
    leftArrow:{
       backgroundColor:'#fff',
       padding:10,
       borderRadius:100,
       position:'absolute',
       left:20,
       top:10,
    },
    rightArrow:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:100,
        position:'absolute',
        right:20,
        top:10,

    }
})