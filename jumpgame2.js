var jump = function(nums) {
    let jumps = 0;
    let curMaxReach = 0;
    let nextMaxReach = 0;
    
    for (let i = 0; i < nums.length - 1; ++i) {
        nextMaxReach = Math.max(nextMaxReach, i + nums[i]);
        if (i === curMaxReach) {
            jumps++;
            curMaxReach = nextMaxReach;
        }
    }
    
    return jumps;
};


/*  
Sure, here’s a detailed description of the provided JavaScript code, along with its operation and complexities:

### Code Overview
The function `jump(nums)` is designed to determine the minimum number of jumps required to reach the end of an array, where each element in the array `nums` indicates the maximum jump length from that position.

### Code Breakdown
1. **Variable Initialization:**
   - `jumps`: Counts the number of jumps made to reach the end.
   - `curMaxReach`: The farthest point that can be reached after the last jump.
   - `nextMaxReach`: The farthest point that can be reached from the current point in the loop.

2. **Loop through the array:**
   - The loop runs from the start of the array to the second last element (`nums.length - 1`). This is because once you reach the last element, no more jumps are needed.
   - Inside the loop:
     - `nextMaxReach` is updated to be the maximum of itself and the sum of the current index `i` and the value at `nums[i]`. This effectively calculates the farthest point reachable from the current position.
     - When `i` reaches `curMaxReach` (the maximum reachable point from the previous jumps), it triggers a new jump:
       - Increment the `jumps` counter because a new jump is needed to continue.
       - Update `curMaxReach` to `nextMaxReach`, setting the new limit that can be reached with the next jump.

3. **Return Value:**
   - Once the loop completes, the function returns the total number of jumps made, stored in the variable `jumps`.

### Time Complexity
- **O(n):** The function involves a single loop over the array of length `n`. Each operation within the loop (updating `nextMaxReach`, checking if `i` equals `curMaxReach`, and updating `jumps` and `curMaxReach`) is performed in constant time. Therefore, the time complexity is linear.

### Space Complexity
- **O(1):** The algorithm uses a constant amount of space regardless of the input size. Only three auxiliary variables (`jumps`, `curMaxReach`, `nextMaxReach`) are used for computation, and no additional data structures are employed.

### Conclusion
The function is efficient for solving the problem, with linear time complexity and constant space complexity, making it suitable for large inputs. The approach is greedy, as it always tries to make the best choice at the moment by jumping to the farthest reachable point.


The code you provided is an implementation of the "jump game" problem, where the goal is to find the minimum number of jumps required to reach the end of an array, starting at the first element. Each element in the array represents the maximum jump length from that position. Here's the analysis of its time and space complexity:

### Time Complexity
- **O(n):** The function contains a single loop that iterates over the array `nums`, which has a length of `n`. During each iteration, the code performs a constant-time operation to update `nextMaxReach` and, conditionally, `jumps` and `curMaxReach`. There are no nested loops or recursive calls, and the number of iterations depends linearly on the length of the array. Therefore, the overall time complexity is linear, \(O(n)\).

### Space Complexity
- **O(1):** The function uses a fixed number of variables (`jumps`, `curMaxReach`, and `nextMaxReach`) regardless of the input size. It does not use any data structures that scale with the size of the input, and there are no recursive calls that would add to the call stack. Thus, the space complexity is constant, \(O(1)\).

This makes the function efficient both in terms of time and space usage.

*/