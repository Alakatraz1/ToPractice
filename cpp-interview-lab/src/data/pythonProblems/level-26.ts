import { Problem } from '../types';

export const pyLevel26Problems: Problem[] = [
  {
    "id": "py-prob-26-01",
    "levelId": "level-26",
    "title": "Amazon: Reorder Data in Log Files",
    "type": "coding",
    "difficulty": "medium",
    "order": 1,
    "description": "You are given an array of logs. Each log is a space-delimited string of words where the first word is an identifier. Letter-logs consist of lowercase letters; digit-logs consist of digits.\nRules:\n1. Letter-logs come before all digit-logs.\n2. Letter-logs are sorted lexicographically by content; if contents are identical, sort by identifier.\n3. Digit-logs maintain their relative original order.\n\nInput format: N, then N lines of log strings.",
    "whyThisMatters": "Amazon: Reorder Data in Log Files is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Amazon: Reorder Data in Log Files algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5\ndig1 8 1 5 1\nlet1 art can\ndig2 3 6\nlet2 own kit dig\nlet3 art zero",
        "output": "let1 art can\nlet3 art zero\nlet2 own kit dig\ndig1 8 1 5 1\ndig2 3 6",
        "explanation": "Letter logs ordered by contents, digit logs retain order"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-01-tc-1",
        "input": "5\ndig1 8 1 5 1\nlet1 art can\ndig2 3 6\nlet2 own kit dig\nlet3 art zero",
        "expectedOutput": "let1 art can\nlet3 art zero\nlet2 own kit dig\ndig1 8 1 5 1\ndig2 3 6",
        "hidden": false
      },
      {
        "id": "py-prob-26-01-tc-2",
        "input": "2\na1 9 2 3 1\ng1 act car",
        "expectedOutput": "g1 act car\na1 9 2 3 1",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort letter logs with key (content, identifier), append digit logs unchanged."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Amazon: Reorder Data in Log Files.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort letter logs with key (content, identifier), append digit logs unchanged.",
    "pseudocode": "# Solution logic for Amazon: Reorder Data in Log Files\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort letter logs with key (content, identifier), append digit logs unchanged.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    n = int(lines[0].strip())\n    logs = lines[1:n+1]\n    def get_key(log):\n        identifier, rest = log.split(\" \", 1)\n        if rest[0].isalpha():\n            return (0, rest, identifier)\n        return (1,)\n    letter_logs = []\n    digit_logs = []\n    for log in logs:\n        if log.split(\" \", 1)[1][0].isalpha():\n            letter_logs.append(log)\n        else:\n            digit_logs.append(log)\n    letter_logs.sort(key=lambda log: (log.split(\" \", 1)[1], log.split(\" \", 1)[0]))\n    for l in letter_logs + digit_logs:\n        print(l)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    n = int(lines[0].strip())\n    logs = lines[1:n+1]\n    def get_key(log):\n        identifier, rest = log.split(\" \", 1)\n        if rest[0].isalpha():\n            return (0, rest, identifier)\n        return (1,)\n    letter_logs = []\n    digit_logs = []\n    for log in logs:\n        if log.split(\" \", 1)[1][0].isalpha():\n            letter_logs.append(log)\n        else:\n            digit_logs.append(log)\n    letter_logs.sort(key=lambda log: (log.split(\" \", 1)[1], log.split(\" \", 1)[0]))\n    for l in letter_logs + digit_logs:\n        print(l)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-02",
    "levelId": "level-26",
    "title": "Microsoft: Set Matrix Zeroes",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's in place.\n\nInput format: m n, followed by m lines each with n space-separated integers.",
    "whyThisMatters": "Microsoft: Set Matrix Zeroes is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Microsoft: Set Matrix Zeroes algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 3\n1 1 1\n1 0 1\n1 1 1",
        "output": "1 0 1\n0 0 0\n1 0 1",
        "explanation": "Row 1 and Column 1 are set to 0"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-02-tc-1",
        "input": "3 3\n1 1 1\n1 0 1\n1 1 1",
        "expectedOutput": "1 0 1\n0 0 0\n1 0 1",
        "hidden": false
      },
      {
        "id": "py-prob-26-02-tc-2",
        "input": "3 4\n0 1 2 0\n3 4 5 2\n1 3 1 5",
        "expectedOutput": "0 0 0 0\n0 4 5 0\n0 3 1 0",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Collect row and column indices containing zeros, then overwrite matrix."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Microsoft: Set Matrix Zeroes.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Collect row and column indices containing zeros, then overwrite matrix.",
    "pseudocode": "# Solution logic for Microsoft: Set Matrix Zeroes\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Collect row and column indices containing zeros, then overwrite matrix.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    rows = set()\n    cols = set()\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 0:\n                rows.add(r)\n                cols.add(c)\n    for r in range(m):\n        for c in range(n):\n            if r in rows or c in cols:\n                grid[r][c] = 0\n    for row in grid:\n        print(*(row))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    rows = set()\n    cols = set()\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 0:\n                rows.add(r)\n                cols.add(c)\n    for r in range(m):\n        for c in range(n):\n            if r in rows or c in cols:\n                grid[r][c] = 0\n    for row in grid:\n        print(*(row))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-03",
    "levelId": "level-26",
    "title": "Google: Median of Two Sorted Arrays",
    "type": "coding",
    "difficulty": "hard",
    "order": 3,
    "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays formatted to 2 decimal places.\n\nInput format: line 1 has m and n. Line 2 has m elements. Line 3 has n elements.",
    "whyThisMatters": "Google: Median of Two Sorted Arrays is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "hard"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Google: Median of Two Sorted Arrays algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "2 1\n1 3\n2",
        "output": "2.00",
        "explanation": "Merged array [1, 2, 3], median is 2"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-03-tc-1",
        "input": "2 1\n1 3\n2",
        "expectedOutput": "2.00",
        "hidden": false
      },
      {
        "id": "py-prob-26-03-tc-2",
        "input": "2 2\n1 2\n3 4",
        "expectedOutput": "2.50",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Find median from merged sorted arrays formatted with 2 decimal places."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Google: Median of Two Sorted Arrays.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Find median from merged sorted arrays formatted with 2 decimal places.",
    "pseudocode": "# Solution logic for Google: Median of Two Sorted Arrays\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Find median from merged sorted arrays formatted with 2 decimal places.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    a = [int(x) for x in lines[2:2+m]]\n    b = [int(x) for x in lines[2+m:2+m+n]]\n    merged = sorted(a + b)\n    tot = m + n\n    if tot % 2 == 1:\n        med = float(merged[tot // 2])\n    else:\n        med = (merged[tot // 2 - 1] + merged[tot // 2]) / 2.0\n    print(f\"{med:.2f}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    a = [int(x) for x in lines[2:2+m]]\n    b = [int(x) for x in lines[2+m:2+m+n]]\n    merged = sorted(a + b)\n    tot = m + n\n    if tot % 2 == 1:\n        med = float(merged[tot // 2])\n    else:\n        med = (merged[tot // 2 - 1] + merged[tot // 2]) / 2.0\n    print(f\"{med:.2f}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "hard"
    ]
  },
  {
    "id": "py-prob-26-04",
    "levelId": "level-26",
    "title": "Meta: Minimum Remove to Make Valid Parentheses",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "Given a string s of '(' , ')' and lowercase English characters, remove the minimum number of parentheses so that the remaining parentheses string is valid. Return any valid string.\n\nInput format: single string s.",
    "whyThisMatters": "Meta: Minimum Remove to Make Valid Parentheses is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Meta: Minimum Remove to Make Valid Parentheses algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "lee(t(c)o)de)",
        "output": "lee(t(c)o)de",
        "explanation": "Remove last unmatched )"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-04-tc-1",
        "input": "lee(t(c)o)de)",
        "expectedOutput": "lee(t(c)o)de",
        "hidden": false
      },
      {
        "id": "py-prob-26-04-tc-2",
        "input": "a)b(c)d",
        "expectedOutput": "ab(c)d",
        "hidden": false
      },
      {
        "id": "py-prob-26-04-tc-3",
        "input": "))((",
        "expectedOutput": "",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use a stack to track indices of open parentheses and collect unmatched closing ones."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Meta: Minimum Remove to Make Valid Parentheses.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use a stack to track indices of open parentheses and collect unmatched closing ones.",
    "pseudocode": "# Solution logic for Meta: Minimum Remove to Make Valid Parentheses\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use a stack to track indices of open parentheses and collect unmatched closing ones.",
    "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    remove = set()\n    for i, c in enumerate(s):\n        if c == '(':\n            stack.append(i)\n        elif c == ')':\n            if stack:\n                stack.pop()\n            else:\n                remove.add(i)\n    remove.update(stack)\n    res = [c for i, c in enumerate(s) if i not in remove]\n    print(\"\".join(res))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    remove = set()\n    for i, c in enumerate(s):\n        if c == '(':\n            stack.append(i)\n        elif c == ')':\n            if stack:\n                stack.pop()\n            else:\n                remove.add(i)\n    remove.update(stack)\n    res = [c for i, c in enumerate(s) if i not in remove]\n    print(\"\".join(res))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-05",
    "levelId": "level-26",
    "title": "Apple: Valid Palindrome II",
    "type": "coding",
    "difficulty": "easy",
    "order": 5,
    "description": "Given a string s, return \"true\" if the s can be palindrome after deleting at most one character from it, else \"false\".\n\nInput format: single string s.",
    "whyThisMatters": "Apple: Valid Palindrome II is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Apple: Valid Palindrome II algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "abca",
        "output": "true",
        "explanation": "Delete 'c' or 'b' to make palindrome"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-05-tc-1",
        "input": "aba",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-26-05-tc-2",
        "input": "abca",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "id": "py-prob-26-05-tc-3",
        "input": "abc",
        "expectedOutput": "false",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Check two pointers inward. Upon mismatch, test s[l+1:r+1] and s[l:r]."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Apple: Valid Palindrome II.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Check two pointers inward. Upon mismatch, test s[l+1:r+1] and s[l:r].",
    "pseudocode": "# Solution logic for Apple: Valid Palindrome II\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Check two pointers inward. Upon mismatch, test s[l+1:r+1] and s[l:r].",
    "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    def is_pal(subs):\n        return subs == subs[::-1]\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] == s[r]:\n            l += 1\n            r -= 1\n        else:\n            if is_pal(s[l+1:r+1]) or is_pal(s[l:r]):\n                print(\"true\")\n            else:\n                print(\"false\")\n            return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    def is_pal(subs):\n        return subs == subs[::-1]\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] == s[r]:\n            l += 1\n            r -= 1\n        else:\n            if is_pal(s[l+1:r+1]) or is_pal(s[l:r]):\n                print(\"true\")\n            else:\n                print(\"false\")\n            return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "easy"
    ]
  },
  {
    "id": "py-prob-26-06",
    "levelId": "level-26",
    "title": "IBM: Basic Calculator II",
    "type": "coding",
    "difficulty": "medium",
    "order": 6,
    "description": "Given a string s representing an arithmetic expression with non-negative integers, '+', '-', '*', and '/' operators and spaces, evaluate the expression and return its integer value (using integer division truncating toward zero).\n\nInput format: single line expression.",
    "whyThisMatters": "IBM: Basic Calculator II is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the IBM: Basic Calculator II algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3+2*2",
        "output": "7",
        "explanation": "Multiplication precedes addition"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-06-tc-1",
        "input": "3+2*2",
        "expectedOutput": "7",
        "hidden": false
      },
      {
        "id": "py-prob-26-06-tc-2",
        "input": " 3/2 ",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-26-06-tc-3",
        "input": " 3+5 / 2 ",
        "expectedOutput": "5",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Process high precedence operators immediately onto stack, then sum the stack."
    ],
    "howToThink": [
      "Analyze the input format and constraints for IBM: Basic Calculator II.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Process high precedence operators immediately onto stack, then sum the stack.",
    "pseudocode": "# Solution logic for IBM: Basic Calculator II\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Process high precedence operators immediately onto stack, then sum the stack.",
    "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    num = 0\n    sign = '+'\n    for i, c in enumerate(s):\n        if c.isdigit():\n            num = num * 10 + int(c)\n        if c in '+-*/' or i == len(s) - 1:\n            if sign == '+':\n                stack.append(num)\n            elif sign == '-':\n                stack.append(-num)\n            elif sign == '*':\n                stack.append(stack.pop() * num)\n            elif sign == '/':\n                stack.append(int(stack.pop() / num))\n            sign = c\n            num = 0\n    print(sum(stack))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    num = 0\n    sign = '+'\n    for i, c in enumerate(s):\n        if c.isdigit():\n            num = num * 10 + int(c)\n        if c in '+-*/' or i == len(s) - 1:\n            if sign == '+':\n                stack.append(num)\n            elif sign == '-':\n                stack.append(-num)\n            elif sign == '*':\n                stack.append(stack.pop() * num)\n            elif sign == '/':\n                stack.append(int(stack.pop() / num))\n            sign = c\n            num = 0\n    print(sum(stack))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-07",
    "levelId": "level-26",
    "title": "Amazon: K Closest Points to Origin",
    "type": "coding",
    "difficulty": "medium",
    "order": 7,
    "description": "Given an array of points where points[i] = [xi, yi] and an integer k, return the k closest points to the origin (0, 0) ordered by distance ascending. If equal distance, sort by xi ascending.\n\nInput format: N k, then N lines of x y.",
    "whyThisMatters": "Amazon: K Closest Points to Origin is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Amazon: K Closest Points to Origin algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "2 1\n1 3\n-2 2",
        "output": "-2 2",
        "explanation": "Distance (-2,2) is sqrt(8) < sqrt(10)"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-07-tc-1",
        "input": "2 1\n1 3\n-2 2",
        "expectedOutput": "-2 2",
        "hidden": false
      },
      {
        "id": "py-prob-26-07-tc-2",
        "input": "3 2\n3 3\n5 -1\n-2 4",
        "expectedOutput": "3 3\n-2 4",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sort points by x^2 + y^2."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Amazon: K Closest Points to Origin.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sort points by x^2 + y^2.",
    "pseudocode": "# Solution logic for Amazon: K Closest Points to Origin\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sort points by x^2 + y^2.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    pts = []\n    idx = 2\n    for _ in range(n):\n        pts.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    pts.sort(key=lambda p: (p[0]**2 + p[1]**2, p[0], p[1]))\n    for p in pts[:k]:\n        print(f\"{p[0]} {p[1]}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    pts = []\n    idx = 2\n    for _ in range(n):\n        pts.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    pts.sort(key=lambda p: (p[0]**2 + p[1]**2, p[0], p[1]))\n    for p in pts[:k]:\n        print(f\"{p[0]} {p[1]}\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-08",
    "levelId": "level-26",
    "title": "Google: Decode String",
    "type": "coding",
    "difficulty": "medium",
    "order": 8,
    "description": "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside square brackets is repeated k times.\n\nInput format: single string.",
    "whyThisMatters": "Google: Decode String is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Google: Decode String algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3[a]2[bc]",
        "output": "aaabcbc",
        "explanation": "3 a's followed by 2 bc's"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-08-tc-1",
        "input": "3[a]2[bc]",
        "expectedOutput": "aaabcbc",
        "hidden": false
      },
      {
        "id": "py-prob-26-08-tc-2",
        "input": "3[a2[c]]",
        "expectedOutput": "accaccacc",
        "hidden": false
      },
      {
        "id": "py-prob-26-08-tc-3",
        "input": "2[abc]3[cd]ef",
        "expectedOutput": "abcabccdcdcdef",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use stack pushing (current_string, repeat_count) on '[' and assembling on ']'."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Google: Decode String.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use stack pushing (current_string, repeat_count) on '[' and assembling on ']'.",
    "pseudocode": "# Solution logic for Google: Decode String\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use stack pushing (current_string, repeat_count) on '[' and assembling on ']'.",
    "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    curr_str = \"\"\n    curr_num = 0\n    for c in s:\n        if c.isdigit():\n            curr_num = curr_num * 10 + int(c)\n        elif c == '[':\n            stack.append((curr_str, curr_num))\n            curr_str = \"\"\n            curr_num = 0\n        elif c == ']':\n            prev_str, num = stack.pop()\n            curr_str = prev_str + curr_str * num\n        else:\n            curr_str += c\n    print(curr_str)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    curr_str = \"\"\n    curr_num = 0\n    for c in s:\n        if c.isdigit():\n            curr_num = curr_num * 10 + int(c)\n        elif c == '[':\n            stack.append((curr_str, curr_num))\n            curr_str = \"\"\n            curr_num = 0\n        elif c == ']':\n            prev_str, num = stack.pop()\n            curr_str = prev_str + curr_str * num\n        else:\n            curr_str += c\n    print(curr_str)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-09",
    "levelId": "level-26",
    "title": "Microsoft: Search in Rotated Sorted Array",
    "type": "coding",
    "difficulty": "medium",
    "order": 9,
    "description": "Given an integer array nums sorted in ascending order (with distinct values) that was rotated at an unknown pivot index, and a target value, return the 0-based index of target if found, or -1 otherwise in O(log n).\n\nInput format: N target, then N integers.",
    "whyThisMatters": "Microsoft: Search in Rotated Sorted Array is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Microsoft: Search in Rotated Sorted Array algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "7 0\n4 5 6 7 0 1 2",
        "output": "4",
        "explanation": "0 is at index 4"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-09-tc-1",
        "input": "7 0\n4 5 6 7 0 1 2",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-26-09-tc-2",
        "input": "7 3\n4 5 6 7 0 1 2",
        "expectedOutput": "-1",
        "hidden": false
      },
      {
        "id": "py-prob-26-09-tc-3",
        "input": "1 0\n0",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Binary search checking which half is sorted."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Microsoft: Search in Rotated Sorted Array.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Binary search checking which half is sorted.",
    "pseudocode": "# Solution logic for Microsoft: Search in Rotated Sorted Array\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Binary search checking which half is sorted.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, target = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    l, r = 0, n - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target:\n            print(mid)\n            return\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]:\n                r = mid - 1\n            else:\n                l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]:\n                l = mid + 1\n            else:\n                r = mid - 1\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, target = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    l, r = 0, n - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target:\n            print(mid)\n            return\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]:\n                r = mid - 1\n            else:\n                l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]:\n                l = mid + 1\n            else:\n                r = mid - 1\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  },
  {
    "id": "py-prob-26-10",
    "levelId": "level-26",
    "title": "Meta: Subarray Product Less Than K",
    "type": "coding",
    "difficulty": "medium",
    "order": 10,
    "description": "Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.\n\nInput format: N k, then N integers.",
    "whyThisMatters": "Meta: Subarray Product Less Than K is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-26",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Meta: Subarray Product Less Than K algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 100\n10 5 2 6",
        "output": "8",
        "explanation": "8 subarrays have product < 100"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-26-10-tc-1",
        "input": "4 100\n10 5 2 6",
        "expectedOutput": "8",
        "hidden": false
      },
      {
        "id": "py-prob-26-10-tc-2",
        "input": "3 0\n1 2 3",
        "expectedOutput": "0",
        "hidden": false
      },
      {
        "id": "py-prob-26-10-tc-3",
        "input": "3 10\n1 2 3",
        "expectedOutput": "6",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Sliding window with product: each window [l, r] adds r - l + 1 subarrays."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Meta: Subarray Product Less Than K.",
      "Identify whether an advanced data structure or algorithmic pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Sliding window with product: each window [l, r] adds r - l + 1 subarrays.",
    "pseudocode": "# Solution logic for Meta: Subarray Product Less Than K\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Sliding window with product: each window [l, r] adds r - l + 1 subarrays.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    if k <= 1:\n        print(0)\n        return\n    prod = 1\n    ans = 0\n    l = 0\n    for r in range(n):\n        prod *= nums[r]\n        while prod >= k and l <= r:\n            prod //= nums[l]\n            l += 1\n        ans += r - l + 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    if k <= 1:\n        print(0)\n        return\n    prod = 1\n    ans = 0\n    l = 0\n    for r in range(n):\n        prod *= nums[r]\n        while prod >= k and l <= r:\n            prod //= nums[l]\n            l += 1\n        ans += r - l + 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-26",
      "medium"
    ]
  }
];
