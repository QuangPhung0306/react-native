import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

import HeaderForm from '../containers/Header';
import * as Define from '../components/locales/en.json';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <HeaderForm
          title={Define.MAP}
          actionOnPressRight={() => navigation.navigate('User')}
          actionOnPressLeft={() => navigation.openDrawer()}
        />
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 20.99891,
            longitude: 105.827649,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}>
          <MapView.Marker
            coordinate={{latitude: 20.99891, longitude: 105.827649}}
            title={'HelloAKB'}
            description={'15,64,LeTrongTan'}
          />
          <MapView.Marker
            coordinate={{latitude: 21.004925, longitude: 105.845847}}
            title={'HelloBK'}
            description={'1DaiCoViet'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
