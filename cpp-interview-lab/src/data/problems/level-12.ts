import { Problem } from '../types';

export const level12Problems: Problem[] = [
    {
        id: 'prob-12-01',
        levelId: 'level-12',
        title: 'Complexity Prediction: Loop',
        type: 'multiple-choice',
        difficulty: 'beginner',
        order: 1,
        description: `**Time Complexity** is how the runtime of an algorithm grows as the input \`N\` grows.\n\nConsider this code:\n\`\`\`cpp\nfor(int i = 0; i < n; i++) {\n    cout << i << " ";\n}\n\`\`\`\nIf \`n = 10\`, the loop runs 10 times. If \`n = 1000\`, it runs 1000 times. The relationship is purely linear.\n\nWhat is the Time Complexity of this snippet?`,
        whyThisMatters: 'O(N) is the baseline complexity for scanning data.',
        concepts: ['O(n)'],
        prerequisites: ['loops'],
        learningObjectives: ['Identify O(N) loops'],
        constraints: [],
        examples: [],
        testCases: [],
        starterCode: ``,
        hints: ['Does it run N times, N squared times, or a constant number of times?'],
        howToThink: [],
        approach: '',
        pseudocode: '',
        explanation: 'Because the loop executes exactly `N` times, it takes O(N) operations.',
        solution: 'O(N)',
        commonMistakes: [],
        timeComplexity: '', spaceComplexity: '', interviewRelevance: 'high', tags: ['complexity'],
        options: ['O(1)', 'O(N)', 'O(N^2)', 'O(log N)']
    },
    {
        id: 'prob-12-02',
        levelId: 'level-12',
        title: 'Complexity Prediction: Nested Loops',
        type: 'multiple-choice',
        difficulty: 'easy',
        order: 2,
        description: `Consider this code:\n\`\`\`cpp\nfor(int i = 0; i < n; i++) {\n    for(int j = 0; j < n; j++) {\n        cout << i * j << " ";\n    }\n}\n\`\`\`\nFor every single step of the outer loop, the inner loop runs \`N\` times.\n\nWhat is the Time Complexity?`,
        whyThisMatters: 'Nested loops are usually the brute-force approach. They become disastrously slow when N > 10,000.',
        concepts: ['O(n^2)'],
        prerequisites: ['loops'],
        learningObjectives: ['Identify O(N^2) loops'],
        constraints: [],
        examples: [],
        testCases: [],
        starterCode: ``,
        hints: ['N outer iterations * N inner iterations = ?'],
        howToThink: [],
        approach: '',
        pseudocode: '',
        explanation: 'N * N = N^2. This is O(N^2).',
        solution: 'O(N^2)',
        commonMistakes: [],
        timeComplexity: '', spaceComplexity: '', interviewRelevance: 'high', tags: ['complexity'],
        options: ['O(N)', 'O(N^2)', 'O(2N)', 'O(N log N)']
    },
    {
        id: 'prob-12-03',
        levelId: 'level-12',
        title: 'Complexity Prediction: Binary Search',
        type: 'multiple-choice',
        difficulty: 'medium',
        order: 3,
        description: `Consider Binary Search:\n\`\`\`cpp\nwhile(left <= right) {\n    int mid = left + (right - left) / 2;\n    // ... update left or right ...\n}\n\`\`\`\nIn each step, the search space \`(right - left)\` is cut exactly in half.\n\nWhat is the Time Complexity?`,
        whyThisMatters: 'Knowing why cutting things in half leads to logarithmic time is crucial for interviews.',
        concepts: ['O(log n)'],
        prerequisites: ['binary search'],
        learningObjectives: ['Recognize logarithmic reduction'],
        constraints: [],
        examples: [],
        testCases: [],
        starterCode: ``,
        hints: ['If you cut 1,000,000 in half repeatedly, it only takes ~20 steps to reach 1.'],
        howToThink: [],
        approach: '',
        pseudocode: '',
        explanation: 'Because we divide the search space by 2 at each step, it takes log2(N) steps. In Big-O, we drop the base, so it is O(log N).',
        solution: 'O(log N)',
        commonMistakes: [],
        timeComplexity: '', spaceComplexity: '', interviewRelevance: 'high', tags: ['complexity'],
        options: ['O(N)', 'O(log N)', 'O(N/2)', 'O(1)']
    },
    {
        id: 'prob-12-04',
        levelId: 'level-12',
        title: 'Optimize Brute Force (Two Sum Starter)',
        type: 'coding',
        difficulty: 'medium',
        order: 4,
        description: `**Task:**\nYou are given an array of \`N\` integers. Does there exist a pair of elements that add up to \`target\`?\nPrint \`Yes\` or \`No\`.\n\n**Requirement:**\nDo NOT use a nested O(N^2) loop. You must do this in **O(N log N)** time by sorting first, and using the Two Pointer approach!`,
        whyThisMatters: 'Moving from O(N^2) to O(N log N) is the most standard interview optimization progression.',
        concepts: ['optimization', 'two pointers'],
        prerequisites: ['sorting'],
        learningObjectives: ['Replace a nested loop with sorting + two pointers'],
        constraints: ['N <= 1000'],
        examples: [{ input: '4\n1 5 2 9\n7', output: 'Yes', explanation: '2 + 5 = 7' }],
        testCases: [
            { id: 'tc1', input: '4\n1 5 2 9\n7', expectedOutput: 'Yes', hidden: false },
            { id: 'tc2', input: '3\n1 2 3\n10', expectedOutput: 'No', hidden: false },
            { id: 'tc3', input: '2\n4 4\n8', expectedOutput: 'Yes', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    // 1. Sort the array\n    \n    // 2. Use two pointers (left at 0, right at n-1)\n    \n    return 0;\n}`,
        hints: ['After sorting, point `left = 0` and `right = n-1`.', 'If `arr[left] + arr[right] > target`, the sum is too big. Move `right` inwards.', 'If the sum is too small, move `left` inwards.'],
        howToThink: ['If the data is sorted, I can predictably control the sum. Moving right inwards decreases the sum. Moving left inwards increases it.'],
        approach: 'Sort. Use left and right pointers.',
        pseudocode: 'sort(arr)\nleft = 0, right = N-1\nwhile left < right:\n    sum = arr[left] + arr[right]\n    if sum == target: return Yes\n    if sum < target: left++\n    else: right--\nreturn No',
        explanation: 'Sorting takes O(N log N). The two-pointer scan takes O(N). Total time: O(N log N). This is drastically faster than checking every pair O(N^2).',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    if(n < 2) { cout << "No"; return 0; }\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    sort(arr.begin(), arr.end());\n    int left = 0, right = n - 1;\n    while(left < right) {\n        int sum = arr[left] + arr[right];\n        if (sum == target) {\n            cout << "Yes";\n            return 0;\n        } else if (sum < target) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    cout << "No";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(log N)', interviewRelevance: 'high', tags: ['two pointers', 'complexity']
    }
,
{
  "id": "prob-12-concept-801",
  "levelId": "level-12",
  "title": "Complexity Prediction: Loop Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 801,
  "description": "This is a conceptual check for Complexity Prediction: Loop. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Complexity Prediction: Loop.",
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
  "id": "prob-12-concept-802",
  "levelId": "level-12",
  "title": "Complexity Prediction: Loop Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 802,
  "description": "This is a conceptual check for Complexity Prediction: Loop. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Complexity Prediction: Loop.",
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
  "id": "prob-12-concept-803",
  "levelId": "level-12",
  "title": "Complexity Prediction: Loop Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 803,
  "description": "This is a conceptual check for Complexity Prediction: Loop. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Complexity Prediction: Loop.",
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
