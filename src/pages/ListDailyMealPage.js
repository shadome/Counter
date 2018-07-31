import React, { Component } from 'react';
import {
  NativeModules, 
  StatusBar,
  View, 
  ScrollView, 
  Text, 
  FlatList
} from 'react-native';
import {
  COLOR,
  ThemeProvider,
  ListItem,
  Checkbox,
  Button,
  Toolbar,
  Icon,
  ActionButton
} from '../components/react-native-material-ui';
import { bindActionCreators } from 'redux';
import * as DailyMealActions from "../actions/DailyMealActions";
import DailyMealBusiness from "../business/DailyMealBusiness";
import { connect } from "react-redux";

class ListDailyMealPage extends Component {
  constructor(props) {
    super(props);
    this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
  }
  render() {
    const { dailyMealData, dailyMealActions } = this.props;
    const key = this.currentKey;
    this.currentKey = DailyMealBusiness.getIdFromDate(new Date());
    const data_sample = dailyMealData.dailyMealHistory[this.key];
    return (
      <View style={{flex: 1}}>
        <Toolbar centerElement={('Daily meals')}/>
        <Text>{this.key}</Text>
        <ScrollView style={{flex: 1}}>
          <FlatList
            data={data_sample}
            keyExtractor={(item,index) => item.id}
            renderItem={({item,index}) => 
              <ListItem 
                divider  
                dense
                onLongClick={dailyMealActions.remove(this.key, index)}
                centerElement={{
                  primaryText:item.name,
                  secondaryText:item.quantity + item.unit,
                }}
                leftElement={<Icon name='alarm'/>}//donut-large
                rightElement={<Text>{item.energy * 200 / 100}kcal</Text>}
              />}
          />
        </ScrollView>
        <ActionButton onPress={() => this.props.navigation.navigate('add_daily_meal_page')}/>
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
)(ListDailyMealPage);
