import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Define from '../components/locales/en.json';
import HeaderForm from '../containers/Header';
import FooterHomeForm from '../components/form/FooterHomeForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  footer: {
    alignSelf: 'flex-end',
  },
});

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <HeaderForm
          title={Define.HOME}
          actionOnPressRight={() => navigation.navigate('User')}
          actionOnPressLeft={() => navigation.openDrawer()}
        />
      ),
    };
  };

  openDrawer = async () => {
    this.props.navigation.navigate('NewItem');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.9}}>
          <Text>HomeScreen </Text>
        </View>
        <View style={{flex: 0.1}}>
          <FooterHomeForm
            actionOnPressHome={() => this.props.navigation.navigate('Home')}
            actionOnPressAdditems={() =>
              this.props.navigation.navigate('NewItem')
            }
            actionOnPressMap={() => this.props.navigation.navigate('Map')}
            actionOnPressSearch={() => this.props.navigation.navigate('Search')}
          />
        </View>
      </View>
    );
  }
}
