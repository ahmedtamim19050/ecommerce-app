import { StyleSheet, Text, View, TextInput,ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, AntDesign,FontAwesome5 } from '@expo/vector-icons';


const Checkout = ({navigation}) => {
    const [isPickUpPoint, setIsPickUpPoint] = useState(false);
    const pickUpPointHandle = (isPickUp) => {
        setIsPickUpPoint(curr => {
            if (curr === isPickUp) return curr;
            return isPickUp;
        })
    }
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [isSaveNext, setIsSaveNext] = useState(false);
    const saveNextHandle = () => {
        setIsSaveNext(!isSaveNext);
    }
    const [pickupAddress, setPickupAddress] = useState('');
    const pickupAddressHandle = (pickup) => {
        setPickupAddress(curr => {
            if (curr === pickup) return curr;
            return pickup;
        })
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.mainSec}>
                <View style={styles.shippingBradcam}>
                    <Ionicons name='location-outline' size={25} color="#59569D" style={styles.locationIcon} />
                    <Text style={styles.letterSpace}>----</Text>
                    <AntDesign name='creditcard' size={25} color="#888" style={styles.creditIcon} />
                    <Text style={styles.letterSpace}>----</Text>
                    <AntDesign name='checkcircle' size={25} color="#888" style={styles.checkIcon} />
                </View>
                <View style={styles.deliveryOptions}>
                    <TouchableOpacity onPress={() => pickUpPointHandle(false)}>
                        <Text  style={[styles.delivery, isPickUpPoint == false ? styles.activeDeliveriBtn : '']}>Home Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => pickUpPointHandle(true)}>
                        <Text style={[styles.delivery, isPickUpPoint == true ? styles.activeDeliveriBtn : '']}>Pick Up Point</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                {
                    isPickUpPoint == false ?
                        (
                            <View>
                                <View style={{ marginHorizontal: 20, }}>
                                    <View style={styles.inputRows}>
                                        <View>
                                            <Text style={styles.label}>First Name</Text>
                                            <TextInput style={[styles.input, styles.inputRow]}
                                                label="Text"
                                                value={firstName}
                                                placeholder="Jhon"
                                                onChangeText={firstName => setFirstName(firstName)}
                                            />
                                        </View>
                                        <View style={{ marginLeft: 10, }}>
                                            <Text style={styles.label}>First Name</Text>
                                            <TextInput style={[styles.input, styles.inputRow]}
                                                label="Text"
                                                value={lastName}
                                                placeholder="Due"
                                                onChangeText={lastName => setLastName(lastName)}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.label}>Phone</Text>
                                        <TextInput style={[styles.input]}
                                            label="Text"
                                            value={phone}
                                            placeholder="+8801*******"
                                            onChangeText={phone => setPhone(phone)}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.label}>Email</Text>
                                        <TextInput style={[styles.input]}
                                            label="Text"
                                            value={email}
                                            placeholder="jhondue@gmail.com"
                                            onChangeText={email => setEmail(email)}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.label}>Address</Text>
                                        <TextInput style={[styles.input]}
                                            label="Text"
                                            value={address}
                                            placeholder="somoloy-3, C & B road, Barisal. Exp."
                                            onChangeText={address => setAddress(address)}
                                        />
                                    </View>
                                    <View style={styles.inputRows}>
                                        <View>
                                            <Text style={styles.label}>City </Text>
                                            <TextInput style={[styles.input, styles.inputRow]}
                                                label="Text"
                                                value={city}
                                                placeholder="Barisal"
                                                onChangeText={city => setCity(city)}
                                            />
                                        </View>
                                        <View style={{ marginLeft: 10, }}>
                                            <Text style={styles.label}>Zip Code</Text>
                                            <TextInput style={[styles.input, styles.inputRow]}
                                                label="Text"
                                                value={zip}
                                                placeholder="8200"
                                                onChangeText={zip => setZip(zip)}
                                            />
                                        </View>
                                    </View>
                                    <View >
                                        <TouchableOpacity style={styles.ceckSaveSec} onPress={saveNextHandle} >
                                            <View style={styles.checkSave}>

                                                {
                                                    isSaveNext ? <AntDesign name='check' size={18} color="#888" /> : ''
                                                }


                                            </View>
                                            <Text style={styles.saveText} onPress={saveNextHandle}>Save for faster checkout next time</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.accountSec}>
                                    <View style={[styles.acountItem, styles.borderBottom]}>
                                        <Text style={styles.accountTitle}>Shipping Cost</Text>
                                        <Text style={styles.additionalPrice}>$5.50</Text>
                                    </View>
                                    <View style={[styles.acountItem, styles.marginTop]}>
                                        <Text style={styles.accountTitle}>Total</Text>
                                        <Text style={styles.totalPrice}>$155.50</Text>
                                    </View>
                                </View>

                            </View>


                        ) :
                        (
                            <View style={styles.pickUpContainer}>
                                <TouchableOpacity onPress={() => pickupAddressHandle('new-york')}>
                                    <View style={styles.pickUpItem}>

                                        <View style={[styles.checkboxPick, pickupAddress === 'new-york' ? styles.pickUpCheckActive : '']}></View>
                                        <View style={styles.pickUpAddress}>
                                            <Text style={styles.pickUpCity} onPress={() => pickupAddressHandle('new-york')}>New York</Text>
                                            <Text style={styles.pickUpStreet}>29 Procious, Ranking Street</Text>
                                        </View>


                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 20, }} onPress={() => pickupAddressHandle('Washington')}>
                                    <View style={styles.pickUpItem}>

                                        <View style={[styles.checkboxPick, pickupAddress === 'Washington' ? styles.pickUpCheckActive : '']}></View>
                                        <View style={styles.pickUpAddress}>
                                            <Text style={styles.pickUpCity} onPress={() => pickupAddressHandle('Washington')}>Washington</Text>
                                            <Text style={styles.pickUpStreet}>880 elza crescent, Bonat Street</Text>
                                        </View>


                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop: 20, }} onPress={() => pickupAddressHandle('Washington')}>
                                    <View style={styles.pickUpItem}>

                                        <View style={[styles.checkboxPick, pickupAddress === 'Kalifornia' ? styles.pickUpCheckActive : '']}></View>
                                        <View style={styles.pickUpAddress}>
                                            <Text style={styles.pickUpCity} onPress={() => pickupAddressHandle('Kalifornia')}>Kalifornia</Text>
                                            <Text style={styles.pickUpStreet}>428 Idella Station Apt. 752 </Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                }

            </View>
           <TouchableOpacity onPress={()=>navigation.navigate('Payment')}>
            <View style={styles.paymentBtnSec}>
                <Text style={styles.paymentBtn}>Continue to Payment</Text>
                <FontAwesome5 name='caret-square-right' style={styles.checkoutArrowIcon} size={30} color="#fff" />
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
       marginBottom:80,
    },
    mainSec: {
        marginHorizontal: 20,
        marginTop: 20,
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
    deliveryOptions: {
        flexDirection: 'row',
        marginTop: 20,
    },
    delivery: {
        marginRight: 20,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 15,
        fontSize: 16,
        color: "#666"
    },
    activeDeliveriBtn: {
        borderColor: '#F25292',
        borderWidth: 1,
        color: '#F25292',
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#666'
    },
    label: {
        color: '#59569D',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 7,
        marginLeft: 5,
    },
    inputRows: {
        flexDirection: 'row',
    },
    inputRow: {
        width: 188,
    },
    accountSec: {
        backgroundColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,

    },
    acountItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    accountTitle: {
        color: "#666",
        fontSize: 14,
        marginBottom: 10,
        fontWeight: '600',
    },
    additionalPrice: {
        fontSize: 16,
        color: '#666',
    },
    totalPrice: {
        fontSize: 18,
        color: '#F25292',
        fontWeight: '600',
    },
    borderBottom: {
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 1,
    },
    marginTop: {
        marginTop: 10,
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
    checkboxPick: {
        height: 25,
        width: 25,
        borderColor: '#59569D',
        borderWidth: 1,
        borderRadius: 30,
    },
    pickUpItem: {
        flexDirection: 'row',
        borderBottomColor: '#d6d6d6',
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    pickUpContainer: {
        marginHorizontal: 20,
        marginTop: 40,
    },
    pickUpAddress: {
        marginLeft: 10,
    },
    pickUpCity: {
        fontSize: 18,
        color: '#555'
    },
    pickUpStreet: {
        fontSize: 12,
        color: '#777',
    },
    pickUpCheckActive: {
        backgroundColor: '#59569D',

    },
    paymentBtn: {
        backgroundColor: '#59569D',
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 20,
        color: '#fff',
        fontSize: 16,
        marginTop:20,
    },
    paymentBtnSec:{
        position:'relative',
    },
    checkoutArrowIcon:{
        position:'absolute',
        right:35,
        top:30,
    
      }

})