'use strict'

export function trigger(type, ...x) { 
  return {type, x}
}

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'