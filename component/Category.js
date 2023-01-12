import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, Button } from 'react-native'
import React from 'react'
// const { width, height } = Dimensions.get('window')
const Category = ({item,navigation}) => {


 
    return (
        
        <View style={styles.CategorySection} key={item.id} >
            
            <View style={[styles.container, styles.shadowProp, item.id==1 ? styles.active :'' ]}>
                <View style={styles.item}>
                    <Text style={[styles.title, item.id==1 ? styles.active :'' ]} onPress={()=>navigation.navigate('About')}>{item.title}</Text>
                </View>
               
            </View>
        </View>
    
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#fff',
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
        paddingHorizontal:20,
        fontWeight: '600',
        color: '#666'
    },
    CategorySection:{
     height:100,
    //  width:150,
     marginHorizontal:10,
      

    },
    active:{
     backgroundColor:'#59569D',
     color:'#fff',
    }
})