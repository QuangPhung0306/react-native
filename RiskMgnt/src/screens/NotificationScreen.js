import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NotificationScreen extends Component {
  static navigationOptions = {
    title: 'NotificationScreen',
    /* No more header config here! */
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>NotificationScreen</Text>
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
