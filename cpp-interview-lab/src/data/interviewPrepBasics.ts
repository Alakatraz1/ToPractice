import { Problem, TestCase } from './types';

export interface DualLanguageProblemSpec {
    baseId: string;
    levelId: 'amz-basics' | 'amz-challenges';
    title: string;
    difficulty: 'beginner' | 'easy' | 'medium' | 'hard';
    order: number;
    stageNum?: number;
    stageTitle?: string;
    pattern: string;
    amazonContext: string;
    description: string;
    whyThisMatters: string;
    concepts: string[];
    prerequisites: string[];
    learningObjectives: string[];
    constraints: string[];
    examples: { input: string; output: string; explanation?: string }[];
    testCases: TestCase[];
    cppStarterCode: string;
    pythonStarterCode: string;
    hints: string[];
    howToThink: string[];
    approach: string;
    pseudocode: string;
    explanation: string;
    cppSolution: string;
    pythonSolution: string;
    commonMistakes: string[];
    timeComplexity: string;
    spaceComplexity: string;
    tags: string[];
}

export interface AmazonStageMeta {
    stageNum: number;
    title: string;
    count: number;
    range: string;
}

export const amazonBasicsStages: AmazonStageMeta[] = [
    {
        "stageNum": 1,
        "title": "Stage 1: Arrays, Loops, 64-Bit Math & Prefix Sums",
        "count": 8,
        "range": "Steps 1–8"
    },
    {
        "stageNum": 2,
        "title": "Stage 2: Strings, ASCII Tricks & Parsing",
        "count": 8,
        "range": "Steps 9–16"
    },
    {
        "stageNum": 3,
        "title": "Stage 3: Hash Maps, Frequency Sets & Custom Sorting",
        "count": 8,
        "range": "Steps 17–24"
    },
    {
        "stageNum": 4,
        "title": "Stage 4: Two Pointers & Sliding Window Mastery",
        "count": 8,
        "range": "Steps 25–32"
    },
    {
        "stageNum": 5,
        "title": "Stage 5: Intervals, Greedy & Binary Search on Answer",
        "count": 8,
        "range": "Steps 33–40"
    },
    {
        "stageNum": 6,
        "title": "Stage 6: Stacks, Monotonic Deques & Priority Queues (Heaps)",
        "count": 8,
        "range": "Steps 41–48"
    },
    {
        "stageNum": 7,
        "title": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "count": 8,
        "range": "Steps 49–56"
    }
];

export function buildDualTrackProblems(specs: DualLanguageProblemSpec[]): {
    cpp: Problem[];
    python: Problem[];
} {
    const cpp: Problem[] = [];
    const python: Problem[] = [];

    for (const spec of specs) {
        const common = {
            levelId: spec.levelId,
            title: spec.title,
            difficulty: spec.difficulty,
            type: 'coding' as const,
            interviewRelevance: 'high' as const,
            order: spec.order,
            description: spec.description,
            whyThisMatters: spec.whyThisMatters,
            concepts: spec.concepts,
            prerequisites: spec.prerequisites,
            learningObjectives: spec.learningObjectives,
            constraints: spec.constraints,
            examples: spec.examples,
            hints: spec.hints,
            howToThink: spec.howToThink,
            approach: spec.approach,
            pseudocode: spec.pseudocode,
            explanation: spec.explanation,
            commonMistakes: spec.commonMistakes,
            timeComplexity: spec.timeComplexity,
            spaceComplexity: spec.spaceComplexity,
            tags: spec.tags,
        };

        cpp.push({
            ...common,
            id: spec.baseId,
            starterCode: spec.cppStarterCode,
            solution: spec.cppSolution,
            testCases: spec.testCases.map(tc => ({ ...tc, id: `${spec.baseId}-${tc.id}` })),
        });

        python.push({
            ...common,
            id: `py-${spec.baseId}`,
            starterCode: spec.pythonStarterCode,
            solution: spec.pythonSolution,
            testCases: spec.testCases.map(tc => ({ ...tc, id: `py-${spec.baseId}-${tc.id}` })),
        });
    }

    return { cpp, python };
}

export const amazonBasicsSpecs: DualLanguageProblemSpec[] = [
    {
        "baseId": "amz-basic-01",
        "levelId": "amz-basics",
        "title": "Step 1: Reading an Array & 64-Bit Sum Accumulator",
        "difficulty": "beginner",
        "order": 1,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "64-Bit Array Accumulation",
        "amazonContext": "Prevents the #1 hidden-test failure on Amazon OAs: 32-bit integer overflow when summing large arrays.",
        "description": "### Mini-Lesson: 64-Bit Array Accumulation\nIn Amazon assessments, array elements can be up to `1,000,000,000` (`10^9`) and array length `N` up to `100,000`. In C++, a standard 32-bit `int` overflows around `2 * 10^9`. Always use `long long` (`0LL`) in C++ for sums! In Python, `int` automatically handles arbitrarily large numbers.\n\n**C++17 Idiom:**\n```cpp\nlong long total = 0;\nfor (int i = 0; i < n; i++) {\n    long long x; cin >> x;\n    total += x;\n}\n```\n\n**Python 3 Idiom:**\n```python\nnums = list(map(int, sys.stdin.read().split()[1:]))\ntotal = sum(nums)\n```\n\n---\n\n### Your Task\nGiven `N` warehouse package weights, compute and print their total weight using 64-bit safe arithmetic.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print a single integer: the sum of all `N` elements.",
        "whyThisMatters": "Every prefix sum and sliding window problem starts with accumulating values safely without overflow.",
        "concepts": [
            "arrays",
            "loops",
            "64-bit integers"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Read N integers from standard input",
            "Use long long in C++ or sum() in Python to avoid overflow"
        ],
        "constraints": [
            "1 <= N <= 100,000",
            "0 <= weight[i] <= 1,000,000,000"
        ],
        "examples": [
            {
                "input": "4\n1000000000 1000000000 500000000 500000000",
                "output": "3000000000",
                "explanation": "Sum is 3 billion, which exceeds 32-bit signed int max (2.14 billion)."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-01-tc1",
                "input": "4\n1000000000 1000000000 500000000 500000000",
                "expectedOutput": "3000000000",
                "hidden": false
            },
            {
                "id": "amz-basic-01-tc2",
                "input": "5\n1 2 3 4 5",
                "expectedOutput": "15",
                "hidden": false
            },
            {
                "id": "amz-basic-01-tc3",
                "input": "3\n0 100 200",
                "expectedOutput": "300",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    // Declare a long long accumulator and sum all n numbers\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    nums = [int(x) for x in data[1:1+n]]\n    # Print the sum of nums\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Initialize `long long total = 0;` in C++ and add each element inside a `for` loop."
        ],
        "howToThink": [
            "Identify the maximum possible sum: N * max_val = 10^5 * 10^9 = 10^14, so use 64-bit `long long` in C++."
        ],
        "approach": "Iterate through the array once and accumulate into a 64-bit variable.",
        "pseudocode": "total = 0\nfor x in array: total += x\nprint(total)",
        "explanation": "Single pass O(N) time and O(1) extra space.",
        "cppSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    long long total = 0;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        total += x;\n    }\n    cout << total << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    print(sum(int(x) for x in data[1:1+n]))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `int total = 0` in C++ which overflows when the sum exceeds 2,147,483,647."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-1",
            "64-bit-array-accumulation",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-02",
        "levelId": "amz-basics",
        "title": "Step 2: Single-Pass Min, Max & Spread",
        "difficulty": "beginner",
        "order": 2,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "Running Extremes (Min/Max)",
        "amazonContext": "Used in Amazon stock price volatility and server load balancing problems.",
        "description": "### Mini-Lesson: Running Extremes (Min/Max)\nTo find the minimum and maximum of an array in a single pass, initialize `min_val = a[0]` and `max_val = a[0]`, then update them using `min()` and `max()` as you scan. Never initialize `min_val = 0` or `max_val = 0` because array numbers might all be positive or all negative!\n\n**C++17 Idiom:**\n```cpp\nlong long mn = a[0], mx = a[0];\nfor (long long x : a) {\n    mn = min(mn, x);\n    mx = max(mx, x);\n}\n```\n\n**Python 3 Idiom:**\n```python\nmn = min(a)\nmx = max(a)\n```\n\n---\n\n### Your Task\nGiven `N` server latency measurements, output three space-separated integers: the **minimum**, the **maximum**, and the **spread** (`max - min`).\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `min max spread` separated by spaces.",
        "whyThisMatters": "Tracking running minimums and maximums is the foundation for stock buy/sell and prefix-min optimization problems.",
        "concepts": [
            "arrays",
            "min-max",
            "single pass"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Initialize running min and max from the first element",
            "Compute spread in O(N) time"
        ],
        "constraints": [
            "1 <= N <= 100,000",
            "-10^9 <= a[i] <= 10^9"
        ],
        "examples": [
            {
                "input": "5\n12 4 19 7 15",
                "output": "4 19 15",
                "explanation": "Min is 4, Max is 19, Spread is 19 - 4 = 15."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-02-tc1",
                "input": "5\n12 4 19 7 15",
                "expectedOutput": "4 19 15",
                "hidden": false
            },
            {
                "id": "amz-basic-02-tc2",
                "input": "4\n-10 -5 -20 -2",
                "expectedOutput": "-20 -2 18",
                "hidden": false
            },
            {
                "id": "amz-basic-02-tc3",
                "input": "1\n42",
                "expectedOutput": "42 42 0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Compute min, max, and max - min\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Print min, max, and max - min\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Start with `mn = a[0]` and `mx = a[0]`, loop over `a`, and print `mn`, `mx`, and `mx - mn`."
        ],
        "howToThink": [
            "Initializing from `a[0]` works even when all numbers are negative."
        ],
        "approach": "Scan once to find `mn` and `mx`, then output `mn`, `mx`, and `mx - mn`.",
        "pseudocode": "mn = a[0], mx = a[0]\nfor x in a: mn = min(mn, x); mx = max(mx, x)\nprint(mn, mx, mx - mn)",
        "explanation": "Runs in O(N) time with O(1) state variables.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long mn = a[0], mx = a[0];\n    for (long long x : a) {\n        mn = min(mn, x);\n        mx = max(mx, x);\n    }\n    cout << mn << \" \" << mx << \" \" << (mx - mn) << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    mn, mx = min(a), max(a)\n    print(f\"{mn} {mx} {mx - mn}\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Initializing `mx = 0`, which fails when all elements are negative."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-1",
            "running-extremes-min-max-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-03",
        "levelId": "amz-basics",
        "title": "Step 3: Building a Running Sum Array",
        "difficulty": "beginner",
        "order": 3,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "Cumulative Running Sum",
        "amazonContext": "The direct stepping stone to Prefix Sums.",
        "description": "### Mini-Lesson: Cumulative Running Sum\nA **running sum** array `run` has `run[i] = a[0] + a[1] + ... + a[i]`. Instead of recomputing the sum from `0` to `i` each time (which takes `O(N^2)`), notice that `run[i] = run[i - 1] + a[i]`! Each new prefix sum is just the previous prefix sum plus the current element.\n\n**C++17 Idiom:**\n```cpp\nvector<long long> run(n);\nrun[0] = a[0];\nfor (int i = 1; i < n; i++) run[i] = run[i - 1] + a[i];\n```\n\n**Python 3 Idiom:**\n```python\nrun = []\ncurr = 0\nfor x in a:\n    curr += x\n    run.append(curr)\n```\n\n---\n\n### Your Task\nGiven an array of `N` integers, output the running sum array of length `N` separated by spaces.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `N` space-separated integers representing the running sums.",
        "whyThisMatters": "Teaches the recurrence `pref[i] = pref[i-1] + a[i]`, turning O(N^2) work into O(N).",
        "concepts": [
            "prefix sums",
            "arrays",
            "recurrence"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Compute cumulative sums in O(N) time using the previous sum"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n1 2 3 4",
                "output": "1 3 6 10",
                "explanation": "Running sums: [1, 1+2, 1+2+3, 1+2+3+4] = [1, 3, 6, 10]."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-03-tc1",
                "input": "4\n1 2 3 4",
                "expectedOutput": "1 3 6 10",
                "hidden": false
            },
            {
                "id": "amz-basic-03-tc2",
                "input": "5\n1 1 1 1 1",
                "expectedOutput": "1 2 3 4 5",
                "hidden": false
            },
            {
                "id": "amz-basic-03-tc3",
                "input": "5\n3 1 2 10 1",
                "expectedOutput": "3 4 6 16 17",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Print running sums separated by spaces\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Print running sums separated by spaces\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Maintain `curr += a[i]` as you loop and print `curr` at each step."
        ],
        "howToThink": [
            "Instead of a nested loop, carry the sum forward from index `i - 1` to `i`."
        ],
        "approach": "Accumulate `curr += a[i]` in a single loop and record each value.",
        "pseudocode": "curr = 0\nfor x in a:\n    curr += x\n    print(curr)",
        "explanation": "One addition per element gives O(N) runtime.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    long long curr = 0;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        curr += x;\n        if (i > 0) cout << \" \";\n        cout << curr;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    out = []\n    curr = 0\n    for x in data[1:1+n]:\n        curr += int(x)\n        out.append(str(curr))\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Writing a nested loop `for j in 0..i` which takes O(N^2) time."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-1",
            "cumulative-running-sum",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-04",
        "levelId": "amz-basics",
        "title": "Step 4: The 1-Indexed Prefix Sum Array (Size N + 1)",
        "difficulty": "easy",
        "order": 4,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "1-Indexed Prefix Sum Construction",
        "amazonContext": "Eliminates `if (L == 0)` edge-case bugs in every range-sum problem.",
        "description": "### Mini-Lesson: 1-Indexed Prefix Sum Construction\nProfessional competitive programmers and Amazon engineers almost always build a **1-indexed prefix sum array** `pref` of size `N + 1` with `pref[0] = 0` and `pref[i + 1] = pref[i] + a[i]`. Why? Because `pref[k]` means \"the sum of the first `k` elements\", so `pref[0] = 0` naturally represents an empty prefix!\n\n**C++17 Idiom:**\n```cpp\nvector<long long> pref(n + 1, 0);\nfor (int i = 0; i < n; i++) {\n    pref[i + 1] = pref[i] + a[i];\n}\n```\n\n**Python 3 Idiom:**\n```python\npref = [0] * (n + 1)\nfor i in range(n):\n    pref[i + 1] = pref[i] + a[i]\n```\n\n---\n\n### Your Task\nGiven `N` integers, construct and print the `N + 1` elements of its **1-indexed prefix sum array** (starting with `0`).\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `N + 1` space-separated integers (`pref[0]` through `pref[N]`).",
        "whyThisMatters": "Once you build `pref` of size `N + 1`, any subarray sum `a[L..R]` is just `pref[R + 1] - pref[L]` with zero special cases!",
        "concepts": [
            "prefix sums",
            "1-indexed prefix"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Construct a size N + 1 prefix array starting with 0"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n10 20 30 40",
                "output": "0 10 30 60 100",
                "explanation": "pref[0]=0, pref[1]=10, pref[2]=30, pref[3]=60, pref[4]=100."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-04-tc1",
                "input": "4\n10 20 30 40",
                "expectedOutput": "0 10 30 60 100",
                "hidden": false
            },
            {
                "id": "amz-basic-04-tc2",
                "input": "3\n5 -2 7",
                "expectedOutput": "0 5 3 10",
                "hidden": false
            },
            {
                "id": "amz-basic-04-tc3",
                "input": "1\n99",
                "expectedOutput": "0 99",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Build pref of size n + 1 and print all n + 1 values\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Build pref of size n + 1 and print all n + 1 values\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Create `pref` of size `n + 1` filled with `0`, set `pref[i + 1] = pref[i] + a[i]`, then print all `n + 1` elements."
        ],
        "howToThink": [
            "Think of `pref[k]` as the sum of the first `k` elements. When `k = 0`, the sum of 0 elements is `0`."
        ],
        "approach": "Allocate `pref` of length `N + 1` with `pref[0] = 0` and populate `pref[i + 1] = pref[i] + a[i]`.",
        "pseudocode": "pref = [0] * (n + 1)\nfor i in 0..n-1: pref[i+1] = pref[i] + a[i]\nprint(pref)",
        "explanation": "Takes O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> pref(n + 1, 0);\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pref[i + 1] = pref[i] + x;\n    }\n    for (int i = 0; i <= n; i++) {\n        if (i > 0) cout << \" \";\n        cout << pref[i];\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    pref = [0] * (n + 1)\n    for i in range(n):\n        pref[i + 1] = pref[i] + int(data[1 + i])\n    print(\" \".join(str(x) for x in pref))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting to print `pref[0] = 0` at the beginning."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-1",
            "1-indexed-prefix-sum-construction",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-05",
        "levelId": "amz-basics",
        "title": "Step 5: Answering O(1) Subarray Sum Queries",
        "difficulty": "easy",
        "order": 5,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "Prefix Sum Range Query",
        "amazonContext": "Core pattern for Amazon warehouse inventory and shipment range queries.",
        "description": "### Mini-Lesson: Prefix Sum Range Query\nUsing the `pref` array of size `N + 1` you built in Step 4, how do we find the sum of elements from index `L` to `R` (0-indexed, inclusive)?\n\n`sum(L .. R) = pref[R + 1] - pref[L]`\n\nWhy? Because `pref[R + 1]` is the sum of elements `0..R`, and `pref[L]` is the sum of elements `0..L-1`. Subtracting them leaves `L..R` in `O(1)` time!\n\n**C++17 Idiom:**\n```cpp\n// Precompute in O(N):\nfor (int i = 0; i < n; i++) pref[i + 1] = pref[i] + a[i];\n// Answer each query (L, R) in O(1):\ncout << (pref[R + 1] - pref[L]) << \"\\n\";\n```\n\n**Python 3 Idiom:**\n```python\n# Precompute in O(N):\nfor i in range(n): pref[i + 1] = pref[i] + a[i]\n# Answer each query (L, R) in O(1):\nprint(pref[R + 1] - pref[L])\n```\n\n---\n\n### Your Task\nGiven an array of `N` integers and `Q` queries `(L, R)`, print the sum of elements from index `L` to `R` (inclusive) for each query.\n\n**Input Format:**\n- Line 1: `N` and `Q`\n- Line 2: `N` space-separated integers\n- Next `Q` lines: `L` and `R` (`0 <= L <= R < N`)\n\n**Output Format:**\n- Print `Q` lines, each containing the subarray sum `a[L..R]`.",
        "whyThisMatters": "Reduces query time from O(N * Q) to O(N + Q), which is required to pass Amazon hidden test cases.",
        "concepts": [
            "prefix sums",
            "range queries"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Apply pref[R + 1] - pref[L] to answer Q queries in O(N + Q) time"
        ],
        "constraints": [
            "1 <= N, Q <= 100,000"
        ],
        "examples": [
            {
                "input": "5 3\n10 20 30 40 50\n0 2\n1 3\n0 4",
                "output": "60\n90\n150",
                "explanation": "[0..2]=60, [1..3]=90, [0..4]=150."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-05-tc1",
                "input": "5 3\n10 20 30 40 50\n0 2\n1 3\n0 4",
                "expectedOutput": "60\n90\n150",
                "hidden": false
            },
            {
                "id": "amz-basic-05-tc2",
                "input": "4 2\n5 0 12 8\n1 1\n2 3",
                "expectedOutput": "0\n20",
                "hidden": false
            },
            {
                "id": "amz-basic-05-tc3",
                "input": "3 2\n1000000000 1000000000 1000000000\n0 2\n1 2",
                "expectedOutput": "3000000000\n2000000000",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    if (!(cin >> n >> q)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Build pref and answer Q queries\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, q = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Build pref and answer Q queries\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `pref[R + 1] - pref[L]` for each `(L, R)` query."
        ],
        "howToThink": [
            "Precompute `pref` once before the query loop, then each query is a single subtraction."
        ],
        "approach": "Build 1-indexed prefix sum array in O(N), then answer each query in O(1).",
        "pseudocode": "pref = [0] * (n + 1)\nfor i in 0..n-1: pref[i+1] = pref[i] + a[i]\nfor (L, R) in queries: print(pref[R+1] - pref[L])",
        "explanation": "Total time complexity is O(N + Q).",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    if (!(cin >> n >> q)) return 0;\n    vector<long long> pref(n + 1, 0);\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pref[i + 1] = pref[i] + x;\n    }\n    for (int i = 0; i < q; i++) {\n        int l, r; cin >> l >> r;\n        cout << (pref[r + 1] - pref[l]) << \"\\n\";\n    }\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, q = int(data[0]), int(data[1])\n    pref = [0] * (n + 1)\n    for i in range(n):\n        pref[i + 1] = pref[i] + int(data[2 + i])\n    idx = 2 + n\n    out = []\n    for _ in range(q):\n        l, r = int(data[idx]), int(data[idx + 1])\n        idx += 2\n        out.append(str(pref[r + 1] - pref[l]))\n    print(\"\\n\".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Writing `pref[r] - pref[l]` instead of `pref[r + 1] - pref[l]`."
        ],
        "timeComplexity": "O(N + Q)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-1",
            "prefix-sum-range-query",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-06",
        "levelId": "amz-basics",
        "title": "Step 6: Equilibrium Pivot Index (Left Sum == Right Sum)",
        "difficulty": "easy",
        "order": 6,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "Total Sum Minus Left Sum",
        "amazonContext": "Tested in Amazon server load-balancing and array partition OA problems.",
        "description": "### Mini-Lesson: Total Sum Minus Left Sum\nIf you know the `total_sum` of an array and you maintain `left_sum` as you scan index `i` from left to right, you do not even need a separate array to know `right_sum`! Why? Because:\n\n`right_sum = total_sum - left_sum - a[i]`\n\nWhenever `left_sum == right_sum`, index `i` is a balanced pivot index!\n\n**C++17 Idiom:**\n```cpp\nlong long total = accumulate(a.begin(), a.end(), 0LL);\nlong long leftSum = 0;\nfor (int i = 0; i < n; i++) {\n    long long rightSum = total - leftSum - a[i];\n    if (leftSum == rightSum) return i;\n    leftSum += a[i];\n}\n```\n\n**Python 3 Idiom:**\n```python\ntotal = sum(a)\nleft_sum = 0\nfor i, x in enumerate(a):\n    if left_sum == total - left_sum - x:\n        return i\n    left_sum += x\n```\n\n---\n\n### Your Task\nFind the **leftmost 0-based index** `i` where the sum of elements strictly to the left of `i` equals the sum of elements strictly to the right of `i`. If no such index exists, print `-1`.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the leftmost pivot index `i`, or `-1`.",
        "whyThisMatters": "Shows how `total_sum - left_sum` gives you suffix sums on the fly in O(1) space.",
        "concepts": [
            "prefix sums",
            "array partitioning"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Compute right suffix sum on the fly using total - left - a[i]"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "6\n1 7 3 6 5 6",
                "output": "3",
                "explanation": "At index 3 (value 6), left sum is 1+7+3=11 and right sum is 5+6=11."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-06-tc1",
                "input": "6\n1 7 3 6 5 6",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-06-tc2",
                "input": "3\n1 2 3",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "amz-basic-06-tc3",
                "input": "3\n2 1 -1",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Find leftmost pivot index\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Find leftmost pivot index\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check `leftSum == total - leftSum - a[i]` BEFORE adding `a[i]` to `leftSum`."
        ],
        "howToThink": [
            "At index 0, `leftSum` is 0. At index `n - 1`, `rightSum` is 0. Both are naturally handled by the formula!"
        ],
        "approach": "Compute `total`, then scan left-to-right checking `leftSum == total - leftSum - a[i]`.",
        "pseudocode": "total = sum(a), leftSum = 0\nfor i in 0..n-1:\n    if leftSum == total - leftSum - a[i]: return i\n    leftSum += a[i]\nreturn -1",
        "explanation": "Two passes over the array take O(N) time and O(1) extra space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    long long total = 0;\n    for (int i = 0; i < n; i++) {\n        cin >> a[i];\n        total += a[i];\n    }\n    long long leftSum = 0;\n    for (int i = 0; i < n; i++) {\n        if (leftSum == total - leftSum - a[i]) {\n            cout << i << \"\\n\";\n            return 0;\n        }\n        leftSum += a[i];\n    }\n    cout << -1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    total = sum(a)\n    left_sum = 0\n    for i, x in enumerate(a):\n        if left_sum == total - left_sum - x:\n            print(i)\n            return\n        left_sum += x\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Adding `a[i]` to `leftSum` before checking the equality condition."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-1",
            "total-sum-minus-left-sum",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-07",
        "levelId": "amz-basics",
        "title": "Step 7: Prefix Counting — Counting Priority Orders in Ranges",
        "difficulty": "easy",
        "order": 7,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "Indicator Prefix Sum (0/1 Counting)",
        "amazonContext": "Used in Amazon \"Count Prime/Vowel/Defective Items in Subarray Queries\" OA questions.",
        "description": "### Mini-Lesson: Indicator Prefix Sum (0/1 Counting)\nWhat if an Amazon OA question asks: *\"How many even numbers (or defective items) are in subarray `[L, R]`?\"* across `Q` queries?\n\nTurn each element into `1` if it matches the condition, or `0` if it does not! Then take the **prefix sum** of those `1`s and `0`s. The sum of `1`s in `[L, R]` is the exact count of matching elements!\n\n**C++17 Idiom:**\n```cpp\nfor (int i = 0; i < n; i++) {\n    int isEven = (a[i] % 2 == 0) ? 1 : 0;\n    pref[i + 1] = pref[i] + isEven;\n}\n// Count in [L, R] is pref[R + 1] - pref[L]\n```\n\n**Python 3 Idiom:**\n```python\nfor i in range(n):\n    pref[i + 1] = pref[i] + (1 if a[i] % 2 == 0 else 0)\n# Count in [L, R] is pref[R + 1] - pref[L]\n```\n\n---\n\n### Your Task\nGiven `N` order IDs and `Q` range queries `(L, R)`, count how many **even** order IDs appear between index `L` and `R` (inclusive) for each query.\n\n**Input Format:**\n- Line 1: `N` and `Q`\n- Line 2: `N` space-separated integers\n- Next `Q` lines: `L` and `R`\n\n**Output Format:**\n- Print `Q` lines with the count of even numbers in each range.",
        "whyThisMatters": "Any \"count elements satisfying property X in range [L, R]\" problem becomes a 1-indexed prefix sum of 0s and 1s!",
        "concepts": [
            "prefix sums",
            "indicator array",
            "range counting"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Convert a boolean condition into a 0/1 prefix sum array"
        ],
        "constraints": [
            "1 <= N, Q <= 100,000"
        ],
        "examples": [
            {
                "input": "6 3\n4 7 2 9 8 6\n0 2\n1 4\n0 5",
                "output": "2\n2\n4",
                "explanation": "Even indicator is [1, 0, 1, 0, 1, 1]. Range [0..2] has 2 evens; [1..4] has 2; [0..5] has 4."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-07-tc1",
                "input": "6 3\n4 7 2 9 8 6\n0 2\n1 4\n0 5",
                "expectedOutput": "2\n2\n4",
                "hidden": false
            },
            {
                "id": "amz-basic-07-tc2",
                "input": "4 2\n1 3 5 7\n0 3\n1 2",
                "expectedOutput": "0\n0",
                "hidden": false
            },
            {
                "id": "amz-basic-07-tc3",
                "input": "4 2\n2 4 6 8\n1 3\n0 1",
                "expectedOutput": "3\n2",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, q;\n    if (!(cin >> n >> q)) return 0;\n    vector<int> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Build 0/1 prefix sum of even numbers and answer Q queries\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, q = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Build 0/1 prefix sum of even numbers and answer Q queries\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Add `1` to `pref[i + 1]` if `a[i] % 2 == 0`, else add `0`."
        ],
        "howToThink": [
            "Counting is just summing `1` for matches and `0` for non-matches!"
        ],
        "approach": "Build a prefix sum over `(a[i] % 2 == 0 ? 1 : 0)` and answer queries with `pref[R + 1] - pref[L]`.",
        "pseudocode": "pref = [0] * (n + 1)\nfor i in 0..n-1: pref[i+1] = pref[i] + (1 if a[i]%2==0 else 0)\nfor (L, R) in queries: print(pref[R+1] - pref[L])",
        "explanation": "Precomputation is O(N) and each query is O(1).",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, q;\n    if (!(cin >> n >> q)) return 0;\n    vector<int> pref(n + 1, 0);\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pref[i + 1] = pref[i] + (x % 2 == 0 ? 1 : 0);\n    }\n    for (int i = 0; i < q; i++) {\n        int l, r; cin >> l >> r;\n        cout << (pref[r + 1] - pref[l]) << \"\\n\";\n    }\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, q = int(data[0]), int(data[1])\n    pref = [0] * (n + 1)\n    for i in range(n):\n        pref[i + 1] = pref[i] + (1 if int(data[2 + i]) % 2 == 0 else 0)\n    idx = 2 + n\n    out = []\n    for _ in range(q):\n        l, r = int(data[idx]), int(data[idx + 1])\n        idx += 2\n        out.append(str(pref[r + 1] - pref[l]))\n    print(\"\\n\".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Adding `a[i]` itself instead of `1` when `a[i]` is even."
        ],
        "timeComplexity": "O(N + Q)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-1",
            "indicator-prefix-sum-0-1-counting-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-08",
        "levelId": "amz-basics",
        "title": "Step 8: Difference Array — O(1) Range Increment Updates",
        "difficulty": "easy",
        "order": 8,
        "stageNum": 1,
        "stageTitle": "Stage 1: Arrays, 64-Bit Sums & Prefix Sums",
        "pattern": "Difference Array (Inverse of Prefix Sum)",
        "amazonContext": "Directly powers Amazon OA range update problems (Traffic Lamps, Server Load Additions).",
        "description": "### Mini-Lesson: Difference Array (Inverse of Prefix Sum)\nWhat if you start with an array of `N` zeros and need to add `val` to every element in `[L, R]` across `U` updates? Looping from `L` to `R` for each update takes `O(N * U)`.\n\nInstead, use a **Difference Array** `diff` of size `N + 1`:\n1. For each update `(L, R, val)`, do just TWO operations: `diff[L] += val` and `diff[R + 1] -= val`.\n2. After all updates, take the **running sum** of `diff` to get the final array in `O(N)`!\n\n**C++17 Idiom:**\n```cpp\nvector<long long> diff(n + 1, 0);\n// To add val to [L, R]:\ndiff[L] += val;\ndiff[R + 1] -= val;\n// Reconstruct final values:\nlong long curr = 0;\nfor (int i = 0; i < n; i++) { curr += diff[i]; cout << curr << \" \"; }\n```\n\n**Python 3 Idiom:**\n```python\ndiff = [0] * (n + 1)\n# To add val to [L, R]:\ndiff[L] += val\ndiff[R + 1] -= val\n# Reconstruct final values:\ncurr = 0\nfor i in range(n):\n    curr += diff[i]\n```\n\n---\n\n### Your Task\nStarting with an array of `N` zeros, apply `U` range addition updates `(L, R, val)` and print the final `N` elements separated by spaces.\n\n**Input Format:**\n- Line 1: `N` and `U`\n- Next `U` lines: `L`, `R`, and `val` (`0 <= L <= R < N`)\n\n**Output Format:**\n- Print `N` space-separated integers representing the final array.",
        "whyThisMatters": "Difference arrays are the exact inverse of prefix sums and appear constantly in Amazon interval/range coverage problems.",
        "concepts": [
            "difference array",
            "prefix sums",
            "range updates"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Apply range additions in O(1) per update using diff[L] += v and diff[R + 1] -= v"
        ],
        "constraints": [
            "1 <= N, U <= 100,000"
        ],
        "examples": [
            {
                "input": "5 3\n1 3 2\n2 4 3\n0 2 -1",
                "output": "-1 1 4 5 3",
                "explanation": "After [1..3]+=2, [2..4]+=3, [0..2]+=-1, final array is [-1, 1, 4, 5, 3]."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-08-tc1",
                "input": "5 3\n1 3 2\n2 4 3\n0 2 -1",
                "expectedOutput": "-1 1 4 5 3",
                "hidden": false
            },
            {
                "id": "amz-basic-08-tc2",
                "input": "4 2\n0 3 5\n1 2 10",
                "expectedOutput": "5 15 15 5",
                "hidden": false
            },
            {
                "id": "amz-basic-08-tc3",
                "input": "3 1\n0 0 7",
                "expectedOutput": "7 0 0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, u;\n    if (!(cin >> n >> u)) return 0;\n    // Use a difference array of size n + 1\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, u = int(data[0]), int(data[1])\n    # Use a difference array of size n + 1\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Allocate `diff` of size `n + 1` so `diff[r + 1]` is never out of bounds when `r == n - 1`."
        ],
        "howToThink": [
            "`diff[L] += val` starts adding `val` from index `L` onward in the prefix sum, and `diff[R + 1] -= val` cancels that addition starting at `R + 1`!"
        ],
        "approach": "Process each update in O(1) on `diff`, then compute the prefix sum over the first `N` indices.",
        "pseudocode": "diff = [0] * (n + 1)\nfor (L, R, val) in updates:\n    diff[L] += val\n    diff[R + 1] -= val\nprint running sum of diff[0..n-1]",
        "explanation": "Runs in O(N + U) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, u;\n    if (!(cin >> n >> u)) return 0;\n    vector<long long> diff(n + 1, 0);\n    for (int i = 0; i < u; i++) {\n        int l, r; long long val;\n        cin >> l >> r >> val;\n        diff[l] += val;\n        diff[r + 1] -= val;\n    }\n    long long curr = 0;\n    for (int i = 0; i < n; i++) {\n        curr += diff[i];\n        if (i > 0) cout << \" \";\n        cout << curr;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, u = int(data[0]), int(data[1])\n    diff = [0] * (n + 1)\n    idx = 2\n    for _ in range(u):\n        l, r, val = int(data[idx]), int(data[idx+1]), int(data[idx+2])\n        idx += 3\n        diff[l] += val\n        diff[r + 1] -= val\n    out = []\n    curr = 0\n    for i in range(n):\n        curr += diff[i]\n        out.append(str(curr))\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Subtracting `val` at `diff[R]` instead of `diff[R + 1]`, which excludes index `R` from the range update."
        ],
        "timeComplexity": "O(N + U)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-1",
            "difference-array-inverse-of-prefix-sum-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-09",
        "levelId": "amz-basics",
        "title": "Step 9: Character Classification & 0-25 Alphabet Index",
        "difficulty": "beginner",
        "order": 9,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "Character ASCII Mapping",
        "amazonContext": "Foundation for string hashing, bitmasks, and log parsing in C++ and Python.",
        "description": "### Mini-Lesson: Character ASCII Mapping\nEvery lowercase English letter `'a'` through `'z'` can be mapped to an array index `0` through `25`:\n- In C++: `int idx = c - 'a';`\n- In Python: `idx = ord(c) - ord('a')`\n\nThis lets you use a tiny fixed array of size 26 (`int freq[26] = {0}`) instead of a slower hash table whenever strings only contain lowercase letters!\n\n**C++17 Idiom:**\n```cpp\nint idx = c - 'a'; // 'a' -> 0, 'b' -> 1, ..., 'z' -> 25\n```\n\n**Python 3 Idiom:**\n```python\nidx = ord(c) - ord('a')  # 'a' -> 0, 'b' -> 1, ..., 'z' -> 25\n```\n\n---\n\n### Your Task\nGiven a lowercase string `S`, print the `0`-based alphabet index (`0` to `25`) of each character separated by spaces.\n\n**Input Format:**\n- A single lowercase string `S`\n\n**Output Format:**\n- Space-separated integers from `0` to `25`.",
        "whyThisMatters": "Mapping characters to `0..25` powers fast frequency arrays and bitmasks (like in Optimal Partition of Strings).",
        "concepts": [
            "strings",
            "ascii",
            "character mapping"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Convert lowercase letters to 0..25 indices using c - 'a' or ord(c) - ord('a')"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "azb",
                "output": "0 25 1",
                "explanation": "a->0, z->25, b->1."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-09-tc1",
                "input": "azb",
                "expectedOutput": "0 25 1",
                "hidden": false
            },
            {
                "id": "amz-basic-09-tc2",
                "input": "amazon",
                "expectedOutput": "0 12 0 25 14 13",
                "hidden": false
            },
            {
                "id": "amz-basic-09-tc3",
                "input": "code",
                "expectedOutput": "2 14 3 4",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Print c - 'a' for each character\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Print ord(c) - ord('a') for each character\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Loop through each character `c` and compute `c - 'a'` (C++) or `ord(c) - ord('a')` (Python)."
        ],
        "howToThink": [
            "ASCII codes for lowercase letters are contiguous from 97 (`a`) to 122 (`z`)."
        ],
        "approach": "Subtract the ASCII value of `'a'` from each character.",
        "pseudocode": "for c in s: print(ord(c) - ord('a'))",
        "explanation": "Runs in O(|S|) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    for (size_t i = 0; i < s.size(); i++) {\n        if (i > 0) cout << \" \";\n        cout << (s[i] - 'a');\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    print(\" \".join(str(ord(c) - ord('a')) for c in s))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Subtracting `'A'` instead of `'a'` for lowercase characters."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-2",
            "character-ascii-mapping",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-10",
        "levelId": "amz-basics",
        "title": "Step 10: Fixed 26-Letter Frequency Array",
        "difficulty": "beginner",
        "order": 10,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "26-Bucket Frequency Counting",
        "amazonContext": "Used in substring anagram, character rearrangement, and password strength OA problems.",
        "description": "### Mini-Lesson: 26-Bucket Frequency Counting\nUsing `c - 'a'` from Step 9, we can count how many times every letter `a..z` appears in a string in `O(N)` time and `O(1)` space using an array of size 26!\n\n**C++17 Idiom:**\n```cpp\nint freq[26] = {0};\nfor (char c : s) freq[c - 'a']++;\n```\n\n**Python 3 Idiom:**\n```python\nfreq = [0] * 26\nfor c in s:\n    freq[ord(c) - ord('a')] += 1\n```\n\n---\n\n### Your Task\nGiven a lowercase string `S`, print each unique character that appears in `S` in **alphabetical order** followed by its count (e.g., `a:3 b:1`).\n\n**Input Format:**\n- A single lowercase string `S`\n\n**Output Format:**\n- Space-separated `char:count` pairs in alphabetical order.",
        "whyThisMatters": "Iterating `0..25` over a frequency array automatically processes characters in sorted alphabetical order!",
        "concepts": [
            "frequency array",
            "strings",
            "counting sort"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Populate a 26-element frequency array and iterate in alphabetical order"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "banana",
                "output": "a:3 b:1 n:2",
                "explanation": "a appears 3 times, b 1 time, n 2 times."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-10-tc1",
                "input": "banana",
                "expectedOutput": "a:3 b:1 n:2",
                "hidden": false
            },
            {
                "id": "amz-basic-10-tc2",
                "input": "amazon",
                "expectedOutput": "a:2 m:1 n:1 o:1 z:1",
                "hidden": false
            },
            {
                "id": "amz-basic-10-tc3",
                "input": "zzz",
                "expectedOutput": "z:3",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Count frequencies in int freq[26] and print non-zero entries\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Count frequencies in freq = [0]*26 and print non-zero entries\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "After counting `freq[0..25]`, loop `i` from `0` to `25`: if `freq[i] > 0`, print `char('a' + i) << \":\" << freq[i]`."
        ],
        "howToThink": [
            "A 26-bucket array acts as both a frequency table and a bucket sort!"
        ],
        "approach": "Count occurrences into `freq[26]`, then scan `0..25` and output non-zero buckets.",
        "pseudocode": "freq = [0]*26\nfor c in s: freq[c-'a'] += 1\nfor i in 0..25:\n    if freq[i] > 0: print(chr('a'+i) + \":\" + freq[i])",
        "explanation": "Runs in O(N + 26) = O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    int freq[26] = {0};\n    for (char c : s) freq[c - 'a']++;\n    bool first = true;\n    for (int i = 0; i < 26; i++) {\n        if (freq[i] > 0) {\n            if (!first) cout << \" \";\n            cout << char('a' + i) << \":\" << freq[i];\n            first = false;\n        }\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    freq = [0] * 26\n    for c in s:\n        freq[ord(c) - ord('a')] += 1\n    out = []\n    for i in range(26):\n        if freq[i] > 0:\n            out.append(f\"{chr(ord('a') + i)}:{freq[i]}\")\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Printing characters in the order they appear in S instead of alphabetical order 0..25."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-2",
            "26-bucket-frequency-counting",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-11",
        "levelId": "amz-basics",
        "title": "Step 11: Valid Anagram Check (Comparing Frequency Profiles)",
        "difficulty": "easy",
        "order": 11,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "Frequency Balance Check",
        "amazonContext": "Core subroutine for grouping similar search queries and package codes.",
        "description": "### Mini-Lesson: Frequency Balance Check\nTwo strings `S` and `T` are **anagrams** if they contain the exact same characters with the exact same frequencies. Using our 26-bucket array, increment `freq[c - 'a']++` for `S` and decrement `freq[c - 'a']--` for `T`. They are anagrams if and only if all 26 buckets end at `0`!\n\n**C++17 Idiom:**\n```cpp\nvector<int> freq(26, 0);\nfor (char c : s) freq[c - 'a']++;\nfor (char c : t) freq[c - 'a']--;\nbool ok = all_of(freq.begin(), freq.end(), [](int x){ return x == 0; });\n```\n\n**Python 3 Idiom:**\n```python\nfrom collections import Counter\nis_anagram = (Counter(s) == Counter(t))\n```\n\n---\n\n### Your Task\nGiven two lowercase strings `S` and `T`, print `true` if `T` is an anagram of `S`, otherwise print `false`.\n\n**Input Format:**\n- Two whitespace-separated strings `S` and `T`\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "Comparing 26-element frequency arrays in O(26) = O(1) is how sliding window anagram problems work.",
        "concepts": [
            "strings",
            "anagrams",
            "frequency array"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Verify anagram equivalence in O(N) time and O(1) space"
        ],
        "constraints": [
            "1 <= |S|, |T| <= 100,000"
        ],
        "examples": [
            {
                "input": "anagram nagaram",
                "output": "true",
                "explanation": "Both strings have identical character counts."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-11-tc1",
                "input": "anagram nagaram",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-11-tc2",
                "input": "rat car",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-11-tc3",
                "input": "listen silent",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string s, t;\n    if (!(cin >> s >> t)) return 0;\n    // Print true if s and t are anagrams, else false\n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if len(data) < 2: return\n    s, t = data[0], data[1]\n    # Print true if s and t are anagrams, else false\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "First check if `s.size() != t.size()`. Then compare their 26-letter frequency counts."
        ],
        "howToThink": [
            "Sorting both strings takes O(N log N), whereas counting frequencies takes O(N) time!"
        ],
        "approach": "Increment frequency for `s`, decrement for `t`, and verify all counts are zero.",
        "pseudocode": "if len(s) != len(t): return false\nfreq = [0]*26\nfor c in s: freq[c] += 1\nfor c in t: freq[c] -= 1\nreturn all(x == 0 for x in freq)",
        "explanation": "Runs in O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    string s, t;\n    if (!(cin >> s >> t)) return 0;\n    if (s.size() != t.size()) {\n        cout << \"false\\n\";\n        return 0;\n    }\n    int freq[26] = {0};\n    for (char c : s) freq[c - 'a']++;\n    for (char c : t) freq[c - 'a']--;\n    for (int i = 0; i < 26; i++) {\n        if (freq[i] != 0) {\n            cout << \"false\\n\";\n            return 0;\n        }\n    }\n    cout << \"true\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if len(data) < 2: return\n    s, t = data[0], data[1]\n    print(\"true\" if Counter(s) == Counter(t) else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Checking only if every character of S is in T without checking counts."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-2",
            "frequency-balance-check",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-12",
        "levelId": "amz-basics",
        "title": "Step 12: First Non-Repeating Character (Two-Pass Frequency Scan)",
        "difficulty": "easy",
        "order": 12,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "Two-Pass Frequency Lookup",
        "amazonContext": "Very common warm-up question in Amazon phone screens and OAs.",
        "description": "### Mini-Lesson: Two-Pass Frequency Lookup\nWhen you need the **first** character in a string that has a global property (like appearing only once in the entire string), use a **two-pass pattern**:\n- **Pass 1:** Count the frequency of every character.\n- **Pass 2:** Loop through the string `S` from index `0` to `N - 1` and return the first index `i` where `freq[S[i]] == 1`!\n\n**C++17 Idiom:**\n```cpp\nint freq[26] = {0};\nfor (char c : s) freq[c - 'a']++;\nfor (int i = 0; i < (int)s.size(); i++) {\n    if (freq[s[i] - 'a'] == 1) return i;\n}\n```\n\n**Python 3 Idiom:**\n```python\nfreq = Counter(s)\nfor i, c in enumerate(s):\n    if freq[c] == 1:\n        return i\n```\n\n---\n\n### Your Task\nGiven a lowercase string `S`, find the `0`-based index of its **first non-repeating character** (appears exactly once). If every character repeats, print `-1`.\n\n**Input Format:**\n- A single lowercase string `S`\n\n**Output Format:**\n- Print the 0-based index, or `-1`.",
        "whyThisMatters": "Teaches why two linear O(N) passes (`O(N) + O(N) = O(N)`) beat nested O(N^2) loops.",
        "concepts": [
            "strings",
            "frequency array",
            "two-pass"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Combine a frequency-counting pass with an index-order pass"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "amazon",
                "output": "1",
                "explanation": "'a' repeats twice, 'm' at index 1 appears only once."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-12-tc1",
                "input": "amazon",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "amz-basic-12-tc2",
                "input": "loveleetcode",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-basic-12-tc3",
                "input": "aabb",
                "expectedOutput": "-1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Pass 1: count frequencies. Pass 2: find first index with count 1.\n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Pass 1: count frequencies. Pass 2: find first index with count 1.\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "In Pass 2, iterate over the string indices `0 .. s.size()-1`, NOT over the alphabet `0 .. 25`."
        ],
        "howToThink": [
            "Iterating `0..25` gives the alphabetically smallest unique char; iterating `0..n-1` over `s` gives the FIRST unique char in string order."
        ],
        "approach": "Count all character frequencies in Pass 1, then scan `s` left-to-right in Pass 2.",
        "pseudocode": "freq = Counter(s)\nfor i in 0..len(s)-1:\n    if freq[s[i]] == 1: return i\nreturn -1",
        "explanation": "Two O(N) passes take O(N) total time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    int freq[26] = {0};\n    for (char c : s) freq[c - 'a']++;\n    for (int i = 0; i < (int)s.size(); i++) {\n        if (freq[s[i] - 'a'] == 1) {\n            cout << i << \"\\n\";\n            return 0;\n        }\n    }\n    cout << -1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    freq = Counter(s)\n    for i, c in enumerate(s):\n        if freq[c] == 1:\n            print(i)\n            return\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Looping `i` from 0 to 25 in the second pass instead of looping through the string `s`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-2",
            "two-pass-frequency-lookup",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-13",
        "levelId": "amz-basics",
        "title": "Step 13: Opposite-Ends Two Pointers — Palindrome Check",
        "difficulty": "beginner",
        "order": 13,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "Opposite-Ends Two Pointers",
        "amazonContext": "Introduces the inward two-pointer movement (`left++`, `right--`).",
        "description": "### Mini-Lesson: Opposite-Ends Two Pointers\nA string is a **palindrome** if it reads the same forwards and backwards. By placing `left = 0` at the start and `right = n - 1` at the end, we compare `s[left]` and `s[right]` and move both pointers inward (`left++`, `right--`) until `left >= right`.\n\n**C++17 Idiom:**\n```cpp\nint l = 0, r = (int)s.size() - 1;\nwhile (l < r) {\n    if (s[l] != s[r]) return false;\n    l++; r--;\n}\n```\n\n**Python 3 Idiom:**\n```python\nis_pal = (s == s[::-1])\n```\n\n---\n\n### Your Task\nGiven a string `S`, print `true` if it is a palindrome, or `false` otherwise.\n\n**Input Format:**\n- A single string `S`\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "The `while (left < right)` loop is the exact template used in Two Sum II, Container With Most Water, and Trapping Rain Water.",
        "concepts": [
            "two pointers",
            "strings",
            "palindrome"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use inward-moving left and right pointers to compare symmetric positions"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "racecar",
                "output": "true",
                "explanation": "racecar reads the same forwards and backwards."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-13-tc1",
                "input": "racecar",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-13-tc2",
                "input": "amazon",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-13-tc3",
                "input": "abba",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Check if s is a palindrome\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Check if s is a palindrome\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Compare `s[l]` and `s[r]` while `l < r`."
        ],
        "howToThink": [
            "We only need to check up to the middle (`l < r`), which does N/2 comparisons in O(1) extra space."
        ],
        "approach": "Move `l` from `0` and `r` from `n - 1` toward the center, checking `s[l] == s[r]`.",
        "pseudocode": "l = 0, r = len(s) - 1\nwhile l < r:\n    if s[l] != s[r]: return false\n    l += 1; r -= 1\nreturn true",
        "explanation": "Takes O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    int l = 0, r = (int)s.size() - 1;\n    while (l < r) {\n        if (s[l] != s[r]) {\n            cout << \"false\\n\";\n            return 0;\n        }\n        l++; r--;\n    }\n    cout << \"true\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    print(\"true\" if s == s[::-1] else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Continuing the loop after `l` and `r` cross."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-2",
            "opposite-ends-two-pointers",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-14",
        "levelId": "amz-basics",
        "title": "Step 14: Alphanumeric Filtering & Case-Insensitive Palindrome",
        "difficulty": "easy",
        "order": 14,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "Two Pointers with Character Skipping",
        "amazonContext": "Teaches C++ `isalnum()` / `tolower()` and Python `.isalnum()` / `.lower()` for messy log strings.",
        "description": "### Mini-Lesson: Two Pointers with Character Skipping\nReal input strings often contain spaces, punctuation, and mixed case. Both C++ (`<cctype>`) and Python provide built-in helpers:\n- Check letter or digit: `isalnum(c)` in C++, `c.isalnum()` in Python\n- Convert to lowercase: `tolower(c)` in C++, `c.lower()` in Python\n\n**C++17 Idiom:**\n```cpp\nwhile (l < r && !isalnum(s[l])) l++;\nwhile (l < r && !isalnum(s[r])) r--;\nif (tolower(s[l]) != tolower(s[r])) return false;\n```\n\n**Python 3 Idiom:**\n```python\ncleaned = [c.lower() for c in s if c.isalnum()]\nis_pal = (cleaned == cleaned[::-1])\n```\n\n---\n\n### Your Task\nGiven a line of text `S` (which may contain spaces and punctuation), determine if it is a palindrome after converting uppercase letters to lowercase and removing all non-alphanumeric characters. Print `true` or `false`.\n\n**Input Format:**\n- A single line of text `S`\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "Amazon log-processing questions frequently require filtering alphanumeric tokens and normalizing case.",
        "concepts": [
            "strings",
            "two pointers",
            "character filtering"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use isalnum and tolower to sanitize strings during traversal"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "A man, a plan, a canal: Panama",
                "output": "true",
                "explanation": "Cleaned string is \"amanaplanacanalpanama\", which is a palindrome."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-14-tc1",
                "input": "A man, a plan, a canal: Panama",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-14-tc2",
                "input": "race a car",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-14-tc3",
                "input": "No lemon, no melon!",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    // Check case-insensitive alphanumeric palindrome\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    if not s: return\n    # Check case-insensitive alphanumeric palindrome\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `getline(cin, s)` in C++ because the input contains spaces!"
        ],
        "howToThink": [
            "Either filter into a clean lowercase string first, or skip non-alphanumeric chars on the fly with two pointers."
        ],
        "approach": "Filter alphanumeric characters to lowercase and check if the sequence equals its reverse.",
        "pseudocode": "clean = [tolower(c) for c in s if isalnum(c)]\nprint(clean == reverse(clean))",
        "explanation": "Single pass O(N) time.",
        "cppSolution": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!getline(cin, s)) return 0;\n    int l = 0, r = (int)s.size() - 1;\n    while (l < r) {\n        while (l < r && !isalnum(static_cast<unsigned char>(s[l]))) l++;\n        while (l < r && !isalnum(static_cast<unsigned char>(s[r]))) r--;\n        if (tolower(static_cast<unsigned char>(s[l])) != tolower(static_cast<unsigned char>(s[r]))) {\n            cout << \"false\\n\";\n            return 0;\n        }\n        l++; r--;\n    }\n    cout << \"true\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read()\n    if not s: return\n    clean = [c.lower() for c in s if c.isalnum()]\n    print(\"true\" if clean == clean[::-1] else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `cin >> s` instead of `getline(cin, s)`, which stops reading at the first space!"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-2",
            "two-pointers-with-character-skipping",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-15",
        "levelId": "amz-basics",
        "title": "Step 15: Splitting Log Lines into Identifier and Payload",
        "difficulty": "easy",
        "order": 15,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "First-Delimiter String Splitting",
        "amazonContext": "Direct building block for Amazon OA 8: Reorder AWS CloudWatch Log Files.",
        "description": "### Mini-Lesson: First-Delimiter String Splitting\nIn Amazon log problems, each line has the format `\"id word1 word2 ...\"`. You need to split the string at the **first space only** into `(identifier, content)`:\n- In C++: `size_t pos = line.find(' '); string id = line.substr(0, pos); string content = line.substr(pos + 1);`\n- In Python: `ident, content = line.split(\" \", 1)` (the `1` means split at most once!)\n\n**C++17 Idiom:**\n```cpp\nsize_t pos = line.find(' ');\nstring id = line.substr(0, pos);\nstring content = line.substr(pos + 1);\n```\n\n**Python 3 Idiom:**\n```python\nident, content = line.split(\" \", 1)\n```\n\n---\n\n### Your Task\nGiven a single log line `\"id word1 word2 ...\"`, split it at the first space and print `content [id]`.\n\n**Input Format:**\n- A single line containing an identifier followed by a space and one or more words\n\n**Output Format:**\n- Print `content [id]`.",
        "whyThisMatters": "Knowing `line.find(' ')` + `substr` in C++ and `line.split(\" \", 1)` in Python makes Amazon OA 8 (Reorder Log Files) effortless.",
        "concepts": [
            "strings",
            "string parsing",
            "substr"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Split a string at its first space into identifier and remaining payload"
        ],
        "constraints": [
            "3 <= |line| <= 1,000"
        ],
        "examples": [
            {
                "input": "let1 art can zero",
                "output": "art can zero [let1]",
                "explanation": "Identifier is \"let1\" and content is \"art can zero\"."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-15-tc1",
                "input": "let1 art can zero",
                "expectedOutput": "art can zero [let1]",
                "hidden": false
            },
            {
                "id": "amz-basic-15-tc2",
                "input": "srv99 connection timeout",
                "expectedOutput": "connection timeout [srv99]",
                "hidden": false
            },
            {
                "id": "amz-basic-15-tc3",
                "input": "id1 hello",
                "expectedOutput": "hello [id1]",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    // Split at the first space and print: content [id]\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    line = sys.stdin.read().strip()\n    if not line: return\n    # Split at the first space and print: content [id]\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `line.find(' ')` in C++ or `line.split(\" \", 1)` in Python."
        ],
        "howToThink": [
            "Splitting on all spaces loses the grouped payload; splitting only at the first space keeps the entire payload intact."
        ],
        "approach": "Locate the first space and slice the string before and after that index.",
        "pseudocode": "pos = line.find(' ')\nid = line[0:pos], content = line[pos+1:]\nprint(f\"{content} [{id}]\")",
        "explanation": "Runs in O(N) time.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    if (!getline(cin, line)) return 0;\n    if (!line.empty() && line.back() == '\\r') line.pop_back();\n    size_t pos = line.find(' ');\n    string id = line.substr(0, pos);\n    string content = line.substr(pos + 1);\n    cout << content << \" [\" << id << \"]\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    line = sys.stdin.read().strip()\n    if not line: return\n    ident, content = line.split(\" \", 1)\n    print(f\"{content} [{ident}]\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `line.split()` without `maxsplit=1` and losing the multi-word content."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-2",
            "first-delimiter-string-splitting",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-16",
        "levelId": "amz-basics",
        "title": "Step 16: Run-Length String Compression (Grouping Consecutive Streaks)",
        "difficulty": "easy",
        "order": 16,
        "stageNum": 2,
        "stageTitle": "Stage 2: Strings, ASCII Math & Frequency Arrays",
        "pattern": "Consecutive Run Grouping",
        "amazonContext": "Asked in Amazon string encoding and packet stream compression OA questions.",
        "description": "### Mini-Lesson: Consecutive Run Grouping\nTo process streaks of identical consecutive characters (like `\"aaabbc\"` -> `\"a3b2c1\"`), use a pointer `i = 0`. For each group, advance `j = i` while `j < n && s[j] == s[i]`. The streak length is `j - i`, and then you jump `i = j`!\n\n**C++17 Idiom:**\n```cpp\nfor (int i = 0; i < n; ) {\n    int j = i;\n    while (j < n && s[j] == s[i]) j++;\n    out += s[i] + to_string(j - i);\n    i = j;\n}\n```\n\n**Python 3 Idiom:**\n```python\ni = 0\nwhile i < n:\n    j = i\n    while j < n and s[j] == s[i]:\n        j += 1\n    out.append(f\"{s[i]}{j - i}\")\n    i = j\n```\n\n---\n\n### Your Task\nGiven a string `S`, compress each consecutive streak of identical characters into `<char><count>` (e.g., `\"aaabbc\"` -> `\"a3b2c1\"`).\n\n**Input Format:**\n- A single non-empty string `S`\n\n**Output Format:**\n- Print the run-length encoded string.",
        "whyThisMatters": "The two-pointer group-jumping loop (`while j < n and s[j] == s[i]: j++`) handles contiguous streaks cleanly without off-by-one bugs.",
        "concepts": [
            "strings",
            "two pointers",
            "run-length encoding"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Group consecutive identical elements using the i = j streak-jumping pattern"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "aaabbc",
                "output": "a3b2c1",
                "explanation": "3 a's, 2 b's, 1 c."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-16-tc1",
                "input": "aaabbc",
                "expectedOutput": "a3b2c1",
                "hidden": false
            },
            {
                "id": "amz-basic-16-tc2",
                "input": "wwwwaaadexxxxxx",
                "expectedOutput": "w4a3d1e1x6",
                "hidden": false
            },
            {
                "id": "amz-basic-16-tc3",
                "input": "a",
                "expectedOutput": "a1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Compress consecutive streaks into char + count\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Compress consecutive streaks into char + count\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use the `while (j < n && s[j] == s[i]) j++;` streak loop so you never forget to output the last group!"
        ],
        "howToThink": [
            "Even though there is a `while` loop inside the `for` loop, `j` only moves forward, so every character is visited once in O(N) time."
        ],
        "approach": "Use streak pointer `j` to measure each run of `s[i]`, append `s[i]` and `j - i`, and set `i = j`.",
        "pseudocode": "i = 0\nwhile i < n:\n    j = i\n    while j < n and s[j] == s[i]: j += 1\n    res += s[i] + str(j - i)\n    i = j",
        "explanation": "Runs in O(N) time and space.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    int n = (int)s.size();\n    string res;\n    for (int i = 0; i < n; ) {\n        int j = i;\n        while (j < n && s[j] == s[i]) j++;\n        res += s[i];\n        res += to_string(j - i);\n        i = j;\n    }\n    cout << res << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    n = len(s)\n    out = []\n    i = 0\n    while i < n:\n        j = i\n        while j < n and s[j] == s[i]:\n            j += 1\n        out.append(f\"{s[i]}{j - i}\")\n        i = j\n    print(\"\".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Comparing `s[i] == s[i - 1]` and forgetting to flush the final character group after the loop ends."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-2",
            "consecutive-run-grouping",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-17",
        "levelId": "amz-basics",
        "title": "Step 17: Hash Set Membership — Detecting Duplicates in O(N)",
        "difficulty": "beginner",
        "order": 17,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Hash Set O(1) Lookup",
        "amazonContext": "Replaces O(N^2) nested duplicate checks with O(N) hash set lookups.",
        "description": "### Mini-Lesson: Hash Set O(1) Lookup\nChecking if an element already exists in a list takes `O(N)` time, which makes checking all elements `O(N^2)`. A **Hash Set** (`unordered_set<long long>` in C++, `set()` in Python) checks membership and inserts in `O(1)` average time!\n\n**C++17 Idiom:**\n```cpp\nunordered_set<long long> seen;\nfor (long long x : a) {\n    if (seen.count(x)) return true;\n    seen.insert(x);\n}\n```\n\n**Python 3 Idiom:**\n```python\nseen = set()\nfor x in a:\n    if x in seen:\n        return True\n    seen.add(x)\n```\n\n---\n\n### Your Task\nGiven `N` package tracking numbers, print `true` if any tracking number appears at least twice, or `false` if all are distinct.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "Hash Sets are the fastest way to track visited states or detect duplicates in O(N) time.",
        "concepts": [
            "hash set",
            "duplicates",
            "complexity"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use unordered_set in C++ and set in Python for O(1) membership checks"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n1 2 3 1",
                "output": "true",
                "explanation": "1 appears twice."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-17-tc1",
                "input": "4\n1 2 3 1",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-17-tc2",
                "input": "4\n1 2 3 4",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-17-tc3",
                "input": "5\n10 20 30 40 20",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    // Use unordered_set to detect any duplicate\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Use a set to detect any duplicate\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "In Python, `len(set(a)) != len(a)` also tells you immediately if there is a duplicate!"
        ],
        "howToThink": [
            "Whenever you ask \"Have I seen X before?\", reach for a Hash Set."
        ],
        "approach": "Insert elements into a hash set and check if any element is already present.",
        "pseudocode": "seen = set()\nfor x in a:\n    if x in seen: return true\n    seen.add(x)\nreturn false",
        "explanation": "Runs in O(N) average time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    unordered_set<long long> seen;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        if (seen.count(x)) {\n            cout << \"true\\n\";\n            return 0;\n        }\n        seen.insert(x);\n    }\n    cout << \"false\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = data[1:1+n]\n    print(\"true\" if len(set(a)) < len(a) else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Checking `x in list` in Python, which is O(N) per lookup instead of O(1) with `set`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "hash-set-o-1-lookup",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-18",
        "levelId": "amz-basics",
        "title": "Step 18: Order-Preserving Deduplication with a Hash Set",
        "difficulty": "easy",
        "order": 18,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Seen-Set Filtering",
        "amazonContext": "Used when filtering duplicate customer events while keeping arrival order.",
        "description": "### Mini-Lesson: Seen-Set Filtering\nA Hash Set by itself is unordered, so iterating over `unordered_set` or `set` scrambles the original order. To remove duplicates **while preserving original first-appearance order**, iterate through the original array and only output `x` the first time `!seen.count(x)`!\n\n**C++17 Idiom:**\n```cpp\nunordered_set<long long> seen;\nfor (long long x : a) {\n    if (seen.insert(x).second) {\n        cout << x << \" \";\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nseen = set()\nout = []\nfor x in a:\n    if x not in seen:\n        seen.add(x)\n        out.append(x)\n```\n\n---\n\n### Your Task\nGiven `N` integers, remove all duplicate occurrences while keeping each distinct number in the **exact order of its first appearance**.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Space-separated unique integers in first-appearance order.",
        "whyThisMatters": "Preserving chronological order while deduplicating is a standard requirement in Amazon log processing.",
        "concepts": [
            "hash set",
            "deduplication",
            "order preservation"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Combine linear array iteration with a seen set to preserve order"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "7\n4 2 4 1 2 9 1",
                "output": "4 2 1 9",
                "explanation": "First appearances are 4, then 2, then 1, then 9."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-18-tc1",
                "input": "7\n4 2 4 1 2 9 1",
                "expectedOutput": "4 2 1 9",
                "hidden": false
            },
            {
                "id": "amz-basic-18-tc2",
                "input": "5\n5 5 5 5 5",
                "expectedOutput": "5",
                "hidden": false
            },
            {
                "id": "amz-basic-18-tc3",
                "input": "4\n9 8 7 6",
                "expectedOutput": "9 8 7 6",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    // Print each number only on its first appearance\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Print each number only on its first appearance\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check `if (seen.find(x) == seen.end())`, then insert `x` into `seen` and print `x`."
        ],
        "howToThink": [
            "Do NOT iterate over the set at the end; print elements as you scan the original list!"
        ],
        "approach": "Scan the array left-to-right, printing and recording elements not yet in `seen`.",
        "pseudocode": "seen = set(), out = []\nfor x in a:\n    if x not in seen:\n        seen.add(x)\n        out.append(x)\nprint(out)",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    unordered_set<long long> seen;\n    bool first = true;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        if (seen.insert(x).second) {\n            if (!first) cout << \" \";\n            cout << x;\n            first = false;\n        }\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    seen = set()\n    out = []\n    for x in data[1:1+n]:\n        if x not in seen:\n            seen.add(x)\n            out.append(x)\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Printing `set(a)` directly, which loses the original order of appearance."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "seen-set-filtering",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-19",
        "levelId": "amz-basics",
        "title": "Step 19: Hash Map Frequency Table — Finding the Most Frequent Item",
        "difficulty": "easy",
        "order": 19,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Hash Map Counting with Tie-Breaker",
        "amazonContext": "Core building block for Amazon best-seller and warehouse frequency problems.",
        "description": "### Mini-Lesson: Hash Map Counting with Tie-Breaker\nWhen array values can be large integers (`10^9`) or strings, we cannot use a 26-element array. Instead, use a **Hash Map** (`unordered_map<long long, int>` in C++, `Counter` or `dict` in Python) to map each key to its count in `O(1)` average time!\n\n**C++17 Idiom:**\n```cpp\nunordered_map<long long, int> freq;\nfor (long long x : a) freq[x]++;\n// Find key with max count (tie-break by smaller key)\n```\n\n**Python 3 Idiom:**\n```python\nfrom collections import Counter\nfreq = Counter(a)\nbest_key = min(freq.keys(), key=lambda k: (-freq[k], k))\n```\n\n---\n\n### Your Task\nGiven `N` product IDs, find the product ID that appears most frequently. If there is a tie, output the **smallest product ID** among tied winners, followed by its frequency.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `best_id max_count` separated by a space.",
        "whyThisMatters": "Prepares you for Top-K Frequent Items and Amazon OA 3 (Minimum Delivery Rounds).",
        "concepts": [
            "hash maps",
            "frequency counting",
            "tie-breaking"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Count arbitrary integers using unordered_map / Counter and resolve ties"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "6\n40 10 40 20 10 30",
                "output": "10 2",
                "explanation": "Both 10 and 40 appear 2 times; 10 is smaller."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-19-tc1",
                "input": "6\n40 10 40 20 10 30",
                "expectedOutput": "10 2",
                "hidden": false
            },
            {
                "id": "amz-basic-19-tc2",
                "input": "5\n7 7 7 2 2",
                "expectedOutput": "7 3",
                "hidden": false
            },
            {
                "id": "amz-basic-19-tc3",
                "input": "4\n99 88 77 66",
                "expectedOutput": "66 1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    // Count frequencies and print: best_id max_count\n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Count frequencies and print: best_id max_count\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Update `best_id` when `count > best_count || (count == best_count && id < best_id)`."
        ],
        "howToThink": [
            "Combine the two conditions (`count > best_count` OR `count == best_count && id < best_id`) into a single check."
        ],
        "approach": "Aggregate counts in a hash map, then scan `(id, count)` pairs to find the best pair.",
        "pseudocode": "freq = Counter(a)\nbest_id = None, best_cnt = -1\nfor id, cnt in freq:\n    if cnt > best_cnt or (cnt == best_cnt and id < best_id):\n        best_id, best_cnt = id, cnt\nprint(best_id, best_cnt)",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    unordered_map<long long, int> freq;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        freq[x]++;\n    }\n    long long bestId = 0;\n    int bestCnt = -1;\n    for (const auto& [id, cnt] : freq) {\n        if (cnt > bestCnt || (cnt == bestCnt && id < bestId)) {\n            bestCnt = cnt;\n            bestId = id;\n        }\n    }\n    cout << bestId << \" \" << bestCnt << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    freq = Counter(int(x) for x in data[1:1+n])\n    best_id, best_cnt = min(freq.items(), key=lambda kv: (-kv[1], kv[0]))\n    print(f\"{best_id} {best_cnt}\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Ignoring the tie-breaking rule when two keys have the same maximum frequency."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "hash-map-counting-with-tie-breaker",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-20",
        "levelId": "amz-basics",
        "title": "Step 20: Complement Hash Map Lookup — Two Sum Indices",
        "difficulty": "easy",
        "order": 20,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Hash Map Complement Lookup (target - x)",
        "amazonContext": "One of the most famous interview patterns of all time: finding a complement in O(1).",
        "description": "### Mini-Lesson: Hash Map Complement Lookup (target - x)\nTo find two numbers `a[i] + a[j] = target` without an `O(N^2)` nested loop, ask at each element `x = a[i]`: *\"Have I already seen `need = target - x` earlier in the array?\"*\n\nStore each number's index in a Hash Map `seen_index[x] = i` as you scan!\n\n**C++17 Idiom:**\n```cpp\nunordered_map<long long, int> pos;\nfor (int i = 0; i < n; i++) {\n    long long need = target - a[i];\n    if (pos.count(need)) { cout << pos[need] << \" \" << i; return 0; }\n    pos[a[i]] = i;\n}\n```\n\n**Python 3 Idiom:**\n```python\npos = {}\nfor i, x in enumerate(a):\n    need = target - x\n    if need in pos:\n        print(pos[need], i)\n        return\n    pos[x] = i\n```\n\n---\n\n### Your Task\nGiven `N` integers and a `target` sum, find the `0`-based indices `i < j` of the two elements that sum to `target`. Print `i j`, or `-1` if no such pair exists.\n\n**Input Format:**\n- Line 1: `N` and `target`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `i j` (`i < j`), or `-1`.",
        "whyThisMatters": "The complement lookup `need = target - current` is also how Subarray Sum Equals K works!",
        "concepts": [
            "hash maps",
            "two sum",
            "complements"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Check for target - x in the hash map before inserting x"
        ],
        "constraints": [
            "2 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4 9\n2 7 11 15",
                "output": "0 1",
                "explanation": "a[0] + a[1] = 2 + 7 = 9."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-20-tc1",
                "input": "4 9\n2 7 11 15",
                "expectedOutput": "0 1",
                "hidden": false
            },
            {
                "id": "amz-basic-20-tc2",
                "input": "3 6\n3 2 4",
                "expectedOutput": "1 2",
                "hidden": false
            },
            {
                "id": "amz-basic-20-tc3",
                "input": "3 10\n1 2 3",
                "expectedOutput": "-1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    // Use unordered_map to find pair summing to target\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Use a dict to find pair summing to target\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check if `target - a[i]` is in `pos` BEFORE setting `pos[a[i]] = i` so you never pair an element with itself!"
        ],
        "howToThink": [
            "By checking before inserting, `pos[need]` is guaranteed to be an index strictly less than `i`."
        ],
        "approach": "Maintain a map of `value -> index` and check for `target - a[i]` at each step.",
        "pseudocode": "pos = {}\nfor i, x in enumerate(a):\n    if target - x in pos: return pos[target - x], i\n    pos[x] = i\nreturn -1",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    unordered_map<long long, int> pos;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        long long need = target - x;\n        if (pos.count(need)) {\n            cout << pos[need] << \" \" << i << \"\\n\";\n            return 0;\n        }\n        if (!pos.count(x)) pos[x] = i;\n    }\n    cout << -1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    pos = {}\n    for i, x in enumerate(a):\n        need = target - x\n        if need in pos:\n            print(f\"{pos[need]} {i}\")\n            return\n        if x not in pos:\n            pos[x] = i\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Inserting `pos[x] = i` before checking `target - x`, which fails when `target = 2 * x`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "hash-map-complement-lookup-target-x-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-21",
        "levelId": "amz-basics",
        "title": "Step 21: Subarray Sum Equals K (Prefix Sum + Hash Map)",
        "difficulty": "medium",
        "order": 21,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Prefix Sum + Complement Frequency Map",
        "amazonContext": "Combines Stage 1 (Prefix Sums) and Stage 3 (Hash Map Complements) — a classic Amazon OA favorite!",
        "description": "### Mini-Lesson: Prefix Sum + Complement Frequency Map\nHow many contiguous subarrays sum to `K` when the array can contain **negative** numbers? Since a subarray sum is `pref[R] - pref[L] = K`, rearranging gives:\n\n`pref[L] = pref[R] - K`\n\nAs we compute the running `pref` sum, we ask our Hash Map: *\"How many earlier prefix sums equal `pref - K`?\"* Make sure to initialize `freq[0] = 1` for the empty prefix!\n\n**C++17 Idiom:**\n```cpp\nunordered_map<long long, long long> freq;\nfreq[0] = 1;\nlong long pref = 0, ans = 0;\nfor (long long x : a) {\n    pref += x;\n    if (freq.count(pref - k)) ans += freq[pref - k];\n    freq[pref]++;\n}\n```\n\n**Python 3 Idiom:**\n```python\nfreq = {0: 1}\npref = 0\nans = 0\nfor x in a:\n    pref += x\n    ans += freq.get(pref - k, 0)\n    freq[pref] = freq.get(pref, 0) + 1\n```\n\n---\n\n### Your Task\nGiven `N` integers (which may be negative, zero, or positive) and an integer `K`, count the total number of contiguous subarrays whose sum equals `K`.\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the number of contiguous subarrays summing to `K`.",
        "whyThisMatters": "Sliding window fails when negative numbers exist, whereas Prefix Sum + Hash Map works for any integers in O(N) time!",
        "concepts": [
            "prefix sums",
            "hash maps",
            "subarray sum"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Seed freq[0] = 1 and count prefix sum complements pref - K"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "3 2\n1 1 1",
                "output": "2",
                "explanation": "Subarrays [1,1] at indices [0..1] and [1..2] both sum to 2."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-21-tc1",
                "input": "3 2\n1 1 1",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-basic-21-tc2",
                "input": "3 3\n1 2 3",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-basic-21-tc3",
                "input": "5 0\n1 -1 1 -1 1",
                "expectedOutput": "6",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n; long long k;\n    if (!(cin >> n >> k)) return 0;\n    // Seed freq[0] = 1 and count subarrays summing to k\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Seed freq = {0: 1} and count subarrays summing to k\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Remember `freq[0] = 1` before the loop starts so subarrays starting at index 0 are counted!"
        ],
        "howToThink": [
            "This is literally Two Sum on prefix sums: we want `pref[R] - pref[L] == K`, so we look up `pref[R] - K` in our frequency map of previous prefix sums."
        ],
        "approach": "Maintain running prefix sum and a hash map of prefix sum frequencies initialized with `{0: 1}`.",
        "pseudocode": "freq = {0: 1}, pref = 0, ans = 0\nfor x in a:\n    pref += x\n    ans += freq.get(pref - k, 0)\n    freq[pref] += 1\nprint(ans)",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n; long long k;\n    if (!(cin >> n >> k)) return 0;\n    unordered_map<long long, long long> freq;\n    freq[0] = 1;\n    long long pref = 0, ans = 0;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pref += x;\n        auto it = freq.find(pref - k);\n        if (it != freq.end()) ans += it->second;\n        freq[pref]++;\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    freq = {0: 1}\n    pref = 0\n    ans = 0\n    for x in data[2:2+n]:\n        pref += int(x)\n        ans += freq.get(pref - k, 0)\n        freq[pref] = freq.get(pref, 0) + 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting `freq[0] = 1`, which misses every valid subarray that starts at index 0."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "prefix-sum-complement-frequency-map",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-22",
        "levelId": "amz-basics",
        "title": "Step 22: Custom Sorting — Sorting by Absolute Value with Tie-Breaker",
        "difficulty": "easy",
        "order": 22,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Custom Comparator / Lambda Key",
        "amazonContext": "Teaches custom lambda sorting in C++ `std::sort` and Python `sorted(key=...)`.",
        "description": "### Mini-Lesson: Custom Comparator / Lambda Key\nStandard sorting puts numbers in ascending order. What if we want to sort numbers by their **absolute value** ascending, and if two numbers have the same absolute value (like `-5` and `5`), put the **smaller actual value** (`-5`) first?\n- In C++: pass a lambda `[](long long a, long long b) { ... }` to `sort()`.\n- In Python: pass a tuple key `key=lambda x: (abs(x), x)` to `.sort()`!\n\n**C++17 Idiom:**\n```cpp\nsort(a.begin(), a.end(), [](long long x, long long y) {\n    if (abs(x) != abs(y)) return abs(x) < abs(y);\n    return x < y;\n});\n```\n\n**Python 3 Idiom:**\n```python\na.sort(key=lambda x: (abs(x), x))\n```\n\n---\n\n### Your Task\nGiven `N` integers, sort them by `abs(x)` ascending. If two integers have the same absolute value, place the smaller integer first (e.g., `-3` before `3`).\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the `N` sorted integers separated by spaces.",
        "whyThisMatters": "Tuple keys in Python and lambda comparators in C++ are essential for sorting intervals, points, and logs.",
        "concepts": [
            "sorting",
            "custom comparator",
            "lambda"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Write a two-key custom comparator in C++ and Python"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "5\n-5 2 -2 5 0",
                "output": "0 -2 2 -5 5",
                "explanation": "Sorted by |x|: 0, then -2 and 2, then -5 and 5."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-22-tc1",
                "input": "5\n-5 2 -2 5 0",
                "expectedOutput": "0 -2 2 -5 5",
                "hidden": false
            },
            {
                "id": "amz-basic-22-tc2",
                "input": "4\n10 -3 3 -1",
                "expectedOutput": "-1 -3 3 10",
                "hidden": false
            },
            {
                "id": "amz-basic-22-tc3",
                "input": "3\n-7 -2 -9",
                "expectedOutput": "-2 -7 -9",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Sort by (abs(x), x) and print\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Sort by (abs(x), x) and print\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "In C++, use `llabs(x)` for 64-bit absolute value."
        ],
        "howToThink": [
            "Check the primary key first (`abs(x) != abs(y)`). Only if they are equal, compare the secondary key (`x < y`)."
        ],
        "approach": "Sort using `(abs(x), x)` as the comparison key.",
        "pseudocode": "sort a by (abs(x), x)\nprint(a)",
        "explanation": "Takes O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <cstdlib>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    sort(a.begin(), a.end(), [](long long x, long long y) {\n        if (llabs(x) != llabs(y)) return llabs(x) < llabs(y);\n        return x < y;\n    });\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << \" \";\n        cout << a[i];\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    a.sort(key=lambda x: (abs(x), x))\n    print(\" \".join(str(x) for x in a))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `<=` instead of strict `<` inside a C++ `std::sort` comparator (which violates strict weak ordering and causes undefined behavior!)."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-3",
            "custom-comparator-lambda-key",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-23",
        "levelId": "amz-basics",
        "title": "Step 23: Sorting Pairs — Score Descending, ID Ascending",
        "difficulty": "easy",
        "order": 23,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Multi-Criteria Pair Sorting",
        "amazonContext": "Directly used in Amazon leaderboards, warehouse priority queues, and K-Closest problems.",
        "description": "### Mini-Lesson: Multi-Criteria Pair Sorting\nIn Amazon interviews, you frequently sort pairs `(id, score)` where **higher score comes first** (`score` descending), and ties are broken by **smaller ID first** (`id` ascending):\n- In C++: `if (a.second != b.second) return a.second > b.second; return a.first < b.first;`\n- In Python: `key=lambda p: (-p[1], p[0])`\n\n**C++17 Idiom:**\n```cpp\nsort(items.begin(), items.end(), [](const auto& a, const auto& b) {\n    if (a.second != b.second) return a.second > b.second;\n    return a.first < b.first;\n});\n```\n\n**Python 3 Idiom:**\n```python\nitems.sort(key=lambda p: (-p[1], p[0]))\n```\n\n---\n\n### Your Task\nGiven `N` pairs of `(id, score)`, sort them by `score` descending (and by `id` ascending if scores are equal), then print the sorted `id`s separated by spaces.\n\n**Input Format:**\n- Line 1: integer `N`\n- Next `N` lines: two integers `id` and `score`\n\n**Output Format:**\n- Print the `N` sorted `id`s on a single line separated by spaces.",
        "whyThisMatters": "Once you master `(-score, id)` sorting, Step 24 (Top-K Frequent Items) becomes a 3-line combination!",
        "concepts": [
            "sorting",
            "pairs",
            "comparators"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Sort pairs by primary key descending and secondary key ascending"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n102 85\n101 95\n105 85\n103 95",
                "output": "101 103 102 105",
                "explanation": "Score 95: 101 then 103. Score 85: 102 then 105."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-23-tc1",
                "input": "4\n102 85\n101 95\n105 85\n103 95",
                "expectedOutput": "101 103 102 105",
                "hidden": false
            },
            {
                "id": "amz-basic-23-tc2",
                "input": "3\n3 10\n1 10\n2 10",
                "expectedOutput": "1 2 3",
                "hidden": false
            },
            {
                "id": "amz-basic-23-tc3",
                "input": "2\n10 50\n20 100",
                "expectedOutput": "20 10",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> items(n);\n    for (int i = 0; i < n; i++) cin >> items[i].first >> items[i].second;\n    // Sort by score DESC, id ASC and print ids\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    # Parse pairs, sort by (-score, id), and print ids\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Negating a numeric score `-score` in Python turns descending sort into ascending sort!"
        ],
        "howToThink": [
            "Keep the comparator simple: compare scores first (`>`), then IDs (`<`)."
        ],
        "approach": "Read `(id, score)` pairs, sort with custom comparator, and print `id`s.",
        "pseudocode": "sort items by (-score, id)\nprint [id for id, score in items]",
        "explanation": "Runs in O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> items(n);\n    for (int i = 0; i < n; i++) cin >> items[i].first >> items[i].second;\n    sort(items.begin(), items.end(), [](const auto& a, const auto& b) {\n        if (a.second != b.second) return a.second > b.second;\n        return a.first < b.first;\n    });\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << \" \";\n        cout << items[i].first;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    items = []\n    idx = 1\n    for _ in range(n):\n        items.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n    items.sort(key=lambda p: (-p[1], p[0]))\n    print(\" \".join(str(p[0]) for p in items))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Sorting by ID first instead of score first."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "multi-criteria-pair-sorting",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-24",
        "levelId": "amz-basics",
        "title": "Step 24: Stage 3 Boss — Top-K Frequent Items with Tie-Breaker",
        "difficulty": "easy",
        "order": 24,
        "stageNum": 3,
        "stageTitle": "Stage 3: Hash Maps, Sets & Custom Tie-Breaker Sorting",
        "pattern": "Hash Map + Custom Pair Sort",
        "amazonContext": "Combines Step 19 (Hash Map Counting) + Step 23 (Custom Pair Sorting) — a classic Amazon OA question!",
        "description": "### Mini-Lesson: Hash Map + Custom Pair Sort\nNow combine what you learned in Step 19 and Step 23:\n1. Count occurrences of each item using a Hash Map (`freq[x]++`).\n2. Copy the `(id, count)` pairs into a list/vector and sort by `count` descending, then `id` ascending.\n3. Print the first `K` item IDs!\n\n**C++17 Idiom:**\n```cpp\nunordered_map<int, int> freq;\nfor (int x : nums) freq[x]++;\nvector<pair<int, int>> items(freq.begin(), freq.end());\nsort(items.begin(), items.end(), [](const auto& a, const auto& b) {\n    if (a.second != b.second) return a.second > b.second;\n    return a.first < b.first;\n});\n```\n\n**Python 3 Idiom:**\n```python\nfreq = Counter(nums)\nsorted_items = sorted(freq.items(), key=lambda x: (-x[1], x[0]))\nans = [item[0] for item in sorted_items[:k]]\n```\n\n---\n\n### Your Task\nGiven `N` purchased product IDs and an integer `K`, output the `K` most frequent product IDs (breaking ties by smaller product ID first).\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the top `K` product IDs separated by spaces.",
        "whyThisMatters": "Notice how easy this problem feels now that you already mastered Step 19 and Step 23 separately!",
        "concepts": [
            "hash maps",
            "sorting",
            "top-k"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Chain frequency counting with custom sorting to extract top-K elements"
        ],
        "constraints": [
            "1 <= K <= distinct elements <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "7 2\n30 10 20 10 30 20 20",
                "output": "20 10",
                "explanation": "20 appears 3 times; 10 and 30 appear 2 times (10 < 30)."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-24-tc1",
                "input": "7 2\n30 10 20 10 30 20 20",
                "expectedOutput": "20 10",
                "hidden": false
            },
            {
                "id": "amz-basic-24-tc2",
                "input": "5 3\n5 4 3 2 1",
                "expectedOutput": "1 2 3",
                "hidden": false
            },
            {
                "id": "amz-basic-24-tc3",
                "input": "6 1\n9 9 8 8 7 7",
                "expectedOutput": "7",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    // Count frequencies, sort by (-freq, id), and print first k ids\n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    nums = [int(x) for x in data[2:2+n]]\n    # Count frequencies, sort by (-freq, id), and print first k ids\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Build `freq` map first, then move pairs into a vector/list and apply the exact sort from Step 23."
        ],
        "howToThink": [
            "Step 1: Aggregate into unique `(id, count)` pairs. Step 2: Sort pairs. Step 3: Slice first `K`."
        ],
        "approach": "Count frequencies in O(N), sort unique pairs in O(U log U), and output the first K keys.",
        "pseudocode": "freq = Counter(nums)\nitems = sorted(freq.items(), key=lambda x: (-x[1], x[0]))\nprint first K keys",
        "explanation": "Runs in O(N log N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    unordered_map<int, int> freq;\n    for (int i = 0; i < n; i++) {\n        int x; cin >> x;\n        freq[x]++;\n    }\n    vector<pair<int, int>> items(freq.begin(), freq.end());\n    sort(items.begin(), items.end(), [](const auto& a, const auto& b) {\n        if (a.second != b.second) return a.second > b.second;\n        return a.first < b.first;\n    });\n    for (int i = 0; i < k && i < (int)items.size(); i++) {\n        if (i > 0) cout << \" \";\n        cout << items[i].first;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    nums = [int(x) for x in data[2:2+n]]\n    freq = Counter(nums)\n    items = sorted(freq.items(), key=lambda x: (-x[1], x[0]))\n    print(\" \".join(str(x[0]) for x in items[:k]))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting the tie-breaker when two items have identical frequency."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-3",
            "hash-map-custom-pair-sort",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-25",
        "levelId": "amz-basics",
        "title": "Step 25: Two Pointers on a Sorted Array — Pair Sum Target",
        "difficulty": "easy",
        "order": 25,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Converging Two Pointers (Sorted Array)",
        "amazonContext": "Saves O(N) hash map memory when the input array is already sorted.",
        "description": "### Mini-Lesson: Converging Two Pointers (Sorted Array)\nWhen an array is **sorted in ascending order**, you can find a pair summing to `target` in `O(N)` time and `O(1)` extra space using two pointers `left = 0` and `right = n - 1`:\n- If `a[left] + a[right] < target`, we need a larger sum, so increment `left++`.\n- If `a[left] + a[right] > target`, we need a smaller sum, so decrement `right--`.\n\n**C++17 Idiom:**\n```cpp\nint l = 0, r = n - 1;\nwhile (l < r) {\n    long long sum = a[l] + a[r];\n    if (sum == target) { cout << l << \" \" << r; return 0; }\n    if (sum < target) l++; else r--;\n}\n```\n\n**Python 3 Idiom:**\n```python\nl, r = 0, n - 1\nwhile l < r:\n    s = a[l] + a[r]\n    if s == target: return l, r\n    if s < target: l += 1\n    else: r -= 1\n```\n\n---\n\n### Your Task\nGiven a **sorted** array of `N` integers and a `target` sum, find the `0`-based indices `l < r` such that `a[l] + a[r] == target`. Print `l r`, or `-1` if no pair exists.\n\n**Input Format:**\n- Line 1: `N` and `target`\n- Line 2: `N` sorted integers\n\n**Output Format:**\n- Print `l r`, or `-1`.",
        "whyThisMatters": "Teaches why sorting + two pointers can eliminate nested loops whenever monotonic order holds.",
        "concepts": [
            "two pointers",
            "sorted array"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Adjust left and right pointers based on whether current sum is too small or too large"
        ],
        "constraints": [
            "2 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4 9\n2 7 11 15",
                "output": "0 1",
                "explanation": "2 + 7 = 9 at indices 0 and 1."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-25-tc1",
                "input": "4 9\n2 7 11 15",
                "expectedOutput": "0 1",
                "hidden": false
            },
            {
                "id": "amz-basic-25-tc2",
                "input": "4 6\n1 2 4 5",
                "expectedOutput": "0 3",
                "hidden": false
            },
            {
                "id": "amz-basic-25-tc3",
                "input": "3 100\n10 20 30",
                "expectedOutput": "-1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Use converging two pointers l and r\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Use converging two pointers l and r\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Compare `a[l] + a[r]` against `target` at each step."
        ],
        "howToThink": [
            "Because `a` is sorted, moving `l` right strictly increases the sum, and moving `r` left strictly decreases the sum."
        ],
        "approach": "Start `l = 0, r = n - 1` and move inward until `a[l] + a[r] == target` or `l >= r`.",
        "pseudocode": "l = 0, r = n - 1\nwhile l < r:\n    if a[l] + a[r] == target: return l, r\n    elif a[l] + a[r] < target: l += 1\n    else: r -= 1\nreturn -1",
        "explanation": "Runs in O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int l = 0, r = n - 1;\n    while (l < r) {\n        long long s = a[l] + a[r];\n        if (s == target) {\n            cout << l << \" \" << r << \"\\n\";\n            return 0;\n        }\n        if (s < target) l++;\n        else r--;\n    }\n    cout << -1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    l, r = 0, n - 1\n    while l < r:\n        s = a[l] + a[r]\n        if s == target:\n            print(f\"{l} {r}\")\n            return\n        if s < target:\n            l += 1\n        else:\n            r -= 1\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `l <= r` instead of `l < r`, which could use the same element twice."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "converging-two-pointers-sorted-array-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-26",
        "levelId": "amz-basics",
        "title": "Step 26: Same-Direction Two Pointers — Move Zeros to End",
        "difficulty": "easy",
        "order": 26,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Read/Write (Fast/Slow) Two Pointers",
        "amazonContext": "Used for in-place compaction of arrays and package queues.",
        "description": "### Mini-Lesson: Read/Write (Fast/Slow) Two Pointers\nNot all two-pointer problems move from opposite ends! To filter an array **in-place** while keeping relative order, use a `write = 0` pointer and a `read` pointer scanning `0 .. n - 1`. Whenever `a[read] != 0`, swap `swap(a[write], a[read])` and increment `write++`!\n\n**C++17 Idiom:**\n```cpp\nint write = 0;\nfor (int read = 0; read < n; read++) {\n    if (a[read] != 0) swap(a[write++], a[read]);\n}\n```\n\n**Python 3 Idiom:**\n```python\nwrite = 0\nfor read in range(n):\n    if a[read] != 0:\n        a[write], a[read] = a[read], a[write]\n        write += 1\n```\n\n---\n\n### Your Task\nGiven `N` integers, move all `0`s to the end of the array while maintaining the relative order of the non-zero elements. Print the resulting array.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the `N` integers after moving zeros to the end.",
        "whyThisMatters": "The read/write two-pointer pattern compacts arrays in O(N) time and O(1) space.",
        "concepts": [
            "two pointers",
            "in-place array modification"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Maintain a write pointer for non-zero elements while scanning with a read pointer"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "5\n0 1 0 3 12",
                "output": "1 3 12 0 0",
                "explanation": "Non-zero elements [1, 3, 12] keep their order, followed by zeros."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-26-tc1",
                "input": "5\n0 1 0 3 12",
                "expectedOutput": "1 3 12 0 0",
                "hidden": false
            },
            {
                "id": "amz-basic-26-tc2",
                "input": "3\n0 0 1",
                "expectedOutput": "1 0 0",
                "hidden": false
            },
            {
                "id": "amz-basic-26-tc3",
                "input": "4\n4 2 0 5",
                "expectedOutput": "4 2 5 0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Move zeros to the end in-place\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Move zeros to the end\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Keep `write = 0`. For each `read` from `0` to `n - 1`, if `a[read] != 0`, swap `a[write]` and `a[read]` and increment `write`."
        ],
        "howToThink": [
            "`write` always points to the leftmost zero (or equals `read` if no zeros have been seen yet)."
        ],
        "approach": "Use fast (`read`) and slow (`write`) pointers to compact non-zero elements to the front.",
        "pseudocode": "write = 0\nfor read in 0..n-1:\n    if a[read] != 0:\n        swap(a[write], a[read])\n        write += 1",
        "explanation": "Runs in O(N) time and O(1) auxiliary space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int write = 0;\n    for (int read = 0; read < n; read++) {\n        if (a[read] != 0) swap(a[write++], a[read]);\n    }\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << \" \";\n        cout << a[i];\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    write = 0\n    for read in range(n):\n        if a[read] != 0:\n            a[write], a[read] = a[read], a[write]\n            write += 1\n    print(\" \".join(str(x) for x in a))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Calling `a.remove(0)` inside a loop, which takes O(N^2) time."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "read-write-fast-slow-two-pointers",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-27",
        "levelId": "amz-basics",
        "title": "Step 27: Greedy Two Pointers — Minimum Delivery Vans",
        "difficulty": "easy",
        "order": 27,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Sorting + Opposite-Ends Greedy Pairing",
        "amazonContext": "Classic Amazon Logistics problem: pairing heaviest and lightest packages.",
        "description": "### Mini-Lesson: Sorting + Opposite-Ends Greedy Pairing\nSuppose each delivery van holds **at most 2 packages** with combined weight `<= limit`. If we sort the weights ascending (`w[0] <= ... <= w[n-1]`):\n- The heaviest remaining package `w[right]` MUST go into a van (`vans++`, `right--`).\n- Can anyone ride with `w[right]`? If even the lightest package `w[left]` fits (`w[left] + w[right] <= limit`), pair them together and advance `left++`!\n\n**C++17 Idiom:**\n```cpp\nsort(w.begin(), w.end());\nint l = 0, r = n - 1, vans = 0;\nwhile (l <= r) {\n    if (w[l] + w[r] <= limit) l++;\n    r--; vans++;\n}\n```\n\n**Python 3 Idiom:**\n```python\nw.sort()\nl, r, vans = 0, n - 1, 0\nwhile l <= r:\n    if w[l] + w[r] <= limit:\n        l += 1\n    r -= 1\n    vans += 1\n```\n\n---\n\n### Your Task\nGiven `N` package weights and a van capacity `limit` (each van carries at most 2 packages), print the minimum number of vans required.\n\n**Input Format:**\n- Line 1: `N` and `limit`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the minimum number of vans.",
        "whyThisMatters": "Demonstrates how sorting unlocks greedy two-pointer pairing in O(N log N) time.",
        "concepts": [
            "two pointers",
            "greedy",
            "sorting"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Sort and pair heaviest with lightest elements greedily"
        ],
        "constraints": [
            "1 <= N <= 100,000",
            "1 <= w[i] <= limit <= 10^9"
        ],
        "examples": [
            {
                "input": "4 3\n3 2 2 1",
                "output": "3",
                "explanation": "Vans: (1,2), (2), (3) -> 3 vans."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-27-tc1",
                "input": "4 3\n3 2 2 1",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-27-tc2",
                "input": "2 3\n1 2",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "amz-basic-27-tc3",
                "input": "4 5\n3 5 3 4",
                "expectedOutput": "4",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long limit;\n    if (!(cin >> n >> limit)) return 0;\n    vector<long long> w(n);\n    for (int i = 0; i < n; i++) cin >> w[i];\n    // Sort and pair using l and r\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, limit = int(data[0]), int(data[1])\n    w = [int(x) for x in data[2:2+n]]\n    # Sort and pair using l and r\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `while (l <= r)` so when one package is left (`l == r`), it still gets a van!"
        ],
        "howToThink": [
            "If `w[l] + w[r] <= limit` when `l == r`, incrementing `l` and decrementing `r` cleanly exits the loop and counts 1 van."
        ],
        "approach": "Sort weights and greedily pair `w[r]` with `w[l]` whenever `w[l] + w[r] <= limit`.",
        "pseudocode": "sort(w)\nl = 0, r = n - 1, vans = 0\nwhile l <= r:\n    if w[l] + w[r] <= limit: l += 1\n    r -= 1; vans += 1\nprint(vans)",
        "explanation": "Runs in O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long limit;\n    if (!(cin >> n >> limit)) return 0;\n    vector<long long> w(n);\n    for (int i = 0; i < n; i++) cin >> w[i];\n    sort(w.begin(), w.end());\n    int l = 0, r = n - 1, vans = 0;\n    while (l <= r) {\n        if (w[l] + w[r] <= limit) l++;\n        r--;\n        vans++;\n    }\n    cout << vans << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, limit = int(data[0]), int(data[1])\n    w = sorted(int(x) for x in data[2:2+n])\n    l, r, vans = 0, n - 1, 0\n    while l <= r:\n        if w[l] + w[r] <= limit:\n            l += 1\n        r -= 1\n        vans += 1\n    print(vans)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `while (l < r)` and forgetting to add a van for the last remaining item when `l == r`."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "sorting-opposite-ends-greedy-pairing",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-28",
        "levelId": "amz-basics",
        "title": "Step 28: Fixed Sliding Window Step 1 — Rolling Sum of Every K-Window",
        "difficulty": "easy",
        "order": 28,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Fixed-Size Sliding Window Mechanics",
        "amazonContext": "Learn the exact mechanics of sliding a window of size K in O(1) per step.",
        "description": "### Mini-Lesson: Fixed-Size Sliding Window Mechanics\nSuppose you want the sum of every contiguous subarray of length `K`. There are `N - K + 1` such windows.\n- **First window (`0 .. K-1`):** sum the first `K` elements.\n- **Slide right to index `i` (`K .. N-1`):** one new element `a[i]` enters on the right, and one old element `a[i - K]` leaves on the left:\n\n`window_sum += a[i] - a[i - K]`\n\n**C++17 Idiom:**\n```cpp\nlong long win = 0;\nfor (int i = 0; i < k; i++) win += a[i];\ncout << win;\nfor (int i = k; i < n; i++) {\n    win += a[i] - a[i - k];\n    cout << \" \" << win;\n}\n```\n\n**Python 3 Idiom:**\n```python\nwin = sum(a[:k])\nout = [win]\nfor i in range(k, n):\n    win += a[i] - a[i - k]\n    out.append(win)\n```\n\n---\n\n### Your Task\nGiven `N` integers and window size `K`, print the sum of every contiguous window of size `K` from left to right (`N - K + 1` sums separated by spaces).\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `N - K + 1` window sums separated by spaces.",
        "whyThisMatters": "Once you see how `win += a[i] - a[i - k]` generates every window sum in O(1), all fixed-window problems become easy!",
        "concepts": [
            "sliding window",
            "rolling sum"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Compute all N - K + 1 window sums in O(N) total time"
        ],
        "constraints": [
            "1 <= K <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "5 3\n1 3 2 6 -1",
                "output": "6 11 7",
                "explanation": "[1,3,2]=6, [3,2,6]=11, [2,6,-1]=7."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-28-tc1",
                "input": "5 3\n1 3 2 6 -1",
                "expectedOutput": "6 11 7",
                "hidden": false
            },
            {
                "id": "amz-basic-28-tc2",
                "input": "4 2\n10 20 30 40",
                "expectedOutput": "30 50 70",
                "hidden": false
            },
            {
                "id": "amz-basic-28-tc3",
                "input": "3 3\n5 5 5",
                "expectedOutput": "15",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Print all N - K + 1 window sums\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Print all N - K + 1 window sums\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Print the initial sum of the first `k` elements, then loop `i` from `k` to `n - 1` updating `win += a[i] - a[i - k]`."
        ],
        "howToThink": [
            "Notice how `i` is the entering right index and `i - k` is the leaving left index!"
        ],
        "approach": "Compute the first window of size `K`, then slide right `N - K` times.",
        "pseudocode": "win = sum(a[0..k-1])\nprint(win)\nfor i in k..n-1:\n    win += a[i] - a[i - k]\n    print(win)",
        "explanation": "Runs in O(N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long win = 0;\n    for (int i = 0; i < k; i++) win += a[i];\n    cout << win;\n    for (int i = k; i < n; i++) {\n        win += a[i] - a[i - k];\n        cout << \" \" << win;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    win = sum(a[:k])\n    out = [str(win)]\n    for i in range(k, n):\n        win += a[i] - a[i - k]\n        out.append(str(win))\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Subtracting `a[i - k + 1]` instead of `a[i - k]`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-4",
            "fixed-size-sliding-window-mechanics",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-29",
        "levelId": "amz-basics",
        "title": "Step 29: Fixed Sliding Window Step 2 — Maximum K-Minute Server Traffic",
        "difficulty": "easy",
        "order": 29,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Fixed Sliding Window Maximum Sum",
        "amazonContext": "Builds directly on Step 28 to track the maximum window sum.",
        "description": "### Mini-Lesson: Fixed Sliding Window Maximum Sum\nTake the exact sliding window loop you wrote in Step 28, initialize `max_sum = win` after the first window, and update `max_sum = max(max_sum, win)` on every slide!\n\n**C++17 Idiom:**\n```cpp\nlong long win = 0;\nfor (int i = 0; i < k; i++) win += a[i];\nlong long max_sum = win;\nfor (int i = k; i < n; i++) {\n    win += a[i] - a[i - k];\n    max_sum = max(max_sum, win);\n}\n```\n\n**Python 3 Idiom:**\n```python\nwin = sum(a[:k])\nmax_sum = win\nfor i in range(k, n):\n    win += a[i] - a[i - k]\n    max_sum = max(max_sum, win)\n```\n\n---\n\n### Your Task\nGiven `N` integers and `K`, print the **maximum sum** of any contiguous subarray of length `K`.\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print a single integer: the maximum sum of a window of length `K`.",
        "whyThisMatters": "Direct prerequisite for Amazon OA 4 (Maximum Sum of K Distinct Stock Prices).",
        "concepts": [
            "sliding window",
            "arrays"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Track the maximum rolling sum across all windows of size K"
        ],
        "constraints": [
            "1 <= K <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "6 3\n2 1 5 1 3 2",
                "output": "9",
                "explanation": "Window [5, 1, 3] has sum 9."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-29-tc1",
                "input": "6 3\n2 1 5 1 3 2",
                "expectedOutput": "9",
                "hidden": false
            },
            {
                "id": "amz-basic-29-tc2",
                "input": "4 2\n-5 -2 -1 -8",
                "expectedOutput": "-3",
                "hidden": false
            },
            {
                "id": "amz-basic-29-tc3",
                "input": "5 5\n10 20 30 40 50",
                "expectedOutput": "150",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Track max rolling window sum of size k\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Track max rolling window sum of size k\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Initialize `max_sum = win` (the first window sum), NOT `0`, so negative arrays work properly!"
        ],
        "howToThink": [
            "Combine Step 2 (Running Max) with Step 28 (Rolling Window Sum)."
        ],
        "approach": "Compute initial window sum, set `max_sum = win`, and update `max_sum` as the window slides.",
        "pseudocode": "win = sum(a[0..k-1])\nmax_sum = win\nfor i in k..n-1:\n    win += a[i] - a[i - k]\n    max_sum = max(max_sum, win)\nprint(max_sum)",
        "explanation": "Runs in O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long win = 0;\n    for (int i = 0; i < k; i++) win += a[i];\n    long long max_sum = win;\n    for (int i = k; i < n; i++) {\n        win += a[i] - a[i - k];\n        max_sum = max(max_sum, win);\n    }\n    cout << max_sum << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    win = sum(a[:k])\n    max_sum = win\n    for i in range(k, n):\n        win += a[i] - a[i - k]\n        if win > max_sum:\n            max_sum = win\n    print(max_sum)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Initializing `max_sum = 0` when all elements are negative."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "fixed-sliding-window-maximum-sum",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-30",
        "levelId": "amz-basics",
        "title": "Step 30: Fixed Sliding Window Step 3 — SLA Threshold Alerts",
        "difficulty": "easy",
        "order": 30,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Fixed Sliding Window Condition Counting",
        "amazonContext": "Models AWS CloudWatch SLA alarms triggered when K-minute average exceeds a threshold.",
        "description": "### Mini-Lesson: Fixed Sliding Window Condition Counting\nInstead of dividing `win / K >= threshold` (which can have integer division truncation issues), rewrite the average condition using multiplication:\n\n`win >= threshold * K`\n\nCount how many windows of size `K` satisfy `win >= threshold * K`!\n\n**C++17 Idiom:**\n```cpp\nlong long targetSum = threshold * k;\nint count = (win >= targetSum) ? 1 : 0;\nfor (int i = k; i < n; i++) {\n    win += a[i] - a[i - k];\n    if (win >= targetSum) count++;\n}\n```\n\n**Python 3 Idiom:**\n```python\ntarget_sum = threshold * k\ncount = 1 if win >= target_sum else 0\nfor i in range(k, n):\n    win += a[i] - a[i - k]\n    if win >= target_sum:\n        count += 1\n```\n\n---\n\n### Your Task\nGiven `N` integers, a window size `K`, and `threshold`, count how many contiguous subarrays of size `K` have an **average greater than or equal to `threshold`**.\n\n**Input Format:**\n- Line 1: `N`, `K`, and `threshold`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the number of windows of size `K` with average `>= threshold`.",
        "whyThisMatters": "Replacing division `sum / K >= T` with multiplication `sum >= T * K` avoids floating-point precision bugs in interviews.",
        "concepts": [
            "sliding window",
            "math",
            "averages"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Rewrite average comparisons as sum >= threshold * K and count valid windows"
        ],
        "constraints": [
            "1 <= K <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "8 3 4\n2 2 2 2 5 5 5 8",
                "output": "3",
                "explanation": "Windows of size 3 with sum >= 12 are [2,5,5]=12, [5,5,5]=15, [5,5,8]=18 -> 3 windows."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-30-tc1",
                "input": "8 3 4\n2 2 2 2 5 5 5 8",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-30-tc2",
                "input": "5 2 5\n5 5 5 5 5",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-30-tc3",
                "input": "4 2 10\n1 2 3 4",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long k, threshold;\n    if (!(cin >> n >> k >> threshold)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Count windows of size k with sum >= k * threshold\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k, threshold = int(data[0]), int(data[1]), int(data[2])\n    a = [int(x) for x in data[3:3+n]]\n    # Count windows of size k with sum >= k * threshold\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check `win >= k * threshold` on the initial window and after each slide."
        ],
        "howToThink": [
            "Multiplying `k * threshold` once at the start keeps everything in exact integers."
        ],
        "approach": "Slide a window of size `K` and count how many times `win >= K * threshold`.",
        "pseudocode": "target = k * threshold\nwin = sum(a[0..k-1])\ncount = 1 if win >= target else 0\nfor i in k..n-1:\n    win += a[i] - a[i - k]\n    if win >= target: count += 1\nprint(count)",
        "explanation": "Runs in O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long k, threshold;\n    if (!(cin >> n >> k >> threshold)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long target = k * threshold;\n    long long win = 0;\n    for (int i = 0; i < k; i++) win += a[i];\n    int count = (win >= target) ? 1 : 0;\n    for (int i = k; i < n; i++) {\n        win += a[i] - a[i - k];\n        if (win >= target) count++;\n    }\n    cout << count << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k, threshold = int(data[0]), int(data[1]), int(data[2])\n    a = [int(x) for x in data[3:3+n]]\n    target = k * threshold\n    win = sum(a[:k])\n    count = 1 if win >= target else 0\n    for i in range(k, n):\n        win += a[i] - a[i - k]\n        if win >= target:\n            count += 1\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting to check whether the very first window `a[0..k-1]` satisfies the threshold."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "fixed-sliding-window-condition-counting",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-31",
        "levelId": "amz-basics",
        "title": "Step 31: Variable Sliding Window Step 1 — Longest Subarray Within Budget",
        "difficulty": "easy",
        "order": 31,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Variable-Size Sliding Window (Expand Right, Shrink Left)",
        "amazonContext": "The exact skeleton of Amazon OA 1 (Maximum Sustainable Server Cluster)!",
        "description": "### Mini-Lesson: Variable-Size Sliding Window (Expand Right, Shrink Left)\nWhat if the window size is **not fixed**, and you want the **longest contiguous subarray** of positive numbers whose sum is `<= budget`?\n\nMemorize this 4-line **Variable Sliding Window Template**:\n1. Loop `right` from `0` to `n - 1` and add `a[right]` to `win_sum`.\n2. `while (win_sum > budget)`: subtract `a[left]` from `win_sum` and advance `left++`.\n3. Now `[left .. right]` is valid! Update `best = max(best, right - left + 1)`.\n\n**C++17 Idiom:**\n```cpp\nlong long win = 0;\nint left = 0, best = 0;\nfor (int right = 0; right < n; right++) {\n    win += a[right];\n    while (win > budget) {\n        win -= a[left++];\n    }\n    best = max(best, right - left + 1);\n}\n```\n\n**Python 3 Idiom:**\n```python\nwin = 0\nleft = 0\nbest = 0\nfor right in range(n):\n    win += a[right]\n    while win > budget:\n        win -= a[left]\n        left += 1\n    best = max(best, right - left + 1)\n```\n\n---\n\n### Your Task\nGiven `N` positive server costs and a `budget`, find the maximum length of a contiguous subarray whose sum is `<= budget`.\n\n**Input Format:**\n- Line 1: `N` and `budget`\n- Line 2: `N` space-separated positive integers\n\n**Output Format:**\n- Print the maximum valid subarray length.",
        "whyThisMatters": "This `for right ... while invalid: shrink left` loop is the most important pattern in the entire Amazon OA!",
        "concepts": [
            "sliding window",
            "two pointers",
            "variable window"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Master the expand-right, while-invalid-shrink-left sliding window loop"
        ],
        "constraints": [
            "1 <= N <= 100,000",
            "1 <= a[i] <= 10^9"
        ],
        "examples": [
            {
                "input": "6 8\n3 1 2 1 4 5",
                "output": "4",
                "explanation": "Subarray [1, 2, 1, 4] has sum 8 <= 8 and length 4."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-31-tc1",
                "input": "6 8\n3 1 2 1 4 5",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-31-tc2",
                "input": "4 5\n10 20 30 40",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "amz-basic-31-tc3",
                "input": "5 15\n1 2 3 4 5",
                "expectedOutput": "5",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long budget;\n    if (!(cin >> n >> budget)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Expand right, shrink left while win > budget\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, budget = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Expand right, shrink left while win > budget\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "When every element in a single-element window exceeds `budget`, `left` will advance to `right + 1`, making `right - left + 1 == 0` automatically!"
        ],
        "howToThink": [
            "Even though there is a `while` loop inside the `for` loop, `left` only increments at most `N` times total across the entire algorithm!"
        ],
        "approach": "Expand `right`, shrink `left` while `win > budget`, and record `max(best, right - left + 1)`.",
        "pseudocode": "left = 0, win = 0, best = 0\nfor right in 0..n-1:\n    win += a[right]\n    while win > budget:\n        win -= a[left]; left += 1\n    best = max(best, right - left + 1)\nprint(best)",
        "explanation": "Amortized O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long budget;\n    if (!(cin >> n >> budget)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    long long win = 0;\n    int left = 0, best = 0;\n    for (int right = 0; right < n; right++) {\n        win += a[right];\n        while (win > budget) {\n            win -= a[left++];\n        }\n        best = max(best, right - left + 1);\n    }\n    cout << best << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, budget = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    win = 0\n    left = 0\n    best = 0\n    for right, x in enumerate(a):\n        win += x\n        while win > budget:\n            win -= a[left]\n            left += 1\n        if right - left + 1 > best:\n            best = right - left + 1\n    print(best)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `if (win > budget)` instead of `while (win > budget)`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "variable-size-sliding-window-expand-right-shrink-left-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-32",
        "levelId": "amz-basics",
        "title": "Step 32: Variable Sliding Window Step 2 — Longest Unique Substring",
        "difficulty": "medium",
        "order": 32,
        "stageNum": 4,
        "stageTitle": "Stage 4: Two Pointers & Sliding Window Mastery",
        "pattern": "Variable Sliding Window + Hash Set",
        "amazonContext": "Combines Stage 3 (Hash Set) with Step 31 (Variable Sliding Window).",
        "description": "### Mini-Lesson: Variable Sliding Window + Hash Set\nNow replace the sum condition in Step 31 with a **duplicate check** using a Hash Set!\n- As `right` moves to `s[right]`, `while (seen.count(s[right]))`, remove `s[left]` from `seen` and advance `left++`.\n- Then insert `s[right]` into `seen` and update `best = max(best, right - left + 1)`.\n\n**C++17 Idiom:**\n```cpp\nunordered_set<char> seen;\nint left = 0, best = 0;\nfor (int right = 0; right < (int)s.size(); right++) {\n    while (seen.count(s[right])) seen.erase(s[left++]);\n    seen.insert(s[right]);\n    best = max(best, right - left + 1);\n}\n```\n\n**Python 3 Idiom:**\n```python\nseen = set()\nleft = 0\nbest = 0\nfor right, ch in enumerate(s):\n    while ch in seen:\n        seen.remove(s[left])\n        left += 1\n    seen.add(ch)\n    best = max(best, right - left + 1)\n```\n\n---\n\n### Your Task\nGiven a string `S`, find the length of the longest contiguous substring that contains **no repeating characters**.\n\n**Input Format:**\n- A single string `S`\n\n**Output Format:**\n- Print the maximum length of a duplicate-free substring.",
        "whyThisMatters": "Notice how the exact same `for right ... while invalid: shrink left` template from Step 31 solves this problem too!",
        "concepts": [
            "sliding window",
            "hash set",
            "strings"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Maintain a duplicate-free sliding window using a hash set"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "abcabcbb",
                "output": "3",
                "explanation": "\"abc\" has length 3."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-32-tc1",
                "input": "abcabcbb",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-32-tc2",
                "input": "bbbbb",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "amz-basic-32-tc3",
                "input": "pwwkew",
                "expectedOutput": "3",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Variable sliding window with unordered_set\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Variable sliding window with set()\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Shrink `left` until `s[right]` is no longer in `seen`, then insert `s[right]`."
        ],
        "howToThink": [
            "The set `seen` always holds the exact characters inside the current window `s[left..right]`."
        ],
        "approach": "Use a variable sliding window and a set of characters currently in `[left, right]`.",
        "pseudocode": "seen = set(), left = 0, best = 0\nfor right in 0..len(s)-1:\n    while s[right] in seen:\n        seen.remove(s[left]); left += 1\n    seen.add(s[right])\n    best = max(best, right - left + 1)\nprint(best)",
        "explanation": "Runs in O(N) time and O(min(N, 26)) space.",
        "cppSolution": "#include <iostream>\n#include <string>\n#include <unordered_set>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    unordered_set<char> seen;\n    int left = 0, best = 0;\n    for (int right = 0; right < (int)s.size(); right++) {\n        while (seen.count(s[right])) {\n            seen.erase(s[left++]);\n        }\n        seen.insert(s[right]);\n        best = max(best, right - left + 1);\n    }\n    cout << best << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    seen = set()\n    left = 0\n    best = 0\n    for right, ch in enumerate(s):\n        while ch in seen:\n            seen.remove(s[left])\n            left += 1\n        seen.add(ch)\n        if right - left + 1 > best:\n            best = right - left + 1\n    print(best)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Clearing the entire `seen` set on a duplicate instead of shrinking from `left` one character at a time."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-4",
            "variable-sliding-window-hash-set",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-33",
        "levelId": "amz-basics",
        "title": "Step 33: Interval Basics — Do Two Delivery Windows Overlap?",
        "difficulty": "beginner",
        "order": 33,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Two-Interval Overlap Condition",
        "amazonContext": "The atomic building block of every interval problem.",
        "description": "### Mini-Lesson: Two-Interval Overlap Condition\nGiven two closed intervals `[s1, e1]` and `[s2, e2]`, how do you check if they overlap in a single expression?\n\nTwo intervals overlap if and only if **the later start time is less than or equal to the earlier end time**:\n\n`max(s1, s2) <= min(e1, e2)`\n\n**C++17 Idiom:**\n```cpp\nbool overlap = max(s1, s2) <= min(e1, e2);\n```\n\n**Python 3 Idiom:**\n```python\noverlap = max(s1, s2) <= min(e1, e2)\n```\n\n---\n\n### Your Task\nGiven two closed intervals `[s1, e1]` and `[s2, e2]`, print `true` if they overlap (or touch at an endpoint), else print `false`.\n\n**Input Format:**\n- Four space-separated integers `s1 e1 s2 e2`\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "`max(s1, s2) <= min(e1, e2)` works regardless of which interval starts first!",
        "concepts": [
            "intervals",
            "math"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Test interval overlap using max(s1, s2) <= min(e1, e2)"
        ],
        "constraints": [
            "0 <= s1 <= e1 <= 10^9",
            "0 <= s2 <= e2 <= 10^9"
        ],
        "examples": [
            {
                "input": "1 5 4 8",
                "output": "true",
                "explanation": "Overlap is [4, 5]."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-33-tc1",
                "input": "1 5 4 8",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-33-tc2",
                "input": "6 10 1 4",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-33-tc3",
                "input": "1 4 4 7",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    long long s1, e1, s2, e2;\n    if (!(cin >> s1 >> e1 >> s2 >> e2)) return 0;\n    // Print true if [s1, e1] and [s2, e2] overlap, else false\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    s1, e1, s2, e2 = map(int, data[:4])\n    # Print true if [s1, e1] and [s2, e2] overlap, else false\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check `max(s1, s2) <= min(e1, e2)`."
        ],
        "howToThink": [
            "If they overlap, their intersection is `[max(s1, s2), min(e1, e2)]`, which is non-empty exactly when `start <= end`."
        ],
        "approach": "Evaluate `max(s1, s2) <= min(e1, e2)`.",
        "pseudocode": "print(\"true\" if max(s1, s2) <= min(e1, e2) else \"false\")",
        "explanation": "Runs in O(1) time.",
        "cppSolution": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    long long s1, e1, s2, e2;\n    if (!(cin >> s1 >> e1 >> s2 >> e2)) return 0;\n    cout << (max(s1, s2) <= min(e1, e2) ? \"true\" : \"false\") << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    s1, e1, s2, e2 = map(int, data[:4])\n    print(\"true\" if max(s1, s2) <= min(e1, e2) else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Writing 4 separate `if` branches instead of `max(s1, s2) <= min(e1, e2)`."
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-5",
            "two-interval-overlap-condition",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-34",
        "levelId": "amz-basics",
        "title": "Step 34: Sorting Intervals — Detecting Any Schedule Conflict",
        "difficulty": "easy",
        "order": 34,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Sort Intervals by Start Time",
        "amazonContext": "Meeting Rooms I — foundation for Amazon dock and server scheduling.",
        "description": "### Mini-Lesson: Sort Intervals by Start Time\nGiven `N` intervals `[start, end)`, how do we check if **any** two overlap without checking all `O(N^2)` pairs?\n\n**Sort the intervals by `start` time!** Once sorted, if any conflict exists, it MUST occur between two adjacent intervals `iv[i - 1]` and `iv[i]` where `iv[i].start < iv[i - 1].end`!\n\n**C++17 Idiom:**\n```cpp\nsort(iv.begin(), iv.end());\nfor (int i = 1; i < n; i++) {\n    if (iv[i].first < iv[i - 1].second) return false; // conflict!\n}\n```\n\n**Python 3 Idiom:**\n```python\niv.sort(key=lambda x: x[0])\nfor i in range(1, n):\n    if iv[i][0] < iv[i - 1][1]:\n        return False\n```\n\n---\n\n### Your Task\nGiven `N` half-open meeting intervals `[start, end)`, print `true` if a person can attend all meetings without any overlap, or `false` if any two meetings conflict. (Note: `[1, 5)` and `[5, 8)` do NOT conflict.)\n\n**Input Format:**\n- Line 1: integer `N`\n- Next `N` lines: `start` and `end`\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "Sorting intervals by start time is the first step of 90% of interval problems.",
        "concepts": [
            "intervals",
            "sorting"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Sort intervals by start time and compare adjacent intervals"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "3\n0 30\n5 10\n15 20",
                "output": "false",
                "explanation": "[0, 30) conflicts with [5, 10)."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-34-tc1",
                "input": "3\n0 30\n5 10\n15 20",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-34-tc2",
                "input": "2\n7 10\n2 4",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-34-tc3",
                "input": "3\n1 5\n5 10\n10 15",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    // Sort and check if any iv[i].first < iv[i-1].second\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    # Sort and check if any iv[i][0] < iv[i-1][1]\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "After sorting, check `if (iv[i].first < iv[i - 1].second)` for `i` from `1` to `n - 1`."
        ],
        "howToThink": [
            "Sorting brings overlapping intervals next to each other."
        ],
        "approach": "Sort by start time, then verify `iv[i].start >= iv[i - 1].end` for all adjacent pairs.",
        "pseudocode": "sort(iv)\nfor i in 1..n-1:\n    if iv[i].start < iv[i-1].end: return false\nreturn true",
        "explanation": "Runs in O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    sort(iv.begin(), iv.end());\n    for (int i = 1; i < n; i++) {\n        if (iv[i].first < iv[i - 1].second) {\n            cout << \"false\\n\";\n            return 0;\n        }\n    }\n    cout << \"true\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    iv = []\n    idx = 1\n    for _ in range(n):\n        iv.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n    iv.sort()\n    for i in range(1, n):\n        if iv[i][0] < iv[i - 1][1]:\n            print(\"false\")\n            return\n    print(\"true\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `<=` instead of `<` when meetings touching at an endpoint (`[1, 5)` and `[5, 10)`) are allowed."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-5",
            "sort-intervals-by-start-time",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-35",
        "levelId": "amz-basics",
        "title": "Step 35: Merging Overlapping Delivery Windows",
        "difficulty": "medium",
        "order": 35,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Interval Merging",
        "amazonContext": "One of the top 10 most asked Amazon coding problems (LeetCode 56).",
        "description": "### Mini-Lesson: Interval Merging\nBuilding on Step 34: after sorting intervals by `start` time, maintain a `merged` list.\n- If `merged` is empty or `cur.start > merged.back().end`, there is no overlap — push `cur`.\n- Otherwise they overlap! Extend the end of the last interval: `merged.back().end = max(merged.back().end, cur.end)`.\n\n**C++17 Idiom:**\n```cpp\nsort(iv.begin(), iv.end());\nvector<pair<long long, long long>> merged;\nfor (auto& cur : iv) {\n    if (merged.empty() || cur.first > merged.back().second)\n        merged.push_back(cur);\n    else\n        merged.back().second = max(merged.back().second, cur.second);\n}\n```\n\n**Python 3 Idiom:**\n```python\niv.sort()\nmerged = []\nfor s, e in iv:\n    if not merged or s > merged[-1][1]:\n        merged.append([s, e])\n    else:\n        merged[-1][1] = max(merged[-1][1], e)\n```\n\n---\n\n### Your Task\nGiven `N` closed intervals `[start, end]`, merge all overlapping intervals and print each merged interval `start end` on its own line.\n\n**Input Format:**\n- Line 1: integer `N`\n- Next `N` lines: `start` and `end`\n\n**Output Format:**\n- Print each merged interval `start end` on a new line.",
        "whyThisMatters": "Consolidating overlapping intervals is used in warehouse shift planning and log time-window aggregation.",
        "concepts": [
            "intervals",
            "sorting",
            "merging"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Merge sorted intervals using max(merged.back().end, cur.end)"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n1 3\n2 6\n8 10\n15 18",
                "output": "1 6\n8 10\n15 18",
                "explanation": "[1,3] and [2,6] merge into [1,6]."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-35-tc1",
                "input": "4\n1 3\n2 6\n8 10\n15 18",
                "expectedOutput": "1 6\n8 10\n15 18",
                "hidden": false
            },
            {
                "id": "amz-basic-35-tc2",
                "input": "2\n1 4\n4 5",
                "expectedOutput": "1 5",
                "hidden": false
            },
            {
                "id": "amz-basic-35-tc3",
                "input": "3\n6 8\n1 9\n2 4",
                "expectedOutput": "1 9",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    // Sort and merge overlapping intervals\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    # Sort and merge overlapping intervals\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Always use `max(merged.back().second, cur.second)` in case `cur` is completely inside `merged.back()`."
        ],
        "howToThink": [
            "Sorting by start time ensures `cur.start >= merged.back().start` is always true."
        ],
        "approach": "Sort by start time and merge into `merged.back()` whenever `cur.start <= merged.back().end`.",
        "pseudocode": "sort(iv)\nmerged = []\nfor s, e in iv:\n    if not merged or s > merged[-1].end: merged.append([s, e])\n    else: merged[-1].end = max(merged[-1].end, e)",
        "explanation": "Runs in O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    sort(iv.begin(), iv.end());\n    vector<pair<long long, long long>> merged;\n    for (const auto& cur : iv) {\n        if (merged.empty() || cur.first > merged.back().second) {\n            merged.push_back(cur);\n        } else {\n            merged.back().second = max(merged.back().second, cur.second);\n        }\n    }\n    for (const auto& p : merged) cout << p.first << \" \" << p.second << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    iv = []\n    idx = 1\n    for _ in range(n):\n        iv.append([int(data[idx]), int(data[idx+1])])\n        idx += 2\n    iv.sort()\n    merged = []\n    for s, e in iv:\n        if not merged or s > merged[-1][1]:\n            merged.append([s, e])\n        elif e > merged[-1][1]:\n            merged[-1][1] = e\n    print(\"\\n\".join(f\"{s} {e}\" for s, e in merged))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Overwriting `merged.back().second = cur.second` without `max()`."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-5",
            "interval-merging",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-36",
        "levelId": "amz-basics",
        "title": "Step 36: Greedy Activity Selection — Maximum Non-Overlapping Tasks",
        "difficulty": "medium",
        "order": 36,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Sort Intervals by End Time (Greedy)",
        "amazonContext": "Classic greedy interval scheduling asked in Amazon OA.",
        "description": "### Mini-Lesson: Sort Intervals by End Time (Greedy)\nWhen you want to **merge** intervals, you sort by **start time**. When you want to pick the **maximum number of non-overlapping intervals**, you sort by **END time**!\n\nWhy? Because picking the task that finishes **earliest** leaves the maximum possible room for future tasks!\n\n**C++17 Idiom:**\n```cpp\nsort(iv.begin(), iv.end(), [](const auto& a, const auto& b) {\n    return a.second < b.second;\n});\nlong long lastEnd = -4e18; int count = 0;\nfor (auto& [s, e] : iv) {\n    if (s >= lastEnd) { count++; lastEnd = e; }\n}\n```\n\n**Python 3 Idiom:**\n```python\niv.sort(key=lambda x: x[1])\nlast_end = -10**18\ncount = 0\nfor s, e in iv:\n    if s >= last_end:\n        count += 1\n        last_end = e\n```\n\n---\n\n### Your Task\nGiven `N` intervals `[start, end)`, find the **maximum number of non-overlapping intervals** you can select.\n\n**Input Format:**\n- Line 1: integer `N`\n- Next `N` lines: `start` and `end`\n\n**Output Format:**\n- Print the maximum number of non-overlapping intervals.",
        "whyThisMatters": "Memorize this distinction: Merge = Sort by Start; Max Disjoint Set = Sort by End!",
        "concepts": [
            "intervals",
            "greedy",
            "sorting"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Sort intervals by end time to greedily maximize non-overlapping selections"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n1 2\n2 3\n3 4\n1 3",
                "output": "3",
                "explanation": "Select [1,2), [2,3), and [3,4) -> 3 intervals."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-36-tc1",
                "input": "4\n1 2\n2 3\n3 4\n1 3",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-36-tc2",
                "input": "3\n1 2\n1 2\n1 2",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "amz-basic-36-tc3",
                "input": "3\n1 10\n2 3\n4 5",
                "expectedOutput": "2",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    // Sort by END time and greedily count non-overlapping intervals\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    # Sort by END time and greedily count non-overlapping intervals\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Sort by `end` time ascending (`a.second < b.second`). Whenever `s >= last_end`, pick it and update `last_end = e`."
        ],
        "howToThink": [
            "Notice in test case 3 (`[1, 10], [2, 3], [4, 5]`): sorting by start time picks `[1, 10]` (only 1), whereas sorting by end time picks `[2, 3]` and `[4, 5]` (2 intervals)!"
        ],
        "approach": "Sort intervals by `end` ascending and greedily accept any interval with `start >= last_end`.",
        "pseudocode": "sort iv by end\nlast_end = -inf, count = 0\nfor s, e in iv:\n    if s >= last_end:\n        count += 1; last_end = e\nprint(count)",
        "explanation": "Runs in O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    sort(iv.begin(), iv.end(), [](const auto& a, const auto& b) {\n        if (a.second != b.second) return a.second < b.second;\n        return a.first < b.first;\n    });\n    long long lastEnd = -4000000000000000000LL;\n    int count = 0;\n    for (const auto& [s, e] : iv) {\n        if (s >= lastEnd) {\n            count++;\n            lastEnd = e;\n        }\n    }\n    cout << count << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    iv = []\n    idx = 1\n    for _ in range(n):\n        iv.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n    iv.sort(key=lambda x: x[1])\n    last_end = -10**18\n    count = 0\n    for s, e in iv:\n        if s >= last_end:\n            count += 1\n            last_end = e\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Sorting by start time instead of end time."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-5",
            "sort-intervals-by-end-time-greedy-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-37",
        "levelId": "amz-basics",
        "title": "Step 37: Greedy Ceiling Math — Minimum Batches of 2 or 3",
        "difficulty": "easy",
        "order": 37,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Modular Greedy Math ((c + 2) / 3)",
        "amazonContext": "Teaches the exact math behind Amazon OA 3 (Minimum Delivery Rounds).",
        "description": "### Mini-Lesson: Modular Greedy Math ((c + 2) / 3)\nSuppose you have `C` identical boxes and can ship **2 or 3 boxes per trip**. What is the minimum number of trips?\n- If `C == 1`, it is impossible (`-1`).\n- If `C >= 2`, we want as many trips of `3` as possible:\n  - `C = 2` -> `2` (1 trip)\n  - `C = 3` -> `3` (1 trip)\n  - `C = 4` -> `2 + 2` (2 trips)\n  - `C = 5` -> `3 + 2` (2 trips)\n  - `C = 6` -> `3 + 3` (2 trips)\n\nNotice the pattern! For every `C >= 2`, the answer is `ceil(C / 3) = (C + 2) / 3` (integer division)!\n\n**C++17 Idiom:**\n```cpp\nif (c == 1) cout << -1;\nelse cout << (c + 2) / 3;\n```\n\n**Python 3 Idiom:**\n```python\nif c == 1: print(-1)\nelse: print((c + 2) // 3)\n```\n\n---\n\n### Your Task\nGiven a single integer `C` (the count of identical boxes), print the minimum number of trips of size `2` or `3` needed to ship all `C` boxes, or `-1` if impossible.\n\n**Input Format:**\n- A single positive integer `C`\n\n**Output Format:**\n- Print the minimum trips, or `-1`.",
        "whyThisMatters": "Combined with Step 19 (Hash Map Frequency Table), this 1-line formula solves Amazon OA 3 completely!",
        "concepts": [
            "greedy",
            "math"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Apply integer ceiling division (C + 2) // 3 for grouping into 2s and 3s"
        ],
        "constraints": [
            "1 <= C <= 10^9"
        ],
        "examples": [
            {
                "input": "7",
                "output": "3",
                "explanation": "7 = 3 + 2 + 2 -> 3 trips."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-37-tc1",
                "input": "7",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-37-tc2",
                "input": "1",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "amz-basic-37-tc3",
                "input": "6",
                "expectedOutput": "2",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long c;\n    if (!(cin >> c)) return 0;\n    // Print -1 if c == 1, else (c + 2) / 3\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    c = int(data[0])\n    # Print -1 if c == 1, else (c + 2) // 3\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check `c == 1` first; otherwise print `(c + 2) / 3`."
        ],
        "howToThink": [
            "Any remainder `c % 3 == 1` just borrows one `3` to make `4 = 2 + 2`."
        ],
        "approach": "Return `-1` if `C == 1`, else `(C + 2) // 3`.",
        "pseudocode": "if c == 1: print(-1)\nelse: print((c + 2) // 3)",
        "explanation": "Runs in O(1) time.",
        "cppSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long c;\n    if (!(cin >> c)) return 0;\n    cout << (c == 1 ? -1 : (c + 2) / 3) << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    c = int(data[0])\n    print(-1 if c == 1 else (c + 2) // 3)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Returning -1 when `c = 5` or `c = 7` by forgetting we can mix 3s and 2s."
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-5",
            "modular-greedy-math-c-2-3-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-38",
        "levelId": "amz-basics",
        "title": "Step 38: Classic Binary Search — Finding an Element in O(log N)",
        "difficulty": "easy",
        "order": 38,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Standard Binary Search",
        "amazonContext": "Core logarithmic search template.",
        "description": "### Mini-Lesson: Standard Binary Search\nIn a sorted array of `100,000` elements, linear search takes `100,000` steps, while **Binary Search** takes at most `17` steps (`log2(100,000) ≈ 17`)!\n\nCompare `a[mid]` with `target`:\n- If `a[mid] == target`, return `mid`.\n- If `a[mid] < target`, search the right half (`l = mid + 1`).\n- Else search the left half (`r = mid - 1`).\n\n**C++17 Idiom:**\n```cpp\nint l = 0, r = n - 1;\nwhile (l <= r) {\n    int mid = l + (r - l) / 2;\n    if (a[mid] == target) return mid;\n    if (a[mid] < target) l = mid + 1;\n    else r = mid - 1;\n}\n```\n\n**Python 3 Idiom:**\n```python\nl, r = 0, n - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    if a[mid] == target: return mid\n    if a[mid] < target: l = mid + 1\n    else: r = mid - 1\n```\n\n---\n\n### Your Task\nGiven a sorted array of `N` distinct integers and `target`, print the `0`-based index of `target`, or `-1` if not found.\n\n**Input Format:**\n- Line 1: `N` and `target`\n- Line 2: `N` sorted integers\n\n**Output Format:**\n- Print the index of `target`, or `-1`.",
        "whyThisMatters": "Halving the search space on each iteration is the foundation of all O(log N) algorithms.",
        "concepts": [
            "binary search",
            "searching"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Write bug-free binary search with l + (r - l) / 2"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "6 9\n-1 0 3 5 9 12",
                "output": "4",
                "explanation": "9 is at index 4."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-38-tc1",
                "input": "6 9\n-1 0 3 5 9 12",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-38-tc2",
                "input": "6 2\n-1 0 3 5 9 12",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "amz-basic-38-tc3",
                "input": "1 5\n5",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Binary search for target\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Binary search for target\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `while (l <= r)` and update `l = mid + 1` or `r = mid - 1`."
        ],
        "howToThink": [
            "Using `l + (r - l) / 2` in C++ prevents `l + r` from overflowing when indices are large."
        ],
        "approach": "Repeatedly bisect `[l, r]` until `a[mid] == target` or `l > r`.",
        "pseudocode": "l = 0, r = n - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    if a[mid] == target: return mid\n    elif a[mid] < target: l = mid + 1\n    else: r = mid - 1\nreturn -1",
        "explanation": "Runs in O(log N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (a[mid] == target) {\n            cout << mid << \"\\n\";\n            return 0;\n        }\n        if (a[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    cout << -1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    l, r = 0, n - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if a[mid] == target:\n            print(mid)\n            return\n        if a[mid] < target:\n            l = mid + 1\n        else:\n            r = mid - 1\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Writing `l = mid` or `r = mid` inside `while (l <= r)`, which causes an infinite loop!"
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-5",
            "standard-binary-search",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-39",
        "levelId": "amz-basics",
        "title": "Step 39: Binary Search Lower Bound — First Element >= Target",
        "difficulty": "easy",
        "order": 39,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Lower Bound Binary Search (lower_bound / bisect_left)",
        "amazonContext": "Used in Amazon router range coverage and capacity lookup OA questions.",
        "description": "### Mini-Lesson: Lower Bound Binary Search (lower_bound / bisect_left)\nOften `target` is not in the array, and we need the **first index `i` where `a[i] >= target`** (or `N` if all elements are `< target`).\n- In C++ STL: `int idx = lower_bound(a.begin(), a.end(), target) - a.begin();`\n- In Python: `idx = bisect.bisect_left(a, target)`\n- Or manually: track `ans = n`, and whenever `a[mid] >= target`, record `ans = mid` and search left (`r = mid - 1`)!\n\n**C++17 Idiom:**\n```cpp\nint idx = lower_bound(a.begin(), a.end(), target) - a.begin();\n```\n\n**Python 3 Idiom:**\n```python\nimport bisect\nidx = bisect.bisect_left(a, target)\n```\n\n---\n\n### Your Task\nGiven a sorted array of `N` integers and `target`, find the `0`-based index of the **first element `>= target`** (or print `N` if all elements are strictly less than `target`).\n\n**Input Format:**\n- Line 1: `N` and `target`\n- Line 2: `N` sorted integers\n\n**Output Format:**\n- Print the lower-bound index (`0` to `N`).",
        "whyThisMatters": "`lower_bound` / `bisect_left` saves 15 lines of code during timed assessments.",
        "concepts": [
            "binary search",
            "lower_bound",
            "bisect"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Find the first element >= target using lower_bound / bisect_left"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "5 6\n1 3 5 6 9",
                "output": "3",
                "explanation": "First element >= 6 is 6 at index 3."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-39-tc1",
                "input": "5 6\n1 3 5 6 9",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-39-tc2",
                "input": "5 4\n1 3 5 6 9",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-basic-39-tc3",
                "input": "4 20\n2 4 6 8",
                "expectedOutput": "4",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Find first index where a[i] >= target\n    return 0;\n}",
        "pythonStarterCode": "import sys\nimport bisect\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Find first index where a[i] >= target\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `lower_bound(a.begin(), a.end(), target) - a.begin()` in C++ or `bisect.bisect_left(a, target)` in Python."
        ],
        "howToThink": [
            "Whenever `a[mid] >= target`, `mid` is a candidate answer, and any better (smaller) index must lie to the left (`r = mid - 1`)."
        ],
        "approach": "Use binary search (`lower_bound` / `bisect_left`) to locate the first element `>= target`.",
        "pseudocode": "ans = n, l = 0, r = n - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    if a[mid] >= target: ans = mid; r = mid - 1\n    else: l = mid + 1\nprint(ans)",
        "explanation": "Runs in O(log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long target;\n    if (!(cin >> n >> target)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    int idx = (int)(lower_bound(a.begin(), a.end(), target) - a.begin());\n    cout << idx << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nimport bisect\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, target = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    print(bisect.bisect_left(a, target))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `upper_bound` (`>`) instead of `lower_bound` (`>=`)."
        ],
        "timeComplexity": "O(log N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-5",
            "lower-bound-binary-search-lower-bound-bisect-left-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-40",
        "levelId": "amz-basics",
        "title": "Step 40: Binary Search on the Answer — Minimum Shipping Capacity",
        "difficulty": "medium",
        "order": 40,
        "stageNum": 5,
        "stageTitle": "Stage 5: Intervals, Greedy & Binary Search",
        "pattern": "Binary Search on Monotonic Answer Space",
        "amazonContext": "Very common Amazon OA pattern (\"Capacity To Ship Packages\" / \"Koko Eating Bananas\").",
        "description": "### Mini-Lesson: Binary Search on Monotonic Answer Space\nYou can use Binary Search even when the input array is **not sorted**, if you are searching for the **minimum speed/rate `K`** that finishes a job within `H` hours!\n- For a candidate rate `K`, batch `i` of size `piles[i]` takes `ceil(piles[i] / K) = (piles[i] + K - 1) / K` hours.\n- If total hours `<= H`, then `K` is fast enough! Record `ans = K` and try smaller rates (`r = K - 1`). Otherwise try larger rates (`l = K + 1`).\n\n**C++17 Idiom:**\n```cpp\nlong long l = 1, r = *max_element(p.begin(), p.end()), ans = r;\nwhile (l <= r) {\n    long long mid = l + (r - l) / 2, hours = 0;\n    for (long long x : p) hours += (x + mid - 1) / mid;\n    if (hours <= h) { ans = mid; r = mid - 1; }\n    else l = mid + 1;\n}\n```\n\n**Python 3 Idiom:**\n```python\nl, r = 1, max(p)\nans = r\nwhile l <= r:\n    mid = (l + r) // 2\n    hours = sum((x + mid - 1) // mid for x in p)\n    if hours <= h:\n        ans = mid\n        r = mid - 1\n    else:\n        l = mid + 1\n```\n\n---\n\n### Your Task\nGiven `N` warehouse piles `piles[i]` and `H` total hours available, find the **minimum integer processing rate `K` (items/hour)** such that all `N` piles can be cleared within `H` hours (where pile `i` takes `ceil(piles[i] / K)` hours).\n\n**Input Format:**\n- Line 1: `N` and `H`\n- Line 2: `N` space-separated positive integers\n\n**Output Format:**\n- Print the minimum integer rate `K`.",
        "whyThisMatters": "Binary search on the answer space `[1, max(piles)]` turns a hard optimization problem into a simple feasibility check!",
        "concepts": [
            "binary search",
            "binary search on answer"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Binary search over [1, max(p)] using a monotonic feasibility predicate"
        ],
        "constraints": [
            "1 <= N <= H <= 10^9"
        ],
        "examples": [
            {
                "input": "4 8\n3 6 7 11",
                "output": "4",
                "explanation": "At rate K=4, hours needed = ceil(3/4)+ceil(6/4)+ceil(7/4)+ceil(11/4) = 1+2+2+3 = 8 <= 8."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-40-tc1",
                "input": "4 8\n3 6 7 11",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-40-tc2",
                "input": "5 5\n30 11 23 4 20",
                "expectedOutput": "30",
                "hidden": false
            },
            {
                "id": "amz-basic-40-tc3",
                "input": "5 6\n30 11 23 4 20",
                "expectedOutput": "23",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long h;\n    if (!(cin >> n >> h)) return 0;\n    vector<long long> p(n);\n    for (int i = 0; i < n; i++) cin >> p[i];\n    // Binary search on rate K in [1, max(p)]\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, h = int(data[0]), int(data[1])\n    p = [int(x) for x in data[2:2+n]]\n    # Binary search on rate K in [1, max(p)]\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use `(x + mid - 1) / mid` to compute `ceil(x / mid)` using pure integer arithmetic."
        ],
        "howToThink": [
            "If rate `K` works in `<= H` hours, then any rate `> K` also works. That monotonicity lets us binary search `K`!"
        ],
        "approach": "Binary search `mid` in `[1, max(p)]`, checking if `sum(ceil(x / mid)) <= H`.",
        "pseudocode": "l = 1, r = max(p), ans = r\nwhile l <= r:\n    mid = (l + r) // 2\n    if sum((x + mid - 1) // mid for x in p) <= h:\n        ans = mid; r = mid - 1\n    else: l = mid + 1\nprint(ans)",
        "explanation": "Takes O(N log(max(P))) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n; long long h;\n    if (!(cin >> n >> h)) return 0;\n    vector<long long> p(n);\n    long long r = 1;\n    for (int i = 0; i < n; i++) {\n        cin >> p[i];\n        r = max(r, p[i]);\n    }\n    long long l = 1, ans = r;\n    while (l <= r) {\n        long long mid = l + (r - l) / 2;\n        long long hours = 0;\n        for (long long x : p) hours += (x + mid - 1) / mid;\n        if (hours <= h) {\n            ans = mid;\n            r = mid - 1;\n        } else {\n            l = mid + 1;\n        }\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, h = int(data[0]), int(data[1])\n    p = [int(x) for x in data[2:2+n]]\n    l, r = 1, max(p)\n    ans = r\n    while l <= r:\n        mid = (l + r) // 2\n        hours = sum((x + mid - 1) // mid for x in p)\n        if hours <= h:\n            ans = mid\n            r = mid - 1\n        else:\n            l = mid + 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Starting `l = 0`, which causes division by zero when `mid == 0`."
        ],
        "timeComplexity": "O(N log M)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-5",
            "binary-search-on-monotonic-answer-space",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-41",
        "levelId": "amz-basics",
        "title": "Step 41: Stack Basics (LIFO) — Validating Matching Brackets",
        "difficulty": "easy",
        "order": 41,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "LIFO Stack Matching",
        "amazonContext": "Core warm-up for syntax parsing and stack-based OA problems.",
        "description": "### Mini-Lesson: LIFO Stack Matching\nA **Stack** is Last-In, First-Out (LIFO): the most recently opened bracket must be closed first!\n- When you see an opening bracket `(`, `[`, or `{`, push it onto the stack.\n- When you see a closing bracket, check that the stack is **not empty** and `st.top()` matches it, then pop!\n- At the end, the string is valid if and only if the stack is **completely empty**.\n\n**C++17 Idiom:**\n```cpp\nstack<char> st;\nfor (char c : s) {\n    if (c == '(' || c == '[' || c == '{') st.push(c);\n    else {\n        if (st.empty()) return false;\n        st.pop();\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nst = []\nfor c in s:\n    if c in \"([{\": st.append(c)\n    else:\n        if not st or st[-1] != match[c]: return False\n        st.pop()\n```\n\n---\n\n### Your Task\nGiven a string `S` containing only `()`, `[]`, and `{}`, print `true` if the brackets are valid and properly nested, or `false` otherwise.\n\n**Input Format:**\n- A single bracket string `S`\n\n**Output Format:**\n- Print `true` or `false`.",
        "whyThisMatters": "Never call `st.top()` or `st.pop()` in C++ without checking `!st.empty()` first!",
        "concepts": [
            "stack",
            "lifo",
            "strings"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use a stack to match nested opening and closing tokens safely"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "()[]{}",
                "output": "true",
                "explanation": "All brackets match in order."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-41-tc1",
                "input": "()[]{}",
                "expectedOutput": "true",
                "hidden": false
            },
            {
                "id": "amz-basic-41-tc2",
                "input": "([)]",
                "expectedOutput": "false",
                "hidden": false
            },
            {
                "id": "amz-basic-41-tc3",
                "input": "{[]}",
                "expectedOutput": "true",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Use stack<char> to validate brackets\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Use a list as a stack to validate brackets\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Remember to check `st.empty()` at the very end in case there are leftover unclosed opening brackets like `\"(((\"`."
        ],
        "howToThink": [
            "Every closing bracket cancels the most recent unmatched opening bracket."
        ],
        "approach": "Push opening brackets onto a stack, match and pop on closing brackets, and verify the stack is empty at the end.",
        "pseudocode": "st = []\nfor c in s:\n    if c is open: st.push(c)\n    else:\n        if st empty or st.top() != pair(c): return false\n        st.pop()\nreturn st.empty()",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(') st.push(')');\n        else if (c == '[') st.push(']');\n        else if (c == '{') st.push('}');\n        else {\n            if (st.empty() || st.top() != c) {\n                cout << \"false\\n\";\n                return 0;\n            }\n            st.pop();\n        }\n    }\n    cout << (st.empty() ? \"true\" : \"false\") << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    st = []\n    pairs = {')': '(', ']': '[', '}': '{'}\n    for c in s:\n        if c in '([{':\n            st.append(c)\n        else:\n            if not st or st[-1] != pairs.get(c):\n                print(\"false\")\n                return\n            st.pop()\n    print(\"true\" if not st else \"false\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Returning `true` after the loop without checking `st.empty()`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-6",
            "lifo-stack-matching",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-42",
        "levelId": "amz-basics",
        "title": "Step 42: Stack String Building — Remove Adjacent Duplicate Pairs",
        "difficulty": "easy",
        "order": 42,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "String as a LIFO Stack",
        "amazonContext": "Asked in Amazon string reduction and log cleanup problems.",
        "description": "### Mini-Lesson: String as a LIFO Stack\nYou can use a `string` in C++ (or a `list` of characters in Python) directly as a **Stack**! For each character `c`, if `!st.empty() && st.back() == c`, pop `st.pop_back()` (they cancel out!); otherwise `st.push_back(c)`.\n\n**C++17 Idiom:**\n```cpp\nstring st;\nfor (char c : s) {\n    if (!st.empty() && st.back() == c) st.pop_back();\n    else st.push_back(c);\n}\n```\n\n**Python 3 Idiom:**\n```python\nst = []\nfor c in s:\n    if st and st[-1] == c:\n        st.pop()\n    else:\n        st.append(c)\n```\n\n---\n\n### Your Task\nGiven a string `S`, repeatedly remove adjacent equal characters (e.g., `\"abbaca\"` -> remove `\"bb\"` -> `\"aaca\"` -> remove `\"aa\"` -> `\"ca\"`). Print the final string, or `EMPTY` if no characters remain.\n\n**Input Format:**\n- A single lowercase string `S`\n\n**Output Format:**\n- Print the reduced string, or `EMPTY`.",
        "whyThisMatters": "Shows how a stack naturally handles cascading cancellations (when removing `\"bb\"` brings two `\"a\"`s together!).",
        "concepts": [
            "stack",
            "strings"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use a string/list as a stack to handle cascading adjacent removals in O(N)"
        ],
        "constraints": [
            "1 <= |S| <= 100,000"
        ],
        "examples": [
            {
                "input": "abbaca",
                "output": "ca",
                "explanation": "\"bb\" cancels, bringing \"aa\" together which also cancels, leaving \"ca\"."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-42-tc1",
                "input": "abbaca",
                "expectedOutput": "ca",
                "hidden": false
            },
            {
                "id": "amz-basic-42-tc2",
                "input": "azxxzy",
                "expectedOutput": "ay",
                "hidden": false
            },
            {
                "id": "amz-basic-42-tc3",
                "input": "abba",
                "expectedOutput": "EMPTY",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    // Use string st as a stack\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    # Use list st as a stack\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Compare each incoming character `c` with `st.back()` (`st[-1]` in Python)."
        ],
        "howToThink": [
            "When `\"bb\"` is popped, the previous `\"a\"` is now back on top of the stack, ready to match the next `\"a\"`!"
        ],
        "approach": "Push characters onto `st`, popping whenever `st.back() == c`.",
        "pseudocode": "st = []\nfor c in s:\n    if st and st[-1] == c: st.pop()\n    else: st.append(c)\nprint(\"\".join(st) or \"EMPTY\")",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n    string st;\n    for (char c : s) {\n        if (!st.empty() && st.back() == c) st.pop_back();\n        else st.push_back(c);\n    }\n    cout << (st.empty() ? \"EMPTY\" : st) << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s: return\n    st = []\n    for c in s:\n        if st and st[-1] == c:\n            st.pop()\n        else:\n            st.append(c)\n    print(\"\".join(st) if st else \"EMPTY\")\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Repeatedly scanning the string from scratch in O(N^2) instead of using a stack in O(N)."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-6",
            "string-as-a-lifo-stack",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-43",
        "levelId": "amz-basics",
        "title": "Step 43: Monotonic Stack Step 1 — Next Greater Element to the Right",
        "difficulty": "medium",
        "order": 43,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "Monotonic Decreasing Stack",
        "amazonContext": "Foundation for stock span, daily temperatures, and subarray extrema.",
        "description": "### Mini-Lesson: Monotonic Decreasing Stack\nFor each element `a[i]`, how do we find the **first element to its right that is strictly greater than `a[i]`** in `O(N)` total time?\n\nMaintain a **stack of waiting indices** in decreasing order of their values. When a larger element `a[i]` arrives:\n- `while (!st.empty() && a[st.top()] < a[i])`: `a[i]` is the Next Greater Element for `st.top()`! Record `ans[st.top()] = a[i]` and `st.pop()`.\n- Push `i` onto `st`.\n\n**C++17 Idiom:**\n```cpp\nvector<long long> ans(n, -1);\nstack<int> st;\nfor (int i = 0; i < n; i++) {\n    while (!st.empty() && a[st.top()] < a[i]) {\n        ans[st.top()] = a[i];\n        st.pop();\n    }\n    st.push(i);\n}\n```\n\n**Python 3 Idiom:**\n```python\nans = [-1] * n\nst = []\nfor i, x in enumerate(a):\n    while st and a[st[-1]] < x:\n        ans[st.pop()] = x\n    st.append(i)\n```\n\n---\n\n### Your Task\nGiven `N` integers, for each index `i` find the first element to its right (`j > i`) such that `a[j] > a[i]`, or `-1` if none exists. Print the `N` results separated by spaces.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `N` space-separated integers.",
        "whyThisMatters": "Each index is pushed once and popped at most once, turning an O(N^2) search into O(N)!",
        "concepts": [
            "monotonic stack",
            "stack",
            "arrays"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Store indices in a monotonic stack and resolve waiting elements when a larger value arrives"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n2 1 2 4",
                "output": "4 2 4 -1",
                "explanation": "Next greater for 2 is 4, for 1 is 2, for 2 is 4, for 4 is -1."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-43-tc1",
                "input": "4\n2 1 2 4",
                "expectedOutput": "4 2 4 -1",
                "hidden": false
            },
            {
                "id": "amz-basic-43-tc2",
                "input": "5\n5 4 3 2 1",
                "expectedOutput": "-1 -1 -1 -1 -1",
                "hidden": false
            },
            {
                "id": "amz-basic-43-tc3",
                "input": "4\n1 3 2 4",
                "expectedOutput": "3 4 4 -1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Use a monotonic stack of indices\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Use a monotonic stack of indices\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Store **indices** `i` (not values) in the stack so you know which position `ans[st.top()]` to fill when popping!"
        ],
        "howToThink": [
            "Think of the stack as a waiting room of indices still looking for a larger number to their right."
        ],
        "approach": "Iterate left-to-right, popping indices with values `< a[i]` and setting their answer to `a[i]`.",
        "pseudocode": "ans = [-1]*n, st = []\nfor i in 0..n-1:\n    while st and a[st[-1]] < a[i]:\n        ans[st.pop()] = a[i]\n    st.append(i)\nprint(ans)",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n), ans(n, -1);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    stack<int> st;\n    for (int i = 0; i < n; i++) {\n        while (!st.empty() && a[st.top()] < a[i]) {\n            ans[st.top()] = a[i];\n            st.pop();\n        }\n        st.push(i);\n    }\n    for (int i = 0; i < n; i++) {\n        if (i > 0) cout << \" \";\n        cout << ans[i];\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    ans = [-1] * n\n    st = []\n    for i, x in enumerate(a):\n        while st and a[st[-1]] < x:\n            ans[st.pop()] = x\n        st.append(i)\n    print(\" \".join(str(x) for x in ans))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Pushing values instead of indices onto the stack."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-6",
            "monotonic-decreasing-stack",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-44",
        "levelId": "amz-basics",
        "title": "Step 44: Monotonic Stack Step 2 — Previous Smaller Element Index",
        "difficulty": "medium",
        "order": 44,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "Monotonic Increasing Stack",
        "amazonContext": "Directly prepares you for Amazon OA 12 (Sum of Subarray Minimums)!",
        "description": "### Mini-Lesson: Monotonic Increasing Stack\nNow let's find for each index `i` the nearest index `p < i` to its **left** such that `a[p] < a[i]` (or `-1` if none exists).\n\nMaintain a **monotonic increasing stack** of indices:\n- Before pushing `i`, pop all indices from `st` where `a[st.top()] >= a[i]` (they are too big and can never be the previous smaller element for `i` or any future element!).\n- After popping, if `st` is not empty, `st.top()` is the Previous Smaller Index!\n\n**C++17 Idiom:**\n```cpp\nstack<int> st;\nfor (int i = 0; i < n; i++) {\n    while (!st.empty() && a[st.top()] >= a[i]) st.pop();\n    prevSmall[i] = st.empty() ? -1 : st.top();\n    st.push(i);\n}\n```\n\n**Python 3 Idiom:**\n```python\nst = []\nfor i, x in enumerate(a):\n    while st and a[st[-1]] >= x:\n        st.pop()\n    prev_small[i] = st[-1] if st else -1\n    st.append(i)\n```\n\n---\n\n### Your Task\nGiven `N` integers, for each index `i` print the nearest index `p < i` such that `a[p] < a[i]`, or `-1` if no such index exists.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `N` space-separated indices.",
        "whyThisMatters": "This exact 5-line loop is half of Amazon OA 12 (Sum of Subarray Minimums) and Largest Rectangle in Histogram!",
        "concepts": [
            "monotonic stack",
            "stack",
            "arrays"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Maintain a monotonic increasing stack to find previous smaller elements in O(N)"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "5\n3 1 2 4 1",
                "output": "-1 -1 1 2 -1",
                "explanation": "For index 2 (val 2), prev smaller is index 1 (val 1). For index 3 (val 4), prev smaller is index 2 (val 2)."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-44-tc1",
                "input": "5\n3 1 2 4 1",
                "expectedOutput": "-1 -1 1 2 -1",
                "hidden": false
            },
            {
                "id": "amz-basic-44-tc2",
                "input": "4\n1 2 3 4",
                "expectedOutput": "-1 0 1 2",
                "hidden": false
            },
            {
                "id": "amz-basic-44-tc3",
                "input": "4\n4 3 2 1",
                "expectedOutput": "-1 -1 -1 -1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Find previous smaller index for each i\n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Find previous smaller index for each i\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Pop while `a[st.top()] >= a[i]`, then read `st.top()` (or `-1` if empty), then push `i`."
        ],
        "howToThink": [
            "If an earlier element `a[p] >= a[i]`, `a[i]` is both smaller AND more recent, so `a[p]` is useless forever!"
        ],
        "approach": "Pop elements `>= a[i]` from the stack, record `st.top()` as the previous smaller index, and push `i`.",
        "pseudocode": "st = [], out = []\nfor i in 0..n-1:\n    while st and a[st[-1]] >= a[i]: st.pop()\n    out.append(st[-1] if st else -1)\n    st.append(i)\nprint(out)",
        "explanation": "Runs in O(N) time and O(N) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    stack<int> st;\n    for (int i = 0; i < n; i++) {\n        while (!st.empty() && a[st.top()] >= a[i]) st.pop();\n        int prev = st.empty() ? -1 : st.top();\n        if (i > 0) cout << \" \";\n        cout << prev;\n        st.push(i);\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    st = []\n    out = []\n    for i, x in enumerate(a):\n        while st and a[st[-1]] >= x:\n            st.pop()\n        out.append(str(st[-1] if st else -1))\n        st.append(i)\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Popping only `>` instead of `>=`, which would treat an equal value as strictly smaller."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-6",
            "monotonic-increasing-stack",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-45",
        "levelId": "amz-basics",
        "title": "Step 45: Monotonic Deque — Sliding Window Maximum",
        "difficulty": "medium",
        "order": 45,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "Monotonic Decreasing Deque",
        "amazonContext": "The exact data structure that unlocks Amazon OA 1 (Maximum Sustainable Server Cluster)!",
        "description": "### Mini-Lesson: Monotonic Decreasing Deque\nHow do you maintain the **maximum element** inside a sliding window of size `K` in `O(1)` per step?\n\nUse a **Double-Ended Queue (`deque`)** storing indices in decreasing order of their values:\n1. **Pop smaller from back:** `while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();`\n2. **Push current index:** `dq.push_back(i);`\n3. **Evict expired front:** `if (dq.front() <= i - k) dq.pop_front();`\n4. **Query window max in O(1):** `a[dq.front()]` is ALWAYS the maximum of the current window!\n\n**C++17 Idiom:**\n```cpp\ndeque<int> dq;\nfor (int i = 0; i < n; i++) {\n    while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();\n    dq.push_back(i);\n    if (dq.front() <= i - k) dq.pop_front();\n    if (i >= k - 1) cout << a[dq.front()] << \" \";\n}\n```\n\n**Python 3 Idiom:**\n```python\nfrom collections import deque\ndq = deque()\nfor i, x in enumerate(a):\n    while dq and a[dq[-1]] <= x:\n        dq.pop()\n    dq.append(i)\n    if dq[0] <= i - k:\n        dq.popleft()\n    if i >= k - 1:\n        out.append(a[dq[0]])\n```\n\n---\n\n### Your Task\nGiven `N` integers and window size `K`, print the maximum value in each contiguous sliding window of size `K` (`N - K + 1` values separated by spaces).\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print `N - K + 1` space-separated window maximums.",
        "whyThisMatters": "Once you master this 6-line Monotonic Deque loop, you can solve both Sliding Window Maximum (LeetCode 239) and Amazon OA 1!",
        "concepts": [
            "monotonic deque",
            "deque",
            "sliding window"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Maintain sliding window maximums in O(N) total time using a monotonic deque"
        ],
        "constraints": [
            "1 <= K <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "8 3\n1 3 -1 -3 5 3 6 7",
                "output": "3 3 5 5 6 7",
                "explanation": "Max of each window of size 3: 3, 3, 5, 5, 6, 7."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-45-tc1",
                "input": "8 3\n1 3 -1 -3 5 3 6 7",
                "expectedOutput": "3 3 5 5 6 7",
                "hidden": false
            },
            {
                "id": "amz-basic-45-tc2",
                "input": "1 1\n1",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "amz-basic-45-tc3",
                "input": "5 2\n9 7 8 6 5",
                "expectedOutput": "9 8 8 6",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <deque>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // Use a monotonic decreasing deque of indices\n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Use a monotonic decreasing deque of indices\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Pop from the back while `a[dq.back()] <= a[i]`, push `i`, pop from the front if `dq.front() <= i - k`, and read `a[dq.front()]`."
        ],
        "howToThink": [
            "Why a deque instead of a stack? Because we need to pop smaller elements from the **back** AND expired old indices from the **front**!"
        ],
        "approach": "Maintain a monotonic decreasing deque of indices within the active window `[i - k + 1, i]`.",
        "pseudocode": "dq = deque()\nfor i in 0..n-1:\n    while dq and a[dq[-1]] <= a[i]: dq.pop()\n    dq.append(i)\n    if dq[0] <= i - k: dq.popleft()\n    if i >= k - 1: print(a[dq[0]])",
        "explanation": "Every index enters and leaves `dq` at most once, running in O(N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <deque>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n    deque<int> dq;\n    bool first = true;\n    for (int i = 0; i < n; i++) {\n        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();\n        dq.push_back(i);\n        if (dq.front() <= i - k) dq.pop_front();\n        if (i >= k - 1) {\n            if (!first) cout << \" \";\n            cout << a[dq.front()];\n            first = false;\n        }\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    dq = deque()\n    out = []\n    for i, x in enumerate(a):\n        while dq and a[dq[-1]] <= x:\n            dq.pop()\n        dq.append(i)\n        if dq[0] <= i - k:\n            dq.popleft()\n        if i >= k - 1:\n            out.append(str(a[dq[0]]))\n    print(\" \".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Storing values instead of indices in the deque, making it impossible to know when `dq.front()` falls out of the window."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(K)",
        "tags": [
            "stage-6",
            "monotonic-decreasing-deque",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-46",
        "levelId": "amz-basics",
        "title": "Step 46: Max-Heap Basics — Repeatedly Halving the Largest Pile",
        "difficulty": "easy",
        "order": 46,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "Max-Heap / Priority Queue Simulation",
        "amazonContext": "Models Amazon warehouse inventory reduction and greedy priority scheduling.",
        "description": "### Mini-Lesson: Max-Heap / Priority Queue Simulation\nWhen you need to repeatedly extract the **largest** element, modify it, and put it back in `O(log N)` time, use a **Max-Heap**:\n- In C++: `priority_queue<long long>` is a **Max-Heap** by default!\n- In Python: `heapq` is a **Min-Heap**, so push **negative values** (`-x`) to turn it into a Max-Heap!\n\n**C++17 Idiom:**\n```cpp\npriority_queue<long long> pq(a.begin(), a.end());\nfor (int step = 0; step < k; step++) {\n    long long top = pq.top(); pq.pop();\n    pq.push(top - top / 2);\n}\n```\n\n**Python 3 Idiom:**\n```python\nimport heapq\nh = [-x for x in a]\nheapq.heapify(h)\nfor _ in range(k):\n    top = -heapq.heappop(h)\n    heapq.heappush(h, -(top - top // 2))\n```\n\n---\n\n### Your Task\nGiven `N` piles of boxes and `K` operations: in each operation, choose the largest pile `X` and remove `floor(X / 2)` boxes from it (leaving `X - X // 2`). After `K` operations, print the total remaining boxes across all piles.\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the sum of all piles after `K` operations.",
        "whyThisMatters": "Teaches the fundamental difference between C++ `priority_queue` (Max-Heap default) and Python `heapq` (Min-Heap default).",
        "concepts": [
            "heap",
            "priority queue",
            "greedy"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use a Max-Heap in C++ and negated heapq in Python for repeated max extraction"
        ],
        "constraints": [
            "1 <= N, K <= 100,000"
        ],
        "examples": [
            {
                "input": "3 2\n5 4 9",
                "output": "12",
                "explanation": "Step 1: 9 -> 5 (piles: 5, 4, 5). Step 2: 5 -> 3 (piles: 3, 4, 5). Sum = 12."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-46-tc1",
                "input": "3 2\n5 4 9",
                "expectedOutput": "12",
                "hidden": false
            },
            {
                "id": "amz-basic-46-tc2",
                "input": "4 3\n4 3 6 7",
                "expectedOutput": "12",
                "hidden": false
            },
            {
                "id": "amz-basic-46-tc3",
                "input": "2 1\n10 10",
                "expectedOutput": "15",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    // Use priority_queue<long long> to perform k operations\n    return 0;\n}",
        "pythonStarterCode": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Use negated heapq as a max-heap\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "In each step, pop `top`, replace it with `top - top / 2`, and push it back."
        ],
        "howToThink": [
            "Re-sorting the array on every step takes O(K * N log N), whereas a heap takes O((N + K) log N)!"
        ],
        "approach": "Push all elements into a Max-Heap, perform `K` pop-halve-push steps, and sum the heap.",
        "pseudocode": "maxHeap = heapify(a)\nrepeat K times:\n    x = maxHeap.pop()\n    maxHeap.push(x - x // 2)\nprint(sum(maxHeap))",
        "explanation": "Runs in O((N + K) log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    priority_queue<long long> pq;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pq.push(x);\n    }\n    for (int i = 0; i < k; i++) {\n        long long top = pq.top(); pq.pop();\n        pq.push(top - top / 2);\n    }\n    long long total = 0;\n    while (!pq.empty()) {\n        total += pq.top();\n        pq.pop();\n    }\n    cout << total << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    h = [-int(x) for x in data[2:2+n]]\n    heapq.heapify(h)\n    for _ in range(k):\n        top = -heapq.heappop(h)\n        heapq.heappush(h, -(top - top // 2))\n    print(-sum(h))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting to negate values when using Python `heapq` as a Max-Heap."
        ],
        "timeComplexity": "O((N + K) log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-6",
            "max-heap-priority-queue-simulation",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-47",
        "levelId": "amz-basics",
        "title": "Step 47: Min-Heap Basics — Minimum Cost to Connect Warehouse Cables",
        "difficulty": "medium",
        "order": 47,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "Min-Heap Greedy Merging (Huffman Style)",
        "amazonContext": "Classic Amazon OA question (\"Minimum Cost to Connect Ropes / Sticks\").",
        "description": "### Mini-Lesson: Min-Heap Greedy Merging (Huffman Style)\nSuppose you have `N` cables of lengths `a[i]`. Connecting two cables of lengths `X` and `Y` into one cable of length `X + Y` costs `X + Y`. To minimize total cost to connect all cables into one, **always merge the two shortest cables currently available** using a **Min-Heap**!\n- In C++: `priority_queue<long long, vector<long long>, greater<long long>>`\n- In Python: `heapq.heapify(a)`\n\n**C++17 Idiom:**\n```cpp\npriority_queue<long long, vector<long long>, greater<long long>> pq(a.begin(), a.end());\nlong long cost = 0;\nwhile (pq.size() > 1) {\n    long long x = pq.top(); pq.pop();\n    long long y = pq.top(); pq.pop();\n    cost += x + y;\n    pq.push(x + y);\n}\n```\n\n**Python 3 Idiom:**\n```python\nimport heapq\nheapq.heapify(a)\ncost = 0\nwhile len(a) > 1:\n    s = heapq.heappop(a) + heapq.heappop(a)\n    cost += s\n    heapq.heappush(a, s)\n```\n\n---\n\n### Your Task\nGiven `N` cable lengths, find the minimum total cost to connect all `N` cables into a single cable.\n\n**Input Format:**\n- Line 1: integer `N`\n- Line 2: `N` space-separated positive integers\n\n**Output Format:**\n- Print the minimum total cost.",
        "whyThisMatters": "\"Minimum Cost to Connect Ropes\" is one of the longest-running Amazon SDE Intern OA questions in history!",
        "concepts": [
            "heap",
            "min-heap",
            "greedy"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Repeatedly pop the two smallest elements from a Min-Heap and push their sum"
        ],
        "constraints": [
            "1 <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "4\n4 3 2 6",
                "output": "29",
                "explanation": "Merge 2+3=5 (cost 5), merge 4+5=9 (cost 9), merge 6+9=15 (cost 15). Total = 5 + 9 + 15 = 29."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-47-tc1",
                "input": "4\n4 3 2 6",
                "expectedOutput": "29",
                "hidden": false
            },
            {
                "id": "amz-basic-47-tc2",
                "input": "3\n1 8 3",
                "expectedOutput": "16",
                "hidden": false
            },
            {
                "id": "amz-basic-47-tc3",
                "input": "1\n10",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    // Use a Min-Heap to repeatedly merge the two smallest cables\n    return 0;\n}",
        "pythonStarterCode": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    # Use heapq to repeatedly merge the two smallest cables\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "When `N == 1`, the loop `while (pq.size() > 1)` does not run and the cost is `0`!"
        ],
        "howToThink": [
            "Cables merged early get their weight added to the cost multiple times, so the smallest cables should always be merged first."
        ],
        "approach": "Push all lengths into a Min-Heap; while size > 1, pop two smallest, add their sum to `cost`, and push the sum back.",
        "pseudocode": "minHeap = heapify(a), cost = 0\nwhile len(minHeap) > 1:\n    s = minHeap.pop() + minHeap.pop()\n    cost += s\n    minHeap.push(s)\nprint(cost)",
        "explanation": "Runs in O(N log N) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    priority_queue<long long, vector<long long>, greater<long long>> pq;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pq.push(x);\n    }\n    long long cost = 0;\n    while (pq.size() > 1) {\n        long long x = pq.top(); pq.pop();\n        long long y = pq.top(); pq.pop();\n        cost += x + y;\n        pq.push(x + y);\n    }\n    cout << cost << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    heapq.heapify(a)\n    cost = 0\n    while len(a) > 1:\n        s = heapq.heappop(a) + heapq.heappop(a)\n        cost += s\n        heapq.heappush(a, s)\n    print(cost)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Sorting once and summing prefixes without pushing merged cables back into a heap."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-6",
            "min-heap-greedy-merging-huffman-style-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-48",
        "levelId": "amz-basics",
        "title": "Step 48: Min-Heap of Size K — Finding the K-th Largest Score",
        "difficulty": "easy",
        "order": 48,
        "stageNum": 6,
        "stageTitle": "Stage 6: Stacks, Monotonic Deques & Priority Queues",
        "pattern": "Bounded Min-Heap of Size K",
        "amazonContext": "Standard streaming Top-K pattern tested across Amazon OAs.",
        "description": "### Mini-Lesson: Bounded Min-Heap of Size K\nTo find the **K-th largest** element in a stream, maintain a **Min-Heap of size at most `K`**:\n- Push each element `x` into `minHeap`.\n- Whenever `minHeap.size() > K`, pop the smallest element!\n- At the end, `minHeap` holds the `K` largest elements, and its root (`minHeap.top()` / `min_heap[0]`) is the smallest among those `K` — which is the **K-th largest overall**!\n\n**C++17 Idiom:**\n```cpp\npriority_queue<long long, vector<long long>, greater<long long>> pq;\nfor (long long x : a) {\n    pq.push(x);\n    if ((int)pq.size() > k) pq.pop();\n}\ncout << pq.top();\n```\n\n**Python 3 Idiom:**\n```python\nmin_heap = []\nfor x in a:\n    heapq.heappush(min_heap, x)\n    if len(min_heap) > k:\n        heapq.heappop(min_heap)\nprint(min_heap[0])\n```\n\n---\n\n### Your Task\nGiven `N` integers and `K`, print the `K`-th largest element in sorted order.\n\n**Input Format:**\n- Line 1: `N` and `K`\n- Line 2: `N` space-separated integers\n\n**Output Format:**\n- Print the `K`-th largest integer.",
        "whyThisMatters": "Uses only O(K) memory and O(N log K) time, ideal when N is huge and K is small.",
        "concepts": [
            "heap",
            "min-heap",
            "top-k"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Maintain a Min-Heap of size K to track the K largest elements"
        ],
        "constraints": [
            "1 <= K <= N <= 100,000"
        ],
        "examples": [
            {
                "input": "6 2\n3 2 1 5 6 4",
                "output": "5",
                "explanation": "2nd largest is 5."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-48-tc1",
                "input": "6 2\n3 2 1 5 6 4",
                "expectedOutput": "5",
                "hidden": false
            },
            {
                "id": "amz-basic-48-tc2",
                "input": "9 4\n3 2 3 1 2 4 5 5 6",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-48-tc3",
                "input": "3 1\n-10 -5 -20",
                "expectedOutput": "-5",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    // Maintain a min-heap of size k\n    return 0;\n}",
        "pythonStarterCode": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    # Maintain a min-heap of size k\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use a Min-Heap so that popping removes the smallest element whenever size > K."
        ],
        "howToThink": [
            "A Min-Heap evicts small elements, keeping the K largest elements inside!"
        ],
        "approach": "Push each number into a Min-Heap and pop whenever size exceeds `K`. Output `top()`.",
        "pseudocode": "minHeap = []\nfor x in a:\n    minHeap.push(x)\n    if len(minHeap) > k: minHeap.pop()\nprint(minHeap[0])",
        "explanation": "Runs in O(N log K) time and O(K) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    priority_queue<long long, vector<long long>, greater<long long>> pq;\n    for (int i = 0; i < n; i++) {\n        long long x; cin >> x;\n        pq.push(x);\n        if ((int)pq.size() > k) pq.pop();\n    }\n    cout << pq.top() << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data: return\n    n, k = int(data[0]), int(data[1])\n    min_heap = []\n    for x in data[2:2+n]:\n        heapq.heappush(min_heap, int(x))\n        if len(min_heap) > k:\n            heapq.heappop(min_heap)\n    print(min_heap[0])\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using a Max-Heap of size K, which keeps the K smallest elements instead of the K largest."
        ],
        "timeComplexity": "O(N log K)",
        "spaceComplexity": "O(K)",
        "tags": [
            "stage-6",
            "bounded-min-heap-of-size-k",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-49",
        "levelId": "amz-basics",
        "title": "Step 49: 2D Grid 4-Directional Neighbor Sum",
        "difficulty": "easy",
        "order": 49,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "2D Grid Direction Arrays (dr, dc) & Bounds Checking",
        "amazonContext": "Before doing BFS or DFS on an Amazon warehouse grid, you must master iterating over the 4 cardinal neighbors (Up, Down, Left, Right) without writing 4 messy if-statements.",
        "description": "### Mini-Lesson: 2D Grid Direction Arrays (dr, dc) & Bounds Checking\nOn an `R x C` grid, cell `(r, c)` has up to 4 neighbors: Up `(r-1, c)`, Down `(r+1, c)`, Left `(r, c-1)`, and Right `(r, c+1)`.\nInstead of writing 4 separate `if` blocks, professional programmers use **direction arrays** `dr = {-1, 1, 0, 0}` and `dc = {0, 0, -1, 1}` and a single boundary check:\n`0 <= nr && nr < R && 0 <= nc && nc < C`.\n\n**C++17 Idiom:**\n```cpp\nint dr[4] = {-1, 1, 0, 0};\nint dc[4] = {0, 0, -1, 1};\nlong long neighborSum = 0;\nfor (int d = 0; d < 4; d++) {\n    int nr = r + dr[d], nc = c + dc[d];\n    if (nr >= 0 && nr < R && nc >= 0 && nc < C) {\n        neighborSum += grid[nr][nc];\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nneighbor_sum = 0\nfor dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n    nr, nc = r + dr, c + dc\n    if 0 <= nr < R and 0 <= nc < C:\n        neighbor_sum += grid[nr][nc]\n```\n\n---\n\n### Your Task\nGiven an `R x C` grid of integers and a query cell `(qr, qc)` (0-indexed), compute the **sum of all valid 4-directional neighbors** of `(qr, qc)` (do not include `grid[qr][qc]` itself).\n\n**Input Format:**\n- First line: four space-separated integers `R`, `C`, `qr`, and `qc`\n- Next `R` lines: `C` space-separated integers\n\n**Output Format:**\n- Print a single integer: the sum of the valid 4-directional neighbors of `(qr, qc)`.",
        "whyThisMatters": "This direction-array loop is the inner loop of every single Grid BFS and Grid DFS problem on the Amazon OA.",
        "concepts": [
            "2d grids",
            "arrays",
            "matrix"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Use direction arrays dr and dc to inspect 4-directional neighbors cleanly",
            "Perform safe 0-indexed boundary checks on a 2D grid"
        ],
        "constraints": [
            "1 <= R, C <= 100",
            "0 <= qr < R",
            "0 <= qc < C"
        ],
        "examples": [
            {
                "input": "3 3 1 1\n1 2 3\n4 5 6\n7 8 9",
                "output": "20",
                "explanation": "Cell (1, 1) is 5. Its 4 neighbors are Up=2, Down=8, Left=4, Right=6. Sum = 2 + 8 + 4 + 6 = 20."
            },
            {
                "input": "2 2 0 0\n10 20\n30 40",
                "output": "50",
                "explanation": "Corner cell (0, 0) only has 2 valid neighbors: Down=30 and Right=20. Sum = 50."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-49-tc1",
                "input": "3 3 1 1\n1 2 3\n4 5 6\n7 8 9",
                "expectedOutput": "20",
                "hidden": false
            },
            {
                "id": "amz-basic-49-tc2",
                "input": "2 2 0 0\n10 20\n30 40",
                "expectedOutput": "50",
                "hidden": false
            },
            {
                "id": "amz-basic-49-tc3",
                "input": "1 1 0 0\n99",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int R, C, qr, qc;\n    if (!(cin >> R >> C >> qr >> qc)) return 0;\n    vector<vector<long long>> grid(R, vector<long long>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n\n    // Sum valid 4-directional neighbors of (qr, qc)\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C, qr, qc = int(data[0]), int(data[1]), int(data[2]), int(data[3])\n    grid = []\n    idx = 4\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n\n    # Sum valid 4-directional neighbors of (qr, qc)\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Define `dr = {-1, 1, 0, 0}` and `dc = {0, 0, -1, 1}`.",
            "For each `d` from `0` to `3`, compute `nr = qr + dr[d]` and `nc = qc + dc[d]` and check `0 <= nr < R` and `0 <= nc < C`."
        ],
        "howToThink": [
            "Corner and edge cells have fewer than 4 neighbors.",
            "Checking `0 <= nr < R and 0 <= nc < C` before indexing `grid[nr][nc]` prevents out-of-bounds crashes."
        ],
        "approach": "Iterate over the 4 direction offsets, check bounds, and add valid neighbor values.",
        "pseudocode": "ans = 0\nfor (dr, dc) in [(-1,0), (1,0), (0,-1), (0,1)]:\n    nr = qr + dr, nc = qc + dc\n    if 0 <= nr < R and 0 <= nc < C:\n        ans += grid[nr][nc]\nprint(ans)",
        "explanation": "Inspects at most 4 cells in O(1) time after reading the grid.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int R, C, qr, qc;\n    if (!(cin >> R >> C >> qr >> qc)) return 0;\n    vector<vector<long long>> grid(R, vector<long long>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n    int dr[4] = {-1, 1, 0, 0};\n    int dc[4] = {0, 0, -1, 1};\n    long long sum = 0;\n    for (int d = 0; d < 4; d++) {\n        int nr = qr + dr[d], nc = qc + dc[d];\n        if (nr >= 0 && nr < R && nc >= 0 && nc < C) {\n            sum += grid[nr][nc];\n        }\n    }\n    cout << sum << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C, qr, qc = int(data[0]), int(data[1]), int(data[2]), int(data[3])\n    grid = []\n    idx = 4\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n    ans = 0\n    for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n        nr, nc = qr + dr, qc + dc\n        if 0 <= nr < R and 0 <= nc < C:\n            ans += grid[nr][nc]\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Indexing `grid[nr][nc]` before checking if `nr` and `nc` are within bounds."
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "tags": [
            "stage-7",
            "2d-grid-direction-arrays-dr-dc-bounds-checking",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-50",
        "levelId": "amz-basics",
        "title": "Step 50: Warehouse Zone Flood Fill Size from (0, 0)",
        "difficulty": "easy",
        "order": 50,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "Grid Flood Fill (BFS / DFS Connected Component)",
        "amazonContext": "Measures the reachable floor area of an Amazon robotics zone starting from the top-left charging station (0, 0).",
        "description": "### Mini-Lesson: Grid Flood Fill (BFS / DFS Connected Component)\nOnce you know how to check the 4 neighbors of a cell (Step 49), you can explore an entire connected region of `1`s using **Flood Fill** (via a Queue or Stack):\n1. If `grid[0][0] == 0`, the region size is `0`.\n2. Otherwise, push `(0, 0)` into a queue and **immediately mark `grid[0][0] = 0`** (visited) so you never visit it twice.\n3. While the queue is not empty, pop a cell, increment `count`, and push all valid neighbors that have value `1` (marking them `0` immediately when pushing).\n\n**C++17 Idiom:**\n```cpp\nqueue<pair<int, int>> q;\nif (grid[0][0] == 1) {\n    q.push({0, 0});\n    grid[0][0] = 0; // mark visited!\n}\nint area = 0;\nwhile (!q.empty()) {\n    auto [r, c] = q.front(); q.pop();\n    area++;\n    for (int d = 0; d < 4; d++) {\n        int nr = r + dr[d], nc = c + dc[d];\n        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 1) {\n            grid[nr][nc] = 0;\n            q.push({nr, nc});\n        }\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nfrom collections import deque\n\nq = deque()\nif grid[0][0] == 1:\n    q.append((0, 0))\n    grid[0][0] = 0  # mark visited!\narea = 0\nwhile q:\n    r, c = q.popleft()\n    area += 1\n    for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n        nr, nc = r + dr, c + dc\n        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n            grid[nr][nc] = 0\n            q.append((nr, nc))\n```\n\n---\n\n### Your Task\nGiven an `R x C` binary grid (`1` = open floor, `0` = obstacle), find the **total number of open floor cells (`1`) connected 4-directionally to `(0, 0)`** (including `(0, 0)` itself). If `grid[0][0] == 0`, output `0`.\n\n**Input Format:**\n- First line: two integers `R` and `C`\n- Next `R` lines: `C` space-separated integers (`0` or `1`)\n\n**Output Format:**\n- Print a single integer: the size of the connected component starting at `(0, 0)`.",
        "whyThisMatters": "Flood Fill is the building block of \"Number of Islands\" and \"Max Area of Island\".",
        "concepts": [
            "bfs",
            "dfs",
            "flood fill",
            "2d grids"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Mark grid cells as visited immediately upon pushing to the queue to avoid duplicate work",
            "Count the size of a single connected component on a 2D grid"
        ],
        "constraints": [
            "1 <= R, C <= 200"
        ],
        "examples": [
            {
                "input": "3 3\n1 1 0\n0 1 0\n0 0 1",
                "output": "3",
                "explanation": "Cells (0,0), (0,1), and (1,1) are connected. Cell (2,2) is diagonal and not 4-directionally connected."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-50-tc1",
                "input": "3 3\n1 1 0\n0 1 0\n0 0 1",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-50-tc2",
                "input": "2 2\n0 1\n1 1",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "amz-basic-50-tc3",
                "input": "2 3\n1 1 1\n1 0 1",
                "expectedOutput": "5",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n\n    // Flood fill from (0, 0) and count reachable 1s\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n\n    # Flood fill from (0, 0) and count reachable 1s\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Check if `grid[0][0] == 0` first; if so, print `0`.",
            "Otherwise push `(0, 0)` into a queue, set `grid[0][0] = 0`, and run BFS to count all reachable `1`s."
        ],
        "howToThink": [
            "Why do we set `grid[nr][nc] = 0` when we PUSH `(nr, nc)` into the queue rather than when we POP it? Because if we wait until pop, multiple neighbors might push the same cell into the queue, causing exponential memory blowup!"
        ],
        "approach": "Run BFS from `(0, 0)` if it is `1`, flipping visited `1`s to `0` and counting popped cells.",
        "pseudocode": "if grid[0][0] == 0: return 0\nq = deque([(0, 0)]), grid[0][0] = 0, area = 0\nwhile q:\n    r, c = q.popleft()\n    area += 1\n    for valid neighbor (nr, nc) with grid[nr][nc] == 1:\n        grid[nr][nc] = 0\n        q.append((nr, nc))\nprint(area)",
        "explanation": "Visits each cell at most once in O(R * C) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n    if (grid[0][0] == 0) {\n        cout << 0 << \"\\n\";\n        return 0;\n    }\n    queue<pair<int, int>> q;\n    q.push({0, 0});\n    grid[0][0] = 0;\n    int area = 0;\n    int dr[4] = {-1, 1, 0, 0};\n    int dc[4] = {0, 0, -1, 1};\n    while (!q.empty()) {\n        auto [r, c] = q.front();\n        q.pop();\n        area++;\n        for (int d = 0; d < 4; d++) {\n            int nr = r + dr[d], nc = c + dc[d];\n            if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 1) {\n                grid[nr][nc] = 0;\n                q.push({nr, nc});\n            }\n        }\n    }\n    cout << area << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n    if grid[0][0] == 0:\n        print(0)\n        return\n    q = deque([(0, 0)])\n    grid[0][0] = 0\n    area = 0\n    while q:\n        r, c = q.popleft()\n        area += 1\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                grid[nr][nc] = 0\n                q.append((nr, nc))\n    print(area)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Marking cells visited on pop instead of on push, leading to duplicate queue entries."
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "tags": [
            "stage-7",
            "grid-flood-fill-bfs-dfs-connected-component-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-51",
        "levelId": "amz-basics",
        "title": "Step 51: Count Disconnected Warehouse Storage Islands",
        "difficulty": "medium",
        "order": 51,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "Number of Islands (Outer Grid Loop + Flood Fill)",
        "amazonContext": "LeetCode 200 (Number of Islands) is one of Amazon’s top 5 most asked interview questions of all time.",
        "description": "### Mini-Lesson: Number of Islands (Outer Grid Loop + Flood Fill)\nIn Step 50, you flood-filled a single connected region starting from `(0, 0)`.\nHow do you count **all** disconnected islands of `1`s in a grid?\nWrap your Flood Fill inside a nested loop over every cell `(r, c)` in the grid:\n- Whenever you see `grid[r][c] == 1`, you have found a brand-new island! Increment `islands++`.\n- Immediately trigger Flood Fill from `(r, c)` to sink (turn into `0`) every cell belonging to that island so you never count it again!\n\n**C++17 Idiom:**\n```cpp\nint islands = 0;\nfor (int r = 0; r < R; r++) {\n    for (int c = 0; c < C; c++) {\n        if (grid[r][c] == 1) {\n            islands++;\n            // Run BFS/DFS flood fill from (r, c) to set all connected 1s to 0\n        }\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nislands = 0\nfor r in range(R):\n    for c in range(C):\n        if grid[r][c] == 1:\n            islands += 1\n            # Run BFS/DFS flood fill from (r, c) to set all connected 1s to 0\n```\n\n---\n\n### Your Task\nGiven an `R x C` binary grid (`1` = storage rack cluster, `0` = aisle), count the **total number of disconnected 4-directional islands of `1`s**.\n\n**Input Format:**\n- First line: two integers `R` and `C`\n- Next `R` lines: `C` space-separated integers (`0` or `1`)\n\n**Output Format:**\n- Print a single integer: the number of islands.",
        "whyThisMatters": "Number of Islands is an essential Amazon SDE 1 benchmark problem.",
        "concepts": [
            "bfs",
            "dfs",
            "connected components",
            "2d grids"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Combine an outer grid scan with an inner BFS/DFS flood fill",
            "Count connected components on a 2D grid in O(R * C) time"
        ],
        "constraints": [
            "1 <= R, C <= 300"
        ],
        "examples": [
            {
                "input": "4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1",
                "output": "3",
                "explanation": "Top-left 2x2 block is island 1, center (2,2) is island 2, bottom-right 1x2 is island 3."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-51-tc1",
                "input": "4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-51-tc2",
                "input": "2 2\n0 0\n0 0",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "amz-basic-51-tc3",
                "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
                "expectedOutput": "5",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n\n    // Count islands using BFS/DFS flood fill\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n\n    # Count islands using BFS/DFS flood fill\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Loop `r` from `0` to `R - 1` and `c` from `0` to `C - 1`.",
            "If `grid[r][c] == 1`, increment `islands` and run the exact BFS from Step 50 starting at `(r, c)` to zero out the entire island."
        ],
        "howToThink": [
            "Even though there is a BFS inside a double for-loop, every cell with `1` is turned into `0` at most once! So the total time across the entire algorithm is still linear `O(R * C)`."
        ],
        "approach": "Scan every cell; when a `1` is found, increment island count and BFS flood-fill its connected component to `0`.",
        "pseudocode": "islands = 0\nfor r in 0..R-1:\n    for c in 0..C-1:\n        if grid[r][c] == 1:\n            islands += 1\n            bfs_sink(r, c)\nprint(islands)",
        "explanation": "Each cell is visited a constant number of times, running in O(R * C) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n    int islands = 0;\n    int dr[4] = {-1, 1, 0, 0};\n    int dc[4] = {0, 0, -1, 1};\n    for (int i = 0; i < R; i++) {\n        for (int j = 0; j < C; j++) {\n            if (grid[i][j] == 1) {\n                islands++;\n                queue<pair<int, int>> q;\n                q.push({i, j});\n                grid[i][j] = 0;\n                while (!q.empty()) {\n                    auto [r, c] = q.front();\n                    q.pop();\n                    for (int d = 0; d < 4; d++) {\n                        int nr = r + dr[d], nc = c + dc[d];\n                        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 1) {\n                            grid[nr][nc] = 0;\n                            q.push({nr, nc});\n                        }\n                    }\n                }\n            }\n        }\n    }\n    cout << islands << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n    islands = 0\n    for i in range(R):\n        for j in range(C):\n            if grid[i][j] == 1:\n                islands += 1\n                q = deque([(i, j)])\n                grid[i][j] = 0\n                while q:\n                    r, c = q.popleft()\n                    for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n                        nr, nc = r + dr, c + dc\n                        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                            grid[nr][nc] = 0\n                            q.append((nr, nc))\n    print(islands)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using recursive DFS in Python on large grids without increasing recursion limit (`sys.setrecursionlimit`); iterative BFS with `deque` never hits recursion limits!"
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "tags": [
            "stage-7",
            "number-of-islands-outer-grid-loop-flood-fill-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-52",
        "levelId": "amz-basics",
        "title": "Step 52: Warehouse Robot Shortest Path (Grid BFS)",
        "difficulty": "medium",
        "order": 52,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "Breadth-First Search (BFS) Shortest Path on Unweighted Grid",
        "amazonContext": "Amazon Robotics (Kiva robots) OA problems regularly ask for the minimum steps to reach a target pod avoiding obstacles.",
        "description": "### Mini-Lesson: Breadth-First Search (BFS) Shortest Path on Unweighted Grid\nWhy do we use **Breadth-First Search (BFS)** with a FIFO Queue instead of DFS when finding the **shortest path** on an unweighted grid?\nBecause a Queue explores cells **layer by layer** by distance: first all cells at distance `0`, then distance `1`, then distance `2`, and so on.\nThe **very first time** you pop the target cell, you are guaranteed to have found the minimum number of steps!\n\n**C++17 Idiom:**\n```cpp\nqueue<tuple<int, int, int>> q;\nq.push({0, 0, 0}); // (row, col, steps)\ngrid[0][0] = 1;    // mark visited as obstacle\nwhile (!q.empty()) {\n    auto [r, c, dist] = q.front(); q.pop();\n    if (r == R - 1 && c == C - 1) return dist;\n    for (int d = 0; d < 4; d++) {\n        int nr = r + dr[d], nc = c + dc[d];\n        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 0) {\n            grid[nr][nc] = 1; // mark visited immediately\n            q.push({nr, nc, dist + 1});\n        }\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nfrom collections import deque\n\nq = deque([(0, 0, 0)])  # (row, col, steps)\ngrid[0][0] = 1          # mark visited\nwhile q:\n    r, c, dist = q.popleft()\n    if r == R - 1 and c == C - 1:\n        return dist\n    for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n        nr, nc = r + dr, c + dc\n        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 0:\n            grid[nr][nc] = 1\n            q.append((nr, nc, dist + 1))\n```\n\n---\n\n### Your Task\nAn Amazon warehouse is modeled as an `R x C` grid where `0` is an open aisle and `1` is a blocked rack. A robot starts at `(0, 0)` and wants to reach `(R - 1, C - 1)` moving 4-directionally.\nFind the **minimum number of steps** required, or `-1` if the destination is unreachable (or if start/end is blocked).\n\n**Input Format:**\n- First line: two integers `R` and `C`\n- Next `R` lines: `C` space-separated integers (`0` or `1`)\n\n**Output Format:**\n- Print a single integer: minimum steps to reach `(R - 1, C - 1)`, or `-1`.",
        "whyThisMatters": "Grid BFS shortest path is one of the most frequent coding assessment patterns at Amazon.",
        "concepts": [
            "bfs",
            "shortest path",
            "queue",
            "2d grids"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Store (row, col, distance) in a BFS FIFO queue",
            "Return the shortest path distance as soon as the target coordinates are reached"
        ],
        "constraints": [
            "1 <= R, C <= 500"
        ],
        "examples": [
            {
                "input": "3 3\n0 0 0\n1 1 0\n0 0 0",
                "output": "4",
                "explanation": "Path: (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) takes 4 steps."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-52-tc1",
                "input": "3 3\n0 0 0\n1 1 0\n0 0 0",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-52-tc2",
                "input": "2 2\n0 1\n1 0",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "amz-basic-52-tc3",
                "input": "1 1\n0",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <tuple>\nusing namespace std;\n\nint main() {\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n\n    // Run BFS from (0, 0) to (R - 1, C - 1)\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n\n    # Run BFS from (0, 0) to (R - 1, C - 1)\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "If `grid[0][0] == 1` or `grid[R-1][C-1] == 1`, print `-1` immediately.",
            "Push `(0, 0, 0)` into the queue and set `grid[0][0] = 1` so you do not revisit it."
        ],
        "howToThink": [
            "In an unweighted graph/grid, BFS explores nodes in increasing order of distance from the start.",
            "Always mark `grid[nr][nc] = 1` when pushing `(nr, nc, dist + 1)` into the queue."
        ],
        "approach": "Use a FIFO queue starting at `(0, 0, 0)` and explore 4-directional open neighbors until `(R - 1, C - 1)` is popped or the queue empties.",
        "pseudocode": "if grid[0][0] == 1: return -1\nq = deque([(0, 0, 0)]), grid[0][0] = 1\nwhile q:\n    r, c, d = q.popleft()\n    if (r, c) == (R - 1, C - 1): return d\n    for valid neighbor (nr, nc) with grid[nr][nc] == 0:\n        grid[nr][nc] = 1\n        q.append((nr, nc, d + 1))\nreturn -1",
        "explanation": "Each cell is enqueued at most once, running in O(R * C) time and space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <tuple>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n    if (grid[0][0] == 1 || grid[R - 1][C - 1] == 1) {\n        cout << -1 << \"\\n\";\n        return 0;\n    }\n    queue<tuple<int, int, int>> q;\n    q.push({0, 0, 0});\n    grid[0][0] = 1;\n    int dr[4] = {-1, 1, 0, 0};\n    int dc[4] = {0, 0, -1, 1};\n    while (!q.empty()) {\n        auto [r, c, d] = q.front();\n        q.pop();\n        if (r == R - 1 && c == C - 1) {\n            cout << d << \"\\n\";\n            return 0;\n        }\n        for (int k = 0; k < 4; k++) {\n            int nr = r + dr[k], nc = c + dc[k];\n            if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 0) {\n                grid[nr][nc] = 1;\n                q.push({nr, nc, d + 1});\n            }\n        }\n    }\n    cout << -1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n    if grid[0][0] == 1 or grid[R - 1][C - 1] == 1:\n        print(-1)\n        return\n    q = deque([(0, 0, 0)])\n    grid[0][0] = 1\n    while q:\n        r, c, d = q.popleft()\n        if r == R - 1 and c == C - 1:\n            print(d)\n            return\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 0:\n                grid[nr][nc] = 1\n                q.append((nr, nc, d + 1))\n    print(-1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `list.pop(0)` in Python instead of `collections.deque.popleft()`."
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "tags": [
            "stage-7",
            "breadth-first-search-bfs-shortest-path-on-unweighted-grid",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-53",
        "levelId": "amz-basics",
        "title": "Step 53: Multi-Source BFS (Maximum Distance to Nearest Station)",
        "difficulty": "medium",
        "order": 53,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "Multi-Source Breadth-First Search (BFS)",
        "amazonContext": "Directly prepares you for Amazon OA 6 (Rotting Oranges / Server Patch Propagation).",
        "description": "### Mini-Lesson: Multi-Source Breadth-First Search (BFS)\nWhat if a grid has **multiple starting sources** (e.g. multiple fulfillment stations `1` or multiple patched servers) that all spread out **simultaneously**?\nInstead of running a separate BFS from every `1` (which would be way too slow), push **all initial `1`s into the BFS queue at distance `0`** before the `while` loop starts!\nThen run a single standard BFS. The wavefronts from all sources expand in parallel!\n\n**C++17 Idiom:**\n```cpp\nqueue<tuple<int, int, int>> q;\nfor (int r = 0; r < R; r++) {\n    for (int c = 0; c < C; c++) {\n        if (grid[r][c] == 1) q.push({r, c, 0}); // Push ALL sources at dist 0!\n    }\n}\nint maxDist = 0;\nwhile (!q.empty()) {\n    auto [r, c, d] = q.front(); q.pop();\n    maxDist = max(maxDist, d);\n    for (int k = 0; k < 4; k++) {\n        int nr = r + dr[k], nc = c + dc[k];\n        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 0) {\n            grid[nr][nc] = 1; // mark visited\n            q.push({nr, nc, d + 1});\n        }\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nfrom collections import deque\n\nq = deque()\nfor r in range(R):\n    for c in range(C):\n        if grid[r][c] == 1:\n            q.append((r, c, 0))  # Push ALL sources at dist 0!\nmax_dist = 0\nwhile q:\n    r, c, d = q.popleft()\n    max_dist = max(max_dist, d)\n    for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n        nr, nc = r + dr, c + dc\n        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 0:\n            grid[nr][nc] = 1\n            q.append((nr, nc, d + 1))\n```\n\n---\n\n### Your Task\nGiven an `R x C` binary grid where `1` represents an Amazon fulfillment station and `0` represents a residential block, find the **maximum Manhattan distance** from any residential block `0` to its nearest fulfillment station `1`. (Assume at least one `1` exists; if all cells are `1`, output `0`).\n\n**Input Format:**\n- First line: two integers `R` and `C`\n- Next `R` lines: `C` space-separated integers (`0` or `1`)\n\n**Output Format:**\n- Print a single integer: the maximum distance from any `0` to its nearest `1`.",
        "whyThisMatters": "Multi-Source BFS is the exact algorithm required for Amazon OA 6 (Rotting Oranges / Server Patch Propagation).",
        "concepts": [
            "multi-source bfs",
            "bfs",
            "queue",
            "2d grids"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Initialize a BFS queue with multiple starting nodes at distance 0",
            "Compute shortest distances to the nearest source for all grid cells in O(R * C) time"
        ],
        "constraints": [
            "1 <= R, C <= 500"
        ],
        "examples": [
            {
                "input": "3 3\n1 0 1\n0 0 0\n1 0 1",
                "output": "2",
                "explanation": "The center cell (1, 1) is at distance 2 from all four corner stations."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-53-tc1",
                "input": "3 3\n1 0 1\n0 0 0\n1 0 1",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-basic-53-tc2",
                "input": "3 3\n1 0 0\n0 0 0\n0 0 0",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-53-tc3",
                "input": "2 2\n1 1\n1 1",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <tuple>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    for (int i = 0; i < R; i++)\n        for (int j = 0; j < C; j++)\n            cin >> grid[i][j];\n\n    // Push all initial 1s into queue at dist 0 and run Multi-Source BFS\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(R):\n        grid.append([int(x) for x in data[idx:idx+C]])\n        idx += C\n\n    # Push all initial 1s into queue at dist 0 and run Multi-Source BFS\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Scan the grid and push `(r, c, 0)` for every cell that starts with value `1`.",
            "Then run standard BFS, flipping visited `0`s to `1` and tracking the maximum distance `d` popped from the queue."
        ],
        "howToThink": [
            "Imagine a virtual \"super-source\" connected to every `1` with edge weight 0. Pushing all `1`s into the queue at `d = 0` is equivalent to starting BFS from that super-source!"
        ],
        "approach": "Enqueue all `1`s with distance 0, then expand layer by layer into `0`s while tracking the maximum distance.",
        "pseudocode": "q = deque of all (r, c, 0) where grid[r][c] == 1\nmax_d = 0\nwhile q:\n    r, c, d = q.popleft()\n    max_d = max(max_d, d)\n    for valid neighbor (nr, nc) with grid[nr][nc] == 0:\n        grid[nr][nc] = 1\n        q.append((nr, nc, d + 1))\nprint(max_d)",
        "explanation": "Runs in O(R * C) time and space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <tuple>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int R, C;\n    if (!(cin >> R >> C)) return 0;\n    vector<vector<int>> grid(R, vector<int>(C));\n    queue<tuple<int, int, int>> q;\n    for (int i = 0; i < R; i++) {\n        for (int j = 0; j < C; j++) {\n            cin >> grid[i][j];\n            if (grid[i][j] == 1) q.push({i, j, 0});\n        }\n    }\n    int maxDist = 0;\n    int dr[4] = {-1, 1, 0, 0};\n    int dc[4] = {0, 0, -1, 1};\n    while (!q.empty()) {\n        auto [r, c, d] = q.front();\n        q.pop();\n        maxDist = max(maxDist, d);\n        for (int k = 0; k < 4; k++) {\n            int nr = r + dr[k], nc = c + dc[k];\n            if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] == 0) {\n                grid[nr][nc] = 1;\n                q.push({nr, nc, d + 1});\n            }\n        }\n    }\n    cout << maxDist << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    R, C = int(data[0]), int(data[1])\n    grid = []\n    q = deque()\n    idx = 2\n    for i in range(R):\n        row = [int(x) for x in data[idx:idx+C]]\n        idx += C\n        for j, v in enumerate(row):\n            if v == 1:\n                q.append((i, j, 0))\n        grid.append(row)\n    max_d = 0\n    while q:\n        r, c, d = q.popleft()\n        if d > max_d:\n            max_d = d\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 0:\n                grid[nr][nc] = 1\n                q.append((nr, nc, d + 1))\n    print(max_d)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Starting a separate BFS from each `0` or each `1`, which takes O((R * C)^2) time."
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "tags": [
            "stage-7",
            "multi-source-breadth-first-search-bfs-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-54",
        "levelId": "amz-basics",
        "title": "Step 54: Graph Adjacency Matrix Connected Clusters",
        "difficulty": "medium",
        "order": 54,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "Graph Connected Components (Adjacency Matrix BFS / DFS)",
        "amazonContext": "Directly prepares you for Amazon OA 7 (Audible Book Clusters / Gifting Groups).",
        "description": "### Mini-Lesson: Graph Connected Components (Adjacency Matrix BFS / DFS)\nBe careful not to confuse a **2D Grid of Islands** (Step 51) with an **`N x N` Graph Adjacency Matrix**!\nIn an `N x N` adjacency matrix `M`, there are `N` nodes (`0` to `N - 1`), and `M[u][v] == 1` means node `u` is directly connected to node `v`.\nTo count connected clusters:\n1. Keep a 1D boolean array `visited[N]` initialized to `false`.\n2. Loop `i` from `0` to `N - 1`. If `!visited[i]`, increment `clusters++` and run BFS/DFS from node `i`, checking all `v` from `0` to `N - 1` where `M[u][v] == 1 && !visited[v]`.\n\n**C++17 Idiom:**\n```cpp\nvector<bool> vis(n, false);\nint clusters = 0;\nfor (int i = 0; i < n; i++) {\n    if (!vis[i]) {\n        clusters++;\n        queue<int> q;\n        q.push(i); vis[i] = true;\n        while (!q.empty()) {\n            int u = q.front(); q.pop();\n            for (int v = 0; v < n; v++) {\n                if (M[u][v] == 1 && !vis[v]) {\n                    vis[v] = true;\n                    q.push(v);\n                }\n            }\n        }\n    }\n}\n```\n\n**Python 3 Idiom:**\n```python\nvis = [False] * n\nclusters = 0\nfor i in range(n):\n    if not vis[i]:\n        clusters += 1\n        q = deque([i])\n        vis[i] = True\n        while q:\n            u = q.popleft()\n            for v in range(n):\n                if M[u][v] == 1 and not vis[v]:\n                    vis[v] = True\n                    q.append(v)\n```\n\n---\n\n### Your Task\nGiven an `N x N` symmetric binary matrix `M` where `M[u][v] = 1` means microservice `u` and microservice `v` communicate (and `M[u][u] = 1`), find the **number of connected microservice clusters**.\n\n**Input Format:**\n- First line: integer `N`\n- Next `N` lines: `N` space-separated integers (`0` or `1`)\n\n**Output Format:**\n- Print a single integer: the number of connected clusters.",
        "whyThisMatters": "Directly teaches the graph traversal logic for Amazon OA 7 (\"Audible Gifting Groups\").",
        "concepts": [
            "graphs",
            "bfs",
            "dfs",
            "connected components"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Distinguish an N x N graph adjacency matrix from a 2D spatial grid",
            "Count connected components in an undirected graph in O(N^2) time"
        ],
        "constraints": [
            "1 <= N <= 300"
        ],
        "examples": [
            {
                "input": "3\n1 1 0\n1 1 0\n0 0 1",
                "output": "2",
                "explanation": "Nodes 0 and 1 form one cluster; node 2 forms a second cluster."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-54-tc1",
                "input": "3\n1 1 0\n1 1 0\n0 0 1",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-basic-54-tc2",
                "input": "3\n1 0 0\n0 1 0\n0 0 1",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-54-tc3",
                "input": "4\n1 0 0 1\n0 1 1 0\n0 1 1 1\n1 0 1 1",
                "expectedOutput": "1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<vector<int>> M(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            cin >> M[i][j];\n\n    // Count connected graph components using visited[n]\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    M = []\n    idx = 1\n    for _ in range(n):\n        M.append([int(x) for x in data[idx:idx+n]])\n        idx += n\n\n    # Count connected graph components using vis = [False] * n\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Use a 1D boolean array `vis` of size `N`.",
            "When visiting node `u`, loop `v` from `0` to `N - 1` and check if `M[u][v] == 1` and `!vis[v]`."
        ],
        "howToThink": [
            "Notice how node `0` can be connected to node `3` (`M[0][3] == 1`) even though `(0, 3)` is not adjacent to `(0, 0)` in the matrix! That is why we loop `v` across the entire row `M[u][0..N-1]` rather than moving 4-directionally."
        ],
        "approach": "Iterate over all nodes `0..N-1`; for each unvisited node, increment `clusters` and BFS across all neighbors `v` where `M[u][v] == 1`.",
        "pseudocode": "vis = [False] * N, clusters = 0\nfor i in 0..N-1:\n    if not vis[i]:\n        clusters += 1\n        bfs(i)\nprint(clusters)",
        "explanation": "Inspects each matrix entry a constant number of times in O(N^2) time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<vector<int>> M(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            cin >> M[i][j];\n    vector<bool> vis(n, false);\n    int clusters = 0;\n    for (int i = 0; i < n; i++) {\n        if (!vis[i]) {\n            clusters++;\n            queue<int> q;\n            q.push(i);\n            vis[i] = true;\n            while (!q.empty()) {\n                int u = q.front();\n                q.pop();\n                for (int v = 0; v < n; v++) {\n                    if (M[u][v] == 1 && !vis[v]) {\n                        vis[v] = true;\n                        q.push(v);\n                    }\n                }\n            }\n        }\n    }\n    cout << clusters << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    M = []\n    idx = 1\n    for _ in range(n):\n        M.append([int(x) for x in data[idx:idx+n]])\n        idx += n\n    vis = [False] * n\n    clusters = 0\n    for i in range(n):\n        if not vis[i]:\n            clusters += 1\n            q = deque([i])\n            vis[i] = True\n            while q:\n                u = q.popleft()\n                for v in range(n):\n                    if M[u][v] == 1 and not vis[v]:\n                        vis[v] = True\n                        q.append(v)\n    print(clusters)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using 4-directional grid movement on an adjacency matrix!"
        ],
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-7",
            "graph-connected-components-adjacency-matrix-bfs-dfs-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-55",
        "levelId": "amz-basics",
        "title": "Step 55: 1D Dynamic Programming Step 1 (Climbing Warehouse Stairs)",
        "difficulty": "easy",
        "order": 55,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "1D Dynamic Programming (State Transition dp[i] = dp[i-1] + dp[i-2])",
        "amazonContext": "Introduces Dynamic Programming (building solutions to larger problems from smaller subproblems) without recursion overhead.",
        "description": "### Mini-Lesson: 1D Dynamic Programming (State Transition dp[i] = dp[i-1] + dp[i-2])\n**Dynamic Programming (DP)** is simply remembering past answers in an array `dp` so you never recompute the same subproblem twice!\nSuppose a robot can climb `1` or `2` steps at a time to reach step `N`. How many distinct ways can it reach step `i`?\n- Its last move was either a 1-step from `i - 1` OR a 2-step from `i - 2`.\n- Therefore: `dp[i] = dp[i - 1] + dp[i - 2]`, with base cases `dp[1] = 1` and `dp[2] = 2`.\n\n**C++17 Idiom:**\n```cpp\nvector<long long> dp(n + 1, 0);\ndp[1] = 1;\nif (n >= 2) dp[2] = 2;\nfor (int i = 3; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n}\ncout << dp[n] << \"\\n\";\n```\n\n**Python 3 Idiom:**\n```python\ndp = [0] * (n + 1)\ndp[1] = 1\nif n >= 2:\n    dp[2] = 2\nfor i in range(3, n + 1):\n    dp[i] = dp[i - 1] + dp[i - 2]\nprint(dp[n])\n```\n\n---\n\n### Your Task\nA warehouse robot needs to climb `N` steps. Each move it can climb either `1` step or `2` steps. Count the **total number of distinct ways** to reach the top step `N`.\n\n**Input Format:**\n- A single integer `N` (`1 <= N <= 80`)\n\n**Output Format:**\n- Print a single 64-bit integer: the number of distinct ways to climb `N` steps.",
        "whyThisMatters": "Climbing Stairs is the universal gateway to 1D Dynamic Programming.",
        "concepts": [
            "dynamic programming",
            "arrays",
            "memoization"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Identify base cases and recurrence relations in 1D Dynamic Programming",
            "Avoid O(2^N) exponential recursion by filling a DP table iteratively in O(N)"
        ],
        "constraints": [
            "1 <= N <= 80"
        ],
        "examples": [
            {
                "input": "3",
                "output": "3",
                "explanation": "Three ways: (1+1+1), (1+2), and (2+1)."
            },
            {
                "input": "5",
                "output": "8",
                "explanation": "dp = [0, 1, 2, 3, 5, 8]."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-55-tc1",
                "input": "3",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-basic-55-tc2",
                "input": "5",
                "expectedOutput": "8",
                "hidden": false
            },
            {
                "id": "amz-basic-55-tc3",
                "input": "1",
                "expectedOutput": "1",
                "hidden": true
            },
            {
                "id": "amz-basic-55-tc4",
                "input": "50",
                "expectedOutput": "20365011074",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n\n    // Compute dp[n] iteratively using long long\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n\n    # Compute dp[n] iteratively\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Handle `n == 1` (`1`) and `n == 2` (`2`) as base cases.",
            "For `i` from `3` to `n`, `dp[i] = dp[i - 1] + dp[i - 2]`. Use `long long` in C++ since `N = 50` exceeds 32-bit `int`!"
        ],
        "howToThink": [
            "Naive recursion `ways(n) = ways(n-1) + ways(n-2)` recomputes the same values millions of times (`O(2^N)`).",
            "Storing `dp[i]` bottom-up from `1` to `N` computes each step once in `O(N)` time!"
        ],
        "approach": "Fill a 1D array `dp[1..N]` with `dp[1] = 1`, `dp[2] = 2`, and `dp[i] = dp[i-1] + dp[i-2]`.",
        "pseudocode": "dp[1] = 1, dp[2] = 2\nfor i from 3 to N:\n    dp[i] = dp[i - 1] + dp[i - 2]\nprint(dp[N])",
        "explanation": "Runs in O(N) time and O(N) (or O(1)) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> dp(n + 2, 0);\n    dp[1] = 1;\n    dp[2] = 2;\n    for (int i = 3; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];\n    }\n    cout << dp[n] << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    dp = [0] * (n + 2)\n    dp[1] = 1\n    dp[2] = 2\n    for i in range(3, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    print(dp[n])\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Writing unmemoized recursion `ways(n - 1) + ways(n - 2)`, which TLEs for N >= 40."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "stage-7",
            "1d-dynamic-programming-state-transition-dp-i-dp-i-1-dp-i-2-",
            "amazon-prep"
        ]
    },
    {
        "baseId": "amz-basic-56",
        "levelId": "amz-basics",
        "title": "Step 56: 1D Dynamic Programming Step 2 (Max Non-Adjacent Package Value)",
        "difficulty": "medium",
        "order": 56,
        "stageNum": 7,
        "stageTitle": "Stage 7: 2D Grids, BFS, DFS & Dynamic Programming",
        "pattern": "1D Decision DP (Take vs Skip: max(dp[i-1], dp[i-2] + val[i]))",
        "amazonContext": "Classic \"House Robber\" / \"Maximum Non-Adjacent Picking\" DP pattern asked in Amazon OAs and technical phone screens.",
        "description": "### Mini-Lesson: 1D Decision DP (Take vs Skip: max(dp[i-1], dp[i-2] + val[i]))\nIn Step 55, we **added** subproblems (`dp[i-1] + dp[i-2]`) to count ways.\nWhen a problem asks for the **maximum value** subject to a constraint (like \"you cannot pick two adjacent items\"), each step `i` is a **Take or Skip decision**:\n- **Skip item `i`**: Best value is `dp[i - 1]`.\n- **Take item `i`**: You cannot take item `i - 1`, so you add `val[i]` to the best value from `i - 2`: `dp[i - 2] + val[i]`.\n- Transition: `dp[i] = max(dp[i - 1], dp[i - 2] + val[i])`.\n\n**C++17 Idiom:**\n```cpp\nlong long prev2 = 0; // dp[i - 2]\nlong long prev1 = 0; // dp[i - 1]\nfor (long long v : val) {\n    long long cur = max(prev1, prev2 + v);\n    prev2 = prev1;\n    prev1 = cur;\n}\ncout << prev1 << \"\\n\";\n```\n\n**Python 3 Idiom:**\n```python\nprev2 = 0  # dp[i - 2]\nprev1 = 0  # dp[i - 1]\nfor v in val:\n    prev2, prev1 = prev1, max(prev1, prev2 + v)\nprint(prev1)\n```\n\n---\n\n### Your Task\nAn Amazon conveyor belt has `N` packages with values `val[0..N-1]`. A robotic arm cannot pick two **adjacent** packages because it needs 1 slot of cooldown time after picking a package.\nFind the **maximum total value** the robotic arm can collect.\n\n**Input Format:**\n- First line: integer `N`\n- Second line: `N` space-separated non-negative integers `val`\n\n**Output Format:**\n- Print a single 64-bit integer: the maximum total value with no two adjacent packages picked.",
        "whyThisMatters": "Completes your 56-step Zero-to-Hero foundation by mastering the \"Take vs Skip\" DP transition—you are now ready to crush the 12 Challenging Amazon OA questions!",
        "concepts": [
            "dynamic programming",
            "optimization",
            "arrays"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Formulate the Take vs Skip DP transition max(dp[i-1], dp[i-2] + val[i])",
            "Optimize 1D DP space from O(N) to O(1) using two rolling variables"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "0 <= val[i] <= 10^9"
        ],
        "examples": [
            {
                "input": "4\n1 2 3 1",
                "output": "4",
                "explanation": "Pick index 0 (1) and index 2 (3) for total = 4."
            },
            {
                "input": "5\n2 7 9 3 1",
                "output": "12",
                "explanation": "Pick index 0 (2), index 2 (9), and index 4 (1) for total = 12."
            }
        ],
        "testCases": [
            {
                "id": "amz-basic-56-tc1",
                "input": "4\n1 2 3 1",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-basic-56-tc2",
                "input": "5\n2 7 9 3 1",
                "expectedOutput": "12",
                "hidden": false
            },
            {
                "id": "amz-basic-56-tc3",
                "input": "4\n10 1 1 10",
                "expectedOutput": "20",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> val(n);\n    for (int i = 0; i < n; i++) cin >> val[i];\n\n    // Use DP: cur = max(prev1, prev2 + val[i])\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    val = [int(x) for x in data[1:1+n]]\n\n    # Use DP: cur = max(prev1, prev2 + v)\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Greedy (picking only even indices vs only odd indices) fails on `[10, 1, 1, 10]` where the optimal answer picks index 0 (`10`) and index 3 (`10`) = `20`!",
            "Maintain `prev2 = 0` and `prev1 = 0`. For each value `v`, compute `cur = max(prev1, prev2 + v)`."
        ],
        "howToThink": [
            "At each package `i`, ask: \"Do I skip package `i` (keeping `prev1`), or do I take package `i` (getting `prev2 + val[i]`)?\"",
            "Taking the maximum of those two choices at every step solves the entire problem in one pass!"
        ],
        "approach": "Iterate through the array maintaining `prev2` (`dp[i-2]`) and `prev1` (`dp[i-1]`), updating `cur = max(prev1, prev2 + val[i])`.",
        "pseudocode": "prev2 = 0, prev1 = 0\nfor v in val:\n    cur = max(prev1, prev2 + v)\n    prev2 = prev1\n    prev1 = cur\nprint(prev1)",
        "explanation": "Runs in O(N) time and O(1) space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    long long prev2 = 0, prev1 = 0;\n    for (int i = 0; i < n; i++) {\n        long long v;\n        cin >> v;\n        long long cur = max(prev1, prev2 + v);\n        prev2 = prev1;\n        prev1 = cur;\n    }\n    cout << prev1 << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    val = [int(x) for x in data[1:1+n]]\n    prev2 = 0\n    prev1 = 0\n    for v in val:\n        prev2, prev1 = prev1, max(prev1, prev2 + v)\n    print(prev1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Simply comparing the sum of even indices vs the sum of odd indices, which fails on `[10, 1, 1, 10]`."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "stage-7",
            "1d-decision-dp-take-vs-skip-max-dp-i-1-dp-i-2-val-i-",
            "amazon-prep"
        ]
    }
];
