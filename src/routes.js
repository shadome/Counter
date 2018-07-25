import {StackNavigator} from 'react-navigation';

import DailyFoodTable from './pages/DailyFoodTable';
import AddFood from './pages/AddFood';

const AppNavigator = StackNavigator({
  daily_food_table: DailyFoodTable,
  add_food: AddFood
}, {
  initialRouteName: 'daily_food_table',
  headerMode: 'none',
});

export default AppNavigator;
