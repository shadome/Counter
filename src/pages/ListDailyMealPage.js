'use strict';
import React, {Component} from 'react';
import {NativeModules, StatusBar, View, ScrollView, Text, FlatList} from 'react-native';
import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, withTheme} from '../components/react-native-material-ui';
import {bindActionCreators} from 'redux';
import * as DailyMealActions from '../actions/DailyMealActions';
import DailyMealBusiness from '../business/DailyMealBusiness';
import {connect} from 'react-redux';

class ListDailyMealPage extends Component {
  constructor(props) {
    super(props);
    this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
  }
  render() {
    const {dailyMealData, dailyMealActions, navigation, theme,} = this.props;
    const key = this.currentKey;
    this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
    const list = dailyMealData.dailyMealHistory[key];
    let energy = (item) => (item.energyPct * item.quantity / item.unitAmount).toFixed(0);
    let listItemLeftElement = <Icon name='alarm'/>;
    let listItemRightElement = (item) => <Text>{energy(item)} kcal</Text>;
    let listItem = (item, index) =>
    <ListItem divider dense 
      onLongPress={() => dailyMealActions.remove(key, index)}
      centerElement={{primaryText:item.name, secondaryText:item.quantity + item.unit,}}
      leftElement={listItemLeftElement} rightElement={listItemRightElement(item)} 
    />;
    return (
      <View style={{flex:1}}>
        <Toolbar centerElement={'Daily meals [' + list.reduce((x, y) => x + parseInt(energy(y)), 0) + ']'}/>
        <ScrollView style={{flex:1}}>
          <FlatList
            data={list}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item, index}) => listItem(item, index)}
          />
        </ScrollView>
        <ActionButton onPress={() => navigation.navigate('add_daily_meal_page')}/>
      </View>
    );
  }
}

export default connect(
  state => ({
    dailyMealData: state.dailyMealReducers
    //pageData: state.listDailyMealPageReducers,
  }),
  (dispatch) => ({
    dailyMealActions: bindActionCreators(DailyMealActions, dispatch),
    // pageActions: bindActionCreators(ListDailyMealPageActions, dispatch),
  })
)(withTheme(ListDailyMealPage));
