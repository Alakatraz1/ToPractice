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

import {
    pyLevel1Problems,
    pyLevel2Problems,
    pyLevel3Problems,
    pyLevel4Problems,
    pyLevel5Problems,
    pyLevel6Problems,
    pyLevel7Problems,
    pyLevel8Problems,
    pyLevel9Problems,
    pyLevel10Problems,
    pyLevel11Problems,
    pyLevel12Problems,
    pyLevel13Problems,
    pyLevel14Problems,
    pyLevel15Problems,
    pyLevel16Problems,
    pyLevel17Problems,
    pyLevel18Problems,
    pyLevel19Problems,
    pyLevel20Problems,
    pyLevel21Problems,
    pyLevel22Problems,
    pyLevel23Problems,
    pyLevel24Problems,
    pyLevel25Problems,
    pyLevel26Problems,
    pyLevel27Problems,
    pythonProblems
} from './pythonProblems';

export const cppLevels: Level[] = [
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

export const pythonLevels: Level[] = [
    {
        id: 'level-01',
        number: 1,
        title: 'Python Basics & Standard Output',
        description: 'Learn Python syntax, printing to standard output with print(), arguments (sep, end), and formatting.',
        whatYouWillLearn: ['print() function', 'sep and end parameters', 'Python indentation & execution model', 'comments and clean syntax'],
        whyThisMatters: 'Python\'s expressive syntax allows you to quickly output results and prototype solutions during technical interviews.',
        concepts: ['python basics', 'print', 'formatting', 'indentation', 'syntax'],
        prerequisites: [],
        problems: pyLevel1Problems.map(p => p.id)
    },
    {
        id: 'level-02',
        number: 2,
        title: 'Variables, Types & User Input',
        description: 'Store dynamic data types, read user input with input(), and perform type conversions and arithmetic.',
        whatYouWillLearn: ['input() and type casting', 'int, float, str, bool', 'integer division (//) and modulo (%)', 'variable assignment'],
        whyThisMatters: 'Every algorithm manipulates state. Mastering type casting and operations prevents silent type bugs.',
        concepts: ['variables', 'input', 'types', 'type casting', 'arithmetic'],
        prerequisites: ['python basics', 'print'],
        problems: pyLevel2Problems.map(p => p.id)
    },
    {
        id: 'level-03',
        number: 3,
        title: 'Conditionals & Boolean Logic',
        description: 'Make decisions using if, elif, else statements and Python\'s natural language logical operators.',
        whatYouWillLearn: ['if / elif / else branching', 'and, or, not operators', 'truthiness and falsy values', 'chained comparisons (10 <= x <= 20)'],
        whyThisMatters: 'Conditions allow programs to validate edge cases and choose optimal algorithmic paths.',
        concepts: ['conditionals', 'if-else', 'boolean logic', 'truthiness'],
        prerequisites: ['variables', 'input'],
        problems: pyLevel3Problems.map(p => p.id)
    },
    {
        id: 'level-04',
        number: 4,
        title: 'Loops & Iterations',
        description: 'Repeat operations using for loops with range(), while loops, break, continue, and loop accumulators.',
        whatYouWillLearn: ['for item in range(start, stop, step)', 'while loops', 'break and continue', 'accumulators and counters'],
        whyThisMatters: 'Loops are the cornerstone of iterating over arrays, strings, and searching sequences in O(N).',
        concepts: ['loops', 'range', 'while', 'iteration', 'accumulators'],
        prerequisites: ['conditionals', 'variables'],
        problems: pyLevel4Problems.map(p => p.id)
    },
    {
        id: 'level-05',
        number: 5,
        title: 'Functions & Scope',
        description: 'Write reusable functions with def, default arguments, return values, tuple unpacking, and local scope.',
        whatYouWillLearn: ['def keyword', 'positional and keyword arguments', 'returning values and multiple returns (tuples)', 'local vs global scope'],
        whyThisMatters: 'Technical interview platforms evaluate your solution by invoking a function with test cases.',
        concepts: ['functions', 'def', 'scope', 'return values', 'parameters'],
        prerequisites: ['loops', 'conditionals'],
        problems: pyLevel5Problems.map(p => p.id)
    },
    {
        id: 'level-06',
        number: 6,
        title: 'Lists & Array Operations',
        description: 'Master Python lists, zero-based indexing, negative indices, slicing, methods, and list comprehensions.',
        whatYouWillLearn: ['list indexing and negative indexing', 'slicing [start:end:step]', 'append, pop, insert, extend', 'list comprehensions'],
        whyThisMatters: 'Lists are Python\'s workhorse dynamic array, central to array problems, matrices, and stacks.',
        concepts: ['lists', 'slicing', 'list comprehensions', 'indexing'],
        prerequisites: ['loops', 'functions'],
        problems: pyLevel6Problems.map(p => p.id)
    },
    {
        id: 'level-07',
        number: 7,
        title: 'Strings & String Manipulation',
        description: 'Work with strings, character parsing, string slicing, methods, and formatting with f-strings.',
        whatYouWillLearn: ['string slicing and reversing [::-1]', '.split(), .join(), .strip()', 'f-strings formatting', 'ord() and chr() conversions'],
        whyThisMatters: 'String manipulation is heavily tested in initial screening rounds across all tech companies.',
        concepts: ['strings', 'string slicing', 'string methods', 'f-strings'],
        prerequisites: ['lists', 'loops'],
        problems: pyLevel7Problems.map(p => p.id)
    },
    {
        id: 'level-08',
        number: 8,
        title: 'Tuples, Sets & Dictionary Basics',
        description: 'Learn immutable tuples, unique sets with mathematical set operations, and key-value mapping dictionaries.',
        whatYouWillLearn: ['tuple immutability and unpacking', 'set creation and deduplication', 'set operations (union, intersection, difference)', 'dict key-value basics'],
        whyThisMatters: 'Sets provide O(1) membership checks and deduplication, cutting runtime down from O(N^2) to O(N).',
        concepts: ['tuples', 'sets', 'dictionaries', 'hash collections'],
        prerequisites: ['lists', 'functions'],
        problems: pyLevel8Problems.map(p => p.id)
    },
    {
        id: 'level-09',
        number: 9,
        title: 'Algorithmic Problem Solving',
        description: 'Synthesize loops, conditionals, strings, and lists to decompose and solve multi-step interview puzzles.',
        whatYouWillLearn: ['problem decomposition', 'tracking multiple pointers/indices', 'edge case identification', 'counting and filtering algorithms'],
        whyThisMatters: 'Transitions you from learning language syntax to formulating algorithmic solutions.',
        concepts: ['problem solving', 'algorithmic thinking', 'math logic'],
        prerequisites: ['tuples', 'sets', 'strings'],
        problems: pyLevel9Problems.map(p => p.id)
    },
    {
        id: 'level-10',
        number: 10,
        title: 'Linear & Binary Search in Python',
        description: 'Search elements efficiently using linear search and the Python bisect module.',
        whatYouWillLearn: ['linear search with in and index()', 'binary search pattern', 'bisect.bisect_left and bisect_right', 'search space reduction'],
        whyThisMatters: 'Binary search is one of the top five most tested algorithmic paradigms in FAANG interviews.',
        concepts: ['searching', 'binary search', 'bisect', 'logarithmic time'],
        prerequisites: ['lists', 'loops'],
        problems: pyLevel10Problems.map(p => p.id)
    },
    {
        id: 'level-11',
        number: 11,
        title: 'Sorting & Custom Keys in Python',
        description: 'Master Timsort, sorted(), in-place .sort(), lambda keys, and multi-criteria sorting.',
        whatYouWillLearn: ['sorted() vs list.sort()', 'custom keys using lambda (key=lambda x: ...)', 'multi-level sorting with tuples', 'reverse sorting'],
        whyThisMatters: 'Sorting simplifies intervals, anagram grouping, and greedy decision making.',
        concepts: ['sorting', 'timsort', 'lambda keys', 'custom sorting'],
        prerequisites: ['lists', 'functions'],
        problems: pyLevel11Problems.map(p => p.id)
    },
    {
        id: 'level-12',
        number: 12,
        title: 'Time & Space Complexity in Python',
        description: 'Analyze Big O runtime and memory overhead of common Python operations and data structures.',
        whatYouWillLearn: ['Big O notation (O(1), O(N), O(N log N), O(N^2))', 'cost of Python list vs set vs dict operations', 'space complexity and auxiliary memory', 'optimizing nested loops'],
        whyThisMatters: 'Interviewers evaluate not just working code, but the optimal asymptotic complexity.',
        concepts: ['complexity', 'big o', 'runtime', 'space complexity'],
        prerequisites: ['loops', 'lists', 'sorting'],
        problems: pyLevel12Problems.map(p => p.id)
    },
    {
        id: 'level-13',
        number: 13,
        title: 'Python Standard Library Mastery',
        description: 'Harness high-performance tools in collections (Counter, defaultdict, deque), math, and itertools.',
        whatYouWillLearn: ['collections.Counter', 'collections.defaultdict', 'collections.deque', 'heapq priority queue fundamentals'],
        whyThisMatters: 'Writing idiomatic Python with standard library tools saves critical time during timed coding tests.',
        concepts: ['standard library', 'collections', 'counter', 'defaultdict', 'deque'],
        prerequisites: ['dictionaries', 'sets'],
        problems: pyLevel13Problems.map(p => p.id)
    },
    {
        id: 'level-14',
        number: 14,
        title: 'Hash Maps & Sets (Deep Dive)',
        description: 'Solve interview problems with dictionary frequencies, two-sum complements, and fast hash lookups.',
        whatYouWillLearn: ['hash map complements pattern', 'grouping by anagram keys', 'frequency difference checking', 'O(1) average lookup guarantees'],
        whyThisMatters: 'Hash maps solve around 40% of all technical interview questions asked at top companies.',
        concepts: ['hash maps', 'frequency counting', 'complements', 'anagrams'],
        prerequisites: ['collections', 'dictionaries'],
        problems: pyLevel14Problems.map(p => p.id)
    },
    {
        id: 'level-15',
        number: 15,
        title: 'Stacks & Queues in Python',
        description: 'Implement LIFO stacks using lists and FIFO queues using collections.deque, plus monotonic stack basics.',
        whatYouWillLearn: ['list as stack (append and pop)', 'collections.deque as queue (popleft)', 'balanced parentheses parsing', 'monotonic stacks'],
        whyThisMatters: 'Stacks and queues power parsing, BFS traversals, and monotonic next-greater-element challenges.',
        concepts: ['stack', 'queue', 'deque', 'monotonic stack', 'lifo', 'fifo'],
        prerequisites: ['lists', 'collections'],
        problems: pyLevel15Problems.map(p => p.id)
    },
    {
        id: 'level-16',
        number: 16,
        title: 'Linked Lists in Python',
        description: 'Build and manipulate singly linked lists, traverse nodes, reverse lists, and detect cycles.',
        whatYouWillLearn: ['ListNode class definition', 'traversing and modifying next pointers', 'reversing a linked list iteratively', 'Floyd\'s Tortoise and Hare cycle detection'],
        whyThisMatters: 'A classic computer science interview subject that tests reference handling and pointer discipline.',
        concepts: ['linked lists', 'nodes', 'pointers', 'fast and slow pointers', 'cycles'],
        prerequisites: ['functions', 'while loops'],
        problems: pyLevel16Problems.map(p => p.id)
    },
    {
        id: 'level-17',
        number: 17,
        title: 'Recursion & Backtracking',
        description: 'Solve combinatorial problems using recursion, call stack management, and backtracking.',
        whatYouWillLearn: ['base cases and recursive step', 'call stack and maximum recursion depth', 'backtracking template (choose, explore, unchoose)', 'generating subsets and permutations'],
        whyThisMatters: 'Crucial for navigating trees, graphs, and exhaustive search problems in interviews.',
        concepts: ['recursion', 'backtracking', 'call stack', 'subsets', 'permutations'],
        prerequisites: ['functions', 'lists'],
        problems: pyLevel17Problems.map(p => p.id)
    },
    {
        id: 'level-18',
        number: 18,
        title: 'Two Pointers Pattern',
        description: 'Optimize linear traversals from O(N^2) to O(N) using opposite ends and fast/slow pointer pairs.',
        whatYouWillLearn: ['two pointers moving toward center', 'fast and slow pointer techniques', '3Sum reduction to 2Sum', 'trapping water & container boundaries'],
        whyThisMatters: 'One of the highest-yield interview patterns for array and string challenges.',
        concepts: ['two pointers', 'opposite ends', 'linear optimization', '3sum'],
        prerequisites: ['lists', 'while loops'],
        problems: pyLevel18Problems.map(p => p.id)
    },
    {
        id: 'level-19',
        number: 19,
        title: 'Sliding Window Pattern',
        description: 'Track contiguous subarrays and substrings efficiently using expanding and shrinking window bounds.',
        whatYouWillLearn: ['fixed-size sliding window', 'variable-size window with hash maps', 'longest substring without repeating characters', 'minimum window bounds'],
        whyThisMatters: 'Standard technique for substring optimization and stream processing in tech interviews.',
        concepts: ['sliding window', 'contiguous subarrays', 'substrings', 'window bounds'],
        prerequisites: ['lists', 'two pointers', 'hash maps'],
        problems: pyLevel19Problems.map(p => p.id)
    },
    {
        id: 'level-20',
        number: 20,
        title: 'Binary Search Mastery',
        description: 'Apply binary search beyond simple arrays: search in rotated arrays, 2D matrices, and answer spaces.',
        whatYouWillLearn: ['binary search loop invariants', 'rotated sorted array search', 'search in 2D sorted matrices', 'binary search on predicate functions'],
        whyThisMatters: 'Advanced binary search separates junior developers from senior interview candidates.',
        concepts: ['binary search', 'search space reduction', 'rotated array', 'logarithmic search'],
        prerequisites: ['searching', 'lists'],
        problems: pyLevel20Problems.map(p => p.id)
    },
    {
        id: 'level-21',
        number: 21,
        title: 'Trees & Binary Search Trees',
        description: 'Construct, traverse, and evaluate binary trees and BSTs using recursive DFS and queue-based BFS.',
        whatYouWillLearn: ['TreeNode structure', 'inorder, preorder, and postorder DFS', 'level-order BFS using collections.deque', 'BST properties and lowest common ancestor'],
        whyThisMatters: 'Binary tree questions appear in almost every Meta, Amazon, and Google interview loop.',
        concepts: ['trees', 'binary tree', 'bst', 'dfs', 'bfs', 'level order'],
        prerequisites: ['recursion', 'deque', 'linked lists'],
        problems: pyLevel21Problems.map(p => p.id)
    },
    {
        id: 'level-22',
        number: 22,
        title: 'Graph Algorithms (BFS & DFS)',
        description: 'Represent graphs with adjacency dicts, find shortest paths with BFS, detect cycles with DFS, and topological sort.',
        whatYouWillLearn: ['adjacency list representation with defaultdict', 'BFS shortest path in unweighted graphs', 'DFS cycle detection with coloring', 'Kahn\'s topological sort algorithm'],
        whyThisMatters: 'Standard interview topic for top tech companies testing dependencies, networks, and paths.',
        concepts: ['graphs', 'bfs', 'dfs', 'topological sort', 'shortest path', 'cycles'],
        prerequisites: ['trees', 'deque', 'hash maps'],
        problems: pyLevel22Problems.map(p => p.id)
    },
    {
        id: 'level-23',
        number: 23,
        title: 'Greedy Algorithms',
        description: 'Prove and apply greedy choice properties to achieve global optimal solutions step-by-step.',
        whatYouWillLearn: ['greedy choice property and exchange arguments', 'interval scheduling and activity selection', 'jump game greedy reach', 'gas station circuit simulation'],
        whyThisMatters: 'Greedy algorithms yield optimal O(N) or O(N log N) solutions without expensive dynamic programming.',
        concepts: ['greedy', 'interval scheduling', 'jump game', 'optimization'],
        prerequisites: ['sorting', 'lists'],
        problems: pyLevel23Problems.map(p => p.id)
    },
    {
        id: 'level-24',
        number: 24,
        title: 'Dynamic Programming & Memoization',
        description: 'Solve complex optimization problems by breaking them into overlapping subproblems with memoization & tabulation.',
        whatYouWillLearn: ['memoization using dictionaries or @lru_cache', '1D DP (Climbing Stairs, House Robber)', '2D DP (LCS, Edit Distance, Knapsack)', 'space optimization to O(1)'],
        whyThisMatters: 'Widely considered the ultimate test of algorithmic proficiency in coding interviews.',
        concepts: ['dynamic programming', 'memoization', 'tabulation', 'optimal substructure'],
        prerequisites: ['recursion', 'lists'],
        problems: pyLevel24Problems.map(p => p.id)
    },
    {
        id: 'level-25',
        number: 25,
        title: 'Comprehensive Interview Challenges',
        description: 'Multi-faceted interview challenges combining multiple data structures and patterns simultaneously.',
        whatYouWillLearn: ['LRU cache with OrderedDict', 'trapping rain water', 'monotonic stacks', 'combining hashing and sorting'],
        whyThisMatters: 'Real-world interview questions rarely stick to a single pattern; they test architectural combination.',
        concepts: ['mixed patterns', 'lru cache', 'trapping water', 'comprehensive algorithms'],
        prerequisites: ['all fundamentals'],
        problems: pyLevel25Problems.map(p => p.id)
    },
    {
        id: 'level-26',
        number: 26,
        title: 'Company Assessment Tracks',
        description: 'Real-world technical assessments modeled after Google, Microsoft, Meta, Apple, Amazon, and IBM hiring loops.',
        whatYouWillLearn: ['calculator expression evaluation', 'matrix manipulation in place', 'log file sorting', 'string decoders and rotated arrays'],
        whyThisMatters: 'Familiarizes you with the exact format and quirks of major company assessment platforms.',
        concepts: ['company tracks', 'faang practice', 'ibm practice', 'assessment'],
        prerequisites: ['all fundamentals'],
        problems: pyLevel26Problems.map(p => p.id)
    },
    {
        id: 'level-27',
        number: 27,
        title: 'Capstone Mock Technical Interviews',
        description: 'Timed capstone challenges simulating live virtual on-site coding rounds with senior interviewers.',
        whatYouWillLearn: ['system design simulations (rate limiter, path simplifier)', 'monotonic sliding window maximum', 'alien dictionary topological ordering', 'clean production-grade Python design'],
        whyThisMatters: 'Gives you the polish and stress-tested confidence to pass real on-site interviews.',
        concepts: ['mock interviews', 'capstone', 'production python', 'timed coding'],
        prerequisites: ['all levels'],
        problems: pyLevel27Problems.map(p => p.id)
    },
];

// Alias for backwards compatibility
export const levels: Level[] = cppLevels;

export const cppProblems: Problem[] = [
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

export const allProblems: Problem[] = [
    ...cppProblems,
    ...pythonProblems,
];

export function getLevels(language?: 'cpp' | 'python'): Level[] {
    return language === 'python' ? pythonLevels : cppLevels;
}

export function getAllProblems(language?: 'cpp' | 'python'): Problem[] {
    return language === 'python' ? pythonProblems : cppProblems;
}

export function getProblem(id: string): Problem | undefined {
    return allProblems.find(p => p.id === id);
}

export function getLevel(id: string, language?: 'cpp' | 'python'): Level | undefined {
    const primaryLevels = language === 'python' ? pythonLevels : cppLevels;
    const found = primaryLevels.find(l => l.id === id);
    if (found) return found;
    return (language === 'python' ? cppLevels : pythonLevels).find(l => l.id === id);
}

export function getLevelForProblem(problemId: string): Level | null {
    const isPy = problemId.startsWith('py-');
    const targetLevels = isPy ? pythonLevels : cppLevels;
    const found = targetLevels.find(l => l.problems.includes(problemId));
    if (found) return found;
    // Fallback to checking the other set
    const fallbackLevels = isPy ? cppLevels : pythonLevels;
    return fallbackLevels.find(l => l.problems.includes(problemId)) || null;
}

export interface NavigationInfo {
    prevProblem: Problem | null;
    nextProblem: Problem | null;
    currentLevel: Level | null;
    currentIndexInLevel: number;
    totalInLevel: number;
    isLastInLevel: boolean;
    isFirstInLevel: boolean;
    nextLevel: Level | null;
    nextLevelFirstProblem: Problem | null;
}

export function getNavigationInfo(problemId: string, currentLanguage?: 'cpp' | 'python'): NavigationInfo {
    const isPy = problemId.startsWith('py-') || currentLanguage === 'python';
    const activeLevels = isPy ? pythonLevels : cppLevels;
    
    let currentLevelIndex = activeLevels.findIndex(l => l.problems.includes(problemId));
    if (currentLevelIndex === -1) {
        // Try fallback
        const fallbackLevels = isPy ? cppLevels : pythonLevels;
        currentLevelIndex = fallbackLevels.findIndex(l => l.problems.includes(problemId));
        if (currentLevelIndex === -1) {
            return {
                prevProblem: null,
                nextProblem: null,
                currentLevel: null,
                currentIndexInLevel: 0,
                totalInLevel: 0,
                isLastInLevel: false,
                isFirstInLevel: false,
                nextLevel: null,
                nextLevelFirstProblem: null,
            };
        }
    }
    
    const currentLevel = activeLevels[currentLevelIndex] || (isPy ? cppLevels : pythonLevels)[currentLevelIndex];
    const currentIndexInLevel = currentLevel.problems.indexOf(problemId);
    const totalInLevel = currentLevel.problems.length;
    const isFirstInLevel = currentIndexInLevel === 0;
    const isLastInLevel = currentIndexInLevel === totalInLevel - 1;

    let prevProblem: Problem | null = null;
    if (currentIndexInLevel > 0) {
        prevProblem = getProblem(currentLevel.problems[currentIndexInLevel - 1]) || null;
    } else if (currentLevelIndex > 0) {
        const prevLevel = activeLevels[currentLevelIndex - 1];
        if (prevLevel && prevLevel.problems.length > 0) {
            prevProblem = getProblem(prevLevel.problems[prevLevel.problems.length - 1]) || null;
        }
    }

    let nextProblem: Problem | null = null;
    let nextLevel: Level | null = null;
    let nextLevelFirstProblem: Problem | null = null;

    if (currentLevelIndex < activeLevels.length - 1) {
        nextLevel = activeLevels[currentLevelIndex + 1];
        if (nextLevel && nextLevel.problems.length > 0) {
            nextLevelFirstProblem = getProblem(nextLevel.problems[0]) || null;
        }
    }

    if (currentIndexInLevel < totalInLevel - 1) {
        nextProblem = getProblem(currentLevel.problems[currentIndexInLevel + 1]) || null;
    } else {
        // At end of this section, nextProblem points to first question of next level
        nextProblem = nextLevelFirstProblem;
    }

    return {
        prevProblem,
        nextProblem,
        currentLevel,
        currentIndexInLevel,
        totalInLevel,
        isLastInLevel,
        isFirstInLevel,
        nextLevel,
        nextLevelFirstProblem,
    };
}
