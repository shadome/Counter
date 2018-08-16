import {createStackNavigator} from 'react-navigation'

import ListDailyMealPage from './pages/ListDailyMealPage'
import AddDailyMealPage from './pages/AddDailyMealPage'

const AppNavigator = createStackNavigator({
    list_daily_meal_page: ListDailyMealPage,
    add_daily_meal_page: AddDailyMealPage,
  }, {
    initialRouteName: 'list_daily_meal_page',
    headerMode: 'none',
  })

export default AppNavigator
