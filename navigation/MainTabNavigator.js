import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SummaryScreen from '../screens/Summary/SummaryScreen';
import MedicineScreen from '../screens/Medicine/MedicineScreen';
import InboxScreen from '../screens/Inbox/InboxScreen';
import ResourcesScreen from '../screens/Resources/ResourcesScreen';

//to delete
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const SummaryStack = createStackNavigator({
  Summary: SummaryScreen,
});

SummaryStack.navigationOptions = {
  tabBarLabel: 'Summary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'chart-line'}
    />
  ),
};

const MedicineStack = createStackNavigator({
  Medicine: MedicineScreen,
});

MedicineStack.navigationOptions = {
  tabBarLabel: 'Medicine',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'pill'}
    />
  ),
};

const InboxStack = createStackNavigator({
  Inbox: InboxScreen,
});

InboxStack.navigationOptions = {
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'message'}
    />
  ),
};

const ResourcesStack = createStackNavigator({
  Resources: ResourcesScreen,
});

ResourcesStack.navigationOptions = {
  tabBarLabel: 'Resources',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'information'}
    />
  ),
};

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  SummaryStack,
  MedicineStack,
  InboxStack,
  ResourcesStack,
});
