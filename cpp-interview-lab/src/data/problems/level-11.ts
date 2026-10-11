import { Problem } from '../types';

export const level11Problems: Problem[] = [
    {
        id: 'prob-11-01',
        levelId: 'level-11',
        title: 'Built-in Sort (Ascending)',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `Sorting is so common that C++ provides a highly optimized \`sort()\` function in the \`<algorithm>\` library.\n\n**Task:**\nRead \`N\` and an array of \`N\` integers.\nSort the array in **ascending** order using \`sort(arr.begin(), arr.end());\` and print it.`,
        whyThisMatters: 'In technical interviews, you almost NEVER write your own sorting algorithm (like Bubble Sort) unless explicitly asked. You use the built-in function.',
        concepts: ['sorting', 'algorithm library'],
        prerequisites: ['vectors'],
        learningObjectives: ['Include `<algorithm>`', 'Use `sort(vector.begin(), vector.end())`'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n9 1 4 7 2', output: '1 2 4 7 9' }],
        testCases: [
            { id: 'tc1', input: '5\n9 1 4 7 2', expectedOutput: '1 2 4 7 9', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    // Sort the array\n    \n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        hints: ['Just call `sort(arr.begin(), arr.end());`'],
        howToThink: ['C++ handles the O(N log N) sorting internally using Introsort (a mix of Quicksort, Heapsort, and Insertion sort).'],
        approach: 'Call standard library sort.',
        pseudocode: 'sort(arr)\nprint arr',
        explanation: 'Always use the standard library `sort` in interviews. It is faster and bug-free.',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    sort(arr.begin(), arr.end());\n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(log N)', interviewRelevance: 'high', tags: ['sorting']
    },
    {
        id: 'prob-11-02',
        levelId: 'level-11',
        title: 'Built-in Sort (Descending)',
        type: 'coding',
        difficulty: 'easy',
        order: 2,
        description: `**Task:**\nRead \`N\` and an array of \`N\` integers.\nSort the array in **descending** order.\n\n*Hint:* You can either sort ascending and reverse the array, or pass a third argument to sort: \`greater<int>()\`.`,
        whyThisMatters: 'Shows how to customize standard algorithms.',
        concepts: ['sorting', 'comparators'],
        prerequisites: ['sorting'],
        learningObjectives: ['Sort in reverse order'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n9 1 4 7 2', output: '9 7 4 2 1' }],
        testCases: [
            { id: 'tc1', input: '5\n9 1 4 7 2', expectedOutput: '9 7 4 2 1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    // Sort descending\n    sort(arr.begin(), arr.end(), greater<int>());\n    \n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        hints: ['Use `sort(arr.begin(), arr.end(), greater<int>());`'],
        howToThink: ['`greater<int>()` tells the sorting algorithm to put larger items first.'],
        approach: 'Call sort with greater comparator.',
        pseudocode: 'sort(arr, greater)\nprint arr',
        explanation: 'Using `greater<int>()` is the standard C++ way to sort descending.',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    sort(arr.begin(), arr.end(), greater<int>());\n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(log N)', interviewRelevance: 'low', tags: ['sorting']
    },
    {
        id: 'prob-11-03',
        levelId: 'level-11',
        title: 'Check Array Equality via Sorting',
        type: 'coding',
        difficulty: 'medium',
        order: 3,
        description: `**Task:**\nYou are given two arrays A and B of size N.\nCan Array A be made exactly equal to Array B by rearranging its elements?\nPrint \`Yes\` or \`No\`.\n\n*Pattern:* Sorting as a preprocessing step.`,
        whyThisMatters: 'Sorting normalizes data. If two arrays contain the same elements in mixed orders, sorting them will make them identical.',
        concepts: ['sorting', 'anagrams/permutations'],
        prerequisites: ['sorting', 'array equality'],
        learningObjectives: ['Use sorting to solve permutation equivalence'],
        constraints: ['N <= 1000'],
        examples: [{ input: '3\n1 2 3\n3\n3 1 2', output: 'Yes' }],
        testCases: [
            { id: 'tc1', input: '3\n1 2 3\n3\n3 1 2', expectedOutput: 'Yes', hidden: false },
            { id: 'tc2', input: '3\n1 2 3\n3\n1 2 4', expectedOutput: 'No', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    int m; cin >> m;\n    vector<int> b(m);\n    for(int i=0; i<m; i++) cin >> b[i];\n    \n    // Implement logic\n    \n    return 0;\n}`,
        hints: ['If `n != m`, return No.', 'Sort array A. Sort array B.', 'If `A == B`, return Yes.'],
        howToThink: ['If they are jumbled up versions of each other, sorting them will un-jumble them into the exact same sequence.'],
        approach: 'Check lengths, sort both, compare element by element (or use == operator).',
        pseudocode: 'sort(a)\nsort(b)\nif a == b: print Yes\nelse: print No',
        explanation: 'This is O(N log N). In a later level, we will solve this in O(N) using Hash Maps, but sorting is an excellent strategy when memory is tight.',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    int m; cin >> m;\n    vector<int> b(m);\n    for(int i=0; i<m; i++) cin >> b[i];\n    if (n != m) { cout << "No"; return 0; }\n    sort(a.begin(), a.end());\n    sort(b.begin(), b.end());\n    if (a == b) cout << "Yes";\n    else cout << "No";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(log N)', interviewRelevance: 'medium', tags: ['sorting']
    },
    {
        id: 'prob-11-04',
        levelId: 'level-11',
        title: 'Level Challenge: Minimum Difference',
        type: 'coding',
        difficulty: 'medium',
        order: 4,
        description: `**Task:**\nGiven an array of \`N\` integers, find the minimum absolute difference between ANY two elements.\n(Print the difference, which is always positive or zero).\n\n*Example:* [3, 9, 50, 10, 4]. Minimum difference is between 3 and 4 (diff is 1).`,
        whyThisMatters: 'Sorting brings elements with the closest values adjacent to each other.',
        concepts: ['sorting', 'adjacent comparison'],
        prerequisites: ['sorting', 'minimum'],
        learningObjectives: ['Optimize O(N^2) pair-checking to O(N log N) using sorting'],
        constraints: ['N <= 1000', 'Use `abs(a - b)` for absolute difference.'],
        examples: [{ input: '5\n3 9 50 10 4', output: '1' }],
        testCases: [
            { id: 'tc1', input: '5\n3 9 50 10 4', expectedOutput: '1', hidden: false },
            { id: 'tc2', input: '3\n1 100 200', expectedOutput: '99', hidden: false },
            { id: 'tc3', input: '4\n10 10 20 30', expectedOutput: '0', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    // If we sort the array, the closest elements will be next to each other!\n    \n    return 0;\n}`,
        hints: ['Sort the array.', 'Loop `i` from 1 to `n-1`. Check the difference between `arr[i]` and `arr[i-1]`.', 'Keep a running minimum of that difference.'],
        howToThink: ['Brute force: Check every element against every other element (O(N^2)).', 'Better: If I sort it, the closest numbers MUST be neighbors! (O(N log N)).'],
        approach: 'Sort array. Compare adjacent elements to find minimum difference.',
        pseudocode: 'sort(arr)\nmin_diff = infinity\nfor i from 1 to N-1:\n    diff = arr[i] - arr[i-1]\n    if diff < min_diff:\n        min_diff = diff\nprint min_diff',
        explanation: 'Sorting acts as a powerful preprocessing step that simplifies relationships between elements.',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    if (n < 2) return 0;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    sort(arr.begin(), arr.end());\n    int min_diff = 9999999;\n    for(int i=1; i<n; i++) {\n        int diff = arr[i] - arr[i-1];\n        if (diff < min_diff) min_diff = diff;\n    }\n    cout << min_diff;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(log N)', interviewRelevance: 'high', tags: ['challenge', 'sorting']
    },
{
    "id": "prob-11-04",
    "levelId": "level-11",
    "title": "Merge Intervals",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals. First input is N (number of intervals), followed by N pairs of integers.",
    "whyThisMatters": "Classic interval problem requiring sorting first.",
    "concepts": [
        "sorting",
        "intervals"
    ],
    "prerequisites": [
        "sorting"
    ],
    "learningObjectives": [
        "Sort arrays of pairs"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "4\n1 3\n2 6\n8 10\n15 18",
            "output": "1 6\n8 10\n15 18"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n1 3\n2 6\n8 10\n15 18",
            "expectedOutput": "1 6\n8 10\n15 18",
            "hidden": false
        },
        {
            "id": "tc2",
            "input": "2\n1 4\n4 5",
            "expectedOutput": "1 5",
            "hidden": true
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; \n    // read intervals and logic\n    return 0;\n}",
    "hints": [
        "Sort the intervals by their start time.",
        "Iterate through the sorted intervals and merge if current interval overlaps with the last merged one."
    ],
    "howToThink": [
        "If they are sorted by start time, overlapping intervals will always be exactly next to each other."
    ],
    "approach": "Sort and merge.",
    "pseudocode": "sort(intervals); ans.push(intervals[0]); for intv in intervals: if intv[0] <= ans.last()[1]: ans.last()[1] = max(ans.last()[1], intv[1]) else ans.push(intv)",
    "explanation": "O(N log N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if(n == 0) return 0;\n    vector<pair<int,int>> intervals(n);\n    for(int i=0; i<n; i++) cin >> intervals[i].first >> intervals[i].second;\n    sort(intervals.begin(), intervals.end());\n    vector<pair<int,int>> merged;\n    merged.push_back(intervals[0]);\n    for(int i=1; i<n; i++) {\n        if(intervals[i].first <= merged.back().second) {\n            merged.back().second = max(merged.back().second, intervals[i].second);\n        } else {\n            merged.push_back(intervals[i]);\n        }\n    }\n    for(auto& p : merged) cout << p.first << \" \" << p.second << \"\\n\";\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "sorting",
        "intervals"
    ]
},
{
    "id": "prob-11-104",
    "levelId": "level-11",
    "title": "Sort Colors",
    "type": "coding",
    "difficulty": "medium",
    "order": 104,
    "description": "Given an array with n objects colored red, white, or blue (0, 1, 2), sort them in-place. Print array.",
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
            "input": "6\n2 0 2 1 1 0",
            "output": "0 0 1 1 2 2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n2 0 2 1 1 0",
            "expectedOutput": "0 0 1 1 2 2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Dutch National Flag"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); int c0=0,c1=0,c2=0; for(int i=0;i<n;i++){cin>>a[i]; if(a[i]==0) c0++; else if(a[i]==1) c1++; else c2++;} for(int i=0;i<c0;i++) cout<<0<<' '; for(int i=0;i<c1;i++) cout<<1<<' '; for(int i=0;i<c2;i++) cout<<2<<' ';} return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); a.sort(); print(*a)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
    "id": "prob-11-105",
    "levelId": "level-11",
    "title": "Kth Largest Element",
    "type": "coding",
    "difficulty": "medium",
    "order": 105,
    "description": "Given an integer array nums and an integer k, return the kth largest element in the array.",
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
            "input": "6\n3 2 1 5 6 4\n2",
            "output": "5"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n3 2 1 5 6 4\n2",
            "expectedOutput": "5",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Sort or heap"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k; cin>>k; sort(a.begin(), a.end(), greater<int>()); cout<<a[k-1];} return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=int(input()); a.sort(reverse=True); print(a[k-1])",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
  "id": "prob-11-506",
  "levelId": "level-11",
  "title": "Merge Intervals",
  "type": "coding",
  "difficulty": "medium",
  "order": 506,
  "description": "Merge overlapping intervals. Print count then intervals.",
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
      "input": "4\n1 3\n2 6\n8 10\n15 18",
      "output": "3\n1 6\n8 10\n15 18"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 3\n2 6\n8 10\n15 18",
      "expectedOutput": "3\n1 6\n8 10\n15 18",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<pair<int,int>> a(n); for(int i=0;i<n;i++) cin>>a[i].first>>a[i].second; sort(a.begin(),a.end()); vector<pair<int,int>> ans; for(auto p:a){if(ans.empty()||ans.back().second<p.first) ans.push_back(p); else ans.back().second=max(ans.back().second,p.second);} cout<<ans.size()<<'\\n'; for(auto p:ans) cout<<p.first<<' '<<p.second<<'\\n';} return 0; }",
  "pythonSolution": "n=int(input()); a=[tuple(map(int,input().split())) for _ in range(n)]; a.sort(); ans=[]\nfor x,y in a:\n if not ans or ans[-1][1]<x: ans.append([x,y])\n else: ans[-1][1]=max(ans[-1][1],y)\nprint(len(ans))\nfor x,y in ans: print(f'{x} {y}')",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-11-507",
  "levelId": "level-11",
  "title": "Largest Number",
  "type": "coding",
  "difficulty": "medium",
  "order": 507,
  "description": "Arrange numbers to form largest string.",
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
      "input": "2\n10 2",
      "output": "210"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "2\n10 2",
      "expectedOutput": "210",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<string>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<string> a(n); for(int i=0;i<n;i++) cin>>a[i]; sort(a.begin(),a.end(),[](string x,string y){return x+y>y+x;}); if(a[0]==\"0\") cout<<0; else {for(string s:a) cout<<s;} } return 0; }",
  "pythonSolution": "import functools; n=int(input()); a=input().split(); a.sort(key=functools.cmp_to_key(lambda x,y: -1 if x+y>y+x else 1)); print('0' if a[0]=='0' else ''.join(a))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-11-508",
  "levelId": "level-11",
  "title": "Top K Frequent Elements",
  "type": "coding",
  "difficulty": "medium",
  "order": 508,
  "description": "Return K most frequent elements.",
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
      "input": "6\n1 1 1 2 2 3\n2",
      "output": "1 2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\n1 1 1 2 2 3\n2",
      "expectedOutput": "1 2",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<unordered_map>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); unordered_map<int,int> m; for(int i=0;i<n;i++){cin>>a[i]; m[a[i]]++;} int k; cin>>k; vector<pair<int,int>> v(m.begin(),m.end()); sort(v.begin(),v.end(),[](auto a,auto b){return a.second>b.second;}); for(int i=0;i<k;i++) cout<<v[i].first<<' ';} return 0; }",
  "pythonSolution": "from collections import Counter; n=int(input()); a=list(map(int,input().split())); k=int(input()); print(*(x for x,c in Counter(a).most_common(k)))",
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
  "id": "prob-11-506",
  "levelId": "level-11",
  "title": "Merge Intervals",
  "type": "coding",
  "difficulty": "medium",
  "order": 506,
  "description": "Merge overlapping intervals. Print count then intervals.",
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
      "input": "4\n1 3\n2 6\n8 10\n15 18",
      "output": "3\n1 6\n8 10\n15 18"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 3\n2 6\n8 10\n15 18",
      "expectedOutput": "3\n1 6\n8 10\n15 18",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<pair<int,int>> a(n); for(int i=0;i<n;i++) cin>>a[i].first>>a[i].second; sort(a.begin(),a.end()); vector<pair<int,int>> ans; for(auto p:a){if(ans.empty()||ans.back().second<p.first) ans.push_back(p); else ans.back().second=max(ans.back().second,p.second);} cout<<ans.size()<<'\\n'; for(auto p:ans) cout<<p.first<<' '<<p.second<<'\\n';} return 0; }",
  "pythonSolution": "n=int(input()); a=[tuple(map(int,input().split())) for _ in range(n)]; a.sort(); ans=[]\nfor x,y in a:\n if not ans or ans[-1][1]<x: ans.append([x,y])\n else: ans[-1][1]=max(ans[-1][1],y)\nprint(len(ans))\nfor x,y in ans: print(f'{x} {y}')",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-11-507",
  "levelId": "level-11",
  "title": "Largest Number",
  "type": "coding",
  "difficulty": "medium",
  "order": 507,
  "description": "Arrange numbers to form largest string.",
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
      "input": "2\n10 2",
      "output": "210"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "2\n10 2",
      "expectedOutput": "210",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<string>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<string> a(n); for(int i=0;i<n;i++) cin>>a[i]; sort(a.begin(),a.end(),[](string x,string y){return x+y>y+x;}); if(a[0]==\"0\") cout<<0; else {for(string s:a) cout<<s;} } return 0; }",
  "pythonSolution": "import functools; n=int(input()); a=input().split(); a.sort(key=functools.cmp_to_key(lambda x,y: -1 if x+y>y+x else 1)); print('0' if a[0]=='0' else ''.join(a))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-11-508",
  "levelId": "level-11",
  "title": "Top K Frequent Elements",
  "type": "coding",
  "difficulty": "medium",
  "order": 508,
  "description": "Return K most frequent elements.",
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
      "input": "6\n1 1 1 2 2 3\n2",
      "output": "1 2"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\n1 1 1 2 2 3\n2",
      "expectedOutput": "1 2",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<unordered_map>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); unordered_map<int,int> m; for(int i=0;i<n;i++){cin>>a[i]; m[a[i]]++;} int k; cin>>k; vector<pair<int,int>> v(m.begin(),m.end()); sort(v.begin(),v.end(),[](auto a,auto b){return a.second>b.second;}); for(int i=0;i<k;i++) cout<<v[i].first<<' ';} return 0; }",
  "pythonSolution": "from collections import Counter; n=int(input()); a=list(map(int,input().split())); k=int(input()); print(*(x for x,c in Counter(a).most_common(k)))",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
}
];
