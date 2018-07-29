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
import * as ListDailyMealsActions from "../actions/ListDailyMealsActions";
import ListDailyMealsBusiness from "../business/ListDailyMealsBusiness";
import { connect } from "react-redux";

class ListDailyMealsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, actions } = this.props;
    const data_sample = data.dailyMealsHistory[ListDailyMealsBusiness.getIdFromDate(new Date())];
    return (
      <View style={{flex: 1}}>
        <Toolbar centerElement={('Daily meals')}/>
        <Text>{data.toto}</Text>
        <Text>{ListDailyMealsBusiness.getIdFromDate(new Date())}</Text>
        <Button onPress={() => actions.toto(data.toto + "to")} text="Change toto"/>
        <ScrollView style={{flex: 1}}>
          <FlatList
            data={data_sample}
            keyExtractor={(item,index) => item.id}
            renderItem={({item,index}) => 
              <ListItem 
                divider  
                dense
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
    data: state.listDailyMealsReducers
  }),
  (dispatch) => ({
    actions: bindActionCreators(ListDailyMealsActions, dispatch)
  })
)(ListDailyMealsPage);
