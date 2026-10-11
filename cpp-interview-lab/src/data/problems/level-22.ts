import { Problem } from '../types';

export const level22Problems: Problem[] = [
    {
        id: 'prob-22-01',
        levelId: 'level-22',
        title: 'Number of Islands (Grid Traversal)',
        type: 'coding',
        difficulty: 'hard',
        order: 1,
        description: `**Task:**\nYou are given a 2D grid of \`1\`s (land) and \`0\`s (water). An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.\nFind the number of islands.\n\n*Pattern:* Grid DFS`,
        whyThisMatters: 'Grid DFS is extremely common for graph traversal in technical interviews.',
        concepts: ['graphs', 'dfs', 'grid'],
        prerequisites: ['recursion', '2d arrays'],
        learningObjectives: ['Traverse a 2D grid using recursive DFS', 'Mark visited nodes'],
        constraints: ['Grid size <= 50x50'],
        examples: [{ input: '4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1', output: '3' }],
        testCases: [
            { id: 'tc1', input: '4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1', expectedOutput: '3', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid dfs(vector<vector<int>>& grid, int r, int c, int rows, int cols) {\n    // Check boundaries and if it is water (0)\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == 0) return;\n    \n    // Mark as visited by turning it into water\n    grid[r][c] = 0;\n    \n    // DFS in 4 directions\n    \n}\n\nint main() {\n    int rows, cols; cin >> rows >> cols;\n    vector<vector<int>> grid(rows, vector<int>(cols));\n    for(int i=0; i<rows; i++)\n        for(int j=0; j<cols; j++)\n            cin >> grid[i][j];\n            \n    int num_islands = 0;\n    // Iterate through grid, if 1, increment count and DFS\n    \n    cout << num_islands;\n    return 0;\n}`,
        hints: ['Inside DFS, call `dfs(grid, r+1, c, rows, cols)`, `r-1`, `c+1`, and `c-1`.', 'In main, whenever you see a `1`, do `num_islands++` and call `dfs` on that cell. The DFS will sink the entire island so you don\'t double count it!'],
        howToThink: ['Scan the map. If I see land, I found an island! Now I need to explore the entire island and mark it as "visited" (or turn it to water) so I don\'t count it again later.'],
        approach: 'Loop grid. If 1 found, increment count and start DFS to sink the connected 1s.',
        pseudocode: 'For r in rows:\n  For c in cols:\n    if grid[r][c] == 1:\n      count++\n      dfs(grid, r, c)\n\ndfs(grid, r, c):\n  if out of bounds or water: return\n  grid[r][c] = 0\n  dfs up, down, left, right',
        explanation: 'This effectively maps out connected components in a graph using DFS.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid dfs(vector<vector<int>>& grid, int r, int c, int rows, int cols) {\n    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == 0) return;\n    grid[r][c] = 0;\n    dfs(grid, r+1, c, rows, cols);\n    dfs(grid, r-1, c, rows, cols);\n    dfs(grid, r, c+1, rows, cols);\n    dfs(grid, r, c-1, rows, cols);\n}\n\nint main() {\n    int rows, cols; \n    if(!(cin >> rows >> cols)) return 0;\n    vector<vector<int>> grid(rows, vector<int>(cols));\n    for(int i=0; i<rows; i++)\n        for(int j=0; j<cols; j++)\n            cin >> grid[i][j];\n            \n    int num_islands = 0;\n    for(int i=0; i<rows; i++) {\n        for(int j=0; j<cols; j++) {\n            if(grid[i][j] == 1) {\n                num_islands++;\n                dfs(grid, i, j, rows, cols);\n            }\n        }\n    }\n    cout << num_islands;\n    return 0;\n}`,
        commonMistakes: ['Forgetting boundary checks in DFS, leading to Segfaults.'],
        timeComplexity: 'O(R * C)', spaceComplexity: 'O(R * C) call stack worst case', interviewRelevance: 'high', tags: ['graphs', 'dfs', 'grid']
    },
{
    "id": "prob-22-02",
    "levelId": "level-22",
    "title": "Course Schedule Concept",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "There are N courses, labeled from 0 to N-1. You are given prerequisites where pre[i] = [a, b] indicates you must take b before a. Return 1 if you can finish all courses, else 0. Input: N, E, then E pairs of (a, b).",
    "whyThisMatters": "Classic cycle detection in directed graphs (Topological Sort / DFS).",
    "concepts": [
        "graphs",
        "cycle detection"
    ],
    "prerequisites": [
        "graphs"
    ],
    "learningObjectives": [
        "Detect cycles in directed graph"
    ],
    "constraints": [
        "N <= 100",
        "E <= 500"
    ],
    "examples": [
        {
            "input": "2 1\n1 0",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "2 1\n1 0",
            "expectedOutput": "1",
            "hidden": false
        },
        {
            "id": "tc2",
            "input": "2 2\n1 0\n0 1",
            "expectedOutput": "0",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, e; cin >> n >> e;\n    // graph logic\n    return 0;\n}",
    "hints": [
        "Use an array to track visited state: 0 = unvisited, 1 = visiting (in current path), 2 = fully visited."
    ],
    "howToThink": [
        "If I reach a node that is currently \"visiting\", I have found a loop!"
    ],
    "approach": "DFS cycle detection.",
    "pseudocode": "dfs(node): if state[node]==1 return false; if state[node]==2 return true; state[node]=1; for neighbor in adj[node]: if !dfs(neighbor) return false; state[node]=2; return true.",
    "explanation": "O(V + E) time.",
    "solution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool dfs(int node, vector<vector<int>>& adj, vector<int>& state) {\n    if (state[node] == 1) return false; // Cycle detected\n    if (state[node] == 2) return true;  // Already validated\n    state[node] = 1;\n    for(int neighbor : adj[node]) {\n        if (!dfs(neighbor, adj, state)) return false;\n    }\n    state[node] = 2;\n    return true;\n}\n\nint main() {\n    int n, e; if(!(cin >> n >> e)) return 0;\n    vector<vector<int>> adj(n);\n    for(int i=0; i<e; i++) {\n        int u, v; cin >> u >> v;\n        adj[v].push_back(u);\n    }\n    vector<int> state(n, 0);\n    for(int i=0; i<n; i++) {\n        if (state[i] == 0) {\n            if (!dfs(i, adj, state)) {\n                cout << 0;\n                return 0;\n            }\n        }\n    }\n    cout << 1;\n    return 0;\n}",
    "commonMistakes": [],
    "timeComplexity": "O(V+E)",
    "spaceComplexity": "O(V+E)",
    "interviewRelevance": "high",
    "tags": [
        "graphs",
        "dfs"
    ]
},
{
    "id": "prob-22-206",
    "levelId": "level-22",
    "title": "Number of Islands",
    "type": "coding",
    "difficulty": "hard",
    "order": 206,
    "description": "Given a 2D grid map of 1s (land) and 0s (water), count the number of islands. Input: R C, then grid.",
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
            "input": "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0",
            "output": "1"
        }
    ],
    "testCases": [
        {
            "id": "tc1",
            "input": "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0",
            "expectedOutput": "1",
            "hidden": false
        }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\nint main() { return 0; }",
    "pythonStarterCode": "def solve(): pass\nif __name__ == '__main__': solve()",
    "hints": [
        "DFS"
    ],
    "howToThink": [
        "Break it down."
    ],
    "approach": "Standard approach.",
    "pseudocode": "solve()",
    "explanation": "Standard complexity.",
    "solution": "#include<iostream>\n#include<vector>\nusing namespace std; void dfs(vector<vector<int>>& g, int i, int j){if(i<0||i>=g.size()||j<0||j>=g[0].size()||g[i][j]==0) return; g[i][j]=0; dfs(g,i+1,j); dfs(g,i-1,j); dfs(g,i,j+1); dfs(g,i,j-1);} int main(){ int r,c; if(cin>>r>>c){vector<vector<int>> g(r, vector<int>(c)); for(int i=0;i<r;i++) for(int j=0;j<c;j++) cin>>g[i][j]; int ans=0; for(int i=0;i<r;i++) for(int j=0;j<c;j++){if(g[i][j]==1){ans++; dfs(g,i,j);}} cout<<ans;} return 0; }",
    "pythonSolution": "import sys; sys.setrecursionlimit(10000)\ndef dfs(g,i,j):\n if i<0 or i>=len(g) or j<0 or j>=len(g[0]) or g[i][j]==0: return\n g[i][j]=0\n dfs(g,i+1,j); dfs(g,i-1,j); dfs(g,i,j+1); dfs(g,i,j-1)\nr,c=map(int,input().split()); g=[list(map(int,input().split())) for _ in range(r)]; ans=0\nfor i in range(r):\n for j in range(c):\n  if g[i][j]==1: ans+=1; dfs(g,i,j)\nprint(ans)",
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
  "id": "prob-22-604",
  "levelId": "level-22",
  "title": "Rotting Oranges",
  "type": "coding",
  "difficulty": "medium",
  "order": 604,
  "description": "Find minimum minutes for all oranges to rot.",
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
      "input": "3 3\n2 1 1\n1 1 0\n0 1 1",
      "output": "4"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "3 3\n2 1 1\n1 1 0\n0 1 1",
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
  "solution": "#include<iostream>\n#include<vector>\n#include<queue>\nusing namespace std; int main(){ int r,c; if(cin>>r>>c){vector<vector<int>> g(r,vector<int>(c)); queue<pair<int,int>> q; int fresh=0; for(int i=0;i<r;i++) for(int j=0;j<c;j++){cin>>g[i][j]; if(g[i][j]==2) q.push({i,j}); else if(g[i][j]==1) fresh++;} if(fresh==0){cout<<0;return 0;} int ans=0; vector<int> dx={1,-1,0,0}, dy={0,0,1,-1}; while(!q.empty()){int s=q.size(); bool rotted=false; for(int i=0;i<s;i++){auto p=q.front(); q.pop(); for(int k=0;k<4;k++){int nx=p.first+dx[k], ny=p.second+dy[k]; if(nx>=0&&nx<r&&ny>=0&&ny<c&&g[nx][ny]==1){g[nx][ny]=2; fresh--; q.push({nx,ny}); rotted=true;}}} if(rotted) ans++;} cout<<(fresh==0?ans:-1);} return 0; }",
  "pythonSolution": "from collections import deque\nr,c=map(int,input().split()); g=[list(map(int,input().split())) for _ in range(r)]; q=deque(); fresh=0\nfor i in range(r):\n for j in range(c):\n  if g[i][j]==2: q.append((i,j))\n  elif g[i][j]==1: fresh+=1\nif fresh==0: print(0); exit()\nans=0; dirs=[(1,0),(-1,0),(0,1),(0,-1)]\nwhile q:\n s=len(q); rotted=False\n for _ in range(s):\n  x,y=q.popleft()\n  for dx,dy in dirs:\n   nx,ny=x+dx,y+dy\n   if 0<=nx<r and 0<=ny<c and g[nx][ny]==1:\n    g[nx][ny]=2; fresh-=1; q.append((nx,ny)); rotted=True\n if rotted: ans+=1\nprint(ans if fresh==0 else -1)",
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
  "id": "prob-22-705",
  "levelId": "level-22",
  "title": "Course Schedule",
  "type": "coding",
  "difficulty": "hard",
  "order": 705,
  "description": "There are numCourses. You are given prerequisites. Return 1 if you can finish all courses.",
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
      "input": "2\n1 0",
      "output": "1"
    }
  ],
  "testCases": [
    {
      "id": "tc1",
      "input": "2\n1 0",
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
  "solution": "#include<iostream>\n#include<vector>\nusing namespace std; bool dfs(int u, vector<vector<int>>& adj, vector<int>& vis){if(vis[u]==1) return true; if(vis[u]==2) return false; vis[u]=1; for(int v:adj[u]) if(dfs(v,adj,vis)) return true; vis[u]=2; return false;} int main(){ int n; if(cin>>n){int m; cin>>m; vector<vector<int>> adj(n); for(int i=0;i<m;i++){int u,v; cin>>u>>v; adj[v].push_back(u);} vector<int> vis(n,0); for(int i=0;i<n;i++) if(dfs(i,adj,vis)){cout<<0; return 0;} cout<<1;} return 0; }",
  "pythonSolution": "import sys; sys.setrecursionlimit(2000)\ndef dfs(u,adj,vis):\n if vis[u]==1: return True\n if vis[u]==2: return False\n vis[u]=1\n for v in adj[u]:\n  if dfs(v,adj,vis): return True\n vis[u]=2; return False\nn=int(input()); m=int(input()); adj=[[] for _ in range(n)]\nif m>0:\n for _ in range(m):\n  u,v=map(int,input().split())\n  adj[v].append(u)\nvis=[0]*n\nfor i in range(n):\n if dfs(i,adj,vis): print(0); exit()\nprint(1)",
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
  "id": "prob-22-concept-843",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 1",
  "type": "coding",
  "difficulty": "easy",
  "order": 843,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-844",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 2",
  "type": "coding",
  "difficulty": "easy",
  "order": 844,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-845",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 3",
  "type": "coding",
  "difficulty": "easy",
  "order": 845,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-846",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 4",
  "type": "coding",
  "difficulty": "easy",
  "order": 846,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-847",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 5",
  "type": "coding",
  "difficulty": "easy",
  "order": 847,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-848",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 6",
  "type": "coding",
  "difficulty": "easy",
  "order": 848,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-849",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 7",
  "type": "coding",
  "difficulty": "easy",
  "order": 849,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
  "id": "prob-22-concept-850",
  "levelId": "level-22",
  "title": "Number of Islands (Grid Traversal) Concept Check 8",
  "type": "coding",
  "difficulty": "easy",
  "order": 850,
  "description": "This is a conceptual check for Number of Islands (Grid Traversal). Given an array of integers, output the array reversed. Understanding how to manipulate data structures is the first step to mastering Number of Islands (Grid Traversal).",
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
