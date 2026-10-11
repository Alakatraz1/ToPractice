import { Problem } from '../types';

export const level13Problems: Problem[] = [
    {
        id: 'prob-13-01',
        levelId: 'level-13',
        title: 'STL Pair Basics',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `The \`<utility>\` library provides \`std::pair\`, which lets you bundle two pieces of data together (e.g. an x and y coordinate).\n\n**Task:**\nRead \`N\` pairs of integers (X and Y coordinates). Print the coordinates that have the highest Y value. If there's a tie, print the one that appeared first.`,
        whyThisMatters: 'Pairs are heavily used in Hash Maps and Graphs.',
        concepts: ['pair', 'stl'],
        prerequisites: ['arrays'],
        learningObjectives: ['Use `std::pair`', 'Access `.first` and `.second`'],
        constraints: ['N <= 100'],
        examples: [{ input: '3\n1 5\n10 2\n4 8', output: '4 8' }],
        testCases: [
            { id: 'tc1', input: '3\n1 5\n10 2\n4 8', expectedOutput: '4 8', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <utility>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    // vector of pairs\n    vector<pair<int, int>> points(n);\n    \n    for(int i=0; i<n; i++) {\n        cin >> points[i].first >> points[i].second;\n    }\n    \n    // Find the one with max Y (.second)\n    \n    return 0;\n}`,
        hints: ['Keep track of a `bestPoint` which is a `pair<int, int>`.', 'Compare `points[i].second` with `bestPoint.second`.'],
        howToThink: [],
        approach: 'Scan array of pairs, track max .second',
        pseudocode: '',
        explanation: 'Pair provides `.first` and `.second` members natively.',
        solution: `#include <iostream>\n#include <vector>\n#include <utility>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    if(n==0) return 0;\n    vector<pair<int, int>> p(n);\n    for(int i=0; i<n; i++) cin >> p[i].first >> p[i].second;\n    \n    pair<int, int> best = p[0];\n    for(int i=1; i<n; i++) {\n        if (p[i].second > best.second) {\n            best = p[i];\n        }\n    }\n    cout << best.first << " " << best.second;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'medium', tags: ['stl']
    },
    {
        id: 'prob-13-02',
        levelId: 'level-13',
        title: 'Range-Based For Loops',
        type: 'coding',
        difficulty: 'beginner',
        order: 2,
        description: `Modern C++ allows you to iterate cleanly without index variables using **Range-Based For Loops**.\n\n\`\`\`cpp\nfor(int x : arr) {\n    cout << x;\n}\n\`\`\`\n\n**Task:**\nRead \`N\` and an array of \`N\` integers. Calculate the sum of all elements using a range-based for loop.`,
        whyThisMatters: 'Saves you from writing `for(int i = 0; i < arr.size(); i++)` repeatedly during interviews.',
        concepts: ['range-based for'],
        prerequisites: ['loops'],
        learningObjectives: ['Use range-based iteration'],
        constraints: [],
        examples: [{ input: '3\n10 20 30', output: '60' }],
        testCases: [
            { id: 'tc1', input: '3\n10 20 30', expectedOutput: '60', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int sum = 0;\n    // USE A RANGE-BASED FOR LOOP HERE\n    \n    cout << sum;\n    return 0;\n}`,
        hints: ['`for (int val : arr) { sum += val; }`'],
        howToThink: [],
        approach: 'Iterate and sum',
        pseudocode: '',
        explanation: 'Very clean syntax introduced in C++11.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int sum = 0;\n    for(int x : arr) sum += x;\n    cout << sum;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'low', tags: ['stl']
    },
{
    "id": "prob-13-106",
    "levelId": "level-13",
    "title": "Vector Erase",
    "type": "coding",
    "difficulty": "medium",
    "order": 106,
    "description": "Given N integers, erase element at pos X (1-based), then erase range [A, B] (1-based). Print size and elements.",
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
            "input": "6\n1 4 6 2 8 9\n2\n2 4",
            "output": "3\n1 8 9"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n1 4 6 2 8 9\n2\n2 4",
            "expectedOutput": "3\n1 8 9",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Erase method"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int x,A,B; cin>>x>>A>>B; a.erase(a.begin()+x-1); a.erase(a.begin()+A-1, a.begin()+B-1); cout<<a.size()<<'\\n'; for(int v:a) cout<<v<<' ';} return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); x=int(input()); A,B=map(int,input().split()); a.pop(x-1); del a[A-1:B-1]; print(len(a)); print(*a)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
}
,
{
  "id": "prob-13-concept-804",
  "levelId": "level-13",
  "title": "STL Pair Basics Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 804,
  "description": "This is a conceptual check for STL Pair Basics. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering STL Pair Basics.",
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
  "id": "prob-13-concept-805",
  "levelId": "level-13",
  "title": "STL Pair Basics Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 805,
  "description": "This is a conceptual check for STL Pair Basics. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering STL Pair Basics.",
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
  "id": "prob-13-concept-806",
  "levelId": "level-13",
  "title": "STL Pair Basics Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 806,
  "description": "This is a conceptual check for STL Pair Basics. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering STL Pair Basics.",
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
  "id": "prob-13-concept-807",
  "levelId": "level-13",
  "title": "STL Pair Basics Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 807,
  "description": "This is a conceptual check for STL Pair Basics. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering STL Pair Basics.",
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
  "id": "prob-13-concept-808",
  "levelId": "level-13",
  "title": "STL Pair Basics Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 808,
  "description": "This is a conceptual check for STL Pair Basics. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering STL Pair Basics.",
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
  "id": "prob-13-concept-809",
  "levelId": "level-13",
  "title": "STL Pair Basics Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 809,
  "description": "This is a conceptual check for STL Pair Basics. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering STL Pair Basics.",
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
