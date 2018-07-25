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

class DailyFoodTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data_sample = [
      {
        id: '0',
        name: 'Banana',
        quantity: 200,
        unit: 'g',
        energy: 77
      }, {
        id: '1',
        name: 'Banana',
        quantity: 200,
        unit: 'g',
        energy: 77
      }, {
        id: '2',
        name: 'Banana',
        quantity: 200,
        unit: 'g',
        energy: 77
      }
    ];
    return (
      <View style={{flex: 1}}>
        <Toolbar centerElement={('Daily meals')}/>
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
        <ActionButton onPress={() => this.props.navigation.navigate('add_food')}/>
      </View>
    );
  }
}

export default DailyFoodTable;
