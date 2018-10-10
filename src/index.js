const conditionals = function cond(data, options = { soft: false }) {
  const newData = Array.isArray(data) ? [] : {};

  Object.entries(data).forEach(([key, value]) => {
    if (options.soft ? value === undefined : value == null) {
      return;
    }

    if (typeof value === 'object' && value !== null) {
      newData[key] = cond(value, options);
      return;
    }

    newData[key] = value;
  });

  return newData;
};

export default conditionals;
