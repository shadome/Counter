'use strict'
import React, {Component} from 'react'
import {NativeModules, StatusBar, View} from 'react-native'
import {COLOR, ThemeContext, getTheme,} from '../../lib/react-native-material-ui'
import MainTabNavigator from '../routes'
import {createStore, applyMiddleware, combineReducers,} from 'redux'
import {Provider,} from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'
import { persistStore, persistReducer, autoRehydrate, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const iconSet = 'MaterialIcons'
const palette = {
  primaryColor: COLOR.red500,
  accentColor: COLOR.blue500,
}
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
}
const pReducer = persistReducer(persistConfig, reducer)
const store = createStoreWithMiddleware(pReducer) 
// const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store)

class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme({iconSet, palette})}>
          <MainTabNavigator ref={(nav) => {this.navigator = nav}} />
        </ThemeContext.Provider>
      </Provider>
    )
  }
}

export default Home