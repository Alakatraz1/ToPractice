import { Problem } from '../types';

export const pyLevel2Problems: Problem[] = [
    {
        "id": "py-prob-02-01",
        "levelId": "py-level-02",
        "title": "Read and Greet",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Read a user's name from standard input and print:\n`Welcome, <name>!`",
        "whyThisMatters": "Standard input parsing is how every algorithm receives its test data.",
        "concepts": [
            "input",
            "strings"
        ],
        "prerequisites": [
            "print"
        ],
        "learningObjectives": [
            "Read string input from user"
        ],
        "constraints": [
            "Name is non-empty"
        ],
        "examples": [
            {
                "input": "Dev",
                "output": "Welcome, Dev!"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Dev",
                "expectedOutput": "Welcome, Dev!",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Sarah",
                "expectedOutput": "Welcome, Sarah!",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    name = sys.stdin.read().strip()\n    # Print greeting\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Read the name with sys.stdin.read().strip() and print with an f-string."
        ],
        "howToThink": [
            "Read name, use f'Welcome, {name}!'."
        ],
        "approach": "Read stripped input, format with f-string.",
        "pseudocode": "name = input.strip()\nprint(f'Welcome, {name}!')",
        "explanation": "sys.stdin.read().strip() removes leading and trailing whitespace/newlines.",
        "solution": "import sys\n\ndef solve():\n    name = sys.stdin.read().strip()\n    if name:\n        print(f'Welcome, {name}!')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Leaving extra whitespace in name"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "input",
            "strings"
        ]
    },
    {
        "id": "py-prob-02-02",
        "levelId": "py-level-02",
        "title": "Sum Two Integers",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "Read two space-separated integers `A` and `B` and print their sum.",
        "whyThisMatters": "Python automatically handles arbitrarily large integers without integer overflow issues.",
        "concepts": [
            "integers",
            "arithmetic",
            "addition"
        ],
        "prerequisites": [
            "input"
        ],
        "learningObjectives": [
            "Convert string inputs to integers and perform arithmetic"
        ],
        "constraints": [
            "-10^9 <= A, B <= 10^9"
        ],
        "examples": [
            {
                "input": "15 27",
                "output": "42"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "15 27",
                "expectedOutput": "42",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-10 50",
                "expectedOutput": "40",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Calculate and print sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "nums[0] + nums[1] gives the sum."
        ],
        "howToThink": [
            "Map input to ints, add them."
        ],
        "approach": "Parse integers with map(int, ...) and sum.",
        "pseudocode": "a, b = map(int, input.split())\nprint(a + b)",
        "explanation": "Python int type has arbitrary precision.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(nums[0] + nums[1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Adding as strings instead of converting to int"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "arithmetic",
            "integers"
        ]
    },
    {
        "id": "py-prob-02-03",
        "levelId": "py-level-02",
        "title": "Floor and True Division",
        "type": "coding",
        "difficulty": "beginner",
        "order": 3,
        "description": "Python provides two division operators:\n- True division `/` returns a float.\n- Floor division `//` truncates the fractional part and returns an integer.\n\n**Task:**\nGiven two integers `A` and `B`, print `A // B` on the first line, and `A / B` (formatted to 2 decimal places) on the second line.",
        "whyThisMatters": "Distinguishing `//` from `/` is crucial; bugs from accidental float division are common in index computations.",
        "concepts": [
            "floor division",
            "float division",
            "operators"
        ],
        "prerequisites": [
            "arithmetic"
        ],
        "learningObjectives": [
            "Understand // vs / in Python"
        ],
        "constraints": [
            "B != 0"
        ],
        "examples": [
            {
                "input": "7 2",
                "output": "3\n3.50"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7 2",
                "expectedOutput": "3\n3.50",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "10 3",
                "expectedOutput": "3\n3.33",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        a, b = nums[0], nums[1]\n        # Print floor division and true division\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Print a // b, then print f'{a / b:.2f}'."
        ],
        "howToThink": [
            "First line: a // b. Second line: format a / b to .2f."
        ],
        "approach": "Use // for integer floor and / with .2f for true division.",
        "pseudocode": "print(a // b)\nprint(f'{a / b:.2f}')",
        "explanation": "Floor division // rounds towards negative infinity in Python.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        a, b = nums[0], nums[1]\n        print(a // b)\n        print(f'{a / b:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using / for both calculations"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "operators",
            "math"
        ]
    },
    {
        "id": "py-prob-02-04",
        "levelId": "py-level-02",
        "title": "Modulo and Remainder",
        "type": "coding",
        "difficulty": "beginner",
        "order": 4,
        "description": "The modulo operator `%` calculates the remainder of division.\n\n**Task:**\nRead two integers `A` and `B` and print `A % B`.",
        "whyThisMatters": "Modulo is ubiquitous in cyclic data structures, hash functions, and clock arithmetic.",
        "concepts": [
            "modulo",
            "remainder"
        ],
        "prerequisites": [
            "arithmetic"
        ],
        "learningObjectives": [
            "Use the % operator"
        ],
        "constraints": [
            "B > 0"
        ],
        "examples": [
            {
                "input": "17 5",
                "output": "2"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "17 5",
                "expectedOutput": "2",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "20 4",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(nums[0] % nums[1])\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Calculate nums[0] % nums[1]."
        ],
        "howToThink": [
            "Apply % operator."
        ],
        "approach": "Return a % b.",
        "pseudocode": "print(a % b)",
        "explanation": "17 % 5 is 2 because 5 * 3 = 15, leaving 2.",
        "solution": "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(nums[0] % nums[1])\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Dividing by zero"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "math",
            "modulo"
        ]
    },
    {
        "id": "py-prob-02-05",
        "levelId": "py-level-02",
        "title": "Pythonic Variable Swap",
        "type": "coding",
        "difficulty": "beginner",
        "order": 5,
        "description": "In C++, swapping two variables requires a temporary variable or `std::swap`.\nIn Python, you can swap variables in a single elegant line:\n`a, b = b, a`\n\n**Task:**\nRead two space-separated words `A` and `B`. Swap them using `a, b = b, a` and print them space-separated.",
        "whyThisMatters": "Tuple unpacking makes Python code readable, concise, and eliminates entire classes of pointer and temporary variable bugs.",
        "concepts": [
            "tuple unpacking",
            "variable swap",
            "pythonic syntax"
        ],
        "prerequisites": [
            "variables"
        ],
        "learningObjectives": [
            "Swap variables using tuple unpacking"
        ],
        "constraints": [
            "Non-empty words"
        ],
        "examples": [
            {
                "input": "cat dog",
                "output": "dog cat"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "cat dog",
                "expectedOutput": "dog cat",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "first second",
                "expectedOutput": "second first",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) >= 2:\n        a, b = words[0], words[1]\n        # Swap pythonically\n        a, b = b, a\n        print(a, b)\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Assign a, b = b, a then print(a, b)."
        ],
        "howToThink": [
            "Unpack swapped tuple: a, b = b, a."
        ],
        "approach": "Use a, b = b, a.",
        "pseudocode": "a, b = b, a\nprint(a, b)",
        "explanation": "Python evaluates the right side into a temporary tuple (b, a) and unpacks it into the left side variables.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) >= 2:\n        a, b = words[0], words[1]\n        a, b = b, a\n        print(a, b)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Creating an unnecessary temp variable"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "idioms",
            "variables"
        ]
    },
    {
        "id": "py-prob-02-06",
        "levelId": "py-level-02",
        "title": "Type Conversion & Rounding",
        "type": "coding",
        "difficulty": "beginner",
        "order": 6,
        "description": "Given a floating-point number as input:\nPrint its truncated integer part (`int(x)`) on the first line, and its rounded integer (`round(x)`) on the second line.",
        "whyThisMatters": "Truncation vs rounding differences often cause off-by-one errors in binary search and indexing algorithms.",
        "concepts": [
            "type casting",
            "int()",
            "round()"
        ],
        "prerequisites": [
            "floats",
            "integers"
        ],
        "learningObjectives": [
            "Learn difference between int truncation and round()"
        ],
        "constraints": [
            "Float input"
        ],
        "examples": [
            {
                "input": "7.8",
                "output": "7\n8"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "7.8",
                "expectedOutput": "7\n8",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "4.2",
                "expectedOutput": "4\n4",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    x = float(sys.stdin.read().strip())\n    # Print int(x) and round(x)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "print(int(x)) then print(round(x))"
        ],
        "howToThink": [
            "int(x) drops decimals. round(x) rounds to nearest integer."
        ],
        "approach": "Apply int() and round().",
        "pseudocode": "print(int(x))\nprint(round(x))",
        "explanation": "int() discards the fractional part towards zero. round() rounds to the nearest integer.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        x = float(raw)\n        print(int(x))\n        print(round(x))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Confusing truncation with floor"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "casting",
            "math"
        ]
    },
    {
        "id": "py-prob-02-07",
        "levelId": "py-level-02",
        "title": "Circle Area Calculator",
        "type": "coding",
        "difficulty": "easy",
        "order": 7,
        "description": "Given the radius `R` of a circle as a float, compute its area using formula:\n`Area = 3.14159 * R * R`\nPrint the area formatted to 2 decimal places.",
        "whyThisMatters": "Tests combining variable math, exponentiation operator `**`, and precision formatting.",
        "concepts": [
            "math",
            "exponentiation",
            "precision"
        ],
        "prerequisites": [
            "floats",
            "f-strings"
        ],
        "learningObjectives": [
            "Use the ** exponent operator and format output"
        ],
        "constraints": [
            "R > 0"
        ],
        "examples": [
            {
                "input": "5.0",
                "output": "78.54"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "5.0",
                "expectedOutput": "78.54",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "2.5",
                "expectedOutput": "19.63",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    r = float(sys.stdin.read().strip())\n    # Compute and print area to 2 decimals\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use area = 3.14159 * (r ** 2) and print(f'{area:.2f}')."
        ],
        "howToThink": [
            "Calculate area = 3.14159 * r * r, print f'{area:.2f}'."
        ],
        "approach": "Use float math and format to .2f.",
        "pseudocode": "area = 3.14159 * r * r\nprint(f'{area:.2f}')",
        "explanation": "** is the exponentiation operator in Python.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        r = float(raw)\n        area = 3.14159 * (r ** 2)\n        print(f'{area:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using ^ instead of ** for power"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "math",
            "geometry"
        ]
    },
    {
        "id": "py-prob-02-08",
        "levelId": "py-level-02",
        "title": "Count Space-Separated Tokens",
        "type": "coding",
        "difficulty": "beginner",
        "order": 8,
        "description": "Read a line of text containing an arbitrary number of space-separated words, and print the total number of words read.",
        "whyThisMatters": "`sys.stdin.read().split()` splits text on arbitrary whitespace (spaces, tabs, newlines), perfectly normalizing interview input.",
        "concepts": [
            "split",
            "len",
            "tokenization"
        ],
        "prerequisites": [
            "input"
        ],
        "learningObjectives": [
            "Count tokens in standard input"
        ],
        "constraints": [
            "Line contains words"
        ],
        "examples": [
            {
                "input": "Apple Banana Cherry Date",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Apple Banana Cherry Date",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Single",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Print count of tokens\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "len(tokens) gives the number of items in the list."
        ],
        "howToThink": [
            "Use len() on the split list."
        ],
        "approach": "Split input and print len().",
        "pseudocode": "tokens = input.split()\nprint(len(tokens))",
        "explanation": "split() with no arguments splits across consecutive whitespace and discards empty strings.",
        "solution": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    print(len(tokens))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Calling split(' ') which fails on multiple consecutive spaces"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "input",
            "lists"
        ]
    },
    {
        "id": "py-prob-02-09",
        "levelId": "py-level-02",
        "title": "Boolean Evaluation",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "In Python, boolean literals are capitalized: `True` and `False`.\n\n**Task:**\nRead an integer `N`. Print `True` if `N > 0`, otherwise print `False`.",
        "whyThisMatters": "Python boolean values are distinct capitalized keywords unlike C++ lowercase `true`/`false`.",
        "concepts": [
            "booleans",
            "comparisons",
            "truth values"
        ],
        "prerequisites": [
            "comparisons"
        ],
        "learningObjectives": [
            "Evaluate boolean expressions directly"
        ],
        "constraints": [
            "Integer input"
        ],
        "examples": [
            {
                "input": "10",
                "output": "True"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-5",
                "expectedOutput": "False",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "0",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print boolean result directly\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "You can simply print(n > 0)."
        ],
        "howToThink": [
            "The expression n > 0 directly evaluates to True or False."
        ],
        "approach": "print(n > 0).",
        "pseudocode": "print(n > 0)",
        "explanation": "Comparison operators evaluate directly to boolean objects in Python.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(n > 0)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Writing complex if/else when print(n > 0) suffices"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "booleans"
        ]
    },
    {
        "id": "py-prob-02-10",
        "levelId": "py-level-02",
        "title": "Celsius to Fahrenheit Converter",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Given a temperature in Celsius `C` as a float, convert it to Fahrenheit using formula:\n`F = (C * 9/5) + 32`\nPrint the Fahrenheit temperature rounded to 1 decimal place.",
        "whyThisMatters": "Formula translation and precision output are ubiquitous in entry-level coding screens.",
        "concepts": [
            "arithmetic",
            "formula translation",
            "precision"
        ],
        "prerequisites": [
            "floats",
            "arithmetic"
        ],
        "learningObjectives": [
            "Convert units with standard arithmetic"
        ],
        "constraints": [
            "-100 <= C <= 200"
        ],
        "examples": [
            {
                "input": "25.0",
                "output": "77.0"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "25.0",
                "expectedOutput": "77.0",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "0.0",
                "expectedOutput": "32.0",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "-40.0",
                "expectedOutput": "-40.0",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    c = float(sys.stdin.read().strip())\n    # Compute fahrenheit and print with 1 decimal\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "f = (c * 9/5) + 32, then print(f'{f:.1f}')."
        ],
        "howToThink": [
            "Apply formula, format with .1f."
        ],
        "approach": "Calculate (c * 9/5) + 32 and format with .1f.",
        "pseudocode": "f = (c * 9/5) + 32\nprint(f'{f:.1f}')",
        "explanation": "Standard temperature conversion formula.",
        "solution": "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        c = float(raw)\n        f = (c * 9 / 5) + 32\n        print(f'{f:.1f}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Using integer division 9 // 5 instead of float 9 / 5"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "arithmetic",
            "conversions"
        ]
    }
];
