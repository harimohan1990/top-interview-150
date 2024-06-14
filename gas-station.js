
var canCompleteCircuit = function (gas, cost) {
    let sumCost = cost.reduce(
        (partialSum, a) => partialSum + a,
        0
    );
    let sumGas = gas.reduce(
        (partialSum, a) => partialSum + a,
        0
    );
    // Check if it is possible to complete the journey
    // based on total gas and cost.
    if (sumCost > sumGas) {
        return -1;
    }

    // Initialize variables for tracking total gas and
    // starting index.
    let currentGas = 0;
    let startingIndex = 0;

    // Iterate over all gas stations in the list.
    for (let i = 0; i < gas.length; i++) {
        // Update current gas level by adding gas and
        // subtracting cost at current station.
        currentGas = currentGas + (gas[i] - cost[i]);
        // If the current gas level is negative, reset it to
        // zero and update the starting index.
        if (currentGas < 0) {
            currentGas = 0;
            startingIndex = i + 1;
        }
    }
    // Return starting index of gas station that allows
    // journey to be completed.
    return startingIndex;
};


/*  

The provided JavaScript function `canCompleteCircuit` aims to solve the "Gas Station" problem, where one needs to determine if there's a starting gas station from which a vehicle can complete a circuit around all gas stations without running out of gas. The function receives two arrays: `gas` and `cost`. Each index `i` in these arrays represents a gas station, where `gas[i]` indicates the amount of gas available at that station, and `cost[i]` is the amount of gas required to travel from station `i` to station `i+1`.

Here's a step-by-step breakdown of the function and its complexities:

### Function Logic:

1. **Sum of Costs and Gases**: First, the function calculates the total gas available (`sumGas`) and the total cost required (`sumCost`) using the `reduce` method. This step ensures that if the total gas available is less than the total cost, the journey cannot be completed starting from any station, hence it immediately returns `-1`.

2. **Identifying the Start Station**:
    - Initialize `currentGas` to zero, which will keep track of the net gas available at each station during traversal.
    - Initialize `startingIndex` to zero, which is potentially the starting station index.
    - Traverse through each gas station:
        - Update `currentGas` by adding the difference of `gas[i]` and `cost[i]`. This reflects the net gas left when reaching the next station.
        - If `currentGas` drops below zero at any station `i`, it indicates that starting the journey from the last `startingIndex` won't be successful. Thus, set `currentGas` back to zero and move `startingIndex` to `i + 1`.

3. **Conclusion**: After completing the loop, if a valid circuit is possible, `startingIndex` will point to the correct starting gas station. Otherwise, the conditions set early in the function ensure that `-1` is returned if the total gas is insufficient.

### Time Complexity:
- **O(n)**: The function traverses the gas and cost arrays a couple of times (once for summing up and once for finding the starting index). Each traversal involves linear time complexity relative to the number of gas stations `n`.

### Space Complexity:
- **O(1)**: The function uses a constant amount of extra space regardless of the input size, as it only maintains a few variables (`sumGas`, `sumCost`, `currentGas`, `startingIndex`) for its computations.

This function efficiently determines the starting station or confirms the impossibility of completing the circuit in linear time using constant space, making it suitable for large inputs.

*/ 