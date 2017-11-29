import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Easy way to find a job, completely free', color: 'pink' },
  { text: 'Set your location, then swipe away' , color: '#009688' }
];

class WelcomeScreen extends Component {

  state = { token: null }

  async componentWillMount(){
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    }else {
      this.setState({ token: false });
    }
  }

  onComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render(){
    if (this.state.token === null) {
    return <AppLoading />;
    }
    return (
    <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
    );
  }
}


export default WelcomeScreen;
