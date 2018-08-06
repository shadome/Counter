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
    case types.ADD:
      state.dailyMealHistory[action.key] = state.dailyMealHistory[action.key] ? [...state.dailyMealHistory[action.key], action.meal] : [action.meal]
      return {
        ...state,
        dailyMealHistory: state.dailyMealHistory
      };
    case types.REMOVE:
      state.dailyMealHistory[action.key] = state.dailyMealHistory[action.key].splice(0)
      state.dailyMealHistory[action.key].splice(action.index, 1)
      return {
        ...state,
        dailyMealHistory: state.dailyMealHistory,
      }
    default:
      return state
  }
}