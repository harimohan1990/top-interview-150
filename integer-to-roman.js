
function intToRoman(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = '';
    Object.entries(map).forEach(([letter, n]) => {
        result += letter.repeat(Math.floor(num / n));
        num %= n;
    });
    return result;
}


/*
 Let's break down the `intToRoman` function and analyze its time and space complexity.

### Function Description

The `intToRoman` function converts an integer to its Roman numeral representation. It does this by using a predefined mapping of Roman numeral symbols to their respective integer values. The function iterates over this mapping, repeatedly appending the appropriate symbols to the result string until the input number is reduced to zero.

### Code Breakdown

1. **Mapping Definition**: The `map` object defines the Roman numeral symbols and their respective values in descending order.
   ```javascript
   const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
   ```

2. **Result Initialization**: An empty string `result` is initialized to build the Roman numeral representation.
   ```javascript
   let result = '';
   ```

3. **Conversion Process**:
   - The `Object.entries(map)` method converts the `map` object into an array of key-value pairs.
   - The `forEach` loop iterates over each pair (`letter`, `n`), where `letter` is the Roman numeral and `n` is its value.
   - For each pair, the Roman numeral `letter` is repeated and appended to `result` as many times as the integer `num` can be divided by `n`.
   - The integer `num` is then updated to the remainder of `num` divided by `n`.
   ```javascript
   Object.entries(map).forEach(([letter, n]) => {
       result += letter.repeat(Math.floor(num / n));
       num %= n;
   });
   ```

4. **Return Result**: The final Roman numeral string is returned.
   ```javascript
   return result;
   ```

### Time Complexity

- The loop iterates over the 13 Roman numeral symbols defined in the `map` object.
- For each symbol, the operations inside the loop (`Math.floor`, `repeat`, `+=`, and `%=`) are constant time operations, O(1).
- Therefore, the overall time complexity is determined by the fixed number of iterations and constant time operations, resulting in:

\[ \text{Time Complexity} = O(1) \]

### Space Complexity

- The space complexity is mainly determined by the space required to store the result string.
- In the worst case, the result string length will be proportional to the input integer `num`.
- For example, the number 3888 would produce the Roman numeral "MMMDCCCLXXXVIII", which has a length proportional to the size of `num`.

\[ \text{Space Complexity} = O(\log_{10}(\text{num})) \]

Here, \( \log_{10}(\text{num}) \) represents the number of digits in the input number.

### Summary

- **Time Complexity**: \( O(1) \)
- **Space Complexity**: \( O(\log_{10}(\text{num})) \)

This function is highly efficient for converting integers to Roman numerals, leveraging a direct mapping and constant-time operations within a fixed number of iterations.

*/