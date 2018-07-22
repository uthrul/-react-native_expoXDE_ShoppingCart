import React, { Component } from 'react';
import {  View, Text,StyleSheet } from 'react-native';

import Compoimage from './Compoimage';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
            <Compoimage imageSource={require('../img/img1.jpg')}/>
        </View>
        <View style={styles.column2}>
            <Compoimage imageSource={require('../img/img2.jpg')}/>
        </View>
        <View style={styles.full}>
            <Compoimage imageSource={require('../img/img3.jpg')}/>
        </View>
        <View style={styles.column1}>
            <Compoimage imageSource={require('../img/img4.jpg')}/>
        </View>
        <View style={styles.column2}>
            <Compoimage imageSource={require('../img/img5.jpg')}/>
        </View>
        <View style={styles.full}>
            <Compoimage imageSource={require('../img/img6.jpg')}/>
        </View>
        <View style={styles.column1}>
            <Compoimage imageSource={require('../img/img7.jpg')}/>
        </View>
        <View style={styles.column2}>
            <Compoimage imageSource={require('../img/img8.jpg')}/>
        </View>
        <View style={styles.full}>
            <Compoimage imageSource={require('../img/img3.jpg')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#c1c'
    },
    column1:{
        flex: 1,
        padding: 5,
    },
    column2:{
        flex: 3,
        padding: 5,
    },
    full:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
});
