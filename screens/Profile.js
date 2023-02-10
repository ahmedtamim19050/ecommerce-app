import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Octicons, AntDesign, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <View style={styles.border2}>
          <View style={styles.border1}>
            <View style={styles.userImageSec}>
              <Image style={styles.userImage} source={require("../assets/users/user-1.jpg")} />
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.userName}>Ayo Ogunseinde</Text>
      {/* <View style={styles.activeSec}>
        <Octicons name="dot-fill" size={18} color="#78CE8C" />
        <Text style={styles.activetitle}>Active Status</Text>
      </View> */}

      <View style={styles.setting}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <AntDesign name="user" size={20} color="#666" />
              <Text style={styles.settingTitle}>
                Edit Profile
              </Text>
            </View>
            <AntDesign name="right" size={20} color="#555" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ShippingAddress')}>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="location-outline" size={20} color="#666" />
              <Text style={styles.settingTitle}>
                Shipping Address
              </Text>
            </View>
            <AntDesign name="right" size={20} color="#555" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Whish List')}>
          <View style={styles.settingItem}>

            <View style={styles.settingInfo}>
              <AntDesign name="hearto" size={20} color="#666" />
              <Text style={styles.settingTitle}>
                Wish List
              </Text>
              <Text style={styles.bedge}>3</Text>
            </View>

            <AntDesign name="right" size={20} color="#555" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Ionicons name="document-text-outline" size={20} color="#666" />
              <Text style={styles.settingTitle}>
                Order History
              </Text>
              <Text style={styles.bedge}>1</Text>
            </View>
            <AntDesign name="right" size={20} color="#555" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <MaterialIcons name="notifications-none" size={20} color="#666" />
              <Text style={styles.settingTitle}>
                Notification
              </Text>
              <Text style={styles.bedge}>3</Text>
            </View>
            <AntDesign name="right" size={20} color="#555" />
          </View>
        </TouchableOpacity>
        {/* <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <FontAwesome name="credit-card-alt" size={20} color="#666" />
            <Text style={styles.settingTitle}>
              Card
            </Text>
          </View>
          <AntDesign name="right" size={20} color="#555" />
        </View> */}
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 70,
    marginBottom: 20,
  },
  userImageSec: {
    height: 150,
    width: 150,
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 100,




  },
  profileImage: {
    alignItems: 'center',
  },
  border1: {
    height: 170,
    width: 170,
    borderWidth: 1,
    borderColor: '#59569D',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border2: {
    height: 210,
    width: 210,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#59569D',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  userName: {
    textAlign: 'center',
    color: '#59569D',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,

  },
  activeSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  activetitle: {
    marginLeft: 5,
    fontSize: 14,
    color: '#777'

  },
  settingInfo: {
    flexDirection: 'row',
  },
  settingTitle: {
    marginLeft: 10,
    color: '#666',
    fontSize: 15,
    fontWeight: '500',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingBottom: 25,
    paddingHorizontal: 15,
    borderColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginBottom: 20,



  },
  setting: {
    marginTop: 80,

  },
  bedge: {
    backgroundColor: '#F25292',
    paddingHorizontal: 10,
    marginLeft: 5,
    color: '#fff',
    borderRadius: 10,
    paddingVertical: 0,

  }
})