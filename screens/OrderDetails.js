import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';


const OrderDetails = ({ navigation }) => {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.secTitle}>Order Details</Text>
                <View style={styles.orderDetailsSec}>
                    <View>
                        <View style={styles.referces}>
                            <Text style={styles.referceTitle}>Order Reference</Text>
                            <Text style={styles.referenceItem}>#12312334</Text>
                        </View>
                        <View style={styles.referces}>
                            <Text style={styles.referceTitle}>Status</Text>
                            <Text style={[styles.referenceItem, styles.statusMssg]}>Processing in progress</Text>
                        </View>
                        <View style={styles.referces}>
                            <Text style={styles.referceTitle}>Placed On</Text>
                            <Text style={[styles.referenceItem, styles.placedDate]}>18 Jan 2023 11:53 PM</Text>
                        </View>
                    </View>
                    <View style={styles.orderDetailsRightSec}>
                        <Text style={styles.topPrice}>$30.00</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                            <Text style={styles.reOrderBtn}>Reorder</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.secTitle}>Status History</Text>
                <View style={styles.orderDetailsSec}>
                    <Text style={[styles.statusDate]}> {currentDate}</Text>
                    <Text style={[styles.statusMssg, styles.historyMassg]}>Processing in progress</Text>
                </View>
                <Text style={styles.secTitle}>Shipping Address</Text>
                <View style={[styles.orderDetailsSec, styles.shippingAdress]}>
                    <View style={styles.shippingRow}>
                        <AntDesign name='user' size={22} color="#666" style={styles.userIcon} />
                        <Text style={styles.shippingName}>John Doe</Text>
                    </View>
                    <View style={[styles.shippingRow, { marginTop: 10, }]}>
                        <Feather name='phone' size={16} color="#888" style={styles.userIcon} />
                        <Text style={styles.shippingTitle}>+8801305065919</Text>
                    </View>
                    <View style={[styles.shippingRow, { marginTop: 10, }]}>
                        <Ionicons name='md-location-outline' size={16} color="#888" style={styles.userIcon} />
                        <Text style={styles.shippingTitle}>29 Procious, Ranking Street</Text>
                    </View>

                </View>
                <Text style={styles.secTitle}>Order Summery</Text>
                <View style={[styles.orderDetailsSec, { paddingLeft: 20, justifyContent: 'flex-start' }]}>
                    <Image style={{ height: 150, width: 130, }} source={require("../assets/products/product-6.jpg")} />
                    <View style={{ width: '65%' }}>
                        <Text style={styles.productTitle}>Kafi cute T-shirt </Text>
                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5, }}>
                            <Text style={[styles.productInfoTitle, { marginRight: 40, }]}>Size</Text>
                            <Text style={styles.productAtttribute}>M</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5, }}>
                            <Text style={styles.productInfoTitle}>Quantity</Text>
                            <Text style={styles.productAtttribute}>1</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5, }}>
                            <Text style={[styles.productInfoTitle, { marginRight: 40, }]}>SKU</Text>
                            <Text style={styles.productAtttribute}>demo_6</Text>
                        </View>
                        <Text style={styles.summeriPrice}>$30.00</Text>
                    </View>
                </View>
                <Text style={styles.secTitle}>Shipping Method</Text>
                <View style={styles.orderDetailsSec}>
                    <Text style={[styles.shippingTitle, { marginLeft: 20, }]}>Pick Up Point</Text>
                </View>
                <Text style={styles.secTitle}>Payment Method</Text>
                <View style={styles.orderDetailsSec}>
                    <Text style={[styles.shippingTitle, { marginLeft: 20, }]}>Paypal</Text>
                </View>
                <Text style={styles.secTitle}>Payment Summery</Text>
                <View style={{ backgroundColor:'#fff', }}>

                    <View style={styles.accountSec}>
                        <View style={styles.border}>
                            <View style={styles.item}>
                                <Text style={styles.accountTitle}>Subtotal </Text>
                                <Text style={styles.price}>$30.00</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.accountTitle}>Shipping </Text>
                                <Text style={styles.price}>$0.00</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.accountTitle}>Discount </Text>
                                <Text style={styles.price}>$5.00</Text>
                            </View>
                        </View>
                        <View style={[styles.item]}>
                            <Text style={[styles.accountTitle, { fontSize: 17, color: '#59569D' }]}>Total :</Text>
                            <View style={styles.totalSec}>

                                <Text style={[styles.price, styles.totalPrice, { color: '#F25292',paddingBottom:85, }]}>$25.00</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default OrderDetails

const styles = StyleSheet.create({
    container: {
        // marginBottom: 69,
    },
    secTitle: {
        fontSize: 18,
        color: '#555',
        fontWeight: '600',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    referces: {
        flexDirection: 'row',
        marginLeft: 20,
        marginBottom: 10,
    },
    orderDetailsSec: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,




    },
    referceTitle: {
        fontSize: 15,
        color: '#666',
        marginRight: 20,
    },
    referenceItem: {
        fontSize: 20,
        color: '#555',
        fontWeight: '600',
    },
    statusMssg: {
        fontSize: 17,
        color: '#F25292',
    },
    placedDate: {
        fontSize: 16,
    },
    orderDetailsRightSec: {
        justifyContent: 'space-between',
    },
    topPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        textAlign: 'right',
    },
    reOrderBtn: {
        backgroundColor: '#59569D',
        color: '#fff',
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    statusDate: {
        marginLeft: 20,
        color: '#555',
        fontSize: 15,
        fontWeight: '600',
    },
    historyMassg: {
        marginRight: 20,
        fontSize: 15,
    },
    shippingRow: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    shippingName: {
        fontSize: 18,
        marginLeft: 10,
        color: '#666',
        fontWeight: '400',
    },
    shippingAdress: {
        flexDirection: 'column',
    },
    shippingTitle: {
        fontSize: 15,
        color: '#888',
        marginLeft: 10,
    },
    productTitle: {
        marginLeft: 15,
        fontSize: 17,
        marginBottom: 8,
    },
    productInfoTitle: {
        fontSize: 13,
        color: '#888',
        marginRight: 20,
    },
    productAtttribute: {
        fontSize: 13,
        color: '#888',
    },
    summeriPrice: {
        textAlign: 'right',
        marginTop: 22,
        fontSize: 16,
        color: '#888',
        fontWeight: '600',
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
    border: {
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
})