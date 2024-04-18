import Component from './components/Component'
// import TestComponent from "./components/TestComponent.vue";
import TestComponent from './components/TestComponent.vue'

const version = __UI_VERSION__

function install (app) {
  app.component(Component.name, Component)
  app.component('TestComponent', TestComponent)

}

export {
  version,
  Component,

  install
}
