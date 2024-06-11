/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>b-a)

    let i=0; 
    while(citations[i]>i) i++; 
    return i;
};

/*  

This JavaScript function, `hIndex`, calculates the h-index for an array of citations. The h-index is a metric used to measure the productivity and citation impact of the publications of a scholar. It is defined as the maximum value \( h \) such that the given author/journal has published \( h \) papers that have each been cited at least \( h \) times.

Here's a step-by-step breakdown of the code:

1. **Sorting the Array**:
   ```javascript
   citations.sort((a, b) => b - a)
   ```
   This line sorts the `citations` array in descending order. The `sort` function uses a comparator that subtracts `b` from `a`, ensuring that higher values come first.

2. **Finding the h-index**:
   ```javascript
   let i = 0;
   while (citations[i] > i) i++;
   ```
   The variable `i` is initialized to 0. The `while` loop iterates over the sorted `citations` array, and the loop continues as long as the citation count at the current index `i` is greater than `i`. The condition `citations[i] > i` ensures that we are looking for the highest `i` where the number of citations is greater than or equal to `i + 1` (since array indexing is 0-based, we use `i` directly in the condition).

3. **Returning the h-index**:
   ```javascript
   return i;
   ```
   Once the `while` loop terminates (i.e., it finds the first index `i` where `citations[i]` is not greater than `i`), it returns `i`. This value represents the h-index, as it is the largest number such that at least `i` papers have at least `i` citations each.

### Time Complexity:

- **Sorting**: The `Array.sort()` function typically has a time complexity of \( O(n \log n) \), where \( n \) is the number of elements in the array.
- **While Loop**: In the worst case, the loop runs \( n \) times if all citation values are greater than their respective indices. However, usually, it will terminate much earlier.

Thus, the overall time complexity of the function is \( O(n \log n) \).

### Space Complexity:

- **In-Place Sorting**: Since JavaScript's `Array.sort()` is performed in-place (i.e., it modifies the original array), no additional significant space is used except for the temporary variables needed for sorting.
- **Variable Storage**: Only a single extra variable `i` is used.

Hence, the space complexity of the function is \( O(1) \), indicating constant space usage beyond the input array storage.
*/