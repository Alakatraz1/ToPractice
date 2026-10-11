import { Problem } from '../types';

export const pyLevel17Problems: Problem[] = [
    {
        "id": "py-prob-17-01",
        "levelId": "py-level-17",
        "title": "Recursive Factorial",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Compute the factorial of `N` (`N!`) using a recursive function:\n```python\ndef fact(n):\n    if n <= 1: return 1\n    return n * fact(n - 1)\n```\nPrint `N!`.",
        "whyThisMatters": "Factorial is the canonical introduction to base cases and recursive stack unwinding.",
        "concepts": [
            "recursion",
            "base case",
            "factorial"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Write a recursive function with terminating base case"
        ],
        "constraints": [
            "0 <= N <= 15"
        ],
        "examples": [
            {
                "input": "5",
                "output": "120"
            },
            {
                "input": "0",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5",
                "expectedOutput": "120",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "def fact(n: int) -> int:\n    # Implement recursive factorial\n    pass\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fact(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "if n <= 1: return 1; return n * fact(n - 1)"
        ],
        "howToThink": [
            "Base case: 0! = 1. Recursive case: n * fact(n - 1)."
        ],
        "approach": "Recursive definition.",
        "pseudocode": "def fact(n):\n    if n <= 1: return 1\n    return n * fact(n - 1)",
        "explanation": "Executes calls down to base case and multiplies upon return.",
        "solution": "def fact(n: int) -> int:\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fact(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Omitting base case causing RecursionError"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "recursion"
        ]
    },
    {
        "id": "py-prob-17-02",
        "levelId": "py-level-17",
        "title": "Recursive Fibonacci with Memoization",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "Compute the N-th Fibonacci number recursively using `@functools.lru_cache` to eliminate redundant recalculation.\nPrint the result.",
        "whyThisMatters": "Shows how Python's `@lru_cache` decorator turns O(2^N) naive recursion into O(N) dynamic programming with one line.",
        "concepts": [
            "memoization",
            "lru_cache",
            "fibonacci"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Use @functools.lru_cache to memoize recursive functions"
        ],
        "constraints": [
            "1 <= N <= 50"
        ],
        "examples": [
            {
                "input": "10",
                "output": "55"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10",
                "expectedOutput": "55",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "30",
                "expectedOutput": "832040",
                "hidden": false
            }
        ],
        "starterCode": "from functools import lru_cache\nimport sys\n\n@lru_cache(maxsize=None)\ndef fib(n: int) -> int:\n    if n <= 2: return 1\n    return fib(n - 1) + fib(n - 2)\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fib(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "fib(1) = 1, fib(2) = 1, fib(n) = fib(n - 1) + fib(n - 2)."
        ],
        "howToThink": [
            "Memoization caches results so each subproblem fib(k) is solved only once."
        ],
        "approach": "lru_cache memoized recursion.",
        "pseudocode": "@lru_cache\ndef fib(n):\n    if n <= 2: return 1\n    return fib(n-1) + fib(n-2)",
        "explanation": "Reduces calls from billions to exactly N.",
        "solution": "from functools import lru_cache\nimport sys\n\n@lru_cache(maxsize=None)\ndef fib(n: int) -> int:\n    if n <= 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fib(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Naive recursion without memoization timing out"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "recursion",
            "memoization"
        ]
    },
    {
        "id": "py-prob-17-03",
        "levelId": "py-level-17",
        "title": "Binary Exponentiation Pow(x, n) in O(log N)",
        "type": "coding",
        "difficulty": "medium",
        "order": 3,
        "description": "LeetCode #50 Pow(x, n).\nCalculate `x ** n` in `O(log n)` time using divide and conquer:\n- If `n == 0`, return 1\n- If `n` is even: `pow(x * x, n // 2)`\n- If `n` is odd: `x * pow(x, n - 1)`\n\nGiven integer `base` and non-negative integer `exp`, print `base ** exp`.",
        "whyThisMatters": "Binary exponentiation is the fundamental logarithmic exponentiation algorithm in cryptography (RSA).",
        "concepts": [
            "binary exponentiation",
            "divide and conquer",
            "logarithmic recursion"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Implement O(log N) fast power"
        ],
        "constraints": [
            "exp >= 0"
        ],
        "examples": [
            {
                "input": "2 10",
                "output": "1024"
            },
            {
                "input": "3 5",
                "output": "243"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 10",
                "expectedOutput": "1024",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3 5",
                "expectedOutput": "243",
                "hidden": false
            }
        ],
        "starterCode": "def my_pow(x: int, n: int) -> int:\n    # Binary exponentiation O(log n)\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(my_pow(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "if n == 0: return 1. half = my_pow(x, n // 2). If n % 2 == 0 return half * half else return x * half * half."
        ],
        "howToThink": [
            "Square the base and halve the exponent on each step."
        ],
        "approach": "Divide and conquer power.",
        "pseudocode": "def pow(x, n):\n    if n == 0: return 1\n    half = pow(x, n // 2)\n    if n % 2 == 0: return half * half\n    return x * half * half",
        "explanation": "Halving exponent at each step takes log2(N) steps.",
        "solution": "def my_pow(x: int, n: int) -> int:\n    if n == 0:\n        return 1\n    half = my_pow(x, n // 2)\n    if n % 2 == 0:\n        return half * half\n    return x * half * half\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(my_pow(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Calling my_pow(x, n // 2) twice instead of caching half"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(log N)",
        "interviewRelevance": "high",
        "tags": [
            "divide and conquer",
            "math"
        ]
    },
    {
        "id": "py-prob-17-04",
        "levelId": "py-level-17",
        "title": "Reverse String Recursively",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "Given a string `S`, reverse it using a pure recursive function without using `[::-1]` or loops:\n`rev(s) = rev(s[1:]) + s[0]` (base case: `len(s) <= 1`).\nPrint the reversed string.",
        "whyThisMatters": "Deconstructs problem into smaller subproblem `s[1:]` plus boundary element.",
        "concepts": [
            "recursion",
            "string reversal"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Implement recursive string reversal"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "hello",
                "output": "olleh"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "hello",
                "expectedOutput": "olleh",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "a",
                "expectedOutput": "a",
                "hidden": false
            }
        ],
        "starterCode": "def rev(s: str) -> str:\n    # Recursive string reverse\n    pass\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(rev(s))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "if len(s) <= 1: return s; return rev(s[1:]) + s[0]"
        ],
        "howToThink": [
            "Reverse of s is (reverse of all characters after the first) + first character."
        ],
        "approach": "Recursive reduction.",
        "pseudocode": "def rev(s):\n    if len(s) <= 1: return s\n    return rev(s[1:]) + s[0]",
        "explanation": "Standard recursive formulation of sequence reversal.",
        "solution": "def rev(s: str) -> str:\n    if len(s) <= 1:\n        return s\n    return rev(s[1:]) + s[0]\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(rev(s))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Incorrect base case check"
        ],
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "recursion"
        ]
    },
    {
        "id": "py-prob-17-05",
        "levelId": "py-level-17",
        "title": "Subsets (Power Set Generation)",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #78 Subsets.\nGiven an integer array `nums` of unique elements:\nGenerate all possible subsets (the power set).\nA solution set must not contain duplicate subsets.\nPrint each subset sorted on a separate line (empty subset printed as empty line), sorted lexicographically.",
        "whyThisMatters": "Classic binary inclusion-exclusion decision tree (take vs skip element).",
        "concepts": [
            "subsets",
            "power set",
            "backtracking"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Generate 2^N power set using backtracking"
        ],
        "constraints": [
            "Elements unique, N <= 10"
        ],
        "examples": [
            {
                "input": "1 2",
                "output": "\n1\n1 2\n2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2",
                "expectedOutput": "\n1\n1 2\n2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Generate subsets with backtracking\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "res = [[]]; for x in sorted(nums): res += [sub + [x] for sub in res]. Sort res."
        ],
        "howToThink": [
            "For each element, duplicate existing subsets and add current element to them."
        ],
        "approach": "Cascading iterative or backtracking generation.",
        "pseudocode": "res = [[]]\nfor x in sorted(nums):\n    res += [s + [x] for s in res]\nres.sort()\nfor s in res: print(*s)",
        "explanation": "Generates all 2^N subsets systematically.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    res = [[]]\n    for x in sorted(nums):\n        res += [sub + [x] for sub in res]\n    res.sort()\n    for s in res:\n        print(*s)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Mutating subset in-place without copying in backtracking"
        ],
        "timeComplexity": "O(N * 2^N)",
        "spaceComplexity": "O(N * 2^N)",
        "interviewRelevance": "high",
        "tags": [
            "backtracking",
            "subsets",
            "must-know"
        ]
    },
    {
        "id": "py-prob-17-06",
        "levelId": "py-level-17",
        "title": "Permutations of a List",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #46 Permutations.\nGiven an array `nums` of distinct integers, generate all possible permutations (orderings of elements).\nPrint each permutation space-separated on a separate line, in lexicographical order.",
        "whyThisMatters": "`N!` permutations generated via swap backtracking or `itertools.permutations`.",
        "concepts": [
            "permutations",
            "backtracking",
            "itertools"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Generate all N! permutations of an array"
        ],
        "constraints": [
            "Distinct integers, N <= 6"
        ],
        "examples": [
            {
                "input": "1 2 3",
                "output": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3",
                "expectedOutput": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom itertools import permutations\n\ndef solve():\n    nums = sorted(map(int, sys.stdin.read().split()))\n    for p in permutations(nums):\n        print(*p)\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "itertools.permutations(sorted(nums))"
        ],
        "howToThink": [
            "Generate N! permutations in lexicographical order."
        ],
        "approach": "Use itertools.permutations.",
        "pseudocode": "for p in permutations(sorted(nums)): print(*p)",
        "explanation": "Standard combinatorial generation.",
        "solution": "import sys\nfrom itertools import permutations\n\ndef solve():\n    raw = sys.stdin.read().split()\n    if raw:\n        nums = sorted(map(int, raw))\n        for p in permutations(nums):\n            print(*p)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Not sorting input before generating permutations"
        ],
        "timeComplexity": "O(N * N!)",
        "spaceComplexity": "O(N * N!)",
        "interviewRelevance": "high",
        "tags": [
            "permutations",
            "backtracking"
        ]
    },
    {
        "id": "py-prob-17-07",
        "levelId": "py-level-17",
        "title": "Combinations of Size K",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #77 Combinations.\nGiven two integers `N` and `K` on one line:\nReturn all possible combinations of `K` numbers chosen from the range `1` to `N`.\nPrint each combination space-separated on a separate line in lexicographical order.",
        "whyThisMatters": "Binomial coefficient C(N, K) choice problems.",
        "concepts": [
            "combinations",
            "itertools",
            "backtracking"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Generate combinations of size K"
        ],
        "constraints": [
            "1 <= K <= N <= 10"
        ],
        "examples": [
            {
                "input": "4 2",
                "output": "1 2\n1 3\n1 4\n2 3\n2 4\n3 4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "4 2",
                "expectedOutput": "1 2\n1 3\n1 4\n2 3\n2 4\n3 4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom itertools import combinations\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 2:\n        n, k = tokens[0], tokens[1]\n        for c in combinations(range(1, n + 1), k):\n            print(*c)\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "itertools.combinations(range(1, n + 1), k)"
        ],
        "howToThink": [
            "Choose k elements from 1 to n."
        ],
        "approach": "Use combinations generator.",
        "pseudocode": "for c in combinations(range(1, n + 1), k): print(*c)",
        "explanation": "Combinations generator produces lexicographically ordered tuples.",
        "solution": "import sys\nfrom itertools import combinations\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 2:\n        n, k = tokens[0], tokens[1]\n        for c in combinations(range(1, n + 1), k):\n            print(*c)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Generating permutations instead of combinations (where order does not matter)"
        ],
        "timeComplexity": "O(K * C(N, K))",
        "spaceComplexity": "O(C(N, K))",
        "interviewRelevance": "high",
        "tags": [
            "combinations",
            "backtracking"
        ]
    },
    {
        "id": "py-prob-17-08",
        "levelId": "py-level-17",
        "title": "Generate Valid Parentheses",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "LeetCode #22 Generate Parentheses.\nGiven `N` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\nPrint each valid combination on a separate line in lexicographical order.",
        "whyThisMatters": "Catalan number C(N) constrained backtracking: only add ')' if close_count < open_count.",
        "concepts": [
            "generate parentheses",
            "catalan numbers",
            "backtracking pruning"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Prune invalid search paths in recursive backtracking"
        ],
        "constraints": [
            "1 <= N <= 8"
        ],
        "examples": [
            {
                "input": "3",
                "output": "((()))\n(()())\n(())()\n()(())\n()()()"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3",
                "expectedOutput": "((()))\n(()())\n(())()\n()(())\n()()()",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1",
                "expectedOutput": "()",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Backtracking to generate parentheses\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "backtrack(open_cnt, close_cnt, cur_str). If open_cnt < n: add '('. If close_cnt < open_cnt: add ')'. When len == 2*n: res.append."
        ],
        "howToThink": [
            "You can always add '(' if open < n. You can only add ')' if close < open."
        ],
        "approach": "Pruned recursive backtracking.",
        "pseudocode": "res = []\ndef backtrack(op, cl, cur):\n    if len(cur) == 2 * n: res.append(cur); return\n    if op < n: backtrack(op + 1, cl, cur + '(')\n    if cl < op: backtrack(op, cl + 1, cur + ')')\nbacktrack(0, 0, '')\nfor s in res: print(s)",
        "explanation": "Only generates valid prefixes, avoiding brute-force generation and validation.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if not raw:\n        return\n    n = int(raw)\n    res = []\n    def backtrack(op, cl, cur):\n        if len(cur) == 2 * n:\n            res.append(cur)\n            return\n        if op < n:\n            backtrack(op + 1, cl, cur + '(')\n        if cl < op:\n            backtrack(op, cl + 1, cur + ')')\n    backtrack(0, 0, '')\n    for s in res:\n        print(s)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Adding ')' when close >= open, causing invalid prefix"
        ],
        "timeComplexity": "O(4^N / sqrt(N))",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "backtracking",
            "must-know"
        ]
    },
    {
        "id": "py-prob-17-09",
        "levelId": "py-level-17",
        "title": "Combination Sum",
        "type": "coding",
        "difficulty": "medium",
        "order": 9,
        "description": "LeetCode #39 Combination Sum.\nGiven an array of distinct integers `candidates` on line 1, and target `T` on line 2:\nFind all unique combinations in `candidates` where the candidate numbers sum to `T`.\nThe same number may be chosen from `candidates` an unlimited number of times.\nPrint each combination sorted space-separated on a separate line.",
        "whyThisMatters": "Unbounded knapsack backtracking decision tree (reuse candidate or advance index).",
        "concepts": [
            "combination sum",
            "unbounded knapsack",
            "backtracking"
        ],
        "prerequisites": [
            "recursion"
        ],
        "learningObjectives": [
            "Implement unbounded candidate reuse in backtracking"
        ],
        "constraints": [
            "T <= 30"
        ],
        "examples": [
            {
                "input": "2 3 6 7\n7",
                "output": "2 2 3\n7"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 3 6 7\n7",
                "expectedOutput": "2 2 3\n7",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        candidates = sorted(map(int, lines[0].split()))\n        target = int(lines[1].strip())\n        # Combination sum backtracking\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "backtrack(start_idx, remain, path). Loop i from start_idx: if remain - candidates[i] >= 0: backtrack(i, remain - candidates[i], path + [candidates[i]])."
        ],
        "howToThink": [
            "Pass i (not i + 1) to allow unlimited reuse of the current candidate."
        ],
        "approach": "Backtracking with start index restriction.",
        "pseudocode": "res = []\ndef dfs(start, rem, path):\n    if rem == 0: res.append(path); return\n    for i in range(start, len(cands)):\n        if cands[i] > rem: break\n        dfs(i, rem - cands[i], path + [cands[i]])\ndfs(0, target, [])\nfor p in res: print(*p)",
        "explanation": "Sorting candidates allows early break pruning when candidate > rem.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        candidates = sorted(map(int, lines[0].split()))\n        target = int(lines[1].strip())\n        res = []\n        def dfs(start, rem, path):\n            if rem == 0:\n                res.append(path)\n                return\n            for i in range(start, len(candidates)):\n                if candidates[i] > rem:\n                    break\n                dfs(i, rem - candidates[i], path + [candidates[i]])\n        dfs(0, target, [])\n        for p in res:\n            print(*p)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Advancing index to i + 1 (disallowing valid reuse)"
        ],
        "timeComplexity": "O(2^T)",
        "spaceComplexity": "O(T)",
        "interviewRelevance": "high",
        "tags": [
            "backtracking",
            "must-know"
        ]
    },
    {
        "id": "py-prob-17-10",
        "levelId": "py-level-17",
        "title": "Word Search in Grid (DFS Backtracking)",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "LeetCode #79 Word Search.\nGiven an `M x N` grid of characters and a word `W`:\nCheck if `W` exists in the grid.\nThe word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring).\nThe same letter cell may not be used more than once.\nPrint `True` if found, else `False`.",
        "whyThisMatters": "2D grid DFS with visited marking and restoration (`backtracking mark & unmark`).",
        "concepts": [
            "word search",
            "2D grid dfs",
            "backtracking"
        ],
        "prerequisites": [
            "recursion",
            "2D lists"
        ],
        "learningObjectives": [
            "Implement DFS backtracking on 2D grid with in-place visited marking"
        ],
        "constraints": [
            "M, N <= 6"
        ],
        "examples": [
            {
                "input": "ABCE SFCS ADEE\nABCCED",
                "output": "True"
            },
            {
                "input": "ABCE SFCS ADEE\nABCB",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "ABCE SFCS ADEE\nABCCED",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "ABCE SFCS ADEE\nABCB",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Word search DFS\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "dfs(r, c, k). If k == len(word): return True. Mark grid[r][c] = '#', search 4 directions, restore grid[r][c]."
        ],
        "howToThink": [
            "Explore 4 neighbors, backtrack cell value upon returning."
        ],
        "approach": "2D grid DFS backtracking.",
        "pseudocode": "def dfs(r, c, idx):\n    if idx == len(word): return True\n    if not (0 <= r < R and 0 <= c < C and grid[r][c] == word[idx]): return False\n    temp = grid[r][c]\n    grid[r][c] = '#'\n    found = any(dfs(r+dr, c+dc, idx+1) for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)])\n    grid[r][c] = temp\n    return found",
        "explanation": "Restoring grid[r][c] = temp resets cell state for other search branches.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        grid = [list(row) for row in lines[0].split()]\n        word = lines[1].strip()\n        R = len(grid)\n        C = len(grid[0]) if R else 0\n        def dfs(r, c, idx):\n            if idx == len(word):\n                return True\n            if not (0 <= r < R and 0 <= c < C and grid[r][c] == word[idx]):\n                return False\n            temp = grid[r][c]\n            grid[r][c] = '#'\n            found = (dfs(r + 1, c, idx + 1) or\n                     dfs(r - 1, c, idx + 1) or\n                     dfs(r, c + 1, idx + 1) or\n                     dfs(r, c - 1, idx + 1))\n            grid[r][c] = temp\n            return found\n        for r in range(R):\n            for c in range(C):\n                if dfs(r, c, 0):\n                    print('True')\n                    return\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to unmark visited cell when backtracking"
        ],
        "timeComplexity": "O(R * C * 3^L)",
        "spaceComplexity": "O(L)",
        "interviewRelevance": "high",
        "tags": [
            "grid dfs",
            "backtracking",
            "must-know"
        ]
    }
];
