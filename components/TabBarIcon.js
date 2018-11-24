import React from 'react';
import { Icon } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      // <Icon.Ionicons
      //   name={this.props.name}
      //   size={26}
      //   style={{ marginBottom: -3 }}
      //   color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      //   type={this.props.type}
      // />
      <MaterialCommunityIcons
        name={this.props.name}
        size={26}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        style={{ marginBottom: -3 }}
      />
    );
  }
}