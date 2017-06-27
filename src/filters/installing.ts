// https://cn.vuejs.org/v2/guide/plugins.html

import Vue from 'vue'

const installing = (filters: { [name: string]: Function }) => (V: typeof Vue, options = {}) => {
  Object.entries(filters).forEach(([name, filter]) => {
    V.filter(name, filter)
  })
}

export default installing
