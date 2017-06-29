import Vue from 'vue'
import installing from './installing'
import * as filters from './index'

export default {
  install: installing(filters as any as { [name: string]: Function }),
}
