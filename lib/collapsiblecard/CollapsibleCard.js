import React, { PureComponent } from 'react';
import { Text, View, ScrollView, Animated, Keyboard } from 'react-native';
import {IconToggle, Card, withTheme} from '../react-native-material-ui';
import { PropTypes } from 'prop-types';

class CollapsibleCard extends PureComponent {
  state = {
    collapsed: false,
    contentHeight: new Animated.Value(),
    maxHeight: 0,
  };

  toggle() {
    Animated.timing(this.state.contentHeight, {
      duration: 200,
      toValue: this.state.collapsed ? this.state.maxHeight : 0
    }).start();
    this.setState({...this.state, collapsed:!this.state.collapsed});
  }

  _setMaxHeight(event){
    let newHeight = event.nativeEvent.layout.height;
    if (newHeight > this.state.maxHeight) {
      this.setState({
        ...this.state,
        contentHeight: new Animated.Value(newHeight),
        maxHeight: newHeight
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

CollapsibleCard.propTypes = {
  title: PropTypes.string.isRequired,
}

export default withTheme(CollapsibleCard);