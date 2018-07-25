import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

import Home from './pages/Home';

export default function index() {
  class Root extends Component {
    render() {
      return (<Home/>);
    }
  }

  AppRegistry.registerComponent('Counter', () => Root);
}
