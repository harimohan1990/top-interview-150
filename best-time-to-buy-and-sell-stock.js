var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;    
};

/*    
The `maxProfit` function provided is designed to calculate the maximum possible profit from buying and selling a stock on different days, given an array of stock prices where each element represents the stock price on a given day.

Here's a breakdown of how the code works:

1. **Initialization:**
   - `buyPrice` is initialized to the first element of the `prices` array. This variable keeps track of the lowest price encountered so far, representing the best day to buy the stock.
   - `profit` is initialized to zero. This variable stores the maximum profit found so far.

2. **Iteration through the prices:**
   - The function uses a `for` loop starting from the second element of the array (index 1) since the first element is already used to initialize `buyPrice`.
   - Within the loop, the function checks if the current price (`prices[i]`) is lower than `buyPrice`. If it is, `buyPrice` is updated to this lower value. This step ensures that you are always considering the lowest price seen so far to calculate potential profit.
   - Next, the profit that could be made if the stock were sold on the current day (at `prices[i]`) is calculated by subtracting `buyPrice` from `prices[i]`. If this profit is greater than the current `profit`, then `profit` is updated to this higher value.

3. **Return Value:**
   - After iterating through the array, the maximum profit calculated is returned. If no profit is possible (e.g., if prices are in descending order), the function will return zero, as `profit` was initialized to zero and would never be updated.

This function is effective for scenarios where you want to determine the best day to buy and the best day to sell to maximize your return, assuming you can only complete one transaction (buy once and sell once). It uses a simple, efficient approach to track the minimum purchase price and the maximum profit simultaneously as it scans through the list of prices.

The `maxProfit` function you've written is designed to find the maximum profit from a single stock purchase and sale, given a list of daily prices. Here's how it works in terms of space and time complexity:

### Time Complexity
- **O(n):** The function iterates through the list of prices once. During each iteration, it performs a constant amount of work: updating the `buyPrice` and calculating the `profit`. Since the iteration is dependent on the length of the input array `prices`, the time complexity is linear, O(n).

### Space Complexity
- **O(1):** The function uses a fixed amount of space regardless of the input size. It maintains two variables, `buyPrice` and `profit`, and these do not scale with the size of the input array. Thus, the space complexity is constant, O(1).

This makes the function efficient, especially for large lists of stock prices, because it only requires a single pass through the data and uses minimal extra space.

*/