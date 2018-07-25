import React, { Component } from 'react';
import { 
  View, 
  Text,
} from 'react-native';
import {
  Toolbar,
  Icon,
  IconToggle,
  Card,
} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';

class AddFood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Toolbar 
          leftElement={
            <IconToggle
              onPress={() => this.props.navigation.goBack()} 
              name='arrow-back'/>} 
          centerElement={('Add food')}/>
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <TextField label='Name'/>
          <View style={{flexDirection:'row'}}>
            <TextField containerStyle={{flex:1}} suffix='grams' label='Quantity'/>
            <View style={{width:16}}/>
            <TextField containerStyle={{flex:1}} suffix='kcal/100g' label='Density'/>
          </View>
        </Card>
      </View>
    );
  }
}

export default AddFood;