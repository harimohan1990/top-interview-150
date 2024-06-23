var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};


/* 
### Description

The `longestCommonPrefix` function finds the longest common prefix string amongst an array of strings. If there is no common prefix, it returns an empty string.

### Algorithm

1. **Initialization**:
   - Initialize `pref` with the first string in the array (`strs[0]`).
   - Initialize `prefLen` with the length of `pref`.

2. **Iterate Through Strings**:
   - Loop through the array of strings starting from the second string (`i = 1` to `i < strs.length`).

3. **Prefix Matching**:
   - For each string `s` in the array, compare it with the current prefix `pref`.
   - While `pref` is not a prefix of `s` (i.e., `pref !== s.substring(0, prefLen)`):
     - Decrease the length of the prefix (`prefLen--`).
     - If `prefLen` becomes 0, return an empty string as there is no common prefix.
     - Update `pref` to be the substring of itself up to the new `prefLen`.

4. **Return Result**:
   - After iterating through all strings, return `pref` as the longest common prefix.

### Time Complexity

The time complexity of this algorithm is \(O(S)\), where \(S\) is the sum of all characters in all strings. This is because each character of each string is compared at most once.

### Space Complexity

The space complexity of this algorithm is \(O(1)\), as it uses a constant amount of additional space irrespective of the input size.

### Example

For an array of strings `["flower", "flow", "flight"]`:

1. Initialize `pref = "flower"` and `prefLen = 6`.
2. Compare with the second string "flow":
   - "flower" is not a prefix of "flow", so decrease `prefLen` to 5 ("flowe").
   - "flowe" is not a prefix of "flow", so decrease `prefLen` to 4 ("flow").
   - "flow" is a prefix of "flow", so proceed to the next string.
3. Compare with the third string "flight":
   - "flow" is not a prefix of "flight", so decrease `prefLen` to 3 ("flo").
   - "flo" is not a prefix of "flight", so decrease `prefLen` to 2 ("fl").
   - "fl" is a prefix of "flight", so the loop ends.

The longest common prefix is "fl".

*/

