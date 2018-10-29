import {createStackNavigator} from 'react-navigation'

import DailyMealsPage from './pages/DailyMealsPage'
import RegisterFoodPage from './pages/RegisterFoodPage'
import ListDictionaryPage from './pages/ListDictionaryPage'
import SearchFoodPage from './pages/SearchFoodPage'

const AppNavigator = createStackNavigator({
    DAILY_MEALS_PAGE: DailyMealsPage,
    REGISTER_FOOD_PAGE: RegisterFoodPage,
    LIST_DICTIONARY_PAGE: ListDictionaryPage,
    SEARCH_FOOD_PAGE: SearchFoodPage,
  }, {
    initialRouteName: 'DAILY_MEALS_PAGE',
    headerMode: 'none',
  })

export default AppNavigator
