'use strict'

export const reset = () => ({
  type: RESET,
})
export function add(item = undefined) {
  if (item && item.name) {
    return {
      type: ADD,
      payload: { item }
    }
  }
}
export const remove = (name = undefined) => ({
  type: REMOVE,
  payload: { name }
})

const PREFIX = 'DICTIONARY_ACTIONS'
export const ADD = `${PREFIX}-ADD`
export const REMOVE = `${PREFIX}-REMOVE`
export const RESET = `${PREFIX}-RESET`