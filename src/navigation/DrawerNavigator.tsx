import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../features/appState/screens/SideMenu';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SideMenu" component={SideMenu} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
