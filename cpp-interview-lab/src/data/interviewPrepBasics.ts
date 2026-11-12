import { Problem } from './types';

export interface DualLanguageProblemSpec {
    baseId: string; // e.g., 'amz-basic-01'
    levelId: string; // 'amz-basics' | 'amz-challenges'
    title: string;
    difficulty: 'beginner' | 'easy' | 'medium' | 'hard';
    order: number;
    pattern: string;
    amazonContext: string;
    description: string;
    whyThisMatters: string;
    concepts: string[];
    prerequisites: string[];
    learningObjectives: string[];
    constraints: string[];
    examples: { input: string; output: string; explanation?: string }[];
    testCases: { id: string; input: string; expectedOutput: string; hidden: boolean }[];
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

export function buildDualTrackProblems(specs: DualLanguageProblemSpec[]): {
    cpp: Problem[];
    python: Problem[];
} {
    const cpp: Problem[] = [];
    const python: Problem[] = [];

    for (const s of specs) {
        const baseProblem: Omit<Problem, 'id' | 'starterCode' | 'solution'> = {
            levelId: s.levelId,
            title: s.title,
            type: 'coding',
            difficulty: s.difficulty,
            order: s.order,
            description: s.description,
            whyThisMatters: s.whyThisMatters,
            concepts: s.concepts,
            prerequisites: s.prerequisites,
            learningObjectives: s.learningObjectives,
            constraints: s.constraints,
            examples: s.examples,
            testCases: s.testCases,
            pythonStarterCode: s.pythonStarterCode,
            hints: s.hints,
            howToThink: s.howToThink,
            approach: s.approach,
            pseudocode: s.pseudocode,
            explanation: s.explanation,
            pythonSolution: s.pythonSolution,
            commonMistakes: s.commonMistakes,
            timeComplexity: s.timeComplexity,
            spaceComplexity: s.spaceComplexity,
            interviewRelevance: 'high',
            tags: s.tags,
        };

        cpp.push({
            ...baseProblem,
            id: s.baseId,
            starterCode: s.cppStarterCode,
            solution: s.cppSolution,
        });

        python.push({
            ...baseProblem,
            id: `py-${s.baseId}`,
            starterCode: s.pythonStarterCode,
            solution: s.pythonSolution,
        });
    }

    return { cpp, python };
}

export const amazonBasicsSpecs: DualLanguageProblemSpec[] = [
    {
        baseId: 'amz-basic-01',
        levelId: 'amz-basics',
        title: 'Basics 1: Prefix Sums — Warehouse Inventory Queries',
        difficulty: 'easy',
        order: 1,
        pattern: 'Prefix Sums',
        amazonContext: 'Foundation for Amazon subarray & warehouse shipment range queries.',
        description: `An Amazon fulfillment center tracks the number of packages processed across $N$ consecutive hours in an array \`packages\`. Managers frequently ask for the total packages processed between hour index $L$ and hour index $R$ (0-indexed, inclusive).

Instead of looping from $L$ to $R$ for every query (which takes $O(N \\cdot Q)$ and causes **Time Limit Exceeded** on Amazon's hidden test cases), build a **Prefix Sum array** to answer each of the $Q$ queries in $O(1)$ time.

**Input Format:**
- First line: two integers $N$ and $Q$
- Second line: $N$ space-separated integers representing \`packages\`
- Next $Q$ lines: two space-separated integers $L$ and $R$ ($0 \\le L \\le R < N$)

**Output Format:**
- Print $Q$ lines, where each line is the sum of \`packages[L..R]\`.`,
        whyThisMatters: 'Almost 30% of Amazon OA array problems require range sum lookups or subarray sum calculations. Mastering 1-indexed prefix sums eliminates O(N^2) brute-force timeouts.',
        concepts: ['prefix sums', 'arrays', 'range queries', 'time complexity'],
        prerequisites: ['arrays', 'loops'],
        learningObjectives: [
            'Construct a 1-indexed prefix sum array in O(N) time',
            'Answer arbitrary range sum queries [L, R] in O(1) time',
            'Use 64-bit integers (long long in C++) to prevent integer overflow'
        ],
        constraints: ['1 <= N, Q <= 10^5', '0 <= packages[i] <= 10^9', '0 <= L <= R < N'],
        examples: [
            {
                input: '5 3\n10 20 30 40 50\n0 2\n1 3\n0 4',
                output: '60\n90\n150',
                explanation: 'Query [0,2]: 10+20+30 = 60. Query [1,3]: 20+30+40 = 90. Query [0,4]: sum of all = 150.'
            }
        ],
        testCases: [
            { id: 'amz-b01-tc1', input: '5 3\n10 20 30 40 50\n0 2\n1 3\n0 4', expectedOutput: '60\n90\n150', hidden: false },
            { id: 'amz-b01-tc2', input: '4 2\n5 0 12 8\n1 1\n2 3', expectedOutput: '0\n20', hidden: false },
            { id: 'amz-b01-tc3', input: '3 2\n1000000000 1000000000 1000000000\n0 2\n1 2', expectedOutput: '3000000000\n2000000000', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n, q;
    if (!(cin >> n >> q)) return 0;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    // Build prefix sum array and answer Q queries in O(1) each
    
    return 0;
}`,
        pythonStarterCode: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, q = int(data[0]), int(data[1])
    a = [int(x) for x in data[2:2+n]]
    
    # Build prefix sum array and answer Q queries in O(1) each

if __name__ == "__main__":
    solve()`,
        hints: [
            'Define an array `pref` of size `N + 1` initialized to 0, where `pref[i + 1] = pref[i] + a[i]`.',
            'With a 1-indexed prefix sum array, the sum of elements from index `L` to `R` (inclusive) is simply `pref[R + 1] - pref[L]`!'
        ],
        howToThink: [
            'Notice that recomputing `a[L] + ... + a[R]` for each query repeats work.',
            'If we know the cumulative sum from index `0` up to `R` and subtract the cumulative sum from `0` up to `L - 1`, we get the exact range `[L, R]` in one subtraction.',
            'In C++, always use `long long` for prefix sums because summing $10^5$ numbers of size $10^9$ exceeds a 32-bit `int`.'
        ],
        approach: 'Precompute `pref[i]` = sum of first `i` elements (`0 <= i <= N`). Then each query `(L, R)` is `pref[R + 1] - pref[L]`.',
        pseudocode: `pref = array of size N + 1 filled with 0
for i from 0 to N - 1:
    pref[i + 1] = pref[i] + a[i]
for each query (L, R):
    print(pref[R + 1] - pref[L])`,
        explanation: 'Building `pref` takes $O(N)$ time and $O(N)$ space. Each of the $Q$ queries takes $O(1)$ time, yielding $O(N + Q)$ total time.',
        cppSolution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n, q;
    if (!(cin >> n >> q)) return 0;
    vector<long long> pref(n + 1, 0);
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        pref[i + 1] = pref[i] + x;
    }
    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        cout << (pref[r + 1] - pref[l]) << "\\n";
    }
    return 0;
}`,
        pythonSolution: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, q = int(data[0]), int(data[1])
    pref = [0] * (n + 1)
    for i in range(n):
        pref[i + 1] = pref[i] + int(data[2 + i])
    idx = 2 + n
    out = []
    for _ in range(q):
        l, r = int(data[idx]), int(data[idx + 1])
        idx += 2
        out.append(str(pref[r + 1] - pref[l]))
    print("\\n".join(out))

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Using 32-bit int in C++ and overflowing when sums exceed 2 * 10^9.',
            'Off-by-one errors when L = 0 if using a 0-indexed prefix array without boundary checks.'
        ],
        timeComplexity: 'O(N + Q)',
        spaceComplexity: 'O(N)',
        tags: ['prefix-sum', 'arrays', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-02',
        levelId: 'amz-basics',
        title: 'Basics 2: Hash Maps & Custom Sort — Top K Frequent Items',
        difficulty: 'easy',
        order: 2,
        pattern: 'Hash Map + Custom Sorting',
        amazonContext: 'Core building block for Amazon best-seller rankings and log aggregation.',
        description: `Given a list of $N$ purchased product IDs (integers) and an integer $K$, find the $K$ most frequently purchased product IDs.

**Tie-Breaking Rule (Amazon Standard):**
If two product IDs have the exact same purchase frequency, the product with the **smaller product ID** comes first.

**Input Format:**
- First line: two integers $N$ and $K$
- Second line: $N$ space-separated integers representing product IDs

**Output Format:**
- Print the top $K$ product IDs separated by spaces on a single line.`,
        whyThisMatters: 'Counting frequencies with `unordered_map` (C++) or `collections.Counter` (Python) and sorting with a custom tie-breaker comparator appears in over half of Amazon OA questions.',
        concepts: ['hash maps', 'frequency counting', 'custom sorting', 'comparators'],
        prerequisites: ['arrays', 'sorting'],
        learningObjectives: [
            'Count element frequencies in O(N) average time using a hash map',
            'Write a custom comparator / lambda key to sort by frequency descending, then ID ascending'
        ],
        constraints: ['1 <= K <= distinct elements <= N <= 10^5'],
        examples: [
            {
                input: '7 2\n30 10 20 10 30 20 20',
                output: '20 10',
                explanation: 'Frequencies: 20->3, 10->2, 30->2. Top 1 is 20 (count 3). Between 10 and 30 (both count 2), 10 is smaller.'
            }
        ],
        testCases: [
            { id: 'amz-b02-tc1', input: '7 2\n30 10 20 10 30 20 20', expectedOutput: '20 10', hidden: false },
            { id: 'amz-b02-tc2', input: '5 3\n5 4 3 2 1', expectedOutput: '1 2 3', hidden: false },
            { id: 'amz-b02-tc3', input: '6 1\n9 9 8 8 7 7', expectedOutput: '7', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];

    // Count frequencies and sort by (-freq, id)
    
    return 0;
}`,
        pythonStarterCode: `import sys
from collections import Counter

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, k = int(data[0]), int(data[1])
    nums = [int(x) for x in data[2:2+n]]

    # Count frequencies and sort by (-freq, id)

if __name__ == "__main__":
    solve()`,
        hints: [
            'In C++, store `(id, count)` pairs in a `vector<pair<int, int>>` and sort with a lambda: `[](const auto& a, const auto& b) { if (a.second != b.second) return a.second > b.second; return a.first < b.first; }`.',
            'In Python, `Counter(nums).items()` can be sorted using `key=lambda item: (-item[1], item[0])`.'
        ],
        howToThink: [
            'Step 1: Aggregate raw items into `(item_id, frequency)` pairs using a hash map.',
            'Step 2: Sort the unique items using a two-part rule: primary key is `frequency` descending, secondary key is `item_id` ascending.',
            'Step 3: Output the first $K$ keys.'
        ],
        approach: 'Use a hash map to count occurrences in $O(N)$ time, then sort the unique `(id, count)` pairs using a custom comparator in $O(U \\log U)$ time.',
        pseudocode: `freq = HashMap()
for x in nums: freq[x] += 1
items = list of (id, count) from freq
sort items by (-count, id)
print first K ids`,
        explanation: 'Hash map aggregation takes $O(N)$ time, and sorting $U$ unique elements takes $O(U \\log U)$ time.',
        cppSolution: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    unordered_map<int, int> freq;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        freq[x]++;
    }
    vector<pair<int, int>> items(freq.begin(), freq.end());
    sort(items.begin(), items.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
        if (a.second != b.second) return a.second > b.second;
        return a.first < b.first;
    });
    for (int i = 0; i < k && i < (int)items.size(); i++) {
        if (i > 0) cout << " ";
        cout << items[i].first;
    }
    cout << "\\n";
    return 0;
}`,
        pythonSolution: `import sys
from collections import Counter

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, k = int(data[0]), int(data[1])
    nums = [int(x) for x in data[2:2+n]]
    freq = Counter(nums)
    sorted_items = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    ans = [str(item[0]) for item in sorted_items[:k]]
    print(" ".join(ans))

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Forgetting the tie-breaker rule when two elements have equal frequency.',
            'Sorting the entire N-element array repeatedly instead of sorting unique keys.'
        ],
        timeComplexity: 'O(N log N)',
        spaceComplexity: 'O(N)',
        tags: ['hash-map', 'sorting', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-03',
        levelId: 'amz-basics',
        title: 'Basics 3: Fixed Sliding Window — Peak K-Minute Server Traffic',
        difficulty: 'easy',
        order: 3,
        pattern: 'Fixed-Size Sliding Window',
        amazonContext: 'Directly prepares you for AWS Server Cluster & Stock K-Window OA problems.',
        description: `An AWS CloudWatch monitor records the number of API requests per minute over $N$ minutes. Given an integer $K$, find the **maximum total requests** received during any contiguous window of exactly $K$ minutes.

**Input Format:**
- First line: two integers $N$ and $K$ ($1 \\le K \\le N$)
- Second line: $N$ space-separated integers representing requests per minute

**Output Format:**
- Print a single integer: the maximum sum of any contiguous subarray of length $K$.`,
        whyThisMatters: 'Sliding window is Amazon’s #1 favorite array pattern. Learning how to slide a window of size K in O(1) per step (by adding the entering element and subtracting the leaving element) is essential.',
        concepts: ['sliding window', 'contiguous subarrays', 'rolling sum'],
        prerequisites: ['arrays', 'loops'],
        learningObjectives: [
            'Maintain a rolling window sum of fixed size K',
            'Update the window in O(1) by adding arr[i] and subtracting arr[i - K]'
        ],
        constraints: ['1 <= K <= N <= 10^5', '-10^4 <= arr[i] <= 10^4'],
        examples: [
            {
                input: '6 3\n2 1 5 1 3 2',
                output: '9',
                explanation: 'Windows of size 3: [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6. Maximum is 9.'
            }
        ],
        testCases: [
            { id: 'amz-b03-tc1', input: '6 3\n2 1 5 1 3 2', expectedOutput: '9', hidden: false },
            { id: 'amz-b03-tc2', input: '4 2\n-5 -2 -1 -8', expectedOutput: '-3', hidden: false },
            { id: 'amz-b03-tc3', input: '5 5\n10 20 30 40 50', expectedOutput: '150', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    // Compute initial window of size k, then slide across the array
    
    return 0;
}`,
        pythonStarterCode: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, k = int(data[0]), int(data[1])
    a = [int(x) for x in data[2:2+n]]

    # Compute initial window of size k, then slide across the array

if __name__ == "__main__":
    solve()`,
        hints: [
            'First compute the sum of the first `K` elements (`a[0] + ... + a[K-1]`) and set `max_sum = window_sum`.',
            'Then loop `i` from `K` to `N - 1`: update `window_sum += a[i] - a[i - K]` and update `max_sum = max(max_sum, window_sum)`.'
        ],
        howToThink: [
            'When a window of size $K$ shifts right by 1 position, $K-1$ elements stay the same!',
            'Only one new element (`a[i]`) enters on the right, and one old element (`a[i - K]`) leaves on the left.',
            'Initialize `max_sum` to the first window sum (not 0!) so negative numbers are handled properly.'
        ],
        approach: 'Compute the sum of the first $K$ elements, then slide the window one index at a time in $O(1)$ per step.',
        pseudocode: `window_sum = sum(a[0 .. K-1])
max_sum = window_sum
for i from K to N - 1:
    window_sum += a[i] - a[i - K]
    max_sum = max(max_sum, window_sum)
print(max_sum)`,
        explanation: 'Each element enters the window once and leaves at most once, running in $O(N)$ time and $O(1)$ auxiliary space.',
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    long long window_sum = 0;
    for (int i = 0; i < k; i++) window_sum += a[i];
    long long max_sum = window_sum;
    for (int i = k; i < n; i++) {
        window_sum += a[i] - a[i - k];
        max_sum = max(max_sum, window_sum);
    }
    cout << max_sum << "\\n";
    return 0;
}`,
        pythonSolution: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, k = int(data[0]), int(data[1])
    a = [int(x) for x in data[2:2+n]]
    window_sum = sum(a[:k])
    max_sum = window_sum
    for i in range(k, n):
        window_sum += a[i] - a[i - k]
        if window_sum > max_sum:
            max_sum = window_sum
    print(max_sum)

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Initializing `max_sum = 0`, which fails when all array elements are negative.',
            'Re-summing `sum(a[i:i+k])` inside the loop, which turns O(N) into O(N * K).'
        ],
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
        tags: ['sliding-window', 'arrays', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-04',
        levelId: 'amz-basics',
        title: 'Basics 4: Variable Sliding Window — Longest Unique Package Sequence',
        difficulty: 'easy',
        order: 4,
        pattern: 'Variable-Size Sliding Window',
        amazonContext: 'Teaches the expand-right / shrink-left template used in hard Amazon OA window problems.',
        description: `Given a string $S$ where each character represents a package category code on a conveyor belt, find the length of the **longest contiguous substring** that contains **no duplicate category codes**.

**Input Format:**
- A single line containing a non-empty string $S$ (consisting of lowercase English letters).

**Output Format:**
- Print a single integer: the maximum length of a substring with all unique characters.`,
        whyThisMatters: 'Variable-size sliding window (`for right ... while invalid: shrink left`) is the exact skeleton used in Amazon’s hardest OA problems like Maximum Sustainable Server Cluster.',
        concepts: ['sliding window', 'two pointers', 'hash set', 'strings'],
        prerequisites: ['strings', 'hash maps'],
        learningObjectives: [
            'Master the universal variable-size sliding window template',
            'Maintain window validity using a frequency map or hash set'
        ],
        constraints: ['1 <= |S| <= 10^5'],
        examples: [
            {
                input: 'abcabcbb',
                output: '3',
                explanation: 'The longest substring without repeating characters is "abc", with length 3.'
            }
        ],
        testCases: [
            { id: 'amz-b04-tc1', input: 'abcabcbb', expectedOutput: '3', hidden: false },
            { id: 'amz-b04-tc2', input: 'bbbbb', expectedOutput: '1', hidden: false },
            { id: 'amz-b04-tc3', input: 'pwwkew', expectedOutput: '3', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <string>
#include <unordered_set>
#include <algorithm>
using namespace std;

int main() {
    string s;
    if (!(cin >> s)) return 0;

    // Expand right pointer, shrink left pointer while duplicate exists
    
    return 0;
}`,
        pythonStarterCode: `import sys

def solve():
    s = sys.stdin.read().strip()
    if not s:
        return

    # Expand right pointer, shrink left pointer while duplicate exists

if __name__ == "__main__":
    solve()`,
        hints: [
            'Keep a `left = 0` pointer and a `seen` set (or frequency array).',
            'For each `right` from `0` to `n - 1`: while `s[right]` is already in `seen`, remove `s[left]` from `seen` and increment `left`. Then insert `s[right]` and update `best = max(best, right - left + 1)`.'
        ],
        howToThink: [
            'Memorize this universal 4-line pattern for variable sliding windows:',
            '1. Expand `right` and add `s[right]` to window state.',
            '2. `while` window violates condition: remove `s[left]` from state and `left++`.',
            '3. Now window `[left..right]` is guaranteed valid! Update `ans = max(ans, right - left + 1)`.'
        ],
        approach: 'Use two pointers `left` and `right` with a hash set tracking characters currently inside `[left, right]`.',
        pseudocode: `seen = empty set
left = 0, best = 0
for right from 0 to len(s) - 1:
    while s[right] in seen:
        seen.remove(s[left])
        left += 1
    seen.add(s[right])
    best = max(best, right - left + 1)
print(best)`,
        explanation: 'Both `left` and `right` move forward at most $N$ times, making the total runtime strictly $O(N)$.',
        cppSolution: `#include <iostream>
#include <string>
#include <unordered_set>
#include <algorithm>
using namespace std;

int main() {
    string s;
    if (!(cin >> s)) return 0;
    unordered_set<char> seen;
    int left = 0, best = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        while (seen.count(s[right])) {
            seen.erase(s[left]);
            left++;
        }
        seen.insert(s[right]);
        best = max(best, right - left + 1);
    }
    cout << best << "\\n";
    return 0;
}`,
        pythonSolution: `import sys

def solve():
    s = sys.stdin.read().strip()
    if not s:
        return
    seen = set()
    left = 0
    best = 0
    for right, ch in enumerate(s):
        while ch in seen:
            seen.remove(s[left])
            left += 1
        seen.add(ch)
        if right - left + 1 > best:
            best = right - left + 1
    print(best)

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Using an `if` instead of a `while` loop when shrinking the left boundary.',
            'Restarting the search from `left + 1` with nested loops in O(N^2).'
        ],
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(min(N, |Sigma|))',
        tags: ['sliding-window', 'two-pointers', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-05',
        levelId: 'amz-basics',
        title: 'Basics 5: Two Pointers & Greedy — Minimum Delivery Vans',
        difficulty: 'easy',
        order: 5,
        pattern: 'Sorting + Two Pointers Greedy',
        amazonContext: 'Classic Amazon logistics optimization: pairing heavy and light items.',
        description: `Amazon Logistics has $N$ packages with weights \`weights[i]\`. Each delivery van can carry **at most 2 packages** at the same time, provided the sum of their weights is at most \`limit\`.

Find the **minimum number of delivery vans** required to ship all $N$ packages. (Every single package has weight $\\le \\text{limit}$).

**Input Format:**
- First line: two integers $N$ and \`limit\`
- Second line: $N$ space-separated integers representing \`weights\`

**Output Format:**
- Print a single integer: the minimum number of vans needed.`,
        whyThisMatters: 'Amazon loves greedy + two-pointer problems themed around shipping boxes, server placement, or pairing tasks.',
        concepts: ['two pointers', 'greedy', 'sorting'],
        prerequisites: ['sorting', 'arrays'],
        learningObjectives: [
            'Sort an array to enable greedy two-pointer pairing',
            'Pair the heaviest remaining item with the lightest remaining item if they fit'
        ],
        constraints: ['1 <= N <= 10^5', '1 <= weights[i] <= limit <= 10^9'],
        examples: [
            {
                input: '4 3\n3 2 2 1',
                output: '3',
                explanation: 'Vans: (1, 2), (2), (3) -> 3 vans total.'
            }
        ],
        testCases: [
            { id: 'amz-b05-tc1', input: '4 3\n3 2 2 1', expectedOutput: '3', hidden: false },
            { id: 'amz-b05-tc2', input: '2 3\n1 2', expectedOutput: '1', hidden: false },
            { id: 'amz-b05-tc3', input: '4 5\n3 5 3 4', expectedOutput: '4', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    long long limit;
    if (!(cin >> n >> limit)) return 0;
    vector<long long> w(n);
    for (int i = 0; i < n; i++) cin >> w[i];

    // Sort and use two pointers (left, right)
    
    return 0;
}`,
        pythonStarterCode: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, limit = int(data[0]), int(data[1])
    w = [int(x) for x in data[2:2+n]]

    # Sort and use two pointers (left, right)

if __name__ == "__main__":
    solve()`,
        hints: [
            'Sort the weights in ascending order. Place `left = 0` (lightest) and `right = n - 1` (heaviest).',
            'The heaviest package `w[right]` MUST go in a van. If `w[left] + w[right] <= limit`, pair it with the lightest package (`left++`). Either way, `right--` and `vans++`.'
        ],
        howToThink: [
            'Consider the heaviest package `w[right]`. If it cannot even fit with the lightest available package `w[left]`, it cannot fit with any other package and must take a van alone.',
            'If it CAN fit with `w[left]`, pairing them is always optimal because saving `w[left]` for a lighter package gives no extra benefit.'
        ],
        approach: 'Sort the array, then greedily pair `w[right]` with `w[left]` whenever `w[left] + w[right] <= limit`.',
        pseudocode: `sort(w)
left = 0, right = n - 1, vans = 0
while left <= right:
    if w[left] + w[right] <= limit:
        left += 1
    right -= 1
    vans += 1
print(vans)`,
        explanation: 'Sorting takes $O(N \\log N)$ time and the two-pointer scan takes $O(N)$ time.',
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    long long limit;
    if (!(cin >> n >> limit)) return 0;
    vector<long long> w(n);
    for (int i = 0; i < n; i++) cin >> w[i];
    sort(w.begin(), w.end());
    int left = 0, right = n - 1, vans = 0;
    while (left <= right) {
        if (w[left] + w[right] <= limit) {
            left++;
        }
        right--;
        vans++;
    }
    cout << vans << "\\n";
    return 0;
}`,
        pythonSolution: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, limit = int(data[0]), int(data[1])
    w = sorted(int(x) for x in data[2:2+n])
    left, right = 0, n - 1
    vans = 0
    while left <= right:
        if w[left] + w[right] <= limit:
            left += 1
        right -= 1
        vans += 1
    print(vans)

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Allowing more than 2 packages per van when the problem states at most 2.',
            'Forgetting the `left <= right` condition when `left == right` (the last single package still needs 1 van).'
        ],
        timeComplexity: 'O(N log N)',
        spaceComplexity: 'O(1)',
        tags: ['two-pointers', 'greedy', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-06',
        levelId: 'amz-basics',
        title: 'Basics 6: Interval Merging — Consolidating Delivery Windows',
        difficulty: 'easy',
        order: 6,
        pattern: 'Interval Sorting & Merging',
        amazonContext: 'Essential prerequisite for Amazon scheduling, meeting rooms, and maintenance window OA questions.',
        description: `Given $N$ delivery time intervals \`[start, end]\`, merge all overlapping or touching intervals (where \`next.start <= current.end\`) and output the consolidated non-overlapping intervals in ascending order.

**Input Format:**
- First line: integer $N$
- Next $N$ lines: two space-separated integers \`start\` and \`end\`

**Output Format:**
- Print each merged interval \`start end\` on its own line.`,
        whyThisMatters: 'Interval problems are a staple of Amazon SDE Intern assessments. Once you sort intervals by start time, overlapping intervals are guaranteed to be adjacent!',
        concepts: ['intervals', 'sorting', 'greedy'],
        prerequisites: ['sorting', 'vectors'],
        learningObjectives: [
            'Sort intervals by start time',
            'Maintain a merged list and extend the end of the last interval when overlaps occur'
        ],
        constraints: ['1 <= N <= 10^5', '0 <= start <= end <= 10^9'],
        examples: [
            {
                input: '4\n1 3\n2 6\n8 10\n15 18',
                output: '1 6\n8 10\n15 18',
                explanation: '[1,3] and [2,6] overlap and merge into [1,6].'
            }
        ],
        testCases: [
            { id: 'amz-b06-tc1', input: '4\n1 3\n2 6\n8 10\n15 18', expectedOutput: '1 6\n8 10\n15 18', hidden: false },
            { id: 'amz-b06-tc2', input: '2\n1 4\n4 5', expectedOutput: '1 5', hidden: false },
            { id: 'amz-b06-tc3', input: '3\n6 8\n1 9\n2 4', expectedOutput: '1 9', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<pair<long long, long long>> intervals(n);
    for (int i = 0; i < n; i++) cin >> intervals[i].first >> intervals[i].second;

    // Sort intervals and merge overlapping ones
    
    return 0;
}`,
        pythonStarterCode: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n = int(data[0])
    intervals = []
    idx = 1
    for _ in range(n):
        intervals.append([int(data[idx]), int(data[idx+1])])
        idx += 2

    # Sort intervals and merge overlapping ones

if __name__ == "__main__":
    solve()`,
        hints: [
            'Sort the intervals by `start` time ascending.',
            'Push the first interval into `merged`. For each subsequent interval `[s, e]`, if `s <= merged.back().end`, update `merged.back().end = max(merged.back().end, e)`. Otherwise append `[s, e]`.'
        ],
        howToThink: [
            'Unsorted intervals can overlap in any order. Sorting by `start` time brings all potentially overlapping intervals next to each other.',
            'When merging `[s1, e1]` and `[s2, e2]` (with `s1 <= s2 <= e1`), the new end is `max(e1, e2)` because `[s1, e1]` might completely contain `[s2, e2]` (e.g., `[1, 9]` and `[2, 4]`).'
        ],
        approach: 'Sort intervals by start time, then iterate linearly and merge into the last interval whenever `curr.start <= last.end`.',
        pseudocode: `sort(intervals by start)
merged = [intervals[0]]
for [s, e] in intervals[1:]:
    if s <= merged.last.end:
        merged.last.end = max(merged.last.end, e)
    else:
        merged.append([s, e])`,
        explanation: 'Sorting dominates the runtime at $O(N \\log N)$, followed by a single $O(N)$ pass.',
        cppSolution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<pair<long long, long long>> iv(n);
    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;
    sort(iv.begin(), iv.end());
    vector<pair<long long, long long>> merged;
    for (const auto& cur : iv) {
        if (merged.empty() || cur.first > merged.back().second) {
            merged.push_back(cur);
        } else {
            merged.back().second = max(merged.back().second, cur.second);
        }
    }
    for (const auto& p : merged) {
        cout << p.first << " " << p.second << "\\n";
    }
    return 0;
}`,
        pythonSolution: `import sys

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n = int(data[0])
    intervals = []
    idx = 1
    for _ in range(n):
        intervals.append([int(data[idx]), int(data[idx+1])])
        idx += 2
    intervals.sort(key=lambda x: (x[0], x[1]))
    merged = []
    for s, e in intervals:
        if not merged or s > merged[-1][1]:
            merged.append([s, e])
        else:
            if e > merged[-1][1]:
                merged[-1][1] = e
    print("\\n".join(f"{s} {e}" for s, e in merged))

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Setting `merged.back().second = cur.second` instead of `max(merged.back().second, cur.second)` when one interval is nested inside another.'
        ],
        timeComplexity: 'O(N log N)',
        spaceComplexity: 'O(N)',
        tags: ['intervals', 'sorting', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-07',
        levelId: 'amz-basics',
        title: 'Basics 7: Priority Queues (Min-Heap) — Kth Largest Package Priority',
        difficulty: 'easy',
        order: 7,
        pattern: 'Min-Heap / Priority Queue',
        amazonContext: 'Core data structure for Top-K, K-Closest, and Meeting Rooms II in C++ and Python.',
        description: `Given an array of $N$ package priority scores and an integer $K$, find the **$K$-th largest** priority score in the array using a **Min-Heap of size $K$**.

(Note: It is the $K$-th largest element in sorted order, not the $K$-th distinct element.)

**Input Format:**
- First line: two integers $N$ and $K$
- Second line: $N$ space-separated integers

**Output Format:**
- Print a single integer: the $K$-th largest element.`,
        whyThisMatters: 'Understanding how to declare a Min-Heap in C++ (`priority_queue<int, vector<int>, greater<int>>`) and Python (`heapq`) is essential for Amazon OA problems.',
        concepts: ['heap', 'priority queue', 'top-k'],
        prerequisites: ['arrays', 'stl'],
        learningObjectives: [
            'Use std::priority_queue with greater<int> in C++ and heapq in Python',
            'Maintain a Min-Heap of size K so the root is always the K-th largest element seen so far'
        ],
        constraints: ['1 <= K <= N <= 10^5', '-10^9 <= scores[i] <= 10^9'],
        examples: [
            {
                input: '6 2\n3 2 1 5 6 4',
                output: '5',
                explanation: 'Sorted descending: [6, 5, 4, 3, 2, 1]. The 2nd largest is 5.'
            }
        ],
        testCases: [
            { id: 'amz-b07-tc1', input: '6 2\n3 2 1 5 6 4', expectedOutput: '5', hidden: false },
            { id: 'amz-b07-tc2', input: '9 4\n3 2 3 1 2 4 5 5 6', expectedOutput: '4', hidden: false },
            { id: 'amz-b07-tc3', input: '3 1\n-10 -5 -20', expectedOutput: '-5', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    // Tip: priority_queue<int, vector<int>, greater<int>> minHeap;
    
    return 0;
}`,
        pythonStarterCode: `import sys
import heapq

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, k = int(data[0]), int(data[1])
    nums = [int(x) for x in data[2:2+n]]

    # Maintain a min-heap of size k using heapq

if __name__ == "__main__":
    solve()`,
        hints: [
            'Push each number into the min-heap. Whenever `heap.size() > K`, pop the smallest element!',
            'After processing all $N$ numbers, the heap holds the $K$ largest numbers, and `heap.top()` (or `heap[0]` in Python) is the smallest among those $K$ — which is the $K$-th largest overall!'
        ],
        howToThink: [
            'In C++, `priority_queue<int>` is a **Max-Heap** by default. To make it a **Min-Heap**, write `priority_queue<int, vector<int>, greater<int>>`.',
            'In Python, `heapq` is a **Min-Heap** by default (`heapq.heappush`, `heapq.heappop`). To simulate a Max-Heap in Python, push negative values `-x`.'
        ],
        approach: 'Maintain a Min-Heap of capacity $K$. Push each element and pop whenever size exceeds $K$. Return the top of the heap.',
        pseudocode: `minHeap = empty MinHeap
for x in nums:
    minHeap.push(x)
    if minHeap.size() > K:
        minHeap.pop()
print(minHeap.top())`,
        explanation: 'Each heap operation on a heap of size at most $K + 1$ takes $O(\\log K)$ time, giving $O(N \\log K)$ total time and $O(K)$ space.',
        cppSolution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    priority_queue<long long, vector<long long>, greater<long long>> minHeap;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        minHeap.push(x);
        if ((int)minHeap.size() > k) {
            minHeap.pop();
        }
    }
    cout << minHeap.top() << "\\n";
    return 0;
}`,
        pythonSolution: `import sys
import heapq

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    n, k = int(data[0]), int(data[1])
    nums = [int(x) for x in data[2:2+n]]
    min_heap = []
    for x in nums:
        heapq.heappush(min_heap, x)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    print(min_heap[0])

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Using a Max-Heap instead of a Min-Heap when keeping top K elements, which pops the largest elements instead of the smallest.'
        ],
        timeComplexity: 'O(N log K)',
        spaceComplexity: 'O(K)',
        tags: ['heap', 'priority-queue', 'amazon-basics']
    },
    {
        baseId: 'amz-basic-08',
        levelId: 'amz-basics',
        title: 'Basics 8: Grid BFS — Warehouse Robot Shortest Path',
        difficulty: 'easy',
        order: 8,
        pattern: 'Breadth-First Search (BFS) on 2D Grid',
        amazonContext: 'Direct foundation for Amazon Kiva robot routing, Rotting Oranges, and Number of Islands.',
        description: `An Amazon Kiva robot starts at the top-left corner \`(0, 0)\` of an $R \\times C$ warehouse grid and needs to reach the bottom-right corner \`(R - 1, C - 1)\`.
- \`0\` represents an open aisle.
- \`1\` represents a blocked shelf.

The robot can move up, down, left, or right. Find the **minimum number of steps** required to reach \`(R - 1, C - 1)\`, or print \`-1\` if it is unreachable.

**Input Format:**
- First line: two integers $R$ and $C$
- Next $R$ lines: $C$ space-separated integers (\`0\` or \`1\`)

**Output Format:**
- Print a single integer: the minimum number of steps from \`(0, 0)\` to \`(R - 1, C - 1)\`, or \`-1\`.`,
        whyThisMatters: 'Grid BFS is one of the top 4 most tested topics in Amazon SDE Intern interviews. Always mark cells as visited the moment you push them into the queue!',
        concepts: ['bfs', 'graphs', 'grid traversal', 'queue', 'shortest path'],
        prerequisites: ['queue', 'arrays'],
        learningObjectives: [
            'Use a FIFO queue (std::queue in C++, collections.deque in Python) for shortest path in unweighted grids',
            'Use 4-directional delta arrays dr = {-1, 1, 0, 0} and dc = {0, 0, -1, 1}'
        ],
        constraints: ['1 <= R, C <= 500'],
        examples: [
            {
                input: '3 3\n0 0 0\n1 1 0\n0 0 0',
                output: '4',
                explanation: 'Path: (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2), which takes 4 steps.'
            }
        ],
        testCases: [
            { id: 'amz-b08-tc1', input: '3 3\n0 0 0\n1 1 0\n0 0 0', expectedOutput: '4', hidden: false },
            { id: 'amz-b08-tc2', input: '2 2\n0 1\n1 0', expectedOutput: '-1', hidden: false },
            { id: 'amz-b08-tc3', input: '1 1\n0', expectedOutput: '0', hidden: true }
        ],
        cppStarterCode: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int r, c;
    if (!(cin >> r >> c)) return 0;
    vector<vector<int>> grid(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> grid[i][j];

    // Perform BFS from (0, 0) to (r - 1, c - 1)
    
    return 0;
}`,
        pythonStarterCode: `import sys
from collections import deque

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    r, c = int(data[0]), int(data[1])
    grid = []
    idx = 2
    for _ in range(r):
        grid.append([int(x) for x in data[idx:idx+c]])
        idx += c

    # Perform BFS from (0, 0) to (r - 1, c - 1)

if __name__ == "__main__":
    solve()`,
        hints: [
            'Check if `grid[0][0] == 1` or `grid[r-1][c-1] == 1` first; if so, return `-1`.',
            'Push `(0, 0, 0)` (row, col, dist) into the queue and mark `grid[0][0] = 1` as visited immediately when pushing.'
        ],
        howToThink: [
            'Why BFS instead of DFS? Because in an unweighted grid, BFS explores cells layer-by-layer by distance (0 steps, 1 step, 2 steps...), guaranteeing that the first time we reach `(R-1, C-1)`, it is via the shortest path!',
            'Always mark `visited` BEFORE pushing to the queue, not when popping, to avoid pushing duplicate coordinates and getting Memory/Time Limit Exceeded.'
        ],
        approach: 'Run Breadth-First Search from `(0, 0)` using a queue storing `(row, col, steps)` and mark visited cells in-place.',
        pseudocode: `if grid[0][0] == 1: return -1
queue = [(0, 0, 0)]
grid[0][0] = 1 // mark visited
while queue not empty:
    (row, col, steps) = queue.pop_front()
    if row == R - 1 and col == C - 1: return steps
    for (nr, nc) in 4 neighbors:
        if in_bounds and grid[nr][nc] == 0:
            grid[nr][nc] = 1
            queue.push_back((nr, nc, steps + 1))
return -1`,
        explanation: 'Each grid cell is enqueued at most once and has 4 neighbors, so time and space complexity are $O(R \\times C)$.',
        cppSolution: `#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

int main() {
    int r, c;
    if (!(cin >> r >> c)) return 0;
    vector<vector<int>> grid(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> grid[i][j];

    if (grid[0][0] == 1 || grid[r - 1][c - 1] == 1) {
        cout << -1 << "\\n";
        return 0;
    }
    queue<tuple<int, int, int>> q;
    q.push({0, 0, 0});
    grid[0][0] = 1;
    int dr[4] = {-1, 1, 0, 0};
    int dc[4] = {0, 0, -1, 1};
    while (!q.empty()) {
        auto [cr, cc, d] = q.front();
        q.pop();
        if (cr == r - 1 && cc == c - 1) {
            cout << d << "\\n";
            return 0;
        }
        for (int k = 0; k < 4; k++) {
            int nr = cr + dr[k], nc = cc + dc[k];
            if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 0) {
                grid[nr][nc] = 1;
                q.push({nr, nc, d + 1});
            }
        }
    }
    cout << -1 << "\\n";
    return 0;
}`,
        pythonSolution: `import sys
from collections import deque

def solve():
    data = sys.stdin.read().split()
    if not data:
        return
    r, c = int(data[0]), int(data[1])
    grid = []
    idx = 2
    for _ in range(r):
        grid.append([int(x) for x in data[idx:idx+c]])
        idx += c
    if grid[0][0] == 1 or grid[r - 1][c - 1] == 1:
        print(-1)
        return
    q = deque([(0, 0, 0)])
    grid[0][0] = 1
    while q:
        cr, cc, d = q.popleft()
        if cr == r - 1 and cc == c - 1:
            print(d)
            return
        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            nr, nc = cr + dr, cc + dc
            if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 0:
                grid[nr][nc] = 1
                q.append((nr, nc, d + 1))
    print(-1)

if __name__ == "__main__":
    solve()`,
        commonMistakes: [
            'Marking cells visited when popping from the queue instead of when pushing, causing exponential duplicate entries.',
            'Using `list.pop(0)` in Python instead of `collections.deque.popleft()`.'
        ],
        timeComplexity: 'O(R * C)',
        spaceComplexity: 'O(R * C)',
        tags: ['bfs', 'graphs', 'grid', 'amazon-basics']
    }
];
