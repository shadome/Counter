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
import * as AddDailyMealPageActions from "../actions/AddDailyMealPageActions";

class AddDailyMealPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pageData, pageActions } = this.props;
    return (
      <View>
        <Toolbar 
          leftElement={
            <IconToggle
              onPress={() => this.props.navigation.goBack()} 
              name='arrow-back'/>} 
          centerElement={('Add food')}/>
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <TextField label='Name' onChangeText={(x) => pageActions.inputFoodName(x)}/>
          <Text>{pageData.toto}</Text>
          <Text>{pageData.foodName}</Text>
          <View style={{flexDirection:'row'}}>
            <TextField suffix='grams' label='Quantity'/>
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
    pageData: state.addDailyMealPageReducers,
    //dailyMealData: state.dailyMealReducers,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(AddDailyMealPageActions, dispatch),
    //dailyMealActions: bindActionCreators(DailyMealActions, dispatch),
  })
)(AddDailyMealPage);