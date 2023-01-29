import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, } from '@expo/vector-icons';

const Notifications = () => {
    return (
        <View style={[styles.container,styles.border]}>
            <View style={[{ flexDirection:'row', },styles.card]}>
                <Ionicons name="notifications-outline" size={25} color="#666"  style={styles.notiIcon}/>
                <View style={{width:'90%',marginLeft:10,}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.notificationTitle}>High Reated Product</Text>
                        <Text style={styles.notificationDetails}>6 min ago</Text>
                    </View>
                    <Text style={styles.notificationDetails}>Lorem Ipsum is simply dummy text of the printing.</Text>
                </View>
            </View>
            <View style={[{ flexDirection:'row', },,styles.card]}>
                <Ionicons name="notifications-outline" size={25} color="#666"  style={styles.notiIcon}/>
                <View style={{width:'90%',marginLeft:10,}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.notificationTitle}>High Reated Product</Text>
                        <Text style={styles.notificationDetails}>6 min ago</Text>
                    </View>
                    <Text style={styles.notificationDetails}>Lorem Ipsum is simply dummy text of the printing.</Text>
                </View>
            </View>
            <View style={[{ flexDirection:'row', },styles.card ,styles.lastCard]}>
                <Ionicons name="notifications-outline" size={25} color="#666"  style={styles.notiIcon}/>
                <View style={{width:'90%',marginLeft:10,}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.notificationTitle}>High Reated Product</Text>
                        <Text style={styles.notificationDetails}>6 min ago</Text>
                    </View>
                    <Text style={styles.notificationDetails}>Lorem Ipsum is simply dummy text of the printing.</Text>
                </View>
            </View>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20,
        // paddingBottom: 20,
    },
    notificationTitle: {
        fontSize: 16,
        color: '#555',
        fontWeight: '600',
    },
    notificationDetails: {
        fontSize: 12,
        color: '#888',
    },
    notiIcon:{
        marginTop:10,
    },
    border:{

    },
    card:{
     marginBottom:20,
     borderBottomColor:'#e0e0e0',
     borderBottomWidth:1,
     paddingBottom:20,
    //  paddingTop:20,
    },
    lastCard:{
        borderBottomWidth:0,
        paddingBottom:0,
    }
})