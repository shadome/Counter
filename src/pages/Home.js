'use strict';
import React, {Component} from 'react';
import {NativeModules, StatusBar, View} from 'react-native';
import {COLOR, ThemeContext, getTheme} from '../components/react-native-material-ui';
import MainTabNavigator from '../routes';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const iconSet = 'MaterialIcons';
const palette = {
  primaryColor: COLOR.red500,
  accentColor: COLOR.blue500,
};

class Home extends Component {
  render() {
    return (
      <ThemeContext.Provider value={getTheme({iconSet, palette})}>
        <Provider store={store}>
          <MainTabNavigator ref={(nav) => {this.navigator = nav;}} />
        </Provider>
      </ThemeContext.Provider>
    );
  }
}

export default Home;