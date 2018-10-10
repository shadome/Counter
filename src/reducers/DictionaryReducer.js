'use strict'
import * as actions from '../actions/DictionaryActions'
import {Alert} from 'react-native'

const initialState = {
  data:{},
}

export default function dictionaryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADD: 
    return {
      ...state, 
      data: {
        ...state.data,
        [action.x[0].id]: action.x[0]
      }
    }
    case actions.REMOVE: {
      let tmp = {...(state.data)}
      delete tmp[action.x[0].id || action.x[0]]
      return {...state, data:tmp}
    }
    // default
    default: return state
  }
}