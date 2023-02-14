//const csv2json = require("csvtojson/v2")
import csv2json from 'csvtojson'

const csvFilepath = './mhrise-buffs.csv'

;(async () => {
  const buffs = (await csv2json().fromFile(csvFilepath)).filter(i => !!i?.metadata.name)
  for (const i of buffs) {
    for (const [k, v] of Object.entries(i.metadata)) {
      if      (v === "null")         { delete i.metadata[k] }
      else if (v === "true")         { i.metadata[k] = true }
      else if (v === "false")        { i.metadata[k] = false }
   // else if (k === "level")        { i.metadata[k] = parseInt(v) }
      else if (k === "weaponFilter") { i.metadata[k] = v.split('/').filter(i => i.length > 0) }
    }
    for (const [k, v] of Object.entries(i.spec)) {
      if      (v === "null")  { delete i.spec[k] }
      else if (v === "true")  { i.spec[k] = true }
      else if (v === "false") { i.spec[k] = false }
      else                    { i.spec[k] = parseFloat(v) }
    }
  }
  console.log(JSON.stringify(buffs))
})()

