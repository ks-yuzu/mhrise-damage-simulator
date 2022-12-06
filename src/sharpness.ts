export type Sharpness = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white' | 'purple' | 'none'

export const SHARPNESS: {[key: string]: Sharpness} = {
  purple: 'purple',
  white:  'white',
  blue:   'blue',
  green:  'green',
  yellow: 'yellow',
  orange: 'orange',
  red:    'red',
  none:   'none',
}

export const SHARPNESS_JP: {[key: string]: string} = {
  purple: '紫',
  white:  '白',
  blue:   '青',
  green:  '緑',
  yellow: '黄色',
  orange: 'オレンジ',
  red:    '赤',
  none:   'なし',
}
