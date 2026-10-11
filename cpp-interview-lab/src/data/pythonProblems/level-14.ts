import { Problem } from '../types';

export const pyLevel14Problems: Problem[] = [
    {
        "id": "py-prob-14-01",
        "levelId": "py-level-14",
        "title": "Valid Anagram",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "LeetCode #242 Valid Anagram.\nGiven two strings `S` and `T` on separate lines, return `True` if `T` is an anagram of `S`, and `False` otherwise.\nAn Anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.",
        "whyThisMatters": "Frequency map comparison using `collections.Counter(s) == collections.Counter(t)` is a benchmark interview question.",
        "concepts": [
            "anagram",
            "counter",
            "hash map"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Compare character frequency distributions"
        ],
        "constraints": [
            "Lowercase letters"
        ],
        "examples": [
            {
                "input": "anagram\nnagaram",
                "output": "True"
            },
            {
                "input": "rat\ncar",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "anagram\nnagaram",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "rat\ncar",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        print(Counter(s) == Counter(t))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Counter(s) == Counter(t)"
        ],
        "howToThink": [
            "Anagrams must have identical character frequency counts."
        ],
        "approach": "Use collections.Counter.",
        "pseudocode": "print(Counter(s) == Counter(t))",
        "explanation": "Comparing Counter objects takes O(N) time and O(1) space (at most 26 lowercase English letters).",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        print(Counter(s) == Counter(t))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting strings (O(N log N)) when Counter achieves O(N)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "anagram",
            "hash map"
        ]
    },
    {
        "id": "py-prob-14-02",
        "levelId": "py-level-14",
        "title": "Group Anagrams",
        "type": "coding",
        "difficulty": "medium",
        "order": 2,
        "description": "LeetCode #49 Group Anagrams.\nGiven an array of strings, group the anagrams together into a dictionary where the key is the sorted string `''.join(sorted(w))`.\nPrint each group of anagrams sorted alphabetically on separate lines.",
        "whyThisMatters": "Canonical interview problem demonstrating canonical hash keys for bucketing.",
        "concepts": [
            "group anagrams",
            "canonical key",
            "bucketing"
        ],
        "prerequisites": [
            "dictionaries",
            "anagram"
        ],
        "learningObjectives": [
            "Bucket strings using sorted signatures as hash keys"
        ],
        "constraints": [
            "Strings contain lowercase English letters"
        ],
        "examples": [
            {
                "input": "eat tea tan ate nat bat",
                "output": "ate eat tea\nbat\nnat tan"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "eat tea tan ate nat bat",
                "expectedOutput": "ate eat tea\nbat\nnat tan",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Group anagrams\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "key = ''.join(sorted(w)). groups[key].append(w). Sort each group, then sort groups by first word."
        ],
        "howToThink": [
            "Words that are anagrams share the exact same sorted character sequence."
        ],
        "approach": "Defaultdict with sorted key signature.",
        "pseudocode": "groups = defaultdict(list)\nfor w in words: groups[''.join(sorted(w))].append(w)\nres = [sorted(g) for g in groups.values()]\nres.sort()\nfor g in res: print(*g)",
        "explanation": "Canonical signature groups anagrams in O(N * K log K) time.",
        "solution": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    words = sys.stdin.read().split()\n    if not words:\n        return\n    groups = defaultdict(list)\n    for w in words:\n        groups[''.join(sorted(w))].append(w)\n    res = [sorted(g) for g in groups.values()]\n    res.sort()\n    for g in res:\n        print(*g)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using non-hashable lists as dict keys instead of strings or tuples"
        ],
        "timeComplexity": "O(N * K log K)",
        "spaceComplexity": "O(N * K)",
        "interviewRelevance": "high",
        "tags": [
            "anagrams",
            "must-know"
        ]
    },
    {
        "id": "py-prob-14-03",
        "levelId": "py-level-14",
        "title": "Longest Consecutive Sequence in O(N)",
        "type": "coding",
        "difficulty": "medium",
        "order": 3,
        "description": "LeetCode #128 Longest Consecutive Sequence.\nGiven an unsorted array of integers `nums`, find the length of the longest consecutive elements sequence.\nYou must write an algorithm that runs in `O(N)` time.\n(For example, for `[100, 4, 200, 1, 3, 2]`, sequence is `[1, 2, 3, 4]`, length is `4`).",
        "whyThisMatters": "Only start counting when `x - 1 not in num_set`; this simple check ensures each element is visited at most twice.",
        "concepts": [
            "longest consecutive",
            "set lookup",
            "o(n) sequence"
        ],
        "prerequisites": [
            "sets"
        ],
        "learningObjectives": [
            "Identify sequence starting points with set lookups"
        ],
        "constraints": [
            "N <= 10^5"
        ],
        "examples": [
            {
                "input": "100 4 200 1 3 2",
                "output": "4"
            },
            {
                "input": "0 3 7 2 5 8 4 6 0 1",
                "output": "9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "100 4 200 1 3 2",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0 3 7 2 5 8 4 6 0 1",
                "expectedOutput": "9",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Longest consecutive sequence in O(N)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "num_set = set(nums). If x - 1 not in num_set: streak = 1; while x + streak in num_set: streak += 1; longest = max(longest, streak)."
        ],
        "howToThink": [
            "A number is the beginning of a sequence only if x - 1 is NOT present in the set."
        ],
        "approach": "Set lookups for sequence starts.",
        "pseudocode": "s = set(nums)\nbest = 0\nfor x in s:\n    if x - 1 not in s:\n        cur = 1\n        while x + cur in s: cur += 1\n        best = max(best, cur)\nprint(best)",
        "explanation": "Only starting numbers initiate while loops, yielding strict O(N) amortized time.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        print(0)\n        return\n    s = set(nums)\n    best = 0\n    for x in s:\n        if x - 1 not in s:\n            cur = 1\n            while x + cur in s:\n                cur += 1\n            best = max(best, cur)\n    print(best)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting array in O(N log N) which violates strict O(N) constraint"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "sets",
            "must-know"
        ]
    },
    {
        "id": "py-prob-14-04",
        "levelId": "py-level-14",
        "title": "Subarray Sum Equals K",
        "type": "coding",
        "difficulty": "medium",
        "order": 4,
        "description": "LeetCode #560 Subarray Sum Equals K.\nGiven target integer `K` on line 1, and an array of integers on line 2:\nFind the total number of continuous subarrays whose sum equals `K`.\n\nUse a prefix sum hash map `prefix_counts` initialized with `{0: 1}` to achieve `O(N)` time.",
        "whyThisMatters": "Prefix sum hash map is the cornerstone of counting contiguous subarray properties.",
        "concepts": [
            "prefix sums",
            "hash map",
            "subarray count"
        ],
        "prerequisites": [
            "prefix sums",
            "dictionaries"
        ],
        "learningObjectives": [
            "Count matching subarray sums in O(N) with prefix hash map"
        ],
        "constraints": [
            "N <= 10^5"
        ],
        "examples": [
            {
                "input": "2\n1 1 1",
                "output": "2"
            },
            {
                "input": "3\n1 2 3",
                "output": "2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 1 1",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3\n1 2 3",
                "expectedOutput": "2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Count subarrays summing to k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "cur = 0, counts = {0: 1}, ans = 0. For x in nums: cur += x; ans += counts.get(cur - k, 0); counts[cur] = counts.get(cur, 0) + 1."
        ],
        "howToThink": [
            "If current prefix sum is S, any prior prefix sum equal to S - K creates a subarray summing to K."
        ],
        "approach": "Prefix sum frequency map.",
        "pseudocode": "ans = cur = 0\ncounts = {0: 1}\nfor x in nums:\n    cur += x\n    ans += counts.get(cur - k, 0)\n    counts[cur] = counts.get(cur, 0) + 1\nprint(ans)",
        "explanation": "Computes all matching subarrays in one pass without quadratic loops.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        ans = cur = 0\n        counts = {0: 1}\n        for x in nums:\n            cur += x\n            ans += counts.get(cur - k, 0)\n            counts[cur] = counts.get(cur, 0) + 1\n        print(ans)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to initialize counts with {0: 1} to handle subarrays starting at index 0"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "prefix sums",
            "hash map",
            "must-know"
        ]
    },
    {
        "id": "py-prob-14-05",
        "levelId": "py-level-14",
        "title": "Intersection of Two Arrays II",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "LeetCode #350.\nGiven two integer arrays on separate lines, return an array of their intersection.\nEach element in the result must appear as many times as it shows in both arrays (accounting for multiplicity).\nPrint the result sorted in ascending order.",
        "whyThisMatters": "Contrasts set intersection (unique) with multiset intersection (frequency minimum).",
        "concepts": [
            "counter",
            "multiset intersection",
            "frequency min"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Intersect multisets accounting for multiplicity"
        ],
        "constraints": [
            "Integer arrays"
        ],
        "examples": [
            {
                "input": "1 2 2 1\n2 2",
                "output": "2 2"
            },
            {
                "input": "4 9 5\n9 4 9 8 4",
                "output": "4 9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 2 1\n2 2",
                "expectedOutput": "2 2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4 9 5\n9 4 9 8 4",
                "expectedOutput": "4 9",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = list(map(int, lines[0].split()))\n        b = list(map(int, lines[1].split()))\n        # Intersection with multiplicity\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "ca, cb = Counter(a), Counter(b). For x in ca: count = min(ca[x], cb[x]). Output x that many times."
        ],
        "howToThink": [
            "The multiplicity of each item in the intersection is min(count_in_a, count_in_b)."
        ],
        "approach": "Counter intersection.",
        "pseudocode": "res = []\nca, cb = Counter(a), Counter(b)\nfor x in ca:\n    res.extend([x] * min(ca[x], cb[x]))\nprint(*sorted(res))",
        "explanation": "Counter multiset intersection in linear time.",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        a = list(map(int, lines[0].split()))\n        b = list(map(int, lines[1].split()))\n        ca, cb = Counter(a), Counter(b)\n        res = []\n        for x in ca:\n            res.extend([x] * min(ca[x], cb[x]))\n        print(*sorted(res))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using sets which drops duplicate elements"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "counter",
            "frequency"
        ]
    },
    {
        "id": "py-prob-14-06",
        "levelId": "py-level-14",
        "title": "Find All Duplicates in an Array",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #442.\nGiven an integer array `nums` of length `N` where all integers are in the range `[1, N]` and each integer appears once or twice:\nFind all integers that appear twice.\nPrint them sorted in ascending order.",
        "whyThisMatters": "Index negation trick allows finding duplicates in O(N) time and O(1) extra space.",
        "concepts": [
            "index negation",
            "duplicates",
            "in-place hash"
        ],
        "prerequisites": [
            "dictionaries",
            "arrays"
        ],
        "learningObjectives": [
            "Detect duplicate elements using index mapping"
        ],
        "constraints": [
            "1 <= nums[i] <= N"
        ],
        "examples": [
            {
                "input": "4 3 2 7 8 2 3 1",
                "output": "2 3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "4 3 2 7 8 2 3 1",
                "expectedOutput": "2 3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 1 2",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Find duplicates appearing twice\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use index negation: for x in nums: idx = abs(x) - 1. If nums[idx] < 0: res.append(abs(x)). Else: nums[idx] = -nums[idx]."
        ],
        "howToThink": [
            "Sign of nums[val - 1] indicates whether val has already been seen."
        ],
        "approach": "Index negation in-place.",
        "pseudocode": "res = []\nfor x in nums:\n    idx = abs(x) - 1\n    if nums[idx] < 0: res.append(abs(x))\n    else: nums[idx] = -nums[idx]\nprint(*sorted(res))",
        "explanation": "Uses the array's sign bit as a boolean visited flag in O(N) time and O(1) space.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    res = []\n    for x in nums:\n        idx = abs(x) - 1\n        if nums[idx] < 0:\n            res.append(abs(x))\n        else:\n            nums[idx] = -nums[idx]\n    print(*sorted(res))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting abs(x) when computing index on already-negated values"
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "arrays",
            "clever-hashing"
        ]
    },
    {
        "id": "py-prob-14-07",
        "levelId": "py-level-14",
        "title": "Top K Frequent Elements",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #347 Top K Frequent Elements.\nGiven integer `K` on line 1, and an array of integers on line 2:\nReturn the `K` most frequent elements.\nPrint the result sorted in ascending order.",
        "whyThisMatters": "Ranked among the top 10 most frequently asked questions across all FAANG interviews.",
        "concepts": [
            "top k",
            "counter",
            "frequency"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Find top K items using frequency map and sorting"
        ],
        "constraints": [
            "1 <= K <= number of unique elements"
        ],
        "examples": [
            {
                "input": "2\n1 1 1 2 2 3",
                "output": "1 2"
            },
            {
                "input": "1\n1",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 1 1 2 2 3",
                "expectedOutput": "1 2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1\n1",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Top K frequent\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "counts = Counter(nums). Top K are [item for item, _ in counts.most_common(k)]."
        ],
        "howToThink": [
            "Count frequencies, take top k with Counter.most_common(k)."
        ],
        "approach": "Counter.most_common(k).",
        "pseudocode": "counts = Counter(nums)\ntop_k = [item for item, _ in counts.most_common(k)]\nprint(*sorted(top_k))",
        "explanation": "Counter.most_common(k) uses a heap internally for O(N log K) performance.",
        "solution": "import sys\nfrom collections import Counter\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        counts = Counter(nums)\n        top_k = [item for item, _ in counts.most_common(k)]\n        print(*sorted(top_k))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Sorting entire array instead of unique elements"
        ],
        "timeComplexity": "O(N log K)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "top-k",
            "counter",
            "must-know"
        ]
    },
    {
        "id": "py-prob-14-08",
        "levelId": "py-level-14",
        "title": "Contains Duplicate II (Within Window K)",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "LeetCode #219.\nGiven integer `K` on line 1, and an array of integers on line 2:\nReturn `True` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= K`.\nOtherwise return `False`.",
        "whyThisMatters": "Combines hash maps with sliding window constraint.",
        "concepts": [
            "sliding window hash",
            "duplicate within distance"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Track most recent index in hash map to verify distance bound"
        ],
        "constraints": [
            "K >= 0"
        ],
        "examples": [
            {
                "input": "3\n1 2 3 1",
                "output": "True"
            },
            {
                "input": "2\n1 2 3 1 2 3",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3\n1 2 3 1",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2\n1 2 3 1 2 3",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        # Check duplicate within distance k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "seen = {}. For i, x in enumerate(nums): if x in seen and i - seen[x] <= k: return True. seen[x] = i."
        ],
        "howToThink": [
            "Store last seen index of each number. If current index - last index <= k, return True."
        ],
        "approach": "Hash map tracking most recent index.",
        "pseudocode": "seen = {}\nfor i, x in enumerate(nums):\n    if x in seen and i - seen[x] <= k: print('True'); return\n    seen[x] = i\nprint('False')",
        "explanation": "Single pass O(N) check.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        seen = {}\n        for i, x in enumerate(nums):\n            if x in seen and i - seen[x] <= k:\n                print('True')\n                return\n            seen[x] = i\n        print('False')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "O(N*K) sliding window when hash map gives O(N) directly"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "hash map",
            "sliding window"
        ]
    },
    {
        "id": "py-prob-14-09",
        "levelId": "py-level-14",
        "title": "Isomorphic Strings",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "LeetCode #205 Isomorphic Strings.\nTwo strings `S` and `T` are isomorphic if the characters in `S` can be replaced to get `T`.\nAll occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.\nPrint `True` if isomorphic, else `False`.",
        "whyThisMatters": "Bijective mapping (one-to-one and onto) between two sequences.",
        "concepts": [
            "isomorphic",
            "bijective mapping",
            "hash map"
        ],
        "prerequisites": [
            "dictionaries"
        ],
        "learningObjectives": [
            "Validate 1-to-1 character mappings between strings"
        ],
        "constraints": [
            "Equal length strings"
        ],
        "examples": [
            {
                "input": "egg\nadd",
                "output": "True"
            },
            {
                "input": "foo\nbar",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "egg\nadd",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "foo\nbar",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        # Check if isomorphic\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "len(set(zip(s, t))) == len(set(s)) == len(set(t))"
        ],
        "howToThink": [
            "A bijection requires that mapping s->t is 1-to-1 in both directions."
        ],
        "approach": "Check uniqueness of paired mappings.",
        "pseudocode": "print(len(set(zip(s, t))) == len(set(s)) == len(set(t)))",
        "explanation": "If every unique char in S maps to unique char in T, number of unique pairs equals number of unique chars in both.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        s, t = lines[0].strip(), lines[1].strip()\n        if len(s) != len(t):\n            print('False')\n            return\n        print(len(set(zip(s, t))) == len(set(s)) == len(set(t)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Checking only one direction (e.g. 'badc' and 'baba')"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "strings",
            "hash map"
        ]
    },
    {
        "id": "py-prob-14-10",
        "levelId": "py-level-14",
        "title": "Word Pattern",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "LeetCode #290 Word Pattern.\nGiven a pattern string `pattern` and a string `s` of words on separate lines:\nFind if `s` follows the same pattern.\nHere follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.\nPrint `True` or `False`.",
        "whyThisMatters": "Direct extension of Isomorphic Strings from characters to words.",
        "concepts": [
            "bijection",
            "word pattern",
            "hash map"
        ],
        "prerequisites": [
            "isomorphic"
        ],
        "learningObjectives": [
            "Map characters to words bijectively"
        ],
        "constraints": [
            "Pattern and words"
        ],
        "examples": [
            {
                "input": "abba\ndog cat cat dog",
                "output": "True"
            },
            {
                "input": "abba\ndog cat cat fish",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "abba\ndog cat cat dog",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "abba\ndog cat cat fish",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        pattern = lines[0].strip()\n        words = lines[1].split()\n        # Check bijection\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "len(pattern) == len(words) and len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words))"
        ],
        "howToThink": [
            "Pattern length must match word count, and mapping must be 1-to-1."
        ],
        "approach": "Check lengths and set bijection.",
        "pseudocode": "if len(pattern) != len(words): print('False'); return\nprint(len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words)))",
        "explanation": "Bijection check identical to Isomorphic Strings.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        pattern = lines[0].strip()\n        words = lines[1].split()\n        if len(pattern) != len(words):\n            print('False')\n            return\n        print(len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to check len(pattern) == len(words)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "hash map",
            "strings"
        ]
    }
];
