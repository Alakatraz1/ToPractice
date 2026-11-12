import { DualLanguageProblemSpec } from "./interviewPrepBasics";

export const amazonChallengesSpecs: DualLanguageProblemSpec[] = [
    {
        "baseId": "amz-oa-01",
        "levelId": "amz-challenges",
        "title": "Amazon OA 1: Maximum Sustainable Server Cluster (AWS Power Limit)",
        "difficulty": "hard",
        "order": 1,
        "pattern": "Sliding Window + Monotonic Deque",
        "amazonContext": "One of the most frequently asked real Amazon SDE Intern OA Part 1 problems (2024–2026).",
        "description": "AWS engineers want to form the largest sustainable cluster of **contiguous** servers. You are given `N` servers where server `i` has:\n- `bootingPower[i]`: startup power spike\n- `processingPower[i]`: continuous processing power\n\nFor a contiguous cluster of `k` servers from index `L` to `R` (`k = R - L + 1`), the **net power consumption** is defined by AWS as:\n`Power(L, R) = max(bootingPower[L..R]) + sum(processingPower[L..R]) * k`\n\nGiven `powerMax`, find the **maximum number of contiguous servers** `k` whose net power consumption does not exceed `powerMax`. If no server can run, output `0`.\n\n**Input Format:**\n- First line: two integers `N` and `powerMax`\n- Second line: `N` space-separated integers representing `bootingPower`\n- Third line: `N` space-separated integers representing `processingPower`\n\n**Output Format:**\n- Print a single integer: the maximum cluster size `k`.",
        "whyThisMatters": "This real Amazon OA question tests whether you can combine a variable-size sliding window (for sum of processingPower) with a Monotonic Decreasing Deque (for O(1) window maximum of bootingPower).",
        "concepts": [
            "sliding window",
            "monotonic deque",
            "queue",
            "arrays",
            "amazon oa"
        ],
        "prerequisites": [
            "sliding window",
            "deque"
        ],
        "learningObjectives": [
            "Maintain both the sum and the maximum of a sliding window [L, R] in O(1) amortized time",
            "Use a monotonic decreasing deque of indices to track max(bootingPower[L..R])"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "1 <= bootingPower[i], processingPower[i] <= 10^5",
            "1 <= powerMax <= 10^15"
        ],
        "examples": [
            {
                "input": "5 25\n3 6 1 3 4\n2 1 3 4 5",
                "output": "3",
                "explanation": "Subarray [0..2] has bootingPower [3,6,1] (max=6) and processingPower [2,1,3] (sum=6), k=3. Net power = 6 + 6 * 3 = 24 <= 25. Max size is 3."
            }
        ],
        "testCases": [
            {
                "id": "amz-c01-tc1",
                "input": "5 25\n3 6 1 3 4\n2 1 3 4 5",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-c01-tc2",
                "input": "3 10\n11 12 19\n10 8 7",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "amz-c01-tc3",
                "input": "4 100\n4 2 5 3\n1 2 1 2",
                "expectedOutput": "4",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <deque>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    long long powerMax;\n    if (!(cin >> n >> powerMax)) return 0;\n    vector<long long> boot(n), proc(n);\n    for (int i = 0; i < n; i++) cin >> boot[i];\n    for (int i = 0; i < n; i++) cin >> proc[i];\n\n    // Sliding window [left, right] + monotonic decreasing deque for max(boot)\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n, power_max = int(data[0]), int(data[1])\n    boot = [int(x) for x in data[2:2+n]]\n    proc = [int(x) for x in data[2+n:2+2*n]]\n\n    # Sliding window [left, right] + monotonic decreasing deque for max(boot)\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "As `right` expands, `sum(proc)` and `k = right - left + 1` and `max(boot)` all monotonically increase! That means we can use a sliding window `[left, right]`.",
            "To know `max(boot[left..right])` in O(1), maintain a `deque` of indices in decreasing order of `boot[idx]`. Before pushing `right`, pop indices from the back where `boot[dq.back()] <= boot[right]`. When `left` advances past `dq.front()`, pop from the front!"
        ],
        "howToThink": [
            "Notice that adding a server to a window can only INCREASE `max(boot)`, INCREASE `sum(proc)`, and INCREASE `k`. Thus the cost function is monotonic with respect to window expansion!",
            "To maintain `max(boot[left..right])` as `left` and `right` move forward, use a Monotonic Decreasing Deque of indices."
        ],
        "approach": "Use a sliding window `[left, right]` tracking `window_sum` of `proc` and a monotonic decreasing `deque` tracking the maximum of `boot` in `[left, right]`. Shrink `left` while total cost exceeds `powerMax`.",
        "pseudocode": "dq = empty deque, window_sum = 0, left = 0, best = 0\nfor right from 0 to N - 1:\n    while dq not empty and boot[dq.back()] <= boot[right]:\n        dq.pop_back()\n    dq.push_back(right)\n    window_sum += proc[right]\n    while left <= right and boot[dq.front()] + window_sum * (right - left + 1) > powerMax:\n        if dq.front() == left: dq.pop_front()\n        window_sum -= proc[left]\n        left += 1\n    best = max(best, right - left + 1)\nprint(best)",
        "explanation": "Every index is pushed and popped from the monotonic deque at most once, so the entire algorithm runs in `O(N)` time and `O(N)` space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <deque>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    long long powerMax;\n    if (!(cin >> n >> powerMax)) return 0;\n    vector<long long> boot(n), proc(n);\n    for (int i = 0; i < n; i++) cin >> boot[i];\n    for (int i = 0; i < n; i++) cin >> proc[i];\n\n    deque<int> dq;\n    long long sumProc = 0;\n    int left = 0, ans = 0;\n    for (int right = 0; right < n; right++) {\n        while (!dq.empty() && boot[dq.back()] <= boot[right]) {\n            dq.pop_back();\n        }\n        dq.push_back(right);\n        sumProc += proc[right];\n\n        while (left <= right && boot[dq.front()] + sumProc * (right - left + 1) > powerMax) {\n            if (dq.front() == left) dq.pop_front();\n            sumProc -= proc[left];\n            left++;\n        }\n        ans = max(ans, right - left + 1);\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n, power_max = int(data[0]), int(data[1])\n    boot = [int(x) for x in data[2:2+n]]\n    proc = [int(x) for x in data[2+n:2+2*n]]\n\n    dq = deque()\n    sum_proc = 0\n    left = 0\n    ans = 0\n    for right in range(n):\n        while dq and boot[dq[-1]] <= boot[right]:\n            dq.pop()\n        dq.append(right)\n        sum_proc += proc[right]\n\n        while left <= right and boot[dq[0]] + sum_proc * (right - left + 1) > power_max:\n            if dq[0] == left:\n                dq.popleft()\n            sum_proc -= proc[left]\n            left += 1\n        if right - left + 1 > ans:\n            ans = right - left + 1\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Recomputing `max(boot[left:right+1])` inside the loop, which degrades time complexity to O(N^2) and fails hidden tests.",
            "Integer overflow when multiplying `sumProc * k` without 64-bit integers (`long long`)."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "sliding-window",
            "monotonic-deque",
            "amazon-oa",
            "hard"
        ]
    },
    {
        "baseId": "amz-oa-02",
        "levelId": "amz-challenges",
        "title": "Amazon OA 2: Minimum Power to Make Server Array Non-Decreasing",
        "difficulty": "medium",
        "order": 2,
        "pattern": "Difference Array / Greedy Observation",
        "amazonContext": "Top-reported 2025/2026 Amazon SDE Intern OA problem on subarray increments.",
        "description": "Amazon has `N` computational nodes with capacities `cap[0..N-1]`. In a single operation, you can choose any suffix (or contiguous segment extending to the end) starting at index `i` and add a positive integer `x` to all elements from `i` to `N - 1`. The cost of this operation is `x`.\n\nFind the **minimum total cost** required to make the entire array `cap` **non-decreasing** (i.e., `cap[0] <= cap[1] <= ... <= cap[N-1]`).\n\n**Input Format:**\n- First line: integer `N`\n- Second line: `N` space-separated integers representing `cap`\n\n**Output Format:**\n- Print a single 64-bit integer: the minimum total cost.",
        "whyThisMatters": "Amazon loves \"aha!\" greedy observation questions where a seemingly complex range-addition problem simplifies into a single O(N) scan of adjacent differences.",
        "concepts": [
            "greedy",
            "arrays",
            "difference array",
            "amazon oa"
        ],
        "prerequisites": [
            "arrays",
            "loops"
        ],
        "learningObjectives": [
            "Recognize how suffix increments affect adjacent differences cap[i] - cap[i-1]",
            "Accumulate max(0, cap[i-1] - cap[i]) in a single O(N) pass"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "1 <= cap[i] <= 10^9"
        ],
        "examples": [
            {
                "input": "5\n3 4 1 6 2",
                "output": "7",
                "explanation": "At index 2 (1 < 4), add 3 to suffix [2..4] -> array becomes [3, 4, 4, 9, 5]. At index 4 (5 < 9), add 4 to suffix [4..4] -> [3, 4, 4, 9, 9]. Total cost = 3 + 4 = 7."
            }
        ],
        "testCases": [
            {
                "id": "amz-c02-tc1",
                "input": "5\n3 4 1 6 2",
                "expectedOutput": "7",
                "hidden": false
            },
            {
                "id": "amz-c02-tc2",
                "input": "4\n1 2 3 4",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "amz-c02-tc3",
                "input": "4\n10 7 4 1",
                "expectedOutput": "9",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> cap(n);\n    for (int i = 0; i < n; i++) cin >> cap[i];\n\n    // Compute minimum total cost to make cap non-decreasing\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    cap = [int(x) for x in data[1:1+n]]\n\n    # Compute minimum total cost to make cap non-decreasing\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Notice that when you add `x` to the suffix `cap[i .. N-1]`, every element from `i` onward increases by the exact same amount `x`, so relative differences between `cap[j]` and `cap[j-1]` for `j > i` do NOT change!",
            "The only adjacent pair whose difference changes is `(cap[i-1], cap[i])`. Therefore, whenever `cap[i] < cap[i-1]`, we must pay `cap[i-1] - cap[i]`!"
        ],
        "howToThink": [
            "Instead of actually updating the suffix in `O(N)` per step, think in terms of adjacent differences `D[i] = cap[i] - cap[i-1]`.",
            "Adding `x` to suffix `[i..N-1]` increases `D[i]` by `x` and leaves all `D[j]` (`j > i`) unchanged! So the total cost is simply `sum(max(0, cap[i-1] - cap[i]))`."
        ],
        "approach": "Sum `max(0, cap[i-1] - cap[i])` for all `i` from `1` to `N - 1`.",
        "pseudocode": "cost = 0\nfor i from 1 to N - 1:\n    if cap[i] < cap[i - 1]:\n        cost += cap[i - 1] - cap[i]\nprint(cost)",
        "explanation": "Each drop between `cap[i-1]` and `cap[i]` requires at least `cap[i-1] - cap[i]` added to `[i..N-1]`, which simultaneously lifts all subsequent elements by the same offset.",
        "cppSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> cap(n);\n    for (int i = 0; i < n; i++) cin >> cap[i];\n    long long cost = 0;\n    for (int i = 1; i < n; i++) {\n        if (cap[i] < cap[i - 1]) {\n            cost += cap[i - 1] - cap[i];\n        }\n    }\n    cout << cost << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    cap = [int(x) for x in data[1:1+n]]\n    cost = 0\n    for i in range(1, n):\n        if cap[i] < cap[i - 1]:\n            cost += cap[i - 1] - cap[i]\n    print(cost)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Simulating the suffix addition with a nested loop in O(N^2), causing TLE on N = 10^5.",
            "Tracking only the running maximum instead of adjacent drops."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "greedy",
            "arrays",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-03",
        "levelId": "amz-challenges",
        "title": "Amazon OA 3: Minimum Delivery Rounds for Warehouse Boxes",
        "difficulty": "medium",
        "order": 3,
        "pattern": "Frequency Map + Number Theory Greedy",
        "amazonContext": "Classic Amazon Fulfillment OA problem (also known as Minimum Rounds to Complete All Tasks).",
        "description": "An Amazon warehouse worker must ship `N` boxes, where box `i` has weight `weights[i]`. In each round, the worker can carry either **2 boxes** or **3 boxes** of the **exact same weight**.\n\nReturn the **minimum number of rounds** required to ship all the boxes, or `-1` if it is impossible to ship all of them.\n\n**Input Format:**\n- First line: integer `N`\n- Second line: `N` space-separated integers representing `weights`\n\n**Output Format:**\n- Print a single integer: minimum rounds required, or `-1`.",
        "whyThisMatters": "This problem appears constantly in Amazon SDE 1 Intern OAs because it tests both hash map counting and modular arithmetic greedy reasoning.",
        "concepts": [
            "hash maps",
            "greedy",
            "math",
            "amazon oa"
        ],
        "prerequisites": [
            "hash maps"
        ],
        "learningObjectives": [
            "Group identical items using a frequency hash map",
            "Prove that any count c >= 2 can be decomposed into 2s and 3s in ceil(c / 3) = (c + 2) // 3 rounds"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "1 <= weights[i] <= 10^9"
        ],
        "examples": [
            {
                "input": "10\n2 2 3 3 2 4 4 4 4 4",
                "output": "4",
                "explanation": "Weight 2 appears 3 times (1 round of 3). Weight 3 appears 2 times (1 round of 2). Weight 4 appears 5 times (1 round of 3 + 1 round of 2 = 2 rounds). Total = 4."
            }
        ],
        "testCases": [
            {
                "id": "amz-c03-tc1",
                "input": "10\n2 2 3 3 2 4 4 4 4 4",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-c03-tc2",
                "input": "3\n2 3 3",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "amz-c03-tc3",
                "input": "7\n5 5 5 5 5 5 5",
                "expectedOutput": "3",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    unordered_map<long long, int> freq;\n    for (int i = 0; i < n; i++) {\n        long long w;\n        cin >> w;\n        freq[w]++;\n    }\n\n    // Calculate minimum rounds using (count + 2) / 3\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    weights = [int(x) for x in data[1:1+n]]\n\n    # Calculate minimum rounds using (count + 2) // 3\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "If any weight has frequency `c == 1`, it is impossible (`-1`).",
            "For any `c >= 2`: if `c % 3 == 0`, we need `c / 3` rounds. If `c % 3 == 1` (e.g., 4 = 2+2, 7 = 3+2+2), we need `c / 3 + 1` rounds. If `c % 3 == 2` (e.g., 5 = 3+2), we also need `c / 3 + 1` rounds! In all cases for `c >= 2`, that is `(c + 2) / 3`!"
        ],
        "howToThink": [
            "First count how many boxes of each weight exist.",
            "To minimize rounds for a count `c`, we want to use batches of 3 as much as possible.",
            "Only `c = 1` cannot be formed by `2`s and `3`s. Every `c >= 2` takes exactly `ceil(c / 3) = (c + 2) // 3` rounds."
        ],
        "approach": "Count frequencies with a hash map. If any frequency is 1, return `-1`. Otherwise sum `(c + 2) // 3` over all frequencies.",
        "pseudocode": "freq = Counter(weights)\nrounds = 0\nfor w, c in freq:\n    if c == 1: return -1\n    rounds += (c + 2) // 3\nreturn rounds",
        "explanation": "Counting frequencies takes `O(N)` time, and iterating over unique weights takes `O(N)` time.",
        "cppSolution": "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    unordered_map<long long, long long> freq;\n    for (int i = 0; i < n; i++) {\n        long long w;\n        cin >> w;\n        freq[w]++;\n    }\n    long long rounds = 0;\n    for (const auto& [w, c] : freq) {\n        if (c == 1) {\n            cout << -1 << \"\\n\";\n            return 0;\n        }\n        rounds += (c + 2) / 3;\n    }\n    cout << rounds << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import Counter\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    freq = Counter(int(x) for x in data[1:1+n])\n    rounds = 0\n    for c in freq.values():\n        if c == 1:\n            print(-1)\n            return\n        rounds += (c + 2) // 3\n    print(rounds)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Checking `if c % 3 != 0 and c % 2 != 0: return -1`, which falsely rejects numbers like 5 (3 + 2) or 7 (3 + 2 + 2)."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "hash-map",
            "greedy",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-04",
        "levelId": "amz-challenges",
        "title": "Amazon OA 4: Maximum Sum of K Distinct Consecutive Stock Prices",
        "difficulty": "medium",
        "order": 4,
        "pattern": "Fixed Sliding Window + Frequency Hash Map",
        "amazonContext": "Directly modeled after the famous \"Maximum Observable Stock Price\" Amazon OA question.",
        "description": "Given an array of `N` monthly Amazon stock prices `prices` and an integer `K`, find the **maximum sum** of any contiguous subarray of length `K` such that **all `K` stock prices in the window are pairwise distinct**.\n\nIf no subarray of length `K` has all distinct elements, output `0`.\n\n**Input Format:**\n- First line: two integers `N` and `K`\n- Second line: `N` space-separated positive integers representing `prices`\n\n**Output Format:**\n- Print a single 64-bit integer: the maximum valid subarray sum, or `0`.",
        "whyThisMatters": "This is one of the highest-frequency Amazon SDE Intern OA questions of all time. It combines a fixed-size sliding window sum with a hash map tracking distinct element counts.",
        "concepts": [
            "sliding window",
            "hash maps",
            "arrays",
            "amazon oa"
        ],
        "prerequisites": [
            "sliding window",
            "hash maps"
        ],
        "learningObjectives": [
            "Maintain both window sum and distinct element count in a sliding window of size K",
            "Delete a key from the frequency map when its count drops to 0 so map.size() equals the number of distinct elements"
        ],
        "constraints": [
            "1 <= K <= N <= 10^5",
            "1 <= prices[i] <= 10^9"
        ],
        "examples": [
            {
                "input": "7 3\n1 5 4 2 9 9 9",
                "output": "15",
                "explanation": "Valid windows of size 3 with distinct elements: [1,5,4]=10, [5,4,2]=11, [4,2,9]=15. [2,9,9] and [9,9,9] have duplicates. Max is 15."
            }
        ],
        "testCases": [
            {
                "id": "amz-c04-tc1",
                "input": "7 3\n1 5 4 2 9 9 9",
                "expectedOutput": "15",
                "hidden": false
            },
            {
                "id": "amz-c04-tc2",
                "input": "3 3\n4 4 4",
                "expectedOutput": "0",
                "hidden": false
            },
            {
                "id": "amz-c04-tc3",
                "input": "5 2\n10 20 10 30 30",
                "expectedOutput": "40",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n\n    // Maintain window sum and frequency map of size k\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import defaultdict\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n\n    # Maintain window sum and frequency map of size k\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Keep a `window_sum` and a frequency map `freq`. When an element `x` leaves the window, decrement `freq[x]` and if `freq[x] == 0`, erase `x` from `freq`!",
            "Then all `K` elements in the current window are distinct if and only if `freq.size() == K`!"
        ],
        "howToThink": [
            "In a window of size `K`, there are `K` total elements. When are all `K` elements distinct? Exactly when the number of unique keys in our frequency map equals `K`!",
            "By erasing keys when their count hits 0, checking uniqueness takes `O(1)` via `len(freq) == k`."
        ],
        "approach": "Slide a window of length `K`, updating `window_sum` and `freq`. Erase keys with count 0. Whenever `len(freq) == K`, update `best = max(best, window_sum)`.",
        "pseudocode": "freq = map(), window_sum = 0, best = 0\nfor i from 0 to N - 1:\n    window_sum += a[i]\n    freq[a[i]] += 1\n    if i >= K:\n        left_val = a[i - K]\n        window_sum -= left_val\n        freq[left_val] -= 1\n        if freq[left_val] == 0: delete freq[left_val]\n    if i >= K - 1 and len(freq) == K:\n        best = max(best, window_sum)\nprint(best)",
        "explanation": "Each element is inserted and removed from the hash map at most once, running in `O(N)` time and `O(K)` space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n\n    unordered_map<long long, int> freq;\n    long long window_sum = 0, best = 0;\n    for (int i = 0; i < n; i++) {\n        window_sum += a[i];\n        freq[a[i]]++;\n        if (i >= k) {\n            long long old = a[i - k];\n            window_sum -= old;\n            if (--freq[old] == 0) {\n                freq.erase(old);\n            }\n        }\n        if (i >= k - 1 && (int)freq.size() == k) {\n            best = max(best, window_sum);\n        }\n    }\n    cout << best << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n, k = int(data[0]), int(data[1])\n    a = [int(x) for x in data[2:2+n]]\n    freq = {}\n    window_sum = 0\n    best = 0\n    for i, x in enumerate(a):\n        window_sum += x\n        freq[x] = freq.get(x, 0) + 1\n        if i >= k:\n            old = a[i - k]\n            window_sum -= old\n            if freq[old] == 1:\n                del freq[old]\n            else:\n                freq[old] -= 1\n        if i >= k - 1 and len(freq) == k:\n            if window_sum > best:\n                best = window_sum\n    print(best)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting to `erase` / `del` the key when its frequency reaches 0, which keeps `len(freq)` artificially high!"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(K)",
        "tags": [
            "sliding-window",
            "hash-map",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-05",
        "levelId": "amz-challenges",
        "title": "Amazon OA 5: Minimum Loading Docks Required (Meeting Rooms II)",
        "difficulty": "medium",
        "order": 5,
        "pattern": "Intervals + Min-Heap / Sweep Line",
        "amazonContext": "High-frequency Amazon Logistics & Chime scheduling OA question.",
        "description": "An Amazon fulfillment center receives `N` truck deliveries. Truck `i` occupies a loading dock during the half-open time interval `[start[i], end[i])`. (If one truck leaves at time `t` and another arrives at time `t`, they can share the same loading dock.)\n\nFind the **minimum number of loading docks** required so that no truck ever waits.\n\n**Input Format:**\n- First line: integer `N`\n- Next `N` lines: two space-separated integers `start` and `end`\n\n**Output Format:**\n- Print a single integer: the minimum number of docks required.",
        "whyThisMatters": "Meeting Rooms II (Minimum Docks / Servers Needed) is a top-5 Amazon interview question testing interval sorting + min-heap scheduling.",
        "concepts": [
            "intervals",
            "heap",
            "sorting",
            "greedy",
            "amazon oa"
        ],
        "prerequisites": [
            "intervals",
            "heap"
        ],
        "learningObjectives": [
            "Sort intervals by start time and track active end times in a Min-Heap",
            "Reuse the earliest freeing dock when earliest_end <= current_start"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "0 <= start < end <= 10^9"
        ],
        "examples": [
            {
                "input": "3\n0 30\n5 10\n15 20",
                "output": "2",
                "explanation": "Truck [0,30) uses Dock 1. Truck [5,10) uses Dock 2. Truck [15,20) reuses Dock 2 since 15 >= 10. Total docks = 2."
            }
        ],
        "testCases": [
            {
                "id": "amz-c05-tc1",
                "input": "3\n0 30\n5 10\n15 20",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-c05-tc2",
                "input": "2\n7 10\n2 4",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "amz-c05-tc3",
                "input": "4\n1 5\n2 6\n3 7\n5 8",
                "expectedOutput": "3",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n\n    // Sort by start time and use a Min-Heap of end times\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    iv = []\n    idx = 1\n    for _ in range(n):\n        iv.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n\n    # Sort by start time and use a Min-Heap of end times\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Sort trucks by arrival time `start`. Maintain a Min-Heap storing the `end` times of currently occupied docks.",
            "When a truck `[s, e)` arrives, check the top of the Min-Heap (the dock that frees up earliest). If `minHeap.top() <= s`, pop it (reuse that dock)! Then push `e`. The final size of the Min-Heap is the answer!"
        ],
        "howToThink": [
            "When a new truck arrives at time `s`, which existing dock has the best chance of being free? The dock whose current truck leaves the **earliest** (`min(end_times)`).",
            "A Min-Heap gives us the earliest end time in `O(1)` and updates in `O(log N)`."
        ],
        "approach": "Sort intervals by start time, push end times into a Min-Heap, and pop the top whenever `heap.top() <= current.start`.",
        "pseudocode": "sort(intervals by start)\nminHeap = empty MinHeap\nfor (start, end) in intervals:\n    if minHeap not empty and minHeap.top() <= start:\n        minHeap.pop()\n    minHeap.push(end)\nprint(minHeap.size())",
        "explanation": "Sorting takes `O(N log N)` and `N` heap pushes/pops take `O(N log N)` time.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<pair<long long, long long>> iv(n);\n    for (int i = 0; i < n; i++) cin >> iv[i].first >> iv[i].second;\n    sort(iv.begin(), iv.end());\n    priority_queue<long long, vector<long long>, greater<long long>> pq;\n    for (const auto& [s, e] : iv) {\n        if (!pq.empty() && pq.top() <= s) {\n            pq.pop();\n        }\n        pq.push(e);\n    }\n    cout << pq.size() << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nimport heapq\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    iv = []\n    idx = 1\n    for _ in range(n):\n        iv.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n    iv.sort(key=lambda x: x[0])\n    pq = []\n    for s, e in iv:\n        if pq and pq[0] <= s:\n            heapq.heappop(pq)\n        heapq.heappush(pq, e)\n    print(len(pq))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `<` instead of `<=` when checking if a dock freed up at the exact time the next truck arrives."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "intervals",
            "heap",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-06",
        "levelId": "amz-challenges",
        "title": "Amazon OA 6: Rotting Oranges / Server Patch Propagation (Multi-Source BFS)",
        "difficulty": "medium",
        "order": 6,
        "pattern": "Multi-Source Breadth-First Search (BFS)",
        "amazonContext": "Iconic Amazon OA & Final Round question (often framed as zombie servers or rotting oranges).",
        "description": "You are given an `R x C` grid representing an AWS server rack:\n- `0`: Empty slot\n- `1`: Unpatched server (Fresh)\n- `2`: Patched server (Rotten)\n\nEvery minute, any unpatched server (`1`) that is 4-directionally adjacent to a patched server (`2`) receives the patch and becomes `2`.\n\nReturn the **minimum number of minutes** that must elapse until no unpatched server remains, or `-1` if some server can never be reached.\n\n**Input Format:**\n- First line: two integers `R` and `C`\n- Next `R` lines: `C` space-separated integers (`0`, `1`, or `2`)\n\n**Output Format:**\n- Print a single integer: minimum minutes required, or `-1`.",
        "whyThisMatters": "Multi-source BFS (pushing all initial sources with value 2 into the queue at minute 0 before starting BFS) is one of Amazon’s favorite graph patterns.",
        "concepts": [
            "bfs",
            "multi-source bfs",
            "grid traversal",
            "queue",
            "amazon oa"
        ],
        "prerequisites": [
            "bfs",
            "queue"
        ],
        "learningObjectives": [
            "Initialize a BFS queue with multiple starting sources simultaneously at time t = 0",
            "Track remaining unvisited target nodes to detect unreachable components (-1)"
        ],
        "constraints": [
            "1 <= R, C <= 500"
        ],
        "examples": [
            {
                "input": "3 3\n2 1 1\n1 1 0\n0 1 1",
                "output": "4",
                "explanation": "The patch spreads from (0,0) across all connected 1s in 4 minutes."
            }
        ],
        "testCases": [
            {
                "id": "amz-c06-tc1",
                "input": "3 3\n2 1 1\n1 1 0\n0 1 1",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-c06-tc2",
                "input": "3 3\n2 1 1\n0 1 1\n1 0 1",
                "expectedOutput": "-1",
                "hidden": false
            },
            {
                "id": "amz-c06-tc3",
                "input": "1 2\n0 2",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int r, c;\n    if (!(cin >> r >> c)) return 0;\n    vector<vector<int>> grid(r, vector<int>(c));\n    for (int i = 0; i < r; i++)\n        for (int j = 0; j < c; j++)\n            cin >> grid[i][j];\n\n    // Push all initial 2s into queue and run multi-source BFS\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    r, c = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    for _ in range(r):\n        grid.append([int(x) for x in data[idx:idx+c]])\n        idx += c\n\n    # Push all initial 2s into queue and run multi-source BFS\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Scan the grid first: push every cell with `grid[i][j] == 2` into the queue as `(i, j, 0)`, and count how many cells have `grid[i][j] == 1` (`fresh_count`).",
            "If `fresh_count == 0` initially, print `0` immediately! Otherwise run BFS, decrementing `fresh_count` each time a `1` turns into a `2`."
        ],
        "howToThink": [
            "Since all initial `2`s spread simultaneously in parallel, they all belong to layer 0 of the BFS tree.",
            "Enqueue all initial `2`s before starting the `while (!q.empty())` loop. At the end, check `fresh_count == 0` to verify no `1` was stranded."
        ],
        "approach": "Enqueue all `2`s at time 0 and count all `1`s. Run BFS converting adjacent `1`s to `2`s. If `fresh == 0` at the end, return `max_time`, else `-1`.",
        "pseudocode": "q = deque(), fresh = 0\nfor r, c in grid:\n    if grid[r][c] == 2: q.append((r, c, 0))\n    elif grid[r][c] == 1: fresh += 1\nmax_t = 0\nwhile q:\n    r, c, t = q.popleft()\n    max_t = max(max_t, t)\n    for nr, nc in neighbors:\n        if grid[nr][nc] == 1:\n            grid[nr][nc] = 2\n            fresh -= 1\n            q.append((nr, nc, t + 1))\nprint(max_t if fresh == 0 else -1)",
        "explanation": "Every cell is visited at most a constant number of times, giving `O(R * C)` time and space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <queue>\n#include <tuple>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int r, c;\n    if (!(cin >> r >> c)) return 0;\n    vector<vector<int>> grid(r, vector<int>(c));\n    queue<tuple<int, int, int>> q;\n    int fresh = 0;\n    for (int i = 0; i < r; i++) {\n        for (int j = 0; j < c; j++) {\n            cin >> grid[i][j];\n            if (grid[i][j] == 2) q.push({i, j, 0});\n            else if (grid[i][j] == 1) fresh++;\n        }\n    }\n    int max_t = 0;\n    int dr[4] = {-1, 1, 0, 0};\n    int dc[4] = {0, 0, -1, 1};\n    while (!q.empty()) {\n        auto [cr, cc, t] = q.front();\n        q.pop();\n        max_t = max(max_t, t);\n        for (int k = 0; k < 4; k++) {\n            int nr = cr + dr[k], nc = cc + dc[k];\n            if (nr >= 0 && nr < r && nc >= 0 && nc < c && grid[nr][nc] == 1) {\n                grid[nr][nc] = 2;\n                fresh--;\n                q.push({nr, nc, t + 1});\n            }\n        }\n    }\n    cout << (fresh == 0 ? max_t : -1) << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    r, c = int(data[0]), int(data[1])\n    grid = []\n    idx = 2\n    q = deque()\n    fresh = 0\n    for i in range(r):\n        row = [int(x) for x in data[idx:idx+c]]\n        idx += c\n        for j, val in enumerate(row):\n            if val == 2:\n                q.append((i, j, 0))\n            elif val == 1:\n                fresh += 1\n        grid.append(row)\n    max_t = 0\n    while q:\n        cr, cc, t = q.popleft()\n        if t > max_t:\n            max_t = t\n        for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):\n            nr, nc = cr + dr, cc + dc\n            if 0 <= nr < r and 0 <= nc < c and grid[nr][nc] == 1:\n                grid[nr][nc] = 2\n                fresh -= 1\n                q.append((nr, nc, t + 1))\n    print(max_t if fresh == 0 else -1)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Running a separate BFS from each `2` instead of pushing all `2`s into a single queue at the start.",
            "Forgetting to check if `fresh == 0` when the grid starts with no `1`s."
        ],
        "timeComplexity": "O(R * C)",
        "spaceComplexity": "O(R * C)",
        "tags": [
            "bfs",
            "multi-source-bfs",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-07",
        "levelId": "amz-challenges",
        "title": "Amazon OA 7: Amazon Audible Book Clusters (Connected Components)",
        "difficulty": "medium",
        "order": 7,
        "pattern": "Graph DFS / BFS / Union-Find",
        "amazonContext": "Real Amazon OA question (\"Gifting Groups\" / \"Audible Subscriber Clusters\").",
        "description": "Amazon Audible tracks whether user `i` and user `j` share book recommendations in an `N x N` binary matrix `M`, where `M[i][j] = 1` means user `i` and user `j` are directly connected (and `M[i][i] = 1`).\n\nConnections are **transitive**: if user A is connected to B, and B is connected to C, they all belong to the same recommendation cluster.\n\nFind the total number of **distinct recommendation clusters**.\n\n**Input Format:**\n- First line: integer `N`\n- Next `N` lines: a binary string of length `N` (e.g. `110`) or space-separated `0`/`1` digits\n\n**Output Format:**\n- Print a single integer: the number of connected clusters.",
        "whyThisMatters": "\"Gifting Groups\" is a classic Amazon SDE Intern OA problem. Notice the input matrix rows are often given as binary strings like `\"110\"` without spaces!",
        "concepts": [
            "graphs",
            "dfs",
            "bfs",
            "connected components",
            "amazon oa"
        ],
        "prerequisites": [
            "graphs",
            "recursion"
        ],
        "learningObjectives": [
            "Parse binary string adjacency matrices (\"110\") cleanly",
            "Count connected components using DFS or BFS in O(N^2) time"
        ],
        "constraints": [
            "1 <= N <= 300"
        ],
        "examples": [
            {
                "input": "3\n110\n110\n001",
                "output": "2",
                "explanation": "Users 0 and 1 are connected (cluster 1). User 2 is alone (cluster 2). Total = 2."
            }
        ],
        "testCases": [
            {
                "id": "amz-c07-tc1",
                "input": "3\n110\n110\n001",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "amz-c07-tc2",
                "input": "3\n100\n010\n001",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "amz-c07-tc3",
                "input": "4\n1100\n1110\n0110\n0001",
                "expectedOutput": "2",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<string> mat(n);\n    for (int i = 0; i < n; i++) cin >> mat[i];\n\n    // Count connected components using DFS or BFS\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    mat = lines[1:1+n]\n\n    # Count connected components using DFS or BFS\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Maintain a `visited` array of size `N`. Loop `i` from `0` to `N - 1`: if `!visited[i]`, increment `clusters++` and run DFS/BFS from `i` to mark all reachable nodes.",
            "In the DFS from node `u`, check all `v` from `0` to `N - 1`: if `mat[u][v] == '1'` and `!visited[v]`, visit `v`."
        ],
        "howToThink": [
            "The matrix `mat[i][j]` is simply the adjacency matrix of an undirected graph with `N` vertices.",
            "Every time our outer loop encounters an unvisited vertex `i`, we have discovered a brand-new cluster! Traversing from `i` marks every member of that cluster as visited."
        ],
        "approach": "Iterate through all `N` users; whenever an unvisited user is found, increment the cluster count and traverse its connected component via DFS/BFS.",
        "pseudocode": "visited = [False] * N\nclusters = 0\nfor i from 0 to N - 1:\n    if not visited[i]:\n        clusters += 1\n        dfs(i)\nprint(clusters)",
        "explanation": "Each row of length `N` is scanned once when its vertex is visited, giving `O(N^2)` time and `O(N)` auxiliary space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<string> mat(n);\n    for (int i = 0; i < n; i++) cin >> mat[i];\n\n    vector<bool> vis(n, false);\n    int clusters = 0;\n    for (int i = 0; i < n; i++) {\n        if (!vis[i]) {\n            clusters++;\n            queue<int> q;\n            q.push(i);\n            vis[i] = true;\n            while (!q.empty()) {\n                int u = q.front();\n                q.pop();\n                for (int v = 0; v < n; v++) {\n                    if (mat[u][v] == '1' && !vis[v]) {\n                        vis[v] = true;\n                        q.push(v);\n                    }\n                }\n            }\n        }\n    }\n    cout << clusters << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\nfrom collections import deque\n\ndef solve():\n    lines = sys.stdin.read().split()\n    if not lines:\n        return\n    n = int(lines[0])\n    mat = lines[1:1+n]\n    vis = [False] * n\n    clusters = 0\n    for i in range(n):\n        if not vis[i]:\n            clusters += 1\n            q = deque([i])\n            vis[i] = True\n            while q:\n                u = q.popleft()\n                for v in range(n):\n                    if mat[u][v] == '1' and not vis[v]:\n                        vis[v] = True\n                        q.append(v)\n    print(clusters)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Treating the matrix as a 2D grid of islands (4-directional movement) instead of an N x N adjacency matrix!"
        ],
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(N)",
        "tags": [
            "graphs",
            "dfs",
            "bfs",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-08",
        "levelId": "amz-challenges",
        "title": "Amazon OA 8: Reorder AWS CloudWatch Log Files",
        "difficulty": "medium",
        "order": 8,
        "pattern": "String Parsing + Stable Custom Sorting",
        "amazonContext": "One of Amazon’s signature string/sorting OA problems.",
        "description": "You are given `N` AWS log lines. Each log is a space-delimited string of words where the **first word is an alphanumeric identifier**.\nThere are two types of logs:\n1. **Letter-logs**: All words after the identifier consist only of lowercase English letters.\n2. **Digit-logs**: All words after the identifier consist only of digits.\n\nReorder the logs so that:\n1. All **letter-logs** come before all **digit-logs**.\n2. **Letter-logs** are sorted lexicographically by their **content** (everything after the identifier). If their contents are identical, sort them lexicographically by their **identifier**.\n3. **Digit-logs** maintain their **exact original relative order**.\n\n**Input Format:**\n- First line: integer `N`\n- Next `N` lines: one log string per line\n\n**Output Format:**\n- Print `N` lines representing the reordered logs.",
        "whyThisMatters": "Tests clean string splitting (`find(\" \")` / `substr` in C++, `split(\" \", 1)` in Python) and multi-key sorting while preserving relative order of digit logs.",
        "concepts": [
            "strings",
            "sorting",
            "custom comparator",
            "amazon oa"
        ],
        "prerequisites": [
            "strings",
            "sorting"
        ],
        "learningObjectives": [
            "Split a string at its first space into (identifier, content)",
            "Separate letter-logs and digit-logs and sort letter-logs by (content, identifier)"
        ],
        "constraints": [
            "1 <= N <= 1000",
            "3 <= log.length <= 100"
        ],
        "examples": [
            {
                "input": "5\ndig1 8 1 5 1\nlet1 art can\ndig2 3 6\nlet2 own kit dig\nlet3 art zero",
                "output": "let1 art can\nlet3 art zero\nlet2 own kit dig\ndig1 8 1 5 1\ndig2 3 6",
                "explanation": "Letter logs are sorted by content (\"art can\" < \"art zero\" < \"own kit dig\"), followed by digit logs in original order."
            }
        ],
        "testCases": [
            {
                "id": "amz-c08-tc1",
                "input": "5\ndig1 8 1 5 1\nlet1 art can\ndig2 3 6\nlet2 own kit dig\nlet3 art zero",
                "expectedOutput": "let1 art can\nlet3 art zero\nlet2 own kit dig\ndig1 8 1 5 1\ndig2 3 6",
                "hidden": false
            },
            {
                "id": "amz-c08-tc2",
                "input": "3\na1 9 2 3 1\ng1 act car\nzo4 4 7",
                "expectedOutput": "g1 act car\na1 9 2 3 1\nzo4 4 7",
                "hidden": false
            },
            {
                "id": "amz-c08-tc3",
                "input": "3\nid2 same text\nid1 same text\nd1 5 5",
                "expectedOutput": "id1 same text\nid2 same text\nd1 5 5",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    string dummy;\n    getline(cin, dummy);\n    vector<string> logs(n);\n    for (int i = 0; i < n; i++) getline(cin, logs[i]);\n\n    // Separate letter-logs and digit-logs, sort letter-logs by (content, id)\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    n = int(lines[0].strip())\n    logs = lines[1:1+n]\n\n    # Separate letter-logs and digit-logs, sort letter-logs by (content, id)\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Find the first space index `pos = log.find(' ')`. The identifier is `log.substr(0, pos)` and the content is `log.substr(pos + 1)`.",
            "If `isdigit(content[0])`, append to `digit_logs`. Otherwise append to `letter_logs` and sort `letter_logs` by `(content, identifier)`."
        ],
        "howToThink": [
            "Separating `letter_logs` and `digit_logs` into two lists automatically preserves the relative order of `digit_logs`!",
            "Then we only need to sort `letter_logs` with a comparator that compares `content` first, and `identifier` second."
        ],
        "approach": "Partition logs into `letter_logs` and `digit_logs` by inspecting the first character after the first space. Sort `letter_logs` by `(content, id)` and concatenate.",
        "pseudocode": "letter_logs = [], digit_logs = []\nfor log in logs:\n    id, content = split_first_space(log)\n    if content[0] is digit: digit_logs.append(log)\n    else: letter_logs.append(log)\nsort letter_logs by (content, id)\nprint letter_logs + digit_logs",
        "explanation": "Splitting takes `O(L)` per log and sorting takes `O(M * L log M)` where `M` is the number of letter-logs and `L` is max log length.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    string dummy;\n    getline(cin, dummy);\n    vector<string> letterLogs, digitLogs;\n    for (int i = 0; i < n; i++) {\n        string line;\n        getline(cin, line);\n        if (!line.empty() && line.back() == '\\r') line.pop_back();\n        size_t pos = line.find(' ');\n        if (isdigit(line[pos + 1])) {\n            digitLogs.push_back(line);\n        } else {\n            letterLogs.push_back(line);\n        }\n    }\n    sort(letterLogs.begin(), letterLogs.end(), [](const string& a, const string& b) {\n        size_t pa = a.find(' '), pb = b.find(' ');\n        string ca = a.substr(pa + 1), cb = b.substr(pb + 1);\n        if (ca != cb) return ca < cb;\n        return a.substr(0, pa) < b.substr(0, pb);\n    });\n    for (const auto& s : letterLogs) cout << s << \"\\n\";\n    for (const auto& s : digitLogs) cout << s << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().splitlines()\n    if not lines:\n        return\n    n = int(lines[0].strip())\n    logs = lines[1:1+n]\n    letter_logs = []\n    digit_logs = []\n    for log in logs:\n        ident, content = log.split(\" \", 1)\n        if content[0].isdigit():\n            digit_logs.append(log)\n        else:\n            letter_logs.append(log)\n    letter_logs.sort(key=lambda l: (l.split(\" \", 1)[1], l.split(\" \", 1)[0]))\n    for l in letter_logs + digit_logs:\n        print(l)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Sorting digit-logs lexicographically instead of keeping their original order.",
            "Forgetting to consume the newline after `cin >> n` before calling `getline` in C++."
        ],
        "timeComplexity": "O(N * L log N)",
        "spaceComplexity": "O(N * L)",
        "tags": [
            "strings",
            "sorting",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-09",
        "levelId": "amz-challenges",
        "title": "Amazon OA 9: K Closest Fulfillment Centers to Customer",
        "difficulty": "medium",
        "order": 9,
        "pattern": "Heap / Custom Sorting by Squared Euclidean Distance",
        "amazonContext": "Frequently asked in Amazon Prime Now / Fresh delivery routing OAs.",
        "description": "Given the 2D coordinates `(x, y)` of `N` Amazon fulfillment centers and an integer `K`, find the `K` closest fulfillment centers to the customer at the origin `(0, 0)`.\n\nThe Euclidean distance to the origin is `sqrt(x^2 + y^2)`. Return the `K` closest points ordered from **closest to farthest** (if two points have the exact same distance, order by `x` ascending, then `y` ascending).\n\n**Input Format:**\n- First line: two integers `N` and `K`\n- Next `N` lines: two space-separated integers `x` and `y`\n\n**Output Format:**\n- Print `K` lines, each containing `x y` of the selected fulfillment centers.",
        "whyThisMatters": "Avoids floating-point precision bugs by comparing exact squared distances `x^2 + y^2` in 64-bit integers.",
        "concepts": [
            "heap",
            "sorting",
            "geometry",
            "amazon oa"
        ],
        "prerequisites": [
            "sorting",
            "heap"
        ],
        "learningObjectives": [
            "Compare Euclidean distances using integer squared distance x^2 + y^2 without sqrt()",
            "Use a heap or custom comparator with tie-breaking"
        ],
        "constraints": [
            "1 <= K <= N <= 10^5",
            "-10^4 <= x, y <= 10^4"
        ],
        "examples": [
            {
                "input": "3 2\n3 3\n5 -1\n-2 4",
                "output": "3 3\n-2 4",
                "explanation": "Squared distances: (3,3)->18, (5,-1)->26, (-2,4)->20. Closest 2 are (3,3) and (-2,4)."
            }
        ],
        "testCases": [
            {
                "id": "amz-c09-tc1",
                "input": "3 2\n3 3\n5 -1\n-2 4",
                "expectedOutput": "3 3\n-2 4",
                "hidden": false
            },
            {
                "id": "amz-c09-tc2",
                "input": "2 1\n1 3\n-2 2",
                "expectedOutput": "-2 2",
                "hidden": false
            },
            {
                "id": "amz-c09-tc3",
                "input": "3 2\n2 -2\n-2 2\n1 1",
                "expectedOutput": "1 1\n-2 2",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<pair<long long, long long>> pts(n);\n    for (int i = 0; i < n; i++) cin >> pts[i].first >> pts[i].second;\n\n    // Sort or use a heap by squared distance x^2 + y^2\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n, k = int(data[0]), int(data[1])\n    pts = []\n    idx = 2\n    for _ in range(n):\n        pts.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n\n    # Sort or use a heap by squared distance x^2 + y^2\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Since `sqrt(a) < sqrt(b) <=> a < b` for non-negative numbers, never compute `sqrt()`! Always compare `x*x + y*y` directly.",
            "Sort points by key `(x*x + y*y, x, y)` and print the first `K` points."
        ],
        "howToThink": [
            "Floating-point `sqrt` is slower and can suffer precision loss on large coordinates. Squared distance `x*x + y*y` is exact.",
            "In C++, `std::partial_sort` or `std::sort` with a custom lambda comparing `(d1, x1, y1) < (d2, x2, y2)` is super clean."
        ],
        "approach": "Order points by tuple `(x^2 + y^2, x, y)` and output the first `K` points.",
        "pseudocode": "sort pts by (x^2 + y^2, x, y)\nfor i from 0 to K - 1:\n    print pts[i].x, pts[i].y",
        "explanation": "Sorting takes `O(N log N)` time (or `O(N log K)` with a max-heap of size `K`).",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<pair<long long, long long>> pts(n);\n    for (int i = 0; i < n; i++) cin >> pts[i].first >> pts[i].second;\n    sort(pts.begin(), pts.end(), [](const auto& a, const auto& b) {\n        long long da = a.first * a.first + a.second * a.second;\n        long long db = b.first * b.first + b.second * b.second;\n        if (da != db) return da < db;\n        if (a.first != b.first) return a.first < b.first;\n        return a.second < b.second;\n    });\n    for (int i = 0; i < k; i++) {\n        cout << pts[i].first << \" \" << pts[i].second << \"\\n\";\n    }\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n, k = int(data[0]), int(data[1])\n    pts = []\n    idx = 2\n    for _ in range(n):\n        pts.append((int(data[idx]), int(data[idx+1])))\n        idx += 2\n    pts.sort(key=lambda p: (p[0] * p[0] + p[1] * p[1], p[0], p[1]))\n    out = [f\"{x} {y}\" for x, y in pts[:k]]\n    print(\"\\n\".join(out))\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using `x ^ 2` (bitwise XOR!) instead of `x * x` in C++ or Python."
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "heap",
            "sorting",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-10",
        "levelId": "amz-challenges",
        "title": "Amazon OA 10: Optimal Partition of Package Strings",
        "difficulty": "medium",
        "order": 10,
        "pattern": "Greedy String Partitioning + Bitmask / Hash Set",
        "amazonContext": "Asked frequently in Amazon SDE Intern OAs (LeetCode 2405 — Amazon Tagged).",
        "description": "Given a string `S` of lowercase English letters representing package routing codes, partition `S` into one or more **contiguous substrings** such that the characters in each substring are **unique** (no character appears more than once in the same substring).\n\nReturn the **minimum number of substrings** in such a partition.\n\n**Input Format:**\n- A single line containing a non-empty string `S`.\n\n**Output Format:**\n- Print a single integer: the minimum number of substrings.",
        "whyThisMatters": "A classic Amazon greedy string problem: extending the current substring as far as possible until a duplicate character forces a split is provably optimal.",
        "concepts": [
            "greedy",
            "strings",
            "hash set",
            "bit manipulation",
            "amazon oa"
        ],
        "prerequisites": [
            "strings",
            "hash maps"
        ],
        "learningObjectives": [
            "Apply the greedy choice property to string partitioning",
            "Track seen characters in the current partition using a 26-bit integer mask or boolean array"
        ],
        "constraints": [
            "1 <= |S| <= 10^5"
        ],
        "examples": [
            {
                "input": "abacaba",
                "output": "4",
                "explanation": "Optimal partition is (\"ab\", \"ac\", \"ab\", \"a\") -> 4 substrings."
            }
        ],
        "testCases": [
            {
                "id": "amz-c10-tc1",
                "input": "abacaba",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "amz-c10-tc2",
                "input": "ssssss",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "amz-c10-tc3",
                "input": "abcdefg",
                "expectedOutput": "1",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    if (!(cin >> s)) return 0;\n\n    // Greedily extend current substring until a character repeats\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n\n    # Greedily extend current substring until a character repeats\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Start with `count = 1` and an empty `seen` set (or `mask = 0`).",
            "Scan each character `c` in `s`: if `c` is already in `seen`, we MUST start a new substring right here (`count++` and clear `seen`), then add `c` to `seen`."
        ],
        "howToThink": [
            "Should we ever cut a substring earlier than necessary? No! Cutting earlier only leaves more characters for the remaining suffix, which can never reduce the number of future splits.",
            "So we greedily pack characters into the current substring until we see a character that already appeared in the current substring."
        ],
        "approach": "Scan left-to-right maintaining a set/bitmask of characters in the current substring. When a duplicate is encountered, increment substring count and reset the set.",
        "pseudocode": "seen = set(), count = 1\nfor c in s:\n    if c in seen:\n        count += 1\n        seen.clear()\n    seen.add(c)\nprint(count)",
        "explanation": "Runs in a single pass `O(N)` time and `O(1)` space (at most 26 lowercase letters).",
        "cppSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    string s;\n    if (!(cin >> s)) return 0;\n    int mask = 0, count = 1;\n    for (char c : s) {\n        int bit = 1 << (c - 'a');\n        if (mask & bit) {\n            count++;\n            mask = 0;\n        }\n        mask |= bit;\n    }\n    cout << count << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if not s:\n        return\n    seen = set()\n    count = 1\n    for c in s:\n        if c in seen:\n            count += 1\n            seen.clear()\n        seen.add(c)\n    print(count)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Forgetting to add the character `c` into the newly cleared `seen` set after starting a new partition!"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "greedy",
            "strings",
            "amazon-oa",
            "medium"
        ]
    },
    {
        "baseId": "amz-oa-11",
        "levelId": "amz-challenges",
        "title": "Amazon OA 11: Trapping Rain Water on Warehouse Roofs",
        "difficulty": "hard",
        "order": 11,
        "pattern": "Two Pointers (Opposite Ends) with Running Maxima",
        "amazonContext": "One of Amazon’s top 3 most asked Hard interview questions across OAs and final rounds.",
        "description": "Given `N` non-negative integers representing an elevation map of warehouse roof sections where the width of each section is `1`, compute how much **total water** can be trapped after heavy rain.\n\n**Input Format:**\n- First line: integer `N`\n- Second line: `N` space-separated non-negative integers representing `height`\n\n**Output Format:**\n- Print a single 64-bit integer: total units of trapped water.",
        "whyThisMatters": "Trapping Rain Water is famous at Amazon because you can solve it in `O(N)` time and `O(1)` auxiliary space using two pointers `left` and `right` tracking `leftMax` and `rightMax`.",
        "concepts": [
            "two pointers",
            "arrays",
            "greedy",
            "amazon oa"
        ],
        "prerequisites": [
            "two pointers",
            "arrays"
        ],
        "learningObjectives": [
            "Understand that water at index i is min(maxLeft, maxRight) - height[i]",
            "Optimize space from O(N) prefix/suffix arrays to O(1) using two pointers"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "0 <= height[i] <= 10^5"
        ],
        "examples": [
            {
                "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
                "output": "6",
                "explanation": "6 units of rain water are trapped between the elevation bars."
            }
        ],
        "testCases": [
            {
                "id": "amz-c11-tc1",
                "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "amz-c11-tc2",
                "input": "6\n4 2 0 3 2 5",
                "expectedOutput": "9",
                "hidden": false
            },
            {
                "id": "amz-c11-tc3",
                "input": "4\n5 4 3 2",
                "expectedOutput": "0",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> h(n);\n    for (int i = 0; i < n; i++) cin >> h[i];\n\n    // Use two pointers (left, right) with leftMax and rightMax in O(1) space\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    h = [int(x) for x in data[1:1+n]]\n\n    # Use two pointers (left, right) with left_max and right_max in O(1) space\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "Water trapped above index `i` depends on `min(max_left, max_right) - h[i]`.",
            "Maintain `left = 0`, `right = n - 1`, `leftMax = 0`, `rightMax = 0`. Whenever `h[left] <= h[right]`, the left side is the bottleneck! Update `leftMax = max(leftMax, h[left])`, add `leftMax - h[left]` to `water`, and `left++`. Otherwise do the mirror on `right`."
        ],
        "howToThink": [
            "Why don’t we need to know the exact `max_right` when `h[left] <= h[right]`? Because we already know there is a wall on the right (`h[right]`) at least as tall as `leftMax`, so `min(leftMax, true_right_max)` is guaranteed to be `leftMax`!"
        ],
        "approach": "Use two pointers `left` and `right` moving inward, always advancing the pointer with the smaller height and accumulating trapped water against its running maximum.",
        "pseudocode": "left = 0, right = n - 1\nleftMax = 0, rightMax = 0, water = 0\nwhile left <= right:\n    if h[left] <= h[right]:\n        leftMax = max(leftMax, h[left])\n        water += leftMax - h[left]\n        left += 1\n    else:\n        rightMax = max(rightMax, h[right])\n        water += rightMax - h[right]\n        right -= 1\nprint(water)",
        "explanation": "Runs in a single pass `O(N)` time and `O(1)` auxiliary space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> h(n);\n    for (int i = 0; i < n; i++) cin >> h[i];\n    int left = 0, right = n - 1;\n    long long leftMax = 0, rightMax = 0, water = 0;\n    while (left <= right) {\n        if (h[left] <= h[right]) {\n            leftMax = max(leftMax, h[left]);\n            water += leftMax - h[left];\n            left++;\n        } else {\n            rightMax = max(rightMax, h[right]);\n            water += rightMax - h[right];\n            right--;\n        }\n    }\n    cout << water << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    h = [int(x) for x in data[1:1+n]]\n    left, right = 0, n - 1\n    left_max = right_max = water = 0\n    while left <= right:\n        if h[left] <= h[right]:\n            if h[left] > left_max:\n                left_max = h[left]\n            else:\n                water += left_max - h[left]\n            left += 1\n        else:\n            if h[right] > right_max:\n                right_max = h[right]\n            else:\n                water += right_max - h[right]\n            right -= 1\n    print(water)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Scanning left and right from every index i in O(N^2) time."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "tags": [
            "two-pointers",
            "arrays",
            "amazon-oa",
            "hard"
        ]
    },
    {
        "baseId": "amz-oa-12",
        "levelId": "amz-challenges",
        "title": "Amazon OA 12: Sum of Subarray Minimums (System Vulnerability)",
        "difficulty": "hard",
        "order": 12,
        "pattern": "Monotonic Stack + Contribution Technique",
        "amazonContext": "Famous hard Amazon OA question (\"Total System Vulnerability\" / \"Sum of Subarray Minimums\").",
        "description": "Amazon security engineers define the **vulnerability** of a contiguous group of servers `A[L..R]` as the **minimum** security rating in that subarray: `min(A[L..R])`.\n\nGiven an array `A` of `N` server security ratings, compute the **sum of vulnerabilities across all possible contiguous subarrays**, modulo `10^9 + 7`.\n\n**Input Format:**\n- First line: integer `N`\n- Second line: `N` space-separated integers representing `A`\n\n**Output Format:**\n- Print a single integer: the sum of subarray minimums modulo `1000000007`.",
        "whyThisMatters": "Amazon OA Part 1 Question 2 frequently tests the \"Contribution Technique\" with Monotonic Stacks: instead of enumerating all `O(N^2)` subarrays, count in how many subarrays each `A[i]` is the minimum!",
        "concepts": [
            "monotonic stack",
            "stack",
            "arrays",
            "combinatorics",
            "amazon oa"
        ],
        "prerequisites": [
            "stack",
            "arrays"
        ],
        "learningObjectives": [
            "Use a monotonic increasing stack to find Previous Smaller Element and Next Smaller Element in O(N)",
            "Apply strict vs non-strict inequalities (< on left, <= on right) to prevent double-counting duplicate minimums"
        ],
        "constraints": [
            "1 <= N <= 10^5",
            "1 <= A[i] <= 10^5"
        ],
        "examples": [
            {
                "input": "4\n3 1 2 4",
                "output": "17",
                "explanation": "Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum = 17."
            }
        ],
        "testCases": [
            {
                "id": "amz-c12-tc1",
                "input": "4\n3 1 2 4",
                "expectedOutput": "17",
                "hidden": false
            },
            {
                "id": "amz-c12-tc2",
                "input": "5\n11 81 94 43 3",
                "expectedOutput": "444",
                "hidden": false
            },
            {
                "id": "amz-c12-tc3",
                "input": "3\n2 2 2",
                "expectedOutput": "12",
                "hidden": true
            }
        ],
        "cppStarterCode": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n\n    // Find left[i] and right[i] using a monotonic increasing stack\n    \n    return 0;\n}",
        "pythonStarterCode": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n\n    # Find left[i] and right[i] using a monotonic increasing stack\n\nif __name__ == \"__main__\":\n    solve()",
        "hints": [
            "For each index `i`, find `left[i]` = distance to the previous strictly smaller element (`A[p] < A[i]`), and `right[i]` = distance to the next smaller-or-equal element (`A[q] <= A[i]`).",
            "Then `A[i]` is the minimum of exactly `left[i] * right[i]` subarrays, contributing `A[i] * left[i] * right[i]` to the total sum!"
        ],
        "howToThink": [
            "Enumerating all subarrays takes `O(N^2)`. Instead, ask: \"For how many subarrays `[L, R]` is `A[i]` the minimum?\"",
            "If we use `<` on the left and `<=` on the right when finding nearest smaller elements, even arrays with duplicate elements like `[2, 2, 2]` are counted without any overlap!"
        ],
        "approach": "Use two monotonic stack passes to compute `left[i]` (distance to previous `< A[i]`) and `right[i]` (distance to next `<= A[i]`), then sum `A[i] * left[i] * right[i] % MOD`.",
        "pseudocode": "MOD = 10^9 + 7\nleft[i] = i - prev_smaller_index(i)   // strictly smaller (<)\nright[i] = next_smaller_or_eq_index(i) - i  // smaller or equal (<=)\nans = sum(A[i] * left[i] * right[i]) % MOD",
        "explanation": "Each index is pushed and popped from the stack once in each pass, running in `O(N)` time and `O(N)` space.",
        "cppSolution": "#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<long long> a(n);\n    for (int i = 0; i < n; i++) cin >> a[i];\n\n    vector<long long> left(n), right(n);\n    stack<int> st;\n    for (int i = 0; i < n; i++) {\n        while (!st.empty() && a[st.top()] >= a[i]) st.pop();\n        left[i] = st.empty() ? (i + 1) : (i - st.top());\n        st.push(i);\n    }\n    while (!st.empty()) st.pop();\n    for (int i = n - 1; i >= 0; i--) {\n        while (!st.empty() && a[st.top()] > a[i]) st.pop();\n        right[i] = st.empty() ? (n - i) : (st.top() - i);\n        st.push(i);\n    }\n    const long long MOD = 1000000007LL;\n    long long ans = 0;\n    for (int i = 0; i < n; i++) {\n        long long ways = (left[i] * right[i]) % MOD;\n        ans = (ans + (a[i] % MOD) * ways) % MOD;\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
        "pythonSolution": "import sys\n\ndef solve():\n    data = sys.stdin.read().split()\n    if not data:\n        return\n    n = int(data[0])\n    a = [int(x) for x in data[1:1+n]]\n    left = [0] * n\n    right = [0] * n\n    st = []\n    for i in range(n):\n        while st and a[st[-1]] >= a[i]:\n            st.pop()\n        left[i] = i + 1 if not st else i - st[-1]\n        st.append(i)\n    st.clear()\n    for i in range(n - 1, -1, -1):\n        while st and a[st[-1]] > a[i]:\n            st.pop()\n        right[i] = n - i if not st else st[-1] - i\n        st.append(i)\n    mod = 1000000007\n    ans = 0\n    for i in range(n):\n        ans = (ans + a[i] * left[i] * right[i]) % mod\n    print(ans)\n\nif __name__ == \"__main__\":\n    solve()",
        "commonMistakes": [
            "Using strict `<` on both sides, which double-counts subarrays when duplicate minimums exist (e.g. `[2, 2, 2]`)."
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "tags": [
            "monotonic-stack",
            "arrays",
            "amazon-oa",
            "hard"
        ]
    }
];
