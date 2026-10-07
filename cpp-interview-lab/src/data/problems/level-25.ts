import { Problem } from '../types';

export const level25Problems: Problem[] = [
    {
        id: 'prob-25-01',
        levelId: 'level-25',
        title: 'Two Sum',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `Given an array of integers \`nums\` and an integer \`target\`, find the indices of the two numbers such that they add up to \`target\`.\n(Print the smaller index first, then the larger).`,
        whyThisMatters: 'Classic interview question.',
        concepts: ['hash map'],
        prerequisites: ['arrays'],
        learningObjectives: ['Apply hash map lookup'],
        constraints: ['N <= 1000'],
        examples: [{ input: '4\n2 7 11 15\n9', output: '0 1' }],
        testCases: [
            { id: 'tc1', input: '4\n2 7 11 15\n9', expectedOutput: '0 1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for(int i=0; i<n; i++) cin >> nums[i];\n    int target; cin >> target;\n    \n    unordered_map<int, int> seen;\n    for(int i=0; i<n; i++) {\n        int comp = target - nums[i];\n        if (seen.count(comp)) {\n            cout << seen[comp] << " " << i;\n            return 0;\n        }\n        seen[nums[i]] = i;\n    }\n    return 0;\n}`,
        hints: ['Use an unordered_map to store value -> index.'],
        howToThink: ['Complement lookup'],
        approach: 'Hash map caching',
        pseudocode: 'For each num, check map for complement.',
        explanation: 'O(N) time with O(N) space.',
        solution: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for(int i=0; i<n; i++) cin >> nums[i];\n    int target; cin >> target;\n    unordered_map<int, int> seen;\n    for(int i=0; i<n; i++) {\n        int comp = target - nums[i];\n        if (seen.count(comp)) {\n            cout << seen[comp] << " " << i;\n            return 0;\n        }\n        seen[nums[i]] = i;\n    }\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'high', tags: ['hash map']
    },
    {
        id: 'prob-25-02',
        levelId: 'level-25',
        title: 'Best Time to Buy and Sell Stock',
        type: 'coding',
        difficulty: 'easy',
        order: 2,
        description: `Given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\nReturn the maximum profit you can achieve. If you cannot achieve any profit, return 0.`,
        whyThisMatters: 'Classic running minimum problem.',
        concepts: ['arrays', 'running minimum'],
        prerequisites: ['arrays'],
        learningObjectives: ['Optimize O(N^2) to O(N)'],
        constraints: ['N <= 1000'],
        examples: [{ input: '6\n7 1 5 3 6 4', output: '5' }],
        testCases: [
            { id: 'tc1', input: '6\n7 1 5 3 6 4', expectedOutput: '5', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> prices(n);\n    for(int i=0; i<n; i++) cin >> prices[i];\n    // find max profit\n    return 0;\n}`,
        hints: ['Keep track of min price seen so far.'],
        howToThink: ['At each day, what if I sold today?'],
        approach: 'Running minimum tracking.',
        pseudocode: 'minPrice = prices[0]\nfor price in prices:\n  minPrice = min(minPrice, price)\n  maxProfit = max(maxProfit, price - minPrice)',
        explanation: 'O(N) time',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    if (n == 0) { cout << 0; return 0; }\n    vector<int> prices(n);\n    for(int i=0; i<n; i++) cin >> prices[i];\n    int minPrice = prices[0], maxProfit = 0;\n    for(int i=1; i<n; i++) {\n        minPrice = min(minPrice, prices[i]);\n        maxProfit = max(maxProfit, prices[i] - minPrice);\n    }\n    cout << maxProfit;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['arrays']
    }
];
