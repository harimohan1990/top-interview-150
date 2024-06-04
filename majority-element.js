var majorityElement = function(nums) {
    let count = 0;
    let candidate;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};


/*

The function `majorityElement` you provided is an implementation of the **Boyer-Moore Voting Algorithm**. This algorithm is used to find a majority element in an array, i.e., an element that appears more than `n/2` times where `n` is the size of the array. Here's how it works and its complexity analysis:

### Explanation of the Algorithm

1. **Initialization:**
   - `count` is initialized to 0. It is used to track the "strength" or the "frequency" of the candidate.
   - `candidate` is not yet defined. It will be used to store the potential majority element.

2. **Iterate Through the Array:**
   - The algorithm iterates through each element `num` in the array `nums`.
   - If `count` is zero, it sets the current number `num` as the new `candidate`. This step effectively resets the candidate whenever the count drops to zero, suggesting the previous candidate is not frequent enough to be the majority.
   - It then increments or decrements `count`. If the current element `num` is the same as `candidate`, `count` is incremented; otherwise, it is decremented. This step increases the count if the current element agrees with the current candidate and decreases it otherwise.

3. **Determine Majority Element:**
   - By the end of the array, the `candidate` is considered as the potential majority element. The algorithm assumes that there is indeed a majority element in the array.

### Complexity Analysis

- **Time Complexity:** O(n)
  - The algorithm goes through the array a single time with a constant amount of work for each element, thus the time complexity is linear, O(n).

- **Space Complexity:** O(1)
  - The space used does not depend on the size of the input array, as it only uses a fixed number of variables (`count` and `candidate`), so the space complexity is constant, O(1).

### Additional Notes

- The function returns `candidate` which, according to the algorithm, should be the majority element. However, in cases where the function is expected to verify that `candidate` is indeed the majority, an additional check should be performed after the loop. This involves iterating through the array again to count occurrences of `candidate` to confirm it appears more than `n/2` times.
- This implementation assumes that there is always a majority element in the array as per the problem's typical constraints. If this is not guaranteed, the implementation needs to include the validation step mentioned above.

This algorithm is very efficient and particularly useful in scenarios where it's guaranteed that there is a majority element and quick determination is crucial.

*/