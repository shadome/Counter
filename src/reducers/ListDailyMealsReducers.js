import * as types from "../actions/ListDailyMealsActions";
import ListDailyMealsBusiness from "../business/ListDailyMealsBusiness";
import { InitialState } from "./InitialState";
// const initialState = {
//   dailyMealsHistory: {
//     [ListDailyMealsBusiness.getIdFromDate(new Date())]:
//     [
//       {
//         id: '0',
//         name: 'Banana',
//         quantity: 200,
//         unit: 'g',
//         energy: 77
//       }, {
//         id: '1',
//         name: 'Banana',
//         quantity: 200,
//         unit: 'g',
//         energy: 77
//       }, {
//         id: '2',
//         name: 'Banana',
//         quantity: 200,
//         unit: 'g',
//         energy: 77
//       }
//     ]
//   },
//   toto:"toto",
// };

export default function listDailyMealsReducers(state = InitialState, action = {}) {
  switch (action.type) {
    case types.ADD:
      var _dailyMealsHistory = state.dailyMealsHistory;
      _dailyMealsHistory[action.key] = [..._dailyMealsHistory[action.key], action.meal];
      return {
        ...state,
        dailyMealsHistory: _dailyMealsHistory
      };
    case types.REM:
      return {
        ...state,
        //count: state.count - 1
      };
    case types.TOTO:
      return {
        ...state,
        toto: action.str
      }
    default:
      return state;
  }
}