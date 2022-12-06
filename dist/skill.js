import Buff from './buff';
export default class Skill extends Buff {
}
export function makeSkill(name, level, spec, metadata) {
    return new Skill({
        metadata: Object.assign({}, metadata, { name, level }),
        spec,
    });
}
const BUFF_LIST = [
    makeSkill('力の護符', 0, {
        rawAttackAddend: 6,
    }),
    makeSkill('力の爪', 0, {
        rawAttackAddend: 9,
    }),
    makeSkill('怪力の種', 0, {
        rawAttackAddend: 10,
    }, {
        duration: '3分',
    }),
    makeSkill('鬼人の粉塵', 0, {
        rawAttackAddend: 10,
    }, {
        duration: '3分',
    }),
    makeSkill('鬼人薬', 0, {
        rawAttackAddend: 5,
    }, {
        duration: '力尽きるまで',
    }),
    makeSkill('鬼人薬グレート', 0, {
        rawAttackAddend: 7,
    }, {
        duration: '力尽きるまで',
    }),
    makeSkill('鬼人弾', 0, {
        rawAttackAddend: 10,
    }, {
        duration: '3分',
        description: '他と重複可、斬れ味補正1.1倍',
    }),
    makeSkill('ニトロダケ', 0, {
        rawAttackAddend: 5,
    }, {
        duration: '力尽きるまで',
        description: '要:キノコ大好きLv2、鬼人薬系と重複不可',
    }),
    makeSkill('挑戦者', 0, {
        rawAttackAddend: 4 - 20,
    }, {
        description: 'モンスター怒り時',
    }),
    makeSkill('フルチャージ', 0, {
        rawAttackAddend: 5 - 20,
    }, {
        description: '体力最大時',
    }),
    makeSkill('逆恨み', 0, {
        rawAttackAddend: 5 - 25,
    }, {
        description: '赤ゲージがある時',
    }),
    makeSkill('死中に活', 0, {
        rawAttackAddend: 5 - 20,
    }, {
        description: '状態異常発生中',
    }),
    makeSkill('攻撃', 0, {
        rawAttackAddend: 3 - 10,
        rawAttackMultiplier1: 1.05 - 1.1,
    }),
    makeSkill('逆襲', 0, {
        rawAttackAddend: 10 - 25,
    }, {
        duration: '30秒',
        description: '吹き飛ばされた時',
    }),
    makeSkill('抜刀術【力】', 0, {
        rawAttackAddend: 3 - 7,
    }),
    makeSkill('攻めの守勢', 0, {
        rawAttackMultiplier1: 1.05 - 1.15,
    }, {
        duration: '20秒',
        description: 'ジャストガード時',
    }),
    makeSkill('鈍器使い', 0, {
        rawAttackMultiplier1: 1.05 - 1.1,
    }),
    makeSkill('壁面移動', 0, {
        rawAttackAddend: 20,
    }, {
        duration: '30秒',
    }),
    makeSkill('龍気活性', 0, {
        rawAttackMultiplier1: 1.05 - 1.1,
    }, {
        description: '体力70%以下で1.05、体力80%以下で1.1',
    }),
    makeSkill('火事場力', 0, {
        rawAttackMultiplier1: 1.05 - 1.3,
    }, {
        description: 'おだんご火事場力と重複不可',
    }),
    makeSkill('おだんご火事場力', 0, {
        rawAttackMultiplier1: 1.35,
    }, {
        description: '火事場力より優先',
    }),
    makeSkill('不屈', 0, {
        rawAttackMultiplier1: 1.1 - 1.2,
    }),
    makeSkill('攻撃力UP旋律', 0, {
        rawAttackMultiplier2: 1.1,
    }, {
        duration: '1分',
    }),
    makeSkill('気炎の旋律', 0, {
        rawAttackMultiplier2: 1.2,
    }, {
        duration: '20秒',
        description: 'オトモは 1.3 倍、攻撃力UP旋律と重複しない',
    }),
    makeSkill('強化納刀', 0, {
        rawAttackMultiplier1: 1.1,
    }, {
        duration: '20秒',
        description: '大剣',
    }),
    makeSkill('練気ゲージ', 1, {
        rawAttackMultiplier1: 1.04,
    }, {
        description: '太刀、白ゲージ',
    }),
    makeSkill('練気ゲージ', 2, {
        rawAttackMultiplier1: 1.08,
    }, {
        description: '太刀、黄ゲージ',
    }),
    makeSkill('練気ゲージ', 3, {
        rawAttackMultiplier1: 1.12,
    }, {
        description: '太刀、赤ゲージ',
    }),
    makeSkill('鬼神化【獣】', 0, {
        rawAttackMultiplier1: 1.2,
    }, {
        description: '双剣',
    }),
    makeSkill('流転突き', 0, {
        rawAttackMultiplier1: 1.1,
    }, {
        duration: '10秒',
        description: 'ランス',
    }),
    makeSkill('アンカーレイジ', 0, {
        rawAttackMultiplier1: 1.05 - 1.15,
    }, {
        duration: '10秒',
        description: 'ランス',
    }),
    makeSkill('赤白橙エキス', 0, {
        rawAttackMultiplier1: 1.15,
    }, {
        duration: '1分',
        description: '操虫棍',
    }),
    makeSkill('扇旋回移動', 0, {
        rawAttackMultiplier1: 1.1,
    }, {
        duration: '20秒',
        description: 'ライトボウガン',
    }),
    makeSkill('剛力の弓がけ', 0, {
        rawAttackMultiplier1: 1.1,
    }, {
        duration: '30秒',
        description: '弓',
    }),
    makeSkill('ロングバレル', 0, {
        rawAttackMultiplier1: 1.0475,
    }, {
        description: 'ライトボウガン',
    }),
    makeSkill('パワーバレル', 0, {
        rawAttackMultiplier1: 1.125,
    }, {
        description: 'ヘビィボウガン',
    }),
    makeSkill('怨虎竜の魂', 0, {
        rawAttackAddend: 12,
    }, {
        description: '百竜スキル',
    }),
    makeSkill('鈍刃の一撃', 0, {
        rawAttackMultiplier2: 1.2,
    }, {
        description: '百竜スキル、切れ味が緑ゲージ以下のとき 10 %の確率で',
    }),
    makeSkill('おだんご短期催眠術', 0, {
        rawAttackAddend: 9,
    }, {
        duration: '10分',
    }),
    makeSkill('おだんごビルドアップ', 0, {
        rawAttackAddend: 15,
    }, {
        duration: '30秒',
    }),
    makeSkill('強化太鼓の技', 0, {
        rawAttackMultiplier1: 1.05,
    }, {
        duration: '2分',
        description: 'オトモアイルー',
    }),
    makeSkill('ホムラチョウ', 0, {
        rawAttackAddend: 25,
    }, {
        duration: '1分',
    }),
    makeSkill('紅ヒトダマドリ', 0, {
        rawAttackAddend: 2 - 20,
    }),
    makeSkill('浮遊泡（赤）', 0, {
        rawAttackAddend: 10,
    }, {
        duration: '1分30秒',
        description: 'タマミツネの泡',
    }),
];
//# sourceMappingURL=skill.js.map