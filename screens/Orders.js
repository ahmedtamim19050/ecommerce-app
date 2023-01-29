import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Orders = ({navigation}) => {
    const [status, setStatus] = useState('delivered');
    const methodStatusHandle = (item) => {
        setStatus(curr => {
            if (curr === item) return curr;
            return item;
        })
    }
    return (
        <View>
            <View style={styles.orderSatusBtns}>
                <TouchableOpacity onPress={() => methodStatusHandle('delivered')}>
                    <Text style={[styles.orderStatusBtn, status === 'delivered' ? styles.active : '']}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => methodStatusHandle('processing')}>
                    <Text style={[styles.orderStatusBtn, status === 'processing' ? styles.active : '']}>Processing</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => methodStatusHandle('cancelled')}>
                    <Text style={[styles.orderStatusBtn, status === 'cancelled' ? styles.active : '']}>Cancelled</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 40, }}>
                {
                    [
                        status === 'delivered' ?
                            (
                                <View>
                                    <View style={styles.card}>
                                        <View style={styles.orderIdSec}>
                                            <Text style={styles.orderId}>Order No #237467</Text>
                                            <Text style={styles.orderDate}>06-12-22</Text>
                                        </View>
                                        <View style={styles.rows}>
                                            <Text style={styles.trakingLabel}>Tracking number</Text>
                                            <Text style={styles.trakingItem}>#43759SEF</Text>
                                        </View>
                                        <View style={[styles.rows, { justifyContent: 'space-between', }]}>
                                            <View style={styles.rows}>
                                                <Text style={styles.trakingLabel}>Quantity</Text>
                                                <Text style={styles.trakingItem}>1</Text>
                                            </View>
                                            <View style={styles.rows}>
                                                <Text style={styles.trakingLabel}>Total Ammount</Text>
                                                <Text style={styles.trakingItem}>$112.00</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection:'row',justifyContent:'space-between', marginTop:10, }}>
                                            <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                                                <Text style={styles.detailsBtn}>Details</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.deliverdMsg}>Delivered</Text>
                                        </View>
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.orderIdSec}>
                                            <Text style={styles.orderId}>Order No #237467</Text>
                                            <Text style={styles.orderDate}>06-12-22</Text>
                                        </View>
                                        <View style={styles.rows}>
                                            <Text style={styles.trakingLabel}>Tracking number</Text>
                                            <Text style={styles.trakingItem}>#43759SEF</Text>
                                        </View>
                                        <View style={[styles.rows, { justifyContent: 'space-between', }]}>
                                            <View style={styles.rows}>
                                                <Text style={styles.trakingLabel}>Quantity</Text>
                                                <Text style={styles.trakingItem}>1</Text>
                                            </View>
                                            <View style={styles.rows}>
                                                <Text style={styles.trakingLabel}>Total Ammount</Text>
                                                <Text style={styles.trakingItem}>$112.00</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection:'row',justifyContent:'space-between', marginTop:10, }}>
                                            <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                                                <Text style={styles.detailsBtn}>Details</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.deliverdMsg}>Delivered</Text>
                                        </View>
                                    </View>
                                </View>
                            ) : '',
                        status === 'processing' ?
                            (
                                <View>
                                <View style={styles.card}>
                                    <View style={styles.orderIdSec}>
                                        <Text style={styles.orderId}>Order No #237467</Text>
                                        <Text style={styles.orderDate}>06-12-22</Text>
                                    </View>
                                    <View style={styles.rows}>
                                        <Text style={styles.trakingLabel}>Tracking number</Text>
                                        <Text style={styles.trakingItem}>#43759SEF</Text>
                                    </View>
                                    <View style={[styles.rows, { justifyContent: 'space-between', }]}>
                                        <View style={styles.rows}>
                                            <Text style={styles.trakingLabel}>Quantity</Text>
                                            <Text style={styles.trakingItem}>1</Text>
                                        </View>
                                        <View style={styles.rows}>
                                            <Text style={styles.trakingLabel}>Total Ammount</Text>
                                            <Text style={styles.trakingItem}>$112.00</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection:'row',justifyContent:'space-between', marginTop:10, }}>
                                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                                            <Text style={styles.detailsBtn}>Details</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.processingMsg}>Processing</Text>
                                    </View>
                                </View>
                
                            </View>
                            ) : '',
                        status === 'cancelled' ?
                            (
                                <Text style={{ textAlign:'center', fontSize:16, color:'#FEA096' }}>Not Items Found</Text>
                            ) : '',
                    ]
                }
            </View>
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({
    orderSatusBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    orderStatusBtn: {
        marginHorizontal: 10,
        backgroundColor: '#59569D',
        paddingHorizontal: 20,
        paddingVertical: 7,
        color: '#fff',
        fontSize: 16,
        borderRadius: 20,

    },
    active: {
        backgroundColor: '#F25292',
    },
    orderIdSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom:20,
        
    },
    orderId: {
        fontSize: 17,
        fontWeight: '600',
        color: "#555",
    },
    orderDate: {
        color: '#888',
        fontSize: 13,
    },
    rows: {
        flexDirection: 'row',
        marginTop: 10,
    },
    trakingLabel: {
        fontSize: 13,
        marginRight: 20,
        color: '#888',
    },
    trakingItem: {
        fontSize: 16,
        color: '#555',
        fontWeight: '600',
    },
    detailsBtn: {
        borderColor: '#59569D',
        borderWidth: 1,
        paddingHorizontal:20,
        paddingVertical:7,
        fontSize:16,
        color:'#59569D',
        borderRadius:20,
    },
    deliverdMsg: {
        color: '#48c774',
        marginTop:10,
        fontSize:15,
        fontWeight:'600',
    },
    processingMsg: {
        color: '#F25292',
        marginTop:10,
        fontSize:15,
        fontWeight:'600',
    }


})