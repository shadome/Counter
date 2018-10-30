import {createStackNavigator} from 'react-navigation'

import * as Pages from './pages'

const AppNavigator = createStackNavigator({
    DAILY_MEALS_PAGE: Pages.DailyMealsPage,
    REGISTER_FOOD_PAGE: Pages.RegisterFoodPage,
    LIST_DICTIONARY_PAGE: Pages.ListDictionaryPage,
    SEARCH_FOOD_PAGE: Pages.SearchFoodPage,
  }, {
    initialRouteName: 'DAILY_MEALS_PAGE',
    headerMode: 'none',
  })

export default AppNavigator
