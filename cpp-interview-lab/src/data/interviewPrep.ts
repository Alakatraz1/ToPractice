import { Level, Problem } from './types';
import { amazonBasicsSpecs, buildDualTrackProblems, DualLanguageProblemSpec } from './interviewPrepBasics';
import { amazonChallengesSpecs } from './interviewPrepChallenges';

export { amazonBasicsSpecs, amazonChallengesSpecs };
export type { DualLanguageProblemSpec };

const basicsBuilt = buildDualTrackProblems(amazonBasicsSpecs);
const challengesBuilt = buildDualTrackProblems(amazonChallengesSpecs);

export const amazonBasicsCppProblems: Problem[] = basicsBuilt.cpp;
export const amazonBasicsPythonProblems: Problem[] = basicsBuilt.python;

export const amazonChallengesCppProblems: Problem[] = challengesBuilt.cpp;
export const amazonChallengesPythonProblems: Problem[] = challengesBuilt.python;

export const amazonCppProblems: Problem[] = [
    ...amazonBasicsCppProblems,
    ...amazonChallengesCppProblems,
];

export const amazonPythonProblems: Problem[] = [
    ...amazonBasicsPythonProblems,
    ...amazonChallengesPythonProblems,
];

export const allAmazonPrepProblems: Problem[] = [
    ...amazonCppProblems,
    ...amazonPythonProblems,
];

export const amazonCppLevels: Level[] = [
    {
        id: 'amz-basics',
        number: 101,
        title: 'Phase 1: Core Basics & Pattern Builders (Amazon OA Warmup)',
        description: 'Step-by-step foundational problems in C++ & Python covering the exact building blocks (Prefix Sums, Frequency Maps, Sliding Window, Two Pointers, Intervals, Min-Heap, and Grid BFS) required to understand and solve hard Amazon OA questions.',
        whatYouWillLearn: [
            '1-Indexed Prefix Sums for O(1) subarray sum queries',
            'Hash Map Frequency Counting & Custom Tie-Breaker Sorting',
            'Fixed & Variable Sliding Window Templates',
            'Two Pointers Greedy Pairing & Interval Merging',
            'Min-Heap (Top-K) & Grid BFS Shortest Path'
        ],
        whyThisMatters: 'Every challenging Amazon SDE 1 Intern OA question is built by combining 1 or 2 of these 8 core patterns. Mastering these basics first makes the hard problems feel intuitive.',
        concepts: ['prefix sums', 'hash maps', 'sliding window', 'two pointers', 'intervals', 'heap', 'bfs'],
        prerequisites: [],
        problems: amazonBasicsCppProblems.map(p => p.id)
    },
    {
        id: 'amz-challenges',
        number: 102,
        title: 'Phase 2: Challenging Amazon SDE 1 Intern OA Questions',
        description: '12 authentic, high-frequency Amazon SDE 1 Intern Virtual Assessment coding problems (Medium & Hard) researched from recent 2025–2026 hiring loops.',
        whatYouWillLearn: [
            'AWS Sustainable Server Cluster (Sliding Window + Monotonic Deque)',
            'Minimum Power to Make Array Non-Decreasing (Suffix Increment Greedy)',
            'Amazon Warehouse Package Delivery Rounds & K-Distinct Stock Subarrays',
            'Minimum Loading Docks (Intervals + Min-Heap) & Multi-Source BFS',
            'Audible Book Clusters, AWS Log Reordering, Trapping Rain Water & Subarray Minimums'
        ],
        whyThisMatters: 'Directly mirrors the difficulty, input sizes (10^5), edge cases, and problem flavors of the real 70-minute Amazon SDE 1 Intern Online Assessment.',
        concepts: ['amazon oa', 'monotonic deque', 'sliding window', 'greedy', 'intervals', 'multi-source bfs', 'monotonic stack'],
        prerequisites: ['amz-basics'],
        problems: amazonChallengesCppProblems.map(p => p.id)
    }
];

export const amazonPythonLevels: Level[] = [
    {
        ...amazonCppLevels[0],
        problems: amazonBasicsPythonProblems.map(p => p.id)
    },
    {
        ...amazonCppLevels[1],
        problems: amazonChallengesPythonProblems.map(p => p.id)
    }
];

export function getAmazonPrepLevels(language: 'cpp' | 'python' = 'cpp'): Level[] {
    return language === 'python' ? amazonPythonLevels : amazonCppLevels;
}

export function getAmazonPrepProblems(language: 'cpp' | 'python' = 'cpp', section?: 'basics' | 'challenges'): Problem[] {
    if (language === 'python') {
        if (section === 'basics') return amazonBasicsPythonProblems;
        if (section === 'challenges') return amazonChallengesPythonProblems;
        return amazonPythonProblems;
    }
    if (section === 'basics') return amazonBasicsCppProblems;
    if (section === 'challenges') return amazonChallengesCppProblems;
    return amazonCppProblems;
}

export function isAmazonPrepProblem(problemId: string): boolean {
    return problemId.startsWith('amz-') || problemId.startsWith('py-amz-');
}

export interface PatternPrimer {
    id: string;
    title: string;
    subtitle: string;
    whenToUse: string;
    cppSnippet: string;
    pythonSnippet: string;
    keyTakeaway: string;
    relatedBasicId: string;
    relatedChallengeIds: string[];
}

export const amazonPatternPrimers: PatternPrimer[] = [
    {
        id: 'primer-prefix-window',
        title: '1. Prefix Sums & Sliding Window',
        subtitle: 'Contiguous Subarrays in O(N) Instead of O(N²)',
        whenToUse: 'Use whenever an Amazon problem asks for "contiguous servers", "k consecutive months of stock prices", or "subarray sum/cost".',
        cppSnippet: `// 1. 1-Indexed Prefix Sum: sum(L..R) in O(1)
vector<long long> pref(n + 1, 0);
for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + a[i];
long long rangeSum = pref[R + 1] - pref[L];

// 2. Variable Sliding Window Template
int left = 0, best = 0;
for (int right = 0; right < n; right++) {
    // add a[right] to window state
    while (/* window invalid */) {
        // remove a[left] from window state
        left++;
    }
    best = max(best, right - left + 1);
}`,
        pythonSnippet: `# 1. 1-Indexed Prefix Sum: sum(L..R) in O(1)
pref = [0] * (n + 1)
for i in range(n):
    pref[i + 1] = pref[i] + a[i]
range_sum = pref[R + 1] - pref[L]

# 2. Variable Sliding Window Template
left = 0
best = 0
for right in range(n):
    # add a[right] to window state
    while window_is_invalid():
        # remove a[left] from window state
        left += 1
    best = max(best, right - left + 1)`,
        keyTakeaway: 'In C++, always use `long long` for subarray sums so values up to 10^14 never overflow 32-bit `int`.',
        relatedBasicId: 'amz-basic-01',
        relatedChallengeIds: ['amz-oa-01', 'amz-oa-04']
    },
    {
        id: 'primer-hash-sort',
        title: '2. Frequency Hashing & Custom Tie-Breaker Sorting',
        subtitle: 'Counting, Grouping & Ranking Items in O(N log N)',
        whenToUse: 'Use when grouping identical box weights, counting distinct elements in a window, or sorting logs/items with custom tie-breakers.',
        cppSnippet: `#include <unordered_map>
#include <algorithm>

unordered_map<int, int> freq;
for (int x : nums) freq[x]++;

// Erase key when count hits 0 (crucial for sliding window!)
if (--freq[oldVal] == 0) freq.erase(oldVal);

// Custom Sort: Frequency DESC, then ID ASC
sort(items.begin(), items.end(), [](const auto& a, const auto& b) {
    if (a.second != b.second) return a.second > b.second;
    return a.first < b.first;
});`,
        pythonSnippet: `from collections import Counter

freq = Counter(nums)

# Remove key when count hits 0 (crucial for sliding window!)
freq[old_val] -= 1
if freq[old_val] == 0:
    del freq[old_val]

# Custom Sort: Frequency DESC (-x[1]), then ID ASC (x[0])
sorted_items = sorted(freq.items(), key=lambda x: (-x[1], x[0]))`,
        keyTakeaway: 'When tracking distinct elements in a sliding window, always delete keys whose count reaches 0 so `freq.size()` / `len(freq)` equals the exact number of unique keys.',
        relatedBasicId: 'amz-basic-02',
        relatedChallengeIds: ['amz-oa-03', 'amz-oa-04', 'amz-oa-08']
    },
    {
        id: 'primer-intervals-heaps',
        title: '3. Intervals, Min-Heaps & Priority Queues',
        subtitle: 'Scheduling Delivery Docks & Finding Top-K Elements',
        whenToUse: 'Use when merging overlapping time windows, finding minimum meeting rooms / loading docks, or selecting K closest/largest items.',
        cppSnippet: `#include <queue>

// Min-Heap in C++ (smallest element on top!)
priority_queue<long long, vector<long long>, greater<long long>> minHeap;

// Sort intervals by start time
sort(iv.begin(), iv.end());
for (auto& [start, end] : iv) {
    if (!minHeap.empty() && minHeap.top() <= start) {
        minHeap.pop(); // Reuse earliest freeing dock
    }
    minHeap.push(end);
}
int docksNeeded = minHeap.size();`,
        pythonSnippet: `import heapq

# heapq in Python is a Min-Heap by default (min_heap[0] is smallest!)
min_heap = []

iv.sort(key=lambda x: x[0])
for start, end in iv:
    if min_heap and min_heap[0] <= start:
        heapq.heappop(min_heap)  # Reuse earliest freeing dock
    heapq.heappush(min_heap, end)
docks_needed = len(min_heap)`,
        keyTakeaway: 'Remember: C++ `priority_queue<int>` is a MAX-heap by default (pass `greater<int>` for min-heap), whereas Python `heapq` is a MIN-heap by default (negate values `-x` for max-heap).',
        relatedBasicId: 'amz-basic-06',
        relatedChallengeIds: ['amz-oa-05', 'amz-oa-09']
    },
    {
        id: 'primer-bfs-monotonic',
        title: '4. Grid BFS, Monotonic Deque & Monotonic Stack',
        subtitle: 'Shortest Paths on Grids & O(1) Window Extrema',
        whenToUse: 'Use BFS for shortest steps / rotting oranges on a grid; use Monotonic Deque/Stack when you need the max or min of subarrays in O(N).',
        cppSnippet: `#include <queue>
#include <deque>

// Multi-Source BFS Queue
queue<tuple<int, int, int>> q;
// Mark visited IMMEDIATELY when pushing to queue!
grid[nr][nc] = 2;
q.push({nr, nc, dist + 1});

// Monotonic Decreasing Deque (front is always window MAX)
deque<int> dq;
while (!dq.empty() && boot[dq.back()] <= boot[right]) dq.pop_back();
dq.push_back(right);
if (dq.front() < left) dq.pop_front();`,
        pythonSnippet: `from collections import deque

# Always use collections.deque for O(1) popleft()!
q = deque([(r, c, 0)])
grid[nr][nc] = 2  # Mark visited immediately when appending
q.append((nr, nc, dist + 1))

# Monotonic Decreasing Deque (dq[0] is always window MAX)
dq = deque()
while dq and boot[dq[-1]] <= boot[right]:
    dq.pop()
dq.append(right)
if dq[0] < left:
    dq.popleft()`,
        keyTakeaway: 'Never use `list.pop(0)` for BFS in Python—it is O(N) per pop and will TLE on Amazon hidden tests. Always use `collections.deque` with `popleft()`.',
        relatedBasicId: 'amz-basic-08',
        relatedChallengeIds: ['amz-oa-01', 'amz-oa-06', 'amz-oa-12']
    }
];
