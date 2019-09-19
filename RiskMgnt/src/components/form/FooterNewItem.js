/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterNewItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={<Icon name="home" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressHome}
        />
        <Button
          icon={<Icon name="camera" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressCamera}
        />
        <Button
          icon={<Icon name="image" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressPickImage}
        />
        <Button
          icon={<Icon name="map" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressMap}
        />
      </View>
    );
  }
}

FooterNewItem.propTypes = {
  actionOnPressHome: PropTypes.func.isRequired,
  actionOnPressCamera: PropTypes.func.isRequired,
  actionOnPressMap: PropTypes.func.isRequired,
  actionOnPressPickImage: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
