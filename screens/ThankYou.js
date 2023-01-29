import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const ThankYou = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.shippingBradcam}>
                <Ionicons name='location-outline' size={25} color="#F25292" style={styles.locationIcon} />
                <Text style={[styles.letterSpace, styles.paymentLetter]}>----</Text>
                <AntDesign name='creditcard' size={25} color="#F25292" style={styles.creditIcon} />
                <Text style={[styles.letterSpace, styles.paymentLetter]}>----</Text>
                <AntDesign name='checkcircle' size={25} color="#F25292" style={styles.checkIcon} />
            </View>
            <View style={styles.thanksImage}>
                <Image style={{ height: 100, width: 100, marginTop: 80 }} source={require("../assets/images/3684620.png")} />
            </View>
            <View style={[{ marginTop: 20, }, styles.border]}>
                <Text style={styles.greetings}> Hey Ahmed, </Text>
                <Text style={styles.greetings}> Thanks for your purchase </Text>
            </View>
            <View style={styles.accountSec}>
                <View style={styles.border}>
                    <View style={styles.item}>
                        <Text style={styles.accountTitle}>Subtotal </Text>
                        <Text style={styles.price}>$483.00</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.accountTitle}>Shipping </Text>
                        <Text style={styles.price}>$18.00</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.accountTitle}>Discount </Text>
                        <Text style={styles.price}>$5.00</Text>
                    </View>
                </View>
                <View style={[styles.item]}>
                    <Text style={[styles.accountTitle, { fontSize: 17, color: '#59569D' }]}>Total :</Text>
                    <View style={styles.totalSec}>

                        <Text style={[styles.price, styles.totalPrice, { color: '#F25292' }]}>$506.00</Text>
                    </View>
                </View>

            </View>
            <View style={styles.footerBtns}>
                <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
                    <Text  style={styles.orderDetilsBtn}>Order Details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('All Products')}>
                    <Text style={[styles.orderDetilsBtn,styles.seconderyBtn]}>Continue Shipping</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ThankYou

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 80,
    },
    shippingBradcam: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    locationIcon: {
        marginRight: 20,
    },
    creditIcon: {
        marginHorizontal: 20,
    },
    checkIcon: {
        marginLeft: 20,
    },
    letterSpace: {
        letterSpacing: 20,
        fontSize: 20,
        color: '#888'

    },
    paymentLetter: {
        color: '#F25292',
        fontWeight: '900',
    },
    thanksImage: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    greetings: {
        textAlign: 'center',
        fontSize: 20,
        color: '#59569D',
    },
    border: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    accountSec: {
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 15,
    },
    accountTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: "#777",
    },
    price: {
        fontSize: 18,
        color: "#59569D",
        fontWeight: '600',
    },
    totalSec: {
        flexDirection: 'row',
    },
    totalPrice: {
        marginLeft: 8,
    },
    itemCount: {
        color: '#888',
    },
    footerBtns:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40,
    },
    orderDetilsBtn:{
        backgroundColor:'#59569D',
        marginHorizontal:10,
        paddingHorizontal:30,
        paddingVertical:10,
        color:'#fff',
        fontSize:16,
        borderRadius:10,
        fontWeight:'500',

    },
    seconderyBtn:{
        backgroundColor:'#F25292'
    }
})