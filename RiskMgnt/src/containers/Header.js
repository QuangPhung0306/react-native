/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import {Header} from 'react-native-elements';

export default class HeaderForm extends Component {
  render() {
    return (
      <Header
        statusBarProps={{barStyle: 'light-content'}}
        barStyle="light-content" // or directly
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: this.props.actionOnPressLeft,
        }}
        centerComponent={{
          text: this.props.title,
          style: {color: '#fff'},
        }}
        rightComponent={{
          icon: 'person',
          color: '#fff',
          onPress: this.props.actionOnPressRight,
        }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
    );
  }
}

HeaderForm.propTypes = {
  title: PropTypes.string,
  actionOnPressRight: PropTypes.func.isRequired,
  actionOnPressLeft: PropTypes.func.isRequired,
};
