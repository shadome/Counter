const prefix = "ADD_DAILY_MEAL";

export const ADD = "$prefix/ADD";
export const REMOVE = "$prefix/REMOVE";
export const MODIFY = "$prefix/MODIFY";

export function add(food) {
  return {
    type: ADD, food
  }
}
export function remove(id) {
  return {
    type: REMOVE, id
  }
}
export function modify(id, food) {
  return {
    type: MODIFY, id, food
  }
}