import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

const CartItem = ({item}) => {
    const [count, setCount] = useState(1)
    const handleMinusCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageSec}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.quantitySec}>
                    <AntDesign name='minus' onPress={() => handleMinusCount()} size={15} color="#666" style={{ marginTop: 5, }} />
                    <Text style={styles.quantityAmmount}>{count}</Text>

                    <AntDesign onPress={() => setCount(count + 1)} name='plus' size={14} color="#666" style={{ marginTop: 5, }} />

                </View>
                <View style={styles.cartDeleteSec}>
                    <AntDesign name='delete' size={18} color="black" />
                </View>
            </View>
            <View style={styles.infoSec}>
                <View style={styles.info}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.shortDesc}</Text>
                </View>
                <Text style={styles.title}>{item.price}</Text>
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
        backgroundColor: "#fff",
        width: 90,
        position: 'absolute',
        bottom: 20,
        left: 20,
        paddingVertical: 7,
        justifyContent: 'center',
        borderRadius: 20,
    
      },
      quantityAmmount: {
        fontSize: 16,
        marginHorizontal: 5,
        color: '#666',
        fontWeight: '600',
      },
      cartDeleteSec: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#FFD701',
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
      }
    
})