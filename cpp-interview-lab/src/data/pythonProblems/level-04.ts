import { Problem } from '../types';

export const pyLevel4Problems: Problem[] = [
    {
        "id": "py-prob-04-01",
        "levelId": "py-level-04",
        "title": "Print 1 to N",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Given a positive integer `N`, print all integers from `1` to `N` (inclusive) on a single line separated by spaces.\n\nUse Python's `range(1, N + 1)` in a `for` loop.",
        "whyThisMatters": "The `range()` function is Python's primary generator for count-controlled loops.",
        "concepts": [
            "for loops",
            "range",
            "iteration"
        ],
        "prerequisites": [
            "loops"
        ],
        "learningObjectives": [
            "Use range(start, stop) in for loops"
        ],
        "constraints": [
            "1 <= N <= 1000"
        ],
        "examples": [
            {
                "input": "5",
                "output": "1 2 3 4 5"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5",
                "expectedOutput": "1 2 3 4 5",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print 1 to n space-separated\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use print(*(range(1, n + 1))) or a for loop with end=' '."
        ],
        "howToThink": [
            "Generate numbers 1 to n, join or unpack with spaces."
        ],
        "approach": "Use print(*(range(1, n + 1))).",
        "pseudocode": "print(*(range(1, n + 1)))",
        "explanation": "range(1, n + 1) generates numbers from 1 up to n. Unpacking with * prints them space-separated.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(*(range(1, n + 1)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using range(1, n) which stops at n-1"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "loops",
            "range"
        ]
    },
    {
        "id": "py-prob-04-02",
        "levelId": "py-level-04",
        "title": "Sum from 1 to N",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "Given a positive integer `N`, calculate the sum of all integers from `1` to `N`:\n`1 + 2 + 3 + ... + N`.\nPrint the total sum.",
        "whyThisMatters": "Accumulator loops (or `sum(range(1, N + 1))`) teach tracking state across iterations.",
        "concepts": [
            "accumulator",
            "sum",
            "range"
        ],
        "prerequisites": [
            "for loops"
        ],
        "learningObjectives": [
            "Accumulate values in a loop or use sum()"
        ],
        "constraints": [
            "1 <= N <= 10^6"
        ],
        "examples": [
            {
                "input": "5",
                "output": "15"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5",
                "expectedOutput": "15",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10",
                "expectedOutput": "55",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "100",
                "expectedOutput": "5050",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute and print sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "You can use a loop or the formula n * (n + 1) // 2."
        ],
        "howToThink": [
            "Loop from 1 to n adding to total, or use n * (n + 1) // 2."
        ],
        "approach": "Use n * (n + 1) // 2 for O(1) math.",
        "pseudocode": "print(n * (n + 1) // 2)",
        "explanation": "Gauss formula computes the sum of the first N natural numbers in O(1) time.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(n * (n + 1) // 2)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Float division causing large numbers to become inaccurate"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "loops",
            "math"
        ]
    },
    {
        "id": "py-prob-04-03",
        "levelId": "py-level-04",
        "title": "Multiplication Table",
        "type": "coding",
        "difficulty": "beginner",
        "order": 3,
        "description": "Given an integer `N`, print the first 5 rows of its multiplication table in the format:\n`N x i = <result>`\nfor `i` from 1 to 5.",
        "whyThisMatters": "Practices formatted output in loop iterations.",
        "concepts": [
            "for loops",
            "f-strings",
            "multiplication"
        ],
        "prerequisites": [
            "for loops",
            "f-strings"
        ],
        "learningObjectives": [
            "Format iterated expressions with f-strings"
        ],
        "constraints": [
            "1 <= N <= 100"
        ],
        "examples": [
            {
                "input": "3",
                "output": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3",
                "expectedOutput": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "7",
                "expectedOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print 5 rows of table\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Loop for i in range(1, 6): print(f'{n} x {i} = {n * i}')"
        ],
        "howToThink": [
            "Loop i from 1 to 5, print formatted line each time."
        ],
        "approach": "Loop i from 1 to 5 and print f-string.",
        "pseudocode": "for i in range(1, 6):\n    print(f'{n} x {i} = {n * i}')",
        "explanation": "Range(1, 6) iterates through values 1, 2, 3, 4, 5.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        for i in range(1, 6):\n            print(f'{n} x {i} = {n * i}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Stopping at range(1, 5) which misses i = 5"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "loops",
            "formatting"
        ]
    },
    {
        "id": "py-prob-04-04",
        "levelId": "py-level-04",
        "title": "Factorial of N",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "Given a non-negative integer `N`, compute its factorial `N!`:\n`N! = N * (N - 1) * ... * 1` (with `0! = 1`).\nPrint `N!`.",
        "whyThisMatters": "Factorial is foundational in combinations, permutations, and recursion.",
        "concepts": [
            "factorial",
            "product accumulator",
            "math"
        ],
        "prerequisites": [
            "for loops"
        ],
        "learningObjectives": [
            "Compute product sequence with loop"
        ],
        "constraints": [
            "0 <= N <= 20"
        ],
        "examples": [
            {
                "input": "5",
                "output": "120"
            },
            {
                "input": "0",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5",
                "expectedOutput": "120",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "6",
                "expectedOutput": "720",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute and print factorial\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Initialize res = 1, then for i in range(2, n + 1): res *= i."
        ],
        "howToThink": [
            "Multiply 1 * 2 * ... * n. Note 0! = 1."
        ],
        "approach": "Accumulate product starting at 1.",
        "pseudocode": "res = 1\nfor i in range(2, n + 1): res *= i\nprint(res)",
        "explanation": "Standard iterative product computation.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        res = 1\n        for i in range(2, n + 1):\n            res *= i\n        print(res)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Handling 0! as 0 instead of 1"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "math",
            "loops"
        ]
    },
    {
        "id": "py-prob-04-05",
        "levelId": "py-level-04",
        "title": "Reverse Countdown",
        "type": "coding",
        "difficulty": "beginner",
        "order": 5,
        "description": "Given an integer `N`, print a countdown from `N` down to `1` separated by spaces.\n\nUse `range(N, 0, -1)` to decrement in steps of `-1`.",
        "whyThisMatters": "Negative step values in `range(start, stop, step)` are common for backward traversals.",
        "concepts": [
            "negative step",
            "countdown",
            "range step"
        ],
        "prerequisites": [
            "for loops"
        ],
        "learningObjectives": [
            "Use negative step in range()"
        ],
        "constraints": [
            "1 <= N <= 100"
        ],
        "examples": [
            {
                "input": "5",
                "output": "5 4 3 2 1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5",
                "expectedOutput": "5 4 3 2 1",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "3",
                "expectedOutput": "3 2 1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print countdown\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "range(n, 0, -1) counts down to 1."
        ],
        "howToThink": [
            "range(start, stop, step) with step = -1."
        ],
        "approach": "Use print(*(range(n, 0, -1))).",
        "pseudocode": "print(*(range(n, 0, -1)))",
        "explanation": "range(n, 0, -1) steps backwards until stop value 0 is reached.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(*(range(n, 0, -1)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using step = 1 which results in an empty range"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "loops",
            "range"
        ]
    },
    {
        "id": "py-prob-04-06",
        "levelId": "py-level-04",
        "title": "Count Digits",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Given a non-negative integer `N`, count and print how many digits it contains.\n(e.g. `12345` has 5 digits, `0` has 1 digit).",
        "whyThisMatters": "Digit manipulation via while loops or string length is standard in number theory problems.",
        "concepts": [
            "while loop",
            "digits",
            "len"
        ],
        "prerequisites": [
            "loops"
        ],
        "learningObjectives": [
            "Count digits in an integer"
        ],
        "constraints": [
            "N >= 0"
        ],
        "examples": [
            {
                "input": "987654",
                "output": "6"
            },
            {
                "input": "0",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "987654",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "100",
                "expectedOutput": "3",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Print number of digits\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "len(str(n)) gives the count of digits directly."
        ],
        "howToThink": [
            "Convert to string or repeatedly divide by 10 in a while loop."
        ],
        "approach": "Use len(s).",
        "pseudocode": "print(len(s))",
        "explanation": "Length of the string representation matches digit count.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(len(s))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Special case 0 returning 0 if using while n > 0 without handling 0"
        ],
        "timeComplexity": "O(D)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "digits"
        ]
    },
    {
        "id": "py-prob-04-07",
        "levelId": "py-level-04",
        "title": "Sum of Digits",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "Given a non-negative integer `N`, compute and print the sum of its individual digits.\n(For example, for `1234`, sum is `1 + 2 + 3 + 4 = 10`).",
        "whyThisMatters": "Digit sums appear frequently in hashing, checksums (Luhn algorithm), and digital root calculations.",
        "concepts": [
            "sum",
            "digits",
            "list comprehension"
        ],
        "prerequisites": [
            "loops"
        ],
        "learningObjectives": [
            "Extract and sum digits of a number"
        ],
        "constraints": [
            "N >= 0"
        ],
        "examples": [
            {
                "input": "1234",
                "output": "10"
            },
            {
                "input": "999",
                "output": "27"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1234",
                "expectedOutput": "10",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "999",
                "expectedOutput": "27",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "0",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Compute sum of digits\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sum(int(ch) for ch in s)"
        ],
        "howToThink": [
            "Iterate through characters, convert each to int, and sum."
        ],
        "approach": "Sum converted integer characters.",
        "pseudocode": "print(sum(int(c) for c in s))",
        "explanation": "Generator expression converts each digit character to int and sums them cleanly.",
        "solution": "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(sum(int(c) for c in s if c.isdigit()))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Leaving digits as strings causing concatenation"
        ],
        "timeComplexity": "O(D)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "digits",
            "sum"
        ]
    },
    {
        "id": "py-prob-04-08",
        "levelId": "py-level-04",
        "title": "Prime Number Test",
        "type": "coding",
        "difficulty": "medium",
        "order": 8,
        "description": "An integer `N > 1` is prime if it is only divisible by 1 and itself.\n\n**Task:**\nGiven an integer `N`, print `Prime` if it is a prime number, otherwise print `Not Prime`.\n\n*Optimization:* Check divisibility up to `int(N**0.5)` for O(sqrt(N)) efficiency.",
        "whyThisMatters": "Trial division up to sqrt(N) is the canonical prime testing algorithm required in technical screenings.",
        "concepts": [
            "prime numbers",
            "trial division",
            "sqrt optimization"
        ],
        "prerequisites": [
            "while loop",
            "for loops"
        ],
        "learningObjectives": [
            "Implement O(sqrt(N)) prime checking"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "7",
                "output": "Prime"
            },
            {
                "input": "9",
                "output": "Not Prime"
            },
            {
                "input": "1",
                "output": "Not Prime"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7",
                "expectedOutput": "Prime",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "9",
                "expectedOutput": "Not Prime",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "1",
                "expectedOutput": "Not Prime",
                "hidden": false
            },
            {
                "id": "tc4",
                "input": "2",
                "expectedOutput": "Prime",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Check if prime\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "If n < 2, return 'Not Prime'. Check divisors i from 2 up to int(n**0.5)."
        ],
        "howToThink": [
            "If a factor exists > sqrt(N), its matching factor must be < sqrt(N)."
        ],
        "approach": "Trial division up to sqrt(N).",
        "pseudocode": "if n < 2: return 'Not Prime'\nfor i in range(2, int(n**0.5) + 1):\n    if n % i == 0: return 'Not Prime'\nreturn 'Prime'",
        "explanation": "Testing up to sqrt(N) reduces operations from 1,000,000 to 1,000.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        if n < 2:\n            print('Not Prime')\n            return\n        is_prime = True\n        for i in range(2, int(n**0.5) + 1):\n            if n % i == 0:\n                is_prime = False\n                break\n        print('Prime' if is_prime else 'Not Prime')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Considering 1 as prime",
            "Checking up to N instead of sqrt(N) causing Time Limit Exceeded"
        ],
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "math",
            "primes"
        ]
    },
    {
        "id": "py-prob-04-09",
        "levelId": "py-level-04",
        "title": "N-th Fibonacci Number",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "The Fibonacci sequence starts `F(1) = 1, F(2) = 1`, and each subsequent term is the sum of the previous two:\n`F(n) = F(n-1) + F(n-2)`.\n\n**Task:**\nGiven a 1-based index `N`, print the N-th Fibonacci number.\n`F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5, F(6) = 8...`",
        "whyThisMatters": "Iterative Fibonacci using two moving variables is the starting point for dynamic programming state compression.",
        "concepts": [
            "fibonacci",
            "iterative dp",
            "state variables"
        ],
        "prerequisites": [
            "for loops"
        ],
        "learningObjectives": [
            "Compute Fibonacci in O(N) time and O(1) space"
        ],
        "constraints": [
            "1 <= N <= 50"
        ],
        "examples": [
            {
                "input": "6",
                "output": "8"
            },
            {
                "input": "1",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "6",
                "expectedOutput": "8",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1",
                "expectedOutput": "1",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "10",
                "expectedOutput": "55",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute N-th Fibonacci number\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Maintain a, b = 1, 1 and update a, b = b, a + b in a loop."
        ],
        "howToThink": [
            "If n <= 2 return 1. Else loop n-2 times shifting a, b."
        ],
        "approach": "Iteratively update two variables.",
        "pseudocode": "a, b = 1, 1\nfor _ in range(n - 1): a, b = b, a + b\nprint(a)",
        "explanation": "Two variable rotation runs in O(N) time and O(1) space.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        a, b = 1, 1\n        for _ in range(n - 1):\n            a, b = b, a + b\n        print(a)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using slow exponential O(2^N) recursion"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "fibonacci",
            "dp"
        ]
    },
    {
        "id": "py-prob-04-10",
        "levelId": "py-level-04",
        "title": "Right-Angled Star Triangle",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Given an integer `N`, print a right-angled triangle of height `N` using asterisks `*`.\nLine 1 should have 1 asterisk, line 2 should have 2 asterisks, up to line N with N asterisks.",
        "whyThisMatters": "Reinforces nested loop or loop string multiplication concepts.",
        "concepts": [
            "nested loops",
            "patterns",
            "string multiplication"
        ],
        "prerequisites": [
            "loops",
            "strings"
        ],
        "learningObjectives": [
            "Generate growing row patterns in a loop"
        ],
        "constraints": [
            "1 <= N <= 20"
        ],
        "examples": [
            {
                "input": "3",
                "output": "*\n**\n***"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3",
                "expectedOutput": "*\n**\n***",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1",
                "expectedOutput": "*",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print triangle of stars\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "for i in range(1, n + 1): print('*' * i)"
        ],
        "howToThink": [
            "Row i prints i stars."
        ],
        "approach": "Loop i from 1 to n, printing '*' * i.",
        "pseudocode": "for i in range(1, n + 1): print('*' * i)",
        "explanation": "Python string multiplication '*' * i makes pattern generation concise.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        for i in range(1, n + 1):\n            print('*' * i)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "0-based range causing an empty first line"
        ],
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "patterns"
        ]
    }
];
