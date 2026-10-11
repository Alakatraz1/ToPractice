import { Problem } from '../types';

export const pyLevel22Problems: Problem[] = [
  {
    "id": "py-prob-22-01",
    "levelId": "level-22",
    "title": "Number of Islands",
    "type": "coding",
    "difficulty": "medium",
    "order": 1,
    "description": "Given an m x n 2D binary grid grid where 1 represents land and 0 represents water, return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.\n\nInput format: line 1 has m and n. Following m lines contain n space-separated integers (0 or 1).",
    "whyThisMatters": "Number of Islands is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Number of Islands algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0",
        "output": "1",
        "explanation": "All 1s connect into 1 island"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-01-tc-1",
        "input": "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-22-01-tc-2",
        "input": "4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-22-01-tc-3",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0",
        "hidden": true
      },
      {
        "id": "py-prob-22-01-tc-4",
        "input": "1 1\n1",
        "expectedOutput": "1",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use BFS or DFS, modifying visited land cells to 0 or keeping a visited set."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Number of Islands.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use BFS or DFS, modifying visited land cells to 0 or keeping a visited set.",
    "pseudocode": "# Solution logic for Number of Islands\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use BFS or DFS, modifying visited land cells to 0 or keeping a visited set.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    idx = 2\n    grid = []\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    count = 0\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 1:\n                count += 1\n                stack = [(r, c)]\n                grid[r][c] = 0\n                while stack:\n                    cr, cc = stack.pop()\n                    for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                        nr, nc = cr + dr, cc + dc\n                        if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                            grid[nr][nc] = 0\n                            stack.append((nr, nc))\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    idx = 2\n    grid = []\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    count = 0\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 1:\n                count += 1\n                stack = [(r, c)]\n                grid[r][c] = 0\n                while stack:\n                    cr, cc = stack.pop()\n                    for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                        nr, nc = cr + dr, cc + dc\n                        if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                            grid[nr][nc] = 0\n                            stack.append((nr, nc))\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-02",
    "levelId": "level-22",
    "title": "Breadth-First Search (Shortest Path Unweighted)",
    "type": "coding",
    "difficulty": "medium",
    "order": 2,
    "description": "Given an undirected unweighted graph with N nodes (numbered 1 to N) and M edges, find the shortest distance from node 1 to node N. If unreachable, print -1.\n\nInput format: line 1 has N and M. Following M lines each contain two integers u and v.",
    "whyThisMatters": "Breadth-First Search (Shortest Path Unweighted) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Breadth-First Search (Shortest Path Unweighted) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n1 4",
        "output": "1",
        "explanation": "Direct edge 1-4 has distance 1"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-02-tc-1",
        "input": "4 4\n1 2\n2 3\n3 4\n1 4",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "id": "py-prob-22-02-tc-2",
        "input": "4 2\n1 2\n3 4",
        "expectedOutput": "-1",
        "hidden": false
      },
      {
        "id": "py-prob-22-02-tc-3",
        "input": "5 4\n1 2\n2 3\n3 4\n4 5",
        "expectedOutput": "4",
        "hidden": true
      },
      {
        "id": "py-prob-22-02-tc-4",
        "input": "1 0",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use collections.deque for BFS from starting node 1."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Breadth-First Search (Shortest Path Unweighted).",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use collections.deque for BFS from starting node 1.",
    "pseudocode": "# Solution logic for Breadth-First Search (Shortest Path Unweighted)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use collections.deque for BFS from starting node 1.",
    "solution": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    dist = {1: 0}\n    q = deque([1])\n    while q:\n        curr = q.popleft()\n        if curr == n:\n            print(dist[curr])\n            return\n        for nbr in adj[curr]:\n            if nbr not in dist:\n                dist[nbr] = dist[curr] + 1\n                q.append(nbr)\n    print(-1 if n != 1 else 0)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    dist = {1: 0}\n    q = deque([1])\n    while q:\n        curr = q.popleft()\n        if curr == n:\n            print(dist[curr])\n            return\n        for nbr in adj[curr]:\n            if nbr not in dist:\n                dist[nbr] = dist[curr] + 1\n                q.append(nbr)\n    print(-1 if n != 1 else 0)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-03",
    "levelId": "level-22",
    "title": "Detect Cycle in Directed Graph",
    "type": "coding",
    "difficulty": "medium",
    "order": 3,
    "description": "Given a directed graph with N vertices (0 to N-1) and M directed edges, determine if it contains a directed cycle. Print \"CYCLE\" if a cycle exists, else \"ACYCLIC\".\n\nInput format: N M, followed by M lines of u v (u -> v).",
    "whyThisMatters": "Detect Cycle in Directed Graph is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Detect Cycle in Directed Graph algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 3\n0 1\n1 2\n2 0",
        "output": "CYCLE",
        "explanation": "0->1->2->0 forms a cycle"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-03-tc-1",
        "input": "3 3\n0 1\n1 2\n2 0",
        "expectedOutput": "CYCLE",
        "hidden": false
      },
      {
        "id": "py-prob-22-03-tc-2",
        "input": "3 2\n0 1\n1 2",
        "expectedOutput": "ACYCLIC",
        "hidden": false
      },
      {
        "id": "py-prob-22-03-tc-3",
        "input": "4 4\n0 1\n1 2\n2 3\n3 1",
        "expectedOutput": "CYCLE",
        "hidden": true
      },
      {
        "id": "py-prob-22-03-tc-4",
        "input": "2 1\n0 1",
        "expectedOutput": "ACYCLIC",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Color nodes: 0 unvisited, 1 currently on DFS call stack, 2 finished processing."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Detect Cycle in Directed Graph.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Color nodes: 0 unvisited, 1 currently on DFS call stack, 2 finished processing.",
    "pseudocode": "# Solution logic for Detect Cycle in Directed Graph\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Color nodes: 0 unvisited, 1 currently on DFS call stack, 2 finished processing.",
    "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        idx += 2\n    # 0 = unvisited, 1 = visiting, 2 = visited\n    color = [0] * n\n    def dfs(u):\n        color[u] = 1\n        for v in adj[u]:\n            if color[v] == 1:\n                return True\n            if color[v] == 0 and dfs(v):\n                return True\n        color[u] = 2\n        return False\n    for i in range(n):\n        if color[i] == 0:\n            if dfs(i):\n                print(\"CYCLE\")\n                return\n    print(\"ACYCLIC\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        idx += 2\n    # 0 = unvisited, 1 = visiting, 2 = visited\n    color = [0] * n\n    def dfs(u):\n        color[u] = 1\n        for v in adj[u]:\n            if color[v] == 1:\n                return True\n            if color[v] == 0 and dfs(v):\n                return True\n        color[u] = 2\n        return False\n    for i in range(n):\n        if color[i] == 0:\n            if dfs(i):\n                print(\"CYCLE\")\n                return\n    print(\"ACYCLIC\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-04",
    "levelId": "level-22",
    "title": "Course Schedule (Topological Sort)",
    "type": "coding",
    "difficulty": "medium",
    "order": 4,
    "description": "There are N courses labeled 0 to N-1. You are given M prerequisites where [a, b] indicates that you must take course b before course a. Return a valid order of courses to finish all courses separated by spaces. If impossible, print -1. If multiple valid orders exist, any is accepted.",
    "whyThisMatters": "Course Schedule (Topological Sort) is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Course Schedule (Topological Sort) algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 4\n1 0\n2 0\n3 1\n3 2",
        "output": "0 1 2 3",
        "explanation": "Kahn's algorithm or topological order"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-04-tc-1",
        "input": "2 1\n1 0",
        "expectedOutput": "0 1",
        "hidden": false
      },
      {
        "id": "py-prob-22-04-tc-2",
        "input": "2 2\n1 0\n0 1",
        "expectedOutput": "-1",
        "hidden": false
      },
      {
        "id": "py-prob-22-04-tc-3",
        "input": "4 4\n1 0\n2 0\n3 1\n3 2",
        "expectedOutput": "0 1 2 3",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use Kahn's algorithm with in-degrees and a queue."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Course Schedule (Topological Sort).",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use Kahn's algorithm with in-degrees and a queue.",
    "pseudocode": "# Solution logic for Course Schedule (Topological Sort)\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use Kahn's algorithm with in-degrees and a queue.",
    "solution": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    in_degree = [0] * n\n    idx = 2\n    for _ in range(m):\n        a, b = int(lines[idx]), int(lines[idx+1])\n        adj[b].append(a)\n        in_degree[a] += 1\n        idx += 2\n    q = deque([i for i in range(n) if in_degree[i] == 0])\n    res = []\n    while q:\n        u = q.popleft()\n        res.append(u)\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                q.append(v)\n    if len(res) == n:\n        print(*(res))\n    else:\n        print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    in_degree = [0] * n\n    idx = 2\n    for _ in range(m):\n        a, b = int(lines[idx]), int(lines[idx+1])\n        adj[b].append(a)\n        in_degree[a] += 1\n        idx += 2\n    q = deque([i for i in range(n) if in_degree[i] == 0])\n    res = []\n    while q:\n        u = q.popleft()\n        res.append(u)\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                q.append(v)\n    if len(res) == n:\n        print(*(res))\n    else:\n        print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-05",
    "levelId": "level-22",
    "title": "Connected Components in Undirected Graph",
    "type": "coding",
    "difficulty": "easy",
    "order": 5,
    "description": "Given N nodes labeled 1 to N and M undirected edges, find the total number of connected components in the graph.\n\nInput format: N M, then M lines of u v.",
    "whyThisMatters": "Connected Components in Undirected Graph is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Connected Components in Undirected Graph algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "5 3\n1 2\n2 3\n4 5",
        "output": "2",
        "explanation": "Components are {1,2,3} and {4,5}"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-05-tc-1",
        "input": "5 3\n1 2\n2 3\n4 5",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "id": "py-prob-22-05-tc-2",
        "input": "3 0",
        "expectedOutput": "3",
        "hidden": false
      },
      {
        "id": "py-prob-22-05-tc-3",
        "input": "4 3\n1 2\n2 3\n3 4",
        "expectedOutput": "1",
        "hidden": true
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Loop through 1..N and trigger DFS/BFS for any unvisited vertex."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Connected Components in Undirected Graph.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Loop through 1..N and trigger DFS/BFS for any unvisited vertex.",
    "pseudocode": "# Solution logic for Connected Components in Undirected Graph\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Loop through 1..N and trigger DFS/BFS for any unvisited vertex.",
    "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    visited = set()\n    components = 0\n    for i in range(1, n + 1):\n        if i not in visited:\n            components += 1\n            stack = [i]\n            visited.add(i)\n            while stack:\n                curr = stack.pop()\n                for nbr in adj[curr]:\n                    if nbr not in visited:\n                        visited.add(nbr)\n                        stack.append(nbr)\n    print(components)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    visited = set()\n    components = 0\n    for i in range(1, n + 1):\n        if i not in visited:\n            components += 1\n            stack = [i]\n            visited.add(i)\n            while stack:\n                curr = stack.pop()\n                for nbr in adj[curr]:\n                    if nbr not in visited:\n                        visited.add(nbr)\n                        stack.append(nbr)\n    print(components)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "easy"
    ]
  },
  {
    "id": "py-prob-22-06",
    "levelId": "level-22",
    "title": "Check if Graph is Bipartite",
    "type": "coding",
    "difficulty": "medium",
    "order": 6,
    "description": "Given an undirected graph with N nodes (0 to N-1) and M edges, determine if it is bipartite (2-colorable). Print \"YES\" if bipartite, else \"NO\".\n\nInput format: N M, followed by M lines of u v.",
    "whyThisMatters": "Check if Graph is Bipartite is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Check if Graph is Bipartite algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 4\n0 1\n1 2\n2 3\n3 0",
        "output": "YES",
        "explanation": "Even cycle is 2-colorable"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-06-tc-1",
        "input": "4 4\n0 1\n1 2\n2 3\n3 0",
        "expectedOutput": "YES",
        "hidden": false
      },
      {
        "id": "py-prob-22-06-tc-2",
        "input": "3 3\n0 1\n1 2\n2 0",
        "expectedOutput": "NO",
        "hidden": false
      },
      {
        "id": "py-prob-22-06-tc-3",
        "input": "4 0",
        "expectedOutput": "YES",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Color alternating vertices 0 and 1. If an adjacent neighbor has the same color, it is not bipartite."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Check if Graph is Bipartite.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Color alternating vertices 0 and 1. If an adjacent neighbor has the same color, it is not bipartite.",
    "pseudocode": "# Solution logic for Check if Graph is Bipartite\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Color alternating vertices 0 and 1. If an adjacent neighbor has the same color, it is not bipartite.",
    "solution": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    color = {}\n    for i in range(n):\n        if i not in color:\n            color[i] = 0\n            q = deque([i])\n            while q:\n                curr = q.popleft()\n                for nbr in adj[curr]:\n                    if nbr not in color:\n                        color[nbr] = 1 - color[curr]\n                        q.append(nbr)\n                    elif color[nbr] == color[curr]:\n                        print(\"NO\")\n                        return\n    print(\"YES\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    color = {}\n    for i in range(n):\n        if i not in color:\n            color[i] = 0\n            q = deque([i])\n            while q:\n                curr = q.popleft()\n                for nbr in adj[curr]:\n                    if nbr not in color:\n                        color[nbr] = 1 - color[curr]\n                        q.append(nbr)\n                    elif color[nbr] == color[curr]:\n                        print(\"NO\")\n                        return\n    print(\"YES\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-07",
    "levelId": "level-22",
    "title": "Dijkstra's Shortest Path Algorithm",
    "type": "coding",
    "difficulty": "medium",
    "order": 7,
    "description": "Given a weighted directed graph with N nodes (1 to N) and M edges with non-negative weights, find the shortest distance from node 1 to node N using heapq. Print -1 if unreachable.\n\nInput format: N M, followed by M lines of u v w.",
    "whyThisMatters": "Dijkstra's Shortest Path Algorithm is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Dijkstra's Shortest Path Algorithm algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "4 5\n1 2 4\n1 3 2\n3 2 1\n2 4 5\n3 4 8",
        "output": "8",
        "explanation": "Path 1->3->2->4 has weight 2+1+5 = 8"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-07-tc-1",
        "input": "4 5\n1 2 4\n1 3 2\n3 2 1\n2 4 5\n3 4 8",
        "expectedOutput": "8",
        "hidden": false
      },
      {
        "id": "py-prob-22-07-tc-2",
        "input": "3 1\n1 2 10",
        "expectedOutput": "-1",
        "hidden": false
      },
      {
        "id": "py-prob-22-07-tc-3",
        "input": "1 0",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nimport heapq\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nimport heapq\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Use heapq with tuples (dist, node)."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Dijkstra's Shortest Path Algorithm.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Use heapq with tuples (dist, node).",
    "pseudocode": "# Solution logic for Dijkstra's Shortest Path Algorithm\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Use heapq with tuples (dist, node).",
    "solution": "import sys\nimport heapq\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v, w = int(lines[idx]), int(lines[idx+1]), int(lines[idx+2])\n        adj[u].append((v, w))\n        idx += 3\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[1] = 0\n    pq = [(0, 1)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]:\n            continue\n        if u == n:\n            print(d)\n            return\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n    print(-1 if dist[n] == float('inf') else dist[n])\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nimport heapq\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v, w = int(lines[idx]), int(lines[idx+1]), int(lines[idx+2])\n        adj[u].append((v, w))\n        idx += 3\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[1] = 0\n    pq = [(0, 1)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]:\n            continue\n        if u == n:\n            print(d)\n            return\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n    print(-1 if dist[n] == float('inf') else dist[n])\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-08",
    "levelId": "level-22",
    "title": "Rotting Oranges",
    "type": "coding",
    "difficulty": "medium",
    "order": 8,
    "description": "You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes until no fresh orange remains, or -1 if impossible.\n\nInput format: m n followed by m x n values.",
    "whyThisMatters": "Rotting Oranges is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Rotting Oranges algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 3\n2 1 1\n1 1 0\n0 1 1",
        "output": "4",
        "explanation": "All oranges rot in 4 minutes"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-08-tc-1",
        "input": "3 3\n2 1 1\n1 1 0\n0 1 1",
        "expectedOutput": "4",
        "hidden": false
      },
      {
        "id": "py-prob-22-08-tc-2",
        "input": "3 3\n2 1 1\n0 1 1\n1 0 1",
        "expectedOutput": "-1",
        "hidden": false
      },
      {
        "id": "py-prob-22-08-tc-3",
        "input": "1 2\n0 2",
        "expectedOutput": "0",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Multi-source BFS initialized with all initial rotten oranges."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Rotting Oranges.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Multi-source BFS initialized with all initial rotten oranges.",
    "pseudocode": "# Solution logic for Rotting Oranges\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Multi-source BFS initialized with all initial rotten oranges.",
    "solution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    q = deque()\n    fresh = 0\n    for r in range(m):\n        row = [int(x) for x in lines[idx:idx+n]]\n        grid.append(row)\n        for c in range(n):\n            if row[c] == 2:\n                q.append((r, c, 0))\n            elif row[c] == 1:\n                fresh += 1\n        idx += n\n    minutes = 0\n    while q:\n        r, c, t = q.popleft()\n        minutes = max(minutes, t)\n        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, t + 1))\n    print(minutes if fresh == 0 else -1)\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    q = deque()\n    fresh = 0\n    for r in range(m):\n        row = [int(x) for x in lines[idx:idx+n]]\n        grid.append(row)\n        for c in range(n):\n            if row[c] == 2:\n                q.append((r, c, 0))\n            elif row[c] == 1:\n                fresh += 1\n        idx += n\n    minutes = 0\n    while q:\n        r, c, t = q.popleft()\n        minutes = max(minutes, t)\n        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, t + 1))\n    print(minutes if fresh == 0 else -1)\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-09",
    "levelId": "level-22",
    "title": "Clone Graph Logic",
    "type": "coding",
    "difficulty": "medium",
    "order": 9,
    "description": "Given an undirected graph with N nodes (1 to N) represented as an adjacency list, print the cloned adjacency list representation in format: node_val: neighbor1 neighbor2 ... in ascending order of node val.\n\nInput format: N M, then M lines of undirected edges u v.",
    "whyThisMatters": "Clone Graph Logic is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "medium"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Clone Graph Logic algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1: 2\n2: 1 3\n3: 2",
        "explanation": "Neighbors sorted for each node"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-09-tc-1",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1: 2\n2: 1 3\n3: 2",
        "hidden": false
      },
      {
        "id": "py-prob-22-09-tc-2",
        "input": "2 1\n1 2",
        "expectedOutput": "1: 2\n2: 1",
        "hidden": false
      },
      {
        "id": "py-prob-22-09-tc-3",
        "input": "1 0",
        "expectedOutput": "1:",
        "hidden": true
      }
    ],
    "starterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Format sorted neighbors for each vertex."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Clone Graph Logic.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Format sorted neighbors for each vertex.",
    "pseudocode": "# Solution logic for Clone Graph Logic\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Format sorted neighbors for each vertex.",
    "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    for u in range(1, n + 1):\n        nbrs = sorted(adj[u])\n        print(f\"{u}: \" + \" \".join(map(str, nbrs)) if nbrs else f\"{u}:\")\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    for u in range(1, n + 1):\n        nbrs = sorted(adj[u])\n        print(f\"{u}: \" + \" \".join(map(str, nbrs)) if nbrs else f\"{u}:\")\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "medium"
    ]
  },
  {
    "id": "py-prob-22-10",
    "levelId": "level-22",
    "title": "Flood Fill Algorithm",
    "type": "coding",
    "difficulty": "easy",
    "order": 10,
    "description": "An image is represented by an m x n integer grid. You are given sr, sc (0-indexed start cell) and newColor. Perform a flood fill on the image starting from the pixel (sr, sc). Output the modified grid.\n\nInput format: m n sr sc newColor, followed by m lines each with n space-separated integers.",
    "whyThisMatters": "Flood Fill Algorithm is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.",
    "concepts": [
      "topic-22",
      "easy"
    ],
    "prerequisites": [],
    "learningObjectives": [
      "Master the Flood Fill Algorithm algorithm",
      "Write clean, optimal Python 3 code"
    ],
    "constraints": [
      "Standard input / output"
    ],
    "examples": [
      {
        "input": "3 3 1 1 2\n1 1 1\n1 1 0\n1 0 1",
        "output": "2 2 2\n2 2 0\n2 0 1",
        "explanation": "Original color at (1,1) is 1, all connected 1s turn to 2"
      }
    ],
    "testCases": [
      {
        "id": "py-prob-22-10-tc-1",
        "input": "3 3 1 1 2\n1 1 1\n1 1 0\n1 0 1",
        "expectedOutput": "2 2 2\n2 2 0\n2 0 1",
        "hidden": false
      },
      {
        "id": "py-prob-22-10-tc-2",
        "input": "2 2 0 0 0\n0 0\n0 0",
        "expectedOutput": "0 0\n0 0",
        "hidden": false
      }
    ],
    "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == \"__main__\":\n    solve()",
    "hints": [
      "Check boundary and if original color matches before replacing and recursing."
    ],
    "howToThink": [
      "Analyze the input format and constraints for Flood Fill Algorithm.",
      "Identify whether a greedy, graph, or DP pattern applies.",
      "Construct a step-by-step solution avoiding unnecessary allocations."
    ],
    "approach": "Check boundary and if original color matches before replacing and recursing.",
    "pseudocode": "# Solution logic for Flood Fill Algorithm\n# 1. Parse input\n# 2. Process logic\n# 3. Print output",
    "explanation": "Check boundary and if original color matches before replacing and recursing.",
    "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    sr, sc, new_color = int(lines[2]), int(lines[3]), int(lines[4])\n    idx = 5\n    grid = []\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    orig_color = grid[sr][sc]\n    if orig_color != new_color:\n        stack = [(sr, sc)]\n        grid[sr][sc] = new_color\n        while stack:\n            r, c = stack.pop()\n            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == orig_color:\n                    grid[nr][nc] = new_color\n                    stack.append((nr, nc))\n    for row in grid:\n        print(*(row))\n\nif __name__ == \"__main__\":\n    solve()",
    "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    sr, sc, new_color = int(lines[2]), int(lines[3]), int(lines[4])\n    idx = 5\n    grid = []\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    orig_color = grid[sr][sc]\n    if orig_color != new_color:\n        stack = [(sr, sc)]\n        grid[sr][sc] = new_color\n        while stack:\n            r, c = stack.pop()\n            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == orig_color:\n                    grid[nr][nc] = new_color\n                    stack.append((nr, nc))\n    for row in grid:\n        print(*(row))\n\nif __name__ == \"__main__\":\n    solve()",
    "commonMistakes": [
      "Handling boundary conditions or empty input improperly"
    ],
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "interviewRelevance": "high",
    "tags": [
      "level-22",
      "easy"
    ]
  }
];
