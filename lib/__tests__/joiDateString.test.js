const Joi = require('joi');

const JoiDateString = require('../index.js');

describe('joiDateString', () => {
  it('extends', () => {
    const joi = Joi.extend(JoiDateString);
    expect(joi.dateString).toBeInstanceOf(Function);
  });

  it('validates', () => {
    const joi = Joi.extend(JoiDateString);
    const notOk = [1, null, undefined, '', 'a', '01-02-1970', new Date(), new Date().toISOString()];

    notOk.forEach(v => {
      const result = joi
        .dateString()
        .exist()
        .validate(v);

      expect(result.error).toBeInstanceOf(Error);
    });

    expect(joi.dateString().validate('2018-10-05').value).toBe('2018-10-05');
  });
});
