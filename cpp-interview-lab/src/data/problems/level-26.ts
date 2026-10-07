import { Problem } from '../types';

export const level26Problems: Problem[] = [
    {
        id: 'prob-26-01',
        levelId: 'level-26',
        title: 'IBM Prep: FizzBuzz',
        type: 'coding',
        difficulty: 'easy',
        order: 1,
        description: `Print numbers 1 to N. If divisible by 3, print Fizz. By 5, print Buzz. By both, print FizzBuzz. Otherwise print the number. Separated by newlines.`,
        whyThisMatters: 'Standard warmup.',
        concepts: ['modulo'],
        prerequisites: ['loops'],
        learningObjectives: ['Control flow'],
        constraints: ['N <= 100'],
        examples: [{ input: '15', output: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' }],
        testCases: [
            { id: 'tc1', input: '15', expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    // implement logic\n    return 0;\n}`,
        hints: ['Check 15 first.'],
        howToThink: ['Check most restrictive condition first.'],
        approach: 'Loop and conditions',
        pseudocode: 'for i in 1 to N: if i%15==0 print FizzBuzz...',
        explanation: 'O(N) time.',
        solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n; if(!(cin >> n)) return 0;\n    for(int i=1; i<=n; i++) {\n        if (i % 15 == 0) cout << "FizzBuzz\\n";\n        else if (i % 3 == 0) cout << "Fizz\\n";\n        else if (i % 5 == 0) cout << "Buzz\\n";\n        else cout << i << "\\n";\n    }\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['math']
    }
];
