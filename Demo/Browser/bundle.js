(function () {
  'use strict';

  const sum = (num1, num2) => {
    return num1 + num2;
  };

  const log1 = () => {
    setInterval(() => {
      console.log('log1');
    }, 1000);
  };

  console.log('sum: ', sum(1, 1));

  log1();

}());
