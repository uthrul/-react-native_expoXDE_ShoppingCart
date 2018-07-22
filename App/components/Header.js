import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../img/lgstore.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>noizecode shopping</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        marginTop: 20,
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
        width: Dimensions.get('window').width,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
    },
    logo:{
        width: 150,
        height:40,
        marginTop: 20,
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        color:'#000',
        fontWeight:'bold',
        fontSize: 15,
        fontStyle: 'italic',
    },
  });
