'use strict'
import React, { Component } from 'react'
import { Icon, BottomNavigation, withTheme } from '../../lib/react-native-material-ui'

class MainBottomNavigationBarFragment extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {navigation, index} = this.props
    return (
      <BottomNavigation 
        active={index} 
        style={{ container: { bottom: 0} }}
      >
        <BottomNavigation.Action key='0' label='Today' 
          onPress={index !== '0' ? () => navigation.navigate('DAILY_MEALS_PAGE') : undefined}
          icon='event-available'
        />
        {/* <BottomNavigation.Action key='1' label='Register food' 
          onPress={index !== '1' ? () => navigation.navigate('REGISTER_FOOD_PAGE') : undefined}
          icon='create'
        /> */}
        <BottomNavigation.Action key='1' label='Dictionary' 
          onPress={index !== '2' ? () => navigation.navigate('LIST_DICTIONARY_PAGE') : undefined}
          iconSet='FontAwesome' icon='book'
        />
        <BottomNavigation.Action key='2' label='Calendar'
          onPress={() => null}
          icon='event-note'
        />
      </BottomNavigation>
    );
  }
}

export default withTheme(MainBottomNavigationBarFragment)
