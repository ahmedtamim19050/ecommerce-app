import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'

const MyStore =configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default MyStore
