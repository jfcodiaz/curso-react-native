import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import Add from './Add';
import Profile from './Profile';
import { StackFollow } from './StackFollow';

const RutasAutenticadas = createBottomTabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: StackFollow,
  },
  Profile: {
    screen: Profile,
  },
}, {
  tabBarPosition: 'top',
});

export { RutasAutenticadas };
