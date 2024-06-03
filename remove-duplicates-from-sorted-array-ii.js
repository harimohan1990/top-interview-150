
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Handle edge case for empty array

    let uniqueValue = 0;  // Location to insert the number
    let duplicateExist = 0;  // Counter for duplicates of the same number

    for (let i = 0; i < nums.length; i++) {
        // Check if it's the last element or if the current number is different from the next
        if (i === nums.length - 1 || nums[i] != nums[i + 1]) {
            nums[uniqueValue++] = nums[i];
            duplicateExist = 0;
        } else {
            // If the next number is a duplicate and we have not yet logged a duplicate
            if (duplicateExist < 1) {
                nums[uniqueValue++] = nums[i];
                duplicateExist++;
            } else {
                // Increment the duplicate counter
                duplicateExist++;
            }
        }
    }

    return uniqueValue;
};