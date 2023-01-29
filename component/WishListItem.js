import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

const WishListItem = ({ item,navigation }) => {
    return (
        <View style={styles.productSec}>
            <View style={styles.imageSec}>
                <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.productInfo}>
                <View style={styles.productNameSec}>
                    <View style={styles.titleSec}>
                        <Text style={styles.productTitle}>{item.title} </Text>
                        <Ionicons style={[styles.deleteIcon]} name='trash-outline' size={23} color="#fff"  />
                        
                    </View>
                    <Text style={styles.categoryTitle}>Sunglasess</Text>
                    <Text style={styles.shortDesc}>{item.shortDesc}</Text>
                </View>
                <View style={styles.priceSec}>
                    <Text style={styles.price}>{item.price}</Text>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('My Cart')}>
                        <Text style={styles.cartBtn}>Add To Bag</Text>
                        </TouchableOpacity>
                  
                    </View>
                </View>

            </View>
        </View>
    )
}

export default WishListItem

const styles = StyleSheet.create({
    imageSec: {
        height: 150,
        width: '30%',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    productInfo: {
        height: 150,
        width: 260,
        justifyContent: 'space-between',


    },
    productSec: {
        flexDirection: 'row',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 20,
    
    },
    productTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555'
    },
    productNameSec: {
        marginHorizontal: 20,
    },
    categoryTitle: {
        fontSize: 14,
        marginTop: 5,
        color: '#888',

    },
    priceSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#F25292',
    },
    cartBtn: {
        backgroundColor: '#59569D',
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#fff',
        borderRadius: 10,
    },
    shortDesc: {
        fontSize: 12,
        color: '#888',
        marginTop: 10,

    },
    titleSec:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    deleteIcon:{
    backgroundColor:'#F25292',
    paddingHorizontal:5,
    paddingVertical:5,
    borderRadius:30,

    }
})