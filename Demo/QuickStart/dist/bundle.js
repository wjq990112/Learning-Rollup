(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var sum = function sum(a, b) {
    return a + b;
  };

  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  var res = [].concat(arr1, arr2);
  console.log(res);
  console.log(sum(1, 2));

})));
//# sourceMappingURL=bundle.js.map
