import { Problem } from '../types';

export const pyLevel19Problems: Problem[] = [
    {
        "id": "py-prob-19-01",
        "levelId": "py-level-19",
        "title": "Maximum Sum Subarray of Size K",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "Given a fixed window size `K` on line 1, and an array of integers on line 2:\nFind and print the maximum sum of any contiguous subarray of size `K`.\nSolve in `O(N)` time using a fixed sliding window.",
        "whyThisMatters": "Fixed-size sliding window baseline: subtract exiting element, add entering element.",
        "concepts": [
            "fixed sliding window",
            "running sum"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Maintain fixed-size sliding window sum in O(1) per step"
        ],
        "constraints": [
            "1 <= K <= N"
        ],
        "examples": [
            {
                "input": "3\n2 1 5 1 3 2",
                "output": "9"
            },
            {
                "input": "2\n2 3 4 1 5",
                "output": "7"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3\n2 1 5 1 3 2",
                "expectedOutput": "9",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2\n2 3 4 1 5",
                "expectedOutput": "7",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Fixed window max sum\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "cur = sum(nums[:k]), max_sum = cur. For i in range(k, len(nums)): cur += nums[i] - nums[i - k]; max_sum = max(max_sum, cur)."
        ],
        "howToThink": [
            "Sliding the window right adds the new element at i and removes the old element at i - k."
        ],
        "approach": "Slide window: add right, subtract left.",
        "pseudocode": "cur = mx = sum(nums[:k])\nfor i in range(k, len(nums)):\n    cur += nums[i] - nums[i - k]\n    mx = max(mx, cur)\nprint(mx)",
        "explanation": "Avoids re-summing K elements on every step, running in linear O(N) time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        if len(nums) < k:\n            return\n        cur = mx = sum(nums[:k])\n        for i in range(k, len(nums)):\n            cur += nums[i] - nums[i - k]\n            mx = max(mx, cur)\n        print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Re-evaluating sum(nums[i:i+k]) which costs O(N*K)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "essential"
        ]
    },
    {
        "id": "py-prob-19-02",
        "levelId": "py-level-19",
        "title": "Minimum Size Subarray Sum",
        "type": "coding",
        "difficulty": "medium",
        "order": 2,
        "description": "LeetCode #209 Minimum Size Subarray Sum.\nGiven target integer `target` on line 1, and an array of positive integers on line 2:\nFind the minimal length of a contiguous subarray of which the sum is `>= target`.\nIf there is no such subarray, return `0`.",
        "whyThisMatters": "Dynamic-size sliding window: expand right until valid, shrink left to minimize window.",
        "concepts": [
            "dynamic sliding window",
            "two pointers",
            "min window"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Shrink sliding window from left to minimize length"
        ],
        "constraints": [
            "Positive integers"
        ],
        "examples": [
            {
                "input": "7\n2 3 1 2 4 3",
                "output": "2"
            },
            {
                "input": "4\n1 4 4",
                "output": "1"
            },
            {
                "input": "11\n1 1 1 1 1 1 1 1",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7\n2 3 1 2 4 3",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4\n1 4 4",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "11\n1 1 1 1 1 1 1 1",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Dynamic sliding window\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "l = 0, cur = 0, ans = float('inf'). For r in range(len(nums)): cur += nums[r]. While cur >= target: ans = min(ans, r - l + 1); cur -= nums[l]; l += 1."
        ],
        "howToThink": [
            "Grow window right until condition met. Then shrink window left as much as possible while maintaining condition."
        ],
        "approach": "Expand right, contract left while valid.",
        "pseudocode": "l = cur = 0\nans = float('inf')\nfor r in range(len(nums)):\n    cur += nums[r]\n    while cur >= target:\n        ans = min(ans, r - l + 1)\n        cur -= nums[l]; l += 1\nprint(ans if ans != float('inf') else 0)",
        "explanation": "Each index visited at most twice (once by right, once by left), running in O(N).",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l = cur = 0\n        ans = float('inf')\n        for r in range(len(nums)):\n            cur += nums[r]\n            while cur >= target:\n                ans = min(ans, r - l + 1)\n                cur -= nums[l]\n                l += 1\n        print(ans if ans != float('inf') else 0)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing to return 0 when total array sum < target"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "must-know"
        ]
    },
    {
        "id": "py-prob-19-03",
        "levelId": "py-level-19",
        "title": "Longest Substring Without Repeating Characters",
        "type": "coding",
        "difficulty": "medium",
        "order": 3,
        "description": "LeetCode #3 Longest Substring Without Repeating Characters.\nGiven a string `s`, find the length of the longest substring without repeating characters.\nPrint the maximum length.\n\nUse a sliding window with a dictionary storing the most recent index of each character to skip left pointer directly.",
        "whyThisMatters": "The single most asked sliding window interview problem in history.",
        "concepts": [
            "sliding window",
            "hash map",
            "longest substring"
        ],
        "prerequisites": [
            "sliding window",
            "dictionaries"
        ],
        "learningObjectives": [
            "Fast-forward left window pointer using last-seen hash map"
        ],
        "constraints": [
            "ASCII string"
        ],
        "examples": [
            {
                "input": "abcabcbb",
                "output": "3"
            },
            {
                "input": "bbbbb",
                "output": "1"
            },
            {
                "input": "pwwkew",
                "output": "3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "abcabcbb",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "bbbbb",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "pwwkew",
                "expectedOutput": "3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Longest substring without repeats\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "last_idx = {}. l = 0, mx = 0. For r, c in enumerate(s): if c in last_idx and last_idx[c] >= l: l = last_idx[c] + 1. last_idx[c] = r. mx = max(mx, r - l + 1)."
        ],
        "howToThink": [
            "When duplicate c is seen, jump left pointer to last_seen[c] + 1."
        ],
        "approach": "Sliding window with fast-forward index map.",
        "pseudocode": "last = {}\nl = mx = 0\nfor r, c in enumerate(s):\n    if c in last and last[c] >= l:\n        l = last[c] + 1\n    last[c] = r\n    mx = max(mx, r - l + 1)\nprint(mx)",
        "explanation": "Fast-forwards left boundary in strict O(N) single pass.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    last = {}\n    l = mx = 0\n    for r, c in enumerate(s):\n        if c in last and last[c] >= l:\n            l = last[c] + 1\n        last[c] = r\n        mx = max(mx, r - l + 1)\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Not checking last[c] >= l, pulling left pointer backwards to an older duplicate outside current window"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(min(N, U))",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "must-know"
        ]
    },
    {
        "id": "py-prob-19-04",
        "levelId": "py-level-19",
        "title": "Fruit Into Baskets (At Most 2 Distinct)",
        "type": "coding",
        "difficulty": "medium",
        "order": 4,
        "description": "LeetCode #904 Fruit Into Baskets.\nYou have two baskets, and each basket can only hold a single type of fruit.\nGiven an array of integers representing fruit types in a row of trees:\nFind the length of the longest contiguous subarray containing at most `2` distinct integers.\nPrint the maximum length.",
        "whyThisMatters": "Generalizable to 'Longest Substring with At Most K Distinct Characters'.",
        "concepts": [
            "at most k distinct",
            "sliding window",
            "frequency counter"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Maintain at most 2 distinct keys in window hash map"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 1",
                "output": "3"
            },
            {
                "input": "0 1 2 2",
                "output": "3"
            },
            {
                "input": "1 2 3 2 2",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 1",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0 1 2 2",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "1 2 3 2 2",
                "expectedOutput": "4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    fruits = list(map(int, sys.stdin.read().split()))\n    # At most 2 distinct\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "counts = defaultdict(int). When len(counts) > 2, shrink l until len(counts) <= 2."
        ],
        "howToThink": [
            "Grow window right adding fruit counts. If distinct types > 2, shrink from left and remove key when count hits 0."
        ],
        "approach": "Sliding window with frequency counter.",
        "pseudocode": "counts = defaultdict(int)\nl = mx = 0\nfor r, f in enumerate(fruits):\n    counts[f] += 1\n    while len(counts) > 2:\n        counts[fruits[l]] -= 1\n        if counts[fruits[l]] == 0: del counts[fruits[l]]\n        l += 1\n    mx = max(mx, r - l + 1)\nprint(mx)",
        "explanation": "Window expansion and contraction in O(N) time.",
        "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    fruits = list(map(int, sys.stdin.read().split()))\n    if not fruits:\n        return\n    counts = defaultdict(int)\n    l = mx = 0\n    for r, f in enumerate(fruits):\n        counts[f] += 1\n        while len(counts) > 2:\n            counts[fruits[l]] -= 1\n            if counts[fruits[l]] == 0:\n                del counts[fruits[l]]\n            l += 1\n        mx = max(mx, r - l + 1)\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Leaving zero-count keys in dict causing len(counts) to stay > 2"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "frequency"
        ]
    },
    {
        "id": "py-prob-19-05",
        "levelId": "py-level-19",
        "title": "Permutation in String",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #567 Permutation in String.\nGiven two strings `s1` and `s2` on separate lines:\nReturn `True` if `s2` contains a permutation of `s1`, or `False` otherwise.\nIn other words, return `True` if one of `s1`'s permutations is the substring of `s2`.",
        "whyThisMatters": "Fixed sliding window of size `len(s1)` with frequency equality check.",
        "concepts": [
            "permutation substring",
            "fixed window",
            "counter"
        ],
        "prerequisites": [
            "sliding window",
            "counter"
        ],
        "learningObjectives": [
            "Slide fixed window comparing frequency matches"
        ],
        "constraints": [
            "Lowercase letters"
        ],
        "examples": [
            {
                "input": "ab\neidbaooo",
                "output": "True"
            },
            {
                "input": "ab\neidboaoo",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "ab\neidbaooo",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "ab\neidboaoo",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s1, s2 = lines[0].strip(), lines[1].strip()\n        # Check permutation in s2\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "k = len(s1). c1 = Counter(s1). Check if Counter(s2[i:i+k]) == c1 for i in range(len(s2) - k + 1)."
        ],
        "howToThink": [
            "Any permutation of s1 will have the identical character counts within a window of length len(s1)."
        ],
        "approach": "Fixed sliding window comparison.",
        "pseudocode": "k = len(s1)\nc1 = Counter(s1)\nfor i in range(len(s2) - k + 1):\n    if Counter(s2[i:i+k]) == c1: print('True'); return\nprint('False')",
        "explanation": "Checks matching frequency windows.",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s1, s2 = lines[0].strip(), lines[1].strip()\n        k = len(s1)\n        c1 = Counter(s1)\n        if len(s2) < k:\n            print('False')\n            return\n        for i in range(len(s2) - k + 1):\n            if Counter(s2[i:i + k]) == c1:\n                print('True')\n                return\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Generating all permutations of s1 (factorial explosion) instead of frequency matching"
        ],
        "timeComplexity": "O(26 * N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "anagrams"
        ]
    },
    {
        "id": "py-prob-19-06",
        "levelId": "py-level-19",
        "title": "Find All Anagrams in a String",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #438.\nGiven two strings `s` and `p` on separate lines:\nFind all the start indices of `p`'s anagrams in `s`.\nPrint the 0-based start indices space-separated in ascending order.",
        "whyThisMatters": "Extension of Permutation in String returning all starting positions.",
        "concepts": [
            "anagram indices",
            "sliding window"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Output all sliding window matches"
        ],
        "constraints": [
            "Lowercase letters"
        ],
        "examples": [
            {
                "input": "cbaebabacd\nabc",
                "output": "0 6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "cbaebabacd\nabc",
                "expectedOutput": "0 6",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, p = lines[0].strip(), lines[1].strip()\n        # Find all anagram indices\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "k = len(p). cp = Counter(p). Compare Counter(s[i:i+k]) == cp."
        ],
        "howToThink": [
            "Slide window of length len(p) through s, record indices where Counter matches."
        ],
        "approach": "Slide window across string.",
        "pseudocode": "res = []\nk = len(p)\ncp = Counter(p)\nfor i in range(len(s) - k + 1):\n    if Counter(s[i:i+k]) == cp: res.append(i)\nprint(*res)",
        "explanation": "Collects all starting positions in linear time.",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, p = lines[0].strip(), lines[1].strip()\n        k = len(p)\n        cp = Counter(p)\n        res = []\n        for i in range(len(s) - k + 1):\n            if Counter(s[i:i + k]) == cp:\n                res.append(i)\n        print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing when len(s) < len(p)"
        ],
        "timeComplexity": "O(26 * N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "anagrams"
        ]
    },
    {
        "id": "py-prob-19-07",
        "levelId": "py-level-19",
        "title": "Subarray Product Less Than K",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #713 Subarray Product Less Than K.\nGiven integer `K` on line 1, and an array of positive integers on line 2:\nFind the number of contiguous subarrays where the product of all elements in the subarray is strictly less than `K`.",
        "whyThisMatters": "Number of valid subarrays ending at right pointer is `r - l + 1`.",
        "concepts": [
            "sliding window count",
            "subarray product"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Count matching subarrays ending at each position using r - l + 1"
        ],
        "constraints": [
            "Positive integers"
        ],
        "examples": [
            {
                "input": "100\n10 5 2 6",
                "output": "8"
            },
            {
                "input": "0\n1 2 3",
                "output": "0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "100\n10 5 2 6",
                "expectedOutput": "8",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0\n1 2 3",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Count subarrays with product < k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "If k <= 1 return 0. prod = 1, l = 0, count = 0. For r, x in enumerate(nums): prod *= x. While prod >= k: prod //= nums[l]; l += 1. count += r - l + 1."
        ],
        "howToThink": [
            "Every extension of window adding nums[r] introduces (r - l + 1) new valid subarrays ending at r."
        ],
        "approach": "Sliding window counting with r - l + 1.",
        "pseudocode": "if k <= 1: print(0); return\nprod = 1; l = ans = 0\nfor r in range(len(nums)):\n    prod *= nums[r]\n    while prod >= k:\n        prod //= nums[l]; l += 1\n    ans += r - l + 1\nprint(ans)",
        "explanation": "O(N) time with integer division.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        if k <= 1:\n            print(0)\n            return\n        prod = 1\n        l = ans = 0\n        for r in range(len(nums)):\n            prod *= nums[r]\n            while prod >= k:\n                prod //= nums[l]\n                l += 1\n            ans += r - l + 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "K <= 1 edge case: all positive products are >= 1, so count must be 0"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "counting"
        ]
    },
    {
        "id": "py-prob-19-08",
        "levelId": "py-level-19",
        "title": "Max Consecutive Ones III (Flip at Most K Zeros)",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "LeetCode #1004 Max Consecutive Ones III.\nGiven integer `K` on line 1, and binary array `nums` of `0`s and `1`s on line 2:\nReturn the maximum number of consecutive `1`s in the array if you can flip at most `K` `0`s to `1`s.",
        "whyThisMatters": "Equivalent to finding the longest subarray containing at most K zeros.",
        "concepts": [
            "longest with at most k zeros",
            "sliding window"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Track zero budget in sliding window"
        ],
        "constraints": [
            "Binary array"
        ],
        "examples": [
            {
                "input": "2\n1 1 1 0 0 0 1 1 1 1 0",
                "output": "6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 1 1 0 0 0 1 1 1 1 0",
                "expectedOutput": "6",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Max consecutive ones with k flips\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "l = 0, zeros = 0, mx = 0. For r in range(len(nums)): if nums[r] == 0: zeros += 1. While zeros > k: if nums[l] == 0: zeros -= 1. l += 1. mx = max(mx, r - l + 1)."
        ],
        "howToThink": [
            "Window is valid as long as number of zeros inside <= K."
        ],
        "approach": "Sliding window tracking zeros.",
        "pseudocode": "zeros = l = mx = 0\nfor r in range(len(nums)):\n    if nums[r] == 0: zeros += 1\n    while zeros > k:\n        if nums[l] == 0: zeros -= 1\n        l += 1\n    mx = max(mx, r - l + 1)\nprint(mx)",
        "explanation": "O(N) window tracking zero budget.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        zeros = l = mx = 0\n        for r in range(len(nums)):\n            if nums[r] == 0:\n                zeros += 1\n            while zeros > k:\n                if nums[l] == 0:\n                    zeros -= 1\n                l += 1\n            mx = max(mx, r - l + 1)\n        print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Incrementing zeros on nums[l] == 0 instead of decrementing during left shrink"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "binary array"
        ]
    },
    {
        "id": "py-prob-19-09",
        "levelId": "py-level-19",
        "title": "Longest Repeating Character Replacement",
        "type": "coding",
        "difficulty": "medium",
        "order": 9,
        "description": "LeetCode #424.\nYou are given a string `s` and an integer `k` on separate lines.\nYou can choose any character of the string and change it to any other uppercase English character at most `k` times.\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.",
        "whyThisMatters": "Window condition: `(window_length - max_char_frequency) <= k`.",
        "concepts": [
            "character replacement",
            "max frequency window",
            "sliding window"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Track max frequency character within dynamic window"
        ],
        "constraints": [
            "Uppercase English letters"
        ],
        "examples": [
            {
                "input": "ABAB\n2",
                "output": "4"
            },
            {
                "input": "AABABBA\n1",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "ABAB\n2",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "AABABBA\n1",
                "expectedOutput": "4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s = lines[0].strip()\n        k = int(lines[1].strip())\n        # Longest repeating character replacement\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Window is valid if (r - l + 1) - max(counts.values()) <= k."
        ],
        "howToThink": [
            "Count how many non-majority characters exist in window. If <= k, they can all be replaced."
        ],
        "approach": "Sliding window with max frequency tracking.",
        "pseudocode": "counts = defaultdict(int)\nl = mx = max_f = 0\nfor r, c in enumerate(s):\n    counts[c] += 1\n    max_f = max(max_f, counts[c])\n    while (r - l + 1) - max_f > k:\n        counts[s[l]] -= 1\n        l += 1\n    mx = max(mx, r - l + 1)\nprint(mx)",
        "explanation": "O(N) sliding window.",
        "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s = lines[0].strip()\n        k = int(lines[1].strip())\n        counts = defaultdict(int)\n        l = mx = max_f = 0\n        for r, c in enumerate(s):\n            counts[c] += 1\n            max_f = max(max_f, counts[c])\n            while (r - l + 1) - max_f > k:\n                counts[s[l]] -= 1\n                l += 1\n            mx = max(mx, r - l + 1)\n        print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Recalculating max_f across all 26 letters on every step"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "strings"
        ]
    },
    {
        "id": "py-prob-19-10",
        "levelId": "py-level-19",
        "title": "Minimum Window Substring",
        "type": "coding",
        "difficulty": "hard",
        "order": 10,
        "description": "LeetCode #76 Minimum Window Substring.\nGiven two strings `s` and `t` on separate lines:\nReturn the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window.\nIf there is no such substring, return an empty string `\"\"`.\nPrint the minimum window substring.",
        "whyThisMatters": "Universal gold standard for advanced sliding window questions.",
        "concepts": [
            "minimum window substring",
            "sliding window hard",
            "counter validation"
        ],
        "prerequisites": [
            "sliding window"
        ],
        "learningObjectives": [
            "Implement O(N) minimum window substring with need/have counters"
        ],
        "constraints": [
            "ASCII strings"
        ],
        "examples": [
            {
                "input": "ADOBECODEBANC\nABC",
                "output": "BANC"
            },
            {
                "input": "a\na",
                "output": "a"
            },
            {
                "input": "a\naa",
                "output": ""
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "ADOBECODEBANC\nABC",
                "expectedOutput": "BANC",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "a\na",
                "expectedOutput": "a",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "a\naa",
                "expectedOutput": "",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        # Minimum window substring\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Track need = Counter(t), have = {}. Count matched characters. When matched == len(need): contract left to find minimum length."
        ],
        "howToThink": [
            "Grow window until all required characters satisfied. Then shrink from left while valid to find minimal span."
        ],
        "approach": "Sliding window with have/need counters.",
        "pseudocode": "need = Counter(t)\nhave = {}\nmatched = 0\nl = 0\nbest = (float('inf'), 0, 0)\nfor r, c in enumerate(s):\n    have[c] = have.get(c, 0) + 1\n    if c in need and have[c] == need[c]: matched += 1\n    while matched == len(need):\n        if r - l + 1 < best[0]: best = (r - l + 1, l, r)\n        have[s[l]] -= 1\n        if s[l] in need and have[s[l]] < need[s[l]]: matched -= 1\n        l += 1\nprint(s[best[1]:best[2]+1] if best[0] != float('inf') else '')",
        "explanation": "O(N + M) two-pointer contraction.",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        if not s or not t:\n            print('')\n            return\n        need = Counter(t)\n        have = {}\n        matched = 0\n        l = 0\n        best = (float('inf'), 0, 0)\n        for r, c in enumerate(s):\n            have[c] = have.get(c, 0) + 1\n            if c in need and have[c] == need[c]:\n                matched += 1\n            while matched == len(need):\n                if r - l + 1 < best[0]:\n                    best = (r - l + 1, l, r)\n                have[s[l]] -= 1\n                if s[l] in need and have[s[l]] < need[s[l]]:\n                    matched -= 1\n                l += 1\n        print(s[best[1]:best[2] + 1] if best[0] != float('inf') else '')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Comparing entire Counter objects on every iteration (O(26 * N)) instead of tracking matched count in O(1)"
        ],
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(N + M)",
        "interviewRelevance": "high",
        "tags": [
            "sliding window",
            "must-know",
            "hard"
        ]
    }
];
