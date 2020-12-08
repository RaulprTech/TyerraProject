const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/home/raulprtech/WebProjects/personalProjects/tyerraProject/src/pages/index.js"))),
  "component---src-pages-properties-js": hot(preferDefault(require("/home/raulprtech/WebProjects/personalProjects/tyerraProject/src/pages/Properties.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/home/raulprtech/WebProjects/personalProjects/tyerraProject/src/pages/thanks.js"))),
  "component---src-templates-education-js": hot(preferDefault(require("/home/raulprtech/WebProjects/personalProjects/tyerraProject/src/templates/Education.js"))),
  "component---src-templates-proyects-js": hot(preferDefault(require("/home/raulprtech/WebProjects/personalProjects/tyerraProject/src/templates/Proyects.js")))
}

