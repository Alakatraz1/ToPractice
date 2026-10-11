import { Problem } from '../types';

export const pyLevel21Problems: Problem[] = [
    {
        "id": "py-prob-21-01",
        "levelId": "py-level-21",
        "title": "Binary Tree Inorder Traversal",
        "type": "coding",
        "difficulty": "easy",
        "order": 1,
        "description": "LeetCode #94 Binary Tree Inorder Traversal.\nGiven the root of a binary tree, return the inorder traversal of its nodes' values.\nInorder traversal visits `Left Subtree -> Root -> Right Subtree`.\n\nInput format: Given level-order representation of tree on one line (`null` represents missing child):\nPrint inorder node values space-separated.",
        "whyThisMatters": "Inorder traversal of a Binary Search Tree (BST) visits nodes in strictly sorted ascending order.",
        "concepts": [
            "binary tree",
            "inorder traversal",
            "dfs"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Implement recursive/iterative inorder traversal"
        ],
        "constraints": [
            "Nodes <= 1000"
        ],
        "examples": [
            {
                "input": "1 null 2 3",
                "output": "1 3 2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 null 2 3",
                "expectedOutput": "1 3 2",
                "hidden": false
            }
        ],
        "starterCode": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Inorder traversal\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "def inorder(node): if not node: return []; return inorder(node.left) + [node.val] + inorder(node.right)."
        ],
        "howToThink": [
            "Left, then Root, then Right."
        ],
        "approach": "Recursive DFS inorder.",
        "pseudocode": "def inorder(root):\n    if not root: return []\n    return inorder(root.left) + [root.val] + inorder(root.right)",
        "explanation": "Standard recursive traversal.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef inorder(node):\n    if not node: return []\n    return inorder(node.left) + [node.val] + inorder(node.right)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(*inorder(root))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Visiting root before left child"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "inorder"
        ]
    },
    {
        "id": "py-prob-21-02",
        "levelId": "py-level-21",
        "title": "Preorder & Postorder Traversals",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "Given a binary tree:\n1. Print its Preorder traversal (`Root -> Left -> Right`) on line 1.\n2. Print its Postorder traversal (`Left -> Right -> Root`) on line 2.",
        "whyThisMatters": "Preorder is used to serialize/clone trees; Postorder is used for bottom-up calculation (like height).",
        "concepts": [
            "preorder",
            "postorder",
            "dfs"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Distinguish root placement in preorder vs postorder"
        ],
        "constraints": [
            "Level order input"
        ],
        "examples": [
            {
                "input": "1 2 3",
                "output": "1 2 3\n2 3 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3",
                "expectedOutput": "1 2 3\n2 3 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    # Preorder and postorder\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "preorder: root, left, right. postorder: left, right, root."
        ],
        "howToThink": [
            "Preorder puts root first. Postorder puts root last."
        ],
        "approach": "DFS traversals.",
        "pseudocode": "def pre(r): return [r.val] + pre(r.left) + pre(r.right) if r else []\ndef post(r): return post(r.left) + post(r.right) + [r.val] if r else []",
        "explanation": "Depth-first tree traversal patterns.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef preorder(r):\n    if not r: return []\n    return [r.val] + preorder(r.left) + preorder(r.right)\n\ndef postorder(r):\n    if not r: return []\n    return postorder(r.left) + postorder(r.right) + [r.val]\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(*preorder(root))\n    print(*postorder(root))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Swapping left and right child order"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "dfs"
        ]
    },
    {
        "id": "py-prob-21-03",
        "levelId": "py-level-21",
        "title": "Maximum Depth of Binary Tree",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "LeetCode #104 Maximum Depth of Binary Tree.\nGiven the root of a binary tree, return its maximum depth.\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n```python\ndef max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n```\nPrint the maximum depth integer.",
        "whyThisMatters": "The canonical postorder height computation.",
        "concepts": [
            "max depth",
            "tree height",
            "postorder"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Compute tree depth using bottom-up recursion"
        ],
        "constraints": [
            "Nodes <= 10^4"
        ],
        "examples": [
            {
                "input": "3 9 20 null null 15 7",
                "output": "3"
            },
            {
                "input": "1 null 2",
                "output": "2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 9 20 null null 15 7",
                "expectedOutput": "3",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 null 2",
                "expectedOutput": "2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Compute max depth\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "max_depth(root) = 1 + max(max_depth(left), max_depth(right))"
        ],
        "howToThink": [
            "Depth of tree is 1 plus max depth of its two subtrees."
        ],
        "approach": "Postorder height calculation.",
        "pseudocode": "def max_depth(r):\n    if not r: return 0\n    return 1 + max(max_depth(r.left), max_depth(r.right))",
        "explanation": "Calculates height recursively.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef max_depth(root):\n    if not root: return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(max_depth(root))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Returning 0 for single root node (should be 1)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(H)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "must-know"
        ]
    },
    {
        "id": "py-prob-21-04",
        "levelId": "py-level-21",
        "title": "Invert Binary Tree",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "LeetCode #226 Invert Binary Tree.\nGiven the root of a binary tree, invert the tree (swap left and right children recursively), and return its root.\nPrint the level-order traversal of the inverted tree space-separated.",
        "whyThisMatters": "Max Howell's famous tweet about Google: 'Google: 90% of our engineers use the software you wrote (Homebrew), but you can't invert a binary tree on a whiteboard so fuck off.'",
        "concepts": [
            "invert tree",
            "mirror binary tree",
            "tree manipulation"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Swap child pointers recursively"
        ],
        "constraints": [
            "Nodes <= 100"
        ],
        "examples": [
            {
                "input": "4 2 7 1 3 6 9",
                "output": "4 7 2 9 6 3 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "4 2 7 1 3 6 9",
                "expectedOutput": "4 7 2 9 6 3 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Invert binary tree\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "root.left, root.right = invert(root.right), invert(root.left)"
        ],
        "howToThink": [
            "Swap left and right children, then recursively invert both."
        ],
        "approach": "Recursive child pointer swap.",
        "pseudocode": "def invert(r):\n    if not r: return None\n    r.left, r.right = invert(r.right), invert(r.left)\n    return r",
        "explanation": "Mirrors tree structure in O(N) time.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef invert(r):\n    if not r: return None\n    r.left, r.right = invert(r.right), invert(r.left)\n    return r\n\ndef level_order(r):\n    if not r: return []\n    q = deque([r])\n    res = []\n    while q:\n        curr = q.popleft()\n        res.append(curr.val)\n        if curr.left: q.append(curr.left)\n        if curr.right: q.append(curr.right)\n    return res\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    invert(root)\n    print(*level_order(root))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Overwriting r.left before inverting r.right"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(H)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "classic"
        ]
    },
    {
        "id": "py-prob-21-05",
        "levelId": "py-level-21",
        "title": "Symmetric Tree (Mirror Reflection)",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "LeetCode #101 Symmetric Tree.\nGiven the root of a binary tree, check whether it is a mirror of itself (i.e. symmetric around its center).\nPrint `True` if symmetric, else `False`.",
        "whyThisMatters": "Dual recursive traversal comparing `t1.left` with `t2.right` and `t1.right` with `t2.left`.",
        "concepts": [
            "symmetric tree",
            "dual dfs",
            "mirror check"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Compare two subtrees as mirror reflections"
        ],
        "constraints": [
            "Nodes <= 1000"
        ],
        "examples": [
            {
                "input": "1 2 2 3 4 4 3",
                "output": "True"
            },
            {
                "input": "1 2 2 null 3 null 3",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 2 3 4 4 3",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2 2 null 3 null 3",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Check symmetry\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "def is_mirror(t1, t2): if not t1 and not t2: return True. If not t1 or not t2: return False. Return t1.val == t2.val and is_mirror(t1.left, t2.right) and is_mirror(t1.right, t2.left)."
        ],
        "howToThink": [
            "Symmetry means left subtree's left matches right subtree's right."
        ],
        "approach": "Dual tree mirror DFS.",
        "pseudocode": "def is_mirror(t1, t2):\n    if not t1 and not t2: return True\n    if not t1 or not t2 or t1.val != t2.val: return False\n    return is_mirror(t1.left, t2.right) and is_mirror(t1.right, t2.left)",
        "explanation": "Simultaneous dual-pointer recursion.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef is_mirror(t1, t2):\n    if not t1 and not t2: return True\n    if not t1 or not t2 or t1.val != t2.val: return False\n    return is_mirror(t1.left, t2.right) and is_mirror(t1.right, t2.left)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    if not root:\n        print('True')\n        return\n    print(is_mirror(root.left, root.right))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Comparing t1.left with t2.left (which tests identical tree, not mirror)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(H)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "recursion"
        ]
    },
    {
        "id": "py-prob-21-06",
        "levelId": "py-level-21",
        "title": "Binary Tree Level Order Traversal (BFS)",
        "type": "coding",
        "difficulty": "medium",
        "order": 6,
        "description": "LeetCode #102 Binary Tree Level Order Traversal.\nGiven the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).\nPrint each level on a separate line, node values space-separated.\n\nUse `collections.deque` for a BFS queue.",
        "whyThisMatters": "Level order BFS is the prototype for all breadth-first graph algorithms.",
        "concepts": [
            "level order traversal",
            "bfs",
            "queue"
        ],
        "prerequisites": [
            "trees",
            "queues"
        ],
        "learningObjectives": [
            "Implement level-by-level BFS traversal using collections.deque"
        ],
        "constraints": [
            "Nodes <= 2000"
        ],
        "examples": [
            {
                "input": "3 9 20 null null 15 7",
                "output": "3\n9 20\n15 7"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 9 20 null null 15 7",
                "expectedOutput": "3\n9 20\n15 7",
                "hidden": false
            }
        ],
        "starterCode": "import sys\nfrom collections import deque\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Level order BFS\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "q = deque([root]). While q: level_size = len(q). Pop level_size times to group nodes of the current level."
        ],
        "howToThink": [
            "Snapshot queue size at start of each while loop to process exactly one level."
        ],
        "approach": "BFS with level size snapshot.",
        "pseudocode": "q = deque([root])\nwhile q:\n    sz = len(q)\n    level = []\n    for _ in range(sz):\n        node = q.popleft()\n        level.append(node.val)\n        if node.left: q.append(node.left)\n        if node.right: q.append(node.right)\n    print(*level)",
        "explanation": "Deque guarantees O(1) pops, processing all nodes in linear O(N) time.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    if not root: return\n    q = deque([root])\n    while q:\n        sz = len(q)\n        level = []\n        for _ in range(sz):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        print(*level)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Not capturing len(q) upfront, mixing nodes from different levels"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "bfs",
            "must-know"
        ]
    },
    {
        "id": "py-prob-21-07",
        "levelId": "py-level-21",
        "title": "Validate Binary Search Tree (BST)",
        "type": "coding",
        "difficulty": "medium",
        "order": 7,
        "description": "LeetCode #98 Validate Binary Search Tree.\nGiven the root of a binary tree, determine if it is a valid binary search tree (BST).\nA valid BST is defined as follows:\n- The left subtree of a node contains only nodes with keys strictly less than the node's key.\n- The right subtree of a node contains only nodes with keys strictly greater than the node's key.\n- Both the left and right subtrees must also be binary search trees.\nPrint `True` if valid, else `False`.",
        "whyThisMatters": "Validating that all descendants (not just direct children) satisfy the BST invariant via range propagation `[low, high]`.",
        "concepts": [
            "validate bst",
            "range propagation",
            "bst invariant"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Propagate valid min and max boundaries down tree recursion"
        ],
        "constraints": [
            "Nodes <= 10^4"
        ],
        "examples": [
            {
                "input": "2 1 3",
                "output": "True"
            },
            {
                "input": "5 1 4 null null 3 6",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 1 3",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5 1 4 null null 3 6",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Validate BST\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "validate(node, low, high). Return low < node.val < high and validate(left, low, node.val) and validate(right, node.val, high)."
        ],
        "howToThink": [
            "Left child must be < root. Right child must be > root. Propagate tighter bounds at each level."
        ],
        "approach": "Min/Max range propagation.",
        "pseudocode": "def is_valid(node, low=float('-inf'), high=float('inf')):\n    if not node: return True\n    if not (low < node.val < high): return False\n    return is_valid(node.left, low, node.val) and is_valid(node.right, node.val, high)",
        "explanation": "Ensures every descendant satisfies global range constraint in O(N).",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef is_valid(node, low=float('-inf'), high=float('inf')):\n    if not node: return True\n    if not (low < node.val < high): return False\n    return is_valid(node.left, low, node.val) and is_valid(node.right, node.val, high)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    print(is_valid(root))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Only checking node.left.val < node.val and node.right.val > node.val (fails when indirect descendant violates property)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(H)",
        "interviewRelevance": "high",
        "tags": [
            "bst",
            "must-know"
        ]
    },
    {
        "id": "py-prob-21-08",
        "levelId": "py-level-21",
        "title": "Lowest Common Ancestor in BST",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "LeetCode #235 Lowest Common Ancestor of a Binary Search Tree.\nGiven a binary search tree (BST) and two node values `P` and `Q`:\nFind the lowest common ancestor (LCA) node value.\nThe LCA is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants.\n\nInput: Values `P Q` on line 1, BST on line 2.\nPrint the LCA value.",
        "whyThisMatters": "Exploits BST ordering: if both P and Q are smaller, go left; if both larger, go right; otherwise current node is LCA!",
        "concepts": [
            "lca in bst",
            "bst properties",
            "search path"
        ],
        "prerequisites": [
            "bst"
        ],
        "learningObjectives": [
            "Find LCA in BST in O(H) time"
        ],
        "constraints": [
            "P and Q exist in BST"
        ],
        "examples": [
            {
                "input": "2 8\n6 2 8 0 4 7 9 null null 3 5",
                "output": "6"
            },
            {
                "input": "2 4\n6 2 8 0 4 7 9 null null 3 5",
                "output": "2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 8\n6 2 8 0 4 7 9 null null 3 5",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2 4\n6 2 8 0 4 7 9 null null 3 5",
                "expectedOutput": "2",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        p, q = map(int, lines[0].split())\n        tokens = lines[1].split()\n        # LCA in BST\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "While curr: if p < curr.val and q < curr.val: curr = curr.left. Elif p > curr.val and q > curr.val: curr = curr.right. Else return curr.val."
        ],
        "howToThink": [
            "The split point where p and q diverge to different subtrees is their LCA."
        ],
        "approach": "BST navigation loop.",
        "pseudocode": "curr = root\nwhile curr:\n    if p < curr.val and q < curr.val: curr = curr.left\n    elif p > curr.val and q > curr.val: curr = curr.right\n    else: print(curr.val); return",
        "explanation": "O(H) iterative navigation with O(1) space.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        p, q = map(int, lines[0].split())\n        tokens = lines[1].split()\n        root = build_tree(tokens)\n        curr = root\n        while curr:\n            if p < curr.val and q < curr.val:\n                curr = curr.left\n            elif p > curr.val and q > curr.val:\n                curr = curr.right\n            else:\n                print(curr.val)\n                return\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using general tree LCA recursion instead of O(H) BST direction checks"
        ],
        "timeComplexity": "O(H)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "bst",
            "lca"
        ]
    },
    {
        "id": "py-prob-21-09",
        "levelId": "py-level-21",
        "title": "Diameter of Binary Tree",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "LeetCode #543 Diameter of Binary Tree.\nGiven the root of a binary tree, return the length of the diameter of the tree.\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.\nThe length of a path between two nodes is represented by the number of edges between them.\nPrint the diameter integer.",
        "whyThisMatters": "Bottom-up DFS calculating global variable `diameter = max(diameter, left_height + right_height)`.",
        "concepts": [
            "diameter",
            "bottom-up dfs",
            "tree diameter"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Calculate longest path across subtrees using postorder DFS"
        ],
        "constraints": [
            "Nodes <= 10^4"
        ],
        "examples": [
            {
                "input": "1 2 3 4 5",
                "output": "3"
            },
            {
                "input": "1 2",
                "output": "1"
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
                "input": "1 2",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Compute diameter\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "diameter = 0. def height(node): nonlocal diameter. If not node: return 0. lh, rh = height(node.left), height(node.right). diameter = max(diameter, lh + rh). Return 1 + max(lh, rh)."
        ],
        "howToThink": [
            "Path length passing through node as apex is left_height + right_height."
        ],
        "approach": "Postorder height + diameter accumulator.",
        "pseudocode": "diameter = 0\ndef height(node):\n    if not node: return 0\n    lh, rh = height(node.left), height(node.right)\n    diameter = max(diameter, lh + rh)\n    return 1 + max(lh, rh)\nheight(root)\nprint(diameter)",
        "explanation": "Single DFS pass calculates height and updates diameter in O(N).",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    root = build_tree(tokens)\n    diameter = 0\n    def height(node):\n        nonlocal diameter\n        if not node: return 0\n        lh = height(node.left)\n        rh = height(node.right)\n        diameter = max(diameter, lh + rh)\n        return 1 + max(lh, rh)\n    height(root)\n    print(diameter)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Counting nodes instead of edges (edges = nodes - 1)"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(H)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "dfs",
            "must-know"
        ]
    },
    {
        "id": "py-prob-21-10",
        "levelId": "py-level-21",
        "title": "Path Sum (Root to Leaf)",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "LeetCode #112 Path Sum.\nGiven target sum `targetSum` on line 1, and binary tree on line 2:\nReturn `True` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.\nA leaf is a node with no children.\nPrint `True` or `False`.",
        "whyThisMatters": "Verifying root-to-leaf paths by subtracting current node value as you descend.",
        "concepts": [
            "path sum",
            "root to leaf",
            "dfs"
        ],
        "prerequisites": [
            "trees"
        ],
        "learningObjectives": [
            "Track path sum accumulation to leaf nodes"
        ],
        "constraints": [
            "Nodes <= 5000"
        ],
        "examples": [
            {
                "input": "22\n5 4 8 11 null 13 4 7 2 null null null 1",
                "output": "True"
            },
            {
                "input": "5\n1 2 3",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "22\n5 4 8 11 null 13 4 7 2 null null null 1",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5\n1 2 3",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Path sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "has_path_sum(root, target): if not root: return False. If is leaf: return target == root.val. Return has_path_sum(left, target - root.val) or has_path_sum(right, target - root.val)."
        ],
        "howToThink": [
            "Subtract root.val from target at each step. At leaf, check if remainder == root.val."
        ],
        "approach": "DFS path subtraction.",
        "pseudocode": "def has_sum(r, rem):\n    if not r: return False\n    if not r.left and not r.right: return r.val == rem\n    return has_sum(r.left, rem - r.val) or has_sum(r.right, rem - r.val)",
        "explanation": "O(N) DFS search for path sum.",
        "solution": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nimport sys\nfrom collections import deque\n\ndef build_tree(tokens):\n    if not tokens or tokens[0] == 'null': return None\n    root = TreeNode(int(tokens[0]))\n    q = deque([root])\n    i = 1\n    while q and i < len(tokens):\n        node = q.popleft()\n        if i < len(tokens) and tokens[i] != 'null':\n            node.left = TreeNode(int(tokens[i]))\n            q.append(node.left)\n        i += 1\n        if i < len(tokens) and tokens[i] != 'null':\n            node.right = TreeNode(int(tokens[i]))\n            q.append(node.right)\n        i += 1\n    return root\n\ndef has_sum(r, rem):\n    if not r: return False\n    if not r.left and not r.right: return r.val == rem\n    return has_sum(r.left, rem - r.val) or has_sum(r.right, rem - r.val)\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    if len(lines) >= 2:\n        target = int(lines[0].strip())\n        tokens = lines[1].split()\n        root = build_tree(tokens)\n        print(has_sum(root, target))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Stopping at an internal node that is not a leaf node"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(H)",
        "interviewRelevance": "high",
        "tags": [
            "trees",
            "path sum"
        ]
    }
];
