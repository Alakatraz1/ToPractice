import { Problem } from '../types';

export const pyLevel9Problems: Problem[] = [
    {
        "id": "py-prob-09-01",
        "levelId": "py-level-09",
        "title": "Word Frequency Counter",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "Given a sentence, count how many times each word appears.\nPrint each word and its frequency in alphabetical order:\n`<word>: <count>`\non separate lines.",
        "whyThisMatters": "Frequency counting using dictionaries is required in ~30% of all interview questions.",
        "concepts": [
            "dictionaries",
            "frequency map",
            "key sorting"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Build frequency map using dict and iterate sorted keys"
        ],
        "constraints": [
            "Words contain letters only"
        ],
        "examples": [
            {
                "input": "apple banana apple cherry banana apple",
                "output": "apple: 3\nbanana: 2\ncherry: 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "apple banana apple cherry banana apple",
                "expectedOutput": "apple: 3\nbanana: 2\ncherry: 1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "hello world",
                "expectedOutput": "hello: 1\nworld: 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Count frequencies and print sorted\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "counts = {}\nfor w in words: counts[w] = counts.get(w, 0) + 1\nfor k in sorted(counts): print(f'{k}: {counts[k]}')"
        ],
        "howToThink": [
            "Count with counts.get(w, 0) + 1, then sort keys."
        ],
        "approach": "Dict frequency count and sorted output.",
        "pseudocode": "counts = {}\nfor w in words: counts[w] = counts.get(w, 0) + 1\nfor k in sorted(counts): print(f'{k}: {counts[k]}')",
        "explanation": "dict.get(key, 0) returns 0 if key does not exist yet.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if not words:\n        return\n    counts = {}\n    for w in words:\n        counts[w] = counts.get(w, 0) + 1\n    for k in sorted(counts):\n        print(f'{k}: {counts[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "KeyError when accessing uninitialized dictionary key"
        ],
        "timeComplexity": "O(N log U)",
        "spaceComplexity": "O(U)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries",
            "frequency"
        ]
    },
    {
        "id": "py-prob-09-02",
        "levelId": "py-level-09",
        "title": "Most Frequent Character",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "Given a non-empty string, find the character that appears most frequently.\nIf multiple characters have the same maximum frequency, return the one that appears first alphabetically.",
        "whyThisMatters": "Combines frequency counting with multi-criterion sorting (count descending, alphabetical ascending).",
        "concepts": [
            "dictionaries",
            "frequency",
            "tie-breaking"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Find mode of a collection with tie-breaking"
        ],
        "constraints": [
            "Non-empty string"
        ],
        "examples": [
            {
                "input": "abracadabra",
                "output": "a"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "abracadabra",
                "expectedOutput": "a",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "bbaac",
                "expectedOutput": "a",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Find most frequent character\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Count characters in dict. Sort keys by (-count, char)."
        ],
        "howToThink": [
            "Sort candidate chars with key=lambda c: (-counts[c], c)."
        ],
        "approach": "Dict count with key lambda for tie-breaking.",
        "pseudocode": "counts = {}\nfor c in s: counts[c] = counts.get(c, 0) + 1\nbest = min(counts.keys(), key=lambda c: (-counts[c], c))\nprint(best)",
        "explanation": "Tuple key (-count, char) maximizes count while breaking ties alphabetically.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    counts = {}\n    for c in s:\n        counts[c] = counts.get(c, 0) + 1\n    best = min(counts.keys(), key=lambda c: (-counts[c], c))\n    print(best)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing tie-breaker when multiple characters have the same highest frequency"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(U)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries"
        ]
    },
    {
        "id": "py-prob-09-03",
        "levelId": "py-level-09",
        "title": "Invert a Dictionary",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "Given unique key-value pairs formatted as `key value key value...`:\nInvert the dictionary so that values become keys and keys become values.\nPrint the inverted mapping sorted by new keys:\n`<new_key>: <new_val>`.",
        "whyThisMatters": "Dict comprehension `{v: k for k, v in d.items()}` is a core idiom for bidirectional lookups.",
        "concepts": [
            "dict comprehension",
            "items()",
            "inversion"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Invert key-value mappings using dict comprehension"
        ],
        "constraints": [
            "All keys and values are unique"
        ],
        "examples": [
            {
                "input": "a 1 b 2 c 3",
                "output": "1: a\n2: b\n3: c"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "a 1 b 2 c 3",
                "expectedOutput": "1: a\n2: b\n3: c",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "x 10 y 20",
                "expectedOutput": "10: x\n20: y",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Invert mapping\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "{v: k for k, v in d.items()}"
        ],
        "howToThink": [
            "Pair tokens into dict, swap k and v with comprehension."
        ],
        "approach": "Use {v: k for k, v in d.items()}.",
        "pseudocode": "d = {tokens[i]: tokens[i+1] for i in range(0, len(tokens), 2)}\ninv = {v: k for k, v in d.items()}\nfor k in sorted(inv): print(f'{k}: {inv[k]}')",
        "explanation": "Dictionary comprehension maps values to keys cleanly.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    d = {tokens[i]: tokens[i+1] for i in range(0, len(tokens), 2)}\n    inv = {v: k for k, v in d.items()}\n    for k in sorted(inv):\n        print(f'{k}: {inv[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Trying to invert non-hashable values (lists cannot be keys)"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "dictionaries",
            "comprehension"
        ]
    },
    {
        "id": "py-prob-09-04",
        "levelId": "py-level-09",
        "title": "Safe Lookup with .get()",
        "type": "coding",
        "difficulty": "beginner",
        "order": 4,
        "description": "Given pairs of `key value` followed by a target query key:\nQuery the dictionary for the target key using `d.get(key, 'Not Found')`.\nPrint the value if found, otherwise print `Not Found`.",
        "whyThisMatters": "Accessing `d[key]` raises `KeyError` if key is missing; `d.get(key, default)` gracefully handles missing keys.",
        "concepts": [
            "dict.get",
            "default value",
            "KeyError"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Use dict.get() for safe lookups"
        ],
        "constraints": [
            "String keys and values"
        ],
        "examples": [
            {
                "input": "Alice 95 Bob 82 Charlie 88\nBob",
                "output": "82"
            },
            {
                "input": "Alice 95 Bob 82\nDave",
                "output": "Not Found"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Alice 95 Bob 82 Charlie 88\nBob",
                "expectedOutput": "82",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Alice 95 Bob 82\nDave",
                "expectedOutput": "Not Found",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Last token is query, preceding pairs form dict\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "query = tokens[-1], pairs = tokens[:-1]. Use d.get(query, 'Not Found')."
        ],
        "howToThink": [
            "Build dict from pairs, query with d.get(query, 'Not Found')."
        ],
        "approach": "Build dict and query using get().",
        "pseudocode": "print(d.get(query, 'Not Found'))",
        "explanation": "dict.get() avoids crash on absent key.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 3 and len(tokens) % 2 == 1:\n        query = tokens[-1]\n        pairs = tokens[:-1]\n        d = {pairs[i]: pairs[i+1] for i in range(0, len(pairs), 2)}\n        print(d.get(query, 'Not Found'))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using d[query] causing KeyError crash"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries"
        ]
    },
    {
        "id": "py-prob-09-05",
        "levelId": "py-level-09",
        "title": "Merge Dictionaries by Summing Values",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "You are given two sets of inventory mappings: `item quantity`.\nMerge the two inventories. If an item appears in both, sum their quantities.\nPrint the merged items in alphabetical order:\n`<item>: <total_quantity>`.",
        "whyThisMatters": "Data aggregation and grouping are standard database and interview problem patterns.",
        "concepts": [
            "merging",
            "aggregation",
            "dictionaries"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Merge mappings by combining values"
        ],
        "constraints": [
            "Quantities are integers"
        ],
        "examples": [
            {
                "input": "apple 5 banana 3\nbanana 4 cherry 10",
                "output": "apple: 5\nbanana: 7\ncherry: 10"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "apple 5 banana 3\nbanana 4 cherry 10",
                "expectedOutput": "apple: 5\nbanana: 7\ncherry: 10",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "book 2\npen 5",
                "expectedOutput": "book: 2\npen: 5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Merge inventories\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "inv[item] = inv.get(item, 0) + int(qty)"
        ],
        "howToThink": [
            "Iterate through pairs, accumulate quantities into dict."
        ],
        "approach": "Accumulate into dict with get(k, 0) + qty.",
        "pseudocode": "inv = {}\nfor i in range(0, len(tokens), 2):\n    inv[k] = inv.get(k, 0) + int(v)\nfor k in sorted(inv): print(f'{k}: {inv[k]}')",
        "explanation": "Standard hash map reduction pattern.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    inv = {}\n    for i in range(0, len(tokens) - 1, 2):\n        item = tokens[i]\n        qty = int(tokens[i+1])\n        inv[item] = inv.get(item, 0) + qty\n    for k in sorted(inv):\n        print(f'{k}: {inv[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Overwriting values instead of adding them"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries",
            "aggregation"
        ]
    },
    {
        "id": "py-prob-09-06",
        "levelId": "py-level-09",
        "title": "Group Words by Length",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Given a list of words, group them by their length into a dictionary of lists.\nPrint the groups sorted by length ascending in format:\n`<length>: <word1> <word2>...`",
        "whyThisMatters": "Grouping by key (`dict[key].append(val)`) is the foundation of bucketing and Hash Table grouping (like Group Anagrams).",
        "concepts": [
            "bucketing",
            "group by",
            "dict of lists"
        ],
        "prerequisites": [
            "dictionaries",
            "lists"
        ],
        "learningObjectives": [
            "Group items into dictionary of lists"
        ],
        "constraints": [
            "List of words"
        ],
        "examples": [
            {
                "input": "cat dog bird elephant ant",
                "output": "3: cat dog ant\n4: bird\n8: elephant"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "cat dog bird elephant ant",
                "expectedOutput": "3: cat dog ant\n4: bird\n8: elephant",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "a bb ccc",
                "expectedOutput": "1: a\n2: bb\n3: ccc",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Group by length\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "groups.setdefault(len(w), []).append(w)"
        ],
        "howToThink": [
            "Dict mapping int length -> list of words."
        ],
        "approach": "Use dict of lists.",
        "pseudocode": "groups = {}\nfor w in words:\n    groups.setdefault(len(w), []).append(w)\nfor L in sorted(groups):\n    print(f'{L}: {\" \".join(groups[L])}')",
        "explanation": "setdefault() initializes empty list on first access.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if not words:\n        return\n    groups = {}\n    for w in words:\n        groups.setdefault(len(w), []).append(w)\n    for L in sorted(groups):\n        print(f'{L}: {\" \".join(groups[L])}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting words inside groups when original order is expected"
        ],
        "timeComplexity": "O(N log K)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries",
            "grouping"
        ]
    },
    {
        "id": "py-prob-09-07",
        "levelId": "py-level-09",
        "title": "Two Sum with Hash Map",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #1 Two Sum.\nGiven a target `T` followed by an array of integers `arr`:\nFind two distinct 0-based indices `i` and `j` (`i < j`) such that `arr[i] + arr[j] == T`.\nPrint `i j`. (Assume exactly one valid pair exists).",
        "whyThisMatters": "Two Sum is the single most iconic technical interview problem in history.",
        "concepts": [
            "two sum",
            "hash map",
            "complement search"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Solve Two Sum in O(N) using a dictionary"
        ],
        "constraints": [
            "Exactly one solution exists"
        ],
        "examples": [
            {
                "input": "9\n2 7 11 15",
                "output": "0 1"
            },
            {
                "input": "6\n3 2 4",
                "output": "1 2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "9\n2 7 11 15",
                "expectedOutput": "0 1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "6\n3 2 4",
                "expectedOutput": "1 2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        nums = tokens[1:]\n        # Two sum with hash map\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "seen = {}. For idx, x in enumerate(nums): complement = target - x. If complement in seen: return seen[complement], idx. seen[x] = idx."
        ],
        "howToThink": [
            "For each number, check if target - number is already in our hash map."
        ],
        "approach": "Hash map storing value -> index.",
        "pseudocode": "seen = {}\nfor idx, x in enumerate(nums):\n    diff = target - x\n    if diff in seen:\n        print(seen[diff], idx); return\n    seen[x] = idx",
        "explanation": "Reduces O(N^2) double loop to single pass O(N) using O(1) dictionary lookups.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        nums = tokens[1:]\n        seen = {}\n        for idx, x in enumerate(nums):\n            diff = target - x\n            if diff in seen:\n                print(seen[diff], idx)\n                return\n            seen[x] = idx\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using the same index twice (e.g. 3 + 3 = 6 using index 0 twice)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "two sum",
            "hash map",
            "must-know"
        ]
    },
    {
        "id": "py-prob-09-08",
        "levelId": "py-level-09",
        "title": "Sort Dictionary by Values Descending",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "Given pairs of `name score`:\nPrint the names sorted by their score in descending order (highest score first).\nIf scores are tied, sort names alphabetically ascending.\n`<name>: <score>` on separate lines.",
        "whyThisMatters": "Multi-attribute sorting with `key=lambda x: (-x[1], x[0])` is standard for leaderboards.",
        "concepts": [
            "sorting dicts",
            "key lambdas",
            "leaderboard"
        ],
        "prerequisites": [
            "dictionaries",
            "sorting"
        ],
        "learningObjectives": [
            "Sort dictionary items by values with tie-breaking"
        ],
        "constraints": [
            "Scores are integers"
        ],
        "examples": [
            {
                "input": "Alice 80 Bob 95 Charlie 80",
                "output": "Bob: 95\nAlice: 80\nCharlie: 80"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Alice 80 Bob 95 Charlie 80",
                "expectedOutput": "Bob: 95\nAlice: 80\nCharlie: 80",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "X 50 Y 100",
                "expectedOutput": "Y: 100\nX: 50",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Sort by score desc, then name asc\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(items, key=lambda item: (-item[1], item[0]))"
        ],
        "howToThink": [
            "Convert items to list of (name, int(score)), sort with lambda."
        ],
        "approach": "Sort items with tuple key (-score, name).",
        "pseudocode": "items = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\nitems.sort(key=lambda x: (-x[1], x[0]))\nfor name, score in items: print(f'{name}: {score}')",
        "explanation": "Negating the integer score sorts descending while the string name sorts ascending.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    items = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\n    items.sort(key=lambda x: (-x[1], x[0]))\n    for name, score in items:\n        print(f'{name}: {score}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting scores alphabetically (e.g. '100' < '50') instead of converting to int"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries",
            "sorting"
        ]
    },
    {
        "id": "py-prob-09-09",
        "levelId": "py-level-09",
        "title": "Dictionary Comprehension Squares",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "Given an integer `N`, construct a dictionary mapping each number `x` from `1` to `N` to its square `x**2` using a dictionary comprehension:\n`{x: x**2 for x in range(1, N + 1)}`\n\nPrint each mapping line-by-line as `<x>: <x**2>`.",
        "whyThisMatters": "Dictionary comprehensions are expressive, idiomatic, and fast.",
        "concepts": [
            "dict comprehension",
            "mapping"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Construct dictionaries using comprehension syntax"
        ],
        "constraints": [
            "1 <= N <= 20"
        ],
        "examples": [
            {
                "input": "4",
                "output": "1: 1\n2: 4\n3: 9\n4: 16"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "4",
                "expectedOutput": "1: 1\n2: 4\n3: 9\n4: 16",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2",
                "expectedOutput": "1: 1\n2: 4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Use dict comprehension\n    squares = {x: x**2 for x in range(1, n + 1)}\n    for k, v in squares.items():\n        print(f'{k}: {v}')\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "{x: x**2 for x in range(1, n + 1)}"
        ],
        "howToThink": [
            "Use dict comprehension syntax {k: v for ...}."
        ],
        "approach": "Dict comprehension.",
        "pseudocode": "squares = {x: x**2 for x in range(1, n + 1)}\nfor k, v in squares.items(): print(f'{k}: {v}')",
        "explanation": "Synthesizes lookup tables concisely.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        squares = {x: x**2 for x in range(1, n + 1)}\n        for k, v in squares.items():\n            print(f'{k}: {v}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using parentheses (generator) instead of braces {}"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "comprehensions"
        ]
    },
    {
        "id": "py-prob-09-10",
        "levelId": "py-level-09",
        "title": "Nested Dictionary User Query",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Consider a nested user database:\nGiven query `username field` from input:\nDatabase records:\n- `alice`: `email: alice@example.com`, `role: admin`\n- `bob`: `email: bob@example.com`, `role: user`\n\nPrint the requested field value, or `Unknown` if either the user or field does not exist.",
        "whyThisMatters": "Nested dictionary access simulates JSON response traversal common in real-world systems.",
        "concepts": [
            "nested dicts",
            "safe navigation",
            "json traversal"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Safely traverse nested dictionaries"
        ],
        "constraints": [
            "String queries"
        ],
        "examples": [
            {
                "input": "alice role",
                "output": "admin"
            },
            {
                "input": "bob email",
                "output": "bob@example.com"
            },
            {
                "input": "charlie email",
                "output": "Unknown"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "alice role",
                "expectedOutput": "admin",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "bob email",
                "expectedOutput": "bob@example.com",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "charlie email",
                "expectedOutput": "Unknown",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\nDB = {\n    'alice': {'email': 'alice@example.com', 'role': 'admin'},\n    'bob': {'email': 'bob@example.com', 'role': 'user'}\n}\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        user, field = tokens[0], tokens[1]\n        # Safe lookup in DB\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "DB.get(user, {}).get(field, 'Unknown')"
        ],
        "howToThink": [
            "Chain .get() to safely traverse nested dicts."
        ],
        "approach": "Chained get() calls.",
        "pseudocode": "print(DB.get(user, {}).get(field, 'Unknown'))",
        "explanation": "DB.get(user, {}) returns an empty dict if user is missing, allowing the second .get(field) to return 'Unknown' cleanly.",
        "solution": "import sys\n\nDB = {\n    'alice': {'email': 'alice@example.com', 'role': 'admin'},\n    'bob': {'email': 'bob@example.com', 'role': 'user'}\n}\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if len(tokens) >= 2:\n        user, field = tokens[0], tokens[1]\n        print(DB.get(user, {}).get(field, 'Unknown'))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Unchecked DB[user][field] causing crash on missing keys"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "dictionaries",
            "nested"
        ]
    }
];
