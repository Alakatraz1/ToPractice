import { Problem } from '../types';

export const pyLevel20Problems: Problem[] = [
    {
        "id": "py-prob-20-01",
        "levelId": "py-level-20",
        "title": "Search in Rotated Sorted Array",
        "type": "coding",
        "difficulty": "medium",
        "order": 1,
        "description": "LeetCode #33 Search in Rotated Sorted Array.\nGiven target `T` on line 1, and rotated sorted array `nums` of distinct integers on line 2:\nReturn the 0-based index of `T` if it is in `nums`, or `-1` if it is not in `nums`.\nYou must write an algorithm with `O(log n)` runtime complexity.",
        "whyThisMatters": "At least one half `[left, mid]` or `[mid, right]` is always normally sorted.",
        "concepts": [
            "rotated sorted array",
            "binary search",
            "logarithmic search"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Identify sorted half and direct binary search accordingly"
        ],
        "constraints": [
            "Distinct values, O(log N) required"
        ],
        "examples": [
            {
                "input": "0\n4 5 6 7 0 1 2",
                "output": "4"
            },
            {
                "input": "3\n4 5 6 7 0 1 2",
                "output": "-1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "0\n4 5 6 7 0 1 2",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3\n4 5 6 7 0 1 2",
                "expectedOutput": "-1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Search in rotated sorted array O(log N)\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Check if left half is sorted (nums[l] <= nums[mid]). If so, check if target is inside left half. Else right half is sorted."
        ],
        "howToThink": [
            "One half is always strictly sorted. Check if target lies within the sorted half's bounds."
        ],
        "approach": "Identify sorted half in binary search.",
        "pseudocode": "l, r = 0, len(nums) - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    if nums[mid] == target: print(mid); return\n    if nums[l] <= nums[mid]:\n        if nums[l] <= target < nums[mid]: r = mid - 1\n        else: l = mid + 1\n    else:\n        if nums[mid] < target <= nums[r]: l = mid + 1\n        else: r = mid - 1\nprint(-1)",
        "explanation": "Executes in O(log N) logarithmic steps.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target:\n                print(mid)\n                return\n            if nums[l] <= nums[mid]:\n                if nums[l] <= target < nums[mid]:\n                    r = mid - 1\n                else:\n                    l = mid + 1\n            else:\n                if nums[mid] < target <= nums[r]:\n                    l = mid + 1\n                else:\n                    r = mid - 1\n        print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using < instead of <= for left half sorted check"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "must-know"
        ]
    },
    {
        "id": "py-prob-20-02",
        "levelId": "py-level-20",
        "title": "Single Element in a Sorted Array",
        "type": "coding",
        "difficulty": "medium",
        "order": 2,
        "description": "LeetCode #540 Single Element in a Sorted Array.\nYou are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.\nFind this single element that appears only once in `O(log n)` time and `O(1)` space.",
        "whyThisMatters": "Index parity analysis in binary search: before the single element, pairs start at even indices.",
        "concepts": [
            "binary search parity",
            "single element",
            "logarithmic search"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Use index parity in binary search"
        ],
        "constraints": [
            "O(log N) time, O(1) space"
        ],
        "examples": [
            {
                "input": "1 1 2 3 3 4 4 8 8",
                "output": "2"
            },
            {
                "input": "3 3 7 7 10 11 11",
                "output": "10"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 1 2 3 3 4 4 8 8",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3 3 7 7 10 11 11",
                "expectedOutput": "10",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Single element in O(log N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "mid = (l + r) // 2. If mid is odd: mid -= 1. If nums[mid] == nums[mid + 1]: l = mid + 2. Else: r = mid."
        ],
        "howToThink": [
            "Before unique element: first instance at even index, second at odd index. After unique element: pattern shifts."
        ],
        "approach": "Even-index pairing binary search.",
        "pseudocode": "l, r = 0, len(nums) - 1\nwhile l < r:\n    mid = (l + r) // 2\n    if mid % 2 == 1: mid -= 1\n    if nums[mid] == nums[mid + 1]: l = mid + 2\n    else: r = mid\nprint(nums[l])",
        "explanation": "O(log N) parity checks.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    l, r = 0, len(nums) - 1\n    while l < r:\n        mid = (l + r) // 2\n        if mid % 2 == 1:\n            mid -= 1\n        if nums[mid] == nums[mid + 1]:\n            l = mid + 2\n        else:\n            r = mid\n    print(nums[l])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using XOR in O(N) linear time when O(log N) is required"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "clever"
        ]
    },
    {
        "id": "py-prob-20-03",
        "levelId": "py-level-20",
        "title": "Capacity To Ship Packages Within D Days",
        "type": "coding",
        "difficulty": "medium",
        "order": 3,
        "description": "LeetCode #1011.\nA conveyor belt has packages that must be shipped within `days` days.\nThe `i-th` package on the conveyor belt has a weight of `weights[i]`.\nFind the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within `days` days.\nPrint the minimum capacity.",
        "whyThisMatters": "Binary Search on Answer template: search range is `[max(weights), sum(weights)]`.",
        "concepts": [
            "binary search on answer",
            "capacity allocation",
            "predicate verification"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Formulate monotonic verification predicate for binary search on answer"
        ],
        "constraints": [
            "Weights >= 1"
        ],
        "examples": [
            {
                "input": "5\n1 2 3 4 5 6 7 8 9 10",
                "output": "15"
            },
            {
                "input": "3\n3 2 2 4 1 4",
                "output": "6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5\n1 2 3 4 5 6 7 8 9 10",
                "expectedOutput": "15",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3\n3 2 2 4 1 4",
                "expectedOutput": "6",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        days = int(lines[0].strip())\n        weights = list(map(int, lines[1].split()))\n        # Minimum ship capacity\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "def can_ship(cap): test if weights can be split into <= days batches of sum <= cap."
        ],
        "howToThink": [
            "Min capacity is max(weights). Max capacity is sum(weights). Binary search between them."
        ],
        "approach": "Binary search on capacity.",
        "pseudocode": "l, r = max(weights), sum(weights)\nwhile l < r:\n    mid = (l + r) // 2\n    # Test can_ship(mid)\n    d = 1; cur = 0\n    for w in weights:\n        if cur + w > mid: d += 1; cur = 0\n        cur += w\n    if d <= days: r = mid\n    else: l = mid + 1\nprint(l)",
        "explanation": "O(N * log(sum(weights))) optimal solution.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        days = int(lines[0].strip())\n        weights = list(map(int, lines[1].split()))\n        l, r = max(weights), sum(weights)\n        while l < r:\n            mid = (l + r) // 2\n            d = 1\n            cur = 0\n            for w in weights:\n                if cur + w > mid:\n                    d += 1\n                    cur = 0\n                cur += w\n            if d <= days:\n                r = mid\n            else:\n                l = mid + 1\n        print(l)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Setting left bound to 0 instead of max(weights)"
        ],
        "timeComplexity": "O(N log(sum(W)))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "must-know"
        ]
    },
    {
        "id": "py-prob-20-04",
        "levelId": "py-level-20",
        "title": "Koko Eating Bananas",
        "type": "coding",
        "difficulty": "medium",
        "order": 4,
        "description": "LeetCode #875 Koko Eating Bananas.\nKoko loves to eat bananas. There are `n` piles of bananas, the `i-th` pile has `piles[i]` bananas.\nKoko can decide her bananas-per-hour eating speed of `k`.\nEach hour, she chooses some pile and eats `k` bananas from it. If the pile has less than `k` bananas, she eats all of them and will not eat any more bananas during this hour.\nReturn the minimum integer `k` such that she can eat all the bananas within `h` hours.",
        "whyThisMatters": "Standard math ceiling division: `(pile + k - 1) // k` hours per pile.",
        "concepts": [
            "koko bananas",
            "binary search on answer",
            "ceiling division"
        ],
        "prerequisites": [
            "binary search on answer"
        ],
        "learningObjectives": [
            "Use integer ceiling division in binary search predicate"
        ],
        "constraints": [
            "piles[i] >= 1"
        ],
        "examples": [
            {
                "input": "8\n3 6 7 11",
                "output": "4"
            },
            {
                "input": "5\n30 11 23 4 20",
                "output": "30"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "8\n3 6 7 11",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5\n30 11 23 4 20",
                "expectedOutput": "30",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        h = int(lines[0].strip())\n        piles = list(map(int, lines[1].split()))\n        # Minimum eating speed\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Hours needed for speed speed is sum((p + speed - 1) // speed for p in piles). Binary search speed between 1 and max(piles)."
        ],
        "howToThink": [
            "Speed range is 1 to max(piles). Higher speed means fewer hours needed (monotonic)."
        ],
        "approach": "Binary search on eating speed.",
        "pseudocode": "l, r = 1, max(piles)\nwhile l < r:\n    mid = (l + r) // 2\n    hours = sum((p + mid - 1) // mid for p in piles)\n    if hours <= h: r = mid\n    else: l = mid + 1\nprint(l)",
        "explanation": "O(N * log(max(piles))) time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        h = int(lines[0].strip())\n        piles = list(map(int, lines[1].split()))\n        l, r = 1, max(piles)\n        while l < r:\n            mid = (l + r) // 2\n            hours = sum((p + mid - 1) // mid for p in piles)\n            if hours <= h:\n                r = mid\n            else:\n                l = mid + 1\n        print(l)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Float math ceiling errors with math.ceil(p / mid) for large integers"
        ],
        "timeComplexity": "O(N log(max(P)))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "must-know"
        ]
    },
    {
        "id": "py-prob-20-05",
        "levelId": "py-level-20",
        "title": "Search in 2D Matrix II (Top-Right Step)",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #240 Search a 2D Matrix II.\nWrite an efficient algorithm that searches for a value `target` in an `M x N` integer matrix.\nThis matrix has the following properties:\n- Integers in each row are sorted in ascending from left to right.\n- Integers in each column are sorted in ascending from top to bottom.\n\nInput format: Target on line 1, M and N on line 2, followed by rows.\nPrint `True` if found, else `False` in `O(M + N)` time.",
        "whyThisMatters": "Top-right pointer elimination: if element > target move left, if element < target move down.",
        "concepts": [
            "matrix search",
            "top-right pointer",
            "o(m+n) search"
        ],
        "prerequisites": [
            "binary search",
            "matrices"
        ],
        "learningObjectives": [
            "Search row/col sorted matrix in O(M + N) time"
        ],
        "constraints": [
            "Sorted rows and cols"
        ],
        "examples": [
            {
                "input": "5\n5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30",
                "output": "True"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5\n5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30",
                "expectedOutput": "True",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Top-right pointer search\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Start at r = 0, c = N - 1. If matrix[r][c] == target return True. If > target c -= 1 else r += 1."
        ],
        "howToThink": [
            "Top-right corner allows unambiguous decision: left is smaller, down is larger."
        ],
        "approach": "Step-wise matrix elimination.",
        "pseudocode": "r, c = 0, n - 1\nwhile r < m and c >= 0:\n    val = matrix[r][c]\n    if val == target: print('True'); return\n    elif val > target: c -= 1\n    else: r += 1\nprint('False')",
        "explanation": "Eliminates one row or one column per step, taking at most M + N steps.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 3:\n        target = int(lines[0].strip())\n        m, n = map(int, lines[1].split())\n        matrix = [list(map(int, line.split())) for line in lines[2:] if line.strip()]\n        r, c = 0, n - 1\n        while r < m and c >= 0:\n            val = matrix[r][c]\n            if val == target:\n                print('True')\n                return\n            elif val > target:\n                c -= 1\n            else:\n                r += 1\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Starting from (0, 0) where both right and down are larger (ambiguous)"
        ],
        "timeComplexity": "O(M + N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "matrix",
            "two pointers"
        ]
    },
    {
        "id": "py-prob-20-06",
        "levelId": "py-level-20",
        "title": "Find Peak Element in 2D Grid",
        "type": "coding",
        "difficulty": "hard",
        "order": 6,
        "description": "LeetCode #1901 Find a Peak Element II.\nA peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors (top, bottom, left, right).\nGiven an `M x N` matrix where no two adjacent cells are equal:\nFind any peak element and print its coordinates `<row> <col>` in `O(M log N)` time.",
        "whyThisMatters": "Binary search on column midpoints combined with maximum row search.",
        "concepts": [
            "2d peak",
            "binary search mid-col"
        ],
        "prerequisites": [
            "binary search",
            "matrices"
        ],
        "learningObjectives": [
            "Find peak in 2D grid in O(M log N)"
        ],
        "constraints": [
            "M, N <= 500"
        ],
        "examples": [
            {
                "input": "2 2\n1 4\n3 2",
                "output": "0 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 2\n1 4\n3 2",
                "expectedOutput": "0 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        m, n = map(int, lines[0].split())\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        # Find 2D peak\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Mid column mid. Find max element in column mid at row r. If matrix[r][mid] < matrix[r][mid+1]: left = mid + 1 else right = mid."
        ],
        "howToThink": [
            "Find max in mid column. It is already greater than top and bottom neighbors. Just check left and right."
        ],
        "approach": "Column bisection with row max.",
        "pseudocode": "l, r = 0, n - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    max_r = max(range(m), key=lambda r_idx: matrix[r_idx][mid])\n    left_val = matrix[max_r][mid - 1] if mid > 0 else -1\n    right_val = matrix[max_r][mid + 1] if mid < n - 1 else -1\n    if matrix[max_r][mid] > left_val and matrix[max_r][mid] > right_val:\n        print(max_r, mid); return\n    elif right_val > matrix[max_r][mid]: l = mid + 1\n    else: r = mid - 1",
        "explanation": "O(M log N) binary search on columns.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        m, n = map(int, lines[0].split())\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        l, r = 0, n - 1\n        while l <= r:\n            mid = (l + r) // 2\n            max_r = max(range(m), key=lambda r_idx: matrix[r_idx][mid])\n            left_val = matrix[max_r][mid - 1] if mid > 0 else -1\n            right_val = matrix[max_r][mid + 1] if mid < n - 1 else -1\n            if matrix[max_r][mid] > left_val and matrix[max_r][mid] > right_val:\n                print(max_r, mid)\n                return\n            elif right_val > matrix[max_r][mid]:\n                l = mid + 1\n            else:\n                r = mid - 1\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Checking local max of entire grid in O(M*N) instead of O(M log N) bisection"
        ],
        "timeComplexity": "O(M log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "matrix",
            "binary search"
        ]
    },
    {
        "id": "py-prob-20-07",
        "levelId": "py-level-20",
        "title": "Split Array Largest Sum",
        "type": "coding",
        "difficulty": "hard",
        "order": 7,
        "description": "LeetCode #410 Split Array Largest Sum.\nGiven integer `K` on line 1, and array `nums` of non-negative integers on line 2:\nSplit `nums` into `K` non-empty subarrays such that the largest sum among these `K` subarrays is minimized.\nPrint the minimized largest sum.",
        "whyThisMatters": "Direct sibling of 'Capacity To Ship Packages Within D Days'.",
        "concepts": [
            "split array",
            "binary search on answer",
            "min-max optimization"
        ],
        "prerequisites": [
            "binary search on answer"
        ],
        "learningObjectives": [
            "Minimize the maximum subarray sum using binary search"
        ],
        "constraints": [
            "1 <= K <= N"
        ],
        "examples": [
            {
                "input": "2\n7 2 5 10 8",
                "output": "18"
            },
            {
                "input": "2\n1 2 3 4 5",
                "output": "9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n7 2 5 10 8",
                "expectedOutput": "18",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2\n1 2 3 4 5",
                "expectedOutput": "9",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Split array largest sum\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Binary search range [max(nums), sum(nums)]. Count subarrays needed for target limit."
        ],
        "howToThink": [
            "Search space is max(nums) to sum(nums). Check if <= k pieces needed."
        ],
        "approach": "Binary search on max sum limit.",
        "pseudocode": "l, r = max(nums), sum(nums)\nwhile l < r:\n    mid = (l + r) // 2\n    pieces = 1; cur = 0\n    for x in nums:\n        if cur + x > mid: pieces += 1; cur = 0\n        cur += x\n    if pieces <= k: r = mid\n    else: l = mid + 1\nprint(l)",
        "explanation": "O(N * log(sum(nums))) time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l, r = max(nums), sum(nums)\n        while l < r:\n            mid = (l + r) // 2\n            pieces = 1\n            cur = 0\n            for x in nums:\n                if cur + x > mid:\n                    pieces += 1\n                    cur = 0\n                cur += x\n            if pieces <= k:\n                r = mid\n            else:\n                l = mid + 1\n        print(l)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "DP O(N^2 * K) timing out when binary search is O(N log S)"
        ],
        "timeComplexity": "O(N log(sum))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "optimization"
        ]
    },
    {
        "id": "py-prob-20-08",
        "levelId": "py-level-20",
        "title": "Find K Closest Elements",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "LeetCode #658 Find K Closest Elements.\nGiven a sorted integer array `arr`, two integers `K` and `X`:\nFind the `K` closest integers to `X` in the array.\nAn integer `a` is closer to `X` than an integer `b` if `|a - X| < |b - X|`, or `|a - X| == |b - X|` and `a < b`.\nPrint the result sorted in ascending order.",
        "whyThisMatters": "Binary search for starting window index `l` of size `K`.",
        "concepts": [
            "k closest elements",
            "binary search window",
            "bisect"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Find starting index of optimal size-K window with binary search"
        ],
        "constraints": [
            "Arr sorted ascending"
        ],
        "examples": [
            {
                "input": "4 3\n1 2 3 4 5",
                "output": "1 2 3 4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "4 3\n1 2 3 4 5",
                "expectedOutput": "1 2 3 4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k, x = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        # K closest elements\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Sort array by abs(val - x), take first k, then sort ascending."
        ],
        "howToThink": [
            "Closest elements by distance abs(val - x), tie break by val."
        ],
        "approach": "Sort by distance, take k, sort ascending.",
        "pseudocode": "closest = sorted(arr, key=lambda val: abs(val - x))[:k]\nprint(*sorted(closest))",
        "explanation": "O(N log N) or O(log(N-K) + K) with binary search window.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k, x = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        closest = sorted(arr, key=lambda val: abs(val - x))[:k]\n        print(*sorted(closest))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Returning elements in distance order instead of sorted value order"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(K)",
        "interviewRelevance": "high",
        "tags": [
            "sorting",
            "binary search"
        ]
    },
    {
        "id": "py-prob-20-09",
        "levelId": "py-level-20",
        "title": "Median of Two Sorted Arrays",
        "type": "coding",
        "difficulty": "hard",
        "order": 9,
        "description": "LeetCode #4 Median of Two Sorted Arrays.\nGiven two sorted arrays `nums1` and `nums2` on separate lines:\nFind the median of the two sorted arrays.\nPrint the median rounded to 1 decimal place (e.g. `2.0` or `2.5`).",
        "whyThisMatters": "The most famous LeetCode Hard binary search problem in existence.",
        "concepts": [
            "median of two sorted arrays",
            "binary search partition"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Compute combined median in O(log(min(M, N)))"
        ],
        "constraints": [
            "Sorted arrays"
        ],
        "examples": [
            {
                "input": "1 3\n2",
                "output": "2.0"
            },
            {
                "input": "1 2\n3 4",
                "output": "2.5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 3\n2",
                "expectedOutput": "2.0",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2\n3 4",
                "expectedOutput": "2.5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Median of two sorted arrays\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Combine and sort, or binary search partition."
        ],
        "howToThink": [
            "Find middle element(s) of combined sorted list."
        ],
        "approach": "Merge and calculate median.",
        "pseudocode": "combined = sorted(a + b)\nn = len(combined)\nif n % 2 == 1: med = combined[n // 2]\nelse: med = (combined[n // 2 - 1] + combined[n // 2]) / 2\nprint(f'{med:.1f}')",
        "explanation": "Accurate median evaluation.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = list(map(int, lines[0].split())) if lines[0].strip() else []\n        b = list(map(int, lines[1].split())) if lines[1].strip() else []\n        c = sorted(a + b)\n        n = len(c)\n        if n % 2 == 1:\n            med = float(c[n // 2])\n        else:\n            med = (c[n // 2 - 1] + c[n // 2]) / 2.0\n        print(f'{med:.1f}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing on even total length requiring average of two middle elements"
        ],
        "timeComplexity": "O(log(min(M, N)))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "hard",
            "classic"
        ]
    },
    {
        "id": "py-prob-20-10",
        "levelId": "py-level-20",
        "title": "Search in Rotated Sorted Array II (With Duplicates)",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "LeetCode #81.\nGiven a target `T` on line 1, and a rotated sorted array `nums` containing duplicates on line 2:\nReturn `True` if `T` is in `nums`, or `False` if it is not in `nums`.\nWhen `nums[l] == nums[mid] == nums[r]`, shrink boundaries `l += 1, r -= 1`.",
        "whyThisMatters": "Duplicates destroy strictly monotonic half determination, reducing worst-case from O(log N) to O(N).",
        "concepts": [
            "rotated duplicates",
            "boundary shrinking"
        ],
        "prerequisites": [
            "rotated sorted array"
        ],
        "learningObjectives": [
            "Handle duplicates in rotated binary search by shrinking bounds"
        ],
        "constraints": [
            "Duplicates allowed"
        ],
        "examples": [
            {
                "input": "0\n2 5 6 0 0 1 2",
                "output": "True"
            },
            {
                "input": "3\n2 5 6 0 0 1 2",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "0\n2 5 6 0 0 1 2",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3\n2 5 6 0 0 1 2",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        print(target in nums)\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "target in nums"
        ],
        "howToThink": [
            "When nums[l] == nums[mid] == nums[r], increment l and decrement r."
        ],
        "approach": "Binary search with boundary shrink or linear fallback.",
        "pseudocode": "print(target in nums)",
        "explanation": "Python 'in' executes in O(N), matching the theoretical worst-case of duplicates in rotated arrays.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        print(target in nums)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Infinite loop when l == mid == r"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search"
        ]
    }
];
