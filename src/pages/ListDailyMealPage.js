'use strict';
import React, {Component} from 'react';
import {NativeModules, StatusBar, View, ScrollView, Text, FlatList} from 'react-native';
import {COLOR, ThemeProvider, ListItem, Checkbox, Button, Toolbar, Icon, ActionButton, BottomNavigation, withTheme} from '../components/react-native-material-ui';
import {bindActionCreators} from 'redux';
import * as DailyMealActions from '../actions/DailyMealActions';
import DailyMealBusiness from '../business/DailyMealBusiness';
import {connect} from 'react-redux';
import MainBottomNavigationBar from '../fragments/MainBottomNavigationBarFragment'

class ListDailyMealPage extends Component {
  constructor(props) {
    super(props);
    this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
  }
  //https://github.com/wix/react-native-calendars
  render() {
    const {dailyMealData, dailyMealActions, navigation, theme,} = this.props;
    const key = this.currentKey;
    this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
    const list = (dailyMealData.dailyMealHistory[key]) ? dailyMealData.dailyMealHistory[key] : [];
    const energy = (item) => (item.energyPct * item.quantity / item.unitAmount).toFixed(0);
    const listItemLeftElement = <Icon name='alarm'/>;
    const listItemRightElement = (item) => <Text>{energy(item)} kcal</Text>;
    const listItem = (item, index) =>
      <ListItem divider dense 
        //onLongPress={() => dailyMealActions.remove(key, index)}
        onLongPress={() => dailyMealActions.trigger(dailyMealActions.REMOVE, key, index)}
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
            ListFooterElement={<ListItem divider dense/>}
          />
        </ScrollView>
        <ActionButton onPress={() => navigation.navigate('add_daily_meal_page')}/>
        <MainBottomNavigationBar index={'0'} />
        //<BottomNavigation 
        //  active={'0'}
        //  style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
        //>
        //  <BottomNavigation.Action key='0' label="Today" onPress={}
        //    icon={<Icon name="event_available" />}
        //  />
        //  <BottomNavigation.Action key='1' label="Add food" icon="create"
        //    onPress={() => navigation.navigate('add_daily_meal_page')}
        //  />
        //  <BottomNavigation.Action key='2' icon="event_note" label="Calendar"
        //    onPress={}
        //  />
        //  //<BottomNavigation.Action
        //  //  key="settings"
        //  //  icon="settings"
        //  //  label="Settings"
        //  //  onPress={}
        //  ///>
        //</BottomNavigation>
      </}View>
    );
  }
}

export default connect(
  state => ({
    dailyMealData: state.dailyMealReducer
    //pageData: state.listDailyMealPageReducer,
  }),
  (dispatch) => ({
    dailyMealActions: bindActionCreators(DailyMealActions, dispatch),
    // pageActions: bindActionCreators(ListDailyMealPageActions, dispatch),
  })
)(withTheme(ListDailyMealPage));
