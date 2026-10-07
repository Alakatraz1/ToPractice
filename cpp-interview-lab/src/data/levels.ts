import { Level, Problem } from './types';
import { level1Problems } from './problems/level-01';
import { level2Problems } from './problems/level-02';
import { level3Problems } from './problems/level-03';
import { level4Problems } from './problems/level-04';
import { level5Problems } from './problems/level-05';
import { level6Problems } from './problems/level-06';
import { level7Problems } from './problems/level-07';
import { level8Problems } from './problems/level-08';
import { level9Problems } from './problems/level-09';
import { level10Problems } from './problems/level-10';
import { level11Problems } from './problems/level-11';
import { level12Problems } from './problems/level-12';
import { level13Problems } from './problems/level-13';
import { level14Problems } from './problems/level-14';
import { level15Problems } from './problems/level-15';
import { level16Problems } from './problems/level-16';
import { level17Problems } from './problems/level-17';
import { level18Problems } from './problems/level-18';
import { level19Problems } from './problems/level-19';
import { level20Problems } from './problems/level-20';
import { level21Problems } from './problems/level-21';
import { level22Problems } from './problems/level-22';
import { level23Problems } from './problems/level-23';
import { level24Problems } from './problems/level-24';
import { level25Problems } from './problems/level-25';
import { level26Problems } from './problems/level-26';
import { level27Problems } from './problems/level-27';

export const levels: Level[] = [
    {
        id: 'level-01',
        number: 1,
        title: 'C++ Program Basics',
        description: 'Learn the fundamental structure of a C++ program and how to print output to the screen.',
        whatYouWillLearn: ['main() function', '#include <iostream>', 'std::cout', 'return 0', 'newlines'],
        whyThisMatters: 'Every C++ program starts here. Understanding how a program starts and how it outputs information is the foundation of all programming.',
        concepts: ['program structure', 'main', 'cout', 'comments', 'basic compilation'],
        prerequisites: [],
        problems: level1Problems.map(p => p.id)
    },
    {
        id: 'level-02',
        number: 2,
        title: 'Variables & Input/Output',
        description: 'Learn to store data in memory and read input from the user.',
        whatYouWillLearn: ['variables', 'int, double, char, bool', 'cin', 'arithmetic operators', 'integer division'],
        whyThisMatters: 'To solve problems, you need to store data and manipulate it. Variables are the boxes where your data lives.',
        concepts: ['variables', 'input', 'arithmetic', 'data types'],
        prerequisites: ['cout', 'program structure'],
        problems: level2Problems.map(p => p.id)
    },
    {
        id: 'level-03',
        number: 3,
        title: 'Conditions',
        description: 'Make your programs make decisions using if-else statements.',
        whatYouWillLearn: ['if, else if, else', 'relational operators (==, !=, <, >)', 'logical operators (&&, ||, !)', 'branching logic'],
        whyThisMatters: 'Real-world problems require different actions based on different inputs. Conditions are how programs "think" and branch.',
        concepts: ['conditions', 'boolean logic'],
        prerequisites: ['variables', 'input', 'arithmetic'],
        problems: level3Problems.map(p => p.id)
    },
    {
        id: 'level-04',
        number: 4,
        title: 'Loops',
        description: 'Repeat actions without writing the same code over and over.',
        whatYouWillLearn: ['for loops', 'while loops', 'counters', 'accumulators', 'repeated operations'],
        whyThisMatters: 'Loops are one of the most fundamental tools you will use in coding interviews to process sequences of data.',
        concepts: ['loops', 'iteration', 'accumulators'],
        prerequisites: ['variables', 'conditions'],
        problems: level4Problems.map(p => p.id)
    },
    {
        id: 'level-05',
        number: 5,
        title: 'Functions',
        description: 'Break your code down into reusable blocks.',
        whatYouWillLearn: ['function definition', 'parameters', 'return types', 'local scope', 'calling functions'],
        whyThisMatters: 'Interviews often ask you to implement a specific function rather than a full program. Functions make code modular and readable.',
        concepts: ['functions', 'scope', 'return values'],
        prerequisites: ['variables', 'conditions', 'loops'],
        problems: level5Problems.map(p => p.id)
    },
    {
        id: 'level-06',
        number: 6,
        title: 'Arrays',
        description: 'Store sequences of data of the same type.',
        whatYouWillLearn: ['declaring arrays', 'zero-based indexing', 'array traversal', 'modifying arrays', 'out-of-bounds errors'],
        whyThisMatters: 'Arrays are the most common data structure in technical interviews. Mastering array traversal is absolutely critical.',
        concepts: ['arrays', 'indexing', 'traversal'],
        prerequisites: ['loops', 'variables'],
        problems: level6Problems.map(p => p.id)
    },
    {
        id: 'level-07',
        number: 7,
        title: 'Strings',
        description: 'Work with text and sequences of characters.',
        whatYouWillLearn: ['std::string', 'string length', 'indexing characters', 'concatenation', 'character manipulation'],
        whyThisMatters: 'String manipulation questions are extremely common. They test your ability to handle edge cases and understand character encoding implicitly.',
        concepts: ['strings', 'characters'],
        prerequisites: ['arrays', 'loops'],
        problems: level7Problems.map(p => p.id)
    },
    {
        id: 'level-08',
        number: 8,
        title: 'Vectors',
        description: 'Use dynamically sized arrays provided by the C++ Standard Template Library (STL).',
        whatYouWillLearn: ['std::vector', 'push_back', 'pop_back', 'size', 'dynamic sizing'],
        whyThisMatters: 'Vectors are almost always used instead of raw arrays in modern C++ and competitive programming/interviews due to their flexibility.',
        concepts: ['vectors', 'dynamic arrays', 'stl'],
        prerequisites: ['arrays', 'loops'],
        problems: level8Problems.map(p => p.id)
    },
    { id: 'level-09', number: 9, title: 'Basic Problem Solving', description: 'Combine everything you\'ve learned so far.', whatYouWillLearn: ['pattern recognition', 'combining loops and conditions', 'algorithmic thinking'], whyThisMatters: 'Transitions you from knowing syntax to actively solving multi-step logic puzzles.', concepts: ['problem solving'], prerequisites: ['vectors', 'strings', 'functions'], problems: level9Problems.map(p => p.id) },
    { id: 'level-10', number: 10, title: 'Searching', description: 'Find elements efficiently.', whatYouWillLearn: ['linear search', 'binary search intuition'], whyThisMatters: 'Fundamental algorithmic skill.', concepts: ['searching'], prerequisites: ['arrays', 'loops'], problems: level10Problems.map(p => p.id) },
    { id: 'level-11', number: 11, title: 'Sorting', description: 'Order elements.', whatYouWillLearn: ['bubble sort', 'selection sort', 'std::sort'], whyThisMatters: 'Sorting makes many other problems much easier.', concepts: ['sorting'], prerequisites: ['arrays', 'loops'], problems: level11Problems.map(p => p.id) },
    { id: 'level-12', number: 12, title: 'Time & Space Complexity', description: 'Analyze algorithm efficiency.', whatYouWillLearn: ['Big O notation', 'O(1), O(n), O(n^2), O(log n)'], whyThisMatters: 'Interviews require you to know if your solution is optimal.', concepts: ['complexity'], prerequisites: ['loops', 'problem solving'], problems: level12Problems.map(p => p.id) },
    { id: 'level-13', number: 13, title: 'STL Fundamentals', description: 'Standard Template Library deep dive.', whatYouWillLearn: ['pair', 'iterators', 'auto', 'range-based for'], whyThisMatters: 'Saves time during interviews.', concepts: ['stl'], prerequisites: ['vectors'], problems: level13Problems.map(p => p.id) },
    { id: 'level-14', number: 14, title: 'Hash Maps & Sets', description: 'O(1) lookups and unique elements.', whatYouWillLearn: ['unordered_map', 'unordered_set', 'frequency counting'], whyThisMatters: 'Hash maps solve ~30% of all easy/medium interview questions.', concepts: ['hashing'], prerequisites: ['stl'], problems: level14Problems.map(p => p.id) },
    { id: 'level-15', number: 15, title: 'Stack & Queue', description: 'LIFO and FIFO data structures.', whatYouWillLearn: ['std::stack', 'std::queue'], whyThisMatters: 'Used in parsing, breadth-first search, and tracking state.', concepts: ['stack', 'queue'], prerequisites: ['stl'], problems: level15Problems.map(p => p.id) },
    { id: 'level-16', number: 16, title: 'Linked Lists', description: 'Node-based sequential structures.', whatYouWillLearn: ['pointers', 'nodes', 'traversal', 'insertion/deletion'], whyThisMatters: 'A classic interview topic testing pointer manipulation.', concepts: ['linked lists', 'pointers'], prerequisites: ['functions', 'structs'], problems: level16Problems.map(p => p.id) },
    { id: 'level-17', number: 17, title: 'Recursion', description: 'Functions calling themselves.', whatYouWillLearn: ['base cases', 'recursive step', 'call stack'], whyThisMatters: 'Essential for trees, graphs, and dynamic programming.', concepts: ['recursion'], prerequisites: ['functions'], problems: level17Problems.map(p => p.id) },
    { id: 'level-18', number: 18, title: 'Two Pointers', description: 'Algorithmic pattern for linear structures.', whatYouWillLearn: ['opposite ends', 'slow and fast pointers'], whyThisMatters: 'Optimizes O(n^2) nested loops to O(n).', concepts: ['two pointers'], prerequisites: ['arrays', 'while loops'], problems: level18Problems.map(p => p.id) },
    { id: 'level-19', number: 19, title: 'Sliding Window', description: 'Algorithmic pattern for subarrays.', whatYouWillLearn: ['fixed window', 'variable window'], whyThisMatters: 'Standard technique for substring/subarray optimization.', concepts: ['sliding window'], prerequisites: ['arrays', 'two pointers'], problems: level19Problems.map(p => p.id) },
    { id: 'level-20', number: 20, title: 'Binary Search', description: 'O(log n) searching.', whatYouWillLearn: ['binary search pattern', 'finding bounds', 'search space reduction'], whyThisMatters: 'Highly tested interview algorithm.', concepts: ['binary search'], prerequisites: ['arrays', 'conditions'], problems: level20Problems.map(p => p.id) },
    { id: 'level-21', number: 21, title: 'Trees', description: 'Hierarchical data structures.', whatYouWillLearn: ['binary trees', 'BST', 'DFS', 'BFS'], whyThisMatters: 'Extremely common in technical interviews.', concepts: ['trees', 'dfs', 'bfs'], prerequisites: ['recursion', 'linked lists', 'queue'], problems: level21Problems.map(p => p.id) },
    { id: 'level-22', number: 22, title: 'Graphs', description: 'Nodes and edges.', whatYouWillLearn: ['adjacency list', 'graph traversal'], whyThisMatters: 'Advanced but standard for top-tier companies.', concepts: ['graphs'], prerequisites: ['trees', 'vectors', 'maps'], problems: level22Problems.map(p => p.id) },
    { id: 'level-23', number: 23, title: 'Greedy Algorithms', description: 'Local optimum choices.', whatYouWillLearn: ['greedy choice property'], whyThisMatters: 'Useful for optimization problems.', concepts: ['greedy'], prerequisites: ['sorting'], problems: level23Problems.map(p => p.id) },
    { id: 'level-24', number: 24, title: 'Dynamic Programming Fundamentals', description: 'Caching recursive results.', whatYouWillLearn: ['memoization', 'tabulation'], whyThisMatters: 'Considered the hardest standard interview topic.', concepts: ['dynamic programming'], prerequisites: ['recursion', 'arrays'], problems: level24Problems.map(p => p.id) },
    { id: 'level-25', number: 25, title: 'Mixed Interview Problems', description: 'Identify the pattern yourself.', whatYouWillLearn: ['pattern recognition'], whyThisMatters: 'In real interviews, the problem doesn\'t tell you which pattern to use.', concepts: ['mixed'], prerequisites: ['all fundamentals'], problems: level25Problems.map(p => p.id) },
    { id: 'level-26', number: 26, title: 'IBM-Style Practice', description: 'Specific common problem flavors.', whatYouWillLearn: ['string parsing', 'implementation heavy problems', 'math edge cases'], whyThisMatters: 'Tailor your practice to the target company.', concepts: ['ibm patterns'], prerequisites: ['mixed'], problems: level26Problems.map(p => p.id) },
    { id: 'level-27', number: 27, title: 'Mock Interviews', description: 'Timed simulations.', whatYouWillLearn: ['time management', 'stress coding'], whyThisMatters: 'Practice under pressure.', concepts: ['mock interview'], prerequisites: ['all'], problems: level27Problems.map(p => p.id) },
];

export const allProblems: Problem[] = [
    ...level1Problems,
    ...level2Problems,
    ...level3Problems,
    ...level4Problems,
    ...level5Problems,
    ...level6Problems,
    ...level7Problems,
    ...level8Problems,
    ...level9Problems,
    ...level10Problems,
    ...level11Problems,
    ...level12Problems,
    ...level13Problems,
    ...level14Problems,
    ...level15Problems,
    ...level16Problems,
    ...level17Problems,
    ...level18Problems,
    ...level19Problems,
    ...level20Problems,
    ...level21Problems,
    ...level22Problems,
    ...level23Problems,
    ...level24Problems,
    ...level25Problems,
    ...level26Problems,
    ...level27Problems,
];

export function getProblem(id: string) {
    return allProblems.find(p => p.id === id);
}

export function getLevel(id: string) {
    return levels.find(l => l.id === id);
}

export function getLevelForProblem(problemId: string) {
    const problem = getProblem(problemId);
    if (!problem) return null;
    return getLevel(problem.levelId);
}
