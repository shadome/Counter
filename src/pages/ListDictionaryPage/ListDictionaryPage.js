'use strict'
import React, {Component} from 'react'
import {NativeModules, StatusBar, View, ScrollView, Text, FlatList} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, BottomNavigation, withTheme} from '../../../lib/react-native-material-ui'
import MainBottomNavigationBar from '../../fragments/MainBottomNavigationBarFragment'
import * as DictionaryActions from '../../actions/DictionaryActions'
import FoodCategoryIconFont from '../../../resources/fonts/Food.json'

class ListDictionaryPage extends Component {
  render() {
    const {dictionaryData, dictionaryActions, navigation, theme} = this.props
    const FoodCategoryIcon = createIconSetFromIcoMoon(FoodCategoryIconFont)
    const list = dictionaryData.data
    const listItem = (item, index) =>
      <ListItem divider 
        onLongPress={() => dictionaryActions.remove(item.name)}
        centerElement={{primaryText:item.name}}
        leftElement={item.category && <FoodCategoryIcon name={item.category.icon}/>}
      />
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
            <FlatList 
              data={list}
              keyExtractor={(item,index) => index.toString()}
              renderItem={({item, index}) => listItem(item, index)}
              ListFooterElement={<ListItem divider dense/>}
            />
            </ScrollView>
        }
        <ActionButton style={{container:{bottom:50, backgroundColor:theme.palette.primaryColor}}} 
          onPress={() => navigation.navigate('SEARCH_FOOD_PAGE')}
        />
        <MainBottomNavigationBar navigation={navigation} index='2'/>
      </View>
    )
  }
}

export default connect(
  state => ({
    dictionaryData: state.dictionaryReducer,
  }),
  (dispatch) => ({
    dictionaryActions: bindActionCreators(DictionaryActions, dispatch),
  })
)(withTheme(ListDictionaryPage))
