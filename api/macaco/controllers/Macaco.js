'use strict';

/**
 * Macaco.js controller
 *
 * @description: A set of functions called "actions" for managing `Macaco`.
 */

module.exports = {

  /**
   * Retrieve macaco records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.macaco.search(ctx.query);
    } else {
      return strapi.services.macaco.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a macaco record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.macaco.fetch(ctx.params);
  },

  /**
   * Count macaco records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.macaco.count(ctx.query, populate);
  },

  /**
   * Create a/an macaco record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.macaco.add(ctx.request.body);
  },

  /**
   * Update a/an macaco record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.macaco.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an macaco record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.macaco.remove(ctx.params);
  }
};
