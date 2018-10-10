'use strict'

export function trigger(type, ...x) { 
  return {type, x}
}

// TODO supprimer la logique des préfixes
const prefix = 'DAILY_MEALS'

export const ADD = `${prefix}/ADD`
export const REMOVE = `${prefix}/REMOVE`