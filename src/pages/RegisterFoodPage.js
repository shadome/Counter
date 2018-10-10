'use strict'
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Modal, TouchableWithoutFeedback, Keyboard, Picker, Alert} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme,} from '../../lib/react-native-material-ui'
import TextField from '../../lib/react-native-material-textfield/adapted'
import {CollapsibleCard} from '../../lib/collapsiblecard'
// import DailyMealsBusiness from '../business/DailyMealsBusiness'
import * as DictionaryActions from '../actions/DictionaryActions'
import * as RegisterFoodActions from '../actions/RegisterFoodActions'
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'
import SelectUnitModal from '../fragments/SelectUnitModal'
import { VitaminsData, MineralsData, MacronutrientsData } from '../data/nutrients'

class RegisterFoodPage extends Component {
  // constructor(props) {
  //   super(props)
    // this.state = {isKeyboardVisible: false}
    // this.state = {language:''}
  // }
  // componentWillMount () {
  //   this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', () => this.setState({...this.state, isKeyboardVisible: true}))
  //   this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', () => this.setState({...this.state, isKeyboardVisible: false}))
  //   this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', () => this.setState({...this.state, isKeyboardVisible: true})) // not working on Android
  //   this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', () => this.setState({...this.state, isKeyboardVisible: false})) // not working on Android
  // }
  // componentWillUnmount() {
  //   this.keyboardDidShowSub.remove()
  //   this.keyboardDidHideSub.remove()
  //   this.keyboardWillShowSub.remove()
  //   this.keyboardWillHideSub.remove()
  // }
  cancel(props) {
    const {pageActions, navigation,} = props
    navigation.goBack()
  }
  submit(props) {
    const {pageData, pageActions, dictionaryActions, dictionaryData} = props
    dictionaryActions.trigger(DictionaryActions.ADD, {id:'test',data:'toto'})
    // dictionaryActions.trigger(DictionaryActions.REMOVE, 'test')
    // dictionaryActions.trigger(DictionaryActions.REMOVE, {id:'test', data:'tata'})
    // Alert.alert(dictionaryData.test)
    // Alert.alert('test',dictionaryData['test'].id)
    // Alert.alert('test55',dictionaryData.data.test.id)
    // dailyMealsActions.trigger(DailyMealsActions.ADD, DailyMealsBusiness.getIdFromDate(new Date()), pageData)
    this.cancel(props)
  }
  // renderSelectUnitModal(props) {
  //   const {pageData, pageActions, theme,} = this.props
  //   const selectUnitAndClose = (x) => {
  //     pageActions.trigger(RegisterFoodActions.SELECT_UNIT, x)
  //     pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)
  //   }
  //   return (
  //     <Modal transparent={true} visible={pageData.isSelectUnitVisible}
  //       onRequestClose={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
  //       onDismiss={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
  //     >
  //     <TouchableWithoutFeedback style={{flex:1}} onPress={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}>
  //       <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.2)'}}>
  //         <Dialog>
  //           <Dialog.Title>
  //             <Text>Select a unit</Text>
  //           </Dialog.Title>
  //           <Dialog.Content>
  //             <View style={{height:theme.listItem.container.height}}>
  //               <RadioButton value='g' label='Weight' checked={pageData.unit === 'g'}
  //                 onSelect={(x) => selectUnitAndClose(x)}
  //               />
  //             </View>
  //             <View style={{height:theme.listItem.container.height}}>
  //               <RadioButton value='ml' label='Volume' checked={pageData.unit === 'ml'}
  //                 onSelect={(x) => selectUnitAndClose(x)}
  //               />
  //             </View>
  //           </Dialog.Content>
  //         </Dialog>
  //       </View>
  //       </TouchableWithoutFeedback>
  //     </Modal>
  //   )
  // }
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
              onChangeText={(x) => pageActions.trigger(list[i+j].action, x)}
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
  // renderCard2(title, list, nbItemsPerRow = 2, headingData = undefined) {
  //   const {pageActions} = this.props
  //   let rows = []
  //   for (let i = 0; i < list.length; i+=nbItemsPerRow) {
  //     let row = []
  //     for (let j = 0; j < nbItemsPerRow; j++) {
  //       if (j !== 0) {
  //         row.push(<View key={`space_${title}_${i+j}`} style={Styles.space}/>)
  //       }
  //       if ((i+j) < list.length) {
  //         row.push(
  //           <TextField key={`textfield_${title}_${list[i+j].label}`} keyboardType='numeric' containerStyle={{flex:1}}
  //             label={list[i+j].label}
  //             suffix={list[i+j].suffix} 
  //             value={list[i+j].value} 
  //             onChangeText={(x) => pageActions.trigger(list[i+j].action, x)}
  //           />
  //         )
  //       } else {
  //         row.push(<View key={`placeholder_${title}_${j}`} style={{flex:1}}/>)
  //       }
  //     }
  //     rows.push(<View key={`row_${title}_${i}`} style={Styles.row}>{row}</View>)
  //   }
  //   return (
  //     <CollapsibleCard key={`card_${title}`} title={title} style={Styles.card}>
  //       {headingData}
  //       {rows}
  //     </CollapsibleCard>
  //   )
  // }
  render() {
    const {pageData, pageActions, navigation, theme} = this.props
    // let {isKeyboardVisible} = this.state
    const percentageSuffix = pageData.unit + '/' + pageData.unitAmount + pageData.unit
    const kcalSuffix = 'kcal/' + pageData.unitAmount + pageData.unit
    // const energyAccessory = () => <IconToggle name='sync' onPress={() => this.calculateEnergyPct(this.props)}/>
    // TODO rendre les animations asynchrones pour éviter qu'elles freeze
    // TODO scrollview personnalisé qui garde son scrollPosition courant à jour, pour pouvoir utiliser des scrollTo sous forme d'offset
    /*
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{        
              this.scrollView.scrollToEnd({animated: true})
          }}
    */
    const Macronutrients = [
      {item:MacronutrientsData.protein, value:pageData.proteinPct, action:RegisterFoodActions.INPUT_PROTEIN_PCT},
      {item:MacronutrientsData.carbohydrate, value:pageData.carbohydratesPct, action:RegisterFoodActions.INPUT_CARBOHYDRATES_PCT},
      {item:MacronutrientsData.fat, value:pageData.fatPct, action:RegisterFoodActions.INPUT_FAT_PCT},
      {item:MacronutrientsData.ethanol, value:pageData.ethanolPct, action:RegisterFoodActions.INPUT_ETHANOL_PCT},
    ]
    const DetailedMacro = [
      {item:MacronutrientsData.fat.saturated, value:pageData.saturatedFatPct, action:RegisterFoodActions.INPUT_SATURATED_FAT_PCT},
      {item:MacronutrientsData.fat.monounsaturated.n9, value:pageData.n9FatPct, action:RegisterFoodActions.INPUT_N9_FAT_PCT},
      {item:MacronutrientsData.fat.polyunsaturated.n6, value:pageData.n6FatPct, action:RegisterFoodActions.INPUT_N6_FAT_PCT},
      {item:MacronutrientsData.fat.polyunsaturated.n3, value:pageData.n3FatPct, action:RegisterFoodActions.INPUT_N3_FAT_PCT},
    ]
    const Vitamins = [
      {item:VitaminsData.C, value:pageData.vitaminCPct, action:RegisterFoodActions.INPUT_VIT_C_ASCORBIC_ACID_PCT},
      {item:VitaminsData.D, value:pageData.vitaminDPct, action:RegisterFoodActions.INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT},
      {item:VitaminsData.E, value:pageData.vitaminEPct, action:RegisterFoodActions.INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT},
      {item:VitaminsData.K, value:pageData.vitaminKPct, action:RegisterFoodActions.INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT},
      {item:VitaminsData.Aequiv, value:pageData.vitaminAPct, action:RegisterFoodActions.INPUT_VIT_A_CAROTENOIDS_PCT},
      {item:VitaminsData.B1, value:pageData.vitaminB1Pct, action:RegisterFoodActions.INPUT_VIT_B1_THIAMINE_PCT},
      {item:VitaminsData.B2, value:pageData.vitaminB2Pct, action:RegisterFoodActions.INPUT_VIT_B2_RIBOFLAVIN_PCT},
      {item:VitaminsData.B3, value:pageData.vitaminB3Pct, action:RegisterFoodActions.INPUT_VIT_B3_NIACIN_ETC_PCT},
      {item:VitaminsData.B5, value:pageData.vitaminB5Pct, action:RegisterFoodActions.INPUT_VIT_B5_PANTOTHENIC_ACID_PCT},
      {item:VitaminsData.B6, value:pageData.vitaminB6Pct, action:RegisterFoodActions.INPUT_VIT_B6_PYRIDOXINE_ETC_PCT},
      {item:VitaminsData.B7, value:pageData.vitaminB7Pct, action:RegisterFoodActions.INPUT_VIT_B7_BIOTIN_PCT},
      {item:VitaminsData.B9, value:pageData.vitaminB9Pct, action:RegisterFoodActions.INPUT_VIT_B9_FOLATES_PCT},
      {item:VitaminsData.B12, value:pageData.vitaminB12Pct, action:RegisterFoodActions.INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT},
      {item:VitaminsData.choline, value:pageData.vitaminCholinePct, action:RegisterFoodActions.INPUT_VIT_CHOLINE_PCT},
    ]
    const Minerals = [
      {item:MineralsData.Ca, value:pageData.mineralCaPct, action:RegisterFoodActions.INPUT_MIN_CA_CALCIUM_PCT},
      {item:MineralsData.Cl, value:pageData.mineralClPct, action:RegisterFoodActions.INPUT_MIN_CL_CHLORINE_PCT},
      {item:MineralsData.Cr, value:pageData.mineralCrChromium, action:RegisterFoodActions.INPUT_MIN_CR_CHROMIUM_PCT},
      {item:MineralsData.Cu, value:pageData.mineralCuPct, action:RegisterFoodActions.INPUT_MIN_CU_COPPER_PCT},
      {item:MineralsData.Fe, value:pageData.mineralFePct, action:RegisterFoodActions.INPUT_MIN_FE_IRON_PCT},
      {item:MineralsData.I, value:pageData.mineralIPct, action:RegisterFoodActions.INPUT_MIN_I_IODINE_PCT},
      {item:MineralsData.K, value:pageData.mineralKPotassium, action:RegisterFoodActions.INPUT_MIN_K_POTASSIUM_PCT},
      {item:MineralsData.Mg, value:pageData.mineralMgPct, action:RegisterFoodActions.INPUT_MIN_MG_MAGNESIUM_PCT},
      {item:MineralsData.Mn, value:pageData.mineralMnPct, action:RegisterFoodActions.INPUT_MIN_MN_MANGANESE_PCT},
      {item:MineralsData.Mo, value:pageData.mineralMoPct, action:RegisterFoodActions.INPUT_MIN_MO_MOLYBDENUM_PCT},
      {item:MineralsData.Na, value:pageData.mineralNaPct, action:RegisterFoodActions.INPUT_MIN_NA_SODIUM_PCT},
      {item:MineralsData.P, value:pageData.mineralPPct, action:RegisterFoodActions.INPUT_MIN_P_PHOSPHORUS_PCT},
      {item:MineralsData.Se, value:pageData.mineralSePct, action:RegisterFoodActions.INPUT_MIN_SE_SELENIUM_PCT},
      {item:MineralsData.Zn, value:pageData.mineralZnPct, action:RegisterFoodActions.INPUT_MIN_ZN_ZINC_PCT},
    ]
    return (
      <View style={{flex:1}}>
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
            {/* <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Quantity' 
                suffix={pageData.unit} 
                value={pageData.quantity} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_QUANTITY, x)}
              />
              <View style={Styles.space}/>
              <Picker style={{flex:1, alignSelf:'flex-end', borderColor:'#888', borderWidth:5}}
                selectedValue={pageData.unit}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => pageActions.trigger(RegisterFoodActions.SELECT_UNIT, itemValue)}>
                <Picker.Item label="grams" value="g" />
                <Picker.Item label="milliliters" value="ml" />
              </Picker>
            </View> */}
          </CollapsibleCard>
          {this.renderCard(`Macronutrients (per ${pageData.unitAmount}${pageData.unit})`, Macronutrients, 2, 
            <View style={Styles.row}>
              <TextField keyboardType='numeric' containerStyle={{flex:1}}
                label='Energy' 
                suffix={kcalSuffix} 
                value={pageData.energyPct} 
                onChangeText={(x) => pageActions.trigger(RegisterFoodActions.INPUT_ENERGY_PCT, x)}
              />
              <View style={Styles.space}/>
              <View style={{flex:1}}>
                <Button primary raised
                  text='calculate' 
                  onPress={() => pageActions.trigger(RegisterFoodActions.CALCULATE_ENERGY_PCT)}
                  // onPress={() => this.calculateEnergyPct(this.props)}
                />
              </View>
            </View>
          )}
          {this.renderCard(`Detailed macronutrients (per ${pageData.unitAmount}${pageData.unit})`, DetailedMacro)}
          {this.renderCard(`Vitamins (per ${pageData.unitAmount}${pageData.unit})`, Vitamins, 4)}
          {this.renderCard(`Minerals (per ${pageData.unitAmount}${pageData.unit})`, Minerals, 4)}
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
    alignItems:'baseline',
  }, space: {
    width:16,
  }
})

export default connect(
  state => ({
    pageData: state.registerFoodReducer,
    dictionaryData: state.dictionaryReducer,
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(RegisterFoodActions, dispatch),
    // dailysMealsActions: bindActionCreators(DailyMealsActions, dispatch),
    dictionaryActions: bindActionCreators(DictionaryActions, dispatch),
  })
)(withTheme(RegisterFoodPage))