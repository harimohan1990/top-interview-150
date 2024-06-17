var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let water = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }

    return water;    
};


/*  
The provided JavaScript function, `trap`, is designed to solve the "Trapping Rain Water" problem. This problem involves finding the total volume of water that can be trapped between the heights of bars plotted on a graph. Here's a breakdown of how the function works:

1. **Initialization**:
    - `left` and `right`: These pointers start at the beginning and the end of the `height` array respectively. They will be used to traverse the array from both ends towards the center.
    - `leftMax` and `rightMax`: These variables store the maximum heights encountered so far from the left and right sides, respectively. Initially, they are set to the values at the `left` and `right` indices of the `height` array.
    - `water`: This accumulator keeps track of the total volume of trapped water. It starts at zero.

2. **Traversal and Water Calculation**:
    - The function enters a while loop, which continues as long as `left` is less than `right`.
    - Inside the loop, the function compares `leftMax` and `rightMax` to determine which side to process:
        - If `leftMax` is less than `rightMax`, it indicates that the potential trapped water on the left side is limited by `leftMax`. Thus, the function increments the `left` pointer, updates `leftMax` if the current height at `left` is higher than `leftMax`, and calculates the trapped water at this position by subtracting the height at the new `left` from `leftMax`. The result is added to `water`.
        - Conversely, if `leftMax` is greater or equal to `rightMax`, it suggests that the potential trapped water on the right side is limited by `rightMax`. So, the function decrements the `right` pointer, updates `rightMax` similarly, and calculates and adds the trapped water at this position.
    
3. **Result**:
    - After exiting the loop, `water` contains the total volume of trapped water, and the function returns this value.

This approach is efficient because it processes the array in a single pass using two pointers, 
with a time complexity of 
\(O(n)\) where \(n\) is the length of the `height` array. It avoids the need for additional space beyond the few variables used, achieving a space complexity of \(O(1)\).

*/

