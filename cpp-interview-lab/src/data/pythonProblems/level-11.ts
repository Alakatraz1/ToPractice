import { Problem } from '../types';

export const pyLevel11Problems: Problem[] = [
    {
        "id": "py-prob-11-01",
        "levelId": "py-level-11",
        "title": "Sort Integers Ascending & Descending",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Given a list of integers, print the sorted list in ascending order on the first line, and descending order (`reverse=True`) on the second line.",
        "whyThisMatters": "Python's `sorted()` provides stable O(N log N) sorting using Timsort.",
        "concepts": [
            "sorted",
            "reverse parameter",
            "timsort"
        ],
        "prerequisites": [
            "sorting"
        ],
        "learningObjectives": [
            "Use sorted() and reverse=True"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "5 2 9 1 5 6",
                "output": "1 2 5 5 6 9\n9 6 5 5 2 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5 2 9 1 5 6",
                "expectedOutput": "1 2 5 5 6 9\n9 6 5 5 2 1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 20",
                "expectedOutput": "10 20\n20 10",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print ascending and descending\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(*sorted(nums))\nprint(*sorted(nums, reverse=True))"
        ],
        "howToThink": [
            "Apply sorted() twice, once with reverse=True."
        ],
        "approach": "Use sorted(nums) and sorted(nums, reverse=True).",
        "pseudocode": "print(*sorted(nums))\nprint(*sorted(nums, reverse=True))",
        "explanation": "Built-in Timsort adapts to existing order in O(N log N).",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*sorted(nums))\n        print(*sorted(nums, reverse=True))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Modifying in-place with .sort() which returns None"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "low",
        "tags": [
            "sorting"
        ]
    },
    {
        "id": "py-prob-11-02",
        "levelId": "py-level-11",
        "title": "Sort by Absolute Value",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "Given a list of integers containing positive and negative values:\nSort the integers by their absolute value in ascending order using `key=abs`.\n(Preserve relative order for equal absolute values due to Timsort's stability).\nPrint the sorted integers space-separated.",
        "whyThisMatters": "Demonstrates key-functions: `key=abs` passes each element through a transformation before comparing.",
        "concepts": [
            "key parameter",
            "abs",
            "stable sorting"
        ],
        "prerequisites": [
            "sorting"
        ],
        "learningObjectives": [
            "Use key parameter with built-in functions like abs"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "-5 2 -1 3 -2",
                "output": "-1 2 -2 3 -5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "-5 2 -1 3 -2",
                "expectedOutput": "-1 2 -2 3 -5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-10 10",
                "expectedOutput": "-10 10",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Sort by abs\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(nums, key=abs)"
        ],
        "howToThink": [
            "Sort by absolute magnitude."
        ],
        "approach": "Use sorted(nums, key=abs).",
        "pseudocode": "print(*sorted(nums, key=abs))",
        "explanation": "Timsort is stable, maintaining input order between 2 and -2 when both have abs value 2.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*sorted(nums, key=abs))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Transforming numbers to abs permanently instead of using key=abs"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "sorting",
            "stability"
        ]
    },
    {
        "id": "py-prob-11-03",
        "levelId": "py-level-11",
        "title": "Sort Strings by Length",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "Given a list of words, sort them by length ascending.\nFor words of identical length, sort them alphabetically ascending.\nPrint the sorted words space-separated.",
        "whyThisMatters": "Multi-criterion sorting using tuple keys `key=lambda w: (len(w), w)` is standard in Python.",
        "concepts": [
            "multi-criterion sort",
            "tuple keys",
            "lambdas"
        ],
        "prerequisites": [
            "sorting",
            "lambdas"
        ],
        "learningObjectives": [
            "Sort by composite tuple keys"
        ],
        "constraints": [
            "List of strings"
        ],
        "examples": [
            {
                "input": "banana apple pie a cat",
                "output": "a cat pie apple banana"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "banana apple pie a cat",
                "expectedOutput": "a cat pie apple banana",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "beta alpha",
                "expectedOutput": "beta alpha",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Sort by (len, word)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(words, key=lambda w: (len(w), w))"
        ],
        "howToThink": [
            "Use key lambda returning (length, word)."
        ],
        "approach": "Sort with composite key (len(w), w).",
        "pseudocode": "print(*sorted(words, key=lambda w: (len(w), w)))",
        "explanation": "Python compares tuples element-by-element, breaking ties on the second element.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if words:\n        print(*sorted(words, key=lambda w: (len(w), w)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting only by length without alphabetical tie-breaker"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sorting",
            "lambdas"
        ]
    },
    {
        "id": "py-prob-11-04",
        "levelId": "py-level-11",
        "title": "Sort Pairs by Second Element",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "You are given pairs of `(name, score)` from standard input: `Alice 90 Bob 75 Charlie 85`.\nSort the pairs in ascending order of score.\nPrint each pair as `<name> <score>` on separate lines.",
        "whyThisMatters": "Interval scheduling, edge weights in graphs (Kruskal's), and ranking use pair sorting.",
        "concepts": [
            "tuple sorting",
            "lambda key",
            "pairs"
        ],
        "prerequisites": [
            "sorting"
        ],
        "learningObjectives": [
            "Sort list of tuples by specific index"
        ],
        "constraints": [
            "Integer scores"
        ],
        "examples": [
            {
                "input": "Alice 90 Bob 75 Charlie 85",
                "output": "Bob 75\nCharlie 85\nAlice 90"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Alice 90 Bob 75 Charlie 85",
                "expectedOutput": "Bob 75\nCharlie 85\nAlice 90",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "A 10 B 5",
                "expectedOutput": "B 5\nA 10",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Construct pairs and sort by score\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "pairs.sort(key=lambda x: x[1])"
        ],
        "howToThink": [
            "Group tokens into (name, int(score)), sort with key=lambda x: x[1]."
        ],
        "approach": "Sort pairs by second element.",
        "pseudocode": "pairs = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\npairs.sort(key=lambda x: x[1])\nfor n, s in pairs: print(f'{n} {s}')",
        "explanation": "x[1] extracts the score for comparison.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    pairs = [(tokens[i], int(tokens[i+1])) for i in range(0, len(tokens), 2)]\n    pairs.sort(key=lambda x: x[1])\n    for n, s in pairs:\n        print(f'{n} {s}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Comparing scores as strings instead of converting to integer"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sorting"
        ]
    },
    {
        "id": "py-prob-11-05",
        "levelId": "py-level-11",
        "title": "Kth Largest Element",
        "type": "coding",
        "difficulty": "medium",
        "order": 5,
        "description": "LeetCode #215 Kth Largest Element in an Array.\nGiven integer `K` on the first line, followed by `N` integers on the second line:\nFind the `K`-th largest element in the sorted array (1-based, e.g. K=1 is maximum).\nPrint the K-th largest element.",
        "whyThisMatters": "Top-K elements can be solved via sorting, min-heaps (`heapq`), or QuickSelect in linear time.",
        "concepts": [
            "kth largest",
            "sorting",
            "heaps"
        ],
        "prerequisites": [
            "sorting"
        ],
        "learningObjectives": [
            "Find Kth order statistic"
        ],
        "constraints": [
            "1 <= K <= N"
        ],
        "examples": [
            {
                "input": "2\n3 2 1 5 6 4",
                "output": "5"
            },
            {
                "input": "4\n3 2 3 1 2 4 5 5 6",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n3 2 1 5 6 4",
                "expectedOutput": "5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4\n3 2 3 1 2 4 5 5 6",
                "expectedOutput": "4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        nums = tokens[1:]\n        # Find K-th largest\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sorted(nums, reverse=True)[k - 1]"
        ],
        "howToThink": [
            "Sort descending, access index k - 1."
        ],
        "approach": "Sort descending and index at k - 1.",
        "pseudocode": "sorted_nums = sorted(nums, reverse=True)\nprint(sorted_nums[k - 1])",
        "explanation": "Accesses the Kth largest element cleanly.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        nums = tokens[1:]\n        sorted_nums = sorted(nums, reverse=True)\n        print(sorted_nums[k - 1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Off-by-one: using index k instead of k - 1"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sorting",
            "classic"
        ]
    },
    {
        "id": "py-prob-11-06",
        "levelId": "py-level-11",
        "title": "Sort Characters by Frequency",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #451.\nGiven a string `S`, sort its characters in decreasing order based on the frequency of each character.\nIf frequencies are equal, preserve alphabetical order.\nPrint the reconstructed string.",
        "whyThisMatters": "Bucket sort and frequency map sorting are common string optimization questions.",
        "concepts": [
            "frequency sort",
            "counter",
            "multi-key sort"
        ],
        "prerequisites": [
            "sorting",
            "dictionaries"
        ],
        "learningObjectives": [
            "Reconstruct strings ordered by character frequencies"
        ],
        "constraints": [
            "Non-empty string"
        ],
        "examples": [
            {
                "input": "tree",
                "output": "eert"
            },
            {
                "input": "cccaaa",
                "output": "aaaccc"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "tree",
                "expectedOutput": "eert",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "cccaaa",
                "expectedOutput": "aaaccc",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Sort characters by frequency\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Count with Counter(s). Sort unique chars with key=lambda c: (-counts[c], c). Multiply each by counts[c]."
        ],
        "howToThink": [
            "Sort chars by (-freq, char), repeat each char by freq."
        ],
        "approach": "Counter + multi-key sorting.",
        "pseudocode": "counts = Counter(s)\nchars = sorted(counts.keys(), key=lambda c: (-counts[c], c))\nprint(''.join(c * counts[c] for c in chars))",
        "explanation": "Multiplies characters by their counts and joins.",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    counts = Counter(s)\n    chars = sorted(counts.keys(), key=lambda c: (-counts[c], c))\n    print(''.join(c * counts[c] for c in chars))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Printing only the unique characters without their multiplicities"
        ],
        "timeComplexity": "O(N log U)",
        "spaceComplexity": "O(U)",
        "interviewRelevance": "high",
        "tags": [
            "sorting",
            "strings"
        ]
    },
    {
        "id": "py-prob-11-07",
        "levelId": "py-level-11",
        "title": "Sort Colors (Dutch National Flag)",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #75 Sort Colors.\nGiven an array `arr` containing only `0`s (red), `1`s (white), and `2`s (blue):\nSort the array in-place so that objects of the same color are adjacent, in order 0, 1, 2.\nPrint the sorted array space-separated.\n\nCan you do this in one pass `O(N)` time using Dijkstra's 3-way partitioning?",
        "whyThisMatters": "Dutch National Flag is the foundation of 3-way QuickSort (Dijkstra).",
        "concepts": [
            "dutch national flag",
            "three pointers",
            "in-place partition"
        ],
        "prerequisites": [
            "sorting",
            "two pointers"
        ],
        "learningObjectives": [
            "Implement 3-way partitioning in O(N) time and O(1) space"
        ],
        "constraints": [
            "Elements are 0, 1, or 2"
        ],
        "examples": [
            {
                "input": "2 0 2 1 1 0",
                "output": "0 0 1 1 2 2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 0 2 1 1 0",
                "expectedOutput": "0 0 1 1 2 2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2 0 1",
                "expectedOutput": "0 1 2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # 3-way partition\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "low = 0, mid = 0, high = len(nums) - 1. While mid <= high: if 0 swap(low, mid), low++, mid++; if 1 mid++; if 2 swap(mid, high), high--."
        ],
        "howToThink": [
            "Three pointers: low boundary for 0, high boundary for 2, mid scanner for 1."
        ],
        "approach": "One-pass Dutch National Flag 3-way partition.",
        "pseudocode": "low, mid, high = 0, 0, len(nums) - 1\nwhile mid <= high:\n    if nums[mid] == 0: nums[low], nums[mid] = nums[mid], nums[low]; low += 1; mid += 1\n    elif nums[mid] == 1: mid += 1\n    else: nums[mid], nums[high] = nums[high], nums[mid]; high -= 1\nprint(*nums)",
        "explanation": "Partitions in a single pass with O(1) space.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    low, mid, high = 0, 0, len(nums) - 1\n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1\n            mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else:\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1\n    print(*nums)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Advancing mid pointer after swapping with high (the swapped value has not been examined yet)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "partition",
            "classic"
        ]
    },
    {
        "id": "py-prob-11-08",
        "levelId": "py-level-11",
        "title": "Merge Overlapping Intervals",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "LeetCode #56 Merge Intervals.\nGiven an array of intervals `[start, end]`:\nMerge all overlapping intervals, and print the merged intervals as `<start> <end>` on separate lines.",
        "whyThisMatters": "Interval merging is asked constantly by Bloomberg, Amazon, and IBM.",
        "concepts": [
            "intervals",
            "sorting by start",
            "merging"
        ],
        "prerequisites": [
            "sorting"
        ],
        "learningObjectives": [
            "Sort intervals by start time and merge contiguous spans"
        ],
        "constraints": [
            "Intervals start <= end"
        ],
        "examples": [
            {
                "input": "1 3 2 6 8 10 15 18",
                "output": "1 6\n8 10\n15 18"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 3 2 6 8 10 15 18",
                "expectedOutput": "1 6\n8 10\n15 18",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 4 4 5",
                "expectedOutput": "1 5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    # Merge intervals\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Sort intervals by start time: intervals.sort(key=lambda x: x[0]). Iterate and compare current start with last merged end."
        ],
        "howToThink": [
            "Sort by start time. If current interval starts <= last merged end, extend end = max(end, current_end)."
        ],
        "approach": "Sort by start and merge sequentially.",
        "pseudocode": "intervals.sort(key=lambda x: x[0])\nmerged = [intervals[0]]\nfor s, e in intervals[1:]:\n    if s <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], e)\n    else: merged.append([s, e])\nfor s, e in merged: print(f'{s} {e}')",
        "explanation": "Sorting simplifies interval overlap checks to linear scan.",
        "solution": "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if not tokens:\n        return\n    intervals = [[tokens[i], tokens[i+1]] for i in range(0, len(tokens), 2)]\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for s, e in intervals[1:]:\n        if s <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], e)\n        else:\n            merged.append([s, e])\n    for s, e in merged:\n        print(f'{s} {e}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Missing intervals that touch at endpoints (e.g. [1,4] and [4,5] overlap)"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "intervals",
            "must-know"
        ]
    },
    {
        "id": "py-prob-11-09",
        "levelId": "py-level-11",
        "title": "Custom Student Roster Sort",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "Given student records `name score age` from input:\nSort the students by:\n1. Score descending (highest score first)\n2. Age ascending (younger first if scores tied)\n3. Name alphabetically ascending (if score and age tied)\nPrint each student as `<name> <score> <age>` on separate lines.",
        "whyThisMatters": "Compound multi-key sorting with mixed directions (ascending vs descending) in Python.",
        "concepts": [
            "multi-key sort",
            "negation technique",
            "lambdas"
        ],
        "prerequisites": [
            "sorting"
        ],
        "learningObjectives": [
            "Mix ascending and descending criteria in key lambdas"
        ],
        "constraints": [
            "Integer score and age"
        ],
        "examples": [
            {
                "input": "Alice 90 20 Bob 90 19 Charlie 85 22",
                "output": "Bob 90 19\nAlice 90 20\nCharlie 85 22"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Alice 90 20 Bob 90 19 Charlie 85 22",
                "expectedOutput": "Bob 90 19\nAlice 90 20\nCharlie 85 22",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Dan 70 21 Dave 70 21",
                "expectedOutput": "Dan 70 21\nDave 70 21",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Sort with compound key\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "key=lambda x: (-x['score'], x['age'], x['name'])"
        ],
        "howToThink": [
            "Tuple key: (-score, age, name)."
        ],
        "approach": "Use tuple key with numeric negation.",
        "pseudocode": "students.sort(key=lambda s: (-s[1], s[2], s[0]))\nfor s in students: print(f'{s[0]} {s[1]} {s[2]}')",
        "explanation": "Negating numeric scores inverts the direction cleanly.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    students = []\n    for i in range(0, len(tokens), 3):\n        students.append((tokens[i], int(tokens[i+1]), int(tokens[i+2])))\n    students.sort(key=lambda s: (-s[1], s[2], s[0]))\n    for s in students:\n        print(f'{s[0]} {s[1]} {s[2]}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Trying to negate string names (causes TypeError)"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sorting"
        ]
    },
    {
        "id": "py-prob-11-10",
        "levelId": "py-level-11",
        "title": "Relative Sort Order",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "LeetCode #1122 Relative Sort Array.\nGiven a priority order array `order` followed by a target array `arr` on the next line:\nSort the elements of `arr` such that relative ordering matches `order`.\nElements not in `order` should appear at the end, sorted in ascending order.\nPrint the sorted array space-separated.",
        "whyThisMatters": "Custom comparator mapping using a lookup dictionary.",
        "concepts": [
            "relative sort",
            "rank map",
            "key function"
        ],
        "prerequisites": [
            "sorting",
            "dictionaries"
        ],
        "learningObjectives": [
            "Sort elements according to external rank mapping"
        ],
        "constraints": [
            "Integer arrays"
        ],
        "examples": [
            {
                "input": "2 1 4 3\n2 1 2 5 7 1 9 3 6 8 8",
                "output": "2 2 1 1 3 5 6 7 8 8 9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 1 4 3\n2 1 2 5 7 1 9 3 6 8 8",
                "expectedOutput": "2 2 1 1 3 5 6 7 8 8 9",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        order = list(map(int, lines[0].split()))\n        arr = list(map(int, lines[1].split()))\n        # Relative sort\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "rank = {x: i for i, x in enumerate(order)}. Key function: (0, rank[x]) if x in rank else (1, x)."
        ],
        "howToThink": [
            "Map elements in order to priority (0, rank). Unranked elements map to (1, x)."
        ],
        "approach": "Rank dict with fallback tuple key.",
        "pseudocode": "rank = {x: i for i, x in enumerate(order)}\narr.sort(key=lambda x: (0, rank[x]) if x in rank else (1, x))\nprint(*arr)",
        "explanation": "Two-stage tuple key guarantees order priority followed by unranked elements sorted ascending.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        order = list(map(int, lines[0].split()))\n        arr = list(map(int, lines[1].split()))\n        rank = {x: i for i, x in enumerate(order)}\n        arr.sort(key=lambda x: (0, rank[x]) if x in rank else (1, x))\n        print(*arr)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Unranked elements not sorted ascending among themselves"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sorting",
            "custom rank"
        ]
    }
];
