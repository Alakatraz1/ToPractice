import { Problem } from '../types';

export const level27Problems: Problem[] = [
    {
        id: 'prob-27-01',
        levelId: 'level-27',
        title: 'Mock 1: Array Reversal',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `Reverse an array in place and print it.`,
        whyThisMatters: 'Mock test.',
        concepts: ['two pointers'],
        prerequisites: ['arrays'],
        learningObjectives: ['Test under pressure'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }],
        testCases: [
            { id: 'tc1', input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    // Reverse\n    \n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        hints: [],
        howToThink: [],
        approach: '',
        pseudocode: '',
        explanation: 'O(N) time.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int l = 0, r = n - 1;\n    while(l < r) {\n        swap(arr[l], arr[r]);\n        l++; r--;\n    }\n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'medium', tags: ['mock']
    }
];
