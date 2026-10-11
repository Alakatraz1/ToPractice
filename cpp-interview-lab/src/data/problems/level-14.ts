import { Problem } from '../types';

export const level14Problems: Problem[] = [
    {
        id: 'prob-14-01',
        levelId: 'level-14',
        title: 'Count Frequencies (Hash Map)',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `An \`unordered_map<key_type, value_type>\` allows you to store and look up data in **O(1) average time**.\n\n**Task:**\nYou are given \`N\` integers. Count how many times each integer appears. Then, print the frequency of a given \`target\` integer.\n\n*Pattern:* Hash Map Frequency Counting`,
        whyThisMatters: 'Frequency counting is the first step in solving ~30% of all easy/medium interview problems.',
        concepts: ['hash map', 'unordered_map', 'frequency'],
        prerequisites: ['stl'],
        learningObjectives: ['Initialize an unordered_map', 'Increment counts: `map[key]++`'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n1 2 2 3 2\n2', output: '3' }],
        testCases: [
            { id: 'tc1', input: '5\n1 2 2 3 2\n2', expectedOutput: '3', hidden: false },
            { id: 'tc2', input: '4\n10 10 10 10\n10', expectedOutput: '4', hidden: false },
            { id: 'tc3', input: '3\n1 2 3\n5', expectedOutput: '0', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    unordered_map<int, int> freq;\n    \n    // Populate the hash map\n    \n    cout << freq[target];\n    return 0;\n}`,
        hints: ['Use a range-based for loop: `for(int x : arr) { freq[x]++; }`', 'When you access `freq[target]` and it doesn\'t exist, C++ maps safely return 0 by default for integers!'],
        howToThink: ['A hash map is like an array where the indices can be ANY number, and it automatically handles memory.'],
        approach: 'Loop through array, incrementing `freq[x]`.',
        pseudocode: 'for x in arr:\n    freq[x]++\nprint freq[target]',
        explanation: 'Building the frequency map takes O(N). Looking up the target takes O(1).',
        solution: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    unordered_map<int, int> freq;\n    for(int i=0; i<n; i++) {\n        cin >> arr[i];\n        freq[arr[i]]++;\n    }\n    int target; cin >> target;\n    cout << freq[target];\n    return 0;\n}`,
        commonMistakes: ['Using `map` instead of `unordered_map`. `map` is O(log N) because it sorts keys. `unordered_map` is O(1) average.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['hash map']
    },
    {
        id: 'prob-14-02',
        levelId: 'level-14',
        title: 'Find the Duplicate',
        type: 'coding',
        difficulty: 'easy',
        order: 2,
        description: `An \`unordered_set<type>\` is like a map without values. It just remembers if it has "seen" a key before.\n\n**Task:**\nYou are given an array of \`N\` integers where EXACTLY ONE integer is duplicated. Find and print the duplicate.\n\n*Pattern:* Hash Set Membership`,
        whyThisMatters: 'Detecting if you have seen something before in O(1) time is a massive optimization over checking every previous element in an array O(N^2).',
        concepts: ['hash set', 'unordered_set', 'membership'],
        prerequisites: ['stl'],
        learningObjectives: ['Use `unordered_set`', 'Check membership with `.count()`'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n1 3 4 3 2', output: '3' }],
        testCases: [
            { id: 'tc1', input: '5\n1 3 4 3 2', expectedOutput: '3', hidden: false },
            { id: 'tc2', input: '3\n10 10 20', expectedOutput: '10', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    unordered_set<int> seen;\n    \n    for(int x : arr) {\n        // If x is already in seen, we found the duplicate!\n        // Otherwise, insert x into seen.\n    }\n    \n    return 0;\n}`,
        hints: ['Use `seen.count(x)` to check if `x` is in the set.', 'Use `seen.insert(x)` to add it.'],
        howToThink: ['I will keep a notebook (set). I look at a number. Is it in the notebook? If yes, I caught the duplicate! If no, I write it in the notebook.'],
        approach: 'Loop through elements. Check if in set. If yes, print and exit. Else, insert into set.',
        pseudocode: 'for x in arr:\n    if seen.count(x) > 0:\n        return x\n    seen.insert(x)',
        explanation: 'Each insertion and lookup takes O(1) average time, making the entire algorithm O(N).',
        solution: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    unordered_set<int> seen;\n    for(int x : arr) {\n        if (seen.count(x)) {\n            cout << x;\n            return 0;\n        }\n        seen.insert(x);\n    }\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['hash set']
    },
    {
        id: 'prob-14-03',
        levelId: 'level-14',
        title: 'Two Sum (O(N) Optimal)',
        type: 'coding',
        difficulty: 'medium',
        order: 3,
        description: `**Task:**\nGiven an array of \`N\` integers and a \`target\`.\nFind two numbers that add up to \`target\`. Print them.\n(Assume exactly one valid pair exists. Print them in any order.)\n\n**Restriction:** You MUST use an \`unordered_set\` to solve this in **O(N)** time.\n\n*Pattern:* Complement Lookup`,
        whyThisMatters: 'This is the most famous interview question of all time (LeetCode #1).',
        concepts: ['hash set', 'complements'],
        prerequisites: ['hash set'],
        learningObjectives: ['Understand the "look for the complement" pattern'],
        constraints: ['N <= 1000'],
        examples: [{ input: '4\n2 7 11 15\n9', output: '2 7' }],
        testCases: [
            { id: 'tc1', input: '4\n2 7 11 15\n9', expectedOutput: '2 7', hidden: false },
            { id: 'tc2', input: '3\n3 2 4\n6', expectedOutput: '2 4', hidden: false },
            { id: 'tc3', input: '2\n3 3\n6', expectedOutput: '3 3', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    \n    unordered_set<int> seen;\n    \n    for(int x : arr) {\n        int complement = target - x;\n        // If the complement is in 'seen', we found our pair!\n        // Otherwise, add x to 'seen'.\n    }\n    \n    return 0;\n}`,
        hints: ['If my target is 9, and I am currently looking at 2, I need a 7. I should check if 7 is in my `seen` set.'],
        howToThink: ['Instead of picking `x` and scanning the rest of the array for `target - x`, I can just check my hash set in O(1) time! If it\'s not there, I\'ll add `x` to the set for future numbers to find.'],
        approach: 'Loop through array. Calculate complement. Check if complement in set. If yes, print and exit. Else, insert current into set.',
        pseudocode: 'for x in arr:\n    comp = target - x\n    if seen.count(comp):\n        print comp, x\n        return\n    seen.insert(x)',
        explanation: 'We only do one pass through the array. For each element, a set lookup takes O(1). Thus, O(N) total time.',
        solution: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int target; cin >> target;\n    unordered_set<int> seen;\n    for(int x : arr) {\n        int complement = target - x;\n        if (seen.count(complement)) {\n            cout << complement << " " << x;\n            return 0;\n        }\n        seen.insert(x);\n    }\n    return 0;\n}`,
        commonMistakes: ['Inserting `x` into the set BEFORE checking for the complement. If target is 6 and x is 3, it would falsely pair with itself.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['hash set', 'two sum']
    },
{
    "id": "prob-14-04",
    "levelId": "level-14",
    "title": "Group Anagrams",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "Given an array of strings, group the anagrams together. Print each group size.",
    "whyThisMatters": "Classic problem demonstrating hashing with complex keys.",
    "concepts": [
        "hash map",
        "sorting"
    ],
    "prerequisites": [
        "strings"
    ],
    "learningObjectives": [
        "Use sorted strings as map keys"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "6\neat tea tan ate nat bat",
            "output": "3 2 1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\neat tea tan ate nat bat",
            "expectedOutput": "3 2 1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    // implement logic\n    return 0;\n}",
    "hints": [
        "Sort each string to use it as a key in a hash map."
    ],
    "howToThink": [
        "Two words are anagrams if their sorted versions are identical."
    ],
    "approach": "Hash map with sorted string keys.",
    "pseudocode": "for word in words: key = sort(word); map[key].push_back(word)",
    "explanation": "O(N * K log K) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    unordered_map<string, int> groups;\n    for(int i=0; i<n; i++) {\n        string s; cin >> s;\n        string key = s;\n        sort(key.begin(), key.end());\n        groups[key]++;\n    }\n    vector<int> counts;\n    for(auto& pair : groups) counts.push_back(pair.second);\n    sort(counts.rbegin(), counts.rend());\n    for(int c : counts) cout << c << \" \";\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N * K log K)",
    "spaceComplexity": "O(N * K)",
    "interviewRelevance": "high",
    "tags": [
        "hash map"
    ]
},
{
    "id": "prob-14-05",
    "levelId": "level-14",
    "title": "Longest Consecutive Sequence",
    "type": "coding",
    "difficulty": "medium",
    "order": 5,
    "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Must run in O(n) time.",
    "whyThisMatters": "Teaches O(1) set lookups to achieve O(N) time for sequence finding.",
    "concepts": [
        "hash set"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Use unordered_set for sequence building"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "6\n100 4 200 1 3 2",
            "output": "4"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "6\n100 4 200 1 3 2",
            "expectedOutput": "4",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    // logic\n    return 0;\n}",
    "hints": [
        "Store all elements in a set. For each element, check if it is the start of a sequence (i.e. element-1 does not exist in the set)."
    ],
    "howToThink": [
        "If x-1 exists, x is not the start. Only build sequences from sequence starts."
    ],
    "approach": "Set lookup",
    "pseudocode": "insert all in set. for x in set: if x-1 not in set: y=x+1; while y in set: y++; update max",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if(n == 0) { cout << 0; return 0; }\n    unordered_set<int> st;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        st.insert(x);\n    }\n    int longest = 0;\n    for(int x : st) {\n        if(st.find(x - 1) == st.end()) {\n            int current = x;\n            int currStreak = 1;\n            while(st.find(current + 1) != st.end()) {\n                current++;\n                currStreak++;\n            }\n            if(currStreak > longest) longest = currStreak;\n        }\n    }\n    cout << longest;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "hash set"
    ]
},
{
    "id": "prob-14-06",
    "levelId": "level-14",
    "title": "Valid Anagram",
    "type": "coding",
    "difficulty": "easy",
    "order": 6,
    "description": "Given two strings s and t, return 1 if t is an anagram of s, and 0 otherwise.",
    "whyThisMatters": "Builds foundational understanding of using Hash Maps or frequency arrays for character counting.",
    "concepts": [
        "frequency map"
    ],
    "prerequisites": [
        "hash map"
    ],
    "learningObjectives": [
        "Use fixed-size array as a hash map"
    ],
    "constraints": [
        "Lengths <= 1000"
    ],
    "examples": [
        {
            "input": "anagram nagaram",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "anagram nagaram",
            "expectedOutput": "1",
            "hidden": false
        },
        {
            "id": "tc2",
            "input": "rat car",
            "expectedOutput": "0",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s, t; cin >> s >> t;\n    // logic\n    return 0;\n}",
    "hints": [
        "You can use an array of size 26 to count character frequencies instead of an unordered_map, since there are only lowercase english letters."
    ],
    "howToThink": [
        "If they are anagrams, every character must appear the exact same number of times."
    ],
    "approach": "Frequency Counting",
    "pseudocode": "if lengths differ, return 0. int count[26]={0}. for c in s: count[c]++; for c in t: count[c]--. if any count != 0, return 0. return 1.",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string s, t; if(!(cin >> s >> t)) return 0;\n    if(s.length() != t.length()) { cout << 0; return 0; }\n    vector<int> counts(26, 0);\n    for(int i=0; i<s.length(); i++) {\n        counts[s[i] - 'a']++;\n        counts[t[i] - 'a']--;\n    }\n    for(int x : counts) {\n        if (x != 0) { cout << 0; return 0; }\n    }\n    cout << 1;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "hash map",
        "strings"
    ]
},
{
    "id": "prob-14-107",
    "levelId": "level-14",
    "title": "Two Sum (Hash Map)",
    "type": "coding",
    "difficulty": "medium",
    "order": 107,
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Print 0-based indices.",
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
            "input": "4\n2 7 11 15\n9",
            "output": "0 1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n2 7 11 15\n9",
            "expectedOutput": "0 1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Use map"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\n#include<unordered_map>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int t; cin>>t; unordered_map<int,int> m; for(int i=0;i<n;i++){if(m.count(t-a[i])){cout<<m[t-a[i]]<<' '<<i; return 0;} m[a[i]]=i;} } return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); t=int(input()); m={}\nfor i,x in enumerate(a):\n if t-x in m: print(f\"{m[t-x]} {i}\"); exit()\n m[x]=i",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
    "id": "prob-14-108",
    "levelId": "level-14",
    "title": "Subarray Sum Equals K",
    "type": "coding",
    "difficulty": "medium",
    "order": 108,
    "description": "Given an array of integers and an integer k, return the total number of continuous subarrays whose sum equals to k.",
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
            "input": "3\n1 1 1\n2",
            "output": "2"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "3\n1 1 1\n2",
            "expectedOutput": "2",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Prefix sum map"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\n#include<unordered_map>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k; cin>>k; unordered_map<int,int> m; m[0]=1; int sum=0, ans=0; for(int x:a){sum+=x; ans+=m[sum-k]; m[sum]++;} cout<<ans; } return 0; }",
    "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=int(input()); m={0:1}; s=0; ans=0\nfor x in a:\n s+=x\n ans+=m.get(s-k,0)\n m[s]=m.get(s,0)+1\nprint(ans)",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "algo"
    ]
},
{
  "id": "prob-14-509",
  "levelId": "level-14",
  "title": "Contains Duplicate II",
  "type": "coding",
  "difficulty": "medium",
  "order": 509,
  "description": "Check if any value appears at least twice in the array and the indices are at most k apart.",
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
      "input": "4\n1 2 3 1\n3",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 2 3 1\n3",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<unordered_map>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k; cin>>k; unordered_map<int,int> m; for(int i=0;i<n;i++){if(m.count(a[i])&&i-m[a[i]]<=k){cout<<1; return 0;} m[a[i]]=i;} cout<<0;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=int(input()); m={}\nfor i,x in enumerate(a):\n if x in m and i-m[x]<=k: print(1); exit()\n m[x]=i\nprint(0)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-14-510",
  "levelId": "level-14",
  "title": "Group Anagrams",
  "type": "coding",
  "difficulty": "medium",
  "order": 510,
  "description": "Group anagrams together. Print the size of the largest group.",
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
      "input": "6\neat tea tan ate nat bat",
      "output": "3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\neat tea tan ate nat bat",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<string>\n#include<unordered_map>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){unordered_map<string,int> m; int ans=0; for(int i=0;i<n;i++){string s; cin>>s; sort(s.begin(),s.end()); m[s]++; ans=max(ans,m[s]);} cout<<ans;} return 0; }",
  "pythonSolution": "n=int(input()); a=input().split(); m={}\nfor x in a:\n s=''.join(sorted(x))\n m[s]=m.get(s,0)+1\nprint(max(m.values()) if m else 0)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-14-511",
  "levelId": "level-14",
  "title": "Longest Consecutive Sequence",
  "type": "coding",
  "difficulty": "medium",
  "order": 511,
  "description": "Find the length of the longest consecutive elements sequence.",
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
      "input": "6\n100 4 200 1 3 2",
      "output": "4"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\n100 4 200 1 3 2",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<unordered_set>\nusing namespace std; int main(){ int n; if(cin>>n){unordered_set<int> s; for(int i=0;i<n;i++){int x; cin>>x; s.insert(x);} int ans=0; for(int x:s){if(!s.count(x-1)){int cur=1; while(s.count(x+cur)) cur++; ans=max(ans,cur);}} cout<<ans;} return 0; }",
  "pythonSolution": "n=int(input()); s=set(map(int,input().split())); ans=0\nfor x in s:\n if x-1 not in s:\n  cur=1\n  while x+cur in s: cur+=1\n  ans=max(ans,cur)\nprint(ans)",
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
  "id": "prob-14-509",
  "levelId": "level-14",
  "title": "Contains Duplicate II",
  "type": "coding",
  "difficulty": "medium",
  "order": 509,
  "description": "Check if any value appears at least twice in the array and the indices are at most k apart.",
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
      "input": "4\n1 2 3 1\n3",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "4\n1 2 3 1\n3",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<unordered_map>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int k; cin>>k; unordered_map<int,int> m; for(int i=0;i<n;i++){if(m.count(a[i])&&i-m[a[i]]<=k){cout<<1; return 0;} m[a[i]]=i;} cout<<0;} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split())); k=int(input()); m={}\nfor i,x in enumerate(a):\n if x in m and i-m[x]<=k: print(1); exit()\n m[x]=i\nprint(0)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-14-510",
  "levelId": "level-14",
  "title": "Group Anagrams",
  "type": "coding",
  "difficulty": "medium",
  "order": 510,
  "description": "Group anagrams together. Print the size of the largest group.",
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
      "input": "6\neat tea tan ate nat bat",
      "output": "3"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\neat tea tan ate nat bat",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<string>\n#include<unordered_map>\n#include<algorithm>\nusing namespace std; int main(){ int n; if(cin>>n){unordered_map<string,int> m; int ans=0; for(int i=0;i<n;i++){string s; cin>>s; sort(s.begin(),s.end()); m[s]++; ans=max(ans,m[s]);} cout<<ans;} return 0; }",
  "pythonSolution": "n=int(input()); a=input().split(); m={}\nfor x in a:\n s=''.join(sorted(x))\n m[s]=m.get(s,0)+1\nprint(max(m.values()) if m else 0)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
},
{
  "id": "prob-14-511",
  "levelId": "level-14",
  "title": "Longest Consecutive Sequence",
  "type": "coding",
  "difficulty": "medium",
  "order": 511,
  "description": "Find the length of the longest consecutive elements sequence.",
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
      "input": "6\n100 4 200 1 3 2",
      "output": "4"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "6\n100 4 200 1 3 2",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<unordered_set>\nusing namespace std; int main(){ int n; if(cin>>n){unordered_set<int> s; for(int i=0;i<n;i++){int x; cin>>x; s.insert(x);} int ans=0; for(int x:s){if(!s.count(x-1)){int cur=1; while(s.count(x+cur)) cur++; ans=max(ans,cur);}} cout<<ans;} return 0; }",
  "pythonSolution": "n=int(input()); s=set(map(int,input().split())); ans=0\nfor x in s:\n if x-1 not in s:\n  cur=1\n  while x+cur in s: cur+=1\n  ans=max(ans,cur)\nprint(ans)",
  "commonMistakes": [],
  "timeComplexity": "O(N)",
  "spaceComplexity": "O(1)",
  "interviewRelevance": "high",
  "tags": [
    "core"
  ]
}
];
