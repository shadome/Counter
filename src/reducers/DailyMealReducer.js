'use strict';
import * as types from "../actions/DailyMealActions";
import DailyMealBusiness from "../business/DailyMealBusiness";

const initialState = {
  dailyMealHistory: {},  
  // dailyMealHistory: {[DailyMealBusiness.getIdFromDate(new Date())]: [
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //   ]},
};

export default function dailyMealReducer(state = initialState, action = {}) {
  if (action.type === types.ADD) { // x[0]:key x[1]:meal_element
    let tmp = state.dailyMealHistory[action.x[0]] ? [...(state.dailyMealHistory[action.x[0]]), action.x[1]] : [action.x[1]]
    return {
      ...state,
      dailyMealHistory: {
        ...(state.dailyMealHistory), 
        [action.x[0]]: tmp,
      },
    }
  }
  if (action.type === types.REMOVE) { // x[0]:key x[1]:index
    let tmp = [...(state.dailyMealHistory[action.x[0]].slice(0, action.x[1])), ...(state.dailyMealHistory[action.x[0]].slice(1 + action.x[1]))]
    // state.dailyMealHistory[action.x[0]] = state.dailyMealHistory[action.x[0]].splice(0)
    // state.dailyMealHistory[action.x[0]].splice(action.x[1], 1)
    return {
      ...state,
      dailyMealHistory: {
        ...(state.dailyMealHistory), 
        [action.x[0]]: tmp,
      },
    }
  }
  return state;
}