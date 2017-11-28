import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
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
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 60,
    marginTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : undefined
  },
});
