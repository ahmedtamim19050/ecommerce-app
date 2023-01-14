import { StyleSheet, Text, View, TextInput,ScrollView} from 'react-native'
import React from 'react'
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import SearchHistory from '../component/SearchHistory';
import products from '../data/ProductsData2';
import ProductSingle from './ProductSingle';
import Product2 from '../component/Product2';

const Shop = () => {
  const [text, setText] = React.useState("");
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
            <View style={styles.fiterItem}>
              <Ionicons name='filter-outline' size={24} color="#59569D" style={styles.filterIcon} />
            </View>
            <View style={styles.fiterItem}>
              <Ionicons name='grid-outline' size={24} color="#59569D" style={styles.filterIcon} />
            </View>
            <View style={styles.fiterItem}>
              <Ionicons name='list' size={24} color="#59569D" style={styles.filterIcon} />
            </View>

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
          <Octicons name="search"  size={20} color="#59569D" />

        </View>
      </View>
      <SearchHistory />
      <View style={styles.products}>
        {
          products.map((item) => {
            return <Product2 item={item} />
          })
        }
      </View>
    </View>
    </ScrollView>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginBottom:80,
    marginTop:50,
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
  products:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
})