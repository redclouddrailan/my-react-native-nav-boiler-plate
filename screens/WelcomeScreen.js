import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Easy way to find a job, completely free', color: 'pink' },
  { text: 'Set your location, then swipe away' , color: '#009688' }
];

class WelcomeScreen extends Component {
  render(){
    return (
    <Slides data={SLIDE_DATA} />
    );
  }
}


export default WelcomeScreen;
