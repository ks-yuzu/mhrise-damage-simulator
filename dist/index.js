export default class DamageSimulator {
    constructor(params) {
        var _a, _b, _c, _d, _e;
        // output (観測用を含む)
        this.rawAttack = 0;
        this.rawElement = 0;
        this.affinity = 0;
        this.physicalDamage = 0;
        this.elementalDamage = 0;
        this.weapon = Object.assign({ attack: 0, element: 0, affinity: 0 }, (_a = params.weapon) !== null && _a !== void 0 ? _a : {});
        this.enhancements = (_b = params.enhancements) !== null && _b !== void 0 ? _b : [];
        this.sharpness = (_c = params.sharpness) !== null && _c !== void 0 ? _c : 'none';
        this.motion = Object.assign({ motionValue: 0, elementModifier: 1 }, (_d = params.motion) !== null && _d !== void 0 ? _d : {});
        this.monsterPartMultiplier = Object.assign({ physical: 0, elemental: 0 }, (_e = params.monsterPartMultiplier) !== null && _e !== void 0 ? _e : {});
    }
    setEnhancements(enhancements) {
        this.enhancements = enhancements;
    }
    /**
     * ダメージ期待値 = 物理期待値 + 属性期待値
     */
    calc() {
        this._calc();
        return Math.round(this.physicalDamage) + Math.round(this.elementalDamage);
    }
    calcInRealNumbers() {
        this._calc();
        return this.physicalDamage + this.elementalDamage;
    }
    _calc() {
        this.affinity = this._getAffinity();
        const physicalDamage = this._calcPhysicalDamage(this.affinity);
        const elementalDamage = this._calcElementalDamage(this.affinity);
        // console.log({physicalDamage, elementalDamage, affinity: this.affinity})
        this.physicalDamage = physicalDamage;
        this.elementalDamage = elementalDamage;
    }
    /**
     * 物理期待値 = モーション値 * 攻撃力/100 * 会心補正 * 肉質/100 * 斬れ味補正 * ダメージ補正
     */
    _calcPhysicalDamage(affinity) {
        const motionValue = this._getMotionValue();
        this.rawAttack = this._getRawAttack();
        this.physicalCriticalDamageMultiplier = this._getPhysicalCriticalDamageMultiplier();
        const criticalMultiplier = 1 + this.physicalCriticalDamageMultiplier * affinity / 100; // 会心関連での期待値補正
        const monsterPartMultiplier = this._getMonsterPartPhysicalMultiplier();
        const sharpnessModifier = this._getSharpnessPhysicalModifier();
        const damageMultiplier = this._getPhysicalDamageMultiplier();
        // TODO: 怒り補正
        // console.log({motionValue, this.rawAttack, criticalMultiplier, monsterPartMultiplier, sharpnessModifier, damageMultiplier})
        return motionValue * this.rawAttack * criticalMultiplier * monsterPartMultiplier * sharpnessModifier * damageMultiplier / 100;
    }
    _getRawAttack() {
        const multiplier1 = this._productEnhancements('rawAttackMultiplier1');
        const addend = this._sumEnhancements('rawAttackAddend');
        const multiplier2 = this._productEnhancements('rawAttackMultiplier2');
        // console.log({weaponAttack: this.weapon.attack, multiplier1, addend, multiplier2})
        return ((this.weapon.attack * multiplier1) + addend) * multiplier2;
    }
    _getMotionValue() {
        return this.motion.motionValue;
    }
    /**
     * 会心時の物理ダメージ倍率 = 0.25 | 0.3 | 0.35 | 0.4 | -0.25 (超会心/マイナス会心で変化)
     */
    _getPhysicalCriticalDamageMultiplier() {
        return 0.25 + this._sumEnhancements('criticalDamageModifierAddend');
    }
    /**
     * 会心率
     */
    _getAffinity() {
        const affinity = this.weapon.affinity + this._sumEnhancements('affinityAddend');
        return affinity > 100 ? 100 : affinity;
    }
    /**
     * 物理肉質補正
     */
    _getMonsterPartPhysicalMultiplier() {
        return this.monsterPartMultiplier.physical / 100;
    }
    /**
     * 切れ味補正
     */
    _getSharpnessPhysicalModifier() {
        var _a;
        return (_a = {
            red: 0.5,
            orange: 0.75,
            yellow: 1,
            green: 1.05,
            blue: 1.2,
            white: 1.32,
            purple: 1.39,
            none: 1,
        }[this.sharpness]) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * 物理ダメージ補正
     */
    _getPhysicalDamageMultiplier() {
        return this._productEnhancements('physicalDamageMultiplier');
    }
    /**
     * 属性ダメージ = 属性補正値 * 属性値 * 属性会心補正 * 肉質% * 斬れ味補正 * ダメージ補正
     */
    _calcElementalDamage(affinity) {
        const elementModifier = this._getElementModifier();
        this.rawElement = this._getElementValue();
        this.elementalCriticalDamageMultiplier = this._getElementalCriticalDamageMultiplier();
        const criticalMultiplier = 1 + this.elementalCriticalDamageMultiplier * affinity / 100; // 会心関連での期待値補正
        const monsterPartMultiplier = this._getMonsterPartElementalMultiplier();
        const sharpnessModifier = this._getSharpnessElementalModifier();
        const damageMultiplier = this._getElementalDamageMultiplier();
        // TODO: 怒り補正
        // console.log({elementModifier, this.rawElement, criticalMultiplier, monsterPartMultiplier, sharpnessModifier, damageMultiplier})
        return elementModifier * this.rawElement * criticalMultiplier * monsterPartMultiplier * sharpnessModifier * damageMultiplier;
    }
    /**
     * モーションごとの属性補正
     */
    _getElementModifier() {
        return this.motion.elementModifier;
    }
    /**
     * スキル適用後の属性値
     */
    _getElementValue() {
        const multiplier1 = this._productEnhancements('elementMultiplier1');
        const addend = this._sumEnhancements('elementAddend');
        // const multiplier2 = this._productEnhancements('elementMultiplier2')
        // console.log({weaponElement: this.weapon.element, multiplier1, addend})
        return ((this.weapon.element * multiplier1) + addend); // * multiplier2
    }
    /**
     * 会心時の属性ダメージ倍率 = 0 | 0.05 | 0.1 | 0.15 (会心撃属性 1-3 で変化)
     */
    _getElementalCriticalDamageMultiplier() {
        return this._sumEnhancements('elementalCriticalDamageModifierAddend');
    }
    /**
     * 属性肉質補正
     */
    _getMonsterPartElementalMultiplier() {
        return this.monsterPartMultiplier.elemental / 100;
    }
    /**
     * 切れ味補正
     */
    _getSharpnessElementalModifier() {
        var _a;
        return (_a = {
            red: 0.25,
            orange: 0.5,
            yellow: 0.75,
            green: 1,
            blue: 1.0625,
            white: 1.15,
            purple: 1.25,
            none: 1,
        }[this.sharpness]) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * 属性ダメージ補正
     */
    _getElementalDamageMultiplier() {
        return this._productEnhancements('elementalDamageMultiplier');
    }
    _sumEnhancements(key) {
        return this.enhancements.map(i => i.spec[key]).reduce((a, b) => a + b, 0);
    }
    _productEnhancements(key) {
        return this.enhancements.map(i => i.spec[key]).reduce((a, b) => a * b, 1);
    }
}
//# sourceMappingURL=index.js.map