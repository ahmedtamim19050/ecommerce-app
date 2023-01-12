import { Alert, Image, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import CartItem from '../component/CartItem';
import CartItems from '../data/NewArrivalData'





const Cart = () => {
  const [count, setCount] = useState(0)
  const handleMinusCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      {
        CartItems.map(item=>{
          return (
          <CartItem item={item}/>
          )
        })
      }
      <View style={styles.promoCodeSec}>
        <TextInput label="Text"  placeholder="Promo Code" style={styles.promoCode}/>
        <View style={styles.applybtnSec}>
          <Text style={styles.applybtn}>Apply</Text>
        </View>
      </View>
      <View style={styles.accountSec}>
        <View style={styles.item}>
          <Text style={styles.accountTitle}>Subtotal :</Text>
          <Text style={styles.price}>$483.00</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.accountTitle}>Shipping :</Text>
          <Text style={styles.price}>$18.00</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.accountTitle}>Discount :</Text>
          <Text style={styles.price}>$5.00</Text>
        </View>
        <View style={[styles.item,styles.BorderNone]}>
          <Text style={styles.accountTitle}>Total :</Text>
          <View style={styles.totalSec}>
            <Text style={styles.itemCount}>(3 item)</Text>
          <Text style={[styles.price,styles.totalPrice]}>$506.00</Text>
          </View>
        </View>

      </View>
  
    </View>
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom:80,
    marginTop:20,
  },
  promoCode:{
    height:60,
    backgroundColor: "#fff",
    borderRadius:20,
    paddingHorizontal:20,
    fontSize:16,
    color:'#666'
  },
  applybtn:{
    backgroundColor:'#ff375f',
    width:70,
    textAlign:'center',
    paddingVertical:10,
    borderRadius:10,
    fontSize:16,
    color:'#fff',
    fontWeight:'500',
  },
  promoCodeSec:{
    position:'relative',
  },
  applybtnSec:{
    position:'absolute',
    right:10,
    top:7,
  },
  accountSec:{
    backgroundColor:'#fff',
    marginTop:20,
    borderRadius:20,
  },
  item:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20,
      marginHorizontal:15,
      borderBottomColor:'#e0e0e0',
      borderBottomWidth:1,
      paddingBottom:20,
  },
  accountTitle:{
    fontSize:14,
    fontWeight:'500',
    color:"#666",
  },
  price:{
    fontSize:18,
    color:"#555",
    fontWeight:'600',
  },
  totalSec:{
    flexDirection:'row',
  },
  totalPrice:{
    marginLeft:8,
  },
  itemCount:{
    color:'#888',
  },
  BorderNone:{
    borderBottomWidth:0,
  }
 
})