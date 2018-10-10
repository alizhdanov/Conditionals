# Conditionals

Conditional elements in array and object.

This npm package is filtering out `undefined` and `null` values.

## Example

```js
import conditionals from 'conditionals';

const user = {
  name: 'John',
  surname: null,
  age: undefined,
  friends: [
    {
      name: 'Jimmy',
      surname: null,
    },
  ],
};

conditionals(user);
```

Will be

```javascript
const sanitizedUser = {
  name: 'John',
  friends: [
    {
      name: 'Jimmy',
    },
  ],
};
```

In some cases null can be expected value. You can pass `options.soft` as a second parameter:

```javascript
conditionals(user, { soft: true });

const sanitizedUser = {
  name: 'John',
  surname: null,
  friends: [
    {
      name: 'Jimmy',
      surname: null,
    },
  ],
};
```
