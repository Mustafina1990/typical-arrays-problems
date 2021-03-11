
exports.min = function min (array) {
  if(array === [] || array === undefined || array.length === 0) {
    return 0;
  } 
  let min = Math.min.apply(null, array);
  return min;
}

exports.max = function max (array) {
  if(array === [] || array === undefined || array.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, array);
  return max;
}

exports.avg = function avg (array) {
  if(array === [] || array === undefined || array.length === 0) {
    return 0;
  }
  let total = 0;
  for(let i = 0; i < array.length; i++) {
    total += array[i];
  }
  let avg = total/array.length;
  return avg;
}
