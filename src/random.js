export default random

/**
 * This method will perform addition operation.
 *
 * @param {Array} array - the array
 * @return {*} - last item in the array
 */
function random(array) {
  return array[Math.floor(array.length * Math.random)]
}
