import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';




const Product3 = ({ item, navigation }) => {
    const [wishlist, setWishlist] = useState('');

    const handleWishlist = (q) => {
        setWishlist(curr => {
            if (curr === q) return null;
            return q;
        })
    }
    const regex = /(<([^>]+)>)/ig;
    return (
        <View style={styles.productsSec}>
            <View style={styles.container}>
                <View>
                    <View style={styles.thumbnailSec}>
                        <TouchableOpacity onPress={() => navigation.navigate('productSingle',{ item: item })}>
                            <Image style={styles.image} resizeMode='contain' source={{uri:item ?.images[0]?.src}} />
                        </TouchableOpacity>
                        <View style={styles.addCart}>
                            <TouchableOpacity onPress={() => navigation.navigate('My Cart')}>
                                <Entypo name='plus' size={30} color="white" />
                            </TouchableOpacity>
                        </View>

                        {item.type ? (<View style={[styles.statusSec, item.type=='new' ? styles.primary : '', item.type == "free_heeping" ? styles.secondery : '']}>
                            <Text style={[styles.priceStatus, item.priceStatus == "NEW" ? styles.primary : '', item.type == "free_heeping" ? styles.secondery : '']}>{ item.type}</Text>
                        </View>) : ''}

                        <TouchableOpacity onPress={() => handleWishlist(item.id)} style={styles.wishlist}>
                            <Ionicons name={wishlist === item.id ? 'heart' : 'heart-outline'} size={25} color="#F25292" />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.info}>
                        <Text style={styles.title} onPress={() => navigation.navigate('productSingle')}>{item.name}</Text>
                        <Text style={{marginHorizontal:5, marginTop:3,color:'#888',fontSize:16}}>{item.short_description.replace(regex, '')}</Text>
                        <View style={styles.staricon}>
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#B1B2AF" style={{ marginRight: 3, }} />
                        </View>
                        <View style={styles.priceSec}>
                            {
                                item.regular_price ? (
                                    <Text style={[styles.price, styles.offerprice]}>
                                        {item.regular_price}
                                    </Text>
                                ) : ''
                            }

                            <Text style={[styles.price, item.regular_price ? styles.isOfferPrice : '']}>
                                {item.price}
                            </Text>
                        </View>


                    </View>

                </View>
            </View>
        </View>
    )
}

export default Product3

const styles = StyleSheet.create({
    productsSec: {

        width: "100%",
        marginRight: 20,
    },
    thumbnailSec: {
        height: 240,
        position: 'relative',

    },
    image: {
        height: '100%',
        width: '100%',
        // borderTopLeftRadius:10,
        // borderTopRightRadius:10,
        borderRadius: 10,

    },
    container: {
        // flex:1,
        // justifyContent:'center',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#fff',
        marginRight: 6,
        // marginLeft: 6,
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        // shadowColor: '#171717',  
        // elevation: 10,  
    },
    info: {
        width: 360,
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'left',
        color: '#555',
        fontWeight: '600',
        marginLeft: 5,

    },
    staricon: {
        flexDirection: 'row',
        marginLeft: 5,
        // marginTop: 5,
    },
    addCart: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#59569D',
        borderRadius: 10,
        shadowColor: '#171717',
        elevation: 30,



    },
    price: {

        fontSize: 14,
        fontWeight: '600',
        marginTop: 5,
        marginLeft: 8,
        color: '#555'

    },
    statusSec: {
        position: 'absolute',
        left: 0,
        backgroundColor: '#F25292',
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 7,

    },
    priceStatus: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#fff',
    },
    primary: {
        backgroundColor: '#FEA096',
        color: '#fff',
        borderRadius: 20,
    },
    wishlist: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    priceSec: {
        flexDirection: 'row',
    },
    offerprice: {
        textDecorationLine: 'line-through',
        color: '#59569D'
    },
    isOfferPrice: {
        color: '#F25292',
    },
    secondery: {
        backgroundColor: '#FEA096',
        color: 'black',
        borderRadius: 20,
        color: '#fff',
    }

})