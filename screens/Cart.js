import { Alert, Image, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons';
import CartItem from '../component/CartItem';
import CartItems from '../data/NewArrivalData'
import { TouchableOpacity } from 'react-native-gesture-handler';





const Cart = ({navigation}) => {
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
          <CartItem item={item} key={item.id}/>
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
      <TouchableOpacity onPress={()=>navigation.navigate('Checkout')} style={{ position:'relative' }}>
        <Text onPress={()=>navigation.navigate('Checkout')} style={styles.checkoutBtn}>Proceed to Checkout</Text>
        <FontAwesome5 name='caret-square-right' style={styles.checkoutArrowIcon} size={30} color="#fff" />
      </TouchableOpacity>
  
    </View>
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom:80,
    marginTop:70,
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
    backgroundColor:'#F25292',
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
    color:"#59569D",
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
  },
  checkoutBtn:{
    backgroundColor:'#59569D',
    paddingVertical:15,
    marginTop:15,
    paddingHorizontal:20,
    marginBottom:20,
    color:'#fff',
    fontSize:16,
    borderRadius:15,
  },
  checkoutArrowIcon:{
    position:'absolute',
    right:15,
    top:25,

  }
 
})