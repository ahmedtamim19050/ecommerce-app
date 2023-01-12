import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons,Entypo } from '@expo/vector-icons';

const Product2 = ({ item }) => {
    return (
        <View style={styles.productsSec}>
            <View style={styles.container}>
                <View>
                    <View style={styles.thumbnailSec}>
                        <Image style={styles.image} source={item.image} />
                        <View style={styles.addCart}>
                            <Entypo name='plus' size={30} color="white" />
                        </View>
                        {item.priceStatus ? (<View style={[styles.statusSec, item.priceStatus == "NEW" ? styles.primary : '' ,item.priceStatus=="Free Sheeping" ? styles.secondery :'']}>
                            <Text style={[styles.priceStatus, item.priceStatus == "NEW" ? styles.primary : '',item.priceStatus=="Free Sheeping" ? styles.secondery :'']}>{item.priceStatus}</Text>
                        </View>) : ''}
                        <View style={styles.wishlist}>
                            <Ionicons name='heart-outline' size={25} color="#F25292" />
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.staricon}>
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                            <AntDesign name='star' size={14} color="#B1B2AF" style={{ marginRight: 3, }} />
                        </View>
                        <View style={styles.priceSec}>
                            {
                                item.offerPrice ? (
                                    <Text style={[styles.price,styles.offerprice]}>
                                    {item.offerPrice}
                                </Text>
                                ) :''
                            }
                       
                            <Text style={[styles.price, item.offerPrice ? styles.isOfferPrice : '']}>
                                {item.price}
                            </Text>
                        </View>


                    </View>

                </View>
            </View>
        </View>
    )
}

export default Product2

const styles = StyleSheet.create({
    productsSec:{
      marginLeft:5,
    },
    thumbnailSec: {
        height: 240,
        width: 190,
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
        marginLeft: 6,
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: 190,
        // shadowColor: '#171717',  
        // elevation: 10,  
    },
    info: {
        width: 180,
    },
    title: {
        marginTop: 10,
        fontSize: 17,
        textAlign: 'left',
        color: '#555',
        fontWeight: '600',
        marginLeft: 5,

    },
    staricon: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 5,
    },
    addCart: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor:'#59569D',
        borderRadius:10,
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
    priceSec:{
        flexDirection:'row',
    },
    offerprice:{
        textDecorationLine:'line-through',
        color:'#59569D'
    },
    isOfferPrice:{
        color:'#F25292',
    },
    secondery:{
        backgroundColor:'#FEA096',
        color:'black',
        borderRadius: 20,
        color:'#fff',
    }

})