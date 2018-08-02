'use strict';
import React, {Component} from 'react';
import {View, Text, ScrollView,} from 'react-native';
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button,} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DailyMealBusiness from '../business/DailyMealBusiness';
import * as DailyMealActions from "../actions/DailyMealActions";
import * as AddDailyMealPageActions from '../actions/AddDailyMealPageActions';

class AddDailyMealPage extends Component {
  constructor(props) {
    super(props);
  }
  calculateEnergyPct(pageActions, pageData) {
    const {fatPct, carbosPct, proteinPct, alcoholPct} = pageData;
    let total = 0;
    if (fatPct !== undefined)
      total += fatPct * 9; // 8.8
    if (carbosPct !== undefined)
      total += carbosPct * 4; // 3.87
    if (proteinPct !== undefined)
      total += proteinPct * 4;
    if (alcoholPct !== undefined)
      total += alcoholPct * 7;
    if (total > 0)
    pageActions.inputEnergyPct(total.toString());
  }
  render() {
    const {pageData, pageActions, dailyMealActions, navigation,} = this.props;
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit;
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit;
    return (
      <ScrollView>
        <Toolbar centerElement={('Add food')}
          leftElement={<IconToggle onPress={() => navigation.goBack()} name='arrow-back' color='white'/>} // TODO
        />
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <TextField label='Name' 
            value={pageData.name} onChangeText={(x) => pageActions.inputName(x)}
          />
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flexDirection:'column',flex:1}}>
              <TextField label='Quantity' suffix={pageData.unit} KeyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.quantity} onChangeText={(x) => pageActions.inputQuantity(x)}
              />
              <TextField label='Energy' suffix={kcalSuffix} KeyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.energyPct} onChangeText={(x) => pageActions.inputEnergyPct(x)}
                renderAccessory={() => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(pageActions, pageData)}/>}
              />
            </View>
            <View style={{width:16}}/>
            <View style={{flexDirection:'column',flex:1}}> 
              <RadioButton value='g' label='Weight' // TODO use modal
                onSelect={(x) => pageActions.selectUnit(x)}
              />
              <RadioButton value='ml' label='Volume'
                onSelect={(x) => pageActions.selectUnit(x)}
              />
            </View>
          </View>
        </Card>
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <View style={{flexDirection:'row'}}>
            <TextField label='Protein' suffix={percentageSuffix} KeyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.proteinPct} onChangeText={(x) => pageActions.inputProteinPct(x)}
            />
            <View style={{width:16}}/>
            <TextField label='Carbohydrates' suffix={percentageSuffix} KeyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.carbosPct} onChangeText={(x) => pageActions.inputCarbosPct(x)}
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <TextField label='Fat' suffix={percentageSuffix} KeyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.fatPct} onChangeText={(x) => pageActions.inputFatPct(x)}
            />
            <View style={{width:16}}/>
            <TextField label='Alcohol' suffix={percentageSuffix} KeyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.alcoholPct} onChangeText={(x) => pageActions.inputAlcoholPct(x)}
            />
          </View>
        </Card>
        <Button text='submit' onPress={() => {dailyMealActions.add(DailyMealBusiness.getIdFromDate(new Date()), pageData);navigation.goBack();}}/>
      </ScrollView>
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
    dailyMealActions: bindActionCreators(DailyMealActions, dispatch),
  })
)(AddDailyMealPage);