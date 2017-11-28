import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;


class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1){
      return (
        <Button
          buttonStyle={styles.buttonStyle}
          title="Game on!"
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides(){
    return this.props.data.map((slide, index) => {
      return (
      <View
      style={[styles.slideStyle, {backgroundColor: slide.color}]}
      key={slide.text}
      >
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    );
    });
  }

  render() {
    return(
      <ScrollView
      horizontal
      style={{ flex: 1 }}
      pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,


  },
  slideText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20
  },

  buttonStyle: {
    backgroundColor: 'orange',
    marginTop: 15
  }
};

export default Slides;
