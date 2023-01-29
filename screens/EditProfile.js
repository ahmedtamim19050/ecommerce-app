import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const EditProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    return (
        <View>
            <View style={{ marginHorizontal: 20, }}>
                <View style={styles.inputRows}>
                    <View style={[styles.colInput]}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput style={[styles.input, styles.inputRow]}
                            label="Text"
                            value={firstName}
                            placeholder="Jhon"
                            onChangeText={firstName => setFirstName(firstName)}
                        />
                    </View>
                    <View style={[styles.colInput,{ marginLeft: 10, }]}>
                        <Text style={styles.label}>Last Name</Text>
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
                        placeholder="jhondoe@gmail.com"
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.saveBtn}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfile

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
    // colInput:{
    //    width:'',
    // },
    inputRow: {
        width: 170,
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