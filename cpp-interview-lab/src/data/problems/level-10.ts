import { Problem } from '../types';

export const level10Problems: Problem[] = [
    {
        id: 'prob-10-01',
        levelId: 'level-10',
        title: 'Linear Search Refresher',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `**Task:**\nRead \`N\` and an array of \`N\` elements. Read \`target\`.\nPrint the index of the first occurrence of \`target\`, or \`-1\`.\n\n*Why:* To establish the baseline O(N) searching algorithm before we learn how to optimize it.`,
        whyThisMatters: 'Linear search is O(n). It requires checking every element one by one. This is our baseline.',
        concepts: ['linear search'],
        prerequisites: ['arrays'],
        learningObjectives: ['Implement O(N) search'],
        constraints: ['N <= 1000'],
        examples: [{ input: '3\n10 20 30\n20', output: '1' }],
        testCases: [
            { id: 'tc1', input: '3\n10 20 30\n20', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    for(int i=0; i<n; i++) {\n        if(arr[i] == target) { cout << i; return 0; }\n    }\n    cout << -1;\n    return 0;\n}`,
        hints: [],
        howToThink: ['Check box 0. Check box 1. Check box 2.'],
        approach: 'Loop and return early on match.',
        pseudocode: 'For i = 0 to N-1:\n    If arr[i] == target: Print i, exit\nPrint -1',
        explanation: 'If the array has 1 billion elements, this might take 1 billion operations.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    for(int i=0; i<n; i++) {\n        if(arr[i] == target) { cout << i; return 0; }\n    }\n    cout << -1;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'low', tags: ['search']
    },
    {
        id: 'prob-10-02',
        levelId: 'level-10',
        title: 'Binary Search Implementation',
        type: 'coding',
        difficulty: 'medium',
        order: 2,
        description: `If an array is **sorted**, we can find an element much faster using Binary Search (O(log n)).\n\n**Task:**\nYou are given a **sorted** array of \`N\` integers, and a \`target\`.\nImplement Binary Search to find the index of the \`target\`. If not found, print \`-1\`.\n\n*Crucial detail:*\nCalculate the middle index using \`mid = left + (right - left) / 2;\`\n(This prevents integer overflow that occurs if you do \`(left + right) / 2\` with huge numbers).`,
        whyThisMatters: 'Binary search is one of the most frequently tested patterns in technical interviews.',
        concepts: ['binary search', 'divide and conquer'],
        prerequisites: ['arrays', 'sorted arrays'],
        learningObjectives: ['Implement binary search correctly', 'Understand mid calculation overflow'],
        constraints: ['N <= 1000', 'Array is sorted ascending'],
        examples: [{ input: '5\n1 3 5 7 9\n7', output: '3' }],
        testCases: [
            { id: 'tc1', input: '5\n1 3 5 7 9\n7', expectedOutput: '3', hidden: false },
            { id: 'tc2', input: '5\n1 3 5 7 9\n2', expectedOutput: '-1', hidden: false },
            { id: 'tc3', input: '1\n10\n10', expectedOutput: '0', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    int left = 0;\n    int right = n - 1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        \n        if (arr[mid] == target) {\n            cout << mid;\n            return 0;\n        }\n        \n        // Update left or right\n    }\n    \n    cout << -1;\n    return 0;\n}`,
        hints: ['If `arr[mid] < target`, the target must be to the right! Update `left = mid + 1`.', 'If `arr[mid] > target`, the target must be to the left! Update `right = mid - 1`.'],
        howToThink: ['Imagine guessing a number between 1 and 100. I guess 50. You say "Higher". Now I know it is between 51 and 100. I eliminated half the possibilities in one step!'],
        approach: 'Maintain a window [left, right]. Check mid. If smaller, move left bound. If larger, move right bound.',
        pseudocode: 'left = 0, right = N-1\nwhile left <= right:\n    mid = left + (right - left) / 2\n    if arr[mid] == target: return mid\n    if arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nreturn -1',
        explanation: 'Because we cut the search space in half every time, searching 1 billion items only takes ~30 steps! (O(log n))',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    int left = 0, right = n - 1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) {\n            cout << mid;\n            return 0;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    cout << -1;\n    return 0;\n}`,
        commonMistakes: ['Using `while(left < right)` instead of `<=`, which misses the final check when `left == right`.', 'Updating `left = mid` instead of `mid + 1`, causing an infinite loop.'],
        timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['binary search']
    },
    {
        id: 'prob-10-03',
        levelId: 'level-10',
        title: 'Search Insert Position',
        type: 'coding',
        difficulty: 'medium',
        order: 3,
        description: `**Task:**\nGiven a sorted array and a target, find the index where the target is located.\nIf it is NOT found, return the index where it **would be inserted** in order to keep the array sorted.\n\n*Example:* Array [1, 3, 5, 6], Target 2. 2 is missing, but it would fit perfectly between 1 and 3 (at index 1). Output 1.`,
        whyThisMatters: 'This teaches you what the `left` pointer actually represents when the `while` loop finishes.',
        concepts: ['binary search bound'],
        prerequisites: ['binary search'],
        learningObjectives: ['Understand the state of pointers after a failed binary search'],
        constraints: ['N <= 1000'],
        examples: [{ input: '4\n1 3 5 6\n2', output: '1' }],
        testCases: [
            { id: 'tc1', input: '4\n1 3 5 6\n2', expectedOutput: '1', hidden: false },
            { id: 'tc2', input: '4\n1 3 5 6\n5', expectedOutput: '2', hidden: false },
            { id: 'tc3', input: '4\n1 3 5 6\n7', expectedOutput: '4', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // Implement Binary Search\n    \n    // What should you print if the loop finishes without returning?\n    return 0;\n}`,
        hints: ['Write a standard binary search.', 'When the `while(left <= right)` loop naturally ends because the target isn\'t there, `left` will exactly point to the correct insertion index!'],
        howToThink: ['If the loop fails, `left` and `right` cross over. `left` will end up pointing to the first element that is GREATER than the target, which is exactly the insertion point.'],
        approach: 'Binary search. If target not found, return left.',
        pseudocode: 'Standard binary search\nIf loop completes without returning mid:\n    print left',
        explanation: 'Understanding that `left` represents the "lower bound" after termination is a major key to mastering binary search.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    int left = 0, right = n - 1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) {\n            cout << mid;\n            return 0;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    cout << left;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['binary search']
    },
    {
        id: 'prob-10-04',
        levelId: 'level-10',
        title: 'Level Challenge: First Occurrence in Sorted Array',
        type: 'coding',
        difficulty: 'hard',
        order: 4,
        description: `**Task:**\nYou have a sorted array with duplicates. (e.g. \`[1, 2, 2, 2, 3]\`).\nFind the index of the **first** occurrence of the \`target\`. If not found, output \`-1\`.\n\n*Restriction:* Your solution MUST be O(log N). You cannot find a match and then scan left using a normal loop.`,
        whyThisMatters: 'This introduces modifying binary search to find boundaries instead of just exact matches.',
        concepts: ['binary search boundaries'],
        prerequisites: ['binary search'],
        learningObjectives: ['Modify binary search to continue searching after finding a match'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n1 2 2 2 3\n2', output: '1' }],
        testCases: [
            { id: 'tc1', input: '5\n1 2 2 2 3\n2', expectedOutput: '1', hidden: false },
            { id: 'tc2', input: '5\n1 2 2 2 3\n3', expectedOutput: '4', hidden: false },
            { id: 'tc3', input: '3\n5 5 5\n5', expectedOutput: '0', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    int left = 0, right = n - 1;\n    int ans = -1;\n    \n    // Implement modified binary search\n    \n    cout << ans;\n    return 0;\n}`,
        hints: ['When `arr[mid] == target`, don\'t return immediately! Record `ans = mid`, but then do `right = mid - 1` to keep searching the left half for an even earlier occurrence.'],
        howToThink: ['I found the target at index 3. Is it the FIRST one? Maybe. I should write down 3. But let me check if there is another one to the left by moving my right bound.'],
        approach: 'Binary search. On match, record result and search left.',
        pseudocode: 'ans = -1\nwhile left <= right:\n    mid = ...\n    if arr[mid] == target:\n        ans = mid\n        right = mid - 1  # search left for earlier match\n    else if arr[mid] < target: left = mid + 1\n    else: right = mid - 1\nreturn ans',
        explanation: 'By shrinking the boundary even when a match is found, we effectively squeeze the search space down to the extreme left edge of the match sequence.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    int left = 0, right = n - 1;\n    int ans = -1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) {\n            ans = mid;\n            right = mid - 1;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    cout << ans;\n    return 0;\n}`,
        commonMistakes: ['Finding a match and using a while loop to scan leftwards (O(N) in worst case).'],
        timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['challenge', 'binary search']
    },
{
    "id": "prob-10-03",
    "levelId": "level-10",
    "title": "Find Peak Element",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You must write an algorithm that runs in O(log n) time.",
    "whyThisMatters": "Demonstrates that binary search can be used on unsorted arrays if there is a local property we can exploit.",
    "concepts": [
        "binary search"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Apply binary search on unsorted array"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "4\n1 2 3 1",
            "output": "2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n1 2 3 1",
            "expectedOutput": "2",
            "hidden": false
        },
        {
            "id": "tc2",
            "input": "7\n1 2 1 3 5 6 4",
            "expectedOutput": "5",
            "hidden": true
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> arr(n); for(int i=0; i<n; i++) cin >> arr[i];\n    // Implement binary search\n    return 0;\n}",
    "hints": [
        "Compare middle element with its right neighbor to decide which half to search."
    ],
    "howToThink": [
        "If arr[mid] < arr[mid+1], the peak must be to the right."
    ],
    "approach": "Binary search",
    "pseudocode": "while left < right: mid = left + (right-left)/2; if arr[mid] < arr[mid+1] left = mid+1 else right = mid",
    "explanation": "O(log N) time.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> arr(n); for(int i=0; i<n; i++) cin >> arr[i];\n    int left = 0, right = n - 1;\n    while(left < right) {\n        int mid = left + (right - left) / 2;\n        if(arr[mid] < arr[mid+1]) left = mid + 1;\n        else right = mid;\n    }\n    cout << left;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "binary search"
    ]
},
{
    "id": "prob-10-101",
    "levelId": "level-10",
    "title": "First Bad Version",
    "type": "coding",
    "difficulty": "medium",
    "order": 101,
    "description": "Given n versions [1, 2, ..., n] and an integer B representing the first bad version. Find it. Input: N B. Print B using binary search.",
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
            "input": "5 4",
            "output": "4"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "5 4",
            "expectedOutput": "4",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Use binary search"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\nusing namespace std; int main(){ int n,b; if(cin>>n>>b) cout<<b; return 0; }",
    "pythonSolution": "n,b=map(int,input().split()); print(b)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
    "id": "prob-10-102",
    "levelId": "level-10",
    "title": "Search Insert Position",
    "type": "coding",
    "difficulty": "medium",
    "order": 102,
    "description": "Given a sorted array of N distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. Input: N, array, Target.",
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
            "input": "4\n1 3 5 6\n5",
            "output": "2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n1 3 5 6\n5",
            "expectedOutput": "2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Binary search"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(!(cin>>n)) return 0; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int t; cin>>t; int l=0, r=n-1; while(l<=r){int m=l+(r-l)/2; if(a[m]==t){cout<<m;return 0;} if(a[m]<t) l=m+1; else r=m-1;} cout<<l; return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); t=int(input()); l,r=0,n-1\nwhile l<=r:\n m=(l+r)//2\n if a[m]==t: print(m); exit()\n elif a[m]<t: l=m+1\n else: r=m-1\nprint(l)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
    "id": "prob-10-103",
    "levelId": "level-10",
    "title": "Valid Perfect Square",
    "type": "coding",
    "difficulty": "medium",
    "order": 103,
    "description": "Given a positive integer num, return 1 if num is a perfect square or 0 otherwise.",
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
            "input": "16",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "16",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "BS from 1 to num"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\nusing namespace std; int main(){ long long n; if(cin>>n){ long long l=1, r=n; while(l<=r){long long m=l+(r-l)/2; if(m*m==n){cout<<1; return 0;} if(m*m<n) l=m+1; else r=m-1;} cout<<0; } return 0; }",
    "pythonSolution": "n=int(input()); l,r=1,n\nwhile l<=r:\n m=(l+r)//2\n if m*m==n: print(1); exit()\n elif m*m<n: l=m+1\n else: r=m-1\nprint(0)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
  "id": "prob-10-501",
  "levelId": "level-10",
  "title": "Find Peak Element",
  "type": "coding",
  "difficulty": "medium",
  "order": 501,
  "description": "Find a peak element.",
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
      "input": "4\n1 2 3 1",
      "output": "2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 2 3 1",
      "expectedOutput": "2",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0, r=n-1; while(l<r){int m=l+(r-l)/2; if(a[m]>a[m+1]) r=m; else l=m+1;} cout<<l;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1\nwhile l<r:\n m=(l+r)//2\n if a[m]>a[m+1]: r=m\n else: l=m+1\nprint(l)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-502",
  "levelId": "level-10",
  "title": "Search in Rotated Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 502,
  "description": "Search in rotated sorted array.",
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
      "input": "5\n4 5 1 2 3\n1",
      "output": "2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n4 5 1 2 3\n1",
      "expectedOutput": "2",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int t; cin>>t; int l=0, r=n-1; while(l<=r){int m=l+(r-l)/2; if(a[m]==t){cout<<m; return 0;} if(a[l]<=a[m]){if(t>=a[l]&&t<a[m]) r=m-1; else l=m+1;}else{if(t>a[m]&&t<=a[r]) l=m+1; else r=m-1;}} cout<<-1;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); t=int(input()); l,r=0,n-1\nwhile l<=r:\n m=(l+r)//2\n if a[m]==t: print(m); exit()\n if a[l]<=a[m]:\n  if a[l]<=t<a[m]: r=m-1\n  else: l=m+1\n else:\n  if a[m]<t<=a[r]: l=m+1\n  else: r=m-1\nprint(-1)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-503",
  "levelId": "level-10",
  "title": "Find Minimum in Rotated Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 503,
  "description": "Find the minimum in a rotated sorted array.",
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
      "input": "5\n4 5 1 2 3",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n4 5 1 2 3",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0, r=n-1; while(l<r){int m=l+(r-l)/2; if(a[m]>a[r]) l=m+1; else r=m;} cout<<a[l];} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1\nwhile l<r:\n m=(l+r)//2\n if a[m]>a[r]: l=m+1\n else: r=m\nprint(a[l])",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-504",
  "levelId": "level-10",
  "title": "Capacity to Ship Packages",
  "type": "coding",
  "difficulty": "medium",
  "order": 504,
  "description": "Find minimum capacity to ship all packages in D days.",
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
      "input": "5\n1 2 3 4 5\n2",
      "output": "9"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n1 2 3 4 5\n2",
      "expectedOutput": "9",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<numeric>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); int l=0,r=0; for(int i=0;i<n;i++){cin>>a[i]; l=max(l,a[i]); r+=a[i];} int d; cin>>d; while(l<r){int m=l+(r-l)/2, days=1, cur=0; for(int x:a){if(cur+x>m){days++; cur=0;} cur+=x;} if(days>d) l=m+1; else r=m;} cout<<l;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); d=int(input()); l,r=max(a),sum(a)\nwhile l<r:\n m=(l+r)//2; days,cur=1,0\n for x in a:\n  if cur+x>m: days+=1; cur=0\n  cur+=x\n if days>d: l=m+1\n else: r=m\nprint(l)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-505",
  "levelId": "level-10",
  "title": "Koko Eating Bananas",
  "type": "coding",
  "difficulty": "medium",
  "order": 505,
  "description": "Find minimum eating speed K to eat all bananas in H hours.",
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
      "input": "4\n3 6 7 11\n8",
      "output": "4"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n3 6 7 11\n8",
      "expectedOutput": "4",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<cmath>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); int r=0; for(int i=0;i<n;i++){cin>>a[i]; r=max(r,a[i]);} int h; cin>>h; int l=1; while(l<r){int m=l+(r-l)/2; long long hrs=0; for(int x:a) hrs+=ceil((double)x/m); if(hrs>h) l=m+1; else r=m;} cout<<l;} return 0; }",
  "pythonSolution": "import math; n=int(input()); a=list(map(int,input().split())); h=int(input()); l,r=1,max(a)\nwhile l<r:\n m=(l+r)//2; hrs=sum(math.ceil(x/m) for x in a)\n if hrs>h: l=m+1\n else: r=m\nprint(l)",
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
  "id": "prob-10-501",
  "levelId": "level-10",
  "title": "Find Peak Element",
  "type": "coding",
  "difficulty": "medium",
  "order": 501,
  "description": "Find a peak element.",
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
      "input": "4\n1 2 3 1",
      "output": "2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 2 3 1",
      "expectedOutput": "2",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0, r=n-1; while(l<r){int m=l+(r-l)/2; if(a[m]>a[m+1]) r=m; else l=m+1;} cout<<l;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1\nwhile l<r:\n m=(l+r)//2\n if a[m]>a[m+1]: r=m\n else: l=m+1\nprint(l)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-502",
  "levelId": "level-10",
  "title": "Search in Rotated Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 502,
  "description": "Search in rotated sorted array.",
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
      "input": "5\n4 5 1 2 3\n1",
      "output": "2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n4 5 1 2 3\n1",
      "expectedOutput": "2",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int t; cin>>t; int l=0, r=n-1; while(l<=r){int m=l+(r-l)/2; if(a[m]==t){cout<<m; return 0;} if(a[l]<=a[m]){if(t>=a[l]&&t<a[m]) r=m-1; else l=m+1;}else{if(t>a[m]&&t<=a[r]) l=m+1; else r=m-1;}} cout<<-1;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); t=int(input()); l,r=0,n-1\nwhile l<=r:\n m=(l+r)//2\n if a[m]==t: print(m); exit()\n if a[l]<=a[m]:\n  if a[l]<=t<a[m]: r=m-1\n  else: l=m+1\n else:\n  if a[m]<t<=a[r]: l=m+1\n  else: r=m-1\nprint(-1)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-503",
  "levelId": "level-10",
  "title": "Find Minimum in Rotated Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 503,
  "description": "Find the minimum in a rotated sorted array.",
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
      "input": "5\n4 5 1 2 3",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n4 5 1 2 3",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0, r=n-1; while(l<r){int m=l+(r-l)/2; if(a[m]>a[r]) l=m+1; else r=m;} cout<<a[l];} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1\nwhile l<r:\n m=(l+r)//2\n if a[m]>a[r]: l=m+1\n else: r=m\nprint(a[l])",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-504",
  "levelId": "level-10",
  "title": "Capacity to Ship Packages",
  "type": "coding",
  "difficulty": "medium",
  "order": 504,
  "description": "Find minimum capacity to ship all packages in D days.",
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
      "input": "5\n1 2 3 4 5\n2",
      "output": "9"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n1 2 3 4 5\n2",
      "expectedOutput": "9",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<numeric>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); int l=0,r=0; for(int i=0;i<n;i++){cin>>a[i]; l=max(l,a[i]); r+=a[i];} int d; cin>>d; while(l<r){int m=l+(r-l)/2, days=1, cur=0; for(int x:a){if(cur+x>m){days++; cur=0;} cur+=x;} if(days>d) l=m+1; else r=m;} cout<<l;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); d=int(input()); l,r=max(a),sum(a)\nwhile l<r:\n m=(l+r)//2; days,cur=1,0\n for x in a:\n  if cur+x>m: days+=1; cur=0\n  cur+=x\n if days>d: l=m+1\n else: r=m\nprint(l)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-10-505",
  "levelId": "level-10",
  "title": "Koko Eating Bananas",
  "type": "coding",
  "difficulty": "medium",
  "order": 505,
  "description": "Find minimum eating speed K to eat all bananas in H hours.",
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
      "input": "4\n3 6 7 11\n8",
      "output": "4"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n3 6 7 11\n8",
      "expectedOutput": "4",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<cmath>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); int r=0; for(int i=0;i<n;i++){cin>>a[i]; r=max(r,a[i]);} int h; cin>>h; int l=1; while(l<r){int m=l+(r-l)/2; long long hrs=0; for(int x:a) hrs+=ceil((double)x/m); if(hrs>h) l=m+1; else r=m;} cout<<l;} return 0; }",
  "pythonSolution": "import math; n=int(input()); a=list(map(int,input().split())); h=int(input()); l,r=1,max(a)\nwhile l<r:\n m=(l+r)//2; hrs=sum(math.ceil(x/m) for x in a)\n if hrs>h: l=m+1\n else: r=m\nprint(l)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
}
];
