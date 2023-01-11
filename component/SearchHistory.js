import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchItem from './SearchItem'
import { FlatList } from 'react-native-gesture-handler'
import histories from '../data/SearchHistoryData';


const SearchHistory = () => {
    return (
        <View style={styles.container}>
            <FlatList horizontal
                // snapToAlignment='center' 
                showsHorizontalScrollIndicator={false}
                data={histories}
                renderItem={({ item }) => <SearchItem item={item} />} />

        </View>

    )
}

export default SearchHistory

const styles = StyleSheet.create({
    // container: {
    //     flexDirection: 'row',
    // }
})