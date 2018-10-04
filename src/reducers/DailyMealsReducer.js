'use strict'
import * as types from '../actions/DailyMealsActions'
import DailyMealsBusiness from '../business/DailyMealsBusiness'

const initialState = {
  dailyMealsHistory: {},  
  // dailyMealsHistory: {[DailyMealBusiness.getIdFromDate(new Date())]: [
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //   ]},
}

export default function dailyMealsReducer(state = initialState, action = {}) {
  if (action.type === types.ADD) { // x[0]:key x[1]:meal_element
    let tmp = state.dailyMealsHistory[action.x[0]] ? [...(state.dailyMealsHistory[action.x[0]]), action.x[1]] : [action.x[1]]
    return {
      ...state,
      dailyMealsHistory: {
        ...(state.dailyMealsHistory), 
        [action.x[0]]: tmp,
      },
    }
  }
  if (action.type === types.REMOVE) { // x[0]:key x[1]:index
    let tmp = [...(state.dailyMealsHistory[action.x[0]].slice(0, action.x[1])), ...(state.dailyMealsHistory[action.x[0]].slice(1 + action.x[1]))]
    // state.dailyMealsHistory[action.x[0]] = state.dailyMealsHistory[action.x[0]].splice(0)
    // state.dailyMealsHistory[action.x[0]].splice(action.x[1], 1)
    return {
      ...state,
      dailyMealsHistory: {
        ...(state.dailyMealsHistory), 
        [action.x[0]]: tmp,
      },
    }
  }
  return state
}