import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './App/components/Header';
import ImageStore from './App/components/ImageStore';
import Body from './App/components/Body';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header/>
        <ImageStore />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
