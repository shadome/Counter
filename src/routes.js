import {StackNavigator} from 'react-navigation';

import ListDailyMealsPage from './pages/ListDailyMealsPage';
import AddDailyMealPage from './pages/AddDailyMealPage';

const AppNavigator = StackNavigator({
  list_daily_meals_page: ListDailyMealsPage,
  add_daily_meal_page: AddDailyMealPage
}, {
  initialRouteName: 'list_daily_meals_page',
  headerMode: 'none',
});

export default AppNavigator;
