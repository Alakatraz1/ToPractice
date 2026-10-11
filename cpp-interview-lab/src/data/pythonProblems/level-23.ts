import { Problem } from '../types';

export const pyLevel23Problems: Problem[] = [
  {
    "id": "py-prob-23-01",
    "levelId": "level-23",
    "title": "Activity Selection Problem",
    "type": "coding",
    "difficulty": "easy",
    "order": 1,
    "description": "Given N activities with their start and finish times, select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.\n\nInput format: N, then N lines of start finish.",
    "whyThisMatters": "Activity Selection Problem is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Activity Selection Problem algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "6\n1 2\n3 4\n0 6\n5 7\n8 9\n5 9",
        "output": "4",
        "explanation": "Activities (1,2), (3,4), (5,7), (8,9)"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-01-tc-1",
        "input": "6\n1 2\n3 4\n0 6\n5 7\n8 9\n5 9",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-23-01-tc-2",
        "input": "3\n10 20\n12 25\n20 30",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "id": "py-prob-23-01-tc-3",
        "input": "1\n1 5",
        "expectedOutput": "1",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort by finish time ascending and pick greedily whenever start >= last_finish."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Activity Selection Problem.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort by finish time ascending and pick greedily whenever start >= last_finish.",
    "pseudocode": "# Solution logic for Activity Selection Problem\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort by finish time ascending and pick greedily whenever start >= last_finish.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    acts = []\n    idx = 1\n    for _ in range(n):\n        acts.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    acts.sort(key=lambda x: x[1])\n    count = 0\n    last_end = -1\n    for s, e in acts:\n        if s >= last_end:\n            count += 1\n            last_end = e\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    acts = []\n    idx = 1\n    for _ in range(n):\n        acts.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    acts.sort(key=lambda x: x[1])\n    count = 0\n    last_end = -1\n    for s, e in acts:\n        if s >= last_end:\n            count += 1\n            last_end = e\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "easy"
    ]
  },
  {
    "id": "py-prob-23-02",
    "levelId": "level-23",
    "title": "Jump Game (Can Reach End)",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return \"true\" if you can reach the last index, or \"false\" otherwise.\n\nInput format: line 1 has N, line 2 has N space-separated integers.",
    "whyThisMatters": "Jump Game (Can Reach End) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Jump Game (Can Reach End) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5\n2 3 1 1 4",
        "output": "true",
        "explanation": "Jump 1 step from 0 to 1, then 3 steps to the last index"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-02-tc-1",
        "input": "5\n2 3 1 1 4",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-23-02-tc-2",
        "input": "5\n3 2 1 0 4",
        "expectedOutput": "false",
        "hidden": false
      },
      {
        "id": "py-prob-23-02-tc-3",
        "input": "1\n0",
        "expectedOutput": "true",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Keep track of the furthest reachable index. If current index > max_reach, return false."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Jump Game (Can Reach End).",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Keep track of the furthest reachable index. If current index > max_reach, return false.",
    "pseudocode": "# Solution logic for Jump Game (Can Reach End)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Keep track of the furthest reachable index. If current index > max_reach, return false.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    max_reach = 0\n    for i in range(n):\n        if i > max_reach:\n            print(\"false\")\n            return\n        max_reach = max(max_reach, i + nums[i])\n        if max_reach >= n - 1:\n            print(\"true\")\n            return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    max_reach = 0\n    for i in range(n):\n        if i > max_reach:\n            print(\"false\")\n            return\n        max_reach = max(max_reach, i + nums[i])\n        if max_reach >= n - 1:\n            print(\"true\")\n            return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  },
  {
    "id": "py-prob-23-03",
    "levelId": "level-23",
    "title": "Non-overlapping Intervals",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.\n\nInput format: N, then N lines of start end.",
    "whyThisMatters": "Non-overlapping Intervals is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Non-overlapping Intervals algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4\n1 2\n2 3\n3 4\n1 3",
        "output": "1",
        "explanation": "Remove [1,3]"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-03-tc-1",
        "input": "4\n1 2\n2 3\n3 4\n1 3",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-23-03-tc-2",
        "input": "3\n1 2\n1 2\n1 2",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "id": "py-prob-23-03-tc-3",
        "input": "3\n1 2\n2 3\n3 4",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort intervals by end time. Keep interval that finishes earliest to leave room for others."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Non-overlapping Intervals.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort intervals by end time. Keep interval that finishes earliest to leave room for others.",
    "pseudocode": "# Solution logic for Non-overlapping Intervals\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort intervals by end time. Keep interval that finishes earliest to leave room for others.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    intervals.sort(key=lambda x: x[1])\n    removals = 0\n    last_end = float('-inf')\n    for s, e in intervals:\n        if s < last_end:\n            removals += 1\n        else:\n            last_end = e\n    print(removals)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    intervals.sort(key=lambda x: x[1])\n    removals = 0\n    last_end = float('-inf')\n    for s, e in intervals:\n        if s < last_end:\n            removals += 1\n        else:\n            last_end = e\n    print(removals)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  },
  {
    "id": "py-prob-23-04",
    "levelId": "level-23",
    "title": "Gas Station Circuit",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "There are n gas stations along a circular route. You have two integer arrays gas and cost. Return the starting gas station's index (0-indexed) if you can travel around the circuit once clockwise without running out of gas, or -1 if impossible.\n\nInput format: N, followed by N integers of gas, then N integers of cost.",
    "whyThisMatters": "Gas Station Circuit is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Gas Station Circuit algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5\n1 2 3 4 5\n3 4 5 1 2",
        "output": "3",
        "explanation": "Start at station 3 (cost 1, gas 4)"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-04-tc-1",
        "input": "5\n1 2 3 4 5\n3 4 5 1 2",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-23-04-tc-2",
        "input": "3\n2 3 4\n3 4 3",
        "expectedOutput": "-1",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "If total gas >= total cost, a solution is guaranteed to exist. Reset candidate start whenever tank drops below 0."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Gas Station Circuit.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "If total gas >= total cost, a solution is guaranteed to exist. Reset candidate start whenever tank drops below 0.",
    "pseudocode": "# Solution logic for Gas Station Circuit\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "If total gas >= total cost, a solution is guaranteed to exist. Reset candidate start whenever tank drops below 0.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    gas = [int(x) for x in lines[1:n+1]]\n    cost = [int(x) for x in lines[n+1:2*n+1]]\n    if sum(gas) < sum(cost):\n        print(-1)\n        return\n    start = 0\n    current_tank = 0\n    for i in range(n):\n        current_tank += gas[i] - cost[i]\n        if current_tank < 0:\n            start = i + 1\n            current_tank = 0\n    print(start)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    gas = [int(x) for x in lines[1:n+1]]\n    cost = [int(x) for x in lines[n+1:2*n+1]]\n    if sum(gas) < sum(cost):\n        print(-1)\n        return\n    start = 0\n    current_tank = 0\n    for i in range(n):\n        current_tank += gas[i] - cost[i]\n        if current_tank < 0:\n            start = i + 1\n            current_tank = 0\n    print(start)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  },
  {
    "id": "py-prob-23-05",
    "levelId": "level-23",
    "title": "Assign Cookies",
    "type": "coding",
    "difficulty": "easy",
    "order": 5,
    "description": "Assume you are an awesome parent and want to give your children some cookies. Each child i has a greed factor g[i], and each cookie j has a size s[j]. A child will be content if s[j] >= g[i]. Maximize the number of content children.\n\nInput format: N M, then N integers of g, then M integers of s.",
    "whyThisMatters": "Assign Cookies is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Assign Cookies algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 2\n1 2 3\n1 1",
        "output": "1",
        "explanation": "Only 1 child can be content"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-05-tc-1",
        "input": "3 2\n1 2 3\n1 1",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-23-05-tc-2",
        "input": "2 3\n1 2\n1 2 3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort both arrays and match greedily using two pointers."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Assign Cookies.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort both arrays and match greedily using two pointers.",
    "pseudocode": "# Solution logic for Assign Cookies\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort both arrays and match greedily using two pointers.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    g = sorted([int(x) for x in lines[2:2+n]])\n    s = sorted([int(x) for x in lines[2+n:2+n+m]])\n    i, j = 0, 0\n    while i < n and j < m:\n        if s[j] >= g[i]:\n            i += 1\n        j += 1\n    print(i)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    g = sorted([int(x) for x in lines[2:2+n]])\n    s = sorted([int(x) for x in lines[2+n:2+n+m]])\n    i, j = 0, 0\n    while i < n and j < m:\n        if s[j] >= g[i]:\n            i += 1\n        j += 1\n    print(i)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "easy"
    ]
  },
  {
    "id": "py-prob-23-06",
    "levelId": "level-23",
    "title": "Minimum Platforms / Meeting Rooms II",
    "type": "coding",
    "difficulty": "medium",
    "order": 6,
    "description": "Given arrival and departure times of all trains that reach a railway station, find the minimum number of platforms required so that no train has to wait.\n\nInput format: N, then N arrivals, then N departures.",
    "whyThisMatters": "Minimum Platforms / Meeting Rooms II is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Minimum Platforms / Meeting Rooms II algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000",
        "output": "3",
        "explanation": "At 9:50, three trains overlap"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-06-tc-1",
        "input": "6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-23-06-tc-2",
        "input": "3\n900 1100 1235\n1000 1200 1240",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort arrivals and departures separately and simulate with two pointers."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Minimum Platforms / Meeting Rooms II.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort arrivals and departures separately and simulate with two pointers.",
    "pseudocode": "# Solution logic for Minimum Platforms / Meeting Rooms II\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort arrivals and departures separately and simulate with two pointers.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    arr = sorted([int(x) for x in lines[1:n+1]])\n    dep = sorted([int(x) for x in lines[n+1:2*n+1]])\n    platforms = 0\n    max_platforms = 0\n    i, j = 0, 0\n    while i < n and j < n:\n        if arr[i] <= dep[j]:\n            platforms += 1\n            max_platforms = max(max_platforms, platforms)\n            i += 1\n        else:\n            platforms -= 1\n            j += 1\n    print(max_platforms)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    arr = sorted([int(x) for x in lines[1:n+1]])\n    dep = sorted([int(x) for x in lines[n+1:2*n+1]])\n    platforms = 0\n    max_platforms = 0\n    i, j = 0, 0\n    while i < n and j < n:\n        if arr[i] <= dep[j]:\n            platforms += 1\n            max_platforms = max(max_platforms, platforms)\n            i += 1\n        else:\n            platforms -= 1\n            j += 1\n    print(max_platforms)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  },
  {
    "id": "py-prob-23-07",
    "levelId": "level-23",
    "title": "Lemonade Change",
    "type": "coding",
    "difficulty": "easy",
    "order": 7,
    "description": "At a lemonade stand, each lemonade costs $5. Customers stand in a queue and buy one at a time, paying with $5, $10, or $20 bills. You must provide correct change with your currently available bills. Return \"true\" if you can provide every customer with correct change, or \"false\" otherwise.\n\nInput format: N followed by N bill values.",
    "whyThisMatters": "Lemonade Change is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Lemonade Change algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5\n5 5 5 10 20",
        "output": "true",
        "explanation": "All change provided successfully"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-07-tc-1",
        "input": "5\n5 5 5 10 20",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-23-07-tc-2",
        "input": "5\n5 5 10 10 20",
        "expectedOutput": "false",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "When giving change for $20, prioritize giving a $10 and a $5 because $5 bills are more versatile."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Lemonade Change.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "When giving change for $20, prioritize giving a $10 and a $5 because $5 bills are more versatile.",
    "pseudocode": "# Solution logic for Lemonade Change\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "When giving change for $20, prioritize giving a $10 and a $5 because $5 bills are more versatile.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    bills = [int(x) for x in lines[1:n+1]]\n    five, ten = 0, 0\n    for bill in bills:\n        if bill == 5:\n            five += 1\n        elif bill == 10:\n            if five == 0:\n                print(\"false\")\n                return\n            five -= 1\n            ten += 1\n        else:\n            if ten > 0 and five > 0:\n                ten -= 1\n                five -= 1\n            elif five >= 3:\n                five -= 3\n            else:\n                print(\"false\")\n                return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    bills = [int(x) for x in lines[1:n+1]]\n    five, ten = 0, 0\n    for bill in bills:\n        if bill == 5:\n            five += 1\n        elif bill == 10:\n            if five == 0:\n                print(\"false\")\n                return\n            five -= 1\n            ten += 1\n        else:\n            if ten > 0 and five > 0:\n                ten -= 1\n                five -= 1\n            elif five >= 3:\n                five -= 3\n            else:\n                print(\"false\")\n                return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "easy"
    ]
  },
  {
    "id": "py-prob-23-08",
    "levelId": "level-23",
    "title": "Partition Labels",
    "type": "coding",
    "difficulty": "medium",
    "order": 8,
    "description": "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts separated by spaces.\n\nInput format: single string s.",
    "whyThisMatters": "Partition Labels is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Partition Labels algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "ababcbacadefegdehijhklij",
        "output": "9 7 8",
        "explanation": "Parts: \"ababcbaca\" (len 9), \"defegde\" (len 7), \"hijhklij\" (len 8)"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-08-tc-1",
        "input": "ababcbacadefegdehijhklij",
        "expectedOutput": "9 7 8",
        "hidden": false
      },
      {
        "id": "py-prob-23-08-tc-2",
        "input": "eccbbbbdec",
        "expectedOutput": "10",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Record the last occurrence of each character. Greedily expand the current partition boundary to the maximum last occurrence."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Partition Labels.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Record the last occurrence of each character. Greedily expand the current partition boundary to the maximum last occurrence.",
    "pseudocode": "# Solution logic for Partition Labels\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Record the last occurrence of each character. Greedily expand the current partition boundary to the maximum last occurrence.",
    "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    last = {c: i for i, c in enumerate(s)}\n    sizes = []\n    start, end = 0, 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            sizes.append(end - start + 1)\n            start = i + 1\n    print(*(sizes))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    last = {c: i for i, c in enumerate(s)}\n    sizes = []\n    start, end = 0, 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            sizes.append(end - start + 1)\n            start = i + 1\n    print(*(sizes))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  },
  {
    "id": "py-prob-23-09",
    "levelId": "level-23",
    "title": "Task Scheduler",
    "type": "coding",
    "difficulty": "medium",
    "order": 9,
    "description": "Given a characters array tasks representing CPU tasks (uppercase A-Z) and a non-negative integer n representing cooldown between identical tasks, return the minimum units of time required to complete all tasks.\n\nInput format: string of task characters (e.g. AAABBB) and integer n.",
    "whyThisMatters": "Task Scheduler is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Task Scheduler algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "AAABBB 2",
        "output": "8",
        "explanation": "A -> B -> idle -> A -> B -> idle -> A -> B"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-09-tc-1",
        "input": "AAABBB 2",
        "expectedOutput": "8",
        "hidden": false
      },
      {
        "id": "py-prob-23-09-tc-2",
        "input": "AAABBB 0",
        "expectedOutput": "6",
        "hidden": false
      },
      {
        "id": "py-prob-23-09-tc-3",
        "input": "AAAAAABBBEEGG 2",
        "expectedOutput": "16",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Formula based on the most frequent task: (max_freq - 1) * (n + 1) + num_max."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Task Scheduler.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Formula based on the most frequent task: (max_freq - 1) * (n + 1) + num_max.",
    "pseudocode": "# Solution logic for Task Scheduler\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Formula based on the most frequent task: (max_freq - 1) * (n + 1) + num_max.",
    "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    tasks, n = lines[0], int(lines[1])\n    counts = Counter(tasks)\n    max_freq = max(counts.values())\n    num_max = sum(1 for c in counts.values() if c == max_freq)\n    part_count = max_freq - 1\n    part_len = n - (num_max - 1)\n    empty_slots = part_count * part_len\n    available_tasks = len(tasks) - max_freq * num_max\n    idles = max(0, empty_slots - available_tasks)\n    print(len(tasks) + idles)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    tasks, n = lines[0], int(lines[1])\n    counts = Counter(tasks)\n    max_freq = max(counts.values())\n    num_max = sum(1 for c in counts.values() if c == max_freq)\n    part_count = max_freq - 1\n    part_len = n - (num_max - 1)\n    empty_slots = part_count * part_len\n    available_tasks = len(tasks) - max_freq * num_max\n    idles = max(0, empty_slots - available_tasks)\n    print(len(tasks) + idles)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  },
  {
    "id": "py-prob-23-10",
    "levelId": "level-23",
    "title": "Fractional Knapsack",
    "type": "coding",
    "difficulty": "medium",
    "order": 10,
    "description": "Given N items with their values and weights, and a knapsack of capacity W, find the maximum total value in the knapsack. You can break items into fractions. Print the maximum value formatted to 2 decimal places.\n\nInput format: N W, followed by N lines of value weight.",
    "whyThisMatters": "Fractional Knapsack is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-23",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Fractional Knapsack algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 50\n60 10\n100 20\n120 30",
        "output": "240.00",
        "explanation": "Take item 1 (60), item 2 (100), and 2/3 of item 3 (80) = 240.00"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-23-10-tc-1",
        "input": "3 50\n60 10\n100 20\n120 30",
        "expectedOutput": "240.00",
        "hidden": false
      },
      {
        "id": "py-prob-23-10-tc-2",
        "input": "2 50\n60 10\n100 20",
        "expectedOutput": "160.00",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort items by value-to-weight ratio descending."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Fractional Knapsack.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort items by value-to-weight ratio descending.",
    "pseudocode": "# Solution logic for Fractional Knapsack\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort items by value-to-weight ratio descending.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, w = int(lines[0]), float(lines[1])\n    items = []\n    idx = 2\n    for _ in range(n):\n        val, wt = float(lines[idx]), float(lines[idx+1])\n        items.append((val, wt, val / wt))\n        idx += 2\n    items.sort(key=lambda x: x[2], reverse=True)\n    total_val = 0.0\n    rem_w = w\n    for val, wt, ratio in items:\n        if rem_w >= wt:\n            total_val += val\n            rem_w -= wt\n        else:\n            total_val += ratio * rem_w\n            break\n    print(f\"{total_val:.2f}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, w = int(lines[0]), float(lines[1])\n    items = []\n    idx = 2\n    for _ in range(n):\n        val, wt = float(lines[idx]), float(lines[idx+1])\n        items.append((val, wt, val / wt))\n        idx += 2\n    items.sort(key=lambda x: x[2], reverse=True)\n    total_val = 0.0\n    rem_w = w\n    for val, wt, ratio in items:\n        if rem_w >= wt:\n            total_val += val\n            rem_w -= wt\n        else:\n            total_val += ratio * rem_w\n            break\n    print(f\"{total_val:.2f}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-23",
      "medium"
    ]
  }
];
