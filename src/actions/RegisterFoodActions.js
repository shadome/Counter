﻿'use strict'

export const reset = () => ({
  type: RESET,
})
export const inputName = (name = undefined) => ({
  type: INPUT_NAME,
  payload: { name }
})
export const inputCategory = (category = undefined) => ({
  type: INPUT_CATEGORY,
  payload: { category }
})
export const buttonCalculate = () => ({
  type: CALCULATE_ENERGY_PCT,
})
export const inputEnergyPct = (energyPct = undefined) => ({
  type: INPUT_ENERGY_PCT,
  payload: { energyPct }
})
export const inputProteinPct = (proteinPct = undefined) => ({
  type: INPUT_PROTEIN_PCT,
  payload: { proteinPct }
})
export const inputCarbohydratesPct = (carbohydratesPct = undefined) => ({
  type: INPUT_CARBOHYDRATES_PCT,
  payload: { carbohydratesPct }
})
export const inputEthanolPct = (ethanolPct = undefined) => ({
  type: INPUT_ETHANOL_PCT,
  payload: { ethanolPct }
})
export const inputFatPct = (fatPct = undefined) => ({
  type: INPUT_FAT_PCT,
  payload: { fatPct }
})
export const inputFatSaturatedPct = (fatSaturatedPct = undefined) => ({
  type: INPUT_SATURATED_FAT_PCT,
  payload: { fatSaturatedPct }
})
export const inputFatN3Pct = (fatN3Pct = undefined) => ({
  type: INPUT_N3_FAT_PCT,
  payload: { fatN3Pct }
})
export const inputFatN6Pct = (fatN6Pct = undefined) => ({
  type: INPUT_N6_FAT_PCT,
  payload: { fatN6Pct }
})
export const inputFatN9Pct = (fatN9Pct = undefined) => ({
  type: INPUT_N9_FAT_PCT,
  payload: { fatN9Pct }
})
export const inputVitAEquivPct = (vitAEquiv = undefined) => ({
  type: INPUT_VIT_A_CAROTENOIDS_PCT,
  payload: { vitAEquiv }
})
export const inputVitCPct = (vitCPct = undefined) => ({
  type: INPUT_VIT_C_ASCORBIC_ACID_PCT,
  payload: { vitCPct }
})
export const inputVitDPct = (vitDPct = undefined) => ({
  type: INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT,
  payload: { vitDPct }
})
export const inputVitEPct = (vitEPct = undefined) => ({
  type: INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT,
  payload: { vitEPct }
})
export const inputVitKPct = (vitKPct = undefined) => ({
  type: INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT,
  payload: { vitKPct }
})
export const inputVitCholinePct = (vitCholinePct = undefined) => ({
  type: INPUT_VIT_CHOLINE_PCT,
  payload: { vitCholinePct }
})
export const inputVitB1Pct = (vitB1Pct = undefined) => ({
  type: INPUT_VIT_B1_THIAMINE_PCT,
  payload: { vitB1Pct }
})
export const inputVitB2Pct = (vitB2Pct = undefined) => ({
  type: INPUT_VIT_B2_RIBOFLAVIN_PCT,
  payload: { vitB2Pct }
})
export const inputVitB3Pct = (vitB3Pct = undefined) => ({
  type: INPUT_VIT_B3_NIACIN_ETC_PCT,
  payload: { vitB3Pct }
})
export const inputVitB5Pct = (vitB5Pct = undefined) => ({
  type: INPUT_VIT_B5_PANTOTHENIC_ACID_PCT,
  payload: { vitB5Pct }
})
export const inputVitB6Pct = (vitB6Pct = undefined) => ({
  type: INPUT_VIT_B6_PYRIDOXINE_ETC_PCT,
  payload: { vitB6Pct }
})
export const inputVitB7Pct = (vitB7Pct = undefined) => ({
  type: INPUT_VIT_B7_BIOTIN_PCT,
  payload: { vitB7Pct }
})
export const inputVitB9Pct = (vitB9Pct = undefined) => ({
  type: INPUT_VIT_B9_FOLATES_PCT,
  payload: { vitB9Pct }
})
export const inputVitB12Pct = (vitB12Pct = undefined) => ({
  type: INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT,
  payload: { vitB12Pct }
})
export const inputMinCaPct = (minCaPct = undefined) => ({
  type: INPUT_MIN_CA_CALCIUM_PCT,
  payload: { minCaPct }
})
export const inputMinClPct = (minClPct = undefined) => ({
  type: INPUT_MIN_CL_CHLORINE_PCT,
  payload: { minClPct }
})
export const inputMinCoPct = (minCoPct = undefined) => ({
  type: INPUT_MIN_CO_COBALT_PCT,
  payload: { minCoPct }
})
export const inputMinCrPct = (minCrPct = undefined) => ({
  type: INPUT_MIN_CR_CHROMIUM_PCT,
  payload: { minCrPct }
})
export const inputMinCuPct = (minCuPct = undefined) => ({
  type: INPUT_MIN_CU_COPPER_PCT,
  payload: { minCuPct }
})
export const inputMinFePct = (minFePct = undefined) => ({
  type: INPUT_MIN_FE_IRON_PCT,
  payload: { minFePct }
})
export const inputMinIPct = (minIPct = undefined) => ({
  type: INPUT_MIN_I_IODINE_PCT,
  payload: { minIPct }
})
export const inputMinKPct = (minKPct = undefined) => ({
  type: INPUT_MIN_K_POTASSIUM_PCT,
  payload: { minKPct }
})
export const inputMinMgPct = (minMgPct = undefined) => ({
  type: INPUT_MIN_MG_MAGNESIUM_PCT,
  payload: { minMgPct }
})
export const inputMinMnPct = (minMnPct = undefined) => ({
  type: INPUT_MIN_MN_MANGANESE_PCT,
  payload: { minMnPct }
})
export const inputMinMoPct = (minMoPct = undefined) => ({
  type: INPUT_MIN_MO_MOLYBDENUM_PCT,
  payload: { minMoPct }
})
export const inputMinNaPct = (minNaPct = undefined) => ({
  type: INPUT_MIN_NA_SODIUM_PCT,
  payload: { minNaPct }
})
export const inputMinPPct = (minPPct = undefined) => ({
  type: INPUT_MIN_P_PHOSPHORUS_PCT,
  payload: { minPPct }
})
export const inputMinSePct = (minSePct = undefined) => ({
  type: INPUT_MIN_SE_SELENIUM_PCT,
  payload: { minSePct }
})
export const inputMinZnPct = (minZnPct = undefined) => ({
  type: INPUT_MIN_ZN_ZINC_PCT,
  payload: { minZnPct }
})

const PREFIX = 'REGISTER_FOOD_ACTIONS' // must be unique
export const RESET = `${PREFIX}-RESET`
export const INPUT_NAME = `${PREFIX}-INPUT_NAME`
export const INPUT_CATEGORY = `${PREFIX}-INPUT_CATEGORY`
export const CALCULATE_ENERGY_PCT = `${PREFIX}-CALCULATE_ENERGY_PCT`
// macro: sucres fibres amidon polyols cendres cholestérol AGsatures AGpolyinsaturés(n9) AGmonoinsaturés(n6n3)
export const INPUT_ENERGY_PCT = `${PREFIX}-INPUT_ENERGY_PCT`
export const INPUT_FAT_PCT = `${PREFIX}-INPUT_FAT_PCT`
export const INPUT_CARBOHYDRATES_PCT = `${PREFIX}-INPUT_CARBOHYDRATES_PCT`
export const INPUT_PROTEIN_PCT = `${PREFIX}-INPUT_PROTEIN_PCT`
export const INPUT_ETHANOL_PCT = `${PREFIX}-INPUT_ETHANOL_PCT`
export const INPUT_SATURATED_FAT_PCT = `${PREFIX}-INPUT_SATURATED_FAT_PCT`
export const INPUT_N9_FAT_PCT = `${PREFIX}-INPUT_N9_FAT_PCT`
export const INPUT_N6_FAT_PCT = `${PREFIX}-INPUT_N6_FAT_PCT`
export const INPUT_N3_FAT_PCT = `${PREFIX}-INPUT_N3_FAT_PCT`
// vitamins: rétinol beta-carotene D E K1 K2 C B1(thiamine) B2(riboflavine) B3(PP,niacine) B5(acide_panthothénique) B6 +B7(biotin) B9(folates) B12
export const INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT = `${PREFIX}-INPUT_VIT_K_PHYLLOQUINONE_MENAQUINONES_PCT`
export const INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT = `${PREFIX}-INPUT_VIT_E_TOCOPHEROLS_TOCOTRIENOLS_PCT`
export const INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT = `${PREFIX}-INPUT_VIT_D_CHOLECALCIFEROL_ERGOCALCIFEROL_PCT`
export const INPUT_VIT_C_ASCORBIC_ACID_PCT = `${PREFIX}-INPUT_VIT_C_ASCORBIC_ACID_PCT`
export const INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT = `${PREFIX}-INPUT_VIT_B12_CYANOCOBALAMIN_ETC_PCT`
export const INPUT_VIT_B9_FOLATES_PCT = `${PREFIX}-INPUT_VIT_B9_FOLATES_PCT`
export const INPUT_VIT_B7_BIOTIN_PCT = `${PREFIX}-INPUT_VIT_B7_BIOTIN_PCT`
export const INPUT_VIT_B6_PYRIDOXINE_ETC_PCT = `${PREFIX}-INPUT_VIT_B6_PYRIDOXINE_ETC_PCT`
export const INPUT_VIT_B5_PANTOTHENIC_ACID_PCT = `${PREFIX}-INPUT_VIT_B5_PANTOTHENIC_ACID_PCT`
export const INPUT_VIT_B3_NIACIN_ETC_PCT = `${PREFIX}-INPUT_VIT_B3_NIACIN_ETC_PCT`
export const INPUT_VIT_B2_RIBOFLAVIN_PCT = `${PREFIX}-INPUT_VIT_B2_RIBOFLAVIN_PCT`
export const INPUT_VIT_B1_THIAMINE_PCT = `${PREFIX}-INPUT_VIT_B1_THIAMINE_PCT`
export const INPUT_VIT_A_CAROTENOIDS_PCT = `${PREFIX}-INPUT_VIT_A_CAROTENOIDS_PCT`
export const INPUT_VIT_CHOLINE_PCT = `${PREFIX}-INPUT_VIT_CHOLINE_PCT`
// minerals: sel calcium cuivre fer iode magnésium manganèse phosphore potassium sélénium sodium zinc +fluoride
export const INPUT_MIN_CO_COBALT_PCT = `${PREFIX}-INPUT_MIN_CO_COBALT_PCT`
export const INPUT_MIN_SE_SELENIUM_PCT = `${PREFIX}-INPUT_MIN_SE_SELENIUM_PCT`
export const INPUT_MIN_MO_MOLYBDENUM_PCT = `${PREFIX}-INPUT_MIN_MO_MOLYBDENUM_PCT`
export const INPUT_MIN_CR_CHROMIUM_PCT = `${PREFIX}-INPUT_MIN_CR_CHROMIUM_PCT`
export const INPUT_MIN_I_IODINE_PCT = `${PREFIX}-INPUT_MIN_I_IODINE_PCT`
export const INPUT_MIN_CU_COPPER_PCT = `${PREFIX}-INPUT_MIN_CU_COPPER_PCT`
export const INPUT_MIN_MN_MANGANESE_PCT = `${PREFIX}-INPUT_MIN_MN_MANGANESE_PCT`
export const INPUT_MIN_ZN_ZINC_PCT = `${PREFIX}-INPUT_MIN_ZN_ZINC_PCT`
export const INPUT_MIN_FE_IRON_PCT = `${PREFIX}-INPUT_MIN_FE_IRON_PCT`
export const INPUT_MIN_MG_MAGNESIUM_PCT = `${PREFIX}-INPUT_MIN_MG_MAGNESIUM_PCT`
export const INPUT_MIN_P_PHOSPHORUS_PCT = `${PREFIX}-INPUT_MIN_P_PHOSPHORUS_PCT`
export const INPUT_MIN_CA_CALCIUM_PCT = `${PREFIX}-INPUT_MIN_CA_CALCIUM_PCT`
export const INPUT_MIN_NA_SODIUM_PCT = `${PREFIX}-INPUT_MIN_NA_SODIUM_PCT`
export const INPUT_MIN_CL_CHLORINE_PCT = `${PREFIX}-INPUT_MIN_CL_CHLORINE_PCT`
export const INPUT_MIN_K_POTASSIUM_PCT = `${PREFIX}-INPUT_MIN_K_POTASSIUM_PCT`