import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable, Button, Input, TouchableHighlight, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import Slider from '../component/Slider';
import Product from '../component/Product';
import NewArrival from '../component/NewArrival';
import NewArrrivalSlider from '../component/NewArrrivalSlider';
import TopsalesSlider from '../component/TopsalesSlider';
import CategoriSlider from '../component/CategoriSlider';
import HomeFilter from '../component/HomeFilter';
import BrandSliders from '../component/BrandSliders';
import ColorSlider from '../component/ColorSlider';
import PriceRange from '../component/PriceRange';
import Review from '../component/Review';
import { useFonts } from 'expo-font';
import NewArrivalQuery from '../data/NewArrivalQuery';
import { CartContext } from '../Global/CartContext';



export default function Home({ navigation }) {

  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [colorDown, setColorDown] = useState(false);
  const [priceRange, setPriceRange] = useState(false);
  const [review, setReview] = useState(false);
  const [fontsLoaded] = useFonts({
    'Inter': require('../fonts/GreatVibes-Regular.ttf'),
    'Roboto': require('../fonts/Roboto/Roboto-Medium.ttf'),


  });
  if (!fontsLoaded) {
    return undefined;
  }
  const {val,setVal}=useContext(CartContext);



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
              placeholder="Search..."
              onChangeText={text => setText(text)}
            />
            <View style={styles.searchBtn}>
              <Link to="/">
                <Octicons name="search" size={20} color="#59569D" />
              </Link>
            </View>

            <TouchableHighlight onPress={() => setModalVisible(true)} style={styles.filterBtn}>
              <View>
                <Octicons name="filter" size={18} color="white" />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.categorySec}>
                  <View style={styles.categoryRows}>
                    <Text style={styles.categoryText}>Category</Text>
                    <TouchableOpacity style={styles.viewAllSec}>
                      <Text style={styles.viewText}> View All</Text>
                      <AntDesign name="right" size={20} color="#666" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.categorySec}>
                  <View style={styles.categoryRows}>
                    <Text style={styles.categoryText}>Brand</Text>
                    <TouchableOpacity style={styles.viewAllSec}>
                      <Text style={styles.viewText}> View All</Text>
                      <AntDesign name="right" size={20} color="#666" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.sliders}>
                    <BrandSliders />
                  </View>
                </View>
                <View style={styles.categorySec}>
                  <TouchableOpacity onPress={() => setColorDown(!colorDown)}>
                    <View style={styles.categoryRows}>
                      <Text style={styles.categoryText}>Color</Text>
                      <TouchableOpacity onPress={() => setColorDown(true)} style={styles.viewAllSec}>
                        {
                          colorDown ?
                            <AntDesign name="up" onPress={() => setColorDown(!colorDown)} size={20} color="#666" />
                            :

                            <AntDesign name="down" onPress={() => setColorDown(!colorDown)} size={20} color="#666" />
                        }

                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.sliders}>
                    {
                      colorDown ? <ColorSlider /> : ''
                    }
                  </View>
                </View>

                <View style={styles.categorySec}>
                  <TouchableOpacity onPress={() => setPriceRange(!priceRange)}>
                    <View style={styles.categoryRows}>
                      <Text style={styles.categoryText}>Price Range</Text>

                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.priceText}>0 - $250</Text>
                        <TouchableOpacity onPress={() => setPriceRange(true)} style={styles.viewAllSec}>
                          {
                            priceRange ?
                              <AntDesign name="up" onPress={() => setPriceRange(!priceRange)} size={20} color="#666" />
                              :

                              <AntDesign name="down" onPress={() => setPriceRange(!priceRange)} size={20} color="#666" />
                          }

                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.sliders}>
                    {
                      priceRange ? <PriceRange /> : ''
                    }
                  </View>
                </View>
                <View style={styles.categorySec}>
                  <TouchableOpacity onPress={() => setReview(!review)}>
                    <View style={styles.categoryRows}>
                      <Text style={styles.categoryText}>Customer Review</Text>

                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setReview(true)} style={styles.viewAllSec}>
                          {
                            review ?
                              <AntDesign name="up" onPress={() => setReview(!review)} size={20} color="#666" />
                              :

                              <AntDesign name="down" onPress={() => setReview(!review)} size={20} color="#666" />
                          }

                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.sliders}>
                    {
                      review ? <Review /> : ''
                    }
                  </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('All Products')}>
                  <Text style={styles.showBtn}>Show 345 results</Text>
                </TouchableOpacity>

                <Pressable
                  style={[styles.closeBtn,]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="closecircleo" size={30} color="#F25292" />
                </Pressable>
              </View>
            </View>
          </Modal >

        </View>


        <Slider />
        <View style={styles.populerSec}>
          <Text style={styles.secTitle}>Categories</Text>


          <TouchableHighlight>
            <Text style={styles.viewBtn} onPress={() => navigation.navigate('All Products')}>View All</Text>
          </TouchableHighlight>
        </View>
        <CategoriSlider navigation={navigation} />
        {/* New Arrival */}
        <View style={styles.populerSec}>
          <Text style={styles.secTitle}>New Arrival</Text>


          <TouchableHighlight>
            <Text style={styles.viewBtn} onPress={() => navigation.navigate('All Products')}>View All</Text>
          </TouchableHighlight>
        </View>
        <View>
          <NewArrrivalSlider navigation={navigation} />
        </View>

        {/* New Arrival End */}
        {/* Top Sales */}
        <View style={styles.populerSec}>
          <Text style={styles.secTitle}>Top Sales</Text>


          <TouchableHighlight>
            <Text style={styles.viewBtn} onPress={() => navigation.navigate('All Products')}>View All</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TopsalesSlider navigation={navigation} />
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
    marginBottom: 70,
    marginTop: 50,

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
    color: '#59569D'
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
    backgroundColor: '#59569D',
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
    fontFamily: 'Roboto',

  },
  populerSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,

  },
  viewBtn: {
    fontSize: 15,
    marginRight: 10,
    color: '#555',
    marginTop: 5,

  },
  populerProdcuts: {
    flexDirection: 'row',
    marginHorizontal: 9,
    flexWrap: "wrap",

  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 70,
    paddingBottom: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    position: 'relative',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  categorySec: {

    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    paddingBottom: 20,
  },
  categoryRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  viewAllSec: {
    flexDirection: 'row',

  },
  viewText: {
    marginRight: 10,
    fontSize: 15,
    color: '#666',
    fontWeight: '500',
  },
  sliders: {
    marginTop: 15,
  },
  closeBtn: {
    position: 'absolute',
    right: 25,
    top: 15,
  },
  priceText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '600',
    color: '#59569D'
  },
  showBtn: {
    backgroundColor: '#F25292',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 10,
  }


});
