var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    
    return -1;    
};

/*   
The provided function `strStr` is an implementation of a classic algorithm to find the index of the first occurrence of one string (`needle`) within another string (`haystack`). If the `needle` is not found within the `haystack`, the function returns `-1`.

### Function Description:
1. **Initial Check**: The function starts with a check to see if the `haystack` string is shorter than the `needle` string. If it is, the `needle` cannot possibly be a substring of the `haystack`, so the function returns `-1` immediately.
   
2. **Loop Through the Haystack**: The function iterates over the `haystack` string from the start up to `haystack.length - needle.length`. This ensures that there are enough characters left in the `haystack` after the current index to contain the `needle`.

3. **Substring Comparison**: During each iteration, the function checks if the substring of `haystack` starting at index `i` and having the same length as `needle` is equal to `needle`. If it finds a match, it immediately returns the index `i`.

4. **Default Return**: If the loop completes without finding the `needle`, the function returns `-1` to indicate that the `needle` was not found.

### Time Complexity:
The time complexity of this function is O((n - m) * m), where `n` is the length of the `haystack` and `m` is the length of the `needle`. This complexity arises because for each position in the `haystack` (up to `n - m` positions), it potentially compares `m` characters in the worst case (where the substring of the `haystack` does not match the `needle`).

### Space Complexity:
The space complexity of this function is O(1). No additional space proportional to the input size is used, as the substring comparison does not create new strings but only references the range of the existing string.

This function is straightforward and does not use any additional memory beyond the input strings and a few variables for iteration and indexing, making it efficient in terms of space.

*/