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

class ListDailyMealsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state, actions } = this.props;
    const data_sample = state.dailyMealsHistory[ListDailyMealsBusiness.getIdFromDate(new Date())];
    //[
    //  {
    //    id: '0',
    //    name: 'Banana',
    //    quantity: 200,
    //    unit: 'g',
    //    energy: 77
    //  }, {
    //    id: '1',
    //    name: 'Banana',
    //    quantity: 200,
    //    unit: 'g',
    //    energy: 77
    //  }, {
    //    id: '2',
    //    name: 'Banana',
    //    quantity: 200,
    //    unit: 'g',
    //    energy: 77
    //  }
    //];
    return (
      <View style={{flex: 1}}>
        <Toolbar centerElement={('Daily meals')}/>
        <Text>{state.toto}</Text>
        <Button onPress={() => actions.toto(state.toto + "to")}>Change toto</Button>
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
    state: state.listDailyMealsReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(ListDailyMealsActions, dispatch)
  })
)(ListDailyMealsPage);
