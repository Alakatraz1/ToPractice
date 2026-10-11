import { Problem } from '../types';

export const level19Problems: Problem[] = [
    {
        id: 'prob-19-01',
        levelId: 'level-19',
        title: 'Maximum Sum Subarray of Fixed Size K',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nGiven an array of \`N\` integers and an integer \`K\`, find the maximum sum of any contiguous subarray of exactly size \`K\`.\n\n*Pattern:* Sliding Window (Fixed)`,
        whyThisMatters: 'Sliding window optimizes O(N*K) brute force array scanning down to O(N).',
        concepts: ['sliding window'],
        prerequisites: ['loops', 'arrays'],
        learningObjectives: ['Maintain a rolling sum instead of recalculating from scratch'],
        constraints: ['N <= 1000', '1 <= K <= N'],
        examples: [{ input: '5 3\n2 1 5 1 3', output: '9', explanation: 'Subarray [1, 5, 1] sum is 7. [5, 1, 3] sum is 9.' }],
        testCases: [
            { id: 'tc1', input: '5 3\n2 1 5 1 3', expectedOutput: '9', hidden: false },
            { id: 'tc2', input: '4 2\n10 20 30 40', expectedOutput: '70', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, k; cin >> n >> k;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    // 1. Calculate sum of first window (0 to k-1)\n    \n    // 2. Slide window: subtract the element left behind, add the new element\n    \n    return 0;\n}`,
        hints: ['Sum the first K elements. Set `maxSum = currentSum`.', 'Loop `i` from `K` to `N-1`.', '`currentSum = currentSum - arr[i-K] + arr[i]`.'],
        howToThink: ['If I have the sum of [A, B, C], to get the sum of [B, C, D], I just subtract A and add D. I don\'t need to add B and C again!'],
        approach: 'Sum first window. Slide window one by one, updating max sum.',
        pseudocode: 'sum = 0\nfor i=0 to K-1: sum += arr[i]\nmaxSum = sum\nfor i=K to N-1:\n    sum = sum - arr[i-K] + arr[i]\n    maxSum = max(maxSum, sum)\nreturn maxSum',
        explanation: 'We only look at each element twice (once when it enters the window, once when it leaves). This guarantees O(N).',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k; cin >> n >> k;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int sum = 0;\n    for(int i=0; i<k; i++) sum += arr[i];\n    int maxSum = sum;\n    \n    for(int i=k; i<n; i++) {\n        sum = sum - arr[i-k] + arr[i];\n        if (sum > maxSum) maxSum = sum;\n    }\n    cout << maxSum;\n    return 0;\n}`,
        commonMistakes: ['Recomputing the sum of the window from scratch inside a nested loop (O(N*K)).'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['sliding window']
    },
{
    "id": "prob-19-02",
    "levelId": "level-19",
    "title": "Longest Substring Without Repeating Characters",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "Given a string S, find the length of the longest substring without repeating characters.",
    "whyThisMatters": "The most popular sliding window problem of all time.",
    "concepts": [
        "sliding window",
        "hash set"
    ],
    "prerequisites": [
        "strings"
    ],
    "learningObjectives": [
        "Dynamic size sliding window"
    ],
    "constraints": [
        "Length of S <= 1000"
    ],
    "examples": [
        {
            "input": "abcabcbb",
            "output": "3"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "abcabcbb",
            "expectedOutput": "3",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <string>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s; cin >> s;\n    // logic\n    return 0;\n}",
    "hints": [
        "Use a hash set to keep track of characters in the current window.",
        "If a duplicate is found, shrink the window from the left until the duplicate is removed."
    ],
    "howToThink": [
        "Expand the window to the right. If I hit a snag (duplicate), I must shrink from the left until the snag goes away."
    ],
    "approach": "Variable-size sliding window.",
    "pseudocode": "left=0, maxLen=0; for right in 0..n-1: while set contains s[right]: set.remove(s[left]); left++; set.insert(s[right]); maxLen=max(maxLen, right-left+1)",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <string>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s; if(!(cin >> s)) { cout << 0; return 0; }\n    unordered_set<char> window;\n    int left = 0, maxLen = 0;\n    for(int right = 0; right < s.length(); right++) {\n        while(window.count(s[right])) {\n            window.erase(s[left]);\n            left++;\n        }\n        window.insert(s[right]);\n        maxLen = max(maxLen, right - left + 1);\n    }\n    cout << maxLen;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K) where K is charset",
    "interviewRelevance": "high",
    "tags": [
        "sliding window"
    ]
},
{
    "id": "prob-19-03",
    "levelId": "level-19",
    "title": "Minimum Size Subarray Sum",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target. If there is no such subarray, return 0.",
    "whyThisMatters": "Fundamental pattern for finding the MINIMUM window satisfying a condition.",
    "concepts": [
        "sliding window"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Shrink window to optimize condition"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "7\n2 3 1 2 4 3\n7",
            "output": "2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n2 3 1 2 4 3\n7",
            "expectedOutput": "2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin>>n; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int target; cin>>target;\n    // logic\n    return 0;\n}",
    "hints": [
        "Expand the right pointer to add to your sum.",
        "When sum >= target, update your minimal length, then shrink the left pointer to see if you can find a smaller valid window."
    ],
    "howToThink": [
        "Eat elements until you reach the target. Once you reach it, start spitting out elements from the left to see how small you can make the group while still hitting the target."
    ],
    "approach": "Variable-size sliding window.",
    "pseudocode": "left=0, sum=0, minLen=inf. for right in 0..n-1: sum+=a[right]; while sum >= target: minLen=min(minLen, right-left+1); sum-=a[left]; left++; return minLen",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    int target; cin >> target;\n    \n    int left = 0, sum = 0, minLen = 999999;\n    for(int right = 0; right < n; right++) {\n        sum += a[right];\n        while(sum >= target) {\n            minLen = min(minLen, right - left + 1);\n            sum -= a[left];\n            left++;\n        }\n    }\n    if(minLen == 999999) cout << 0;\n    else cout << minLen;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "sliding window"
    ]
},
{
    "id": "prob-19-204",
    "levelId": "level-19",
    "title": "Max Consecutive Ones III",
    "type": "coding",
    "difficulty": "hard",
    "order": 204,
    "description": "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
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
            "input": "11\n1 1 1 0 0 0 1 1 1 1 0\n2",
            "output": "6"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "11\n1 1 1 0 0 0 1 1 1 1 0\n2",
            "expectedOutput": "6",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Sliding window"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k; cin>>k; int l=0, z=0, ans=0; for(int r=0;r<n;r++){if(a[r]==0) z++; while(z>k){if(a[l]==0) z--; l++;} if(r-l+1>ans) ans=r-l+1;} cout<<ans;} return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=int(input()); l,z,ans=0,0,0\nfor r in range(n):\n if a[r]==0: z+=1\n while z>k:\n  if a[l]==0: z-=1\n  l+=1\n ans=max(ans,r-l+1)\nprint(ans)",
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
  "id": "prob-19-601",
  "levelId": "level-19",
  "title": "Longest Substring Without Repeating Characters",
  "type": "coding",
  "difficulty": "medium",
  "order": 601,
  "description": "Find the length of the longest substring without repeating characters.",
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
      "input": "abcabcbb",
      "output": "3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "abcabcbb",
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
  "solution": "#include<iostream>\n#include<string>\n#include<unordered_map>\nusing namespace std; int main(){ string s; if(cin>>s){unordered_map<char,int> m; int l=0, ans=0; for(int r=0;r<s.length();r++){if(m.count(s[r])) l=max(l,m[s[r]]+1); m[s[r]]=r; ans=max(ans,r-l+1);} cout<<ans;} return 0; }",
  "pythonSolution": "s=input(); m={}; l,ans=0,0\nfor r,c in enumerate(s):\n if c in m: l=max(l,m[c]+1)\n m[c]=r; ans=max(ans,r-l+1)\nprint(ans)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-19-602",
  "levelId": "level-19",
  "title": "Find All Anagrams in a String",
  "type": "coding",
  "difficulty": "medium",
  "order": 602,
  "description": "Find all starting indices of p's anagrams in s. Print size then indices.",
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
      "input": "cbaebabacd\nabc",
      "output": "2\n0 6"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "cbaebabacd\nabc",
      "expectedOutput": "2\n0 6",
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
  "solution": "#include<iostream>\n#include<string>\n#include<vector>\nusing namespace std; int main(){ string s,p; if(cin>>s>>p){if(s.length()<p.length()){cout<<0;return 0;} vector<int> c(26,0), w(26,0), ans; for(char x:p) c[x-'a']++; for(int i=0;i<p.length();i++) w[s[i]-'a']++; if(c==w) ans.push_back(0); for(int i=p.length();i<s.length();i++){w[s[i]-'a']++; w[s[i-p.length()]-'a']--; if(c==w) ans.push_back(i-p.length()+1);} cout<<ans.size()<<'\\n'; for(int x:ans) cout<<x<<' ';} return 0; }",
  "pythonSolution": "s=input(); p=input(); n,m=len(s),len(p)\nif n<m: print(0); exit()\nc,w=[0]*26,[0]*26\nfor x in p: c[ord(x)-97]+=1\nfor i in range(m): w[ord(s[i])-97]+=1\nans=[0] if c==w else []\nfor i in range(m,n):\n w[ord(s[i])-97]+=1; w[ord(s[i-m])-97]-=1\n if c==w: ans.append(i-m+1)\nprint(len(ans)); print(*ans)",
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
  "id": "prob-19-concept-822",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 822,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
  "id": "prob-19-concept-823",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 823,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
  "id": "prob-19-concept-824",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 824,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
  "id": "prob-19-concept-825",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 825,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
  "id": "prob-19-concept-826",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 826,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
  "id": "prob-19-concept-827",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 827,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
  "id": "prob-19-concept-828",
  "levelId": "level-19",
  "title": "Maximum Sum Subarray of Fixed Size K Concept Check 7",
  "type": "coding",
  "difficulty": "easy",
  "order": 828,
  "description": "This is a conceptual check for Maximum Sum Subarray of Fixed Size K. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Sum Subarray of Fixed Size K.",
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
