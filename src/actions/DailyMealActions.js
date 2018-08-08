'use strict';

export function trigger(type, ...x) { 
  return {type, x}
}

const prefix = 'DAILY_MEAL';

export const ADD = `${prefix}/ADD`
export const REMOVE = `${prefix}/REMOVE`