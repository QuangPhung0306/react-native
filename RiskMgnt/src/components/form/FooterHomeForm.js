/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FooterHomeForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={<Icon name="home" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressHome}
        />
        <Button
          icon={<Icon name="plus-circle" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressAdditems}
        />
        <Button
          icon={<Icon name="map" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressMap}
        />
        <Button
          icon={<Icon name="search" size={30} color="While" />}
          type="clear"
          onPress={this.props.actionOnPressSearch}
        />
      </View>
    );
  }
}

FooterHomeForm.propTypes = {
  actionOnPressHome: PropTypes.func.isRequired,
  actionOnPressAdditems: PropTypes.func.isRequired,
  actionOnPressMap: PropTypes.func.isRequired,
  actionOnPressSearch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
