'use strict'
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Modal, TouchableWithoutFeedback, Keyboard, Picker, Alert} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme, ActionButton} from '../../lib/react-native-material-ui'
import TextField from '../../lib/react-native-material-textfield/adapted'
import {CollapsibleCard} from '../../lib/collapsiblecard'
import * as DictionaryActions from '../actions/DictionaryActions'
import * as RegisterFoodActions from '../actions/RegisterFoodActions'
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'
import SelectUnitModal from '../fragments/SelectUnitModal'
import { VitaminsData, MineralsData, MacronutrientsData } from '../data/Nutrients'
import * as FoodCategories from '../data/FoodCategories'

class RegisterFoodPage extends Component {
  submit() {
    const {navigation, pageData, pageActions, dictionaryActions, dictionaryData} = this.props
    const clone = {...pageData, id:pageData.name}
    // dictionaryActions.trigger(DictionaryActions.RESET)
    // dictionaryActions.trigger(DictionaryActions.ADD, clone)
    // this.props.dictionaryActions.trigger(DictionaryActions.ADD, {name:'test5'})
    // pageActions.trigger(RegisterFoodActions.RESET)
    pageActions.reset()
    // let action = RegisterFoodActions.trigger(RegisterFoodActions.RESET)
    // this.props.store.dispatch(action)
    navigation.goBack()
  }
  renderCard(title, list, nbItemsPerRow = 2, headingData = undefined) {
    const {pageActions} = this.props
    let rows = []
    for (let i = 0; i < list.length; i+=nbItemsPerRow) {
      let row = []
      for (let j = 0; j < nbItemsPerRow; j++) {
        if (j !== 0) {
          row.push(<View key={`space_${title}_${i+j}`} style={Styles.space}/>)
        }
        if ((i+j) < list.length) {
          row.push(
            <TextField key={`textfield_${title}_${list[i+j].item.name}`} keyboardType='numeric' containerStyle={{flex:1}}
              label={list[i+j].item.name}
              suffix={list[i+j].item.unit.name} 
              value={list[i+j].value} 
              onChangeText={(x) => list[i+j].action(x)}
            />
          )
        } else {
          row.push(<View key={`placeholder_${title}_${j}`} style={{flex:1}}/>)
        }
      }
      rows.push(<View key={`row_${title}_${i}`} style={Styles.row}>{row}</View>)
    }
    return (
      <CollapsibleCard key={`card_${title}`} title={title} style={Styles.card}>
        {headingData}
        {rows}
      </CollapsibleCard>
    )
  }
  renderPicker() {
    const {pageActions, pageData} = this.props
    let content = []
    for (let item in FoodCategories) {
      content.push(<Picker.Item label={FoodCategories[item].name} value={FoodCategories[item]} key={FoodCategories[item].name}/>)
    }
    return (
      <Picker style={{flex:1}}
        onValueChange={(itemValue) => pageActions.inputCategory(itemValue)}
        selectedValue={pageData.category}
        mode='dropdown'
      >
        {content}
      </Picker>)
  }
  render() {
    const {pageData, pageActions, navigation, theme} = this.props
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit
    // TOOD add category
    // TODO rendre les animations asynchrones pour éviter qu'elles freeze
    // TODO scrollview personnalisé qui garde son scrollPosition courant à jour, pour pouvoir utiliser des scrollTo sous forme d'offset
    /*
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.scrollView.scrollToEnd({animated: true})
          }}
    */
    const Macronutrients = [
      {item:MacronutrientsData.protein, value:pageData.proteinPct, action:pageActions.inputProteinPct},
      {item:MacronutrientsData.carbohydrate, value:pageData.carbohydratesPct, action:pageActions.inputCarbohydratesPct},
      {item:MacronutrientsData.fat, value:pageData.fatPct, action:pageActions.inputFatPct},
      {item:MacronutrientsData.ethanol, value:pageData.ethanolPct, action:pageActions.inputEthanolPct},
    ]
    const DetailedMacro = [
      {item:MacronutrientsData.fat.saturated, value:pageData.saturatedFatPct, action:pageActions.inputFatSaturatedPct},
      {item:MacronutrientsData.fat.monounsaturated.n9, value:pageData.n9FatPct, action:pageActions.inputFatN9Pct},
      {item:MacronutrientsData.fat.polyunsaturated.n6, value:pageData.n6FatPct, action:pageActions.inputFatN6Pct},
      {item:MacronutrientsData.fat.polyunsaturated.n3, value:pageData.n3FatPct, action:pageActions.inputFatN3Pct},
    ]
    const Vitamins = [
      {item:VitaminsData.C, value:pageData.vitaminCPct, action:pageActions.inputVitCPct},
      {item:VitaminsData.D, value:pageData.vitaminDPct, action:pageActions.inputVitDPct},
      {item:VitaminsData.E, value:pageData.vitaminEPct, action:pageActions.inputVitEPct},
      {item:VitaminsData.K, value:pageData.vitaminKPct, action:pageActions.inputVitKPct},
      {item:VitaminsData.Aequiv, value:pageData.vitaminAPct, action:pageActions.inputVitAEquivPct},
      {item:VitaminsData.B1, value:pageData.vitaminB1Pct, action:pageActions.inputVitB1Pct},
      {item:VitaminsData.B2, value:pageData.vitaminB2Pct, action:pageActions.inputVitB2Pct},
      {item:VitaminsData.B3, value:pageData.vitaminB3Pct, action:pageActions.inputVitB3Pct},
      {item:VitaminsData.B5, value:pageData.vitaminB5Pct, action:pageActions.inputVitB5Pct},
      {item:VitaminsData.B6, value:pageData.vitaminB6Pct, action:pageActions.inputVitB6Pct},
      {item:VitaminsData.B7, value:pageData.vitaminB7Pct, action:pageActions.inputVitB7Pct},
      {item:VitaminsData.B9, value:pageData.vitaminB9Pct, action:pageActions.inputVitB9Pct},
      {item:VitaminsData.B12, value:pageData.vitaminB12Pct, action:pageActions.inputVitB12Pct},
      {item:VitaminsData.choline, value:pageData.vitaminCholinePct, action:pageActions.inputVitCholinePct},
    ]
    const Minerals = [
      {item:MineralsData.Ca, value:pageData.mineralCaPct, action:pageActions.inputMinCaPct},
      {item:MineralsData.Cl, value:pageData.mineralClPct, action:pageActions.inputMinClPct},
      {item:MineralsData.Cr, value:pageData.mineralCrChromium, action:pageActions.inputMinCrPct},
      {item:MineralsData.Cu, value:pageData.mineralCuPct, action:pageActions.inputMinCuPct},
      {item:MineralsData.Fe, value:pageData.mineralFePct, action:pageActions.inputMinFePct},
      {item:MineralsData.I, value:pageData.mineralIPct, action:pageActions.inputMinIPct},
      {item:MineralsData.K, value:pageData.mineralKPotassium, action:pageActions.inputMinKPct},
      {item:MineralsData.Mg, value:pageData.mineralMgPct, action:pageActions.inputMinMgPct},
      {item:MineralsData.Mn, value:pageData.mineralMnPct, action:pageActions.inputMinMnPct},
      {item:MineralsData.Mo, value:pageData.mineralMoPct, action:pageActions.inputMinMoPct},
      {item:MineralsData.Na, value:pageData.mineralNaPct, action:pageActions.inputMinNaPct},
      {item:MineralsData.P, value:pageData.mineralPPct, action:pageActions.inputMinPPct},
      {item:MineralsData.Se, value:pageData.mineralSePct, action:pageActions.inputMinSePct},
      {item:MineralsData.Zn, value:pageData.mineralZnPct, action:pageActions.inputMinZnPct},
    ]
    return (
      <View style={{flex:1}}>
        <Toolbar 
          centerElement='Register food' 
          leftElement='arrow-back' 
          onLeftElementPress={() => navigation.goBack()} 
          rightElement={
            <Button
              style={{text:{color:theme.palette.canvasColor}}}
              text='register'
              onPress={() => this.submit()} 
            />
          }
        />
        <ScrollView>
          <View style={{height:8}}/>
          <CollapsibleCard title='General information' style={Styles.card}>
            <TextField label='Name' 
              value={pageData.name} 
              onChangeText={(x) => pageActions.inputName(x)}
            />
            <View style={Styles.row}>
              {this.renderPicker()}
            </View>
          </CollapsibleCard>
          {this.renderCard(`Macronutrients (per ${pageData.unitAmount}${pageData.unit})`, Macronutrients, 2, 
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Energy' 
                suffix={kcalSuffix} 
                value={pageData.energyPct} 
                onChangeText={(x) => pageActions.inputEnergyPct(x)}
              />
              <View style={Styles.space}/>
              <View style={{flex:1}}>
                <Button primary raised 
                  text='calculate' 
                  onPress={() => pageActions.buttonCalculate()}
                />
              </View>
            </View>
          )}
          {this.renderCard(`Detailed macronutrients (per ${pageData.unitAmount}${pageData.unit})`, DetailedMacro)}
          {this.renderCard(`Vitamins (per ${pageData.unitAmount}${pageData.unit})`, Vitamins, 4)}
          {this.renderCard(`Minerals (per ${pageData.unitAmount}${pageData.unit})`, Minerals, 4)}
          <View style={{height:8}}/>
        </ScrollView>
        {/* <ActionButton style={{container:{bottom:50, backgroundColor:theme.palette.primaryColor}}} 
        onPress={() => this.props.dictionaryActions.trigger(DictionaryActions.ADD, {name:'test4'})}
        /> */}
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
  }, space: {
    width:16,
  }
})

export default connect(
  state => ({
    pageData: state.registerFoodReducer,
    // dictionaryData: state.dictionaryReducer,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(RegisterFoodActions, dispatch),
    // dailysMealsActions: bindActionCreators(DailyMealsActions, dispatch),
    // dictionaryActions: bindActionCreators(DictionaryActions, dispatch),
  })
)(withTheme(RegisterFoodPage))