import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WishListItem = ({item}) => {
  return (
    <View style={styles.productSec}>
      <View style={styles.imageSec}>
        <Image style={styles.image} source={item.image}/>
      </View>
      <View style={styles.productInfo}>
        <View style={styles.productNameSec}>
            <Text style={styles.productTitle}>{item.title} </Text>
            <Text style={styles.categoryTitle}>Sunglasess</Text>
        </View>
        <View style={styles.priceSec}>
            <Text style={styles.price}>{item.price}</Text>
            <View>
                <Text style={styles.cartBtn}>Add To Bag</Text>
            </View>
        </View>

      </View>
    </View>
  )
}

export default WishListItem

const styles = StyleSheet.create({
    imageSec:{
        height:200,
        width:140,
    },
    image:{
        height:'100%',
        width:'100%',
    },
    productInfo:{
        height:200,
        width:260,
        justifyContent:'space-between',
        
    },
    productSec:{
       flexDirection:'row',
       borderBottomColor:'#e0e0e0',
       borderBottomWidth:1,
       paddingBottom:20,
       marginBottom:20,
    },
    productTitle:{
        fontSize:18,
        fontWeight:'600',
        color:'#555'
    },
    productNameSec:{
        marginHorizontal:20,
    },
    categoryTitle:{
        fontSize:14,
        marginTop:5,
        color:'#888',

    },
    priceSec:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
    },
    price:{
        fontSize:18,
        fontWeight:'600',
        color:'#F25292',
    },
    cartBtn:{
        backgroundColor:'#59569D',
        paddingHorizontal:20,
        paddingVertical:10,
        color:'#fff',
        borderRadius:10,
    }

})