const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../src/data/pythonProblems');

function p(id, levelId, title, difficulty, timeLimit, memoryLimit, description, examples, starterCode, solution, testCases, hints) {
  const diffLower = difficulty ? difficulty.toLowerCase() : 'medium';
  const orderNum = parseInt(id.split('-').pop(), 10) || 1;
  const hList = hints || [];
  return {
    id,
    levelId,
    title,
    type: 'coding',
    difficulty: diffLower,
    order: orderNum,
    description,
    whyThisMatters: `${title} is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.`,
    concepts: [levelId.replace('py-', '').replace('level-', 'topic-'), diffLower],
    prerequisites: [],
    learningObjectives: [`Master the ${title} algorithm`, 'Write clean, optimal Python 3 code'],
    constraints: ['Standard input / output'],
    examples: examples || [],
    testCases: (testCases || []).map((tc, idx) => ({
      id: `${id}-tc-${idx + 1}`,
      input: tc.input || '',
      expectedOutput: tc.expectedOutput || '',
      hidden: idx >= 2
    })),
    starterCode,
    pythonStarterCode: starterCode,
    hints: hList,
    howToThink: [
      `Analyze the input format and constraints for ${title}.`,
      'Identify whether a greedy, graph, or DP pattern applies.',
      'Construct a step-by-step solution avoiding unnecessary allocations.'
    ],
    approach: hList[0] || `Apply idiomatic algorithm for ${title}.`,
    pseudocode: `# Solution logic for ${title}\n# 1. Parse input\n# 2. Process logic\n# 3. Print output`,
    explanation: hList[0] || `Optimal algorithm handles all cases in linear or polynomial time.`,
    solution,
    pythonSolution: solution,
    commonMistakes: ['Handling boundary conditions or empty input improperly'],
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    interviewRelevance: 'high',
    tags: [levelId, diffLower]
  };
}

function dumpLevel(file, varName, probs) {
  const content = `import { Problem } from '../types';\n\nexport const ${varName}: Problem[] = ${JSON.stringify(probs, null, 2)};\n`;
  fs.writeFileSync(path.join(outDir, file), content, 'utf8');
  console.log(`Generated ${file} with ${probs.length} problems`);
}

// ==========================================
// LEVEL 22: Graph Algorithms & BFS / DFS (Python)
// ==========================================
const l22 = [
  p('py-prob-22-01', 'level-22', 'Number of Islands', 'Medium', 2000, 128,
    'Given an m x n 2D binary grid grid where 1 represents land and 0 represents water, return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.\n\nInput format: line 1 has m and n. Following m lines contain n space-separated integers (0 or 1).',
    [{ input: '4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0', output: '1', explanation: 'All 1s connect into 1 island' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    idx = 2\n    grid = []\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    count = 0\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 1:\n                count += 1\n                stack = [(r, c)]\n                grid[r][c] = 0\n                while stack:\n                    cr, cc = stack.pop()\n                    for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                        nr, nc = cr + dr, cc + dc\n                        if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                            grid[nr][nc] = 0\n                            stack.append((nr, nc))\n    print(count)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0', expectedOutput: '1' },
      { input: '4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1', expectedOutput: '3' },
      { input: '2 2\n0 0\n0 0', expectedOutput: '0' },
      { input: '1 1\n1', expectedOutput: '1' }
    ],
    ['Use BFS or DFS, modifying visited land cells to 0 or keeping a visited set.']
  ),
  p('py-prob-22-02', 'level-22', 'Breadth-First Search (Shortest Path Unweighted)', 'Medium', 2000, 128,
    'Given an undirected unweighted graph with N nodes (numbered 1 to N) and M edges, find the shortest distance from node 1 to node N. If unreachable, print -1.\n\nInput format: line 1 has N and M. Following M lines each contain two integers u and v.',
    [{ input: '4 4\n1 2\n2 3\n3 4\n1 4', output: '1', explanation: 'Direct edge 1-4 has distance 1' }],
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    dist = {1: 0}\n    q = deque([1])\n    while q:\n        curr = q.popleft()\n        if curr == n:\n            print(dist[curr])\n            return\n        for nbr in adj[curr]:\n            if nbr not in dist:\n                dist[nbr] = dist[curr] + 1\n                q.append(nbr)\n    print(-1 if n != 1 else 0)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4 4\n1 2\n2 3\n3 4\n1 4', expectedOutput: '1' },
      { input: '4 2\n1 2\n3 4', expectedOutput: '-1' },
      { input: '5 4\n1 2\n2 3\n3 4\n4 5', expectedOutput: '4' },
      { input: '1 0', expectedOutput: '0' }
    ],
    ['Use collections.deque for BFS from starting node 1.']
  ),
  p('py-prob-22-03', 'level-22', 'Detect Cycle in Directed Graph', 'Medium', 2000, 128,
    'Given a directed graph with N vertices (0 to N-1) and M directed edges, determine if it contains a directed cycle. Print "CYCLE" if a cycle exists, else "ACYCLIC".\n\nInput format: N M, followed by M lines of u v (u -> v).',
    [{ input: '3 3\n0 1\n1 2\n2 0', output: 'CYCLE', explanation: '0->1->2->0 forms a cycle' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        idx += 2\n    # 0 = unvisited, 1 = visiting, 2 = visited\n    color = [0] * n\n    def dfs(u):\n        color[u] = 1\n        for v in adj[u]:\n            if color[v] == 1:\n                return True\n            if color[v] == 0 and dfs(v):\n                return True\n        color[u] = 2\n        return False\n    for i in range(n):\n        if color[i] == 0:\n            if dfs(i):\n                print("CYCLE")\n                return\n    print("ACYCLIC")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 3\n0 1\n1 2\n2 0', expectedOutput: 'CYCLE' },
      { input: '3 2\n0 1\n1 2', expectedOutput: 'ACYCLIC' },
      { input: '4 4\n0 1\n1 2\n2 3\n3 1', expectedOutput: 'CYCLE' },
      { input: '2 1\n0 1', expectedOutput: 'ACYCLIC' }
    ],
    ['Color nodes: 0 unvisited, 1 currently on DFS call stack, 2 finished processing.']
  ),
  p('py-prob-22-04', 'level-22', 'Course Schedule (Topological Sort)', 'Medium', 2000, 128,
    'There are N courses labeled 0 to N-1. You are given M prerequisites where [a, b] indicates that you must take course b before course a. Return a valid order of courses to finish all courses separated by spaces. If impossible, print -1. If multiple valid orders exist, any is accepted.',
    [{ input: '4 4\n1 0\n2 0\n3 1\n3 2', output: '0 1 2 3', explanation: 'Kahn\'s algorithm or topological order' }],
    `import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    in_degree = [0] * n\n    idx = 2\n    for _ in range(m):\n        a, b = int(lines[idx]), int(lines[idx+1])\n        adj[b].append(a)\n        in_degree[a] += 1\n        idx += 2\n    q = deque([i for i in range(n) if in_degree[i] == 0])\n    res = []\n    while q:\n        u = q.popleft()\n        res.append(u)\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                q.append(v)\n    if len(res) == n:\n        print(*(res))\n    else:\n        print(-1)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '2 1\n1 0', expectedOutput: '0 1' },
      { input: '2 2\n1 0\n0 1', expectedOutput: '-1' },
      { input: '4 4\n1 0\n2 0\n3 1\n3 2', expectedOutput: '0 1 2 3' }
    ],
    ['Use Kahn\'s algorithm with in-degrees and a queue.']
  ),
  p('py-prob-22-05', 'level-22', 'Connected Components in Undirected Graph', 'Easy', 2000, 128,
    'Given N nodes labeled 1 to N and M undirected edges, find the total number of connected components in the graph.\n\nInput format: N M, then M lines of u v.',
    [{ input: '5 3\n1 2\n2 3\n4 5', output: '2', explanation: 'Components are {1,2,3} and {4,5}' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    visited = set()\n    components = 0\n    for i in range(1, n + 1):\n        if i not in visited:\n            components += 1\n            stack = [i]\n            visited.add(i)\n            while stack:\n                curr = stack.pop()\n                for nbr in adj[curr]:\n                    if nbr not in visited:\n                        visited.add(nbr)\n                        stack.append(nbr)\n    print(components)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5 3\n1 2\n2 3\n4 5', expectedOutput: '2' },
      { input: '3 0', expectedOutput: '3' },
      { input: '4 3\n1 2\n2 3\n3 4', expectedOutput: '1' }
    ],
    ['Loop through 1..N and trigger DFS/BFS for any unvisited vertex.']
  ),
  p('py-prob-22-06', 'level-22', 'Check if Graph is Bipartite', 'Medium', 2000, 128,
    'Given an undirected graph with N nodes (0 to N-1) and M edges, determine if it is bipartite (2-colorable). Print "YES" if bipartite, else "NO".\n\nInput format: N M, followed by M lines of u v.',
    [{ input: '4 4\n0 1\n1 2\n2 3\n3 0', output: 'YES', explanation: 'Even cycle is 2-colorable' }],
    `import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque, defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    color = {}\n    for i in range(n):\n        if i not in color:\n            color[i] = 0\n            q = deque([i])\n            while q:\n                curr = q.popleft()\n                for nbr in adj[curr]:\n                    if nbr not in color:\n                        color[nbr] = 1 - color[curr]\n                        q.append(nbr)\n                    elif color[nbr] == color[curr]:\n                        print("NO")\n                        return\n    print("YES")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4 4\n0 1\n1 2\n2 3\n3 0', expectedOutput: 'YES' },
      { input: '3 3\n0 1\n1 2\n2 0', expectedOutput: 'NO' },
      { input: '4 0', expectedOutput: 'YES' }
    ],
    ['Color alternating vertices 0 and 1. If an adjacent neighbor has the same color, it is not bipartite.']
  ),
  p('py-prob-22-07', 'level-22', 'Dijkstra\'s Shortest Path Algorithm', 'Medium', 2000, 128,
    'Given a weighted directed graph with N nodes (1 to N) and M edges with non-negative weights, find the shortest distance from node 1 to node N using heapq. Print -1 if unreachable.\n\nInput format: N M, followed by M lines of u v w.',
    [{ input: '4 5\n1 2 4\n1 3 2\n3 2 1\n2 4 5\n3 4 8', output: '8', explanation: 'Path 1->3->2->4 has weight 2+1+5 = 8' }],
    `import sys\nimport heapq\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nimport heapq\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v, w = int(lines[idx]), int(lines[idx+1]), int(lines[idx+2])\n        adj[u].append((v, w))\n        idx += 3\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[1] = 0\n    pq = [(0, 1)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]:\n            continue\n        if u == n:\n            print(d)\n            return\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n    print(-1 if dist[n] == float('inf') else dist[n])\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4 5\n1 2 4\n1 3 2\n3 2 1\n2 4 5\n3 4 8', expectedOutput: '8' },
      { input: '3 1\n1 2 10', expectedOutput: '-1' },
      { input: '1 0', expectedOutput: '0' }
    ],
    ['Use heapq with tuples (dist, node).']
  ),
  p('py-prob-22-08', 'level-22', 'Rotting Oranges', 'Medium', 2000, 128,
    'You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes until no fresh orange remains, or -1 if impossible.\n\nInput format: m n followed by m x n values.',
    [{ input: '3 3\n2 1 1\n1 1 0\n0 1 1', output: '4', explanation: 'All oranges rot in 4 minutes' }],
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    q = deque()\n    fresh = 0\n    for r in range(m):\n        row = [int(x) for x in lines[idx:idx+n]]\n        grid.append(row)\n        for c in range(n):\n            if row[c] == 2:\n                q.append((r, c, 0))\n            elif row[c] == 1:\n                fresh += 1\n        idx += n\n    minutes = 0\n    while q:\n        r, c, t = q.popleft()\n        minutes = max(minutes, t)\n        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, t + 1))\n    print(minutes if fresh == 0 else -1)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 3\n2 1 1\n1 1 0\n0 1 1', expectedOutput: '4' },
      { input: '3 3\n2 1 1\n0 1 1\n1 0 1', expectedOutput: '-1' },
      { input: '1 2\n0 2', expectedOutput: '0' }
    ],
    ['Multi-source BFS initialized with all initial rotten oranges.']
  ),
  p('py-prob-22-09', 'level-22', 'Clone Graph Logic', 'Medium', 2000, 128,
    'Given an undirected graph with N nodes (1 to N) represented as an adjacency list, print the cloned adjacency list representation in format: node_val: neighbor1 neighbor2 ... in ascending order of node val.\n\nInput format: N M, then M lines of undirected edges u v.',
    [{ input: '3 2\n1 2\n2 3', output: '1: 2\n2: 1 3\n3: 2', explanation: 'Neighbors sorted for each node' }],
    `import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    adj = defaultdict(list)\n    idx = 2\n    for _ in range(m):\n        u, v = int(lines[idx]), int(lines[idx+1])\n        adj[u].append(v)\n        adj[v].append(u)\n        idx += 2\n    for u in range(1, n + 1):\n        nbrs = sorted(adj[u])\n        print(f"{u}: " + " ".join(map(str, nbrs)) if nbrs else f"{u}:")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 2\n1 2\n2 3', expectedOutput: '1: 2\n2: 1 3\n3: 2' },
      { input: '2 1\n1 2', expectedOutput: '1: 2\n2: 1' },
      { input: '1 0', expectedOutput: '1:' }
    ],
    ['Format sorted neighbors for each vertex.']
  ),
  p('py-prob-22-10', 'level-22', 'Flood Fill Algorithm', 'Easy', 2000, 128,
    'An image is represented by an m x n integer grid. You are given sr, sc (0-indexed start cell) and newColor. Perform a flood fill on the image starting from the pixel (sr, sc). Output the modified grid.\n\nInput format: m n sr sc newColor, followed by m lines each with n space-separated integers.',
    [{ input: '3 3 1 1 2\n1 1 1\n1 1 0\n1 0 1', output: '2 2 2\n2 2 0\n2 0 1', explanation: 'Original color at (1,1) is 1, all connected 1s turn to 2' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    sr, sc, new_color = int(lines[2]), int(lines[3]), int(lines[4])\n    idx = 5\n    grid = []\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    orig_color = grid[sr][sc]\n    if orig_color != new_color:\n        stack = [(sr, sc)]\n        grid[sr][sc] = new_color\n        while stack:\n            r, c = stack.pop()\n            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == orig_color:\n                    grid[nr][nc] = new_color\n                    stack.append((nr, nc))\n    for row in grid:\n        print(*(row))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 3 1 1 2\n1 1 1\n1 1 0\n1 0 1', expectedOutput: '2 2 2\n2 2 0\n2 0 1' },
      { input: '2 2 0 0 0\n0 0\n0 0', expectedOutput: '0 0\n0 0' }
    ],
    ['Check boundary and if original color matches before replacing and recursing.']
  )
];

// ==========================================
// LEVEL 23: Greedy Algorithms (Python)
// ==========================================
const l23 = [
  p('py-prob-23-01', 'level-23', 'Activity Selection Problem', 'Easy', 2000, 128,
    'Given N activities with their start and finish times, select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.\n\nInput format: N, then N lines of start finish.',
    [{ input: '6\n1 2\n3 4\n0 6\n5 7\n8 9\n5 9', output: '4', explanation: 'Activities (1,2), (3,4), (5,7), (8,9)' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    acts = []\n    idx = 1\n    for _ in range(n):\n        acts.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    acts.sort(key=lambda x: x[1])\n    count = 0\n    last_end = -1\n    for s, e in acts:\n        if s >= last_end:\n            count += 1\n            last_end = e\n    print(count)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '6\n1 2\n3 4\n0 6\n5 7\n8 9\n5 9', expectedOutput: '4' },
      { input: '3\n10 20\n12 25\n20 30', expectedOutput: '2' },
      { input: '1\n1 5', expectedOutput: '1' }
    ],
    ['Sort by finish time ascending and pick greedily whenever start >= last_finish.']
  ),
  p('py-prob-23-02', 'level-23', 'Jump Game (Can Reach End)', 'Medium', 2000, 128,
    'You are given an integer array nums. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position. Return "true" if you can reach the last index, or "false" otherwise.\n\nInput format: line 1 has N, line 2 has N space-separated integers.',
    [{ input: '5\n2 3 1 1 4', output: 'true', explanation: 'Jump 1 step from 0 to 1, then 3 steps to the last index' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    max_reach = 0\n    for i in range(n):\n        if i > max_reach:\n            print("false")\n            return\n        max_reach = max(max_reach, i + nums[i])\n        if max_reach >= n - 1:\n            print("true")\n            return\n    print("true")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5\n2 3 1 1 4', expectedOutput: 'true' },
      { input: '5\n3 2 1 0 4', expectedOutput: 'false' },
      { input: '1\n0', expectedOutput: 'true' }
    ],
    ['Keep track of the furthest reachable index. If current index > max_reach, return false.']
  ),
  p('py-prob-23-03', 'level-23', 'Non-overlapping Intervals', 'Medium', 2000, 128,
    'Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.\n\nInput format: N, then N lines of start end.',
    [{ input: '4\n1 2\n2 3\n3 4\n1 3', output: '1', explanation: 'Remove [1,3]' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    intervals.sort(key=lambda x: x[1])\n    removals = 0\n    last_end = float('-inf')\n    for s, e in intervals:\n        if s < last_end:\n            removals += 1\n        else:\n            last_end = e\n    print(removals)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4\n1 2\n2 3\n3 4\n1 3', expectedOutput: '1' },
      { input: '3\n1 2\n1 2\n1 2', expectedOutput: '2' },
      { input: '3\n1 2\n2 3\n3 4', expectedOutput: '0' }
    ],
    ['Sort intervals by end time. Keep interval that finishes earliest to leave room for others.']
  ),
  p('py-prob-23-04', 'level-23', 'Gas Station Circuit', 'Medium', 2000, 128,
    'There are n gas stations along a circular route. You have two integer arrays gas and cost. Return the starting gas station\'s index (0-indexed) if you can travel around the circuit once clockwise without running out of gas, or -1 if impossible.\n\nInput format: N, followed by N integers of gas, then N integers of cost.',
    [{ input: '5\n1 2 3 4 5\n3 4 5 1 2', output: '3', explanation: 'Start at station 3 (cost 1, gas 4)' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    gas = [int(x) for x in lines[1:n+1]]\n    cost = [int(x) for x in lines[n+1:2*n+1]]\n    if sum(gas) < sum(cost):\n        print(-1)\n        return\n    start = 0\n    current_tank = 0\n    for i in range(n):\n        current_tank += gas[i] - cost[i]\n        if current_tank < 0:\n            start = i + 1\n            current_tank = 0\n    print(start)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5\n1 2 3 4 5\n3 4 5 1 2', expectedOutput: '3' },
      { input: '3\n2 3 4\n3 4 3', expectedOutput: '-1' }
    ],
    ['If total gas >= total cost, a solution is guaranteed to exist. Reset candidate start whenever tank drops below 0.']
  ),
  p('py-prob-23-05', 'level-23', 'Assign Cookies', 'Easy', 2000, 128,
    'Assume you are an awesome parent and want to give your children some cookies. Each child i has a greed factor g[i], and each cookie j has a size s[j]. A child will be content if s[j] >= g[i]. Maximize the number of content children.\n\nInput format: N M, then N integers of g, then M integers of s.',
    [{ input: '3 2\n1 2 3\n1 1', output: '1', explanation: 'Only 1 child can be content' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, m = int(lines[0]), int(lines[1])\n    g = sorted([int(x) for x in lines[2:2+n]])\n    s = sorted([int(x) for x in lines[2+n:2+n+m]])\n    i, j = 0, 0\n    while i < n and j < m:\n        if s[j] >= g[i]:\n            i += 1\n        j += 1\n    print(i)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 2\n1 2 3\n1 1', expectedOutput: '1' },
      { input: '2 3\n1 2\n1 2 3', expectedOutput: '2' }
    ],
    ['Sort both arrays and match greedily using two pointers.']
  ),
  p('py-prob-23-06', 'level-23', 'Minimum Platforms / Meeting Rooms II', 'Medium', 2000, 128,
    'Given arrival and departure times of all trains that reach a railway station, find the minimum number of platforms required so that no train has to wait.\n\nInput format: N, then N arrivals, then N departures.',
    [{ input: '6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000', output: '3', explanation: 'At 9:50, three trains overlap' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    arr = sorted([int(x) for x in lines[1:n+1]])\n    dep = sorted([int(x) for x in lines[n+1:2*n+1]])\n    platforms = 0\n    max_platforms = 0\n    i, j = 0, 0\n    while i < n and j < n:\n        if arr[i] <= dep[j]:\n            platforms += 1\n            max_platforms = max(max_platforms, platforms)\n            i += 1\n        else:\n            platforms -= 1\n            j += 1\n    print(max_platforms)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '6\n900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000', expectedOutput: '3' },
      { input: '3\n900 1100 1235\n1000 1200 1240', expectedOutput: '1' }
    ],
    ['Sort arrivals and departures separately and simulate with two pointers.']
  ),
  p('py-prob-23-07', 'level-23', 'Lemonade Change', 'Easy', 2000, 128,
    'At a lemonade stand, each lemonade costs $5. Customers stand in a queue and buy one at a time, paying with $5, $10, or $20 bills. You must provide correct change with your currently available bills. Return "true" if you can provide every customer with correct change, or "false" otherwise.\n\nInput format: N followed by N bill values.',
    [{ input: '5\n5 5 5 10 20', output: 'true', explanation: 'All change provided successfully' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    bills = [int(x) for x in lines[1:n+1]]\n    five, ten = 0, 0\n    for bill in bills:\n        if bill == 5:\n            five += 1\n        elif bill == 10:\n            if five == 0:\n                print("false")\n                return\n            five -= 1\n            ten += 1\n        else:\n            if ten > 0 and five > 0:\n                ten -= 1\n                five -= 1\n            elif five >= 3:\n                five -= 3\n            else:\n                print("false")\n                return\n    print("true")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5\n5 5 5 10 20', expectedOutput: 'true' },
      { input: '5\n5 5 10 10 20', expectedOutput: 'false' }
    ],
    ['When giving change for $20, prioritize giving a $10 and a $5 because $5 bills are more versatile.']
  ),
  p('py-prob-23-08', 'level-23', 'Partition Labels', 'Medium', 2000, 128,
    'You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts separated by spaces.\n\nInput format: single string s.',
    [{ input: 'ababcbacadefegdehijhklij', output: '9 7 8', explanation: 'Parts: "ababcbaca" (len 9), "defegde" (len 7), "hijhklij" (len 8)' }],
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    last = {c: i for i, c in enumerate(s)}\n    sizes = []\n    start, end = 0, 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            sizes.append(end - start + 1)\n            start = i + 1\n    print(*(sizes))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'ababcbacadefegdehijhklij', expectedOutput: '9 7 8' },
      { input: 'eccbbbbdec', expectedOutput: '10' }
    ],
    ['Record the last occurrence of each character. Greedily expand the current partition boundary to the maximum last occurrence.']
  ),
  p('py-prob-23-09', 'level-23', 'Task Scheduler', 'Medium', 2000, 128,
    'Given a characters array tasks representing CPU tasks (uppercase A-Z) and a non-negative integer n representing cooldown between identical tasks, return the minimum units of time required to complete all tasks.\n\nInput format: string of task characters (e.g. AAABBB) and integer n.',
    [{ input: 'AAABBB 2', output: '8', explanation: 'A -> B -> idle -> A -> B -> idle -> A -> B' }],
    `import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    tasks, n = lines[0], int(lines[1])\n    counts = Counter(tasks)\n    max_freq = max(counts.values())\n    num_max = sum(1 for c in counts.values() if c == max_freq)\n    part_count = max_freq - 1\n    part_len = n - (num_max - 1)\n    empty_slots = part_count * part_len\n    available_tasks = len(tasks) - max_freq * num_max\n    idles = max(0, empty_slots - available_tasks)\n    print(len(tasks) + idles)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'AAABBB 2', expectedOutput: '8' },
      { input: 'AAABBB 0', expectedOutput: '6' },
      { input: 'AAAAAABBBEEGG 2', expectedOutput: '16' }
    ],
    ['Formula based on the most frequent task: (max_freq - 1) * (n + 1) + num_max.']
  ),
  p('py-prob-23-10', 'level-23', 'Fractional Knapsack', 'Medium', 2000, 128,
    'Given N items with their values and weights, and a knapsack of capacity W, find the maximum total value in the knapsack. You can break items into fractions. Print the maximum value formatted to 2 decimal places.\n\nInput format: N W, followed by N lines of value weight.',
    [{ input: '3 50\n60 10\n100 20\n120 30', output: '240.00', explanation: 'Take item 1 (60), item 2 (100), and 2/3 of item 3 (80) = 240.00' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, w = int(lines[0]), float(lines[1])\n    items = []\n    idx = 2\n    for _ in range(n):\n        val, wt = float(lines[idx]), float(lines[idx+1])\n        items.append((val, wt, val / wt))\n        idx += 2\n    items.sort(key=lambda x: x[2], reverse=True)\n    total_val = 0.0\n    rem_w = w\n    for val, wt, ratio in items:\n        if rem_w >= wt:\n            total_val += val\n            rem_w -= wt\n        else:\n            total_val += ratio * rem_w\n            break\n    print(f"{total_val:.2f}")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 50\n60 10\n100 20\n120 30', expectedOutput: '240.00' },
      { input: '2 50\n60 10\n100 20', expectedOutput: '160.00' }
    ],
    ['Sort items by value-to-weight ratio descending.']
  )
];

// ==========================================
// LEVEL 24: Dynamic Programming (Python)
// ==========================================
const l24 = [
  p('py-prob-24-01', 'level-24', 'Climbing Stairs', 'Easy', 2000, 128,
    'You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. In how many distinct ways can you climb to the top?\n\nInput format: single integer n.',
    [{ input: '3', output: '3', explanation: 'Ways: 1+1+1, 1+2, 2+1' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    if n <= 2:\n        print(n)\n        return\n    a, b = 1, 2\n    for _ in range(3, n + 1):\n        a, b = b, a + b\n    print(b)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '2', expectedOutput: '2' },
      { input: '3', expectedOutput: '3' },
      { input: '5', expectedOutput: '8' },
      { input: '10', expectedOutput: '89' }
    ],
    ['dp[i] = dp[i-1] + dp[i-2], just like Fibonacci sequence.']
  ),
  p('py-prob-24-02', 'level-24', 'House Robber', 'Medium', 2000, 128,
    'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected that automatically contact the police if two adjacent houses are broken into on the same night. Return the maximum amount of money you can rob without alerting the police.\n\nInput format: N followed by N integers.',
    [{ input: '4\n1 2 3 1', output: '4', explanation: 'Rob house 1 (money = 1) and house 3 (money = 3) -> 4' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    prev1, prev2 = 0, 0\n    for num in nums:\n        prev1, prev2 = max(prev2 + num, prev1), prev1\n    print(prev1)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4\n1 2 3 1', expectedOutput: '4' },
      { input: '5\n2 7 9 3 1', expectedOutput: '12' },
      { input: '1\n100', expectedOutput: '100' }
    ],
    ['dp[i] = max(dp[i-1], dp[i-2] + nums[i]) with O(1) space.']
  ),
  p('py-prob-24-03', 'level-24', '0/1 Knapsack Problem', 'Medium', 2000, 128,
    'Given N items each with a weight and a value, determine the maximum value of items that can be put in a knapsack of capacity W.\n\nInput format: N W, followed by N values, then N weights.',
    [{ input: '3 4\n1 2 3\n4 5 1', output: '3', explanation: 'Take item with wt 1 and val 3' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, w = int(lines[0]), int(lines[1])\n    vals = [int(x) for x in lines[2:2+n]]\n    wts = [int(x) for x in lines[2+n:2+2*n]]\n    dp = [0] * (w + 1)\n    for val, wt in zip(vals, wts):\n        for cap in range(w, wt - 1, -1):\n            dp[cap] = max(dp[cap], dp[cap - wt] + val)\n    print(dp[w])\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 4\n1 2 3\n4 5 1', expectedOutput: '3' },
      { input: '3 50\n60 100 120\n10 20 30', expectedOutput: '220' },
      { input: '1 10\n5\n15', expectedOutput: '0' }
    ],
    ['Iterate capacity backwards from W down to wt to avoid using the same item multiple times.']
  ),
  p('py-prob-24-04', 'level-24', 'Coin Change (Minimum Coins)', 'Medium', 2000, 128,
    'You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nInput format: N amount, followed by N coin values.',
    [{ input: '3 11\n1 2 5', output: '3', explanation: '11 = 5 + 5 + 1 (3 coins)' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, amount = int(lines[0]), int(lines[1])\n    coins = [int(x) for x in lines[2:2+n]]\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for c in coins:\n        for a in range(c, amount + 1):\n            if dp[a - c] + 1 < dp[a]:\n                dp[a] = dp[a - c] + 1\n    print(dp[amount] if dp[amount] != float('inf') else -1)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 11\n1 2 5', expectedOutput: '3' },
      { input: '1 3\n2', expectedOutput: '-1' },
      { input: '1 0\n1', expectedOutput: '0' }
    ],
    ['dp[a] = min(dp[a], dp[a - coin] + 1).']
  ),
  p('py-prob-24-05', 'level-24', 'Longest Common Subsequence (LCS)', 'Medium', 2000, 128,
    'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.\n\nInput format: two strings on separate lines.',
    [{ input: 'abcde\nace', output: '3', explanation: 'LCS is "ace"' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s1, s2 = lines[0], lines[1]\n    m, n = len(s1), len(s2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    print(dp[m][n])\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'abcde\nace', expectedOutput: '3' },
      { input: 'abc\nabc', expectedOutput: '3' },
      { input: 'abc\ndef', expectedOutput: '0' }
    ],
    ['2D DP table: if s1[i-1] == s2[j-1], dp[i][j] = dp[i-1][j-1]+1, else max(dp[i-1][j], dp[i][j-1]).']
  ),
  p('py-prob-24-06', 'level-24', 'Longest Increasing Subsequence (LIS)', 'Medium', 2000, 128,
    'Given an integer array nums, return the length of the longest strictly increasing subsequence.\n\nInput format: N followed by N integers.',
    [{ input: '8\n10 9 2 5 3 7 101 18', output: '4', explanation: 'The longest increasing subsequence is [2, 3, 7, 101], length 4.' }],
    `import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails):\n            tails.append(x)\n        else:\n            tails[idx] = x\n    print(len(tails))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '8\n10 9 2 5 3 7 101 18', expectedOutput: '4' },
      { input: '6\n0 1 0 3 2 3', expectedOutput: '4' },
      { input: '7\n7 7 7 7 7 7 7', expectedOutput: '1' }
    ],
    ['O(N log N) using patience sorting with bisect.bisect_left.']
  ),
  p('py-prob-24-07', 'level-24', 'Edit Distance', 'Medium', 2000, 128,
    'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, replace).\n\nInput format: two strings on separate lines.',
    [{ input: 'horse\nros', output: '3', explanation: 'horse -> rorse -> rose -> ros (3 operations)' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    w1, w2 = lines[0], lines[1]\n    m, n = len(w1), len(w2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1):\n        dp[i][0] = i\n    for j in range(n + 1):\n        dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if w1[i-1] == w2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    print(dp[m][n])\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'horse\nros', expectedOutput: '3' },
      { input: 'intention\nexecution', expectedOutput: '5' }
    ],
    ['dp[i][j] = 1 + min(insert, delete, replace) when characters differ.']
  ),
  p('py-prob-24-08', 'level-24', 'Partition Equal Subset Sum', 'Medium', 2000, 128,
    'Given an integer array nums, return "true" if you can partition the array into two subsets such that the sum of the elements in both subsets is equal, or "false" otherwise.\n\nInput format: N followed by N integers.',
    [{ input: '4\n1 5 11 5', output: 'true', explanation: 'Subsets [1, 5, 5] and [11] both sum to 11' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = [int(x) for x in lines[1:n+1]]\n    total = sum(nums)\n    if total % 2 != 0:\n        print("false")\n        return\n    target = total // 2\n    dp = {0}\n    for x in nums:\n        next_dp = set(dp)\n        for s in dp:\n            if s + x == target:\n                print("true")\n                return\n            if s + x < target:\n                next_dp.add(s + x)\n        dp = next_dp\n    print("true" if target in dp else "false")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4\n1 5 11 5', expectedOutput: 'true' },
      { input: '4\n1 2 3 5', expectedOutput: 'false' }
    ],
    ['Subset sum problem targeting total // 2. If total is odd, immediately false.']
  ),
  p('py-prob-24-09', 'level-24', 'Word Break Problem', 'Medium', 2000, 128,
    'Given a string s and a dictionary of words, return "true" if s can be segmented into a space-separated sequence of one or more dictionary words, else "false".\n\nInput format: line 1 has string s. Line 2 has integer K. Next K strings are dictionary words.',
    [{ input: 'leetcode\n2\nleet\ncode', output: 'true', explanation: '"leetcode" can be segmented as "leet code"' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s = lines[0]\n    k = int(lines[1])\n    word_dict = set(lines[2:2+k])\n    n = len(s)\n    dp = [False] * (n + 1)\n    dp[0] = True\n    for i in range(1, n + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_dict:\n                dp[i] = True\n                break\n    print("true" if dp[n] else "false")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'leetcode\n2\nleet\ncode', expectedOutput: 'true' },
      { input: 'applepenapple\n2\napple\npen', expectedOutput: 'true' },
      { input: 'catsandog\n5\ncats\ndog\nsand\nand\ncat', expectedOutput: 'false' }
    ],
    ['dp[i] = True if there exists j < i such that dp[j] is True and s[j:i] in word_dict.']
  ),
  p('py-prob-24-10', 'level-24', 'Maximal Square', 'Medium', 2000, 128,
    'Given an m x n binary matrix filled with 0s and 1s, find the largest square containing only 1s and return its area.\n\nInput format: m n, followed by m lines each with n space-separated integers (0 or 1).',
    [{ input: '4 5\n1 0 1 0 0\n1 0 1 1 1\n1 1 1 1 1\n1 0 0 1 0', output: '4', explanation: 'Largest square has side 2, area is 4' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    max_side = 0\n    for r in range(1, m + 1):\n        for c in range(1, n + 1):\n            if grid[r-1][c-1] == 1:\n                dp[r][c] = min(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + 1\n                max_side = max(max_side, dp[r][c])\n    print(max_side * max_side)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4 5\n1 0 1 0 0\n1 0 1 1 1\n1 1 1 1 1\n1 0 0 1 0', expectedOutput: '4' },
      { input: '2 2\n0 1\n1 0', expectedOutput: '1' },
      { input: '1 1\n0', expectedOutput: '0' }
    ],
    ['dp[r][c] = min(top, left, topleft) + 1. Return max_side squared.']
  )
];

dumpLevel('level-22.ts', 'pyLevel22Problems', l22);
dumpLevel('level-23.ts', 'pyLevel23Problems', l23);
dumpLevel('level-24.ts', 'pyLevel24Problems', l24);
