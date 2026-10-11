import { Problem } from '../types';

export const level16Problems: Problem[] = [
    {
        id: 'prob-16-01',
        levelId: 'level-16',
        title: 'Traverse a Linked List',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `A Linked List is a series of **Nodes** connected by pointers. They are not stored consecutively in memory like arrays.\n\n\`\`\`cpp\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\`\`\`\n\n**Task:**\nYou are given the \`head\` of a Linked List (we handle the creation). Traverse the list and print every value separated by a space.\n\n*Note:* The starter code creates the list for you. You just write the traversal loop.`,
        whyThisMatters: 'Pointer traversal is the foundational skill for linked lists and trees.',
        concepts: ['linked lists', 'pointers', 'traversal'],
        prerequisites: ['structs', 'loops'],
        learningObjectives: ['Use `curr = curr->next` to traverse pointers'],
        constraints: [],
        examples: [{ input: '3\n1 2 3', output: '1 2 3' }],
        testCases: [
            { id: 'tc1', input: '3\n1 2 3', expectedOutput: '1 2 3', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    // START YOUR CODE HERE\n    // Traverse starting from 'head' and print 'val'\n    ListNode* curr = head;\n    \n    \n    return 0;\n}`,
        hints: ['Use a `while` loop: `while(curr != NULL)`', 'Print `curr->val`.', 'Move forward using `curr = curr->next`.'],
        howToThink: ['Imagine stepping stones. You start at the `head`. To move to the next stone, you follow the `next` arrow.'],
        approach: 'Loop until pointer is null, advancing by next.',
        pseudocode: 'curr = head\nwhile curr != null:\n    print curr.val\n    curr = curr.next',
        explanation: 'We hop from node to node in memory until we hit a NULL pointer, indicating the end.',
        solution: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    ListNode* curr = head;\n    while(curr != NULL) {\n        cout << curr->val << " ";\n        curr = curr->next;\n    }\n    return 0;\n}`,
        commonMistakes: ['Forgetting `curr = curr->next`, resulting in an infinite loop.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['linked lists']
    },
    {
        id: 'prob-16-02',
        levelId: 'level-16',
        title: 'Reverse a Linked List',
        type: 'coding',
        difficulty: 'medium',
        order: 2,
        description: `**Task:**\nGiven the \`head\` of a Linked List, reverse the direction of all the pointers, and then traverse and print the new list.\n\n*Pattern:* Three Pointers (\`prev\`, \`curr\`, \`next\`)`,
        whyThisMatters: 'This is the most asked Linked List interview question in history. It tests your ability to manipulate pointers without losing references.',
        concepts: ['pointer reversal'],
        prerequisites: ['linked lists'],
        learningObjectives: ['Safely manipulate pointers without dropping the rest of the list'],
        constraints: [],
        examples: [{ input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }],
        testCases: [
            { id: 'tc1', input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1', hidden: false },
            { id: 'tc2', input: '1\n10', expectedOutput: '10', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    if (n==0) return 0;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    ListNode* prev = NULL;\n    ListNode* curr = head;\n    \n    // Implement Reverse\n    // while (curr != NULL) {\n    //     ...\n    // }\n    // Make sure to update 'head' to the new front!\n    \n    // Traversal (already written)\n    ListNode* temp = head;\n    while(temp != NULL) {\n        cout << temp->val << " ";\n        temp = temp->next;\n    }\n    return 0;\n}`,
        hints: ['Before you point `curr->next` to `prev`, you MUST save the real next node in a temporary variable (`nextTemp = curr->next`), otherwise you lose the rest of the list!'],
        howToThink: ['I am standing on `curr`. I want to point backwards to `prev`. But if I do that, the bridge forward is broken! So first, I ask my friend to stand on `curr->next`. Then I break my bridge and point backwards. Then I step to where my friend is.'],
        approach: 'Use prev, curr, and next_temp pointers to iteratively reverse links.',
        pseudocode: 'prev = null, curr = head\nwhile curr != null:\n    next_temp = curr.next\n    curr.next = prev\n    prev = curr\n    curr = next_temp\nhead = prev',
        explanation: 'We iteratively flip the arrow of the current node to point backwards, then slide all pointers one step forward.',
        solution: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    if (n==0) return 0;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    ListNode* prev = NULL;\n    ListNode* curr = head;\n    while(curr != NULL) {\n        ListNode* nextTemp = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    head = prev;\n    \n    ListNode* temp = head;\n    while(temp != NULL) {\n        cout << temp->val << " ";\n        temp = temp->next;\n    }\n    return 0;\n}`,
        commonMistakes: ['Forgetting to save `curr->next` before overriding it.', 'Returning `curr` instead of `prev` at the end (`curr` will be NULL!).'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['linked lists']
    },
{
    "id": "prob-16-03",
    "levelId": "level-16",
    "title": "Merge Two Sorted Lists (Simulation)",
    "type": "coding",
    "difficulty": "easy",
    "order": 3,
    "description": "Given two sorted arrays representing linked lists, merge them into a single sorted array representing the merged list.",
    "whyThisMatters": "Fundamental logic for Merge Sort and Linked List merging.",
    "concepts": [
        "two pointers"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Merge two sorted sequences in O(N)"
    ],
    "constraints": [
        "N, M <= 1000"
    ],
    "examples": [
        {
            "input": "3 3\n1 2 4\n1 3 4",
            "output": "1 1 2 3 4 4"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "3 3\n1 2 4\n1 3 4",
            "expectedOutput": "1 1 2 3 4 4",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, m; cin >> n >> m;\n    vector<int> a(n), b(m);\n    for(int i=0;i<n;i++) cin>>a[i];\n    for(int i=0;i<m;i++) cin>>b[i];\n    // logic\n    return 0;\n}",
    "hints": [
        "Use two pointers, one for each array. Compare elements and pick the smaller one."
    ],
    "howToThink": [
        "Who is smaller right now? Pick them, move their pointer."
    ],
    "approach": "Two pointers.",
    "pseudocode": "while i < n and j < m: if a[i] < b[j]: ans.push(a[i++]) else: ans.push(b[j++])",
    "explanation": "O(N+M) time.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, m; if(!(cin >> n >> m)) return 0;\n    vector<int> a(n), b(m);\n    for(int i=0; i<n; i++) cin >> a[i];\n    for(int i=0; i<m; i++) cin >> b[i];\n    vector<int> ans;\n    int i = 0, j = 0;\n    while(i < n && j < m) {\n        if(a[i] <= b[j]) ans.push_back(a[i++]);\n        else ans.push_back(b[j++]);\n    }\n    while(i < n) ans.push_back(a[i++]);\n    while(j < m) ans.push_back(b[j++]);\n    for(int x : ans) cout << x << \" \";\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N+M)",
    "spaceComplexity": "O(N+M)",
    "interviewRelevance": "high",
    "tags": [
        "two pointers",
        "linked list"
    ]
},
{
    "id": "prob-16-04",
    "levelId": "level-16",
    "title": "Middle of the Linked List",
    "type": "coding",
    "difficulty": "easy",
    "order": 4,
    "description": "Given an array representing a linked list, find and print the middle element. If there are two middle nodes, print the second middle node.",
    "whyThisMatters": "Introduces the Slow & Fast Pointer technique for Linked Lists.",
    "concepts": [
        "slow and fast pointers"
    ],
    "prerequisites": [
        "arrays"
    ],
    "learningObjectives": [
        "Understand two pointers moving at different speeds"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "5\n1 2 3 4 5",
            "output": "3"
        },
        {
            "input": "6\n1 2 3 4 5 6",
            "output": "4"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "5\n1 2 3 4 5",
            "expectedOutput": "3",
            "hidden": false
        },
        {
            "id": "tc2",
            "input": "6\n1 2 3 4 5 6",
            "expectedOutput": "4",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i];\n    // find middle\n    return 0;\n}",
    "hints": [
        "Use two pointers: slow and fast. Fast moves 2 steps, slow moves 1."
    ],
    "howToThink": [
        "If I travel twice as fast as you, when I reach the end, you will be exactly in the middle."
    ],
    "approach": "Fast and Slow Pointers",
    "pseudocode": "slow=0, fast=0. while fast < n and fast+1 < n: slow++; fast+=2. return arr[slow]",
    "explanation": "O(N) time, single pass.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if(n == 0) return 0;\n    vector<int> a(n);\n    for(int i=0; i<n; i++) cin >> a[i];\n    int slow = 0, fast = 0;\n    while(fast < n && fast + 1 < n) {\n        slow++;\n        fast += 2;\n    }\n    if (fast < n - 1 && n % 2 == 0) slow++;\n    cout << a[n/2];\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "linked list",
        "two pointers"
    ]
},
{
    "id": "prob-16-05",
    "levelId": "level-16",
    "title": "Linked List Cycle",
    "type": "coding",
    "difficulty": "easy",
    "order": 5,
    "description": "You are given an array of N integers representing the next pointers of a graph. Return 1 if starting from 0 you encounter a cycle, else 0.",
    "whyThisMatters": "Builds on Slow & Fast pointers to detect cycles (Floyd's Tortoise and Hare).",
    "concepts": [
        "cycle detection",
        "fast and slow pointers"
    ],
    "prerequisites": [
        "slow and fast pointers"
    ],
    "learningObjectives": [
        "Apply tortoise and hare algorithm"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "4\n1 2 3 1",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n1 2 3 1",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n; vector<int> nextNode(n); for(int i=0;i<n;i++) cin>>nextNode[i];\n    // detect cycle\n    return 0;\n}",
    "hints": [
        "Use the slow and fast pointer again! If there is a cycle, fast will eventually lap slow and they will be equal."
    ],
    "howToThink": [
        "If we are on a circular track and I run faster than you, I will eventually catch up to you from behind."
    ],
    "approach": "Floyd's Algorithm",
    "pseudocode": "slow=0, fast=0. while fast != -1 and nextNode[fast] != -1: slow = nextNode[slow]; fast = nextNode[nextNode[fast]]; if slow == fast return 1; return 0",
    "explanation": "O(N) time, O(1) space.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> nextNode(n);\n    for(int i=0; i<n; i++) cin >> nextNode[i];\n    if (n == 0 || nextNode[0] == -1) { cout << 0; return 0; }\n    int slow = nextNode[0];\n    int fast = nextNode[nextNode[0]];\n    while(slow != -1 && fast != -1 && nextNode[fast] != -1) {\n        if (slow == fast) { cout << 1; return 0; }\n        slow = nextNode[slow];\n        fast = nextNode[nextNode[fast]];\n    }\n    cout << 0;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "interviewRelevance": "high",
    "tags": [
        "linked list",
        "two pointers"
    ]
},
{
    "id": "prob-16-201",
    "levelId": "level-16",
    "title": "Reverse Linked List (Simulation)",
    "type": "coding",
    "difficulty": "hard",
    "order": 201,
    "description": "Given an array of values, print them in reverse to simulate reversing a linked list.",
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
            "input": "5\n1 2 3 4 5",
            "output": "5 4 3 2 1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "5\n1 2 3 4 5",
            "expectedOutput": "5 4 3 2 1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Reverse"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; for(int i=n-1;i>=0;i--) cout<<a[i]<<' ';} return 0; }",
    "pythonSolution": "n=int(input()); a=input().split(); print(*(a[::-1]))",
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
  "id": "prob-16-concept-810",
  "levelId": "level-16",
  "title": "Traverse a Linked List Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 810,
  "description": "This is a conceptual check for Traverse a Linked List. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Traverse a Linked List.",
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
  "id": "prob-16-concept-811",
  "levelId": "level-16",
  "title": "Traverse a Linked List Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 811,
  "description": "This is a conceptual check for Traverse a Linked List. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Traverse a Linked List.",
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
  "id": "prob-16-concept-812",
  "levelId": "level-16",
  "title": "Traverse a Linked List Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 812,
  "description": "This is a conceptual check for Traverse a Linked List. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Traverse a Linked List.",
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
  "id": "prob-16-concept-813",
  "levelId": "level-16",
  "title": "Traverse a Linked List Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 813,
  "description": "This is a conceptual check for Traverse a Linked List. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Traverse a Linked List.",
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
  "id": "prob-16-concept-814",
  "levelId": "level-16",
  "title": "Traverse a Linked List Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 814,
  "description": "This is a conceptual check for Traverse a Linked List. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Traverse a Linked List.",
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
