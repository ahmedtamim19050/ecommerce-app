import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ShippingAddress = () => {
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");

    return (
        <View>
            <View style={{ marginHorizontal: 20, }}>


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
                <TouchableOpacity>
                    <Text style={styles.saveBtn}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ShippingAddress

const styles = StyleSheet.create({
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
        width: 170,
    },
    saveBtn: {
        backgroundColor: '#59569D',
        width: '30%',
        textAlign: 'center',
        marginTop: 20,
        paddingVertical: 10,
        color: '#fff',
        fontSize: 18,
        borderRadius: 20,
    },
    saveBtn:{
        backgroundColor:'#59569D',
        width:'30%',
        textAlign:'center',
        marginTop:20,
        paddingVertical:10,
        color:'#fff',
        fontSize:18,
        borderRadius:20,
    }
})