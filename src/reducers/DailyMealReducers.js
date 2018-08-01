'use strict';
import * as types from "../actions/DailyMealActions";
import DailyMealBusiness from "../business/DailyMealBusiness";

const initialState = {
  dailyMealHistory: {
    [DailyMealBusiness.getIdFromDate(new Date())]: [
      {name: 'Banana', quantity: 200, unit: 'g', energy: 77}, 
      {name: 'Banana', quantity: 200, unit: 'g', energy: 77}, 
      {name: 'Banana', quantity: 200, unit: 'g', energy: 77}
    ]},
};

export default function dailyMealReducers(state = initialState, action = {}) {
  const _dailyMealHistory = state.dailyMealHistory;
  switch (action.type) {
    case types.ADD:
      _dailyMealHistory[action.key] = [..._dailyMealHistory[action.key], action.meal];
      return {
        ...state,
        dailyMealHistory: _dailyMealHistory
      };
    case types.REM:
      _dailyMealHistory[action.key] = dailyMealHistory[action.key].splice(action.index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}