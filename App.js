import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: {screen: DeckScreen},
          review: {
            screen: StackNavigator({
                review: { screen: ReviewScreen },
                settings: { screen: SettingScreen }
            }) //stack navigator end
          }
        },
          {
           tabBarPosition: 'bottom'
          }
        )//tabnavigator mainscreen properties
      }
    },
    //Main tab navigator properties
    {
      swipeEnabled: false,
      lazyLoad: true,
      animationEnabled: false,
      tabBarPosition: 'bottom'
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
