import Enhancement from './enhancement';
import type { Sharpness } from './sharpness';
export default class DamageSimulator {
    readonly weapon: {
        attack: number;
        element: number;
    };
    readonly enhancements: Enhancement[];
    readonly sharpness: Sharpness;
    readonly motion: {
        motionValue: number;
        elementModifier: number;
    };
    readonly monsterPartMultiplier: {
        physical: number;
        elemental: number;
    };
    constructor(params: Partial<DamageSimulator>);
    /**
     * ダメージ期待値 = 物理期待値 + 属性期待値
     */
    calcDamage(): number;
    /**
     * 物理期待値 = モーション値 * 攻撃力/100 * 会心補正 * 肉質/100 * 斬れ味補正 * ダメージ補正
     */
    private _calcPhysicalDamage;
    private _getRawAttack;
    private _getMotionValue;
    /**
     * 会心時の物理ダメージ倍率 = 0.25 | 0.3 | 0.35 | 0.4 | -0.25 (超会心/マイナス会心で変化)
     */
    private _getPhysicalCriticalDamageMultiplier;
    /**
     * 会心率
     */
    private _getAffinity;
    /**
     * 物理肉質補正
     */
    private _getMonsterPartPhysicalMultiplier;
    /**
     * 切れ味補正
     */
    private _getSharpnessPhysicalModifier;
    /**
     * 物理ダメージ補正
     */
    private _getPhysicalDamageMultiplier;
    /**
     * 属性ダメージ = 属性補正値 * 属性値 * 属性会心補正 * 肉質% * 斬れ味補正 * ダメージ補正
     */
    private _calcElementalDamage;
    /**
     * モーションごとの属性補正
     */
    private _getElementModifier;
    /**
     * スキル適用後の属性値
     */
    private _getElementValue;
    /**
     * 会心時の属性ダメージ倍率 = 0 | 0.05 | 0.1 | 0.15 (会心撃属性 1-3 で変化)
     */
    private _getElementalCriticalDamageMultiplier;
    /**
     * 属性肉質補正
     */
    private _getMonsterPartElementalMultiplier;
    /**
     * 切れ味補正
     */
    private _getSharpnessElementalModifier;
    /**
     * 属性ダメージ補正
     */
    private _getElementalDamageMultiplier;
    private _sumEnhancements;
    private _productEnhancements;
}
