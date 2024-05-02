const memoize = (fun) => {
  const cache = {};
  return function (param1, param2) {
    let key = `${param1},${param2}`;
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fun(param1, param2);
      cache[key] = result;
      return result;
    }
  };
};

const add = (num1, num2) => {
  return num1 + num2;
};

const addMemoized = memoize(add);

console.log(addMemoized(12, 5));
console.log(addMemoized(12, 5));
