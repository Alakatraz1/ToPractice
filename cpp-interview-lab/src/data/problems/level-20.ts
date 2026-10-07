import { Problem } from '../types';

export const level20Problems: Problem[] = [
    {
        id: 'prob-20-01',
        levelId: 'level-20',
        title: 'Binary Search: First True',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `**Task:**\nYou have an array of booleans represented as integers (0 for False, 1 for True). They are sorted, so all 0s come before all 1s. (e.g., \`[0, 0, 1, 1, 1]\`).\nFind the index of the **first 1** in O(log N) time.\nIf there are no 1s, output \`-1\`.\n\n*Pattern:* Binary Search on Monotonic Functions`,
        whyThisMatters: 'This is the universal template for advanced binary search problems. If you can define a True/False boundary, you can binary search it.',
        concepts: ['binary search on answer'],
        prerequisites: ['binary search'],
        learningObjectives: ['Find a boundary condition using binary search'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n0 0 0 1 1', output: '3' }],
        testCases: [
            { id: 'tc1', input: '5\n0 0 0 1 1', expectedOutput: '3', hidden: false },
            { id: 'tc2', input: '3\n0 0 0', expectedOutput: '-1', hidden: false },
            { id: 'tc3', input: '4\n1 1 1 1', expectedOutput: '0', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int left = 0, right = n - 1;\n    int ans = -1;\n    \n    // while left <= right\n    // if arr[mid] == 1, save mid as potential answer, but keep searching left!\n    \n    cout << ans;\n    return 0;\n}`,
        hints: ['If `arr[mid] == 1`, it might be the first 1, or there might be an earlier one. Save `ans = mid` and `right = mid - 1`.', 'If `arr[mid] == 0`, the first 1 MUST be to the right. `left = mid + 1`.'],
        howToThink: ['I need to find the boundary where it switches from 0 to 1.'],
        approach: 'Binary search. If 1, save and go left. If 0, go right.',
        pseudocode: 'ans = -1\nwhile left <= right:\n    mid = left + (right - left)/2\n    if arr[mid] == 1:\n        ans = mid\n        right = mid - 1\n    else:\n        left = mid + 1\nreturn ans',
        explanation: 'We only do log N checks. This identical logic solves many difficult "Find the minimum X that satisfies Y" problems.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int left = 0, right = n - 1;\n    int ans = -1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == 1) {\n            ans = mid;\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    cout << ans;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['binary search']
    }
];
