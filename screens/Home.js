import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button, Input, TouchableHighlight, ImageBackground,ScrollView} from 'react-native';
import { AntDesign, Octicons, Fontisto,Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import Slider from '../component/Slider';
import Product from '../component/Product';
import NewArrival from '../component/NewArrival';
import NewArrrivalSlider from '../component/NewArrrivalSlider';
import TopsalesSlider from '../component/TopsalesSlider';
import CategoriSlider from '../component/CategoriSlider';

export default function Home({ navigation }) {
  const [text, setText] = React.useState("");
  return (
<ScrollView>
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}


      <StatusBar style="auto" />
      <View>
        <View style={styles.searchSection}>
          <TextInput style={styles.search}
            label="Text"
            value={text}
            onChangeText={text => setText(text)}
          />
          <View style={styles.searchBtn}>
            <Link to="/">
              <Octicons name="search" size={20} color="black" />
            </Link>
          </View>

          <TouchableHighlight style={styles.filterBtn}>
            <View>
              <Octicons name="filter" size={18} color="white" />
            </View>
          </TouchableHighlight>
        </View>
      </View>


      <Slider />
      <CategoriSlider navigation={navigation}/>
      {/* New Arrival */}
      <View style={styles.populerSec}>
        <Text style={styles.secTitle}>New Arrival</Text>


        <TouchableHighlight>
          <Text style={styles.viewBtn} onPress={()=>navigation.navigate('About')}>View All</Text>
        </TouchableHighlight>
      </View>
      <View>
        <NewArrrivalSlider navigation={navigation}/>
      </View>

      {/* New Arrival End */}
      {/* Top Sales */}
      <View style={styles.populerSec}>
        <Text style={styles.secTitle}>Top Sales</Text>


        <TouchableHighlight>
          <Text style={styles.viewBtn} onPress={()=>navigation.navigate('About')}>View All</Text>
        </TouchableHighlight>
      </View>
      <View>
      <TopsalesSlider/>
      </View>
      {/* Top Sales end */}
      {/* Populer Item */}
      {/* <View style={styles.populerSec}>
        <Text style={styles.secTitle}>Populer</Text>


        <TouchableHighlight>
          <Text style={styles.viewBtn} onPress={() => Linking.openURL(url)}>View All</Text>
        </TouchableHighlight>
      </View> */}
         {/* <View style={styles.populerProdcuts}>
      <Product />
 

      </View> */}
      {/* populer Item end */}


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    marginBottom:70,

  },
  search: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,

    paddingHorizontal: 10,
    width: '75%',
    borderRadius: 20,
    color: '#777'
  },
  searchSection: {
    flexDirection: 'row',
    position: 'relative',
  },
  searchBtn: {
    position: 'absolute',
    right: 105,
    top: 20,
    color: '#777'
  },
  filterBtn: {
    backgroundColor: '#4f4f4f',
    justifyContent: 'center',
    // paddingVertical:20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 0,
    height: 40,
    marginTop: 10,

  },
  bannerSection: {
    height: 400,
    width: '90%',
    backgroundColor: "red",
    marginRight: 90,
    marginLeft: 20,
    flexDirection: 'row',
  },
  bannerTexts: {
    width: '50%'
  },
  secTitle: {
    fontSize: 19,
    marginLeft: 10,
    color: '#555',
    fontWeight: '500',
    letterSpacing: 1,

},
populerSec:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
    
},
viewBtn:{
    fontSize:15,
    marginRight:10,
    color:'#555',
    marginTop:5,

},
populerProdcuts:{
  flexDirection:'row',
  marginHorizontal: 9,
  flexWrap: "wrap",
  
}

});
