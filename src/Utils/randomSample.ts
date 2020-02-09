
var nativeFloor = Math.floor,
  nativeRandom = Math.random;

function baseRandom(lower: number, upper: number) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

function randomSample(array: any[]) {
    var length = array.length;
    return array[baseRandom(0, length - 1)] ;
  }

  export default randomSample