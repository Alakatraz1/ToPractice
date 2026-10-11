import { Problem } from '../types';

export const pyLevel18Problems: Problem[] = [
    {
        "id": "py-prob-18-01",
        "levelId": "py-level-18",
        "title": "Two Sum II - Input Array Is Sorted",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "LeetCode #167.\nGiven a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.\nReturn the 1-based indices `[index1, index2]` separated by spaces.\nYou must use `O(1)` additional space.",
        "whyThisMatters": "Sorted array enables two pointers from opposite ends in O(N) time and O(1) space.",
        "concepts": [
            "two pointers",
            "sorted array",
            "o(1) space"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Use converging two pointers to find target sum"
        ],
        "constraints": [
            "Sorted ascending, exactly one solution"
        ],
        "examples": [
            {
                "input": "9\n2 7 11 15",
                "output": "1 2"
            },
            {
                "input": "6\n2 3 4",
                "output": "1 3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "9\n2 7 11 15",
                "expectedOutput": "1 2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "6\n2 3 4",
                "expectedOutput": "1 3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Two pointers\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "l, r = 0, len(nums) - 1. If nums[l] + nums[r] == target return l+1, r+1. If too small: l += 1. If too big: r -= 1."
        ],
        "howToThink": [
            "Too small? Advance left pointer to increase sum. Too large? Decrement right pointer to decrease sum."
        ],
        "approach": "Converging two pointers.",
        "pseudocode": "l, r = 0, len(nums) - 1\nwhile l < r:\n    s = nums[l] + nums[r]\n    if s == target: print(l + 1, r + 1); return\n    elif s < target: l += 1\n    else: r -= 1",
        "explanation": "Monotonicity guarantees O(N) convergence.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l, r = 0, len(nums) - 1\n        while l < r:\n            s = nums[l] + nums[r]\n            if s == target:\n                print(l + 1, r + 1)\n                return\n            elif s < target:\n                l += 1\n            else:\n                r -= 1\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "1-based vs 0-based indices"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "essential"
        ]
    },
    {
        "id": "py-prob-18-02",
        "levelId": "py-level-18",
        "title": "Valid Palindrome II (One Deletion Allowed)",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "LeetCode #680 Valid Palindrome II.\nGiven a string `s`, return `True` if the string can be a palindrome after deleting at most one character from it.\nPrint `True` or `False`.",
        "whyThisMatters": "Tests when to branch two pointers upon the first mismatch.",
        "concepts": [
            "two pointers",
            "palindrome",
            "branching"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Branch two pointers on mismatch"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "aba",
                "output": "True"
            },
            {
                "input": "abca",
                "output": "True"
            },
            {
                "input": "abc",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "aba",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "abca",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "abc",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Check palindrome with at most 1 deletion\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "When s[l] != s[r], check if either s[l+1:r+1] or s[l:r] is a palindrome."
        ],
        "howToThink": [
            "Find first mismatch, test skipping either the left character or the right character."
        ],
        "approach": "Two pointers with one-skip verification.",
        "pseudocode": "l, r = 0, len(s) - 1\nwhile l < r:\n    if s[l] != s[r]:\n        s1, s2 = s[l+1:r+1], s[l:r]\n        print(s1 == s1[::-1] or s2 == s2[::-1]); return\n    l += 1; r -= 1\nprint('True')",
        "explanation": "O(N) check.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] != s[r]:\n            s1, s2 = s[l + 1:r + 1], s[l:r]\n            print(s1 == s1[::-1] or s2 == s2[::-1])\n            return\n        l += 1\n        r -= 1\n    print('True')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Allowing more than 1 deletion"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "strings"
        ]
    },
    {
        "id": "py-prob-18-03",
        "levelId": "py-level-18",
        "title": "Remove Duplicates from Sorted Array",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "LeetCode #26.\nGiven an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.\nPrint the unique elements space-separated.",
        "whyThisMatters": "Fast & slow pointer array compaction pattern.",
        "concepts": [
            "two pointers",
            "in-place",
            "deduplication"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Compact unique elements in-place with slow/fast pointers"
        ],
        "constraints": [
            "Sorted ascending"
        ],
        "examples": [
            {
                "input": "1 1 2",
                "output": "1 2"
            },
            {
                "input": "0 0 1 1 1 2 2 3 3 4",
                "output": "0 1 2 3 4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 1 2",
                "expectedOutput": "1 2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0 0 1 1 1 2 2 3 3 4",
                "expectedOutput": "0 1 2 3 4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # In-place deduplication\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "write_idx = 1. For read_idx in range(1, len(nums)): if nums[read_idx] != nums[read_idx - 1]: nums[write_idx] = nums[read_idx]; write_idx += 1."
        ],
        "howToThink": [
            "Fast pointer reads every element; slow pointer only writes when a new distinct number appears."
        ],
        "approach": "Read and write pointers.",
        "pseudocode": "slow = 1\nfor fast in range(1, len(nums)):\n    if nums[fast] != nums[fast - 1]:\n        nums[slow] = nums[fast]; slow += 1\nprint(*(nums[:slow]))",
        "explanation": "O(N) time and O(1) memory.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    slow = 1\n    for fast in range(1, len(nums)):\n        if nums[fast] != nums[fast - 1]:\n            nums[slow] = nums[fast]\n            slow += 1\n    print(*(nums[:slow]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using O(N) extra space with set() when in-place modification is required"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "must-know"
        ]
    },
    {
        "id": "py-prob-18-04",
        "levelId": "py-level-18",
        "title": "Squares of a Sorted Array",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "LeetCode #977 Squares of a Sorted Array.\nGiven an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.\nYou must write an algorithm in `O(N)` time using two pointers (from both ends).",
        "whyThisMatters": "Negative numbers become large when squared, meaning the largest squares are at either the far left or far right ends.",
        "concepts": [
            "two pointers",
            "squares",
            "o(n) sort"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Fill result array backwards using two pointers on squares"
        ],
        "constraints": [
            "Sorted input with negative and positive values"
        ],
        "examples": [
            {
                "input": "-4 -1 0 3 10",
                "output": "0 1 9 16 100"
            },
            {
                "input": "-7 -3 2 3 11",
                "output": "4 9 9 49 121"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "-4 -1 0 3 10",
                "expectedOutput": "0 1 9 16 100",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-7 -3 2 3 11",
                "expectedOutput": "4 9 9 49 121",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # O(N) squares with two pointers\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Fill res backwards from n - 1. l, r = 0, n - 1. Compare nums[l]**2 with nums[r]**2."
        ],
        "howToThink": [
            "Largest squares are always at the boundaries (l or r). Fill result from back to front."
        ],
        "approach": "Two pointers filling from right to left.",
        "pseudocode": "n = len(nums)\nres = [0] * n\nl, r = 0, n - 1\nfor i in range(n - 1, -1, -1):\n    if abs(nums[l]) > abs(nums[r]):\n        res[i] = nums[l] ** 2; l += 1\n    else:\n        res[i] = nums[r] ** 2; r -= 1\nprint(*res)",
        "explanation": "Strictly linear O(N) without calling sort().",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    n = len(nums)\n    res = [0] * n\n    l, r = 0, n - 1\n    for i in range(n - 1, -1, -1):\n        if abs(nums[l]) > abs(nums[r]):\n            res[i] = nums[l] ** 2\n            l += 1\n        else:\n            res[i] = nums[r] ** 2\n            r -= 1\n    print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Squaring then sorting in O(N log N)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "must-know"
        ]
    },
    {
        "id": "py-prob-18-05",
        "levelId": "py-level-18",
        "title": "Container With Most Water",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #11 Container With Most Water.\nYou are given an integer array `height` of length `N`.\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\nArea = `min(height[l], height[r]) * (r - l)`.\nPrint the maximum amount of water a container can store.\nYou must solve this in `O(N)` time.",
        "whyThisMatters": "Greedy two-pointer shrinking rule: always move the shorter vertical line inward.",
        "concepts": [
            "two pointers",
            "container water",
            "area maximization"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Prove and implement two-pointer contraction rule for max area"
        ],
        "constraints": [
            "N >= 2"
        ],
        "examples": [
            {
                "input": "1 8 6 2 5 4 8 3 7",
                "output": "49"
            },
            {
                "input": "1 1",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 8 6 2 5 4 8 3 7",
                "expectedOutput": "49",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 1",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    h = list(map(int, sys.stdin.read().split()))\n    # Max water in O(N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "l, r = 0, len(h) - 1. area = min(h[l], h[r]) * (r - l). Move whichever pointer is shorter: if h[l] < h[r] l += 1 else r -= 1."
        ],
        "howToThink": [
            "Moving the taller line cannot increase area because width decreases and height is bounded by the shorter line."
        ],
        "approach": "Two-pointer greedy contraction.",
        "pseudocode": "l, r = 0, len(h) - 1\nmx = 0\nwhile l < r:\n    mx = max(mx, min(h[l], h[r]) * (r - l))\n    if h[l] < h[r]: l += 1\n    else: r -= 1\nprint(mx)",
        "explanation": "Examines optimal boundaries in linear O(N) time.",
        "solution": "import sys\n\ndef solve():\n    h = list(map(int, sys.stdin.read().split()))\n    if not h:\n        return\n    l, r = 0, len(h) - 1\n    mx = 0\n    while l < r:\n        mx = max(mx, min(h[l], h[r]) * (r - l))\n        if h[l] < h[r]:\n            l += 1\n        else:\n            r -= 1\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Nested loop O(N^2) timing out"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "must-know"
        ]
    },
    {
        "id": "py-prob-18-06",
        "levelId": "py-level-18",
        "title": "3Sum Unique Triplets",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #15 3Sum.\nGiven an integer array `nums`, return all the unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k` and `nums[i] + nums[j] + nums[k] == 0`.\nNotice that the solution set must not contain duplicate triplets.\nPrint each unique triplet sorted space-separated on separate lines, sorted lexicographically.",
        "whyThisMatters": "Reduces 3D problem into 2D Two Sum II by fixing one element and using two pointers.",
        "concepts": [
            "3sum",
            "two pointers",
            "deduplication"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Reduce 3Sum to Two Sum II with sorting and pointer skipping"
        ],
        "constraints": [
            "N <= 3000"
        ],
        "examples": [
            {
                "input": "-1 0 1 2 -1 -4",
                "output": "-1 -1 2\n-1 0 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "-1 0 1 2 -1 -4",
                "expectedOutput": "-1 -1 2\n-1 0 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # 3Sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Sort nums. For i in range(len(nums) - 2): skip if i > 0 and nums[i] == nums[i-1]. Two pointers l = i + 1, r = len(nums) - 1."
        ],
        "howToThink": [
            "Fix nums[i], then Two Sum II for target -nums[i]. Skip duplicates to ensure uniqueness."
        ],
        "approach": "Sort + Two Pointers inside loop.",
        "pseudocode": "nums.sort()\nres = []\nfor i in range(len(nums) - 2):\n    if i > 0 and nums[i] == nums[i-1]: continue\n    l, r = i + 1, len(nums) - 1\n    while l < r:\n        s = nums[i] + nums[l] + nums[r]\n        if s == 0:\n            res.append([nums[i], nums[l], nums[r]])\n            while l < r and nums[l] == nums[l+1]: l += 1\n            while l < r and nums[r] == nums[r-1]: r -= 1\n            l += 1; r -= 1\n        elif s < 0: l += 1\n        else: r -= 1\nfor t in res: print(*t)",
        "explanation": "O(N^2) time with strict duplicate avoidance.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    nums.sort()\n    res = []\n    n = len(nums)\n    for i in range(n - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        l, r = i + 1, n - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]:\n                    l += 1\n                while l < r and nums[r] == nums[r - 1]:\n                    r -= 1\n                l += 1\n                r -= 1\n            elif s < 0:\n                l += 1\n            else:\n                r -= 1\n    for t in res:\n        print(*t)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Duplicate triplets in output from not skipping identical adjacent values"
        ],
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "3sum",
            "must-know"
        ]
    },
    {
        "id": "py-prob-18-07",
        "levelId": "py-level-18",
        "title": "3Sum Closest",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #16 3Sum Closest.\nGiven target integer `T` on line 1, and array `nums` of `N` integers on line 2:\nFind three integers in `nums` such that the sum is closest to `T`.\nReturn the sum of the three integers.\nPrint the closest sum.",
        "whyThisMatters": "Tracking minimum absolute distance `abs(sum - target)` in Two Pointers.",
        "concepts": [
            "3sum closest",
            "two pointers"
        ],
        "prerequisites": [
            "3sum"
        ],
        "learningObjectives": [
            "Track closest sum in O(N^2) using two pointers"
        ],
        "constraints": [
            "N >= 3"
        ],
        "examples": [
            {
                "input": "1\n-1 2 1 -4",
                "output": "2"
            },
            {
                "input": "1\n0 0 0",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1\n-1 2 1 -4",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1\n0 0 0",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # 3Sum closest\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Sort nums. For i in range(len(nums) - 2): two pointers l, r. If abs(sum - target) < abs(best - target): best = sum."
        ],
        "howToThink": [
            "Sort array, scan with two pointers, update closest sum."
        ],
        "approach": "Sort and two pointers tracking min distance.",
        "pseudocode": "nums.sort()\nbest = nums[0] + nums[1] + nums[2]\nfor i in range(len(nums) - 2):\n    l, r = i + 1, len(nums) - 1\n    while l < r:\n        s = nums[i] + nums[l] + nums[r]\n        if abs(s - target) < abs(best - target): best = s\n        if s < target: l += 1\n        elif s > target: r -= 1\n        else: print(target); return\nprint(best)",
        "explanation": "O(N^2) time and O(1) space.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        nums.sort()\n        best = nums[0] + nums[1] + nums[2]\n        for i in range(len(nums) - 2):\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if abs(s - target) < abs(best - target):\n                    best = s\n                if s < target:\n                    l += 1\n                elif s > target:\n                    r -= 1\n                else:\n                    print(target)\n                    return\n        print(best)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing to return immediately when exact match s == target is found"
        ],
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "3sum",
            "two pointers"
        ]
    },
    {
        "id": "py-prob-18-08",
        "levelId": "py-level-18",
        "title": "Trapping Rain Water (Two Pointers O(1) Space)",
        "type": "coding",
        "difficulty": "hard",
        "order": 8,
        "description": "LeetCode #42 Trapping Rain Water.\nGiven `N` non-negative integers representing an elevation map where the width of each bar is 1:\nCompute how much water it can trap after raining.\nPrint total water trapped.\nSolve this in `O(N)` time and `O(1)` space using Two Pointers.",
        "whyThisMatters": "Regarded as the quintessential Two Pointer benchmark problem across top tech companies.",
        "concepts": [
            "trapping rain water",
            "two pointers",
            "o(1) space"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Solve Trapping Rain Water in O(1) space using two pointers"
        ],
        "constraints": [
            "N <= 10^5"
        ],
        "examples": [
            {
                "input": "0 1 0 2 1 0 1 3 2 1 2 1",
                "output": "6"
            },
            {
                "input": "4 2 0 3 2 5",
                "output": "9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "0 1 0 2 1 0 1 3 2 1 2 1",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4 2 0 3 2 5",
                "expectedOutput": "9",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    height = list(map(int, sys.stdin.read().split()))\n    # Trapping rain water in O(1) space\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Maintain left_max, right_max. If height[l] < height[r]: water += max(0, left_max - height[l]); left_max = max(left_max, height[l]); l += 1. Else same for r."
        ],
        "howToThink": [
            "Water height at any position is bounded by min(left_max, right_max)."
        ],
        "approach": "Two-pointer boundary tracking.",
        "pseudocode": "l, r = 0, len(h) - 1\nl_max = r_max = water = 0\nwhile l < r:\n    if h[l] < h[r]:\n        l_max = max(l_max, h[l])\n        water += l_max - h[l]\n        l += 1\n    else:\n        r_max = max(r_max, h[r])\n        r_max -= h[r]\n        r -= 1\nprint(water)",
        "explanation": "Computes trapped water in a single linear pass with O(1) auxiliary memory.",
        "solution": "import sys\n\ndef solve():\n    h = list(map(int, sys.stdin.read().split()))\n    if not h:\n        print(0)\n        return\n    l, r = 0, len(h) - 1\n    l_max = r_max = water = 0\n    while l < r:\n        if h[l] < h[r]:\n            l_max = max(l_max, h[l])\n            water += l_max - h[l]\n            l += 1\n        else:\n            r_max = max(r_max, h[r])\n            water += r_max - h[r]\n            r -= 1\n    print(water)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using DP arrays (O(N) space) when O(1) space is achievable"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "two pointers",
            "must-know"
        ]
    },
    {
        "id": "py-prob-18-09",
        "levelId": "py-level-18",
        "title": "Backspace String Compare (O(1) Space)",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "LeetCode #844.\nGiven two strings `S` and `T` containing `#` (which represents a backspace character):\nReturn `True` if they are equal when both are typed into empty text editors.\nPrint `True` or `False`.\nCan you solve it in `O(N)` time and `O(1)` space by scanning backwards with two pointers?",
        "whyThisMatters": "Backward pointer traversal naturally tracks consecutive `#` skips without needing a stack.",
        "concepts": [
            "backspace compare",
            "backward pointers",
            "o(1) space"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Scan backwards to simulate text editing in O(1) space"
        ],
        "constraints": [
            "Strings contain lowercase letters and '#'"
        ],
        "examples": [
            {
                "input": "ab#c\nad#c",
                "output": "True"
            },
            {
                "input": "ab##\nc#d#",
                "output": "True"
            },
            {
                "input": "a#c\nb",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "ab#c\nad#c",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "ab##\nc#d#",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "a#c\nb",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        # Compare strings with backspaces\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Build helper to simulate stack: def build(st): res = []; for c in st: if c == '#': res.pop() if res else None; else: res.append(c); return ''.join(res)."
        ],
        "howToThink": [
            "Simulate typing with stack or two backward pointers."
        ],
        "approach": "Stack or backward scanner.",
        "pseudocode": "def build(st):\n    res = []\n    for c in st:\n        if c == '#':\n            if res: res.pop()\n        else: res.append(c)\n    return ''.join(res)\nprint(build(s) == build(t))",
        "explanation": "Simulates backspace deletion cleanly in linear time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        def build(st):\n            res = []\n            for c in st:\n                if c == '#':\n                    if res:\n                        res.pop()\n                else:\n                    res.append(c)\n            return ''.join(res)\n        print(build(s) == build(t))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Popping on empty string when leading '#' appears"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "strings",
            "two pointers"
        ]
    },
    {
        "id": "py-prob-18-10",
        "levelId": "py-level-18",
        "title": "Sort Array by Parity (Evens First)",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "LeetCode #905 Sort Array By Parity.\nGiven an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.\nReturn any array that satisfies this condition.\nPrint the array space-separated.",
        "whyThisMatters": "Two-pointer partition (identical to QuickSort partition step).",
        "concepts": [
            "parity partition",
            "two pointers",
            "in-place"
        ],
        "prerequisites": [
            "two pointers"
        ],
        "learningObjectives": [
            "Partition array in-place based on boolean parity"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "3 1 2 4",
                "output": "4 2 1 3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 1 2 4",
                "expectedOutput": "4 2 1 3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Sort array by parity in-place\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "l, r = 0, len(nums) - 1. While l < r: if nums[l] % 2 > nums[r] % 2: swap(l, r). If even l += 1; if odd r -= 1."
        ],
        "howToThink": [
            "L pointer looks for odds, R pointer looks for evens. Swap when found."
        ],
        "approach": "Two-pointer partition.",
        "pseudocode": "l, r = 0, len(nums) - 1\nwhile l < r:\n    if nums[l] % 2 > nums[r] % 2:\n        nums[l], nums[r] = nums[r], nums[l]\n    if nums[l] % 2 == 0: l += 1\n    if nums[r] % 2 == 1: r -= 1\nprint(*nums)",
        "explanation": "Partitions in one pass O(N) time with O(1) space.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    l, r = 0, len(nums) - 1\n    while l < r:\n        if nums[l] % 2 > nums[r] % 2:\n            nums[l], nums[r] = nums[r], nums[l]\n        if nums[l] % 2 == 0:\n            l += 1\n        if nums[r] % 2 == 1:\n            r -= 1\n    print(*nums)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using extra arrays when in-place two-pointer partition is expected"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "two pointers",
            "partition"
        ]
    }
];
