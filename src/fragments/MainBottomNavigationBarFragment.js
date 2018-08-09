'use strict';
import React, {Component} from 'react';
//import {} from 'react-native';
import {Icon, BottomNavigation, withTheme} from '../components/react-native-material-ui';

class MainBottomNavigationBarFragment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation, index,} = this.props;
    return (
      <BottomNavigation 
        active={index}
        style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
      >
        <BottomNavigation.Action key='0' label="Today" 
          onPress={index !== {'0'} && () => navigation.navigate('list_daily_meal_page')}
          icon={index !== {'0'} ? 'event_available' : <Icon name='event_available' />}
        />
        <BottomNavigation.Action key='1' label="Add food" 
          onPress={index !== {'1'} && () => navigation.navigate('add_daily_meal_page')}
          icon={index !== {'1'} ? 'create' : <Icon name='create'/>}
        />
        <BottomNavigation.Action} key='2' label="Calendar"
          icon={index !== {'2'} ? 'event-note' : <Icon name='event-note'/>}
          onPress={}
        />
      </BottomNavigation>
    );
  }
}

export default withTheme(MainBottomNavigationBarFragment);
