import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import base64 from 'react-native-base64'

const fetchProduct = async () => {
    const res= await axios.get('https://api.sohojearning.com/wp-json/wc/v3/products',{
          headers:{
                Authorization: 'Basic ' + base64.encode('ck_574b2af8429dd6c6160c97563a05bf7d62989134:cs_861c205b566b235d1b35fa7f9e335796a6e0df64')

            },
            params: {
                orderBy:'total_sales',
                order: 'desc',
                limit: 5
              }
    });
    return res.data;
}

const NewArrivalQuery = () => {
    const {data,isLoading}=useQuery('newproducts',fetchProduct);

    return {data,isLoading};
  
}


export default NewArrivalQuery
