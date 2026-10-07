import { Problem } from '../types';

export const level13Problems: Problem[] = [
    {
        id: 'prob-13-01',
        levelId: 'level-13',
        title: 'STL Pair Basics',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `The \`<utility>\` library provides \`std::pair\`, which lets you bundle two pieces of data together (e.g. an x and y coordinate).\n\n**Task:**\nRead \`N\` pairs of integers (X and Y coordinates). Print the coordinates that have the highest Y value. If there's a tie, print the one that appeared first.`,
        whyThisMatters: 'Pairs are heavily used in Hash Maps and Graphs.',
        concepts: ['pair', 'stl'],
        prerequisites: ['arrays'],
        learningObjectives: ['Use `std::pair`', 'Access `.first` and `.second`'],
        constraints: ['N <= 100'],
        examples: [{ input: '3\n1 5\n10 2\n4 8', output: '4 8' }],
        testCases: [
            { id: 'tc1', input: '3\n1 5\n10 2\n4 8', expectedOutput: '4 8', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <utility>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    // vector of pairs\n    vector<pair<int, int>> points(n);\n    \n    for(int i=0; i<n; i++) {\n        cin >> points[i].first >> points[i].second;\n    }\n    \n    // Find the one with max Y (.second)\n    \n    return 0;\n}`,
        hints: ['Keep track of a `bestPoint` which is a `pair<int, int>`.', 'Compare `points[i].second` with `bestPoint.second`.'],
        howToThink: [],
        approach: 'Scan array of pairs, track max .second',
        pseudocode: '',
        explanation: 'Pair provides `.first` and `.second` members natively.',
        solution: `#include <iostream>\n#include <vector>\n#include <utility>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    if(n==0) return 0;\n    vector<pair<int, int>> p(n);\n    for(int i=0; i<n; i++) cin >> p[i].first >> p[i].second;\n    \n    pair<int, int> best = p[0];\n    for(int i=1; i<n; i++) {\n        if (p[i].second > best.second) {\n            best = p[i];\n        }\n    }\n    cout << best.first << " " << best.second;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'medium', tags: ['stl']
    },
    {
        id: 'prob-13-02',
        levelId: 'level-13',
        title: 'Range-Based For Loops',
        type: 'coding',
        difficulty: 'beginner',
        order: 2,
        description: `Modern C++ allows you to iterate cleanly without index variables using **Range-Based For Loops**.\n\n\`\`\`cpp\nfor(int x : arr) {\n    cout << x;\n}\n\`\`\`\n\n**Task:**\nRead \`N\` and an array of \`N\` integers. Calculate the sum of all elements using a range-based for loop.`,
        whyThisMatters: 'Saves you from writing `for(int i = 0; i < arr.size(); i++)` repeatedly during interviews.',
        concepts: ['range-based for'],
        prerequisites: ['loops'],
        learningObjectives: ['Use range-based iteration'],
        constraints: [],
        examples: [{ input: '3\n10 20 30', output: '60' }],
        testCases: [
            { id: 'tc1', input: '3\n10 20 30', expectedOutput: '60', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    \n    int sum = 0;\n    // USE A RANGE-BASED FOR LOOP HERE\n    \n    cout << sum;\n    return 0;\n}`,
        hints: ['`for (int val : arr) { sum += val; }`'],
        howToThink: [],
        approach: 'Iterate and sum',
        pseudocode: '',
        explanation: 'Very clean syntax introduced in C++11.',
        solution: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    vector<int> arr(n);\n    for(int i=0; i<n; i++) cin >> arr[i];\n    int sum = 0;\n    for(int x : arr) sum += x;\n    cout << sum;\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N)', interviewRelevance: 'low', tags: ['stl']
    }
];
