const assert = require('assert');
import * as leetcode from '../../index';

describe('283', () => {
  const func = leetcode.q283;
  it('correct when []', () => {
    assert.deepEqual(func([]), []);
  });
  it('correct when [0,1,0,3,12]', () => {
    assert.deepEqual(func([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
  });
  it('correct when [1,0,1]', () => {
    assert.deepEqual(func([1, 0, 1]), [1, 1, 0]);
  });
  it('correct when [1,2,3]', () => {
    assert.deepEqual(func([1, 2, 3]), [1, 2, 3]);
  });
});

describe('11', () => {
  const func = leetcode.q11;
  it('correct when input []', () => {
    assert(func([]) === 0);
  });
  it('correct when input [1,1]', () => {
    assert(func([1, 1]) === 1);
  });
  it('correct when input [1,8,6,2,5,4,8,3,7]', () => {
    assert(func([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
  });
});

describe('70', () => {
  const func = leetcode.q70;
  it('correct when input 0', () => {
    assert(func(0) === 0);
  });
  it('correct when input 2', () => {
    assert(func(2) === 2);
  });
  it('correct when input 5', () => {
    assert(func(5) === 8);
  });
});

describe.only('15', () => {
  const func = leetcode.q15;
  it('correct when input []', () => {
    assert.deepEqual(func([]), []);
  });
  it('correct when input [-1, 0, 1, 2, -1, -4]，', () => {
    const res = func([-1, 0, 1, 2, -1, -4]);

    assert.deepEqual(res, [
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  it('correct when input [-2,0,1,1,2]，', () => {
    const res = func([-2, 0, 1, 1, 2]);

    assert.deepEqual(res, [
      [-2, 0, 2],
      [-2, 1, 1],
    ]);
  });
  it('correct when input [1, -1, -1, 0]', () => {
    assert.deepEqual(func([1, -1, -1, 0]), [[-1, 0, 1]]);
  });
});
