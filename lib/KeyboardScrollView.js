import React, { Component } from 'react';
import { Text, View, ScrollView, Animated, Keyboard } from 'react-native';

class KeyboardScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {keyboardHeight: new Animated.Value(0)};
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    alert('toto')
    Animated.timing(this.state.keyboardHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.height,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.state.keyboardHeight, {
      duration: event.duration,
      toValue: 0,
    }).start();
  };

  render() {
    const { style, children } = this.props;
    let { keyboardHeight } = this.state;
    return (
      <Animated.View style={[style, { paddingBottom: keyboardHeight }]}>
        <ScrollView style={style}>
          {children}
          {/* <View style={{height:50}}/>
          <Text>---</Text>
          <Text>{keyboardHeight.__getValue()}</Text>
          <Animated.View style={{height: keyboardHeight }}/> */}
        </ScrollView>
      </Animated.View>
    );
  }
};

export default KeyboardScrollView;