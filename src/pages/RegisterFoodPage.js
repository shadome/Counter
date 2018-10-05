'use strict'
import React, {Component} from 'react'
import {StyleSheet, View, Text, ScrollView, Modal, TouchableWithoutFeedback, Keyboard, Picker} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Toolbar, Icon, IconToggle, Card, RadioButton, Button, Dialog, withTheme,} from '../../lib/react-native-material-ui'
import TextField from '../../lib/react-native-material-textfield/adapted'
import {CollapsibleCard} from '../../lib/collapsiblecard'
import DailyMealsBusiness from '../business/DailyMealsBusiness'
import * as DailyMealsActions from '../actions/DailyMealsActions'
import * as RegisterFoodActions from '../actions/RegisterFoodActions'
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'
import SelectUnitModal from '../fragments/SelectUnitModal'

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
    const {pageData, pageActions, dailyMealsActions,} = props
    dailyMealsActions.trigger(DailyMealsActions.ADD, DailyMealsBusiness.getIdFromDate(new Date()), pageData)
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
            <TextField key={`textfield_${title}_${list[i+j].label}`} keyboardType='numeric' containerStyle={{flex:1}}
              label={list[i+j].label}
              suffix={list[i+j].suffix} 
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
      {label:'Proteins', suffix:percentageSuffix, value:pageData.proteinPct, action:RegisterFoodActions.INPUT_PROTEIN_PCT},
      {label:'Carbohydrates', suffix:percentageSuffix, value:pageData.carbohydratesPct, action:RegisterFoodActions.INPUT_CARBOHYDRATES_PCT},
      {label:'Fat', suffix:percentageSuffix, value:pageData.fatPct, action:RegisterFoodActions.INPUT_FAT_PCT},
      {label:'Ethanol', suffix:percentageSuffix, value:pageData.ethanolPct, action:RegisterFoodActions.INPUT_ETHANOL_PCT},
    ]
    const DetailedMacro = [
      {label:'Saturated fat', suffix:percentageSuffix, value:pageData.saturatedFatPct, action:RegisterFoodActions.INPUT_SATURATED_FAT_PCT},
      {label:'ω−9 (MUFA)', suffix:percentageSuffix, value:pageData.n9FatPct, action:RegisterFoodActions.INPUT_N9_FAT_PCT},
      {label:'ω−6 (PUFA)', suffix:percentageSuffix, value:pageData.n6FatPct, action:RegisterFoodActions.INPUT_N6_FAT_PCT},
      {label:'ω−3 (PUFA)', suffix:percentageSuffix, value:pageData.n3FatPct, action:RegisterFoodActions.INPUT_N3_FAT_PCT},
    ]
    const Vitamins = [
      {label:'C (ascorbic acid)', suffix:percentageSuffix, value:pageData.vitaminCPct, action:RegisterFoodActions.INPUT_VIT_C_ASCORBIC_ACID_PCT},
      {label:'D (cholecalciferol, ergocalciferol)', suffix:percentageSuffix, value:pageData.vitaminDPct, action:RegisterFoodActions.INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT},
      {label:'E (tocopherols, tocotrienols, ...)', suffix:percentageSuffix, value:pageData.vitaminEPct, action:RegisterFoodActions.INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT},
      {label:'K (phylloquinone, ...)', suffix:percentageSuffix, value:pageData.vitaminKPct, action:RegisterFoodActions.INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT},
      {label:'A equiv. (β-carotene)', suffix:percentageSuffix, value:pageData.vitaminAPct, action:RegisterFoodActions.INPUT_VIT_A_CAROTENOIDS_PCT},
      {label:'B1 (thiamine)', suffix:percentageSuffix, value:pageData.vitaminB1Pct, action:RegisterFoodActions.INPUT_VIT_B1_THIAMINE_PCT},
      {label:'B2 (riboflavin)', suffix:percentageSuffix, value:pageData.vitaminB2Pct, action:RegisterFoodActions.INPUT_VIT_B2_RIBOFLAVIN_PCT},
      {label:'B3 (niacin, ...)', suffix:percentageSuffix, value:pageData.vitaminB3Pct, action:RegisterFoodActions.INPUT_VIT_B3_NIACIN_ETC_PCT},
      {label:'B5 (pantothenic acid)', suffix:percentageSuffix, value:pageData.vitaminB5Pct, action:RegisterFoodActions.INPUT_VIT_B5_PANTOTHENIC_ACID_PCT},
      {label:'B6 (pyridoxine, ...)' , suffix:percentageSuffix, value:pageData.vitaminB6Pct, action:RegisterFoodActions.INPUT_VIT_B6_PYRIDOXINE_ETC_PCT},
      {label:'B7 (biotin)', suffix:percentageSuffix, value:pageData.vitaminB7Pct, action:RegisterFoodActions.INPUT_VIT_B7_BIOTIN_PCT},
      {label:'B9 (folates)', suffix:percentageSuffix, value:pageData.vitaminB9Pct, action:RegisterFoodActions.INPUT_VIT_B9_FOLATES_PCT},
      {label:'B12 (cyanocobalamin, ...)', suffix:percentageSuffix, value:pageData.vitaminB12Pct, action:RegisterFoodActions.INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT},
    ]
    const Minerals = [
      {label:'Ca (calcium)', suffix:percentageSuffix, value:pageData.mineralCaPct, action:RegisterFoodActions.INPUT_MIN_CA_CALCIUM_PCT},
      {label:'Cl (chlorine)', suffix:percentageSuffix, value:pageData.mineralClPct, action:RegisterFoodActions.INPUT_MIN_CL_CHLORINE_PCT},
      {label:'Co (cobalt)', suffix:percentageSuffix, value:pageData.mineralCoPct, action:RegisterFoodActions.INPUT_MIN_CO_COBALT_PCT},
      {label:'Cr (chromium)', suffix:percentageSuffix, value:pageData.mineralCrChromium, action:RegisterFoodActions.INPUT_MIN_CR_CHROMIUM_PCT},
      {label:'Cu (copper)', suffix:percentageSuffix, value:pageData.mineralCuPct, action:RegisterFoodActions.INPUT_MIN_CU_COPPER_PCT},
      {label:'Fe (iron)', suffix:percentageSuffix, value:pageData.mineralFePct, action:RegisterFoodActions.INPUT_MIN_FE_IRON_PCT},
      {label:'I (iodin)', suffix:percentageSuffix, value:pageData.mineralIPct, action:RegisterFoodActions.INPUT_MIN_I_IODINE_PCT},
      {label:'K (potassium)', suffix:percentageSuffix, value:pageData.mineralKPotassium, action:RegisterFoodActions.INPUT_MIN_K_POTASSIUM_PCT},
      {label:'Mg (magnesium)', suffix:percentageSuffix, value:pageData.mineralMgPct, action:RegisterFoodActions.INPUT_MIN_MG_MAGNESIUM_PCT},
      {label:'Mn (manganese)' , suffix:percentageSuffix, value:pageData.mineralMnPct, action:RegisterFoodActions.INPUT_MIN_MN_MANGANESE_PCT},
      {label:'Mo (molybdenum)', suffix:percentageSuffix, value:pageData.mineralMoPct, action:RegisterFoodActions.INPUT_MIN_MO_MOLYBDENUM_PCT},
      {label:'Na (Sodium)', suffix:percentageSuffix, value:pageData.mineralNaPct, action:RegisterFoodActions.INPUT_MIN_NA_SODIUM_PCT},
      {label:'P (phosphorus)', suffix:percentageSuffix, value:pageData.mineralPPct, action:RegisterFoodActions.INPUT_MIN_P_PHOSPHORUS_PCT},
      {label:'Se (selenium)', suffix:percentageSuffix, value:pageData.mineralSePct, action:RegisterFoodActions.INPUT_MIN_SE_SELENIUM_PCT},
      {label:'Zn (zinc)', suffix:percentageSuffix, value:pageData.mineralZnPct, action:RegisterFoodActions.INPUT_MIN_ZN_ZINC_PCT},
    ]
    return (
      <View style={{flex:1}}>
        {/* {this.renderSelectUnitModal(this.props)} */}
        {/* <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center', alignContent:'center', alignSelf:'center'}}>
          <SelectUnitModal/>
        </View> */}
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
              <View style={Styles.space}/>
              <Picker style={{flex:1, alignSelf:'flex-end', borderColor:'#888', borderWidth:5}}
                selectedValue={pageData.unit}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => pageActions.trigger(RegisterFoodActions.SELECT_UNIT, itemValue)}>
                <Picker.Item label="grams" value="g" />
                <Picker.Item label="milliliters" value="ml" />
              </Picker>
              {/* <View style={{flex:1}}>
                <Button primary raised
                  text='select unit' 
                  onPress={() => pageActions.trigger(RegisterFoodActions.SELECT_UNIT_VISIBLE_TOGGLE)}
                />
              </View> */}
            </View>
          </CollapsibleCard>
          {this.renderCard('Macronutrients', Macronutrients, 2, 
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
          {this.renderCard('Detailed macronutrients', DetailedMacro)}
          {this.renderCard('Vitamins', Vitamins)}
          {this.renderCard('Minerals', Minerals)}
          <View style={{height:8}}/>
        </ScrollView>
        {/* {!isKeyboardVisible && <MainBottomNavigationBar navigation={navigation} index='1'/>} */}
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
  }),
  (dispatch) => ({
    pageActions: bindActionCreators(RegisterFoodActions, dispatch),
    dailysMealsActions: bindActionCreators(DailyMealsActions, dispatch),
  })
)(withTheme(RegisterFoodPage))