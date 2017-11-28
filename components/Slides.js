import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';


class Slides extends Component {

  renderSlides(){
    return this.props.data.map((slide) => {
      return (
      <View style={styles.slideStyle} key={slide.text}>
        <Text style={styles.slideText}>{slide.text}</Text>
      </View>
    );
    });
  }

  render() {
    return(
      <ScrollView
      horizontal
      style={{ flex: 1 }}
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
    justifyContent: 'center'

  },
  slideText: {
    fontSize: 30
  }
};

export default Slides;
