import { StyleSheet, Text, View, Pressable, TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import BrandSliders from './BrandSliders';
import ColorSlider from './ColorSlider';


const HomeFilter = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.categorySec}>
                        <View style={styles.categoryRows}>
                            <Text style={styles.categoryText}>Category</Text>
                            <TouchableOpacity style={styles.viewAllSec}>
                                <Text style={styles.viewText}> View All</Text>
                                <AntDesign name="right" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.categorySec}>
                        <View style={styles.categoryRows}>
                            <Text style={styles.categoryText}>Brand</Text>
                            <TouchableOpacity style={styles.viewAllSec}>
                                <Text style={styles.viewText}> View All</Text>
                                <AntDesign name="right" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sliders}>
                            <BrandSliders />
                        </View>
                    </View>
                    <View style={styles.categorySec}>
                        <View style={styles.categoryRows}>
                            <Text style={styles.categoryText}>Color</Text>
                            <TouchableOpacity style={styles.viewAllSec}>
                                <AntDesign name="down" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sliders}>
                            <ColorSlider />
                        </View>
                    </View>
                    <Pressable
                        style={[styles.closeBtn,]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <AntDesign name="closecircleo" size={30} color="#F25292" />
                    </Pressable>
                </View>
            </View>
        </Modal >
    )
}

export default HomeFilter

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingTop: 70,
        paddingBottom: 20,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        position: 'relative',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    categorySec: {

        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        paddingBottom: 20,
    },
    categoryRows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
    },
    viewAllSec: {
        flexDirection: 'row',

    },
    viewText: {
        marginRight: 10,
        fontSize: 15,
        color: '#666',
        fontWeight: '500',
    },
    sliders: {
        marginTop: 15,
    },
    closeBtn: {
        position: 'absolute',
        right: 25,
        top: 15,
    }
})