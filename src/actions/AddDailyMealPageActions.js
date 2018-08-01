'use strict';
const prefix = 'ADD_DAILY_MEAL_PAGE';

export const INPUT_NAME = '$prefix/INPUT_NAME';
export const SELECT_UNIT = '$prefix/SELECT_UNIT';
export const INPUT_QUANTITY = '$prefix/INPUT_QUANTITY';
export const INPUT_ENERGY_PCT = '$prefix/INPUT_ENERGY_PCT';
export const INPUT_FAT_PCT = '$prefix/INPUT_FAT_PCT';
export const INPUT_CARBOS_PCT = '$prefix/INPUT_CARBOS_PCT';
export const INPUT_PROTEIN_PCT = '$prefix/INPUT_PROTEIN_PCT';
export const INPUT_ALCOHOL_PCT = '$prefix/INPUT_ALCOHOL_PCT';

export function inputName(name) { return {type:INPUT_NAME, name}; }
export function selectUnit(unit) { return {type:SELECT_UNIT, unit,}; }
export function inputQuantity(quantity) { return {type:INPUT_QUANTITY, quantity}; }
export function inputEnergyPct(energyPct) { return {type:INPUT_ENERGY_PCT, energyPct}; }
export function inputFatPct(fatPct) { return {type:INPUT_FAT_PCT, fatPct}; }
export function inputCarbosPct(carbosPct) { return {type:INPUT_CARBOS_PCT, carbosPct}; }
export function inputProteinPct(proteinPct) { return {type:INPUT_PROTEIN_PCT, proteinPct}; }
export function inputAlcoholPct(alcoholPct) { return {type:INPUT_ALCOHOL_PCT, alcoholPct}; }
