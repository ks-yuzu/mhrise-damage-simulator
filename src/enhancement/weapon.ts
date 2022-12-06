import Enhancement, {getEnhancementsByCategory} from '../enhancement'

export default class Weapon extends Enhancement {}

export const WEAPONS = getEnhancementsByCategory('weapon')
