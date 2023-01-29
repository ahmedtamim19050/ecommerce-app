import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

const ColorSliderItem = ({item}) => {
    const [color, setColor] = useState('');
    const handleColor = (q) => {
        setColor(curr => {
            if (curr === q) return curr;
            return q;
        })
    }
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>handleColor(item.title)}>
        <View style={[styles.itemSec, color===item.title ? styles.active :'']}>
            <Text style={color===item.title ? styles.activeColor :''}>{item.title}</Text>{
                color===item.title ? <AntDesign style={{ marginLeft: 10, }} name="check" size={20} color="#fff" /> :''
            }

        </View>
    </TouchableOpacity>
</View>
  )
}

export default ColorSliderItem

const styles = StyleSheet.create({
    container: {
        height: 50,
    },
    itemSec: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 5,
        marginHorizontal: 5,
    },
    active:{
       backgroundColor:'#59569D',
    },
    activeColor:{
        color:'#fff',

    }
})