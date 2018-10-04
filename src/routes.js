import {createStackNavigator} from 'react-navigation'

import DailyMealsPage from './pages/DailyMealsPage'
import RegisterFoodPage from './pages/RegisterFoodPage'

const AppNavigator = createStackNavigator({
    DAILY_MEALS_PAGE: DailyMealsPage,
    REGISTER_FOOD_PAGE: RegisterFoodPage,
  }, {
    initialRouteName: 'DAILY_MEALS_PAGE',
    headerMode: 'none',
  })

export default AppNavigator
