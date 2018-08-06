'use strict';
import React, {Component} from 'react';
import {View, Text, ScrollView,} from 'react-native';
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, withTheme,} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DailyMealBusiness from '../business/DailyMealBusiness';
import * as DailyMealActions from '../actions/DailyMealActions';
import * as AddDailyMealPageActions from '../actions/AddDailyMealPageActions';
import * as types from '../actions/AddDailyMealPageActions';

class AddDailyMealPage extends Component {
  constructor(props) {
    super(props);
  }
  calculateEnergyPct(props) {
    const {pageActions, pageData} = props;
    const {fatPct, carbohydratesPct, proteinPct, ethanolPct} = pageData;
    let total = 0;
    if (fatPct !== undefined)
      total += 9 * fatPct; // 8.8 : wikipedia
    if (carbohydratesPct !== undefined)
      total += 4 * carbohydratesPct; // 3.87 : wikipedia
    if (proteinPct !== undefined)
      total += 4 * proteinPct;
    if (ethanolPct !== undefined)
      total += 7 * ethanolPct;
    if (total > 0)
      pageActions.input(types.INPUT_ENERGY_PCT, total.toFixed(0));
      //pageActions.inputEnergyPct(total.toFixed(0));
  }
  submit(props) {
    const {pageData, pageActions, dailyMealActions, navigation,} = props;
    dailyMealActions.add(DailyMealBusiness.getIdFromDate(new Date()), pageData);
    pageActions.reset();
    navigation.goBack();
  }
  render() {
    const {pageData, pageActions, dailyMealActions, navigation, theme,} = this.props;
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit;
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit;
    let toolbarLeftElement = <IconToggle onPress={navigation.goBack} name='arrow-back' color={theme.palette.alternateTextColor}/>;
    let energyAccessory = () => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(this.props)}/>;
    return (
      <ScrollView>
        <Toolbar centerElement={('Add food')}
          leftElement={toolbarLeftElement}
        />
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}>
          <Text style={theme.typography.subheading}>Information</Text>
          <TextField label='Name' 
            value={pageData.name} onChangeText={(x) => pageActions.trigger(types.INPUT_NAME, x)}
          />
          <View style={{flex:1,flexDirection:'row'}}>
            <TextField style={{flex:1}} label='Quantity' suffix={pageData.unit} keyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.quantity} onChangeText={(x) => pageActions.trigger(types.INPUT_QUANTITY, x)}
            />
            <View style={{width:16}}/>
            <TextField label='Energy' suffix={kcalSuffix} keyboardType='numeric' containerStyle={{flex:2}}
              value={pageData.energyPct} onChangeText={(x) => pageActions.trigger(types.INPUT_ENERGY_PCT, x)} renderAccessory={energyAccessory}
            />
          </View>
          <View style={{height:16}}/>
          <View style={{flex:1,flexDirection:'row'}}>
            <RadioButton value='g' label='Weight' // TODO use modal
              onSelect={(x) => pageActions.trigger(types.SELECT_UNIT, x)}
            />
            <RadioButton value='ml' label='Volume'
              onSelect={(x) => pageActions.trigger(types.SELECT_UNIT, x)}
            />
          </View>
        </Card>
        <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}>
          <Text style={theme.typography.subheading}>Macronutrients</Text>
          <View style={{flexDirection:'row'}}>
              <TextField label='Protein' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.proteinPct} onChangeText={(x) => pageActions.trigger(types.INPUT_PROTEIN_PCT, x)}
              />
            <View style={{width:16}}/>
            <TextField label='Carbohydrates' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.carbohydratesPct} onChangeText={(x) => pageActions.trigger(types.INPUT_CARBOHYDRATES_PCT, x)}
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <TextField label='Fat' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.fatPct} onChangeText={(x) => pageActions.trigger(types.INPUT_FAT_PCT, x)}
            />
            <View style={{width:16}}/>
            <TextField label='Ethanol' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
              value={pageData.ethanolPct} onChangeText={(x) => pageActions.trigger(types.INPUT_ETHANOL_PCT, x)}
            />
          </View>
        </Card>
        <Button text='submit' onPress={() => this.submit(this.props)}/>
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    pageData: state.addDailyMealPageReducer,
    //dailyMealData: state.dailyMealReducer,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(AddDailyMealPageActions, dispatch),
    dailyMealActions: bindActionCreators(DailyMealActions, dispatch),
  })
)(withTheme(AddDailyMealPage));