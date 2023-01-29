import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';


const Review = () => {
    const [review, setReview] = useState('');
    const handleReviw = (q) => {
        setReview(curr => {
            if (curr === q) return curr;
            return q;
        })
    }
    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={() => handleReviw('4')}>
                <View style={styles.starIcoSec}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>
                            <AntDesign name="star" size={18} color="#FFD701" />
                            <AntDesign name="star" size={18} color="#FFD701" />
                            <AntDesign name="star" size={18} color="#FFD701" />
                            <AntDesign name="star" size={18} color="#FFD701" />
                        </View>
                        <Text style={{ marginLeft: 20, color: '#555', fontWeight: '600' }}>& UP</Text>
                    </View>
                    <View style={[styles.radioSec, review === '4' ? styles.active : '']}>

                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={() => handleReviw('3')}>
                <View style={styles.starIcoSec}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>
                            <AntDesign name="star" size={18} color="#FFD701" />
                            <AntDesign name="star" size={18} color="#FFD701" />
                            <AntDesign name="star" size={18} color="#FFD701" />
                        </View>
                        <Text style={{ marginLeft: 37, color: '#555', fontWeight: '600' }}>& UP</Text>
                    </View>
                    <View style={[styles.radioSec, review === '3' ? styles.active : '']}>

                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={() => handleReviw('2')}>
                <View style={styles.starIcoSec}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>
                            <AntDesign name="star" size={18} color="#FFD701" />
                            <AntDesign name="star" size={18} color="#FFD701" />
                   
                        </View>
                        <Text style={{ marginLeft: 55, color: '#555', fontWeight: '600' }}>& UP</Text>
                    </View>
                    <View style={[styles.radioSec, review === '2' ? styles.active : '']}>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    container:{
       marginBottom:20,
    },
    starIcoSec: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    radioSec: {
        height: 25,
        width: 25,
        borderWidth: 3,
        borderColor: '#b7b7b7',
        borderRadius: 100,
    },
    active: {
        height: 22,
        width: 22,
        backgroundColor: '#59569D',
    }
})