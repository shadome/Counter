'use strict'
import * as types from '../actions/DictionaryActions'
import {Alert} from 'react-native'

const initialState = {
  data:[],
}

export default function dictionaryReducer(state = initialState, action = {}) {
  const { payload } = action
  switch (action.type) {
    case types.ADD:
      return { ...state, data:[...(state.data), payload.item]}
    case types.REMOVE:
      return {...state, data:state.data.filter(x => x.name !== payload.name)}
    case types.RESET:
      Alert.alert('Dictionary reset', 'Technical: the dictionary has been reset.')
      return {...initialState}
    // default
    default: 
      return state
  }
}