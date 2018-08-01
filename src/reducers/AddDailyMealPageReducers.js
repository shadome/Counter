'use strict';
import * as types from "../actions/AddDailyMealPageActions";

const initialState = {
  unit: 'g',
  unitAmount: 100,
 };

export default function addDailyMealPageReducers(state = initialState, action = {}) {
  switch (action.type) {
    case types.INPUT_NAME: return {...state, name:action.name};
    case types.SELECT_UNIT: return {...state, unit:action.unit};
    case types.INPUT_QUANTITY: return {...state, quantity:action.quantity};
    case types.INPUT_ENERGY_PCT: return {...state, energyPct:action.energyPct};
    case types.INPUT_FAT_PCT: return {...state, fatPct:action.fatPct};
    case types.INPUT_CARBOS_PCT: return {...state, carbosPct:action.carbosPct};
    case types.INPUT_PROTEIN_PCT: return {...state, proteinPct:action.proteinPct};
    case types.INPUT_ALCOHOL_PCT: return {...state, alcoholPct:action.alcoholPct};
    default: return state;
  }
}