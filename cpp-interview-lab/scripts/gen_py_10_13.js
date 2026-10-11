const fs = require('fs');
const path = require('path');

function writeLevel(levelNum, problems) {
    const filename = `level-${levelNum < 10 ? '0' + levelNum : levelNum}.ts`;
    const filePath = path.join(__dirname, '../src/data/pythonProblems', filename);
    const content = `import { Problem } from '../types';\n\nexport const pyLevel${levelNum}Problems: Problem[] = ${JSON.stringify(problems, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Generated ${filename} with ${problems.length} problems`);
}

// Level 10: Searching in Python
const level10 = [
    {
        id: "py-prob-10-01", levelId: "py-level-10", title: "Linear Search Baseline", type: "coding", difficulty: "beginner", order: 1,
        description: "Given a target `T` followed by an array of `N` integers:\nFind and print the 0-based index of the first occurrence of `T`.\nIf `T` is not found in the array, print `-1`.\n\n*Why:* To establish the baseline O(N) linear scan before studying O(log N) search optimizations.",
        whyThisMatters: "Linear search checks elements one by one; it is our baseline for unordered sequences.",
        concepts: ["linear search", "searching"], prerequisites: ["lists", "loops"], learningObjectives: ["Implement O(N) linear search with early return"], constraints: ["N <= 1000"],
        examples: [{ input: "20\n10 20 30", output: "1" }, { input: "99\n10 20 30", output: "-1" }],
        testCases: [
            { id: "tc1", input: "20\n10 20 30", expectedOutput: "1", hidden: false },
            { id: "tc2", input: "99\n10 20 30", expectedOutput: "-1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Linear search for target\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Loop with for i, x in enumerate(arr): if x == target: return i. Else return -1."],
        howToThink: ["Traverse list from left to right, return index on match."],
        approach: "Enumerate loop returning early.", pseudocode: "for i, x in enumerate(arr):\n    if x == target: print(i); return\nprint(-1)", explanation: "Standard single-pass search.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        for i, x in enumerate(arr):\n            if x == target:\n                print(i)\n                return\n        print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing to return -1 when element is absent"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["searching"]
    },
    {
        id: "py-prob-10-02", levelId: "py-level-10", title: "Binary Search Implementation", type: "coding", difficulty: "easy", order: 2,
        description: "Given a target `T` followed by a sorted array of `N` integers:\nImplement Binary Search to find the 0-based index of `T` in O(log N) time.\nIf not found, print `-1`.\n\nMaintain pointers `left = 0, right = len(arr) - 1` and update `mid = (left + right) // 2`.",
        whyThisMatters: "Binary search is the most frequently tested algorithmic pattern in technical interviews.",
        concepts: ["binary search", "divide and conquer", "logarithmic time"], prerequisites: ["lists", "while loop"], learningObjectives: ["Implement standard binary search template"], constraints: ["Array is sorted ascending, N <= 10^5"],
        examples: [{ input: "7\n1 3 5 7 9", output: "3" }, { input: "2\n1 3 5 7 9", output: "-1" }],
        testCases: [
            { id: "tc1", input: "7\n1 3 5 7 9", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "2\n1 3 5 7 9", expectedOutput: "-1", hidden: false },
            { id: "tc3", input: "10\n10", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Implement binary search\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["while left <= right: mid = (left + right) // 2. If arr[mid] == target return mid."],
        howToThink: ["Eliminate half the remaining search space on each iteration."],
        approach: "Two-pointer binary search template.", pseudocode: "left, right = 0, len(arr) - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target: print(mid); return\n    elif arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nprint(-1)", explanation: "Cuts search space by 2 each step, taking <= 20 steps even for 1,000,000 elements.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if arr[mid] == target:\n                print(mid)\n                return\n            elif arr[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using left < right instead of left <= right (misses single-element windows)"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "essential"]
    },
    {
        id: "py-prob-10-03", levelId: "py-level-10", title: "First Occurrence in Sorted Array", type: "coding", difficulty: "medium", order: 3,
        description: "Given target `T` and a sorted array with possible duplicate values:\nFind and print the index of the FIRST occurrence of `T` in O(log N) time.\nIf not found, print `-1`.",
        whyThisMatters: "Standard binary search stops at any match; finding boundaries requires continuing search left.",
        concepts: ["binary search boundary", "first occurrence", "bisect_left"], prerequisites: ["binary search"], learningObjectives: ["Modify binary search to find leftmost occurrence"], constraints: ["Array sorted ascending"],
        examples: [{ input: "2\n1 2 2 2 3 4", output: "1" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 2 2 3 4", expectedOutput: "1", hidden: false },
            { id: "tc2", input: "5\n1 2 3 4", expectedOutput: "-1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Find first occurrence in O(log N)\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["When arr[mid] == target, save mid in ans and continue searching left: right = mid - 1."],
        howToThink: ["Record candidate match, but shrink right = mid - 1 to look for earlier matches."],
        approach: "Binary search boundary contraction.", pseudocode: "ans = -1\nleft, right = 0, len(arr) - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target: ans = mid; right = mid - 1\n    elif arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nprint(ans)", explanation: "Maintains O(log N) runtime while finding the exact left boundary.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        ans = -1\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if arr[mid] == target:\n                ans = mid\n                right = mid - 1\n            elif arr[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Returning immediately upon finding match instead of continuing left"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search"]
    },
    {
        id: "py-prob-10-04", levelId: "py-level-10", title: "Last Occurrence in Sorted Array", type: "coding", difficulty: "medium", order: 4,
        description: "Given target `T` and a sorted array with possible duplicate values:\nFind and print the index of the LAST occurrence of `T` in O(log N) time.\nIf not found, print `-1`.",
        whyThisMatters: "Complement to first occurrence; together they form LeetCode #34 (First and Last Position).",
        concepts: ["binary search boundary", "last occurrence", "bisect_right"], prerequisites: ["binary search"], learningObjectives: ["Modify binary search to find rightmost occurrence"], constraints: ["Array sorted ascending"],
        examples: [{ input: "2\n1 2 2 2 3 4", output: "3" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 2 2 3 4", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "9\n1 2 3", expectedOutput: "-1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Find last occurrence\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["When arr[mid] == target, save mid in ans and continue searching right: left = mid + 1."],
        howToThink: ["Record candidate match, shrink left = mid + 1 to check for later matches."],
        approach: "Binary search with rightward continuation.", pseudocode: "ans = -1\nleft, right = 0, len(arr) - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target: ans = mid; left = mid + 1\n    elif arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nprint(ans)", explanation: "Finds rightmost boundary in O(log N).",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        ans = -1\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if arr[mid] == target:\n                ans = mid\n                left = mid + 1\n            elif arr[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Stopping early on first match"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search"]
    },
    {
        id: "py-prob-10-05", levelId: "py-level-10", title: "Count Occurrences in O(log N)", type: "coding", difficulty: "medium", order: 5,
        description: "Given target `T` and a sorted array `arr`:\nCalculate the total frequency of `T` in strictly `O(log N)` time.\n(Hint: `last_occurrence - first_occurrence + 1` if found, else `0`).",
        whyThisMatters: "Shows how combining two binary searches solves frequency queries in O(log N) instead of linear scan.",
        concepts: ["binary search", "frequency", "bisect"], prerequisites: ["binary search"], learningObjectives: ["Compute range count using two binary searches"], constraints: ["Array sorted ascending"],
        examples: [{ input: "2\n1 2 2 2 3 4", output: "3" }, { input: "9\n1 2 3", output: "0" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 2 2 3 4", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "9\n1 2 3", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\nfrom bisect import bisect_left, bisect_right\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Count in O(log N)\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use bisect_right(arr, target) - bisect_left(arr, target)."],
        howToThink: ["The difference between bisect_right and bisect_left is the exact count."],
        approach: "Use bisect module: bisect_right - bisect_left.", pseudocode: "count = bisect_right(arr, target) - bisect_left(arr, target)\nprint(count)", explanation: "bisect_right - bisect_left evaluates the exact count in 2 * log(N) time.",
        solution: "import sys\nfrom bisect import bisect_left, bisect_right\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        count = bisect_right(arr, target) - bisect_left(arr, target)\n        print(count)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using arr.count(target) which takes O(N) linear time"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["bisect", "binary search"]
    },
    {
        id: "py-prob-10-06", levelId: "py-level-10", title: "Search Insert Position", type: "coding", difficulty: "easy", order: 6,
        description: "LeetCode #35 Search Insert Position.\nGiven a sorted array of distinct integers and a target value `T`:\nReturn the index if the target is found. If not, return the index where it would be if it were inserted in order.\nYou must write an algorithm with `O(log n)` runtime complexity.",
        whyThisMatters: "Directly teaches what `bisect_left` computes: the insertion point maintaining sorted order.",
        concepts: ["search insert", "bisect_left", "binary search"], prerequisites: ["binary search"], learningObjectives: ["Find insertion point with binary search"], constraints: ["Array sorted ascending"],
        examples: [{ input: "5\n1 3 5 6", output: "2" }, { input: "2\n1 3 5 6", output: "1" }, { input: "7\n1 3 5 6", output: "4" }],
        testCases: [
            { id: "tc1", input: "5\n1 3 5 6", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "2\n1 3 5 6", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "7\n1 3 5 6", expectedOutput: "4", hidden: false }
        ],
        starterCode: "import sys\nfrom bisect import bisect_left\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        print(bisect_left(arr, target))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["bisect_left(arr, target)"],
        howToThink: ["When binary search finishes without a match, 'left' pointer points to the insertion position."],
        approach: "Use bisect_left.", pseudocode: "print(bisect_left(arr, target))", explanation: "bisect_left returns the leftmost position where target can be inserted to maintain order.",
        solution: "import sys\nfrom bisect import bisect_left\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        print(bisect_left(arr, target))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Returning left - 1 instead of left"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "classic"]
    },
    {
        id: "py-prob-10-07", levelId: "py-level-10", title: "Integer Square Root with Binary Search", type: "coding", difficulty: "easy", order: 7,
        description: "LeetCode #69 Sqrt(x).\nGiven a non-negative integer `X`, compute and return the integer square root of `X` (`floor(sqrt(X))`) using Binary Search on the range `0` to `X`.\nYou must not use any built-in exponent functions or operators.",
        whyThisMatters: "Binary Search on Answer / Solution Space is a critical interview pattern.",
        concepts: ["binary search on answer", "integer sqrt", "solution space"], prerequisites: ["binary search"], learningObjectives: ["Apply binary search to a monotonic mathematical function"], constraints: ["X >= 0"],
        examples: [{ input: "8", output: "2" }, { input: "16", output: "4" }, { input: "0", output: "0" }],
        testCases: [
            { id: "tc1", input: "8", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "16", expectedOutput: "4", hidden: false },
            { id: "tc3", input: "0", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    x = int(sys.stdin.read().strip())\n    # Compute floor(sqrt(x)) with binary search\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Search space: left = 0, right = x. If mid * mid <= x, save mid and search higher."],
        howToThink: ["Monotonic property: as m increases, m^2 strictly increases."],
        approach: "Binary search on monotonic m*m.", pseudocode: "left, right = 0, x\nans = 0\nwhile left <= right:\n    mid = (left + right) // 2\n    if mid * mid <= x: ans = mid; left = mid + 1\n    else: right = mid - 1\nprint(ans)", explanation: "O(log X) steps to find largest integer whose square <= x.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        x = int(raw)\n        left, right = 0, x\n        ans = 0\n        while left <= right:\n            mid = (left + right) // 2\n            if mid * mid <= x:\n                ans = mid\n                left = mid + 1\n            else:\n                right = mid - 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Integer overflow in languages without arbitrary precision (Python handles this naturally)"], timeComplexity: "O(log X)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "math"]
    },
    {
        id: "py-prob-10-08", levelId: "py-level-10", title: "Find Peak Element", type: "coding", difficulty: "medium", order: 8,
        description: "LeetCode #162 Find Peak Element.\nA peak element is an element that is strictly greater than its neighbors.\nGiven an integer array `arr`, find any peak element and print its 0-based index.\nYou must write an algorithm that runs in `O(log n)` time.",
        whyThisMatters: "Demonstrates that binary search applies to unsorted arrays whenever a directional derivative exists.",
        concepts: ["peak element", "binary search", "directional slope"], prerequisites: ["binary search"], learningObjectives: ["Use binary search slope walking to find local peak"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 3 1", output: "2" }],
        testCases: [
            { id: "tc1", input: "1 2 3 1", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "1 2 1 3 5 6 4", expectedOutput: "5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    # Find peak index in O(log N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["If arr[mid] < arr[mid + 1], a peak must lie to the right! left = mid + 1. Else right = mid."],
        howToThink: ["Walk towards the higher neighbor; a peak is guaranteed to exist in that direction."],
        approach: "Slope-following binary search.", pseudocode: "left, right = 0, len(arr) - 1\nwhile left < right:\n    mid = (left + right) // 2\n    if arr[mid] < arr[mid + 1]: left = mid + 1\n    else: right = mid\nprint(left)", explanation: "If slope is rising, a peak is guaranteed to exist on the right.",
        solution: "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    if arr:\n        left, right = 0, len(arr) - 1\n        while left < right:\n            mid = (left + right) // 2\n            if arr[mid] < arr[mid + 1]:\n                left = mid + 1\n            else:\n                right = mid\n        print(left)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Out of bounds on mid + 1 when using left <= right"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "peaks"]
    },
    {
        id: "py-prob-10-09", levelId: "py-level-10", title: "Minimum in Rotated Sorted Array", type: "coding", difficulty: "medium", order: 9,
        description: "LeetCode #153.\nSuppose an array of length `N` sorted in ascending order is rotated between 1 and `N` times.\nGiven the rotated sorted array with unique elements, find and print the MINIMUM element in `O(log n)` time.",
        whyThisMatters: "Standard FAANG assessment question for rotated array navigation.",
        concepts: ["rotated sorted array", "binary search", "inflection point"], prerequisites: ["binary search"], learningObjectives: ["Find inflection point in rotated sorted array"], constraints: ["All elements unique"],
        examples: [{ input: "3 4 5 1 2", output: "1" }, { input: "4 5 6 7 0 1 2", output: "0" }],
        testCases: [
            { id: "tc1", input: "3 4 5 1 2", expectedOutput: "1", hidden: false },
            { id: "tc2", input: "4 5 6 7 0 1 2", expectedOutput: "0", hidden: false },
            { id: "tc3", input: "11 13 15 17", expectedOutput: "11", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    # Find minimum in O(log N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Compare arr[mid] with arr[right]. If arr[mid] > arr[right], min is on right: left = mid + 1. Else right = mid."],
        howToThink: ["If mid > right, the drop is in the right half. Else the min is at mid or left of mid."],
        approach: "Compare mid with right boundary.", pseudocode: "left, right = 0, len(arr) - 1\nwhile left < right:\n    mid = (left + right) // 2\n    if arr[mid] > arr[right]: left = mid + 1\n    else: right = mid\nprint(arr[left])", explanation: "Shrinks window to inflection point in O(log N).",
        solution: "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    if arr:\n        left, right = 0, len(arr) - 1\n        while left < right:\n            mid = (left + right) // 2\n            if arr[mid] > arr[right]:\n                left = mid + 1\n            else:\n                right = mid\n        print(arr[left])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Comparing with arr[left] which fails when the array is already fully sorted"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "rotated"]
    },
    {
        id: "py-prob-10-10", levelId: "py-level-10", title: "Search a 2D Matrix", type: "coding", difficulty: "medium", order: 10,
        description: "LeetCode #74 Search a 2D Matrix.\nYou are given an `M x N` integer matrix with properties:\n1. Integers in each row are sorted from left to right.\n2. The first integer of each row is greater than the last integer of the previous row.\n\nGiven `Target`, `M`, and `N` followed by the matrix elements:\nPrint `True` if `Target` is in the matrix, otherwise print `False` in `O(log(M * N))` time.",
        whyThisMatters: "Treating a 2D grid as a flattened 1D array using coordinate mapping `row = mid // N, col = mid % N`.",
        concepts: ["2D binary search", "coordinate mapping", "matrix"], prerequisites: ["binary search", "matrices"], learningObjectives: ["Map 1D index to 2D coordinates for binary search"], constraints: ["M, N >= 1"],
        examples: [{ input: "3 3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60", output: "True" }],
        testCases: [
            { id: "tc1", input: "3 3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "13 3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 3:\n        target = tokens[0]\n        m, n = tokens[1], tokens[2]\n        matrix = tokens[3:]\n        # Binary search 1D mapped index\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Total elements = m * n. In binary search, mid element is at matrix[mid]. Check mid value vs target."],
        howToThink: ["The 2D matrix is equivalent to a sorted 1D array of length M*N."],
        approach: "1D binary search on flattened size M * N.", pseudocode: "left, right = 0, m * n - 1\nwhile left <= right:\n    mid = (left + right) // 2\n    val = matrix[mid]\n    if val == target: print('True'); return\n    elif val < target: left = mid + 1\n    else: right = mid - 1\nprint('False')", explanation: "Standard O(log(M * N)) binary search.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 3:\n        target = tokens[0]\n        m, n = tokens[1], tokens[2]\n        matrix = tokens[3:]\n        left, right = 0, m * n - 1\n        while left <= right:\n            mid = (left + right) // 2\n            val = matrix[mid]\n            if val == target:\n                print('True')\n                return\n            elif val < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Searching row-by-row in O(M log N) instead of single O(log(M*N)) search"], timeComplexity: "O(log(M * N))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "matrix"]
    }
];

// Level 11: Sorting & Key Functions
const level11 = [
    {
        id: "py-prob-11-01", levelId: "py-level-11", title: "Sort Integers Ascending & Descending", type: "coding", difficulty: "beginner", order: 1,
        description: "Given a list of integers, print the sorted list in ascending order on the first line, and descending order (`reverse=True`) on the second line.",
        whyThisMatters: "Python's `sorted()` provides stable O(N log N) sorting using Timsort.",
        concepts: ["sorted", "reverse parameter", "timsort"], prerequisites: ["sorting"], learningObjectives: ["Use sorted() and reverse=True"], constraints: ["List of integers"],
        examples: [{ input: "5 2 9 1 5 6", output: "1 2 5 5 6 9\n9 6 5 5 2 1" }],
        testCases: [
            { id: "tc1", input: "5 2 9 1 5 6", expectedOutput: "1 2 5 5 6 9\n9 6 5 5 2 1", hidden: false },
            { id: "tc2", input: "10 20", expectedOutput: "10 20\n20 10", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print ascending and descending\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(*sorted(nums))\nprint(*sorted(nums, reverse=True))"],
        howToThink: ["Apply sorted() twice, once with reverse=True."],
        approach: "Use sorted(nums) and sorted(nums, reverse=True).", pseudocode: "print(*sorted(nums))\nprint(*sorted(nums, reverse=True))", explanation: "Built-in Timsort adapts to existing order in O(N log N).",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*sorted(nums))\n        print(*sorted(nums, reverse=True))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Modifying in-place with .sort() which returns None"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["sorting"]
    },
    {
        id: "py-prob-11-02", levelId: "py-level-11", title: "Sort by Absolute Value", type: "coding", difficulty: "easy", order: 2,
        description: "Given a list of integers containing positive and negative values:\nSort the integers by their absolute value in ascending order using `key=abs`.\n(Preserve relative order for equal absolute values due to Timsort's stability).\nPrint the sorted integers space-separated.",
        whyThisMatters: "Demonstrates key-functions: `key=abs` passes each element through a transformation before comparing.",
        concepts: ["key parameter", "abs", "stable sorting"], prerequisites: ["sorting"], learningObjectives: ["Use key parameter with built-in functions like abs"], constraints: ["List of integers"],
        examples: [{ input: "-5 2 -1 3 -2", output: "-1 2 -2 3 -5" }],
        testCases: [
            { id: "tc1", input: "-5 2 -1 3 -2", expectedOutput: "-1 2 -2 3 -5", hidden: false },
            { id: "tc2", input: "-10 10", expectedOutput: "-10 10", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Sort by abs\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(nums, key=abs)"],
        howToThink: ["Sort by absolute magnitude."],
        approach: "Use sorted(nums, key=abs).", pseudocode: "print(*sorted(nums, key=abs))", explanation: "Timsort is stable, maintaining input order between 2 and -2 when both have abs value 2.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*sorted(nums, key=abs))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Transforming numbers to abs permanently instead of using key=abs"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sorting", "stability"]
    },
    {
        id: "py-prob-11-03", levelId: "py-level-11", title: "Sort Strings by Length", type: "coding", difficulty: "easy", order: 3,
        description: "Given a list of words, sort them by length ascending.\nFor words of identical length, sort them alphabetically ascending.\nPrint the sorted words space-separated.",
        whyThisMatters: "Multi-criterion sorting using tuple keys `key=lambda w: (len(w), w)` is standard in Python.",
        concepts: ["multi-criterion sort", "tuple keys", "lambdas"], prerequisites: ["sorting", "lambdas"], learningObjectives: ["Sort by composite tuple keys"], constraints: ["List of strings"],
        examples: [{ input: "banana apple pie a cat", output: "a cat pie apple banana" }],
        testCases: [
            { id: "tc1", input: "banana apple pie a cat", expectedOutput: "a cat pie apple banana", hidden: false },
            { id: "tc2", input: "beta alpha", expectedOutput: "beta alpha", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Sort by (len, word)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(words, key=lambda w: (len(w), w))"],
        howToThink: ["Use key lambda returning (length, word)."],
        approach: "Sort with composite key (len(w), w).", pseudocode: "print(*sorted(words, key=lambda w: (len(w), w)))", explanation: "Python compares tuples element-by-element, breaking ties on the second element.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if words:\n        print(*sorted(words, key=lambda w: (len(w), w)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting only by length without alphabetical tie-breaker"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sorting", "lambdas"]
    },
    {
        id: "py-prob-11-04", levelId: "py-level-11", title: "Sort Pairs by Second Element", type: "coding", difficulty: "easy", order: 4,
        description: "You are given pairs of `(name, score)` from standard input: `Alice 90 Bob 75 Charlie 85`.\nSort the pairs in ascending order of score.\nPrint each pair as `<name> <score>` on separate lines.",
        whyThisMatters: "Interval scheduling, edge weights in graphs (Kruskal's), and ranking use pair sorting.",
        concepts: ["tuple sorting", "lambda key", "pairs"], prerequisites: ["sorting"], learningObjectives: ["Sort list of tuples by specific index"], constraints: ["Integer scores"],
        examples: [{ input: "Alice 90 Bob 75 Charlie 85", output: "Bob 75\nCharlie 85\nAlice 90" }],
        testCases: [
            { id: "tc1", input: "Alice 90 Bob 75 Charlie 85", expectedOutput: "Bob 75\nCharlie 85\nAlice 90", hidden: false },
            { id: "tc2", input: "A 10 B 5", expectedOutput: "B 5\nA 10", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Construct pairs and sort by score\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["pairs.sort(key=lambda x: x[1])"],
        howToThink: ["Group tokens into (name, int(score)), sort with key=lambda x: x[1]."],
        approach: "Sort pairs by second element.", pseudocode: "pairs = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\npairs.sort(key=lambda x: x[1])\nfor n, s in pairs: print(f'{n} {s}')", explanation: "x[1] extracts the score for comparison.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    pairs = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\n    pairs.sort(key=lambda x: x[1])\n    for n, s in pairs:\n        print(f'{n} {s}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Comparing scores as strings instead of converting to integer"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sorting"]
    },
    {
        id: "py-prob-11-05", levelId: "py-level-11", title: "Kth Largest Element", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #215 Kth Largest Element in an Array.\nGiven integer `K` on the first line, followed by `N` integers on the second line:\nFind the `K`-th largest element in the sorted array (1-based, e.g. K=1 is maximum).\nPrint the K-th largest element.",
        whyThisMatters: "Top-K elements can be solved via sorting, min-heaps (`heapq`), or QuickSelect in linear time.",
        concepts: ["kth largest", "sorting", "heaps"], prerequisites: ["sorting"], learningObjectives: ["Find Kth order statistic"], constraints: ["1 <= K <= N"],
        examples: [{ input: "2\n3 2 1 5 6 4", output: "5" }, { input: "4\n3 2 3 1 2 4 5 5 6", output: "4" }],
        testCases: [
            { id: "tc1", input: "2\n3 2 1 5 6 4", expectedOutput: "5", hidden: false },
            { id: "tc2", input: "4\n3 2 3 1 2 4 5 5 6", expectedOutput: "4", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        nums = tokens[1:]\n        # Find K-th largest\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(nums, reverse=True)[k - 1]"],
        howToThink: ["Sort descending, access index k - 1."],
        approach: "Sort descending and index at k - 1.", pseudocode: "sorted_nums = sorted(nums, reverse=True)\nprint(sorted_nums[k - 1])", explanation: "Accesses the Kth largest element cleanly.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        nums = tokens[1:]\n        sorted_nums = sorted(nums, reverse=True)\n        print(sorted_nums[k - 1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Off-by-one: using index k instead of k - 1"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sorting", "classic"]
    },
    {
        id: "py-prob-11-06", levelId: "py-level-11", title: "Sort Characters by Frequency", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #451.\nGiven a string `S`, sort its characters in decreasing order based on the frequency of each character.\nIf frequencies are equal, preserve alphabetical order.\nPrint the reconstructed string.",
        whyThisMatters: "Bucket sort and frequency map sorting are common string optimization questions.",
        concepts: ["frequency sort", "counter", "multi-key sort"], prerequisites: ["sorting", "dictionaries"], learningObjectives: ["Reconstruct strings ordered by character frequencies"], constraints: ["Non-empty string"],
        examples: [{ input: "tree", output: "eert" }, { input: "cccaaa", output: "aaaccc" }],
        testCases: [
            { id: "tc1", input: "tree", expectedOutput: "eert", hidden: false },
            { id: "tc2", input: "cccaaa", expectedOutput: "aaaccc", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Sort characters by frequency\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Count with Counter(s). Sort unique chars with key=lambda c: (-counts[c], c). Multiply each by counts[c]."],
        howToThink: ["Sort chars by (-freq, char), repeat each char by freq."],
        approach: "Counter + multi-key sorting.", pseudocode: "counts = Counter(s)\nchars = sorted(counts.keys(), key=lambda c: (-counts[c], c))\nprint(''.join(c * counts[c] for c in chars))", explanation: "Multiplies characters by their counts and joins.",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    counts = Counter(s)\n    chars = sorted(counts.keys(), key=lambda c: (-counts[c], c))\n    print(''.join(c * counts[c] for c in chars))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Printing only the unique characters without their multiplicities"], timeComplexity: "O(N log U)", spaceComplexity: "O(U)", interviewRelevance: "high", tags: ["sorting", "strings"]
    },
    {
        id: "py-prob-11-07", levelId: "py-level-11", title: "Sort Colors (Dutch National Flag)", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #75 Sort Colors.\nGiven an array `arr` containing only `0`s (red), `1`s (white), and `2`s (blue):\nSort the array in-place so that objects of the same color are adjacent, in order 0, 1, 2.\nPrint the sorted array space-separated.\n\nCan you do this in one pass `O(N)` time using Dijkstra's 3-way partitioning?",
        whyThisMatters: "Dutch National Flag is the foundation of 3-way QuickSort (Dijkstra).",
        concepts: ["dutch national flag", "three pointers", "in-place partition"], prerequisites: ["sorting", "two pointers"], learningObjectives: ["Implement 3-way partitioning in O(N) time and O(1) space"], constraints: ["Elements are 0, 1, or 2"],
        examples: [{ input: "2 0 2 1 1 0", output: "0 0 1 1 2 2" }],
        testCases: [
            { id: "tc1", input: "2 0 2 1 1 0", expectedOutput: "0 0 1 1 2 2", hidden: false },
            { id: "tc2", input: "2 0 1", expectedOutput: "0 1 2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # 3-way partition\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["low = 0, mid = 0, high = len(nums) - 1. While mid <= high: if 0 swap(low, mid), low++, mid++; if 1 mid++; if 2 swap(mid, high), high--."],
        howToThink: ["Three pointers: low boundary for 0, high boundary for 2, mid scanner for 1."],
        approach: "One-pass Dutch National Flag 3-way partition.", pseudocode: "low, mid, high = 0, 0, len(nums) - 1\nwhile mid <= high:\n    if nums[mid] == 0: nums[low], nums[mid] = nums[mid], nums[low]; low += 1; mid += 1\n    elif nums[mid] == 1: mid += 1\n    else: nums[mid], nums[high] = nums[high], nums[mid]; high -= 1\nprint(*nums)", explanation: "Partitions in a single pass with O(1) space.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    low, mid, high = 0, 0, len(nums) - 1\n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1\n            mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else:\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1\n    print(*nums)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Advancing mid pointer after swapping with high (the swapped value has not been examined yet)"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["partition", "classic"]
    },
    {
        id: "py-prob-11-08", levelId: "py-level-11", title: "Merge Overlapping Intervals", type: "coding", difficulty: "medium", order: 8,
        description: "LeetCode #56 Merge Intervals.\nGiven an array of intervals `[start, end]`:\nMerge all overlapping intervals, and print the merged intervals as `<start> <end>` on separate lines.",
        whyThisMatters: "Interval merging is asked constantly by Bloomberg, Amazon, and IBM.",
        concepts: ["intervals", "sorting by start", "merging"], prerequisites: ["sorting"], learningObjectives: ["Sort intervals by start time and merge contiguous spans"], constraints: ["Intervals start <= end"],
        examples: [{ input: "1 3 2 6 8 10 15 18", output: "1 6\n8 10\n15 18" }],
        testCases: [
            { id: "tc1", input: "1 3 2 6 8 10 15 18", expectedOutput: "1 6\n8 10\n15 18", hidden: false },
            { id: "tc2", input: "1 4 4 5", expectedOutput: "1 5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    # Merge intervals\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Sort intervals by start time: intervals.sort(key=lambda x: x[0]). Iterate and compare current start with last merged end."],
        howToThink: ["Sort by start time. If current interval starts <= last merged end, extend end = max(end, current_end)."],
        approach: "Sort by start and merge sequentially.", pseudocode: "intervals.sort(key=lambda x: x[0])\nmerged = [intervals[0]]\nfor s, e in intervals[1:]:\n    if s <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], e)\n    else: merged.append([s, e])\nfor s, e in merged: print(f'{s} {e}')", explanation: "Sorting simplifies interval overlap checks to linear scan.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if not tokens:\n        return\n    intervals = [[tokens[i], tokens[i+1]] for i in range(0, len(tokens), 2)]\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for s, e in intervals[1:]:\n        if s <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], e)\n        else:\n            merged.append([s, e])\n    for s, e in merged:\n        print(f'{s} {e}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Missing intervals that touch at endpoints (e.g. [1,4] and [4,5] overlap)"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["intervals", "must-know"]
    },
    {
        id: "py-prob-11-09", levelId: "py-level-11", title: "Custom Student Roster Sort", type: "coding", difficulty: "easy", order: 9,
        description: "Given student records `name score age` from input:\nSort the students by:\n1. Score descending (highest score first)\n2. Age ascending (younger first if scores tied)\n3. Name alphabetically ascending (if score and age tied)\nPrint each student as `<name> <score> <age>` on separate lines.",
        whyThisMatters: "Compound multi-key sorting with mixed directions (ascending vs descending) in Python.",
        concepts: ["multi-key sort", "negation technique", "lambdas"], prerequisites: ["sorting"], learningObjectives: ["Mix ascending and descending criteria in key lambdas"], constraints: ["Integer score and age"],
        examples: [{ input: "Alice 90 20 Bob 90 19 Charlie 85 22", output: "Bob 90 19\nAlice 90 20\nCharlie 85 22" }],
        testCases: [
            { id: "tc1", input: "Alice 90 20 Bob 90 19 Charlie 85 22", expectedOutput: "Bob 90 19\nAlice 90 20\nCharlie 85 22", hidden: false },
            { id: "tc2", input: "Dan 70 21 Dave 70 21", expectedOutput: "Dan 70 21\nDave 70 21", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Sort with compound key\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["key=lambda x: (-x['score'], x['age'], x['name'])"],
        howToThink: ["Tuple key: (-score, age, name)."],
        approach: "Use tuple key with numeric negation.", pseudocode: "students.sort(key=lambda s: (-s[1], s[2], s[0]))\nfor s in students: print(f'{s[0]} {s[1]} {s[2]}')", explanation: "Negating numeric scores inverts the direction cleanly.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    students = []\n    for i in range(0, len(tokens), 3):\n        students.append((tokens[i], int(tokens[i+1]), int(tokens[i+2])))\n    students.sort(key=lambda s: (-s[1], s[2], s[0]))\n    for s in students:\n        print(f'{s[0]} {s[1]} {s[2]}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Trying to negate string names (causes TypeError)"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sorting"]
    },
    {
        id: "py-prob-11-10", levelId: "py-level-11", title: "Relative Sort Order", type: "coding", difficulty: "medium", order: 10,
        description: "LeetCode #1122 Relative Sort Array.\nGiven a priority order array `order` followed by a target array `arr` on the next line:\nSort the elements of `arr` such that relative ordering matches `order`.\nElements not in `order` should appear at the end, sorted in ascending order.\nPrint the sorted array space-separated.",
        whyThisMatters: "Custom comparator mapping using a lookup dictionary.",
        concepts: ["relative sort", "rank map", "key function"], prerequisites: ["sorting", "dictionaries"], learningObjectives: ["Sort elements according to external rank mapping"], constraints: ["Integer arrays"],
        examples: [{ input: "2 1 4 3\n2 1 2 5 7 1 9 3 6 8 8", output: "2 2 1 1 3 5 6 7 8 8 9" }],
        testCases: [
            { id: "tc1", input: "2 1 4 3\n2 1 2 5 7 1 9 3 6 8 8", expectedOutput: "2 2 1 1 3 5 6 7 8 8 9", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        order = list(map(int, lines[0].split()))\n        arr = list(map(int, lines[1].split()))\n        # Relative sort\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["rank = {x: i for i, x in enumerate(order)}. Key function: (0, rank[x]) if x in rank else (1, x)."],
        howToThink: ["Map elements in order to priority (0, rank). Unranked elements map to (1, x)."],
        approach: "Rank dict with fallback tuple key.", pseudocode: "rank = {x: i for i, x in enumerate(order)}\narr.sort(key=lambda x: (0, rank[x]) if x in rank else (1, x))\nprint(*arr)", explanation: "Two-stage tuple key guarantees order priority followed by unranked elements sorted ascending.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        order = list(map(int, lines[0].split()))\n        arr = list(map(int, lines[1].split()))\n        rank = {x: i for i, x in enumerate(order)}\n        arr.sort(key=lambda x: (0, rank[x]) if x in rank else (1, x))\n        print(*arr)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Unranked elements not sorted ascending among themselves"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sorting", "custom rank"]
    }
];

// Level 12: Time & Space Complexity in Python
const level12 = [
    {
        id: "py-prob-12-01", levelId: "py-level-12", title: "List in vs Set in (O(N) vs O(1))", type: "coding", difficulty: "easy", order: 1,
        description: "Checking membership in a Python list (`x in my_list`) takes linear `O(N)` time.\nChecking membership in a Python set (`x in my_set`) takes constant `O(1)` time!\n\n**Task:**\nGiven an array of allowed IDs on line 1, and query IDs on line 2:\nConvert allowed IDs to a `set` and count how many query IDs are allowed.\nPrint the count.",
        whyThisMatters: "Converting lists to sets before repeated lookups turns O(M * N) algorithms into O(M + N).",
        concepts: ["big-o", "set lookup", "o(1) vs o(n)"], prerequisites: ["complexity"], learningObjectives: ["Optimize lookup operations from O(N) to O(1) using sets"], constraints: ["Allowed and query lists"],
        examples: [{ input: "1 2 3 4 5\n3 5 7 9 1", output: "3" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5\n3 5 7 9 1", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "10 20\n30 40", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        allowed = set(map(int, lines[0].split()))\n        queries = list(map(int, lines[1].split()))\n        print(sum(1 for q in queries if q in allowed))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["allowed_set = set(allowed), then sum(1 for q in queries if q in allowed_set)."],
        howToThink: ["Converting allowed to a set allows O(1) membership check per query."],
        approach: "Use set for O(1) lookup.", pseudocode: "allowed = set(map(int, lines[0].split()))\nprint(sum(1 for q in queries if q in allowed))", explanation: "Reduces runtime from quadratic O(N * Q) to linear O(N + Q).",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        allowed = set(map(int, lines[0].split()))\n        queries = list(map(int, lines[1].split()))\n        print(sum(1 for q in queries if q in allowed))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Leaving allowed as a list causing O(N*M) TLE on large inputs"], timeComplexity: "O(N + Q)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["complexity", "sets"]
    },
    {
        id: "py-prob-12-02", levelId: "py-level-12", title: "Prefix Sum Array for O(1) Range Queries", type: "coding", difficulty: "medium", order: 2,
        description: "Given an array `arr` of size `N`, compute its prefix sum array `P` where `P[0] = 0` and `P[i] = P[i-1] + arr[i-1]`.\nThen for query range `[L, R]` (0-based inclusive):\nThe sum of subarray from index `L` to `R` can be queried in strictly `O(1)` time as `P[R + 1] - P[L]`!\n\n**Task:**\nInput format: `L R` on first line, array elements on second line.\nCompute and print the range sum using prefix sums.",
        whyThisMatters: "Prefix sums optimize repetitive range queries from O(N) to O(1).",
        concepts: ["prefix sums", "o(1) query", "range queries"], prerequisites: ["complexity", "lists"], learningObjectives: ["Construct and query a prefix sum array in O(1)"], constraints: ["0 <= L <= R < N"],
        examples: [{ input: "1 3\n10 20 30 40 50", output: "90" }],
        testCases: [
            { id: "tc1", input: "1 3\n10 20 30 40 50", expectedOutput: "90", hidden: false },
            { id: "tc2", input: "0 4\n1 2 3 4 5", expectedOutput: "15", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        l, r = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        # Compute prefix sums\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["P = [0]. For x in arr: P.append(P[-1] + x). Range sum is P[r + 1] - P[l]."],
        howToThink: ["Build cumulative sum array. Range sum from L to R is P[R+1] - P[L]."],
        approach: "Prefix sum array construction and O(1) subtraction.", pseudocode: "P = [0]\nfor x in arr: P.append(P[-1] + x)\nprint(P[r + 1] - P[l])", explanation: "Precomputing takes O(N), every range query thereafter is instantaneous O(1).",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        l, r = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        P = [0]\n        for x in arr:\n            P.append(P[-1] + x)\n        print(P[r + 1] - P[l])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Off-by-one error using P[r] - P[l] instead of P[r+1] - P[l]"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["prefix sums", "essential"]
    },
    {
        id: "py-prob-12-03", levelId: "py-level-12", title: "Space-Optimized Fibonacci", type: "coding", difficulty: "easy", order: 3,
        description: "Given `N`, calculate the N-th Fibonacci number.\nInstead of using an array of size `N` (which costs O(N) auxiliary space),\nmaintain only two moving variables `a` and `b` to achieve `O(1)` space complexity.\nPrint the result.",
        whyThisMatters: "Demonstrates state compression: when only the last K values are needed, O(K) space suffices.",
        concepts: ["space optimization", "o(1) space", "state compression"], prerequisites: ["fibonacci"], learningObjectives: ["Compress space from O(N) to O(1)"], constraints: ["1 <= N <= 50"],
        examples: [{ input: "7", output: "13" }],
        testCases: [
            { id: "tc1", input: "7", expectedOutput: "13", hidden: false },
            { id: "tc2", input: "2", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute with O(1) space\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["a, b = 1, 1; for _ in range(n - 1): a, b = b, a + b"],
        howToThink: ["Only need previous two values at any given point."],
        approach: "Rolling variables.", pseudocode: "a, b = 1, 1\nfor _ in range(n - 1): a, b = b, a + b\nprint(a)", explanation: "Two variable rotation takes O(1) space instead of an O(N) array.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        a, b = 1, 1\n        for _ in range(n - 1):\n            a, b = b, a + b\n        print(a)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Allocating an array of size N when space is constrained"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["space optimization", "dp"]
    },
    {
        id: "py-prob-12-04", levelId: "py-level-12", title: "Majority Element (Boyer-Moore Voting)", type: "coding", difficulty: "medium", order: 4,
        description: "LeetCode #169 Majority Element.\nGiven an array `arr` of size `N`, find the majority element that appears more than `N // 2` times.\nYou may assume that the majority element always exists in the array.\n\nImplement the Boyer-Moore Voting Algorithm to solve this in `O(N)` time and `O(1)` space complexity.",
        whyThisMatters: "Boyer-Moore Voting is a legendary algorithm frequently quizzed in technical interviews for its O(1) space efficiency.",
        concepts: ["boyer-moore", "majority element", "o(1) space"], prerequisites: ["complexity"], learningObjectives: ["Implement Boyer-Moore Voting Algorithm in O(1) space"], constraints: ["Majority element guaranteed to exist"],
        examples: [{ input: "3 2 3", output: "3" }, { input: "2 2 1 1 1 2 2", output: "2" }],
        testCases: [
            { id: "tc1", input: "3 2 3", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "2 2 1 1 1 2 2", expectedOutput: "2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Boyer-Moore voting\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["candidate = None, count = 0. For x in nums: if count == 0: candidate = x. count += (1 if x == candidate else -1)."],
        howToThink: ["Different elements cancel each other out; the majority element will survive."],
        approach: "Boyer-Moore Voting Algorithm.", pseudocode: "candidate = None\ncount = 0\nfor x in nums:\n    if count == 0: candidate = x\n    count += 1 if x == candidate else -1\nprint(candidate)", explanation: "Pairwise cancellation of distinct elements leaves the majority candidate standing in O(N) time and O(1) space.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    candidate = None\n    count = 0\n    for x in nums:\n        if count == 0:\n            candidate = x\n        count += 1 if x == candidate else -1\n    print(candidate)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using hash map (O(N) space) when O(1) space is required"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["algorithms", "must-know"]
    },
    {
        id: "py-prob-12-05", levelId: "py-level-12", title: "Maximum Subarray (Kadane's Algorithm)", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #53 Maximum Subarray.\nGiven an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and print its sum.\n\nImplement Kadane's Algorithm to solve this in `O(N)` time and `O(1)` space.",
        whyThisMatters: "Kadane's algorithm is the quintessential DP / greedy algorithm for 1D arrays.",
        concepts: ["kadanes algorithm", "maximum subarray", "dynamic programming"], prerequisites: ["complexity"], learningObjectives: ["Implement Kadane's algorithm in O(N) time"], constraints: ["N >= 1"],
        examples: [{ input: "-2 1 -3 4 -1 2 1 -5 4", output: "6" }, { input: "1", output: "1" }],
        testCases: [
            { id: "tc1", input: "-2 1 -3 4 -1 2 1 -5 4", expectedOutput: "6", hidden: false },
            { id: "tc2", input: "1", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "5 4 -1 7 8", expectedOutput: "23", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Kadane's algorithm\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["max_current = max_global = nums[0]. For x in nums[1:]: max_current = max(x, max_current + x); max_global = max(max_global, max_current)."],
        howToThink: ["At each step, decide whether to extend previous subarray or start fresh from current element."],
        approach: "Kadane's running sum.", pseudocode: "cur = mx = nums[0]\nfor x in nums[1:]:\n    cur = max(x, cur + x)\n    mx = max(mx, cur)\nprint(mx)", explanation: "Computes maximum subarray ending at each index in a single O(N) pass.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    cur = mx = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        mx = max(mx, cur)\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Initializing max sum to 0 which fails when all numbers are negative"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["kadanes", "must-know"]
    },
    {
        id: "py-prob-12-06", levelId: "py-level-12", title: "Two Pointer In-Place Array Reversal", type: "coding", difficulty: "easy", order: 6,
        description: "Reverse an array in-place without using extra array allocations (`O(1)` auxiliary space).\nUse two pointers `left = 0, right = N - 1` swapping elements until they meet.\nPrint the reversed array space-separated.",
        whyThisMatters: "Demonstrates true in-place mutation without relying on Python's slice copy allocation.",
        concepts: ["two pointers", "in-place mutation", "o(1) space"], prerequisites: ["lists", "two pointers"], learningObjectives: ["Reverse array in-place using two pointers"], constraints: ["N >= 1"],
        examples: [{ input: "10 20 30 40", output: "40 30 20 10" }],
        testCases: [
            { id: "tc1", input: "10 20 30 40", expectedOutput: "40 30 20 10", hidden: false },
            { id: "tc2", input: "1", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    # In-place reversal\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["l, r = 0, len(arr) - 1. While l < r: arr[l], arr[r] = arr[r], arr[l]; l += 1; r -= 1."],
        howToThink: ["Converging pointers from both ends swapping opposite elements."],
        approach: "Two-pointer swap.", pseudocode: "l, r = 0, len(arr) - 1\nwhile l < r:\n    arr[l], arr[r] = arr[r], arr[l]\n    l += 1; r -= 1\nprint(*arr)", explanation: "Swaps N // 2 times with zero extra memory allocations.",
        solution: "import sys\n\ndef solve():\n    arr = list(map(int, sys.stdin.read().split()))\n    if arr:\n        l, r = 0, len(arr) - 1\n        while l < r:\n            arr[l], arr[r] = arr[r], arr[l]\n            l += 1\n            r -= 1\n        print(*arr)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Looping up to N which swaps elements back to their original positions"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "in-place"]
    },
    {
        id: "py-prob-12-07", levelId: "py-level-12", title: "Move Zeroes in O(N) Time and O(1) Space", type: "coding", difficulty: "easy", order: 7,
        description: "LeetCode #283 Move Zeroes.\nGiven an integer array `nums`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements.\nYou must do this in-place without making a copy of the array.\nPrint the array space-separated.",
        whyThisMatters: "Fast and slow pointer technique for in-place array compaction.",
        concepts: ["two pointers", "array compaction", "in-place"], prerequisites: ["two pointers"], learningObjectives: ["Compact array in-place with slow/fast pointers"], constraints: ["N >= 1"],
        examples: [{ input: "0 1 0 3 12", output: "1 3 12 0 0" }, { input: "0", output: "0" }],
        testCases: [
            { id: "tc1", input: "0 1 0 3 12", expectedOutput: "1 3 12 0 0", hidden: false },
            { id: "tc2", input: "0", expectedOutput: "0", hidden: false },
            { id: "tc3", input: "1 2 3", expectedOutput: "1 2 3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Move zeroes in-place\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["insert_pos = 0. For x in nums: if x != 0: nums[insert_pos] = x; insert_pos += 1. Fill remainder with 0."],
        howToThink: ["Shift non-zero elements to front index, fill remaining tail with zeros."],
        approach: "Two-pointer write index.", pseudocode: "pos = 0\nfor x in nums:\n    if x != 0: nums[pos] = x; pos += 1\nwhile pos < len(nums): nums[pos] = 0; pos += 1\nprint(*nums)", explanation: "Two linear passes in O(N) time and O(1) space.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    pos = 0\n    for x in nums:\n        if x != 0:\n            nums[pos] = x\n            pos += 1\n    while pos < len(nums):\n        nums[pos] = 0\n        pos += 1\n    print(*nums)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Calling nums.remove(0) repeatedly which takes O(N^2) time"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "classic"]
    },
    {
        id: "py-prob-12-08", levelId: "py-level-12", title: "Product of Array Except Self (Concept)", type: "coding", difficulty: "medium", order: 8,
        description: "Given an array `nums` of `N` integers:\nReturn an array `output` such that `output[i]` is equal to the product of all elements of `nums` except `nums[i]`.\nYou must solve this in `O(N)` time without using the division operation `/`.\nPrint the output array space-separated.",
        whyThisMatters: "LeetCode #238 Product of Array Except Self. Teaches prefix products and suffix products.",
        concepts: ["prefix product", "suffix product", "o(n) time"], prerequisites: ["prefix sums"], learningObjectives: ["Compute left and right running products in O(N)"], constraints: ["N >= 2"],
        examples: [{ input: "1 2 3 4", output: "24 12 8 6" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4", expectedOutput: "24 12 8 6", hidden: false },
            { id: "tc2", input: "-1 1 0 -3 3", expectedOutput: "0 0 9 0 0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Product except self without division\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Compute prefix products on forward pass. Then multiply by suffix products on backward pass."],
        howToThink: ["output[i] = (product of elements before i) * (product of elements after i)."],
        approach: "Left and right running products.", pseudocode: "n = len(nums)\nres = [1] * n\np = 1\nfor i in range(n): res[i] = p; p *= nums[i]\np = 1\nfor i in range(n-1, -1, -1): res[i] *= p; p *= nums[i]\nprint(*res)", explanation: "Two passes compute prefix and suffix products in linear time with no division.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    n = len(nums)\n    res = [1] * n\n    p = 1\n    for i in range(n):\n        res[i] = p\n        p *= nums[i]\n    p = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= p\n        p *= nums[i]\n    print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using division (which fails on arrays containing zero)"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["arrays", "must-know"]
    },
    {
        id: "py-prob-12-09", levelId: "py-level-12", title: "Find Duplicate in 1 to N-1 (Floyd's Cycle)", type: "coding", difficulty: "medium", order: 9,
        description: "LeetCode #287 Find the Duplicate Number.\nGiven an array of `N + 1` integers where each integer is in range `[1, N]` inclusive:\nThere is only one repeated number in `nums`.\nFind this repeated number without modifying the array and using only `O(1)` extra space.\n\nUse Floyd's Tortoise and Hare (Cycle Detection).",
        whyThisMatters: "Demonstrates that array indices can be treated as pointer references: `x -> nums[x]`.",
        concepts: ["floyd cycle detection", "tortoise and hare", "o(1) space"], prerequisites: ["complexity"], learningObjectives: ["Apply cycle detection to array indexing"], constraints: ["Exactly one duplicate exists"],
        examples: [{ input: "1 3 4 2 2", output: "2" }, { input: "3 1 3 4 2", output: "3" }],
        testCases: [
            { id: "tc1", input: "1 3 4 2 2", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "3 1 3 4 2", expectedOutput: "3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Floyd's cycle detection\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["slow = nums[0], fast = nums[0]. While True: slow = nums[slow]; fast = nums[nums[fast]]. Break on match."],
        howToThink: ["Array as linked list where node i points to nums[i]. Duplicate creates a cycle."],
        approach: "Floyd's Tortoise and Hare.", pseudocode: "slow = fast = nums[0]\nwhile True:\n    slow = nums[slow]\n    fast = nums[nums[fast]]\n    if slow == fast: break\nslow = nums[0]\nwhile slow != fast:\n    slow = nums[slow]\n    fast = nums[fast]\nprint(slow)", explanation: "Finds cycle entrance in O(N) time and O(1) memory without array mutation.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]\n        fast = nums[nums[fast]]\n        if slow == fast:\n            break\n    slow = nums[0]\n    while slow != fast:\n        slow = nums[slow]\n        fast = nums[fast]\n    print(slow)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Modifying array or using O(N) set"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["floyd", "cycle detection"]
    },
    {
        id: "py-prob-12-10", levelId: "py-level-12", title: "Time Complexity Identifier Challenge", type: "coding", difficulty: "easy", order: 10,
        description: "Given the name of an algorithmic operation from input:\nPrint its Big-O average time complexity:\n- `list_append` -> `O(1)`\n- `list_insert_0` -> `O(N)`\n- `dict_lookup` -> `O(1)`\n- `set_membership` -> `O(1)`\n- `binary_search` -> `O(log N)`\n- `timsort` -> `O(N log N)`\n- `nested_loops` -> `O(N^2)`\n\nIf unrecognized, print `Unknown`.",
        whyThisMatters: "Reinforces Big-O knowledge expected in theoretical interview questions.",
        concepts: ["big-o notation", "built-in complexity", "theory"], prerequisites: ["complexity"], learningObjectives: ["Recall Big-O complexities of Python built-in data operations"], constraints: ["String input"],
        examples: [{ input: "list_append", output: "O(1)" }, { id: "ex2", input: "binary_search", output: "O(log N)" }],
        testCases: [
            { id: "tc1", input: "list_append", expectedOutput: "O(1)", hidden: false },
            { id: "tc2", input: "binary_search", expectedOutput: "O(log N)", hidden: false },
            { id: "tc3", input: "timsort", expectedOutput: "O(N log N)", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    op = sys.stdin.read().strip()\n    # Print Big-O complexity\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use a dictionary mapping operation name to Big-O string."],
        howToThink: ["Map operation names to complexity."],
        approach: "Dictionary lookup.", pseudocode: "COMPLEXITY = {'list_append': 'O(1)', ...}\nprint(COMPLEXITY.get(op, 'Unknown'))", explanation: "O(1) dictionary retrieval of theoretical complexity.",
        solution: "import sys\n\nCOMPLEXITY = {\n    'list_append': 'O(1)',\n    'list_insert_0': 'O(N)',\n    'dict_lookup': 'O(1)',\n    'set_membership': 'O(1)',\n    'binary_search': 'O(log N)',\n    'timsort': 'O(N log N)',\n    'nested_loops': 'O(N^2)'\n}\n\ndef solve():\n    op = sys.stdin.read().strip()\n    print(COMPLEXITY.get(op, 'Unknown'))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Typo in Big-O output formatting"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["theory", "big-o"]
    }
];

// Level 13: Functional Tools & Comprehensions
const level13 = [
    {
        id: "py-prob-13-01", levelId: "py-level-13", title: "Map Function Strings to Integers", type: "coding", difficulty: "beginner", order: 1,
        description: "The `map(function, iterable)` function applies `function` to every item of `iterable`.\n\n**Task:**\nGiven space-separated string integers, use `map(int, ...)` to convert them to integers, compute their sum, and print the sum.",
        whyThisMatters: "`map(int, sys.stdin.read().split())` is the single most common Python input parser.",
        concepts: ["map", "functional programming", "input parsing"], prerequisites: ["comprehensions"], learningObjectives: ["Use map() for type transformation"], constraints: ["Space-separated integers"],
        examples: [{ input: "10 20 30 40", output: "100" }],
        testCases: [
            { id: "tc1", input: "10 20 30 40", expectedOutput: "100", hidden: false },
            { id: "tc2", input: "5", expectedOutput: "5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    # Use map(int, ...) to sum inputs\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(sum(map(int, sys.stdin.read().split())))"],
        howToThink: ["Apply int to each token with map, pass directly to sum."],
        approach: "Use sum(map(int, tokens)).", pseudocode: "print(sum(map(int, input.split())))", explanation: "map returns an iterator, consumed directly by sum without intermediate list allocation.",
        solution: "import sys\n\ndef solve():\n    print(sum(map(int, sys.stdin.read().split())))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Creating an unnecessary list wrapper when sum consumes iterators directly"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["map", "idioms"]
    },
    {
        id: "py-prob-13-02", levelId: "py-level-13", title: "Filter Function Positive Numbers", type: "coding", difficulty: "beginner", order: 2,
        description: "The `filter(predicate, iterable)` function constructs an iterator from elements for which `predicate` returns `True`.\n\n**Task:**\nGiven a list of integers, filter and print only positive integers (`x > 0`) space-separated using `filter()`.",
        whyThisMatters: "`filter()` provides lazy evaluation of filtering predicates.",
        concepts: ["filter", "lambdas", "iterators"], prerequisites: ["comprehensions"], learningObjectives: ["Use filter() with lambda functions"], constraints: ["Integer inputs"],
        examples: [{ input: "-5 10 -2 3 0 7", output: "10 3 7" }],
        testCases: [
            { id: "tc1", input: "-5 10 -2 3 0 7", expectedOutput: "10 3 7", hidden: false },
            { id: "tc2", input: "-1 -2 -3", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Use filter with lambda\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(*filter(lambda x: x > 0, nums))"],
        howToThink: ["Use filter(lambda x: x > 0, nums)."],
        approach: "Filter with lambda.", pseudocode: "print(*filter(lambda x: x > 0, nums))", explanation: "filter lazily yields elements matching the predicate.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(*filter(lambda x: x > 0, nums))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Including 0 as positive"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["filter", "functional"]
    },
    {
        id: "py-prob-13-03", levelId: "py-level-13", title: "Zip Parallel Iteration into Dict", type: "coding", difficulty: "easy", order: 3,
        description: "Given keys on line 1, and values on line 2:\nUse `zip(keys, values)` to pair them and construct a dictionary `dict(zip(keys, values))`.\nPrint each key-value pair sorted by key:\n`<key>: <val>` on separate lines.",
        whyThisMatters: "`zip()` pairs elements from multiple iterables in lockstep, stopping at the shortest.",
        concepts: ["zip", "parallel iteration", "dict constructor"], prerequisites: ["comprehensions", "dictionaries"], learningObjectives: ["Pair iterables using zip() and construct dict"], constraints: ["Equal length key and value lines"],
        examples: [{ input: "a b c\n1 2 3", output: "a: 1\nb: 2\nc: 3" }],
        testCases: [
            { id: "tc1", input: "a b c\n1 2 3", expectedOutput: "a: 1\nb: 2\nc: 3", hidden: false },
            { id: "tc2", input: "x y\n10 20", expectedOutput: "x: 10\ny: 20", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        keys = lines[0].split()\n        values = lines[1].split()\n        # dict(zip(keys, values))\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["d = dict(zip(keys, values))\nfor k in sorted(d): print(f'{k}: {d[k]}')"],
        howToThink: ["zip(keys, values) pairs (k, v), dict() consumes into map."],
        approach: "Use dict(zip(keys, values)).", pseudocode: "d = dict(zip(keys, values))\nfor k in sorted(d): print(f'{k}: {d[k]}')", explanation: "dict(zip(...)) is the standard Python pattern for combining headers and records.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        keys = lines[0].split()\n        values = lines[1].split()\n        d = dict(zip(keys, values))\n        for k in sorted(d):\n            print(f'{k}: {d[k]}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Manual indexing loops with range(len(keys))"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["zip", "dictionaries"]
    },
    {
        id: "py-prob-13-04", levelId: "py-level-13", title: "Enumerate with 1-Based Indexing", type: "coding", difficulty: "beginner", order: 4,
        description: "The `enumerate(iterable, start=0)` built-in yields `(index, item)` pairs.\n\n**Task:**\nRead words from input. Print each word numbered starting from `1`:\n`1. <word1>`\n`2. <word2>`\non separate lines using `enumerate(words, start=1)`.",
        whyThisMatters: "Eliminates manual index counter variables (`i += 1`).",
        concepts: ["enumerate", "index tracking"], prerequisites: ["comprehensions"], learningObjectives: ["Use enumerate() with custom start offset"], constraints: ["Non-empty list of words"],
        examples: [{ input: "Gold Silver Bronze", output: "1. Gold\n2. Silver\n3. Bronze" }],
        testCases: [
            { id: "tc1", input: "Gold Silver Bronze", expectedOutput: "1. Gold\n2. Silver\n3. Bronze", hidden: false },
            { id: "tc2", input: "First", expectedOutput: "1. First", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Print numbered list using enumerate(start=1)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["for i, w in enumerate(words, start=1): print(f'{i}. {w}')"],
        howToThink: ["Use enumerate(words, start=1)."],
        approach: "Loop with enumerate(words, start=1).", pseudocode: "for i, w in enumerate(words, start=1):\n    print(f'{i}. {w}')", explanation: "enumerate start=1 starts numbering from 1 cleanly.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    for i, w in enumerate(words, start=1):\n        print(f'{i}. {w}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Manually incrementing an index variable"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["enumerate", "idioms"]
    },
    {
        id: "py-prob-13-05", levelId: "py-level-13", title: "Any and All Predicate Evaluator", type: "coding", difficulty: "easy", order: 5,
        description: "Given a list of integers:\n- Print `All Positive: True` if every number is `> 0` (`all(x > 0 for x in nums)`), otherwise `All Positive: False`.\n- On line 2, print `Has Even: True` if at least one number is even (`any(x % 2 == 0 for x in nums)`), otherwise `Has Even: False`.",
        whyThisMatters: "`any()` and `all()` short-circuit on generator expressions, terminating the moment truth or falsity is established.",
        concepts: ["any", "all", "short-circuit evaluation"], prerequisites: ["comprehensions"], learningObjectives: ["Use any() and all() with generator expressions"], constraints: ["List of integers"],
        examples: [{ input: "1 3 5", output: "All Positive: True\nHas Even: False" }, { input: "2 -4 6", output: "All Positive: False\nHas Even: True" }],
        testCases: [
            { id: "tc1", input: "1 3 5", expectedOutput: "All Positive: True\nHas Even: False", hidden: false },
            { id: "tc2", input: "2 -4 6", expectedOutput: "All Positive: False\nHas Even: True", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Evaluate all() and any()\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["all(x > 0 for x in nums), any(x % 2 == 0 for x in nums)"],
        howToThink: ["Apply all() for universal quantification, any() for existential quantification."],
        approach: "Use all() and any() with generators.", pseudocode: "print(f'All Positive: {all(x > 0 for x in nums)}')\nprint(f'Has Even: {any(x % 2 == 0 for x in nums)}')", explanation: "Short-circuit execution terminates without scanning full list if condition met.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(f'All Positive: {all(x > 0 for x in nums)}')\n        print(f'Has Even: {any(x % 2 == 0 for x in nums)}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using list comprehension inside any/all which defeats short-circuiting"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["any", "all"]
    },
    {
        id: "py-prob-13-06", levelId: "py-level-13", title: "Flatten 2D List with Comprehension", type: "coding", difficulty: "easy", order: 6,
        description: "Given dimension `R` (rows) followed by `R` rows of space-separated integers on subsequent lines:\nFlatten the 2D list into a single 1D list using a nested list comprehension:\n`[x for row in matrix for x in row]`.\nPrint the flattened list elements space-separated.",
        whyThisMatters: "Nested comprehensions flatten matrices and tree levels concisely.",
        concepts: ["nested comprehensions", "matrix flattening"], prerequisites: ["comprehensions", "2D lists"], learningObjectives: ["Flatten 2D matrix using nested list comprehension"], constraints: ["R >= 1"],
        examples: [{ input: "2\n1 2 3\n4 5 6", output: "1 2 3 4 5 6" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 3\n4 5 6", expectedOutput: "1 2 3 4 5 6", hidden: false },
            { id: "tc2", input: "1\n10 20", expectedOutput: "10 20", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Flatten matrix\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["flat = [x for row in matrix for x in row]"],
        howToThink: ["The order of for clauses in comprehension matches standard nested loops: for row in matrix, then for x in row."],
        approach: "Nested list comprehension.", pseudocode: "matrix = [list(map(int, line.split())) for line in lines[1:]]\nprint(*(x for row in matrix for x in row))", explanation: "Double for comprehension flattens in linear time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        flat = [x for row in matrix for x in row]\n        print(*flat)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Reversing order of for clauses causing NameError"], timeComplexity: "O(R * C)", spaceComplexity: "O(R * C)", interviewRelevance: "medium", tags: ["comprehensions", "matrices"]
    },
    {
        id: "py-prob-13-07", levelId: "py-level-13", title: "Matrix Transpose with zip(*matrix)", type: "coding", difficulty: "easy", order: 7,
        description: "In Python, transposing a matrix (swapping rows and columns) is famously accomplished in one line:\n`transposed = [list(col) for col in zip(*matrix)]`\n\n**Task:**\nGiven dimension `R` followed by `R` rows:\nCompute and print the transposed matrix row-by-row (space-separated).",
        whyThisMatters: "`zip(*matrix)` unpacks rows as arguments, grouping corresponding column elements.",
        concepts: ["zip(*args)", "matrix transpose", "unpacking"], prerequisites: ["zip", "matrices"], learningObjectives: ["Transpose matrices using zip(*matrix)"], constraints: ["R >= 1"],
        examples: [{ input: "2\n1 2 3\n4 5 6", output: "1 4\n2 5\n3 6" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 3\n4 5 6", expectedOutput: "1 4\n2 5\n3 6", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Transpose matrix\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["for col in zip(*matrix): print(*col)"],
        howToThink: ["zip(*matrix) groups elements by column."],
        approach: "Use zip(*matrix).", pseudocode: "for col in zip(*matrix):\n    print(*col)", explanation: "Unpacking the rows with *matrix into zip aligns column values together.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        for col in zip(*matrix):\n            print(*col)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Nested index loops when zip(*matrix) is standard"], timeComplexity: "O(R * C)", spaceComplexity: "O(R * C)", interviewRelevance: "high", tags: ["zip", "matrices"]
    },
    {
        id: "py-prob-13-08", levelId: "py-level-13", title: "Conditional Transformation Comprehension", type: "coding", difficulty: "beginner", order: 8,
        description: "Transform an array of integers:\n- Replace even numbers with `'EVEN'`\n- Replace odd numbers with `'ODD'`\n\nIn Python, ternary if-else inside comprehension takes the form:\n`['EVEN' if x % 2 == 0 else 'ODD' for x in nums]`.\nPrint the transformed tokens space-separated.",
        whyThisMatters: "Notice that ternary if-else comes BEFORE the `for` loop, whereas filtering `if` comes AFTER.",
        concepts: ["ternary comprehension", "transformation", "if-else"], prerequisites: ["comprehensions"], learningObjectives: ["Use ternary if-else within list comprehension"], constraints: ["Integer inputs"],
        examples: [{ input: "1 2 3 4", output: "ODD EVEN ODD EVEN" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4", expectedOutput: "ODD EVEN ODD EVEN", hidden: false },
            { id: "tc2", input: "2 4", expectedOutput: "EVEN EVEN", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Ternary comprehension\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(*['EVEN' if x % 2 == 0 else 'ODD' for x in nums])"],
        howToThink: ["Syntax: [val_if_true if cond else val_if_false for x in list]."],
        approach: "Use ternary comprehension.", pseudocode: "print(*['EVEN' if x % 2 == 0 else 'ODD' for x in nums])", explanation: "Transforms every element according to the condition.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*['EVEN' if x % 2 == 0 else 'ODD' for x in nums])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Placing 'else' at the end of comprehension (SyntaxError)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["comprehensions"]
    },
    {
        id: "py-prob-13-09", levelId: "py-level-13", title: "Set Comprehension Unique Vowels", type: "coding", difficulty: "beginner", order: 9,
        description: "Given a sentence, use a set comprehension to find all unique vowels (`a, e, i, o, u`, lowercase) present in the text:\n`{c.lower() for c in s if c.lower() in 'aeiou'}`\nPrint the unique vowels in alphabetical order space-separated. (If none, print empty line).",
        whyThisMatters: "Set comprehensions `{...}` automatically deduplicate results during construction.",
        concepts: ["set comprehension", "filtering", "vowels"], prerequisites: ["comprehensions", "sets"], learningObjectives: ["Construct sets via set comprehension"], constraints: ["String input"],
        examples: [{ input: "Hello World", output: "e o" }],
        testCases: [
            { id: "tc1", input: "Hello World", expectedOutput: "e o", hidden: false },
            { id: "tc2", input: "rhythm", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    # Set comprehension\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["vowels = {c.lower() for c in s if c.lower() in 'aeiou'}, print(*sorted(vowels))."],
        howToThink: ["Set comprehension enclosed in braces {}."],
        approach: "Set comprehension and sort.", pseudocode: "vowels = {c.lower() for c in s if c.lower() in 'aeiou'}\nprint(*sorted(vowels))", explanation: "Set braces deduplicate characters automatically.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    vowels = {c.lower() for c in s if c.lower() in 'aeiou'}\n    print(*sorted(vowels))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Returning a list with duplicates instead of set"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["comprehensions", "sets"]
    },
    {
        id: "py-prob-13-10", levelId: "py-level-13", title: "Functional Reduce with functools.reduce", type: "coding", difficulty: "easy", order: 10,
        description: "The `functools.reduce(function, iterable)` applies a binary function cumulatively to the items of an iterable to reduce it to a single value.\n\n**Task:**\nGiven a list of positive integers, use `functools.reduce` and `operator.mul` (or a lambda `lambda a, b: a * b`) to compute the product of all elements.\nPrint the product.",
        whyThisMatters: "`reduce` is the foundational MapReduce folding operation in functional programming.",
        concepts: ["reduce", "functools", "aggregation"], prerequisites: ["comprehensions"], learningObjectives: ["Fold sequences with functools.reduce"], constraints: ["Non-empty list of positive integers"],
        examples: [{ input: "2 3 4 5", output: "120" }],
        testCases: [
            { id: "tc1", input: "2 3 4 5", expectedOutput: "120", hidden: false },
            { id: "tc2", input: "7", expectedOutput: "7", hidden: false }
        ],
        starterCode: "import sys\nfrom functools import reduce\nimport operator\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Compute product with reduce\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["reduce(operator.mul, nums) or reduce(lambda a, b: a * b, nums)"],
        howToThink: ["reduce accumulates across the array from left to right."],
        approach: "Use functools.reduce.", pseudocode: "print(reduce(operator.mul, nums))", explanation: "Folds sequence into a single cumulative scalar.",
        solution: "import sys\nfrom functools import reduce\nimport operator\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(reduce(operator.mul, nums))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Importing reduce from built-in (in Python 3, it lives in functools)"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["reduce", "functional"]
    }
];

writeLevel(10, level10);
writeLevel(11, level11);
writeLevel(12, level12);
writeLevel(13, level13);
