/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    let totalCandies = n;
    let i = 1;

    while (i < n) {
        if (ratings[i] === ratings[i - 1]) {
            i++;
            continue;
        }

        let currentPeak = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            currentPeak++;
            totalCandies += currentPeak;
            i++;
        }

        if (i === n) {
            return totalCandies;
        }

        let currentValley = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            currentValley++;
            totalCandies += currentValley;
            i++;
        }

        totalCandies -= Math.min(currentPeak, currentValley);
    }

    return totalCandies;    
};

/*
The given JavaScript function `candy` is designed to solve a problem where you must distribute candies to children arranged in a line, based on their ratings. Each child must receive at least one candy, and children with higher ratings compared to their immediate neighbors should receive more candies. This solution implements a single-pass algorithm that effectively determines the minimum number of candies required.

### Code Explanation

1. **Initialization:**
   - `n`: Length of the `ratings` array.
   - `totalCandies`: Initialized to `n`, because each child receives at least one candy.
   - `i`: Loop index starting from 1 (since the comparison begins with the previous element).

2. **Processing ratings:**
   - The while loop runs as long as `i` is less than `n`.
   - If two consecutive children have the same rating (`ratings[i] === ratings[i - 1]`), just increment `i` to continue to the next child without increasing the candy count.

3. **Handling Increasing Sequences:**
   - If current rating is higher than the previous (`ratings[i] > ratings[i - 1]`), it identifies a rising slope in ratings.
   - `currentPeak`: Tracks the number of consecutive increases. For each child in the sequence, incrementally more candies are added (using the current peak length).

4. **Handling Decreasing Sequences:**
   - If current rating is lower than the previous (`ratings[i] < ratings[i - 1]`), it identifies a falling slope.
   - `currentValley`: Similar to `currentPeak`, it increments for each child in the decreasing sequence, adding more candies based on the valley length.

5. **Adjustment at Peaks:**
   - After completing either a peak or a valley, there is an adjustment with `Math.min(currentPeak, currentValley)`. This step ensures that the intersection point of the peak and valley doesn't double count the higher requirements from both sides.

### Time Complexity:

- **O(n)**: The function traverses the ratings list once. Each element is processed in constant time, resulting in a linear time complexity relative to the number of children.

### Space Complexity:

- **O(1)**: The function uses a constant amount of extra space for storing indices and counters regardless of the input size. No additional arrays or data structures proportional to the input size are used.

This method efficiently computes the minimum candies required using a single traversal and constant space, making it suitable for large inputs.


*/