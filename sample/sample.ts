import DamageSimulator from '../src'
import Skill from '../src/skill'
import Buff from '../src/buff'

import fs from 'fs'

const buffs = JSON.parse(fs.readFileSync('../assets/mhrise-buffs.json').toString()) as Buff[]
console.log(buffs)

const sim = new DamageSimulator({
  weapon: {
    attack:  220,
    element: 30,
  },
  skills: [
    // new Skill({
    //   name:                 'test1',
    //   rawAttackMultiplier1: 1.1,
    //   rawAttackAddend:      10,
    // }),
    // new Skill({
    //   name:                 'test2',
    //   rawAttackAddend:      20,
    // }),
  ],
  buffs: buffs.map(i => new Buff(i)),
  // buffs: [
    // new Buff({
    //   name:                 '傀異錬成',
    //   rawAttackAddend:      5,
    //   elementAddend:        20,
    // }),
    // new Buff({
    //   name:                 'test1',
    //   rawAttackMultiplier1: 1.1,
    //   rawAttackAddend:      10,
    //   rawAttackMultiplier2: 1.1,
    // }),
  // ],
  motion: {
    motionValue: 10,
    elementModifier: 0.8,
  },
  sharpness: 'blue',
  monsterPartMultiplier: {
    physical:  45,
    elemental: 25,
  }
})

console.log(sim.calcDamage())
