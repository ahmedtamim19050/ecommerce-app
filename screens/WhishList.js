import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WishListItem from '../component/WishListItem'
import whislistItems from '../data/NewArrivalData'

const WhishList = ({navigation}) => {
  return (
    <View style={styles.container}>
      {
        whislistItems.map(item =>{
          return (<WishListItem navigation={navigation} item={item} key={item.id}/>)
        })
      }
      
    </View>
  )
}

export default WhishList

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginTop:70,
    marginBottom:80,
  }
})