import { Problem } from '../types';

export const level20Problems: Problem[] = [
    {
        id: 'prob-20-01',
        levelId: 'level-20',
        title: 'Binary Search: First True',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nYou have an array of booleans represented as integers (0 for False, 1 for True). They are sorted, so all 0s come before all 1s. (e.g., \`[0, 0, 1, 1, 1]\`).\nFind the index of the **first 1** in O(log N) time.\nIf there are no 1s, output \`-1\`.\n\n*Pattern:* Binary Search on Monotonic Functions`,
        whyThisMatters: 'This is the universal template for advanced binary search problems. If you can define a True/False boundary, you can binary search it.',
        concepts: ['binary search on answer'],
        prerequisites: ['binary search'],
        learningObjectives: ['Find a boundary condition using binary search'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n0 0 0 1 1', output: '3' }],
        testCases: [
            { id: 'tc1', input: '5\n0 0 0 1 1', expectedOutput: '3', hidden: false },
            { id: 'tc2', input: '3\n0 0 0', expectedOutput: '-1', hidden: false },
            { id: 'tc3', input: '4\n1 1 1 1', expectedOutput: '0', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int left = 0, right = n - 1;\n    int ans = -1;\n    \n    // while left <= right\n    // if arr[mid] == 1, save mid as potential answer, but keep searching left!\n    \n    cout << ans;\n    return 0;\n}`,
        hints: ['If `arr[mid] == 1`, it might be the first 1, or there might be an earlier one. Save `ans = mid` and `right = mid - 1`.', 'If `arr[mid] == 0`, the first 1 MUST be to the right. `left = mid + 1`.'],
        howToThink: ['I need to find the boundary where it switches from 0 to 1.'],
        approach: 'Binary search. If 1, save and go left. If 0, go right.',
        pseudocode: 'ans = -1\nwhile left <= right:\n    mid = left + (right - left)/2\n    if arr[mid] == 1:\n        ans = mid\n        right = mid - 1\n    else:\n        left = mid + 1\nreturn ans',
        explanation: 'We only do log N checks. This identical logic solves many difficult "Find the minimum X that satisfies Y" problems.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int left = 0, right = n - 1;\n    int ans = -1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == 1) {\n            ans = mid;\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    cout << ans;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['binary search']
    }
,
{
  "id": "prob-20-703",
  "levelId": "level-20",
  "title": "Search a 2D Matrix",
  "type": "coding",
  "difficulty": "hard",
  "order": 703,
  "description": "Search for a value in an m x n matrix where rows are sorted and first integer of each row is greater than last integer of previous row.",
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
      "input": "3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60\n3",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3 4\n1 3 5 7\n10 11 16 20\n23 30 34 60\n3",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int r,c; if(cin>>r>>c){vector<vector<int>> a(r,vector<int>(c)); for(int i=0;i<r;i++) for(int j=0;j<c;j++) cin>>a[i][j]; int t; cin>>t; int l=0, right=r*c-1; while(l<=right){int m=l+(right-l)/2; int v=a[m/c][m%c]; if(v==t){cout<<1;return 0;} if(v<t) l=m+1; else right=m-1;} cout<<0;} return 0; }",
  "pythonSolution": "r,c=map(int,input().split()); a=[list(map(int,input().split())) for _ in range(r)]; t=int(input()); l,right=0,r*c-1\nwhile l<=right:\n m=(l+right)//2\n v=a[m//c][m%c]\n if v==t: print(1); exit()\n if v<t: l=m+1\n else: right=m-1\nprint(0)",
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
  "id": "prob-20-concept-829",
  "levelId": "level-20",
  "title": "Binary Search: First True Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 829,
  "description": "This is a conceptual check for Binary Search: First True. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Binary Search: First True.",
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
  "id": "prob-20-concept-830",
  "levelId": "level-20",
  "title": "Binary Search: First True Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 830,
  "description": "This is a conceptual check for Binary Search: First True. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Binary Search: First True.",
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
  "id": "prob-20-concept-831",
  "levelId": "level-20",
  "title": "Binary Search: First True Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 831,
  "description": "This is a conceptual check for Binary Search: First True. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Binary Search: First True.",
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
  "id": "prob-20-concept-832",
  "levelId": "level-20",
  "title": "Binary Search: First True Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 832,
  "description": "This is a conceptual check for Binary Search: First True. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Binary Search: First True.",
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
  "id": "prob-20-concept-833",
  "levelId": "level-20",
  "title": "Binary Search: First True Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 833,
  "description": "This is a conceptual check for Binary Search: First True. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Binary Search: First True.",
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
  "id": "prob-20-concept-834",
  "levelId": "level-20",
  "title": "Binary Search: First True Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 834,
  "description": "This is a conceptual check for Binary Search: First True. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Binary Search: First True.",
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
