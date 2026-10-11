import { Problem } from '../types';

export const level15Problems: Problem[] = [
    {
        id: 'prob-15-01',
        levelId: 'level-15',
        title: 'Stack Basics (LIFO)',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `A **Stack** is a Last-In-First-Out (LIFO) data structure. Like a stack of plates, you can only add or remove from the top.\n\n**Task:**\nYou are given a sequence of integers. If the integer is non-zero, \`push\` it onto the stack. If it is \`0\`, \`pop\` the top element off the stack (if it's not empty). Finally, print the element currently at the top of the stack (print \`-1\` if empty).`,
        whyThisMatters: 'Stacks are used for tracking state, parsing expressions, and Depth-First Search (DFS).',
        concepts: ['stack', 'LIFO'],
        prerequisites: ['stl'],
        learningObjectives: ['Use `std::stack`', 'Understand `push()`, `pop()`, `top()`, `empty()`'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n10 20 0 30 0', output: '10', explanation: 'Push 10, Push 20, Pop (20), Push 30, Pop (30). Top is 10.' }],
        testCases: [
            { id: 'tc1', input: '5\n10 20 0 30 0', expectedOutput: '10', hidden: false },
            { id: 'tc2', input: '3\n5 0 0', expectedOutput: '-1', hidden: false },
            { id: 'tc3', input: '1\n42', expectedOutput: '42', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    stack<int> st;\n    \n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        // Implement push and pop logic\n    }\n    \n    // Print top or -1\n    return 0;\n}`,
        hints: ['Always check `!st.empty()` before calling `st.pop()` or `st.top()`.'],
        howToThink: [],
        approach: 'Simulate stack operations',
        pseudocode: 'for x in input:\n    if x != 0: st.push(x)\n    else if !st.empty(): st.pop()\nif st.empty() print -1\nelse print st.top()',
        explanation: 'O(1) time per operation.',
        solution: `#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    stack<int> st;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        if (x != 0) st.push(x);\n        else if (!st.empty()) st.pop();\n    }\n    if(st.empty()) cout << -1;\n    else cout << st.top();\n    return 0;\n}`,
        commonMistakes: ['Calling `pop()` on an empty stack crashes the program.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'low', tags: ['stack']
    },
    {
        id: 'prob-15-02',
        levelId: 'level-15',
        title: 'Valid Parentheses',
        type: 'coding',
        difficulty: 'medium',
        order: 2,
        description: `**Task:**\nGiven a string containing only the characters \`(\`, \`)\`, \`{\`, \`}\`, \`[\` and \`]\`, determine if the input string is valid.\n\nValid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n\nPrint \`Valid\` or \`Invalid\`.`,
        whyThisMatters: 'This is the most famous Stack question. It tests if you can use a stack to resolve nested dependencies.',
        concepts: ['stack', 'parsing'],
        prerequisites: ['stack', 'strings'],
        learningObjectives: ['Use a stack to validate structural nesting'],
        constraints: ['Length <= 1000'],
        examples: [{ input: '{[()]}', output: 'Valid' }, { input: '{[(])}', output: 'Invalid' }],
        testCases: [
            { id: 'tc1', input: '{[()]}', expectedOutput: 'Valid', hidden: false },
            { id: 'tc2', input: '{[(])}', expectedOutput: 'Invalid', hidden: false },
            { id: 'tc3', input: '(', expectedOutput: 'Invalid', hidden: false },
            { id: 'tc4', input: ']', expectedOutput: 'Invalid', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nint main() {\n    string s; cin >> s;\n    stack<char> st;\n    \n    // Loop through characters in s\n    \n    // If valid, stack should be empty at the end\n    return 0;\n}`,
        hints: ['If it is an opening bracket, push it.', 'If it is a closing bracket, check if the stack is empty. If it is, return Invalid.', 'If not empty, check if `st.top()` is the matching opening bracket. If yes, `pop()`. If no, return Invalid.'],
        howToThink: ['A closing bracket MUST match the MOST RECENTLY opened, unclosed bracket. A stack keeps the most recent items at the top!'],
        approach: 'Push open brackets. For close brackets, verify match with top of stack.',
        pseudocode: 'for c in s:\n    if c is open:\n        st.push(c)\n    else:\n        if st.empty() return Invalid\n        if st.top() matches c:\n            st.pop()\n        else return Invalid\nif st.empty() return Valid else return Invalid',
        explanation: 'By pushing open brackets and popping them when a matching close bracket appears, we guarantee proper nesting.',
        solution: `#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nbool matches(char open, char close) {\n    return (open == '(' && close == ')') ||\n           (open == '{' && close == '}') ||\n           (open == '[' && close == ']');\n}\n\nint main() {\n    string s; cin >> s;\n    stack<char> st;\n    for(char c : s) {\n        if (c == '(' || c == '{' || c == '[') {\n            st.push(c);\n        } else {\n            if (st.empty() || !matches(st.top(), c)) {\n                cout << "Invalid";\n                return 0;\n            }\n            st.pop();\n        }\n    }\n    if (st.empty()) cout << "Valid";\n    else cout << "Invalid";\n    return 0;\n}`,
        commonMistakes: ['Forgetting to check if the stack is empty at the end (e.g., string `"((("` is invalid).'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['stack', 'parsing']
    },
    {
        id: 'prob-15-03',
        levelId: 'level-15',
        title: 'Queue Basics (FIFO)',
        type: 'coding',
        difficulty: 'beginner',
        order: 3,
        description: `A **Queue** is a First-In-First-Out (FIFO) data structure. Like a line at a store, the first person to join is the first to leave.\n\n**Task:**\nYou are given a sequence of integers. If the integer is non-zero, \`push\` it into the queue. If it is \`0\`, \`pop\` the front element off (if not empty). Print the element currently at the \`front\` of the queue (or \`-1\` if empty).`,
        whyThisMatters: 'Queues are used in Breadth-First Search (BFS) and scheduling tasks.',
        concepts: ['queue', 'FIFO'],
        prerequisites: ['stl'],
        learningObjectives: ['Use `std::queue`', 'Understand `push()`, `pop()`, `front()`'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n10 20 0 30 0', output: '30' }],
        testCases: [
            { id: 'tc1', input: '5\n10 20 0 30 0', expectedOutput: '30', hidden: false },
            { id: 'tc2', input: '2\n0 0', expectedOutput: '-1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    queue<int> q;\n    \n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        // Implement queue logic\n    }\n    \n    return 0;\n}`,
        hints: ['Very similar to Stack, but use `q.front()` instead of `st.top()`.'],
        howToThink: [],
        approach: 'Simulate queue operations.',
        pseudocode: '',
        explanation: 'O(1) time per operation.',
        solution: `#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    queue<int> q;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        if (x != 0) q.push(x);\n        else if (!q.empty()) q.pop();\n    }\n    if (q.empty()) cout << -1;\n    else cout << q.front();\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'low', tags: ['queue']
    },
{
    "id": "prob-15-03",
    "levelId": "level-15",
    "title": "Min Stack Concept",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Given N operations (1 x for push x, 2 for pop, 3 for getMin). Output the results of getMin.",
    "whyThisMatters": "Tests augmenting data structures with state.",
    "concepts": [
        "stack",
        "state"
    ],
    "prerequisites": [
        "stack"
    ],
    "learningObjectives": [
        "Maintain a parallel state stack"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "6\n1 -2\n1 0\n1 -3\n3\n2\n3",
            "output": "-3\n-2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n1 -2\n1 0\n1 -3\n3\n2\n3",
            "expectedOutput": "-3\n-2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int q; cin >> q;\n    stack<int> st;\n    stack<int> minSt;\n    // Process queries\n    return 0;\n}",
    "hints": [
        "Keep a second stack that only pushes the minimum seen so far."
    ],
    "howToThink": [
        "Every time I push an element, I should also push the minimum element currently in the stack to a parallel stack."
    ],
    "approach": "Parallel min stack.",
    "pseudocode": "if op==1: st.push(x), minSt.push(min(x, minSt.top())).",
    "explanation": "O(1) per operation.",
    "solution": "#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int q; if(!(cin >> q)) return 0;\n    stack<int> st;\n    stack<int> minSt;\n    while(q--) {\n        int type; cin >> type;\n        if(type == 1) {\n            int x; cin >> x;\n            st.push(x);\n            if(minSt.empty() || x <= minSt.top()) minSt.push(x);\n            else minSt.push(minSt.top());\n        } else if(type == 2) {\n            if(!st.empty()) { st.pop(); minSt.pop(); }\n        } else if(type == 3) {\n            if(!minSt.empty()) cout << minSt.top() << \"\\n\";\n        }\n    }\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "stack"
    ]
},
{
    "id": "prob-15-04",
    "levelId": "level-15",
    "title": "Daily Temperatures",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "Given an array of temperatures, for each day output how many days you have to wait until a warmer temperature. If there is no future day, output 0.",
    "whyThisMatters": "Introduction to Monotonic Stack pattern.",
    "concepts": [
        "monotonic stack"
    ],
    "prerequisites": [
        "stack"
    ],
    "learningObjectives": [
        "Use monotonic stack to find next greater element"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "8\n73 74 75 71 69 72 76 73",
            "output": "1 1 4 2 1 1 0 0"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "8\n73 74 75 71 69 72 76 73",
            "expectedOutput": "1 1 4 2 1 1 0 0",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> t(n); for(int i=0;i<n;i++) cin >> t[i];\n    // logic\n    return 0;\n}",
    "hints": [
        "Store INDICES in the stack, not the temperatures."
    ],
    "howToThink": [
        "While the current temp is greater than the temp at the index on top of the stack, we found a warmer day for that stack element!"
    ],
    "approach": "Monotonic decreasing stack.",
    "pseudocode": "for i in 0..n: while stack not empty and t[i] > t[stack.top()]: ans[stack.pop()] = i - stack.top(). stack.push(i)",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> t(n);\n    for(int i=0; i<n; i++) cin >> t[i];\n    vector<int> ans(n, 0);\n    stack<int> st;\n    for(int i=0; i<n; i++) {\n        while(!st.empty() && t[i] > t[st.top()]) {\n            ans[st.top()] = i - st.top();\n            st.pop();\n        }\n        st.push(i);\n    }\n    for(int x : ans) cout << x << \" \";\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "stack",
        "monotonic"
    ]
},
{
    "id": "prob-15-109",
    "levelId": "level-15",
    "title": "Valid Parentheses",
    "type": "coding",
    "difficulty": "medium",
    "order": 109,
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Print 1 or 0.",
    "whyThisMatters": "Crucial industry concept.",
    "concepts": [
        "algo"
    ],
    "prerequisites": [
        "basics"
    ],
    "learningObjectives": [
        "Mastery"
    ],
    "constraints": [
        "N<=1000"
    ],
    "examples": [
        {
            "input": "()[]{}",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "()[]{}",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Stack"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<string>\n#include<stack>\nusing namespace std; int main(){ string s; if(cin>>s){stack<char> st; for(char c:s){if(c=='('||c=='{'||c=='[') st.push(c); else {if(st.empty()) {cout<<0; return 0;} char t=st.top(); st.pop(); if(c==')'&&t!='(' || c=='}'&&t!='{' || c==']'&&t!='['){cout<<0; return 0;}}} cout<<(st.empty()?1:0);} return 0; }",
    "pythonSolution": "s=input(); st=[]\nfor c in s:\n if c in '({[': st.append(c)\n else:\n  if not st: print(0); exit()\n  t=st.pop()\n  if (c==')' and t!='(') or (c=='}' and t!='{') or (c==']' and t!='['): print(0); exit()\nprint(1 if not st else 0)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
    "id": "prob-15-110",
    "levelId": "level-15",
    "title": "Evaluate Reverse Polish Notation",
    "type": "coding",
    "difficulty": "medium",
    "order": 110,
    "description": "Evaluate the value of an arithmetic expression in RPN. Valid operators are +, -, *, /. Input: N strings.",
    "whyThisMatters": "Crucial industry concept.",
    "concepts": [
        "algo"
    ],
    "prerequisites": [
        "basics"
    ],
    "learningObjectives": [
        "Mastery"
    ],
    "constraints": [
        "N<=1000"
    ],
    "examples": [
        {
            "input": "5\n2 1 + 3 *",
            "output": "9"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "5\n2 1 + 3 *",
            "expectedOutput": "9",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Stack"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<string>\n#include<stack>\nusing namespace std; int main(){ int n; if(cin>>n){stack<long long> st; for(int i=0;i<n;i++){string s; cin>>s; if(s==\"+\"||s==\"-\"||s==\"*\"||s==\"/\"){long long b=st.top(); st.pop(); long long a=st.top(); st.pop(); if(s==\"+\") st.push(a+b); if(s==\"-\") st.push(a-b); if(s==\"*\") st.push(a*b); if(s==\"/\") st.push(a/b);}else st.push(stoll(s));} cout<<st.top();} return 0; }",
    "pythonSolution": "n=int(input()); t=input().split(); st=[]\nfor s in t:\n if s in '+-*/':\n  b=st.pop(); a=st.pop()\n  if s=='+': st.append(a+b)\n  elif s=='-': st.append(a-b)\n  elif s=='*': st.append(a*b)\n  elif s=='/': st.append(int(a/b))\n else: st.append(int(s))\nprint(st[0])",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
  "id": "prob-15-512",
  "levelId": "level-15",
  "title": "Daily Temperatures",
  "type": "coding",
  "difficulty": "medium",
  "order": 512,
  "description": "Find how many days to wait for a warmer temperature.",
  "whyThisMatters": "Industry standard.",
  "concepts": [
    "algo"
  ],
  "prerequisites": [
    "basics"
  ],
  "learningObjectives": [
    "Mastery"
  ],
  "constraints": [
    "N<=1000"
  ],
  "examples": [
    {
      "input": "4\n73 74 75 71",
      "output": "1 1 0 0"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n73 74 75 71",
      "expectedOutput": "1 1 0 0",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
  "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
  "hints": [
    "Think step by step."
  ],
  "howToThink": [
    "Analyze."
  ],
  "approach": "Optimal.",
  "pseudocode": "Code.",
  "explanation": "O(N) time.",
  "solution": "#include<iostream>\n#include<vector>\n#include<stack>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n), ans(n,0); stack<int> s; for(int i=0;i<n;i++){cin>>a[i]; while(!s.empty()&&a[i]>a[s.top()]){ans[s.top()]=i-s.top(); s.pop();} s.push(i);} for(int x:ans) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); ans=[0]*n; s=[]\nfor i,x in enumerate(a):\n while s and x>a[s[-1]]:\n  ans[s[-1]]=i-s[-1]; s.pop()\n s.append(i)\nprint(*ans)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-15-513",
  "levelId": "level-15",
  "title": "Min Stack",
  "type": "coding",
  "difficulty": "medium",
  "order": 513,
  "description": "Design a stack that supports getMin() in O(1). Output getMin after pushing given N elements, then pop, then getMin.",
  "whyThisMatters": "Industry standard.",
  "concepts": [
    "algo"
  ],
  "prerequisites": [
    "basics"
  ],
  "learningObjectives": [
    "Mastery"
  ],
  "constraints": [
    "N<=1000"
  ],
  "examples": [
    {
      "input": "4\n-2 0 -3 5",
      "output": "-3 -3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n-2 0 -3 5",
      "expectedOutput": "-3 -3",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
  "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
  "hints": [
    "Think step by step."
  ],
  "howToThink": [
    "Analyze."
  ],
  "approach": "Optimal.",
  "pseudocode": "Code.",
  "explanation": "O(N) time.",
  "solution": "#include<iostream>\n#include<vector>\n#include<stack>\nusing namespace std; int main(){ int n; if(cin>>n){stack<pair<int,int>> s; for(int i=0;i<n;i++){int x; cin>>x; int m=s.empty()?x:min(x,s.top().second); s.push({x,m});} cout<<s.top().second<<' '; s.pop(); cout<<s.top().second;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); s=[]\nfor x in a:\n m=x if not s else min(x,s[-1][1])\n s.append((x,m))\nprint(f'{s[-1][1]} {s[-2][1]}')",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-15-514",
  "levelId": "level-15",
  "title": "Next Greater Element I",
  "type": "coding",
  "difficulty": "medium",
  "order": 514,
  "description": "Find next greater element.",
  "whyThisMatters": "Industry standard.",
  "concepts": [
    "algo"
  ],
  "prerequisites": [
    "basics"
  ],
  "learningObjectives": [
    "Mastery"
  ],
  "constraints": [
    "N<=1000"
  ],
  "examples": [
    {
      "input": "4\n1 3 4 2",
      "output": "3 4 -1 -1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 3 4 2",
      "expectedOutput": "3 4 -1 -1",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
  "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
  "hints": [
    "Think step by step."
  ],
  "howToThink": [
    "Analyze."
  ],
  "approach": "Optimal.",
  "pseudocode": "Code.",
  "explanation": "O(N) time.",
  "solution": "#include<iostream>\n#include<vector>\n#include<stack>\n#include<unordered_map>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; stack<int> s; unordered_map<int,int> m; for(int x:a){while(!s.empty()&&x>s.top()){m[s.top()]=x; s.pop();} s.push(x);} for(int x:a) cout<<(m.count(x)?m[x]:-1)<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); s=[]; m={}\nfor x in a:\n while s and x>s[-1]: m[s.pop()]=x\n s.append(x)\nprint(*(m.get(x,-1) for x in a))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
}
,
{
  "id": "prob-15-512",
  "levelId": "level-15",
  "title": "Daily Temperatures",
  "type": "coding",
  "difficulty": "medium",
  "order": 512,
  "description": "Find how many days to wait for a warmer temperature.",
  "whyThisMatters": "Industry standard.",
  "concepts": [
    "algo"
  ],
  "prerequisites": [
    "basics"
  ],
  "learningObjectives": [
    "Mastery"
  ],
  "constraints": [
    "N<=1000"
  ],
  "examples": [
    {
      "input": "4\n73 74 75 71",
      "output": "1 1 0 0"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n73 74 75 71",
      "expectedOutput": "1 1 0 0",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
  "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
  "hints": [
    "Think step by step."
  ],
  "howToThink": [
    "Analyze."
  ],
  "approach": "Optimal.",
  "pseudocode": "Code.",
  "explanation": "O(N) time.",
  "solution": "#include<iostream>\n#include<vector>\n#include<stack>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n), ans(n,0); stack<int> s; for(int i=0;i<n;i++){cin>>a[i]; while(!s.empty()&&a[i]>a[s.top()]){ans[s.top()]=i-s.top(); s.pop();} s.push(i);} for(int x:ans) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); ans=[0]*n; s=[]\nfor i,x in enumerate(a):\n while s and x>a[s[-1]]:\n  ans[s[-1]]=i-s[-1]; s.pop()\n s.append(i)\nprint(*ans)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-15-513",
  "levelId": "level-15",
  "title": "Min Stack",
  "type": "coding",
  "difficulty": "medium",
  "order": 513,
  "description": "Design a stack that supports getMin() in O(1). Output getMin after pushing given N elements, then pop, then getMin.",
  "whyThisMatters": "Industry standard.",
  "concepts": [
    "algo"
  ],
  "prerequisites": [
    "basics"
  ],
  "learningObjectives": [
    "Mastery"
  ],
  "constraints": [
    "N<=1000"
  ],
  "examples": [
    {
      "input": "4\n-2 0 -3 5",
      "output": "-3 -3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n-2 0 -3 5",
      "expectedOutput": "-3 -3",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
  "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
  "hints": [
    "Think step by step."
  ],
  "howToThink": [
    "Analyze."
  ],
  "approach": "Optimal.",
  "pseudocode": "Code.",
  "explanation": "O(N) time.",
  "solution": "#include<iostream>\n#include<vector>\n#include<stack>\nusing namespace std; int main(){ int n; if(cin>>n){stack<pair<int,int>> s; for(int i=0;i<n;i++){int x; cin>>x; int m=s.empty()?x:min(x,s.top().second); s.push({x,m});} cout<<s.top().second<<' '; s.pop(); cout<<s.top().second;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); s=[]\nfor x in a:\n m=x if not s else min(x,s[-1][1])\n s.append((x,m))\nprint(f'{s[-1][1]} {s[-2][1]}')",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-15-514",
  "levelId": "level-15",
  "title": "Next Greater Element I",
  "type": "coding",
  "difficulty": "medium",
  "order": 514,
  "description": "Find next greater element.",
  "whyThisMatters": "Industry standard.",
  "concepts": [
    "algo"
  ],
  "prerequisites": [
    "basics"
  ],
  "learningObjectives": [
    "Mastery"
  ],
  "constraints": [
    "N<=1000"
  ],
  "examples": [
    {
      "input": "4\n1 3 4 2",
      "output": "3 4 -1 -1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 3 4 2",
      "expectedOutput": "3 4 -1 -1",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
  "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
  "hints": [
    "Think step by step."
  ],
  "howToThink": [
    "Analyze."
  ],
  "approach": "Optimal.",
  "pseudocode": "Code.",
  "explanation": "O(N) time.",
  "solution": "#include<iostream>\n#include<vector>\n#include<stack>\n#include<unordered_map>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; stack<int> s; unordered_map<int,int> m; for(int x:a){while(!s.empty()&&x>s.top()){m[s.top()]=x; s.pop();} s.push(x);} for(int x:a) cout<<(m.count(x)?m[x]:-1)<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); s=[]; m={}\nfor x in a:\n while s and x>s[-1]: m[s.pop()]=x\n s.append(x)\nprint(*(m.get(x,-1) for x in a))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
}
];
