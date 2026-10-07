import { Problem } from '../types';

export const level17Problems: Problem[] = [
    {
        id: 'prob-17-01',
        levelId: 'level-17',
        title: 'Recursion Basics (Base Cases)',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `**Recursion** is when a function calls itself. To prevent it from running forever (like an infinite loop), it MUST have a **Base Case**.\n\n**Task:**\nWrite a recursive function \`printCountdown(int n)\` that prints numbers from \`N\` down to 1. If \`N <= 0\`, it should stop (this is the base case).`,
        whyThisMatters: 'Recursion is mandatory for understanding Trees, Graphs, and Dynamic Programming.',
        concepts: ['recursion', 'base case'],
        prerequisites: ['functions'],
        learningObjectives: ['Define a base case to prevent infinite recursion'],
        constraints: ['N <= 100'],
        examples: [{ input: '5', output: '5 4 3 2 1' }],
        testCases: [
            { id: 'tc1', input: '5', expectedOutput: '5 4 3 2 1', hidden: false },
            { id: 'tc2', input: '1', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nvoid printCountdown(int n) {\n    // Base Case: When do we stop?\n    if (n <= 0) return;\n    \n    // Action: Print the current number\n    \n    // Recursive Step: Call the function with a smaller problem\n}\n\nint main() {\n    int n; cin >> n;\n    printCountdown(n);\n    return 0;\n}`,
        hints: ['Print `n`, then call `printCountdown(n - 1)`.'],
        howToThink: ['If N is 5, I print 5, and then I tell my clone to handle the problem for 4. My clone prints 4, and tells their clone to handle 3...'],
        approach: 'Check base case. Print n. Recurse with n-1.',
        pseudocode: 'if n <= 0: return\nprint n\nprintCountdown(n - 1)',
        explanation: 'Every time a function calls itself, it gets added to the Call Stack. When it hits the base case, the stack unwinds.',
        solution: `#include <iostream>\nusing namespace std;\n\nvoid printCountdown(int n) {\n    if (n <= 0) return;\n    cout << n << " ";\n    printCountdown(n - 1);\n}\n\nint main() {\n    int n; cin >> n;\n    printCountdown(n);\n    return 0;\n}`,
        commonMistakes: ['Forgetting the base case, causing a Stack Overflow.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N) call stack', interviewRelevance: 'medium', tags: ['recursion']
    },
    {
        id: 'prob-17-02',
        levelId: 'level-17',
        title: 'Recursive Sum',
        type: 'coding',
        difficulty: 'easy',
        order: 2,
        description: `**Task:**\nWrite a recursive function \`int sum(int n)\` that returns the sum of all integers from 1 to \`N\`.\n\n*Example:* \`sum(5) = 5 + sum(4)\`.`,
        whyThisMatters: 'Teaches how to return values back up the recursive call stack.',
        concepts: ['recursive return'],
        prerequisites: ['recursion'],
        learningObjectives: ['Pass computed values up the call stack'],
        constraints: ['N <= 100'],
        examples: [{ input: '5', output: '15' }],
        testCases: [
            { id: 'tc1', input: '5', expectedOutput: '15', hidden: false },
            { id: 'tc2', input: '1', expectedOutput: '1', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nint recursiveSum(int n) {\n    if (n == 1) return 1;\n    \n    // Return N + the sum of everything smaller than N\n}\n\nint main() {\n    int n; cin >> n;\n    cout << recursiveSum(n);\n    return 0;\n}`,
        hints: ['`return n + recursiveSum(n - 1);`'],
        howToThink: ['The total sum for N is just N plus whatever the total sum was for N-1.'],
        approach: 'Base case n=1 returns 1. Otherwise return n + recurse(n-1).',
        pseudocode: 'if n == 1: return 1\nreturn n + sum(n-1)',
        explanation: 'The function pauses, waiting for `recursiveSum(n-1)` to finish, before it can do its own addition.',
        solution: `#include <iostream>\nusing namespace std;\n\nint recursiveSum(int n) {\n    if (n <= 1) return n;\n    return n + recursiveSum(n - 1);\n}\n\nint main() {\n    int n; cin >> n;\n    if (n<=0) cout << 0;\n    else cout << recursiveSum(n);\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(N) call stack', interviewRelevance: 'low', tags: ['recursion']
    }
];
