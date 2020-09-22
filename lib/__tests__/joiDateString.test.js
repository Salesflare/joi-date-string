const Joi = require('joi');

const JoiDateString = require('../index.js');

describe('joiDateString', () => {
  it('extends', () => {
    const joi = Joi.extend(JoiDateString);
    expect(joi.dateString).toBeInstanceOf(Function);
  });

  it('validates', () => {
    const joi = Joi.extend(JoiDateString);

    expect(joi.dateString().validate(1).error).toBeInstanceOf(Error);
    expect(joi.dateString().validate(null).error).toBeInstanceOf(Error);
    expect(joi.dateString().validate('').error).toBeInstanceOf(Error);
    expect(joi.dateString().validate('a').error).toBeInstanceOf(Error);
    expect(joi.dateString().validate('01-02-1970').error).toBeInstanceOf(Error);
    expect(joi.dateString().validate(new Date()).error).toBeInstanceOf(Error);
    expect(joi.dateString().validate(new Date().toISOString()).error).toBeInstanceOf(Error);

    expect(joi.dateString().validate(undefined).value).toBe(undefined);
    expect(joi.dateString().validate(undefined).error).not.toBeInstanceOf(Error);
    expect(joi.dateString().validate('2018-10-05').value).toBe('2018-10-05');
    expect(joi.dateString().validate('2018-10-05').error).not.toBeInstanceOf(Error);
    expect(joi.object({ test: joi.dateString() }).validate({}).value).toEqual({});
    expect(joi.object({ test: joi.dateString() }).validate({}).error).not.toBeInstanceOf(Error);
  });
});
