import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';

const SearchItem = ({ item }) => {
    return (
        <View style={styles.container} key={item.id}>

            <Text style={[styles.title, item.id==1 ? styles.MarginRight : ''  ]}>{item.title}</Text>
            {
                item.id==1 ? "" : (
                    <Ionicons name='close' size={22} color="#666" style={styles.filterIcon} />
                )
            }

        </View>
    )
}

export default SearchItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
    },

    title: {


        // paddingHorizontal:20,
        paddingLeft: 20,
        paddingVertical: 10,
        fontSize: 15,
        color: '#777',
        fontWeight: '500',
        paddingRight:5,
    },
    filterIcon: {
        marginTop: 8,
        paddingRight: 10,
       
    },
    MarginRight:{
        paddingRight:15,
        backgroundColor:'black',
        borderRadius:20,
        color:"#fff"
    }
})