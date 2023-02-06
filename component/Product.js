import { StyleSheet, Text, View, Link, Linking, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { AntDesign, Feather } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')


const product = ({ item,navigation }) => {
    const url = 'https://www.google.com'

    return (
        <View style={styles.productsSec}>
            <View style={styles.container}>
               <TouchableOpacity onPress={()=>navigation.navigate('productSingle',{ item: item })}>
                    <View style={styles.thumbnailSec}>
                        <Image resizeMode='contain' style={styles.image} source={{uri:item ?.images[0]?.src}} />
                        <View style={styles.priceSec}>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                        {item.type?(<View style={ styles.statusSec}>
                            <Text style={{ fontSize:12,fontWeight:'500',textAlign:'center', marginTop:10,color:'#fff' }}>{item.type}</Text>
                        </View>) : ''}
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={styles.staricon}>
                            <AntDesign name='star' size={14} color="#FFD701" style={{marginRight:3,}}/>
                            <AntDesign name='star' size={14} color="#FFD701" style={{marginRight:3,}}/>
                            <AntDesign name='star' size={14} color="#FFD701" style={{marginRight:3,}}/>
                            <AntDesign name='star' size={14} color="#FFD701" style={{marginRight:3,}}/>
                            <AntDesign name='star' size={14} color="#B1B2AF" style={{marginRight:3,}}/>
                        </View>


                    </View>

                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default product

const styles = StyleSheet.create({
    thumbnailSec: {
        height: 240,
        width: 200,
        position:'relative',

    },
    image: {
        height: '100%',
        width: '100%',
        // borderTopLeftRadius:10,
        // borderTopRightRadius:10,
        borderRadius: 10,

    },
    container: {
        // flex:1,
        // justifyContent:'center',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // marginRight: ,
        marginLeft: 6,
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 20,
        // width: 190,
        // shadowColor: '#171717',  
        // elevation: 10,  
    },
    info: {
        width: 190,
    },
    title: {
        marginTop: 10,
        fontSize: 17,
        textAlign: 'left',
        color: '#555',
        fontWeight: '600',
        marginLeft: 5,

    },
    staricon: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop:5,
    },
    priceSec:{
        position:'absolute',
        backgroundColor:'#F25292',
        bottom:0,
        height:70,
        width:70,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,

    },
    price:{
          textAlign:'center',
          marginTop:25,
          fontSize:14,
          fontWeight:'600',
          color:'#fff',
          
    },
    statusSec:{
        position:'absolute',
        right:0,
        backgroundColor:'#59569D',
        // paddingHorizontal:15,
        // paddingVertical:15,
        height:45,
        width:60,
        fontWeight:'600',
        borderBottomLeftRadius:50,
   
     

        
    }

})