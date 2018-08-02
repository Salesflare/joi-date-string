# joi-date-string

Date string validation rule for Joi

[![Build Status](https://travis-ci.org/Salesflare/joi-date-string.svg?branch=master)](https://travis-ci.org/Salesflare/joi-phone-number)
[![Greenkeeper badge](https://badges.greenkeeper.io/Salesflare/joi-date-string.svg)](https://greenkeeper.io/)

## What

Allows you to do `Joi.dateString()`.

Uses `moment` for validation.

## How

```js
const myCustomJoi = Joi.extend(require('joi-date-string'));

myCustomJoi.dateString().validate('2018-10-05'); // pass

myCustomJoi.dateString().validate('05-10-2018'); // fail
myCustomJoi.dateString().validate(new Date()); // fail
myCustomJoi.dateString().validate('2018-08-02T12:09:04.378Z'); // fail
myCustomJoi.dateString().validate('1'); // fail
myCustomJoi.dateString().validate(1); // fail
```