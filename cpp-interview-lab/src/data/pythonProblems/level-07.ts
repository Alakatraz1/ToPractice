import { Problem } from '../types';

export const pyLevel7Problems: Problem[] = [
    {
        "id": "py-prob-07-01",
        "levelId": "py-level-07",
        "title": "Reverse a String",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Given a string `S`, print its reversed version.\n\nIn Python, strings are immutable, so reverse is achieved using slice notation `s[::-1]`.",
        "whyThisMatters": "String reversal with `[::-1]` is the quintessential Python string idiom.",
        "concepts": [
            "strings",
            "slicing",
            "reversal"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Reverse strings with slice notation"
        ],
        "constraints": [
            "Non-empty string"
        ],
        "examples": [
            {
                "input": "Python",
                "output": "nohtyP"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Python",
                "expectedOutput": "nohtyP",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "racecar",
                "expectedOutput": "racecar",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Print reversed string\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(s[::-1])"
        ],
        "howToThink": [
            "s[::-1] traverses backwards from end to start."
        ],
        "approach": "Use s[::-1].",
        "pseudocode": "print(s[::-1])",
        "explanation": "Slice with step -1 produces a new reversed string in linear O(N) time.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(s[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Attempting s.reverse() which does not exist for strings (only lists)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "strings",
            "slicing"
        ]
    },
    {
        "id": "py-prob-07-02",
        "levelId": "py-level-07",
        "title": "Valid Palindrome String",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\n**Task:**\nRead a string, filter to alphanumeric characters in lowercase, and print `True` if it is a palindrome, else `False`.",
        "whyThisMatters": "LeetCode #125 Valid Palindrome is among the most frequently asked string interview questions.",
        "concepts": [
            "palindromes",
            "isalnum",
            "two pointers"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Filter strings with isalnum() and test palindrome"
        ],
        "constraints": [
            "ASCII string"
        ],
        "examples": [
            {
                "input": "A man, a plan, a canal: Panama",
                "output": "True"
            },
            {
                "input": "race a car",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "A man, a plan, a canal: Panama",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "race a car",
                "expectedOutput": "False",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": " ",
                "expectedOutput": "True",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Clean and check palindrome\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "cleaned = [c.lower() for c in s if c.isalnum()], return cleaned == cleaned[::-1]."
        ],
        "howToThink": [
            "Keep only c.isalnum() in lowercase, compare with reverse."
        ],
        "approach": "Filter with isalnum() and compare with reverse.",
        "pseudocode": "cleaned = [c.lower() for c in s if c.isalnum()]\nprint(cleaned == cleaned[::-1])",
        "explanation": "O(N) time filter and comparison.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    cleaned = [c.lower() for c in s if c.isalnum()]\n    print(cleaned == cleaned[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Not ignoring case or punctuation"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "strings",
            "palindromes"
        ]
    },
    {
        "id": "py-prob-07-03",
        "levelId": "py-level-07",
        "title": "Word Counter",
        "type": "coding",
        "difficulty": "beginner",
        "order": 3,
        "description": "Given a line of text, count and print the total number of words separated by whitespace.",
        "whyThisMatters": "Word splitting using `.split()` handles consecutive spaces and tabs automatically.",
        "concepts": [
            "split",
            "len",
            "strings"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Tokenize sentences into words"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "The quick brown fox jumps over the lazy dog",
                "output": "9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "The quick brown fox jumps over the lazy dog",
                "expectedOutput": "9",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "   Spaced   out   words  ",
                "expectedOutput": "3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    # Count words\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "len(s.split())"
        ],
        "howToThink": [
            "s.split() splits on whitespace, len() counts them."
        ],
        "approach": "Use len(s.split()).",
        "pseudocode": "print(len(s.split()))",
        "explanation": "split() ignores leading, trailing, and multiple consecutive whitespace.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    print(len(s.split()))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "split(' ') which counts empty strings between consecutive spaces"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "strings"
        ]
    },
    {
        "id": "py-prob-07-04",
        "levelId": "py-level-07",
        "title": "Title Case Capitalization",
        "type": "coding",
        "difficulty": "beginner",
        "order": 4,
        "description": "Given a sentence, convert each word so that its first letter is capitalized and all subsequent letters are lowercase.\n\nUse Python's `s.title()` method.",
        "whyThisMatters": "String transformation methods like `upper()`, `lower()`, `capitalize()`, and `title()` are standard built-ins.",
        "concepts": [
            "title",
            "case transformation",
            "strings"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Use string case conversion methods"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "welcome to python interview lab",
                "output": "Welcome To Python Interview Lab"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "welcome to python interview lab",
                "expectedOutput": "Welcome To Python Interview Lab",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "hello WORLD",
                "expectedOutput": "Hello World",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Print title cased string\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(s.title())"
        ],
        "howToThink": [
            "Apply .title() method."
        ],
        "approach": "Use s.title().",
        "pseudocode": "print(s.title())",
        "explanation": "title() capitalizes the first character of each word and lowercases the rest.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(s.title())\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using capitalize() which only affects the first word of the entire string"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "strings"
        ]
    },
    {
        "id": "py-prob-07-05",
        "levelId": "py-level-07",
        "title": "Replace Substring",
        "type": "coding",
        "difficulty": "beginner",
        "order": 5,
        "description": "Given three space-separated tokens:\n`original_string`, `old_sub`, `new_sub`.\nReplace all occurrences of `old_sub` with `new_sub` in `original_string` using `s.replace(old, new)` and print the result.",
        "whyThisMatters": "String substitution is fundamental in sanitization, templating, and text parsing.",
        "concepts": [
            "replace",
            "substrings",
            "immutability"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Use str.replace()"
        ],
        "constraints": [
            "Non-empty strings"
        ],
        "examples": [
            {
                "input": "banana an xx",
                "output": "bxxxxa"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "banana an xx",
                "expectedOutput": "bxxxxa",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "hello_world _ -",
                "expectedOutput": "hello-world",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        s, old, new = tokens[0], tokens[1], tokens[2]\n        # Print s with old replaced by new\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(s.replace(old, new))"
        ],
        "howToThink": [
            "str.replace(old, new) returns a new string with replacements."
        ],
        "approach": "Use s.replace(old, new).",
        "pseudocode": "print(s.replace(old, new))",
        "explanation": "replace() returns a new string because strings are immutable in Python.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        s, old, new = tokens[0], tokens[1], tokens[2]\n        print(s.replace(old, new))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Expecting replace() to mutate in-place"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "strings"
        ]
    },
    {
        "id": "py-prob-07-06",
        "levelId": "py-level-07",
        "title": "Character Frequency in String",
        "type": "coding",
        "difficulty": "beginner",
        "order": 6,
        "description": "Given a target character `C` followed by a string `S`:\nCount how many times `C` appears in `S` using Python's `s.count(C)` method.\nPrint the count.",
        "whyThisMatters": "Fast linear scanning with `str.count()` replaces manual character loops.",
        "concepts": [
            "count",
            "character frequency"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Use str.count() method"
        ],
        "constraints": [
            "Single character C"
        ],
        "examples": [
            {
                "input": "a\nabracadabra",
                "output": "5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "a\nabracadabra",
                "expectedOutput": "5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "z\nmississippi",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        ch, s = tokens[0], tokens[1]\n        print(s.count(ch))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "s.count(ch)"
        ],
        "howToThink": [
            "Use s.count(ch) directly."
        ],
        "approach": "Apply s.count(ch).",
        "pseudocode": "print(s.count(ch))",
        "explanation": "str.count() counts non-overlapping occurrences.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        ch, s = tokens[0], tokens[1]\n        print(s.count(ch))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Reversing order of target char and string"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "strings"
        ]
    },
    {
        "id": "py-prob-07-07",
        "levelId": "py-level-07",
        "title": "Join Words with Separator",
        "type": "coding",
        "difficulty": "beginner",
        "order": 7,
        "description": "In Python, joining a list of strings with a delimiter is done using `delimiter.join(list_of_strings)`.\n\n**Task:**\nRead words from input and join them with hyphens `-`.\nPrint the resulting string.",
        "whyThisMatters": "In Python, `join` is a method on the delimiter string, not on the list.",
        "concepts": [
            "join",
            "string concatenation",
            "delimiter"
        ],
        "prerequisites": [
            "strings",
            "lists"
        ],
        "learningObjectives": [
            "Use delimiter.join(sequence) idiom"
        ],
        "constraints": [
            "Non-empty word list"
        ],
        "examples": [
            {
                "input": "python is fun to learn",
                "output": "python-is-fun-to-learn"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "python is fun to learn",
                "expectedOutput": "python-is-fun-to-learn",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "One",
                "expectedOutput": "One",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Join with hyphen\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print('-'.join(words))"
        ],
        "howToThink": [
            "Use '-'.join(words)."
        ],
        "approach": "Use '-'.join(words).",
        "pseudocode": "print('-'.join(words))",
        "explanation": "join() precomputes total length and constructs the result in a single O(N) allocation, far faster than repeated + concatenation.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if words:\n        print('-'.join(words))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Trying words.join('-') which causes AttributeError"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "strings",
            "join"
        ]
    },
    {
        "id": "py-prob-07-08",
        "levelId": "py-level-07",
        "title": "Longest Word in Sentence",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "Given a sentence, find and print the longest word.\nIf multiple words have the same maximum length, print the first one that appears.\n\nUse `max(words, key=len)`.",
        "whyThisMatters": "Demonstrates key-functions: `max()` with `key=len` finds extrema by custom criteria in O(N).",
        "concepts": [
            "key function",
            "max",
            "len"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Use key parameter with max()"
        ],
        "constraints": [
            "Non-empty sentence"
        ],
        "examples": [
            {
                "input": "The astronomical observatory detected signals",
                "output": "astronomical"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "The astronomical observatory detected signals",
                "expectedOutput": "astronomical",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "cat dog bat",
                "expectedOutput": "cat",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Find longest word\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "max(words, key=len)"
        ],
        "howToThink": [
            "Use max with key=len."
        ],
        "approach": "Apply max(words, key=len).",
        "pseudocode": "print(max(words, key=len))",
        "explanation": "key=len instructs max() to compare words by their length rather than alphabetical order.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if words:\n        print(max(words, key=len))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Calling max(words) without key=len (which returns alphabetically largest word)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "strings",
            "key functions"
        ]
    },
    {
        "id": "py-prob-07-09",
        "levelId": "py-level-07",
        "title": "String Slicing Substrings",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "Given indices `Start` and `End` (0-based) followed by string `S`:\nExtract and print the substring `S[Start:End]` (from index `Start` up to, but not including, index `End`).",
        "whyThisMatters": "Python slicing is half-open `[start:stop)`, meaning `stop - start` equals the resulting slice length.",
        "concepts": [
            "slicing",
            "half-open interval"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Understand half-open slice indexing"
        ],
        "constraints": [
            "0 <= Start <= End <= len(S)"
        ],
        "examples": [
            {
                "input": "2 5 PythonRocks",
                "output": "tho"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 5 PythonRocks",
                "expectedOutput": "tho",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0 4 HelloWorld",
                "expectedOutput": "Hell",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        start, end, s = int(tokens[0]), int(tokens[1]), tokens[2]\n        print(s[start:end])\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "s[start:end]"
        ],
        "howToThink": [
            "Extract slice from start to end."
        ],
        "approach": "Slice s[start:end].",
        "pseudocode": "print(s[start:end])",
        "explanation": "Slice syntax [start:end] extracts the sub-sequence without copying beyond the bounds.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3:\n        start, end, s = int(tokens[0]), int(tokens[1]), tokens[2]\n        print(s[start:end])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Assuming the end index is included"
        ],
        "timeComplexity": "O(K)",
        "spaceComplexity": "O(K)",
        "interviewRelevance": "low",
        "tags": [
            "slicing",
            "strings"
        ]
    },
    {
        "id": "py-prob-07-10",
        "levelId": "py-level-07",
        "title": "Run-Length Encoding Compression",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "Given a non-empty string `S`, perform basic Run-Length Encoding:\nReplace consecutive repeated characters with the character followed by its count.\n(e.g. `'aabcccccaaa'` becomes `'a2b1c5a3'`).",
        "whyThisMatters": "Run-length encoding is a classic two-pointer / linear-scan string interview challenge.",
        "concepts": [
            "compression",
            "linear scan",
            "strings"
        ],
        "prerequisites": [
            "strings",
            "loops"
        ],
        "learningObjectives": [
            "Implement run-length encoding"
        ],
        "constraints": [
            "Non-empty alphabetic string"
        ],
        "examples": [
            {
                "input": "aabcccccaaa",
                "output": "a2b1c5a3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "aabcccccaaa",
                "expectedOutput": "a2b1c5a3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "abc",
                "expectedOutput": "a1b1c1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Compress string\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Loop through s tracking current char and consecutive count."
        ],
        "howToThink": [
            "When char changes or string ends, append char + str(count) to result list, join at end."
        ],
        "approach": "Iterate and count run lengths.",
        "pseudocode": "res = []\ni = 0\nwhile i < len(s):\n    c = s[i]\n    cnt = 0\n    while i < len(s) and s[i] == c: cnt += 1; i += 1\n    res.append(f'{c}{cnt}')\nprint(''.join(res))",
        "explanation": "Two-pointer while loop compresses runs in linear O(N) time.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    res = []\n    i = 0\n    n = len(s)\n    while i < n:\n        c = s[i]\n        cnt = 0\n        while i < n and s[i] == c:\n            cnt += 1\n            i += 1\n        res.append(f'{c}{cnt}')\n    print(''.join(res))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Off-by-one error on the final run"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "compression",
            "strings"
        ]
    }
];
