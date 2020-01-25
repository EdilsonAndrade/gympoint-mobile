import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Signin from './pages/Signin';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Signin,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
    }
  )
);

export default Routes;
