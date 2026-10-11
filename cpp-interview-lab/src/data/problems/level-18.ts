import { Problem } from '../types';

export const level18Problems: Problem[] = [
    {
        id: 'prob-18-01',
        levelId: 'level-18',
        title: 'Valid Palindrome',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `**Task:**\nA string is a palindrome if it reads the same forward and backward.\nGiven a string \`S\` (all lowercase letters, no spaces), print \`Yes\` if it is a palindrome, \`No\` otherwise.\n\n*Pattern:* Two Pointers (Opposite Ends)`,
        whyThisMatters: 'Using two pointers to scan inwards from opposite ends is a fundamental pattern for arrays and strings.',
        concepts: ['two pointers'],
        prerequisites: ['strings'],
        learningObjectives: ['Use left and right pointers simultaneously'],
        constraints: ['Length <= 1000'],
        examples: [{ input: 'racecar', output: 'Yes' }],
        testCases: [
            { id: 'tc1', input: 'racecar', expectedOutput: 'Yes', hidden: false },
            { id: 'tc2', input: 'hello', expectedOutput: 'No', hidden: false },
            { id: 'tc3', input: 'a', expectedOutput: 'Yes', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s; cin >> s;\n    int left = 0;\n    int right = s.length() - 1;\n    \n    // while left < right, check characters\n    \n    cout << "Yes";\n    return 0;\n}`,
        hints: ['If `s[left] != s[right]`, it is NOT a palindrome. Print No and return 0.', 'Otherwise, `left++` and `right--`.'],
        howToThink: ['I can check the outer shell, then step inwards to check the inner shell, all the way to the core.'],
        approach: 'Initialize left and right pointers. Compare characters while moving inwards.',
        pseudocode: 'left=0, right=len-1\nwhile left < right:\n    if s[left] != s[right]: return No\n    left++, right--\nreturn Yes',
        explanation: 'We only do N/2 comparisons, which is O(N) time.',
        solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s; cin >> s;\n    int left = 0, right = s.length() - 1;\n    while(left < right) {\n        if(s[left] != s[right]) {\n            cout << "No";\n            return 0;\n        }\n        left++; right--;\n    }\n    cout << "Yes";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['two pointers']
    },
    {
        id: 'prob-18-02',
        levelId: 'level-18',
        title: 'Move Zeroes',
        type: 'coding',
        difficulty: 'medium',
        order: 2,
        description: `**Task:**\nGiven an array of \`N\` integers, move all \`0\`s to the end of it while maintaining the relative order of the non-zero elements.\n**Requirement:** Do this in-place without making a copy of the array.\n\n*Pattern:* Two Pointers (Slow and Fast)`,
        whyThisMatters: 'Slow/Fast pointers are used to partition arrays in-place (like in Quicksort).',
        concepts: ['two pointers', 'slow/fast'],
        prerequisites: ['arrays'],
        learningObjectives: ['Use a slow pointer to track the insertion point, and a fast pointer to scan'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n0 1 0 3 12', output: '1 3 12 0 0' }],
        testCases: [
            { id: 'tc1', input: '5\n0 1 0 3 12', expectedOutput: '1 3 12 0 0', hidden: false },
            { id: 'tc2', input: '1\n0', expectedOutput: '0', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int insertPos = 0;\n    // Implement logic\n    \n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        hints: ['Loop through the array. If the number is NOT zero, put it at `arr[insertPos]`, then increment `insertPos`.', 'After the loop, fill the rest of the array from `insertPos` to `n-1` with zeroes.'],
        howToThink: ['I have a "writer" pointer and a "reader" pointer. The reader scans. Whenever it sees a non-zero, it tells the writer to write it down. Then the writer moves forward.'],
        approach: 'Use a slow pointer for the next non-zero position. Scan with fast pointer. Fill remaining with 0s.',
        pseudocode: 'insert = 0\nfor i from 0 to N-1:\n    if arr[i] != 0:\n        arr[insert] = arr[i]\n        insert++\nwhile insert < N:\n    arr[insert] = 0\n    insert++',
        explanation: 'This shifts elements efficiently without needing a second array, achieving O(1) space.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int insertPos = 0;\n    for(int i=0; i<n; i++) {\n        if (arr[i] != 0) {\n            arr[insertPos] = arr[i];\n            insertPos++;\n        }\n    }\n    while(insertPos < n) {\n        arr[insertPos] = 0;\n        insertPos++;\n    }\n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['two pointers']
    },
{
    "id": "prob-18-03",
    "levelId": "level-18",
    "title": "Container With Most Water",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "You are given an integer array heights where heights[i] represents the height of a vertical line. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum area of water.",
    "whyThisMatters": "Classic two pointer optimization problem.",
    "concepts": [
        "two pointers",
        "greedy"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Optimize O(N^2) to O(N) by eliminating search space"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "9\n1 8 6 2 5 4 8 3 7",
            "output": "49"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "9\n1 8 6 2 5 4 8 3 7",
            "expectedOutput": "49",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> h(n); for(int i=0;i<n;i++) cin >> h[i];\n    // logic\n    return 0;\n}",
    "hints": [
        "Start with pointers at both ends. Move the pointer pointing to the shorter line inwards."
    ],
    "howToThink": [
        "The area is limited by the shorter line. Moving the taller line inwards cannot possibly increase the area."
    ],
    "approach": "Two pointers from outside in.",
    "pseudocode": "l=0, r=n-1; maxArea=0; while l<r: maxArea=max(maxArea, min(h[l],h[r])*(r-l)); if h[l]<h[r]: l++ else: r--",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> h(n);\n    for(int i=0; i<n; i++) cin >> h[i];\n    int l = 0, r = n - 1;\n    int maxArea = 0;\n    while(l < r) {\n        int area = min(h[l], h[r]) * (r - l);\n        if(area > maxArea) maxArea = area;\n        if(h[l] < h[r]) l++;\n        else r--;\n    }\n    cout << maxArea;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "two pointers"
    ]
},
{
    "id": "prob-18-04",
    "levelId": "level-18",
    "title": "Two Sum II - Input Array Is Sorted",
    "type": "coding",
    "difficulty": "easy",
    "order": 4,
    "description": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Print their 1-based indices.",
    "whyThisMatters": "Introduces opposite-directional two pointers for searching.",
    "concepts": [
        "two pointers"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Optimize search space using sorted property"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "4\n2 7 11 15\n9",
            "output": "1 2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n2 7 11 15\n9",
            "expectedOutput": "1 2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin>>n; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int t; cin>>t;\n    // logic\n    return 0;\n}",
    "hints": [
        "Since it is sorted, if the sum of left and right elements is too big, move the right pointer to the left to decrease the sum."
    ],
    "howToThink": [
        "Sorted arrays give us directionality. Too small? Move left pointer up. Too big? Move right pointer down."
    ],
    "approach": "Two pointers from ends.",
    "pseudocode": "l=0, r=n-1. while l<r: sum=a[l]+a[r]. if sum==t return l+1, r+1. else if sum<t l++. else r--.",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    int t; cin >> t;\n    int l = 0, r = n - 1;\n    while(l < r) {\n        int sum = a[l] + a[r];\n        if (sum == t) { cout << l+1 << \" \" << r+1; return 0; }\n        else if (sum < t) l++;\n        else r--;\n    }\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "two pointers"
    ]
},
{
    "id": "prob-18-05",
    "levelId": "level-18",
    "title": "3Sum Concept",
    "type": "coding",
    "difficulty": "medium",
    "order": 5,
    "description": "Given an integer array nums, return 1 if there exist three elements a, b, c such that a + b + c = 0, else 0.",
    "whyThisMatters": "Builds directly on Two Sum II. One of the most frequently asked questions.",
    "concepts": [
        "two pointers",
        "sorting"
    ],
    "prerequisites": [
        "Two Sum II"
    ],
    "learningObjectives": [
        "Reduce a 3D problem into a 2D problem"
    ],
    "constraints": [
        "N <= 500"
    ],
    "examples": [
        {
            "input": "6\n-1 0 1 2 -1 -4",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n-1 0 1 2 -1 -4",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin>>n; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i];\n    // logic\n    return 0;\n}",
    "hints": [
        "Sort the array first.",
        "For each element `a[i]`, the problem reduces to finding Two Sum II on the remaining elements for a target of `-a[i]`."
    ],
    "howToThink": [
        "If I fix one number, I just need to find two other numbers that sum to the negative of my fixed number."
    ],
    "approach": "Sort, then loop with Two Pointers inside.",
    "pseudocode": "sort(a). for i from 0 to n-3: l=i+1, r=n-1. while l<r: sum=a[i]+a[l]+a[r]. if sum==0 return 1. if sum<0 l++ else r--. return 0.",
    "explanation": "O(N^2) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    sort(a.begin(), a.end());\n    for(int i=0; i<n-2; i++) {\n        int l = i + 1, r = n - 1;\n        while(l < r) {\n            int sum = a[i] + a[l] + a[r];\n            if (sum == 0) { cout << 1; return 0; }\n            if (sum < 0) l++;\n            else r--;\n        }\n    }\n    cout << 0;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "two pointers"
    ]
},
{
    "id": "prob-18-202",
    "levelId": "level-18",
    "title": "Valid Palindrome",
    "type": "coding",
    "difficulty": "hard",
    "order": 202,
    "description": "Given a string s, return 1 if it is a palindrome, or 0 otherwise.",
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
            "input": "racecar",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "racecar",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Two Pointers"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<string>\nusing namespace std; int main(){ string s; if(cin>>s){int l=0, r=s.length()-1; while(l<r){if(s[l]!=s[r]){cout<<0;return 0;} l++;r--;} cout<<1;} return 0; }",
    "pythonSolution": "s=input(); print(1 if s==s[::-1] else 0)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
    "id": "prob-18-203",
    "levelId": "level-18",
    "title": "Trapping Rain Water",
    "type": "coding",
    "difficulty": "hard",
    "order": 203,
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
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
            "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
            "output": "6"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
            "expectedOutput": "6",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Two Pointers"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0,r=n-1,maxL=0,maxR=0,ans=0; while(l<=r){if(a[l]<=a[r]){if(a[l]>=maxL) maxL=a[l]; else ans+=maxL-a[l]; l++;}else{if(a[r]>=maxR) maxR=a[r]; else ans+=maxR-a[r]; r--;}} cout<<ans;} return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1; ml,mr,ans=0,0,0\nwhile l<=r:\n if a[l]<=a[r]:\n  if a[l]>=ml: ml=a[l]\n  else: ans+=ml-a[l]\n  l+=1\n else:\n  if a[r]>=mr: mr=a[r]\n  else: ans+=mr-a[r]\n  r-=1\nprint(ans)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
  "id": "prob-18-515",
  "levelId": "level-18",
  "title": "Squares of a Sorted Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 515,
  "description": "Return array of squares sorted.",
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
      "input": "5\n-4 -1 0 3 10",
      "output": "0 1 9 16 100"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n-4 -1 0 3 10",
      "expectedOutput": "0 1 9 16 100",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n), ans(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0, r=n-1; for(int i=n-1;i>=0;i--){if(abs(a[l])>abs(a[r])){ans[i]=a[l]*a[l]; l++;}else{ans[i]=a[r]*a[r]; r--;}} for(int x:ans) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1; ans=[0]*n\nfor i in range(n-1,-1,-1):\n if abs(a[l])>abs(a[r]): ans[i]=a[l]*a[l]; l+=1\n else: ans[i]=a[r]*a[r]; r-=1\nprint(*ans)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-18-516",
  "levelId": "level-18",
  "title": "Remove Duplicates from Sorted Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 516,
  "description": "Remove duplicates in-place. Print count then unique elements.",
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
      "input": "3\n1 1 2",
      "output": "2\n1 2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 1 2",
      "expectedOutput": "2\n1 2",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){if(n==0){cout<<0;return 0;} vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k=1; for(int i=1;i<n;i++){if(a[i]!=a[i-1]){a[k]=a[i]; k++;}} cout<<k<<'\\n'; for(int i=0;i<k;i++) cout<<a[i]<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=1\nfor i in range(1,n):\n if a[i]!=a[i-1]: a[k]=a[i]; k+=1\nprint(k); print(*(a[:k]))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-18-517",
  "levelId": "level-18",
  "title": "Move Zeroes",
  "type": "coding",
  "difficulty": "medium",
  "order": 517,
  "description": "Move all 0's to the end.",
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
      "input": "5\n0 1 0 3 12",
      "output": "1 3 12 0 0"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n0 1 0 3 12",
      "expectedOutput": "1 3 12 0 0",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0; for(int r=0;r<n;r++){if(a[r]!=0){swap(a[l],a[r]); l++;}} for(int x:a) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l=0\nfor r in range(n):\n if a[r]!=0: a[l],a[r]=a[r],a[l]; l+=1\nprint(*a)",
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
  "id": "prob-18-515",
  "levelId": "level-18",
  "title": "Squares of a Sorted Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 515,
  "description": "Return array of squares sorted.",
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
      "input": "5\n-4 -1 0 3 10",
      "output": "0 1 9 16 100"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n-4 -1 0 3 10",
      "expectedOutput": "0 1 9 16 100",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n), ans(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0, r=n-1; for(int i=n-1;i>=0;i--){if(abs(a[l])>abs(a[r])){ans[i]=a[l]*a[l]; l++;}else{ans[i]=a[r]*a[r]; r--;}} for(int x:ans) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l,r=0,n-1; ans=[0]*n\nfor i in range(n-1,-1,-1):\n if abs(a[l])>abs(a[r]): ans[i]=a[l]*a[l]; l+=1\n else: ans[i]=a[r]*a[r]; r-=1\nprint(*ans)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-18-516",
  "levelId": "level-18",
  "title": "Remove Duplicates from Sorted Array",
  "type": "coding",
  "difficulty": "medium",
  "order": 516,
  "description": "Remove duplicates in-place. Print count then unique elements.",
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
      "input": "3\n1 1 2",
      "output": "2\n1 2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 1 2",
      "expectedOutput": "2\n1 2",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){if(n==0){cout<<0;return 0;} vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k=1; for(int i=1;i<n;i++){if(a[i]!=a[i-1]){a[k]=a[i]; k++;}} cout<<k<<'\\n'; for(int i=0;i<k;i++) cout<<a[i]<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=1\nfor i in range(1,n):\n if a[i]!=a[i-1]: a[k]=a[i]; k+=1\nprint(k); print(*(a[:k]))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-18-517",
  "levelId": "level-18",
  "title": "Move Zeroes",
  "type": "coding",
  "difficulty": "medium",
  "order": 517,
  "description": "Move all 0's to the end.",
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
      "input": "5\n0 1 0 3 12",
      "output": "1 3 12 0 0"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "5\n0 1 0 3 12",
      "expectedOutput": "1 3 12 0 0",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int l=0; for(int r=0;r<n;r++){if(a[r]!=0){swap(a[l],a[r]); l++;}} for(int x:a) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); l=0\nfor r in range(n):\n if a[r]!=0: a[l],a[r]=a[r],a[l]; l+=1\nprint(*a)",
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
  "id": "prob-18-concept-819",
  "levelId": "level-18",
  "title": "Valid Palindrome Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 819,
  "description": "This is a conceptual check for Valid Palindrome. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Valid Palindrome.",
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
  "id": "prob-18-concept-820",
  "levelId": "level-18",
  "title": "Valid Palindrome Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 820,
  "description": "This is a conceptual check for Valid Palindrome. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Valid Palindrome.",
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
  "id": "prob-18-concept-821",
  "levelId": "level-18",
  "title": "Valid Palindrome Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 821,
  "description": "This is a conceptual check for Valid Palindrome. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Valid Palindrome.",
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
