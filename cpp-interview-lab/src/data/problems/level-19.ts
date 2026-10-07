import { Problem } from '../types';

export const level19Problems: Problem[] = [
    {
        id: 'prob-19-01',
        levelId: 'level-19',
        title: 'Maximum Sum Subarray of Fixed Size K',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nGiven an array of \`N\` integers and an integer \`K\`, find the maximum sum of any contiguous subarray of exactly size \`K\`.\n\n*Pattern:* Sliding Window (Fixed)`,
        whyThisMatters: 'Sliding window optimizes O(N*K) brute force array scanning down to O(N).',
        concepts: ['sliding window'],
        prerequisites: ['loops', 'arrays'],
        learningObjectives: ['Maintain a rolling sum instead of recalculating from scratch'],
        constraints: ['N <= 1000', '1 <= K <= N'],
        examples: [{ input: '5 3\n2 1 5 1 3', output: '9', explanation: 'Subarray [1, 5, 1] sum is 7. [5, 1, 3] sum is 9.' }],
        testCases: [
            { id: 'tc1', input: '5 3\n2 1 5 1 3', expectedOutput: '9', hidden: false },
            { id: 'tc2', input: '4 2\n10 20 30 40', expectedOutput: '70', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, k; cin >> n >> k;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    // 1. Calculate sum of first window (0 to k-1)\n    \n    // 2. Slide window: subtract the element left behind, add the new element\n    \n    return 0;\n}`,
        hints: ['Sum the first K elements. Set `maxSum = currentSum`.', 'Loop `i` from `K` to `N-1`.', '`currentSum = currentSum - arr[i-K] + arr[i]`.'],
        howToThink: ['If I have the sum of [A, B, C], to get the sum of [B, C, D], I just subtract A and add D. I don\'t need to add B and C again!'],
        approach: 'Sum first window. Slide window one by one, updating max sum.',
        pseudocode: 'sum = 0\nfor i=0 to K-1: sum += arr[i]\nmaxSum = sum\nfor i=K to N-1:\n    sum = sum - arr[i-K] + arr[i]\n    maxSum = max(maxSum, sum)\nreturn maxSum',
        explanation: 'We only look at each element twice (once when it enters the window, once when it leaves). This guarantees O(N).',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k; cin >> n >> k;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int sum = 0;\n    for(int i=0; i<k; i++) sum += arr[i];\n    int maxSum = sum;\n    \n    for(int i=k; i<n; i++) {\n        sum = sum - arr[i-k] + arr[i];\n        if (sum > maxSum) maxSum = sum;\n    }\n    cout << maxSum;\n    return 0;\n}`,
        commonMistakes: ['Recomputing the sum of the window from scratch inside a nested loop (O(N*K)).'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['sliding window']
    }
];
