/* eslint-disable no-unused-vars */
'use strict';

const moment = require('moment');

/**
 * Allows you to do `Joi.dateString()`
 *
 * @param {Object} joi Joi instance provided by Joi
 * @return {Object} Joi plugin object
 */
module.exports = joi => ({
  base: joi.string(),
  name: 'dateString',
  pre: function(value, state, options) {
    const isValid = moment(value, 'YYYY-MM-DD', true).isValid();

    if (!isValid) {
      return this.createError('dateString.error', { value }, state, options);
    }

    return value;
  },
  language: {
    error: '`{{value}}` is not a valid date string in the format of YYYY-MM-DD'
  }
});
