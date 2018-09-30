'use strict';
import React, {Component} from 'react';
//import {} from 'react-native';
import {Icon, BottomNavigation, withTheme} from '../components/react-native-material-ui';

class MainBottomNavigationBarFragment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, index} = this.props;
    return (
      <BottomNavigation 
        active={index} 
        style={{ container: { bottom: 0} }}
      >
        <BottomNavigation.Action key='0' label='Today' 
          onPress={index !== '0' ? () => navigation.navigate('list_daily_meal_page') : undefined}
          icon='event-available'
        />
        <BottomNavigation.Action key='1' label='Add food' 
          onPress={index !== '1' ? () => navigation.navigate('add_daily_meal_page') : undefined}
          icon='create'
        />
        <BottomNavigation.Action key='2' label='Calendar'
          onPress={() => null}
          icon='event-note'
        />
      </BottomNavigation>
    );
  }
}

export default withTheme(MainBottomNavigationBarFragment);
