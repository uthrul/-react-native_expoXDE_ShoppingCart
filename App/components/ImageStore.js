import React, { Component } from 'react';
import {  View, Text,StyleSheet, ImageBackground } from 'react-native';
import TextStore from './TextStore';

export default class ImageStore extends Component {
  render() {
    return (
        <ImageBackground
            source={require('../img/store.jpg')}
            style={styles.store}
        >
        <TextStore />
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    store:{
        width: '100%',
        height:250,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

