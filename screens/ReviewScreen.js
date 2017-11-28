import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: 'Review Jobs',
  headerRight: (
     <Button
    //  title='Settings'
     onPress={() => navigation.navigate('settings')}
     icon={{name: 'settings', color: 'rgba(0,122,255,1)'}}
     backgroundColor='rgba(0,0,0,0)'
     color='rgba(0,122,255,1)'
     />
  )
});

  render(){
    return (
      <View style={[styles.containerStyle]}>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0
  }
})

export default ReviewScreen;
