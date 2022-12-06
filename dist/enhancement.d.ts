import type { DeepPartial } from './util/deep-partial';
export interface EnhancementMetadata {
    readonly name: string;
    readonly level: number;
    readonly duration: string;
    readonly description: string;
    readonly category: string;
    readonly weaponFilter: string[];
    readonly isTemporary: boolean;
    readonly isEnabledByDefault?: boolean;
}
export interface EnhancementSpec {
    readonly rawAttackMultiplier1: number;
    readonly rawAttackAddend: number;
    readonly rawAttackMultiplier2: number;
    readonly physicalDamageMultiplier: number;
    readonly elementMultiplier1: number;
    readonly elementAddend: number;
    readonly elementalDamageMultiplier: number;
    readonly affinityAddend: number;
    readonly criticalDamageModifierAddend: number;
    readonly elementalCriticalDamageModifierAddend: number;
}
export default class Enhancement {
    readonly metadata: EnhancementMetadata;
    readonly spec: EnhancementSpec;
    constructor(params: DeepPartial<Enhancement>);
}
export declare function makeEnhancement(name: string, level: number, spec: Partial<EnhancementSpec>): Enhancement;
export declare function getEnhancementsByCategory(category: string): Enhancement[];
export declare const ENHANCEMENTS: Enhancement[];
