# Conditionals

[![Greenkeeper badge](https://badges.greenkeeper.io/alizhdanov/Conditionals.svg)](https://greenkeeper.io/)

Conditional elements in array and object.

This npm package is filtering out `undefined` and `null` values.

## Use case:

The main use case it's when you want to send some payload to server and you want to remove all `null`ish values.

Usually it's done like this:

```javascript
const payload = {};

if (name != null) {
  payload.name = name;
}

// more if's here
```

Or with es6 spread operator:

```javascript
const payload = {
  ...(name != null && { name }),
  // more if's here
};
```

As you can see this is not perfect and either verbose or unreadable. This is what conditionals trying to fix.

```javascript
const payload = conditionals({
  name,
  // more values here here
});
```

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
