import { Problem } from '../types';

export const pyLevel8Problems: Problem[] = [
    {
        "id": "py-prob-08-01",
        "levelId": "py-level-08",
        "title": "Tuple Coordinates & Manhattan Distance",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Tuples `(x, y)` represent immutable points in 2D space.\n\n**Task:**\nRead four integers `X1 Y1 X2 Y2`. Unpack into tuples `p1 = (x1, y1)` and `p2 = (x2, y2)`.\nCalculate and print the Manhattan distance: `|x1 - x2| + |y1 - y2|`.",
        "whyThisMatters": "Tuples are immutable, hashable, and commonly used as coordinate keys in grid graph searches.",
        "concepts": [
            "tuples",
            "immutability",
            "manhattan distance"
        ],
        "prerequisites": [
            "tuples"
        ],
        "learningObjectives": [
            "Create and unpack coordinate tuples"
        ],
        "constraints": [
            "Integer coordinates"
        ],
        "examples": [
            {
                "input": "0 0 3 4",
                "output": "7"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "0 0 3 4",
                "expectedOutput": "7",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-2 5 3 -1",
                "expectedOutput": "11",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 4:\n        p1 = (nums[0], nums[1])\n        p2 = (nums[2], nums[3])\n        # Print Manhattan distance\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])"
        ],
        "howToThink": [
            "Manhattan distance is sum of absolute coordinate differences."
        ],
        "approach": "Calculate abs(x1 - x2) + abs(y1 - y2).",
        "pseudocode": "print(abs(x1 - x2) + abs(y1 - y2))",
        "explanation": "L1 norm (Manhattan distance) between two 2D points.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 4:\n        x1, y1, x2, y2 = nums[0], nums[1], nums[2], nums[3]\n        print(abs(x1 - x2) + abs(y1 - y2))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using Euclidean distance sqrt(dx^2 + dy^2) instead of Manhattan distance"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "tuples",
            "geometry"
        ]
    },
    {
        "id": "py-prob-08-02",
        "levelId": "py-level-08",
        "title": "Count Unique Elements",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "Given a list of integers containing duplicates, count how many distinct unique numbers are present.\n\nIn Python, passing a list to `set(arr)` removes all duplicates in O(N) time.",
        "whyThisMatters": "Sets provide instantaneous duplicate removal and O(1) membership checking.",
        "concepts": [
            "sets",
            "uniqueness",
            "set()"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Convert list to set to find unique count"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "1 2 2 3 4 4 4 5",
                "output": "5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 2 3 4 4 4 5",
                "expectedOutput": "5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 10 10 10",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print count of unique elements\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "len(set(nums))"
        ],
        "howToThink": [
            "Converting to a set discards all duplicates."
        ],
        "approach": "Use len(set(nums)).",
        "pseudocode": "print(len(set(nums)))",
        "explanation": "Sets maintain unique keys using internal hash tables in O(N).",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(len(set(nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Manual nested loop checking for duplicates in O(N^2)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sets"
        ]
    },
    {
        "id": "py-prob-08-03",
        "levelId": "py-level-08",
        "title": "Set Intersection",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "Given two lists of integers on separate lines:\nFind all numbers that appear in both lists (set intersection `&`).\nPrint the common numbers in ascending sorted order space-separated. (If empty, print nothing).",
        "whyThisMatters": "Intersection is the foundational set operation used in search engines and matching algorithms.",
        "concepts": [
            "intersection",
            "set operations",
            "& operator"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Compute set intersection & and sort results"
        ],
        "constraints": [
            "Integer lists"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5\n3 4 5 6 7",
                "output": "3 4 5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5\n3 4 5 6 7",
                "expectedOutput": "3 4 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2\n3 4",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        # Print sorted intersection\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "common = sorted(a & b), print(*common)."
        ],
        "howToThink": [
            "a & b gives intersection. Sort with sorted()."
        ],
        "approach": "Use set operator a & b and sorted().",
        "pseudocode": "print(*sorted(a & b))",
        "explanation": "Set intersection runs in O(min(len(A), len(B))) time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        common = sorted(a & b)\n        print(*common)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to sort the resulting set (sets are unordered)"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sets",
            "intersection"
        ]
    },
    {
        "id": "py-prob-08-04",
        "levelId": "py-level-08",
        "title": "Set Union",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "Given two lists of integers on separate lines:\nFind all distinct numbers present in either list (set union `|`).\nPrint the elements in ascending sorted order space-separated.",
        "whyThisMatters": "Union merges disjoint collections while automatically preserving uniqueness.",
        "concepts": [
            "union",
            "set operations",
            "| operator"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Compute set union |"
        ],
        "constraints": [
            "Integer lists"
        ],
        "examples": [
            {
                "input": "1 2 3\n3 4 5",
                "output": "1 2 3 4 5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3\n3 4 5",
                "expectedOutput": "1 2 3 4 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 20\n30 40",
                "expectedOutput": "10 20 30 40",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a | b))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(a | b)"
        ],
        "howToThink": [
            "a | b joins all unique elements."
        ],
        "approach": "Use a | b.",
        "pseudocode": "print(*sorted(a | b))",
        "explanation": "Union combines elements from both sets without duplicates.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a | b))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using + on sets (which raises TypeError, union is |)"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sets",
            "union"
        ]
    },
    {
        "id": "py-prob-08-05",
        "levelId": "py-level-08",
        "title": "Set Difference",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "Given two lists of integers on separate lines, `A` and `B`:\nFind all numbers that are in `A` but NOT in `B` (set difference `A - B`).\nPrint the resulting numbers in ascending sorted order space-separated.",
        "whyThisMatters": "Set difference instantly answers questions like 'which users did not complete task X?'.",
        "concepts": [
            "set difference",
            "- operator",
            "filtering"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Compute set difference A - B"
        ],
        "constraints": [
            "Integer lists"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5\n2 4",
                "output": "1 3 5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5\n2 4",
                "expectedOutput": "1 3 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2\n1 2 3",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a - b))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(a - b)"
        ],
        "howToThink": [
            "a - b removes all elements found in b from a."
        ],
        "approach": "Apply difference operator a - b.",
        "pseudocode": "print(*sorted(a - b))",
        "explanation": "Returns all elements belonging to a that do not belong to b.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a - b))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Confusing a - b with b - a"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sets"
        ]
    },
    {
        "id": "py-prob-08-06",
        "levelId": "py-level-08",
        "title": "Subset Check",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Given two lists of integers on separate lines, `A` and `B`:\nCheck if `A` is a subset of `B` (i.e. every element in `A` is also in `B`).\nPrint `True` if `A.issubset(B)` (or `set(A) <= set(B)`), otherwise print `False`.",
        "whyThisMatters": "Validating permissions, prerequisites, and containment rules uses subset logic.",
        "concepts": [
            "subset",
            "<= operator",
            "issubset"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Use issubset() method and <= operator"
        ],
        "constraints": [
            "Integer lists"
        ],
        "examples": [
            {
                "input": "1 2\n1 2 3 4",
                "output": "True"
            },
            {
                "input": "1 5\n1 2 3 4",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2\n1 2 3 4",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 5\n1 2 3 4",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.issubset(b))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "a.issubset(b) or a <= b"
        ],
        "howToThink": [
            "Test if a is completely contained within b."
        ],
        "approach": "Use a.issubset(b).",
        "pseudocode": "print(a.issubset(b))",
        "explanation": "issubset checks if all members of set A exist in set B.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.issubset(b))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Checking b.issubset(a) instead of a.issubset(b)"
        ],
        "timeComplexity": "O(len(A))",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sets",
            "subsets"
        ]
    },
    {
        "id": "py-prob-08-07",
        "levelId": "py-level-08",
        "title": "Symmetric Difference",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "Given two lists on separate lines:\nFind all elements that are in either list, but NOT in both (symmetric difference `^`).\nPrint the resulting elements sorted in ascending order.",
        "whyThisMatters": "Symmetric difference finds elements unique to one collection or the other (XOR for sets).",
        "concepts": [
            "symmetric difference",
            "^ operator"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Compute symmetric difference with ^"
        ],
        "constraints": [
            "Integer lists"
        ],
        "examples": [
            {
                "input": "1 2 3\n3 4 5",
                "output": "1 2 4 5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3\n3 4 5",
                "expectedOutput": "1 2 4 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2\n1 2",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a ^ b))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(a ^ b)"
        ],
        "howToThink": [
            "a ^ b gives elements in a or b but not both."
        ],
        "approach": "Use a ^ b.",
        "pseudocode": "print(*sorted(a ^ b))",
        "explanation": "Equivalent to (A | B) - (A & B).",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(*sorted(a ^ b))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Confusing symmetric difference with union"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sets"
        ]
    },
    {
        "id": "py-prob-08-08",
        "levelId": "py-level-08",
        "title": "Find the Missing Number (1 to N)",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "You are given an integer `N`, followed by `N - 1` distinct numbers from the range `1` to `N`.\nExactly one number from `1` to `N` is missing.\nFind and print the missing number.",
        "whyThisMatters": "LeetCode #268 Missing Number. Can be solved with sets or Gaussian expected sum `N*(N+1)//2 - sum(arr)` in O(1) space.",
        "concepts": [
            "missing number",
            "gauss sum",
            "sets"
        ],
        "prerequisites": [
            "sets",
            "math"
        ],
        "learningObjectives": [
            "Find missing element using sum formula or sets"
        ],
        "constraints": [
            "N >= 2"
        ],
        "examples": [
            {
                "input": "5\n1 2 4 5",
                "output": "3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5\n1 2 4 5",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3\n2 3",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        arr = tokens[1:]\n        # Find missing number\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "expected = n * (n + 1) // 2. missing = expected - sum(arr)."
        ],
        "howToThink": [
            "Sum of 1 to N minus actual sum gives the missing number."
        ],
        "approach": "Use expected sum formula.",
        "pseudocode": "expected = n * (n + 1) // 2\nprint(expected - sum(arr))",
        "explanation": "Total sum minus array sum is the missing number in O(N) time and O(1) space.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        arr = tokens[1:]\n        expected = n * (n + 1) // 2\n        print(expected - sum(arr))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting array in O(N log N) when O(N) math is available"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "math",
            "interviews"
        ]
    },
    {
        "id": "py-prob-08-09",
        "levelId": "py-level-08",
        "title": "First Duplicate Element",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "Given an array of integers, traverse it from left to right.\nPrint the first number that appears for a second time.\nIf all elements are unique, print `-1`.",
        "whyThisMatters": "Using a `seen` set for instant O(1) lookup during linear scan is one of the most common interview patterns.",
        "concepts": [
            "seen set",
            "hash lookup",
            "duplicates"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Track visited elements using a hash set"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "2 1 3 5 3 2",
                "output": "3"
            },
            {
                "input": "1 2 3 4",
                "output": "-1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 1 3 5 3 2",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2 3 4",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "5 5",
                "expectedOutput": "5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Find first duplicate\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "seen = set(). For x in nums: if x in seen: return x; seen.add(x)."
        ],
        "howToThink": [
            "Iterate through list, if x is already in seen set, that's our answer."
        ],
        "approach": "Maintain seen set during linear scan.",
        "pseudocode": "seen = set()\nfor x in nums:\n    if x in seen: print(x); return\n    seen.add(x)\nprint(-1)",
        "explanation": "set.add() and in operations are O(1) on average.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    seen = set()\n    for x in nums:\n        if x in seen:\n            print(x)\n            return\n        seen.add(x)\n    print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Returning the first duplicate by index value instead of first recurrence in traversal order"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sets",
            "hash set"
        ]
    },
    {
        "id": "py-prob-08-10",
        "levelId": "py-level-08",
        "title": "Disjoint Sets Check",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Given two lists on separate lines:\nCheck if they are disjoint (i.e. have NO common elements).\nPrint `True` if `a.isdisjoint(b)`, otherwise print `False`.",
        "whyThisMatters": "Fast collision detection and independence testing.",
        "concepts": [
            "isdisjoint",
            "set predicates"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Use set.isdisjoint()"
        ],
        "constraints": [
            "Integer lists"
        ],
        "examples": [
            {
                "input": "1 2 3\n4 5 6",
                "output": "True"
            },
            {
                "input": "1 2 3\n3 4 5",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3\n4 5 6",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2 3\n3 4 5",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.isdisjoint(b))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "a.isdisjoint(b)"
        ],
        "howToThink": [
            "Test if sets share zero elements."
        ],
        "approach": "Use a.isdisjoint(b).",
        "pseudocode": "print(a.isdisjoint(b))",
        "explanation": "Short-circuits immediately upon finding the first shared item.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = set(map(int, lines[0].split()))\n        b = set(map(int, lines[1].split()))\n        print(a.isdisjoint(b))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "len(a & b) == 0 computes the full intersection, whereas isdisjoint short-circuits"
        ],
        "timeComplexity": "O(min(len(A), len(B)))",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sets"
        ]
    }
];
