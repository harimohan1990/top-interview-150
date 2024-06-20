var lengthOfLastWord = function(s) {
    s = s.trim();
    
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        }
        else if (length > 0) {
            break;
        }
    }
    
    return length;
};

/*
 Code Description:

The function `lengthOfLastWord` calculates the length of the last word in a given string `s`. Here is a step-by-step description of the code:

1. **Trimming the String:**
   - `s = s.trim();`
   - This removes any leading and trailing spaces from the string `s`.

2. **Initializing Length Variable:**
   - `let length = 0;`
   - This variable will be used to count the length of the last word.

3. **Iterating Over the String:**
   - `for (let i = s.length - 1; i >= 0; i--) {`
   - This loop starts from the end of the string and moves backwards.

4. **Counting the Last Word:**
   - `if (s[i] !== ' ') { length++; }`
     - If the current character is not a space, increment the `length` counter.
   - `else if (length > 0) { break; }`
     - If the current character is a space and the `length` counter is greater than 0, break the loop. This means we have counted all characters of the last word.

5. **Returning the Length:**
   - `return length;`
   - The function returns the length of the last word.

### Time and Space Complexity:

**Time Complexity:**
- The time complexity of this function is **O(n)**, where `n` is the length of the string `s`.
  - This is because we potentially iterate over all characters of the string once, from the end to the beginning.

**Space Complexity:**
- The space complexity of this function is **O(1)**.
  - This is because we are using a constant amount of extra space, regardless of the input size. We only use a few variables (`s`, `length`, and `i`), and no additional data structures that grow with the size of the input.


*/