import { Problem } from '../types';

export const pyLevel13Problems: Problem[] = [
    {
        "id": "py-prob-13-01",
        "levelId": "py-level-13",
        "title": "Map Function Strings to Integers",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "The `map(function, iterable)` function applies `function` to every item of `iterable`.\n\n**Task:**\nGiven space-separated string integers, use `map(int, ...)` to convert them to integers, compute their sum, and print the sum.",
        "whyThisMatters": "`map(int, sys.stdin.read().split())` is the single most common Python input parser.",
        "concepts": [
            "map",
            "functional programming",
            "input parsing"
        ],
        "prerequisites": [
            "comprehensions"
        ],
        "learningObjectives": [
            "Use map() for type transformation"
        ],
        "constraints": [
            "Space-separated integers"
        ],
        "examples": [
            {
                "input": "10 20 30 40",
                "output": "100"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10 20 30 40",
                "expectedOutput": "100",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5",
                "expectedOutput": "5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    # Use map(int, ...) to sum inputs\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(sum(map(int, sys.stdin.read().split())))"
        ],
        "howToThink": [
            "Apply int to each token with map, pass directly to sum."
        ],
        "approach": "Use sum(map(int, tokens)).",
        "pseudocode": "print(sum(map(int, input.split())))",
        "explanation": "map returns an iterator, consumed directly by sum without intermediate list allocation.",
        "solution": "import sys\n\ndef solve():\n    print(sum(map(int, sys.stdin.read().split())))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Creating an unnecessary list wrapper when sum consumes iterators directly"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "map",
            "idioms"
        ]
    },
    {
        "id": "py-prob-13-02",
        "levelId": "py-level-13",
        "title": "Filter Function Positive Numbers",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "The `filter(predicate, iterable)` function constructs an iterator from elements for which `predicate` returns `True`.\n\n**Task:**\nGiven a list of integers, filter and print only positive integers (`x > 0`) space-separated using `filter()`.",
        "whyThisMatters": "`filter()` provides lazy evaluation of filtering predicates.",
        "concepts": [
            "filter",
            "lambdas",
            "iterators"
        ],
        "prerequisites": [
            "comprehensions"
        ],
        "learningObjectives": [
            "Use filter() with lambda functions"
        ],
        "constraints": [
            "Integer inputs"
        ],
        "examples": [
            {
                "input": "-5 10 -2 3 0 7",
                "output": "10 3 7"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "-5 10 -2 3 0 7",
                "expectedOutput": "10 3 7",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-1 -2 -3",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Use filter with lambda\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(*filter(lambda x: x > 0, nums))"
        ],
        "howToThink": [
            "Use filter(lambda x: x > 0, nums)."
        ],
        "approach": "Filter with lambda.",
        "pseudocode": "print(*filter(lambda x: x > 0, nums))",
        "explanation": "filter lazily yields elements matching the predicate.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(*filter(lambda x: x > 0, nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Including 0 as positive"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "filter",
            "functional"
        ]
    },
    {
        "id": "py-prob-13-03",
        "levelId": "py-level-13",
        "title": "Zip Parallel Iteration into Dict",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "Given keys on line 1, and values on line 2:\nUse `zip(keys, values)` to pair them and construct a dictionary `dict(zip(keys, values))`.\nPrint each key-value pair sorted by key:\n`<key>: <val>` on separate lines.",
        "whyThisMatters": "`zip()` pairs elements from multiple iterables in lockstep, stopping at the shortest.",
        "concepts": [
            "zip",
            "parallel iteration",
            "dict constructor"
        ],
        "prerequisites": [
            "comprehensions",
            "dictionaries"
        ],
        "learningObjectives": [
            "Pair iterables using zip() and construct dict"
        ],
        "constraints": [
            "Equal length key and value lines"
        ],
        "examples": [
            {
                "input": "a b c\n1 2 3",
                "output": "a: 1\nb: 2\nc: 3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "a b c\n1 2 3",
                "expectedOutput": "a: 1\nb: 2\nc: 3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "x y\n10 20",
                "expectedOutput": "x: 10\ny: 20",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        keys = lines[0].split()\n        values = lines[1].split()\n        # dict(zip(keys, values))\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "d = dict(zip(keys, values))\nfor k in sorted(d): print(f'{k}: {d[k]}')"
        ],
        "howToThink": [
            "zip(keys, values) pairs (k, v), dict() consumes into map."
        ],
        "approach": "Use dict(zip(keys, values)).",
        "pseudocode": "d = dict(zip(keys, values))\nfor k in sorted(d): print(f'{k}: {d[k]}')",
        "explanation": "dict(zip(...)) is the standard Python pattern for combining headers and records.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        keys = lines[0].split()\n        values = lines[1].split()\n        d = dict(zip(keys, values))\n        for k in sorted(d):\n            print(f'{k}: {d[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Manual indexing loops with range(len(keys))"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "zip",
            "dictionaries"
        ]
    },
    {
        "id": "py-prob-13-04",
        "levelId": "py-level-13",
        "title": "Enumerate with 1-Based Indexing",
        "type": "coding",
        "difficulty": "beginner",
        "order": 4,
        "description": "The `enumerate(iterable, start=0)` built-in yields `(index, item)` pairs.\n\n**Task:**\nRead words from input. Print each word numbered starting from `1`:\n`1. <word1>`\n`2. <word2>`\non separate lines using `enumerate(words, start=1)`.",
        "whyThisMatters": "Eliminates manual index counter variables (`i += 1`).",
        "concepts": [
            "enumerate",
            "index tracking"
        ],
        "prerequisites": [
            "comprehensions"
        ],
        "learningObjectives": [
            "Use enumerate() with custom start offset"
        ],
        "constraints": [
            "Non-empty list of words"
        ],
        "examples": [
            {
                "input": "Gold Silver Bronze",
                "output": "1. Gold\n2. Silver\n3. Bronze"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Gold Silver Bronze",
                "expectedOutput": "1. Gold\n2. Silver\n3. Bronze",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "First",
                "expectedOutput": "1. First",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Print numbered list using enumerate(start=1)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "for i, w in enumerate(words, start=1): print(f'{i}. {w}')"
        ],
        "howToThink": [
            "Use enumerate(words, start=1)."
        ],
        "approach": "Loop with enumerate(words, start=1).",
        "pseudocode": "for i, w in enumerate(words, start=1):\n    print(f'{i}. {w}')",
        "explanation": "enumerate start=1 starts numbering from 1 cleanly.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    for i, w in enumerate(words, start=1):\n        print(f'{i}. {w}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Manually incrementing an index variable"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "enumerate",
            "idioms"
        ]
    },
    {
        "id": "py-prob-13-05",
        "levelId": "py-level-13",
        "title": "Any and All Predicate Evaluator",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "Given a list of integers:\n- Print `All Positive: True` if every number is `> 0` (`all(x > 0 for x in nums)`), otherwise `All Positive: False`.\n- On line 2, print `Has Even: True` if at least one number is even (`any(x % 2 == 0 for x in nums)`), otherwise `Has Even: False`.",
        "whyThisMatters": "`any()` and `all()` short-circuit on generator expressions, terminating the moment truth or falsity is established.",
        "concepts": [
            "any",
            "all",
            "short-circuit evaluation"
        ],
        "prerequisites": [
            "comprehensions"
        ],
        "learningObjectives": [
            "Use any() and all() with generator expressions"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "1 3 5",
                "output": "All Positive: True\nHas Even: False"
            },
            {
                "input": "2 -4 6",
                "output": "All Positive: False\nHas Even: True"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 3 5",
                "expectedOutput": "All Positive: True\nHas Even: False",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2 -4 6",
                "expectedOutput": "All Positive: False\nHas Even: True",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Evaluate all() and any()\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "all(x > 0 for x in nums), any(x % 2 == 0 for x in nums)"
        ],
        "howToThink": [
            "Apply all() for universal quantification, any() for existential quantification."
        ],
        "approach": "Use all() and any() with generators.",
        "pseudocode": "print(f'All Positive: {all(x > 0 for x in nums)}')\nprint(f'Has Even: {any(x % 2 == 0 for x in nums)}')",
        "explanation": "Short-circuit execution terminates without scanning full list if condition met.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(f'All Positive: {all(x > 0 for x in nums)}')\n        print(f'Has Even: {any(x % 2 == 0 for x in nums)}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using list comprehension inside any/all which defeats short-circuiting"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "any",
            "all"
        ]
    },
    {
        "id": "py-prob-13-06",
        "levelId": "py-level-13",
        "title": "Flatten 2D List with Comprehension",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Given dimension `R` (rows) followed by `R` rows of space-separated integers on subsequent lines:\nFlatten the 2D list into a single 1D list using a nested list comprehension:\n`[x for row in matrix for x in row]`.\nPrint the flattened list elements space-separated.",
        "whyThisMatters": "Nested comprehensions flatten matrices and tree levels concisely.",
        "concepts": [
            "nested comprehensions",
            "matrix flattening"
        ],
        "prerequisites": [
            "comprehensions",
            "2D lists"
        ],
        "learningObjectives": [
            "Flatten 2D matrix using nested list comprehension"
        ],
        "constraints": [
            "R >= 1"
        ],
        "examples": [
            {
                "input": "2\n1 2 3\n4 5 6",
                "output": "1 2 3 4 5 6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 3\n4 5 6",
                "expectedOutput": "1 2 3 4 5 6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1\n10 20",
                "expectedOutput": "10 20",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Flatten matrix\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "flat = [x for row in matrix for x in row]"
        ],
        "howToThink": [
            "The order of for clauses in comprehension matches standard nested loops: for row in matrix, then for x in row."
        ],
        "approach": "Nested list comprehension.",
        "pseudocode": "matrix = [list(map(int, line.split())) for line in lines[1:]]\nprint(*(x for row in matrix for x in row))",
        "explanation": "Double for comprehension flattens in linear time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        flat = [x for row in matrix for x in row]\n        print(*flat)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Reversing order of for clauses causing NameError"
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "interviewRelevance": "medium",
        "tags": [
            "comprehensions",
            "matrices"
        ]
    },
    {
        "id": "py-prob-13-07",
        "levelId": "py-level-13",
        "title": "Matrix Transpose with zip(*matrix)",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "In Python, transposing a matrix (swapping rows and columns) is famously accomplished in one line:\n`transposed = [list(col) for col in zip(*matrix)]`\n\n**Task:**\nGiven dimension `R` followed by `R` rows:\nCompute and print the transposed matrix row-by-row (space-separated).",
        "whyThisMatters": "`zip(*matrix)` unpacks rows as arguments, grouping corresponding column elements.",
        "concepts": [
            "zip(*args)",
            "matrix transpose",
            "unpacking"
        ],
        "prerequisites": [
            "zip",
            "matrices"
        ],
        "learningObjectives": [
            "Transpose matrices using zip(*matrix)"
        ],
        "constraints": [
            "R >= 1"
        ],
        "examples": [
            {
                "input": "2\n1 2 3\n4 5 6",
                "output": "1 4\n2 5\n3 6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 3\n4 5 6",
                "expectedOutput": "1 4\n2 5\n3 6",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Transpose matrix\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "for col in zip(*matrix): print(*col)"
        ],
        "howToThink": [
            "zip(*matrix) groups elements by column."
        ],
        "approach": "Use zip(*matrix).",
        "pseudocode": "for col in zip(*matrix):\n    print(*col)",
        "explanation": "Unpacking the rows with *matrix into zip aligns column values together.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        for col in zip(*matrix):\n            print(*col)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Nested index loops when zip(*matrix) is standard"
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "interviewRelevance": "high",
        "tags": [
            "zip",
            "matrices"
        ]
    },
    {
        "id": "py-prob-13-08",
        "levelId": "py-level-13",
        "title": "Conditional Transformation Comprehension",
        "type": "coding",
        "difficulty": "beginner",
        "order": 8,
        "description": "Transform an array of integers:\n- Replace even numbers with `'EVEN'`\n- Replace odd numbers with `'ODD'`\n\nIn Python, ternary if-else inside comprehension takes the form:\n`['EVEN' if x % 2 == 0 else 'ODD' for x in nums]`.\nPrint the transformed tokens space-separated.",
        "whyThisMatters": "Notice that ternary if-else comes BEFORE the `for` loop, whereas filtering `if` comes AFTER.",
        "concepts": [
            "ternary comprehension",
            "transformation",
            "if-else"
        ],
        "prerequisites": [
            "comprehensions"
        ],
        "learningObjectives": [
            "Use ternary if-else within list comprehension"
        ],
        "constraints": [
            "Integer inputs"
        ],
        "examples": [
            {
                "input": "1 2 3 4",
                "output": "ODD EVEN ODD EVEN"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4",
                "expectedOutput": "ODD EVEN ODD EVEN",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2 4",
                "expectedOutput": "EVEN EVEN",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Ternary comprehension\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(*['EVEN' if x % 2 == 0 else 'ODD' for x in nums])"
        ],
        "howToThink": [
            "Syntax: [val_if_true if cond else val_if_false for x in list]."
        ],
        "approach": "Use ternary comprehension.",
        "pseudocode": "print(*['EVEN' if x % 2 == 0 else 'ODD' for x in nums])",
        "explanation": "Transforms every element according to the condition.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*['EVEN' if x % 2 == 0 else 'ODD' for x in nums])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Placing 'else' at the end of comprehension (SyntaxError)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "comprehensions"
        ]
    },
    {
        "id": "py-prob-13-09",
        "levelId": "py-level-13",
        "title": "Set Comprehension Unique Vowels",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "Given a sentence, use a set comprehension to find all unique vowels (`a, e, i, o, u`, lowercase) present in the text:\n`{c.lower() for c in s if c.lower() in 'aeiou'}`\nPrint the unique vowels in alphabetical order space-separated. (If none, print empty line).",
        "whyThisMatters": "Set comprehensions `{...}` automatically deduplicate results during construction.",
        "concepts": [
            "set comprehension",
            "filtering",
            "vowels"
        ],
        "prerequisites": [
            "comprehensions",
            "sets"
        ],
        "learningObjectives": [
            "Construct sets via set comprehension"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "Hello World",
                "output": "e o"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Hello World",
                "expectedOutput": "e o",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "rhythm",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    # Set comprehension\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "vowels = {c.lower() for c in s if c.lower() in 'aeiou'}, print(*sorted(vowels))."
        ],
        "howToThink": [
            "Set comprehension enclosed in braces {}."
        ],
        "approach": "Set comprehension and sort.",
        "pseudocode": "vowels = {c.lower() for c in s if c.lower() in 'aeiou'}\nprint(*sorted(vowels))",
        "explanation": "Set braces deduplicate characters automatically.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    vowels = {c.lower() for c in s if c.lower() in 'aeiou'}\n    print(*sorted(vowels))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Returning a list with duplicates instead of set"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "comprehensions",
            "sets"
        ]
    },
    {
        "id": "py-prob-13-10",
        "levelId": "py-level-13",
        "title": "Functional Reduce with functools.reduce",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "The `functools.reduce(function, iterable)` applies a binary function cumulatively to the items of an iterable to reduce it to a single value.\n\n**Task:**\nGiven a list of positive integers, use `functools.reduce` and `operator.mul` (or a lambda `lambda a, b: a * b`) to compute the product of all elements.\nPrint the product.",
        "whyThisMatters": "`reduce` is the foundational MapReduce folding operation in functional programming.",
        "concepts": [
            "reduce",
            "functools",
            "aggregation"
        ],
        "prerequisites": [
            "comprehensions"
        ],
        "learningObjectives": [
            "Fold sequences with functools.reduce"
        ],
        "constraints": [
            "Non-empty list of positive integers"
        ],
        "examples": [
            {
                "input": "2 3 4 5",
                "output": "120"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 3 4 5",
                "expectedOutput": "120",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "7",
                "expectedOutput": "7",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom functools import reduce\nimport operator\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Compute product with reduce\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "reduce(operator.mul, nums) or reduce(lambda a, b: a * b, nums)"
        ],
        "howToThink": [
            "reduce accumulates across the array from left to right."
        ],
        "approach": "Use functools.reduce.",
        "pseudocode": "print(reduce(operator.mul, nums))",
        "explanation": "Folds sequence into a single cumulative scalar.",
        "solution": "import sys\nfrom functools import reduce\nimport operator\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(reduce(operator.mul, nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Importing reduce from built-in (in Python 3, it lives in functools)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "reduce",
            "functional"
        ]
    }
];
