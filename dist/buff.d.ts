import type { DeepPartial } from './deep-partial';
export interface BuffMetadata {
    readonly name: string;
    readonly level: number;
    readonly duration: string;
    readonly description: string;
    readonly isTemporary: boolean;
}
export interface BuffSpec {
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
export default class Buff {
    readonly metadata: BuffMetadata;
    readonly spec: BuffSpec;
    constructor(params: DeepPartial<Buff>);
}
export declare function makeBuff(name: string, level: number, spec: Partial<BuffSpec>): Buff;
export declare const BUFF: Buff[];
