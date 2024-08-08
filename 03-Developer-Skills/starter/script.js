// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const data1 = [17, 21, 23];
const data2 = [17, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  str = str + `... ${arr[0]}°C in 1 day ... `;
  for (let i = 1; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(str);
};
printForecast(data1);
