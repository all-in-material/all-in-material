import * as components from './components'
import { type App } from 'vue'
export * from './components'

type ComponentName = keyof typeof components
const componentEntries = Object.entries(components)
const componentNames = Object.keys(components) as ComponentName[]

type Awaitable<T> = T | PromiseLike<T>
interface ComponentInfo {
  as?: string
  name?: string
  from: string
}
type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>
type ComponentResolverFunction = (name: string) => ComponentResolveResult
interface ComponentResolverObject {
  type: 'component' | 'directive'
  resolve: ComponentResolverFunction
}

export default {
  install: (app: App) => {
    componentEntries.forEach(([name, component]) => {
      app.component(name, component)
    })
  },
  resolver: () =>
    ({
      type: 'component',
      resolve: (componentName: string) => {
        if (componentNames.includes(componentName as ComponentName)) {
          return {
            name: componentName,
            from: '@all-in-material/component-vue'
          } as ComponentInfo
        }
      }
    } as ComponentResolverObject)
}
