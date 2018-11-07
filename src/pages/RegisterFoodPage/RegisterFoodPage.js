'use strict'
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Modal, TouchableWithoutFeedback, Keyboard, Picker, Alert} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme, ActionButton} from '../../../lib/react-native-material-ui'
import TextField from '../../../lib/react-native-material-textfield/adapted'
import {CollapsibleCard} from '../../../lib/collapsiblecard'
import * as DictionaryActions from '../../actions/DictionaryActions'
import * as RegisterFoodActions from '../../actions/RegisterFoodActions'
import MainBottomNavigationBar from '../../fragments/MainBottomNavigationBarFragment'
import { VitaminsData, MineralsData, MacronutrientsData } from '../../data/Nutrients'
import * as FoodCategories from '../../data/FoodCategories'
import * as FoodEntriesServices from '../../services/FoodEntriesService'

class RegisterFoodPage extends Component {
  submit() {
    const {navigation, pageData, pageActions, dictionaryActions} = this.props
    // TODO artificial first choice selection due to Picker not putting a default value through redux
    dictionaryActions.add({category:pageData.category || Object.values(FoodCategories)[0], ...pageData})
    pageActions.reset()
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
      {item:MacronutrientsData.fat.saturated, value:pageData.fatSaturatedPct, action:pageActions.inputFatSaturatedPct},
      {item:MacronutrientsData.fat.monounsaturated.n9, value:pageData.fatN9Pct, action:pageActions.inputFatN9Pct},
      {item:MacronutrientsData.fat.polyunsaturated.n6, value:pageData.fatN6Pct, action:pageActions.inputFatN6Pct},
      {item:MacronutrientsData.fat.polyunsaturated.n3, value:pageData.fatN3Pct, action:pageActions.inputFatN3Pct},
    ]
    const Vitamins = [
      {item:VitaminsData.C, value:pageData.vitCPct, action:pageActions.inputVitCPct},
      {item:VitaminsData.D, value:pageData.vitDPct, action:pageActions.inputVitDPct},
      {item:VitaminsData.E, value:pageData.vitEPct, action:pageActions.inputVitEPct},
      {item:VitaminsData.K, value:pageData.vitKPct, action:pageActions.inputVitKPct},
      {item:VitaminsData.Aequiv, value:pageData.vitAPct, action:pageActions.inputVitAEquivPct},
      {item:VitaminsData.B1, value:pageData.vitB1Pct, action:pageActions.inputVitB1Pct},
      {item:VitaminsData.B2, value:pageData.vitB2Pct, action:pageActions.inputVitB2Pct},
      {item:VitaminsData.B3, value:pageData.vitB3Pct, action:pageActions.inputVitB3Pct},
      {item:VitaminsData.B5, value:pageData.vitB5Pct, action:pageActions.inputVitB5Pct},
      {item:VitaminsData.B6, value:pageData.vitB6Pct, action:pageActions.inputVitB6Pct},
      {item:VitaminsData.B7, value:pageData.vitB7Pct, action:pageActions.inputVitB7Pct},
      {item:VitaminsData.B9, value:pageData.vitB9Pct, action:pageActions.inputVitB9Pct},
      {item:VitaminsData.B12, value:pageData.vitB12Pct, action:pageActions.inputVitB12Pct},
      {item:VitaminsData.choline, value:pageData.vitCholinePct, action:pageActions.inputVitCholinePct},
    ]
    const Minerals = [
      {item:MineralsData.Ca, value:pageData.minCaPct, action:pageActions.inputMinCaPct},
      {item:MineralsData.Cl, value:pageData.minClPct, action:pageActions.inputMinClPct},
      {item:MineralsData.Cr, value:pageData.minCrChromium, action:pageActions.inputMinCrPct},
      {item:MineralsData.Cu, value:pageData.minCuPct, action:pageActions.inputMinCuPct},
      {item:MineralsData.Fe, value:pageData.minFePct, action:pageActions.inputMinFePct},
      {item:MineralsData.I, value:pageData.minIPct, action:pageActions.inputMinIPct},
      {item:MineralsData.K, value:pageData.minKPct, action:pageActions.inputMinKPct},
      {item:MineralsData.Mg, value:pageData.minMgPct, action:pageActions.inputMinMgPct},
      {item:MineralsData.Mn, value:pageData.minMnPct, action:pageActions.inputMinMnPct},
      {item:MineralsData.Mo, value:pageData.minMoPct, action:pageActions.inputMinMoPct},
      {item:MineralsData.Na, value:pageData.minNaPct, action:pageActions.inputMinNaPct},
      {item:MineralsData.P, value:pageData.minPPct, action:pageActions.inputMinPPct},
      {item:MineralsData.Se, value:pageData.minSePct, action:pageActions.inputMinSePct},
      {item:MineralsData.Zn, value:pageData.minZnPct, action:pageActions.inputMinZnPct},
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
              <View style={Styles.space}/>
              <View style={{flex:1}}>
                <Button primary raised 
                  text='Search' 
                  onPress={() => navigation.navigate('SEARCH_FOOD_PAGE', {onReturn:pageActions.init, onSearch:FoodEntriesServices.searchEntries})}
                />
              </View>
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
          {this.renderCard(`Vitamins (per ${pageData.unitAmount}${pageData.unit})`, Vitamins, 2)}
          {this.renderCard(`Minerals (per ${pageData.unitAmount}${pageData.unit})`, Minerals, 2)}
          <View style={{height:8}}/>
        </ScrollView>
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
    alignItems:'center',
  }, space: {
    width:16,
  }
})

export default connect(
  state => ({
    pageData: state.registerFoodReducer,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(RegisterFoodActions, dispatch),
    dictionaryActions: bindActionCreators(DictionaryActions, dispatch),
  })
)(withTheme(RegisterFoodPage))