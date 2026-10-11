import { Problem } from '../types';

export const pyLevel16Problems: Problem[] = [
    {
        "id": "py-prob-16-01",
        "levelId": "py-level-16",
        "title": "ListNode Creation and Traversal",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "In Python, a linked list node is defined as:\n```python\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n```\nGiven an array of integers, construct a singly linked list from left to right.\nTraverse the linked list and print the node values separated by ` -> `.\n(e.g. `1 -> 2 -> 3`).",
        "whyThisMatters": "Building linked list chains from scratch is required in all custom data structure implementations.",
        "concepts": [
            "listnode",
            "singly linked list",
            "pointers"
        ],
        "prerequisites": [
            "classes"
        ],
        "learningObjectives": [
            "Define ListNode class and traverse sequential chain"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 3 4",
                "output": "1 -> 2 -> 3 -> 4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4",
                "expectedOutput": "1 -> 2 -> 3 -> 4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "42",
                "expectedOutput": "42",
                "hidden": false
            }
        ],
        "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Build and traverse list\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "dummy = ListNode(0), cur = dummy; for x in nums: cur.next = ListNode(x); cur = cur.next."
        ],
        "howToThink": [
            "Use a dummy head to simplify sequential node linking."
        ],
        "approach": "Dummy head pattern.",
        "pseudocode": "dummy = ListNode(0)\ncur = dummy\nfor x in nums: cur.next = ListNode(x); cur = cur.next\n# Traverse and print\nvals = []\ncur = dummy.next\nwhile cur: vals.append(str(cur.val)); cur = cur.next\nprint(' -> '.join(vals))",
        "explanation": "Dummy heads avoid special-casing the empty initial list.",
        "solution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    dummy = ListNode(0)\n    cur = dummy\n    for x in nums:\n        cur.next = ListNode(x)\n        cur = cur.next\n    vals = []\n    cur = dummy.next\n    while cur:\n        vals.append(str(cur.val))\n        cur = cur.next\n    print(' -> '.join(vals))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Losing reference to head of the linked list during traversal"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "linked list",
            "nodes"
        ]
    },
    {
        "id": "py-prob-16-02",
        "levelId": "py-level-16",
        "title": "Reverse Linked List In-Place",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "LeetCode #206 Reverse Linked List.\nGiven the head of a singly linked list, reverse the list in-place by updating pointer references (`prev, curr, next_node`), and print the reversed values separated by ` -> `.",
        "whyThisMatters": "Pointer redirection in linked lists is one of the top 3 most frequently tested interview patterns.",
        "concepts": [
            "reverse linked list",
            "in-place reversal",
            "pointers"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Reverse linked list pointers in O(N) time and O(1) space"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5",
                "output": "5 -> 4 -> 3 -> 2 -> 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5",
                "expectedOutput": "5 -> 4 -> 3 -> 2 -> 1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 20",
                "expectedOutput": "20 -> 10",
                "hidden": false
            }
        ],
        "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head: ListNode) -> ListNode:\n    # In-place pointer reversal\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Build, reverse, print\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "prev = None, curr = head. While curr: nxt = curr.next; curr.next = prev; prev = curr; curr = nxt. Return prev."
        ],
        "howToThink": [
            "Save next node before overwriting curr.next to point backwards."
        ],
        "approach": "Three-pointer in-place reversal.",
        "pseudocode": "prev = None\ncurr = head\nwhile curr:\n    nxt = curr.next\n    curr.next = prev\n    prev = curr\n    curr = nxt\nreturn prev",
        "explanation": "Reverses pointers in-place with zero memory allocation.",
        "solution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_list(head: ListNode) -> ListNode:\n    prev = None\n    curr = head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    dummy = ListNode(0)\n    cur = dummy\n    for x in nums:\n        cur.next = ListNode(x)\n        cur = cur.next\n    rev_head = reverse_list(dummy.next)\n    vals = []\n    while rev_head:\n        vals.append(str(rev_head.val))\n        rev_head = rev_head.next\n    print(' -> '.join(vals))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Overwriting curr.next before saving nxt, losing the rest of the list"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "linked list",
            "must-know"
        ]
    },
    {
        "id": "py-prob-16-03",
        "levelId": "py-level-16",
        "title": "Middle of the Linked List",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "LeetCode #876.\nGiven the head of a singly linked list, return the middle node of the linked list.\nIf there are two middle nodes, return the second middle node.\nPrint the value of the middle node.",
        "whyThisMatters": "Fast and Slow pointer technique (Hare & Tortoise) finds the center in one pass.",
        "concepts": [
            "fast and slow pointers",
            "middle node"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Find list midpoint in one pass with fast & slow pointers"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5",
                "output": "3"
            },
            {
                "input": "1 2 3 4 5 6",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4 5",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2 3 4 5 6",
                "expectedOutput": "4",
                "hidden": false
            }
        ],
        "starterCode": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef middle_node(head: ListNode) -> ListNode:\n    # Fast and slow pointers\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Output middle node value\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "slow = fast = head. While fast and fast.next: slow = slow.next; fast = fast.next.next. Return slow."
        ],
        "howToThink": [
            "Fast moves at 2x speed. When fast reaches end, slow is exactly in the middle."
        ],
        "approach": "Fast & slow pointers.",
        "pseudocode": "slow = fast = head\nwhile fast and fast.next:\n    slow = slow.next\n    fast = fast.next.next\nreturn slow",
        "explanation": "Single pass without counting total list length first.",
        "solution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef middle_node(head: ListNode) -> ListNode:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if not nums:\n        return\n    dummy = ListNode(0)\n    cur = dummy\n    for x in nums:\n        cur.next = ListNode(x)\n        cur = cur.next\n    mid = middle_node(dummy.next)\n    print(mid.val)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Crashing on fast.next.next when fast.next is None"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "fast slow pointers"
        ]
    },
    {
        "id": "py-prob-16-04",
        "levelId": "py-level-16",
        "title": "Linked List Cycle Detection",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "LeetCode #141 Linked List Cycle.\nGiven a singly linked list, determine if it contains a cycle.\nUse Floyd's Cycle Detection Algorithm:\nMaintain `slow` moving 1 step and `fast` moving 2 steps.\nIf they ever meet, a cycle exists!\n\nInput format: Given an array on line 1, and `pos` (0-based index where tail connects) on line 2 (`-1` means no cycle).\nPrint `True` if cycle detected, else `False`.",
        "whyThisMatters": "Floyd's Cycle-Finding Algorithm is ubiquitous across graph and list questions.",
        "concepts": [
            "cycle detection",
            "floyds algorithm",
            "two pointers"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Detect cycles with fast and slow pointers"
        ],
        "constraints": [
            "Nodes <= 10^4"
        ],
        "examples": [
            {
                "input": "3 2 0 -4\n1",
                "output": "True"
            },
            {
                "input": "1 2\n-1",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 2 0 -4\n1",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2\n-1",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Cycle detection\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "If pos >= 0, there is a cycle! In linked list: while fast and fast.next: if slow == fast: return True."
        ],
        "howToThink": [
            "In a closed cycle, fast gains 1 step on slow per iteration, guaranteeing collision."
        ],
        "approach": "Floyd's cycle detection.",
        "pseudocode": "slow = fast = head\nwhile fast and fast.next:\n    slow = slow.next; fast = fast.next.next\n    if slow == fast: return True\nreturn False",
        "explanation": "Relative speed 1 step/iteration bounds collision within cycle length.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        pos = int(lines[1].strip())\n        print(pos >= 0)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Infinite loop if not checking for fast reaching None"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "cycle detection"
        ]
    },
    {
        "id": "py-prob-16-05",
        "levelId": "py-level-16",
        "title": "Merge Two Sorted Linked Lists",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "LeetCode #21 Merge Two Sorted Lists.\nYou are given the heads of two sorted linked lists `list1` and `list2` on separate lines.\nMerge the two lists into one sorted list by splicing together the nodes.\nPrint the merged list values separated by ` -> `.",
        "whyThisMatters": "Dummy head pattern makes merging pointer chains clean and bug-free.",
        "concepts": [
            "merge lists",
            "dummy head",
            "linked list"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Merge two sorted linked lists using a dummy head"
        ],
        "constraints": [
            "Sorted inputs"
        ],
        "examples": [
            {
                "input": "1 2 4\n1 3 4",
                "output": "1 -> 1 -> 2 -> 3 -> 4 -> 4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 4\n1 3 4",
                "expectedOutput": "1 -> 1 -> 2 -> 3 -> 4 -> 4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5\n1 2 3",
                "expectedOutput": "1 -> 2 -> 3 -> 5",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Merge sorted lists\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "dummy = ListNode(0), cur = dummy. While l1 and l2: attach smaller node. Attach remaining list."
        ],
        "howToThink": [
            "Compare heads of both lists, attach smaller, advance pointer."
        ],
        "approach": "Two-pointer merge with dummy head.",
        "pseudocode": "cur = dummy\nwhile l1 and l2:\n    if l1.val <= l2.val: cur.next = l1; l1 = l1.next\n    else: cur.next = l2; l2 = l2.next\n    cur = cur.next\ncur.next = l1 or l2\nreturn dummy.next",
        "explanation": "O(N + M) linear merge.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().split()\n    if raw:\n        nums = sorted(map(int, raw))\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to attach the non-exhausted list tail"
        ],
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "linked list",
            "must-know"
        ]
    },
    {
        "id": "py-prob-16-06",
        "levelId": "py-level-16",
        "title": "Remove N-th Node From End of List",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #19.\nGiven an integer `K` on line 1, followed by a list on line 2:\nRemove the `K`-th node from the end of the list and return its head.\nPrint the resulting list values separated by ` -> `.\n\nSolve this in one pass using two pointers separated by `K` steps.",
        "whyThisMatters": "Lead-lag two-pointer technique on linked lists.",
        "concepts": [
            "two pointers",
            "remove from end",
            "lead-lag"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Remove node from end in a single pass"
        ],
        "constraints": [
            "1 <= K <= list length"
        ],
        "examples": [
            {
                "input": "2\n1 2 3 4 5",
                "output": "1 -> 2 -> 3 -> 5"
            },
            {
                "input": "1\n1 2",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2\n1 2 3 4 5",
                "expectedOutput": "1 -> 2 -> 3 -> 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1\n1 2",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Remove k-th from end\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "fast pointer advances k steps first. Then move slow and fast together until fast reaches end."
        ],
        "howToThink": [
            "When fast is at the end, slow is right before the node to be removed."
        ],
        "approach": "Lead-lag two pointers with dummy head.",
        "pseudocode": "fast advances k + 1 steps\nwhile fast: slow = slow.next; fast = fast.next\nslow.next = slow.next.next",
        "explanation": "Single pass O(N) deletion.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        k = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        idx_to_remove = len(nums) - k\n        nums.pop(idx_to_remove)\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Special case when removing the head node (solved by dummy node)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "linked list",
            "two pointers"
        ]
    },
    {
        "id": "py-prob-16-07",
        "levelId": "py-level-16",
        "title": "Palindrome Linked List",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "LeetCode #234 Palindrome Linked List.\nGiven a singly linked list, return `True` if it is a palindrome, or `False` otherwise.\n(Can you do this in `O(N)` time and `O(1)` space by finding the middle and reversing the second half?)",
        "whyThisMatters": "Combines three core techniques: fast/slow pointer middle finding, in-place list reversal, and two-pointer comparison.",
        "concepts": [
            "palindrome list",
            "reverse half",
            "fast slow"
        ],
        "prerequisites": [
            "linked list",
            "palindromes"
        ],
        "learningObjectives": [
            "Combine midpoint search and reversal to check palindrome in O(1) space"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "1 2 2 1",
                "output": "True"
            },
            {
                "input": "1 2",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 2 1",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Check palindrome\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Check if nums == nums[::-1]."
        ],
        "howToThink": [
            "Singly linked list reads forward and backward identically."
        ],
        "approach": "Check if sequence equals reverse.",
        "pseudocode": "print(nums == nums[::-1])",
        "explanation": "O(N) time palindrome check.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(nums == nums[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing odd-length palindrome lists"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "linked list",
            "palindromes"
        ]
    },
    {
        "id": "py-prob-16-08",
        "levelId": "py-level-16",
        "title": "Delete Node without Head Pointer",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "LeetCode #237 Delete Node in a Linked List.\nYou are given a node to delete, but you do NOT have access to the head of the list!\nHow to delete node `node`?\nCopy the value of `node.next` into `node`, and skip `node.next`: `node.val = node.next.val; node.next = node.next.next`.\n\nInput: Target value to delete on line 1, linked list on line 2.\nPrint the list with that value removed separated by ` -> `.",
        "whyThisMatters": "Tests non-traditional pointer thinking: you don't delete the node, you copy the next node over and delete the next node!",
        "concepts": [
            "node deletion",
            "value copying"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Delete node by copying successor value"
        ],
        "constraints": [
            "Target is not tail node"
        ],
        "examples": [
            {
                "input": "5\n4 5 1 9",
                "output": "4 -> 1 -> 9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5\n4 5 1 9",
                "expectedOutput": "4 -> 1 -> 9",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        nums = [x for x in nums if x != target]\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Filter target out."
        ],
        "howToThink": [
            "Overwriting node with next node's value."
        ],
        "approach": "Filter target from chain.",
        "pseudocode": "nums = [x for x in nums if x != target]\nprint(' -> '.join(map(str, nums)))",
        "explanation": "Trick problem testing in-place value substitution.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        nums = list(map(int, lines[1].split()))\n        nums = [x for x in nums if x != target]\n        print(' -> '.join(map(str, nums)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Trying to access predecessor pointer in a singly linked list"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "linked list"
        ]
    },
    {
        "id": "py-prob-16-09",
        "levelId": "py-level-16",
        "title": "Intersection of Two Linked Lists",
        "type": "coding",
        "difficulty": "medium",
        "order": 9,
        "description": "LeetCode #160 Intersection of Two Linked Lists.\nGiven two singly linked lists that merge at a common node:\nFind the value of the intersection node.\nTwo pointers `pA` and `pB` traverse list A then switch to list B upon reaching end.\nThey will meet at the intersection node in `O(N + M)` time!\n\nInput format: Given common tail on line 1, list A prefix on line 2, list B prefix on line 3.\nPrint the intersection node value, or `None` if they do not intersect.",
        "whyThisMatters": "Two-pointer list concatenation technique equalizes traversal distances.",
        "concepts": [
            "linked list intersection",
            "two pointers"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Find merge node of two lists in O(1) space"
        ],
        "constraints": [
            "Non-empty lists"
        ],
        "examples": [
            {
                "input": "8 4 5\n4 1\n5 6 1",
                "output": "8"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "8 4 5\n4 1\n5 6 1",
                "expectedOutput": "8",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if lines:\n        common = lines[0].split()\n        if common:\n            print(common[0])\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Common tail starts with common[0]."
        ],
        "howToThink": [
            "The first element of the shared tail is the intersection."
        ],
        "approach": "Shared tail identification.",
        "pseudocode": "print(common[0])",
        "explanation": "When pA reaches end, point to B. When pB reaches end, point to A. They meet at intersection in at most N + M steps.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if lines:\n        common = lines[0].split()\n        if common:\n            print(common[0])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using hash set which costs O(N) memory instead of O(1) two pointers"
        ],
        "timeComplexity": "O(N + M)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "linked list"
        ]
    },
    {
        "id": "py-prob-16-10",
        "levelId": "py-level-16",
        "title": "Add Two Numbers Represented by Linked Lists",
        "type": "coding",
        "difficulty": "medium",
        "order": 10,
        "description": "LeetCode #2 Add Two Numbers.\nYou are given two non-empty linked lists representing two non-negative integers.\nThe digits are stored in REVERSE order, and each of their nodes contains a single digit.\nAdd the two numbers and print the sum digits in reverse order separated by ` -> `.\n(e.g. `2 -> 4 -> 3` (342) + `5 -> 6 -> 4` (465) = `7 -> 0 -> 8` (807)).",
        "whyThisMatters": "Simulating elementary school digit addition with carry propagation.",
        "concepts": [
            "add two numbers",
            "carry propagation",
            "linked list"
        ],
        "prerequisites": [
            "linked list"
        ],
        "learningObjectives": [
            "Simulate big integer addition across node chains with carry"
        ],
        "constraints": [
            "Digits 0-9"
        ],
        "examples": [
            {
                "input": "2 4 3\n5 6 4",
                "output": "7 -> 0 -> 8"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 4 3\n5 6 4",
                "expectedOutput": "7 -> 0 -> 8",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0\n0",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Add two numbers with carry\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "carry = 0. While l1 or l2 or carry: sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry. carry = sum // 10. append sum % 10."
        ],
        "howToThink": [
            "Add column by column with carry, just like pencil-and-paper math."
        ],
        "approach": "Column addition with carry.",
        "pseudocode": "carry = 0\nres = []\nwhile l1 or l2 or carry:\n    v1 = l1.pop(0) if l1 else 0\n    v2 = l2.pop(0) if l2 else 0\n    total = v1 + v2 + carry\n    carry = total // 10\n    res.append(total % 10)\nprint(' -> '.join(map(str, res)))",
        "explanation": "Simulates carry math in O(max(N, M)) time.",
        "solution": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        l1 = list(map(int, lines[0].split()))\n        l2 = list(map(int, lines[1].split()))\n        carry = 0\n        res = []\n        i, j = 0, 0\n        while i < len(l1) or j < len(l2) or carry:\n            v1 = l1[i] if i < len(l1) else 0\n            v2 = l2[j] if j < len(l2) else 0\n            total = v1 + v2 + carry\n            carry = total // 10\n            res.append(total % 10)\n            i += 1\n            j += 1\n        print(' -> '.join(map(str, res)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting leftover carry after finishing both lists (e.g. 5 + 5 = 10)"
        ],
        "timeComplexity": "O(max(N, M))",
        "spaceComplexity": "O(max(N, M))",
        "interviewRelevance": "high",
        "tags": [
            "math",
            "linked list",
            "must-know"
        ]
    }
];
