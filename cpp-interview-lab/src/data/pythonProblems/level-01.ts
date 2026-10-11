import { Problem } from '../types';

export const pyLevel1Problems: Problem[] = [
    {
        "id": "py-prob-01-01",
        "levelId": "py-level-01",
        "title": "Hello Python",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Welcome to Python Interview Lab! Let's start with Python's most fundamental function: `print()`.\n\nIn Python, you do not need boilerplate functions or headers. Printing output is as simple as calling `print('your text')`.\n\n**Task:**\nWrite a program that prints exactly `Hello Python` to the standard output.",
        "whyThisMatters": "Every journey begins with output. Python's simplicity lets you focus directly on logic without syntax clutter.",
        "concepts": [
            "print",
            "strings",
            "python syntax"
        ],
        "prerequisites": [],
        "learningObjectives": [
            "Learn how to output text in Python",
            "Understand string literals"
        ],
        "constraints": [
            "Exact match required"
        ],
        "examples": [
            {
                "input": "",
                "output": "Hello Python"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "Hello Python",
                "hidden": false
            }
        ],
        "starterCode": "# Print 'Hello Python' below\n",
        "hints": [
            "Use the print() function.",
            "Pass 'Hello Python' as a string argument inside print()."
        ],
        "howToThink": [
            "What is the output required? ('Hello Python')",
            "Which Python function outputs text? (print)"
        ],
        "approach": "Call print('Hello Python').",
        "pseudocode": "print('Hello Python')",
        "explanation": "print() outputs the given string followed by a newline by default.",
        "solution": "print('Hello Python')\n",
        "commonMistakes": [
            "Misspelling Python or omitting quotes around string"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "basics",
            "output"
        ]
    },
    {
        "id": "py-prob-01-02",
        "levelId": "py-level-01",
        "title": "Print Three Lines",
        "type": "coding",
        "difficulty": "beginner",
        "order": 2,
        "description": "In Python, each `print()` call automatically outputs a newline character `\\n` at the end.\n\n**Task:**\nPrint the following three lines:\nOne\nTwo\nThree",
        "whyThisMatters": "Understanding how Python formats multiline output is critical for all standard I/O interview problems.",
        "concepts": [
            "print",
            "newlines",
            "multiline"
        ],
        "prerequisites": [
            "print"
        ],
        "learningObjectives": [
            "Print multiple lines of text"
        ],
        "constraints": [
            "Three distinct lines"
        ],
        "examples": [
            {
                "input": "",
                "output": "One\nTwo\nThree"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "One\nTwo\nThree",
                "hidden": false
            }
        ],
        "starterCode": "# Print One, Two, Three on separate lines\n",
        "hints": [
            "You can call print() three times in sequence."
        ],
        "howToThink": [
            "Call print('One'), print('Two'), print('Three')."
        ],
        "approach": "Use three sequential print calls.",
        "pseudocode": "print('One')\nprint('Two')\nprint('Three')",
        "explanation": "By default, print() appends end='\\n', moving the cursor to the next line.",
        "solution": "print('One')\nprint('Two')\nprint('Three')\n",
        "commonMistakes": [
            "Putting everything on one line without newlines"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "basics",
            "output"
        ]
    },
    {
        "id": "py-prob-01-03",
        "levelId": "py-level-01",
        "title": "Print with Custom Separator",
        "type": "coding",
        "difficulty": "beginner",
        "order": 3,
        "description": "The `print()` function accepts a `sep` keyword argument that specifies what string separates multiple printed arguments.\n\n**Task:**\nRead two space-separated words from input and print them joined by a hyphen `-` using `sep='-'`.",
        "whyThisMatters": "Python's keyword arguments like `sep` and `end` give you clean, powerful control over text output.",
        "concepts": [
            "print sep parameter",
            "formatting"
        ],
        "prerequisites": [
            "print"
        ],
        "learningObjectives": [
            "Use the sep parameter in print()"
        ],
        "constraints": [
            "Words contain letters only"
        ],
        "examples": [
            {
                "input": "Hello World",
                "output": "Hello-World"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Hello World",
                "expectedOutput": "Hello-World",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Python Rules",
                "expectedOutput": "Python-Rules",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Print words separated by hyphen\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use print(words[0], words[1], sep='-')."
        ],
        "howToThink": [
            "Split input into words, then print with hyphen separator."
        ],
        "approach": "Extract the two words and use print(*words, sep='-').",
        "pseudocode": "words = input.split()\nprint(words[0], words[1], sep='-')",
        "explanation": "sep='-' tells print to place a hyphen between arguments.",
        "solution": "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) >= 2:\n        print(words[0], words[1], sep='-')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Printing with space instead of hyphen"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "basics",
            "print"
        ]
    },
    {
        "id": "py-prob-01-04",
        "levelId": "py-level-01",
        "title": "Print on Same Line with End Parameter",
        "type": "coding",
        "difficulty": "beginner",
        "order": 4,
        "description": "By default, `print()` ends with a newline (`end='\\n'`). You can change this using `end=' '` to print values on the same line separated by spaces.\n\n**Task:**\nPrint numbers `1`, `2`, `3` separated by spaces on a single line.",
        "whyThisMatters": "Controlling line endings is essential when printing loop outputs or progress logs.",
        "concepts": [
            "print end parameter",
            "inline output"
        ],
        "prerequisites": [
            "print"
        ],
        "learningObjectives": [
            "Learn how to suppress newlines with end parameter"
        ],
        "constraints": [
            "Single line output"
        ],
        "examples": [
            {
                "input": "",
                "output": "1 2 3"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "1 2 3",
                "hidden": false
            }
        ],
        "starterCode": "# Print 1, 2, and 3 separated by spaces on one line\n",
        "hints": [
            "print('1 2 3')"
        ],
        "howToThink": [
            "Use end=' ' in print calls or print('1 2 3')."
        ],
        "approach": "Use print('1 2 3').",
        "pseudocode": "print('1 2 3')",
        "explanation": "Supplying end=' ' overrides the trailing newline.",
        "solution": "print('1 2 3')\n",
        "commonMistakes": [
            "Leaving trailing extra space or printing on separate lines"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "basics"
        ]
    },
    {
        "id": "py-prob-01-05",
        "levelId": "py-level-01",
        "title": "Integer and Float Output",
        "type": "coding",
        "difficulty": "beginner",
        "order": 5,
        "description": "Python handles numbers seamlessly. Print integer `42` on the first line, and float `3.14159` on the second line.",
        "whyThisMatters": "Python dynamically distinguishes between integers and floating-point numbers without type declarations.",
        "concepts": [
            "integers",
            "floats",
            "numeric types"
        ],
        "prerequisites": [
            "print"
        ],
        "learningObjectives": [
            "Output numerical constants"
        ],
        "constraints": [
            "Exact values"
        ],
        "examples": [
            {
                "input": "",
                "output": "42\n3.14159"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "42\n3.14159",
                "hidden": false
            }
        ],
        "starterCode": "# Print 42 and 3.14159\n",
        "hints": [
            "print(42) followed by print(3.14159)"
        ],
        "howToThink": [
            "Print integer on line 1, float on line 2."
        ],
        "approach": "Two print statements passing numeric literals.",
        "pseudocode": "print(42)\nprint(3.14159)",
        "explanation": "Python formats numbers cleanly without format strings needed for simple output.",
        "solution": "print(42)\nprint(3.14159)\n",
        "commonMistakes": [
            "Rounding the float prematurely"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "basics",
            "numbers"
        ]
    },
    {
        "id": "py-prob-01-06",
        "levelId": "py-level-01",
        "title": "String Multiplication",
        "type": "coding",
        "difficulty": "beginner",
        "order": 6,
        "description": "In Python, multiplying a string by an integer `n` repeats the string `n` times!\nFor example: `'abc' * 3` evaluates to `'abcabcabc'`.\n\n**Task:**\nPrint a line of exactly 10 asterisks (`*`) using Python's string multiplication operator.",
        "whyThisMatters": "String multiplication is a unique, powerful Python feature frequently used for banners, padding, and grid generation.",
        "concepts": [
            "string multiplication",
            "repetition operator"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Use the * operator on strings"
        ],
        "constraints": [
            "Exactly 10 asterisks"
        ],
        "examples": [
            {
                "input": "",
                "output": "**********"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "**********",
                "hidden": false
            }
        ],
        "starterCode": "# Print 10 asterisks using string multiplication\n",
        "hints": [
            "print('*' * 10)"
        ],
        "howToThink": [
            "Multiply the string '*' by 10 inside print()."
        ],
        "approach": "Use '*' * 10.",
        "pseudocode": "print('*' * 10)",
        "explanation": "Python overloads the * operator for sequence replication.",
        "solution": "print('*' * 10)\n",
        "commonMistakes": [
            "Writing 10 separate print statements"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "basics",
            "strings"
        ]
    },
    {
        "id": "py-prob-01-07",
        "levelId": "py-level-01",
        "title": "Formatted Strings (f-strings)",
        "type": "coding",
        "difficulty": "beginner",
        "order": 7,
        "description": "Python 3.6 introduced f-strings (`f'...'`), the modern, elegant way to interpolate variables into text.\n\n**Task:**\nRead a name and an age from standard input (space-separated) and print:\n`User <name> is <age> years old.`",
        "whyThisMatters": "f-strings are universally used in modern Python codebases and interview problem solutions.",
        "concepts": [
            "f-strings",
            "string interpolation"
        ],
        "prerequisites": [
            "input",
            "strings"
        ],
        "learningObjectives": [
            "Use f-strings for variable interpolation"
        ],
        "constraints": [
            "Name is a single word, age is integer"
        ],
        "examples": [
            {
                "input": "Alice 25",
                "output": "User Alice is 25 years old."
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Alice 25",
                "expectedOutput": "User Alice is 25 years old.",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Bob 30",
                "expectedOutput": "User Bob is 30 years old.",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        name, age = parts[0], parts[1]\n        # Print using f-string\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use print(f'User {name} is {age} years old.')"
        ],
        "howToThink": [
            "Extract name and age, wrap in f-string."
        ],
        "approach": "Interpolate variables using f-string syntax.",
        "pseudocode": "print(f'User {name} is {age} years old.')",
        "explanation": "Expressions enclosed in curly braces {name} inside an f-string are evaluated at runtime.",
        "solution": "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        name, age = parts[0], parts[1]\n        print(f'User {name} is {age} years old.')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting the 'f' prefix before the string"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "f-strings",
            "formatting"
        ]
    },
    {
        "id": "py-prob-01-08",
        "levelId": "py-level-01",
        "title": "Quotes & Escape Characters",
        "type": "coding",
        "difficulty": "beginner",
        "order": 8,
        "description": "In Python, you can enclose strings in single quotes `'` or double quotes `\"`.\nIf your string contains double quotes, you can enclose the string in single quotes without escaping!\n\n**Task:**\nPrint exactly:\n`He said, \"Python is great!\"`",
        "whyThisMatters": "Handling nested quotes and escape characters correctly prevents syntax errors in parsing problems.",
        "concepts": [
            "quotes",
            "escape characters",
            "string syntax"
        ],
        "prerequisites": [
            "strings"
        ],
        "learningObjectives": [
            "Handle double quotes inside single-quoted strings"
        ],
        "constraints": [
            "Exact punctuation"
        ],
        "examples": [
            {
                "input": "",
                "output": "He said, \"Python is great!\""
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "He said, \"Python is great!\"",
                "hidden": false
            }
        ],
        "starterCode": "# Print the quote with internal double quotes\n",
        "hints": [
            "Use single quotes to enclose the entire string: print('He said, \"Python is great!\"')"
        ],
        "howToThink": [
            "Enclose the whole string in single quotes so internal double quotes don't need backslashes."
        ],
        "approach": "Use single quotes around the literal string.",
        "pseudocode": "print('He said, \"Python is great!\"')",
        "explanation": "Python allows double quotes inside single-quoted strings and vice-versa.",
        "solution": "print('He said, \"Python is great!\"')\n",
        "commonMistakes": [
            "Using double quotes for the outer string without escaping the inner double quotes"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "strings",
            "basics"
        ]
    },
    {
        "id": "py-prob-01-09",
        "levelId": "py-level-01",
        "title": "ASCII Art Box Pattern",
        "type": "coding",
        "difficulty": "beginner",
        "order": 9,
        "description": "Print a 3x3 hollow box using asterisks and spaces:\n```\n***\n* *\n***\n```",
        "whyThisMatters": "Pattern printing develops row-by-row and line-by-line mental modeling.",
        "concepts": [
            "patterns",
            "multiline output"
        ],
        "prerequisites": [
            "print"
        ],
        "learningObjectives": [
            "Construct patterned ASCII outputs"
        ],
        "constraints": [
            "Exact 3x3 box"
        ],
        "examples": [
            {
                "input": "",
                "output": "***\n* *\n***"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "",
                "expectedOutput": "***\n* *\n***",
                "hidden": false
            }
        ],
        "starterCode": "# Print the 3x3 hollow box pattern\n",
        "hints": [
            "Print '***', then '* *', then '***'."
        ],
        "howToThink": [
            "Line 1: 3 stars. Line 2: star, space, star. Line 3: 3 stars."
        ],
        "approach": "Print three lines matching the pattern.",
        "pseudocode": "print('***')\nprint('* *')\nprint('***')",
        "explanation": "Row-based printing of fixed strings.",
        "solution": "print('***')\nprint('* *')\nprint('***')\n",
        "commonMistakes": [
            "Extra trailing spaces"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "patterns"
        ]
    },
    {
        "id": "py-prob-01-10",
        "levelId": "py-level-01",
        "title": "Formatted Price Receipt",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "Format numeric outputs with precision.\nGiven an item name and float price from input, print:\n`Item: <name> | Price: $<price:.2f>`\n\nWhere price is formatted to exactly 2 decimal places.",
        "whyThisMatters": "Financial and reporting interview tasks require strict two-decimal-place rounding and aligned formatting.",
        "concepts": [
            "float formatting",
            "f-string precision"
        ],
        "prerequisites": [
            "f-strings",
            "floats"
        ],
        "learningObjectives": [
            "Format float with .2f in f-strings"
        ],
        "constraints": [
            "Price > 0"
        ],
        "examples": [
            {
                "input": "Coffee 4.5",
                "output": "Item: Coffee | Price: $4.50"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Coffee 4.5",
                "expectedOutput": "Item: Coffee | Price: $4.50",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "Book 19.999",
                "expectedOutput": "Item: Book | Price: $20.00",
                "hidden": false
            }
        ],
        "starterCode": "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        item = parts[0]\n        price = float(parts[1])\n        # Format to 2 decimal places\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Use {price:.2f} in your f-string."
        ],
        "howToThink": [
            "Convert price string to float, then format with f'{price:.2f}'."
        ],
        "approach": "Read tokens, parse float, format with .2f.",
        "pseudocode": "print(f'Item: {item} | Price: ${price:.2f}')",
        "explanation": ":.2f inside an f-string formats a float to two decimal places, rounding appropriately.",
        "solution": "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        item = parts[0]\n        price = float(parts[1])\n        print(f'Item: {item} | Price: ${price:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Printing raw float without .2f formatting"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "formatting",
            "f-strings"
        ]
    }
];
