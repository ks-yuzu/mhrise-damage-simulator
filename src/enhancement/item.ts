import Enhancement, {getEnhancementsByCategory} from '../enhancement'

export default class Item extends Enhancement {}

export const ITEMS = getEnhancementsByCategory('item')
