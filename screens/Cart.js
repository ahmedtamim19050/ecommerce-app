import { Alert, Image, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons';
import CartItem from '../component/CartItem';
import CartItems from '../data/NewArrivalData'
import { useDispatch, useSelector } from 'react-redux';






const Cart = ({ navigation }) => {
  const [count, setCount] = useState(0)
  const handleMinusCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum(items.reduce((acc, item) => acc + parseInt(item.price), 0));

  }, [items])
  const [discount, SetDiscount] = useState(5);
  const [shipping, SetShipping] = useState(2);
  const totalSum = sum + discount + shipping;
  console.log(items);
  return (
    <ScrollView>
      {
        Array.isArray(items) && items.length === 0 ? (
          <View style={styles.emtyMassage}>
          <Text style={{color:'#FEA096',fontSize:20,}}>No Items Selected</Text>
        </View>
          
        ) :
          (
            <View style={styles.container}>
            {
              items.map(item => {
                return (
                  <CartItem item={item} key={item.id} />
                )
              })
            }
            <View style={styles.promoCodeSec}>
              <TextInput label="Text" placeholder="Promo Code" style={styles.promoCode} />
              <View style={styles.applybtnSec}>
                <Text style={styles.applybtn}>Apply</Text>
              </View>
            </View>
            <View style={styles.accountSec}>
              <View style={styles.item}>
                <Text style={styles.accountTitle}>Subtotal :</Text>
                <Text style={styles.price}>${sum}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.accountTitle}>Shipping :</Text>
                <Text style={styles.price}>${shipping}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.accountTitle}>Discount :</Text>
                <Text style={styles.price}>${discount}</Text>
              </View>
              <View style={[styles.item, styles.BorderNone]}>
                <Text style={[styles.accountTitle, { color: '#59569D', fontSize: 16, }]}>Total :</Text>
                <View style={styles.totalSec}>
                  <Text style={styles.itemCount}>({items.length} item)</Text>
                  <Text style={[styles.price, styles.totalPrice]}>${totalSum}</Text>
                </View>
              </View>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={{ position: 'relative' }}>
              <Text onPress={() => navigation.navigate('Checkout')} style={styles.checkoutBtn}>Proceed to Checkout</Text>
              <AntDesign name='right' style={styles.checkoutArrowIcon} size={30} color="#fff" />
            </TouchableOpacity>

          </View>

          )
      }

    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 80,
    marginTop: 70,
  },
  promoCode: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#666'
  },
  applybtn: {
    backgroundColor: '#F25292',
    width: 70,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  promoCodeSec: {
    position: 'relative',
  },
  applybtnSec: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  accountSec: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  accountTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: "#666",
  },
  price: {
    fontSize: 18,
    color: "#59569D",
    fontWeight: '600',
  },
  totalSec: {
    flexDirection: 'row',
  },
  totalPrice: {
    marginLeft: 8,
    color: '#F25292',
  },
  itemCount: {
    color: '#888',
  },
  BorderNone: {
    borderBottomWidth: 0,
  },
  checkoutBtn: {
    backgroundColor: '#59569D',
    paddingVertical: 15,
    marginTop: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#fff',
    fontSize: 16,
    borderRadius: 15,
  },
  checkoutArrowIcon: {
    position: 'absolute',
    right: 15,
    top: 25,

  },
  emtyMassage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:900,
  }

})