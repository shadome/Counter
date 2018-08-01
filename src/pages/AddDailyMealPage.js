'use strict';
import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import {Toolbar, Icon, IconToggle, Card, RadioButton,} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AddDailyMealPageActions from '../actions/AddDailyMealPageActions';

class AddDailyMealPage extends Component {
  constructor(props) {
    super(props);
  }
  calculateEnergyPct(pageActions, pageData) {
    const {fatPct, carbosPct, proteinPct, alcoholPct} = pageData;
    let total = 0.0;
    if (fatPct !== undefined)
      total += fatPct * 8.8;
    if (carbosPct !== undefined)
      total += carbosPct * 3.87;
    if (proteinPct !== undefined)
      total += proteinPct * 4.0;
    if (alcoholPct !== undefined)
      total += alcoholPct * 7.0;
    pageActions.inputEnergyPct(total);
  }
  render() {
    const {pageData, pageActions, navigation} = this.props;
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit;
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit;
    return (
      <View>
        <Toolbar centerElement={('Add food')}
          leftElement={<IconToggle onPress={() => navigation.goBack()} name='arrow-back'/>} 
        />
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <TextField label='Name' 
            value={pageData.name} onChangeText={(x) => pageActions.inputName(x)}
          />
          <View style={{flexDirection:'row'}}>
            <TextField label='Quantity' suffix={pageData.unit} KeyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.quantity} onChangeText={(x) => pageActions.inputQuantity(x)}
            />
            <View style={{width:16}}/>
            <RadioButton value='ml' label='Volume'
              onSelect={(x) => pageActions.selectUnit(x)}
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <TextField label='Energy' suffix={kcalSuffix} KeyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.energyPct} onChangeText={(x) => pageActions.inputEnergyPct(x)}
              renderAccessory={() => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(pageActions, pageData)}/>}
            />
            <View style={{width:16}}/>
            <RadioButton value='g' label='Weight'
              onSelect={(x) => pageActions.selectUnit(x)}
            />
          </View>
        </Card>
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8}}>
          <View style={{flexDirection:'row'}}>
            <TextField label='Protein' suffix={percentageSuffix} KeyboardType='numeric' containerStyle={{flex:1}}}
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