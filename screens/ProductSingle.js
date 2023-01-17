import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import ProductImageSlider from '../component/ProductImageSlider';
import ProductImage from '../data/NewArrivalData'
import Pagination from '../component/Pagination'
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')

const ProductSingle = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = event => {
    Animated.event([
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          }
        }
      },
    ], {
      useNativeDriver: false,
    })(event);
  }
  const [firstIsSelected, setfirstIsSelected] = useState(false);
  const [secondIsSelected, setSecondIsSelected] = useState(false);

  const firstColorHandle = () => {
    setfirstIsSelected(!firstIsSelected)
  }
  const secondColorHandle = () => {
    setSecondIsSelected(!secondIsSelected)
  }
  const [colorSelect, setColorSelect] = useState(0);
  const handleColorSelect = (color = 0) => {
    setColorSelect(curr => {
      if (curr === color) return curr;
      return color;
    })
  }
  const [size, setSize] = useState('');

  const handleSize = (size) => {
    // setSize(true);
    setSize(curr => {
      if (curr === size) return curr;
      return size;
    })
  }
  const [count, setCount] = useState(1)
  const handleMinusCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList horizontal
          onScroll={handleOnScroll}
          // snapToAlignment='center' 
          showsHorizontalScrollIndicator={false}
          data={ProductImage}
          renderItem={({ item }) => <ProductImageSlider item={item} navigation={navigation} />} />
        <View style={{ marginTop: 10, }}>
          <Pagination data={ProductImage} scrollX={scrollX} />
        </View>

        <View style={styles.infoSec}>
          <View style={styles.headSec}>
            <View>
              <Text style={styles.productTitle}>Roller Rabit</Text>
              <Text style={styles.category}>Cosmetics</Text>
              <View style={styles.ratings}>
                <Text style={styles.ratingCount}>5k</Text>
                <View style={styles.staricon}>
                  <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                  <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                  <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                  <AntDesign name='star' size={14} color="#FFD701" style={{ marginRight: 3, }} />
                  <AntDesign name='star' size={14} color="#B1B2AF" style={{ marginRight: 3, }} />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.offerPrice}>$700.00</Text>
              <Text style={styles.price}>$650.00</Text>
            </View>
          </View>

          <View style={styles.aditionalSec}>
            <View style={styles.colorSec}>
              <Text style={styles.colorTitle}>Aditional Color</Text>
              <View style={styles.selectedItems}>
                <TouchableOpacity onPress={() => handleColorSelect()} style={{ position: 'relative' }}>
                  <View style={[styles.firstColor, colorSelect === 0 ? styles.firstActive : '',]}>
                    {colorSelect === 0 ? <AntDesign name='check' size={18} color="#fff" /> : ''}


                  </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleColorSelect(1)} style={{ position: 'relative' }}>
                  <View style={[styles.secondColor, colorSelect === 1 ? styles.secondActive : '',]}>

                    {colorSelect === 1 ? <AntDesign name='check' size={18} color="#fff" /> : ''}

                  </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleColorSelect(2)} style={{ position: 'relative' }}>
                  <View style={[styles.thirdColor, colorSelect === 2 ? styles.thirdActive : '',]}>

                    {colorSelect === 2 ? <AntDesign name='check' size={18} color="#fff" /> : ''}

                  </View>

                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.colorTitle}>Size</Text>
              <View style={styles.sizeItems}>
                <View >
                  <TouchableOpacity onPress={() => handleSize('s')}>
                    <View style={[styles.sizeItem, size === 's' ? styles.activeSize : '']}>
                      <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', fontWeight: '600', marginTop: 2, }}>S</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 5, }}>
                  <TouchableOpacity onPress={() => handleSize('m')}>
                    <View style={[styles.sizeItem, size === 'm' ? styles.activeSize : '']}>
                      <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', fontWeight: '600', marginTop: 2, }}>M</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 5, }}>
                  <TouchableOpacity onPress={() => handleSize('l')}>
                    <View style={[styles.sizeItem, size === 'l' ? styles.activeSize : '']}>
                      <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center', fontWeight: '600', marginTop: 2, }}>L</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.detailsSec}>
            <Text style={styles.detailsText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
          </View>
          <View>
            <View style={styles.cartsSec}>
              <View style={styles.quantitySec}>
                <TouchableOpacity onPress={() => handleMinusCount()}>
                <AntDesign name='minus'  size={15} color="#fff" style={{ marginTop: 5, }} />
                </TouchableOpacity>
                <Text style={styles.quantityAmmount}>{count}</Text>
                <TouchableOpacity onPress={() => setCount(count + 1)}>
                <AntDesign  name='plus' size={14} color="#fff" style={{ marginTop: 5, }} />
                </TouchableOpacity>
              </View>
              <View style={{ position:'relative' }}>
              <Text style={styles.cartBtn}>Add to cart</Text>
              <AntDesign  name='right' size={18} color="#fff" style={styles.rightArrow} />
            </View>
            </View>
         
          </View>
        </View>

      </View>
    </ScrollView>
  )
}


export default ProductSingle

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#59569D',
    // marginBottom: 80,

  },
  infoSec: {
    backgroundColor: '#fff',
    marginTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: "#59569D",
  },
  staricon: {
    flexDirection: 'row',
    marginTop: 2,
  },
  ratings: {
    flexDirection: 'row',
    marginTop: 3,
  },
  ratingCount: {
    marginRight: 5,
    fontSize: 14,
    color: '#777',
    fontWeight: '500',
  },
  headSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 30,
  },
  offerPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#777',
    textAlign: 'right',
  },
  price: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: '700',
    color: '#59569D',
    textAlign: 'right',
  },
  category: {
    color: '#F25292',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 8,
  },
  colorSec: {


  },
  colorTitle: {
    color: '#999',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'left',
  },
  firstColor: {
    height: 20,
    width: 20,
    borderColor: '#FEA096',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  secondColor: {
    height: 20,
    width: 20,
    borderColor: '#59569D',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 15,
  },
  thirdColor: {
    height: 20,
    width: 20,
    borderColor: '#F25292',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 15,
  },


  firstActive: {
    backgroundColor: '#FEA096'
  },
  secondActive: {
    backgroundColor: '#59569D'
  },
  thirdActive: {
    backgroundColor: '#F25292'
  },
  selectedItems: {
    flexDirection: 'row',
  },
  aditionalSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  sizeItem: {
    height: 25,
    width: 25,
    backgroundColor: '#59569D',
    borderRadius: 100,
  },
  sizeItems: {
    flexDirection: 'row',
    marginTop: 10,
  },
  activeSize: {
    backgroundColor: '#F25292',
  },
  detailsSec: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  detailsText: {
    paddingBottom: 20,
    color: '#888',
    fontSize: 14,

  },
  quantitySec: {
    flexDirection: 'row',
    backgroundColor: "#59569D",
    width: 120,
    paddingVertical: 7,
    justifyContent: 'center',
    borderRadius: 20,

  },
  quantityAmmount: {
    fontSize: 16,
    marginHorizontal: 5,
    color: '#fff',
    fontWeight: '600',
    marginHorizontal:10,
  },
  cartsSec:{
    marginHorizontal:30,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:80,
  },
  cartBtn:{
    backgroundColor:'#F25292',
    paddingLeft:30,
    paddingRight:50,
    paddingVertical:10,
    borderRadius:20,
    color:'#fff',
  },
  rightArrow:{
    position:'absolute',
    right:0,
    top:0,
    backgroundColor:'#ef7aa7',
    padding:10,
    borderRadius:50,
  }
})