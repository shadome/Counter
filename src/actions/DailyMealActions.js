const prefix = "DAILY_MEAL";

export const ADD = "$prefix/ADD";
export const REMOVE = "$prefix/REMOVE";

export function add(key, meal) {
  return {
    type: ADD, key, meal
  }
}
export function remove(key, index) {
  return {
    type: REMOVE, key, index
  }
}