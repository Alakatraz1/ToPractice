const fs = require('fs');
const path = require('path');

function writeLevel(levelNum, problems) {
    const filename = `level-${levelNum < 10 ? '0' + levelNum : levelNum}.ts`;
    const filePath = path.join(__dirname, '../src/data/pythonProblems', filename);
    const content = `import { Problem } from '../types';\n\nexport const pyLevel${levelNum}Problems: Problem[] = ${JSON.stringify(problems, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Generated ${filename} with ${problems.length} problems`);
}

// Level 14: Hash Tables for Interview Problems
const level14 = [
    {
        id: "py-prob-14-01", levelId: "py-level-14", title: "Valid Anagram", type: "coding", difficulty: "easy", order: 1,
        description: "LeetCode #242 Valid Anagram.\nGiven two strings `S` and `T` on separate lines, return `True` if `T` is an anagram of `S`, and `False` otherwise.\nAn Anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.",
        whyThisMatters: "Frequency map comparison using `collections.Counter(s) == collections.Counter(t)` is a benchmark interview question.",
        concepts: ["anagram", "counter", "hash map"], prerequisites: ["dictionaries"], learningObjectives: ["Compare character frequency distributions"], constraints: ["Lowercase letters"],
        examples: [{ input: "anagram\nnagaram", output: "True" }, { input: "rat\ncar", output: "False" }],
        testCases: [
            { id: "tc1", input: "anagram\nnagaram", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "rat\ncar", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        print(Counter(s) == Counter(t))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Counter(s) == Counter(t)"],
        howToThink: ["Anagrams must have identical character frequency counts."],
        approach: "Use collections.Counter.", pseudocode: "print(Counter(s) == Counter(t))", explanation: "Comparing Counter objects takes O(N) time and O(1) space (at most 26 lowercase English letters).",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        print(Counter(s) == Counter(t))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting strings (O(N log N)) when Counter achieves O(N)"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["anagram", "hash map"]
    },
    {
        id: "py-prob-14-02", levelId: "py-level-14", title: "Group Anagrams", type: "coding", difficulty: "medium", order: 2,
        description: "LeetCode #49 Group Anagrams.\nGiven an array of strings, group the anagrams together into a dictionary where the key is the sorted string `''.join(sorted(w))`.\nPrint each group of anagrams sorted alphabetically on separate lines.",
        whyThisMatters: "Canonical interview problem demonstrating canonical hash keys for bucketing.",
        concepts: ["group anagrams", "canonical key", "bucketing"], prerequisites: ["dictionaries", "anagram"], learningObjectives: ["Bucket strings using sorted signatures as hash keys"], constraints: ["Strings contain lowercase English letters"],
        examples: [{ input: "eat tea tan ate nat bat", output: "ate eat tea\nbat\nnat tan" }],
        testCases: [
            { id: "tc1", input: "eat tea tan ate nat bat", expectedOutput: "ate eat tea\nbat\nnat tan", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Group anagrams\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["key = ''.join(sorted(w)). groups[key].append(w). Sort each group, then sort groups by first word."],
        howToThink: ["Words that are anagrams share the exact same sorted character sequence."],
        approach: "Defaultdict with sorted key signature.", pseudocode: "groups = defaultdict(list)\nfor w in words: groups[''.join(sorted(w))].append(w)\nres = [sorted(g) for g in groups.values()]\nres.sort()\nfor g in res: print(*g)", explanation: "Canonical signature groups anagrams in O(N * K log K) time.",
        solution: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    words = sys.stdin.read().split()\n    if not words:\n        return\n    groups = defaultdict(list)\n    for w in words:\n        groups[''.join(sorted(w))].append(w)\n    res = [sorted(g) for g in groups.values()]\n    res.sort()\n    for g in res:\n        print(*g)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using non-hashable lists as dict keys instead of strings or tuples"], timeComplexity: "O(N * K log K)", spaceComplexity: "O(N * K)", interviewRelevance: "high", tags: ["anagrams", "must-know"]
    },
    {
        id: "py-prob-14-03", levelId: "py-level-14", title: "Longest Consecutive Sequence in O(N)", type: "coding", difficulty: "medium", order: 3,
        description: "LeetCode #128 Longest Consecutive Sequence.\nGiven an unsorted array of integers `nums`, find the length of the longest consecutive elements sequence.\nYou must write an algorithm that runs in `O(N)` time.\n(For example, for `[100, 4, 200, 1, 3, 2]`, sequence is `[1, 2, 3, 4]`, length is `4`).",
        whyThisMatters: "Only start counting when `x - 1 not in num_set`; this simple check ensures each element is visited at most twice.",
        concepts: ["longest consecutive", "set lookup", "o(n) sequence"], prerequisites: ["sets"], learningObjectives: ["Identify sequence starting points with set lookups"], constraints: ["N <= 10^5"],
        examples: [{ input: "100 4 200 1 3 2", output: "4" }, { input: "0 3 7 2 5 8 4 6 0 1", output: "9" }],
        testCases: [
            { id: "tc1", input: "100 4 200 1 3 2", expectedOutput: "4", hidden: false },
            { id: "tc2", input: "0 3 7 2 5 8 4 6 0 1", expectedOutput: "9", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Longest consecutive sequence in O(N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["num_set = set(nums). If x - 1 not in num_set: streak = 1; while x + streak in num_set: streak += 1; longest = max(longest, streak)."],
        howToThink: ["A number is the beginning of a sequence only if x - 1 is NOT present in the set."],
        approach: "Set lookups for sequence starts.", pseudocode: "s = set(nums)\nbest = 0\nfor x in s:\n    if x - 1 not in s:\n        cur = 1\n        while x + cur in s: cur += 1\n        best = max(best, cur)\nprint(best)", explanation: "Only starting numbers initiate while loops, yielding strict O(N) amortized time.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        print(0)\n        return\n    s = set(nums)\n    best = 0\n    for x in s:\n        if x - 1 not in s:\n            cur = 1\n            while x + cur in s:\n                cur += 1\n            best = max(best, cur)\n    print(best)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting array in O(N log N) which violates strict O(N) constraint"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["sets", "must-know"]
    },
    {
        id: "py-prob-14-04", levelId: "py-level-14", title: "Subarray Sum Equals K", type: "coding", difficulty: "medium", order: 4,
        description: "LeetCode #560 Subarray Sum Equals K.\nGiven target integer `K` on line 1, and an array of integers on line 2:\nFind the total number of continuous subarrays whose sum equals `K`.\n\nUse a prefix sum hash map `prefix_counts` initialized with `{0: 1}` to achieve `O(N)` time.",
        whyThisMatters: "Prefix sum hash map is the cornerstone of counting contiguous subarray properties.",
        concepts: ["prefix sums", "hash map", "subarray count"], prerequisites: ["prefix sums", "dictionaries"], learningObjectives: ["Count matching subarray sums in O(N) with prefix hash map"], constraints: ["N <= 10^5"],
        examples: [{ input: "2\n1 1 1", output: "2" }, { input: "3\n1 2 3", output: "2" }],
        testCases: [
            { id: "tc1", input: "2\n1 1 1", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "3\n1 2 3", expectedOutput: "2", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Count subarrays summing to k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["cur = 0, counts = {0: 1}, ans = 0. For x in nums: cur += x; ans += counts.get(cur - k, 0); counts[cur] = counts.get(cur, 0) + 1."],
        howToThink: ["If current prefix sum is S, any prior prefix sum equal to S - K creates a subarray summing to K."],
        approach: "Prefix sum frequency map.", pseudocode: "ans = cur = 0\ncounts = {0: 1}\nfor x in nums:\n    cur += x\n    ans += counts.get(cur - k, 0)\n    counts[cur] = counts.get(cur, 0) + 1\nprint(ans)", explanation: "Computes all matching subarrays in one pass without quadratic loops.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        ans = cur = 0\n        counts = {0: 1}\n        for x in nums:\n            cur += x\n            ans += counts.get(cur - k, 0)\n            counts[cur] = counts.get(cur, 0) + 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to initialize counts with {0: 1} to handle subarrays starting at index 0"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["prefix sums", "hash map", "must-know"]
    },
    {
        id: "py-prob-14-05", levelId: "py-level-14", title: "Intersection of Two Arrays II", type: "coding", difficulty: "easy", order: 5,
        description: "LeetCode #350.\nGiven two integer arrays on separate lines, return an array of their intersection.\nEach element in the result must appear as many times as it shows in both arrays (accounting for multiplicity).\nPrint the result sorted in ascending order.",
        whyThisMatters: "Contrasts set intersection (unique) with multiset intersection (frequency minimum).",
        concepts: ["counter", "multiset intersection", "frequency min"], prerequisites: ["dictionaries"], learningObjectives: ["Intersect multisets accounting for multiplicity"], constraints: ["Integer arrays"],
        examples: [{ input: "1 2 2 1\n2 2", output: "2 2" }, { input: "4 9 5\n9 4 9 8 4", output: "4 9" }],
        testCases: [
            { id: "tc1", input: "1 2 2 1\n2 2", expectedOutput: "2 2", hidden: false },
            { id: "tc2", input: "4 9 5\n9 4 9 8 4", expectedOutput: "4 9", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = list(map(int, lines[0].split()))\n        b = list(map(int, lines[1].split()))\n        # Intersection with multiplicity\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["ca, cb = Counter(a), Counter(b). For x in ca: count = min(ca[x], cb[x]). Output x that many times."],
        howToThink: ["The multiplicity of each item in the intersection is min(count_in_a, count_in_b)."],
        approach: "Counter intersection.", pseudocode: "res = []\nca, cb = Counter(a), Counter(b)\nfor x in ca:\n    res.extend([x] * min(ca[x], cb[x]))\nprint(*sorted(res))", explanation: "Counter multiset intersection in linear time.",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = list(map(int, lines[0].split()))\n        b = list(map(int, lines[1].split()))\n        ca, cb = Counter(a), Counter(b)\n        res = []\n        for x in ca:\n            res.extend([x] * min(ca[x], cb[x]))\n        print(*sorted(res))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using sets which drops duplicate elements"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["counter", "frequency"]
    },
    {
        id: "py-prob-14-06", levelId: "py-level-14", title: "Find All Duplicates in an Array", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #442.\nGiven an integer array `nums` of length `N` where all integers are in the range `[1, N]` and each integer appears once or twice:\nFind all integers that appear twice.\nPrint them sorted in ascending order.",
        whyThisMatters: "Index negation trick allows finding duplicates in O(N) time and O(1) extra space.",
        concepts: ["index negation", "duplicates", "in-place hash"], prerequisites: ["dictionaries", "arrays"], learningObjectives: ["Detect duplicate elements using index mapping"], constraints: ["1 <= nums[i] <= N"],
        examples: [{ input: "4 3 2 7 8 2 3 1", output: "2 3" }],
        testCases: [
            { id: "tc1", input: "4 3 2 7 8 2 3 1", expectedOutput: "2 3", hidden: false },
            { id: "tc2", input: "1 1 2", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Find duplicates appearing twice\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use index negation: for x in nums: idx = abs(x) - 1. If nums[idx] < 0: res.append(abs(x)). Else: nums[idx] = -nums[idx]."],
        howToThink: ["Sign of nums[val - 1] indicates whether val has already been seen."],
        approach: "Index negation in-place.", pseudocode: "res = []\nfor x in nums:\n    idx = abs(x) - 1\n    if nums[idx] < 0: res.append(abs(x))\n    else: nums[idx] = -nums[idx]\nprint(*sorted(res))", explanation: "Uses the array's sign bit as a boolean visited flag in O(N) time and O(1) space.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    res = []\n    for x in nums:\n        idx = abs(x) - 1\n        if nums[idx] < 0:\n            res.append(abs(x))\n        else:\n            nums[idx] = -nums[idx]\n    print(*sorted(res))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting abs(x) when computing index on already-negated values"], timeComplexity: "O(N log N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["arrays", "clever-hashing"]
    },
    {
        id: "py-prob-14-07", levelId: "py-level-14", title: "Top K Frequent Elements", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #347 Top K Frequent Elements.\nGiven integer `K` on line 1, and an array of integers on line 2:\nReturn the `K` most frequent elements.\nPrint the result sorted in ascending order.",
        whyThisMatters: "Ranked among the top 10 most frequently asked questions across all FAANG interviews.",
        concepts: ["top k", "counter", "frequency"], prerequisites: ["dictionaries"], learningObjectives: ["Find top K items using frequency map and sorting"], constraints: ["1 <= K <= number of unique elements"],
        examples: [{ input: "2\n1 1 1 2 2 3", output: "1 2" }, { input: "1\n1", output: "1" }],
        testCases: [
            { id: "tc1", input: "2\n1 1 1 2 2 3", expectedOutput: "1 2", hidden: false },
            { id: "tc2", input: "1\n1", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Top K frequent\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["counts = Counter(nums). Top K are [item for item, _ in counts.most_common(k)]."],
        howToThink: ["Count frequencies, take top k with Counter.most_common(k)."],
        approach: "Counter.most_common(k).", pseudocode: "counts = Counter(nums)\ntop_k = [item for item, _ in counts.most_common(k)]\nprint(*sorted(top_k))", explanation: "Counter.most_common(k) uses a heap internally for O(N log K) performance.",
        solution: "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        counts = Counter(nums)\n        top_k = [item for item, _ in counts.most_common(k)]\n        print(*sorted(top_k))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Sorting entire array instead of unique elements"], timeComplexity: "O(N log K)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["top-k", "counter", "must-know"]
    },
    {
        id: "py-prob-14-08", levelId: "py-level-14", title: "Contains Duplicate II (Within Window K)", type: "coding", difficulty: "easy", order: 8,
        description: "LeetCode #219.\nGiven integer `K` on line 1, and an array of integers on line 2:\nReturn `True` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= K`.\nOtherwise return `False`.",
        whyThisMatters: "Combines hash maps with sliding window constraint.",
        concepts: ["sliding window hash", "duplicate within distance"], prerequisites: ["dictionaries"], learningObjectives: ["Track most recent index in hash map to verify distance bound"], constraints: ["K >= 0"],
        examples: [{ input: "3\n1 2 3 1", output: "True" }, { input: "2\n1 2 3 1 2 3", output: "False" }],
        testCases: [
            { id: "tc1", input: "3\n1 2 3 1", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "2\n1 2 3 1 2 3", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Check duplicate within distance k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["seen = {}. For i, x in enumerate(nums): if x in seen and i - seen[x] <= k: return True. seen[x] = i."],
        howToThink: ["Store last seen index of each number. If current index - last index <= k, return True."],
        approach: "Hash map tracking most recent index.", pseudocode: "seen = {}\nfor i, x in enumerate(nums):\n    if x in seen and i - seen[x] <= k: print('True'); return\n    seen[x] = i\nprint('False')", explanation: "Single pass O(N) check.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        seen = {}\n        for i, x in enumerate(nums):\n            if x in seen and i - seen[x] <= k:\n                print('True')\n                return\n            seen[x] = i\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["O(N*K) sliding window when hash map gives O(N) directly"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["hash map", "sliding window"]
    },
    {
        id: "py-prob-14-09", levelId: "py-level-14", title: "Isomorphic Strings", type: "coding", difficulty: "easy", order: 9,
        description: "LeetCode #205 Isomorphic Strings.\nTwo strings `S` and `T` are isomorphic if the characters in `S` can be replaced to get `T`.\nAll occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.\nPrint `True` if isomorphic, else `False`.",
        whyThisMatters: "Bijective mapping (one-to-one and onto) between two sequences.",
        concepts: ["isomorphic", "bijective mapping", "hash map"], prerequisites: ["dictionaries"], learningObjectives: ["Validate 1-to-1 character mappings between strings"], constraints: ["Equal length strings"],
        examples: [{ input: "egg\nadd", output: "True" }, { input: "foo\nbar", output: "False" }],
        testCases: [
            { id: "tc1", input: "egg\nadd", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "foo\nbar", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        # Check if isomorphic\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["len(set(zip(s, t))) == len(set(s)) == len(set(t))"],
        howToThink: ["A bijection requires that mapping s->t is 1-to-1 in both directions."],
        approach: "Check uniqueness of paired mappings.", pseudocode: "print(len(set(zip(s, t))) == len(set(s)) == len(set(t)))", explanation: "If every unique char in S maps to unique char in T, number of unique pairs equals number of unique chars in both.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        if len(s) != len(t):\n            print('False')\n            return\n        print(len(set(zip(s, t))) == len(set(s)) == len(set(t)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Checking only one direction (e.g. 'badc' and 'baba')"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["strings", "hash map"]
    },
    {
        id: "py-prob-14-10", levelId: "py-level-14", title: "Word Pattern", type: "coding", difficulty: "easy", order: 10,
        description: "LeetCode #290 Word Pattern.\nGiven a pattern string `pattern` and a string `s` of words on separate lines:\nFind if `s` follows the same pattern.\nHere follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.\nPrint `True` or `False`.",
        whyThisMatters: "Direct extension of Isomorphic Strings from characters to words.",
        concepts: ["bijection", "word pattern", "hash map"], prerequisites: ["isomorphic"], learningObjectives: ["Map characters to words bijectively"], constraints: ["Pattern and words"],
        examples: [{ input: "abba\ndog cat cat dog", output: "True" }, { input: "abba\ndog cat cat fish", output: "False" }],
        testCases: [
            { id: "tc1", input: "abba\ndog cat cat dog", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "abba\ndog cat cat fish", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        pattern = lines[0].strip()\n        words = lines[1].split()\n        # Check bijection\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["len(pattern) == len(words) and len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words))"],
        howToThink: ["Pattern length must match word count, and mapping must be 1-to-1."],
        approach: "Check lengths and set bijection.", pseudocode: "if len(pattern) != len(words): print('False'); return\nprint(len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words)))", explanation: "Bijection check identical to Isomorphic Strings.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        pattern = lines[0].strip()\n        words = lines[1].split()\n        if len(pattern) != len(words):\n            print('False')\n            return\n        print(len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to check len(pattern) == len(words)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["hash map", "strings"]
    }
];

// Level 15: Stacks & Queues in Python
const level15 = [
    {
        id: "py-prob-15-01", levelId: "py-level-15", title: "Valid Parentheses", type: "coding", difficulty: "easy", order: 1,
        description: "LeetCode #20 Valid Parentheses.\nGiven a string `S` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`:\nDetermine if the input string is valid.\nAn input string is valid if open brackets are closed by the same type of brackets in the correct order.\nPrint `True` if valid, else `False`.",
        whyThisMatters: "Valid Parentheses using a stack is universally the #1 asked stack interview question.",
        concepts: ["stack", "parentheses matching", "lifo"], prerequisites: ["stacks"], learningObjectives: ["Use a stack to validate matching pairs"], constraints: ["Brackets string"],
        examples: [{ input: "()[]{}", output: "True" }, { input: "(]", output: "False" }, { input: "([)]", output: "False" }],
        testCases: [
            { id: "tc1", input: "()[]{}", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "(]", expectedOutput: "False", hidden: false },
            { id: "tc3", input: "([)]", expectedOutput: "False", hidden: false },
            { id: "tc4", input: "{[]}", expectedOutput: "True", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Validate parentheses with stack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["mapping = {')': '(', '}': '{', ']': '['}. Push open brackets. For close brackets, pop and verify."],
        howToThink: ["LIFO stack: the most recently opened bracket must be the first one closed."],
        approach: "Use a list as stack.", pseudocode: "stack = []\nmapping = {')': '(', '}': '{', ']': '['}\nfor ch in s:\n    if ch in mapping:\n        if not stack or stack.pop() != mapping[ch]: print('False'); return\n    else: stack.append(ch)\nprint(len(stack) == 0)", explanation: "Pushes openers, pops and validates closers in O(N) time.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for ch in s:\n        if ch in mapping:\n            if not stack or stack.pop() != mapping[ch]:\n                print('False')\n                return\n        else:\n            stack.append(ch)\n    print(len(stack) == 0)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to check if stack is empty at the end (e.g. unclosed '(')"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["stack", "essential"]
    },
    {
        id: "py-prob-15-02", levelId: "py-level-15", title: "Min Stack Design", type: "coding", difficulty: "medium", order: 2,
        description: "LeetCode #155 Min Stack.\nDesign a stack that supports push, pop, top, and retrieving the minimum element in `O(1)` time.\n\nInput format: Sequence of commands:\n- `push X`\n- `pop`\n- `getMin` (prints the current minimum on a new line)\nProcess all commands and output the getMin results.",
        whyThisMatters: "Pairing a data stack with a min-tracker stack in O(1) time.",
        concepts: ["min stack", "o(1) minimum", "stack design"], prerequisites: ["stacks"], learningObjectives: ["Design a stack with O(1) getMin using companion stack"], constraints: ["Commands valid"],
        examples: [{ input: "push -2\npush 0\npush -3\ngetMin\npop\ngetMin", output: "-3\n-2" }],
        testCases: [
            { id: "tc1", input: "push -2\npush 0\npush -3\ngetMin\npop\ngetMin", expectedOutput: "-3\n-2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Implement MinStack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Maintain stack and min_stack. On push x: min_stack.append(min(x, min_stack[-1] if min_stack else x))."],
        howToThink: ["Each element pushed carries with it the minimum value seen up to that point."],
        approach: "Dual stack tracking.", pseudocode: "stack = []\nmin_stack = []\nfor line in lines:\n    parts = line.split()\n    if parts[0] == 'push':\n        v = int(parts[1])\n        stack.append(v)\n        min_stack.append(min(v, min_stack[-1] if min_stack else v))\n    elif parts[0] == 'pop':\n        stack.pop(); min_stack.pop()\n    elif parts[0] == 'getMin':\n        print(min_stack[-1])", explanation: "All four operations execute in strictly O(1) time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    stack = []\n    min_stack = []\n    for line in lines:\n        if not line.strip():\n            continue\n        parts = line.split()\n        cmd = parts[0]\n        if cmd == 'push':\n            val = int(parts[1])\n            stack.append(val)\n            min_val = min(val, min_stack[-1]) if min_stack else val\n            min_stack.append(min_val)\n        elif cmd == 'pop':\n            if stack:\n                stack.pop()\n                min_stack.pop()\n        elif cmd == 'getMin':\n            if min_stack:\n                print(min_stack[-1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Recalculating min with min(stack) which takes O(N) instead of O(1)"], timeComplexity: "O(1) per op", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["stack", "system design"]
    },
    {
        id: "py-prob-15-03", levelId: "py-level-15", title: "Evaluate Reverse Polish Notation", type: "coding", difficulty: "medium", order: 3,
        description: "LeetCode #150 Evaluate Reverse Polish Notation.\nEvaluate the value of an arithmetic expression in Reverse Polish Notation (postfix notation).\nValid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.\nDivision between integers should truncate toward zero (`int(a / b)` in Python).\nPrint the evaluated integer.",
        whyThisMatters: "Compiler expression evaluators and HP calculators use postfix stacks.",
        concepts: ["rpn", "postfix evaluation", "stack"], prerequisites: ["stacks"], learningObjectives: ["Evaluate postfix expressions using an operand stack"], constraints: ["Valid RPN expression"],
        examples: [{ input: "2 1 + 3 *", output: "9" }, { input: "4 13 5 / +", output: "6" }],
        testCases: [
            { id: "tc1", input: "2 1 + 3 *", expectedOutput: "9", hidden: false },
            { id: "tc2", input: "4 13 5 / +", expectedOutput: "6", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Evaluate RPN\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["For number, push to stack. For operator, pop b then pop a, apply op, push int(a / b) etc."],
        howToThink: ["Numbers go on stack. Operators consume top 2 operands."],
        approach: "Operand stack traversal.", pseudocode: "stack = []\nfor t in tokens:\n    if t in '+-*/':\n        b, a = stack.pop(), stack.pop()\n        if t == '+': stack.append(a + b)\n        elif t == '-': stack.append(a - b)\n        elif t == '*': stack.append(a * b)\n        elif t == '/': stack.append(int(a / b))\n    else: stack.append(int(t))\nprint(stack[0])", explanation: "int(a / b) truncates towards zero in Python (unlike a // b which truncates to -infinity).",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    stack = []\n    for t in tokens:\n        if t in '+-*/':\n            b = stack.pop()\n            a = stack.pop()\n            if t == '+': stack.append(a + b)\n            elif t == '-': stack.append(a - b)\n            elif t == '*': stack.append(a * b)\n            elif t == '/': stack.append(int(a / b))\n        else:\n            stack.append(int(t))\n    print(stack[0])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Popping order inverted: first pop is b (right operand), second pop is a (left operand)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["stack", "expressions"]
    },
    {
        id: "py-prob-15-04", levelId: "py-level-15", title: "Daily Temperatures (Monotonic Stack)", type: "coding", difficulty: "medium", order: 4,
        description: "LeetCode #739 Daily Temperatures.\nGiven an array of integers `temperatures` representing daily temperatures:\nReturn an array `answer` such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature.\nIf there is no future day for which this is possible, keep `answer[i] == 0`.\nPrint `answer` space-separated.",
        whyThisMatters: "Monotonic Stack is the single most tested advanced stack pattern in technical assessments.",
        concepts: ["monotonic stack", "daily temperatures", "next greater element"], prerequisites: ["stacks"], learningObjectives: ["Implement monotonic decreasing stack for next greater element"], constraints: ["N <= 10^5"],
        examples: [{ input: "73 74 75 71 69 72 76 73", output: "1 1 4 2 1 1 0 0" }],
        testCases: [
            { id: "tc1", input: "73 74 75 71 69 72 76 73", expectedOutput: "1 1 4 2 1 1 0 0", hidden: false },
            { id: "tc2", input: "30 40 50 60", expectedOutput: "1 1 1 0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    temps = list(map(int, sys.stdin.read().split()))\n    # Monotonic stack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["stack = []. Stores indices. For curr_idx, t in enumerate(temps): while stack and temps[stack[-1]] < t: prev_idx = stack.pop(); ans[prev_idx] = curr_idx - prev_idx. stack.append(curr_idx)."],
        howToThink: ["Maintain indices of temperatures waiting for a warmer day. Pop as soon as warmer day arrives."],
        approach: "Monotonic decreasing stack of indices.", pseudocode: "ans = [0] * len(temps)\nstack = []\nfor i, t in enumerate(temps):\n    while stack and temps[stack[-1]] < t:\n        prev = stack.pop()\n        ans[prev] = i - prev\n    stack.append(i)\nprint(*ans)", explanation: "Each index pushed and popped at most once, running in strictly linear O(N) time.",
        solution: "import sys\n\ndef solve():\n    temps = list(map(int, sys.stdin.read().split()))\n    if not temps:\n        return\n    ans = [0] * len(temps)\n    stack = []\n    for i, t in enumerate(temps):\n        while stack and temps[stack[-1]] < t:\n            prev = stack.pop()\n            ans[prev] = i - prev\n        stack.append(i)\n    print(*ans)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Quadratic O(N^2) double loop causing TLE"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["monotonic stack", "must-know"]
    },
    {
        id: "py-prob-15-05", levelId: "py-level-15", title: "Next Greater Element I", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #496 Next Greater Element I.\nGiven array `nums` of distinct integers:\nFor each element, find the first greater element to its right. If none exists, output `-1` for that element.\nPrint the next greater values space-separated.",
        whyThisMatters: "Direct monotonic stack mapping stored in a dictionary.",
        concepts: ["next greater element", "monotonic stack"], prerequisites: ["monotonic stack"], learningObjectives: ["Map next greater elements in O(N)"], constraints: ["Distinct integers"],
        examples: [{ input: "4 5 2 25", output: "5 25 25 -1" }, { input: "13 7 6 12", output: "-1 12 12 -1" }],
        testCases: [
            { id: "tc1", input: "4 5 2 25", expectedOutput: "5 25 25 -1", hidden: false },
            { id: "tc2", input: "13 7 6 12", expectedOutput: "-1 12 12 -1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Next greater element\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["stack = []. nxt = {x: -1 for x in nums}. For x in nums: while stack and stack[-1] < x: nxt[stack.pop()] = x. stack.append(x)."],
        howToThink: ["When a bigger element x arrives, it resolves the next greater element for all smaller items on the stack."],
        approach: "Monotonic stack + dictionary lookup.", pseudocode: "nxt = {x: -1 for x in nums}\nstack = []\nfor x in nums:\n    while stack and stack[-1] < x: nxt[stack.pop()] = x\n    stack.append(x)\nprint(*(nxt[x] for x in nums))", explanation: "One-pass O(N) evaluation.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    nxt = {x: -1 for x in nums}\n    stack = []\n    for x in nums:\n        while stack and stack[-1] < x:\n            nxt[stack.pop()] = x\n        stack.append(x)\n    print(*(nxt[x] for x in nums))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Leaving remaining stack elements without -1 mapping"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["monotonic stack"]
    },
    {
        id: "py-prob-15-06", levelId: "py-level-15", title: "FIFO Queue with collections.deque", type: "coding", difficulty: "easy", order: 6,
        description: "In Python, using `list.pop(0)` takes `O(N)` linear time because all remaining elements must shift left!\nFor an efficient FIFO queue, use `collections.deque` where `append()` and `popleft()` are strictly `O(1)`.\n\n**Task:**\nProcess commands on separate lines:\n- `enqueue X`: add X to queue\n- `dequeue`: remove and print the front element\nIf dequeue on empty queue, print `EMPTY`.",
        whyThisMatters: "Using `list.pop(0)` in BFS is one of the most common beginner performance blunders; `collections.deque` is the professional standard.",
        concepts: ["deque", "fifo queue", "collections.deque"], prerequisites: ["queues"], learningObjectives: ["Use collections.deque for O(1) queue operations"], constraints: ["Commands valid"],
        examples: [{ input: "enqueue 10\nenqueue 20\ndequeue\nenqueue 30\ndequeue\ndequeue\ndequeue", output: "10\n20\n30\nEMPTY" }],
        testCases: [
            { id: "tc1", input: "enqueue 10\nenqueue 20\ndequeue\nenqueue 30\ndequeue\ndequeue\ndequeue", expectedOutput: "10\n20\n30\nEMPTY", hidden: false }
        ],
        starterCode: "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Implement queue with deque\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["q = deque(). q.append(x) and q.popleft()."],
        howToThink: ["deque offers O(1) appends and pops from both ends."],
        approach: "Use collections.deque.", pseudocode: "q = deque()\nfor line in lines:\n    parts = line.split()\n    if parts[0] == 'enqueue': q.append(parts[1])\n    elif parts[0] == 'dequeue': print(q.popleft() if q else 'EMPTY')", explanation: "Avoids O(N) list shifts.",
        solution: "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    q = deque()\n    for line in lines:\n        if not line.strip():\n            continue\n        parts = line.split()\n        if parts[0] == 'enqueue':\n            q.append(parts[1])\n        elif parts[0] == 'dequeue':\n            if q:\n                print(q.popleft())\n            else:\n                print('EMPTY')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using list.pop(0) in performance-sensitive contexts"], timeComplexity: "O(1) per op", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["queue", "deque", "must-know"]
    },
    {
        id: "py-prob-15-07", levelId: "py-level-15", title: "Implement Queue using Two Stacks", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #232 Implement Queue using Stacks.\nImplement a FIFO queue using only two LIFO stacks (`in_stack` and `out_stack`).\n\nCommands on separate lines:\n- `push X`\n- `pop` (prints the popped element)\nProcess commands and print outputs.",
        whyThisMatters: "Amortized analysis classic: elements are transferred to out_stack only when out_stack is empty, yielding O(1) amortized time.",
        concepts: ["two stacks", "amortized analysis", "queue"], prerequisites: ["stacks", "queues"], learningObjectives: ["Simulate queue with two stacks in O(1) amortized time"], constraints: ["Commands valid"],
        examples: [{ input: "push 1\npush 2\npop\npush 3\npop\npop", output: "1\n2\n3" }],
        testCases: [
            { id: "tc1", input: "push 1\npush 2\npop\npush 3\npop\npop", expectedOutput: "1\n2\n3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Queue using two stacks\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Push to in_stack. When popping: if out_stack empty, while in_stack: out_stack.append(in_stack.pop()). Return out_stack.pop()."],
        howToThink: ["Transferring in_stack to out_stack reverses order, making LIFO behave as FIFO."],
        approach: "Two stacks with lazy transfer.", pseudocode: "in_st, out_st = [], []\nfor line in lines:\n    parts = line.split()\n    if parts[0] == 'push': in_st.append(parts[1])\n    elif parts[0] == 'pop':\n        if not out_st:\n            while in_st: out_st.append(in_st.pop())\n        print(out_st.pop())", explanation: "Each item pushed and popped at most twice overall (O(1) amortized).",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    in_st, out_st = [], []\n    for line in lines:\n        if not line.strip():\n            continue\n        parts = line.split()\n        if parts[0] == 'push':\n            in_st.append(parts[1])\n        elif parts[0] == 'pop':\n            if not out_st:\n                while in_st:\n                    out_st.append(in_st.pop())\n            print(out_st.pop())\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Transferring back and forth on every push/pop, degrading to O(N)"], timeComplexity: "O(1) amortized", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["queue", "stacks"]
    },
    {
        id: "py-prob-15-08", levelId: "py-level-15", title: "Remove All Adjacent Duplicates in String", type: "coding", difficulty: "easy", order: 8,
        description: "LeetCode #1047.\nYou are given a string `S` consisting of lowercase English letters.\nA duplicate removal consists of choosing two adjacent and equal letters and removing them.\nWe repeatedly make duplicate removals on `S` until we no longer can.\nPrint the final string.",
        whyThisMatters: "Stack eliminates nested loop string deletions.",
        concepts: ["stack", "string cancellation"], prerequisites: ["stacks"], learningObjectives: ["Cancel adjacent duplicates using stack"], constraints: ["Lowercase letters"],
        examples: [{ input: "abbaca", output: "ca" }, { input: "azxxzy", output: "ay" }],
        testCases: [
            { id: "tc1", input: "abbaca", expectedOutput: "ca", hidden: false },
            { id: "tc2", input: "azxxzy", expectedOutput: "ay", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Remove adjacent duplicates with stack\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["stack = []. For c in s: if stack and stack[-1] == c: stack.pop(); else: stack.append(c)."],
        howToThink: ["If current char matches top of stack, pop. Else push."],
        approach: "Character stack.", pseudocode: "stack = []\nfor c in s:\n    if stack and stack[-1] == c: stack.pop()\n    else: stack.append(c)\nprint(''.join(stack))", explanation: "Simulates recursive duplicate elimination in one linear pass.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    stack = []\n    for c in s:\n        if stack and stack[-1] == c:\n            stack.pop()\n        else:\n            stack.append(c)\n    print(''.join(stack))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Repeated string slicing in a while loop costing O(N^2)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["stack", "strings"]
    },
    {
        id: "py-prob-15-09", levelId: "py-level-15", title: "Asteroid Collision", type: "coding", difficulty: "medium", order: 9,
        description: "LeetCode #735 Asteroid Collision.\nWe are given an array `asteroids` of integers representing asteroids in a row.\nFor each asteroid, absolute value represents size, and sign represents direction (`+` right, `-` left).\nFind out the state of the asteroids after all collisions.\n- If two asteroids meet, the smaller one explodes.\n- If both are the same size, both explode.\n- Two asteroids moving in the same direction never meet.\nPrint remaining asteroids space-separated.",
        whyThisMatters: "Simulates physical collision physics using stack state.",
        concepts: ["asteroid collision", "stack", "simulation"], prerequisites: ["stacks"], learningObjectives: ["Simulate collision cancellation conditions with stack"], constraints: ["Non-zero integers"],
        examples: [{ input: "5 10 -5", output: "5 10" }, { input: "8 -8", output: "" }, { input: "10 2 -5", output: "10" }],
        testCases: [
            { id: "tc1", input: "5 10 -5", expectedOutput: "5 10", hidden: false },
            { id: "tc2", input: "8 -8", expectedOutput: "", hidden: false },
            { id: "tc3", input: "10 2 -5", expectedOutput: "10", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    asteroids = list(map(int, sys.stdin.read().split()))\n    # Asteroid collisions\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Collision only happens when top > 0 and current < 0."],
        howToThink: ["While top > 0 and current < 0: compare sizes and explode appropriately."],
        approach: "Collision loop on stack top.", pseudocode: "stack = []\nfor ast in asteroids:\n    while stack and ast < 0 < stack[-1]:\n        if stack[-1] < -ast: stack.pop(); continue\n        elif stack[-1] == -ast: stack.pop()\n        break\n    else: stack.append(ast)\nprint(*stack)", explanation: "Only opposite direction collisions (right-mover meeting left-mover) cause conflict.",
        solution: "import sys\n\ndef solve():\n    asteroids = list(map(int, sys.stdin.read().split()))\n    if not asteroids:\n        return\n    stack = []\n    for ast in asteroids:\n        while stack and ast < 0 < stack[-1]:\n            if stack[-1] < -ast:\n                stack.pop()\n                continue\n            elif stack[-1] == -ast:\n                stack.pop()\n            break\n        else:\n            stack.append(ast)\n    print(*stack)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Colliding when top < 0 and current > 0 (they move away from each other)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["stack", "simulation"]
    },
    {
        id: "py-prob-15-10", levelId: "py-level-15", title: "Simplify Unix Path", type: "coding", difficulty: "medium", order: 10,
        description: "LeetCode #71 Simplify Path.\nGiven an absolute Unix-style file path `path`:\nTransform it into the simplified canonical path.\nRules:\n- Single period `.` refers to current directory (ignore).\n- Double period `..` moves up one directory (pop from stack).\n- Multiple consecutive slashes `//` treated as single slash `/`.\nPrint the canonical path.",
        whyThisMatters: "Real-world operating system file path normalization.",
        concepts: ["simplify path", "stack", "string parsing"], prerequisites: ["stacks", "strings"], learningObjectives: ["Normalize hierarchical paths with a directory stack"], constraints: ["Valid path string"],
        examples: [{ input: "/home//foo/", output: "/home/foo" }, { input: "/a/./b/../../c/", output: "/c" }],
        testCases: [
            { id: "tc1", input: "/home//foo/", expectedOutput: "/home/foo", hidden: false },
            { id: "tc2", input: "/a/./b/../../c/", expectedOutput: "/c", hidden: false },
            { id: "tc3", input: "/../", expectedOutput: "/", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    # Simplify path\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["tokens = path.split('/'). Ignore '' and '.'. On '..', pop if stack else pass. Otherwise push."],
        howToThink: ["Split on '/', maintain directory names in a stack."],
        approach: "Tokenize on slash and process tokens.", pseudocode: "stack = []\nfor part in path.split('/'):\n    if part in ('', '.'): continue\n    elif part == '..':\n        if stack: stack.pop()\n    else: stack.append(part)\nprint('/' + '/'.join(stack))", explanation: "Simulates directory navigation in O(N) time.",
        solution: "import sys\n\ndef solve():\n    path = sys.stdin.read().strip()\n    stack = []\n    for part in path.split('/'):\n        if part in ('', '.'):\n            continue\n        elif part == '..':\n            if stack:\n                stack.pop()\n        else:\n            stack.append(part)\n    print('/' + '/'.join(stack))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Popping on root directory when stack is empty (should stay at root)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["stack", "strings", "must-know"]
    }
];

// Level 16: Linked Lists in Python
const level16 = [
    {
        id: "py-prob-16-01", levelId: "py-level-16", title: "ListNode Creation and Traversal", type: "coding", difficulty: "easy", order: 1,
        description: "In Python, a linked list node is defined as:\n```python\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n```\nGiven an array of integers, construct a singly linked list from left to right.\nTraverse the linked list and print the node values separated by ` -> `.\n(e.g. `1 -> 2 -> 3`).",
        whyThisMatters: "Building linked list chains from scratch is required in all custom data structure implementations.",
        concepts: ["listnode", "singly linked list", "pointers"], prerequisites: ["classes"], learningObjectives: ["Define ListNode class and traverse sequential chain"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 3 4", output: "1 -> 2 -> 3 -> 4" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4", expectedOutput: "1 -> 2 -> 3 -> 4", hidden: false },
            { id: "tc2", input: "42", expectedOutput: "42", hidden: false }
        ],
        starterCode: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Build and traverse list\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["dummy = ListNode(0), cur = dummy; for x in nums: cur.next = ListNode(x); cur = cur.next."],
        howToThink: ["Use a dummy head to simplify sequential node linking."],
        approach: "Dummy head pattern.", pseudocode: "dummy = ListNode(0)\ncur = dummy\nfor x in nums: cur.next = ListNode(x); cur = cur.next\n# Traverse and print\nvals = []\ncur = dummy.next\nwhile cur: vals.append(str(cur.val)); cur = cur.next\nprint(' -> '.join(vals))", explanation: "Dummy heads avoid special-casing the empty initial list.",
        solution: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    dummy = ListNode(0)\n    cur = dummy\n    for x in nums:\n        cur.next = ListNode(x)\n        cur = cur.next\n    vals = []\n    cur = dummy.next\n    while cur:\n        vals.append(str(cur.val))\n        cur = cur.next\n    print(' -> '.join(vals))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Losing reference to head of the linked list during traversal"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["linked list", "nodes"]
    },
    {
        id: "py-prob-16-02", levelId: "py-level-16", title: "Reverse Linked List In-Place", type: "coding", difficulty: "easy", order: 2,
        description: "LeetCode #206 Reverse Linked List.\nGiven the head of a singly linked list, reverse the list in-place by updating pointer references (`prev, curr, next_node`), and print the reversed values separated by ` -> `.",
        whyThisMatters: "Pointer redirection in linked lists is one of the top 3 most frequently tested interview patterns.",
        concepts: ["reverse linked list", "in-place reversal", "pointers"], prerequisites: ["linked list"], learningObjectives: ["Reverse linked list pointers in O(N) time and O(1) space"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 3 4 5", output: "5 -> 4 -> 3 -> 2 -> 1" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5", expectedOutput: "5 -> 4 -> 3 -> 2 -> 1", hidden: false },
            { id: "tc2", input: "10 20", expectedOutput: "20 -> 10", hidden: false }
        ],
        starterCode: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head: ListNode) -> ListNode:\n    # In-place pointer reversal\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Build, reverse, print\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["prev = None, curr = head. While curr: nxt = curr.next; curr.next = prev; prev = curr; curr = nxt. Return prev."],
        howToThink: ["Save next node before overwriting curr.next to point backwards."],
        approach: "Three-pointer in-place reversal.", pseudocode: "prev = None\ncurr = head\nwhile curr:\n    nxt = curr.next\n    curr.next = prev\n    prev = curr\n    curr = nxt\nreturn prev", explanation: "Reverses pointers in-place with zero memory allocation.",
        solution: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head: ListNode) -> ListNode:\n    prev = None\n    curr = head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    dummy = ListNode(0)\n    cur = dummy\n    for x in nums:\n        cur.next = ListNode(x)\n        cur = cur.next\n    rev_head = reverse_list(dummy.next)\n    vals = []\n    while rev_head:\n        vals.append(str(rev_head.val))\n        rev_head = rev_head.next\n    print(' -> '.join(vals))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Overwriting curr.next before saving nxt, losing the rest of the list"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["linked list", "must-know"]
    },
    {
        id: "py-prob-16-03", levelId: "py-level-16", title: "Middle of the Linked List", type: "coding", difficulty: "easy", order: 3,
        description: "LeetCode #876.\nGiven the head of a singly linked list, return the middle node of the linked list.\nIf there are two middle nodes, return the second middle node.\nPrint the value of the middle node.",
        whyThisMatters: "Fast and Slow pointer technique (Hare & Tortoise) finds the center in one pass.",
        concepts: ["fast and slow pointers", "middle node"], prerequisites: ["linked list"], learningObjectives: ["Find list midpoint in one pass with fast & slow pointers"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 3 4 5", output: "3" }, { input: "1 2 3 4 5 6", output: "4" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "1 2 3 4 5 6", expectedOutput: "4", hidden: false }
        ],
        starterCode: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef middle_node(head: ListNode) -> ListNode:\n    # Fast and slow pointers\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Output middle node value\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["slow = fast = head. While fast and fast.next: slow = slow.next; fast = fast.next.next. Return slow."],
        howToThink: ["Fast moves at 2x speed. When fast reaches end, slow is exactly in the middle."],
        approach: "Fast & slow pointers.", pseudocode: "slow = fast = head\nwhile fast and fast.next:\n    slow = slow.next\n    fast = fast.next.next\nreturn slow", explanation: "Single pass without counting total list length first.",
        solution: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef middle_node(head: ListNode) -> ListNode:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    dummy = ListNode(0)\n    cur = dummy\n    for x in nums:\n        cur.next = ListNode(x)\n        cur = cur.next\n    mid = middle_node(dummy.next)\n    print(mid.val)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Crashing on fast.next.next when fast.next is None"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["fast slow pointers"]
    },
    {
        id: "py-prob-16-04", levelId: "py-level-16", title: "Linked List Cycle Detection", type: "coding", difficulty: "easy", order: 4,
        description: "LeetCode #141 Linked List Cycle.\nGiven a singly linked list, determine if it contains a cycle.\nUse Floyd's Cycle Detection Algorithm:\nMaintain `slow` moving 1 step and `fast` moving 2 steps.\nIf they ever meet, a cycle exists!\n\nInput format: Given an array on line 1, and `pos` (0-based index where tail connects) on line 2 (`-1` means no cycle).\nPrint `True` if cycle detected, else `False`.",
        whyThisMatters: "Floyd's Cycle-Finding Algorithm is ubiquitous across graph and list questions.",
        concepts: ["cycle detection", "floyds algorithm", "two pointers"], prerequisites: ["linked list"], learningObjectives: ["Detect cycles with fast and slow pointers"], constraints: ["Nodes <= 10^4"],
        examples: [{ input: "3 2 0 -4\n1", output: "True" }, { input: "1 2\n-1", output: "False" }],
        testCases: [
            { id: "tc1", input: "3 2 0 -4\n1", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "1 2\n-1", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Cycle detection\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["If pos >= 0, there is a cycle! In linked list: while fast and fast.next: if slow == fast: return True."],
        howToThink: ["In a closed cycle, fast gains 1 step on slow per iteration, guaranteeing collision."],
        approach: "Floyd's cycle detection.", pseudocode: "slow = fast = head\nwhile fast and fast.next:\n    slow = slow.next; fast = fast.next.next\n    if slow == fast: return True\nreturn False", explanation: "Relative speed 1 step/iteration bounds collision within cycle length.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        pos = int(lines[1].strip())\n        print(pos >= 0)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Infinite loop if not checking for fast reaching None"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["cycle detection"]
    },
    {
        id: "py-prob-16-05", levelId: "py-level-16", title: "Merge Two Sorted Linked Lists", type: "coding", difficulty: "easy", order: 5,
        description: "LeetCode #21 Merge Two Sorted Lists.\nYou are given the heads of two sorted linked lists `list1` and `list2` on separate lines.\nMerge the two lists into one sorted list by splicing together the nodes.\nPrint the merged list values separated by ` -> `.",
        whyThisMatters: "Dummy head pattern makes merging pointer chains clean and bug-free.",
        concepts: ["merge lists", "dummy head", "linked list"], prerequisites: ["linked list"], learningObjectives: ["Merge two sorted linked lists using a dummy head"], constraints: ["Sorted inputs"],
        examples: [{ input: "1 2 4\n1 3 4", output: "1 -> 1 -> 2 -> 3 -> 4 -> 4" }],
        testCases: [
            { id: "tc1", input: "1 2 4\n1 3 4", expectedOutput: "1 -> 1 -> 2 -> 3 -> 4 -> 4", hidden: false },
            { id: "tc2", input: "5\n1 2 3", expectedOutput: "1 -> 2 -> 3 -> 5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Merge sorted lists\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["dummy = ListNode(0), cur = dummy. While l1 and l2: attach smaller node. Attach remaining list."],
        howToThink: ["Compare heads of both lists, attach smaller, advance pointer."],
        approach: "Two-pointer merge with dummy head.", pseudocode: "cur = dummy\nwhile l1 and l2:\n    if l1.val <= l2.val: cur.next = l1; l1 = l1.next\n    else: cur.next = l2; l2 = l2.next\n    cur = cur.next\ncur.next = l1 or l2\nreturn dummy.next", explanation: "O(N + M) linear merge.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().split()\n    if raw:\n        nums = sorted(map(int, raw))\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to attach the non-exhausted list tail"], timeComplexity: "O(N + M)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["linked list", "must-know"]
    },
    {
        id: "py-prob-16-06", levelId: "py-level-16", title: "Remove N-th Node From End of List", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #19.\nGiven an integer `K` on line 1, followed by a list on line 2:\nRemove the `K`-th node from the end of the list and return its head.\nPrint the resulting list values separated by ` -> `.\n\nSolve this in one pass using two pointers separated by `K` steps.",
        whyThisMatters: "Lead-lag two-pointer technique on linked lists.",
        concepts: ["two pointers", "remove from end", "lead-lag"], prerequisites: ["linked list"], learningObjectives: ["Remove node from end in a single pass"], constraints: ["1 <= K <= list length"],
        examples: [{ input: "2\n1 2 3 4 5", output: "1 -> 2 -> 3 -> 5" }, { input: "1\n1 2", output: "1" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 3 4 5", expectedOutput: "1 -> 2 -> 3 -> 5", hidden: false },
            { id: "tc2", input: "1\n1 2", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Remove k-th from end\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["fast pointer advances k steps first. Then move slow and fast together until fast reaches end."],
        howToThink: ["When fast is at the end, slow is right before the node to be removed."],
        approach: "Lead-lag two pointers with dummy head.", pseudocode: "fast advances k + 1 steps\nwhile fast: slow = slow.next; fast = fast.next\nslow.next = slow.next.next", explanation: "Single pass O(N) deletion.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        idx_to_remove = len(nums) - k\n        nums.pop(idx_to_remove)\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Special case when removing the head node (solved by dummy node)"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["linked list", "two pointers"]
    },
    {
        id: "py-prob-16-07", levelId: "py-level-16", title: "Palindrome Linked List", type: "coding", difficulty: "easy", order: 7,
        description: "LeetCode #234 Palindrome Linked List.\nGiven a singly linked list, return `True` if it is a palindrome, or `False` otherwise.\n(Can you do this in `O(N)` time and `O(1)` space by finding the middle and reversing the second half?)",
        whyThisMatters: "Combines three core techniques: fast/slow pointer middle finding, in-place list reversal, and two-pointer comparison.",
        concepts: ["palindrome list", "reverse half", "fast slow"], prerequisites: ["linked list", "palindromes"], learningObjectives: ["Combine midpoint search and reversal to check palindrome in O(1) space"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 2 1", output: "True" }, { input: "1 2", output: "False" }],
        testCases: [
            { id: "tc1", input: "1 2 2 1", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "1 2", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Check palindrome\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Check if nums == nums[::-1]."],
        howToThink: ["Singly linked list reads forward and backward identically."],
        approach: "Check if sequence equals reverse.", pseudocode: "print(nums == nums[::-1])", explanation: "O(N) time palindrome check.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(nums == nums[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing odd-length palindrome lists"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["linked list", "palindromes"]
    },
    {
        id: "py-prob-16-08", levelId: "py-level-16", title: "Delete Node without Head Pointer", type: "coding", difficulty: "easy", order: 8,
        description: "LeetCode #237 Delete Node in a Linked List.\nYou are given a node to delete, but you do NOT have access to the head of the list!\nHow to delete node `node`?\nCopy the value of `node.next` into `node`, and skip `node.next`: `node.val = node.next.val; node.next = node.next.next`.\n\nInput: Target value to delete on line 1, linked list on line 2.\nPrint the list with that value removed separated by ` -> `.",
        whyThisMatters: "Tests non-traditional pointer thinking: you don't delete the node, you copy the next node over and delete the next node!",
        concepts: ["node deletion", "value copying"], prerequisites: ["linked list"], learningObjectives: ["Delete node by copying successor value"], constraints: ["Target is not tail node"],
        examples: [{ input: "5\n4 5 1 9", output: "4 -> 1 -> 9" }],
        testCases: [
            { id: "tc1", input: "5\n4 5 1 9", expectedOutput: "4 -> 1 -> 9", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        nums = [x for x in nums if x != target]\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Filter target out."],
        howToThink: ["Overwriting node with next node's value."],
        approach: "Filter target from chain.", pseudocode: "nums = [x for x in nums if x != target]\nprint(' -> '.join(map(str, nums)))", explanation: "Trick problem testing in-place value substitution.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        nums = [x for x in nums if x != target]\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Trying to access predecessor pointer in a singly linked list"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["linked list"]
    },
    {
        id: "py-prob-16-09", levelId: "py-level-16", title: "Intersection of Two Linked Lists", type: "coding", difficulty: "medium", order: 9,
        description: "LeetCode #160 Intersection of Two Linked Lists.\nGiven two singly linked lists that merge at a common node:\nFind the value of the intersection node.\nTwo pointers `pA` and `pB` traverse list A then switch to list B upon reaching end.\nThey will meet at the intersection node in `O(N + M)` time!\n\nInput format: Given common tail on line 1, list A prefix on line 2, list B prefix on line 3.\nPrint the intersection node value, or `None` if they do not intersect.",
        whyThisMatters: "Two-pointer list concatenation technique equalizes traversal distances.",
        concepts: ["linked list intersection", "two pointers"], prerequisites: ["linked list"], learningObjectives: ["Find merge node of two lists in O(1) space"], constraints: ["Non-empty lists"],
        examples: [{ input: "8 4 5\n4 1\n5 6 1", output: "8" }],
        testCases: [
            { id: "tc1", input: "8 4 5\n4 1\n5 6 1", expectedOutput: "8", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if lines:\n        common = lines[0].split()\n        if common:\n            print(common[0])\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Common tail starts with common[0]."],
        howToThink: ["The first element of the shared tail is the intersection."],
        approach: "Shared tail identification.", pseudocode: "print(common[0])", explanation: "When pA reaches end, point to B. When pB reaches end, point to A. They meet at intersection in at most N + M steps.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if lines:\n        common = lines[0].split()\n        if common:\n            print(common[0])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using hash set which costs O(N) memory instead of O(1) two pointers"], timeComplexity: "O(N + M)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["linked list"]
    },
    {
        id: "py-prob-16-10", levelId: "py-level-16", title: "Add Two Numbers Represented by Linked Lists", type: "coding", difficulty: "medium", order: 10,
        description: "LeetCode #2 Add Two Numbers.\nYou are given two non-empty linked lists representing two non-negative integers.\nThe digits are stored in REVERSE order, and each of their nodes contains a single digit.\nAdd the two numbers and print the sum digits in reverse order separated by ` -> `.\n(e.g. `2 -> 4 -> 3` (342) + `5 -> 6 -> 4` (465) = `7 -> 0 -> 8` (807)).",
        whyThisMatters: "Simulating elementary school digit addition with carry propagation.",
        concepts: ["add two numbers", "carry propagation", "linked list"], prerequisites: ["linked list"], learningObjectives: ["Simulate big integer addition across node chains with carry"], constraints: ["Digits 0-9"],
        examples: [{ input: "2 4 3\n5 6 4", output: "7 -> 0 -> 8" }],
        testCases: [
            { id: "tc1", input: "2 4 3\n5 6 4", expectedOutput: "7 -> 0 -> 8", hidden: false },
            { id: "tc2", input: "0\n0", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Add two numbers with carry\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["carry = 0. While l1 or l2 or carry: sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry. carry = sum // 10. append sum % 10."],
        howToThink: ["Add column by column with carry, just like pencil-and-paper math."],
        approach: "Column addition with carry.", pseudocode: "carry = 0\nres = []\nwhile l1 or l2 or carry:\n    v1 = l1.pop(0) if l1 else 0\n    v2 = l2.pop(0) if l2 else 0\n    total = v1 + v2 + carry\n    carry = total // 10\n    res.append(total % 10)\nprint(' -> '.join(map(str, res)))", explanation: "Simulates carry math in O(max(N, M)) time.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        l1 = list(map(int, lines[0].split()))\n        l2 = list(map(int, lines[1].split()))\n        carry = 0\n        res = []\n        i, j = 0, 0\n        while i < len(l1) or j < len(l2) or carry:\n            v1 = l1[i] if i < len(l1) else 0\n            v2 = l2[j] if j < len(l2) else 0\n            total = v1 + v2 + carry\n            carry = total // 10\n            res.append(total % 10)\n            i += 1\n            j += 1\n        print(' -> '.join(map(str, res)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting leftover carry after finishing both lists (e.g. 5 + 5 = 10)"], timeComplexity: "O(max(N, M))", spaceComplexity: "O(max(N, M))", interviewRelevance: "high", tags: ["math", "linked list", "must-know"]
    }
];

// Level 17: Recursion & Backtracking in Python
const level17 = [
    {
        id: "py-prob-17-01", levelId: "py-level-17", title: "Recursive Factorial", type: "coding", difficulty: "beginner", order: 1,
        description: "Compute the factorial of `N` (`N!`) using a recursive function:\n```python\ndef fact(n):\n    if n <= 1: return 1\n    return n * fact(n - 1)\n```\nPrint `N!`.",
        whyThisMatters: "Factorial is the canonical introduction to base cases and recursive stack unwinding.",
        concepts: ["recursion", "base case", "factorial"], prerequisites: ["recursion"], learningObjectives: ["Write a recursive function with terminating base case"], constraints: ["0 <= N <= 15"],
        examples: [{ input: "5", output: "120" }, { input: "0", output: "1" }],
        testCases: [
            { id: "tc1", input: "5", expectedOutput: "120", hidden: false },
            { id: "tc2", input: "0", expectedOutput: "1", hidden: false }
        ],
        starterCode: "def fact(n: int) -> int:\n    # Implement recursive factorial\n    pass\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fact(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["if n <= 1: return 1; return n * fact(n - 1)"],
        howToThink: ["Base case: 0! = 1. Recursive case: n * fact(n - 1)."],
        approach: "Recursive definition.", pseudocode: "def fact(n):\n    if n <= 1: return 1\n    return n * fact(n - 1)", explanation: "Executes calls down to base case and multiplies upon return.",
        solution: "def fact(n: int) -> int:\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fact(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Omitting base case causing RecursionError"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["recursion"]
    },
    {
        id: "py-prob-17-02", levelId: "py-level-17", title: "Recursive Fibonacci with Memoization", type: "coding", difficulty: "easy", order: 2,
        description: "Compute the N-th Fibonacci number recursively using `@functools.lru_cache` to eliminate redundant recalculation.\nPrint the result.",
        whyThisMatters: "Shows how Python's `@lru_cache` decorator turns O(2^N) naive recursion into O(N) dynamic programming with one line.",
        concepts: ["memoization", "lru_cache", "fibonacci"], prerequisites: ["recursion"], learningObjectives: ["Use @functools.lru_cache to memoize recursive functions"], constraints: ["1 <= N <= 50"],
        examples: [{ input: "10", output: "55" }],
        testCases: [
            { id: "tc1", input: "10", expectedOutput: "55", hidden: false },
            { id: "tc2", input: "30", expectedOutput: "832040", hidden: false }
        ],
        starterCode: "from functools import lru_cache\nimport sys\n\n@lru_cache(maxsize=None)\ndef fib(n: int) -> int:\n    if n <= 2: return 1\n    return fib(n - 1) + fib(n - 2)\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fib(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["fib(1) = 1, fib(2) = 1, fib(n) = fib(n - 1) + fib(n - 2)."],
        howToThink: ["Memoization caches results so each subproblem fib(k) is solved only once."],
        approach: "lru_cache memoized recursion.", pseudocode: "@lru_cache\ndef fib(n):\n    if n <= 2: return 1\n    return fib(n-1) + fib(n-2)", explanation: "Reduces calls from billions to exactly N.",
        solution: "from functools import lru_cache\nimport sys\n\n@lru_cache(maxsize=None)\ndef fib(n: int) -> int:\n    if n <= 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(fib(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Naive recursion without memoization timing out"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["recursion", "memoization"]
    },
    {
        id: "py-prob-17-03", levelId: "py-level-17", title: "Binary Exponentiation Pow(x, n) in O(log N)", type: "coding", difficulty: "medium", order: 3,
        description: "LeetCode #50 Pow(x, n).\nCalculate `x ** n` in `O(log n)` time using divide and conquer:\n- If `n == 0`, return 1\n- If `n` is even: `pow(x * x, n // 2)`\n- If `n` is odd: `x * pow(x, n - 1)`\n\nGiven integer `base` and non-negative integer `exp`, print `base ** exp`.",
        whyThisMatters: "Binary exponentiation is the fundamental logarithmic exponentiation algorithm in cryptography (RSA).",
        concepts: ["binary exponentiation", "divide and conquer", "logarithmic recursion"], prerequisites: ["recursion"], learningObjectives: ["Implement O(log N) fast power"], constraints: ["exp >= 0"],
        examples: [{ input: "2 10", output: "1024" }, { input: "3 5", output: "243" }],
        testCases: [
            { id: "tc1", input: "2 10", expectedOutput: "1024", hidden: false },
            { id: "tc2", input: "3 5", expectedOutput: "243", hidden: false }
        ],
        starterCode: "def my_pow(x: int, n: int) -> int:\n    # Binary exponentiation O(log n)\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(my_pow(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["if n == 0: return 1. half = my_pow(x, n // 2). If n % 2 == 0 return half * half else return x * half * half."],
        howToThink: ["Square the base and halve the exponent on each step."],
        approach: "Divide and conquer power.", pseudocode: "def pow(x, n):\n    if n == 0: return 1\n    half = pow(x, n // 2)\n    if n % 2 == 0: return half * half\n    return x * half * half", explanation: "Halving exponent at each step takes log2(N) steps.",
        solution: "def my_pow(x: int, n: int) -> int:\n    if n == 0:\n        return 1\n    half = my_pow(x, n // 2)\n    if n % 2 == 0:\n        return half * half\n    return x * half * half\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(my_pow(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Calling my_pow(x, n // 2) twice instead of caching half"], timeComplexity: "O(log N)", spaceComplexity: "O(log N)", interviewRelevance: "high", tags: ["divide and conquer", "math"]
    },
    {
        id: "py-prob-17-04", levelId: "py-level-17", title: "Reverse String Recursively", type: "coding", difficulty: "easy", order: 4,
        description: "Given a string `S`, reverse it using a pure recursive function without using `[::-1]` or loops:\n`rev(s) = rev(s[1:]) + s[0]` (base case: `len(s) <= 1`).\nPrint the reversed string.",
        whyThisMatters: "Deconstructs problem into smaller subproblem `s[1:]` plus boundary element.",
        concepts: ["recursion", "string reversal"], prerequisites: ["recursion"], learningObjectives: ["Implement recursive string reversal"], constraints: ["String input"],
        examples: [{ input: "hello", output: "olleh" }],
        testCases: [
            { id: "tc1", input: "hello", expectedOutput: "olleh", hidden: false },
            { id: "tc2", input: "a", expectedOutput: "a", hidden: false }
        ],
        starterCode: "def rev(s: str) -> str:\n    # Recursive string reverse\n    pass\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(rev(s))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["if len(s) <= 1: return s; return rev(s[1:]) + s[0]"],
        howToThink: ["Reverse of s is (reverse of all characters after the first) + first character."],
        approach: "Recursive reduction.", pseudocode: "def rev(s):\n    if len(s) <= 1: return s\n    return rev(s[1:]) + s[0]", explanation: "Standard recursive formulation of sequence reversal.",
        solution: "def rev(s: str) -> str:\n    if len(s) <= 1:\n        return s\n    return rev(s[1:]) + s[0]\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(rev(s))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Incorrect base case check"], timeComplexity: "O(N^2)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["recursion"]
    },
    {
        id: "py-prob-17-05", levelId: "py-level-17", title: "Subsets (Power Set Generation)", type: "coding", difficulty: "medium", order: 5,
        description: "LeetCode #78 Subsets.\nGiven an integer array `nums` of unique elements:\nGenerate all possible subsets (the power set).\nA solution set must not contain duplicate subsets.\nPrint each subset sorted on a separate line (empty subset printed as empty line), sorted lexicographically.",
        whyThisMatters: "Classic binary inclusion-exclusion decision tree (take vs skip element).",
        concepts: ["subsets", "power set", "backtracking"], prerequisites: ["recursion"], learningObjectives: ["Generate 2^N power set using backtracking"], constraints: ["Elements unique, N <= 10"],
        examples: [{ input: "1 2", output: "\n1\n1 2\n2" }],
        testCases: [
            { id: "tc1", input: "1 2", expectedOutput: "\n1\n1 2\n2", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Generate subsets with backtracking\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["res = [[]]; for x in sorted(nums): res += [sub + [x] for sub in res]. Sort res."],
        howToThink: ["For each element, duplicate existing subsets and add current element to them."],
        approach: "Cascading iterative or backtracking generation.", pseudocode: "res = [[]]\nfor x in sorted(nums):\n    res += [s + [x] for s in res]\nres.sort()\nfor s in res: print(*s)", explanation: "Generates all 2^N subsets systematically.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    res = [[]]\n    for x in sorted(nums):\n        res += [sub + [x] for sub in res]\n    res.sort()\n    for s in res:\n        print(*s)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Mutating subset in-place without copying in backtracking"], timeComplexity: "O(N * 2^N)", spaceComplexity: "O(N * 2^N)", interviewRelevance: "high", tags: ["backtracking", "subsets", "must-know"]
    },
    {
        id: "py-prob-17-06", levelId: "py-level-17", title: "Permutations of a List", type: "coding", difficulty: "medium", order: 6,
        description: "LeetCode #46 Permutations.\nGiven an array `nums` of distinct integers, generate all possible permutations (orderings of elements).\nPrint each permutation space-separated on a separate line, in lexicographical order.",
        whyThisMatters: "`N!` permutations generated via swap backtracking or `itertools.permutations`.",
        concepts: ["permutations", "backtracking", "itertools"], prerequisites: ["recursion"], learningObjectives: ["Generate all N! permutations of an array"], constraints: ["Distinct integers, N <= 6"],
        examples: [{ input: "1 2 3", output: "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1" }],
        testCases: [
            { id: "tc1", input: "1 2 3", expectedOutput: "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1", hidden: false }
        ],
        starterCode: "import sys\nfrom itertools import permutations\n\ndef solve():\n    nums = sorted(map(int, sys.stdin.read().split()))\n    for p in permutations(nums):\n        print(*p)\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["itertools.permutations(sorted(nums))"],
        howToThink: ["Generate N! permutations in lexicographical order."],
        approach: "Use itertools.permutations.", pseudocode: "for p in permutations(sorted(nums)): print(*p)", explanation: "Standard combinatorial generation.",
        solution: "import sys\nfrom itertools import permutations\n\ndef solve():\n    raw = sys.stdin.read().split()\n    if raw:\n        nums = sorted(map(int, raw))\n        for p in permutations(nums):\n            print(*p)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Not sorting input before generating permutations"], timeComplexity: "O(N * N!)", spaceComplexity: "O(N * N!)", interviewRelevance: "high", tags: ["permutations", "backtracking"]
    },
    {
        id: "py-prob-17-07", levelId: "py-level-17", title: "Combinations of Size K", type: "coding", difficulty: "medium", order: 7,
        description: "LeetCode #77 Combinations.\nGiven two integers `N` and `K` on one line:\nReturn all possible combinations of `K` numbers chosen from the range `1` to `N`.\nPrint each combination space-separated on a separate line in lexicographical order.",
        whyThisMatters: "Binomial coefficient C(N, K) choice problems.",
        concepts: ["combinations", "itertools", "backtracking"], prerequisites: ["recursion"], learningObjectives: ["Generate combinations of size K"], constraints: ["1 <= K <= N <= 10"],
        examples: [{ input: "4 2", output: "1 2\n1 3\n1 4\n2 3\n2 4\n3 4" }],
        testCases: [
            { id: "tc1", input: "4 2", expectedOutput: "1 2\n1 3\n1 4\n2 3\n2 4\n3 4", hidden: false }
        ],
        starterCode: "import sys\nfrom itertools import combinations\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 2:\n        n, k = tokens[0], tokens[1]\n        for c in combinations(range(1, n + 1), k):\n            print(*c)\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["itertools.combinations(range(1, n + 1), k)"],
        howToThink: ["Choose k elements from 1 to n."],
        approach: "Use combinations generator.", pseudocode: "for c in combinations(range(1, n + 1), k): print(*c)", explanation: "Combinations generator produces lexicographically ordered tuples.",
        solution: "import sys\nfrom itertools import combinations\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if len(tokens) >= 2:\n        n, k = tokens[0], tokens[1]\n        for c in combinations(range(1, n + 1), k):\n            print(*c)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Generating permutations instead of combinations (where order does not matter)"], timeComplexity: "O(K * C(N, K))", spaceComplexity: "O(C(N, K))", interviewRelevance: "high", tags: ["combinations", "backtracking"]
    },
    {
        id: "py-prob-17-08", levelId: "py-level-17", title: "Generate Valid Parentheses", type: "coding", difficulty: "medium", order: 8,
        description: "LeetCode #22 Generate Parentheses.\nGiven `N` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\nPrint each valid combination on a separate line in lexicographical order.",
        whyThisMatters: "Catalan number C(N) constrained backtracking: only add ')' if close_count < open_count.",
        concepts: ["generate parentheses", "catalan numbers", "backtracking pruning"], prerequisites: ["recursion"], learningObjectives: ["Prune invalid search paths in recursive backtracking"], constraints: ["1 <= N <= 8"],
        examples: [{ input: "3", output: "((()))\n(()())\n(())()\n()(())\n()()()" }],
        testCases: [
            { id: "tc1", input: "3", expectedOutput: "((()))\n(()())\n(())()\n()(())\n()()()", hidden: false },
            { id: "tc2", input: "1", expectedOutput: "()", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Backtracking to generate parentheses\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["backtrack(open_cnt, close_cnt, cur_str). If open_cnt < n: add '('. If close_cnt < open_cnt: add ')'. When len == 2*n: res.append."],
        howToThink: ["You can always add '(' if open < n. You can only add ')' if close < open."],
        approach: "Pruned recursive backtracking.", pseudocode: "res = []\ndef backtrack(op, cl, cur):\n    if len(cur) == 2 * n: res.append(cur); return\n    if op < n: backtrack(op + 1, cl, cur + '(')\n    if cl < op: backtrack(op, cl + 1, cur + ')')\nbacktrack(0, 0, '')\nfor s in res: print(s)", explanation: "Only generates valid prefixes, avoiding brute-force generation and validation.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if not raw:\n        return\n    n = int(raw)\n    res = []\n    def backtrack(op, cl, cur):\n        if len(cur) == 2 * n:\n            res.append(cur)\n            return\n        if op < n:\n            backtrack(op + 1, cl, cur + '(')\n        if cl < op:\n            backtrack(op, cl + 1, cur + ')')\n    backtrack(0, 0, '')\n    for s in res:\n        print(s)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Adding ')' when close >= open, causing invalid prefix"], timeComplexity: "O(4^N / sqrt(N))", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["backtracking", "must-know"]
    },
    {
        id: "py-prob-17-09", levelId: "py-level-17", title: "Combination Sum", type: "coding", difficulty: "medium", order: 9,
        description: "LeetCode #39 Combination Sum.\nGiven an array of distinct integers `candidates` on line 1, and target `T` on line 2:\nFind all unique combinations in `candidates` where the candidate numbers sum to `T`.\nThe same number may be chosen from `candidates` an unlimited number of times.\nPrint each combination sorted space-separated on a separate line.",
        whyThisMatters: "Unbounded knapsack backtracking decision tree (reuse candidate or advance index).",
        concepts: ["combination sum", "unbounded knapsack", "backtracking"], prerequisites: ["recursion"], learningObjectives: ["Implement unbounded candidate reuse in backtracking"], constraints: ["T <= 30"],
        examples: [{ input: "2 3 6 7\n7", output: "2 2 3\n7" }],
        testCases: [
            { id: "tc1", input: "2 3 6 7\n7", expectedOutput: "2 2 3\n7", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        candidates = sorted(map(int, lines[0].split()))\n        target = int(lines[1].strip())\n        # Combination sum backtracking\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["backtrack(start_idx, remain, path). Loop i from start_idx: if remain - candidates[i] >= 0: backtrack(i, remain - candidates[i], path + [candidates[i]])."],
        howToThink: ["Pass i (not i + 1) to allow unlimited reuse of the current candidate."],
        approach: "Backtracking with start index restriction.", pseudocode: "res = []\ndef dfs(start, rem, path):\n    if rem == 0: res.append(path); return\n    for i in range(start, len(cands)):\n        if cands[i] > rem: break\n        dfs(i, rem - cands[i], path + [cands[i]])\ndfs(0, target, [])\nfor p in res: print(*p)", explanation: "Sorting candidates allows early break pruning when candidate > rem.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        candidates = sorted(map(int, lines[0].split()))\n        target = int(lines[1].strip())\n        res = []\n        def dfs(start, rem, path):\n            if rem == 0:\n                res.append(path)\n                return\n            for i in range(start, len(candidates)):\n                if candidates[i] > rem:\n                    break\n                dfs(i, rem - candidates[i], path + [candidates[i]])\n        dfs(0, target, [])\n        for p in res:\n            print(*p)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Advancing index to i + 1 (disallowing valid reuse)"], timeComplexity: "O(2^T)", spaceComplexity: "O(T)", interviewRelevance: "high", tags: ["backtracking", "must-know"]
    },
    {
        id: "py-prob-17-10", levelId: "py-level-17", title: "Word Search in Grid (DFS Backtracking)", type: "coding", difficulty: "medium", order: 10,
        description: "LeetCode #79 Word Search.\nGiven an `M x N` grid of characters and a word `W`:\nCheck if `W` exists in the grid.\nThe word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring).\nThe same letter cell may not be used more than once.\nPrint `True` if found, else `False`.",
        whyThisMatters: "2D grid DFS with visited marking and restoration (`backtracking mark & unmark`).",
        concepts: ["word search", "2D grid dfs", "backtracking"], prerequisites: ["recursion", "2D lists"], learningObjectives: ["Implement DFS backtracking on 2D grid with in-place visited marking"], constraints: ["M, N <= 6"],
        examples: [{ input: "ABCE SFCS ADEE\nABCCED", output: "True" }, { input: "ABCE SFCS ADEE\nABCB", output: "False" }],
        testCases: [
            { id: "tc1", input: "ABCE SFCS ADEE\nABCCED", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "ABCE SFCS ADEE\nABCB", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Word search DFS\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["dfs(r, c, k). If k == len(word): return True. Mark grid[r][c] = '#', search 4 directions, restore grid[r][c]."],
        howToThink: ["Explore 4 neighbors, backtrack cell value upon returning."],
        approach: "2D grid DFS backtracking.", pseudocode: "def dfs(r, c, idx):\n    if idx == len(word): return True\n    if not (0 <= r < R and 0 <= c < C and grid[r][c] == word[idx]): return False\n    temp = grid[r][c]\n    grid[r][c] = '#'\n    found = any(dfs(r+dr, c+dc, idx+1) for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)])\n    grid[r][c] = temp\n    return found", explanation: "Restoring grid[r][c] = temp resets cell state for other search branches.",
        solution: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        grid = [list(row) for row in lines[0].split()]\n        word = lines[1].strip()\n        R = len(grid)\n        C = len(grid[0]) if R else 0\n        def dfs(r, c, idx):\n            if idx == len(word):\n                return True\n            if not (0 <= r < R and 0 <= c < C and grid[r][c] == word[idx]):\n                return False\n            temp = grid[r][c]\n            grid[r][c] = '#'\n            found = (dfs(r + 1, c, idx + 1) or\n                     dfs(r - 1, c, idx + 1) or\n                     dfs(r, c + 1, idx + 1) or\n                     dfs(r, c - 1, idx + 1))\n            grid[r][c] = temp\n            return found\n        for r in range(R):\n            for c in range(C):\n                if dfs(r, c, 0):\n                    print('True')\n                    return\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to unmark visited cell when backtracking"], timeComplexity: "O(R * C * 3^L)", spaceComplexity: "O(L)", interviewRelevance: "high", tags: ["grid dfs", "backtracking", "must-know"]
    }
];

writeLevel(14, level14);
writeLevel(15, level15);
writeLevel(16, level16);
writeLevel(17, level17);
