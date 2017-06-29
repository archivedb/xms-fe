// https://cn.vuejs.org/v2/guide/syntax.html#Filters

export const capitalize = (value: string): string =>
  value.length === 0 ? value : value.charAt(0).toUpperCase() + value.slice(1)

export const inspect = (x: Object): string =>
  JSON.stringify(x, null, 2)
