import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CameraPage extends Component {
  static navigationOptions = {
    title: 'CameraPage',
    /* No more header config here! */
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>CameraPage </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
