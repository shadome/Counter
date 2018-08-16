'use strict';
import React, {Component} from 'react';
import {View, Text, ScrollView, Modal, TouchableWithoutFeedback,} from 'react-native';
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme,} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DailyMealBusiness from '../business/DailyMealBusiness';
import * as DailyMealActions from '../actions/DailyMealActions';
import * as AddDailyMealPageActions from '../actions/AddDailyMealPageActions';

class CalendarPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const {pageData, pageActions, navigation, theme,} = this.props;
    // const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit;
    // const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit;
    // const energyAccessory = () => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(this.props)}/>;
    // const selectUnitAndClose = (x) => {
    //   pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT, x);
    //   pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE);
    // }
    return (
      <View>
        {/* <Modal transparent={true} visible={pageData.isSelectUnitVisible}
          onRequestClose={() => pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE)}
          onDismiss={() => pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE)}
        >
        <TouchableWithoutFeedback style={{flex:1}} onPress={() => pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE)}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.2)'}}>
            <Dialog>
              <Dialog.Title>
                <Text>Select a unit</Text>
              </Dialog.Title>
              <Dialog.Content>
                <View style={{height:theme.listItem.container.height}}>
                  <RadioButton value='g' label='Weight' checked={pageData.unit === 'g'}
                    onSelect={(x) => selectUnitAndClose(x)}
                  />
                </View>
                <View style={{height:theme.listItem.container.height}}>
                  <RadioButton value='ml' label='Volume' checked={pageData.unit === 'ml'}
                    onSelect={(x) => selectUnitAndClose(x)}
                  />
                </View>
              </Dialog.Content>
            </Dialog>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Toolbar centerElement='Add food' leftElement='arrow-back' onLeftElementPress={navigation.goBack} />
        <View style={{flexDirection:'row'}}>
          <Button style={{container:{width:'50%'}}} primary text="Cancel" icon="clear" onPress={() => this.cancel(this.props)} />
          <Button style={{container:{width:'50%'}}} primary text="Submit" icon="done" onPress={() => this.submit(this.props)} />
        </View>
        <ScrollView>
          <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}>
            <Text style={theme.typography.subheading}>Information</Text>
            <TextField label='Name' 
              value={pageData.name} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_NAME, x)}
            />
            <View style={{flex:1,flexDirection:'row'}}>
              <TextField style={{flex:1}} label='Quantity' suffix={pageData.unit} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.quantity} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_QUANTITY, x)}
              />
              <View style={{width:16}}/>
              <TextField label='Energy' suffix={kcalSuffix} keyboardType='numeric' containerStyle={{flex:2}}
                value={pageData.energyPct} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_ENERGY_PCT, x)} renderAccessory={energyAccessory}
              />
            </View>
            <View style={{height:16}}/>
            <Button primary text="select unit" onPress={() => pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE)}/>
          </Card>
          <Card style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}>
            <Text style={theme.typography.subheading}>Macronutrients</Text>
            <View style={{flexDirection:'row'}}>
                <TextField label='Protein' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                  value={pageData.proteinPct} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_PROTEIN_PCT, x)}
                />
              <View style={{width:16}}/>
              <TextField label='Carbohydrates' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.carbohydratesPct} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_CARBOHYDRATES_PCT, x)}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <TextField label='Fat' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.fatPct} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_FAT_PCT, x)}
              />
              <View style={{width:16}}/>
              <TextField label='Ethanol' suffix={percentageSuffix} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.ethanolPct} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_ETHANOL_PCT, x)}
              />
            </View>
          </Card>
        </ScrollView> */}
       </View>
    );
  }
}

export default connect(
  state => ({
    // pageData: state.addDailyMealPageReducer,
    //dailyMealData: state.dailyMealReducer,
  }),
  (dispatch) => ({
    // pageActions: bindActionCreators(AddDailyMealPageActions, dispatch),
    // dailyMealActions: bindActionCreators(DailyMealActions, dispatch),
  })
)(withTheme(AddDailyMealPage));