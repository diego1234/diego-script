const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx": hot(preferDefault(require("/home/diego/diego-script/node_modules/@narative/gatsby-theme-novela/src/templates/articles.template.tsx"))),
  "component---node-modules-narative-gatsby-theme-novela-src-templates-article-template-tsx": hot(preferDefault(require("/home/diego/diego-script/node_modules/@narative/gatsby-theme-novela/src/templates/article.template.tsx"))),
  "component---node-modules-narative-gatsby-theme-novela-src-templates-author-template-tsx": hot(preferDefault(require("/home/diego/diego-script/node_modules/@narative/gatsby-theme-novela/src/templates/author.template.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/diego/diego-script/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/diego/diego-script/src/pages/404.js")))
}

