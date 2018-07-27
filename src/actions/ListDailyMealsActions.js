const prefix = "LIST_DAILY_MEALS";

export const ADD = "$prefix/ADD";
export const REMOVE = "$prefix/REMOVE";

export const TOTO = "$prefix/TOTO";

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
export function toto(str = "tata") {
  return {
    type: TOTO, str
  }
}