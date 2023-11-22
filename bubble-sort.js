function bubbleSort(arr) {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length; j++) {
      // If the current value is greater than its neighbor to the right
      if (arr[j] > arr[j + 1]) {
        // Swap those values
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        // Do not move this console.log
        console.log(arr.join(','));
      }
    }
    // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) {
      return arr;
    }
    // Otherwise, repeat from the beginning
  }
}

module.exports = bubbleSort;
