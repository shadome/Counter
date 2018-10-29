'use strict'
import { FoodEntriesEn } from '../data/FoodEntriesEn'

export function searchEntries(string = '') {
  let s = string.trim().toLowerCase()
  if (s === '')
    return []
  return FoodEntriesEn.reduce(function (filtered, entry) {
    if (entry.alim_nom_eng.toLowerCase().includes(s)) {
      filtered.push({id: entry.alim_code, name: entry.alim_nom_eng})
    }
    return filtered
  }, [])
}

export function getEntry(id) {
  return FoodEntriesEn.find(x => x.alim_code === id)
}
    