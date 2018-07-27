const initialState = {
  list: [
    {index: 0, title:'Item 1', description:'First item description...'},
    {index: 1, title:'Item 2', description:'Second item description...'}
  ]
};

export default function reducers(state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_DAILY_MEAL':
      return {
        ...state,
        count: state.count + 1
      };
    case 'REM_DAILY_MEAL':
      return {
        ...state,
        count: state.count - 1
      };
    case 'ADD_FOOD':
      return {
        ...state
      };
    case 'REM_FOOD':
      return {
        ...state
      };
    case 'MOD_FOOD':
      return {
        ...state
      };
    default:
      return state;
  }
}