import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GetJoke from '../screens/GetJoke';
import JokeList from '../screens/JokeList';
import AddJoke from '../screens/AddJoke';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const GetJokeStack = createStackNavigator(
  {
    Get: GetJoke,
  },
  config
);

GetJokeStack.navigationOptions = {
  tabBarLabel: 'Get Joke',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

GetJokeStack.path = '';

const JokeListStack = createStackNavigator(
  {
    List: JokeList,
  },
  config
);

JokeListStack.navigationOptions = {
  tabBarLabel: 'Joke List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

JokeListStack.path = '';

const AddJokeStack = createStackNavigator(
  {
    Add: AddJoke,
  },
  config
);

AddJokeStack.navigationOptions = {
  tabBarLabel: 'Add Joke',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AddJokeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  GetJokeStack,
  JokeListStack,
  AddJokeStack,
});

tabNavigator.path = '';

export default tabNavigator;
