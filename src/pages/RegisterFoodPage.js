'use strict'
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme,} from '../../lib/react-native-material-ui'
import TextField from '../../lib/react-native-material-textfield/adapted'
import {CollapsibleCard} from '../../lib/collapsiblecard'
import DailyMealsBusiness from '../business/DailyMealsBusiness'
import * as DailyMealsActions from '../actions/DailyMealsActions'
import * as RegisterFoodActions from '../actions/RegisterFoodActions'
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'

class RegisterFoodPage extends Component {
  constructor(props) {
    super(props)
    this.state = {isKeyboardVisible: false}
  }
  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', () => this.setState({...this.state, isKeyboardVisible: true}))
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', () => this.setState({...this.state, isKeyboardVisible: false}))
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  calculateEnergyPct(props) {
    const {pageActions, pageData} = props
    const {fatPct, carbohydratesPct, proteinPct, ethanolPct} = pageData
    let total = 0
    if (fatPct !== undefined)
      total += 9 * fatPct // 8.8 : wikipedia
    if (carbohydratesPct !== undefined)
      total += 4 * carbohydratesPct // 3.87 : wikipedia
    if (proteinPct !== undefined)
      total += 4 * proteinPct
    if (ethanolPct !== undefined)
      total += 7 * ethanolPct
    if (total > 0)
      pageActions.trigger(RegisterFoodActions.INPUT_ENERGY_PCT, total.toFixed(0))
  }
  cancel(props) {
    const {pageActions, navigation,} = props
    // pageActions.trigger(RegisterFoodActions.RESET)
    navigation.goBack()
  }
  submit(props) {
    const {pageData, pageActions, dailyMealsActions,} = props
    dailyMealsActions.trigger(DailyMealsActions.ADD, DailyMealsBusiness.getIdFromDate(new Date()), pageData)
    this.cancel(props)
  }
  renderSelectUnitModal(props) {
    const {pageData, pageActions, theme,} = this.props
    return (
      <Modal transparent={true} visible={pageData.isSelectUnitVisible}
        onRequestClose={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
        onDismiss={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
      >
      <TouchableWithoutFeedback style={{flex:1}} onPress={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}>
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
    const {pageData, pageActions, navigation, theme,} = this.props
    let {isKeyboardVisible} = this.state
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit
    // const energyAccessory = () => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(this.props)}/>
    const selectUnitAndClose = (x) => {
      pageActions.trigger(RegisterFoodActions.SELECT_UNIT, x)
      pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)
    }
    // TODO scrollview personnalisé qui garde son scrollPosition courant à jour, pour pouvoir utiliser des scrollTo sous forme d'offset
    /*
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.scrollView.scrollToEnd({animated: true})
          }}
    */
    const space = (<View style={{width:16}}/>)
    return (
      <View style={{flex:1}}>
        {this.renderSelectUnitModal(this.props)}
        <Toolbar 
          centerElement='Register food' 
          leftElement='arrow-back' 
          onLeftElementPress={navigation.goBack} 
          rightElement={
            <Button
              style={{text:{color:theme.palette.canvasColor}}}
              text='register'
              onPress={() => this.submit(this.props)} 
            />
          }
        />
        <ScrollView>
          <View style={{height:8}}/>
          <CollapsibleCard title='General information' style={Styles.card}>
            <TextField label='Name' 
              value={pageData.name} 
              onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_NAME, x)}
            />
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Quantity' 
                suffix={pageData.unit} 
                value={pageData.quantity} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_QUANTITY, x)}
              />
              {space}
              <View style={{flex:1}}>
                <Button primary raised
                  text='select unit' 
                  onPress={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
                />
              </View>
            </View>
          </CollapsibleCard>
          <CollapsibleCard title='Macronutrients' style={Styles.card}>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Energy' 
                suffix={kcalSuffix} 
                value={pageData.energyPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_ENERGY_PCT, x)}
              />
              {space}
              <View style={{flex:1}}>
                <Button primary raised
                  text='calculate' 
                  onPress={() => this.calculateEnergyPct(this.props)}
                />
              </View>
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Protein' 
                suffix={percentageSuffix}
                value={pageData.proteinPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_PROTEIN_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Carbohydrates' 
                suffix={percentageSuffix}
                value={pageData.carbohydratesPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_CARBOHYDRATES_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Fat' 
                suffix={percentageSuffix} 
                value={pageData.fatPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_FAT_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Ethanol' 
                suffix={percentageSuffix} 
                value={pageData.ethanolPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_ETHANOL_PCT, x)}
              />
            </View>
          </CollapsibleCard>
          <CollapsibleCard title='Detailed macronutrients' style={Styles.card}>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Saturated fat' 
                suffix={percentageSuffix} 
                value={pageData.saturatedFatPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_SATURATED_FAT_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='ω−9 (MUFA)' 
                suffix={percentageSuffix} 
                value={pageData.n9FatPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_N9_FAT_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='ω−6 (PUFA)' 
                suffix={percentageSuffix} 
                value={pageData.n6FatPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_N6_FAT_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='ω−3 (PUFA)' 
                suffix={percentageSuffix} 
                value={pageData.n3FatPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_N3_FAT_PCT, x)}
              />
            </View>
          </CollapsibleCard>
          <CollapsibleCard title='Vitamins' style={Styles.card}>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='C (ascorbic acid)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminCPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_C_ASCORBIC_ACID_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='D (cholecalciferol, ergocalciferol)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminDPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='E (tocopherols, tocotrienols, ...)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminEPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='K (phylloquinone, ...)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminKPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_K_PHYLLOQUINONE_MENAQUINONES_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='A equiv. (β-carotene)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminAPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_A_CAROTENOIDS_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B1 (thiamine)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminB1Pct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B1_THIAMINE_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B2 (riboflavin)' 
                suffix={percentageSuffix}
                value={pageData.vitaminB2Pct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B2_RIBOFLAVIN_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B3 (niacin, ...)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminB3Pct}
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B3_NIACIN_ETC_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B5 (pantothenic acid)'
                suffix={percentageSuffix}
                value={pageData.vitaminB5Pct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B5_PANTOTHENIC_ACID_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B6 (pyridoxine, ...)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminB6Pct}
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B6_PYRIDOXINE_ETC_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B7 (biotin)'
                suffix={percentageSuffix}
                value={pageData.vitaminB7Pct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B7_BIOTIN_PCT, x)}
              />
              {space}
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B9 (folates)' 
                suffix={percentageSuffix} 
                value={pageData.vitaminB9Pct}
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B9_FOLATES_PCT, x)}
              />
            </View>
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='B12 (cyanocobalamin, ...)'
                suffix={percentageSuffix}
                value={pageData.vitaminB12Pct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_B12_CYANOCOBALAMIN_ETC_PCT, x)}
              />
              {space}
              <View style={{flex:1}}/>
            </View>
          </CollapsibleCard>
          <View style={{height:8}}/>
        </ScrollView>
        {!isKeyboardVisible && <MainBottomNavigationBar navigation={navigation} index='1'/>}
       </View>
    )
  }
}

const Styles = StyleSheet.create({
  card: {
    paddingLeft:16, 
    paddingRight:16, 
    paddingBottom:8, 
    paddingTop:8,
  }, row: {
    flexDirection:'row', 
    alignItems:'baseline',
  }
})

export default connect(
  state => ({
    pageData: state.registerFoodReducer,
    //dailyMealData: state.dailyMealReducer,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(RegisterFoodActions, dispatch),
    dailysMealActions: bindActionCreators(DailyMealsActions, dispatch),
  })
)(withTheme(RegisterFoodPage))