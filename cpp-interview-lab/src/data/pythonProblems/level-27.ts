import { Problem } from '../types';

export const pyLevel27Problems: Problem[] = [
  {
    "id": "py-prob-27-01",
    "levelId": "level-27",
    "title": "Simplify Unix File Path",
    "type": "coding",
    "difficulty": "medium",
    "order": 1,
    "description": "Given an absolute path for a Unix-style file system, simplify it. In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and multiple consecutive slashes are treated as a single slash '/'.\n\nInput format: single string path.",
    "whyThisMatters": "Simplify Unix File Path is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Simplify Unix File Path algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "/home//foo/",
        "output": "/home/foo",
        "explanation": "Trailing and consecutive slashes removed"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-01-tc-1",
        "input": "/home//foo/",
        "expectedOutput": "/home/foo",
        "hidden": false
      },
      {
        "id": "py-prob-27-01-tc-2",
        "input": "/../",
        "expectedOutput": "/",
        "hidden": false
      },
      {
        "id": "py-prob-27-01-tc-3",
        "input": "/a/./b/../../c/",
        "expectedOutput": "/c",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    if not path:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    if not path:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Split by '/', push tokens to stack, pop on '..', and join with '/'."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Simplify Unix File Path.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Split by '/', push tokens to stack, pop on '..', and join with '/'.",
    "pseudocode": "# Solution logic for Simplify Unix File Path\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Split by '/', push tokens to stack, pop on '..', and join with '/'.",
    "solution": "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    if not path:\n        return\n    stack = []\n    parts = path.split('/')\n    for p in parts:\n        if p == '' or p == '.':\n            continue\n        if p == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(p)\n    print('/' + '/'.join(stack))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    if not path:\n        return\n    stack = []\n    parts = path.split('/')\n    for p in parts:\n        if p == '' or p == '.':\n            continue\n        if p == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(p)\n    print('/' + '/'.join(stack))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "medium"
    ]
  },
  {
    "id": "py-prob-27-02",
    "levelId": "level-27",
    "title": "Rate Limiter (Sliding Window Log)",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "Implement a sliding window log rate limiter that allows at most max_requests within a window of window_size seconds. For each request with timestamp t, print \"ACCEPT\" if permitted and recorded, else \"REJECT\".\n\nInput format: max_requests window_size N, followed by N request timestamps.",
    "whyThisMatters": "Rate Limiter (Sliding Window Log) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Rate Limiter (Sliding Window Log) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 10 5\n1\n2\n3\n4\n12",
        "output": "ACCEPT\nACCEPT\nACCEPT\nREJECT\nACCEPT",
        "explanation": "At t=4, 3 requests exist in [0, 4]. At t=12, t=1 and t=2 expired"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-02-tc-1",
        "input": "3 10 5\n1\n2\n3\n4\n12",
        "expectedOutput": "ACCEPT\nACCEPT\nACCEPT\nREJECT\nACCEPT",
        "hidden": false
      },
      {
        "id": "py-prob-27-02-tc-2",
        "input": "1 5 3\n1\n3\n7",
        "expectedOutput": "ACCEPT\nREJECT\nACCEPT",
        "hidden": false
      }
    ],
    "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Pop timestamps from front of deque if timestamp <= current_t - window_size."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Rate Limiter (Sliding Window Log).",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Pop timestamps from front of deque if timestamp <= current_t - window_size.",
    "pseudocode": "# Solution logic for Rate Limiter (Sliding Window Log)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Pop timestamps from front of deque if timestamp <= current_t - window_size.",
    "solution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    max_req, win_sz, n = int(lines[0]), int(lines[1]), int(lines[2])\n    timestamps = [int(x) for x in lines[3:3+n]]\n    q = deque()\n    for t in timestamps:\n        while q and q[0] <= t - win_sz:\n            q.popleft()\n        if len(q) < max_req:\n            q.append(t)\n            print(\"ACCEPT\")\n        else:\n            print(\"REJECT\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    max_req, win_sz, n = int(lines[0]), int(lines[1]), int(lines[2])\n    timestamps = [int(x) for x in lines[3:3+n]]\n    q = deque()\n    for t in timestamps:\n        while q and q[0] <= t - win_sz:\n            q.popleft()\n        if len(q) < max_req:\n            q.append(t)\n            print(\"ACCEPT\")\n        else:\n            print(\"REJECT\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "medium"
    ]
  },
  {
    "id": "py-prob-27-03",
    "levelId": "level-27",
    "title": "Evaluate Reverse Polish Notation",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Division truncates toward zero.\n\nInput format: N followed by N tokens.",
    "whyThisMatters": "Evaluate Reverse Polish Notation is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Evaluate Reverse Polish Notation algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5\n2 1 + 3 *",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-03-tc-1",
        "input": "5\n2 1 + 3 *",
        "expectedOutput": "9",
        "hidden": false
      },
      {
        "id": "py-prob-27-03-tc-2",
        "input": "5\n4 13 5 / +",
        "expectedOutput": "6",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Standard stack-based RPN evaluation."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Evaluate Reverse Polish Notation.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Standard stack-based RPN evaluation.",
    "pseudocode": "# Solution logic for Evaluate Reverse Polish Notation\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Standard stack-based RPN evaluation.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    tokens = lines[1:n+1]\n    stack = []\n    for token in tokens:\n        if token in \"+-*/\":\n            b = stack.pop()\n            a = stack.pop()\n            if token == '+':\n                stack.append(a + b)\n            elif token == '-':\n                stack.append(a - b)\n            elif token == '*':\n                stack.append(a * b)\n            elif token == '/':\n                stack.append(int(a / b))\n        else:\n            stack.append(int(token))\n    print(stack[0])\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    tokens = lines[1:n+1]\n    stack = []\n    for token in tokens:\n        if token in \"+-*/\":\n            b = stack.pop()\n            a = stack.pop()\n            if token == '+':\n                stack.append(a + b)\n            elif token == '-':\n                stack.append(a - b)\n            elif token == '*':\n                stack.append(a * b)\n            elif token == '/':\n                stack.append(int(a / b))\n        else:\n            stack.append(int(token))\n    print(stack[0])\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "medium"
    ]
  },
  {
    "id": "py-prob-27-04",
    "levelId": "level-27",
    "title": "Daily Temperatures (Monotonic Stack)",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.\n\nInput format: N followed by N temperatures.",
    "whyThisMatters": "Daily Temperatures (Monotonic Stack) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Daily Temperatures (Monotonic Stack) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "8\n73 74 75 71 69 72 76 73",
        "output": "1 1 4 2 1 1 0 0",
        "explanation": "Next warmer day counts"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-04-tc-1",
        "input": "8\n73 74 75 71 69 72 76 73",
        "expectedOutput": "1 1 4 2 1 1 0 0",
        "hidden": false
      },
      {
        "id": "py-prob-27-04-tc-2",
        "input": "4\n30 40 50 60",
        "expectedOutput": "1 1 1 0",
        "hidden": false
      },
      {
        "id": "py-prob-27-04-tc-3",
        "input": "3\n30 60 90",
        "expectedOutput": "1 1 0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Maintain a monotonic decreasing stack of day indices."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Daily Temperatures (Monotonic Stack).",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Maintain a monotonic decreasing stack of day indices.",
    "pseudocode": "# Solution logic for Daily Temperatures (Monotonic Stack)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Maintain a monotonic decreasing stack of day indices.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    t = [int(x) for x in lines[1:n+1]]\n    ans = [0] * n\n    stack = []\n    for i, temp in enumerate(t):\n        while stack and t[stack[-1]] < temp:\n            prev_idx = stack.pop()\n            ans[prev_idx] = i - prev_idx\n        stack.append(i)\n    print(*(ans))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    t = [int(x) for x in lines[1:n+1]]\n    ans = [0] * n\n    stack = []\n    for i, temp in enumerate(t):\n        while stack and t[stack[-1]] < temp:\n            prev_idx = stack.pop()\n            ans[prev_idx] = i - prev_idx\n        stack.append(i)\n    print(*(ans))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "medium"
    ]
  },
  {
    "id": "py-prob-27-05",
    "levelId": "level-27",
    "title": "Asteroid Collision",
    "type": "coding",
    "difficulty": "medium",
    "order": 5,
    "description": "We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). If two asteroids meet, the smaller one explodes. If both are the same size, both explode. Two asteroids moving in the same direction will never meet. Find out the state of the asteroids after all collisions.\n\nInput format: N followed by N asteroid values.",
    "whyThisMatters": "Asteroid Collision is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Asteroid Collision algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3\n5 10 -5",
        "output": "5 10",
        "explanation": "10 and -5 collide, 10 survives"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-05-tc-1",
        "input": "3\n5 10 -5",
        "expectedOutput": "5 10",
        "hidden": false
      },
      {
        "id": "py-prob-27-05-tc-2",
        "input": "2\n8 -8",
        "expectedOutput": "",
        "hidden": false
      },
      {
        "id": "py-prob-27-05-tc-3",
        "input": "3\n10 2 -5",
        "expectedOutput": "10",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use while stack and ast < 0 < stack[-1] with Python while-else construct."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Asteroid Collision.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use while stack and ast < 0 < stack[-1] with Python while-else construct.",
    "pseudocode": "# Solution logic for Asteroid Collision\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use while stack and ast < 0 < stack[-1] with Python while-else construct.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    asteroids = [int(x) for x in lines[1:n+1]]\n    stack = []\n    for ast in asteroids:\n        while stack and ast < 0 < stack[-1]:\n            if stack[-1] < -ast:\n                stack.pop()\n                continue\n            elif stack[-1] == -ast:\n                stack.pop()\n            break\n        else:\n            stack.append(ast)\n    if stack:\n        print(*(stack))\n    else:\n        print(\"\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    asteroids = [int(x) for x in lines[1:n+1]]\n    stack = []\n    for ast in asteroids:\n        while stack and ast < 0 < stack[-1]:\n            if stack[-1] < -ast:\n                stack.pop()\n                continue\n            elif stack[-1] == -ast:\n                stack.pop()\n            break\n        else:\n            stack.append(ast)\n    if stack:\n        print(*(stack))\n    else:\n        print(\"\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "medium"
    ]
  },
  {
    "id": "py-prob-27-06",
    "levelId": "level-27",
    "title": "Sliding Window Maximum",
    "type": "coding",
    "difficulty": "hard",
    "order": 6,
    "description": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. Return the max sliding window values separated by space.\n\nInput format: N k, then N integers.",
    "whyThisMatters": "Sliding Window Maximum is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Sliding Window Maximum algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "8 3\n1 3 -1 -3 5 3 6 7",
        "output": "3 3 5 5 6 7",
        "explanation": "Maximums of each window of size 3"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-06-tc-1",
        "input": "8 3\n1 3 -1 -3 5 3 6 7",
        "expectedOutput": "3 3 5 5 6 7",
        "hidden": false
      },
      {
        "id": "py-prob-27-06-tc-2",
        "input": "1 1\n1",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Maintain monotonic decreasing deque storing indices."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Sliding Window Maximum.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Maintain monotonic decreasing deque storing indices.",
    "pseudocode": "# Solution logic for Sliding Window Maximum\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Maintain monotonic decreasing deque storing indices.",
    "solution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    q = deque()\n    res = []\n    for i in range(n):\n        if q and q[0] <= i - k:\n            q.popleft()\n        while q and nums[q[-1]] <= nums[i]:\n            q.pop()\n        q.append(i)\n        if i >= k - 1:\n            res.append(nums[q[0]])\n    print(*(res))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    q = deque()\n    res = []\n    for i in range(n):\n        if q and q[0] <= i - k:\n            q.popleft()\n        while q and nums[q[-1]] <= nums[i]:\n            q.pop()\n        q.append(i)\n        if i >= k - 1:\n            res.append(nums[q[0]])\n    print(*(res))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "hard"
    ]
  },
  {
    "id": "py-prob-27-07",
    "levelId": "level-27",
    "title": "Text Justification Formatter",
    "type": "coding",
    "difficulty": "hard",
    "order": 7,
    "description": "Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. Last line should be left-justified. Pad extra spaces on the left for uneven spaces.\n\nInput format: line 1 has N maxWidth. Next N lines have words.",
    "whyThisMatters": "Text Justification Formatter is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Text Justification Formatter algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "7 16\nThis\nis\nan\nexample\nof\ntext\njustification.",
        "output": "This    is    an\nexample  of text\njustification.  ",
        "explanation": "Each line formatted to exactly 16 characters"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-07-tc-1",
        "input": "7 16\nThis\nis\nan\nexample\nof\ntext\njustification.",
        "expectedOutput": "This    is    an\nexample  of text\njustification.  ",
        "hidden": false
      },
      {
        "id": "py-prob-27-07-tc-2",
        "input": "3 10\nWhat\nmust\nbe",
        "expectedOutput": "What  must\nbe        ",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Distribute spaces evenly across slots using modulo (len(cur_line) - 1 or 1)."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Text Justification Formatter.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Distribute spaces evenly across slots using modulo (len(cur_line) - 1 or 1).",
    "pseudocode": "# Solution logic for Text Justification Formatter\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Distribute spaces evenly across slots using modulo (len(cur_line) - 1 or 1).",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, max_w = int(lines[0]), int(lines[1])\n    words = lines[2:2+n]\n    res = []\n    cur_line, cur_len = [], 0\n    for w in words:\n        if cur_len + len(w) + len(cur_line) > max_w:\n            for i in range(max_w - cur_len):\n                cur_line[i % (len(cur_line) - 1 or 1)] += ' '\n            res.append(''.join(cur_line))\n            cur_line, cur_len = [], 0\n        cur_line.append(w)\n        cur_len += len(w)\n    last = ' '.join(cur_line)\n    last += ' ' * (max_w - len(last))\n    res.append(last)\n    for line in res:\n        print(line)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, max_w = int(lines[0]), int(lines[1])\n    words = lines[2:2+n]\n    res = []\n    cur_line, cur_len = [], 0\n    for w in words:\n        if cur_len + len(w) + len(cur_line) > max_w:\n            for i in range(max_w - cur_len):\n                cur_line[i % (len(cur_line) - 1 or 1)] += ' '\n            res.append(''.join(cur_line))\n            cur_line, cur_len = [], 0\n        cur_line.append(w)\n        cur_len += len(w)\n    last = ' '.join(cur_line)\n    last += ' ' * (max_w - len(last))\n    res.append(last)\n    for line in res:\n        print(line)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "hard"
    ]
  },
  {
    "id": "py-prob-27-08",
    "levelId": "level-27",
    "title": "Valid Number Regex/Parser",
    "type": "coding",
    "difficulty": "hard",
    "order": 8,
    "description": "A valid number can be split up into these components (in order): decimal or integer, optionally 'e' or 'E' followed by an integer. Return \"true\" if the given string is a valid number, else \"false\".\n\nInput format: single string s.",
    "whyThisMatters": "Valid Number Regex/Parser is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Valid Number Regex/Parser algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "0",
        "output": "true",
        "explanation": "0 is a valid number"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-08-tc-1",
        "input": "0",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-27-08-tc-2",
        "input": "e",
        "expectedOutput": "false",
        "hidden": false
      },
      {
        "id": "py-prob-27-08-tc-3",
        "input": "2e10",
        "expectedOutput": "true",
        "hidden": true
      },
      {
        "id": "py-prob-27-08-tc-4",
        "input": "-90E3",
        "expectedOutput": "true",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nimport re\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nimport re\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Validate with regex ^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Valid Number Regex/Parser.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Validate with regex ^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$.",
    "pseudocode": "# Solution logic for Valid Number Regex/Parser\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Validate with regex ^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$.",
    "solution": "import sys\nimport re\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    pattern = r'^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$'\n    if re.match(pattern, s):\n        print(\"true\")\n    else:\n        print(\"false\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nimport re\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    pattern = r'^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$'\n    if re.match(pattern, s):\n        print(\"true\")\n    else:\n        print(\"false\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "hard"
    ]
  },
  {
    "id": "py-prob-27-09",
    "levelId": "level-27",
    "title": "Word Ladder Length",
    "type": "coding",
    "difficulty": "hard",
    "order": 9,
    "description": "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter. Return the number of words in the shortest transformation sequence, or 0 if no sequence exists.\n\nInput format: beginWord endWord N, then N words.",
    "whyThisMatters": "Word Ladder Length is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Word Ladder Length algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "hit cog 6\nhot\ndot\ndog\nlot\nlog\ncog",
        "output": "5",
        "explanation": "\"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\" is 5 words"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-09-tc-1",
        "input": "hit cog 6\nhot\ndot\ndog\nlot\nlog\ncog",
        "expectedOutput": "5",
        "hidden": false
      },
      {
        "id": "py-prob-27-09-tc-2",
        "input": "hit cog 5\nhot\ndot\ndog\nlot\nlog",
        "expectedOutput": "0",
        "hidden": false
      }
    ],
    "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "BFS where next words differ by 1 character."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Word Ladder Length.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "BFS where next words differ by 1 character.",
    "pseudocode": "# Solution logic for Word Ladder Length\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "BFS where next words differ by 1 character.",
    "solution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    begin, end, n = lines[0], lines[1], int(lines[2])\n    words = set(lines[3:3+n])\n    if end not in words:\n        print(0)\n        return\n    q = deque([(begin, 1)])\n    visited = {begin}\n    while q:\n        word, dist = q.popleft()\n        if word == end:\n            print(dist)\n            return\n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                next_word = word[:i] + c + word[i+1:]\n                if next_word in words and next_word not in visited:\n                    visited.add(next_word)\n                    q.append((next_word, dist + 1))\n    print(0)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    begin, end, n = lines[0], lines[1], int(lines[2])\n    words = set(lines[3:3+n])\n    if end not in words:\n        print(0)\n        return\n    q = deque([(begin, 1)])\n    visited = {begin}\n    while q:\n        word, dist = q.popleft()\n        if word == end:\n            print(dist)\n            return\n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                next_word = word[:i] + c + word[i+1:]\n                if next_word in words and next_word not in visited:\n                    visited.add(next_word)\n                    q.append((next_word, dist + 1))\n    print(0)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "hard"
    ]
  },
  {
    "id": "py-prob-27-10",
    "levelId": "level-27",
    "title": "Alien Dictionary Order",
    "type": "coding",
    "difficulty": "hard",
    "order": 10,
    "description": "There is a new alien language that uses the English alphabet. Given a list of words from the alien language's dictionary sorted lexicographically by the rules of this new language, return a string of the unique letters in the new alien language sorted in lexicographically increasing order. If the order is invalid, return \"\". If multiple, any valid order is accepted.\n\nInput format: N followed by N words.",
    "whyThisMatters": "Alien Dictionary Order is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-27",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Alien Dictionary Order algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5\nwrt\nwrf\ner\nett\nrftt",
        "output": "wertf",
        "explanation": "Topological order: w, e, r, t, f"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-27-10-tc-1",
        "input": "5\nwrt\nwrf\ner\nett\nrftt",
        "expectedOutput": "wertf",
        "hidden": false
      },
      {
        "id": "py-prob-27-10-tc-2",
        "input": "2\nz\nx",
        "expectedOutput": "zx",
        "hidden": false
      },
      {
        "id": "py-prob-27-10-tc-3",
        "input": "2\nz\nx\nz",
        "expectedOutput": "",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import defaultdict, deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import defaultdict, deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Build directed graph from adjacent words and find topological ordering with Kahn's algorithm."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Alien Dictionary Order.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Build directed graph from adjacent words and find topological ordering with Kahn's algorithm.",
    "pseudocode": "# Solution logic for Alien Dictionary Order\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Build directed graph from adjacent words and find topological ordering with Kahn's algorithm.",
    "solution": "import sys\nfrom collections import defaultdict, deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    words = lines[1:n+1]\n    adj = defaultdict(set)\n    chars = set(\"\".join(words))\n    in_degree = {c: 0 for c in chars}\n    for i in range(n - 1):\n        w1, w2 = words[i], words[i+1]\n        min_len = min(len(w1), len(w2))\n        if len(w1) > len(w2) and w1.startswith(w2):\n            print(\"\")\n            return\n        for j in range(min_len):\n            if w1[j] != w2[j]:\n                if w2[j] not in adj[w1[j]]:\n                    adj[w1[j]].add(w2[j])\n                    in_degree[w2[j]] += 1\n                break\n    q = deque([c for c in in_degree if in_degree[c] == 0])\n    res = []\n    while q:\n        c = q.popleft()\n        res.append(c)\n        for nbr in adj[c]:\n            in_degree[nbr] -= 1\n            if in_degree[nbr] == 0:\n                q.append(nbr)\n    if len(res) == len(chars):\n        print(\"\".join(res))\n    else:\n        print(\"\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import defaultdict, deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    words = lines[1:n+1]\n    adj = defaultdict(set)\n    chars = set(\"\".join(words))\n    in_degree = {c: 0 for c in chars}\n    for i in range(n - 1):\n        w1, w2 = words[i], words[i+1]\n        min_len = min(len(w1), len(w2))\n        if len(w1) > len(w2) and w1.startswith(w2):\n            print(\"\")\n            return\n        for j in range(min_len):\n            if w1[j] != w2[j]:\n                if w2[j] not in adj[w1[j]]:\n                    adj[w1[j]].add(w2[j])\n                    in_degree[w2[j]] += 1\n                break\n    q = deque([c for c in in_degree if in_degree[c] == 0])\n    res = []\n    while q:\n        c = q.popleft()\n        res.append(c)\n        for nbr in adj[c]:\n            in_degree[nbr] -= 1\n            if in_degree[nbr] == 0:\n                q.append(nbr)\n    if len(res) == len(chars):\n        print(\"\".join(res))\n    else:\n        print(\"\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-27",
      "hard"
    ]
  }
];
