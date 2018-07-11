import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAutenticadas = createStackNavigator({
  SignIn,
  SignUp,
}, {
  headerMode: 'none',
});

export { RutasNoAutenticadas };
