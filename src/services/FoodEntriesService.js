'use strict'
import { FoodEntriesEn } from '../data/FoodEntriesEn'

export function searchEntries(string = '') {
  let s = string.trim().toLowerCase()
  if (s === '')
    return FoodEntriesEn.map((item) => {return {...item, id:item.alim_code, name:item.alim_nom_eng}})
  if (s.length < 3)
    return undefined
  return FoodEntriesEn
    .reduce(function (filtered, entry) {
      if (entry.alim_nom_eng.toLowerCase().includes(s)) {
        filtered.push({id:entry.alim_code, name:entry.alim_nom_eng})
      }
      return filtered
    }, [])
    .sort(function(a, b) {return a.name.length - b.name.length})
}

export function getEntry(id) {
  return FoodEntriesEn.find(x => x.alim_code === id)
}
    