'use strict'
import React, {Component} from 'react'
import {NativeModules, StatusBar, View, ScrollView, Text, FlatList} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, BottomNavigation, withTheme} from '../../../lib/react-native-material-ui'
import MainBottomNavigationBar from '../../fragments/MainBottomNavigationBarFragment'
import * as DictionaryActions from '../../actions/DictionaryActions'
import * as FoodEntriesServices from '../../services/FoodEntriesService'

class SearchFoodPage extends Component {
  constructor(props) {
    super(props)
    this.state = {list:[]}
  }
  onSearchChange = (value) => {
    this.setState({
      ...(this.state), 
      list:FoodEntriesServices.searchEntries(value)
    })
  }
  goBack = (id) => {
    this.props.navigation.state.params.setFoodId(id)
    this.props.navigation.goBack()
  }
  render() {
    const {navigation, } = this.props
    const listItem = (item, index) => 
      <ListItem divider dense 
        centerElement={{primaryText:item.name}} 
        onPress={() => this.goBack(item.id)}
      />
    return (
      <View style={{flex:1}}>
        <Toolbar 
          leftElement='arrow-back' 
          onLeftElementPress={navigation.goBack} 
          isSearchActive 
          searchable={{
            placeholder:'Enter a food name...', 
            onChangeText:(x) => this.onSearchChange(x)}}
        />
        <ScrollView style={{flex:1}}>
          <FlatList data={this.state.list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => listItem(item, index)}
            ListFooterElement={<ListItem divider dense/>}
          />
        </ScrollView>
      </View>
    )
  }
}

export default connect(
  state => ({
  }),
  (dispatch) => ({
  })
)(withTheme(SearchFoodPage))
