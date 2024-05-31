function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0

    let i = 0; // Initialize the pointer for the place of the last unique element

    for (let j = 1; j < nums.length; j++) {
        // Iterate through the array starting from the second element
        if (nums[j] !== nums[i]) {
            // If the current element is different from the last unique element,
            i++; // move the unique pointer forward
            nums[i] = nums[j]; // and update the position with the current element
        }
    }
    return i + 1; // The length of the array with no duplicates
}

// Example usage:
const nums = [1, 1, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // Output: 4
console.log(nums.slice(0, 4)); // Output: [1, 2, 3, 4]

