import { StyleSheet, Text, View, TextInput, ScrollView, Modal, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather, Octicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import SearchHistory from '../component/SearchHistory';
import products from '../data/ProductsData2';
import ProductSingle from './ProductSingle';
import Product2 from '../component/Product2';
import Product3 from '../component/Product3';
import BrandSliders from '../component/BrandSliders';
import ColorSlider from '../component/ColorSlider';
import PriceRange from '../component/PriceRange';
import Review from '../component/Review';
import AllProductsQuery from '../data/AllProductsQuery';


const Shop = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [colorDown, setColorDown] = useState(false);
  const [priceRange, setPriceRange] = useState(false);
  const [review, setReview] = useState(false);
  const [view, setView] = useState(true);
  const handleView = (q) => {
    setView(curr => {
      if (curr === q) return curr;
      return q;
    })
  }
  const {data,isLoading}=AllProductsQuery();
  console.log(isLoading);
 isLoading == false && console.log(data[0]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.filterSec}>
            <View style={styles.filters}>
              <View style={styles.fiterItem}>
                <Feather name='bar-chart-2' size={24} color="#59569D" style={styles.ShortIcon} />
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#59569D' }}>Short</Text>
              </View>
              <View style={styles.fiterItem}>
                <Ionicons name='options-outline' size={24} color="#59569D" style={styles.ShortIcon} />
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#59569D' }}>Refine</Text>
              </View>
            </View>
            <View style={styles.filters}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.fiterItem}>
                  <Ionicons name='filter-outline' size={24} color="#59569D" style={styles.filterIcon} />
                </View>
              </TouchableOpacity>
              {
                view ?
                  <TouchableOpacity onPress={() => handleView(false)}>
                    <View style={styles.fiterItem}>
                      <Ionicons name='list' size={24} color="#59569D" style={styles.filterIcon} />
                    </View>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => handleView(true)}>
                    <View style={styles.fiterItem}>
                      <Ionicons name='grid-outline' size={24} color="#59569D" style={styles.filterIcon} />
                    </View>
                  </TouchableOpacity>
              }


              {/* <View style={styles.fiterItem}>
                <Ionicons name='list' size={24} color="#59569D" style={styles.filterIcon} />
              </View> */}

            </View>
          </View>
        </View>
        <View style={styles.searchSection}>
          <TextInput style={styles.search}
            label="Text"
            value={text}
            placeholder="Search..."
            onChangeText={text => setText(text)}
          />
          <View style={styles.searchBtn}>
            <Octicons name="search" size={20} color="#59569D" />

          </View>
        </View>
        <SearchHistory />
        {
          view ? 
          <View style={styles.products}>
            {
              isLoading ? (
                <Text>Loading</Text>
              ):(
                data.map((item) => {
                  return <Product2 navigation={navigation} key={item.id} item={item} />
                })
              )
            
            }
          </View> :
                 <View style={styles.products2}>
                 {
                   products.map((item) => {
                     return <Product3 navigation={navigation} key={item.id} item={item} />
                   })
                 }
               </View>
        }

      </View>
      {/* Modal start */}
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

      {/* Modal End */}
    </ScrollView>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginBottom: 80,
    marginTop: 50,
  },
  filterSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 17,

  },
  fiterItem: {
    flexDirection: 'row',
    marginLeft: 15,
    paddingVertical: 15,
  },
  filters: {
    flexDirection: 'row',
  },
  filterIcon: {
    // marginRight:5,
  },
  ShortIcon: {
    marginRight: 4,
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
    color: '#59569D',


  },
  searchSection: {
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center',

  },
  searchBtn: {
    position: 'absolute',
    right: 24,
    top: 20,
    color: '#777'
  },
  products: {

    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },

  // modal css
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

    marginBottom: 20,
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
  },
})