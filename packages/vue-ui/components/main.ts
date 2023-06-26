import * as components from './components'
import { type App } from 'vue'
export * from './components'

export default {
  install: (app: App) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}
