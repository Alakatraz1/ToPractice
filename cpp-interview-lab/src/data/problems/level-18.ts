import { Problem } from '../types';

export const level18Problems: Problem[] = [
    {
        id: 'prob-18-01',
        levelId: 'level-18',
        title: 'Valid Palindrome',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `**Task:**\nA string is a palindrome if it reads the same forward and backward.\nGiven a string \`S\` (all lowercase letters, no spaces), print \`Yes\` if it is a palindrome, \`No\` otherwise.\n\n*Pattern:* Two Pointers (Opposite Ends)`,
        whyThisMatters: 'Using two pointers to scan inwards from opposite ends is a fundamental pattern for arrays and strings.',
        concepts: ['two pointers'],
        prerequisites: ['strings'],
        learningObjectives: ['Use left and right pointers simultaneously'],
        constraints: ['Length <= 1000'],
        examples: [{ input: 'racecar', output: 'Yes' }],
        testCases: [
            { id: 'tc1', input: 'racecar', expectedOutput: 'Yes', hidden: false },
            { id: 'tc2', input: 'hello', expectedOutput: 'No', hidden: false },
            { id: 'tc3', input: 'a', expectedOutput: 'Yes', hidden: true }
        ],
        starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s; cin >> s;\n    int left = 0;\n    int right = s.length() - 1;\n    \n    // while left < right, check characters\n    \n    cout << "Yes";\n    return 0;\n}`,
        hints: ['If `s[left] != s[right]`, it is NOT a palindrome. Print No and return 0.', 'Otherwise, `left++` and `right--`.'],
        howToThink: ['I can check the outer shell, then step inwards to check the inner shell, all the way to the core.'],
        approach: 'Initialize left and right pointers. Compare characters while moving inwards.',
        pseudocode: 'left=0, right=len-1\nwhile left < right:\n    if s[left] != s[right]: return No\n    left++, right--\nreturn Yes',
        explanation: 'We only do N/2 comparisons, which is O(N) time.',
        solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s; cin >> s;\n    int left = 0, right = s.length() - 1;\n    while(left < right) {\n        if(s[left] != s[right]) {\n            cout << "No";\n            return 0;\n        }\n        left++; right--;\n    }\n    cout << "Yes";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['two pointers']
    },
    {
        id: 'prob-18-02',
        levelId: 'level-18',
        title: 'Move Zeroes',
        type: 'coding',
        difficulty: 'medium',
        order: 2,
        description: `**Task:**\nGiven an array of \`N\` integers, move all \`0\`s to the end of it while maintaining the relative order of the non-zero elements.\n**Requirement:** Do this in-place without making a copy of the array.\n\n*Pattern:* Two Pointers (Slow and Fast)`,
        whyThisMatters: 'Slow/Fast pointers are used to partition arrays in-place (like in Quicksort).',
        concepts: ['two pointers', 'slow/fast'],
        prerequisites: ['arrays'],
        learningObjectives: ['Use a slow pointer to track the insertion point, and a fast pointer to scan'],
        constraints: ['N <= 1000'],
        examples: [{ input: '5\n0 1 0 3 12', output: '1 3 12 0 0' }],
        testCases: [
            { id: 'tc1', input: '5\n0 1 0 3 12', expectedOutput: '1 3 12 0 0', hidden: false },
            { id: 'tc2', input: '1\n0', expectedOutput: '0', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int insertPos = 0;\n    // Implement logic\n    \n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        hints: ['Loop through the array. If the number is NOT zero, put it at `arr[insertPos]`, then increment `insertPos`.', 'After the loop, fill the rest of the array from `insertPos` to `n-1` with zeroes.'],
        howToThink: ['I have a "writer" pointer and a "reader" pointer. The reader scans. Whenever it sees a non-zero, it tells the writer to write it down. Then the writer moves forward.'],
        approach: 'Use a slow pointer for the next non-zero position. Scan with fast pointer. Fill remaining with 0s.',
        pseudocode: 'insert = 0\nfor i from 0 to N-1:\n    if arr[i] != 0:\n        arr[insert] = arr[i]\n        insert++\nwhile insert < N:\n    arr[insert] = 0\n    insert++',
        explanation: 'This shifts elements efficiently without needing a second array, achieving O(1) space.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int insertPos = 0;\n    for(int i=0; i<n; i++) {\n        if (arr[i] != 0) {\n            arr[insertPos] = arr[i];\n            insertPos++;\n        }\n    }\n    while(insertPos < n) {\n        arr[insertPos] = 0;\n        insertPos++;\n    }\n    for(int x : arr) cout << x << " ";\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['two pointers']
    }
];
