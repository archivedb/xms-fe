import './polyfills'
import './vendors'
import app from './app'

// if (window.__INITIAL_STATE__) store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')
