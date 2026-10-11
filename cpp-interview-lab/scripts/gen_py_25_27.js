const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../src/data/pythonProblems');

function p(id, levelId, title, difficulty, timeLimit, memoryLimit, description, examples, starterCode, solution, testCases, hints) {
  const diffLower = difficulty ? difficulty.toLowerCase() : 'medium';
  const orderNum = parseInt(id.split('-').pop(), 10) || 1;
  const hList = hints || [];
  return {
    id,
    levelId,
    title,
    type: 'coding',
    difficulty: diffLower,
    order: orderNum,
    description,
    whyThisMatters: `${title} is a core interview problem testing algorithmic problem decomposition and efficient Python implementation.`,
    concepts: [levelId.replace('py-', '').replace('level-', 'topic-'), diffLower],
    prerequisites: [],
    learningObjectives: [`Master the ${title} algorithm`, 'Write clean, optimal Python 3 code'],
    constraints: ['Standard input / output'],
    examples: examples || [],
    testCases: (testCases || []).map((tc, idx) => ({
      id: `${id}-tc-${idx + 1}`,
      input: tc.input || '',
      expectedOutput: tc.expectedOutput || '',
      hidden: idx >= 2
    })),
    starterCode,
    pythonStarterCode: starterCode,
    hints: hList,
    howToThink: [
      `Analyze the input format and constraints for ${title}.`,
      'Identify whether an advanced data structure or algorithmic pattern applies.',
      'Construct a step-by-step solution avoiding unnecessary allocations.'
    ],
    approach: hList[0] || `Apply idiomatic algorithm for ${title}.`,
    pseudocode: `# Solution logic for ${title}\n# 1. Parse input\n# 2. Process logic\n# 3. Print output`,
    explanation: hList[0] || `Optimal algorithm handles all cases in linear or polynomial time.`,
    solution,
    pythonSolution: solution,
    commonMistakes: ['Handling boundary conditions or empty input improperly'],
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    interviewRelevance: 'high',
    tags: [levelId, diffLower]
  };
}

function dumpLevel(file, varName, probs) {
  const content = `import { Problem } from '../types';\n\nexport const ${varName}: Problem[] = ${JSON.stringify(probs, null, 2)};\n`;
  fs.writeFileSync(path.join(outDir, file), content, 'utf8');
  console.log(`Generated ${file} with ${probs.length} problems`);
}

// ==========================================
// LEVEL 25: Comprehensive Interview Challenges (Python)
// ==========================================
const l25 = [
  p('py-prob-25-01', 'level-25', 'LRU Cache Simulation', 'Hard', 2000, 128,
    'Design and simulate an LRU (Least Recently Used) cache with capacity C. Process N operations:\n- PUT key value\n- GET key (outputs the value or -1 if not found on a new line)\n\nInput format: line 1 has C and N. Next N lines are operations.',
    [{ input: '2 6\nPUT 1 1\nPUT 2 2\nGET 1\nPUT 3 3\nGET 2\nGET 3', output: '1\n-1\n3', explanation: 'After PUT 3, key 2 is evicted as key 1 was accessed by GET' }],
    `import sys\nfrom collections import OrderedDict\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import OrderedDict\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    c, n = map(int, lines[0].split())\n    cache = OrderedDict()\n    for i in range(1, n + 1):\n        parts = lines[i].split()\n        op = parts[0]\n        if op == "GET":\n            k = int(parts[1])\n            if k in cache:\n                val = cache[k]\n                cache.move_to_end(k)\n                print(val)\n            else:\n                print(-1)\n        elif op == "PUT":\n            k, v = int(parts[1]), int(parts[2])\n            if k in cache:\n                cache.move_to_end(k)\n            cache[k] = v\n            if len(cache) > c:\n                cache.popitem(last=False)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '2 6\nPUT 1 1\nPUT 2 2\nGET 1\nPUT 3 3\nGET 2\nGET 3', expectedOutput: '1\n-1\n3' },
      { input: '1 3\nPUT 1 10\nPUT 2 20\nGET 1', expectedOutput: '-1' }
    ],
    ['Use collections.OrderedDict with move_to_end and popitem(last=False).']
  ),
  p('py-prob-25-02', 'level-25', 'Trapping Rain Water', 'Hard', 2000, 128,
    'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nInput format: line 1 has N, line 2 has N integers.',
    [{ input: '12\n0 1 0 2 1 0 1 3 2 1 2 1', output: '6', explanation: 'Trapped water between elevations is 6 units' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    h = [int(x) for x in lines[1:n+1]]\n    if n <= 2:\n        print(0)\n        return\n    l, r = 0, n - 1\n    left_max, right_max = h[l], h[r]\n    water = 0\n    while l < r:\n        if left_max <= right_max:\n            l += 1\n            left_max = max(left_max, h[l])\n            water += left_max - h[l]\n        else:\n            r -= 1\n            right_max = max(right_max, h[r])\n            water += right_max - h[r]\n    print(water)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '12\n0 1 0 2 1 0 1 3 2 1 2 1', expectedOutput: '6' },
      { input: '6\n4 2 0 3 2 5', expectedOutput: '9' },
      { input: '3\n3 2 1', expectedOutput: '0' }
    ],
    ['Use two pointers from both ends maintaining left_max and right_max.']
  ),
  p('py-prob-25-03', 'level-25', 'Subarray Sum Equals K', 'Medium', 2000, 128,
    'Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.\n\nInput format: line 1 has N and k. Line 2 has N integers.',
    [{ input: '3 2\n1 1 1', output: '2', explanation: 'Subarrays [1, 1] at index 0-1 and index 1-2 sum to 2' }],
    `import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    prefix_count = defaultdict(int)\n    prefix_count[0] = 1\n    curr_sum = 0\n    ans = 0\n    for x in nums:\n        curr_sum += x\n        ans += prefix_count[curr_sum - k]\n        prefix_count[curr_sum] += 1\n    print(ans)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 2\n1 1 1', expectedOutput: '2' },
      { input: '3 3\n1 2 3', expectedOutput: '2' },
      { input: '3 0\n1 -1 0', expectedOutput: '3' }
    ],
    ['Use prefix sums hash map to store frequencies of prefix sums in O(N).']
  ),
  p('py-prob-25-04', 'level-25', 'Top K Frequent Words', 'Medium', 2000, 128,
    'Given an array of strings words and an integer k, return the k most frequent words. Sort words with the same frequency by their lexicographical order in ascending order. Print the words separated by space.\n\nInput format: line 1 has N and k. Next N lines are strings.',
    [{ input: '6 2\ni\nlove\nleetcode\ni\nlove\ncoding', output: 'i love', explanation: '"i" and "love" appear 2 times each, "i" comes first alphabetically' }],
    `import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    words = lines[2:2+n]\n    counts = Counter(words)\n    sorted_words = sorted(counts.keys(), key=lambda w: (-counts[w], w))\n    print(*(sorted_words[:k]))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '6 2\ni\nlove\nleetcode\ni\nlove\ncoding', expectedOutput: 'i love' },
      { input: '6 1\na\nb\nc\na\nb\na', expectedOutput: 'a' }
    ],
    ['Sort keys by (-count, word) and slice first k.']
  ),
  p('py-prob-25-05', 'level-25', 'Merge Intervals', 'Medium', 2000, 128,
    'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return the non-overlapping intervals in ascending order of start time.\n\nInput format: line 1 has N. Next N lines have start and end.',
    [{ input: '4\n1 3\n2 6\n8 10\n15 18', output: '1 6\n8 10\n15 18', explanation: 'Intervals [1,3] and [2,6] overlap into [1,6]' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    intervals = []\n    idx = 1\n    for _ in range(n):\n        intervals.append([int(lines[idx]), int(lines[idx+1])])\n        idx += 2\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for curr in intervals[1:]:\n        if curr[0] <= merged[-1][1]:\n            merged[-1][1] = max(merged[-1][1], curr[1])\n        else:\n            merged.append(curr)\n    for interval in merged:\n        print(f"{interval[0]} {interval[1]}")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4\n1 3\n2 6\n8 10\n15 18', expectedOutput: '1 6\n8 10\n15 18' },
      { input: '2\n1 4\n4 5', expectedOutput: '1 5' }
    ],
    ['Sort intervals by start time and merge if current start <= previous end.']
  ),
  p('py-prob-25-06', 'level-25', 'First and Last Position of Element', 'Medium', 2000, 128,
    'Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value in O(log n) runtime. If target is not found, print "-1 -1".\n\nInput format: line 1 has N and target. Line 2 has N sorted integers.',
    [{ input: '6 8\n5 7 7 8 8 10', output: '3 4', explanation: '8 appears at index 3 and 4' }],
    `import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nimport bisect\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, target = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    if not nums:\n        print("-1 -1")\n        return\n    left = bisect.bisect_left(nums, target)\n    if left == n or nums[left] != target:\n        print("-1 -1")\n        return\n    right = bisect.bisect_right(nums, target) - 1\n    print(f"{left} {right}")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '6 8\n5 7 7 8 8 10', expectedOutput: '3 4' },
      { input: '6 6\n5 7 7 8 8 10', expectedOutput: '-1 -1' },
      { input: '1 1\n1', expectedOutput: '0 0' }
    ],
    ['Use bisect_left for start position and bisect_right - 1 for end position.']
  ),
  p('py-prob-25-07', 'level-25', 'String Compression (Run-Length)', 'Easy', 2000, 128,
    'Given a string s, compress it such that each consecutive repeated character is replaced by the character followed by its count. If the count is 1, do not append the count.\n\nInput format: single string s.',
    [{ input: 'aabcccccaaa', output: 'a2bc5a3', explanation: 'aa -> a2, b -> b, ccccc -> c5, aaa -> a3' }],
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    res = []\n    n = len(s)\n    i = 0\n    while i < n:\n        j = i\n        while j < n and s[j] == s[i]:\n            j += 1\n        count = j - i\n        res.append(s[i])\n        if count > 1:\n            res.append(str(count))\n        i = j\n    print("".join(res))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'aabcccccaaa', expectedOutput: 'a2bc5a3' },
      { input: 'abc', expectedOutput: 'abc' },
      { input: 'aaaa', expectedOutput: 'a4' }
    ],
    ['Count consecutive characters with a two-pointer while loop.']
  ),
  p('py-prob-25-08', 'level-25', 'Minimum Window Substring Length', 'Hard', 2000, 128,
    'Given two strings s and t, return the minimum length of a substring in s such that every character in t (including duplicates) is included in the window. If no such substring exists, return 0.\n\nInput format: two strings on separate lines.',
    [{ input: 'ADOBECODEBANC\nABC', output: '4', explanation: 'Window "BANC" of length 4 contains A, B, and C' }],
    `import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    s, t = lines[0], lines[1]\n    need = Counter(t)\n    missing = len(t)\n    l = 0\n    min_len = float('inf')\n    for r, c in enumerate(s):\n        if need[c] > 0:\n            missing -= 1\n        need[c] -= 1\n        while missing == 0:\n            min_len = min(min_len, r - l + 1)\n            need[s[l]] += 1\n            if need[s[l]] > 0:\n                missing += 1\n            l += 1\n    print(min_len if min_len != float('inf') else 0)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'ADOBECODEBANC\nABC', expectedOutput: '4' },
      { input: 'a\na', expectedOutput: '1' },
      { input: 'a\naa', expectedOutput: '0' }
    ],
    ['Sliding window with frequency counters and missing character counter.']
  ),
  p('py-prob-25-09', 'level-25', 'Longest Consecutive Sequence', 'Medium', 2000, 128,
    'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(n) runtime.\n\nInput format: line 1 has N, line 2 has N integers.',
    [{ input: '6\n100 4 200 1 3 2', output: '4', explanation: 'The longest consecutive sequence is [1, 2, 3, 4] with length 4.' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    nums = set(int(x) for x in lines[1:n+1])\n    max_streak = 0\n    for x in nums:\n        if x - 1 not in nums:\n            curr = x\n            streak = 1\n            while curr + 1 in nums:\n                curr += 1\n                streak += 1\n            max_streak = max(max_streak, streak)\n    print(max_streak)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '6\n100 4 200 1 3 2', expectedOutput: '4' },
      { input: '10\n0 3 7 2 5 8 4 6 0 1', expectedOutput: '9' },
      { input: '1\n10', expectedOutput: '1' }
    ],
    ['Store all numbers in a Python set. Only start counting sequence if x - 1 is not in set.']
  ),
  p('py-prob-25-10', 'level-25', 'Kth Largest Element in an Array', 'Medium', 2000, 128,
    'Given an integer array nums and an integer k, return the kth largest element in the array.\n\nInput format: line 1 has N and k. Line 2 has N integers.',
    [{ input: '6 2\n3 2 1 5 6 4', output: '5', explanation: '2nd largest element is 5' }],
    `import sys\nimport heapq\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nimport heapq\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    print(heapq.nlargest(k, nums)[-1])\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '6 2\n3 2 1 5 6 4', expectedOutput: '5' },
      { input: '9 4\n3 2 3 1 2 4 5 5 6', expectedOutput: '4' }
    ],
    ['Use heapq.nlargest(k, nums)[-1] or a min-heap of size k.']
  )
];

// ==========================================
// LEVEL 26: Company Assessment Tracks (Python)
// ==========================================
const l26 = [
  p('py-prob-26-01', 'level-26', 'Amazon: Reorder Data in Log Files', 'Medium', 2000, 128,
    'You are given an array of logs. Each log is a space-delimited string of words where the first word is an identifier. Letter-logs consist of lowercase letters; digit-logs consist of digits.\nRules:\n1. Letter-logs come before all digit-logs.\n2. Letter-logs are sorted lexicographically by content; if contents are identical, sort by identifier.\n3. Digit-logs maintain their relative original order.\n\nInput format: N, then N lines of log strings.',
    [{ input: '5\ndig1 8 1 5 1\nlet1 art can\ndig2 3 6\nlet2 own kit dig\nlet3 art zero', output: 'let1 art can\nlet3 art zero\nlet2 own kit dig\ndig1 8 1 5 1\ndig2 3 6', explanation: 'Letter logs ordered by contents, digit logs retain order' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    n = int(lines[0].strip())\n    logs = lines[1:n+1]\n    def get_key(log):\n        identifier, rest = log.split(" ", 1)\n        if rest[0].isalpha():\n            return (0, rest, identifier)\n        return (1,)\n    letter_logs = []\n    digit_logs = []\n    for log in logs:\n        if log.split(" ", 1)[1][0].isalpha():\n            letter_logs.append(log)\n        else:\n            digit_logs.append(log)\n    letter_logs.sort(key=lambda log: (log.split(" ", 1)[1], log.split(" ", 1)[0]))\n    for l in letter_logs + digit_logs:\n        print(l)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5\ndig1 8 1 5 1\nlet1 art can\ndig2 3 6\nlet2 own kit dig\nlet3 art zero', expectedOutput: 'let1 art can\nlet3 art zero\nlet2 own kit dig\ndig1 8 1 5 1\ndig2 3 6' },
      { input: '2\na1 9 2 3 1\ng1 act car', expectedOutput: 'g1 act car\na1 9 2 3 1' }
    ],
    ['Sort letter logs with key (content, identifier), append digit logs unchanged.']
  ),
  p('py-prob-26-02', 'level-26', 'Microsoft: Set Matrix Zeroes', 'Medium', 2000, 128,
    'Given an m x n integer matrix, if an element is 0, set its entire row and column to 0\'s in place.\n\nInput format: m n, followed by m lines each with n space-separated integers.',
    [{ input: '3 3\n1 1 1\n1 0 1\n1 1 1', output: '1 0 1\n0 0 0\n1 0 1', explanation: 'Row 1 and Column 1 are set to 0' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    grid = []\n    idx = 2\n    for _ in range(m):\n        grid.append([int(x) for x in lines[idx:idx+n]])\n        idx += n\n    rows = set()\n    cols = set()\n    for r in range(m):\n        for c in range(n):\n            if grid[r][c] == 0:\n                rows.add(r)\n                cols.add(c)\n    for r in range(m):\n        for c in range(n):\n            if r in rows or c in cols:\n                grid[r][c] = 0\n    for row in grid:\n        print(*(row))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 3\n1 1 1\n1 0 1\n1 1 1', expectedOutput: '1 0 1\n0 0 0\n1 0 1' },
      { input: '3 4\n0 1 2 0\n3 4 5 2\n1 3 1 5', expectedOutput: '0 0 0 0\n0 4 5 0\n0 3 1 0' }
    ],
    ['Collect row and column indices containing zeros, then overwrite matrix.']
  ),
  p('py-prob-26-03', 'level-26', 'Google: Median of Two Sorted Arrays', 'Hard', 2000, 128,
    'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays formatted to 2 decimal places.\n\nInput format: line 1 has m and n. Line 2 has m elements. Line 3 has n elements.',
    [{ input: '2 1\n1 3\n2', output: '2.00', explanation: 'Merged array [1, 2, 3], median is 2' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    m, n = int(lines[0]), int(lines[1])\n    a = [int(x) for x in lines[2:2+m]]\n    b = [int(x) for x in lines[2+m:2+m+n]]\n    merged = sorted(a + b)\n    tot = m + n\n    if tot % 2 == 1:\n        med = float(merged[tot // 2])\n    else:\n        med = (merged[tot // 2 - 1] + merged[tot // 2]) / 2.0\n    print(f"{med:.2f}")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '2 1\n1 3\n2', expectedOutput: '2.00' },
      { input: '2 2\n1 2\n3 4', expectedOutput: '2.50' }
    ],
    ['Find median from merged sorted arrays formatted with 2 decimal places.']
  ),
  p('py-prob-26-04', 'level-26', 'Meta: Minimum Remove to Make Valid Parentheses', 'Medium', 2000, 128,
    'Given a string s of \'(\' , \')\' and lowercase English characters, remove the minimum number of parentheses so that the remaining parentheses string is valid. Return any valid string.\n\nInput format: single string s.',
    [{ input: 'lee(t(c)o)de)', output: 'lee(t(c)o)de', explanation: 'Remove last unmatched )' }],
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    remove = set()\n    for i, c in enumerate(s):\n        if c == '(':\n            stack.append(i)\n        elif c == ')':\n            if stack:\n                stack.pop()\n            else:\n                remove.add(i)\n    remove.update(stack)\n    res = [c for i, c in enumerate(s) if i not in remove]\n    print("".join(res))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'lee(t(c)o)de)', expectedOutput: 'lee(t(c)o)de' },
      { input: 'a)b(c)d', expectedOutput: 'ab(c)d' },
      { input: '))((', expectedOutput: '' }
    ],
    ['Use a stack to track indices of open parentheses and collect unmatched closing ones.']
  ),
  p('py-prob-26-05', 'level-26', 'Apple: Valid Palindrome II', 'Easy', 2000, 128,
    'Given a string s, return "true" if the s can be palindrome after deleting at most one character from it, else "false".\n\nInput format: single string s.',
    [{ input: 'abca', output: 'true', explanation: 'Delete \'c\' or \'b\' to make palindrome' }],
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    def is_pal(subs):\n        return subs == subs[::-1]\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] == s[r]:\n            l += 1\n            r -= 1\n        else:\n            if is_pal(s[l+1:r+1]) or is_pal(s[l:r]):\n                print("true")\n            else:\n                print("false")\n            return\n    print("true")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'aba', expectedOutput: 'true' },
      { input: 'abca', expectedOutput: 'true' },
      { input: 'abc', expectedOutput: 'false' }
    ],
    ['Check two pointers inward. Upon mismatch, test s[l+1:r+1] and s[l:r].']
  ),
  p('py-prob-26-06', 'level-26', 'IBM: Basic Calculator II', 'Medium', 2000, 128,
    'Given a string s representing an arithmetic expression with non-negative integers, \'+\', \'-\', \'*\', and \'/\' operators and spaces, evaluate the expression and return its integer value (using integer division truncating toward zero).\n\nInput format: single line expression.',
    [{ input: '3+2*2', output: '7', explanation: 'Multiplication precedes addition' }],
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    num = 0\n    sign = '+'\n    for i, c in enumerate(s):\n        if c.isdigit():\n            num = num * 10 + int(c)\n        if c in '+-*/' or i == len(s) - 1:\n            if sign == '+':\n                stack.append(num)\n            elif sign == '-':\n                stack.append(-num)\n            elif sign == '*':\n                stack.append(stack.pop() * num)\n            elif sign == '/':\n                stack.append(int(stack.pop() / num))\n            sign = c\n            num = 0\n    print(sum(stack))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3+2*2', expectedOutput: '7' },
      { input: ' 3/2 ', expectedOutput: '1' },
      { input: ' 3+5 / 2 ', expectedOutput: '5' }
    ],
    ['Process high precedence operators immediately onto stack, then sum the stack.']
  ),
  p('py-prob-26-07', 'level-26', 'Amazon: K Closest Points to Origin', 'Medium', 2000, 128,
    'Given an array of points where points[i] = [xi, yi] and an integer k, return the k closest points to the origin (0, 0) ordered by distance ascending. If equal distance, sort by xi ascending.\n\nInput format: N k, then N lines of x y.',
    [{ input: '2 1\n1 3\n-2 2', output: '-2 2', explanation: 'Distance (-2,2) is sqrt(8) < sqrt(10)' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    pts = []\n    idx = 2\n    for _ in range(n):\n        pts.append((int(lines[idx]), int(lines[idx+1])))\n        idx += 2\n    pts.sort(key=lambda p: (p[0]**2 + p[1]**2, p[0], p[1]))\n    for p in pts[:k]:\n        print(f"{p[0]} {p[1]}")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '2 1\n1 3\n-2 2', expectedOutput: '-2 2' },
      { input: '3 2\n3 3\n5 -1\n-2 4', expectedOutput: '3 3\n-2 4' }
    ],
    ['Sort points by x^2 + y^2.']
  ),
  p('py-prob-26-08', 'level-26', 'Google: Decode String', 'Medium', 2000, 128,
    'Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside square brackets is repeated k times.\n\nInput format: single string.',
    [{ input: '3[a]2[bc]', output: 'aaabcbc', explanation: '3 a\'s followed by 2 bc\'s' }],
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    stack = []\n    curr_str = ""\n    curr_num = 0\n    for c in s:\n        if c.isdigit():\n            curr_num = curr_num * 10 + int(c)\n        elif c == '[':\n            stack.append((curr_str, curr_num))\n            curr_str = ""\n            curr_num = 0\n        elif c == ']':\n            prev_str, num = stack.pop()\n            curr_str = prev_str + curr_str * num\n        else:\n            curr_str += c\n    print(curr_str)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3[a]2[bc]', expectedOutput: 'aaabcbc' },
      { input: '3[a2[c]]', expectedOutput: 'accaccacc' },
      { input: '2[abc]3[cd]ef', expectedOutput: 'abcabccdcdcdef' }
    ],
    ['Use stack pushing (current_string, repeat_count) on \'[\' and assembling on \']\'.']
  ),
  p('py-prob-26-09', 'level-26', 'Microsoft: Search in Rotated Sorted Array', 'Medium', 2000, 128,
    'Given an integer array nums sorted in ascending order (with distinct values) that was rotated at an unknown pivot index, and a target value, return the 0-based index of target if found, or -1 otherwise in O(log n).\n\nInput format: N target, then N integers.',
    [{ input: '7 0\n4 5 6 7 0 1 2', output: '4', explanation: '0 is at index 4' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, target = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    l, r = 0, n - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] == target:\n            print(mid)\n            return\n        if nums[l] <= nums[mid]:\n            if nums[l] <= target < nums[mid]:\n                r = mid - 1\n            else:\n                l = mid + 1\n        else:\n            if nums[mid] < target <= nums[r]:\n                l = mid + 1\n            else:\n                r = mid - 1\n    print(-1)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '7 0\n4 5 6 7 0 1 2', expectedOutput: '4' },
      { input: '7 3\n4 5 6 7 0 1 2', expectedOutput: '-1' },
      { input: '1 0\n0', expectedOutput: '0' }
    ],
    ['Binary search checking which half is sorted.']
  ),
  p('py-prob-26-10', 'level-26', 'Meta: Subarray Product Less Than K', 'Medium', 2000, 128,
    'Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.\n\nInput format: N k, then N integers.',
    [{ input: '4 100\n10 5 2 6', output: '8', explanation: '8 subarrays have product < 100' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    if k <= 1:\n        print(0)\n        return\n    prod = 1\n    ans = 0\n    l = 0\n    for r in range(n):\n        prod *= nums[r]\n        while prod >= k and l <= r:\n            prod //= nums[l]\n            l += 1\n        ans += r - l + 1\n    print(ans)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '4 100\n10 5 2 6', expectedOutput: '8' },
      { input: '3 0\n1 2 3', expectedOutput: '0' },
      { input: '3 10\n1 2 3', expectedOutput: '6' }
    ],
    ['Sliding window with product: each window [l, r] adds r - l + 1 subarrays.']
  )
];

// ==========================================
// LEVEL 27: Mock Technical Interviews (Python)
// ==========================================
const l27 = [
  p('py-prob-27-01', 'level-27', 'Simplify Unix File Path', 'Medium', 2000, 128,
    'Given an absolute path for a Unix-style file system, simplify it. In a Unix-style file system, a period \'.\' refers to the current directory, a double period \'..\' refers to the directory up a level, and multiple consecutive slashes are treated as a single slash \'/\'.\n\nInput format: single string path.',
    [{ input: '/home//foo/', output: '/home/foo', explanation: 'Trailing and consecutive slashes removed' }],
    `import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    if not path:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    if not path:\n        return\n    stack = []\n    parts = path.split('/')\n    for p in parts:\n        if p == '' or p == '.':\n            continue\n        if p == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(p)\n    print('/' + '/'.join(stack))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '/home//foo/', expectedOutput: '/home/foo' },
      { input: '/../', expectedOutput: '/' },
      { input: '/a/./b/../../c/', expectedOutput: '/c' }
    ],
    ['Split by \'/\', push tokens to stack, pop on \'..\', and join with \'/\'.']
  ),
  p('py-prob-27-02', 'level-27', 'Rate Limiter (Sliding Window Log)', 'Medium', 2000, 128,
    'Implement a sliding window log rate limiter that allows at most max_requests within a window of window_size seconds. For each request with timestamp t, print "ACCEPT" if permitted and recorded, else "REJECT".\n\nInput format: max_requests window_size N, followed by N request timestamps.',
    [{ input: '3 10 5\n1\n2\n3\n4\n12', output: 'ACCEPT\nACCEPT\nACCEPT\nREJECT\nACCEPT', explanation: 'At t=4, 3 requests exist in [0, 4]. At t=12, t=1 and t=2 expired' }],
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    max_req, win_sz, n = int(lines[0]), int(lines[1]), int(lines[2])\n    timestamps = [int(x) for x in lines[3:3+n]]\n    q = deque()\n    for t in timestamps:\n        while q and q[0] <= t - win_sz:\n            q.popleft()\n        if len(q) < max_req:\n            q.append(t)\n            print("ACCEPT")\n        else:\n            print("REJECT")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3 10 5\n1\n2\n3\n4\n12', expectedOutput: 'ACCEPT\nACCEPT\nACCEPT\nREJECT\nACCEPT' },
      { input: '1 5 3\n1\n3\n7', expectedOutput: 'ACCEPT\nREJECT\nACCEPT' }
    ],
    ['Pop timestamps from front of deque if timestamp <= current_t - window_size.']
  ),
  p('py-prob-27-03', 'level-27', 'Evaluate Reverse Polish Notation', 'Medium', 2000, 128,
    'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Division truncates toward zero.\n\nInput format: N followed by N tokens.',
    [{ input: '5\n2 1 + 3 *', output: '9', explanation: '((2 + 1) * 3) = 9' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    tokens = lines[1:n+1]\n    stack = []\n    for token in tokens:\n        if token in "+-*/":\n            b = stack.pop()\n            a = stack.pop()\n            if token == '+':\n                stack.append(a + b)\n            elif token == '-':\n                stack.append(a - b)\n            elif token == '*':\n                stack.append(a * b)\n            elif token == '/':\n                stack.append(int(a / b))\n        else:\n            stack.append(int(token))\n    print(stack[0])\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5\n2 1 + 3 *', expectedOutput: '9' },
      { input: '5\n4 13 5 / +', expectedOutput: '6' }
    ],
    ['Standard stack-based RPN evaluation.']
  ),
  p('py-prob-27-04', 'level-27', 'Daily Temperatures (Monotonic Stack)', 'Medium', 2000, 128,
    'Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.\n\nInput format: N followed by N temperatures.',
    [{ input: '8\n73 74 75 71 69 72 76 73', output: '1 1 4 2 1 1 0 0', explanation: 'Next warmer day counts' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    t = [int(x) for x in lines[1:n+1]]\n    ans = [0] * n\n    stack = []\n    for i, temp in enumerate(t):\n        while stack and t[stack[-1]] < temp:\n            prev_idx = stack.pop()\n            ans[prev_idx] = i - prev_idx\n        stack.append(i)\n    print(*(ans))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '8\n73 74 75 71 69 72 76 73', expectedOutput: '1 1 4 2 1 1 0 0' },
      { input: '4\n30 40 50 60', expectedOutput: '1 1 1 0' },
      { input: '3\n30 60 90', expectedOutput: '1 1 0' }
    ],
    ['Maintain a monotonic decreasing stack of day indices.']
  ),
  p('py-prob-27-05', 'level-27', 'Asteroid Collision', 'Medium', 2000, 128,
    'We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). If two asteroids meet, the smaller one explodes. If both are the same size, both explode. Two asteroids moving in the same direction will never meet. Find out the state of the asteroids after all collisions.\n\nInput format: N followed by N asteroid values.',
    [{ input: '3\n5 10 -5', output: '5 10', explanation: '10 and -5 collide, 10 survives' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    asteroids = [int(x) for x in lines[1:n+1]]\n    stack = []\n    for ast in asteroids:\n        while stack and ast < 0 < stack[-1]:\n            if stack[-1] < -ast:\n                stack.pop()\n                continue\n            elif stack[-1] == -ast:\n                stack.pop()\n            break\n        else:\n            stack.append(ast)\n    if stack:\n        print(*(stack))\n    else:\n        print("")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '3\n5 10 -5', expectedOutput: '5 10' },
      { input: '2\n8 -8', expectedOutput: '' },
      { input: '3\n10 2 -5', expectedOutput: '10' }
    ],
    ['Use while stack and ast < 0 < stack[-1] with Python while-else construct.']
  ),
  p('py-prob-27-06', 'level-27', 'Sliding Window Maximum', 'Hard', 2000, 128,
    'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. Return the max sliding window values separated by space.\n\nInput format: N k, then N integers.',
    [{ input: '8 3\n1 3 -1 -3 5 3 6 7', output: '3 3 5 5 6 7', explanation: 'Maximums of each window of size 3' }],
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, k = int(lines[0]), int(lines[1])\n    nums = [int(x) for x in lines[2:2+n]]\n    q = deque()\n    res = []\n    for i in range(n):\n        if q and q[0] <= i - k:\n            q.popleft()\n        while q and nums[q[-1]] <= nums[i]:\n            q.pop()\n        q.append(i)\n        if i >= k - 1:\n            res.append(nums[q[0]])\n    print(*(res))\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '8 3\n1 3 -1 -3 5 3 6 7', expectedOutput: '3 3 5 5 6 7' },
      { input: '1 1\n1', expectedOutput: '1' }
    ],
    ['Maintain monotonic decreasing deque storing indices.']
  ),
  p('py-prob-27-07', 'level-27', 'Text Justification Formatter', 'Hard', 2000, 128,
    'Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified. Last line should be left-justified. Pad extra spaces on the left for uneven spaces.\n\nInput format: line 1 has N maxWidth. Next N lines have words.',
    [{ input: '7 16\nThis\nis\nan\nexample\nof\ntext\njustification.', output: 'This    is    an\nexample  of text\njustification.  ', explanation: 'Each line formatted to exactly 16 characters' }],
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n, max_w = int(lines[0]), int(lines[1])\n    words = lines[2:2+n]\n    res = []\n    cur_line, cur_len = [], 0\n    for w in words:\n        if cur_len + len(w) + len(cur_line) > max_w:\n            for i in range(max_w - cur_len):\n                cur_line[i % (len(cur_line) - 1 or 1)] += ' '\n            res.append(''.join(cur_line))\n            cur_line, cur_len = [], 0\n        cur_line.append(w)\n        cur_len += len(w)\n    last = ' '.join(cur_line)\n    last += ' ' * (max_w - len(last))\n    res.append(last)\n    for line in res:\n        print(line)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '7 16\nThis\nis\nan\nexample\nof\ntext\njustification.', expectedOutput: 'This    is    an\nexample  of text\njustification.  ' },
      { input: '3 10\nWhat\nmust\nbe', expectedOutput: 'What  must\nbe        ' }
    ],
    ['Distribute spaces evenly across slots using modulo (len(cur_line) - 1 or 1).']
  ),
  p('py-prob-27-08', 'level-27', 'Valid Number Regex/Parser', 'Hard', 2000, 128,
    'A valid number can be split up into these components (in order): decimal or integer, optionally \'e\' or \'E\' followed by an integer. Return "true" if the given string is a valid number, else "false".\n\nInput format: single string s.',
    [{ input: '0', output: 'true', explanation: '0 is a valid number' }],
    `import sys\nimport re\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nimport re\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    pattern = r'^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$'\n    if re.match(pattern, s):\n        print("true")\n    else:\n        print("false")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '0', expectedOutput: 'true' },
      { input: 'e', expectedOutput: 'false' },
      { input: '2e10', expectedOutput: 'true' },
      { input: '-90E3', expectedOutput: 'true' }
    ],
    ['Validate with regex ^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?$.']
  ),
  p('py-prob-27-09', 'level-27', 'Word Ladder Length', 'Hard', 2000, 128,
    'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter. Return the number of words in the shortest transformation sequence, or 0 if no sequence exists.\n\nInput format: beginWord endWord N, then N words.',
    [{ input: 'hit cog 6\nhot\ndot\ndog\nlot\nlog\ncog', output: '5', explanation: '"hit" -> "hot" -> "dot" -> "dog" -> "cog" is 5 words' }],
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    begin, end, n = lines[0], lines[1], int(lines[2])\n    words = set(lines[3:3+n])\n    if end not in words:\n        print(0)\n        return\n    q = deque([(begin, 1)])\n    visited = {begin}\n    while q:\n        word, dist = q.popleft()\n        if word == end:\n            print(dist)\n            return\n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                next_word = word[:i] + c + word[i+1:]\n                if next_word in words and next_word not in visited:\n                    visited.add(next_word)\n                    q.append((next_word, dist + 1))\n    print(0)\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: 'hit cog 6\nhot\ndot\ndog\nlot\nlog\ncog', expectedOutput: '5' },
      { input: 'hit cog 5\nhot\ndot\ndog\nlot\nlog', expectedOutput: '0' }
    ],
    ['BFS where next words differ by 1 character.']
  ),
  p('py-prob-27-10', 'level-27', 'Alien Dictionary Order', 'Hard', 2000, 128,
    'There is a new alien language that uses the English alphabet. Given a list of words from the alien language\'s dictionary sorted lexicographically by the rules of this new language, return a string of the unique letters in the new alien language sorted in lexicographically increasing order. If the order is invalid, return "". If multiple, any valid order is accepted.\n\nInput format: N followed by N words.',
    [{ input: '5\nwrt\nwrf\ner\nett\nrftt', output: 'wertf', explanation: 'Topological order: w, e, r, t, f' }],
    `import sys\nfrom collections import defaultdict, deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    # Write your solution here\n    pass\n\nif __name__ == "__main__":\n    solve()`,
    `import sys\nfrom collections import defaultdict, deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    words = lines[1:n+1]\n    adj = defaultdict(set)\n    chars = set("".join(words))\n    in_degree = {c: 0 for c in chars}\n    for i in range(n - 1):\n        w1, w2 = words[i], words[i+1]\n        min_len = min(len(w1), len(w2))\n        if len(w1) > len(w2) and w1.startswith(w2):\n            print("")\n            return\n        for j in range(min_len):\n            if w1[j] != w2[j]:\n                if w2[j] not in adj[w1[j]]:\n                    adj[w1[j]].add(w2[j])\n                    in_degree[w2[j]] += 1\n                break\n    q = deque([c for c in in_degree if in_degree[c] == 0])\n    res = []\n    while q:\n        c = q.popleft()\n        res.append(c)\n        for nbr in adj[c]:\n            in_degree[nbr] -= 1\n            if in_degree[nbr] == 0:\n                q.append(nbr)\n    if len(res) == len(chars):\n        print("".join(res))\n    else:\n        print("")\n\nif __name__ == "__main__":\n    solve()`,
    [
      { input: '5\nwrt\nwrf\ner\nett\nrftt', expectedOutput: 'wertf' },
      { input: '2\nz\nx', expectedOutput: 'zx' },
      { input: '2\nz\nx\nz', expectedOutput: '' }
    ],
    ['Build directed graph from adjacent words and find topological ordering with Kahn\'s algorithm.']
  )
];

dumpLevel('level-25.ts', 'pyLevel25Problems', l25);
dumpLevel('level-26.ts', 'pyLevel26Problems', l26);
dumpLevel('level-27.ts', 'pyLevel27Problems', l27);
