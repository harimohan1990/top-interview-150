var romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
  }

  return result;
};

/*  

The `romanToInt` function converts a Roman numeral string into its corresponding integer value using a lookup table and a single pass through the string.

### Code Description
1. **Lookup Table (`sym`)**: A JavaScript object `sym` serves as a lookup table, mapping Roman numeral characters (`'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'`, `'M'`) to their corresponding integer values.

2. **Initialization (`result`)**: A variable `result` is initialized to zero. This variable will accumulate the final integer value as the string is parsed.

3. **Loop Through the String**: The function iterates over the string `s` using a `for` loop, checking each character and its subsequent character:
   - **Current and Next Value**: For each character at index `i`, the variable `cur` is assigned the integer value from the lookup table. Similarly, `next` is assigned the value of the next character in the string (if present).
   - **Comparison and Calculation**:
     - If the current value (`cur`) is less than the next value (`next`), it indicates a subtractive combination (e.g., `'IV'` is 4), so `next - cur` is added to `result` and the loop index `i` is incremented to skip the next character since it has already been processed.
     - If `cur` is not less than `next`, `cur` is added directly to `result`.

4. **Return Result**: After the loop completes, the accumulated `result` is returned.

### Time Complexity
The time complexity of the function is **O(n)**, where `n` is the length of the string `s`. This is because the function makes a single pass through the string, processing each character at most twice (once directly and once as the "next" character).

### Space Complexity
The space complexity is **O(1)**, considering:
- The space used by the `sym` lookup table is constant and does not depend on the input size.
- The space for `result`, `cur`, and `next` variables is also constant.

This function efficiently converts Roman numeral strings to integers with optimal time and minimal space usage, making it suitable for applications requiring quick conversions of Roman numerals.

*/