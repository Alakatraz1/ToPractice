import { Problem } from '../types';

export const pyLevel3Problems: Problem[] = [
    {
        "id": "py-prob-03-01",
        "levelId": "py-level-03",
        "title": "Even or Odd",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Given an integer `N`, determine if it is even or odd.\nPrint `Even` if `N % 2 == 0`, otherwise print `Odd`.",
        "whyThisMatters": "Parity checking with modulo is the quintessential first conditional problem.",
        "concepts": [
            "if-else",
            "modulo",
            "parity"
        ],
        "prerequisites": [
            "conditions"
        ],
        "learningObjectives": [
            "Write basic if-else branching"
        ],
        "constraints": [
            "-10^9 <= N <= 10^9"
        ],
        "examples": [
            {
                "input": "8",
                "output": "Even"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "8",
                "expectedOutput": "Even",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "7",
                "expectedOutput": "Odd",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "0",
                "expectedOutput": "Even",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print 'Even' or 'Odd'\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Check if n % 2 == 0."
        ],
        "howToThink": [
            "If n % 2 == 0, print 'Even', else 'Odd'."
        ],
        "approach": "Check modulo 2.",
        "pseudocode": "if n % 2 == 0: print('Even')\nelse: print('Odd')",
        "explanation": "Any integer divisible by 2 with no remainder is even.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print('Even' if n % 2 == 0 else 'Odd')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Handling negative numbers incorrectly (though n % 2 == 0 works in Python)"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "conditionals"
        ]
    },
    {
        "id": "py-prob-03-02",
        "levelId": "py-level-03",
        "title": "Maximum of Two Numbers",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "Read two integers `A` and `B` and print the larger value.",
        "whyThisMatters": "Comparing values and finding extreme elements is the foundation of greedy algorithms and search.",
        "concepts": [
            "if-else",
            "max",
            "comparison"
        ],
        "prerequisites": [
            "conditionals"
        ],
        "learningObjectives": [
            "Compare two numbers using relational operators"
        ],
        "constraints": [
            "Integers A and B"
        ],
        "examples": [
            {
                "input": "12 45",
                "output": "45"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "12 45",
                "expectedOutput": "45",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "99 99",
                "expectedOutput": "99",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print larger number\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use if a > b: print(a) else: print(b) or max(a, b)."
        ],
        "howToThink": [
            "Compare a and b, output the greater one."
        ],
        "approach": "Use conditional logic or built-in max().",
        "pseudocode": "print(max(a, b))",
        "explanation": "max() returns the largest of the arguments provided.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(max(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing when numbers are equal"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "conditionals",
            "max"
        ]
    },
    {
        "id": "py-prob-03-03",
        "levelId": "py-level-03",
        "title": "Maximum of Three Numbers",
        "type": "coding",
        "difficulty": "beginner",
        "order": 3,
        "description": "Read three integers `A`, `B`, and `C` and print the largest among them.",
        "whyThisMatters": "Chaining conditions with `elif` or `and` teaches clean logical branching.",
        "concepts": [
            "elif",
            "logical and",
            "multi-way branching"
        ],
        "prerequisites": [
            "conditionals"
        ],
        "learningObjectives": [
            "Chain conditions with elif or use max()"
        ],
        "constraints": [
            "Three integers"
        ],
        "examples": [
            {
                "input": "10 50 30",
                "output": "50"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10 50 30",
                "expectedOutput": "50",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "100 20 5",
                "expectedOutput": "100",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print maximum of three\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "max(nums[0], nums[1], nums[2])"
        ],
        "howToThink": [
            "Find maximum of all three numbers."
        ],
        "approach": "Use max(a, b, c).",
        "pseudocode": "print(max(a, b, c))",
        "explanation": "max() handles any number of positional arguments in Python.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 3:\n        print(max(nums[0], nums[1], nums[2]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Writing deeply nested if statements unnecessarily"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "conditionals"
        ]
    },
    {
        "id": "py-prob-03-04",
        "levelId": "py-level-03",
        "title": "Leap Year Checker",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "A year is a leap year if:\n1. It is divisible by 4 AND not divisible by 100, OR\n2. It is divisible by 400.\n\n**Task:**\nGiven an integer `year`, print `Leap Year` if it is a leap year, otherwise print `Not Leap Year`.",
        "whyThisMatters": "Leap year logic is a classic test of compound boolean expressions with `and` and `or` precedence.",
        "concepts": [
            "boolean logic",
            "and",
            "or",
            "precedence"
        ],
        "prerequisites": [
            "conditions"
        ],
        "learningObjectives": [
            "Combine and / or logical operators correctly"
        ],
        "constraints": [
            "Year > 0"
        ],
        "examples": [
            {
                "input": "2024",
                "output": "Leap Year"
            },
            {
                "input": "1900",
                "output": "Not Leap Year"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2024",
                "expectedOutput": "Leap Year",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1900",
                "expectedOutput": "Not Leap Year",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "2000",
                "expectedOutput": "Leap Year",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    year = int(sys.stdin.read().strip())\n    # Check leap year condition\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)"
        ],
        "howToThink": [
            "Divisible by 400? Leap. Divisible by 100? Not leap. Divisible by 4? Leap."
        ],
        "approach": "Use compound boolean condition.",
        "pseudocode": "if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0): print('Leap Year') else: print('Not Leap Year')",
        "explanation": "Gregorian calendar leap year rule accurately implemented.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        y = int(raw)\n        if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):\n            print('Leap Year')\n        else:\n            print('Not Leap Year')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Assuming every year divisible by 4 is a leap year (1900 is not)"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "logic",
            "calendar"
        ]
    },
    {
        "id": "py-prob-03-05",
        "levelId": "py-level-03",
        "title": "Letter Grade Calculator",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "Given an integer exam score (0 to 100), print the corresponding letter grade:\n- `90 <= score <= 100`: `A`\n- `80 <= score < 90`: `B`\n- `70 <= score < 80`: `C`\n- `60 <= score < 70`: `D`\n- `score < 60`: `F`",
        "whyThisMatters": "Python allows chained comparisons like `90 <= score <= 100`, making range checks cleaner than any other language.",
        "concepts": [
            "chained comparisons",
            "elif",
            "range logic"
        ],
        "prerequisites": [
            "conditions"
        ],
        "learningObjectives": [
            "Use Python chained comparisons (e.g. 80 <= score < 90)"
        ],
        "constraints": [
            "0 <= score <= 100"
        ],
        "examples": [
            {
                "input": "85",
                "output": "B"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "85",
                "expectedOutput": "B",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "92",
                "expectedOutput": "A",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "55",
                "expectedOutput": "F",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    score = int(sys.stdin.read().strip())\n    # Compute and print grade\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Check from highest to lowest: if score >= 90: 'A', elif score >= 80: 'B'..."
        ],
        "howToThink": [
            "Descending threshold check is cleanest."
        ],
        "approach": "Check if score >= 90, elif >= 80, etc.",
        "pseudocode": "if s >= 90: 'A'\nelif s >= 80: 'B'\nelif s >= 70: 'C'\nelif s >= 60: 'D'\nelse: 'F'",
        "explanation": "Checking in descending order simplifies conditions without needing lower bound checks.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        s = int(raw)\n        if s >= 90:\n            print('A')\n        elif s >= 80:\n            print('B')\n        elif s >= 70:\n            print('C')\n        elif s >= 60:\n            print('D')\n        else:\n            print('F')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Checking ascending order without compound bounds"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "branching"
        ]
    },
    {
        "id": "py-prob-03-06",
        "levelId": "py-level-03",
        "title": "Triangle Inequality Theorem",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Given three positive integer side lengths `A`, `B`, and `C`:\nDetermine if they can form a non-degenerate triangle.\nA triangle is valid if the sum of any two sides is strictly greater than the third side:\n`A + B > C and A + C > B and B + C > A`.\nPrint `Valid` or `Invalid`.",
        "whyThisMatters": "Tests geometric boundary validation frequently tested in computational geometry interviews.",
        "concepts": [
            "triangle inequality",
            "boolean and",
            "geometry"
        ],
        "prerequisites": [
            "conditions"
        ],
        "learningObjectives": [
            "Apply triangle inequality theorem"
        ],
        "constraints": [
            "A, B, C > 0"
        ],
        "examples": [
            {
                "input": "3 4 5",
                "output": "Valid"
            },
            {
                "input": "1 2 5",
                "output": "Invalid"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 4 5",
                "expectedOutput": "Valid",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "1 2 5",
                "expectedOutput": "Invalid",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    sides = list(map(int, sys.stdin.read().split()))\n    # Check triangle validity\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Check a + b > c and a + c > b and b + c > a."
        ],
        "howToThink": [
            "All three sum conditions must hold."
        ],
        "approach": "Check if all three pair sums exceed the third.",
        "pseudocode": "if a+b>c and a+c>b and b+c>a: 'Valid' else: 'Invalid'",
        "explanation": "Triangle inequality guarantees a closed polygon can be formed.",
        "solution": "import sys\n\ndef solve():\n    sides = list(map(int, sys.stdin.read().split()))\n    if len(sides) >= 3:\n        a, b, c = sides[0], sides[1], sides[2]\n        if a + b > c and a + c > b and b + c > a:\n            print('Valid')\n        else:\n            print('Invalid')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using >= instead of strict >"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "geometry",
            "math"
        ]
    },
    {
        "id": "py-prob-03-07",
        "levelId": "py-level-03",
        "title": "Vowel or Consonant",
        "type": "coding",
        "difficulty": "beginner",
        "order": 7,
        "description": "Read a single lowercase English letter. Print `Vowel` if it is one of `a, e, i, o, u`, otherwise print `Consonant`.",
        "whyThisMatters": "Demonstrates Python's intuitive `in` membership operator: `char in 'aeiou'`.",
        "concepts": [
            "membership operator",
            "in keyword"
        ],
        "prerequisites": [
            "strings",
            "conditions"
        ],
        "learningObjectives": [
            "Use the in operator for set/collection membership"
        ],
        "constraints": [
            "Single lowercase letter"
        ],
        "examples": [
            {
                "input": "e",
                "output": "Vowel"
            },
            {
                "input": "z",
                "output": "Consonant"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "e",
                "expectedOutput": "Vowel",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "z",
                "expectedOutput": "Consonant",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    ch = sys.stdin.read().strip()\n    # Print 'Vowel' or 'Consonant'\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use if ch in 'aeiou': print('Vowel')"
        ],
        "howToThink": [
            "Test if character exists in vowels string."
        ],
        "approach": "Use 'in' keyword.",
        "pseudocode": "if ch in 'aeiou': print('Vowel')\nelse: print('Consonant')",
        "explanation": "The in operator in Python checks for substring or collection membership in clean syntax.",
        "solution": "import sys\n\ndef solve():\n    ch = sys.stdin.read().strip()\n    if ch:\n        print('Vowel' if ch in 'aeiou' else 'Consonant')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Writing five separate == conditions when 'in' is idiomatic"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "strings",
            "membership"
        ]
    },
    {
        "id": "py-prob-03-08",
        "levelId": "py-level-03",
        "title": "Sign of a Number",
        "type": "coding",
        "difficulty": "beginner",
        "order": 8,
        "description": "Given an integer `N`, determine its sign:\n- If `N > 0`, print `Positive`\n- If `N < 0`, print `Negative`\n- If `N == 0`, print `Zero`",
        "whyThisMatters": "Three-way branching with `if / elif / else` is standard control flow.",
        "concepts": [
            "elif",
            "sign function",
            "branching"
        ],
        "prerequisites": [
            "conditions"
        ],
        "learningObjectives": [
            "Handle three distinct states with if/elif/else"
        ],
        "constraints": [
            "Integer input"
        ],
        "examples": [
            {
                "input": "-15",
                "output": "Negative"
            },
            {
                "input": "0",
                "output": "Zero"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "-15",
                "expectedOutput": "Negative",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0",
                "expectedOutput": "Zero",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "42",
                "expectedOutput": "Positive",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print Positive, Negative, or Zero\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "if n > 0: 'Positive', elif n < 0: 'Negative', else: 'Zero'"
        ],
        "howToThink": [
            "Three-way branch: >0, <0, ==0."
        ],
        "approach": "Simple if/elif/else.",
        "pseudocode": "if n > 0: 'Positive'\nelif n < 0: 'Negative'\nelse: 'Zero'",
        "explanation": "Basic three-state partition.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        if n > 0:\n            print('Positive')\n        elif n < 0:\n            print('Negative')\n        else:\n            print('Zero')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Missing the zero case"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "conditionals"
        ]
    },
    {
        "id": "py-prob-03-09",
        "levelId": "py-level-03",
        "title": "Check Range Membership",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "Given three integers `X`, `Low`, and `High` (where `Low <= High`):\nCheck if `X` is within the inclusive range `[Low, High]`.\nPrint `In Range` if `Low <= X <= High`, otherwise print `Out of Range`.",
        "whyThisMatters": "Chained comparisons `low <= x <= high` are uniquely Pythonic and avoid redundant variable repetition.",
        "concepts": [
            "chained comparisons",
            "range checking"
        ],
        "prerequisites": [
            "conditions"
        ],
        "learningObjectives": [
            "Write chained range conditions in Python"
        ],
        "constraints": [
            "Low <= High"
        ],
        "examples": [
            {
                "input": "5 1 10",
                "output": "In Range"
            },
            {
                "input": "15 1 10",
                "output": "Out of Range"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5 1 10",
                "expectedOutput": "In Range",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "15 1 10",
                "expectedOutput": "Out of Range",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Check if x in range [low, high]\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use if low <= x <= high: print('In Range')"
        ],
        "howToThink": [
            "Chained comparison: low <= x <= high."
        ],
        "approach": "Use low <= x <= high.",
        "pseudocode": "if low <= x <= high: 'In Range' else: 'Out of Range'",
        "explanation": "Python evaluates low <= x <= high mathematically without needing 'and'.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 3:\n        x, low, high = nums[0], nums[1], nums[2]\n        print('In Range' if low <= x <= high else 'Out of Range')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using strict inequality instead of inclusive <="
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "conditionals"
        ]
    },
    {
        "id": "py-prob-03-10",
        "levelId": "py-level-03",
        "title": "FizzBuzz Single Step",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Given a single positive integer `N`:\n- If `N` is divisible by both 3 and 5 (i.e. by 15), print `FizzBuzz`\n- If `N` is divisible by 3 only, print `Fizz`\n- If `N` is divisible by 5 only, print `Buzz`\n- Otherwise, print `N` itself.",
        "whyThisMatters": "FizzBuzz is the most famous interview test of rule precedence ordering.",
        "concepts": [
            "modulo",
            "branching order",
            "precedence"
        ],
        "prerequisites": [
            "conditions",
            "modulo"
        ],
        "learningObjectives": [
            "Order conditionals so more specific cases precede general cases"
        ],
        "constraints": [
            "1 <= N <= 10^5"
        ],
        "examples": [
            {
                "input": "15",
                "output": "FizzBuzz"
            },
            {
                "input": "9",
                "output": "Fizz"
            },
            {
                "input": "7",
                "output": "7"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "15",
                "expectedOutput": "FizzBuzz",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "9",
                "expectedOutput": "Fizz",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "10",
                "expectedOutput": "Buzz",
                "hidden": false
            },
            {
                "id": "tc4",
                "input": "7",
                "expectedOutput": "7",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Implement FizzBuzz logic\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Check divisible by 15 first! (n % 15 == 0)"
        ],
        "howToThink": [
            "Order matters: 15 first, then 3, then 5, else n."
        ],
        "approach": "Check n % 15 == 0 first.",
        "pseudocode": "if n % 15 == 0: 'FizzBuzz'\nelif n % 3 == 0: 'Fizz'\nelif n % 5 == 0: 'Buzz'\nelse: n",
        "explanation": "If you check 3 or 5 first, 15 would be captured early and produce an incorrect result.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        if n % 15 == 0:\n            print('FizzBuzz')\n        elif n % 3 == 0:\n            print('Fizz')\n        elif n % 5 == 0:\n            print('Buzz')\n        else:\n            print(n)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Checking 3 before 15, causing 15 to print 'Fizz' instead of 'FizzBuzz'"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "fizzbuzz",
            "classic"
        ]
    }
];
