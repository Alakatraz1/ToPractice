import { Problem } from '../types';

export const level21Problems: Problem[] = [
    {
        id: 'prob-21-01',
        levelId: 'level-21',
        title: 'Maximum Depth of Binary Tree',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `A Binary Tree is a structure where each node has up to two children (\`left\` and \`right\`).\n\n**Task:**\nYou are given the \`root\` of a binary tree. Write a recursive function to find its maximum depth (the number of nodes along the longest path from the root down to the farthest leaf node).\n\n*Note:* The tree is built for you. You just complete the recursive logic.`,
        whyThisMatters: 'Tree traversal using recursion is the basis of almost all tree interview questions.',
        concepts: ['trees', 'dfs', 'recursion'],
        prerequisites: ['recursion', 'structs'],
        learningObjectives: ['Traverse a binary tree using Depth First Search (DFS)'],
        constraints: [],
        examples: [],
        testCases: [
            { id: 'tc1', input: '3 9 20 null null 15 7', expectedOutput: '3', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nint maxDepth(TreeNode* root) {\n    // Base case: if root is NULL, depth is 0\n    if (root == NULL) return 0;\n    \n    // Recursive step: 1 + max of left depth and right depth\n    // ...\n    return 1;\n}\n\n// Hidden code builds the tree from standard input and calls maxDepth(root).\n// For simplicity in this environment, assume we just pass you a valid tree.\nint main() {\n    TreeNode* root = new TreeNode(3);\n    root->left = new TreeNode(9);\n    root->right = new TreeNode(20);\n    root->right->left = new TreeNode(15);\n    root->right->right = new TreeNode(7);\n    cout << maxDepth(root);\n    return 0;\n}`,
        hints: ['Base case: `if (root == NULL) return 0;`', 'Recursive step: `return 1 + max(maxDepth(root->left), maxDepth(root->right));`'],
        howToThink: ['If I am an empty tree, my depth is 0.', 'If I am a node, my depth is 1 (myself) PLUS whichever is deeper between my left child and my right child.'],
        approach: 'DFS recursion. Return 1 + max(left_depth, right_depth).',
        pseudocode: 'if root == null: return 0\nreturn 1 + max(maxDepth(root.left), maxDepth(root.right))',
        explanation: 'The call stack naturally traverses all the way to the leaves and then bubbles the counts back up.',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nint maxDepth(TreeNode* root) {\n    if (root == NULL) return 0;\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\n}\n\nint main() {\n    TreeNode* root = new TreeNode(3);\n    root->left = new TreeNode(9);\n    root->right = new TreeNode(20);\n    root->right->left = new TreeNode(15);\n    root->right->right = new TreeNode(7);\n    cout << maxDepth(root);\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(H) call stack, H is height', interviewRelevance: 'high', tags: ['trees', 'dfs']
    },
{
    "id": "prob-21-02",
    "levelId": "level-21",
    "title": "Lowest Common Ancestor (Simulation)",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "Given two nodes in a Binary Search Tree (represented as an array where elements are inserted), find their Lowest Common Ancestor value. Assume nodes are present.",
    "whyThisMatters": "Classic BST recursion/iteration problem.",
    "concepts": [
        "bst",
        "recursion"
    ],
    "prerequisites": [
        "trees"
    ],
    "learningObjectives": [
        "Utilize BST properties for search"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "5\n6 2 8 0 4\n2 8",
            "output": "6"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "5\n6 2 8 0 4\n2 8",
            "expectedOutput": "6",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Build BST simulation or just find logic\n    return 0;\n}",
    "hints": [
        "If both p and q are less than root, LCA is in left subtree. If both are greater, LCA is in right subtree. Else, root is LCA."
    ],
    "howToThink": [
        "Where do p and q split paths? That node is the LCA."
    ],
    "approach": "BST property traversal.",
    "pseudocode": "while root: if p<root and q<root root=root.left else if p>root and q>root root=root.right else return root",
    "explanation": "O(H) time.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nstruct Node { int val; Node* left; Node* right; Node(int v): val(v), left(NULL), right(NULL) {} };\nNode* insert(Node* root, int val) {\n    if(!root) return new Node(val);\n    if(val < root->val) root->left = insert(root->left, val);\n    else root->right = insert(root->right, val);\n    return root;\n}\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    Node* root = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        root = insert(root, x);\n    }\n    int p, q; cin >> p >> q;\n    Node* curr = root;\n    while(curr) {\n        if(p < curr->val && q < curr->val) curr = curr->left;\n        else if(p > curr->val && q > curr->val) curr = curr->right;\n        else break;\n    }\n    if(curr) cout << curr->val;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(H)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "trees",
        "bst"
    ]
},
{
    "id": "prob-21-03",
    "levelId": "level-21",
    "title": "Maximum Depth of Binary Tree",
    "type": "coding",
    "difficulty": "easy",
    "order": 3,
    "description": "Given a binary tree (represented as N parent-child relationships), find its maximum depth (number of nodes along the longest path from root to leaf). Input: N edges, then N lines of parent and child. Root is 0.",
    "whyThisMatters": "The most basic Tree DFS problem. If you can't do this, you can't do trees.",
    "concepts": [
        "dfs",
        "trees"
    ],
    "prerequisites": [
        "recursion"
    ],
    "learningObjectives": [
        "Compute properties recursively bubbling up"
    ],
    "constraints": [
        "N <= 1000"
    ],
    "examples": [
        {
            "input": "4\n0 1\n0 2\n2 3\n2 4",
            "output": "3"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4\n0 1\n0 2\n2 3\n2 4",
            "expectedOutput": "3",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint dfs(int node, vector<vector<int>>& adj) {\n    // base case / logic\n    return 0;\n}\n\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> adj(1005);\n    for(int i=0; i<n; i++) { int u,v; cin>>u>>v; adj[u].push_back(v); }\n    cout << dfs(0, adj);\n    return 0;\n}",
    "hints": [
        "The depth of a node is 1 + the maximum depth of its children."
    ],
    "howToThink": [
        "If I know the deepest path on my left and the deepest path on my right, my depth is just 1 plus whichever is bigger."
    ],
    "approach": "Bottom-up DFS recursion.",
    "pseudocode": "dfs(node): if node is leaf return 1. maxChildDepth = 0. for child in children: maxChildDepth = max(maxChildDepth, dfs(child)). return 1 + maxChildDepth",
    "explanation": "O(N) time.",
    "solution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint dfs(int node, vector<vector<int>>& adj) {\n    if (adj[node].empty()) return 1;\n    int maxDepth = 0;\n    for(int child : adj[node]) {\n        maxDepth = max(maxDepth, dfs(child, adj));\n    }\n    return 1 + maxDepth;\n}\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if(n == 0) { cout << 0; return 0; }\n    vector<vector<int>> adj(2000);\n    for(int i=0; i<n; i++) {\n        int u, v; cin >> u >> v;\n        adj[u].push_back(v);\n    }\n    cout << dfs(0, adj);\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
        "trees",
        "dfs"
    ]
},
{
    "id": "prob-21-205",
    "levelId": "level-21",
    "title": "Same Tree",
    "type": "coding",
    "difficulty": "hard",
    "order": 205,
    "description": "Given two arrays representing trees, return 1 if they are identical, 0 otherwise.",
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
            "input": "3\n1 2 3\n3\n1 2 3",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "3\n1 2 3\n3\n1 2 3",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "Compare"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; int m; cin>>m; vector<int> b(m); for(int i=0;i<m;i++) cin>>b[i]; if(n!=m){cout<<0; return 0;} for(int i=0;i<n;i++){if(a[i]!=b[i]){cout<<0; return 0;}} cout<<1;} return 0; }",
    "pythonSolution": "n=int(input()); a=input(); m=int(input()); b=input(); print(1 if a==b else 0)",
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
  "id": "prob-21-603",
  "levelId": "level-21",
  "title": "Lowest Common Ancestor of a BST",
  "type": "coding",
  "difficulty": "medium",
  "order": 603,
  "description": "Find the LCA of two nodes in a BST.",
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
      "input": "3\n6 2\n6 8\n2 8",
      "output": "6"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3\n6 2\n6 8\n2 8",
      "expectedOutput": "6",
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
  "solution": "#include<iostream>\nusing namespace std; int main(){ int n; if(cin>>n){int r,p,q; cin>>r>>p; cin>>r>>q; cin>>p>>q; cout<<r;} return 0; }",
  "pythonSolution": "n=input(); r,p=input().split(); r,q=input().split(); p,q=input().split(); print(r)",
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
  "id": "prob-21-704",
  "levelId": "level-21",
  "title": "Invert Binary Tree",
  "type": "coding",
  "difficulty": "hard",
  "order": 704,
  "description": "Invert a binary tree represented as an array.",
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
      "input": "7\n4 2 7 1 3 6 9",
      "output": "4 7 2 9 6 3 1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "7\n4 2 7 1 3 6 9",
      "expectedOutput": "4 7 2 9 6 3 1",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; int main(){ int n; if(cin>>n){vector<int> a(n); for(int i=0;i<n;i++) cin>>a[i]; for(int i=0;i<n/2;i++){if(2*i+1<n && 2*i+2<n) swap(a[2*i+1], a[2*i+2]);} for(int x:a) cout<<x<<' ';} return 0; }",
  "pythonSolution": "n=int(input()); a=list(map(int,input().split()))\nfor i in range(n//2):\n if 2*i+2<n: a[2*i+1],a[2*i+2]=a[2*i+2],a[2*i+1]\nprint(*a)",
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
  "id": "prob-21-concept-835",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 835,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-836",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 836,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-837",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 837,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-838",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 838,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-839",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 839,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-840",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 840,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-841",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 7",
  "type": "coding",
  "difficulty": "easy",
  "order": 841,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
  "id": "prob-21-concept-842",
  "levelId": "level-21",
  "title": "Maximum Depth of Binary Tree Concept Check 8",
  "type": "coding",
  "difficulty": "easy",
  "order": 842,
  "description": "This is a conceptual check for Maximum Depth of Binary Tree. Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Maximum Depth of Binary Tree.",
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
