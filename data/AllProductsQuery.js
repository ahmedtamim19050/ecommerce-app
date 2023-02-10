import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import base64 from 'react-native-base64'

const fetchProduct = async (item) =>{
  
      let url;
      if(Array.isArray(item) && item.length === 0){
        url='https://api.sohojearning.com/wp-json/wc/v3/products';
      }
      else{

         url=`https://api.sohojearning.com/wp-json/wc/v3/products?category=${item.id}`;
      }
      console.log(item);


    const res= await axios.get(url,{
          headers:{
                Authorization: 'Basic ' + base64.encode('ck_574b2af8429dd6c6160c97563a05bf7d62989134:cs_861c205b566b235d1b35fa7f9e335796a6e0df64')

            } 
    });
    return res.data;
}

const AllProductsQuery = (item=[]) => {
    const {data,isLoading}=useQuery('products',()=>fetchProduct(item));

    return {data,isLoading};
  
}

export default AllProductsQuery
