import { StyleSheet, Text, View,Animated ,Dimensions} from 'react-native'
import React from 'react'
const {width}=Dimensions.get('screen')
const Pagination = ({data,scrollX}) => {
  return (
    <View style={styles.container} key={data.id}>
     {
        data.map((_,idx)=>{
            const inputRange=[(idx-1) * width, idx * width,(idx + 1)* width ]
            // const dotWidth=scrollX.interpolate({
            //     inputRange,
            //     outputRang:[120,30,12], 
            // })
            return <Animated.View style={styles.dot}/>
        })
     }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    dot:{
        width:12,
        height:12,
        borderRadius:6,
        backgroundColor:'#ccc',
        marginHorizontal:3,
    },
    container:{
      flexDirection:'row',
      marginTop:15,
      alignItems:'center',
      width:'100%',
      justifyContent:'center'

    }
})