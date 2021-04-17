
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/raulprtech/projects/sell_house/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/raulprtech/projects/sell_house/src/pages/index.js")),
  "component---src-pages-properties-js": preferDefault(require("/home/raulprtech/projects/sell_house/src/pages/Properties.js")),
  "component---src-pages-thanks-js": preferDefault(require("/home/raulprtech/projects/sell_house/src/pages/thanks.js")),
  "component---src-templates-education-js": preferDefault(require("/home/raulprtech/projects/sell_house/src/templates/Education.js")),
  "component---src-templates-proyects-js": preferDefault(require("/home/raulprtech/projects/sell_house/src/templates/Proyects.js"))
}

