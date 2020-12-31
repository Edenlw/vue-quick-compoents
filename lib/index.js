import Test from "./test";
const components = [
  Test
];
const install = function install(Vue) {
  if(install.installed) return;
  components.map(component => Vue.component(component.name,component))
}
if(typeof window !== "undefined" && window.Vue) {
  install(window.vue)
}
export {
  install,
  Test
}