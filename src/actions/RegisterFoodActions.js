'use strict'

export function trigger(type, ...x) { 
  return {type, x}
}

const prefix = 'ADD_DAILY_MEAL_PAGE'

export const RESET = `${prefix}/RESET`
export const INPUT_NAME = `${prefix}/INPUT_NAME`
export const CALCULATE_ENERGY_PCT = `${prefix}/CALCULATE_ENERGY_PCT`
export const SELECT_UNIT_VISIBLE_TOGGLE = `${prefix}/SELECT_UNIT_VISIBLE_TOGGLE`
// export const GENERAL_INFORMATION_CARD_VISIBLE_TOGGLE = `${prefix}/GENERAL_INFORMATION_CARD_VISIBLE_TOGGLE`
// export const MACRONUTRIENTS_CARD_VISIBLE_TOGGLE = `${prefix}/MACRONUTRIENTS_CARD_VISIBLE_TOGGLE`
// export const MICRONUTRIENTS_CARD_VISIBLE_TOGGLE = `${prefix}/MICRONUTRIENTS_CARD_VISIBLE_TOGGLE`
export const SELECT_UNIT = `${prefix}/SELECT_UNIT`
export const INPUT_QUANTITY = `${prefix}/INPUT_QUANTITY`
// macro: sucres fibres amidon polyols cendres cholestérol AGsatures AGpolyinsaturés(n9) AGmonoinsaturés(n6n3)
export const INPUT_ENERGY_PCT = `${prefix}/INPUT_ENERGY_PCT`
export const INPUT_FAT_PCT = `${prefix}/INPUT_FAT_PCT`
export const INPUT_CARBOHYDRATES_PCT = `${prefix}/INPUT_CARBOHYDRATES_PCT`
export const INPUT_PROTEIN_PCT = `${prefix}/INPUT_PROTEIN_PCT`
export const INPUT_ETHANOL_PCT = `${prefix}/INPUT_ETHANOL_PCT`
export const INPUT_SATURATED_FAT_PCT = `${prefix}/INPUT_SATURATED_FAT_PCT`
export const INPUT_N9_FAT_PCT = `${prefix}/INPUT_N9_FAT_PCT`
export const INPUT_N6_FAT_PCT = `${prefix}/INPUT_N6_FAT_PCT`
export const INPUT_N3_FAT_PCT = `${prefix}/INPUT_N3_FAT_PCT`
// vitamins: rétinol beta-carotene D E K1 K2 C B1(thiamine) B2(riboflavine) B3(PP,niacine) B5(acide_panthothénique) B6 +B7(biotin) B9(folates) B12
export const INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT = `${prefix}/INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT`
export const INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT = `${prefix}/INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT`
export const INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT = `${prefix}/INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT`
export const INPUT_VIT_C_ASCORBIC_ACID_PCT = `${prefix}/INPUT_VIT_C_ASCORBIC_ACID_PCT`
export const INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT = `${prefix}/INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT`
export const INPUT_VIT_B9_FOLATES_PCT = `${prefix}/INPUT_VIT_B9_FOLATES_PCT`
export const INPUT_VIT_B7_BIOTIN_PCT = `${prefix}/INPUT_VIT_B7_BIOTIN_PCT`
export const INPUT_VIT_B6_PYRIDOXINE_ETC_PCT = `${prefix}/INPUT_VIT_B6_PYRIDOXINE_ETC_PCT`
export const INPUT_VIT_B5_PANTOTHENIC_ACID_PCT = `${prefix}/INPUT_VIT_B5_PANTOTHENIC_ACID_PCT`
export const INPUT_VIT_B3_NIACIN_ETC_PCT = `${prefix}/INPUT_VIT_B3_NIACIN_ETC_PCT`
export const INPUT_VIT_B2_RIBOFLAVIN_PCT = `${prefix}/INPUT_VIT_B2_RIBOFLAVIN_PCT`
export const INPUT_VIT_B1_THIAMINE_PCT = `${prefix}/INPUT_VIT_B1_THIAMINE_PCT`
export const INPUT_VIT_A_CAROTENOIDS_PCT = `${prefix}/INPUT_VIT_A_CAROTENOIDS_PCT`
// minerals: sel calcium cuivre fer iode magnésium manganèse phosphore potassium sélénium sodium zinc +fluoride
export const INPUT_MIN_CO_COBALT_PCT = `${prefix}/INPUT_MIN_CO_COBALT_PCT`
export const INPUT_MIN_SE_SELENIUM_PCT = `${prefix}/INPUT_MIN_SE_SELENIUM_PCT`
export const INPUT_MIN_MO_MOLYBDENUM_PCT = `${prefix}/INPUT_MIN_MO_MOLYBDENUM_PCT`
export const INPUT_MIN_CR_CHROMIUM_PCT = `${prefix}/INPUT_MIN_CR_CHROMIUM_PCT`
export const INPUT_MIN_I_IODINE_PCT = `${prefix}/INPUT_MIN_I_IODINE_PCT`
export const INPUT_MIN_CU_COPPER_PCT = `${prefix}/INPUT_MIN_CU_COPPER_PCT`
export const INPUT_MIN_MN_MANGANESE_PCT = `${prefix}/INPUT_MIN_MN_MANGANESE_PCT`
export const INPUT_MIN_ZN_ZINC_PCT = `${prefix}/INPUT_MIN_ZN_ZINC_PCT`
export const INPUT_MIN_FE_IRON_PCT = `${prefix}/INPUT_MIN_FE_IRON_PCT`
export const INPUT_MIN_MG_MAGNESIUM_PCT = `${prefix}/INPUT_MIN_MG_MAGNESIUM_PCT`
export const INPUT_MIN_P_PHOSPHORUS_PCT = `${prefix}/INPUT_MIN_P_PHOSPHORUS_PCT`
export const INPUT_MIN_CA_CALCIUM_PCT = `${prefix}/INPUT_MIN_CA_CALCIUM_PCT`
export const INPUT_MIN_NA_SODIUM_PCT = `${prefix}/INPUT_MIN_NA_SODIUM_PCT`
export const INPUT_MIN_CL_CHLORINE_PCT = `${prefix}/INPUT_MIN_CL_CHLORINE_PCT`
export const INPUT_MIN_K_POTASSIUM_PCT = `${prefix}/INPUT_MIN_K_POTASSIUM_PCT`