import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.profileImage}>
      <View style={styles.border1}>
        <View style={styles.userImageSec}>
          <Image style={styles.userImage} source={require("../assets/users/user-1.png")} />
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
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
    alignItems: 'center'
  },
  border1:{
    height:170,
    width:170,
    borderWidth: 1,
    borderColor: '#59569D',
    borderRadius: 100,
    alignItems:'center',
    justifyContent:'center',
  }
})