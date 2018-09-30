import React, { Component } from 'react';
import { Text, View, ScrollView, Animated, Keyboard } from 'react-native';
import {IconToggle, Card, withTheme} from '../components/react-native-material-ui';

class CollapsibleCard extends Component {
  state = {
    collapsed: false,
    contentHeight: new Animated.Value(),
    maxHeight: 0,
  };

  toggle(collapsed) {
    Animated.timing(this.state.contentHeight, {
      duration: 200,
      toValue: this.state.collapsed ? this.state.maxHeight : 0
    }).start();
    this.setState({...this.state, collapsed:!this.state.collapsed});
  }

  _setMaxHeight(event){
    let newHeight = event.nativeEvent.layout.height;
    if (newHeight > this.state.maxHeight) {
      this.state.contentHeight.setValue(event.nativeEvent.layout.height);
      this.setState({
        ...this.state,
        // contentHeight: new Animated.Value(event.nativeEvent.layout.height),
        maxHeight: event.nativeEvent.layout.height
      });
    }
  }

  render() {
    const { theme, style, children, title } = this.props;
    const iconName = this.state.collapsed ? 'arrow-drop-down' : 'arrow-drop-up';
    return (
      <Card style={[style, {flex:1}]}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={theme.typography.subheading}>{title}</Text>
          <IconToggle 
            name={iconName}
            onPress={() => this.toggle()} />
        </View>
        <Animated.View style={{height: this.state.contentHeight}}>
          <View onLayout={this._setMaxHeight.bind(this)}>
              {children}
          </View>
        </Animated.View>
      </Card>
    );
  }
};

export default withTheme(CollapsibleCard);