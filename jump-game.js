var canJump = function(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;    
};

/*             

The given JavaScript function `canJump` assesses whether it's possible to jump from the start to the end of an array based on the values each index holds, which indicate the maximum number of steps that can be jumped forward from that position. The function employs a greedy algorithm to solve this problem efficiently. Here's a step-by-step explanation of how the code works:

1. **Initialization**:
   - `goal`: This variable is initialized to the index of the last element in the array (`nums.length - 1`). The `goal` variable represents the target that we need to reach, starting from the end of the array. This will be updated dynamically to reflect the farthest back we need to start to be able to reach the end.

2. **Looping Through the Array (Backward)**:
   - The loop starts from the second-to-last element (`nums.length - 2`) and proceeds backwards to the first element of the array (`index 0`). The reason for backward iteration is that it allows us to determine the necessity of reaching each position in the array from the end, simplifying the problem as we proceed.
   
3. **Checking Jump Capacity**:
   - Inside the loop, for each index `i`, the code checks if the current index `i` plus the maximum number of steps that can be taken from `i` (`nums[i]`) is greater than or equal to the current `goal`.
   - If `i + nums[i] >= goal` is `true`, it means that starting from index `i`, one can jump directly to `goal` or beyond. Thus, `goal` is updated to `i`, meaning that we now need to determine if we can reach this new `goal` from an even earlier point in the array.

4. **Final Verification**:
   - After the loop completes, if `goal` is `0`, it means that it's possible to reach the last index starting from the first index of the array. This is because, through backward checking, we've been able to update `goal` all the way back to the start without finding any position that blocks passing to the end. The function returns `true` if `goal` is `0`, otherwise `false`.

The essence of this approach is to reduce the problem incrementally by verifying from the end of the array backwards, updating the necessary starting point (`goal`) only when a direct jump is possible. This method efficiently determines jump feasibility using a straightforward, linear scan of the array, making it both intuitive and optimal in terms of time complexity.


The function `canJump` is designed to solve a problem commonly referred to as the "Jump Game." In this problem, you are given an array of non-negative integers `nums` where each element represents the maximum number of steps you can jump forward from that index. The goal is to determine whether it is possible to reach the last index starting from the first index.

### How the function works:
1. **Initialization**: The function initializes a variable `goal` to the last index of the array. This represents the target position we want to eventually reach, starting from the end.
2. **Backward Iteration**: The function then iterates through the array from the second-to-last element to the first. This reverse iteration is key because it checks from the end whether the start is reachable by intermediate steps.
3. **Checking Jump Reach**: For each index `i`, it checks if the current index `i` plus the maximum jump length from that index (`nums[i]`) is greater than or equal to `goal`. If it is, it updates the `goal` to the current index `i`. This update signifies that reaching the end from index `i` is feasible.
4. **Final Check**: After completing the iteration, if `goal` is equal to `0`, it means that the start index can successfully reach the last index based on the jumps possible at each step.

### Time Complexity:
The time complexity of the function is **O(n)**, where `n` is the length of the array `nums`. This is because the function iterates through the array once from end to start.

### Space Complexity:
The space complexity of the function is **O(1)**. It uses a constant amount of extra space (for the `goal` variable and the loop index `i`), regardless of the input array size.

This function efficiently determines the feasibility of reaching the end of the array using a greedy approach, where it iteratively reduces the problem size by updating the `goal` position based on reachable indices.
*/