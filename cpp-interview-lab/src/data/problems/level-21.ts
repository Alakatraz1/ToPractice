import { Problem } from '../types';

export const level21Problems: Problem[] = [
    {
        id: 'prob-21-01',
        levelId: 'level-21',
        title: 'Maximum Depth of Binary Tree',
        type: 'coding',
        difficulty: 'medium',
        order: 1,
        description: `A Binary Tree is a structure where each node has up to two children (\`left\` and \`right\`).\n\n**Task:**\nYou are given the \`root\` of a binary tree. Write a recursive function to find its maximum depth (the number of nodes along the longest path from the root down to the farthest leaf node).\n\n*Note:* The tree is built for you. You just complete the recursive logic.`,
        whyThisMatters: 'Tree traversal using recursion is the basis of almost all tree interview questions.',
        concepts: ['trees', 'dfs', 'recursion'],
        prerequisites: ['recursion', 'structs'],
        learningObjectives: ['Traverse a binary tree using Depth First Search (DFS)'],
        constraints: [],
        examples: [],
        testCases: [
            { id: 'tc1', input: '3 9 20 null null 15 7', expectedOutput: '3', hidden: false }
        ],
        starterCode: `#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nint maxDepth(TreeNode* root) {\n    // Base case: if root is NULL, depth is 0\n    if (root == NULL) return 0;\n    \n    // Recursive step: 1 + max of left depth and right depth\n    // ...\n    return 1;\n}\n\n// Hidden code builds the tree from standard input and calls maxDepth(root).\n// For simplicity in this environment, assume we just pass you a valid tree.\nint main() {\n    TreeNode* root = new TreeNode(3);\n    root->left = new TreeNode(9);\n    root->right = new TreeNode(20);\n    root->right->left = new TreeNode(15);\n    root->right->right = new TreeNode(7);\n    cout << maxDepth(root);\n    return 0;\n}`,
        hints: ['Base case: `if (root == NULL) return 0;`', 'Recursive step: `return 1 + max(maxDepth(root->left), maxDepth(root->right));`'],
        howToThink: ['If I am an empty tree, my depth is 0.', 'If I am a node, my depth is 1 (myself) PLUS whichever is deeper between my left child and my right child.'],
        approach: 'DFS recursion. Return 1 + max(left_depth, right_depth).',
        pseudocode: 'if root == null: return 0\nreturn 1 + max(maxDepth(root.left), maxDepth(root.right))',
        explanation: 'The call stack naturally traverses all the way to the leaves and then bubbles the counts back up.',
        solution: `#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nint maxDepth(TreeNode* root) {\n    if (root == NULL) return 0;\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\n}\n\nint main() {\n    TreeNode* root = new TreeNode(3);\n    root->left = new TreeNode(9);\n    root->right = new TreeNode(20);\n    root->right->left = new TreeNode(15);\n    root->right->right = new TreeNode(7);\n    cout << maxDepth(root);\n    return 0;\n}`,
        commonMistakes: [],
        timeComplexity: 'O(N)', spaceComplexity: 'O(H) call stack, H is height', interviewRelevance: 'high', tags: ['trees', 'dfs']
    }
];
