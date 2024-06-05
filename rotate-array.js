/**
 * Rotates the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums - The array of numbers.
 * @param {number} k - The number of steps to rotate the array.
 */
function rotate(nums, k) {
    const n = nums.length;
    k = k % n;  // Handle cases where k is greater than the array length

    // Helper function to reverse a segment of the array
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Reverse the whole array
    reverse(0, n - 1);
    // Reverse the first k elements
    reverse(0, k - 1);
    // Reverse the rest
    reverse(k, n - 1);
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr);  // Output should be [5, 6, 7, 1, 2, 3, 4]

/*

The provided JavaScript function `rotate` rotates an array to the right by `k` steps. Here's an explanation of the code along with its time and space complexity:

### Explanation of the Code:

1. **Parameter Normalization**:
   - `k = k % n`: This line ensures that `k` (the number of rotations) is reduced to a value less than the length of the array (`n`). This is important because rotating the array `n` times (where `n` is the length of the array) results in the array appearing the same as initially.

2. **Helper Function - `reverse`**:
   - `function reverse(start, end)`: This helper function is used to reverse a segment of the array between indices `start` and `end`. It uses a while loop to swap elements from the start to the midpoint of the segment with elements from the end moving towards the midpoint.

3. **Reversal Process**:
   - `reverse(0, n - 1)`: First, the entire array is reversed. This step sets the last `k` elements of the original array to be the first `k` elements of the reversed array.
   - `reverse(0, k - 1)`: Then, the first `k` elements of the now reversed array are reversed again to restore their original order, but in the new position after the rotation.
   - `reverse(k, n - 1)`: Finally, the remaining part of the array is reversed to restore the order of the elements that were not part of the initial `k` elements.

### Example:
For an array `[1, 2, 3, 4, 5, 6, 7]` and `k = 3`:
- After the full reverse: `[7, 6, 5, 4, 3, 2, 1]`
- After reversing the first `k` elements: `[5, 6, 7, 4, 3, 2, 1]`
- After reversing the rest: `[5, 6, 7, 1, 2, 3, 4]`

### Time Complexity:
- **O(n)**: The entire array is visited a constant number of times (specifically, three times for the three reversals). Each reversal visits each element within its range once. Hence, the overall time complexity is linear with respect to the number of elements in the array, `n`.

### Space Complexity:
- **O(1)**: The space used by the algorithm is constant as it only requires a few additional variables for indices and temporary storage during swaps. No additional data structures are used that scale with the input size, so the space complexity is constant.

This in-place approach to array rotation is efficient because it achieves the desired result with minimal space usage and in a straightforward pass over the array.




*/