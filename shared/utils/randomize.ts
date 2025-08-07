/**
 * Randomizes the order of elements in an array.
 * @param array - The array whose elements need to be shuffled.
 *
 * The function uses the Fisher-Yates shuffle algorithm to ensure that
 * all elements in the array are randomly swapped until the order is fully shuffled.
 * It loops through the array, selecting a random index each time, and swaps the current element
 * with the randomly chosen one.
 *
 * @returns The same array with its elements shuffled in a random order.
 * Example:
 * ```
 * const myArray = [1, 2, 3, 4, 5];
 * const example = randomizeOrder(myArray);
 * console.log(example); // [4, 1, 3, 5, 2] (result may vary)
 * ```
 */
export const randomizeOrder = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
