'use strict'
const MG_UNIT = {
  name:'mg',
  coefficient:1000,
}
const MCG_UNIT = {
  name:'μg',
  coefficient:1000000,
}
const G_UNIT = {
  name:'g',
  coefficient:1,
}
export const MacronutrientsData = {
  protein: {
    name:'proteins',
    unit:G_UNIT,
  }, carbohydrate: {
    name:'carbohydrates',
    unit:G_UNIT,
  }, fat: {
    name:'fats',
    unit:G_UNIT,
    saturated: {
      name:'saturated fat',
      unit:G_UNIT,
    }, monounsaturated: {
      name:'monounsaturated fat',
      unit:G_UNIT,
      n9: {
        name:'ω−9',
        label:'omega-9',
        unit:G_UNIT,
      },
    }, polyunsaturated: {
      name:'polyunsaturated fat',
      unit:G_UNIT,
      n3: {
        name:'ω−3',
        label:'omega-3',
        unit:G_UNIT,
      }, n6: {
        name:'ω−6',
        label:'omega-6',
        unit:G_UNIT,
      },
    }
  }, ethanol: {
     name:'ethanol',
     unit:G_UNIT,
  },
}
export const VitaminsData = {
  C: {
    name:'C',
    label:'ascorbic acid',
    unit:MG_UNIT,
    lowerRDA:90,
    upperRDA:2000,
  }, D: {
    name:'D',
    label:'cholecalciferol, ergocalciferol',
    unit:MCG_UNIT,
    lowerRDA:15,
    upperRDA:50,
  }, E: {
    name:'E',
    label:'tocopherols, tocotrienols, ...',
    unit:MG_UNIT,
    lowerRDA:15,
    upperRDA:1000,
  }, K: {
    name:'K',
    label:'phylloquinone, ...',
    unit:MCG_UNIT,
    lowerRDA:120,
  }, Aequiv: { // 1 µg RAE = 12 µg of all-trans-β-carotene from food [https://en.wikipedia.org/wiki/Beta-Carotene]
    name:'β-carotene',
    unit:MCG_UNIT,
    lowerRDA:10800,
    upperRDA:36000,
  }, B1: {
    name:'B1',
    label:'thiamine', 
    unit:MG_UNIT,
    lowerRDA:1.2,
  }, B2: {
    name:'B2',
    label:'riboflavin', 
    unit:MG_UNIT,
    lowerRDA:1.3,
  }, B3: {
    name:'B3',
    label:'niacin, ...', 
    unit:MG_UNIT,
    lowerRDA:16,
    upperRDA:35,
  }, B5: {
    name:'B5',
    label:'pantothenic acid', 
    unit:MG_UNIT,
    lowerRDA:5,
  }, B6: {
    name:'B6',
    label:'pyridoxine, ...' , 
    unit:MG_UNIT,
    lowerRDA:1.3,
    upperRDA:100,
  }, B7: {
    name:'B7',
    label:'biotin', 
    unit:MCG_UNIT,
    lowerRDA:30,
  }, B9: {
    name:'B9',
    label:'folates', 
    unit:MCG_UNIT,
    lowerRDA:400,
    upperRDA:1000,
  }, B12: {
    name:'B12',
    label:'cyanocobalamin, ...', 
    unit:MCG_UNIT,
    lowerRDA:1.4,
  }, choline: {
    name:'Choline',
    unit:MG_UNIT,
    lowerRDA:550,
    upperRDA:3500,
  },
}
export const MineralsData = {
  Ca: {
    name:'Ca',
    label:'calcium',
    unit:MG_UNIT,
    lowerRDA:1000,
    upperRDA:2500,
  }, Cl: {
    name:'Cl',
    label:'chloride',
    unit:MG_UNIT,
    lowerRDA:2300,
    upperRDA:3600,
  // }, Co: { // ignored yet, no RDA available
  //   name:'Co',
  //   label:'cobalt',
  //   unit:MG_UNIT,
  //   lowerRDA:??,
  //   upperRDA:??,
  }, Cu: {
    name:'Cu',
    label:'copper',
    unit:MG_UNIT,
    lowerRDA:0.9,
    upperRDA:10,
  }, Cr: {
    name:'Cr',
    label:'chromium',
    unit:MCG_UNIT,
    lowerRDA:35,
  }, F: {
    name:'F-',
    label:'fluoride',
    unit:MG_UNIT,
    lowerRDA:4,
    upperRDA:10,
  }, Fe: {
    name:'Fe',
    label:'iron',
    unit:MG_UNIT,
    lowerRDA:8,
    upperRDA:45,
  }, I: {
    name:'I',
    label:'iodine', 
    unit:MCG_UNIT,
    lowerRDA:150,
    upperRDA:1100,
  }, K: {
    name:'K',
    label:'potassium', 
    unit:MG_UNIT,
    lowerRDA:4700,
  }, Mg: {
    name:'Mg',
    label:'magnesium', 
    unit:MG_UNIT,
    lowerRDA:400,
  }, Mn: {
    name:'Mn',
    label:'manganese', 
    unit:MG_UNIT,
    lowerRDA:2.3,
    upperRDA:11,
  }, Mo: {
    name:'Mo',
    label:'molybdenum' , 
    unit:MCG_UNIT,
    lowerRDA:45,
    upperRDA:2000,
  }, Na: {
    name:'Na',
    label:'sodium', 
    unit:MG_UNIT,
    lowerRDA:1500,
    upperRDA:2300,
  }, P: {
    name:'P',
    label:'phosphorus', 
    unit:MG_UNIT,
    lowerRDA:700,
    upperRDA:4000,
  }, Se: {
    name:'Se',
    label:'selenium', 
    unit:MG_UNIT,
    lowerRDA:55,
    upperRDA:400,
  }, Zn: {
    name:'Zn',
    label:'zinc',
    unit:MG_UNIT,
    lowerRDA:11,
    upperRDA:40,
  },
}
/*
Calcium (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 1000mg to 2500mg
Chromium (parent:Minerals) -- DRIRDA 25yo m 35�g
Chloride (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 2300mg to 3600mg
Copper (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 0.9mg to 10mg
Fluoride (parent: Minerals) -- DRIRDA 25yo m 4mg  to 10mg
Iodine (�g/100g) (parent: Minerals) -- DRIRDA 25yo m 150�g to 1100�g
Iron (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 8mg to 45mg
Magnesium (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 400mg
Manganese (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 2.3mg to 11mg
Molybdenum (parent: Minerals) -- DRIRDA 25yo m 45�g to 2000�g
Phosphorus (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 700mg to 4000mg
Potassium (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 4700mg
Selenium (�g/100g) (parent: Minerals) -- DRIRDA 25yo m 55�g to 400�g
Sodium (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 1500mg to 2300mg
Zinc (mg/100g) (parent: Minerals) -- DRIRDA 25yo m 11mg to 40mg
*/