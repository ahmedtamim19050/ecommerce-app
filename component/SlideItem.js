import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen')
import { useFonts } from 'expo-font';
const SlideItem = ({ item }) => {
    const [fontsLoaded] = useFonts({
        'Inter': require('../fonts/GreatVibes-Regular.ttf'),
      });
      if(!fontsLoaded){
        return undefined;
      }
    return (
        <View style={styles.container} key={item.id}>

            <View style={styles.bannerSection}>


                <ImageBackground  imageStyle={{ borderRadius: 10,opacity:.3,backgroundColor:'#111'}} source={item.image}  style={styles.bgImage}>
                   <View style={styles.info}>
           
                      <View style={styles.offer}>
                        <Text style={styles.offerPrice}>{item.percentage} </Text>
                        <Text style={styles.offerOff}>{item.percentageTitle}</Text>
                      </View>
                      <View style={styles.titles}>
                        <Text style={styles.shopus}>Shop With Us!</Text>
                        <Text style={styles.specialSale}>{item.title}</Text>
                      </View>
    
                   </View>


                </ImageBackground>
            </View>


        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    container: {
        height: 200,
        width,
    },
    bannerSection: {
        height: 200,
        width: 398,
        marginLeft: 10,
        borderRadius: 50,
   
    },
    bgImage: {
        width:'100%',
        height:'100%',
        borderRadius: 50,


        // backgroundColor: "#D29DCA",


    },
    info:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        marginTop:60,
    },
    offer:{
        backgroundColor:'#FFD701',
        height:70,
        width:70,
        borderRadius:10,
        transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ],
        
        
        
    },
    offerPrice:{
        transform: [
            { rotateX: "0deg" },
            { rotateZ: "-40deg" }
          ],
          fontSize:24,
          marginTop:10,
          marginLeft:10,
          fontWeight:'600',
          
        
    },
    offerOff:{
        transform: [
            { rotateX: "0deg" },
            { rotateZ: "-40deg" }
          ],
        fontSize:13,
       textAlign:'center',
       marginLeft:30,
       fontWeight:'500',
    },
    titles:{
        marginLeft:20,
       
    },
    shopus:{
        color:'#fff',
        marginTop:-60,
        fontSize:16,
        fontFamily:'Inter',

        

    },
    specialSale:{
        color:'#fff',
        fontSize:25,
        fontWeight:'600'
    }
    
})