import Buff, { BuffMetadata, BuffSpec } from './buff';
export default class Skill extends Buff {
}
export declare function makeSkill(name: string, level: number, spec: Partial<BuffSpec>, metadata?: Partial<BuffMetadata>): Skill;
