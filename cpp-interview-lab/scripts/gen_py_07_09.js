const fs = require('fs');
const path = require('path');

function writeLevel(levelNum, problems) {
    const filename = `level-${levelNum < 10 ? '0' + levelNum : levelNum}.ts`;
    const filePath = path.join(__dirname, '../src/data/pythonProblems', filename);
    const content = `import { Problem } from '../types';\n\nexport const pyLevel${levelNum}Problems: Problem[] = ${JSON.stringify(problems, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Generated ${filename} with ${problems.length} problems`);
}

// Level 7: Strings & Text Manipulation
const level7 = [
    {
        id: "py-prob-07-01", levelId: "py-level-07", title: "Reverse a String", type: "coding", difficulty: "beginner", order: 1,
        description: "Given a string `S`, print its reversed version.\n\nIn Python, strings are immutable, so reverse is achieved using slice notation `s[::-1]`.",
        whyThisMatters: "String reversal with `[::-1]` is the quintessential Python string idiom.",
        concepts: ["strings", "slicing", "reversal"], prerequisites: ["strings"], learningObjectives: ["Reverse strings with slice notation"], constraints: ["Non-empty string"],
        examples: [{ input: "Python", output: "nohtyP" }],
        testCases: [
            { id: "tc1", input: "Python", expectedOutput: "nohtyP", hidden: false },
            { id: "tc2", input: "racecar", expectedOutput: "racecar", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Print reversed string\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(s[::-1])"],
        howToThink: ["s[::-1] traverses backwards from end to start."],
        approach: "Use s[::-1].", pseudocode: "print(s[::-1])", explanation: "Slice with step -1 produces a new reversed string in linear O(N) time.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(s[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Attempting s.reverse() which does not exist for strings (only lists)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["strings", "slicing"]
    },
    {
        id: "py-prob-07-02", levelId: "py-level-07", title: "Valid Palindrome String", type: "coding", difficulty: "easy", order: 2,
        description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\n**Task:**\nRead a string, filter to alphanumeric characters in lowercase, and print `True` if it is a palindrome, else `False`.",
        whyThisMatters: "LeetCode #125 Valid Palindrome is among the most frequently asked string interview questions.",
        concepts: ["palindromes", "isalnum", "two pointers"], prerequisites: ["strings"], learningObjectives: ["Filter strings with isalnum() and test palindrome"], constraints: ["ASCII string"],
        examples: [{ input: "A man, a plan, a canal: Panama", output: "True" }, { input: "race a car", output: "False" }],
        testCases: [
            { id: "tc1", input: "A man, a plan, a canal: Panama", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "race a car", expectedOutput: "False", hidden: false },
            { id: "tc3", input: " ", expectedOutput: "True", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Clean and check palindrome\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["cleaned = [c.lower() for c in s if c.isalnum()], return cleaned == cleaned[::-1]."],
        howToThink: ["Keep only c.isalnum() in lowercase, compare with reverse."],
        approach: "Filter with isalnum() and compare with reverse.", pseudocode: "cleaned = [c.lower() for c in s if c.isalnum()]\nprint(cleaned == cleaned[::-1])", explanation: "O(N) time filter and comparison.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    cleaned = [c.lower() for c in s if c.isalnum()]\n    print(cleaned == cleaned[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Not ignoring case or punctuation"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["strings", "palindromes"]
    },
    {
        id: "py-prob-07-03", levelId: "py-level-07", title: "Word Counter", type: "coding", difficulty: "beginner", order: 3,
        description: "Given a line of text, count and print the total number of words separated by whitespace.",
        whyThisMatters: "Word splitting using `.split()` handles consecutive spaces and tabs automatically.",
        concepts: ["split", "len", "strings"], prerequisites: ["strings"], learningObjectives: ["Tokenize sentences into words"], constraints: ["String input"],
        examples: [{ input: "The quick brown fox jumps over the lazy dog", output: "9" }],
        testCases: [
            { id: "tc1", input: "The quick brown fox jumps over the lazy dog", expectedOutput: "9", hidden: false },
            { id: "tc2", input: "   Spaced   out   words  ", expectedOutput: "3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    # Count words\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["len(s.split())"],
        howToThink: ["s.split() splits on whitespace, len() counts them."],
        approach: "Use len(s.split()).", pseudocode: "print(len(s.split()))", explanation: "split() ignores leading, trailing, and multiple consecutive whitespace.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    print(len(s.split()))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["split(' ') which counts empty strings between consecutive spaces"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["strings"]
    },
    {
        id: "py-prob-07-04", levelId: "py-level-07", title: "Title Case Capitalization", type: "coding", difficulty: "beginner", order: 4,
        description: "Given a sentence, convert each word so that its first letter is capitalized and all subsequent letters are lowercase.\n\nUse Python's `s.title()` method.",
        whyThisMatters: "String transformation methods like `upper()`, `lower()`, `capitalize()`, and `title()` are standard built-ins.",
        concepts: ["title", "case transformation", "strings"], prerequisites: ["strings"], learningObjectives: ["Use string case conversion methods"], constraints: ["String input"],
        examples: [{ input: "welcome to python interview lab", output: "Welcome To Python Interview Lab" }],
        testCases: [
            { id: "tc1", input: "welcome to python interview lab", expectedOutput: "Welcome To Python Interview Lab", hidden: false },
            { id: "tc2", input: "hello WORLD", expectedOutput: "Hello World", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Print title cased string\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(s.title())"],
        howToThink: ["Apply .title() method."],
        approach: "Use s.title().", pseudocode: "print(s.title())", explanation: "title() capitalizes the first character of each word and lowercases the rest.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(s.title())\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using capitalize() which only affects the first word of the entire string"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["strings"]
    },
    {
        id: "py-prob-07-05", levelId: "py-level-07", title: "Replace Substring", type: "coding", difficulty: "beginner", order: 5,
        description: "Given three space-separated tokens:\n`original_string`, `old_sub`, `new_sub`.\nReplace all occurrences of `old_sub` with `new_sub` in `original_string` using `s.replace(old, new)` and print the result.",
        whyThisMatters: "String substitution is fundamental in sanitization, templating, and text parsing.",
        concepts: ["replace", "substrings", "immutability"], prerequisites: ["strings"], learningObjectives: ["Use str.replace()"], constraints: ["Non-empty strings"],
        examples: [{ input: "banana an xx", output: "bxxxxa" }],
        testCases: [
            { id: "tc1", input: "banana an xx", expectedOutput: "bxxxxa", hidden: false },
            { id: "tc2", input: "hello_world _ -", expectedOutput: "hello-world", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        s, old, new = tokens[0], tokens[1], tokens[2]\n        # Print s with old replaced by new\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(s.replace(old, new))"],
        howToThink: ["str.replace(old, new) returns a new string with replacements."],
        approach: "Use s.replace(old, new).", pseudocode: "print(s.replace(old, new))", explanation: "replace() returns a new string because strings are immutable in Python.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        s, old, new = tokens[0], tokens[1], tokens[2]\n        print(s.replace(old, new))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Expecting replace() to mutate in-place"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["strings"]
    },
    {
        id: "py-prob-07-06", levelId: "py-level-07", title: "Character Frequency in String", type: "coding", difficulty: "beginner", order: 6,
        description: "Given a target character `C` followed by a string `S`:\nCount how many times `C` appears in `S` using Python's `s.count(C)` method.\nPrint the count.",
        whyThisMatters: "Fast linear scanning with `str.count()` replaces manual character loops.",
        concepts: ["count", "character frequency"], prerequisites: ["strings"], learningObjectives: ["Use str.count() method"], constraints: ["Single character C"],
        examples: [{ input: "a\nabracadabra", output: "5" }],
        testCases: [
            { id: "tc1", input: "a\nabracadabra", expectedOutput: "5", hidden: false },
            { id: "tc2", input: "z\nmississippi", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        ch, s = tokens[0], tokens[1]\n        print(s.count(ch))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["s.count(ch)"],
        howToThink: ["Use s.count(ch) directly."],
        approach: "Apply s.count(ch).", pseudocode: "print(s.count(ch))", explanation: "str.count() counts non-overlapping occurrences.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        ch, s = tokens[0], tokens[1]\n        print(s.count(ch))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Reversing order of target char and string"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["strings"]
    },
    {
        id: "py-prob-07-07", levelId: "py-level-07", title: "Join Words with Separator", type: "coding", difficulty: "beginner", order: 7,
        description: "In Python, joining a list of strings with a delimiter is done using `delimiter.join(list_of_strings)`.\n\n**Task:**\nRead words from input and join them with hyphens `-`.\nPrint the resulting string.",
        whyThisMatters: "In Python, `join` is a method on the delimiter string, not on the list.",
        concepts: ["join", "string concatenation", "delimiter"], prerequisites: ["strings", "lists"], learningObjectives: ["Use delimiter.join(sequence) idiom"], constraints: ["Non-empty word list"],
        examples: [{ input: "python is fun to learn", output: "python-is-fun-to-learn" }],
        testCases: [
            { id: "tc1", input: "python is fun to learn", expectedOutput: "python-is-fun-to-learn", hidden: false },
            { id: "tc2", input: "One", expectedOutput: "One", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Join with hyphen\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print('-'.join(words))"],
        howToThink: ["Use '-'.join(words)."],
        approach: "Use '-'.join(words).", pseudocode: "print('-'.join(words))", explanation: "join() precomputes total length and constructs the result in a single O(N) allocation, far faster than repeated + concatenation.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if words:\n        print('-'.join(words))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Trying words.join('-') which causes AttributeError"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["strings", "join"]
    },
    {
        id: "py-prob-07-08", levelId: "py-level-07", title: "Longest Word in Sentence", type: "coding", difficulty: "easy", order: 8,
        description: "Given a sentence, find and print the longest word.\nIf multiple words have the same maximum length, print the first one that appears.\n\nUse `max(words, key=len)`.",
        whyThisMatters: "Demonstrates key-functions: `max()` with `key=len` finds extrema by custom criteria in O(N).",
        concepts: ["key function", "max", "len"], prerequisites: ["strings"], learningObjectives: ["Use key parameter with max()"], constraints: ["Non-empty sentence"],
        examples: [{ input: "The astronomical observatory detected signals", output: "astronomical" }],
        testCases: [
            { id: "tc1", input: "The astronomical observatory detected signals", expectedOutput: "astronomical", hidden: false },
            { id: "tc2", input: "cat dog bat", expectedOutput: "cat", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Find longest word\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["max(words, key=len)"],
        howToThink: ["Use max with key=len."],
        approach: "Apply max(words, key=len).", pseudocode: "print(max(words, key=len))", explanation: "key=len instructs max() to compare words by their length rather than alphabetical order.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if words:\n        print(max(words, key=len))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Calling max(words) without key=len (which returns alphabetically largest word)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["strings", "key functions"]
    },
    {
        id: "py-prob-07-09", levelId: "py-level-07", title: "String Slicing Substrings", type: "coding", difficulty: "beginner", order: 9,
        description: "Given indices `Start` and `End` (0-based) followed by string `S`:\nExtract and print the substring `S[Start:End]` (from index `Start` up to, but not including, index `End`).",
        whyThisMatters: "Python slicing is half-open `[start:stop)`, meaning `stop - start` equals the resulting slice length.",
        concepts: ["slicing", "half-open interval"], prerequisites: ["strings"], learningObjectives: ["Understand half-open slice indexing"], constraints: ["0 <= Start <= End <= len(S)"],
        examples: [{ input: "2 5 PythonRocks", output: "tho" }],
        testCases: [
            { id: "tc1", input: "2 5 PythonRocks", expectedOutput: "tho", hidden: false },
            { id: "tc2", input: "0 4 HelloWorld", expectedOutput: "Hell", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        start, end, s = int(tokens[0]), int(tokens[1]), tokens[2]\n        print(s[start:end])\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["s[start:end]"],
        howToThink: ["Extract slice from start to end."],
        approach: "Slice s[start:end].", pseudocode: "print(s[start:end])", explanation: "Slice syntax [start:end] extracts the sub-sequence without copying beyond the bounds.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        start, end, s = int(tokens[0]), int(tokens[1]), tokens[2]\n        print(s[start:end])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Assuming the end index is included"], timeComplexity: "O(K)", spaceComplexity: "O(K)", interviewRelevance: "low", tags: ["slicing", "strings"]
    },
    {
        id: "py-prob-07-10", levelId: "py-level-07", title: "Run-Length Encoding Compression", type: "coding", difficulty: "medium", order: 10,
        description: "Given a non-empty string `S`, perform basic Run-Length Encoding:\nReplace consecutive repeated characters with the character followed by its count.\n(e.g. `'aabcccccaaa'` becomes `'a2b1c5a3'`).",
        whyThisMatters: "Run-length encoding is a classic two-pointer / linear-scan string interview challenge.",
        concepts: ["compression", "linear scan", "strings"], prerequisites: ["strings", "loops"], learningObjectives: ["Implement run-length encoding"], constraints: ["Non-empty alphabetic string"],
        examples: [{ input: "aabcccccaaa", output: "a2b1c5a3" }],
        testCases: [
            { id: "tc1", input: "aabcccccaaa", expectedOutput: "a2b1c5a3", hidden: false },
            { id: "tc2", input: "abc", expectedOutput: "a1b1c1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Compress string\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Loop through s tracking current char and consecutive count."],
        howToThink: ["When char changes or string ends, append char + str(count) to result list, join at end."],
        approach: "Iterate and count run lengths.", pseudocode: "res = []\ni = 0\nwhile i < len(s):\n    c = s[i]\n    cnt = 0\n    while i < len(s) and s[i] == c: cnt += 1; i += 1\n    res.append(f'{c}{cnt}')\nprint(''.join(res))", explanation: "Two-pointer while loop compresses runs in linear O(N) time.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    res = []\n    i = 0\n    n = len(s)\n    while i < n:\n        c = s[i]\n        cnt = 0\n        while i < n and s[i] == c:\n            cnt += 1\n            i += 1\n        res.append(f'{c}{cnt}')\n    print(''.join(res))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Off-by-one error on the final run"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["compression", "strings"]
    }
];

// Level 8: Tuples & Sets
const level8 = [
    {
        id: "py-prob-08-01", levelId: "py-level-08", title: "Tuple Coordinates & Manhattan Distance", type: "coding", difficulty: "beginner", order: 1,
        description: "Tuples `(x, y)` represent immutable points in 2D space.\n\n**Task:**\nRead four integers `X1 Y1 X2 Y2`. Unpack into tuples `p1 = (x1, y1)` and `p2 = (x2, y2)`.\nCalculate and print the Manhattan distance: `|x1 - x2| + |y1 - y2|`.",
        whyThisMatters: "Tuples are immutable, hashable, and commonly used as coordinate keys in grid graph searches.",
        concepts: ["tuples", "immutability", "manhattan distance"], prerequisites: ["tuples"], learningObjectives: ["Create and unpack coordinate tuples"], constraints: ["Integer coordinates"],
        examples: [{ input: "0 0 3 4", output: "7" }],
        testCases: [
            { id: "tc1", input: "0 0 3 4", expectedOutput: "7", hidden: false },
            { id: "tc2", input: "-2 5 3 -1", expectedOutput: "11", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 4:\n        p1 = (nums[0], nums[1])\n        p2 = (nums[2], nums[3])\n        # Print Manhattan distance\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])"],
        howToThink: ["Manhattan distance is sum of absolute coordinate differences."],
        approach: "Calculate abs(x1 - x2) + abs(y1 - y2).", pseudocode: "print(abs(x1 - x2) + abs(y1 - y2))", explanation: "L1 norm (Manhattan distance) between two 2D points.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 4:\n        x1, y1, x2, y2 = nums[0], nums[1], nums[2], nums[3]\n        print(abs(x1 - x2) + abs(y1 - y2))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using Euclidean distance sqrt(dx^2 + dy^2) instead of Manhattan distance"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["tuples", "geometry"]
    },
    {
        id: "py-prob-08-02", levelId: "py-level-08", title: "Count Unique Elements", type: "coding", difficulty: "beginner", order: 2,
        description: "Given a list of integers containing duplicates, count how many distinct unique numbers are present.\n\nIn Python, passing a list to `set(arr)` removes all duplicates in O(N) time.",
        whyThisMatters: "Sets provide instantaneous duplicate removal and O(1) membership checking.",
        concepts: ["sets", "uniqueness", "set()"], prerequisites: ["sets"], learningObjectives: ["Convert list to set to find unique count"], constraints: ["List of integers"],
        examples: [{ input: "1 2 2 3 4 4 4 5", output: "5" }],
        testCases: [
            { id: "tc1", input: "1 2 2 3 4 4 4 5", expectedOutput: "5", hidden: false },
            { id: "tc2", input: "10 10 10 10", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print count of unique elements\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["len(set(nums))"],
        howToThink: ["Converting to a set discards all duplicates."],
        approach: "Use len(set(nums)).", pseudocode: "print(len(set(nums)))", explanation: "Sets maintain unique keys using internal hash tables in O(N).",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(len(set(nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Manual nested loop checking for duplicates in O(N^2)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sets"]
    },
    {
        id: "py-prob-08-03", levelId: "py-level-08", title: "Set Intersection", type: "coding", difficulty: "easy", order: 3,
        description: "Given two lists of integers on separate lines:\nFind all numbers that appear in both lists (set intersection `&`).\nPrint the common numbers in ascending sorted order space-separated. (If empty, print nothing).",
        whyThisMatters: "Intersection is the foundational set operation used in search engines and matching algorithms.",
        concepts: ["intersection", "set operations", "& operator"], prerequisites: ["sets"], learningObjectives: ["Compute set intersection & and sort results"], constraints: ["Integer lists"],
        examples: [{ input: "1 2 3 4 5\n3 4 5 6 7", output: "3 4 5" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5\n3 4 5 6 7", expectedOutput: "3 4 5", hidden: false },
            { id: "tc2", input: "1 2\n3 4", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        # Print sorted intersection\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["common = sorted(a & b), print(*common)."],
        howToThink: ["a & b gives intersection. Sort with sorted()."],
        approach: "Use set operator a & b and sorted().", pseudocode: "print(*sorted(a & b))", explanation: "Set intersection runs in O(min(len(A), len(B))) time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        common = sorted(a & b)\n        print(*common)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to sort the resulting set (sets are unordered)"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sets", "intersection"]
    },
    {
        id: "py-prob-08-04", levelId: "py-level-08", title: "Set Union", type: "coding", difficulty: "easy", order: 4,
        description: "Given two lists of integers on separate lines:\nFind all distinct numbers present in either list (set union `|`).\nPrint the elements in ascending sorted order space-separated.",
        whyThisMatters: "Union merges disjoint collections while automatically preserving uniqueness.",
        concepts: ["union", "set operations", "| operator"], prerequisites: ["sets"], learningObjectives: ["Compute set union |"], constraints: ["Integer lists"],
        examples: [{ input: "1 2 3\n3 4 5", output: "1 2 3 4 5" }],
        testCases: [
            { id: "tc1", input: "1 2 3\n3 4 5", expectedOutput: "1 2 3 4 5", hidden: false },
            { id: "tc2", input: "10 20\n30 40", expectedOutput: "10 20 30 40", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a | b))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(a | b)"],
        howToThink: ["a | b joins all unique elements."],
        approach: "Use a | b.", pseudocode: "print(*sorted(a | b))", explanation: "Union combines elements from both sets without duplicates.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a | b))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using + on sets (which raises TypeError, union is |)"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sets", "union"]
    },
    {
        id: "py-prob-08-05", levelId: "py-level-08", title: "Set Difference", type: "coding", difficulty: "easy", order: 5,
        description: "Given two lists of integers on separate lines, `A` and `B`:\nFind all numbers that are in `A` but NOT in `B` (set difference `A - B`).\nPrint the resulting numbers in ascending sorted order space-separated.",
        whyThisMatters: "Set difference instantly answers questions like 'which users did not complete task X?'.",
        concepts: ["set difference", "- operator", "filtering"], prerequisites: ["sets"], learningObjectives: ["Compute set difference A - B"], constraints: ["Integer lists"],
        examples: [{ input: "1 2 3 4 5\n2 4", output: "1 3 5" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5\n2 4", expectedOutput: "1 3 5", hidden: false },
            { id: "tc2", input: "1 2\n1 2 3", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a - b))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(a - b)"],
        howToThink: ["a - b removes all elements found in b from a."],
        approach: "Apply difference operator a - b.", pseudocode: "print(*sorted(a - b))", explanation: "Returns all elements belonging to a that do not belong to b.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a - b))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Confusing a - b with b - a"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sets"]
    },
    {
        id: "py-prob-08-06", levelId: "py-level-08", title: "Subset Check", type: "coding", difficulty: "easy", order: 6,
        description: "Given two lists of integers on separate lines, `A` and `B`:\nCheck if `A` is a subset of `B` (i.e. every element in `A` is also in `B`).\nPrint `True` if `A.issubset(B)` (or `set(A) <= set(B)`), otherwise print `False`.",
        whyThisMatters: "Validating permissions, prerequisites, and containment rules uses subset logic.",
        concepts: ["subset", "<= operator", "issubset"], prerequisites: ["sets"], learningObjectives: ["Use issubset() method and <= operator"], constraints: ["Integer lists"],
        examples: [{ input: "1 2\n1 2 3 4", output: "True" }, { input: "1 5\n1 2 3 4", output: "False" }],
        testCases: [
            { id: "tc1", input: "1 2\n1 2 3 4", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "1 5\n1 2 3 4", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.issubset(b))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["a.issubset(b) or a <= b"],
        howToThink: ["Test if a is completely contained within b."],
        approach: "Use a.issubset(b).", pseudocode: "print(a.issubset(b))", explanation: "issubset checks if all members of set A exist in set B.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.issubset(b))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Checking b.issubset(a) instead of a.issubset(b)"], timeComplexity: "O(len(A))", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sets", "subsets"]
    },
    {
        id: "py-prob-08-07", levelId: "py-level-08", title: "Symmetric Difference", type: "coding", difficulty: "easy", order: 7,
        description: "Given two lists on separate lines:\nFind all elements that are in either list, but NOT in both (symmetric difference `^`).\nPrint the resulting elements sorted in ascending order.",
        whyThisMatters: "Symmetric difference finds elements unique to one collection or the other (XOR for sets).",
        concepts: ["symmetric difference", "^ operator"], prerequisites: ["sets"], learningObjectives: ["Compute symmetric difference with ^"], constraints: ["Integer lists"],
        examples: [{ input: "1 2 3\n3 4 5", output: "1 2 4 5" }],
        testCases: [
            { id: "tc1", input: "1 2 3\n3 4 5", expectedOutput: "1 2 4 5", hidden: false },
            { id: "tc2", input: "1 2\n1 2", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a ^ b))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(a ^ b)"],
        howToThink: ["a ^ b gives elements in a or b but not both."],
        approach: "Use a ^ b.", pseudocode: "print(*sorted(a ^ b))", explanation: "Equivalent to (A | B) - (A & B).",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a ^ b))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Confusing symmetric difference with union"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sets"]
    },
    {
        id: "py-prob-08-08", levelId: "py-level-08", title: "Find the Missing Number (1 to N)", type: "coding", difficulty: "easy", order: 8,
        description: "You are given an integer `N`, followed by `N - 1` distinct numbers from the range `1` to `N`.\nExactly one number from `1` to `N` is missing.\nFind and print the missing number.",
        whyThisMatters: "LeetCode #268 Missing Number. Can be solved with sets or Gaussian expected sum `N*(N+1)//2 - sum(arr)` in O(1) space.",
        concepts: ["missing number", "gauss sum", "sets"], prerequisites: ["sets", "math"], learningObjectives: ["Find missing element using sum formula or sets"], constraints: ["N >= 2"],
        examples: [{ input: "5\n1 2 4 5", output: "3" }],
        testCases: [
            { id: "tc1", input: "5\n1 2 4 5", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "3\n2 3", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        arr = tokens[1:]\n        # Find missing number\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["expected = n * (n + 1) // 2. missing = expected - sum(arr)."],
        howToThink: ["Sum of 1 to N minus actual sum gives the missing number."],
        approach: "Use expected sum formula.", pseudocode: "expected = n * (n + 1) // 2\nprint(expected - sum(arr))", explanation: "Total sum minus array sum is the missing number in O(N) time and O(1) space.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        arr = tokens[1:]\n        expected = n * (n + 1) // 2\n        print(expected - sum(arr))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting array in O(N log N) when O(N) math is available"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["math", "interviews"]
    },
    {
        id: "py-prob-08-09", levelId: "py-level-08", title: "First Duplicate Element", type: "coding", difficulty: "easy", order: 9,
        description: "Given an array of integers, traverse it from left to right.\nPrint the first number that appears for a second time.\nIf all elements are unique, print `-1`.",
        whyThisMatters: "Using a `seen` set for instant O(1) lookup during linear scan is one of the most common interview patterns.",
        concepts: ["seen set", "hash lookup", "duplicates"], prerequisites: ["sets"], learningObjectives: ["Track visited elements using a hash set"], constraints: ["List of integers"],
        examples: [{ input: "2 1 3 5 3 2", output: "3" }, { input: "1 2 3 4", output: "-1" }],
        testCases: [
            { id: "tc1", input: "2 1 3 5 3 2", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "1 2 3 4", expectedOutput: "-1", hidden: false },
            { id: "tc3", input: "5 5", expectedOutput: "5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Find first duplicate\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["seen = set(). For x in nums: if x in seen: return x; seen.add(x)."],
        howToThink: ["Iterate through list, if x is already in seen set, that's our answer."],
        approach: "Maintain seen set during linear scan.", pseudocode: "seen = set()\nfor x in nums:\n    if x in seen: print(x); return\n    seen.add(x)\nprint(-1)", explanation: "set.add() and in operations are O(1) on average.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    seen = set()\n    for x in nums:\n        if x in seen:\n            print(x)\n            return\n        seen.add(x)\n    print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Returning the first duplicate by index value instead of first recurrence in traversal order"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sets", "hash set"]
    },
    {
        id: "py-prob-08-10", levelId: "py-level-08", title: "Disjoint Sets Check", type: "coding", difficulty: "easy", order: 10,
        description: "Given two lists on separate lines:\nCheck if they are disjoint (i.e. have NO common elements).\nPrint `True` if `a.isdisjoint(b)`, otherwise print `False`.",
        whyThisMatters: "Fast collision detection and independence testing.",
        concepts: ["isdisjoint", "set predicates"], prerequisites: ["sets"], learningObjectives: ["Use set.isdisjoint()"], constraints: ["Integer lists"],
        examples: [{ input: "1 2 3\n4 5 6", output: "True" }, { input: "1 2 3\n3 4 5", output: "False" }],
        testCases: [
            { id: "tc1", input: "1 2 3\n4 5 6", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "1 2 3\n3 4 5", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.isdisjoint(b))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["a.isdisjoint(b)"],
        howToThink: ["Test if sets share zero elements."],
        approach: "Use a.isdisjoint(b).", pseudocode: "print(a.isdisjoint(b))", explanation: "Short-circuits immediately upon finding the first shared item.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.isdisjoint(b))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["len(a & b) == 0 computes the full intersection, whereas isdisjoint short-circuits"], timeComplexity: "O(min(len(A), len(B)))", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sets"]
    }
];

// Level 9: Dictionaries & Key-Value Pairs
const level9 = [
    {
        id: "py-prob-09-01", levelId: "py-level-09", title: "Word Frequency Counter", type: "coding", difficulty: "easy", order: 1,
        description: "Given a sentence, count how many times each word appears.\nPrint each word and its frequency in alphabetical order:\n`<word>: <count>`\non separate lines.",
        whyThisMatters: "Frequency counting using dictionaries is required in ~30% of all interview questions.",
        concepts: ["dictionaries", "frequency map", "key sorting"], prerequisites: ["dictionaries"], learningObjectives: ["Build frequency map using dict and iterate sorted keys"], constraints: ["Words contain letters only"],
        examples: [{ input: "apple banana apple cherry banana apple", output: "apple: 3\nbanana: 2\ncherry: 1" }],
        testCases: [
            { id: "tc1", input: "apple banana apple cherry banana apple", expectedOutput: "apple: 3\nbanana: 2\ncherry: 1", hidden: false },
            { id: "tc2", input: "hello world", expectedOutput: "hello: 1\nworld: 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Count frequencies and print sorted\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["counts = {}\nfor w in words: counts[w] = counts.get(w, 0) + 1\nfor k in sorted(counts): print(f'{k}: {counts[k]}')"],
        howToThink: ["Count with counts.get(w, 0) + 1, then sort keys."],
        approach: "Dict frequency count and sorted output.", pseudocode: "counts = {}\nfor w in words: counts[w] = counts.get(w, 0) + 1\nfor k in sorted(counts): print(f'{k}: {counts[k]}')", explanation: "dict.get(key, 0) returns 0 if key does not exist yet.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if not words:\n        return\n    counts = {}\n    for w in words:\n        counts[w] = counts.get(w, 0) + 1\n    for k in sorted(counts):\n        print(f'{k}: {counts[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["KeyError when accessing uninitialized dictionary key"], timeComplexity: "O(N log U)", spaceComplexity: "O(U)", interviewRelevance: "high", tags: ["dictionaries", "frequency"]
    },
    {
        id: "py-prob-09-02", levelId: "py-level-09", title: "Most Frequent Character", type: "coding", difficulty: "easy", order: 2,
        description: "Given a non-empty string, find the character that appears most frequently.\nIf multiple characters have the same maximum frequency, return the one that appears first alphabetically.",
        whyThisMatters: "Combines frequency counting with multi-criterion sorting (count descending, alphabetical ascending).",
        concepts: ["dictionaries", "frequency", "tie-breaking"], prerequisites: ["dictionaries"], learningObjectives: ["Find mode of a collection with tie-breaking"], constraints: ["Non-empty string"],
        examples: [{ input: "abracadabra", output: "a" }],
        testCases: [
            { id: "tc1", input: "abracadabra", expectedOutput: "a", hidden: false },
            { id: "tc2", input: "bbaac", expectedOutput: "a", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Find most frequent character\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Count characters in dict. Sort keys by (-count, char)."],
        howToThink: ["Sort candidate chars with key=lambda c: (-counts[c], c)."],
        approach: "Dict count with key lambda for tie-breaking.", pseudocode: "counts = {}\nfor c in s: counts[c] = counts.get(c, 0) + 1\nbest = min(counts.keys(), key=lambda c: (-counts[c], c))\nprint(best)", explanation: "Tuple key (-count, char) maximizes count while breaking ties alphabetically.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    counts = {}\n    for c in s:\n        counts[c] = counts.get(c, 0) + 1\n    best = min(counts.keys(), key=lambda c: (-counts[c], c))\n    print(best)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing tie-breaker when multiple characters have the same highest frequency"], timeComplexity: "O(N)", spaceComplexity: "O(U)", interviewRelevance: "high", tags: ["dictionaries"]
    },
    {
        id: "py-prob-09-03", levelId: "py-level-09", title: "Invert a Dictionary", type: "coding", difficulty: "easy", order: 3,
        description: "Given unique key-value pairs formatted as `key value key value...`:\nInvert the dictionary so that values become keys and keys become values.\nPrint the inverted mapping sorted by new keys:\n`<new_key>: <new_val>`.",
        whyThisMatters: "Dict comprehension `{v: k for k, v in d.items()}` is a core idiom for bidirectional lookups.",
        concepts: ["dict comprehension", "items()", "inversion"], prerequisites: ["dictionaries"], learningObjectives: ["Invert key-value mappings using dict comprehension"], constraints: ["All keys and values are unique"],
        examples: [{ input: "a 1 b 2 c 3", output: "1: a\n2: b\n3: c" }],
        testCases: [
            { id: "tc1", input: "a 1 b 2 c 3", expectedOutput: "1: a\n2: b\n3: c", hidden: false },
            { id: "tc2", input: "x 10 y 20", expectedOutput: "10: x\n20: y", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Invert mapping\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["{v: k for k, v in d.items()}"],
        howToThink: ["Pair tokens into dict, swap k and v with comprehension."],
        approach: "Use {v: k for k, v in d.items()}.", pseudocode: "d = {tokens[i]: tokens[i+1] for i in range(0, len(tokens), 2)}\ninv = {v: k for k, v in d.items()}\nfor k in sorted(inv): print(f'{k}: {inv[k]}')", explanation: "Dictionary comprehension maps values to keys cleanly.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    d = {tokens[i]: tokens[i+1] for i in range(0, len(tokens), 2)}\n    inv = {v: k for k, v in d.items()}\n    for k in sorted(inv):\n        print(f'{k}: {inv[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Trying to invert non-hashable values (lists cannot be keys)"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["dictionaries", "comprehension"]
    },
    {
        id: "py-prob-09-04", levelId: "py-level-09", title: "Safe Lookup with .get()", type: "coding", difficulty: "beginner", order: 4,
        description: "Given pairs of `key value` followed by a target query key:\nQuery the dictionary for the target key using `d.get(key, 'Not Found')`.\nPrint the value if found, otherwise print `Not Found`.",
        whyThisMatters: "Accessing `d[key]` raises `KeyError` if key is missing; `d.get(key, default)` gracefully handles missing keys.",
        concepts: ["dict.get", "default value", "KeyError"], prerequisites: ["dictionaries"], learningObjectives: ["Use dict.get() for safe lookups"], constraints: ["String keys and values"],
        examples: [{ input: "Alice 95 Bob 82 Charlie 88\nBob", output: "82" }, { input: "Alice 95 Bob 82\nDave", output: "Not Found" }],
        testCases: [
            { id: "tc1", input: "Alice 95 Bob 82 Charlie 88\nBob", expectedOutput: "82", hidden: false },
            { id: "tc2", input: "Alice 95 Bob 82\nDave", expectedOutput: "Not Found", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Last token is query, preceding pairs form dict\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["query = tokens[-1], pairs = tokens[:-1]. Use d.get(query, 'Not Found')."],
        howToThink: ["Build dict from pairs, query with d.get(query, 'Not Found')."],
        approach: "Build dict and query using get().", pseudocode: "print(d.get(query, 'Not Found'))", explanation: "dict.get() avoids crash on absent key.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3 and len(tokens) % 2 == 1:\n        query = tokens[-1]\n        pairs = tokens[:-1]\n        d = {pairs[i]: pairs[i+1] for i in range(0, len(pairs), 2)}\n        print(d.get(query, 'Not Found'))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using d[query] causing KeyError crash"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["dictionaries"]
    },
    {
        id: "py-prob-09-05", levelId: "py-level-09", title: "Merge Dictionaries by Summing Values", type: "coding", difficulty: "easy", order: 5,
        description: "You are given two sets of inventory mappings: `item quantity`.\nMerge the two inventories. If an item appears in both, sum their quantities.\nPrint the merged items in alphabetical order:\n`<item>: <total_quantity>`.",
        whyThisMatters: "Data aggregation and grouping are standard database and interview problem patterns.",
        concepts: ["merging", "aggregation", "dictionaries"], prerequisites: ["dictionaries"], learningObjectives: ["Merge mappings by combining values"], constraints: ["Quantities are integers"],
        examples: [{ input: "apple 5 banana 3\nbanana 4 cherry 10", output: "apple: 5\nbanana: 7\ncherry: 10" }],
        testCases: [
            { id: "tc1", input: "apple 5 banana 3\nbanana 4 cherry 10", expectedOutput: "apple: 5\nbanana: 7\ncherry: 10", hidden: false },
            { id: "tc2", input: "book 2\npen 5", expectedOutput: "book: 2\npen: 5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Merge inventories\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["inv[item] = inv.get(item, 0) + int(qty)"],
        howToThink: ["Iterate through pairs, accumulate quantities into dict."],
        approach: "Accumulate into dict with get(k, 0) + qty.", pseudocode: "inv = {}\nfor i in range(0, len(tokens), 2):\n    inv[k] = inv.get(k, 0) + int(v)\nfor k in sorted(inv): print(f'{k}: {inv[k]}')", explanation: "Standard hash map reduction pattern.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    inv = {}\n    for i in range(0, len(tokens) - 1, 2):\n        item = tokens[i]\n        qty = int(tokens[i+1])\n        inv[item] = inv.get(item, 0) + qty\n    for k in sorted(inv):\n        print(f'{k}: {inv[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Overwriting values instead of adding them"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["dictionaries", "aggregation"]
    },
    {
        id: "py-prob-09-06", levelId: "py-level-09", title: "Group Words by Length", type: "coding", difficulty: "easy", order: 6,
        description: "Given a list of words, group them by their length into a dictionary of lists.\nPrint the groups sorted by length ascending in format:\n`<length>: <word1> <word2>...`",
        whyThisMatters: "Grouping by key (`dict[key].append(val)`) is the foundation of bucketing and Hash Table grouping (like Group Anagrams).",
        concepts: ["bucketing", "group by", "dict of lists"], prerequisites: ["dictionaries", "lists"], learningObjectives: ["Group items into dictionary of lists"], constraints: ["List of words"],
        examples: [{ input: "cat dog bird elephant ant", output: "3: cat dog ant\n4: bird\n8: elephant" }],
        testCases: [
            { id: "tc1", input: "cat dog bird elephant ant", expectedOutput: "3: cat dog ant\n4: bird\n8: elephant", hidden: false },
            { id: "tc2", input: "a bb ccc", expectedOutput: "1: a\n2: bb\n3: ccc", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Group by length\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["groups.setdefault(len(w), []).append(w)"],
        howToThink: ["Dict mapping int length -> list of words."],
        approach: "Use dict of lists.", pseudocode: "groups = {}\nfor w in words:\n    groups.setdefault(len(w), []).append(w)\nfor L in sorted(groups):\n    print(f'{L}: {\" \".join(groups[L])}')", explanation: "setdefault() initializes empty list on first access.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if not words:\n        return\n    groups = {}\n    for w in words:\n        groups.setdefault(len(w), []).append(w)\n    for L in sorted(groups):\n        print(f'{L}: {\" \".join(groups[L])}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting words inside groups when original order is expected"], timeComplexity: "O(N log K)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["dictionaries", "grouping"]
    },
    {
        id: "py-prob-09-07", levelId: "py-level-09", title: "Two Sum with Hash Map", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #1 Two Sum.\nGiven a target `T` followed by an array of integers `arr`:\nFind two distinct 0-based indices `i` and `j` (`i < j`) such that `arr[i] + arr[j] == T`.\nPrint `i j`. (Assume exactly one valid pair exists).",
        whyThisMatters: "Two Sum is the single most iconic technical interview problem in history.",
        concepts: ["two sum", "hash map", "complement search"], prerequisites: ["dictionaries"], learningObjectives: ["Solve Two Sum in O(N) using a dictionary"], constraints: ["Exactly one solution exists"],
        examples: [{ input: "9\n2 7 11 15", output: "0 1" }, { input: "6\n3 2 4", output: "1 2" }],
        testCases: [
            { id: "tc1", input: "9\n2 7 11 15", expectedOutput: "0 1", hidden: false },
            { id: "tc2", input: "6\n3 2 4", expectedOutput: "1 2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        nums = tokens[1:]\n        # Two sum with hash map\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["seen = {}. For idx, x in enumerate(nums): complement = target - x. If complement in seen: return seen[complement], idx. seen[x] = idx."],
        howToThink: ["For each number, check if target - number is already in our hash map."],
        approach: "Hash map storing value -> index.", pseudocode: "seen = {}\nfor idx, x in enumerate(nums):\n    diff = target - x\n    if diff in seen:\n        print(seen[diff], idx); return\n    seen[x] = idx", explanation: "Reduces O(N^2) double loop to single pass O(N) using O(1) dictionary lookups.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        nums = tokens[1:]\n        seen = {}\n        for idx, x in enumerate(nums):\n            diff = target - x\n            if diff in seen:\n                print(seen[diff], idx)\n                return\n            seen[x] = idx\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using the same index twice (e.g. 3 + 3 = 6 using index 0 twice)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["two sum", "hash map", "must-know"]
    },
    {
        id: "py-prob-09-08", levelId: "py-level-09", title: "Sort Dictionary by Values Descending", type: "coding", difficulty: "easy", order: 8,
        description: "Given pairs of `name score`:\nPrint the names sorted by their score in descending order (highest score first).\nIf scores are tied, sort names alphabetically ascending.\n`<name>: <score>` on separate lines.",
        whyThisMatters: "Multi-attribute sorting with `key=lambda x: (-x[1], x[0])` is standard for leaderboards.",
        concepts: ["sorting dicts", "key lambdas", "leaderboard"], prerequisites: ["dictionaries", "sorting"], learningObjectives: ["Sort dictionary items by values with tie-breaking"], constraints: ["Scores are integers"],
        examples: [{ input: "Alice 80 Bob 95 Charlie 80", output: "Bob: 95\nAlice: 80\nCharlie: 80" }],
        testCases: [
            { id: "tc1", input: "Alice 80 Bob 95 Charlie 80", expectedOutput: "Bob: 95\nAlice: 80\nCharlie: 80", hidden: false },
            { id: "tc2", input: "X 50 Y 100", expectedOutput: "Y: 100\nX: 50", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Sort by score desc, then name asc\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(items, key=lambda item: (-item[1], item[0]))"],
        howToThink: ["Convert items to list of (name, int(score)), sort with lambda."],
        approach: "Sort items with tuple key (-score, name).", pseudocode: "items = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\nitems.sort(key=lambda x: (-x[1], x[0]))\nfor name, score in items: print(f'{name}: {score}')", explanation: "Negating the integer score sorts descending while the string name sorts ascending.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    items = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\n    items.sort(key=lambda x: (-x[1], x[0]))\n    for name, score in items:\n        print(f'{name}: {score}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting scores alphabetically (e.g. '100' < '50') instead of converting to int"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["dictionaries", "sorting"]
    },
    {
        id: "py-prob-09-09", levelId: "py-level-09", title: "Dictionary Comprehension Squares", type: "coding", difficulty: "beginner", order: 9,
        description: "Given an integer `N`, construct a dictionary mapping each number `x` from `1` to `N` to its square `x**2` using a dictionary comprehension:\n`{x: x**2 for x in range(1, N + 1)}`\n\nPrint each mapping line-by-line as `<x>: <x**2>`.",
        whyThisMatters: "Dictionary comprehensions are expressive, idiomatic, and fast.",
        concepts: ["dict comprehension", "mapping"], prerequisites: ["dictionaries"], learningObjectives: ["Construct dictionaries using comprehension syntax"], constraints: ["1 <= N <= 20"],
        examples: [{ input: "4", output: "1: 1\n2: 4\n3: 9\n4: 16" }],
        testCases: [
            { id: "tc1", input: "4", expectedOutput: "1: 1\n2: 4\n3: 9\n4: 16", hidden: false },
            { id: "tc2", input: "2", expectedOutput: "1: 1\n2: 4", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Use dict comprehension\n    squares = {x: x**2 for x in range(1, n + 1)}\n    for k, v in squares.items():\n        print(f'{k}: {v}')\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["{x: x**2 for x in range(1, n + 1)}"],
        howToThink: ["Use dict comprehension syntax {k: v for ...}."],
        approach: "Dict comprehension.", pseudocode: "squares = {x: x**2 for x in range(1, n + 1)}\nfor k, v in squares.items(): print(f'{k}: {v}')", explanation: "Synthesizes lookup tables concisely.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        squares = {x: x**2 for x in range(1, n + 1)}\n        for k, v in squares.items():\n            print(f'{k}: {v}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using parentheses (generator) instead of braces {}"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["comprehensions"]
    },
    {
        id: "py-prob-09-10", levelId: "py-level-09", title: "Nested Dictionary User Query", type: "coding", difficulty: "easy", order: 10,
        description: "Consider a nested user database:\nGiven query `username field` from input:\nDatabase records:\n- `alice`: `email: alice@example.com`, `role: admin`\n- `bob`: `email: bob@example.com`, `role: user`\n\nPrint the requested field value, or `Unknown` if either the user or field does not exist.",
        whyThisMatters: "Nested dictionary access simulates JSON response traversal common in real-world systems.",
        concepts: ["nested dicts", "safe navigation", "json traversal"], prerequisites: ["dictionaries"], learningObjectives: ["Safely traverse nested dictionaries"], constraints: ["String queries"],
        examples: [{ input: "alice role", output: "admin" }, { input: "bob email", output: "bob@example.com" }, { input: "charlie email", output: "Unknown" }],
        testCases: [
            { id: "tc1", input: "alice role", expectedOutput: "admin", hidden: false },
            { id: "tc2", input: "bob email", expectedOutput: "bob@example.com", hidden: false },
            { id: "tc3", input: "charlie email", expectedOutput: "Unknown", hidden: false }
        ],
        starterCode: "import sys\n\nDB = {\n    'alice': {'email': 'alice@example.com', 'role': 'admin'},\n    'bob': {'email': 'bob@example.com', 'role': 'user'}\n}\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        user, field = tokens[0], tokens[1]\n        # Safe lookup in DB\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["DB.get(user, {}).get(field, 'Unknown')"],
        howToThink: ["Chain .get() to safely traverse nested dicts."],
        approach: "Chained get() calls.", pseudocode: "print(DB.get(user, {}).get(field, 'Unknown'))", explanation: "DB.get(user, {}) returns an empty dict if user is missing, allowing the second .get(field) to return 'Unknown' cleanly.",
        solution: "import sys\n\nDB = {\n    'alice': {'email': 'alice@example.com', 'role': 'admin'},\n    'bob': {'email': 'bob@example.com', 'role': 'user'}\n}\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        user, field = tokens[0], tokens[1]\n        print(DB.get(user, {}).get(field, 'Unknown'))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Unchecked DB[user][field] causing crash on missing keys"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["dictionaries", "nested"]
    }
];

writeLevel(7, level7);
writeLevel(8, level8);
writeLevel(9, level9);
