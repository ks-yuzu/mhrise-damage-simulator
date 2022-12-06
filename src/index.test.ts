import DamageSimulator from './index'
import Enhancement, {makeEnhancement} from './enhancement'
import {SHARPNESS} from './sharpness'

const cases = [
  {
    description: 'physical damage',
    input: {
      weapon: {
        attack: 220,
        element: 0,
      },
      enhancements: [
        makeEnhancement('超会心', 3, {
          criticalDamageModifierAddend: 0.15,
        }),
        makeEnhancement('心眼', 2, {
          physicalDamageMultiplier: 1.15,
        }),
        makeEnhancement('会心発生 (テスト用)', 0, {
          affinityAddend: 100,
        }),
        makeEnhancement('大剣溜め補正', 3, {
          physicalDamageMultiplier: 1.3,
        }),
      ],
      motion: {
        motionValue:     105,
        elementModifier: 1.5,
      },
      sharpness: SHARPNESS.blue,
      monsterPartMultiplier: {
        physical: 20,
        elemental: 5,
      },
    },
    expected: 116,
  },
  {
    description: 'elemental damage',
    input: {
      weapon: {
        attack: 0,
        element: 30,
      },
      enhancements: [
        makeEnhancement('超会心', 3, {
          criticalDamageModifierAddend: 0.15,
        }),
        makeEnhancement('心眼', 2, {
          physicalDamageMultiplier: 1.15,
        }),
        makeEnhancement('会心発生 (テスト用)', 0, {
          affinityAddend: 100,
        }),
        makeEnhancement('大剣溜め補正', 3, {
          physicalDamageMultiplier: 1.3,
        }),
      ],
      motion: {
        motionValue:     105,
        elementModifier: 1.5,
      },
      sharpness: SHARPNESS.blue,
      monsterPartMultiplier: {
        physical: 20,
        elemental: 5,
      },
    },
    expected: 2,
  },
  {
    description: 'total damage',
    input: {
      weapon: {
        attack: 220,
        element: 30,
      },
      enhancements: [
        makeEnhancement('超会心', 3, {
          criticalDamageModifierAddend: 0.15,
        }),
        makeEnhancement('心眼', 2, {
          physicalDamageMultiplier: 1.15,
        }),
        makeEnhancement('会心発生 (テスト用)', 0, {
          affinityAddend: 100,
        }),
        makeEnhancement('大剣溜め補正', 3, {
          physicalDamageMultiplier: 1.3,
        }),
      ],
      motion: {
        motionValue:     105,
        elementModifier: 1.5,
      },
      sharpness: SHARPNESS.blue,
      monsterPartMultiplier: {
        physical: 20,
        elemental: 5,
      },
    },
    expected: 118,
  },
]

for (const c of cases) {
  test(c.description, () => {
    const sim = new DamageSimulator(c.input)
    expect(sim.calcDamage()).toBe(c.expected)
  })
}
