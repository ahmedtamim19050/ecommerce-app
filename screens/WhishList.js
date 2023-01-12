import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WishListItem from '../component/WishListItem'
import whislistItems from '../data/NewArrivalData'

const WhishList = () => {
  return (
    <View style={styles.container}>
      {
        whislistItems.map(item =>{
          return (<WishListItem item={item} key={item.id}/>)
        })
      }
      
    </View>
  )
}

export default WhishList

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    marginTop:20,
    marginBottom:80,
  }
})