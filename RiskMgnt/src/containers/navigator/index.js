import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigation from './auth';
import AppNavigation from './navigator';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
