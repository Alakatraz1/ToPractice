import { Problem } from '../types';

export const level25Problems: Problem[] = [
    {
        id: 'prob-25-01',
        levelId: 'level-25',
        title: 'Two Sum',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `Given an array of integers \`nums\` and an integer \`target\`, find the indices of the two numbers such that they add up to \`target\`.\n(Print the smaller index first, then the larger).`,
        whyThisMatters: 'Classic interview question.',
        concepts: ['hash map'],
        prerequisites: ['arrays'],
        learningObjectives: ['Apply hash map lookup'],
        constraints: ['N <= 1000'],
        examples: [{ input: '4\n2 7 11 15\n9', output: '0 1' }],
        testCases: [
            { id: 'tc1', input: '4\n2 7 11 15\n9', expectedOutput: '0 1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for(int i=0; i<n; i++) cin >> nums[i];\n    int target; cin >> target;\n    \n    unordered_map<int, int> seen;\n    for(int i=0; i<n; i++) {\n        int comp = target - nums[i];\n        if (seen.count(comp)) {\n            cout << seen[comp] << " " << i;\n            return 0;\n        }\n        seen[nums[i]] = i;\n    }\n    return 0;\n}`,
        hints: ['Use an unordered_map to store value -> index.'],
        howToThink: ['Complement lookup'],
        approach: 'Hash map caching',
        pseudocode: 'For each num, check map for complement.',
        explanation: 'O(N) time with O(N) space.',
        solution: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for(int i=0; i<n; i++) cin >> nums[i];\n    int target; cin >> target;\n    unordered_map<int, int> seen;\n    for(int i=0; i<n; i++) {\n        int comp = target - nums[i];\n        if (seen.count(comp)) {\n            cout << seen[comp] << " " << i;\n            return 0;\n        }\n        seen[nums[i]] = i;\n    }\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['hash map']
    },
    {
        id: 'prob-25-02',
        levelId: 'level-25',
        title: 'Best Time to Buy and Sell Stock',
        type: 'coding',
        difficulty: 'easy',
        order: 2,
        description: `Given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\nReturn the maximum profit you can achieve. If you cannot achieve any profit, return 0.`,
        whyThisMatters: 'Classic running minimum problem.',
        concepts: ['arrays', 'running minimum'],
        prerequisites: ['arrays'],
        learningObjectives: ['Optimize O(N^2) to O(N)'],
        constraints: ['N <= 1000'],
        examples: [{ input: '6\n7 1 5 3 6 4', output: '5' }],
        testCases: [
            { id: 'tc1', input: '6\n7 1 5 3 6 4', expectedOutput: '5', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> prices(n);\n    for(int i=0; i<n; i++) cin >> prices[i];\n    // find max profit\n    return 0;\n}`,
        hints: ['Keep track of min price seen so far.'],
        howToThink: ['At each day, what if I sold today?'],
        approach: 'Running minimum tracking.',
        pseudocode: 'minPrice = prices[0]\nfor price in prices:\n  minPrice = min(minPrice, price)\n  maxProfit = max(maxProfit, price - minPrice)',
        explanation: 'O(N) time',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if (n == 0) { cout << 0; return 0; }\n    vector<int> prices(n);\n    for(int i=0; i<n; i++) cin >> prices[i];\n    int minPrice = prices[0], maxProfit = 0;\n    for(int i=1; i<n; i++) {\n        minPrice = min(minPrice, prices[i]);\n        maxProfit = max(maxProfit, prices[i] - minPrice);\n    }\n    cout << maxProfit;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['arrays']
    }
,
{
  "id": "prob-25-608",
  "levelId": "level-25",
  "title": "Spiral Matrix",
  "type": "coding",
  "difficulty": "medium",
  "order": 608,
  "description": "Print the matrix in spiral order.",
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
      "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
      "output": "1 2 3 6 9 8 7 4 5"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3 3\n1 2 3\n4 5 6\n7 8 9",
      "expectedOutput": "1 2 3 6 9 8 7 4 5",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int r,c; if(cin>>r>>c){vector<vector<int>> a(r,vector<int>(c)); for(int i=0;i<r;i++) for(int j=0;j<c;j++) cin>>a[i][j]; int t=0, b=r-1, l=0, right=c-1; while(t<=b && l<=right){for(int i=l;i<=right;i++) cout<<a[t][i]<<' '; t++; for(int i=t;i<=b;i++) cout<<a[i][right]<<' '; right--; if(t<=b){for(int i=right;i>=l;i--) cout<<a[b][i]<<' '; b--;} if(l<=right){for(int i=b;i>=t;i--) cout<<a[i][l]<<' '; l++;}}} return 0; }",
  "pythonSolution": "r,c=map(int,input().split()); a=[list(map(int,input().split())) for _ in range(r)]\nt,b,l,right = 0,r-1,0,c-1; ans=[]\nwhile t<=b and l<=right:\n for i in range(l,right+1): ans.append(a[t][i]);\n t+=1\n for i in range(t,b+1): ans.append(a[i][right]);\n right-=1\n if t<=b:\n  for i in range(right,l-1,-1): ans.append(a[b][i]);\n  b-=1\n if l<=right:\n  for i in range(b,t-1,-1): ans.append(a[i][l]);\n  l+=1\nprint(*ans)",
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
  "id": "prob-25-concept-865",
  "levelId": "level-25",
  "title": "Two Sum Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 865,
  "description": "This is a conceptual check for Two Sum. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Two Sum.",
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
  "id": "prob-25-concept-866",
  "levelId": "level-25",
  "title": "Two Sum Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 866,
  "description": "This is a conceptual check for Two Sum. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Two Sum.",
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
  "id": "prob-25-concept-867",
  "levelId": "level-25",
  "title": "Two Sum Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 867,
  "description": "This is a conceptual check for Two Sum. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Two Sum.",
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
  "id": "prob-25-concept-868",
  "levelId": "level-25",
  "title": "Two Sum Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 868,
  "description": "This is a conceptual check for Two Sum. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Two Sum.",
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
  "id": "prob-25-concept-869",
  "levelId": "level-25",
  "title": "Two Sum Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 869,
  "description": "This is a conceptual check for Two Sum. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Two Sum.",
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
  "id": "prob-25-concept-870",
  "levelId": "level-25",
  "title": "Two Sum Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 870,
  "description": "This is a conceptual check for Two Sum. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Two Sum.",
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
