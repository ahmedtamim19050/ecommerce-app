import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// const { width, height } = Dimensions.get('window')
const Category = ({item,navigation}) => {
    const [category, setCategory] = useState('');

    const handeCategory = (item) => {
      // setSize(true);
      setCategory(curr => {
        if (curr === item) return curr;
        return item;
      })
    }


 
    return (
        
        <View style={styles.CategorySection} key={item.id} >
            
            <View style={[styles.container, styles.shadowProp,category===item.title ? styles.active :''  ]}>
                 <TouchableOpacity onPress={()=>handeCategory(item.title)} style={styles.item}>
               
                    <Text style={[styles.title, category===item.title ? styles.active :'' ]} onPress={()=>navigation.navigate('All Products')}>{item.title}</Text>
                </TouchableOpacity>
               
            </View>
        </View>
    
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#59569D',
        // width: '40%',
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#171717',  
        elevation: 10,  
    },
    shadowProp: {
        shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    // item: {
    //     flexDirection: 'row',
    //     justifyContent:'space-around',
    //     alignItems: 'center',

    // },
    title: {
        fontSize: 15,
        marginLeft: 10,
        paddingLeft:15,
        paddingRight:20,
        fontWeight: '600',
        color: '#fff'
    },
    CategorySection:{
     height:75,
    //  width:150,
     marginHorizontal:10,
      

    },
    active:{
     backgroundColor:'#59569D',
     color:'#fff',
    }
})