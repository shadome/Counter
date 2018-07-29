const prefix = "ADD_DAILY_MEAL";

export const INPUT_FOOD_NAME = "$prefix/INPUT_FOOD_NAME";
export const TEST2 = "$prefix/TEST2";

export function inputFoodName(name) {
  return {
    type: INPUT_FOOD_NAME, name
  }
}
export function inputTest2(newtoto) {
  return {
    type: TEST2, newtoto,
  }
}