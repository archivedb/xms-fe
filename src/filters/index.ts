// https://cn.vuejs.org/v2/guide/syntax.html#Filters

import * as Vue from 'vue'
import installing from './installing'

const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1)

const inspect = (x: Object): string =>
  JSON.stringify(x, null, 2)

const filters = { capitalize, inspect }

export default {
  ...filters,
  install: installing(filters),
}
