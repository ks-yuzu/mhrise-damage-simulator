import type {DeepPartial} from './util/deep-partial'

export interface EnhancementMetadata {
  readonly name:                string
  readonly level:               number
  readonly duration:            string
  readonly description:         string
  readonly category:            string
  readonly weaponFilter:        string[]
  readonly isTemporary:         boolean
  readonly isEnabledByDefault?: boolean
}

export interface EnhancementSpec {
  // 物理ダメージ関連
  readonly rawAttackMultiplier1:                  number // 素の武器攻撃力に掛ける
  readonly rawAttackAddend:                       number // ↑ の後に足す
  readonly rawAttackMultiplier2:                  number // ↑ の後に掛ける
  readonly physicalDamageMultiplier:              number // 物理ダメージ算出の最後に掛ける
  // 属性ダメージ関連
  readonly elementMultiplier1:                    number // 素の属性値に掛ける
  readonly elementAddend:                         number // ↑ の後に足す
  readonly elementalDamageMultiplier:             number // 属性ダメージ算出の最後に掛ける
  // 会心関連
  readonly affinityAddend:                        number // 会心率上昇
  readonly criticalDamageModifierAddend:          number // 会心ダメージ倍率上昇
  readonly elementalCriticalDamageModifierAddend: number // 属性会心ダメージ倍率上昇
}

export default class Enhancement {
  readonly metadata: EnhancementMetadata
  readonly spec:     EnhancementSpec

  constructor(params: DeepPartial<Enhancement>) {
    this.metadata = Object.assign({
      name:         '-',
      level:        0,
      duration:     '-',
      description:  '-',
      category:     'others',
      weaponFilter: [],
      isTemporary:  false,
    }, params.metadata)

    this.spec = Object.assign({
      rawAttackMultiplier1:                  1,
      rawAttackAddend:                       0,
      rawAttackMultiplier2:                  1,
      physicalDamageMultiplier:              1,
      elementMultiplier1:                    1,
      elementAddend:                         0,
      elementalDamageMultiplier:             1,
      affinityAddend:                        0,
      criticalDamageModifierAddend:          0,
      elementalCriticalDamageModifierAddend: 0,
    }, params.spec)
  }
}

export function makeEnhancement(name: string, level: number, spec: Partial<EnhancementSpec>): Enhancement {
  return new Enhancement({
    metadata: {name, level},
    spec,
  })
}


export function getEnhancementsByCategory(category: string) {
  return ENHANCEMENTS.filter(i => i.metadata.category === category)
}

export const ENHANCEMENTS = [
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "力の護符",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 6
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "力の爪",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 9
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "怪力の種",
      "level": 0,
      "duration": "3分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "鬼人の粉塵",
      "level": 0,
      "duration": "3分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "鬼人薬",
      "level": 0,
      "duration": "力尽きるまで",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "鬼人薬グレート",
      "level": 0,
      "duration": "力尽きるまで",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 7
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "鬼人弾",
      "level": 0,
      "duration": "3分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "他と重複可、斬れ味補正1.1倍"
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "ニトロダケ",
      "level": 0,
      "duration": "力尽きるまで",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "要:キノコ大好きLv2、鬼人薬系と重複不可"
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "接撃ビン",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": true,
      "description": "(注)近接攻撃の補正は考慮しない"
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "接撃ビン+",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)近接攻撃の補正は考慮しない。(=接撃ビンと同じ)"
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "item",
      "weaponFilter": [],
      "name": "強撃ビン",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.35
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "挑戦者",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "モンスター怒り時"
    },
    "spec": {
      "rawAttackAddend": 4,
      "affinityAddend": 3
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "挑戦者",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "モンスター怒り時"
    },
    "spec": {
      "rawAttackAddend": 8,
      "affinityAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "挑戦者",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "モンスター怒り時"
    },
    "spec": {
      "rawAttackAddend": 12,
      "affinityAddend": 7
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "挑戦者",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "モンスター怒り時"
    },
    "spec": {
      "rawAttackAddend": 16,
      "affinityAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "挑戦者",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "モンスター怒り時"
    },
    "spec": {
      "rawAttackAddend": 20,
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "フルチャージ",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "体力最大時"
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "フルチャージ",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "体力最大時"
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "フルチャージ",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "体力最大時"
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆恨み",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "赤ゲージがある時"
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆恨み",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "赤ゲージがある時"
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆恨み",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "赤ゲージがある時"
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆恨み",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "赤ゲージがある時"
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆恨み",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "赤ゲージがある時"
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "死中に活",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "状態異常発生中"
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "死中に活",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "状態異常発生中"
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "死中に活",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "状態異常発生中"
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 3
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 6
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 9
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackMultiplier1": 1.05,
      "rawAttackAddend": 7
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackMultiplier1": 1.06,
      "rawAttackAddend": 8
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 6,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackMultiplier1": 1.08,
      "rawAttackAddend": 9
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻撃",
      "level": 7,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackMultiplier1": 1.1,
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆襲",
      "level": 1,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "吹き飛ばされた時"
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆襲",
      "level": 2,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "吹き飛ばされた時"
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "逆襲",
      "level": 3,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "吹き飛ばされた時"
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "抜刀術【力】",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)本来は旋律効果は乗らないので正確な値ではない"
    },
    "spec": {
      "rawAttackAddend": 3
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "抜刀術【力】",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)本来は旋律効果は乗らないので正確な値ではない"
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "抜刀術【力】",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)本来は旋律効果は乗らないので正確な値ではない"
    },
    "spec": {
      "rawAttackAddend": 7
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "大剣",
        "片手剣",
        "ランス",
        "ガンランス",
        "チャアク"
      ],
      "name": "攻めの守勢",
      "level": 1,
      "duration": "20秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ジャストガード時"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "大剣",
        "片手剣",
        "ランス",
        "ガンランス",
        "チャアク"
      ],
      "name": "攻めの守勢",
      "level": 2,
      "duration": "20秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ジャストガード時"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "大剣",
        "片手剣",
        "ランス",
        "ガンランス",
        "チャアク"
      ],
      "name": "攻めの守勢",
      "level": 3,
      "duration": "20秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ジャストガード時"
    },
    "spec": {
      "rawAttackMultiplier1": 1.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "太刀",
        "大剣",
        "狩猟笛",
        "ハンマー",
        "双剣",
        "片手剣",
        "スラッシュアックス",
        "チャージアックス",
        "ランス",
        "ガンランス",
        "操虫棍"
      ],
      "name": "鈍器使い",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "切れ味黄色以下"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "太刀",
        "大剣",
        "狩猟笛",
        "ハンマー",
        "双剣",
        "片手剣",
        "スラッシュアックス",
        "チャージアックス",
        "ランス",
        "ガンランス",
        "操虫棍"
      ],
      "name": "鈍器使い",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "切れ味黄色以下"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "太刀",
        "大剣",
        "狩猟笛",
        "ハンマー",
        "双剣",
        "片手剣",
        "スラッシュアックス",
        "チャージアックス",
        "ランス",
        "ガンランス",
        "操虫棍"
      ],
      "name": "鈍器使い",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "切れ味緑以下"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "壁面移動",
      "level": 3,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "龍気活性",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "体力70%以下で1.05、体力80%以下で1.1"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "龍気活性",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "体力70%以下で1.05、体力80%以下で1.1"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火事場力",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "おだんご火事場力と重複不可"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火事場力",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "おだんご火事場力と重複不可"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火事場力",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "おだんご火事場力と重複不可"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火事場力",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "おだんご火事場力と重複不可"
    },
    "spec": {
      "rawAttackMultiplier1": 1.3
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "不屈",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "1乙"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "不屈",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "2乙"
    },
    "spec": {
      "rawAttackMultiplier1": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "太刀",
        "大剣",
        "狩猟笛",
        "ハンマー",
        "双剣",
        "片手剣",
        "スラッシュアックス",
        "チャージアックス",
        "ランス",
        "ガンランス",
        "操虫棍"
      ],
      "name": "心眼",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "切れ味補正後の肉質44以下で有効"
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "太刀",
        "大剣",
        "狩猟笛",
        "ハンマー",
        "双剣",
        "片手剣",
        "スラッシュアックス",
        "チャージアックス",
        "ランス",
        "ガンランス",
        "操虫棍"
      ],
      "name": "心眼",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "切れ味補正後の肉質44以下で有効"
    },
    "spec": {
      "physicalDamageMultiplier": 1.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "太刀",
        "大剣",
        "狩猟笛",
        "ハンマー",
        "双剣",
        "片手剣",
        "スラッシュアックス",
        "チャージアックス",
        "ランス",
        "ガンランス",
        "操虫棍"
      ],
      "name": "心眼",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "切れ味補正後の肉質44以下で有効"
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [],
      "name": "攻撃力UP旋律",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "狩猟笛"
    },
    "spec": {
      "rawAttackMultiplier2": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [],
      "name": "会心率UP旋律",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "狩猟笛"
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [],
      "name": "気炎の旋律",
      "level": 0,
      "duration": "20秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "オトモは 1.3 倍、攻撃力UP旋律と重複しない"
    },
    "spec": {
      "rawAttackMultiplier2": 1.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "大剣"
      ],
      "name": "強化納刀",
      "level": 0,
      "duration": "20秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "大剣"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "太刀"
      ],
      "name": "練気ゲージ (白)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "太刀"
    },
    "spec": {
      "rawAttackMultiplier1": 1.04
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "太刀"
      ],
      "name": "練気ゲージ (黄)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "太刀"
    },
    "spec": {
      "rawAttackMultiplier1": 1.08
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "太刀"
      ],
      "name": "練気ゲージ (赤)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "太刀"
    },
    "spec": {
      "rawAttackMultiplier1": 1.12
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "双剣"
      ],
      "name": "鬼神化【獣】",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "双剣"
    },
    "spec": {
      "rawAttackMultiplier1": 1.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ランス"
      ],
      "name": "流転突き",
      "level": 0,
      "duration": "10秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ランス"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ランス"
      ],
      "name": "アンカーレイジ (赤)",
      "level": 0,
      "duration": "10秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ランス"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ランス"
      ],
      "name": "アンカーレイジ (橙)",
      "level": 0,
      "duration": "10秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ランス"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ランス"
      ],
      "name": "アンカーレイジ (黄)",
      "level": 0,
      "duration": "10秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ランス"
    },
    "spec": {
      "rawAttackMultiplier1": 1.15
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "操虫棍"
      ],
      "name": "赤白橙エキス",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "操虫棍"
    },
    "spec": {
      "rawAttackMultiplier1": 1.15
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "扇旋回移動",
      "level": 0,
      "duration": "20秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ライトボウガン"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "剛力の弓がけ",
      "level": 0,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": "弓"
    },
    "spec": {
      "rawAttackMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "矢強化",
      "level": 0,
      "duration": "105秒",
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": "弓"
    },
    "spec": {
      "physicalDamageMultiplier": 1.15,
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "ロングバレル",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "ライトボウガン"
    },
    "spec": {
      "rawAttackMultiplier1": 1.0475
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ヘビィボウガン"
      ],
      "name": "パワーバレル",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "ヘビィボウガン"
    },
    "spec": {
      "rawAttackMultiplier1": 1.125
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [
        "disabled"
      ],
      "name": "怨虎竜の魂",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "百竜スキル"
    },
    "spec": {
      "rawAttackAddend": 12
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [
        "disabled"
      ],
      "name": "鈍刃の一撃",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "百竜スキル、切れ味が緑ゲージ以下のとき 10 %の確率で"
    },
    "spec": {
      "rawAttackMultiplier2": 1.2
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご短期催眠術",
      "level": 1,
      "duration": "10分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 6
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご短期催眠術",
      "level": 2,
      "duration": "10分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 9
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご短期催眠術",
      "level": 3,
      "duration": "10分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 12
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご短期催眠術",
      "level": 4,
      "duration": "10分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご射撃術",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.01
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご射撃術",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.02
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご射撃術",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.03
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご射撃術",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.04
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご暴れ撃ち",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "ブレ+2"
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご暴れ撃ち",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "ブレ+1"
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご暴れ撃ち",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "ブレ+2"
    },
    "spec": {
      "physicalDamageMultiplier": 1.07
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "おだんご暴れ撃ち",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "ブレ+1"
    },
    "spec": {
      "physicalDamageMultiplier": 1.07
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご火事場力",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "火事場力より優先"
    },
    "spec": {
      "rawAttackMultiplier1": 1.3
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご火事場力",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "火事場力より優先"
    },
    "spec": {
      "rawAttackMultiplier1": 1.35
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご火事場力",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "火事場力より優先"
    },
    "spec": {
      "rawAttackMultiplier1": 1.35
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんご火事場力",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "火事場力より優先"
    },
    "spec": {
      "rawAttackMultiplier1": 1.35
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんごビルドアップ",
      "level": 1,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんごビルドアップ",
      "level": 2,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんごビルドアップ",
      "level": 3,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "dango",
      "weaponFilter": [],
      "name": "おだんごビルドアップ",
      "level": 4,
      "duration": "30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "強化太鼓の技",
      "level": 0,
      "duration": "2分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "オトモアイルー"
    },
    "spec": {
      "rawAttackMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "強化咆哮の技",
      "level": 0,
      "duration": "2分30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "オトモアイルー"
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "ホムラチョウ",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 1
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 2
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 3
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 4
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 6,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 6
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 7,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 7
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 8,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 8
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 9,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 9
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 10,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 11,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 11
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 12,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 12
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 13,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 13
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 14,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 14
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 15,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 16,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 16
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 17,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 17
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 18,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 18
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 19,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 19
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "紅ヒトダマドリ",
      "level": 20,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "浮遊泡（赤）",
      "level": 0,
      "duration": "1分30秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "タマミツネの泡"
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火/水/雷/氷/龍属性強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火/水/雷/氷/龍属性強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 3
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火/水/雷/氷/龍属性強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.05,
      "elementAddend": 4
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火/水/雷/氷/龍属性強化",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.1,
      "elementAddend": 4
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "火/水/雷/氷/龍属性強化",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.2,
      "elementAddend": 4
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "会心撃【属性】",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementalCriticalDamageModifierAddend": 0.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "会心撃【属性】",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementalCriticalDamageModifierAddend": 0.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "会心撃【属性】",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementalCriticalDamageModifierAddend": 0.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "超会心",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "criticalDamageModifierAddend": 0.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "超会心",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "criticalDamageModifierAddend": 0.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "超会心",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "criticalDamageModifierAddend": 0.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 6,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "見切り",
      "level": 7,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 40
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "弱点特効",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "肉質45以上"
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "弱点特効",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "肉質45以上"
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "弱点特効",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "肉質45以上"
    },
    "spec": {
      "affinityAddend": 50
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "力の解放",
      "level": 1,
      "duration": "2分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "力の解放",
      "level": 2,
      "duration": "2分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "力の解放",
      "level": 3,
      "duration": "2分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "力の解放",
      "level": 4,
      "duration": "2分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 40
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "力の解放",
      "level": 5,
      "duration": "2分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 50
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "渾身",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "スタミナ最大状態を3秒継続で発動"
    },
    "spec": {
      "affinityAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "渾身",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "スタミナ最大状態を3秒継続で発動"
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "渾身",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "スタミナ最大状態を3秒継続で発動"
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "抜刀術【技】",
      "level": 1,
      "duration": "3秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "抜刀術【技】",
      "level": 2,
      "duration": "3秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "抜刀術【技】",
      "level": 3,
      "duration": "3秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 60
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [],
      "name": "曲射(会心型)",
      "level": 0,
      "duration": "11秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "弓"
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "アミキリアカネ",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "環境生物"
    },
    "spec": {
      "affinityAddend": 50
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "赤シラヌイカ (1匹)",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "環境生物"
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "赤シラヌイカ (2匹)",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "環境生物"
    },
    "spec": {
      "affinityAddend": 30
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "赤シラヌイカ (3匹)",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "環境生物"
    },
    "spec": {
      "affinityAddend": 45
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "赤シラヌイカ (4匹～)",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "環境生物"
    },
    "spec": {
      "affinityAddend": 50
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "金シラヌイカ",
      "level": 0,
      "duration": "1分",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "環境生物"
    },
    "spec": {
      "affinityAddend": 50
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "弓溜め段階",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 0.65,
      "elementalDamageMultiplier": 0.7
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "弓溜め段階",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1,
      "elementalDamageMultiplier": 0.85
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "弓溜め段階",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.25,
      "elementalDamageMultiplier": 1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "弓溜め段階",
      "level": 4,
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.35,
      "elementalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "通常弾・連射矢強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "通常弾・連射矢強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "通常弾・連射矢強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "貫通弾・貫通矢強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "貫通弾・貫通矢強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "貫通弾・貫通矢強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "散弾・拡散矢強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "散弾・拡散矢強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓",
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "散弾・拡散矢強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "速射強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "速射強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "速射強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "特殊射撃強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "特殊射撃強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "大剣"
      ],
      "name": "溜め",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1,
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "大剣"
      ],
      "name": "溜め",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2,
      "elementalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "大剣"
      ],
      "name": "溜め",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.3,
      "elementalDamageMultiplier": 1.3
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ガンランス"
      ],
      "name": "地烈斬",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "砲撃ダメージUP"
    },
    "spec": {
      "physicalDamageMultiplier": 1.2,
      "elementalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "チャージアックス"
      ],
      "name": "属性強化状態",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "斧攻撃のダメージUP"
    },
    "spec": {
      "physicalDamageMultiplier": 1.1,
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "_チャージアックス"
      ],
      "name": "属性強化状態",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "榴弾ダメージUP"
    },
    "spec": {
      "physicalDamageMultiplier": 1.3,
      "elementalDamageMultiplier": 1.3
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "スラッシュアックス"
      ],
      "name": "強撃ビン",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "剣モードのダメージUP"
    },
    "spec": {
      "physicalDamageMultiplier": 1.15,
      "elementalDamageMultiplier": 1.15
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "近距離",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 0.8,
      "elementalDamageMultiplier": 0.8
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "近距離",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 0.8,
      "elementalDamageMultiplier": 0.8
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "弓"
      ],
      "name": "遠距離",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 0.2,
      "elementalDamageMultiplier": 0.2
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "遠距離",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 0.1,
      "elementalDamageMultiplier": 0.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "速射",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 0.7,
      "elementalDamageMultiplier": 0.7
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "属性強化リロード",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "属性ダメージに補正"
    },
    "spec": {
      "physicalDamageMultiplier": 1.1,
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ライトボウガン"
      ],
      "name": "ステップ回避",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "ステップ回避直後の射撃"
    },
    "spec": {
      "physicalDamageMultiplier": 1.1,
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ヘビィボウガン"
      ],
      "name": "溜め撃ち",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.3,
      "elementalDamageMultiplier": 1.3
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ヘビィボウガン"
      ],
      "name": "溜め撃ち",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.5,
      "elementalDamageMultiplier": 1.5
    }
  },
  {
    "metadata": {
      "category": "weapon",
      "weaponFilter": [
        "ヘビィボウガン"
      ],
      "name": "溜め撃ち",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.8,
      "elementalDamageMultiplier": 1.8
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "睡眠",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 2,
      "elementalDamageMultiplier": 2
    }
  },
  {
    "metadata": {
      "category": "others",
      "weaponFilter": [],
      "name": "反撃の狼煙",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "百竜夜行の反撃の狼煙/ドラ"
    },
    "spec": {
      "physicalDamageMultiplier": 4.5,
      "elementalDamageMultiplier": 4.5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "連撃",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 8,
      "elementAddend": 6
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "連撃",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 9,
      "elementAddend": 8
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "連撃",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10,
      "elementAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "連撃",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 8,
      "elementAddend": 6
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "連撃",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 9,
      "elementAddend": 7
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "ライトボウガン",
        "ヘビィボウガン"
      ],
      "name": "連撃",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10,
      "elementAddend": 8
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "双剣"
      ],
      "name": "連撃",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10,
      "elementAddend": 6
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "双剣"
      ],
      "name": "連撃",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 12,
      "elementAddend": 9
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "双剣"
      ],
      "name": "連撃",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15,
      "elementAddend": 12
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "大剣",
        "太刀",
        "片手剣",
        "ランス",
        "ガンランス",
        "ハンマー",
        "狩猟笛",
        "スラッシュアックス",
        "チャージアックス",
        "操虫棍"
      ],
      "name": "連撃",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10,
      "elementAddend": 8
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "大剣",
        "太刀",
        "片手剣",
        "ランス",
        "ガンランス",
        "ハンマー",
        "狩猟笛",
        "スラッシュアックス",
        "チャージアックス",
        "操虫棍"
      ],
      "name": "連撃",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 12,
      "elementAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "大剣",
        "太刀",
        "片手剣",
        "ランス",
        "ガンランス",
        "ハンマー",
        "狩猟笛",
        "スラッシュアックス",
        "チャージアックス",
        "操虫棍"
      ],
      "name": "連撃",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15,
      "elementAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "弱点特効【属性】",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "属性肉質20以上"
    },
    "spec": {
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "弱点特効【属性】",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "属性肉質20以上"
    },
    "spec": {
      "elementalDamageMultiplier": 1.125
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "弱点特効【属性】",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "属性肉質20以上"
    },
    "spec": {
      "elementalDamageMultiplier": 1.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "チャージマスター",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "チャージマスター",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "チャージマスター",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": true,
      "description": ""
    },
    "spec": {
      "elementalDamageMultiplier": 1.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "狂竜症【蝕】(克服前)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10,
      "elementAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "狂竜症【蝕】(克服前)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15,
      "elementAddend": 7
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "狂竜症【蝕】(克服前)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 20,
      "elementAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "狂竜症【蝕】(克服後)",
      "level": 1,
      "duration": "60",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "狂竜症【蝕】(克服後)",
      "level": 2,
      "duration": "60",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "狂竜症【蝕】(克服後)",
      "level": 3,
      "duration": "90",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "災禍転福",
      "level": 1,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 12,
      "elementAddend": 2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "災禍転福",
      "level": 2,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15,
      "elementAddend": 3
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "災禍転福",
      "level": 3,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 18,
      "elementAddend": 4
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "業鎧【修羅】(朱)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "業鎧【修羅】(朱)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "業鎧【修羅】(朱)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 35
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "業鎧【修羅】(蒼)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "業鎧【修羅】(蒼)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "業鎧【修羅】(蒼)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "巧撃",
      "level": 1,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "巧撃",
      "level": 2,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "巧撃",
      "level": 3,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "刃鱗磨き",
      "level": 1,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "刃鱗磨き",
      "level": 2,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "弓"
      ],
      "name": "刃鱗磨き",
      "level": 3,
      "duration": "30",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "闇討ち",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "闇討ち",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "闇討ち",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻勢",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻勢",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10,
      "affinityAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "攻勢",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15,
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "蓄積時攻撃強化",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "蓄積時攻撃強化",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "蓄積時攻撃強化",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.2
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (朱1)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 5
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (朱1)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 7
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (朱1)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 10
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (朱2)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 8
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (朱2)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 12
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (朱2)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "伏魔響命 (朱・キュリア3匹)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 12
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "伏魔響命 (朱・キュリア4匹)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "伏魔響命 (朱・キュリア5匹)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (蒼1)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (蒼1)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (蒼1)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (蒼2)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (蒼2)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [
        "disabled"
      ],
      "name": "伏魔響命 (蒼2)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "伏魔響命 (蒼・キュリア3匹)",
      "level": 1,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 25
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "伏魔響命 (蒼・キュリア4匹)",
      "level": 2,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 30
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "伏魔響命 (蒼・キュリア5匹)",
      "level": 3,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 35
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "炎鱗/鋼殻の恩恵",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.05
    }
  },
  {
    "metadata": {
      "category": "skill",
      "weaponFilter": [],
      "name": "炎鱗/鋼殻の恩恵",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "劫血竜珠【2】(1段階)",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15,
      "elementMultiplier1": 1.1
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "劫血竜珠【2】(2段階)",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 30,
      "elementMultiplier1": 1.2
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "鋼魂竜珠【3】(1hit)",
      "level": 0,
      "duration": "3秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 5
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "鋼魂竜珠【3】(5hit)",
      "level": 0,
      "duration": "3秒",
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "属痛竜珠【3】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "属性肉質25以上"
    },
    "spec": {
      "elementalDamageMultiplier": 1.15
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "破竜竜珠【2】",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "破獣竜珠【2】",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "破空竜珠【2】",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "破流竜珠【2】",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.05
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "破小竜珠【1】",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.5
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "火拡竜珠【1】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "水拡竜珠【1】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "雷拡竜珠【1】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "氷拡竜珠【1】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "physicalDamageMultiplier": 1.1
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "鬼激竜珠【3】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "天魂竜珠【2】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "龍属性やられ時、龍属性1.2倍"
    },
    "spec": {
      "elementMultiplier1": 1.2
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "雷神竜珠【2】(しまきx1)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "しまき防具の装備数"
    },
    "spec": {
      "affinityAddend": 5
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "雷神竜珠【2】(しまきx2)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "しまき防具の装備数"
    },
    "spec": {
      "affinityAddend": 10
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "雷神竜珠【2】(しまきx3)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "しまき防具の装備数"
    },
    "spec": {
      "affinityAddend": 15
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "雷神竜珠【2】(しまきx4)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "しまき防具の装備数"
    },
    "spec": {
      "affinityAddend": 20
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "雷神竜珠【2】(しまきx5)",
      "level": 0,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "しまき防具の装備数"
    },
    "spec": {
      "affinityAddend": 25
    }
  },
  {
    "metadata": {
      "category": "rampage-decoration",
      "weaponFilter": [],
      "name": "痛恨竜珠【2】",
      "level": 0,
      "isTemporary": true,
      "isEnabledByDefault": false,
      "description": "マイナス会心時に25%の確率で物理会心補正を1.5倍"
    },
    "spec": {
      "physicalDamageMultiplier": 1.5
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "攻撃強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 5
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "攻撃強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 10
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "攻撃強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 15
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "攻撃強化",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "rawAttackAddend": 20
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "属性強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 3
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "属性強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 6
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "属性強化",
      "level": 3,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "elementAddend": 9
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "属性強化",
      "level": 4,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)大剣・ハンマー・ランス・ガンランスではさらに効果が大きい"
    },
    "spec": {
      "elementAddend": 12
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "属性強化",
      "level": 5,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)大剣・ハンマー・ランス・ガンランスではさらに効果が大きい"
    },
    "spec": {
      "elementAddend": 15
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "属性強化",
      "level": 6,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": "(注)大剣・ハンマー・ランス・ガンランスではさらに効果が大きい"
    },
    "spec": {
      "elementAddend": 20
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "会心率強化",
      "level": 1,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 5
    }
  },
  {
    "metadata": {
      "category": "qurious-craft",
      "weaponFilter": [],
      "name": "会心率強化",
      "level": 2,
      "isTemporary": false,
      "isEnabledByDefault": false,
      "description": ""
    },
    "spec": {
      "affinityAddend": 10
    }
  }
].map(i => new Enhancement(i))