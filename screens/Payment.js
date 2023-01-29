import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';




const Payment = ({ navigation }) => {

    const [method, setMethod] = useState('cash-on');
    const methodHandle = (item) => {
        setMethod(curr => {
            if (curr === item) return curr;
            return item;
        })
    }
    const [isSaveNext, setIsSaveNext] = useState(false);
    const saveNextHandle = () => {
        setIsSaveNext(!isSaveNext);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.shippingBradcam}>
                    <Ionicons name='location-outline' size={25} color="#F25292" style={styles.locationIcon} />
                    <Text style={[styles.letterSpace, styles.paymentLetter]}>----</Text>
                    <AntDesign name='creditcard' size={25} color="#F25292" style={styles.creditIcon} />
                    <Text style={styles.letterSpace}>----</Text>
                    <AntDesign name='checkcircle' size={25} color="#888" style={styles.checkIcon} />
                </View>
                <View style={styles.methods}>
                    <TouchableOpacity onPress={() => methodHandle('cash-on')}>
                        <View style={[styles.methodItem, method === 'cash-on' ? styles.methodActive : '']}>
                            <FontAwesome name='money' size={20} color={method === 'cash-on' ? "#F25292" : '#666'} style={{}} />
                            <Text style={[styles.marginleft, method === 'cash-on' ? styles.methodActiveColor : '']} onPress={() => methodHandle('cash-on')}>

                                Cash on Delivery
                            </Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.methodItem, method === 'paypal' ? styles.methodActive : '']} onPress={() => methodHandle('paypal')}>

                        <Image style={{ height: 20, width: 100, }} source={require("../assets/images/Paypal-logo.png")} />

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.methodItem, method === 'stripe' ? styles.methodActive : '']} onPress={() => methodHandle('stripe')}>

                        <Image style={{ height: 20, width: 100, }} source={require("../assets/images/logo-stripe.png")} />

                    </TouchableOpacity>
                </View>

                <View>
                    {
                        [method === 'cash-on' ?
                            (
                                <View style={{ borderRadius: 100, }}>
                                    <Image style={{ height: 280, width:'100%', marginTop: 30, borderRadius: 20 }}  resizeMode='contain' source={require("../assets/images/ckzpe1c6d0002796g2awifpw8.jpg")} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Thankyou')}>
                                        <Text onPress={() => navigation.navigate('Thankyou')} style={styles.orderBtn}>Complete Order - $149.00</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : '',
                        method === 'paypal' ?
                            (<View>
                                <View style={styles.paypalHead} >
                                    <Image style={{ height: 50, width: 100 }} source={require("../assets/images/Paypal-logo.png")} />
                                    <View style={styles.paypalAcSec}>
                                        <AntDesign name='shoppingcart' size={20} color="#666" />
                                        <Text style={styles.paypalPrice}>$10.00 USD</Text>
                                    </View>
                                </View>
                                <Text style={styles.paypalTitle}>Pay With Paypal</Text>
                                <View style={{ marginTop: 30, }}>
                                    <TextInput style={[styles.input, styles.inputRow]}
                                        label="Text"
                                        value={email}
                                        placeholder="Email or phone"
                                        onChangeText={email => setEmail(email)}
                                    />
                                    <TextInput style={[styles.input, styles.inputRow]}
                                        label="password"
                                        value={password}
                                        placeholder="password"
                                        secureTextEntry={true}
                                        onChangeText={password => setPassword(password)}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate('Thankyou')}>
                                        <Text onPress={() => navigation.navigate('Thankyou')} style={styles.loginBtn}>Log In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            ) : '',
                        method === 'stripe' ?
                            (
                                <View>
                                    <Text style={styles.label}>Card Number</Text>
                                    <TextInput style={[styles.input]}
                                        label="Text"
                                        value={cardNumber}
                                        placeholder=""
                                        onChangeText={cardNumber => setCardNumber(cardNumber)}
                                    />
                                    <View >
                                        <TouchableOpacity style={styles.ceckSaveSec} onPress={saveNextHandle} >
                                            <View style={styles.checkSave}>

                                                {
                                                    isSaveNext ? <AntDesign name='check' size={18} color="#888" /> : ''
                                                }


                                            </View>
                                            <Text style={styles.saveText}>Save for faster checkout next time</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('Thankyou')}>
                                        <Text style={styles.orderBtn}>Complete Order - $149.00</Text>
                                    </TouchableOpacity>
                                </View>

                            ) : '',
                        ]
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default Payment

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
        fontWeight:'900',
    },
    methodItem: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
    },
    methods: {
        marginTop: 30,
    },
    methodTitle: {
        fontSize: 15,
        color: '#666',

    },
    methodActive: {
        borderWidth: 1,
        borderColor: '#F25292',
        color: '#F25292',
    },
    methodActiveColor: {
        color: '#F25292',
    },
    marginleft: {
        marginLeft: 10,
    },
    paypalPrice: {
        color: '#666',
        fontWeight: '600',
        marginLeft: 7,
    },
    paypalAcSec: {
        flexDirection: 'row',
        marginTop: 10,

    },
    paypalHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paypalTitle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#666',
        marginBottom: 10,

    },
    loginBtn: {
        backgroundColor: '#005ba6',
        paddingVertical: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 10,
        borderRadius: 10,
    },
    label: {
        color: '#59569D',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 7,
        marginLeft: 5,
    },
    checkSave: {
        height: 20,
        width: 20,
        borderColor: '#59569D',
        borderWidth: 1,
        borderRadius: 5,
    },
    ceckSaveSec: {
        flexDirection: 'row',
        marginTop: 15,
    },
    saveText: {
        marginLeft: 10,
        color: '#59569D',
    },
    orderBtn: {
        backgroundColor: '#59569D',
        marginTop: 20,
        paddingVertical: 10,
        textAlign: 'center',
        color: '#fff',
        borderRadius: 10,
        fontSize: 15,
        fontWeight: '600',
    }

})