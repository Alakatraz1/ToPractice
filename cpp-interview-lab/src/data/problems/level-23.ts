import { Problem } from '../types';

export const level23Problems: Problem[] = [
    {
        id: 'prob-23-01',
        levelId: 'level-23',
        title: 'Assign Cookies',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nAssume you have \`N\` children and \`M\` cookies. \nEach child has a greed factor \`g[i]\` (the minimum size of a cookie they will accept).\nEach cookie has a size \`s[j]\`.\nIf \`s[j] >= g[i]\`, the child gets the cookie.\nFind the maximum number of children you can satisfy.\n\n*Pattern:* Greedy Matching`,
        whyThisMatters: 'Greedy algorithms make the best local choice. Here, matching the least greedy child with the smallest possible cookie maximizes efficiency.',
        concepts: ['greedy', 'sorting', 'two pointers'],
        prerequisites: ['sorting', 'two pointers'],
        learningObjectives: ['Apply sorting + greedy choice'],
        constraints: ['N, M <= 1000'],
        examples: [{ input: '2\n1 2\n3\n1 2 3', output: '2', explanation: '2 children (greed 1, 2). 3 cookies (size 1, 2, 3). Both can be satisfied.' }],
        testCases: [
            { id: 'tc1', input: '2\n1 2\n3\n1 2 3', expectedOutput: '2', hidden: false },
            { id: 'tc2', input: '3\n1 2 3\n2\n1 1', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> g(n);\n    for(int i=0; i<n; i++) cin >> g[i];\n    \n    int m; cin >> m;\n    vector<int> s(m);\n    for(int i=0; i<m; i++) cin >> s[i];\n    \n    // 1. Sort both arrays\n    // 2. Use two pointers to match\n    \n    return 0;\n}`,
        hints: ['Sort the children and the cookies.', 'If the current cookie satisfies the current child, move BOTH pointers. If not, the cookie is too small, so move ONLY the cookie pointer to try a bigger cookie.'],
        howToThink: ['I want to waste as little cookie as possible. I should give my smallest acceptable cookie to my least greedy child.'],
        approach: 'Sort both arrays. Two pointers to find matches.',
        pseudocode: 'sort(g); sort(s)\nchild_i = 0, cookie_j = 0\nwhile child_i < n and cookie_j < m:\n    if s[cookie_j] >= g[child_i]:\n        child_i++\n    cookie_j++\nreturn child_i',
        explanation: 'Sorting takes O(N log N). The two-pointer traversal takes O(N).',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> g(n);\n    for(int i=0; i<n; i++) cin >> g[i];\n    int m; cin >> m;\n    vector<int> s(m);\n    for(int i=0; i<m; i++) cin >> s[i];\n    \n    sort(g.begin(), g.end());\n    sort(s.begin(), s.end());\n    \n    int child_i = 0, cookie_j = 0;\n    while(child_i < n && cookie_j < m) {\n        if (s[cookie_j] >= g[child_i]) {\n            child_i++;\n        }\n        cookie_j++;\n    }\n    cout << child_i;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N log N)', spaceComplexity: 'O(1)', interviewRelevance: 'medium', tags: ['greedy', 'two pointers']
    }
];
