import { StyleSheet, Text, View,Image,Dimensions} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const { width, height } = Dimensions.get('screen')

const NewArrival = ({item,navigation}) => {
  return (
<View style={styles.NewArrivalSec} >
<View style={styles.container} >
        <View style={styles.thumbnail}>
        <Image style={styles.image} source={item.image} />
        </View>
        <View style={styles.info}>
                <Text style={styles.title} onPress={()=>navigation.navigate('productSingle')}>{item.title}</Text>
                <Text style={styles.shortDesc}>{item.shortDesc}</Text>

                    <Text style={styles.price}>{item.price}</Text>

            </View>
            <View style={styles.rightArrowIcon}>
            <AntDesign name="rightcircle" size={30} color="#59569D" />
            </View>

    </View>
</View>
  )
}

export default NewArrival

const styles = StyleSheet.create({
    NewArrivalSec:{
      width,
      height:150,
    },
    container:{
         marginHorizontal:10,
         backgroundColor:'#fff',
         borderRadius:10,
         shadowColor: '#171717',  
         elevation: 10,  
         marginTop:15,
         flexDirection:'row',
    },
    thumbnail:{
        height:110,
        width:130,
        padding:8,
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:10,
    },
    info:{
        width:205,
        marginHorizontal:10,
        marginVertical:10,
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        color:'#404040'
    },
    shortDesc:{
        fontSize:13,
        color:'#777'
    },
    price:{
        marginTop:5,
        fontSize:16,
        fontWeight:'600',
        color:'#F25292'
    },
    rightArrowIcon:{
        alignItems:'center',
        justifyContent:'center',
    }
})