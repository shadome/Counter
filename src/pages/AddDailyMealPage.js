'use strict';
import React, {Component} from 'react';
import {View, Text, ScrollView, Modal,} from 'react-native';
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, withTheme,} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DailyMealBusiness from '../business/DailyMealBusiness';
import * as DailyMealActions from '../actions/DailyMealActions';
import * as AddDailyMealPageActions from '../actions/AddDailyMealPageActions';
import * as actions from '../actions/AddDailyMealPageActions';

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
      pageActions.trigger(actions.INPUT_ENERGY_PCT, total.toFixed(0));
      //pageActions.inputEnergyPct(total.toFixed(0));
  }
  cancel(props) {
    const {pageActions, navigation,} = props;
    pageActions.trigger(actions.RESET);
    navigation.goBack();
  }
  submit(props) {
    const {pageData, pageActions, dailyMealActions,} = props;
    dailyMealActions.trigger(dailyMealActions.ADD, DailyMealBusiness.getIdFromDate(new Date()), pageData);
    this.cancel(props)
    //dailyMealActions.add(DailyMealBusiness.getIdFromDate(new Date()), pageData);
    //pageActions.trigger(actions.RESET);
    //navigation.goBack();
  }
  render() {
    const {pageData, pageActions, navigation, theme,} = this.props;
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit;
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit;
    //let toolbarLeftElement = <IconToggle onPress={navigation.goBack} name='arrow-back' color={theme.palette.alternateTextColor}/>;
    let energyAccessory = () => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(this.props)}/>;
    return (
      <View>
        <Modal>
          <View style={{position:'absolute',top:0,left:0,right:0,bottom:0,justifyContent:'center',alignItems:'center'}}>
            <Dialog>
              <Dialog.Title><Text>Select a unit</Text></Dialog.Title>
              <Dialog.Content>
                <View>
                  <RadioButton value='g' label='Weight'
                    onSelect={(x) => pageActions.trigger(actions.SELECT_UNIT, x)}
                  />
                  <RadioButton value='ml' label='Volume'
                    onSelect={(x) => pageActions.trigger(actions.SELECT_UNIT, x)}
                  />
                </View>
              </Dialog.Content>
            </Dialog>
          </View>
        </Modal>
        <Toolbar centerElement='Add food' leftElement='arrow-back' onLeftElementPress={navigation.goBack} />
        <ScrollView>
          <View style={{flex:1,flexDirection:'row'}}>
            <Button primary text="Cancel" icon="clear" onPress={() => this.cancel(this.props)} />
            <Button primary text="Submit" icon="done" onPress={() => this.submit(this.props)} />
          </View>
          <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}>
            <Text style={theme.typography.subheading}>Information</Text>
            <TextField label='Name' 
              value={pageData.name} onChangeText={(x) => pageActions.trigger(actions.INPUT_NAME, x)}
            />
            <View style={{flex:1,flexDirection:'row'}}>
              <TextField style={{flex:1}} label='Quantity' suffix={pageData.unit} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.quantity} onChangeText={(x) => pageActions.trigger(actions.INPUT_QUANTITY, x)}
              />
              <View style={{width:16}}/>
              <TextField label='Energy' suffix={kcalSuffix} keyboardType='numeric' containerStyle={{flex:2}}
                value={pageData.energyPct} onChangeText={(x) => pageActions.trigger(actions.INPUT_ENERGY_PCT, x)} renderAccessory={energyAccessory}
              />
            </View>
            <View style={{height:16}}/>
            <View style={{flex:1,flexDirection:'row'}}>
              <RadioButton value='g' label='Weight' // TODO use modal
                onSelect={(x) => pageActions.trigger(actions.SELECT_UNIT, x)}
              />
              <RadioButton value='ml' label='Volume'
                onSelect={(x) => pageActions.trigger(actions.SELECT_UNIT, x)}
              />
            </View>
          </Card>
          <Button primary text="Select unit" onPress={() => pageActions.trigger(actions.SELECT_UNIT_VISIBLE_TOGGLE)} />
          <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}>
            <Text style={theme.typography.subheading}>Macronutrients</Text>
            <View style={{flexDirection:'row'}}>
                <TextField label='Protein' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                  value={pageData.proteinPct} onChangeText={(x) => pageActions.trigger(actions.INPUT_PROTEIN_PCT, x)}
                />
              <View style={{width:16}}/>
              <TextField label='Carbohydrates' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.carbohydratesPct} onChangeText={(x) => pageActions.trigger(actions.INPUT_CARBOHYDRATES_PCT, x)}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <TextField label='Fat' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.fatPct} onChangeText={(x) => pageActions.trigger(actions.INPUT_FAT_PCT, x)}
              />
              <View style={{width:16}}/>
              <TextField label='Ethanol' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.ethanolPct} onChangeText={(x) => pageActions.trigger(actions.INPUT_ETHANOL_PCT, x)}
              />
            </View>
          </Card>
          <Button text='submit' onPress={() => this.submit(this.props)}/>
        </ScrollView>
       </View>
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