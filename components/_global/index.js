import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
     '.',
     true,
     /_base-[\w-]+\.vue/   // _base-input-field.vue
);
requireComponent.keys().forEach(fileName => {
     // get the component's configration
     const componentConfig = requireComponent(fileName);
     const fn = fileName.split('/').pop().replace(/\.\w+$/,'');
     const componentName = upperFirst(camelCase(fn));
     // console.log(componentConfig);
     Vue.component(componentName , componentConfig.default || componentConfig);
});