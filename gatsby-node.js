exports.onCreatePage = require("./gatsby/onCreatePage")

const path = require(`path`);
const fs = require('fs');
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const pageData = JSON.parse(fs.readFileSync('./src/data/blogs/posts.json', { encoding: 'utf-8' }));
  const blogPostTemplate = path.resolve(`./src/templates/page.js`);
  pageData.pagesEN.forEach(page => {
    createPage({
      path: page.id,
      component: blogPostTemplate,
      context: {
        ...page,
      },
    });
  });
  pageData.pagesSR.forEach(page => {
    createPage({
      path: '/sr/' + page.id,
      component: blogPostTemplate,
      context: {
        ...page,
      },
    });
  });
};