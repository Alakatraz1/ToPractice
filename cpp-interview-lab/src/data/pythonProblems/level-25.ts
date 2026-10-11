import { Problem } from '../types';

export const pyLevel25Problems: Problem[] = [
  {
    "id": "py-prob-25-01",
    "levelId": "level-25",
    "title": "LRU Cache Simulation",
    "type": "coding",
    "difficulty": "hard",
    "order": 1,
    "description": "Design and simulate an LRU (Least Recently Used) cache with capacity C. Process N operations:\n- PUT key value\n- GET key (outputs the value or -1 if not found on a new line)\n\nInput format: line 1 has C and N. Next N lines are operations.",
    "whyThisMatters": "LRU Cache Simulation is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the LRU Cache Simulation algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "2 6\nPUT 1 1\nPUT 2 2\nGET 1\nPUT 3 3\nGET 2\nGET 3",
        "output": "1\n-1\n3",
        "explanation": "After PUT 3, key 2 is evicted as key 1 was accessed by GET"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-01-tc-1",
        "input": "2 6\nPUT 1 1\nPUT 2 2\nGET 1\nPUT 3 3\nGET 2\nGET 3",
        "expectedOutput": "1\n-1\n3",
        "hidden": false
      },
      {
        "id": "py-prob-25-01-tc-2",
        "input": "1 3\nPUT 1 10\nPUT 2 20\nGET 1",
        "expectedOutput": "-1",
        "hidden": false
      }
    ],
    "starterCode": "import sys\nfrom collections import OrderedDict\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import OrderedDict\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use collections.OrderedDict with move_to_end and popitem(last=False)."
    ],
    "howToThink": [
      "Analyze the input format and constraints for LRU Cache Simulation.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use collections.OrderedDict with move_to_end and popitem(last=False).",
    "pseudocode": "# Solution logic for LRU Cache Simulation\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use collections.OrderedDict with move_to_end and popitem(last=False).",
    "solution": "import sys\nfrom collections import OrderedDict\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    c, n = map(int, lines[0].split())\n    cache = OrderedDict()\n    for i in range(1, n + 1):\n        parts = lines[i].split()\n        op = parts[0]\n        if op == \"GET\":\n            k = int(parts[1])\n            if k in cache:\n                val = cache[k]\n                cache.move_to_end(k)\n                print(val)\n            else:\n                print(-1)\n        elif op == \"PUT\":\n            k, v = int(parts[1]), int(parts[2])\n            if k in cache:\n                cache.move_to_end(k)\n            cache[k] = v\n            if len(cache) > c:\n                cache.popitem(last=False)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import OrderedDict\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    c, n = map(int, lines[0].split())\n    cache = OrderedDict()\n    for i in range(1, n + 1):\n        parts = lines[i].split()\n        op = parts[0]\n        if op == \"GET\":\n            k = int(parts[1])\n            if k in cache:\n                val = cache[k]\n                cache.move_to_end(k)\n                print(val)\n            else:\n                print(-1)\n        elif op == \"PUT\":\n            k, v = int(parts[1]), int(parts[2])\n            if k in cache:\n                cache.move_to_end(k)\n            cache[k] = v\n            if len(cache) > c:\n                cache.popitem(last=False)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "hard"
    ]
  },
  {
    "id": "py-prob-25-02",
    "levelId": "level-25",
    "title": "Trapping Rain Water",
    "type": "coding",
    "difficulty": "hard",
    "order": 2,
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nInput format: line 1 has N, line 2 has N integers.",
    "whyThisMatters": "Trapping Rain Water is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Trapping Rain Water algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
        "output": "6",
        "explanation": "Trapped water between elevations is 6 units"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-02-tc-1",
        "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
        "expectedOutput": "6",
        "hidden": false
      },
      {
        "id": "py-prob-25-02-tc-2",
        "input": "6\n4 2 0 3 2 5",
        "expectedOutput": "9",
        "hidden": false
      },
      {
        "id": "py-prob-25-02-tc-3",
        "input": "3\n3 2 1",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use two pointers from both ends maintaining left_max and right_max."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Trapping Rain Water.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use two pointers from both ends maintaining left_max and right_max.",
    "pseudocode": "# Solution logic for Trapping Rain Water\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use two pointers from both ends maintaining left_max and right_max.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    h = [int(x) for x in lines[1:n+1]]\n    if n <= 2:\n        print(0)\n        return\n    l, r = 0, n - 1\n    left_max, right_max = h[l], h[r]\n    water = 0\n    while l < r:\n        if left_max <= right_max:\n            l += 1\n            left_max = max(left_max, h[l])\n            water += left_max - h[l]\n        else:\n            r -= 1\n            right_max = max(right_max, h[r])\n            water += right_max - h[r]\n    print(water)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    h = [int(x) for x in lines[1:n+1]]\n    if n <= 2:\n        print(0)\n        return\n    l, r = 0, n - 1\n    left_max, right_max = h[l], h[r]\n    water = 0\n    while l < r:\n        if left_max <= right_max:\n            l += 1\n            left_max = max(left_max, h[l])\n            water += left_max - h[l]\n        else:\n            r -= 1\n            right_max = max(right_max, h[r])\n            water += right_max - h[r]\n    print(water)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "hard"
    ]
  },
  {
    "id": "py-prob-25-03",
    "levelId": "level-25",
    "title": "Subarray Sum Equals K",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.\n\nInput format: line 1 has N and k. Line 2 has N integers.",
    "whyThisMatters": "Subarray Sum Equals K is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Subarray Sum Equals K algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 2\n1 1 1",
        "output": "2",
        "explanation": "Subarrays [1, 1] at index 0-1 and index 1-2 sum to 2"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-03-tc-1",
        "input": "3 2\n1 1 1",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "id": "py-prob-25-03-tc-2",
        "input": "3 3\n1 2 3",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "id": "py-prob-25-03-tc-3",
        "input": "3 0\n1 -1 0",
        "expectedOutput": "3",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use prefix sums hash map to store frequencies of prefix sums in O(N)."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Subarray Sum Equals K.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use prefix sums hash map to store frequencies of prefix sums in O(N).",
    "pseudocode": "# Solution logic for Subarray Sum Equals K\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use prefix sums hash map to store frequencies of prefix sums in O(N).",
    "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    prefix_count = defaultdict(int)\n    prefix_count[0] = 1\n    curr_sum = 0\n    ans = 0\n    for x in nums:\n        curr_sum += x\n        ans += prefix_count[curr_sum - k]\n        prefix_count[curr_sum] += 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    prefix_count = defaultdict(int)\n    prefix_count[0] = 1\n    curr_sum = 0\n    ans = 0\n    for x in nums:\n        curr_sum += x\n        ans += prefix_count[curr_sum - k]\n        prefix_count[curr_sum] += 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "medium"
    ]
  },
  {
    "id": "py-prob-25-04",
    "levelId": "level-25",
    "title": "Top K Frequent Words",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "Given an array of strings words and an integer k, return the k most frequent words. Sort words with the same frequency by their lexicographical order in ascending order. Print the words separated by space.\n\nInput format: line 1 has N and k. Next N lines are strings.",
    "whyThisMatters": "Top K Frequent Words is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Top K Frequent Words algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "6 2\ni\nlove\nleetcode\ni\nlove\ncoding",
        "output": "i love",
        "explanation": "\"i\" and \"love\" appear 2 times each, \"i\" comes first alphabetically"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-04-tc-1",
        "input": "6 2\ni\nlove\nleetcode\ni\nlove\ncoding",
        "expectedOutput": "i love",
        "hidden": false
      },
      {
        "id": "py-prob-25-04-tc-2",
        "input": "6 1\na\nb\nc\na\nb\na",
        "expectedOutput": "a",
        "hidden": false
      }
    ],
    "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort keys by (-count, word) and slice first k."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Top K Frequent Words.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort keys by (-count, word) and slice first k.",
    "pseudocode": "# Solution logic for Top K Frequent Words\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort keys by (-count, word) and slice first k.",
    "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    words = lines[2:2+n]\n    counts = Counter(words)\n    sorted_words = sorted(counts.keys(), key=lambda w: (-counts[w], w))\n    print(*(sorted_words[:k]))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    words = lines[2:2+n]\n    counts = Counter(words)\n    sorted_words = sorted(counts.keys(), key=lambda w: (-counts[w], w))\n    print(*(sorted_words[:k]))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "medium"
    ]
  },
  {
    "id": "py-prob-25-05",
    "levelId": "level-25",
    "title": "Merge Intervals",
    "type": "coding",
    "difficulty": "medium",
    "order": 5,
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return the non-overlapping intervals in ascending order of start time.\n\nInput format: line 1 has N. Next N lines have start and end.",
    "whyThisMatters": "Merge Intervals is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Merge Intervals algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4\n1 3\n2 6\n8 10\n15 18",
        "output": "1 6\n8 10\n15 18",
        "explanation": "Intervals [1,3] and [2,6] overlap into [1,6]"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-05-tc-1",
        "input": "4\n1 3\n2 6\n8 10\n15 18",
        "expectedOutput": "1 6\n8 10\n15 18",
        "hidden": false
      },
      {
        "id": "py-prob-25-05-tc-2",
        "input": "2\n1 4\n4 5",
        "expectedOutput": "1 5",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort intervals by start time and merge if current start <= previous end."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Merge Intervals.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort intervals by start time and merge if current start <= previous end.",
    "pseudocode": "# Solution logic for Merge Intervals\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort intervals by start time and merge if current start <= previous end.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append([int(lines[idx]), int(lines[idx+1])])\n        idx += 2\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for curr in intervals[1:]:\n        if curr[0] <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], curr[1])\n        else:\n            merged.append(curr)\n    for interval in merged:\n        print(f\"{interval[0]} {interval[1]}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append([int(lines[idx]), int(lines[idx+1])])\n        idx += 2\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for curr in intervals[1:]:\n        if curr[0] <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], curr[1])\n        else:\n            merged.append(curr)\n    for interval in merged:\n        print(f\"{interval[0]} {interval[1]}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "medium"
    ]
  },
  {
    "id": "py-prob-25-06",
    "levelId": "level-25",
    "title": "First and Last Position of Element",
    "type": "coding",
    "difficulty": "medium",
    "order": 6,
    "description": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value in O(log n) runtime. If target is not found, print \"-1 -1\".\n\nInput format: line 1 has N and target. Line 2 has N sorted integers.",
    "whyThisMatters": "First and Last Position of Element is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the First and Last Position of Element algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "6 8\n5 7 7 8 8 10",
        "output": "3 4",
        "explanation": "8 appears at index 3 and 4"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-06-tc-1",
        "input": "6 8\n5 7 7 8 8 10",
        "expectedOutput": "3 4",
        "hidden": false
      },
      {
        "id": "py-prob-25-06-tc-2",
        "input": "6 6\n5 7 7 8 8 10",
        "expectedOutput": "-1 -1",
        "hidden": false
      },
      {
        "id": "py-prob-25-06-tc-3",
        "input": "1 1\n1",
        "expectedOutput": "0 0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use bisect_left for start position and bisect_right - 1 for end position."
    ],
    "howToThink": [
      "Analyze the input format and constraints for First and Last Position of Element.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use bisect_left for start position and bisect_right - 1 for end position.",
    "pseudocode": "# Solution logic for First and Last Position of Element\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use bisect_left for start position and bisect_right - 1 for end position.",
    "solution": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, target = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    if not nums:\n        print(\"-1 -1\")\n        return\n    left = bisect.bisect_left(nums, target)\n    if left == n or nums[left] != target:\n        print(\"-1 -1\")\n        return\n    right = bisect.bisect_right(nums, target) - 1\n    print(f\"{left} {right}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, target = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    if not nums:\n        print(\"-1 -1\")\n        return\n    left = bisect.bisect_left(nums, target)\n    if left == n or nums[left] != target:\n        print(\"-1 -1\")\n        return\n    right = bisect.bisect_right(nums, target) - 1\n    print(f\"{left} {right}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "medium"
    ]
  },
  {
    "id": "py-prob-25-07",
    "levelId": "level-25",
    "title": "String Compression (Run-Length)",
    "type": "coding",
    "difficulty": "easy",
    "order": 7,
    "description": "Given a string s, compress it such that each consecutive repeated character is replaced by the character followed by its count. If the count is 1, do not append the count.\n\nInput format: single string s.",
    "whyThisMatters": "String Compression (Run-Length) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the String Compression (Run-Length) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "aabcccccaaa",
        "output": "a2bc5a3",
        "explanation": "aa -> a2, b -> b, ccccc -> c5, aaa -> a3"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-07-tc-1",
        "input": "aabcccccaaa",
        "expectedOutput": "a2bc5a3",
        "hidden": false
      },
      {
        "id": "py-prob-25-07-tc-2",
        "input": "abc",
        "expectedOutput": "abc",
        "hidden": false
      },
      {
        "id": "py-prob-25-07-tc-3",
        "input": "aaaa",
        "expectedOutput": "a4",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Count consecutive characters with a two-pointer while loop."
    ],
    "howToThink": [
      "Analyze the input format and constraints for String Compression (Run-Length).",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Count consecutive characters with a two-pointer while loop.",
    "pseudocode": "# Solution logic for String Compression (Run-Length)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Count consecutive characters with a two-pointer while loop.",
    "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    res = []\n    n = len(s)\n    i = 0\n    while i < n:\n        j = i\n        while j < n and s[j] == s[i]:\n            j += 1\n        count = j - i\n        res.append(s[i])\n        if count > 1:\n            res.append(str(count))\n        i = j\n    print(\"\".join(res))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    res = []\n    n = len(s)\n    i = 0\n    while i < n:\n        j = i\n        while j < n and s[j] == s[i]:\n            j += 1\n        count = j - i\n        res.append(s[i])\n        if count > 1:\n            res.append(str(count))\n        i = j\n    print(\"\".join(res))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "easy"
    ]
  },
  {
    "id": "py-prob-25-08",
    "levelId": "level-25",
    "title": "Minimum Window Substring Length",
    "type": "coding",
    "difficulty": "hard",
    "order": 8,
    "description": "Given two strings s and t, return the minimum length of a substring in s such that every character in t (including duplicates) is included in the window. If no such substring exists, return 0.\n\nInput format: two strings on separate lines.",
    "whyThisMatters": "Minimum Window Substring Length is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Minimum Window Substring Length algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "ADOBECODEBANC\nABC",
        "output": "4",
        "explanation": "Window \"BANC\" of length 4 contains A, B, and C"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-08-tc-1",
        "input": "ADOBECODEBANC\nABC",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-25-08-tc-2",
        "input": "a\na",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-25-08-tc-3",
        "input": "a\naa",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sliding window with frequency counters and missing character counter."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Minimum Window Substring Length.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sliding window with frequency counters and missing character counter.",
    "pseudocode": "# Solution logic for Minimum Window Substring Length\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sliding window with frequency counters and missing character counter.",
    "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s, t = lines[0], lines[1]\n    need = Counter(t)\n    missing = len(t)\n    l = 0\n    min_len = float('inf')\n    for r, c in enumerate(s):\n        if need[c] > 0:\n            missing -= 1\n        need[c] -= 1\n        while missing == 0:\n            min_len = min(min_len, r - l + 1)\n            need[s[l]] += 1\n            if need[s[l]] > 0:\n                missing += 1\n            l += 1\n    print(min_len if min_len != float('inf') else 0)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s, t = lines[0], lines[1]\n    need = Counter(t)\n    missing = len(t)\n    l = 0\n    min_len = float('inf')\n    for r, c in enumerate(s):\n        if need[c] > 0:\n            missing -= 1\n        need[c] -= 1\n        while missing == 0:\n            min_len = min(min_len, r - l + 1)\n            need[s[l]] += 1\n            if need[s[l]] > 0:\n                missing += 1\n            l += 1\n    print(min_len if min_len != float('inf') else 0)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "hard"
    ]
  },
  {
    "id": "py-prob-25-09",
    "levelId": "level-25",
    "title": "Longest Consecutive Sequence",
    "type": "coding",
    "difficulty": "medium",
    "order": 9,
    "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) runtime.\n\nInput format: line 1 has N, line 2 has N integers.",
    "whyThisMatters": "Longest Consecutive Sequence is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Longest Consecutive Sequence algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "6\n100 4 200 1 3 2",
        "output": "4",
        "explanation": "The longest consecutive sequence is [1, 2, 3, 4] with length 4."
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-09-tc-1",
        "input": "6\n100 4 200 1 3 2",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-25-09-tc-2",
        "input": "10\n0 3 7 2 5 8 4 6 0 1",
        "expectedOutput": "9",
        "hidden": false
      },
      {
        "id": "py-prob-25-09-tc-3",
        "input": "1\n10",
        "expectedOutput": "1",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Store all numbers in a Python set. Only start counting sequence if x - 1 is not in set."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Longest Consecutive Sequence.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Store all numbers in a Python set. Only start counting sequence if x - 1 is not in set.",
    "pseudocode": "# Solution logic for Longest Consecutive Sequence\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Store all numbers in a Python set. Only start counting sequence if x - 1 is not in set.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = set(int(x) for x in lines[1:n+1])\n    max_streak = 0\n    for x in nums:\n        if x - 1 not in nums:\n            curr = x\n            streak = 1\n            while curr + 1 in nums:\n                curr += 1\n                streak += 1\n            max_streak = max(max_streak, streak)\n    print(max_streak)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = set(int(x) for x in lines[1:n+1])\n    max_streak = 0\n    for x in nums:\n        if x - 1 not in nums:\n            curr = x\n            streak = 1\n            while curr + 1 in nums:\n                curr += 1\n                streak += 1\n            max_streak = max(max_streak, streak)\n    print(max_streak)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "medium"
    ]
  },
  {
    "id": "py-prob-25-10",
    "levelId": "level-25",
    "title": "Kth Largest Element in an Array",
    "type": "coding",
    "difficulty": "medium",
    "order": 10,
    "description": "Given an integer array nums and an integer k, return the kth largest element in the array.\n\nInput format: line 1 has N and k. Line 2 has N integers.",
    "whyThisMatters": "Kth Largest Element in an Array is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-25",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Kth Largest Element in an Array algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "6 2\n3 2 1 5 6 4",
        "output": "5",
        "explanation": "2nd largest element is 5"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-25-10-tc-1",
        "input": "6 2\n3 2 1 5 6 4",
        "expectedOutput": "5",
        "hidden": false
      },
      {
        "id": "py-prob-25-10-tc-2",
        "input": "9 4\n3 2 3 1 2 4 5 5 6",
        "expectedOutput": "4",
        "hidden": false
      }
    ],
    "starterCode": "import sys\nimport heapq\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nimport heapq\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use heapq.nlargest(k, nums)[-1] or a min-heap of size k."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Kth Largest Element in an Array.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use heapq.nlargest(k, nums)[-1] or a min-heap of size k.",
    "pseudocode": "# Solution logic for Kth Largest Element in an Array\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use heapq.nlargest(k, nums)[-1] or a min-heap of size k.",
    "solution": "import sys\nimport heapq\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    print(heapq.nlargest(k, nums)[-1])\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nimport heapq\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    print(heapq.nlargest(k, nums)[-1])\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-25",
      "medium"
    ]
  }
];
