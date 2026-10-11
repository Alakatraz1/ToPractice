import { Problem } from '../types';

export const level17Problems: Problem[] = [
    {
        id: 'prob-17-01',
        levelId: 'level-17',
        title: 'Recursion Basics (Base Cases)',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `**Recursion** is when a function calls itself. To prevent it from running forever (like an infinite loop), it MUST have a **Base Case**.\n\n**Task:**\nWrite a recursive function \`printCountdown(int n)\` that prints numbers from \`N\` down to 1. If \`N <= 0\`, it should stop (this is the base case).`,
        whyThisMatters: 'Recursion is mandatory for understanding Trees, Graphs, and Dynamic Programming.',
        concepts: ['recursion', 'base case'],
        prerequisites: ['functions'],
        learningObjectives: ['Define a base case to prevent infinite recursion'],
        constraints: ['N <= 100'],
        examples: [{ input: '5', output: '5 4 3 2 1' }],
        testCases: [
            { id: 'tc1', input: '5', expectedOutput: '5 4 3 2 1', hidden: false },
            { id: 'tc2', input: '1', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nvoid printCountdown(int n) {\n    // Base Case: When do we stop?\n    if (n <= 0) return;\n    \n    // Action: Print the current number\n    \n    // Recursive Step: Call the function with a smaller problem\n}\n\nint main() {\n    int n; cin >> n;\n    printCountdown(n);\n    return 0;\n}`,
        hints: ['Print `n`, then call `printCountdown(n - 1)`.'],
        howToThink: ['If N is 5, I print 5, and then I tell my clone to handle the problem for 4. My clone prints 4, and tells their clone to handle 3...'],
        approach: 'Check base case. Print n. Recurse with n-1.',
        pseudocode: 'if n <= 0: return\nprint n\nprintCountdown(n - 1)',
        explanation: 'Every time a function calls itself, it gets added to the Call Stack. When it hits the base case, the stack unwinds.',
        solution: `#include <iostream>\nusing namespace std;\n\nvoid printCountdown(int n) {\n    if (n <= 0) return;\n    cout << n << " ";\n    printCountdown(n - 1);\n}\n\nint main() {\n    int n; cin >> n;\n    printCountdown(n);\n    return 0;\n}`,
        commonMistakes: ['Forgetting the base case, causing a Stack Overflow.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N) call stack', interviewRelevance: 'medium', tags: ['recursion']
    },
    {
        id: 'prob-17-02',
        levelId: 'level-17',
        title: 'Recursive Sum',
        type: 'coding',
        difficulty: 'easy',
        order: 2,
        description: `**Task:**\nWrite a recursive function \`int sum(int n)\` that returns the sum of all integers from 1 to \`N\`.\n\n*Example:* \`sum(5) = 5 + sum(4)\`.`,
        whyThisMatters: 'Teaches how to return values back up the recursive call stack.',
        concepts: ['recursive return'],
        prerequisites: ['recursion'],
        learningObjectives: ['Pass computed values up the call stack'],
        constraints: ['N <= 100'],
        examples: [{ input: '5', output: '15' }],
        testCases: [
            { id: 'tc1', input: '5', expectedOutput: '15', hidden: false },
            { id: 'tc2', input: '1', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nint recursiveSum(int n) {\n    if (n == 1) return 1;\n    \n    // Return N + the sum of everything smaller than N\n}\n\nint main() {\n    int n; cin >> n;\n    cout << recursiveSum(n);\n    return 0;\n}`,
        hints: ['`return n + recursiveSum(n - 1);`'],
        howToThink: ['The total sum for N is just N plus whatever the total sum was for N-1.'],
        approach: 'Base case n=1 returns 1. Otherwise return n + recurse(n-1).',
        pseudocode: 'if n == 1: return 1\nreturn n + sum(n-1)',
        explanation: 'The function pauses, waiting for `recursiveSum(n-1)` to finish, before it can do its own addition.',
        solution: `#include <iostream>\nusing namespace std;\n\nint recursiveSum(int n) {\n    if (n <= 1) return n;\n    return n + recursiveSum(n - 1);\n}\n\nint main() {\n    int n; cin >> n;\n    if (n<=0) cout << 0;\n    else cout << recursiveSum(n);\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N) call stack', interviewRelevance: 'low', tags: ['recursion']
    },
{
    "id": "prob-17-03",
    "levelId": "level-17",
    "title": "Generate Parentheses",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given n pairs of parentheses, write a program to generate all combinations of well-formed parentheses. Output each combination on a new line.",
    "whyThisMatters": "Fundamental backtracking problem.",
    "concepts": [
        "backtracking",
        "recursion"
    ],
    "prerequisites": [
        "recursion"
    ],
    "learningObjectives": [
        "Generate combinations conditionally"
    ],
    "constraints": [
        "1 <= N <= 8"
    ],
    "examples": [
        {
            "input": "3",
            "output": "((()))\n(()())\n(())()\n()(())\n()()()"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "3",
            "expectedOutput": "((()))\n(()())\n(())()\n()(())\n()()()",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvoid generate(int open, int close, int n, string current) {\n    // logic\n}\n\nint main() {\n    int n; cin >> n;\n    generate(0, 0, n, \"\");\n    return 0;\n}",
    "hints": [
        "You can only add an open parenthesis if open < n.",
        "You can only add a close parenthesis if close < open."
    ],
    "howToThink": [
        "At each step, I can either branch out to add ( or branch out to add ). I just have to follow the rules of valid parentheses."
    ],
    "approach": "Backtracking.",
    "pseudocode": "if open==n and close==n: print current. if open < n: generate(open+1, close, n, current+\"(\"); if close < open: generate(open, close+1, n, current+\")\")",
    "explanation": "Catalan number time complexity.",
    "solution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid generate(int open, int close, int n, string current) {\n    if (open == n && close == n) {\n        cout << current << \"\\n\";\n        return;\n    }\n    if (open < n) generate(open + 1, close, n, current + \"(\");\n    if (close < open) generate(open, close + 1, n, current + \")\");\n}\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    generate(0, 0, n, \"\");\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(4^N / sqrt(N))",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "backtracking"
    ]
}
,
{
  "id": "prob-17-701",
  "levelId": "level-17",
  "title": "Subsets",
  "type": "coding",
  "difficulty": "hard",
  "order": 701,
  "description": "Given an integer array nums of unique elements, return all possible subsets (the power set). Print each on a new line.",
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
      "input": "3\n1 2 3",
      "output": "\n1\n1 2\n1 2 3\n1 3\n2\n2 3\n3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 3",
      "expectedOutput": "\n1\n1 2\n1 2 3\n1 3\n2\n2 3\n3",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; void bt(vector<int>& a, int i, vector<int>& cur){if(cur.empty()) cout<<\"\\n\"; else{for(int x:cur)cout<<x<<' '; cout<<\"\\n\";} for(int j=i;j<a.size();j++){cur.push_back(a[j]); bt(a,j+1,cur); cur.pop_back();}} int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; vector<int> cur; bt(a,0,cur);} return 0; }",
  "pythonSolution": "def bt(a, i, cur):\n print(*cur)\n for j in range(i, len(a)):\n  cur.append(a[j])\n  bt(a, j+1, cur)\n  cur.pop()\nn=int(input()); a=list(map(int,input().split())); bt(a,0,[])",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-17-702",
  "levelId": "level-17",
  "title": "Permutations",
  "type": "coding",
  "difficulty": "hard",
  "order": 702,
  "description": "Given an array nums of distinct integers, return all the possible permutations. Print each on a new line.",
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
      "input": "3\n1 2 3",
      "output": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 3",
      "expectedOutput": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; void bt(vector<int>& a, int start){if(start==a.size()){for(int x:a)cout<<x<<' ';cout<<'\\n';} for(int i=start;i<a.size();i++){swap(a[i],a[start]); bt(a,start+1); swap(a[i],a[start]);}} int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; bt(a,0);} return 0; }",
  "pythonSolution": "def bt(a, start):\n if start==len(a): print(*a); return\n for i in range(start, len(a)):\n  a[i],a[start]=a[start],a[i]\n  bt(a, start+1)\n  a[i],a[start]=a[start],a[i]\nn=int(input()); a=list(map(int,input().split())); bt(a,0)",
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
  "id": "prob-17-concept-815",
  "levelId": "level-17",
  "title": "Recursion Basics (Base Cases) Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 815,
  "description": "This is a conceptual check for Recursion Basics (Base Cases). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Recursion Basics (Base Cases).",
  "whyThisMatters": "Fundamental data manipulation is critical before applying advanced algorithms.",
  "concepts": [
    "fundamentals"
  ],
  "prerequisites": [
    "arrays"
  ],
  "learningObjectives": [
    "Mastery of basic IO and reversal"
  ],
  "constraints": [
    "N<=100"
  ],
  "examples": [
    {
      "input": "3\n1 2 3",
      "output": "3 2 1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 3",
      "expectedOutput": "3 2 1",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        // Write logic here\n    }\n    return 0;\n}",
  "pythonStarterCode": "def solve():\n    n = int(input())\n    a = list(map(int, input().split()))\n    # Write logic here\nif __name__ == '__main__': solve()",
  "hints": [
    "Try looping from the end of the array to the beginning."
  ],
  "howToThink": [
    "How can I access elements from right to left?"
  ],
  "approach": "Reverse iteration.",
  "pseudocode": "for i = n-1 down to 0: print arr[i]",
  "explanation": "Reversing an array helps build intuition for pointers and boundaries.",
  "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        for(int i=n-1; i>=0; i--) cout<<a[i]<<' ';\n    }\n    return 0;\n}",
  "pythonSolution": "n = int(input())\na = list(map(int, input().split()))\nprint(*(a[::-1]))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "interviewRelevance": "medium",
  "tags": [
    "fundamentals"
  ]
},
{
  "id": "prob-17-concept-816",
  "levelId": "level-17",
  "title": "Recursion Basics (Base Cases) Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 816,
  "description": "This is a conceptual check for Recursion Basics (Base Cases). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Recursion Basics (Base Cases).",
  "whyThisMatters": "Fundamental data manipulation is critical before applying advanced algorithms.",
  "concepts": [
    "fundamentals"
  ],
  "prerequisites": [
    "arrays"
  ],
  "learningObjectives": [
    "Mastery of basic IO and reversal"
  ],
  "constraints": [
    "N<=100"
  ],
  "examples": [
    {
      "input": "3\n1 2 3",
      "output": "3 2 1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 3",
      "expectedOutput": "3 2 1",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        // Write logic here\n    }\n    return 0;\n}",
  "pythonStarterCode": "def solve():\n    n = int(input())\n    a = list(map(int, input().split()))\n    # Write logic here\nif __name__ == '__main__': solve()",
  "hints": [
    "Try looping from the end of the array to the beginning."
  ],
  "howToThink": [
    "How can I access elements from right to left?"
  ],
  "approach": "Reverse iteration.",
  "pseudocode": "for i = n-1 down to 0: print arr[i]",
  "explanation": "Reversing an array helps build intuition for pointers and boundaries.",
  "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        for(int i=n-1; i>=0; i--) cout<<a[i]<<' ';\n    }\n    return 0;\n}",
  "pythonSolution": "n = int(input())\na = list(map(int, input().split()))\nprint(*(a[::-1]))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "interviewRelevance": "medium",
  "tags": [
    "fundamentals"
  ]
},
{
  "id": "prob-17-concept-817",
  "levelId": "level-17",
  "title": "Recursion Basics (Base Cases) Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 817,
  "description": "This is a conceptual check for Recursion Basics (Base Cases). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Recursion Basics (Base Cases).",
  "whyThisMatters": "Fundamental data manipulation is critical before applying advanced algorithms.",
  "concepts": [
    "fundamentals"
  ],
  "prerequisites": [
    "arrays"
  ],
  "learningObjectives": [
    "Mastery of basic IO and reversal"
  ],
  "constraints": [
    "N<=100"
  ],
  "examples": [
    {
      "input": "3\n1 2 3",
      "output": "3 2 1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 3",
      "expectedOutput": "3 2 1",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        // Write logic here\n    }\n    return 0;\n}",
  "pythonStarterCode": "def solve():\n    n = int(input())\n    a = list(map(int, input().split()))\n    # Write logic here\nif __name__ == '__main__': solve()",
  "hints": [
    "Try looping from the end of the array to the beginning."
  ],
  "howToThink": [
    "How can I access elements from right to left?"
  ],
  "approach": "Reverse iteration.",
  "pseudocode": "for i = n-1 down to 0: print arr[i]",
  "explanation": "Reversing an array helps build intuition for pointers and boundaries.",
  "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        for(int i=n-1; i>=0; i--) cout<<a[i]<<' ';\n    }\n    return 0;\n}",
  "pythonSolution": "n = int(input())\na = list(map(int, input().split()))\nprint(*(a[::-1]))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "interviewRelevance": "medium",
  "tags": [
    "fundamentals"
  ]
},
{
  "id": "prob-17-concept-818",
  "levelId": "level-17",
  "title": "Recursion Basics (Base Cases) Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 818,
  "description": "This is a conceptual check for Recursion Basics (Base Cases). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Recursion Basics (Base Cases).",
  "whyThisMatters": "Fundamental data manipulation is critical before applying advanced algorithms.",
  "concepts": [
    "fundamentals"
  ],
  "prerequisites": [
    "arrays"
  ],
  "learningObjectives": [
    "Mastery of basic IO and reversal"
  ],
  "constraints": [
    "N<=100"
  ],
  "examples": [
    {
      "input": "3\n1 2 3",
      "output": "3 2 1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 3",
      "expectedOutput": "3 2 1",
      "hidden": false
    }
  ],
  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        // Write logic here\n    }\n    return 0;\n}",
  "pythonStarterCode": "def solve():\n    n = int(input())\n    a = list(map(int, input().split()))\n    # Write logic here\nif __name__ == '__main__': solve()",
  "hints": [
    "Try looping from the end of the array to the beginning."
  ],
  "howToThink": [
    "How can I access elements from right to left?"
  ],
  "approach": "Reverse iteration.",
  "pseudocode": "for i = n-1 down to 0: print arr[i]",
  "explanation": "Reversing an array helps build intuition for pointers and boundaries.",
  "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; if(cin>>n){\n        vector<int> a(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        for(int i=n-1; i>=0; i--) cout<<a[i]<<' ';\n    }\n    return 0;\n}",
  "pythonSolution": "n = int(input())\na = list(map(int, input().split()))\nprint(*(a[::-1]))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(N)",
  "interviewRelevance": "medium",
  "tags": [
    "fundamentals"
  ]
}
];
