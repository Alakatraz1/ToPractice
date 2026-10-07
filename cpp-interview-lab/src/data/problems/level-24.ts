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
    }
];
