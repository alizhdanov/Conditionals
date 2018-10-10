import conditionals from '../src';

const obj = {
  a: 123,
  b: 'test',
  c: null,
  d: undefined,
  e: [
    {
      a: '1',
      b: null,
      c: undefined,
    },
  ],
};

test('remove nill values', () => {
  const expected = {
    a: 123,
    b: 'test',
    e: [
      {
        a: '1',
      },
    ],
  };

  expect(conditionals(obj)).toEqual(expected);
});

test('keep falsy values', () => {
  const falsyObj = {
    a: 0,
    b: '',
    c: false,
  };
  const expected = {
    a: 0,
    b: '',
    c: false,
  };

  expect(conditionals(falsyObj)).toEqual(expected);
});

test('remove only undefined in soft mode', () => {
  const expected = {
    a: 123,
    b: 'test',
    c: null,
    e: [
      {
        a: '1',
        b: null,
      },
    ],
  };

  expect(conditionals(obj, { soft: true })).toEqual(expected);
});
