import { Problem } from '../types';

export const pyLevel10Problems: Problem[] = [
    {
        "id": "py-prob-10-01",
        "levelId": "py-level-10",
        "title": "Linear Search Baseline",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Given a target `T` followed by an array of `N` integers:\nFind and print the 0-based index of the first occurrence of `T`.\nIf `T` is not found in the array, print `-1`.\n\n*Why:* To establish the baseline O(N) linear scan before studying O(log N) search optimizations.",
        "whyThisMatters": "Linear search checks elements one by one; it is our baseline for unordered sequences.",
        "concepts": [
            "linear search",
            "searching"
        ],
        "prerequisites": [
            "lists",
            "loops"
        ],
        "learningObjectives": [
            "Implement O(N) linear search with early return"
        ],
        "constraints": [
            "N <= 1000"
        ],
        "examples": [
            {
                "input": "20\n10 20 30",
                "output": "1"
            },
            {
                "input": "99\n10 20 30",
                "output": "-1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "20\n10 20 30",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "99\n10 20 30",
                "expectedOutput": "-1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Linear search for target\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Loop with for i, x in enumerate(arr): if x == target: return i. Else return -1."
        ],
        "howToThink": [
            "Traverse list from left to right, return index on match."
        ],
        "approach": "Enumerate loop returning early.",
        "pseudocode": "for i, x in enumerate(arr):\n    if x == target: print(i); return\nprint(-1)",
        "explanation": "Standard single-pass search.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        for i, x in enumerate(arr):\n            if x == target:\n                print(i)\n                return\n        print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing to return -1 when element is absent"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "searching"
        ]
    },
    {
        "id": "py-prob-10-02",
        "levelId": "py-level-10",
        "title": "Binary Search Implementation",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "Given a target `T` followed by a sorted array of `N` integers:\nImplement Binary Search to find the 0-based index of `T` in O(log N) time.\nIf not found, print `-1`.\n\nMaintain pointers `left = 0, right = len(arr) - 1` and update `mid = (left + right) // 2`.",
        "whyThisMatters": "Binary search is the most frequently tested algorithmic pattern in technical interviews.",
        "concepts": [
            "binary search",
            "divide and conquer",
            "logarithmic time"
        ],
        "prerequisites": [
            "lists",
            "while loop"
        ],
        "learningObjectives": [
            "Implement standard binary search template"
        ],
        "constraints": [
            "Array is sorted ascending, N <= 10^5"
        ],
        "examples": [
            {
                "input": "7\n1 3 5 7 9",
                "output": "3"
            },
            {
                "input": "2\n1 3 5 7 9",
                "output": "-1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7\n1 3 5 7 9",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2\n1 3 5 7 9",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "10\n10",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Implement binary search\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "while left <= right: mid = (left + right) // 2. If arr[mid] == target return mid."
        ],
        "howToThink": [
            "Eliminate half the remaining search space on each iteration."
        ],
        "approach": "Two-pointer binary search template.",
        "pseudocode": "left, right = 0, len(arr) - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target: print(mid); return\n    elif arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nprint(-1)",
        "explanation": "Cuts search space by 2 each step, taking <= 20 steps even for 1,000,000 elements.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if arr[mid] == target:\n                print(mid)\n                return\n            elif arr[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using left < right instead of left <= right (misses single-element windows)"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "essential"
        ]
    },
    {
        "id": "py-prob-10-03",
        "levelId": "py-level-10",
        "title": "First Occurrence in Sorted Array",
        "type": "coding",
        "difficulty": "medium",
        "order": 3,
        "description": "Given target `T` and a sorted array with possible duplicate values:\nFind and print the index of the FIRST occurrence of `T` in O(log N) time.\nIf not found, print `-1`.",
        "whyThisMatters": "Standard binary search stops at any match; finding boundaries requires continuing search left.",
        "concepts": [
            "binary search boundary",
            "first occurrence",
            "bisect_left"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Modify binary search to find leftmost occurrence"
        ],
        "constraints": [
            "Array sorted ascending"
        ],
        "examples": [
            {
                "input": "2\n1 2 2 2 3 4",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 2 2 3 4",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5\n1 2 3 4",
                "expectedOutput": "-1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Find first occurrence in O(log N)\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "When arr[mid] == target, save mid in ans and continue searching left: right = mid - 1."
        ],
        "howToThink": [
            "Record candidate match, but shrink right = mid - 1 to look for earlier matches."
        ],
        "approach": "Binary search boundary contraction.",
        "pseudocode": "ans = -1\nleft, right = 0, len(arr) - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target: ans = mid; right = mid - 1\n    elif arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nprint(ans)",
        "explanation": "Maintains O(log N) runtime while finding the exact left boundary.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        ans = -1\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if arr[mid] == target:\n                ans = mid\n                right = mid - 1\n            elif arr[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Returning immediately upon finding match instead of continuing left"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search"
        ]
    },
    {
        "id": "py-prob-10-04",
        "levelId": "py-level-10",
        "title": "Last Occurrence in Sorted Array",
        "type": "coding",
        "difficulty": "medium",
        "order": 4,
        "description": "Given target `T` and a sorted array with possible duplicate values:\nFind and print the index of the LAST occurrence of `T` in O(log N) time.\nIf not found, print `-1`.",
        "whyThisMatters": "Complement to first occurrence; together they form LeetCode #34 (First and Last Position).",
        "concepts": [
            "binary search boundary",
            "last occurrence",
            "bisect_right"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Modify binary search to find rightmost occurrence"
        ],
        "constraints": [
            "Array sorted ascending"
        ],
        "examples": [
            {
                "input": "2\n1 2 2 2 3 4",
                "output": "3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 2 2 3 4",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "9\n1 2 3",
                "expectedOutput": "-1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Find last occurrence\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "When arr[mid] == target, save mid in ans and continue searching right: left = mid + 1."
        ],
        "howToThink": [
            "Record candidate match, shrink left = mid + 1 to check for later matches."
        ],
        "approach": "Binary search with rightward continuation.",
        "pseudocode": "ans = -1\nleft, right = 0, len(arr) - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target: ans = mid; left = mid + 1\n    elif arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nprint(ans)",
        "explanation": "Finds rightmost boundary in O(log N).",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        ans = -1\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if arr[mid] == target:\n                ans = mid\n                left = mid + 1\n            elif arr[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Stopping early on first match"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search"
        ]
    },
    {
        "id": "py-prob-10-05",
        "levelId": "py-level-10",
        "title": "Count Occurrences in O(log N)",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "Given target `T` and a sorted array `arr`:\nCalculate the total frequency of `T` in strictly `O(log N)` time.\n(Hint: `last_occurrence - first_occurrence + 1` if found, else `0`).",
        "whyThisMatters": "Shows how combining two binary searches solves frequency queries in O(log N) instead of linear scan.",
        "concepts": [
            "binary search",
            "frequency",
            "bisect"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Compute range count using two binary searches"
        ],
        "constraints": [
            "Array sorted ascending"
        ],
        "examples": [
            {
                "input": "2\n1 2 2 2 3 4",
                "output": "3"
            },
            {
                "input": "9\n1 2 3",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 2 2 3 4",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "9\n1 2 3",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom bisect import bisect_left, bisect_right\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Count in O(log N)\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use bisect_right(arr, target) - bisect_left(arr, target)."
        ],
        "howToThink": [
            "The difference between bisect_right and bisect_left is the exact count."
        ],
        "approach": "Use bisect module: bisect_right - bisect_left.",
        "pseudocode": "count = bisect_right(arr, target) - bisect_left(arr, target)\nprint(count)",
        "explanation": "bisect_right - bisect_left evaluates the exact count in 2 * log(N) time.",
        "solution": "import sys\nfrom bisect import bisect_left, bisect_right\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        count = bisect_right(arr, target) - bisect_left(arr, target)\n        print(count)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using arr.count(target) which takes O(N) linear time"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "bisect",
            "binary search"
        ]
    },
    {
        "id": "py-prob-10-06",
        "levelId": "py-level-10",
        "title": "Search Insert Position",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "LeetCode #35 Search Insert Position.\nGiven a sorted array of distinct integers and a target value `T`:\nReturn the index if the target is found. If not, return the index where it would be if it were inserted in order.\nYou must write an algorithm with `O(log n)` runtime complexity.",
        "whyThisMatters": "Directly teaches what `bisect_left` computes: the insertion point maintaining sorted order.",
        "concepts": [
            "search insert",
            "bisect_left",
            "binary search"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Find insertion point with binary search"
        ],
        "constraints": [
            "Array sorted ascending"
        ],
        "examples": [
            {
                "input": "5\n1 3 5 6",
                "output": "2"
            },
            {
                "input": "2\n1 3 5 6",
                "output": "1"
            },
            {
                "input": "7\n1 3 5 6",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5\n1 3 5 6",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2\n1 3 5 6",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "7\n1 3 5 6",
                "expectedOutput": "4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom bisect import bisect_left\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        print(bisect_left(arr, target))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "bisect_left(arr, target)"
        ],
        "howToThink": [
            "When binary search finishes without a match, 'left' pointer points to the insertion position."
        ],
        "approach": "Use bisect_left.",
        "pseudocode": "print(bisect_left(arr, target))",
        "explanation": "bisect_left returns the leftmost position where target can be inserted to maintain order.",
        "solution": "import sys\nfrom bisect import bisect_left\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        print(bisect_left(arr, target))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Returning left - 1 instead of left"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "classic"
        ]
    },
    {
        "id": "py-prob-10-07",
        "levelId": "py-level-10",
        "title": "Integer Square Root with Binary Search",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "LeetCode #69 Sqrt(x).\nGiven a non-negative integer `X`, compute and return the integer square root of `X` (`floor(sqrt(X))`) using Binary Search on the range `0` to `X`.\nYou must not use any built-in exponent functions or operators.",
        "whyThisMatters": "Binary Search on Answer / Solution Space is a critical interview pattern.",
        "concepts": [
            "binary search on answer",
            "integer sqrt",
            "solution space"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Apply binary search to a monotonic mathematical function"
        ],
        "constraints": [
            "X >= 0"
        ],
        "examples": [
            {
                "input": "8",
                "output": "2"
            },
            {
                "input": "16",
                "output": "4"
            },
            {
                "input": "0",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "8",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "16",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "0",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    x = int(sys.stdin.read().strip())\n    # Compute floor(sqrt(x)) with binary search\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Search space: left = 0, right = x. If mid * mid <= x, save mid and search higher."
        ],
        "howToThink": [
            "Monotonic property: as m increases, m^2 strictly increases."
        ],
        "approach": "Binary search on monotonic m*m.",
        "pseudocode": "left, right = 0, x\nans = 0\nwhile left <= right:\n    mid = (left + right) // 2\n    if mid * mid <= x: ans = mid; left = mid + 1\n    else: right = mid - 1\nprint(ans)",
        "explanation": "O(log X) steps to find largest integer whose square <= x.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        x = int(raw)\n        left, right = 0, x\n        ans = 0\n        while left <= right:\n            mid = (left + right) // 2\n            if mid * mid <= x:\n                ans = mid\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Integer overflow in languages without arbitrary precision (Python handles this naturally)"
        ],
        "timeComplexity": "O(log X)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "math"
        ]
    },
    {
        "id": "py-prob-10-08",
        "levelId": "py-level-10",
        "title": "Find Peak Element",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "LeetCode #162 Find Peak Element.\nA peak element is an element that is strictly greater than its neighbors.\nGiven an integer array `arr`, find any peak element and print its 0-based index.\nYou must write an algorithm that runs in `O(log n)` time.",
        "whyThisMatters": "Demonstrates that binary search applies to unsorted arrays whenever a directional derivative exists.",
        "concepts": [
            "peak element",
            "binary search",
            "directional slope"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Use binary search slope walking to find local peak"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 3 1",
                "output": "2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 1",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2 1 3 5 6 4",
                "expectedOutput": "5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    # Find peak index in O(log N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "If arr[mid] < arr[mid + 1], a peak must lie to the right! left = mid + 1. Else right = mid."
        ],
        "howToThink": [
            "Walk towards the higher neighbor; a peak is guaranteed to exist in that direction."
        ],
        "approach": "Slope-following binary search.",
        "pseudocode": "left, right = 0, len(arr) - 1\nwhile left < right:\n    mid = (left + right) // 2\n    if arr[mid] < arr[mid + 1]: left = mid + 1\n    else: right = mid\nprint(left)",
        "explanation": "If slope is rising, a peak is guaranteed to exist on the right.",
        "solution": "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    if arr:\n        left, right = 0, len(arr) - 1\n        while left < right:\n            mid = (left + right) // 2\n            if arr[mid] < arr[mid + 1]:\n                left = mid + 1\n            else:\n                right = mid\n        print(left)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Out of bounds on mid + 1 when using left <= right"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "peaks"
        ]
    },
    {
        "id": "py-prob-10-09",
        "levelId": "py-level-10",
        "title": "Minimum in Rotated Sorted Array",
        "type": "coding",
        "difficulty": "medium",
        "order": 9,
        "description": "LeetCode #153.\nSuppose an array of length `N` sorted in ascending order is rotated between 1 and `N` times.\nGiven the rotated sorted array with unique elements, find and print the MINIMUM element in `O(log n)` time.",
        "whyThisMatters": "Standard FAANG assessment question for rotated array navigation.",
        "concepts": [
            "rotated sorted array",
            "binary search",
            "inflection point"
        ],
        "prerequisites": [
            "binary search"
        ],
        "learningObjectives": [
            "Find inflection point in rotated sorted array"
        ],
        "constraints": [
            "All elements unique"
        ],
        "examples": [
            {
                "input": "3 4 5 1 2",
                "output": "1"
            },
            {
                "input": "4 5 6 7 0 1 2",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 4 5 1 2",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4 5 6 7 0 1 2",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "11 13 15 17",
                "expectedOutput": "11",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    # Find minimum in O(log N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Compare arr[mid] with arr[right]. If arr[mid] > arr[right], min is on right: left = mid + 1. Else right = mid."
        ],
        "howToThink": [
            "If mid > right, the drop is in the right half. Else the min is at mid or left of mid."
        ],
        "approach": "Compare mid with right boundary.",
        "pseudocode": "left, right = 0, len(arr) - 1\nwhile left < right:\n    mid = (left + right) // 2\n    if arr[mid] > arr[right]: left = mid + 1\n    else: right = mid\nprint(arr[left])",
        "explanation": "Shrinks window to inflection point in O(log N).",
        "solution": "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    if arr:\n        left, right = 0, len(arr) - 1\n        while left < right:\n            mid = (left + right) // 2\n            if arr[mid] > arr[right]:\n                left = mid + 1\n            else:\n                right = mid\n        print(arr[left])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Comparing with arr[left] which fails when the array is already fully sorted"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "rotated"
        ]
    },
    {
        "id": "py-prob-10-10",
        "levelId": "py-level-10",
        "title": "Search a 2D Matrix",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "LeetCode #74 Search a 2D Matrix.\nYou are given an `M x N` integer matrix with properties:\n1. Integers in each row are sorted from left to right.\n2. The first integer of each row is greater than the last integer of the previous row.\n\nGiven `Target`, `M`, and `N` followed by the matrix elements:\nPrint `True` if `Target` is in the matrix, otherwise print `False` in `O(log(M * N))` time.",
        "whyThisMatters": "Treating a 2D grid as a flattened 1D array using coordinate mapping `row = mid // N, col = mid % N`.",
        "concepts": [
            "2D binary search",
            "coordinate mapping",
            "matrix"
        ],
        "prerequisites": [
            "binary search",
            "matrices"
        ],
        "learningObjectives": [
            "Map 1D index to 2D coordinates for binary search"
        ],
        "constraints": [
            "M, N >= 1"
        ],
        "examples": [
            {
                "input": "3 3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60",
                "output": "True"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "13 3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 3:\n        target = tokens[0]\n        m, n = tokens[1], tokens[2]\n        matrix = tokens[3:]\n        # Binary search 1D mapped index\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Total elements = m * n. In binary search, mid element is at matrix[mid]. Check mid value vs target."
        ],
        "howToThink": [
            "The 2D matrix is equivalent to a sorted 1D array of length M*N."
        ],
        "approach": "1D binary search on flattened size M * N.",
        "pseudocode": "left, right = 0, m * n - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    val = matrix[mid]\n    if val == target: print('True'); return\n    elif val < target: left = mid + 1\n    else: right = mid - 1\nprint('False')",
        "explanation": "Standard O(log(M * N)) binary search.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 3:\n        target = tokens[0]\n        m, n = tokens[1], tokens[2]\n        matrix = tokens[3:]\n        left, right = 0, m * n - 1\n        while left <= right:\n            mid = (left + right) // 2\n            val = matrix[mid]\n            if val == target:\n                print('True')\n                return\n            elif val < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Searching row-by-row in O(M log N) instead of single O(log(M*N)) search"
        ],
        "timeComplexity": "O(log(M * N))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "binary search",
            "matrix"
        ]
    }
];
