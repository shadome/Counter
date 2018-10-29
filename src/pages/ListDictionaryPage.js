'use strict'
import React, {Component} from 'react'
import {NativeModules, StatusBar, View, ScrollView, Text, FlatList} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, BottomNavigation, withTheme} from '../../lib/react-native-material-ui'
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'
import * as DictionaryActions from '../actions/DictionaryActions'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import config from './../../resources/fonts/Food.json'

class ListDictionaryPage extends Component {
  render() {
    const {dictionaryData, navigation, theme} = this.props
    // const key = this.currentKey
    // this.currentKey = DailyMealsBusiness.getIdFromDate(new Date())
    const list = dictionaryData.data
    //const list = (dailyMealsData.dailyMealsHistory[key]) ? dailyMealsData.dailyMealsHistory[key] : []
    //const energy = (item) => (item.energyPct * item.quantity / item.unitAmount).toFixed(0)
    const listItemLeftElement = <Icon name='alarm'/>
    //const listItemRightElement = (item) => <Text>{energy(item)} kcal</Text>
    const listItem = (item, index) =>
      <ListItem divider dense 
        //onLongPress={() => dailyMealsActions.remove(key, index)}
        //onLongPress={() => dailyMealsActions.trigger(DailyMealsActions.REMOVE, key, index)}
        centerElement={{primaryText:item.name}}
        leftElement={item.category && <FoodCategoryIcon name={item.category.icon}/>}
        //rightElement={listItemRightElement(item)} 
      />
      const FoodCategoryIcon = createIconSetFromIcoMoon(config)
    return (
      <View style={{flex:1}}>
        <Toolbar centerElement={'Dictionary'}/>
        {list.length < 1 ? 
          <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
            <View style={{backgroundColor:'#cccccc', height:150, width:150, borderRadius:150, alignItems:'center', justifyContent:'center'}}>
              <Icon iconSet='FontAwesome' name='ellipsis-h' style={{marginTop:30, fontSize:100}}/>
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
        <ActionButton style={{container:{bottom:50, backgroundColor:theme.palette.primaryColor}}} 
        onPress={() => navigation.navigate('SEARCH_FOOD_PAGE')
        //this.props.dictionaryActions.trigger(DictionaryActions.ADD, {name:'test3'})
        }
        />
        <MainBottomNavigationBar navigation={navigation} index='2'/>
      </View>
    )
  }
}

export default connect(
  state => ({
    // dailyMealsData: state.dailyMealsReducer,
    dictionaryData: state.dictionaryReducer,
    //pageData: state.listDailyMealPageReducer,
  }),
  (dispatch) => ({
    // dailyMealsActions: bindActionCreators(DailyMealsActions, dispatch),
    // pageActions: bindActionCreators(ListDailyMealPageActions, dispatch),
    dictionaryActions: bindActionCreators(DictionaryActions, dispatch),
  })
)(withTheme(ListDictionaryPage))
