const assert = require('power-assert');
const question = require('../../');

describe.skip('283', () => {
  const ques = question[283];
  it('correct when []', () => {
    assert.deepEqual(ques([]), []);
  });
  it('correct when [0,1,0,3,12]', () => {
    assert.deepEqual(ques([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
  });
  it('correct when [1,0,1]', () => {
    assert.deepEqual(ques([1, 0, 1]), [1, 1, 0]);
  });
  it('correct when [1,2,3]', () => {
    assert.deepEqual(ques([1, 2, 3]), [1, 2, 3]);
  });
});

describe.skip('11', () => {
  const ques = question[11];
  it('correct when input []', () => {
    assert(ques([]) === 0);
  });
  it('correct when input [1,1]', () => {
    assert(ques([1, 1]) === 1);
  });
  it('correct when input [1,8,6,2,5,4,8,3,7]', () => {
    assert(ques([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
  });
});
