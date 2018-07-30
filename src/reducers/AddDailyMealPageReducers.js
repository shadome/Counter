import * as types from "../actions/AddDailyMealPageActions";

 const initialState = {
   foodName:"toto",
 };

export default function addDailyMealPageReducers(state = initialState, action = {}) {
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