import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#F25292" />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});

export default Loader;