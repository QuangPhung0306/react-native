import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as Define from '../components/locales/en.json';
import HeaderForm from '../containers/Header';
import FooterNewItem from '../components/form/FooterNewItem';

export default class NewItemScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <HeaderForm
          title={Define.NEW_ITEM}
          actionOnPressRight={() => navigation.navigate('User')}
          actionOnPressLeft={() => navigation.openDrawer()}
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.9}}>
          <Text>HomeScreen </Text>
        </View>
        <View style={{flex: 0.1}}>
          <FooterNewItem
            actionOnPressHome={() => this.props.navigation.navigate('Home')}
            actionOnPressCamera={() => this.props.navigation.navigate('Camera')}
            actionOnPressMap={() => this.props.navigation.navigate('Map')}
            actionOnPressPickImage={() =>
              this.props.navigation.navigate('PickImage')
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
