'use strict'
import * as types from '../actions/RegisterFoodActions'
import {Alert} from 'react-native'
const initialState = {
  unit: 'g',
  unitAmount: 100,
  // isSelectUnitVisible: false,
  // isGeneralInformationVisible: true,
  // isMacronutrientsVisible: true,
  // isMicronutrientsVisible: true,
 }

export default function registerFoodReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET: return {initialState}
    case types.INPUT_NAME: return {...state, name:action.x[0]}
    // case types.SELECT_UNIT: return {...state, unit:action.x[0]}
    // case types.SELECT_UNIT_VISIBLE_TOGGLE: return {...state, isSelectUnitVisible:!state.isSelectUnitVisible}
    case types.CALCULATE_ENERGY_PCT: {
      let total = 0
      if (state.fatPct !== undefined)
        total += 9 * state.fatPct // 8.8 : wikipedia
      if (state.carbohydratesPct !== undefined)
        total += 4 * state.carbohydratesPct // 3.87 : wikipedia
      if (state.proteinPct !== undefined)
        total += 4 * state.proteinPct
      if (state.ethanolPct !== undefined)
        total += 7 * state.ethanolPct
      return {...state, energyPct:total.toString()}
    }
    // case types.GENERAL_INFORMATION_CARD_VISIBLE_TOGGLE: {return {...state, isGeneralInformationVisible:!state.isGeneralInformationVisible}}
    // case types.MACRONUTRIENTS_CARD_VISIBLE_TOGGLE: {return {...state, isMacronutrientsVisible:!state.isMacronutrientsVisible}}
    // case types.MICRONUTRIENTS_CARD_VISIBLE_TOGGLE: {return {...state, isMicronutrientsVisible:!state.isMicronutrientsVisible}}
    // case types.INPUT_QUANTITY: return {...state, quantity:action.x[0]}
    // macro
    case types.INPUT_ENERGY_PCT: return {...state, energyPct:action.x[0]}
    case types.INPUT_FAT_PCT: return {...state, fatPct:action.x[0]}
    case types.INPUT_PROTEIN_PCT: return {...state, proteinPct:action.x[0]}
    case types.INPUT_ETHANOL_PCT: return {...state, ethanolPct:action.x[0]}
    case types.INPUT_CARBOHYDRATES_PCT: return {...state, carbohydratesPct:action.x[0]}
    case types.INPUT_SATURATED_FAT_PCT: return {...state, carbohydratesPct:action.x[0]}
    case types.INPUT_N9_FAT_PCT: return {...state, n9FatPct:action.x[0]}
    case types.INPUT_N6_FAT_PCT: return {...state, n6FatPct:action.x[0]}
    case types.INPUT_N3_FAT_PCT: return {...state, n3FatPct:action.x[0]}
    // vitamins
    case types.INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT: return {...state, vitaminKPct:action.x[0]}
    case types.INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT: return {...state, vitaminEPct:action.x[0]}
    case types.INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT: return {...state, vitaminDPct:action.x[0]}
    case types.INPUT_VIT_C_ASCORBIC_ACID_PCT: return {...state, vitaminCPct:action.x[0]}
    case types.INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT: return {...state, vitaminB12Pct:action.x[0]}
    case types.INPUT_VIT_B9_FOLATES_PCT: return {...state, vitaminB9Pct:action.x[0]}
    case types.INPUT_VIT_B7_BIOTIN_PCT: return {...state, vitaminB7Pct:action.x[0]}
    case types.INPUT_VIT_B6_PYRIDOXINE_ETC_PCT: return {...state, vitaminB6Pct:action.x[0]}
    case types.INPUT_VIT_B5_PANTOTHENIC_ACID_PCT: return {...state, vitaminB5Pct:action.x[0]}
    case types.INPUT_VIT_B3_NIACIN_ETC_PCT: return {...state, vitaminB3Pct:action.x[0]}
    case types.INPUT_VIT_B2_RIBOFLAVIN_PCT: return {...state, vitaminB2Pct:action.x[0]}
    case types.INPUT_VIT_B1_THIAMINE_PCT: return {...state, vitaminB1Pct:action.x[0]}
    case types.INPUT_VIT_A_CAROTENOIDS_PCT: return {...state, vitaminAPct:action.x[0]}
    case types.INPUT_VIT_CHOLINE_PCT: return {...state, vitaminCholinePct:action.x[0]}
      // minerals
    case types.INPUT_MIN_CO_COBALT_PCT: return {...state, mineralCoPct:action.x[0]}
    case types.INPUT_MIN_SE_SELENIUM_PCT: return {...state, mineralSePct:action.x[0]}
    case types.INPUT_MIN_MO_MOLYBDENUM_PCT: return {...state, mineralMoPct:action.x[0]}
    case types.INPUT_MIN_CR_CHROMIUM_PCT: return {...state, mineralCrPct:action.x[0]}
    case types.INPUT_MIN_I_IODINE_PCT: return {...state, mineralIPct:action.x[0]}
    case types.INPUT_MIN_CU_COPPER_PCT: return {...state, mineralCuPct:action.x[0]}
    case types.INPUT_MIN_MN_MANGANESE_PCT: return {...state, mineralMnPct:action.x[0]}
    case types.INPUT_MIN_ZN_ZINC_PCT: return {...state, mineralZnPct:action.x[0]}
    case types.INPUT_MIN_FE_IRON_PCT: return {...state, mineralFePct:action.x[0]}
    case types.INPUT_MIN_MG_MAGNESIUM_PCT: return {...state, mineralMgPct:action.x[0]}
    case types.INPUT_MIN_P_PHOSPHORUS_PCT: return {...state, mineralPPct:action.x[0]}
    case types.INPUT_MIN_CA_CALCIUM_PCT: return {...state, mineralCaPct:action.x[0]}
    case types.INPUT_MIN_NA_SODIUM_PCT: return {...state, mineralNaPct:action.x[0]}
    case types.INPUT_MIN_CL_CHLORINE_PCT: return {...state, mineralClPct:action.x[0]}
    case types.INPUT_MIN_K_POTASSIUM_PCT: return {...state, mineralKPct:action.x[0]}
    // default
    default: return state
  }
}