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
    }
];
