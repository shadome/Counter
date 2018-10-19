import {createStackNavigator} from 'react-navigation'

import DailyMealsPage from './pages/DailyMealsPage'
import RegisterFoodPage from './pages/RegisterFoodPage'
import ListDictionaryPage from './pages/ListDictionaryPage'

const AppNavigator = createStackNavigator({
    DAILY_MEALS_PAGE: DailyMealsPage,
    REGISTER_FOOD_PAGE: RegisterFoodPage,
    LIST_DICTIONARY_PAGE: ListDictionaryPage,
  }, {
    initialRouteName: 'DAILY_MEALS_PAGE',
    headerMode: 'none',
  })

export default AppNavigator
