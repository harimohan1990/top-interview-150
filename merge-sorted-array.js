var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    console.log(nums1);  // This will output the modified nums1
};

merge([0], 0, [1], 1);
//nums1 = [1], m = 1, nums2 = [], n = 0
//nums1 = [0], m = 0, nums2 = [1], n = 1
//https://leetcode.com/problems/merge-sorted-array/description/


/* 

 the provided code implements a function called `merge` that merges two sorted arrays `nums1` and `nums2` into a single sorted array `nums1`. Here's a breakdown of how the code works:

1. **Initializing variables:**
   - `i`: This variable is initialized to `m - 1`, which represents the index of the last element in the first array `nums1` (excluding any trailing zeros).
   - `j`: This variable is initialized to `n - 1`, which represents the index of the last element in the second array `nums2`.
   - `k`: This variable is initialized to `m + n - 1`, which represents the index of the last element in the merged array that will be formed in `nums1`.

2. **Merging the arrays:**
   - The code uses a `while` loop that iterates as long as `j` (the index of the last element in `nums2`) is greater than or equal to zero. This means the loop continues as long as there are elements remaining in the second array.
   - Inside the loop, the code compares the elements at indices `i` and `j` of the two arrays.
     - If `i` is greater than or equal to zero (meaning there are still elements in `nums1`) and the element at `i` in `nums1` is greater than the element at `j` in `nums2`:
       - The larger element from `nums1` (at index `i`) is copied to the next available position (`k`) in the merged array `nums1`.
       - Both `i` and `k` are decremented to move to the next elements in the respective arrays and merged array.
     - Otherwise:
       - The larger element from `nums2` (at index `j`) is copied to the next available position (`k`) in the merged array `nums1`.
       - Both `j` and `k` are decremented to move to the next elements in the respective arrays and merged array.

3. **Handling trailing zeros in nums1:**
   - Since `nums1` might have trailing zeros allocated at the end to accommodate the elements from `nums2`, the loop might iterate even after `nums2` is exhausted (i.e., `j` becomes -1).
   - In this case, the elements that are already in `nums1` (from index 0 to `i`) are already sorted, so the loop doesn't modify them further.

Overall, the `merge` function efficiently merges two sorted arrays into a single sorted array by comparing elements from the end of each array and placing the larger element at the appropriate position in the merged array. It modifies the first array `nums1` in-place to accommodate the merged elements.


*/