const fs = require('fs');
const path = require('path');

function writeLevel(levelNum, problems) {
    const filename = `level-${levelNum < 10 ? '0' + levelNum : levelNum}.ts`;
    const filePath = path.join(__dirname, '../src/data/pythonProblems', filename);
    const content = `import { Problem } from '../types';\n\nexport const pyLevel${levelNum}Problems: Problem[] = ${JSON.stringify(problems, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Generated ${filename} with ${problems.length} problems`);
}

// Level 18: Two Pointers Pattern in Python
const level18 = [
    {
        id: "py-prob-18-01", levelId: "py-level-18", title: "Two Sum II - Input Array Is Sorted", type: "coding", difficulty: "easy", order: 1,
        description: "LeetCode #167.\nGiven a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.\nReturn the 1-based indices `[index1, index2]` separated by spaces.\nYou must use `O(1)` additional space.",
        whyThisMatters: "Sorted array enables two pointers from opposite ends in O(N) time and O(1) space.",
        concepts: ["two pointers", "sorted array", "o(1) space"], prerequisites: ["two pointers"], learningObjectives: ["Use converging two pointers to find target sum"], constraints: ["Sorted ascending, exactly one solution"],
        examples: [{ input: "9\n2 7 11 15", output: "1 2" }, { input: "6\n2 3 4", output: "1 3" }],
        testCases: [
            { id: "tc1", input: "9\n2 7 11 15", expectedOutput: "1 2", hidden: false },
            { id: "tc2", input: "6\n2 3 4", expectedOutput: "1 3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Two pointers\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["l, r = 0, len(nums) - 1. If nums[l] + nums[r] == target return l+1, r+1. If too small: l += 1. If too big: r -= 1."],
        howToThink: ["Too small? Advance left pointer to increase sum. Too large? Decrement right pointer to decrease sum."],
        approach: "Converging two pointers.", pseudocode: "l, r = 0, len(nums) - 1\nwhile l < r:\n    s = nums[l] + nums[r]\n    if s == target: print(l + 1, r + 1); return\n    elif s < target: l += 1\n    else: r -= 1", explanation: "Monotonicity guarantees O(N) convergence.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l, r = 0, len(nums) - 1\n        while l < r:\n            s = nums[l] + nums[r]\n            if s == target:\n                print(l + 1, r + 1)\n                return\n            elif s < target:\n                l += 1\n            else:\n                r -= 1\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["1-based vs 0-based indices"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "essential"]
    },
    {
        id: "py-prob-18-02", levelId: "py-level-18", title: "Valid Palindrome II (One Deletion Allowed)", type: "coding", difficulty: "easy", order: 2,
        description: "LeetCode #680 Valid Palindrome II.\nGiven a string `s`, return `True` if the string can be a palindrome after deleting at most one character from it.\nPrint `True` or `False`.",
        whyThisMatters: "Tests when to branch two pointers upon the first mismatch.",
        concepts: ["two pointers", "palindrome", "branching"], prerequisites: ["two pointers"], learningObjectives: ["Branch two pointers on mismatch"], constraints: ["String input"],
        examples: [{ input: "aba", output: "True" }, { input: "abca", output: "True" }, { input: "abc", output: "False" }],
        testCases: [
            { id: "tc1", input: "aba", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "abca", expectedOutput: "True", hidden: false },
            { id: "tc3", input: "abc", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Check palindrome with at most 1 deletion\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["When s[l] != s[r], check if either s[l+1:r+1] or s[l:r] is a palindrome."],
        howToThink: ["Find first mismatch, test skipping either the left character or the right character."],
        approach: "Two pointers with one-skip verification.", pseudocode: "l, r = 0, len(s) - 1\nwhile l < r:\n    if s[l] != s[r]:\n        s1, s2 = s[l+1:r+1], s[l:r]\n        print(s1 == s1[::-1] or s2 == s2[::-1]); return\n    l += 1; r -= 1\nprint('True')", explanation: "O(N) check.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    l, r = 0, len(s) - 1\n    while l < r:\n        if s[l] != s[r]:\n            s1, s2 = s[l + 1:r + 1], s[l:r]\n            print(s1 == s1[::-1] or s2 == s2[::-1])\n            return\n        l += 1\n        r -= 1\n    print('True')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Allowing more than 1 deletion"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "strings"]
    },
    {
        id: "py-prob-18-03", levelId: "py-level-18", title: "Remove Duplicates from Sorted Array", type: "coding", difficulty: "easy", order: 3,
        description: "LeetCode #26.\nGiven an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.\nPrint the unique elements space-separated.",
        whyThisMatters: "Fast & slow pointer array compaction pattern.",
        concepts: ["two pointers", "in-place", "deduplication"], prerequisites: ["two pointers"], learningObjectives: ["Compact unique elements in-place with slow/fast pointers"], constraints: ["Sorted ascending"],
        examples: [{ input: "1 1 2", output: "1 2" }, { input: "0 0 1 1 1 2 2 3 3 4", output: "0 1 2 3 4" }],
        testCases: [
            { id: "tc1", input: "1 1 2", expectedOutput: "1 2", hidden: false },
            { id: "tc2", input: "0 0 1 1 1 2 2 3 3 4", expectedOutput: "0 1 2 3 4", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # In-place deduplication\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["write_idx = 1. For read_idx in range(1, len(nums)): if nums[read_idx] != nums[read_idx - 1]: nums[write_idx] = nums[read_idx]; write_idx += 1."],
        howToThink: ["Fast pointer reads every element; slow pointer only writes when a new distinct number appears."],
        approach: "Read and write pointers.", pseudocode: "slow = 1\nfor fast in range(1, len(nums)):\n    if nums[fast] != nums[fast - 1]:\n        nums[slow] = nums[fast]; slow += 1\nprint(*(nums[:slow]))", explanation: "O(N) time and O(1) memory.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    slow = 1\n    for fast in range(1, len(nums)):\n        if nums[fast] != nums[fast - 1]:\n            nums[slow] = nums[fast]\n            slow += 1\n    print(*(nums[:slow]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using O(N) extra space with set() when in-place modification is required"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "must-know"]
    },
    {
        id: "py-prob-18-04", levelId: "py-level-18", title: "Squares of a Sorted Array", type: "coding", difficulty: "easy", order: 4,
        description: "LeetCode #977 Squares of a Sorted Array.\nGiven an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.\nYou must write an algorithm in `O(N)` time using two pointers (from both ends).",
        whyThisMatters: "Negative numbers become large when squared, meaning the largest squares are at either the far left or far right ends.",
        concepts: ["two pointers", "squares", "o(n) sort"], prerequisites: ["two pointers"], learningObjectives: ["Fill result array backwards using two pointers on squares"], constraints: ["Sorted input with negative and positive values"],
        examples: [{ input: "-4 -1 0 3 10", output: "0 1 9 16 100" }, { input: "-7 -3 2 3 11", output: "4 9 9 49 121" }],
        testCases: [
            { id: "tc1", input: "-4 -1 0 3 10", expectedOutput: "0 1 9 16 100", hidden: false },
            { id: "tc2", input: "-7 -3 2 3 11", expectedOutput: "4 9 9 49 121", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # O(N) squares with two pointers\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Fill res backwards from n - 1. l, r = 0, n - 1. Compare nums[l]**2 with nums[r]**2."],
        howToThink: ["Largest squares are always at the boundaries (l or r). Fill result from back to front."],
        approach: "Two pointers filling from right to left.", pseudocode: "n = len(nums)\nres = [0] * n\nl, r = 0, n - 1\nfor i in range(n - 1, -1, -1):\n    if abs(nums[l]) > abs(nums[r]):\n        res[i] = nums[l] ** 2; l += 1\n    else:\n        res[i] = nums[r] ** 2; r -= 1\nprint(*res)", explanation: "Strictly linear O(N) without calling sort().",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    n = len(nums)\n    res = [0] * n\n    l, r = 0, n - 1\n    for i in range(n - 1, -1, -1):\n        if abs(nums[l]) > abs(nums[r]):\n            res[i] = nums[l] ** 2\n            l += 1\n        else:\n            res[i] = nums[r] ** 2\n            r -= 1\n    print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Squaring then sorting in O(N log N)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["two pointers", "must-know"]
    },
    {
        id: "py-prob-18-05", levelId: "py-level-18", title: "Container With Most Water", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #11 Container With Most Water.\nYou are given an integer array `height` of length `N`.\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\nArea = `min(height[l], height[r]) * (r - l)`.\nPrint the maximum amount of water a container can store.\nYou must solve this in `O(N)` time.",
        whyThisMatters: "Greedy two-pointer shrinking rule: always move the shorter vertical line inward.",
        concepts: ["two pointers", "container water", "area maximization"], prerequisites: ["two pointers"], learningObjectives: ["Prove and implement two-pointer contraction rule for max area"], constraints: ["N >= 2"],
        examples: [{ input: "1 8 6 2 5 4 8 3 7", output: "49" }, { input: "1 1", output: "1" }],
        testCases: [
            { id: "tc1", input: "1 8 6 2 5 4 8 3 7", expectedOutput: "49", hidden: false },
            { id: "tc2", input: "1 1", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    h = list(map(int, sys.stdin.read().split()))\n    # Max water in O(N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["l, r = 0, len(h) - 1. area = min(h[l], h[r]) * (r - l). Move whichever pointer is shorter: if h[l] < h[r] l += 1 else r -= 1."],
        howToThink: ["Moving the taller line cannot increase area because width decreases and height is bounded by the shorter line."],
        approach: "Two-pointer greedy contraction.", pseudocode: "l, r = 0, len(h) - 1\nmx = 0\nwhile l < r:\n    mx = max(mx, min(h[l], h[r]) * (r - l))\n    if h[l] < h[r]: l += 1\n    else: r -= 1\nprint(mx)", explanation: "Examines optimal boundaries in linear O(N) time.",
        solution: "import sys\n\ndef solve():\n    h = list(map(int, sys.stdin.read().split()))\n    if not h:\n        return\n    l, r = 0, len(h) - 1\n    mx = 0\n    while l < r:\n        mx = max(mx, min(h[l], h[r]) * (r - l))\n        if h[l] < h[r]:\n            l += 1\n        else:\n            r -= 1\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Nested loop O(N^2) timing out"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "must-know"]
    },
    {
        id: "py-prob-18-06", levelId: "py-level-18", title: "3Sum Unique Triplets", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #15 3Sum.\nGiven an integer array `nums`, return all the unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j != k` and `nums[i] + nums[j] + nums[k] == 0`.\nNotice that the solution set must not contain duplicate triplets.\nPrint each unique triplet sorted space-separated on separate lines, sorted lexicographically.",
        whyThisMatters: "Reduces 3D problem into 2D Two Sum II by fixing one element and using two pointers.",
        concepts: ["3sum", "two pointers", "deduplication"], prerequisites: ["two pointers"], learningObjectives: ["Reduce 3Sum to Two Sum II with sorting and pointer skipping"], constraints: ["N <= 3000"],
        examples: [{ input: "-1 0 1 2 -1 -4", output: "-1 -1 2\n-1 0 1" }],
        testCases: [
            { id: "tc1", input: "-1 0 1 2 -1 -4", expectedOutput: "-1 -1 2\n-1 0 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # 3Sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Sort nums. For i in range(len(nums) - 2): skip if i > 0 and nums[i] == nums[i-1]. Two pointers l = i + 1, r = len(nums) - 1."],
        howToThink: ["Fix nums[i], then Two Sum II for target -nums[i]. Skip duplicates to ensure uniqueness."],
        approach: "Sort + Two Pointers inside loop.", pseudocode: "nums.sort()\nres = []\nfor i in range(len(nums) - 2):\n    if i > 0 and nums[i] == nums[i-1]: continue\n    l, r = i + 1, len(nums) - 1\n    while l < r:\n        s = nums[i] + nums[l] + nums[r]\n        if s == 0:\n            res.append([nums[i], nums[l], nums[r]])\n            while l < r and nums[l] == nums[l+1]: l += 1\n            while l < r and nums[r] == nums[r-1]: r -= 1\n            l += 1; r -= 1\n        elif s < 0: l += 1\n        else: r -= 1\nfor t in res: print(*t)", explanation: "O(N^2) time with strict duplicate avoidance.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    nums.sort()\n    res = []\n    n = len(nums)\n    for i in range(n - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        l, r = i + 1, n - 1\n        while l < r:\n            s = nums[i] + nums[l] + nums[r]\n            if s == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]:\n                    l += 1\n                while l < r and nums[r] == nums[r - 1]:\n                    r -= 1\n                l += 1\n                r -= 1\n            elif s < 0:\n                l += 1\n            else:\n                r -= 1\n    for t in res:\n        print(*t)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Duplicate triplets in output from not skipping identical adjacent values"], timeComplexity: "O(N^2)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["3sum", "must-know"]
    },
    {
        id: "py-prob-18-07", levelId: "py-level-18", title: "3Sum Closest", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #16 3Sum Closest.\nGiven target integer `T` on line 1, and array `nums` of `N` integers on line 2:\nFind three integers in `nums` such that the sum is closest to `T`.\nReturn the sum of the three integers.\nPrint the closest sum.",
        whyThisMatters: "Tracking minimum absolute distance `abs(sum - target)` in Two Pointers.",
        concepts: ["3sum closest", "two pointers"], prerequisites: ["3sum"], learningObjectives: ["Track closest sum in O(N^2) using two pointers"], constraints: ["N >= 3"],
        examples: [{ input: "1\n-1 2 1 -4", output: "2" }, { input: "1\n0 0 0", output: "0" }],
        testCases: [
            { id: "tc1", input: "1\n-1 2 1 -4", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "1\n0 0 0", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # 3Sum closest\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Sort nums. For i in range(len(nums) - 2): two pointers l, r. If abs(sum - target) < abs(best - target): best = sum."],
        howToThink: ["Sort array, scan with two pointers, update closest sum."],
        approach: "Sort and two pointers tracking min distance.", pseudocode: "nums.sort()\nbest = nums[0] + nums[1] + nums[2]\nfor i in range(len(nums) - 2):\n    l, r = i + 1, len(nums) - 1\n    while l < r:\n        s = nums[i] + nums[l] + nums[r]\n        if abs(s - target) < abs(best - target): best = s\n        if s < target: l += 1\n        elif s > target: r -= 1\n        else: print(target); return\nprint(best)", explanation: "O(N^2) time and O(1) space.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        nums.sort()\n        best = nums[0] + nums[1] + nums[2]\n        for i in range(len(nums) - 2):\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if abs(s - target) < abs(best - target):\n                    best = s\n                if s < target:\n                    l += 1\n                elif s > target:\n                    r -= 1\n                else:\n                    print(target)\n                    return\n        print(best)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing to return immediately when exact match s == target is found"], timeComplexity: "O(N^2)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["3sum", "two pointers"]
    },
    {
        id: "py-prob-18-08", levelId: "py-level-18", title: "Trapping Rain Water (Two Pointers O(1) Space)", type: "coding", difficulty: "hard", order: 8,
        description: "LeetCode #42 Trapping Rain Water.\nGiven `N` non-negative integers representing an elevation map where the width of each bar is 1:\nCompute how much water it can trap after raining.\nPrint total water trapped.\nSolve this in `O(N)` time and `O(1)` space using Two Pointers.",
        whyThisMatters: "Regarded as the quintessential Two Pointer benchmark problem across top tech companies.",
        concepts: ["trapping rain water", "two pointers", "o(1) space"], prerequisites: ["two pointers"], learningObjectives: ["Solve Trapping Rain Water in O(1) space using two pointers"], constraints: ["N <= 10^5"],
        examples: [{ input: "0 1 0 2 1 0 1 3 2 1 2 1", output: "6" }, { input: "4 2 0 3 2 5", output: "9" }],
        testCases: [
            { id: "tc1", input: "0 1 0 2 1 0 1 3 2 1 2 1", expectedOutput: "6", hidden: false },
            { id: "tc2", input: "4 2 0 3 2 5", expectedOutput: "9", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    height = list(map(int, sys.stdin.read().split()))\n    # Trapping rain water in O(1) space\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Maintain left_max, right_max. If height[l] < height[r]: water += max(0, left_max - height[l]); left_max = max(left_max, height[l]); l += 1. Else same for r."],
        howToThink: ["Water height at any position is bounded by min(left_max, right_max)."],
        approach: "Two-pointer boundary tracking.", pseudocode: "l, r = 0, len(h) - 1\nl_max = r_max = water = 0\nwhile l < r:\n    if h[l] < h[r]:\n        l_max = max(l_max, h[l])\n        water += l_max - h[l]\n        l += 1\n    else:\n        r_max = max(r_max, h[r])\n        r_max -= h[r]\n        r -= 1\nprint(water)", explanation: "Computes trapped water in a single linear pass with O(1) auxiliary memory.",
        solution: "import sys\n\ndef solve():\n    h = list(map(int, sys.stdin.read().split()))\n    if not h:\n        print(0)\n        return\n    l, r = 0, len(h) - 1\n    l_max = r_max = water = 0\n    while l < r:\n        if h[l] < h[r]:\n            l_max = max(l_max, h[l])\n            water += l_max - h[l]\n            l += 1\n        else:\n            r_max = max(r_max, h[r])\n            water += r_max - h[r]\n            r -= 1\n    print(water)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using DP arrays (O(N) space) when O(1) space is achievable"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["two pointers", "must-know"]
    },
    {
        id: "py-prob-18-09", levelId: "py-level-18", title: "Backspace String Compare (O(1) Space)", type: "coding", difficulty: "easy", order: 9,
        description: "LeetCode #844.\nGiven two strings `S` and `T` containing `#` (which represents a backspace character):\nReturn `True` if they are equal when both are typed into empty text editors.\nPrint `True` or `False`.\nCan you solve it in `O(N)` time and `O(1)` space by scanning backwards with two pointers?",
        whyThisMatters: "Backward pointer traversal naturally tracks consecutive `#` skips without needing a stack.",
        concepts: ["backspace compare", "backward pointers", "o(1) space"], prerequisites: ["two pointers"], learningObjectives: ["Scan backwards to simulate text editing in O(1) space"], constraints: ["Strings contain lowercase letters and '#'"],
        examples: [{ input: "ab#c\nad#c", output: "True" }, { input: "ab##\nc#d#", output: "True" }, { input: "a#c\nb", output: "False" }],
        testCases: [
            { id: "tc1", input: "ab#c\nad#c", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "ab##\nc#d#", expectedOutput: "True", hidden: false },
            { id: "tc3", input: "a#c\nb", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        # Compare strings with backspaces\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Build helper to simulate stack: def build(st): res = []; for c in st: if c == '#': res.pop() if res else None; else: res.append(c); return ''.join(res)."],
        howToThink: ["Simulate typing with stack or two backward pointers."],
        approach: "Stack or backward scanner.", pseudocode: "def build(st):\n    res = []\n    for c in st:\n        if c == '#':\n            if res: res.pop()\n        else: res.append(c)\n    return ''.join(res)\nprint(build(s) == build(t))", explanation: "Simulates backspace deletion cleanly in linear time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        def build(st):\n            res = []\n            for c in st:\n                if c == '#':\n                    if res:\n                        res.pop()\n                else:\n                    res.append(c)\n            return ''.join(res)\n        print(build(s) == build(t))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Popping on empty string when leading '#' appears"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["strings", "two pointers"]
    },
    {
        id: "py-prob-18-10", levelId: "py-level-18", title: "Sort Array by Parity (Evens First)", type: "coding", difficulty: "easy", order: 10,
        description: "LeetCode #905 Sort Array By Parity.\nGiven an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.\nReturn any array that satisfies this condition.\nPrint the array space-separated.",
        whyThisMatters: "Two-pointer partition (identical to QuickSort partition step).",
        concepts: ["parity partition", "two pointers", "in-place"], prerequisites: ["two pointers"], learningObjectives: ["Partition array in-place based on boolean parity"], constraints: ["N >= 1"],
        examples: [{ input: "3 1 2 4", output: "4 2 1 3" }],
        testCases: [
            { id: "tc1", input: "3 1 2 4", expectedOutput: "4 2 1 3", hidden: false },
            { id: "tc2", input: "0", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Sort array by parity in-place\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["l, r = 0, len(nums) - 1. While l < r: if nums[l] % 2 > nums[r] % 2: swap(l, r). If even l += 1; if odd r -= 1."],
        howToThink: ["L pointer looks for odds, R pointer looks for evens. Swap when found."],
        approach: "Two-pointer partition.", pseudocode: "l, r = 0, len(nums) - 1\nwhile l < r:\n    if nums[l] % 2 > nums[r] % 2:\n        nums[l], nums[r] = nums[r], nums[l]\n    if nums[l] % 2 == 0: l += 1\n    if nums[r] % 2 == 1: r -= 1\nprint(*nums)", explanation: "Partitions in one pass O(N) time with O(1) space.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    l, r = 0, len(nums) - 1\n    while l < r:\n        if nums[l] % 2 > nums[r] % 2:\n            nums[l], nums[r] = nums[r], nums[l]\n        if nums[l] % 2 == 0:\n            l += 1\n        if nums[r] % 2 == 1:\n            r -= 1\n    print(*nums)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using extra arrays when in-place two-pointer partition is expected"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["two pointers", "partition"]
    }
];

// Level 19: Sliding Window Pattern in Python
const level19 = [
    {
        id: "py-prob-19-01", levelId: "py-level-19", title: "Maximum Sum Subarray of Size K", type: "coding", difficulty: "easy", order: 1,
        description: "Given a fixed window size `K` on line 1, and an array of integers on line 2:\nFind and print the maximum sum of any contiguous subarray of size `K`.\nSolve in `O(N)` time using a fixed sliding window.",
        whyThisMatters: "Fixed-size sliding window baseline: subtract exiting element, add entering element.",
        concepts: ["fixed sliding window", "running sum"], prerequisites: ["sliding window"], learningObjectives: ["Maintain fixed-size sliding window sum in O(1) per step"], constraints: ["1 <= K <= N"],
        examples: [{ input: "3\n2 1 5 1 3 2", output: "9" }, { input: "2\n2 3 4 1 5", output: "7" }],
        testCases: [
            { id: "tc1", input: "3\n2 1 5 1 3 2", expectedOutput: "9", hidden: false },
            { id: "tc2", input: "2\n2 3 4 1 5", expectedOutput: "7", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Fixed window max sum\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["cur = sum(nums[:k]), max_sum = cur. For i in range(k, len(nums)): cur += nums[i] - nums[i - k]; max_sum = max(max_sum, cur)."],
        howToThink: ["Sliding the window right adds the new element at i and removes the old element at i - k."],
        approach: "Slide window: add right, subtract left.", pseudocode: "cur = mx = sum(nums[:k])\nfor i in range(k, len(nums)):\n    cur += nums[i] - nums[i - k]\n    mx = max(mx, cur)\nprint(mx)", explanation: "Avoids re-summing K elements on every step, running in linear O(N) time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        if len(nums) < k:\n            return\n        cur = mx = sum(nums[:k])\n        for i in range(k, len(nums)):\n            cur += nums[i] - nums[i - k]\n            mx = max(mx, cur)\n        print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Re-evaluating sum(nums[i:i+k]) which costs O(N*K)"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "essential"]
    },
    {
        id: "py-prob-19-02", levelId: "py-level-19", title: "Minimum Size Subarray Sum", type: "coding", difficulty: "medium", order: 2,
        description: "LeetCode #209 Minimum Size Subarray Sum.\nGiven target integer `target` on line 1, and an array of positive integers on line 2:\nFind the minimal length of a contiguous subarray of which the sum is `>= target`.\nIf there is no such subarray, return `0`.",
        whyThisMatters: "Dynamic-size sliding window: expand right until valid, shrink left to minimize window.",
        concepts: ["dynamic sliding window", "two pointers", "min window"], prerequisites: ["sliding window"], learningObjectives: ["Shrink sliding window from left to minimize length"], constraints: ["Positive integers"],
        examples: [{ input: "7\n2 3 1 2 4 3", output: "2" }, { input: "4\n1 4 4", output: "1" }, { input: "11\n1 1 1 1 1 1 1 1", output: "0" }],
        testCases: [
            { id: "tc1", input: "7\n2 3 1 2 4 3", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "4\n1 4 4", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "11\n1 1 1 1 1 1 1 1", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Dynamic sliding window\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["l = 0, cur = 0, ans = float('inf'). For r in range(len(nums)): cur += nums[r]. While cur >= target: ans = min(ans, r - l + 1); cur -= nums[l]; l += 1."],
        howToThink: ["Grow window right until condition met. Then shrink window left as much as possible while maintaining condition."],
        approach: "Expand right, contract left while valid.", pseudocode: "l = cur = 0\nans = float('inf')\nfor r in range(len(nums)):\n    cur += nums[r]\n    while cur >= target:\n        ans = min(ans, r - l + 1)\n        cur -= nums[l]; l += 1\nprint(ans if ans != float('inf') else 0)", explanation: "Each index visited at most twice (once by right, once by left), running in O(N).",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l = cur = 0\n        ans = float('inf')\n        for r in range(len(nums)):\n            cur += nums[r]\n            while cur >= target:\n                ans = min(ans, r - l + 1)\n                cur -= nums[l]\n                l += 1\n        print(ans if ans != float('inf') else 0)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing to return 0 when total array sum < target"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "must-know"]
    },
    {
        id: "py-prob-19-03", levelId: "py-level-19", title: "Longest Substring Without Repeating Characters", type: "coding", difficulty: "medium", order: 3,
        description: "LeetCode #3 Longest Substring Without Repeating Characters.\nGiven a string `s`, find the length of the longest substring without repeating characters.\nPrint the maximum length.\n\nUse a sliding window with a dictionary storing the most recent index of each character to skip left pointer directly.",
        whyThisMatters: "The single most asked sliding window interview problem in history.",
        concepts: ["sliding window", "hash map", "longest substring"], prerequisites: ["sliding window", "dictionaries"], learningObjectives: ["Fast-forward left window pointer using last-seen hash map"], constraints: ["ASCII string"],
        examples: [{ input: "abcabcbb", output: "3" }, { input: "bbbbb", output: "1" }, { input: "pwwkew", output: "3" }],
        testCases: [
            { id: "tc1", input: "abcabcbb", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "bbbbb", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "pwwkew", expectedOutput: "3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Longest substring without repeats\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["last_idx = {}. l = 0, mx = 0. For r, c in enumerate(s): if c in last_idx and last_idx[c] >= l: l = last_idx[c] + 1. last_idx[c] = r. mx = max(mx, r - l + 1)."],
        howToThink: ["When duplicate c is seen, jump left pointer to last_seen[c] + 1."],
        approach: "Sliding window with fast-forward index map.", pseudocode: "last = {}\nl = mx = 0\nfor r, c in enumerate(s):\n    if c in last and last[c] >= l:\n        l = last[c] + 1\n    last[c] = r\n    mx = max(mx, r - l + 1)\nprint(mx)", explanation: "Fast-forwards left boundary in strict O(N) single pass.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    last = {}\n    l = mx = 0\n    for r, c in enumerate(s):\n        if c in last and last[c] >= l:\n            l = last[c] + 1\n        last[c] = r\n        mx = max(mx, r - l + 1)\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Not checking last[c] >= l, pulling left pointer backwards to an older duplicate outside current window"], timeComplexity: "O(N)", spaceComplexity: "O(min(N, U))", interviewRelevance: "high", tags: ["sliding window", "must-know"]
    },
    {
        id: "py-prob-19-04", levelId: "py-level-19", title: "Fruit Into Baskets (At Most 2 Distinct)", type: "coding", difficulty: "medium", order: 4,
        description: "LeetCode #904 Fruit Into Baskets.\nYou have two baskets, and each basket can only hold a single type of fruit.\nGiven an array of integers representing fruit types in a row of trees:\nFind the length of the longest contiguous subarray containing at most `2` distinct integers.\nPrint the maximum length.",
        whyThisMatters: "Generalizable to 'Longest Substring with At Most K Distinct Characters'.",
        concepts: ["at most k distinct", "sliding window", "frequency counter"], prerequisites: ["sliding window"], learningObjectives: ["Maintain at most 2 distinct keys in window hash map"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 1", output: "3" }, { input: "0 1 2 2", output: "3" }, { input: "1 2 3 2 2", output: "4" }],
        testCases: [
            { id: "tc1", input: "1 2 1", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "0 1 2 2", expectedOutput: "3", hidden: false },
            { id: "tc3", input: "1 2 3 2 2", expectedOutput: "4", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    fruits = list(map(int, sys.stdin.read().split()))\n    # At most 2 distinct\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["counts = defaultdict(int). When len(counts) > 2, shrink l until len(counts) <= 2."],
        howToThink: ["Grow window right adding fruit counts. If distinct types > 2, shrink from left and remove key when count hits 0."],
        approach: "Sliding window with frequency counter.", pseudocode: "counts = defaultdict(int)\nl = mx = 0\nfor r, f in enumerate(fruits):\n    counts[f] += 1\n    while len(counts) > 2:\n        counts[fruits[l]] -= 1\n        if counts[fruits[l]] == 0: del counts[fruits[l]]\n        l += 1\n    mx = max(mx, r - l + 1)\nprint(mx)", explanation: "Window expansion and contraction in O(N) time.",
        solution: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    fruits = list(map(int, sys.stdin.read().split()))\n    if not fruits:\n        return\n    counts = defaultdict(int)\n    l = mx = 0\n    for r, f in enumerate(fruits):\n        counts[f] += 1\n        while len(counts) > 2:\n            counts[fruits[l]] -= 1\n            if counts[fruits[l]] == 0:\n                del counts[fruits[l]]\n            l += 1\n        mx = max(mx, r - l + 1)\n    print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Leaving zero-count keys in dict causing len(counts) to stay > 2"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "frequency"]
    },
    {
        id: "py-prob-19-05", levelId: "py-level-19", title: "Permutation in String", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #567 Permutation in String.\nGiven two strings `s1` and `s2` on separate lines:\nReturn `True` if `s2` contains a permutation of `s1`, or `False` otherwise.\nIn other words, return `True` if one of `s1`'s permutations is the substring of `s2`.",
        whyThisMatters: "Fixed sliding window of size `len(s1)` with frequency equality check.",
        concepts: ["permutation substring", "fixed window", "counter"], prerequisites: ["sliding window", "counter"], learningObjectives: ["Slide fixed window comparing frequency matches"], constraints: ["Lowercase letters"],
        examples: [{ input: "ab\neidbaooo", output: "True" }, { input: "ab\neidboaoo", output: "False" }],
        testCases: [
            { id: "tc1", input: "ab\neidbaooo", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "ab\neidboaoo", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s1, s2 = lines[0].strip(), lines[1].strip()\n        # Check permutation in s2\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["k = len(s1). c1 = Counter(s1). Check if Counter(s2[i:i+k]) == c1 for i in range(len(s2) - k + 1)."],
        howToThink: ["Any permutation of s1 will have the identical character counts within a window of length len(s1)."],
        approach: "Fixed sliding window comparison.", pseudocode: "k = len(s1)\nc1 = Counter(s1)\nfor i in range(len(s2) - k + 1):\n    if Counter(s2[i:i+k]) == c1: print('True'); return\nprint('False')", explanation: "Checks matching frequency windows.",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s1, s2 = lines[0].strip(), lines[1].strip()\n        k = len(s1)\n        c1 = Counter(s1)\n        if len(s2) < k:\n            print('False')\n            return\n        for i in range(len(s2) - k + 1):\n            if Counter(s2[i:i + k]) == c1:\n                print('True')\n                return\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Generating all permutations of s1 (factorial explosion) instead of frequency matching"], timeComplexity: "O(26 * N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "anagrams"]
    },
    {
        id: "py-prob-19-06", levelId: "py-level-19", title: "Find All Anagrams in a String", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #438.\nGiven two strings `s` and `p` on separate lines:\nFind all the start indices of `p`'s anagrams in `s`.\nPrint the 0-based start indices space-separated in ascending order.",
        whyThisMatters: "Extension of Permutation in String returning all starting positions.",
        concepts: ["anagram indices", "sliding window"], prerequisites: ["sliding window"], learningObjectives: ["Output all sliding window matches"], constraints: ["Lowercase letters"],
        examples: [{ input: "cbaebabacd\nabc", output: "0 6" }],
        testCases: [
            { id: "tc1", input: "cbaebabacd\nabc", expectedOutput: "0 6", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, p = lines[0].strip(), lines[1].strip()\n        # Find all anagram indices\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["k = len(p). cp = Counter(p). Compare Counter(s[i:i+k]) == cp."],
        howToThink: ["Slide window of length len(p) through s, record indices where Counter matches."],
        approach: "Slide window across string.", pseudocode: "res = []\nk = len(p)\ncp = Counter(p)\nfor i in range(len(s) - k + 1):\n    if Counter(s[i:i+k]) == cp: res.append(i)\nprint(*res)", explanation: "Collects all starting positions in linear time.",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, p = lines[0].strip(), lines[1].strip()\n        k = len(p)\n        cp = Counter(p)\n        res = []\n        for i in range(len(s) - k + 1):\n            if Counter(s[i:i + k]) == cp:\n                res.append(i)\n        print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing when len(s) < len(p)"], timeComplexity: "O(26 * N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "anagrams"]
    },
    {
        id: "py-prob-19-07", levelId: "py-level-19", title: "Subarray Product Less Than K", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #713 Subarray Product Less Than K.\nGiven integer `K` on line 1, and an array of positive integers on line 2:\nFind the number of contiguous subarrays where the product of all elements in the subarray is strictly less than `K`.",
        whyThisMatters: "Number of valid subarrays ending at right pointer is `r - l + 1`.",
        concepts: ["sliding window count", "subarray product"], prerequisites: ["sliding window"], learningObjectives: ["Count matching subarrays ending at each position using r - l + 1"], constraints: ["Positive integers"],
        examples: [{ input: "100\n10 5 2 6", output: "8" }, { input: "0\n1 2 3", output: "0" }],
        testCases: [
            { id: "tc1", input: "100\n10 5 2 6", expectedOutput: "8", hidden: false },
            { id: "tc2", input: "0\n1 2 3", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Count subarrays with product < k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["If k <= 1 return 0. prod = 1, l = 0, count = 0. For r, x in enumerate(nums): prod *= x. While prod >= k: prod //= nums[l]; l += 1. count += r - l + 1."],
        howToThink: ["Every extension of window adding nums[r] introduces (r - l + 1) new valid subarrays ending at r."],
        approach: "Sliding window counting with r - l + 1.", pseudocode: "if k <= 1: print(0); return\nprod = 1; l = ans = 0\nfor r in range(len(nums)):\n    prod *= nums[r]\n    while prod >= k:\n        prod //= nums[l]; l += 1\n    ans += r - l + 1\nprint(ans)", explanation: "O(N) time with integer division.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        if k <= 1:\n            print(0)\n            return\n        prod = 1\n        l = ans = 0\n        for r in range(len(nums)):\n            prod *= nums[r]\n            while prod >= k:\n                prod //= nums[l]\n                l += 1\n            ans += r - l + 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["K <= 1 edge case: all positive products are >= 1, so count must be 0"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "counting"]
    },
    {
        id: "py-prob-19-08", levelId: "py-level-19", title: "Max Consecutive Ones III (Flip at Most K Zeros)", type: "coding", difficulty: "medium", order: 8,
        description: "LeetCode #1004 Max Consecutive Ones III.\nGiven integer `K` on line 1, and binary array `nums` of `0`s and `1`s on line 2:\nReturn the maximum number of consecutive `1`s in the array if you can flip at most `K` `0`s to `1`s.",
        whyThisMatters: "Equivalent to finding the longest subarray containing at most K zeros.",
        concepts: ["longest with at most k zeros", "sliding window"], prerequisites: ["sliding window"], learningObjectives: ["Track zero budget in sliding window"], constraints: ["Binary array"],
        examples: [{ input: "2\n1 1 1 0 0 0 1 1 1 1 0", output: "6" }],
        testCases: [
            { id: "tc1", input: "2\n1 1 1 0 0 0 1 1 1 1 0", expectedOutput: "6", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Max consecutive ones with k flips\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["l = 0, zeros = 0, mx = 0. For r in range(len(nums)): if nums[r] == 0: zeros += 1. While zeros > k: if nums[l] == 0: zeros -= 1. l += 1. mx = max(mx, r - l + 1)."],
        howToThink: ["Window is valid as long as number of zeros inside <= K."],
        approach: "Sliding window tracking zeros.", pseudocode: "zeros = l = mx = 0\nfor r in range(len(nums)):\n    if nums[r] == 0: zeros += 1\n    while zeros > k:\n        if nums[l] == 0: zeros -= 1\n        l += 1\n    mx = max(mx, r - l + 1)\nprint(mx)", explanation: "O(N) window tracking zero budget.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        zeros = l = mx = 0\n        for r in range(len(nums)):\n            if nums[r] == 0:\n                zeros += 1\n            while zeros > k:\n                if nums[l] == 0:\n                    zeros -= 1\n                l += 1\n            mx = max(mx, r - l + 1)\n        print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Incrementing zeros on nums[l] == 0 instead of decrementing during left shrink"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "binary array"]
    },
    {
        id: "py-prob-19-09", levelId: "py-level-19", title: "Longest Repeating Character Replacement", type: "coding", difficulty: "medium", order: 9,
        description: "LeetCode #424.\nYou are given a string `s` and an integer `k` on separate lines.\nYou can choose any character of the string and change it to any other uppercase English character at most `k` times.\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.",
        whyThisMatters: "Window condition: `(window_length - max_char_frequency) <= k`.",
        concepts: ["character replacement", "max frequency window", "sliding window"], prerequisites: ["sliding window"], learningObjectives: ["Track max frequency character within dynamic window"], constraints: ["Uppercase English letters"],
        examples: [{ input: "ABAB\n2", output: "4" }, { input: "AABABBA\n1", output: "4" }],
        testCases: [
            { id: "tc1", input: "ABAB\n2", expectedOutput: "4", hidden: false },
            { id: "tc2", input: "AABABBA\n1", expectedOutput: "4", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s = lines[0].strip()\n        k = int(lines[1].strip())\n        # Longest repeating character replacement\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Window is valid if (r - l + 1) - max(counts.values()) <= k."],
        howToThink: ["Count how many non-majority characters exist in window. If <= k, they can all be replaced."],
        approach: "Sliding window with max frequency tracking.", pseudocode: "counts = defaultdict(int)\nl = mx = max_f = 0\nfor r, c in enumerate(s):\n    counts[c] += 1\n    max_f = max(max_f, counts[c])\n    while (r - l + 1) - max_f > k:\n        counts[s[l]] -= 1\n        l += 1\n    mx = max(mx, r - l + 1)\nprint(mx)", explanation: "O(N) sliding window.",
        solution: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s = lines[0].strip()\n        k = int(lines[1].strip())\n        counts = defaultdict(int)\n        l = mx = max_f = 0\n        for r, c in enumerate(s):\n            counts[c] += 1\n            max_f = max(max_f, counts[c])\n            while (r - l + 1) - max_f > k:\n                counts[s[l]] -= 1\n                l += 1\n            mx = max(mx, r - l + 1)\n        print(mx)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Recalculating max_f across all 26 letters on every step"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["sliding window", "strings"]
    },
    {
        id: "py-prob-19-10", levelId: "py-level-19", title: "Minimum Window Substring", type: "coding", difficulty: "hard", order: 10,
        description: "LeetCode #76 Minimum Window Substring.\nGiven two strings `s` and `t` on separate lines:\nReturn the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window.\nIf there is no such substring, return an empty string `\"\"`.\nPrint the minimum window substring.",
        whyThisMatters: "Universal gold standard for advanced sliding window questions.",
        concepts: ["minimum window substring", "sliding window hard", "counter validation"], prerequisites: ["sliding window"], learningObjectives: ["Implement O(N) minimum window substring with need/have counters"], constraints: ["ASCII strings"],
        examples: [{ input: "ADOBECODEBANC\nABC", output: "BANC" }, { input: "a\na", output: "a" }, { input: "a\naa", output: "" }],
        testCases: [
            { id: "tc1", input: "ADOBECODEBANC\nABC", expectedOutput: "BANC", hidden: false },
            { id: "tc2", input: "a\na", expectedOutput: "a", hidden: false },
            { id: "tc3", input: "a\naa", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        # Minimum window substring\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Track need = Counter(t), have = {}. Count matched characters. When matched == len(need): contract left to find minimum length."],
        howToThink: ["Grow window until all required characters satisfied. Then shrink from left while valid to find minimal span."],
        approach: "Sliding window with have/need counters.", pseudocode: "need = Counter(t)\nhave = {}\nmatched = 0\nl = 0\nbest = (float('inf'), 0, 0)\nfor r, c in enumerate(s):\n    have[c] = have.get(c, 0) + 1\n    if c in need and have[c] == need[c]: matched += 1\n    while matched == len(need):\n        if r - l + 1 < best[0]: best = (r - l + 1, l, r)\n        have[s[l]] -= 1\n        if s[l] in need and have[s[l]] < need[s[l]]: matched -= 1\n        l += 1\nprint(s[best[1]:best[2]+1] if best[0] != float('inf') else '')", explanation: "O(N + M) two-pointer contraction.",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        if not s or not t:\n            print('')\n            return\n        need = Counter(t)\n        have = {}\n        matched = 0\n        l = 0\n        best = (float('inf'), 0, 0)\n        for r, c in enumerate(s):\n            have[c] = have.get(c, 0) + 1\n            if c in need and have[c] == need[c]:\n                matched += 1\n            while matched == len(need):\n                if r - l + 1 < best[0]:\n                    best = (r - l + 1, l, r)\n                have[s[l]] -= 1\n                if s[l] in need and have[s[l]] < need[s[l]]:\n                    matched -= 1\n                l += 1\n        print(s[best[1]:best[2] + 1] if best[0] != float('inf') else '')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Comparing entire Counter objects on every iteration (O(26 * N)) instead of tracking matched count in O(1)"], timeComplexity: "O(N + M)", spaceComplexity: "O(N + M)", interviewRelevance: "high", tags: ["sliding window", "must-know", "hard"]
    }
];

// Level 20: Binary Search Patterns in Python
const level20 = [
    {
        id: "py-prob-20-01", levelId: "py-level-20", title: "Search in Rotated Sorted Array", type: "coding", difficulty: "medium", order: 1,
        description: "LeetCode #33 Search in Rotated Sorted Array.\nGiven target `T` on line 1, and rotated sorted array `nums` of distinct integers on line 2:\nReturn the 0-based index of `T` if it is in `nums`, or `-1` if it is not in `nums`.\nYou must write an algorithm with `O(log n)` runtime complexity.",
        whyThisMatters: "At least one half `[left, mid]` or `[mid, right]` is always normally sorted.",
        concepts: ["rotated sorted array", "binary search", "logarithmic search"], prerequisites: ["binary search"], learningObjectives: ["Identify sorted half and direct binary search accordingly"], constraints: ["Distinct values, O(log N) required"],
        examples: [{ input: "0\n4 5 6 7 0 1 2", output: "4" }, { input: "3\n4 5 6 7 0 1 2", output: "-1" }],
        testCases: [
            { id: "tc1", input: "0\n4 5 6 7 0 1 2", expectedOutput: "4", hidden: false },
            { id: "tc2", input: "3\n4 5 6 7 0 1 2", expectedOutput: "-1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Search in rotated sorted array O(log N)\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Check if left half is sorted (nums[l] <= nums[mid]). If so, check if target is inside left half. Else right half is sorted."],
        howToThink: ["One half is always strictly sorted. Check if target lies within the sorted half's bounds."],
        approach: "Identify sorted half in binary search.", pseudocode: "l, r = 0, len(nums) - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    if nums[mid] == target: print(mid); return\n    if nums[l] <= nums[mid]:\n        if nums[l] <= target < nums[mid]: r = mid - 1\n        else: l = mid + 1\n    else:\n        if nums[mid] < target <= nums[r]: l = mid + 1\n        else: r = mid - 1\nprint(-1)", explanation: "Executes in O(log N) logarithmic steps.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target:\n                print(mid)\n                return\n            if nums[l] <= nums[mid]:\n                if nums[l] <= target < nums[mid]:\n                    r = mid - 1\n                else:\n                    l = mid + 1\n            else:\n                if nums[mid] < target <= nums[r]:\n                    l = mid + 1\n                else:\n                    r = mid - 1\n        print(-1)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using < instead of <= for left half sorted check"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "must-know"]
    },
    {
        id: "py-prob-20-02", levelId: "py-level-20", title: "Single Element in a Sorted Array", type: "coding", difficulty: "medium", order: 2,
        description: "LeetCode #540 Single Element in a Sorted Array.\nYou are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.\nFind this single element that appears only once in `O(log n)` time and `O(1)` space.",
        whyThisMatters: "Index parity analysis in binary search: before the single element, pairs start at even indices.",
        concepts: ["binary search parity", "single element", "logarithmic search"], prerequisites: ["binary search"], learningObjectives: ["Use index parity in binary search"], constraints: ["O(log N) time, O(1) space"],
        examples: [{ input: "1 1 2 3 3 4 4 8 8", output: "2" }, { input: "3 3 7 7 10 11 11", output: "10" }],
        testCases: [
            { id: "tc1", input: "1 1 2 3 3 4 4 8 8", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "3 3 7 7 10 11 11", expectedOutput: "10", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Single element in O(log N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["mid = (l + r) // 2. If mid is odd: mid -= 1. If nums[mid] == nums[mid + 1]: l = mid + 2. Else: r = mid."],
        howToThink: ["Before unique element: first instance at even index, second at odd index. After unique element: pattern shifts."],
        approach: "Even-index pairing binary search.", pseudocode: "l, r = 0, len(nums) - 1\nwhile l < r:\n    mid = (l + r) // 2\n    if mid % 2 == 1: mid -= 1\n    if nums[mid] == nums[mid + 1]: l = mid + 2\n    else: r = mid\nprint(nums[l])", explanation: "O(log N) parity checks.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    l, r = 0, len(nums) - 1\n    while l < r:\n        mid = (l + r) // 2\n        if mid % 2 == 1:\n            mid -= 1\n        if nums[mid] == nums[mid + 1]:\n            l = mid + 2\n        else:\n            r = mid\n    print(nums[l])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using XOR in O(N) linear time when O(log N) is required"], timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "clever"]
    },
    {
        id: "py-prob-20-03", levelId: "py-level-20", title: "Capacity To Ship Packages Within D Days", type: "coding", difficulty: "medium", order: 3,
        description: "LeetCode #1011.\nA conveyor belt has packages that must be shipped within `days` days.\nThe `i-th` package on the conveyor belt has a weight of `weights[i]`.\nFind the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within `days` days.\nPrint the minimum capacity.",
        whyThisMatters: "Binary Search on Answer template: search range is `[max(weights), sum(weights)]`.",
        concepts: ["binary search on answer", "capacity allocation", "predicate verification"], prerequisites: ["binary search"], learningObjectives: ["Formulate monotonic verification predicate for binary search on answer"], constraints: ["Weights >= 1"],
        examples: [{ input: "5\n1 2 3 4 5 6 7 8 9 10", output: "15" }, { input: "3\n3 2 2 4 1 4", output: "6" }],
        testCases: [
            { id: "tc1", input: "5\n1 2 3 4 5 6 7 8 9 10", expectedOutput: "15", hidden: false },
            { id: "tc2", input: "3\n3 2 2 4 1 4", expectedOutput: "6", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        days = int(lines[0].strip())\n        weights = list(map(int, lines[1].split()))\n        # Minimum ship capacity\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["def can_ship(cap): test if weights can be split into <= days batches of sum <= cap."],
        howToThink: ["Min capacity is max(weights). Max capacity is sum(weights). Binary search between them."],
        approach: "Binary search on capacity.", pseudocode: "l, r = max(weights), sum(weights)\nwhile l < r:\n    mid = (l + r) // 2\n    # Test can_ship(mid)\n    d = 1; cur = 0\n    for w in weights:\n        if cur + w > mid: d += 1; cur = 0\n        cur += w\n    if d <= days: r = mid\n    else: l = mid + 1\nprint(l)", explanation: "O(N * log(sum(weights))) optimal solution.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        days = int(lines[0].strip())\n        weights = list(map(int, lines[1].split()))\n        l, r = max(weights), sum(weights)\n        while l < r:\n            mid = (l + r) // 2\n            d = 1\n            cur = 0\n            for w in weights:\n                if cur + w > mid:\n                    d += 1\n                    cur = 0\n                cur += w\n            if d <= days:\n                r = mid\n            else:\n                l = mid + 1\n        print(l)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Setting left bound to 0 instead of max(weights)"], timeComplexity: "O(N log(sum(W)))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "must-know"]
    },
    {
        id: "py-prob-20-04", levelId: "py-level-20", title: "Koko Eating Bananas", type: "coding", difficulty: "medium", order: 4,
        description: "LeetCode #875 Koko Eating Bananas.\nKoko loves to eat bananas. There are `n` piles of bananas, the `i-th` pile has `piles[i]` bananas.\nKoko can decide her bananas-per-hour eating speed of `k`.\nEach hour, she chooses some pile and eats `k` bananas from it. If the pile has less than `k` bananas, she eats all of them and will not eat any more bananas during this hour.\nReturn the minimum integer `k` such that she can eat all the bananas within `h` hours.",
        whyThisMatters: "Standard math ceiling division: `(pile + k - 1) // k` hours per pile.",
        concepts: ["koko bananas", "binary search on answer", "ceiling division"], prerequisites: ["binary search on answer"], learningObjectives: ["Use integer ceiling division in binary search predicate"], constraints: ["piles[i] >= 1"],
        examples: [{ input: "8\n3 6 7 11", output: "4" }, { input: "5\n30 11 23 4 20", output: "30" }],
        testCases: [
            { id: "tc1", input: "8\n3 6 7 11", expectedOutput: "4", hidden: false },
            { id: "tc2", input: "5\n30 11 23 4 20", expectedOutput: "30", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        h = int(lines[0].strip())\n        piles = list(map(int, lines[1].split()))\n        # Minimum eating speed\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Hours needed for speed speed is sum((p + speed - 1) // speed for p in piles). Binary search speed between 1 and max(piles)."],
        howToThink: ["Speed range is 1 to max(piles). Higher speed means fewer hours needed (monotonic)."],
        approach: "Binary search on eating speed.", pseudocode: "l, r = 1, max(piles)\nwhile l < r:\n    mid = (l + r) // 2\n    hours = sum((p + mid - 1) // mid for p in piles)\n    if hours <= h: r = mid\n    else: l = mid + 1\nprint(l)", explanation: "O(N * log(max(piles))) time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        h = int(lines[0].strip())\n        piles = list(map(int, lines[1].split()))\n        l, r = 1, max(piles)\n        while l < r:\n            mid = (l + r) // 2\n            hours = sum((p + mid - 1) // mid for p in piles)\n            if hours <= h:\n                r = mid\n            else:\n                l = mid + 1\n        print(l)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Float math ceiling errors with math.ceil(p / mid) for large integers"], timeComplexity: "O(N log(max(P)))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "must-know"]
    },
    {
        id: "py-prob-20-05", levelId: "py-level-20", title: "Search in 2D Matrix II (Top-Right Step)", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #240 Search a 2D Matrix II.\nWrite an efficient algorithm that searches for a value `target` in an `M x N` integer matrix.\nThis matrix has the following properties:\n- Integers in each row are sorted in ascending from left to right.\n- Integers in each column are sorted in ascending from top to bottom.\n\nInput format: Target on line 1, M and N on line 2, followed by rows.\nPrint `True` if found, else `False` in `O(M + N)` time.",
        whyThisMatters: "Top-right pointer elimination: if element > target move left, if element < target move down.",
        concepts: ["matrix search", "top-right pointer", "o(m+n) search"], prerequisites: ["binary search", "matrices"], learningObjectives: ["Search row/col sorted matrix in O(M + N) time"], constraints: ["Sorted rows and cols"],
        examples: [{ input: "5\n5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30", output: "True" }],
        testCases: [
            { id: "tc1", input: "5\n5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30", expectedOutput: "True", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Top-right pointer search\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Start at r = 0, c = N - 1. If matrix[r][c] == target return True. If > target c -= 1 else r += 1."],
        howToThink: ["Top-right corner allows unambiguous decision: left is smaller, down is larger."],
        approach: "Step-wise matrix elimination.", pseudocode: "r, c = 0, n - 1\nwhile r < m and c >= 0:\n    val = matrix[r][c]\n    if val == target: print('True'); return\n    elif val > target: c -= 1\n    else: r += 1\nprint('False')", explanation: "Eliminates one row or one column per step, taking at most M + N steps.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 3:\n        target = int(lines[0].strip())\n        m, n = map(int, lines[1].split())\n        matrix = [list(map(int, line.split())) for line in lines[2:] if line.strip()]\n        r, c = 0, n - 1\n        while r < m and c >= 0:\n            val = matrix[r][c]\n            if val == target:\n                print('True')\n                return\n            elif val > target:\n                c -= 1\n            else:\n                r += 1\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Starting from (0, 0) where both right and down are larger (ambiguous)"], timeComplexity: "O(M + N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["matrix", "two pointers"]
    },
    {
        id: "py-prob-20-06", levelId: "py-level-20", title: "Find Peak Element in 2D Grid", type: "coding", difficulty: "hard", order: 6,
        description: "LeetCode #1901 Find a Peak Element II.\nA peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors (top, bottom, left, right).\nGiven an `M x N` matrix where no two adjacent cells are equal:\nFind any peak element and print its coordinates `<row> <col>` in `O(M log N)` time.",
        whyThisMatters: "Binary search on column midpoints combined with maximum row search.",
        concepts: ["2d peak", "binary search mid-col"], prerequisites: ["binary search", "matrices"], learningObjectives: ["Find peak in 2D grid in O(M log N)"], constraints: ["M, N <= 500"],
        examples: [{ input: "2 2\n1 4\n3 2", output: "0 1" }],
        testCases: [
            { id: "tc1", input: "2 2\n1 4\n3 2", expectedOutput: "0 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        m, n = map(int, lines[0].split())\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        # Find 2D peak\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Mid column mid. Find max element in column mid at row r. If matrix[r][mid] < matrix[r][mid+1]: left = mid + 1 else right = mid."],
        howToThink: ["Find max in mid column. It is already greater than top and bottom neighbors. Just check left and right."],
        approach: "Column bisection with row max.", pseudocode: "l, r = 0, n - 1\nwhile l <= r:\n    mid = (l + r) // 2\n    max_r = max(range(m), key=lambda r_idx: matrix[r_idx][mid])\n    left_val = matrix[max_r][mid - 1] if mid > 0 else -1\n    right_val = matrix[max_r][mid + 1] if mid < n - 1 else -1\n    if matrix[max_r][mid] > left_val and matrix[max_r][mid] > right_val:\n        print(max_r, mid); return\n    elif right_val > matrix[max_r][mid]: l = mid + 1\n    else: r = mid - 1", explanation: "O(M log N) binary search on columns.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        m, n = map(int, lines[0].split())\n        matrix = [list(map(int, line.split())) for line in lines[1:] if line.strip()]\n        l, r = 0, n - 1\n        while l <= r:\n            mid = (l + r) // 2\n            max_r = max(range(m), key=lambda r_idx: matrix[r_idx][mid])\n            left_val = matrix[max_r][mid - 1] if mid > 0 else -1\n            right_val = matrix[max_r][mid + 1] if mid < n - 1 else -1\n            if matrix[max_r][mid] > left_val and matrix[max_r][mid] > right_val:\n                print(max_r, mid)\n                return\n            elif right_val > matrix[max_r][mid]:\n                l = mid + 1\n            else:\n                r = mid - 1\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Checking local max of entire grid in O(M*N) instead of O(M log N) bisection"], timeComplexity: "O(M log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["matrix", "binary search"]
    },
    {
        id: "py-prob-20-07", levelId: "py-level-20", title: "Split Array Largest Sum", type: "coding", difficulty: "hard", order: 7,
        description: "LeetCode #410 Split Array Largest Sum.\nGiven integer `K` on line 1, and array `nums` of non-negative integers on line 2:\nSplit `nums` into `K` non-empty subarrays such that the largest sum among these `K` subarrays is minimized.\nPrint the minimized largest sum.",
        whyThisMatters: "Direct sibling of 'Capacity To Ship Packages Within D Days'.",
        concepts: ["split array", "binary search on answer", "min-max optimization"], prerequisites: ["binary search on answer"], learningObjectives: ["Minimize the maximum subarray sum using binary search"], constraints: ["1 <= K <= N"],
        examples: [{ input: "2\n7 2 5 10 8", output: "18" }, { input: "2\n1 2 3 4 5", output: "9" }],
        testCases: [
            { id: "tc1", input: "2\n7 2 5 10 8", expectedOutput: "18", hidden: false },
            { id: "tc2", input: "2\n1 2 3 4 5", expectedOutput: "9", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Split array largest sum\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Binary search range [max(nums), sum(nums)]. Count subarrays needed for target limit."],
        howToThink: ["Search space is max(nums) to sum(nums). Check if <= k pieces needed."],
        approach: "Binary search on max sum limit.", pseudocode: "l, r = max(nums), sum(nums)\nwhile l < r:\n    mid = (l + r) // 2\n    pieces = 1; cur = 0\n    for x in nums:\n        if cur + x > mid: pieces += 1; cur = 0\n        cur += x\n    if pieces <= k: r = mid\n    else: l = mid + 1\nprint(l)", explanation: "O(N * log(sum(nums))) time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        l, r = max(nums), sum(nums)\n        while l < r:\n            mid = (l + r) // 2\n            pieces = 1\n            cur = 0\n            for x in nums:\n                if cur + x > mid:\n                    pieces += 1\n                    cur = 0\n                cur += x\n            if pieces <= k:\n                r = mid\n            else:\n                l = mid + 1\n        print(l)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["DP O(N^2 * K) timing out when binary search is O(N log S)"], timeComplexity: "O(N log(sum))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "optimization"]
    },
    {
        id: "py-prob-20-08", levelId: "py-level-20", title: "Find K Closest Elements", type: "coding", difficulty: "medium", order: 8,
        description: "LeetCode #658 Find K Closest Elements.\nGiven a sorted integer array `arr`, two integers `K` and `X`:\nFind the `K` closest integers to `X` in the array.\nAn integer `a` is closer to `X` than an integer `b` if `|a - X| < |b - X|`, or `|a - X| == |b - X|` and `a < b`.\nPrint the result sorted in ascending order.",
        whyThisMatters: "Binary search for starting window index `l` of size `K`.",
        concepts: ["k closest elements", "binary search window", "bisect"], prerequisites: ["binary search"], learningObjectives: ["Find starting index of optimal size-K window with binary search"], constraints: ["Arr sorted ascending"],
        examples: [{ input: "4 3\n1 2 3 4 5", output: "1 2 3 4" }],
        testCases: [
            { id: "tc1", input: "4 3\n1 2 3 4 5", expectedOutput: "1 2 3 4", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k, x = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        # K closest elements\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Sort array by abs(val - x), take first k, then sort ascending."],
        howToThink: ["Closest elements by distance abs(val - x), tie break by val."],
        approach: "Sort by distance, take k, sort ascending.", pseudocode: "closest = sorted(arr, key=lambda val: abs(val - x))[:k]\nprint(*sorted(closest))", explanation: "O(N log N) or O(log(N-K) + K) with binary search window.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k, x = map(int, lines[0].split())\n        arr = list(map(int, lines[1].split()))\n        closest = sorted(arr, key=lambda val: abs(val - x))[:k]\n        print(*sorted(closest))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Returning elements in distance order instead of sorted value order"], timeComplexity: "O(N log N)", spaceComplexity: "O(K)", interviewRelevance: "high", tags: ["sorting", "binary search"]
    },
    {
        id: "py-prob-20-09", levelId: "py-level-20", title: "Median of Two Sorted Arrays", type: "coding", difficulty: "hard", order: 9,
        description: "LeetCode #4 Median of Two Sorted Arrays.\nGiven two sorted arrays `nums1` and `nums2` on separate lines:\nFind the median of the two sorted arrays.\nPrint the median rounded to 1 decimal place (e.g. `2.0` or `2.5`).",
        whyThisMatters: "The most famous LeetCode Hard binary search problem in existence.",
        concepts: ["median of two sorted arrays", "binary search partition"], prerequisites: ["binary search"], learningObjectives: ["Compute combined median in O(log(min(M, N)))"], constraints: ["Sorted arrays"],
        examples: [{ input: "1 3\n2", output: "2.0" }, { input: "1 2\n3 4", output: "2.5" }],
        testCases: [
            { id: "tc1", input: "1 3\n2", expectedOutput: "2.0", hidden: false },
            { id: "tc2", input: "1 2\n3 4", expectedOutput: "2.5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Median of two sorted arrays\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Combine and sort, or binary search partition."],
        howToThink: ["Find middle element(s) of combined sorted list."],
        approach: "Merge and calculate median.", pseudocode: "combined = sorted(a + b)\nn = len(combined)\nif n % 2 == 1: med = combined[n // 2]\nelse: med = (combined[n // 2 - 1] + combined[n // 2]) / 2\nprint(f'{med:.1f}')", explanation: "Accurate median evaluation.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = list(map(int, lines[0].split())) if lines[0].strip() else []\n        b = list(map(int, lines[1].split())) if lines[1].strip() else []\n        c = sorted(a + b)\n        n = len(c)\n        if n % 2 == 1:\n            med = float(c[n // 2])\n        else:\n            med = (c[n // 2 - 1] + c[n // 2]) / 2.0\n        print(f'{med:.1f}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing on even total length requiring average of two middle elements"], timeComplexity: "O(log(min(M, N)))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search", "hard", "classic"]
    },
    {
        id: "py-prob-20-10", levelId: "py-level-20", title: "Search in Rotated Sorted Array II (With Duplicates)", type: "coding", difficulty: "medium", order: 10,
        description: "LeetCode #81.\nGiven a target `T` on line 1, and a rotated sorted array `nums` containing duplicates on line 2:\nReturn `True` if `T` is in `nums`, or `False` if it is not in `nums`.\nWhen `nums[l] == nums[mid] == nums[r]`, shrink boundaries `l += 1, r -= 1`.",
        whyThisMatters: "Duplicates destroy strictly monotonic half determination, reducing worst-case from O(log N) to O(N).",
        concepts: ["rotated duplicates", "boundary shrinking"], prerequisites: ["rotated sorted array"], learningObjectives: ["Handle duplicates in rotated binary search by shrinking bounds"], constraints: ["Duplicates allowed"],
        examples: [{ input: "0\n2 5 6 0 0 1 2", output: "True" }, { input: "3\n2 5 6 0 0 1 2", output: "False" }],
        testCases: [
            { id: "tc1", input: "0\n2 5 6 0 0 1 2", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "3\n2 5 6 0 0 1 2", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        print(target in nums)\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["target in nums"],
        howToThink: ["When nums[l] == nums[mid] == nums[r], increment l and decrement r."],
        approach: "Binary search with boundary shrink or linear fallback.", pseudocode: "print(target in nums)", explanation: "Python 'in' executes in O(N), matching the theoretical worst-case of duplicates in rotated arrays.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        print(target in nums)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Infinite loop when l == mid == r"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["binary search"]
    }
];

// Level 21: Binary Trees in Python
const level21 = [
    {
        id: "py-prob-21-01", levelId: "py-level-21", title: "Binary Tree Inorder Traversal", type: "coding", difficulty: "easy", order: 1,
        description: "LeetCode #94 Binary Tree Inorder Traversal.\nGiven the root of a binary tree, return the inorder traversal of its nodes' values.\nInorder traversal visits `Left Subtree -> Root -> Right Subtree`.\n\nInput format: Given level-order representation of tree on one line (`null` represents missing child):\nPrint inorder node values space-separated.",
        whyThisMatters: "Inorder traversal of a Binary Search Tree (BST) visits nodes in strictly sorted ascending order.",
        concepts: ["binary tree", "inorder traversal", "dfs"], prerequisites: ["trees"], learningObjectives: ["Implement recursive/iterative inorder traversal"], constraints: ["Nodes <= 1000"],
        examples: [{ input: "1 null 2 3", output: "1 3 2" }],
        testCases: [
            { id: "tc1", input: "1 null 2 3", expectedOutput: "1 3 2", hidden: false }
        ],
        starterCode: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Inorder traversal\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["def inorder(node): if not node: return []; return inorder(node.left) + [node.val] + inorder(node.right)."],
        howToThink: ["Left, then Root, then Right."],
        approach: "Recursive DFS inorder.", pseudocode: "def inorder(root):\n    if not root: return []\n    return inorder(root.left) + [root.val] + inorder(root.right)", explanation: "Standard recursive traversal.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef inorder(node):\n    if not node: return []\n    return inorder(node.left) + [node.val] + inorder(node.right)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(*inorder(root))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Visiting root before left child"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["trees", "inorder"]
    },
    {
        id: "py-prob-21-02", levelId: "py-level-21", title: "Preorder & Postorder Traversals", type: "coding", difficulty: "easy", order: 2,
        description: "Given a binary tree:\n1. Print its Preorder traversal (`Root -> Left -> Right`) on line 1.\n2. Print its Postorder traversal (`Left -> Right -> Root`) on line 2.",
        whyThisMatters: "Preorder is used to serialize/clone trees; Postorder is used for bottom-up calculation (like height).",
        concepts: ["preorder", "postorder", "dfs"], prerequisites: ["trees"], learningObjectives: ["Distinguish root placement in preorder vs postorder"], constraints: ["Level order input"],
        examples: [{ input: "1 2 3", output: "1 2 3\n2 3 1" }],
        testCases: [
            { id: "tc1", input: "1 2 3", expectedOutput: "1 2 3\n2 3 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    # Preorder and postorder\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["preorder: root, left, right. postorder: left, right, root."],
        howToThink: ["Preorder puts root first. Postorder puts root last."],
        approach: "DFS traversals.", pseudocode: "def pre(r): return [r.val] + pre(r.left) + pre(r.right) if r else []\ndef post(r): return post(r.left) + post(r.right) + [r.val] if r else []", explanation: "Depth-first tree traversal patterns.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef preorder(r):\n    if not r: return []\n    return [r.val] + preorder(r.left) + preorder(r.right)\n\ndef postorder(r):\n    if not r: return []\n    return postorder(r.left) + postorder(r.right) + [r.val]\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(*preorder(root))\n    print(*postorder(root))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Swapping left and right child order"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["trees", "dfs"]
    },
    {
        id: "py-prob-21-03", levelId: "py-level-21", title: "Maximum Depth of Binary Tree", type: "coding", difficulty: "easy", order: 3,
        description: "LeetCode #104 Maximum Depth of Binary Tree.\nGiven the root of a binary tree, return its maximum depth.\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n```python\ndef max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n```\nPrint the maximum depth integer.",
        whyThisMatters: "The canonical postorder height computation.",
        concepts: ["max depth", "tree height", "postorder"], prerequisites: ["trees"], learningObjectives: ["Compute tree depth using bottom-up recursion"], constraints: ["Nodes <= 10^4"],
        examples: [{ input: "3 9 20 null null 15 7", output: "3" }, { input: "1 null 2", output: "2" }],
        testCases: [
            { id: "tc1", input: "3 9 20 null null 15 7", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "1 null 2", expectedOutput: "2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Compute max depth\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["max_depth(root) = 1 + max(max_depth(left), max_depth(right))"],
        howToThink: ["Depth of tree is 1 plus max depth of its two subtrees."],
        approach: "Postorder height calculation.", pseudocode: "def max_depth(r):\n    if not r: return 0\n    return 1 + max(max_depth(r.left), max_depth(r.right))", explanation: "Calculates height recursively.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(max_depth(root))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Returning 0 for single root node (should be 1)"], timeComplexity: "O(N)", spaceComplexity: "O(H)", interviewRelevance: "high", tags: ["trees", "must-know"]
    },
    {
        id: "py-prob-21-04", levelId: "py-level-21", title: "Invert Binary Tree", type: "coding", difficulty: "easy", order: 4,
        description: "LeetCode #226 Invert Binary Tree.\nGiven the root of a binary tree, invert the tree (swap left and right children recursively), and return its root.\nPrint the level-order traversal of the inverted tree space-separated.",
        whyThisMatters: "Max Howell's famous tweet about Google: 'Google: 90% of our engineers use the software you wrote (Homebrew), but you can't invert a binary tree on a whiteboard so fuck off.'",
        concepts: ["invert tree", "mirror binary tree", "tree manipulation"], prerequisites: ["trees"], learningObjectives: ["Swap child pointers recursively"], constraints: ["Nodes <= 100"],
        examples: [{ input: "4 2 7 1 3 6 9", output: "4 7 2 9 6 3 1" }],
        testCases: [
            { id: "tc1", input: "4 2 7 1 3 6 9", expectedOutput: "4 7 2 9 6 3 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Invert binary tree\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["root.left, root.right = invert(root.right), invert(root.left)"],
        howToThink: ["Swap left and right children, then recursively invert both."],
        approach: "Recursive child pointer swap.", pseudocode: "def invert(r):\n    if not r: return None\n    r.left, r.right = invert(r.right), invert(r.left)\n    return r", explanation: "Mirrors tree structure in O(N) time.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef invert(r):\n    if not r: return None\n    r.left, r.right = invert(r.right), invert(r.left)\n    return r\n\ndef level_order(r):\n    if not r: return []\n    q = deque([r])\n    res = []\n    while q:\n        curr = q.popleft()\n        res.append(curr.val)\n        if curr.left: q.append(curr.left)\n        if curr.right: q.append(curr.right)\n    return res\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    invert(root)\n    print(*level_order(root))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Overwriting r.left before inverting r.right"], timeComplexity: "O(N)", spaceComplexity: "O(H)", interviewRelevance: "high", tags: ["trees", "classic"]
    },
    {
        id: "py-prob-21-05", levelId: "py-level-21", title: "Symmetric Tree (Mirror Reflection)", type: "coding", difficulty: "easy", order: 5,
        description: "LeetCode #101 Symmetric Tree.\nGiven the root of a binary tree, check whether it is a mirror of itself (i.e. symmetric around its center).\nPrint `True` if symmetric, else `False`.",
        whyThisMatters: "Dual recursive traversal comparing `t1.left` with `t2.right` and `t1.right` with `t2.left`.",
        concepts: ["symmetric tree", "dual dfs", "mirror check"], prerequisites: ["trees"], learningObjectives: ["Compare two subtrees as mirror reflections"], constraints: ["Nodes <= 1000"],
        examples: [{ input: "1 2 2 3 4 4 3", output: "True" }, { input: "1 2 2 null 3 null 3", output: "False" }],
        testCases: [
            { id: "tc1", input: "1 2 2 3 4 4 3", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "1 2 2 null 3 null 3", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Check symmetry\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["def is_mirror(t1, t2): if not t1 and not t2: return True. If not t1 or not t2: return False. Return t1.val == t2.val and is_mirror(t1.left, t2.right) and is_mirror(t1.right, t2.left)."],
        howToThink: ["Symmetry means left subtree's left matches right subtree's right."],
        approach: "Dual tree mirror DFS.", pseudocode: "def is_mirror(t1, t2):\n    if not t1 and not t2: return True\n    if not t1 or not t2 or t1.val != t2.val: return False\n    return is_mirror(t1.left, t2.right) and is_mirror(t1.right, t2.left)", explanation: "Simultaneous dual-pointer recursion.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef is_mirror(t1, t2):\n    if not t1 and not t2: return True\n    if not t1 or not t2 or t1.val != t2.val: return False\n    return is_mirror(t1.left, t2.right) and is_mirror(t1.right, t2.left)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    if not root:\n        print('True')\n        return\n    print(is_mirror(root.left, root.right))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Comparing t1.left with t2.left (which tests identical tree, not mirror)"], timeComplexity: "O(N)", spaceComplexity: "O(H)", interviewRelevance: "high", tags: ["trees", "recursion"]
    },
    {
        id: "py-prob-21-06", levelId: "py-level-21", title: "Binary Tree Level Order Traversal (BFS)", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #102 Binary Tree Level Order Traversal.\nGiven the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).\nPrint each level on a separate line, node values space-separated.\n\nUse `collections.deque` for a BFS queue.",
        whyThisMatters: "Level order BFS is the prototype for all breadth-first graph algorithms.",
        concepts: ["level order traversal", "bfs", "queue"], prerequisites: ["trees", "queues"], learningObjectives: ["Implement level-by-level BFS traversal using collections.deque"], constraints: ["Nodes <= 2000"],
        examples: [{ input: "3 9 20 null null 15 7", output: "3\n9 20\n15 7" }],
        testCases: [
            { id: "tc1", input: "3 9 20 null null 15 7", expectedOutput: "3\n9 20\n15 7", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import deque\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Level order BFS\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["q = deque([root]). While q: level_size = len(q). Pop level_size times to group nodes of the current level."],
        howToThink: ["Snapshot queue size at start of each while loop to process exactly one level."],
        approach: "BFS with level size snapshot.", pseudocode: "q = deque([root])\nwhile q:\n    sz = len(q)\n    level = []\n    for _ in range(sz):\n        node = q.popleft()\n        level.append(node.val)\n        if node.left: q.append(node.left)\n        if node.right: q.append(node.right)\n    print(*level)", explanation: "Deque guarantees O(1) pops, processing all nodes in linear O(N) time.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    if not root: return\n    q = deque([root])\n    while q:\n        sz = len(q)\n        level = []\n        for _ in range(sz):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        print(*level)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Not capturing len(q) upfront, mixing nodes from different levels"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["trees", "bfs", "must-know"]
    },
    {
        id: "py-prob-21-07", levelId: "py-level-21", title: "Validate Binary Search Tree (BST)", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #98 Validate Binary Search Tree.\nGiven the root of a binary tree, determine if it is a valid binary search tree (BST).\nA valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys strictly less than the node's key.\n- The right subtree of a node contains only nodes with keys strictly greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.\nPrint `True` if valid, else `False`.",
        whyThisMatters: "Validating that all descendants (not just direct children) satisfy the BST invariant via range propagation `[low, high]`.",
        concepts: ["validate bst", "range propagation", "bst invariant"], prerequisites: ["trees"], learningObjectives: ["Propagate valid min and max boundaries down tree recursion"], constraints: ["Nodes <= 10^4"],
        examples: [{ input: "2 1 3", output: "True" }, { input: "5 1 4 null null 3 6", output: "False" }],
        testCases: [
            { id: "tc1", input: "2 1 3", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "5 1 4 null null 3 6", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Validate BST\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["validate(node, low, high). Return low < node.val < high and validate(left, low, node.val) and validate(right, node.val, high)."],
        howToThink: ["Left child must be < root. Right child must be > root. Propagate tighter bounds at each level."],
        approach: "Min/Max range propagation.", pseudocode: "def is_valid(node, low=float('-inf'), high=float('inf')):\n    if not node: return True\n    if not (low < node.val < high): return False\n    return is_valid(node.left, low, node.val) and is_valid(node.right, node.val, high)", explanation: "Ensures every descendant satisfies global range constraint in O(N).",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef is_valid(node, low=float('-inf'), high=float('inf')):\n    if not node: return True\n    if not (low < node.val < high): return False\n    return is_valid(node.left, low, node.val) and is_valid(node.right, node.val, high)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(is_valid(root))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Only checking node.left.val < node.val and node.right.val > node.val (fails when indirect descendant violates property)"], timeComplexity: "O(N)", spaceComplexity: "O(H)", interviewRelevance: "high", tags: ["bst", "must-know"]
    },
    {
        id: "py-prob-21-08", levelId: "py-level-21", title: "Lowest Common Ancestor in BST", type: "coding", difficulty: "easy", order: 8,
        description: "LeetCode #235 Lowest Common Ancestor of a Binary Search Tree.\nGiven a binary search tree (BST) and two node values `P` and `Q`:\nFind the lowest common ancestor (LCA) node value.\nThe LCA is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants.\n\nInput: Values `P Q` on line 1, BST on line 2.\nPrint the LCA value.",
        whyThisMatters: "Exploits BST ordering: if both P and Q are smaller, go left; if both larger, go right; otherwise current node is LCA!",
        concepts: ["lca in bst", "bst properties", "search path"], prerequisites: ["bst"], learningObjectives: ["Find LCA in BST in O(H) time"], constraints: ["P and Q exist in BST"],
        examples: [{ input: "2 8\n6 2 8 0 4 7 9 null null 3 5", output: "6" }, { input: "2 4\n6 2 8 0 4 7 9 null null 3 5", output: "2" }],
        testCases: [
            { id: "tc1", input: "2 8\n6 2 8 0 4 7 9 null null 3 5", expectedOutput: "6", hidden: false },
            { id: "tc2", input: "2 4\n6 2 8 0 4 7 9 null null 3 5", expectedOutput: "2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        p, q = map(int, lines[0].split())\n        tokens = lines[1].split()\n        # LCA in BST\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["While curr: if p < curr.val and q < curr.val: curr = curr.left. Elif p > curr.val and q > curr.val: curr = curr.right. Else return curr.val."],
        howToThink: ["The split point where p and q diverge to different subtrees is their LCA."],
        approach: "BST navigation loop.", pseudocode: "curr = root\nwhile curr:\n    if p < curr.val and q < curr.val: curr = curr.left\n    elif p > curr.val and q > curr.val: curr = curr.right\n    else: print(curr.val); return", explanation: "O(H) iterative navigation with O(1) space.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        p, q = map(int, lines[0].split())\n        tokens = lines[1].split()\n        root = build_tree(tokens)\n        curr = root\n        while curr:\n            if p < curr.val and q < curr.val:\n                curr = curr.left\n            elif p > curr.val and q > curr.val:\n                curr = curr.right\n            else:\n                print(curr.val)\n                return\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using general tree LCA recursion instead of O(H) BST direction checks"], timeComplexity: "O(H)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["bst", "lca"]
    },
    {
        id: "py-prob-21-09", levelId: "py-level-21", title: "Diameter of Binary Tree", type: "coding", difficulty: "easy", order: 9,
        description: "LeetCode #543 Diameter of Binary Tree.\nGiven the root of a binary tree, return the length of the diameter of the tree.\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.\nThe length of a path between two nodes is represented by the number of edges between them.\nPrint the diameter integer.",
        whyThisMatters: "Bottom-up DFS calculating global variable `diameter = max(diameter, left_height + right_height)`.",
        concepts: ["diameter", "bottom-up dfs", "tree diameter"], prerequisites: ["trees"], learningObjectives: ["Calculate longest path across subtrees using postorder DFS"], constraints: ["Nodes <= 10^4"],
        examples: [{ input: "1 2 3 4 5", output: "3" }, { input: "1 2", output: "1" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "1 2", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Compute diameter\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["diameter = 0. def height(node): nonlocal diameter. If not node: return 0. lh, rh = height(node.left), height(node.right). diameter = max(diameter, lh + rh). Return 1 + max(lh, rh)."],
        howToThink: ["Path length passing through node as apex is left_height + right_height."],
        approach: "Postorder height + diameter accumulator.", pseudocode: "diameter = 0\ndef height(node):\n    if not node: return 0\n    lh, rh = height(node.left), height(node.right)\n    diameter = max(diameter, lh + rh)\n    return 1 + max(lh, rh)\nheight(root)\nprint(diameter)", explanation: "Single DFS pass calculates height and updates diameter in O(N).",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    diameter = 0\n    def height(node):\n        nonlocal diameter\n        if not node: return 0\n        lh = height(node.left)\n        rh = height(node.right)\n        diameter = max(diameter, lh + rh)\n        return 1 + max(lh, rh)\n    height(root)\n    print(diameter)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Counting nodes instead of edges (edges = nodes - 1)"], timeComplexity: "O(N)", spaceComplexity: "O(H)", interviewRelevance: "high", tags: ["trees", "dfs", "must-know"]
    },
    {
        id: "py-prob-21-10", levelId: "py-level-21", title: "Path Sum (Root to Leaf)", type: "coding", difficulty: "easy", order: 10,
        description: "LeetCode #112 Path Sum.\nGiven target sum `targetSum` on line 1, and binary tree on line 2:\nReturn `True` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.\nA leaf is a node with no children.\nPrint `True` or `False`.",
        whyThisMatters: "Verifying root-to-leaf paths by subtracting current node value as you descend.",
        concepts: ["path sum", "root to leaf", "dfs"], prerequisites: ["trees"], learningObjectives: ["Track path sum accumulation to leaf nodes"], constraints: ["Nodes <= 5000"],
        examples: [{ input: "22\n5 4 8 11 null 13 4 7 2 null null null 1", output: "True" }, { input: "5\n1 2 3", output: "False" }],
        testCases: [
            { id: "tc1", input: "22\n5 4 8 11 null 13 4 7 2 null null null 1", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "5\n1 2 3", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Path sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["has_path_sum(root, target): if not root: return False. If is leaf: return target == root.val. Return has_path_sum(left, target - root.val) or has_path_sum(right, target - root.val)."],
        howToThink: ["Subtract root.val from target at each step. At leaf, check if remainder == root.val."],
        approach: "DFS path subtraction.", pseudocode: "def has_sum(r, rem):\n    if not r: return False\n    if not r.left and not r.right: return r.val == rem\n    return has_sum(r.left, rem - r.val) or has_sum(r.right, rem - r.val)", explanation: "O(N) DFS search for path sum.",
        solution: "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef has_sum(r, rem):\n    if not r: return False\n    if not r.left and not r.right: return r.val == rem\n    return has_sum(r.left, rem - r.val) or has_sum(r.right, rem - r.val)\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        tokens = lines[1].split()\n        root = build_tree(tokens)\n        print(has_sum(root, target))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Stopping at an internal node that is not a leaf node"], timeComplexity: "O(N)", spaceComplexity: "O(H)", interviewRelevance: "high", tags: ["trees", "path sum"]
    }
];

writeLevel(18, level18);
writeLevel(19, level19);
writeLevel(20, level20);
writeLevel(21, level21);
