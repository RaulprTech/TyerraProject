// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-properties-js": () => import("./../../../src/pages/Properties.js" /* webpackChunkName: "component---src-pages-properties-js" */),
  "component---src-pages-thanks-js": () => import("./../../../src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */),
  "component---src-templates-education-js": () => import("./../../../src/templates/Education.js" /* webpackChunkName: "component---src-templates-education-js" */),
  "component---src-templates-proyects-js": () => import("./../../../src/templates/Proyects.js" /* webpackChunkName: "component---src-templates-proyects-js" */)
}

