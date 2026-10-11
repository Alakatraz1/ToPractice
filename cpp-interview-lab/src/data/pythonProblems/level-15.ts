import { Problem } from '../types';

export const pyLevel15Problems: Problem[] = [
    {
        "id": "py-prob-15-01",
        "levelId": "py-level-15",
        "title": "Valid Parentheses",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "LeetCode #20 Valid Parentheses.\nGiven a string `S` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`:\nDetermine if the input string is valid.\nAn input string is valid if open brackets are closed by the same type of brackets in the correct order.\nPrint `True` if valid, else `False`.",
        "whyThisMatters": "Valid Parentheses using a stack is universally the #1 asked stack interview question.",
        "concepts": [
            "stack",
            "parentheses matching",
            "lifo"
        ],
        "prerequisites": [
            "stacks"
        ],
        "learningObjectives": [
            "Use a stack to validate matching pairs"
        ],
        "constraints": [
            "Brackets string"
        ],
        "examples": [
            {
                "input": "()[]{}",
                "output": "True"
            },
            {
                "input": "(]",
                "output": "False"
            },
            {
                "input": "([)]",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "()[]{}",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "(]",
                "expectedOutput": "False",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "([)]",
                "expectedOutput": "False",
                "hidden": false
            },
            {
                "id": "tc4",
                "input": "{[]}",
                "expectedOutput": "True",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Validate parentheses with stack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "mapping = {')': '(', '}': '{', ']': '['}. Push open brackets. For close brackets, pop and verify."
        ],
        "howToThink": [
            "LIFO stack: the most recently opened bracket must be the first one closed."
        ],
        "approach": "Use a list as stack.",
        "pseudocode": "stack = []\nmapping = {')': '(', '}': '{', ']': '['}\nfor ch in s:\n    if ch in mapping:\n        if not stack or stack.pop() != mapping[ch]: print('False'); return\n    else: stack.append(ch)\nprint(len(stack) == 0)",
        "explanation": "Pushes openers, pops and validates closers in O(N) time.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for ch in s:\n        if ch in mapping:\n            if not stack or stack.pop() != mapping[ch]:\n                print('False')\n                return\n        else:\n            stack.append(ch)\n    print(len(stack) == 0)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to check if stack is empty at the end (e.g. unclosed '(')"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "stack",
            "essential"
        ]
    },
    {
        "id": "py-prob-15-02",
        "levelId": "py-level-15",
        "title": "Min Stack Design",
        "type": "coding",
        "difficulty": "medium",
        "order": 2,
        "description": "LeetCode #155 Min Stack.\nDesign a stack that supports push, pop, top, and retrieving the minimum element in `O(1)` time.\n\nInput format: Sequence of commands:\n- `push X`\n- `pop`\n- `getMin` (prints the current minimum on a new line)\nProcess all commands and output the getMin results.",
        "whyThisMatters": "Pairing a data stack with a min-tracker stack in O(1) time.",
        "concepts": [
            "min stack",
            "o(1) minimum",
            "stack design"
        ],
        "prerequisites": [
            "stacks"
        ],
        "learningObjectives": [
            "Design a stack with O(1) getMin using companion stack"
        ],
        "constraints": [
            "Commands valid"
        ],
        "examples": [
            {
                "input": "push -2\npush 0\npush -3\ngetMin\npop\ngetMin",
                "output": "-3\n-2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "push -2\npush 0\npush -3\ngetMin\npop\ngetMin",
                "expectedOutput": "-3\n-2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Implement MinStack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Maintain stack and min_stack. On push x: min_stack.append(min(x, min_stack[-1] if min_stack else x))."
        ],
        "howToThink": [
            "Each element pushed carries with it the minimum value seen up to that point."
        ],
        "approach": "Dual stack tracking.",
        "pseudocode": "stack = []\nmin_stack = []\nfor line in lines:\n    parts = line.split()\n    if parts[0] == 'push':\n        v = int(parts[1])\n        stack.append(v)\n        min_stack.append(min(v, min_stack[-1] if min_stack else v))\n    elif parts[0] == 'pop':\n        stack.pop(); min_stack.pop()\n    elif parts[0] == 'getMin':\n        print(min_stack[-1])",
        "explanation": "All four operations execute in strictly O(1) time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    stack = []\n    min_stack = []\n    for line in lines:\n        if not line.strip():\n            continue\n        parts = line.split()\n        cmd = parts[0]\n        if cmd == 'push':\n            val = int(parts[1])\n            stack.append(val)\n            min_val = min(val, min_stack[-1]) if min_stack else val\n            min_stack.append(min_val)\n        elif cmd == 'pop':\n            if stack:\n                stack.pop()\n                min_stack.pop()\n        elif cmd == 'getMin':\n            if min_stack:\n                print(min_stack[-1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Recalculating min with min(stack) which takes O(N) instead of O(1)"
        ],
        "timeComplexity": "O(1) per op",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "stack",
            "system design"
        ]
    },
    {
        "id": "py-prob-15-03",
        "levelId": "py-level-15",
        "title": "Evaluate Reverse Polish Notation",
        "type": "coding",
        "difficulty": "medium",
        "order": 3,
        "description": "LeetCode #150 Evaluate Reverse Polish Notation.\nEvaluate the value of an arithmetic expression in Reverse Polish Notation (postfix notation).\nValid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.\nDivision between integers should truncate toward zero (`int(a / b)` in Python).\nPrint the evaluated integer.",
        "whyThisMatters": "Compiler expression evaluators and HP calculators use postfix stacks.",
        "concepts": [
            "rpn",
            "postfix evaluation",
            "stack"
        ],
        "prerequisites": [
            "stacks"
        ],
        "learningObjectives": [
            "Evaluate postfix expressions using an operand stack"
        ],
        "constraints": [
            "Valid RPN expression"
        ],
        "examples": [
            {
                "input": "2 1 + 3 *",
                "output": "9"
            },
            {
                "input": "4 13 5 / +",
                "output": "6"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 1 + 3 *",
                "expectedOutput": "9",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4 13 5 / +",
                "expectedOutput": "6",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Evaluate RPN\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "For number, push to stack. For operator, pop b then pop a, apply op, push int(a / b) etc."
        ],
        "howToThink": [
            "Numbers go on stack. Operators consume top 2 operands."
        ],
        "approach": "Operand stack traversal.",
        "pseudocode": "stack = []\nfor t in tokens:\n    if t in '+-*/':\n        b, a = stack.pop(), stack.pop()\n        if t == '+': stack.append(a + b)\n        elif t == '-': stack.append(a - b)\n        elif t == '*': stack.append(a * b)\n        elif t == '/': stack.append(int(a / b))\n    else: stack.append(int(t))\nprint(stack[0])",
        "explanation": "int(a / b) truncates towards zero in Python (unlike a // b which truncates to -infinity).",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    stack = []\n    for t in tokens:\n        if t in '+-*/':\n            b = stack.pop()\n            a = stack.pop()\n            if t == '+': stack.append(a + b)\n            elif t == '-': stack.append(a - b)\n            elif t == '*': stack.append(a * b)\n            elif t == '/': stack.append(int(a / b))\n        else:\n            stack.append(int(t))\n    print(stack[0])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Popping order inverted: first pop is b (right operand), second pop is a (left operand)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "stack",
            "expressions"
        ]
    },
    {
        "id": "py-prob-15-04",
        "levelId": "py-level-15",
        "title": "Daily Temperatures (Monotonic Stack)",
        "type": "coding",
        "difficulty": "medium",
        "order": 4,
        "description": "LeetCode #739 Daily Temperatures.\nGiven an array of integers `temperatures` representing daily temperatures:\nReturn an array `answer` such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature.\nIf there is no future day for which this is possible, keep `answer[i] == 0`.\nPrint `answer` space-separated.",
        "whyThisMatters": "Monotonic Stack is the single most tested advanced stack pattern in technical assessments.",
        "concepts": [
            "monotonic stack",
            "daily temperatures",
            "next greater element"
        ],
        "prerequisites": [
            "stacks"
        ],
        "learningObjectives": [
            "Implement monotonic decreasing stack for next greater element"
        ],
        "constraints": [
            "N <= 10^5"
        ],
        "examples": [
            {
                "input": "73 74 75 71 69 72 76 73",
                "output": "1 1 4 2 1 1 0 0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "73 74 75 71 69 72 76 73",
                "expectedOutput": "1 1 4 2 1 1 0 0",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "30 40 50 60",
                "expectedOutput": "1 1 1 0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    temps = list(map(int, sys.stdin.read().split()))\n    # Monotonic stack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "stack = []. Stores indices. For curr_idx, t in enumerate(temps): while stack and temps[stack[-1]] < t: prev_idx = stack.pop(); ans[prev_idx] = curr_idx - prev_idx. stack.append(curr_idx)."
        ],
        "howToThink": [
            "Maintain indices of temperatures waiting for a warmer day. Pop as soon as warmer day arrives."
        ],
        "approach": "Monotonic decreasing stack of indices.",
        "pseudocode": "ans = [0] * len(temps)\nstack = []\nfor i, t in enumerate(temps):\n    while stack and temps[stack[-1]] < t:\n        prev = stack.pop()\n        ans[prev] = i - prev\n    stack.append(i)\nprint(*ans)",
        "explanation": "Each index pushed and popped at most once, running in strictly linear O(N) time.",
        "solution": "import sys\n\ndef solve():\n    temps = list(map(int, sys.stdin.read().split()))\n    if not temps:\n        return\n    ans = [0] * len(temps)\n    stack = []\n    for i, t in enumerate(temps):\n        while stack and temps[stack[-1]] < t:\n            prev = stack.pop()\n            ans[prev] = i - prev\n        stack.append(i)\n    print(*ans)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Quadratic O(N^2) double loop causing TLE"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "monotonic stack",
            "must-know"
        ]
    },
    {
        "id": "py-prob-15-05",
        "levelId": "py-level-15",
        "title": "Next Greater Element I",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #496 Next Greater Element I.\nGiven array `nums` of distinct integers:\nFor each element, find the first greater element to its right. If none exists, output `-1` for that element.\nPrint the next greater values space-separated.",
        "whyThisMatters": "Direct monotonic stack mapping stored in a dictionary.",
        "concepts": [
            "next greater element",
            "monotonic stack"
        ],
        "prerequisites": [
            "monotonic stack"
        ],
        "learningObjectives": [
            "Map next greater elements in O(N)"
        ],
        "constraints": [
            "Distinct integers"
        ],
        "examples": [
            {
                "input": "4 5 2 25",
                "output": "5 25 25 -1"
            },
            {
                "input": "13 7 6 12",
                "output": "-1 12 12 -1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "4 5 2 25",
                "expectedOutput": "5 25 25 -1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "13 7 6 12",
                "expectedOutput": "-1 12 12 -1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Next greater element\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "stack = []. nxt = {x: -1 for x in nums}. For x in nums: while stack and stack[-1] < x: nxt[stack.pop()] = x. stack.append(x)."
        ],
        "howToThink": [
            "When a bigger element x arrives, it resolves the next greater element for all smaller items on the stack."
        ],
        "approach": "Monotonic stack + dictionary lookup.",
        "pseudocode": "nxt = {x: -1 for x in nums}\nstack = []\nfor x in nums:\n    while stack and stack[-1] < x: nxt[stack.pop()] = x\n    stack.append(x)\nprint(*(nxt[x] for x in nums))",
        "explanation": "One-pass O(N) evaluation.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    nxt = {x: -1 for x in nums}\n    stack = []\n    for x in nums:\n        while stack and stack[-1] < x:\n            nxt[stack.pop()] = x\n        stack.append(x)\n    print(*(nxt[x] for x in nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Leaving remaining stack elements without -1 mapping"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "monotonic stack"
        ]
    },
    {
        "id": "py-prob-15-06",
        "levelId": "py-level-15",
        "title": "FIFO Queue with collections.deque",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "In Python, using `list.pop(0)` takes `O(N)` linear time because all remaining elements must shift left!\nFor an efficient FIFO queue, use `collections.deque` where `append()` and `popleft()` are strictly `O(1)`.\n\n**Task:**\nProcess commands on separate lines:\n- `enqueue X`: add X to queue\n- `dequeue`: remove and print the front element\nIf dequeue on empty queue, print `EMPTY`.",
        "whyThisMatters": "Using `list.pop(0)` in BFS is one of the most common beginner performance blunders; `collections.deque` is the professional standard.",
        "concepts": [
            "deque",
            "fifo queue",
            "collections.deque"
        ],
        "prerequisites": [
            "queues"
        ],
        "learningObjectives": [
            "Use collections.deque for O(1) queue operations"
        ],
        "constraints": [
            "Commands valid"
        ],
        "examples": [
            {
                "input": "enqueue 10\nenqueue 20\ndequeue\nenqueue 30\ndequeue\ndequeue\ndequeue",
                "output": "10\n20\n30\nEMPTY"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "enqueue 10\nenqueue 20\ndequeue\nenqueue 30\ndequeue\ndequeue\ndequeue",
                "expectedOutput": "10\n20\n30\nEMPTY",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Implement queue with deque\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "q = deque(). q.append(x) and q.popleft()."
        ],
        "howToThink": [
            "deque offers O(1) appends and pops from both ends."
        ],
        "approach": "Use collections.deque.",
        "pseudocode": "q = deque()\nfor line in lines:\n    parts = line.split()\n    if parts[0] == 'enqueue': q.append(parts[1])\n    elif parts[0] == 'dequeue': print(q.popleft() if q else 'EMPTY')",
        "explanation": "Avoids O(N) list shifts.",
        "solution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    q = deque()\n    for line in lines:\n        if not line.strip():\n            continue\n        parts = line.split()\n        if parts[0] == 'enqueue':\n            q.append(parts[1])\n        elif parts[0] == 'dequeue':\n            if q:\n                print(q.popleft())\n            else:\n                print('EMPTY')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using list.pop(0) in performance-sensitive contexts"
        ],
        "timeComplexity": "O(1) per op",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "queue",
            "deque",
            "must-know"
        ]
    },
    {
        "id": "py-prob-15-07",
        "levelId": "py-level-15",
        "title": "Implement Queue using Two Stacks",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #232 Implement Queue using Stacks.\nImplement a FIFO queue using only two LIFO stacks (`in_stack` and `out_stack`).\n\nCommands on separate lines:\n- `push X`\n- `pop` (prints the popped element)\nProcess commands and print outputs.",
        "whyThisMatters": "Amortized analysis classic: elements are transferred to out_stack only when out_stack is empty, yielding O(1) amortized time.",
        "concepts": [
            "two stacks",
            "amortized analysis",
            "queue"
        ],
        "prerequisites": [
            "stacks",
            "queues"
        ],
        "learningObjectives": [
            "Simulate queue with two stacks in O(1) amortized time"
        ],
        "constraints": [
            "Commands valid"
        ],
        "examples": [
            {
                "input": "push 1\npush 2\npop\npush 3\npop\npop",
                "output": "1\n2\n3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "push 1\npush 2\npop\npush 3\npop\npop",
                "expectedOutput": "1\n2\n3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Queue using two stacks\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Push to in_stack. When popping: if out_stack empty, while in_stack: out_stack.append(in_stack.pop()). Return out_stack.pop()."
        ],
        "howToThink": [
            "Transferring in_stack to out_stack reverses order, making LIFO behave as FIFO."
        ],
        "approach": "Two stacks with lazy transfer.",
        "pseudocode": "in_st, out_st = [], []\nfor line in lines:\n    parts = line.split()\n    if parts[0] == 'push': in_st.append(parts[1])\n    elif parts[0] == 'pop':\n        if not out_st:\n            while in_st: out_st.append(in_st.pop())\n        print(out_st.pop())",
        "explanation": "Each item pushed and popped at most twice overall (O(1) amortized).",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    in_st, out_st = [], []\n    for line in lines:\n        if not line.strip():\n            continue\n        parts = line.split()\n        if parts[0] == 'push':\n            in_st.append(parts[1])\n        elif parts[0] == 'pop':\n            if not out_st:\n                while in_st:\n                    out_st.append(in_st.pop())\n            print(out_st.pop())\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Transferring back and forth on every push/pop, degrading to O(N)"
        ],
        "timeComplexity": "O(1) amortized",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "queue",
            "stacks"
        ]
    },
    {
        "id": "py-prob-15-08",
        "levelId": "py-level-15",
        "title": "Remove All Adjacent Duplicates in String",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "LeetCode #1047.\nYou are given a string `S` consisting of lowercase English letters.\nA duplicate removal consists of choosing two adjacent and equal letters and removing them.\nWe repeatedly make duplicate removals on `S` until we no longer can.\nPrint the final string.",
        "whyThisMatters": "Stack eliminates nested loop string deletions.",
        "concepts": [
            "stack",
            "string cancellation"
        ],
        "prerequisites": [
            "stacks"
        ],
        "learningObjectives": [
            "Cancel adjacent duplicates using stack"
        ],
        "constraints": [
            "Lowercase letters"
        ],
        "examples": [
            {
                "input": "abbaca",
                "output": "ca"
            },
            {
                "input": "azxxzy",
                "output": "ay"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "abbaca",
                "expectedOutput": "ca",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "azxxzy",
                "expectedOutput": "ay",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Remove adjacent duplicates with stack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "stack = []. For c in s: if stack and stack[-1] == c: stack.pop(); else: stack.append(c)."
        ],
        "howToThink": [
            "If current char matches top of stack, pop. Else push."
        ],
        "approach": "Character stack.",
        "pseudocode": "stack = []\nfor c in s:\n    if stack and stack[-1] == c: stack.pop()\n    else: stack.append(c)\nprint(''.join(stack))",
        "explanation": "Simulates recursive duplicate elimination in one linear pass.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    stack = []\n    for c in s:\n        if stack and stack[-1] == c:\n            stack.pop()\n        else:\n            stack.append(c)\n    print(''.join(stack))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Repeated string slicing in a while loop costing O(N^2)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "stack",
            "strings"
        ]
    },
    {
        "id": "py-prob-15-09",
        "levelId": "py-level-15",
        "title": "Asteroid Collision",
        "type": "coding",
        "difficulty": "medium",
        "order": 9,
        "description": "LeetCode #735 Asteroid Collision.\nWe are given an array `asteroids` of integers representing asteroids in a row.\nFor each asteroid, absolute value represents size, and sign represents direction (`+` right, `-` left).\nFind out the state of the asteroids after all collisions.\n- If two asteroids meet, the smaller one explodes.\n- If both are the same size, both explode.\n- Two asteroids moving in the same direction never meet.\nPrint remaining asteroids space-separated.",
        "whyThisMatters": "Simulates physical collision physics using stack state.",
        "concepts": [
            "asteroid collision",
            "stack",
            "simulation"
        ],
        "prerequisites": [
            "stacks"
        ],
        "learningObjectives": [
            "Simulate collision cancellation conditions with stack"
        ],
        "constraints": [
            "Non-zero integers"
        ],
        "examples": [
            {
                "input": "5 10 -5",
                "output": "5 10"
            },
            {
                "input": "8 -8",
                "output": ""
            },
            {
                "input": "10 2 -5",
                "output": "10"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5 10 -5",
                "expectedOutput": "5 10",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "8 -8",
                "expectedOutput": "",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "10 2 -5",
                "expectedOutput": "10",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    asteroids = list(map(int, sys.stdin.read().split()))\n    # Asteroid collisions\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Collision only happens when top > 0 and current < 0."
        ],
        "howToThink": [
            "While top > 0 and current < 0: compare sizes and explode appropriately."
        ],
        "approach": "Collision loop on stack top.",
        "pseudocode": "stack = []\nfor ast in asteroids:\n    while stack and ast < 0 < stack[-1]:\n        if stack[-1] < -ast: stack.pop(); continue\n        elif stack[-1] == -ast: stack.pop()\n        break\n    else: stack.append(ast)\nprint(*stack)",
        "explanation": "Only opposite direction collisions (right-mover meeting left-mover) cause conflict.",
        "solution": "import sys\n\ndef solve():\n    asteroids = list(map(int, sys.stdin.read().split()))\n    if not asteroids:\n        return\n    stack = []\n    for ast in asteroids:\n        while stack and ast < 0 < stack[-1]:\n            if stack[-1] < -ast:\n                stack.pop()\n                continue\n            elif stack[-1] == -ast:\n                stack.pop()\n            break\n        else:\n            stack.append(ast)\n    print(*stack)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Colliding when top < 0 and current > 0 (they move away from each other)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "stack",
            "simulation"
        ]
    },
    {
        "id": "py-prob-15-10",
        "levelId": "py-level-15",
        "title": "Simplify Unix Path",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "LeetCode #71 Simplify Path.\nGiven an absolute Unix-style file path `path`:\nTransform it into the simplified canonical path.\nRules:\n- Single period `.` refers to current directory (ignore).\n- Double period `..` moves up one directory (pop from stack).\n- Multiple consecutive slashes `//` treated as single slash `/`.\nPrint the canonical path.",
        "whyThisMatters": "Real-world operating system file path normalization.",
        "concepts": [
            "simplify path",
            "stack",
            "string parsing"
        ],
        "prerequisites": [
            "stacks",
            "strings"
        ],
        "learningObjectives": [
            "Normalize hierarchical paths with a directory stack"
        ],
        "constraints": [
            "Valid path string"
        ],
        "examples": [
            {
                "input": "/home//foo/",
                "output": "/home/foo"
            },
            {
                "input": "/a/./b/../../c/",
                "output": "/c"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "/home//foo/",
                "expectedOutput": "/home/foo",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "/a/./b/../../c/",
                "expectedOutput": "/c",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "/../",
                "expectedOutput": "/",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    # Simplify path\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "tokens = path.split('/'). Ignore '' and '.'. On '..', pop if stack else pass. Otherwise push."
        ],
        "howToThink": [
            "Split on '/', maintain directory names in a stack."
        ],
        "approach": "Tokenize on slash and process tokens.",
        "pseudocode": "stack = []\nfor part in path.split('/'):\n    if part in ('', '.'): continue\n    elif part == '..':\n        if stack: stack.pop()\n    else: stack.append(part)\nprint('/' + '/'.join(stack))",
        "explanation": "Simulates directory navigation in O(N) time.",
        "solution": "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    stack = []\n    for part in path.split('/'):\n        if part in ('', '.'):\n            continue\n        elif part == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(part)\n    print('/' + '/'.join(stack))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Popping on root directory when stack is empty (should stay at root)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "stack",
            "strings",
            "must-know"
        ]
    }
];
