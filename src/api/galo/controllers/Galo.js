'use strict';

/**
 * Galo.js controller
 *
 * @description: A set of functions called "actions" for managing `Galo`.
 */

module.exports = {

  /**
   * Retrieve galo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.galo.search(ctx.query);
    } else {
      return strapi.services.galo.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a galo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.galo.fetch(ctx.params);
  },

  /**
   * Count galo records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.galo.count(ctx.query, populate);
  },

  /**
   * Create a/an galo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.galo.add(ctx.request.body);
  },

  /**
   * Update a/an galo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.galo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an galo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.galo.remove(ctx.params);
  }
};
