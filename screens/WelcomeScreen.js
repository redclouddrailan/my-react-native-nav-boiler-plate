import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Easy way to find a job, completely free', color: 'pink' },
  { text: 'Set your location, then swipe away' , color: '#009688' }
];

class WelcomeScreen extends Component {
  onComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render(){
    return (
    <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
    );
  }
}


export default WelcomeScreen;
