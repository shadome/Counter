'use strict';
import * as types from "../actions/AddDailyMealPageActions";

const initialState = {
  unit: 'g',
  unitAmount: 100,
  isSelectUnitVisible: false,
  // isGeneralInformationVisible: true,
  // isMacronutrientsVisible: true,
  // isMicronutrientsVisible: true,
 };

export default function addDailyMealPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESET: return {initialState};
    case types.INPUT_NAME: return {...state, name:action.x[0]};
    case types.SELECT_UNIT: return {...state, unit:action.x[0]};
    case types.SELECT_UNIT_VISIBLE_TOGGLE: {return {...state, isSelectUnitVisible:!state.isSelectUnitVisible}}
    // case types.GENERAL_INFORMATION_CARD_VISIBLE_TOGGLE: {return {...state, isGeneralInformationVisible:!state.isGeneralInformationVisible}}
    // case types.MACRONUTRIENTS_CARD_VISIBLE_TOGGLE: {return {...state, isMacronutrientsVisible:!state.isMacronutrientsVisible}}
    // case types.MICRONUTRIENTS_CARD_VISIBLE_TOGGLE: {return {...state, isMicronutrientsVisible:!state.isMicronutrientsVisible}}
    case types.INPUT_QUANTITY: return {...state, quantity:action.x[0]};
    // macro
    case types.INPUT_ENERGY_PCT: return {...state, energyPct:action.x[0]};
    case types.INPUT_FAT_PCT: return {...state, fatPct:action.x[0]};
    case types.INPUT_PROTEIN_PCT: return {...state, proteinPct:action.x[0]};
    case types.INPUT_ETHANOL_PCT: return {...state, ethanolPct:action.x[0]};
    case types.INPUT_CARBOHYDRATES_PCT: return {...state, carbohydratesPct:action.x[0]};
    case types.INPUT_SATURATED_FAT_PCT: return {...state, carbohydratesPct:action.x[0]};
    case types.INPUT_MONOUNSATURATED_FAT_PCT: return {...state, monounsaturatedFatPct:action.x[0]};
    case types.INPUT_POLYUNSATURATED_FAT_PCT: return {...state, polyunsaturatedFatPct:action.x[0]};
    // vitamins
    case types.INPUT_K_PHYLLOQUINONE_MENAQUINONES_PCT: return {...state, vitaminKPct:action.x[0]}
    case types.INPUT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT: return {...state, vitaminEPct:action.x[0]}
    case types.INPUT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT: return {...state, vitaminDPct:action.x[0]}
    case types.INPUT_C_ASCORBIC_ACID_PCT: return {...state, vitaminCPct:action.x[0]}
    case types.INPUT_B12_CYANOCOBALAMIN_ETC_PCT: return {...state, vitaminB12Pct:action.x[0]}
    case types.INPUT_B9_FOLATES_PCT: return {...state, vitaminB9Pct:action.x[0]}
    case types.INPUT_B7_BIOTIN_PCT: return {...state, vitaminB7Pct:action.x[0]}
    case types.INPUT_B6_PYRIDOXINE_ETC_PCT: return {...state, vitaminB6Pct:action.x[0]}
    case types.INPUT_B5_PANTOTHENIC_ACID_PCT: return {...state, vitaminB5Pct:action.x[0]}
    case types.INPUT_B3_NIACIN_ETC_PCT: return {...state, vitaminB3Pct:action.x[0]}
    case types.INPUT_B2_RIBOFLAVIN_PCT: return {...state, vitaminB2Pct:action.x[0]}
    case types.INPUT_B1_THIAMINE_PCT: return {...state, vitaminB1Pct:action.x[0]}
    case types.INPUT_A_CAROTENOIDS_PCT: return {...state, vitaminAPct:action.x[0]}
      // minerals
    case types.INPUT_CO_COBALT_PCT: return {...state, mineralCoPct:action.x[0]}
    case types.INPUT_SE_SELENIUM_PCT: return {...state, mineralSePct:action.x[0]}
    case types.INPUT_MO_MOLYBDENUM_PCT: return {...state, mineralMoPct:action.x[0]}
    case types.INPUT_CR_CHROMIUM_PCT: return {...state, mineralCrPct:action.x[0]}
    case types.INPUT_I_IODINE_PCT: return {...state, mineralIPct:action.x[0]}
    case types.INPUT_CU_COPPER_PCT: return {...state, mineralCuPct:action.x[0]}
    case types.INPUT_MN_MANGANESE_PCT: return {...state, mineralMnPct:action.x[0]}
    case types.INPUT_ZN_ZINC_PCT: return {...state, mineralZnPct:action.x[0]}
    case types.INPUT_FE_IRON_PCT: return {...state, mineralFePct:action.x[0]}
    case types.INPUT_MG_MAGNESIUM_PCT: return {...state, mineralMgPct:action.x[0]}
    case types.INPUT_P_PHOSPHORUS_PCT: return {...state, mineralPPct:action.x[0]}
    case types.INPUT_CA_CALCIUM_PCT: return {...state, mineralCaPct:action.x[0]}
    case types.INPUT_NA_SODIUM_PCT: return {...state, mineralNaPct:action.x[0]}
    case types.INPUT_CL_CHLORINE_PCT: return {...state, mineralClPct:action.x[0]}
    case types.INPUT_K_POTASSIUM_PCT: return {...state, mineralKPct:action.x[0]}
    // default
    default: return state;
  }
}