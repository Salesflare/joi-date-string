'use strict';

const moment = require('moment');

/**
 * Allows you to do `Joi.dateString()`
 *
 * @param {Object} joi Joi instance provided by Joi
 * @return {Object} Joi plugin object
 */
module.exports = (joi) => ({
  type: 'dateString',
  base: joi.string(),
  validate: function (value, helpers) {
    const isValid = moment(value, 'YYYY-MM-DD', true).isValid();

    if (!isValid) {
      return { value, errors: helpers.error('dateString.error', { value }) };
    }

    return { value };
  },
  messages: {
    'dateString.error': '`{{#value}}` is not a valid date string in the format of YYYY-MM-DD',
  },
});
