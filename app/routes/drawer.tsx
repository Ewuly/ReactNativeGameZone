import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="About" component={AboutStack} />
  </Drawer.Navigator>
);

export default RootDrawerNavigator;