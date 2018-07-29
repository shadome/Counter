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
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as AddDailyMealActions from "../actions/AddDailyMealActions";

class AddDailyMealPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, actions } = this.props;
    return (
      <View>
        <Toolbar 
          leftElement={
            <IconToggle
              onPress={() => this.props.navigation.goBack()} 
              name='arrow-back'/>} 
          centerElement={('Add food')}/>
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <TextField label='Name' onChangeText={(x) => actions.inputFoodName(x)}/>
          <Text>{data.toto}</Text>
          <Text>{data.foodName}</Text>
          <View style={{flexDirection:'row'}}>
            <TextField onChangeText={(x) => actions.inputTest2(x)} containerStyle={{flex:1}} suffix='grams' label='Quantity'/>
            <View style={{width:16}}/>
            <TextField containerStyle={{flex:1}} suffix='kcal/100g' label='Density'/>
          </View>
        </Card>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.addDailyMealReducers
  }),
  (dispatch) => ({
    actions: bindActionCreators(AddDailyMealActions, dispatch)
  })
)(AddDailyMealPage);