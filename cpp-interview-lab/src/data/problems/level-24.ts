import { Problem } from '../types';

export const level24Problems: Problem[] = [
    {
        id: 'prob-24-01',
        levelId: 'level-24',
        title: 'Climbing Stairs',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nYou are climbing a staircase. It takes \`N\` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\n*Pattern:* Dynamic Programming (1D)`,
        whyThisMatters: 'This is the "Hello World" of Dynamic Programming. It is literally just the Fibonacci sequence shifted by 1.',
        concepts: ['dynamic programming', 'fibonacci'],
        prerequisites: ['recursion'],
        learningObjectives: ['Define DP state and transition'],
        constraints: ['N <= 45'],
        examples: [{ input: '3', output: '3', explanation: '1+1+1, 1+2, 2+1' }],
        testCases: [
            { id: 'tc1', input: '3', expectedOutput: '3', hidden: false },
            { id: 'tc2', input: '5', expectedOutput: '8', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    if (n <= 2) {\n        cout << n;\n        return 0;\n    }\n    \n    // Create a DP array of size n+1\n    vector<int> dp(n + 1);\n    dp[1] = 1;\n    dp[2] = 2;\n    \n    // dp[i] = dp[i-1] + dp[i-2]\n    \n    return 0;\n}`,
        hints: ['To get to step `i`, you either came from step `i-1` (took 1 step) or step `i-2` (took 2 steps).', 'So `dp[i] = dp[i-1] + dp[i-2]`.'],
        howToThink: ['State: dp[i] = ways to reach step i.', 'Transition: dp[i] = dp[i-1] + dp[i-2]'],
        approach: 'Use an array to store previous two results (tabulation).',
        pseudocode: 'dp[1] = 1, dp[2] = 2\nfor i from 3 to N:\n    dp[i] = dp[i-1] + dp[i-2]\nreturn dp[N]',
        explanation: 'We avoid recomputing by saving answers in an array. This is O(N).',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    if (n <= 2) { cout << n; return 0; }\n    vector<int> dp(n + 1);\n    dp[1] = 1;\n    dp[2] = 2;\n    for(int i = 3; i <= n; i++) {\n        dp[i] = dp[i-1] + dp[i-2];\n    }\n    cout << dp[n];\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['dp']
    },
{
    "id": "prob-24-02",
    "levelId": "level-24",
    "title": "Coin Change",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up, print -1.",
    "whyThisMatters": "Standard DP problem (knapsack variant).",
    "concepts": [
        "dp array"
    ],
    "prerequisites": [
        "dp fundamentals"
    ],
    "learningObjectives": [
        "Bottom-up DP state transitions"
    ],
    "constraints": [
        "Amount <= 1000"
    ],
    "examples": [
        {
            "input": "3\n1 2 5\n11",
            "output": "3"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "3\n1 2 5\n11",
            "expectedOutput": "3",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> coins(n); for(int i=0;i<n;i++) cin >> coins[i];\n    int amount; cin >> amount;\n    // logic\n    return 0;\n}",
    "hints": [
        "Create an array dp of size amount+1, initialized to infinity. dp[0] = 0."
    ],
    "howToThink": [
        "To make amount X, I can try using each coin C. The answer is 1 + dp[X - C]."
    ],
    "approach": "Bottom-up dynamic programming.",
    "pseudocode": "dp[0] = 0; for i=1 to amount: for c in coins: if i-c>=0 dp[i] = min(dp[i], dp[i-c]+1)",
    "explanation": "O(Amount * N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> coins(n);\n    for(int i=0; i<n; i++) cin >> coins[i];\n    int amount; cin >> amount;\n    vector<int> dp(amount + 1, 999999);\n    dp[0] = 0;\n    for(int i=1; i<=amount; i++) {\n        for(int c : coins) {\n            if(i - c >= 0) {\n                dp[i] = min(dp[i], dp[i - c] + 1);\n            }\n        }\n    }\n    if(dp[amount] == 999999) cout << -1;\n    else cout << dp[amount];\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(Amount * N)",
    "spaceComplexity": "O(Amount)",
    "interviewRelevance": "high",
    "tags": [
        "dp"
    ]
},
{
    "id": "prob-24-03",
    "levelId": "level-24",
    "title": "Longest Increasing Subsequence",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    "whyThisMatters": "Classic 1D DP sequence problem.",
    "concepts": [
        "sequence dp"
    ],
    "prerequisites": [
        "dp fundamentals"
    ],
    "learningObjectives": [
        "O(N^2) state transitions for subsequences"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "8\n10 9 2 5 3 7 101 18",
            "output": "4"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "8\n10 9 2 5 3 7 101 18",
            "expectedOutput": "4",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i];\n    // logic\n    return 0;\n}",
    "hints": [
        "dp[i] represents the length of LIS ending exactly at index i."
    ],
    "howToThink": [
        "To extend a sequence, I must find a smaller number before me and add 1 to its LIS length."
    ],
    "approach": "Bottom-up DP.",
    "pseudocode": "dp[i]=1; for i in 1..n: for j in 0..i-1: if a[i]>a[j] dp[i]=max(dp[i], dp[j]+1)",
    "explanation": "O(N^2) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if(n == 0) { cout << 0; return 0; }\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    vector<int> dp(n, 1);\n    int maxLen = 1;\n    for(int i=1; i<n; i++) {\n        for(int j=0; j<i; j++) {\n            if(a[i] > a[j]) {\n                dp[i] = max(dp[i], dp[j] + 1);\n            }\n        }\n        maxLen = max(maxLen, dp[i]);\n    }\n    cout << maxLen;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "dp"
    ]
},
{
    "id": "prob-24-04",
    "levelId": "level-24",
    "title": "Climbing Stairs",
    "type": "coding",
    "difficulty": "easy",
    "order": 4,
    "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "whyThisMatters": "The absolute foundation of Dynamic Programming (equivalent to Fibonacci).",
    "concepts": [
        "dp",
        "fibonacci"
    ],
    "prerequisites": [
        "recursion"
    ],
    "learningObjectives": [
        "Identify overlapping subproblems"
    ],
    "constraints": [
        "N <= 45"
    ],
    "examples": [
        {
            "input": "3",
            "output": "3"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "3",
            "expectedOutput": "3",
            "hidden": false
        },
        {
            "id": "tc2",
            "input": "5",
            "expectedOutput": "8",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    // logic\n    return 0;\n}",
    "hints": [
        "To get to step 5, you either came from step 4 (by taking 1 step) or from step 3 (by taking 2 steps).",
        "Ways(5) = Ways(4) + Ways(3)."
    ],
    "howToThink": [
        "If I know how to get to the previous two steps, I just add them together to know how many ways to get to my current step."
    ],
    "approach": "Bottom-up DP.",
    "pseudocode": "dp[1]=1, dp[2]=2. for i=3 to n: dp[i]=dp[i-1]+dp[i-2]. return dp[n]",
    "explanation": "O(N) time, O(1) space if optimized.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if (n == 1) { cout << 1; return 0; }\n    if (n == 2) { cout << 2; return 0; }\n    int a = 1, b = 2;\n    for(int i=3; i<=n; i++) {\n        int c = a + b;\n        a = b;\n        b = c;\n    }\n    cout << b;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "dp"
    ]
},
{
    "id": "prob-24-05",
    "levelId": "level-24",
    "title": "House Robber",
    "type": "coding",
    "difficulty": "medium",
    "order": 5,
    "description": "You are a professional robber. You cannot rob adjacent houses, or alarms will sound. Given an integer array representing the amount of money of each house, return the maximum amount of money you can rob.",
    "whyThisMatters": "Directly builds on Climbing Stairs, introducing a take or skip decision at each step.",
    "concepts": [
        "1d dp",
        "decisions"
    ],
    "prerequisites": [
        "Climbing Stairs"
    ],
    "learningObjectives": [
        "Formulate a DP recurrence relation involving max()"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "4\n1 2 3 1",
            "output": "4"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n1 2 3 1",
            "expectedOutput": "4",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i];\n    // logic\n    return 0;\n}",
    "hints": [
        "At house i, you have two choices: Rob it (and add to loot from house i-2), or Skip it (and keep loot from house i-1)."
    ],
    "howToThink": [
        "I just need to ask myself at each house: Is it better to skip this house and keep my old money, or rob this house and combine it with the money from two houses ago?"
    ],
    "approach": "Bottom-up DP.",
    "pseudocode": "dp[0]=a[0], dp[1]=max(a[0],a[1]). for i=2 to n-1: dp[i]=max(dp[i-1], dp[i-2]+a[i]). return dp[n-1]",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    if(n == 0) { cout << 0; return 0; }\n    if(n == 1) { cout << a[0]; return 0; }\n    vector<int> dp(n, 0);\n    dp[0] = a[0];\n    dp[1] = max(a[0], a[1]);\n    for(int i=2; i<n; i++) {\n        dp[i] = max(dp[i-1], dp[i-2] + a[i]);\n    }\n    cout << dp[n-1];\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "dp"
    ]
},
{
    "id": "prob-24-207",
    "levelId": "level-24",
    "title": "Decode Ways",
    "type": "coding",
    "difficulty": "hard",
    "order": 207,
    "description": "A message containing letters from A-Z can be encoded into numbers using A=1 ... Z=26. Given a string s containing only digits, return the number of ways to decode it.",
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
            "input": "12",
            "output": "2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "12",
            "expectedOutput": "2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "DP"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<string>\n#include<vector>\nusing namespace std; int main(){ string s; if(cin>>s){int n=s.length(); if(n==0||s[0]=='0'){cout<<0; return 0;} vector<int> dp(n+1,0); dp[0]=1; dp[1]=1; for(int i=2;i<=n;i++){if(s[i-1]!='0') dp[i]+=dp[i-1]; int v=(s[i-2]-'0')*10+(s[i-1]-'0'); if(v>=10&&v<=26) dp[i]+=dp[i-2];} cout<<dp[n];} return 0; }",
    "pythonSolution": "s=input(); n=len(s)\nif not s or s[0]=='0': print(0); exit()\ndp=[0]*(n+1); dp[0]=1; dp[1]=1\nfor i in range(2,n+1):\n if s[i-1]!='0': dp[i]+=dp[i-1]\n v=int(s[i-2:i])\n if 10<=v<=26: dp[i]+=dp[i-2]\nprint(dp[n])",
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
  "id": "prob-24-607",
  "levelId": "level-24",
  "title": "Coin Change",
  "type": "coding",
  "difficulty": "medium",
  "order": 607,
  "description": "Return the fewest number of coins that you need to make up that amount.",
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
      "input": "3\n1 2 5\n11",
      "output": "3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n1 2 5\n11",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> c(n); for(int i=0;i<n;i++) cin>>c[i]; int a; cin>>a; vector<int> dp(a+1, 999999); dp[0]=0; for(int i=1;i<=a;i++){for(int x:c){if(i-x>=0) dp[i]=min(dp[i], dp[i-x]+1);}} cout<<(dp[a]==999999?-1:dp[a]);} return 0; }",
  "pythonSolution": "n=int(input()); c=list(map(int,input().split())); a=int(input())\ndp=[999999]*(a+1); dp[0]=0\nfor i in range(1,a+1):\n for x in c:\n  if i-x>=0: dp[i]=min(dp[i], dp[i-x]+1)\nprint(-1 if dp[a]==999999 else dp[a] )",
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
  "id": "prob-24-706",
  "levelId": "level-24",
  "title": "Longest Increasing Subsequence",
  "type": "coding",
  "difficulty": "hard",
  "order": 706,
  "description": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
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
      "input": "6\n10 9 2 5 3 7",
      "output": "3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\n10 9 2 5 3 7",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n), dp(n,1); int ans=1; for(int i=0;i<n;i++){cin>>a[i]; for(int j=0;j<i;j++){if(a[i]>a[j]) dp[i]=max(dp[i], dp[j]+1);} ans=max(ans,dp[i]);} cout<<ans;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); dp=[1]*n; ans=1\nfor i in range(n):\n for j in range(i):\n  if a[i]>a[j]: dp[i]=max(dp[i], dp[j]+1)\n ans=max(ans,dp[i])\nprint(ans)",
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
  "id": "prob-24-concept-858",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 858,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
  "id": "prob-24-concept-859",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 859,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
  "id": "prob-24-concept-860",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 860,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
  "id": "prob-24-concept-861",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 861,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
  "id": "prob-24-concept-862",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 862,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
  "id": "prob-24-concept-863",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 863,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
  "id": "prob-24-concept-864",
  "levelId": "level-24",
  "title": "Climbing Stairs Concept Check 7",
  "type": "coding",
  "difficulty": "easy",
  "order": 864,
  "description": "This is a conceptual check for Climbing Stairs. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Climbing Stairs.",
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
