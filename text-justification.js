
var fullJustify = function(words, maxWidth) {
    let res = [];
    let curWords = [];
    let curLen = 0;

    for (let word of words) {
        if (curLen + word.length + curWords.length > maxWidth) {
            let totalSpaces = maxWidth - curLen;
            let gaps = curWords.length - 1;
            if (gaps === 0) {
                res.push(curWords[0] + ' '.repeat(totalSpaces));
            } else {
                let spacePerGap = Math.floor(totalSpaces / gaps);
                let extraSpaces = totalSpaces % gaps;
                let line = '';
                for (let i = 0; i < curWords.length; i++) {
                    line += curWords[i];
                    if (i < gaps) {
                        line += ' '.repeat(spacePerGap);
                        if (i < extraSpaces) {
                            line += ' ';
                        }
                    }
                }
                res.push(line);
            }
            curWords = [];
            curLen = 0;
        }
        curWords.push(word);
        curLen += word.length;
    }

    let lastLine = curWords.join(' ');
    while (lastLine.length < maxWidth) {
        lastLine += ' ';
    }
    res.push(lastLine);

    return res;
}

/*  
The function `fullJustify` is designed to format a list of words into a fully justified text with a given maximum width. Let's walk through the function step by step to understand how it works and then discuss its time and space complexity.

### Explanation of the Function

1. **Initialization**:
- `res`: an array that will store the final result of justified text lines.
- `curWords`: an array to hold the current group of words that will fit in a line.
- `curLen`: the total length of all words currently in `curWords` excluding spaces.

2. **Loop through each word**:
- For each word in the input list `words`, it checks if adding this word to the current line would exceed the `maxWidth` when considering current words and necessary spaces (`curWords.length` gives the minimum spaces needed as each word must be separated by at least one space).
- If the current word would exceed the `maxWidth`, the words in `curWords` are used to form a line before adding the current word to a new line.

3. **Forming a line when `maxWidth` is exceeded**:
- Calculate the total number of spaces required to fill the line to `maxWidth` (`totalSpaces`).
- Calculate the number of gaps between words (`gaps`).
- If there's only one word, the line consists of the word followed by necessary spaces.
- Otherwise, distribute the spaces: calculate a base number of spaces for each gap and distribute any extra spaces to the gaps from the left to right.

4. **Adding the last line**:
- After the loop, any remaining words in `curWords` are joined with a single space between them. Extra spaces are added at the end to reach `maxWidth`.

5. **Return the result**:
- The `res` array, which contains all the justified lines, is returned.

### Time Complexity

- **O(n)**: Each word is processed individually once. The joining of words and adding spaces involves traversing the words and gaps at most twice (once for determining space distribution and once for creating the final string for each line).
- This leads to a linear complexity in terms of the number of words, with some additional operations for handling spaces which do not significantly affect the overall linear behavior.

### Space Complexity

- **O(n)**: Space is required for storing the result and the current line's words.
- The space for `res` can grow up to the number of words in the worst-case scenario where each word is on a new line (if `maxWidth` is very small relative to word lengths).
- Temporary space for `curWords` and processing spaces also scales with the number of words but is cleaned up after each line is formed.

In summary, the function `fullJustify` efficiently formats words into a justified text layout by carefully calculating space distribution among words in a line, ensuring that each line reaches the specified maximum width, except for the last line which is left-justified. Its performance is optimized for processing where the time and space complexities are both linear relative to the input size.

*/