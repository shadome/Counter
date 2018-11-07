'use strict'
import React, {Component} from 'react'
import {NativeModules, StatusBar, View, ScrollView, Text, FlatList} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, BottomNavigation, withTheme} from '../../../lib/react-native-material-ui'
import * as DailyMealsActions from '../../actions/DailyMealsActions'
import DailyMealsBusiness from '../../business/DailyMealsBusiness'
import MainBottomNavigationBar from '../../fragments/MainBottomNavigationBarFragment'

class DailyMealsPage extends Component {
  constructor(props) {
    super(props)
    this.currentKey = DailyMealsBusiness.getIdFromDate(new Date())
  }
  render() {
    const {dailyMealsData, dailyMealsActions, dictionaryData, navigation, theme,} = this.props
    const key = this.currentKey
    this.currentKey = DailyMealsBusiness.getIdFromDate(new Date())
    const list = (dailyMealsData.dailyMealsHistory[key]) ? dailyMealsData.dailyMealsHistory[key] : []
    const energy = (item) => (item.energyPct * item.quantity / item.unitAmount).toFixed(0)
    const listItemLeftElement = <Icon name='alarm'/>
    const listItemRightElement = (item) => <Text>{energy(item)} kcal</Text>
    const listItem = (item, index) =>
      <ListItem divider dense 
        //onLongPress={() => dailyMealsActions.remove(key, index)}
        onLongPress={() => dailyMealsActions.trigger(DailyMealsActions.REMOVE, key, index)}
        centerElement={{primaryText:item.name, secondaryText:item.quantity + item.unit,}}
        leftElement={listItemLeftElement} rightElement={listItemRightElement(item)} 
      />
    return (
      <View style={{flex:1}}>
        <Toolbar centerElement={'Daily meals [' + list.reduce((x, y) => x + parseInt(energy(y)), 0) + ']'}/>
        {list === undefined || list.length < 1 ? 
          <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            <View style={{backgroundColor:'#cccccc', height:150, width:150, borderRadius:150, alignItems:'center', justifyContent:'center'}}>
            {/* <Icon iconSet='FontAwesome' name='folder-open-o' text='empty' style={{marginLeft:15, fontSize:100}}/> */}
              <Icon iconSet='FontAwesome' name='ellipsis-h' size={100} style={{marginTop:30}}/>
            </View>
          </View>  
        :
          <ScrollView style={{flex:1}}>
            <FlatList data={list}
              keyExtractor={(item,index) => index.toString()}
              renderItem={({item, index}) => listItem(item, index)}
              ListFooterElement={<ListItem divider dense/>}
            />
          </ScrollView>
        }
        <ActionButton style={{container:{bottom:50, backgroundColor:theme.palette.primaryColor}}}/>
        <MainBottomNavigationBar navigation={navigation} index='0'/>
      </View>
    )
  }
}

export default connect(
  state => ({
    dailyMealsData: state.dailyMealsReducer,
    dictionaryData: state.dictionaryReducer,
    //pageData: state.listDailyMealPageReducer,
  }),
  (dispatch) => ({
    dailyMealsActions: bindActionCreators(DailyMealsActions, dispatch),
    // pageActions: bindActionCreators(ListDailyMealPageActions, dispatch),
  })
)(withTheme(DailyMealsPage))
