import { Problem } from '../types';

export const pyLevel6Problems: Problem[] = [
    {
        "id": "py-prob-06-01",
        "levelId": "py-level-06",
        "title": "List Sum and Average",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Given a non-empty list of integers, compute and print:\n1. The sum of all elements (`sum(arr)`)\n2. The average of all elements rounded to 2 decimal places (`f'{avg:.2f}'`) on a new line.",
        "whyThisMatters": "Basic statistics on arrays form the core of data aggregation tasks.",
        "concepts": [
            "sum",
            "len",
            "average",
            "lists"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Compute aggregate metrics on lists"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "10 20 30 40 50",
                "output": "150\n30.00"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10 20 30 40 50",
                "expectedOutput": "150\n30.00",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5",
                "expectedOutput": "5\n5.00",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print sum and average (2 decimals)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "total = sum(nums), avg = total / len(nums)."
        ],
        "howToThink": [
            "Calculate sum(nums), divide by len(nums), format with .2f."
        ],
        "approach": "Use built-in sum() and len().",
        "pseudocode": "total = sum(nums)\navg = total / len(nums)\nprint(total)\nprint(f'{avg:.2f}')",
        "explanation": "Built-in sum() is highly optimized in C for Python lists.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        total = sum(nums)\n        avg = total / len(nums)\n        print(total)\n        print(f'{avg:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Division by zero on empty lists"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "lists",
            "aggregates"
        ]
    },
    {
        "id": "py-prob-06-02",
        "levelId": "py-level-06",
        "title": "Find Maximum and Minimum",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "Read a list of integers from input. Print the maximum value on the first line, and the minimum value on the second line.",
        "whyThisMatters": "Python's built-in `max()` and `min()` run in linear O(N) time.",
        "concepts": [
            "max",
            "min",
            "lists"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Find extrema in lists"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "7 2 9 4 1 8",
                "output": "9\n1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7 2 9 4 1 8",
                "expectedOutput": "9\n1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-10 -20 -30",
                "expectedOutput": "-10\n-30",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print max and min\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(max(nums)), print(min(nums))"
        ],
        "howToThink": [
            "Use max() and min() functions on the list."
        ],
        "approach": "Apply max() and min().",
        "pseudocode": "print(max(nums))\nprint(min(nums))",
        "explanation": "One-pass linear search for extrema.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(max(nums))\n        print(min(nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Initializing min with 0 instead of infinity or first element"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "lists"
        ]
    },
    {
        "id": "py-prob-06-03",
        "levelId": "py-level-06",
        "title": "Reverse a List",
        "type": "coding",
        "difficulty": "beginner",
        "order": 3,
        "description": "Given a list of integers, print the elements in reverse order separated by spaces.\n\nIn Python, you can reverse a list with `arr[::-1]` or `arr.reverse()`.",
        "whyThisMatters": "Slicing `[::-1]` is standard Python shorthand for sequence reversal.",
        "concepts": [
            "slicing",
            "reverse",
            "negative step"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Reverse a list using slice notation"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5",
                "output": "5 4 3 2 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5",
                "expectedOutput": "5 4 3 2 1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 20",
                "expectedOutput": "20 10",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print reversed list\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(*nums[::-1])"
        ],
        "howToThink": [
            "nums[::-1] creates a reversed list."
        ],
        "approach": "Use slice notation `[::-1]`.",
        "pseudocode": "print(*nums[::-1])",
        "explanation": "nums[::-1] steps backwards through the entire list.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*nums[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Modifying in-place with .reverse() and trying to print its return value (which is None)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "lists",
            "slicing"
        ]
    },
    {
        "id": "py-prob-06-04",
        "levelId": "py-level-06",
        "title": "Count Occurrences",
        "type": "coding",
        "difficulty": "beginner",
        "order": 4,
        "description": "Given a target integer `T` on the first line, followed by `N` integers on the second line:\nCount and print how many times `T` appears in the list.\n\nUse Python's `arr.count(T)` method.",
        "whyThisMatters": "List methods like `count()`, `index()`, and `remove()` provide concise utility operations.",
        "concepts": [
            "list count",
            "occurrences"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Use list.count() method"
        ],
        "constraints": [
            "N >= 0"
        ],
        "examples": [
            {
                "input": "3\n1 3 5 3 7 3",
                "output": "3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3\n1 3 5 3 7 3",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "9\n1 2 3 4",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Count target in arr\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "arr.count(target)"
        ],
        "howToThink": [
            "Use arr.count(target)."
        ],
        "approach": "Use built-in list count.",
        "pseudocode": "print(arr.count(target))",
        "explanation": "list.count(x) iterates through the list counting matching elements in O(N).",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        print(arr.count(target))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Reading input tokens in reverse order"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "lists"
        ]
    },
    {
        "id": "py-prob-06-05",
        "levelId": "py-level-06",
        "title": "Remove All Occurrences",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "Given a target value `T` followed by a list of integers `arr`:\nCreate and print a new list with all occurrences of `T` removed, space-separated.\n(If no elements remain, print empty line).",
        "whyThisMatters": "Filtering elements out of lists using comprehensions `[x for x in arr if x != T]` is the idiomatic Python way to filter.",
        "concepts": [
            "list filtering",
            "comprehensions"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Filter lists using list comprehension"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "2\n1 2 3 2 4 2 5",
                "output": "1 3 4 5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 3 2 4 2 5",
                "expectedOutput": "1 3 4 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "7\n7 7 7",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Filter out target\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "filtered = [x for x in arr if x != target], print(*filtered)."
        ],
        "howToThink": [
            "Keep only elements that do not equal target."
        ],
        "approach": "List comprehension with != condition.",
        "pseudocode": "res = [x for x in arr if x != target]\nprint(*res)",
        "explanation": "List comprehension creates a new filtered list without mutating the original.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        res = [x for x in arr if x != target]\n        print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Modifying list with .remove() during iteration (skips elements)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "filtering",
            "lists"
        ]
    },
    {
        "id": "py-prob-06-06",
        "levelId": "py-level-06",
        "title": "Second Largest Element",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "Given an array of integers, find the second strictly largest unique value in the array.\nIf no distinct second largest element exists (e.g. all elements are equal or length < 2), print `-1`.",
        "whyThisMatters": "A classic interview warmup testing unique deduplication and tracking two maxima simultaneously.",
        "concepts": [
            "second largest",
            "sets",
            "extrema"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Find second largest unique element in array"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "12 35 1 10 34 1",
                "output": "34"
            },
            {
                "input": "10 10 10",
                "output": "-1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "12 35 1 10 34 1",
                "expectedOutput": "34",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 10 10",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "5 20",
                "expectedOutput": "5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Find second largest unique\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Convert to set to remove duplicates: unique = sorted(set(nums)). If len(unique) >= 2 return unique[-2] else -1."
        ],
        "howToThink": [
            "Deduplicate with set, sort ascending, check second to last element."
        ],
        "approach": "Deduplicate with set, sort and take [-2].",
        "pseudocode": "unique = sorted(set(nums))\nif len(unique) < 2: print(-1)\nelse: print(unique[-2])",
        "explanation": "set() removes duplicates in O(N), sorting unique values allows direct access to second largest.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    unique = sorted(set(nums))\n    if len(unique) < 2:\n        print(-1)\n    else:\n        print(unique[-2])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing when the largest number appears multiple times"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "lists",
            "sorting"
        ]
    },
    {
        "id": "py-prob-06-07",
        "levelId": "py-level-06",
        "title": "Rotate List Right by K Steps",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "Given an integer `K` followed by a list of `N` integers:\nRotate the array to the right by `K` steps.\nFor example, `[1, 2, 3, 4, 5]` rotated by `2` steps becomes `[4, 5, 1, 2, 3]`.\n\nPrint the rotated array space-separated.",
        "whyThisMatters": "Array rotation using slice concatenation `arr[-k:] + arr[:-k]` is a classic Python interview demonstration.",
        "concepts": [
            "array rotation",
            "slicing",
            "modulo"
        ],
        "prerequisites": [
            "lists",
            "slicing"
        ],
        "learningObjectives": [
            "Rotate array using modulo and slicing"
        ],
        "constraints": [
            "N >= 1, K >= 0"
        ],
        "examples": [
            {
                "input": "2\n1 2 3 4 5",
                "output": "4 5 1 2 3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 3 4 5",
                "expectedOutput": "4 5 1 2 3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3\n1 2 3 4",
                "expectedOutput": "2 3 4 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        arr = tokens[1:]\n        # Rotate arr right by k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "k = k % len(arr). Rotated list is arr[-k:] + arr[:-k]."
        ],
        "howToThink": [
            "Take effective k = k % n. The last k elements move to the front."
        ],
        "approach": "Use slicing: arr[-k:] + arr[:-k].",
        "pseudocode": "k = k % len(arr)\nif k == 0: print(*arr)\nelse: print(*(arr[-k:] + arr[:-k]))",
        "explanation": "Slice concatenation rotates the array in linear O(N) time with minimal code.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        arr = tokens[1:]\n        n = len(arr)\n        if n == 0:\n            return\n        k = k % n\n        if k == 0:\n            print(*arr)\n        else:\n            print(*(arr[-k:] + arr[:-k]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Not taking k % n when k > n"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "rotation",
            "arrays"
        ]
    },
    {
        "id": "py-prob-06-08",
        "levelId": "py-level-06",
        "title": "Merge Two Sorted Lists",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "Given two sorted integer lists `A` and `B` on separate lines:\nMerge them into a single sorted list and print the elements space-separated.",
        "whyThisMatters": "Merge step is the heart of MergeSort and two-pointer merging.",
        "concepts": [
            "merge sorted",
            "sorting",
            "lists"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Merge two sorted arrays"
        ],
        "constraints": [
            "Lists are non-empty"
        ],
        "examples": [
            {
                "input": "1 3 5\n2 4 6",
                "output": "1 2 3 4 5 6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 3 5\n2 4 6",
                "expectedOutput": "1 2 3 4 5 6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 20\n5 15 25",
                "expectedOutput": "5 10 15 20 25",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Read both lists and merge\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(a + b) or two pointers."
        ],
        "howToThink": [
            "Combine both lists and sort."
        ],
        "approach": "Combine and sort with sorted(a + b).",
        "pseudocode": "print(*sorted(a + b))",
        "explanation": "Python's Timsort merges sorted segments in O(N) linear time.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().split()\n    if raw:\n        nums = list(map(int, raw))\n        print(*sorted(nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Concatenating without sorting"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sorting",
            "merge"
        ]
    },
    {
        "id": "py-prob-06-09",
        "levelId": "py-level-06",
        "title": "Filter Evens with List Comprehension",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "Read a list of integers from input.\nUse a list comprehension `[x for x in nums if x % 2 == 0]` to filter all even numbers.\nPrint the even numbers space-separated.",
        "whyThisMatters": "List comprehensions are the most celebrated feature of Python, replacing boilerplate for-loops.",
        "concepts": [
            "list comprehension",
            "filtering",
            "parity"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Write filtered list comprehensions"
        ],
        "constraints": [
            "Integer inputs"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5 6 7 8",
                "output": "2 4 6 8"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5 6 7 8",
                "expectedOutput": "2 4 6 8",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 3 5",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Use list comprehension\n    evens = [x for x in nums if x % 2 == 0]\n    print(*evens)\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "evens = [x for x in nums if x % 2 == 0]"
        ],
        "howToThink": [
            "Comprehension syntax: [item for item in iterable if condition]."
        ],
        "approach": "List comprehension filtering.",
        "pseudocode": "print(*(x for x in nums if x % 2 == 0))",
        "explanation": "Idiomatic Python filter pattern.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    evens = [x for x in nums if x % 2 == 0]\n    print(*evens)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Putting 'if' before 'for' (which is for ternary transformations, not filtering)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "comprehensions"
        ]
    },
    {
        "id": "py-prob-06-10",
        "levelId": "py-level-06",
        "title": "Matrix Diagonal Sum",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Given dimension `N` followed by an `N x N` 2D matrix of integers:\nCalculate and print the sum of the primary diagonal elements (`matrix[i][i]` for `i` from `0` to `N - 1`).",
        "whyThisMatters": "2D list navigation using row and column indexing is mandatory for grid problems and matrix algorithms.",
        "concepts": [
            "2D lists",
            "matrices",
            "diagonals"
        ],
        "prerequisites": [
            "lists"
        ],
        "learningObjectives": [
            "Index and traverse 2D lists / matrices"
        ],
        "constraints": [
            "1 <= N <= 100"
        ],
        "examples": [
            {
                "input": "3\n1 2 3\n4 5 6\n7 8 9",
                "output": "15"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3\n1 2 3\n4 5 6\n7 8 9",
                "expectedOutput": "15",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2\n10 20\n30 40",
                "expectedOutput": "50",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        matrix_elements = tokens[1:]\n        # Reconstruct matrix and sum diagonal\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "matrix[i][i] is at index i * n + i in the flat list of elements."
        ],
        "howToThink": [
            "Diagonal elements are at flat index i * n + i for i in range(n)."
        ],
        "approach": "Sum flat indices i * n + i.",
        "pseudocode": "diag_sum = sum(matrix_elements[i * n + i] for i in range(n))\nprint(diag_sum)",
        "explanation": "In an N x N matrix stored flat, position (i, i) is at offset i * N + i.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        elements = tokens[1:]\n        diag_sum = sum(elements[i * n + i] for i in range(n))\n        print(diag_sum)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Double counting or wrong flat index computation"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "matrices",
            "2D lists"
        ]
    }
];
