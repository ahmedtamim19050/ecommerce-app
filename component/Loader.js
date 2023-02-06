import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height:200,
  },
});

export default Loader;