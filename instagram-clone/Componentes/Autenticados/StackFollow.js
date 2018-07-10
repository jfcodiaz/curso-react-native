import { createStackNavigator } from 'react-navigation';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';
import { TabFollow } from './TabFollow';

const StackFollow = createStackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null,
    },
  },
  Autor,
  Publicacion,
  Comentarios,
});
export { StackFollow };
