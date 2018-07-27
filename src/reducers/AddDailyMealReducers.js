//const initialState = {
//  dailyMealsHistory: {},
//  toto:"toto",
//};

//export default function listDailyMealsReducer(state = initialState, action = {}) {
//  switch (action.type) {
//  case 'ADD':
//    var _dailyMealsHistory = state.dailyMealsHistory;
//    _dailyMealsHistory[action.key] = [..._dailyMealsHistory[action.key], action.meal];
//    return {
//      ...state,
//      dailyMealsHistory: _dailyMealsHistory
//    };
//  case 'REM':
//    return {
//      ...state,
//      count: state.count - 1
//    };
//  //case 'ADD_FOOD':
//  //  return {
//  //    ...state
//  //  };
//  //case 'REM_FOOD':
//  //  return {
//  //    ...state
//  //  };
//  //case 'MOD_FOOD':
//  //  return {
//  //    ...state
//  //  };
//  default:
//    return state;
//  }
//}