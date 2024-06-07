var maxProfit = function(prices) {
    let max = 0;
    let start = prices[0];

        for(let i = 1;i<prices.length; i++){
            if(start < prices[i]){
                max += prices[i] - start;
                // max = max+prices[i] - start;
            }
            start = prices[i];
        }
    return max;
};

/*  


### Code Explanation

1. **Initialization**:
   - `max`: This variable is initialized to `0`. It stores the total profit accumulated across transactions.
   - `start`: This variable is initialized to the first element of the `prices` array. It represents the buying price of the stock.

2. **Loop through the prices**:
   - The loop starts from the second element of the array (`i = 1`) and iterates through to the end.
   - **Inside the loop**:
     - `if(start < prices[i])`: This condition checks if the current price (`prices[i]`) is higher than the `start` price (buying price).
       - If true, it calculates the profit made from buying at `start` and selling at `prices[i]`, and adds this profit to `max`.
     - After the conditional check, `start` is updated to the current price (`prices[i]`). This step is crucial as it sets the new buying price for the next potential transaction.

3. **Return Statement**:
   - After completing the loop through all prices, the function returns the `max` value, which contains the total maximum profit possible from the given prices.

### Time Complexity

- **O(n)**: The function only contains a single loop that iterates through the list of prices once. Here, `n` represents the number of days (length of the `prices` array). Each operation inside the loop (comparison, addition, assignment) is executed in constant time.

### Space Complexity

- **O(1)**: The space complexity is constant because the function uses a fixed amount of space regardless of the input size. It only uses two variables (`max` and `start`) that store single values.



*/