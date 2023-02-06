import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import base64 from 'react-native-base64'

const fetchProduct = async () => {
    const res= await axios.get('https://api.sohojearning.com/wp-json/wc/v3/products/categories',{
          headers:{
                Authorization: 'Basic ' + base64.encode('ck_574b2af8429dd6c6160c97563a05bf7d62989134:cs_861c205b566b235d1b35fa7f9e335796a6e0df64')

            },
    
    });
    return res.data;
}

const CategoryQuery = () => {
    const {data,isLoading}=useQuery('category',fetchProduct);

    return {data,isLoading};
  
}


export default CategoryQuery