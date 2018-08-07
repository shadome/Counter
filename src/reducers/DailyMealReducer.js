'use strict';
import * as types from "../actions/DailyMealActions";
import DailyMealBusiness from "../business/DailyMealBusiness";

const initialState = {
  dailyMealHistory: {}
  // toto:DailyMealBusiness.getIdFromDate(new Date()),
  // dailyMealHistory: {[DailyMealBusiness.getIdFromDate(new Date())]: [
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //     {name: 'Banana', quantity: 200, unit: 'g', energyPct: 77, unitAmount:100}, 
  //   ]},
};

export default function dailyMealReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD: // x[0]:key x[1]:meal_element
      state.dailyMealHistory[action.x[0]] = state.dailyMealHistory[action.x[0]] ? [...state.dailyMealHistory[action.x[0]].splice(0), action.x[1]] : [action.x[1]]
      return {
        ...state,
        dailyMealHistory: state.dailyMealHistory
      };
    case types.REMOVE: // x[0]:key x[1]:index
      state.dailyMealHistory[action.x[0]] = state.dailyMealHistory[action.x[0]].splice(0)
      state.dailyMealHistory[action.x[0]].splice(action.x[1], 1)
      return {
        ...state,
        dailyMealHistory: state.dailyMealHistory,
      }
    //case types.ADD:
    //  state.dailyMealHistory[action.key] = state.dailyMealHistory[action.key] ? [...state.dailyMealHistory[action.key], action.meal] : [action.meal]
    //  return {
    //    ...state,
    //    dailyMealHistory: state.dailyMealHistory
    //  };
    //case types.REMOVE:
    //  state.dailyMealHistory[action.key] = state.dailyMealHistory[action.key].splice(0)
    //  state.dailyMealHistory[action.key].splice(action.index, 1)
    //  return {
    //    ...state,
    //    dailyMealHistory: state.dailyMealHistory,
    //  }
    default:
      return state
  }
}