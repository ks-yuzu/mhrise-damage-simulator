import Enhancement, {getEnhancementsByCategory} from '../enhancement'

export default class Dango extends Enhancement {}

export const DANGOS: Dango[] = getEnhancementsByCategory('dango')
