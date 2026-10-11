import { Problem } from '../types';

export const level23Problems: Problem[] = [
    {
        id: 'prob-23-01',
        levelId: 'level-23',
        title: 'Assign Cookies',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nAssume you have \`N\` children and \`M\` cookies. \nEach child has a greed factor \`g[i]\` (the minimum size of a cookie they will accept).\nEach cookie has a size \`s[j]\`.\nIf \`s[j] >= g[i]\`, the child gets the cookie.\nFind the maximum number of children you can satisfy.\n\n*Pattern:* Greedy Matching`,
        whyThisMatters: 'Greedy algorithms make the best local choice. Here, matching the least greedy child with the smallest possible cookie maximizes efficiency.',
        concepts: ['greedy', 'sorting', 'two pointers'],
        prerequisites: ['sorting', 'two pointers'],
        learningObjectives: ['Apply sorting + greedy choice'],
        constraints: ['N, M <= 1000'],
        examples: [{ input: '2\n1 2\n3\n1 2 3', output: '2', explanation: '2 children (greed 1, 2). 3 cookies (size 1, 2, 3). Both can be satisfied.' }],
        testCases: [
            { id: 'tc1', input: '2\n1 2\n3\n1 2 3', expectedOutput: '2', hidden: false },
            { id: 'tc2', input: '3\n1 2 3\n2\n1 1', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> g(n);\n    for(int i=0; i<n; i++) cin >> g[i];\n    \n    int m; cin >> m;\n    vector<int> s(m);\n    for(int i=0; i<m; i++) cin >> s[i];\n    \n    // 1. Sort both arrays\n    // 2. Use two pointers to match\n    \n    return 0;\n}`,
        hints: ['Sort the children and the cookies.', 'If the current cookie satisfies the current child, move BOTH pointers. If not, the cookie is too small, so move ONLY the cookie pointer to try a bigger cookie.'],
        howToThink: ['I want to waste as little cookie as possible. I should give my smallest acceptable cookie to my least greedy child.'],
        approach: 'Sort both arrays. Two pointers to find matches.',
        pseudocode: 'sort(g); sort(s)\nchild_i = 0, cookie_j = 0\nwhile child_i < n and cookie_j < m:\n    if s[cookie_j] >= g[child_i]:\n        child_i++\n    cookie_j++\nreturn child_i',
        explanation: 'Sorting takes O(N log N). The two-pointer traversal takes O(N).',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> g(n);\n    for(int i=0; i<n; i++) cin >> g[i];\n    int m; cin >> m;\n    vector<int> s(m);\n    for(int i=0; i<m; i++) cin >> s[i];\n    \n    sort(g.begin(), g.end());\n    sort(s.begin(), s.end());\n    \n    int child_i = 0, cookie_j = 0;\n    while(child_i < n && cookie_j < m) {\n        if (s[cookie_j] >= g[child_i]) {\n            child_i++;\n        }\n        cookie_j++;\n    }\n    cout << child_i;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(1)', interviewRelevance: 'medium', tags: ['greedy', 'two pointers']
    }
,
{
  "id": "prob-23-605",
  "levelId": "level-23",
  "title": "Jump Game",
  "type": "coding",
  "difficulty": "medium",
  "order": 605,
  "description": "Return 1 if you can reach the last index, else 0.",
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
      "input": "5\n2 3 1 1 4",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n2 3 1 1 4",
      "expectedOutput": "1",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){int m=0; for(int i=0;i<n;i++){int x; cin>>x; if(i>m){cout<<0; return 0;} m=max(m,i+x);} cout<<1;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); m=0\nfor i,x in enumerate(a):\n if i>m: print(0); exit()\n m=max(m,i+x)\nprint(1)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-23-606",
  "levelId": "level-23",
  "title": "Gas Station",
  "type": "coding",
  "difficulty": "medium",
  "order": 606,
  "description": "Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.",
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
      "input": "5\n1 2 3 4 5\n3 4 5 1 2",
      "output": "3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n1 2 3 4 5\n3 4 5 1 2",
      "expectedOutput": "3",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> g(n), c(n); int tg=0,tc=0; for(int i=0;i<n;i++){cin>>g[i]; tg+=g[i];} for(int i=0;i<n;i++){cin>>c[i]; tc+=c[i];} if(tg<tc){cout<<-1;return 0;} int ans=0, cur=0; for(int i=0;i<n;i++){cur+=g[i]-c[i]; if(cur<0){ans=i+1; cur=0;}} cout<<ans;} return 0; }",
  "pythonSolution": "n=int(input()); g=list(map(int,input().split())); c=list(map(int,input().split()))\nif sum(g)<sum(c): print(-1); exit()\nans,cur=0,0\nfor i in range(n):\n cur+=g[i]-c[i]\n if cur<0: ans=i+1; cur=0\nprint(ans)",
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
  "id": "prob-23-concept-851",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 851,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
  "id": "prob-23-concept-852",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 852,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
  "id": "prob-23-concept-853",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 853,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
  "id": "prob-23-concept-854",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 854,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
  "id": "prob-23-concept-855",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 855,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
  "id": "prob-23-concept-856",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 856,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
  "id": "prob-23-concept-857",
  "levelId": "level-23",
  "title": "Assign Cookies Concept Check 7",
  "type": "coding",
  "difficulty": "easy",
  "order": 857,
  "description": "This is a conceptual check for Assign Cookies. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Assign Cookies.",
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
