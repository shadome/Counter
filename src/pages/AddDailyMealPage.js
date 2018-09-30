'use strict';
import React, {Component} from 'react';
import {View, Text, ScrollView, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme,} from '../components/react-native-material-ui';
import TextField from '../components/react-native-material-textfield/adapted';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DailyMealBusiness from '../business/DailyMealBusiness';
import * as DailyMealActions from '../actions/DailyMealActions';
import * as AddDailyMealPageActions from '../actions/AddDailyMealPageActions';
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'
import KeyboardScrollView from '../components/KeyboardScrollView'
import CollapsibleCard from '../components/CollapsibleCard';

// class SelectUnitModal extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//     )
//   }
// }

class AddDailyMealPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isKeyboardVisible: false};
  }
  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', () => this.setState({...this.state, isKeyboardVisible: true}));
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', () => this.setState({...this.state, isKeyboardVisible: false}));
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
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
      pageActions.trigger(AddDailyMealPageActions.INPUT_ENERGY_PCT, total.toFixed(0));
  }
  cancel(props) {
    const {pageActions, navigation,} = props;
    // pageActions.trigger(AddDailyMealPageActions.RESET);
    navigation.goBack();
  }
  submit(props) {
    const {pageData, pageActions, dailyMealActions,} = props;
    dailyMealActions.trigger(DailyMealActions.ADD, DailyMealBusiness.getIdFromDate(new Date()), pageData);
    this.cancel(props)
  }
  renderSelectUnitModal(props) {
    const {pageData, pageActions, theme,} = this.props;
    return (
      <Modal transparent={true} visible={pageData.isSelectUnitVisible}
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
    )
  }
  render() {
    const {pageData, pageActions, navigation, theme,} = this.props;
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit;
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit;
    const energyAccessory = () => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(this.props)}/>;
    const selectUnitAndClose = (x) => {
      pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT, x);
      pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE);
    }
    let {isKeyboardVisible} = this.state;
    // TODO scrollview personnalisé qui garde son scrollPosition courant à jour, pour pouvoir utiliser des scrollTo sous forme d'offset
    /*
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.scrollView.scrollToEnd({animated: true});
          }}
    */
    return (
      <View style={{flex:1}}>
        {this.renderSelectUnitModal(this.props)}
        <Toolbar centerElement='Add food' leftElement='arrow-back' onLeftElementPress={navigation.goBack} />
        <View style={{flexDirection:'row'}}>
          <Button style={{container:{flex:1}}} primary text="Cancel" icon="clear" onPress={() => this.cancel(this.props)} />
          <Button style={{container:{flex:1}}} primary text="Submit" icon="done" onPress={() => this.submit(this.props)} />
        </View>
        <ScrollView>
          <CollapsibleCard style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}
            title="General information" 
          >
            <TextField label='Name' 
              value={pageData.name} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_NAME, x)}
            />
            <View style={{flexDirection:'row'}}>
              <TextField label='Quantity' suffix={pageData.unit} keyboardType='numeric' containerStyle={{flex:1}}
                value={pageData.quantity} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_QUANTITY, x)}
              />
              <View style={{width:16}}/>
              <TextField label='Energy' suffix={kcalSuffix} keyboardType='numeric' containerStyle={{flex:2}}
                value={pageData.energyPct} onChangeText={(x) => pageActions.trigger(AddDailyMealPageActions.INPUT_ENERGY_PCT, x)} renderAccessory={energyAccessory}
              />
            </View>
            <View style={{height:16}}/>
            <Button primary text="select unit" onPress={() => pageActions.trigger(AddDailyMealPageActions.SELECT_UNIT_VISIBLE_TOGGLE)}/>
          </CollapsibleCard>
          <CollapsibleCard style={{paddingLeft:16, paddingRight:16, paddingBottom:8, paddingTop:8}}
            title="Macronutrients"
          >
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
          </CollapsibleCard>
        </ScrollView>
        {!isKeyboardVisible && <MainBottomNavigationBar navigation={navigation} index='1'/>}
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