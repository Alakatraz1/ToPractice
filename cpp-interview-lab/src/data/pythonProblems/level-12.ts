import { Problem } from '../types';

export const pyLevel12Problems: Problem[] = [
    {
        "id": "py-prob-12-01",
        "levelId": "py-level-12",
        "title": "List in vs Set in (O(N) vs O(1))",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "Checking membership in a Python list (`x in my_list`) takes linear `O(N)` time.\nChecking membership in a Python set (`x in my_set`) takes constant `O(1)` time!\n\n**Task:**\nGiven an array of allowed IDs on line 1, and query IDs on line 2:\nConvert allowed IDs to a `set` and count how many query IDs are allowed.\nPrint the count.",
        "whyThisMatters": "Converting lists to sets before repeated lookups turns O(M * N) algorithms into O(M + N).",
        "concepts": [
            "big-o",
            "set lookup",
            "o(1) vs o(n)"
        ],
        "prerequisites": [
            "complexity"
        ],
        "learningObjectives": [
            "Optimize lookup operations from O(N) to O(1) using sets"
        ],
        "constraints": [
            "Allowed and query lists"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5\n3 5 7 9 1",
                "output": "3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5\n3 5 7 9 1",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 20\n30 40",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        allowed = set(map(int, lines[0].split()))\n        queries = list(map(int, lines[1].split()))\n        print(sum(1 for q in queries if q in allowed))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "allowed_set = set(allowed), then sum(1 for q in queries if q in allowed_set)."
        ],
        "howToThink": [
            "Converting allowed to a set allows O(1) membership check per query."
        ],
        "approach": "Use set for O(1) lookup.",
        "pseudocode": "allowed = set(map(int, lines[0].split()))\nprint(sum(1 for q in queries if q in allowed))",
        "explanation": "Reduces runtime from quadratic O(N * Q) to linear O(N + Q).",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        allowed = set(map(int, lines[0].split()))\n        queries = list(map(int, lines[1].split()))\n        print(sum(1 for q in queries if q in allowed))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Leaving allowed as a list causing O(N*M) TLE on large inputs"
        ],
        "timeComplexity": "O(N + Q)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "complexity",
            "sets"
        ]
    },
    {
        "id": "py-prob-12-02",
        "levelId": "py-level-12",
        "title": "Prefix Sum Array for O(1) Range Queries",
        "type": "coding",
        "difficulty": "medium",
        "order": 2,
        "description": "Given an array `arr` of size `N`, compute its prefix sum array `P` where `P[0] = 0` and `P[i] = P[i-1] + arr[i-1]`.\nThen for query range `[L, R]` (0-based inclusive):\nThe sum of subarray from index `L` to `R` can be queried in strictly `O(1)` time as `P[R + 1] - P[L]`!\n\n**Task:**\nInput format: `L R` on first line, array elements on second line.\nCompute and print the range sum using prefix sums.",
        "whyThisMatters": "Prefix sums optimize repetitive range queries from O(N) to O(1).",
        "concepts": [
            "prefix sums",
            "o(1) query",
            "range queries"
        ],
        "prerequisites": [
            "complexity",
            "lists"
        ],
        "learningObjectives": [
            "Construct and query a prefix sum array in O(1)"
        ],
        "constraints": [
            "0 <= L <= R < N"
        ],
        "examples": [
            {
                "input": "1 3\n10 20 30 40 50",
                "output": "90"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 3\n10 20 30 40 50",
                "expectedOutput": "90",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0 4\n1 2 3 4 5",
                "expectedOutput": "15",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        l, r = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        # Compute prefix sums\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "P = [0]. For x in arr: P.append(P[-1] + x). Range sum is P[r + 1] - P[l]."
        ],
        "howToThink": [
            "Build cumulative sum array. Range sum from L to R is P[R+1] - P[L]."
        ],
        "approach": "Prefix sum array construction and O(1) subtraction.",
        "pseudocode": "P = [0]\nfor x in arr: P.append(P[-1] + x)\nprint(P[r + 1] - P[l])",
        "explanation": "Precomputing takes O(N), every range query thereafter is instantaneous O(1).",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        l, r = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        P = [0]\n        for x in arr:\n            P.append(P[-1] + x)\n        print(P[r + 1] - P[l])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Off-by-one error using P[r] - P[l] instead of P[r+1] - P[l]"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "prefix sums",
            "essential"
        ]
    },
    {
        "id": "py-prob-12-03",
        "levelId": "py-level-12",
        "title": "Space-Optimized Fibonacci",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "Given `N`, calculate the N-th Fibonacci number.\nInstead of using an array of size `N` (which costs O(N) auxiliary space),\nmaintain only two moving variables `a` and `b` to achieve `O(1)` space complexity.\nPrint the result.",
        "whyThisMatters": "Demonstrates state compression: when only the last K values are needed, O(K) space suffices.",
        "concepts": [
            "space optimization",
            "o(1) space",
            "state compression"
        ],
        "prerequisites": [
            "fibonacci"
        ],
        "learningObjectives": [
            "Compress space from O(N) to O(1)"
        ],
        "constraints": [
            "1 <= N <= 50"
        ],
        "examples": [
            {
                "input": "7",
                "output": "13"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7",
                "expectedOutput": "13",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute with O(1) space\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "a, b = 1, 1; for _ in range(n - 1): a, b = b, a + b"
        ],
        "howToThink": [
            "Only need previous two values at any given point."
        ],
        "approach": "Rolling variables.",
        "pseudocode": "a, b = 1, 1\nfor _ in range(n - 1): a, b = b, a + b\nprint(a)",
        "explanation": "Two variable rotation takes O(1) space instead of an O(N) array.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        a, b = 1, 1\n        for _ in range(n - 1):\n            a, b = b, a + b\n        print(a)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Allocating an array of size N when space is constrained"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "space optimization",
            "dp"
        ]
    },
    {
        "id": "py-prob-12-04",
        "levelId": "py-level-12",
        "title": "Majority Element (Boyer-Moore Voting)",
        "type": "coding",
        "difficulty": "medium",
        "order": 4,
        "description": "LeetCode #169 Majority Element.\nGiven an array `arr` of size `N`, find the majority element that appears more than `N // 2` times.\nYou may assume that the majority element always exists in the array.\n\nImplement the Boyer-Moore Voting Algorithm to solve this in `O(N)` time and `O(1)` space complexity.",
        "whyThisMatters": "Boyer-Moore Voting is a legendary algorithm frequently quizzed in technical interviews for its O(1) space efficiency.",
        "concepts": [
            "boyer-moore",
            "majority element",
            "o(1) space"
        ],
        "prerequisites": [
            "complexity"
        ],
        "learningObjectives": [
            "Implement Boyer-Moore Voting Algorithm in O(1) space"
        ],
        "constraints": [
            "Majority element guaranteed to exist"
        ],
        "examples": [
            {
                "input": "3 2 3",
                "output": "3"
            },
            {
                "input": "2 2 1 1 1 2 2",
                "output": "2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 2 3",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2 2 1 1 1 2 2",
                "expectedOutput": "2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Boyer-Moore voting\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "candidate = None, count = 0. For x in nums: if count == 0: candidate = x. count += (1 if x == candidate else -1)."
        ],
        "howToThink": [
            "Different elements cancel each other out; the majority element will survive."
        ],
        "approach": "Boyer-Moore Voting Algorithm.",
        "pseudocode": "candidate = None\ncount = 0\nfor x in nums:\n    if count == 0: candidate = x\n    count += 1 if x == candidate else -1\nprint(candidate)",
        "explanation": "Pairwise cancellation of distinct elements leaves the majority candidate standing in O(N) time and O(1) space.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    candidate = None\n    count = 0\n    for x in nums:\n        if count == 0:\n            candidate = x\n        count += 1 if x == candidate else -1\n    print(candidate)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using hash map (O(N) space) when O(1) space is required"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "algorithms",
            "must-know"
        ]
    },
    {
        "id": "py-prob-12-05",
        "levelId": "py-level-12",
        "title": "Maximum Subarray (Kadane's Algorithm)",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #53 Maximum Subarray.\nGiven an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and print its sum.\n\nImplement Kadane's Algorithm to solve this in `O(N)` time and `O(1)` space.",
        "whyThisMatters": "Kadane's algorithm is the quintessential DP / greedy algorithm for 1D arrays.",
        "concepts": [
            "kadanes algorithm",
            "maximum subarray",
            "dynamic programming"
        ],
        "prerequisites": [
            "complexity"
        ],
        "learningObjectives": [
            "Implement Kadane's algorithm in O(N) time"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "-2 1 -3 4 -1 2 1 -5 4",
                "output": "6"
            },
            {
                "input": "1",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "-2 1 -3 4 -1 2 1 -5 4",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "5 4 -1 7 8",
                "expectedOutput": "23",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Kadane's algorithm\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "max_current = max_global = nums[0]. For x in nums[1:]: max_current = max(x, max_current + x); max_global = max(max_global, max_current)."
        ],
        "howToThink": [
            "At each step, decide whether to extend previous subarray or start fresh from current element."
        ],
        "approach": "Kadane's running sum.",
        "pseudocode": "cur = mx = nums[0]\nfor x in nums[1:]:\n    cur = max(x, cur + x)\n    mx = max(mx, cur)\nprint(mx)",
        "explanation": "Computes maximum subarray ending at each index in a single O(N) pass.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    cur = mx = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        mx = max(mx, cur)\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Initializing max sum to 0 which fails when all numbers are negative"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "kadanes",
            "must-know"
        ]
    },
    {
        "id": "py-prob-12-06",
        "levelId": "py-level-12",
        "title": "Two Pointer In-Place Array Reversal",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Reverse an array in-place without using extra array allocations (`O(1)` auxiliary space).\nUse two pointers `left = 0, right = N - 1` swapping elements until they meet.\nPrint the reversed array space-separated.",
        "whyThisMatters": "Demonstrates true in-place mutation without relying on Python's slice copy allocation.",
        "concepts": [
            "two pointers",
            "in-place mutation",
            "o(1) space"
        ],
        "prerequisites": [
            "lists",
            "two pointers"
        ],
        "learningObjectives": [
            "Reverse array in-place using two pointers"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "10 20 30 40",
                "output": "40 30 20 10"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10 20 30 40",
                "expectedOutput": "40 30 20 10",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    # In-place reversal\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "l, r = 0, len(arr) - 1. While l < r: arr[l], arr[r] = arr[r], arr[l]; l += 1; r -= 1."
        ],
        "howToThink": [
            "Converging pointers from both ends swapping opposite elements."
        ],
        "approach": "Two-pointer swap.",
        "pseudocode": "l, r = 0, len(arr) - 1\nwhile l < r:\n    arr[l], arr[r] = arr[r], arr[l]\n    l += 1; r -= 1\nprint(*arr)",
        "explanation": "Swaps N // 2 times with zero extra memory allocations.",
        "solution": "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    if arr:\n        l, r = 0, len(arr) - 1\n        while l < r:\n            arr[l], arr[r] = arr[r], arr[l]\n            l += 1\n            r -= 1\n        print(*arr)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Looping up to N which swaps elements back to their original positions"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "in-place"
        ]
    },
    {
        "id": "py-prob-12-07",
        "levelId": "py-level-12",
        "title": "Move Zeroes in O(N) Time and O(1) Space",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "LeetCode #283 Move Zeroes.\nGiven an integer array `nums`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements.\nYou must do this in-place without making a copy of the array.\nPrint the array space-separated.",
        "whyThisMatters": "Fast and slow pointer technique for in-place array compaction.",
        "concepts": [
            "two pointers",
            "array compaction",
            "in-place"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Compact array in-place with slow/fast pointers"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "0 1 0 3 12",
                "output": "1 3 12 0 0"
            },
            {
                "input": "0",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "0 1 0 3 12",
                "expectedOutput": "1 3 12 0 0",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "1 2 3",
                "expectedOutput": "1 2 3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Move zeroes in-place\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "insert_pos = 0. For x in nums: if x != 0: nums[insert_pos] = x; insert_pos += 1. Fill remainder with 0."
        ],
        "howToThink": [
            "Shift non-zero elements to front index, fill remaining tail with zeros."
        ],
        "approach": "Two-pointer write index.",
        "pseudocode": "pos = 0\nfor x in nums:\n    if x != 0: nums[pos] = x; pos += 1\nwhile pos < len(nums): nums[pos] = 0; pos += 1\nprint(*nums)",
        "explanation": "Two linear passes in O(N) time and O(1) space.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    pos = 0\n    for x in nums:\n        if x != 0:\n            nums[pos] = x\n            pos += 1\n    while pos < len(nums):\n        nums[pos] = 0\n        pos += 1\n    print(*nums)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Calling nums.remove(0) repeatedly which takes O(N^2) time"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "classic"
        ]
    },
    {
        "id": "py-prob-12-08",
        "levelId": "py-level-12",
        "title": "Product of Array Except Self (Concept)",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "Given an array `nums` of `N` integers:\nReturn an array `output` such that `output[i]` is equal to the product of all elements of `nums` except `nums[i]`.\nYou must solve this in `O(N)` time without using the division operation `/`.\nPrint the output array space-separated.",
        "whyThisMatters": "LeetCode #238 Product of Array Except Self. Teaches prefix products and suffix products.",
        "concepts": [
            "prefix product",
            "suffix product",
            "o(n) time"
        ],
        "prerequisites": [
            "prefix sums"
        ],
        "learningObjectives": [
            "Compute left and right running products in O(N)"
        ],
        "constraints": [
            "N >= 2"
        ],
        "examples": [
            {
                "input": "1 2 3 4",
                "output": "24 12 8 6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4",
                "expectedOutput": "24 12 8 6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-1 1 0 -3 3",
                "expectedOutput": "0 0 9 0 0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Product except self without division\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Compute prefix products on forward pass. Then multiply by suffix products on backward pass."
        ],
        "howToThink": [
            "output[i] = (product of elements before i) * (product of elements after i)."
        ],
        "approach": "Left and right running products.",
        "pseudocode": "n = len(nums)\nres = [1] * n\np = 1\nfor i in range(n): res[i] = p; p *= nums[i]\np = 1\nfor i in range(n-1, -1, -1): res[i] *= p; p *= nums[i]\nprint(*res)",
        "explanation": "Two passes compute prefix and suffix products in linear time with no division.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    n = len(nums)\n    res = [1] * n\n    p = 1\n    for i in range(n):\n        res[i] = p\n        p *= nums[i]\n    p = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= p\n        p *= nums[i]\n    print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using division (which fails on arrays containing zero)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "arrays",
            "must-know"
        ]
    },
    {
        "id": "py-prob-12-09",
        "levelId": "py-level-12",
        "title": "Find Duplicate in 1 to N-1 (Floyd's Cycle)",
        "type": "coding",
        "difficulty": "medium",
        "order": 9,
        "description": "LeetCode #287 Find the Duplicate Number.\nGiven an array of `N + 1` integers where each integer is in range `[1, N]` inclusive:\nThere is only one repeated number in `nums`.\nFind this repeated number without modifying the array and using only `O(1)` extra space.\n\nUse Floyd's Tortoise and Hare (Cycle Detection).",
        "whyThisMatters": "Demonstrates that array indices can be treated as pointer references: `x -> nums[x]`.",
        "concepts": [
            "floyd cycle detection",
            "tortoise and hare",
            "o(1) space"
        ],
        "prerequisites": [
            "complexity"
        ],
        "learningObjectives": [
            "Apply cycle detection to array indexing"
        ],
        "constraints": [
            "Exactly one duplicate exists"
        ],
        "examples": [
            {
                "input": "1 3 4 2 2",
                "output": "2"
            },
            {
                "input": "3 1 3 4 2",
                "output": "3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 3 4 2 2",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3 1 3 4 2",
                "expectedOutput": "3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Floyd's cycle detection\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "slow = nums[0], fast = nums[0]. While True: slow = nums[slow]; fast = nums[nums[fast]]. Break on match."
        ],
        "howToThink": [
            "Array as linked list where node i points to nums[i]. Duplicate creates a cycle."
        ],
        "approach": "Floyd's Tortoise and Hare.",
        "pseudocode": "slow = fast = nums[0]\nwhile True:\n    slow = nums[slow]\n    fast = nums[nums[fast]]\n    if slow == fast: break\nslow = nums[0]\nwhile slow != fast:\n    slow = nums[slow]\n    fast = nums[fast]\nprint(slow)",
        "explanation": "Finds cycle entrance in O(N) time and O(1) memory without array mutation.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]\n        fast = nums[nums[fast]]\n        if slow == fast:\n            break\n    slow = nums[0]\n    while slow != fast:\n        slow = nums[slow]\n        fast = nums[fast]\n    print(slow)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Modifying array or using O(N) set"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "floyd",
            "cycle detection"
        ]
    },
    {
        "id": "py-prob-12-10",
        "levelId": "py-level-12",
        "title": "Time Complexity Identifier Challenge",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Given the name of an algorithmic operation from input:\nPrint its Big-O average time complexity:\n- `list_append` -> `O(1)`\n- `list_insert_0` -> `O(N)`\n- `dict_lookup` -> `O(1)`\n- `set_membership` -> `O(1)`\n- `binary_search` -> `O(log N)`\n- `timsort` -> `O(N log N)`\n- `nested_loops` -> `O(N^2)`\n\nIf unrecognized, print `Unknown`.",
        "whyThisMatters": "Reinforces Big-O knowledge expected in theoretical interview questions.",
        "concepts": [
            "big-o notation",
            "built-in complexity",
            "theory"
        ],
        "prerequisites": [
            "complexity"
        ],
        "learningObjectives": [
            "Recall Big-O complexities of Python built-in data operations"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "list_append",
                "output": "O(1)"
            },
            {
                "input": "binary_search",
                "output": "O(log N)"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "list_append",
                "expectedOutput": "O(1)",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "binary_search",
                "expectedOutput": "O(log N)",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "timsort",
                "expectedOutput": "O(N log N)",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    op = sys.stdin.read().strip()\n    # Print Big-O complexity\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use a dictionary mapping operation name to Big-O string."
        ],
        "howToThink": [
            "Map operation names to complexity."
        ],
        "approach": "Dictionary lookup.",
        "pseudocode": "COMPLEXITY = {'list_append': 'O(1)', ...}\nprint(COMPLEXITY.get(op, 'Unknown'))",
        "explanation": "O(1) dictionary retrieval of theoretical complexity.",
        "solution": "import sys\n\nCOMPLEXITY = {\n    'list_append': 'O(1)',\n    'list_insert_0': 'O(N)',\n    'dict_lookup': 'O(1)',\n    'set_membership': 'O(1)',\n    'binary_search': 'O(log N)',\n    'timsort': 'O(N log N)',\n    'nested_loops': 'O(N^2)'\n}\n\ndef solve():\n    op = sys.stdin.read().strip()\n    print(COMPLEXITY.get(op, 'Unknown'))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Typo in Big-O output formatting"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "theory",
            "big-o"
        ]
    }
];
