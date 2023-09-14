'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('new-page-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
