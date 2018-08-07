'use strict';
import * as types from "../actions/AddDailyMealPageActions";

const initialState = {
  unit: 'g',
  unitAmount: 100,
  isSelectUnitVisible: false,
 };

export default function addDailyMealPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET: return {initialState};
    case types.INPUT_NAME: return {...state, name:action.x[0]};
    case types.SELECT_UNIT: return {...state, unit:action.x[0]};
    case types.SELECT_UNIT_VISIBLE_TOGGLE: {return {...state, isSelectUnitVisible:!state.isSelectUnitVisible}}
    case types.INPUT_QUANTITY: return {...state, quantity:action.x[0]};
    case types.INPUT_ENERGY_PCT: return {...state, energyPct:action.x[0]};
    case types.INPUT_FAT_PCT: return {...state, fatPct:action.x[0]};
    case types.INPUT_PROTEIN_PCT: return {...state, proteinPct:action.x[0]};
    case types.INPUT_ETHANOL_PCT: return {...state, ethanolPct:action.x[0]};
    case types.INPUT_CARBOHYDRATES_PCT: return {...state, carbohydratesPct:action.x[0]};
    case types.INPUT_SATURATED_FAT_PCT: return {...state, carbohydratesPct:action.x[0]};
    case types.INPUT_MONOUNSATURATED_FAT_PCT: return {...state, monounsaturatedFatPct:action.x[0]};
    case types.INPUT_POLYUNSATURATED_FAT_PCT: return {...state, polyunsaturatedFatPct:action.x[0]};
    default: return state;
  }
}