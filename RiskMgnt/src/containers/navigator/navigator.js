import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../../screens/HomeScreen';
import MapScreen from '../../screens/MapScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import InforUserScreen from '../../screens/InforUserScreen';
import NewItemScreen from '../../screens/NewItem';
import SearchScreen from '../../screens/SearchScreen';
import PickImage from '../../screens/PickImage';
import CameraPage from '../../screens/CameraPage';

const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen},
  User: {screen: InforUserScreen},
  NewItem: {screen: NewItemScreen},
  Map: {screen: MapScreen},
  Search: {screen: SearchScreen},
  PickImage: {screen: PickImage},
  Camera: {screen: CameraPage},
});

const NotificationStack = createStackNavigator({
  Notification: {screen: NotificationScreen},
});

const MapStack = createStackNavigator({
  Map: {screen: MapScreen},
});

const AppNavigation = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Notification: {
      screen: NotificationStack,
    },
    Map: {
      screen: MapStack,
    },
  },
  {},
);

export default AppNavigation;
