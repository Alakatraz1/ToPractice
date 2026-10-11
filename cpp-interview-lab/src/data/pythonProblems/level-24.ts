import { Problem } from '../types';

export const pyLevel24Problems: Problem[] = [
  {
    "id": "py-prob-24-01",
    "levelId": "level-24",
    "title": "Climbing Stairs",
    "type": "coding",
    "difficulty": "easy",
    "order": 1,
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. In how many distinct ways can you climb to the top?\n\nInput format: single integer n.",
    "whyThisMatters": "Climbing Stairs is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Climbing Stairs algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3",
        "output": "3",
        "explanation": "Ways: 1+1+1, 1+2, 2+1"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-01-tc-1",
        "input": "2",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "id": "py-prob-24-01-tc-2",
        "input": "3",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-24-01-tc-3",
        "input": "5",
        "expectedOutput": "8",
        "hidden": true
      },
      {
        "id": "py-prob-24-01-tc-4",
        "input": "10",
        "expectedOutput": "89",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "dp[i] = dp[i-1] + dp[i-2], just like Fibonacci sequence."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Climbing Stairs.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "dp[i] = dp[i-1] + dp[i-2], just like Fibonacci sequence.",
    "pseudocode": "# Solution logic for Climbing Stairs\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "dp[i] = dp[i-1] + dp[i-2], just like Fibonacci sequence.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    if n <= 2:\n        print(n)\n        return\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    print(b)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    if n <= 2:\n        print(n)\n        return\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    print(b)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "easy"
    ]
  },
  {
    "id": "py-prob-24-02",
    "levelId": "level-24",
    "title": "House Robber",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected that automatically contact the police if two adjacent houses are broken into on the same night. Return the maximum amount of money you can rob without alerting the police.\n\nInput format: N followed by N integers.",
    "whyThisMatters": "House Robber is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the House Robber algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4\n1 2 3 1",
        "output": "4",
        "explanation": "Rob house 1 (money = 1) and house 3 (money = 3) -> 4"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-02-tc-1",
        "input": "4\n1 2 3 1",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-24-02-tc-2",
        "input": "5\n2 7 9 3 1",
        "expectedOutput": "12",
        "hidden": false
      },
      {
        "id": "py-prob-24-02-tc-3",
        "input": "1\n100",
        "expectedOutput": "100",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i]) with O(1) space."
    ],
    "howToThink": [
      "Analyze the input format and constraints for House Robber.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "dp[i] = max(dp[i-1], dp[i-2] + nums[i]) with O(1) space.",
    "pseudocode": "# Solution logic for House Robber\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "dp[i] = max(dp[i-1], dp[i-2] + nums[i]) with O(1) space.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    prev1, prev2 = 0, 0\n    for num in nums:\n        prev1, prev2 = max(prev2 + num, prev1), prev1\n    print(prev1)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    prev1, prev2 = 0, 0\n    for num in nums:\n        prev1, prev2 = max(prev2 + num, prev1), prev1\n    print(prev1)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-03",
    "levelId": "level-24",
    "title": "0/1 Knapsack Problem",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given N items each with a weight and a value, determine the maximum value of items that can be put in a knapsack of capacity W.\n\nInput format: N W, followed by N values, then N weights.",
    "whyThisMatters": "0/1 Knapsack Problem is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the 0/1 Knapsack Problem algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 4\n1 2 3\n4 5 1",
        "output": "3",
        "explanation": "Take item with wt 1 and val 3"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-03-tc-1",
        "input": "3 4\n1 2 3\n4 5 1",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-24-03-tc-2",
        "input": "3 50\n60 100 120\n10 20 30",
        "expectedOutput": "220",
        "hidden": false
      },
      {
        "id": "py-prob-24-03-tc-3",
        "input": "1 10\n5\n15",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Iterate capacity backwards from W down to wt to avoid using the same item multiple times."
    ],
    "howToThink": [
      "Analyze the input format and constraints for 0/1 Knapsack Problem.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Iterate capacity backwards from W down to wt to avoid using the same item multiple times.",
    "pseudocode": "# Solution logic for 0/1 Knapsack Problem\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Iterate capacity backwards from W down to wt to avoid using the same item multiple times.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, w = int(lines[0]), int(lines[1])\n    vals = [int(x) for x in lines[2:2+n]]\n    wts = [int(x) for x in lines[2+n:2+2*n]]\n    dp = [0] * (w + 1)\n    for val, wt in zip(vals, wts):\n        for cap in range(w, wt - 1, -1):\n            dp[cap] = max(dp[cap], dp[cap - wt] + val)\n    print(dp[w])\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, w = int(lines[0]), int(lines[1])\n    vals = [int(x) for x in lines[2:2+n]]\n    wts = [int(x) for x in lines[2+n:2+2*n]]\n    dp = [0] * (w + 1)\n    for val, wt in zip(vals, wts):\n        for cap in range(w, wt - 1, -1):\n            dp[cap] = max(dp[cap], dp[cap - wt] + val)\n    print(dp[w])\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-04",
    "levelId": "level-24",
    "title": "Coin Change (Minimum Coins)",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nInput format: N amount, followed by N coin values.",
    "whyThisMatters": "Coin Change (Minimum Coins) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Coin Change (Minimum Coins) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 11\n1 2 5",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-04-tc-1",
        "input": "3 11\n1 2 5",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-24-04-tc-2",
        "input": "1 3\n2",
        "expectedOutput": "-1",
        "hidden": false
      },
      {
        "id": "py-prob-24-04-tc-3",
        "input": "1 0\n1",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "dp[a] = min(dp[a], dp[a - coin] + 1)."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Coin Change (Minimum Coins).",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "dp[a] = min(dp[a], dp[a - coin] + 1).",
    "pseudocode": "# Solution logic for Coin Change (Minimum Coins)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "dp[a] = min(dp[a], dp[a - coin] + 1).",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, amount = int(lines[0]), int(lines[1])\n    coins = [int(x) for x in lines[2:2+n]]\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for c in coins:\n        for a in range(c, amount + 1):\n            if dp[a - c] + 1 < dp[a]:\n                dp[a] = dp[a - c] + 1\n    print(dp[amount] if dp[amount] != float('inf') else -1)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, amount = int(lines[0]), int(lines[1])\n    coins = [int(x) for x in lines[2:2+n]]\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for c in coins:\n        for a in range(c, amount + 1):\n            if dp[a - c] + 1 < dp[a]:\n                dp[a] = dp[a - c] + 1\n    print(dp[amount] if dp[amount] != float('inf') else -1)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-05",
    "levelId": "level-24",
    "title": "Longest Common Subsequence (LCS)",
    "type": "coding",
    "difficulty": "medium",
    "order": 5,
    "description": "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.\n\nInput format: two strings on separate lines.",
    "whyThisMatters": "Longest Common Subsequence (LCS) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Longest Common Subsequence (LCS) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "abcde\nace",
        "output": "3",
        "explanation": "LCS is \"ace\""
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-05-tc-1",
        "input": "abcde\nace",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-24-05-tc-2",
        "input": "abc\nabc",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-24-05-tc-3",
        "input": "abc\ndef",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "2D DP table: if s1[i-1] == s2[j-1], dp[i][j] = dp[i-1][j-1]+1, else max(dp[i-1][j], dp[i][j-1])."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Longest Common Subsequence (LCS).",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "2D DP table: if s1[i-1] == s2[j-1], dp[i][j] = dp[i-1][j-1]+1, else max(dp[i-1][j], dp[i][j-1]).",
    "pseudocode": "# Solution logic for Longest Common Subsequence (LCS)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "2D DP table: if s1[i-1] == s2[j-1], dp[i][j] = dp[i-1][j-1]+1, else max(dp[i-1][j], dp[i][j-1]).",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s1, s2 = lines[0], lines[1]\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    print(dp[m][n])\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s1, s2 = lines[0], lines[1]\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    print(dp[m][n])\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-06",
    "levelId": "level-24",
    "title": "Longest Increasing Subsequence (LIS)",
    "type": "coding",
    "difficulty": "medium",
    "order": 6,
    "description": "Given an integer array nums, return the length of the longest strictly increasing subsequence.\n\nInput format: N followed by N integers.",
    "whyThisMatters": "Longest Increasing Subsequence (LIS) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Longest Increasing Subsequence (LIS) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "8\n10 9 2 5 3 7 101 18",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2, 3, 7, 101], length 4."
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-06-tc-1",
        "input": "8\n10 9 2 5 3 7 101 18",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-24-06-tc-2",
        "input": "6\n0 1 0 3 2 3",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-24-06-tc-3",
        "input": "7\n7 7 7 7 7 7 7",
        "expectedOutput": "1",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "O(N log N) using patience sorting with bisect.bisect_left."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Longest Increasing Subsequence (LIS).",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "O(N log N) using patience sorting with bisect.bisect_left.",
    "pseudocode": "# Solution logic for Longest Increasing Subsequence (LIS)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "O(N log N) using patience sorting with bisect.bisect_left.",
    "solution": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails):\n            tails.append(x)\n        else:\n            tails[idx] = x\n    print(len(tails))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails):\n            tails.append(x)\n        else:\n            tails[idx] = x\n    print(len(tails))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-07",
    "levelId": "level-24",
    "title": "Edit Distance",
    "type": "coding",
    "difficulty": "medium",
    "order": 7,
    "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, replace).\n\nInput format: two strings on separate lines.",
    "whyThisMatters": "Edit Distance is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Edit Distance algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "horse\nros",
        "output": "3",
        "explanation": "horse -> rorse -> rose -> ros (3 operations)"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-07-tc-1",
        "input": "horse\nros",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-24-07-tc-2",
        "input": "intention\nexecution",
        "expectedOutput": "5",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "dp[i][j] = 1 + min(insert, delete, replace) when characters differ."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Edit Distance.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "dp[i][j] = 1 + min(insert, delete, replace) when characters differ.",
    "pseudocode": "# Solution logic for Edit Distance\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "dp[i][j] = 1 + min(insert, delete, replace) when characters differ.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    w1, w2 = lines[0], lines[1]\n    m, n = len(w1), len(w2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1):\n        dp[i][0] = i\n    for j in range(n + 1):\n        dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if w1[i-1] == w2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    print(dp[m][n])\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    w1, w2 = lines[0], lines[1]\n    m, n = len(w1), len(w2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1):\n        dp[i][0] = i\n    for j in range(n + 1):\n        dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if w1[i-1] == w2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    print(dp[m][n])\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-08",
    "levelId": "level-24",
    "title": "Partition Equal Subset Sum",
    "type": "coding",
    "difficulty": "medium",
    "order": 8,
    "description": "Given an integer array nums, return \"true\" if you can partition the array into two subsets such that the sum of the elements in both subsets is equal, or \"false\" otherwise.\n\nInput format: N followed by N integers.",
    "whyThisMatters": "Partition Equal Subset Sum is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Partition Equal Subset Sum algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4\n1 5 11 5",
        "output": "true",
        "explanation": "Subsets [1, 5, 5] and [11] both sum to 11"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-08-tc-1",
        "input": "4\n1 5 11 5",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-24-08-tc-2",
        "input": "4\n1 2 3 5",
        "expectedOutput": "false",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Subset sum problem targeting total // 2. If total is odd, immediately false."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Partition Equal Subset Sum.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Subset sum problem targeting total // 2. If total is odd, immediately false.",
    "pseudocode": "# Solution logic for Partition Equal Subset Sum\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Subset sum problem targeting total // 2. If total is odd, immediately false.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    total = sum(nums)\n    if total % 2 != 0:\n        print(\"false\")\n        return\n    target = total // 2\n    dp = {0}\n    for x in nums:\n        next_dp = set(dp)\n        for s in dp:\n            if s + x == target:\n                print(\"true\")\n                return\n            if s + x < target:\n                next_dp.add(s + x)\n        dp = next_dp\n    print(\"true\" if target in dp else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    total = sum(nums)\n    if total % 2 != 0:\n        print(\"false\")\n        return\n    target = total // 2\n    dp = {0}\n    for x in nums:\n        next_dp = set(dp)\n        for s in dp:\n            if s + x == target:\n                print(\"true\")\n                return\n            if s + x < target:\n                next_dp.add(s + x)\n        dp = next_dp\n    print(\"true\" if target in dp else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-09",
    "levelId": "level-24",
    "title": "Word Break Problem",
    "type": "coding",
    "difficulty": "medium",
    "order": 9,
    "description": "Given a string s and a dictionary of words, return \"true\" if s can be segmented into a space-separated sequence of one or more dictionary words, else \"false\".\n\nInput format: line 1 has string s. Line 2 has integer K. Next K strings are dictionary words.",
    "whyThisMatters": "Word Break Problem is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Word Break Problem algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "leetcode\n2\nleet\ncode",
        "output": "true",
        "explanation": "\"leetcode\" can be segmented as \"leet code\""
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-09-tc-1",
        "input": "leetcode\n2\nleet\ncode",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-24-09-tc-2",
        "input": "applepenapple\n2\napple\npen",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-24-09-tc-3",
        "input": "catsandog\n5\ncats\ndog\nsand\nand\ncat",
        "expectedOutput": "false",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "dp[i] = True if there exists j < i such that dp[j] is True and s[j:i] in word_dict."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Word Break Problem.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "dp[i] = True if there exists j < i such that dp[j] is True and s[j:i] in word_dict.",
    "pseudocode": "# Solution logic for Word Break Problem\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "dp[i] = True if there exists j < i such that dp[j] is True and s[j:i] in word_dict.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s = lines[0]\n    k = int(lines[1])\n    word_dict = set(lines[2:2+k])\n    n = len(s)\n    dp = [False] * (n + 1)\n    dp[0] = True\n    for i in range(1, n + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_dict:\n                dp[i] = True\n                break\n    print(\"true\" if dp[n] else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s = lines[0]\n    k = int(lines[1])\n    word_dict = set(lines[2:2+k])\n    n = len(s)\n    dp = [False] * (n + 1)\n    dp[0] = True\n    for i in range(1, n + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_dict:\n                dp[i] = True\n                break\n    print(\"true\" if dp[n] else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  },
  {
    "id": "py-prob-24-10",
    "levelId": "level-24",
    "title": "Maximal Square",
    "type": "coding",
    "difficulty": "medium",
    "order": 10,
    "description": "Given an m x n binary matrix filled with 0s and 1s, find the largest square containing only 1s and return its area.\n\nInput format: m n, followed by m lines each with n space-separated integers (0 or 1).",
    "whyThisMatters": "Maximal Square is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-24",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Maximal Square algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 5\n1 0 1 0 0\n1 0 1 1 1\n1 1 1 1 1\n1 0 0 1 0",
        "output": "4",
        "explanation": "Largest square has side 2, area is 4"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-24-10-tc-1",
        "input": "4 5\n1 0 1 0 0\n1 0 1 1 1\n1 1 1 1 1\n1 0 0 1 0",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-24-10-tc-2",
        "input": "2 2\n0 1\n1 0",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-24-10-tc-3",
        "input": "1 1\n0",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "dp[r][c] = min(top, left, topleft) + 1. Return max_side squared."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Maximal Square.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "dp[r][c] = min(top, left, topleft) + 1. Return max_side squared.",
    "pseudocode": "# Solution logic for Maximal Square\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "dp[r][c] = min(top, left, topleft) + 1. Return max_side squared.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    max_side = 0\n    for r in range(1, m + 1):\n        for c in range(1, n + 1):\n            if grid[r-1][c-1] == 1:\n                dp[r][c] = min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1\n                max_side = max(max_side, dp[r][c])\n    print(max_side * max_side)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    max_side = 0\n    for r in range(1, m + 1):\n        for c in range(1, n + 1):\n            if grid[r-1][c-1] == 1:\n                dp[r][c] = min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1\n                max_side = max(max_side, dp[r][c])\n    print(max_side * max_side)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-24",
      "medium"
    ]
  }
];
