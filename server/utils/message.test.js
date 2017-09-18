var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate message object', () => {
    var res = generateMessage("Tony", "Here I am! Rock You Like a Hurricane!!");

    expect(res.from).toBe("Tony");
    expect(res.text).toBe("Here I am! Rock You Like a Hurricane!!");
    expect(res.createdAt).toBeA('number');
  });
});
