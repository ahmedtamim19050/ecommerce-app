import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import {removeCartItem,} from './feature/CartSlice'
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({item}) => {
    const [count, setCount] = useState(1)
    const handleMinusCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const dispatch = useDispatch();
    const items=useSelector(state=>state.cart);
    const removeItem=index=>{
      dispatch(removeCartItem(index))
    }
    const regex = /(<([^>]+)>)/ig;
    return (
        <View style={styles.container}>
            <View style={styles.imageSec}>
                <Image style={styles.image} resizeMode='contain' source={{uri:item ?.images[0]?.src}} />
                <View style={styles.quantitySec}>
                    <AntDesign name='minus' onPress={() => handleMinusCount()} size={20} color="#fff" style={{  }} />
                    <Text style={styles.quantityAmmount}>{count}</Text>
                    <TouchableOpacity >
                    <AntDesign onPress={() => setCount(count + 1)} name='plus' size={19} color="#fff" style={{  }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.cartDeleteSec}>
                <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.wishlist}>
                    <AntDesign name='delete' size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
           
               
            </View>
            <View style={styles.infoSec}>
                <View style={styles.info}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.desc}>{item.short_description.replace(regex, '')}</Text>
                </View>
                <Text style={[styles.title,styles.price]}>${item.price}</Text>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        marginBottom:25,
    },
    imageSec: {
        height: 130,
        position: 'relative',
    
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
      },
      quantitySec: {
        flexDirection: 'row',
        backgroundColor: "#59569D",
        width: 100,
        position: 'absolute',
        bottom: 20,
        left: 20,
        paddingVertical: 7,
        justifyContent: 'center',
        borderRadius: 20,
    
      },
      quantityAmmount: {
        fontSize: 16,
        marginHorizontal: 15,
        color: '#fff',
        fontWeight: '600',
      },
      cartDeleteSec: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#F25292',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        top: 10,
      },
      infoSec: {
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      desc: {
        color: '#777',
        fontSize: 12,
      },
      title: {
        fontSize: 17,
        fontWeight: '600',
        color: '#666'
      },
      price:{
        color:'#F25292',
      }
    
})