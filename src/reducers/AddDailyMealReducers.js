import * as types from "../actions/AddDailyMealActions";
import { InitialState } from "./InitialState";

// const initialState = {
//   foodName:"toto",
// };

export default function addDailyMealReducers(state = InitialState, action = {}) {
  switch (action.type) {
    case types.INPUT_FOOD_NAME:
      return {
        ...state,
        foodName: action.name
      };
    case types.TEST2:
      return {
        ...state,
        toto: action.newtoto,
      };
    default:
      return state;
  }
}