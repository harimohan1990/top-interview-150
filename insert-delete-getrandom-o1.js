class RandomizedSet {
    constructor() {
        this.list = [];
        this.map = new Map();
    }

    search(val) {
        return this.map.has(val);
    }

    insert(val) {
        if (this.search(val)) return false;

        this.list.push(val);
        this.map.set(val, this.list.length - 1);
        return true;
    }

    remove(val) {
        if (!this.search(val)) return false;

        const index = this.map.get(val);
        this.list[index] = this.list[this.list.length - 1];
        this.map.set(this.list[index], index);
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

/* 
The `RandomizedSet` class you've implemented allows for the insertion, removal, and random access of elements with certain efficiency. Let's break down the operations and analyze their time and space complexities:

### Methods

1. **Constructor**
   - Initializes an empty list (`this.list`) and an empty hash map (`this.map`).
   - **Time Complexity:** O(1) as it's simply initializing the data structures.
   - **Space Complexity:** O(n), where n is the number of elements that will eventually be stored, due to the space required for the list and the map.

2. **search(val)**
   - Checks if a value exists in the set by querying the map.
   - **Time Complexity:** O(1) because hash map operations (`has`) are average-case constant time.
   - **Space Complexity:** O(1) as it doesn't require extra space.

3. **insert(val)**
   - Adds a value to the set if it doesn’t already exist. This method first checks for the presence of the value using `search`, then adds it to the end of the list and maps the value to its index in the list.
   - **Time Complexity:** O(1) on average because it appends to the end of a list and updates a map.
   - **Space Complexity:** O(1), assuming the list and map are already initialized and can dynamically resize.

4. **remove(val)**
   - Removes a value from the set if it exists. It retrieves the index of the value from the map, swaps the last element of the list with the element to be removed, updates the map for the swapped element, and finally removes the last element of the list and deletes the entry from the map.
   - **Time Complexity:** O(1) on average due to direct index access and updates in the map.
   - **Space Complexity:** O(1) as it rearranges existing entries without needing additional space.

5. **getRandom()**
   - Returns a random element from the set. It picks a random index and retrieves the element at that index in the list.
   - **Time Complexity:** O(1) because it uses a constant-time operation to generate a random index and another constant-time operation to retrieve an element by index.
   - **Space Complexity:** O(1) as it does not require extra space beyond the random index variable.

### Summary

The implementation is efficient, leveraging the strengths of both arrays (for random access and maintaining order) and hash maps (for fast lookup, insert, and delete operations). The combination of these two data structures allows all the main operations — insert, delete, and getRandom — to operate in constant average time, which is a significant efficiency feature for randomized sets.

*/