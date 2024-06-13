/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
        let output = new Array(n).fill(1);
    
        // Initialize the output array as 1, since the product of zero element is 1
    
        // Calculate left products
        let leftProduct = 1;
        for (let i = 0; i < n; i++) {
            output[i] = leftProduct;
            leftProduct *= nums[i];
        }
    let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= rightProduct;
            rightProduct *= nums[i];
        }
    
        return output;
    
        
      
    };

    /*

The provided JavaScript solution to the "Product of Array Except Self" problem operates by constructing an array where each element is the product of all the elements in the input array except the one at the current index. This is achieved without using division and with efficient time and space utilization. Let's break down the approach and analyze its time and space complexity:

### Explanation of the Code:

1. **Initialization:**
   - An output array `output` is created with the same length as the input array `nums`, initialized with `1`s. This is because multiplying any number by `1` leaves it unchanged, setting up a neutral base for multiplicative accumulation.

2. **Left Products Calculation:**
   - A variable `leftProduct` is initialized to `1` and used to accumulate the product of all elements to the left of each index as we iterate through the array from left to right.
   - For each element `i`, `output[i]` is updated to `leftProduct` (product of elements before `i`), and then `leftProduct` is updated by multiplying it with `nums[i]`.

3. **Right Products Calculation:**
   - A variable `rightProduct` is similarly initialized to `1` and used to accumulate the product of all elements to the right of each index as we iterate from right to left.
   - For each element `i`, `output[i]` is multiplied by `rightProduct`, integrating the product of all elements after `i`. Then, `rightProduct` is updated by multiplying it with `nums[i]`.

### Time Complexity:
- **O(n):** The algorithm makes two separate passes over the input array:
  - One pass to calculate the left products.
  - Another pass to calculate the right products and to finalize the output array.
  - Here, \( n \) is the number of elements in the input array. Each pass is linear with respect to the array length, thus the total time complexity is linear, O(n).

### Space Complexity:
- **O(1) Additional Space:** If the output array does not count towards the space complexity (as it is required for the output), the only extra space used are the variables `leftProduct` and `rightProduct`. This means the space complexity beyond the input and output is constant, O(1).
- **O(n) Total Space:** If you consider the space taken by the output array, then the total space used by the algorithm is O(n), where \( n \) is the length of the output array.

This solution is highly efficient as it manages to solve the problem in linear time while using minimal additional space, adhering to common constraints set in interviews and competitive programming.


    */