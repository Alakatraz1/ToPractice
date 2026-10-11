const fs = require('fs');
const path = require('path');

function writeLevel(levelNum, problems) {
    const filename = `level-${levelNum < 10 ? '0' + levelNum : levelNum}.ts`;
    const filePath = path.join(__dirname, '../src/data/pythonProblems', filename);
    const content = `import { Problem } from '../types';\n\nexport const pyLevel${levelNum}Problems: Problem[] = ${JSON.stringify(problems, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Generated ${filename} with ${problems.length} problems`);
}

// Level 1: Python Basics & Syntax
const level1 = [
    {
        id: "py-prob-01-01", levelId: "py-level-01", title: "Hello Python", type: "coding", difficulty: "beginner", order: 1,
        description: "Welcome to Python Interview Lab! Let's start with Python's most fundamental function: `print()`.\n\nIn Python, you do not need boilerplate functions or headers. Printing output is as simple as calling `print('your text')`.\n\n**Task:**\nWrite a program that prints exactly `Hello Python` to the standard output.",
        whyThisMatters: "Every journey begins with output. Python's simplicity lets you focus directly on logic without syntax clutter.",
        concepts: ["print", "strings", "python syntax"], prerequisites: [], learningObjectives: ["Learn how to output text in Python", "Understand string literals"], constraints: ["Exact match required"],
        examples: [{ input: "", output: "Hello Python" }],
        testCases: [{ id: "tc1", input: "", expectedOutput: "Hello Python", hidden: false }],
        starterCode: "# Print 'Hello Python' below\n",
        hints: ["Use the print() function.", "Pass 'Hello Python' as a string argument inside print()."],
        howToThink: ["What is the output required? ('Hello Python')", "Which Python function outputs text? (print)"],
        approach: "Call print('Hello Python').", pseudocode: "print('Hello Python')", explanation: "print() outputs the given string followed by a newline by default.",
        solution: "print('Hello Python')\n",
        commonMistakes: ["Misspelling Python or omitting quotes around string"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["basics", "output"]
    },
    {
        id: "py-prob-01-02", levelId: "py-level-01", title: "Print Three Lines", type: "coding", difficulty: "beginner", order: 2,
        description: "In Python, each `print()` call automatically outputs a newline character `\\n` at the end.\n\n**Task:**\nPrint the following three lines:\nOne\nTwo\nThree",
        whyThisMatters: "Understanding how Python formats multiline output is critical for all standard I/O interview problems.",
        concepts: ["print", "newlines", "multiline"], prerequisites: ["print"], learningObjectives: ["Print multiple lines of text"], constraints: ["Three distinct lines"],
        examples: [{ input: "", output: "One\nTwo\nThree" }],
        testCases: [{ id: "tc1", input: "", expectedOutput: "One\nTwo\nThree", hidden: false }],
        starterCode: "# Print One, Two, Three on separate lines\n",
        hints: ["You can call print() three times in sequence."],
        howToThink: ["Call print('One'), print('Two'), print('Three')."],
        approach: "Use three sequential print calls.", pseudocode: "print('One')\nprint('Two')\nprint('Three')", explanation: "By default, print() appends end='\\n', moving the cursor to the next line.",
        solution: "print('One')\nprint('Two')\nprint('Three')\n",
        commonMistakes: ["Putting everything on one line without newlines"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["basics", "output"]
    },
    {
        id: "py-prob-01-03", levelId: "py-level-01", title: "Print with Custom Separator", type: "coding", difficulty: "beginner", order: 3,
        description: "The `print()` function accepts a `sep` keyword argument that specifies what string separates multiple printed arguments.\n\n**Task:**\nRead two space-separated words from input and print them joined by a hyphen `-` using `sep='-'`.",
        whyThisMatters: "Python's keyword arguments like `sep` and `end` give you clean, powerful control over text output.",
        concepts: ["print sep parameter", "formatting"], prerequisites: ["print"], learningObjectives: ["Use the sep parameter in print()"], constraints: ["Words contain letters only"],
        examples: [{ input: "Hello World", output: "Hello-World" }],
        testCases: [
            { id: "tc1", input: "Hello World", expectedOutput: "Hello-World", hidden: false },
            { id: "tc2", input: "Python Rules", expectedOutput: "Python-Rules", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    # Print words separated by hyphen\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use print(words[0], words[1], sep='-')."],
        howToThink: ["Split input into words, then print with hyphen separator."],
        approach: "Extract the two words and use print(*words, sep='-').", pseudocode: "words = input.split()\nprint(words[0], words[1], sep='-')", explanation: "sep='-' tells print to place a hyphen between arguments.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) >= 2:\n        print(words[0], words[1], sep='-')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Printing with space instead of hyphen"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["basics", "print"]
    },
    {
        id: "py-prob-01-04", levelId: "py-level-01", title: "Print on Same Line with End Parameter", type: "coding", difficulty: "beginner", order: 4,
        description: "By default, `print()` ends with a newline (`end='\\n'`). You can change this using `end=' '` to print values on the same line separated by spaces.\n\n**Task:**\nPrint numbers `1`, `2`, `3` separated by spaces on a single line.",
        whyThisMatters: "Controlling line endings is essential when printing loop outputs or progress logs.",
        concepts: ["print end parameter", "inline output"], prerequisites: ["print"], learningObjectives: ["Learn how to suppress newlines with end parameter"], constraints: ["Single line output"],
        examples: [{ input: "", output: "1 2 3" }],
        testCases: [{ id: "tc1", input: "", expectedOutput: "1 2 3", hidden: false }],
        starterCode: "# Print 1, 2, and 3 separated by spaces on one line\n",
        hints: ["print('1 2 3')"],
        howToThink: ["Use end=' ' in print calls or print('1 2 3')."],
        approach: "Use print('1 2 3').", pseudocode: "print('1 2 3')", explanation: "Supplying end=' ' overrides the trailing newline.",
        solution: "print('1 2 3')\n",
        commonMistakes: ["Leaving trailing extra space or printing on separate lines"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["basics"]
    },
    {
        id: "py-prob-01-05", levelId: "py-level-01", title: "Integer and Float Output", type: "coding", difficulty: "beginner", order: 5,
        description: "Python handles numbers seamlessly. Print integer `42` on the first line, and float `3.14159` on the second line.",
        whyThisMatters: "Python dynamically distinguishes between integers and floating-point numbers without type declarations.",
        concepts: ["integers", "floats", "numeric types"], prerequisites: ["print"], learningObjectives: ["Output numerical constants"], constraints: ["Exact values"],
        examples: [{ input: "", output: "42\n3.14159" }],
        testCases: [{ id: "tc1", input: "", expectedOutput: "42\n3.14159", hidden: false }],
        starterCode: "# Print 42 and 3.14159\n",
        hints: ["print(42) followed by print(3.14159)"],
        howToThink: ["Print integer on line 1, float on line 2."],
        approach: "Two print statements passing numeric literals.", pseudocode: "print(42)\nprint(3.14159)", explanation: "Python formats numbers cleanly without format strings needed for simple output.",
        solution: "print(42)\nprint(3.14159)\n",
        commonMistakes: ["Rounding the float prematurely"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["basics", "numbers"]
    },
    {
        id: "py-prob-01-06", levelId: "py-level-01", title: "String Multiplication", type: "coding", difficulty: "beginner", order: 6,
        description: "In Python, multiplying a string by an integer `n` repeats the string `n` times!\nFor example: `'abc' * 3` evaluates to `'abcabcabc'`.\n\n**Task:**\nPrint a line of exactly 10 asterisks (`*`) using Python's string multiplication operator.",
        whyThisMatters: "String multiplication is a unique, powerful Python feature frequently used for banners, padding, and grid generation.",
        concepts: ["string multiplication", "repetition operator"], prerequisites: ["strings"], learningObjectives: ["Use the * operator on strings"], constraints: ["Exactly 10 asterisks"],
        examples: [{ input: "", output: "**********" }],
        testCases: [{ id: "tc1", input: "", expectedOutput: "**********", hidden: false }],
        starterCode: "# Print 10 asterisks using string multiplication\n",
        hints: ["print('*' * 10)"],
        howToThink: ["Multiply the string '*' by 10 inside print()."],
        approach: "Use '*' * 10.", pseudocode: "print('*' * 10)", explanation: "Python overloads the * operator for sequence replication.",
        solution: "print('*' * 10)\n",
        commonMistakes: ["Writing 10 separate print statements"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["basics", "strings"]
    },
    {
        id: "py-prob-01-07", levelId: "py-level-01", title: "Formatted Strings (f-strings)", type: "coding", difficulty: "beginner", order: 7,
        description: "Python 3.6 introduced f-strings (`f'...'`), the modern, elegant way to interpolate variables into text.\n\n**Task:**\nRead a name and an age from standard input (space-separated) and print:\n`User <name> is <age> years old.`",
        whyThisMatters: "f-strings are universally used in modern Python codebases and interview problem solutions.",
        concepts: ["f-strings", "string interpolation"], prerequisites: ["input", "strings"], learningObjectives: ["Use f-strings for variable interpolation"], constraints: ["Name is a single word, age is integer"],
        examples: [{ input: "Alice 25", output: "User Alice is 25 years old." }],
        testCases: [
            { id: "tc1", input: "Alice 25", expectedOutput: "User Alice is 25 years old.", hidden: false },
            { id: "tc2", input: "Bob 30", expectedOutput: "User Bob is 30 years old.", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        name, age = parts[0], parts[1]\n        # Print using f-string\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use print(f'User {name} is {age} years old.')"],
        howToThink: ["Extract name and age, wrap in f-string."],
        approach: "Interpolate variables using f-string syntax.", pseudocode: "print(f'User {name} is {age} years old.')", explanation: "Expressions enclosed in curly braces {name} inside an f-string are evaluated at runtime.",
        solution: "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        name, age = parts[0], parts[1]\n        print(f'User {name} is {age} years old.')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting the 'f' prefix before the string"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["f-strings", "formatting"]
    },
    {
        id: "py-prob-01-08", levelId: "py-level-01", title: "Quotes & Escape Characters", type: "coding", difficulty: "beginner", order: 8,
        description: "In Python, you can enclose strings in single quotes `'` or double quotes `\"`.\nIf your string contains double quotes, you can enclose the string in single quotes without escaping!\n\n**Task:**\nPrint exactly:\n`He said, \"Python is great!\"`",
        whyThisMatters: "Handling nested quotes and escape characters correctly prevents syntax errors in parsing problems.",
        concepts: ["quotes", "escape characters", "string syntax"], prerequisites: ["strings"], learningObjectives: ["Handle double quotes inside single-quoted strings"], constraints: ["Exact punctuation"],
        examples: [{ input: "", output: 'He said, \"Python is great!\"' }],
        testCases: [{ id: "tc1", input: "", expectedOutput: 'He said, \"Python is great!\"', hidden: false }],
        starterCode: "# Print the quote with internal double quotes\n",
        hints: ["Use single quotes to enclose the entire string: print('He said, \"Python is great!\"')"],
        howToThink: ["Enclose the whole string in single quotes so internal double quotes don't need backslashes."],
        approach: "Use single quotes around the literal string.", pseudocode: "print('He said, \"Python is great!\"')", explanation: "Python allows double quotes inside single-quoted strings and vice-versa.",
        solution: "print('He said, \"Python is great!\"')\n",
        commonMistakes: ["Using double quotes for the outer string without escaping the inner double quotes"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["strings", "basics"]
    },
    {
        id: "py-prob-01-09", levelId: "py-level-01", title: "ASCII Art Box Pattern", type: "coding", difficulty: "beginner", order: 9,
        description: "Print a 3x3 hollow box using asterisks and spaces:\n```\n***\n* *\n***\n```",
        whyThisMatters: "Pattern printing develops row-by-row and line-by-line mental modeling.",
        concepts: ["patterns", "multiline output"], prerequisites: ["print"], learningObjectives: ["Construct patterned ASCII outputs"], constraints: ["Exact 3x3 box"],
        examples: [{ input: "", output: "***\n* *\n***" }],
        testCases: [{ id: "tc1", input: "", expectedOutput: "***\n* *\n***", hidden: false }],
        starterCode: "# Print the 3x3 hollow box pattern\n",
        hints: ["Print '***', then '* *', then '***'."],
        howToThink: ["Line 1: 3 stars. Line 2: star, space, star. Line 3: 3 stars."],
        approach: "Print three lines matching the pattern.", pseudocode: "print('***')\nprint('* *')\nprint('***')", explanation: "Row-based printing of fixed strings.",
        solution: "print('***')\nprint('* *')\nprint('***')\n",
        commonMistakes: ["Extra trailing spaces"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["patterns"]
    },
    {
        id: "py-prob-01-10", levelId: "py-level-01", title: "Formatted Price Receipt", type: "coding", difficulty: "easy", order: 10,
        description: "Format numeric outputs with precision.\nGiven an item name and float price from input, print:\n`Item: <name> | Price: $<price:.2f>`\n\nWhere price is formatted to exactly 2 decimal places.",
        whyThisMatters: "Financial and reporting interview tasks require strict two-decimal-place rounding and aligned formatting.",
        concepts: ["float formatting", "f-string precision"], prerequisites: ["f-strings", "floats"], learningObjectives: ["Format float with .2f in f-strings"], constraints: ["Price > 0"],
        examples: [{ input: "Coffee 4.5", output: "Item: Coffee | Price: $4.50" }],
        testCases: [
            { id: "tc1", input: "Coffee 4.5", expectedOutput: "Item: Coffee | Price: $4.50", hidden: false },
            { id: "tc2", input: "Book 19.999", expectedOutput: "Item: Book | Price: $20.00", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        item = parts[0]\n        price = float(parts[1])\n        # Format to 2 decimal places\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use {price:.2f} in your f-string."],
        howToThink: ["Convert price string to float, then format with f'{price:.2f}'."],
        approach: "Read tokens, parse float, format with .2f.", pseudocode: "print(f'Item: {item} | Price: ${price:.2f}')", explanation: ":.2f inside an f-string formats a float to two decimal places, rounding appropriately.",
        solution: "import sys\n\ndef solve():\n    parts = sys.stdin.read().split()\n    if len(parts) >= 2:\n        item = parts[0]\n        price = float(parts[1])\n        print(f'Item: {item} | Price: ${price:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Printing raw float without .2f formatting"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["formatting", "f-strings"]
    }
];

// Level 2: Variables, Types & Input
const level2 = [
    {
        id: "py-prob-02-01", levelId: "py-level-02", title: "Read and Greet", type: "coding", difficulty: "beginner", order: 1,
        description: "Read a user's name from standard input and print:\n`Welcome, <name>!`",
        whyThisMatters: "Standard input parsing is how every algorithm receives its test data.",
        concepts: ["input", "strings"], prerequisites: ["print"], learningObjectives: ["Read string input from user"], constraints: ["Name is non-empty"],
        examples: [{ input: "Dev", output: "Welcome, Dev!" }],
        testCases: [
            { id: "tc1", input: "Dev", expectedOutput: "Welcome, Dev!", hidden: false },
            { id: "tc2", input: "Sarah", expectedOutput: "Welcome, Sarah!", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    name = sys.stdin.read().strip()\n    # Print greeting\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Read the name with sys.stdin.read().strip() and print with an f-string."],
        howToThink: ["Read name, use f'Welcome, {name}!'."],
        approach: "Read stripped input, format with f-string.", pseudocode: "name = input.strip()\nprint(f'Welcome, {name}!')", explanation: "sys.stdin.read().strip() removes leading and trailing whitespace/newlines.",
        solution: "import sys\n\ndef solve():\n    name = sys.stdin.read().strip()\n    if name:\n        print(f'Welcome, {name}!')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Leaving extra whitespace in name"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["input", "strings"]
    },
    {
        id: "py-prob-02-02", levelId: "py-level-02", title: "Sum Two Integers", type: "coding", difficulty: "beginner", order: 2,
        description: "Read two space-separated integers `A` and `B` and print their sum.",
        whyThisMatters: "Python automatically handles arbitrarily large integers without integer overflow issues.",
        concepts: ["integers", "arithmetic", "addition"], prerequisites: ["input"], learningObjectives: ["Convert string inputs to integers and perform arithmetic"], constraints: ["-10^9 <= A, B <= 10^9"],
        examples: [{ input: "15 27", output: "42" }],
        testCases: [
            { id: "tc1", input: "15 27", expectedOutput: "42", hidden: false },
            { id: "tc2", input: "-10 50", expectedOutput: "40", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Calculate and print sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["nums[0] + nums[1] gives the sum."],
        howToThink: ["Map input to ints, add them."],
        approach: "Parse integers with map(int, ...) and sum.", pseudocode: "a, b = map(int, input.split())\nprint(a + b)", explanation: "Python int type has arbitrary precision.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(nums[0] + nums[1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Adding as strings instead of converting to int"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["arithmetic", "integers"]
    },
    {
        id: "py-prob-02-03", levelId: "py-level-02", title: "Floor and True Division", type: "coding", difficulty: "beginner", order: 3,
        description: "Python provides two division operators:\n- True division `/` returns a float.\n- Floor division `//` truncates the fractional part and returns an integer.\n\n**Task:**\nGiven two integers `A` and `B`, print `A // B` on the first line, and `A / B` (formatted to 2 decimal places) on the second line.",
        whyThisMatters: "Distinguishing `//` from `/` is crucial; bugs from accidental float division are common in index computations.",
        concepts: ["floor division", "float division", "operators"], prerequisites: ["arithmetic"], learningObjectives: ["Understand // vs / in Python"], constraints: ["B != 0"],
        examples: [{ input: "7 2", output: "3\n3.50" }],
        testCases: [
            { id: "tc1", input: "7 2", expectedOutput: "3\n3.50", hidden: false },
            { id: "tc2", input: "10 3", expectedOutput: "3\n3.33", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        a, b = nums[0], nums[1]\n        # Print floor division and true division\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Print a // b, then print f'{a / b:.2f}'."],
        howToThink: ["First line: a // b. Second line: format a / b to .2f."],
        approach: "Use // for integer floor and / with .2f for true division.", pseudocode: "print(a // b)\nprint(f'{a / b:.2f}')", explanation: "Floor division // rounds towards negative infinity in Python.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        a, b = nums[0], nums[1]\n        print(a // b)\n        print(f'{a / b:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using / for both calculations"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["operators", "math"]
    },
    {
        id: "py-prob-02-04", levelId: "py-level-02", title: "Modulo and Remainder", type: "coding", difficulty: "beginner", order: 4,
        description: "The modulo operator `%` calculates the remainder of division.\n\n**Task:**\nRead two integers `A` and `B` and print `A % B`.",
        whyThisMatters: "Modulo is ubiquitous in cyclic data structures, hash functions, and clock arithmetic.",
        concepts: ["modulo", "remainder"], prerequisites: ["arithmetic"], learningObjectives: ["Use the % operator"], constraints: ["B > 0"],
        examples: [{ input: "17 5", output: "2" }],
        testCases: [
            { id: "tc1", input: "17 5", expectedOutput: "2", hidden: false },
            { id: "tc2", input: "20 4", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(nums[0] % nums[1])\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Calculate nums[0] % nums[1]."],
        howToThink: ["Apply % operator."],
        approach: "Return a % b.", pseudocode: "print(a % b)", explanation: "17 % 5 is 2 because 5 * 3 = 15, leaving 2.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(nums[0] % nums[1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Dividing by zero"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["math", "modulo"]
    },
    {
        id: "py-prob-02-05", levelId: "py-level-02", title: "Pythonic Variable Swap", type: "coding", difficulty: "beginner", order: 5,
        description: "In C++, swapping two variables requires a temporary variable or `std::swap`.\nIn Python, you can swap variables in a single elegant line:\n`a, b = b, a`\n\n**Task:**\nRead two space-separated words `A` and `B`. Swap them using `a, b = b, a` and print them space-separated.",
        whyThisMatters: "Tuple unpacking makes Python code readable, concise, and eliminates entire classes of pointer and temporary variable bugs.",
        concepts: ["tuple unpacking", "variable swap", "pythonic syntax"], prerequisites: ["variables"], learningObjectives: ["Swap variables using tuple unpacking"], constraints: ["Non-empty words"],
        examples: [{ input: "cat dog", output: "dog cat" }],
        testCases: [
            { id: "tc1", input: "cat dog", expectedOutput: "dog cat", hidden: false },
            { id: "tc2", input: "first second", expectedOutput: "second first", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) >= 2:\n        a, b = words[0], words[1]\n        # Swap pythonically\n        a, b = b, a\n        print(a, b)\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Assign a, b = b, a then print(a, b)."],
        howToThink: ["Unpack swapped tuple: a, b = b, a."],
        approach: "Use a, b = b, a.", pseudocode: "a, b = b, a\nprint(a, b)", explanation: "Python evaluates the right side into a temporary tuple (b, a) and unpacks it into the left side variables.",
        solution: "import sys\n\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) >= 2:\n        a, b = words[0], words[1]\n        a, b = b, a\n        print(a, b)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Creating an unnecessary temp variable"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["idioms", "variables"]
    },
    {
        id: "py-prob-02-06", levelId: "py-level-02", title: "Type Conversion & Rounding", type: "coding", difficulty: "beginner", order: 6,
        description: "Given a floating-point number as input:\nPrint its truncated integer part (`int(x)`) on the first line, and its rounded integer (`round(x)`) on the second line.",
        whyThisMatters: "Truncation vs rounding differences often cause off-by-one errors in binary search and indexing algorithms.",
        concepts: ["type casting", "int()", "round()"], prerequisites: ["floats", "integers"], learningObjectives: ["Learn difference between int truncation and round()"], constraints: ["Float input"],
        examples: [{ input: "7.8", output: "7\n8" }],
        testCases: [
            { id: "tc1", input: "7.8", expectedOutput: "7\n8", hidden: false },
            { id: "tc2", input: "4.2", expectedOutput: "4\n4", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    x = float(sys.stdin.read().strip())\n    # Print int(x) and round(x)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(int(x)) then print(round(x))"],
        howToThink: ["int(x) drops decimals. round(x) rounds to nearest integer."],
        approach: "Apply int() and round().", pseudocode: "print(int(x))\nprint(round(x))", explanation: "int() discards the fractional part towards zero. round() rounds to the nearest integer.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        x = float(raw)\n        print(int(x))\n        print(round(x))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Confusing truncation with floor"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["casting", "math"]
    },
    {
        id: "py-prob-02-07", levelId: "py-level-02", title: "Circle Area Calculator", type: "coding", difficulty: "easy", order: 7,
        description: "Given the radius `R` of a circle as a float, compute its area using formula:\n`Area = 3.14159 * R * R`\nPrint the area formatted to 2 decimal places.",
        whyThisMatters: "Tests combining variable math, exponentiation operator `**`, and precision formatting.",
        concepts: ["math", "exponentiation", "precision"], prerequisites: ["floats", "f-strings"], learningObjectives: ["Use the ** exponent operator and format output"], constraints: ["R > 0"],
        examples: [{ input: "5.0", output: "78.54" }],
        testCases: [
            { id: "tc1", input: "5.0", expectedOutput: "78.54", hidden: false },
            { id: "tc2", input: "2.5", expectedOutput: "19.63", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    r = float(sys.stdin.read().strip())\n    # Compute and print area to 2 decimals\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use area = 3.14159 * (r ** 2) and print(f'{area:.2f}')."],
        howToThink: ["Calculate area = 3.14159 * r * r, print f'{area:.2f}'."],
        approach: "Use float math and format to .2f.", pseudocode: "area = 3.14159 * r * r\nprint(f'{area:.2f}')", explanation: "** is the exponentiation operator in Python.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        r = float(raw)\n        area = 3.14159 * (r ** 2)\n        print(f'{area:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using ^ instead of ** for power"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["math", "geometry"]
    },
    {
        id: "py-prob-02-08", levelId: "py-level-02", title: "Count Space-Separated Tokens", type: "coding", difficulty: "beginner", order: 8,
        description: "Read a line of text containing an arbitrary number of space-separated words, and print the total number of words read.",
        whyThisMatters: "`sys.stdin.read().split()` splits text on arbitrary whitespace (spaces, tabs, newlines), perfectly normalizing interview input.",
        concepts: ["split", "len", "tokenization"], prerequisites: ["input"], learningObjectives: ["Count tokens in standard input"], constraints: ["Line contains words"],
        examples: [{ input: "Apple Banana Cherry Date", output: "4" }],
        testCases: [
            { id: "tc1", input: "Apple Banana Cherry Date", expectedOutput: "4", hidden: false },
            { id: "tc2", input: "Single", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    # Print count of tokens\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["len(tokens) gives the number of items in the list."],
        howToThink: ["Use len() on the split list."],
        approach: "Split input and print len().", pseudocode: "tokens = input.split()\nprint(len(tokens))", explanation: "split() with no arguments splits across consecutive whitespace and discards empty strings.",
        solution: "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    print(len(tokens))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Calling split(' ') which fails on multiple consecutive spaces"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["input", "lists"]
    },
    {
        id: "py-prob-02-09", levelId: "py-level-02", title: "Boolean Evaluation", type: "coding", difficulty: "beginner", order: 9,
        description: "In Python, boolean literals are capitalized: `True` and `False`.\n\n**Task:**\nRead an integer `N`. Print `True` if `N > 0`, otherwise print `False`.",
        whyThisMatters: "Python boolean values are distinct capitalized keywords unlike C++ lowercase `true`/`false`.",
        concepts: ["booleans", "comparisons", "truth values"], prerequisites: ["comparisons"], learningObjectives: ["Evaluate boolean expressions directly"], constraints: ["Integer input"],
        examples: [{ input: "10", output: "True" }],
        testCases: [
            { id: "tc1", input: "10", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "-5", expectedOutput: "False", hidden: false },
            { id: "tc3", input: "0", expectedOutput: "False", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print boolean result directly\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["You can simply print(n > 0)."],
        howToThink: ["The expression n > 0 directly evaluates to True or False."],
        approach: "print(n > 0).", pseudocode: "print(n > 0)", explanation: "Comparison operators evaluate directly to boolean objects in Python.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(n > 0)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Writing complex if/else when print(n > 0) suffices"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["booleans"]
    },
    {
        id: "py-prob-02-10", levelId: "py-level-02", title: "Celsius to Fahrenheit Converter", type: "coding", difficulty: "easy", order: 10,
        description: "Given a temperature in Celsius `C` as a float, convert it to Fahrenheit using formula:\n`F = (C * 9/5) + 32`\nPrint the Fahrenheit temperature rounded to 1 decimal place.",
        whyThisMatters: "Formula translation and precision output are ubiquitous in entry-level coding screens.",
        concepts: ["arithmetic", "formula translation", "precision"], prerequisites: ["floats", "arithmetic"], learningObjectives: ["Convert units with standard arithmetic"], constraints: ["-100 <= C <= 200"],
        examples: [{ input: "25.0", output: "77.0" }],
        testCases: [
            { id: "tc1", input: "25.0", expectedOutput: "77.0", hidden: false },
            { id: "tc2", input: "0.0", expectedOutput: "32.0", hidden: false },
            { id: "tc3", input: "-40.0", expectedOutput: "-40.0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    c = float(sys.stdin.read().strip())\n    # Compute fahrenheit and print with 1 decimal\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["f = (c * 9/5) + 32, then print(f'{f:.1f}')."],
        howToThink: ["Apply formula, format with .1f."],
        approach: "Calculate (c * 9/5) + 32 and format with .1f.", pseudocode: "f = (c * 9/5) + 32\nprint(f'{f:.1f}')", explanation: "Standard temperature conversion formula.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        c = float(raw)\n        f = (c * 9 / 5) + 32\n        print(f'{f:.1f}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using integer division 9 // 5 instead of float 9 / 5"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["arithmetic", "conversions"]
    }
];

// Level 3: Conditionals & Boolean Logic
const level3 = [
    {
        id: "py-prob-03-01", levelId: "py-level-03", title: "Even or Odd", type: "coding", difficulty: "beginner", order: 1,
        description: "Given an integer `N`, determine if it is even or odd.\nPrint `Even` if `N % 2 == 0`, otherwise print `Odd`.",
        whyThisMatters: "Parity checking with modulo is the quintessential first conditional problem.",
        concepts: ["if-else", "modulo", "parity"], prerequisites: ["conditions"], learningObjectives: ["Write basic if-else branching"], constraints: ["-10^9 <= N <= 10^9"],
        examples: [{ input: "8", output: "Even" }],
        testCases: [
            { id: "tc1", input: "8", expectedOutput: "Even", hidden: false },
            { id: "tc2", input: "7", expectedOutput: "Odd", hidden: false },
            { id: "tc3", input: "0", expectedOutput: "Even", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print 'Even' or 'Odd'\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Check if n % 2 == 0."],
        howToThink: ["If n % 2 == 0, print 'Even', else 'Odd'."],
        approach: "Check modulo 2.", pseudocode: "if n % 2 == 0: print('Even')\nelse: print('Odd')", explanation: "Any integer divisible by 2 with no remainder is even.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print('Even' if n % 2 == 0 else 'Odd')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Handling negative numbers incorrectly (though n % 2 == 0 works in Python)"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["conditionals"]
    },
    {
        id: "py-prob-03-02", levelId: "py-level-03", title: "Maximum of Two Numbers", type: "coding", difficulty: "beginner", order: 2,
        description: "Read two integers `A` and `B` and print the larger value.",
        whyThisMatters: "Comparing values and finding extreme elements is the foundation of greedy algorithms and search.",
        concepts: ["if-else", "max", "comparison"], prerequisites: ["conditionals"], learningObjectives: ["Compare two numbers using relational operators"], constraints: ["Integers A and B"],
        examples: [{ input: "12 45", output: "45" }],
        testCases: [
            { id: "tc1", input: "12 45", expectedOutput: "45", hidden: false },
            { id: "tc2", input: "99 99", expectedOutput: "99", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print larger number\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use if a > b: print(a) else: print(b) or max(a, b)."],
        howToThink: ["Compare a and b, output the greater one."],
        approach: "Use conditional logic or built-in max().", pseudocode: "print(max(a, b))", explanation: "max() returns the largest of the arguments provided.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(max(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing when numbers are equal"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["conditionals", "max"]
    },
    {
        id: "py-prob-03-03", levelId: "py-level-03", title: "Maximum of Three Numbers", type: "coding", difficulty: "beginner", order: 3,
        description: "Read three integers `A`, `B`, and `C` and print the largest among them.",
        whyThisMatters: "Chaining conditions with `elif` or `and` teaches clean logical branching.",
        concepts: ["elif", "logical and", "multi-way branching"], prerequisites: ["conditionals"], learningObjectives: ["Chain conditions with elif or use max()"], constraints: ["Three integers"],
        examples: [{ input: "10 50 30", output: "50" }],
        testCases: [
            { id: "tc1", input: "10 50 30", expectedOutput: "50", hidden: false },
            { id: "tc2", input: "100 20 5", expectedOutput: "100", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print maximum of three\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["max(nums[0], nums[1], nums[2])"],
        howToThink: ["Find maximum of all three numbers."],
        approach: "Use max(a, b, c).", pseudocode: "print(max(a, b, c))", explanation: "max() handles any number of positional arguments in Python.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 3:\n        print(max(nums[0], nums[1], nums[2]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Writing deeply nested if statements unnecessarily"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["conditionals"]
    },
    {
        id: "py-prob-03-04", levelId: "py-level-03", title: "Leap Year Checker", type: "coding", difficulty: "easy", order: 4,
        description: "A year is a leap year if:\n1. It is divisible by 4 AND not divisible by 100, OR\n2. It is divisible by 400.\n\n**Task:**\nGiven an integer `year`, print `Leap Year` if it is a leap year, otherwise print `Not Leap Year`.",
        whyThisMatters: "Leap year logic is a classic test of compound boolean expressions with `and` and `or` precedence.",
        concepts: ["boolean logic", "and", "or", "precedence"], prerequisites: ["conditions"], learningObjectives: ["Combine and / or logical operators correctly"], constraints: ["Year > 0"],
        examples: [{ input: "2024", output: "Leap Year" }, { input: "1900", output: "Not Leap Year" }],
        testCases: [
            { id: "tc1", input: "2024", expectedOutput: "Leap Year", hidden: false },
            { id: "tc2", input: "1900", expectedOutput: "Not Leap Year", hidden: false },
            { id: "tc3", input: "2000", expectedOutput: "Leap Year", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    year = int(sys.stdin.read().strip())\n    # Check leap year condition\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)"],
        howToThink: ["Divisible by 400? Leap. Divisible by 100? Not leap. Divisible by 4? Leap."],
        approach: "Use compound boolean condition.", pseudocode: "if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0): print('Leap Year') else: print('Not Leap Year')", explanation: "Gregorian calendar leap year rule accurately implemented.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        y = int(raw)\n        if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):\n            print('Leap Year')\n        else:\n            print('Not Leap Year')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Assuming every year divisible by 4 is a leap year (1900 is not)"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["logic", "calendar"]
    },
    {
        id: "py-prob-03-05", levelId: "py-level-03", title: "Letter Grade Calculator", type: "coding", difficulty: "easy", order: 5,
        description: "Given an integer exam score (0 to 100), print the corresponding letter grade:\n- `90 <= score <= 100`: `A`\n- `80 <= score < 90`: `B`\n- `70 <= score < 80`: `C`\n- `60 <= score < 70`: `D`\n- `score < 60`: `F`",
        whyThisMatters: "Python allows chained comparisons like `90 <= score <= 100`, making range checks cleaner than any other language.",
        concepts: ["chained comparisons", "elif", "range logic"], prerequisites: ["conditions"], learningObjectives: ["Use Python chained comparisons (e.g. 80 <= score < 90)"], constraints: ["0 <= score <= 100"],
        examples: [{ input: "85", output: "B" }],
        testCases: [
            { id: "tc1", input: "85", expectedOutput: "B", hidden: false },
            { id: "tc2", input: "92", expectedOutput: "A", hidden: false },
            { id: "tc3", input: "55", expectedOutput: "F", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    score = int(sys.stdin.read().strip())\n    # Compute and print grade\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Check from highest to lowest: if score >= 90: 'A', elif score >= 80: 'B'..."],
        howToThink: ["Descending threshold check is cleanest."],
        approach: "Check if score >= 90, elif >= 80, etc.", pseudocode: "if s >= 90: 'A'\nelif s >= 80: 'B'\nelif s >= 70: 'C'\nelif s >= 60: 'D'\nelse: 'F'", explanation: "Checking in descending order simplifies conditions without needing lower bound checks.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        s = int(raw)\n        if s >= 90:\n            print('A')\n        elif s >= 80:\n            print('B')\n        elif s >= 70:\n            print('C')\n        elif s >= 60:\n            print('D')\n        else:\n            print('F')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Checking ascending order without compound bounds"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["branching"]
    },
    {
        id: "py-prob-03-06", levelId: "py-level-03", title: "Triangle Inequality Theorem", type: "coding", difficulty: "easy", order: 6,
        description: "Given three positive integer side lengths `A`, `B`, and `C`:\nDetermine if they can form a non-degenerate triangle.\nA triangle is valid if the sum of any two sides is strictly greater than the third side:\n`A + B > C and A + C > B and B + C > A`.\nPrint `Valid` or `Invalid`.",
        whyThisMatters: "Tests geometric boundary validation frequently tested in computational geometry interviews.",
        concepts: ["triangle inequality", "boolean and", "geometry"], prerequisites: ["conditions"], learningObjectives: ["Apply triangle inequality theorem"], constraints: ["A, B, C > 0"],
        examples: [{ input: "3 4 5", output: "Valid" }, { input: "1 2 5", output: "Invalid" }],
        testCases: [
            { id: "tc1", input: "3 4 5", expectedOutput: "Valid", hidden: false },
            { id: "tc2", input: "1 2 5", expectedOutput: "Invalid", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    sides = list(map(int, sys.stdin.read().split()))\n    # Check triangle validity\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Check a + b > c and a + c > b and b + c > a."],
        howToThink: ["All three sum conditions must hold."],
        approach: "Check if all three pair sums exceed the third.", pseudocode: "if a+b>c and a+c>b and b+c>a: 'Valid' else: 'Invalid'", explanation: "Triangle inequality guarantees a closed polygon can be formed.",
        solution: "import sys\n\ndef solve():\n    sides = list(map(int, sys.stdin.read().split()))\n    if len(sides) >= 3:\n        a, b, c = sides[0], sides[1], sides[2]\n        if a + b > c and a + c > b and b + c > a:\n            print('Valid')\n        else:\n            print('Invalid')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using >= instead of strict >"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["geometry", "math"]
    },
    {
        id: "py-prob-03-07", levelId: "py-level-03", title: "Vowel or Consonant", type: "coding", difficulty: "beginner", order: 7,
        description: "Read a single lowercase English letter. Print `Vowel` if it is one of `a, e, i, o, u`, otherwise print `Consonant`.",
        whyThisMatters: "Demonstrates Python's intuitive `in` membership operator: `char in 'aeiou'`.",
        concepts: ["membership operator", "in keyword"], prerequisites: ["strings", "conditions"], learningObjectives: ["Use the in operator for set/collection membership"], constraints: ["Single lowercase letter"],
        examples: [{ input: "e", output: "Vowel" }, { input: "z", output: "Consonant" }],
        testCases: [
            { id: "tc1", input: "e", expectedOutput: "Vowel", hidden: false },
            { id: "tc2", input: "z", expectedOutput: "Consonant", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    ch = sys.stdin.read().strip()\n    # Print 'Vowel' or 'Consonant'\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use if ch in 'aeiou': print('Vowel')"],
        howToThink: ["Test if character exists in vowels string."],
        approach: "Use 'in' keyword.", pseudocode: "if ch in 'aeiou': print('Vowel')\nelse: print('Consonant')", explanation: "The in operator in Python checks for substring or collection membership in clean syntax.",
        solution: "import sys\n\ndef solve():\n    ch = sys.stdin.read().strip()\n    if ch:\n        print('Vowel' if ch in 'aeiou' else 'Consonant')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Writing five separate == conditions when 'in' is idiomatic"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["strings", "membership"]
    },
    {
        id: "py-prob-03-08", levelId: "py-level-03", title: "Sign of a Number", type: "coding", difficulty: "beginner", order: 8,
        description: "Given an integer `N`, determine its sign:\n- If `N > 0`, print `Positive`\n- If `N < 0`, print `Negative`\n- If `N == 0`, print `Zero`",
        whyThisMatters: "Three-way branching with `if / elif / else` is standard control flow.",
        concepts: ["elif", "sign function", "branching"], prerequisites: ["conditions"], learningObjectives: ["Handle three distinct states with if/elif/else"], constraints: ["Integer input"],
        examples: [{ input: "-15", output: "Negative" }, { input: "0", output: "Zero" }],
        testCases: [
            { id: "tc1", input: "-15", expectedOutput: "Negative", hidden: false },
            { id: "tc2", input: "0", expectedOutput: "Zero", hidden: false },
            { id: "tc3", input: "42", expectedOutput: "Positive", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print Positive, Negative, or Zero\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["if n > 0: 'Positive', elif n < 0: 'Negative', else: 'Zero'"],
        howToThink: ["Three-way branch: >0, <0, ==0."],
        approach: "Simple if/elif/else.", pseudocode: "if n > 0: 'Positive'\nelif n < 0: 'Negative'\nelse: 'Zero'", explanation: "Basic three-state partition.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        if n > 0:\n            print('Positive')\n        elif n < 0:\n            print('Negative')\n        else:\n            print('Zero')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Missing the zero case"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["conditionals"]
    },
    {
        id: "py-prob-03-09", levelId: "py-level-03", title: "Check Range Membership", type: "coding", difficulty: "beginner", order: 9,
        description: "Given three integers `X`, `Low`, and `High` (where `Low <= High`):\nCheck if `X` is within the inclusive range `[Low, High]`.\nPrint `In Range` if `Low <= X <= High`, otherwise print `Out of Range`.",
        whyThisMatters: "Chained comparisons `low <= x <= high` are uniquely Pythonic and avoid redundant variable repetition.",
        concepts: ["chained comparisons", "range checking"], prerequisites: ["conditions"], learningObjectives: ["Write chained range conditions in Python"], constraints: ["Low <= High"],
        examples: [{ input: "5 1 10", output: "In Range" }, { input: "15 1 10", output: "Out of Range" }],
        testCases: [
            { id: "tc1", input: "5 1 10", expectedOutput: "In Range", hidden: false },
            { id: "tc2", input: "15 1 10", expectedOutput: "Out of Range", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Check if x in range [low, high]\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use if low <= x <= high: print('In Range')"],
        howToThink: ["Chained comparison: low <= x <= high."],
        approach: "Use low <= x <= high.", pseudocode: "if low <= x <= high: 'In Range' else: 'Out of Range'", explanation: "Python evaluates low <= x <= high mathematically without needing 'and'.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 3:\n        x, low, high = nums[0], nums[1], nums[2]\n        print('In Range' if low <= x <= high else 'Out of Range')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using strict inequality instead of inclusive <="], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["conditionals"]
    },
    {
        id: "py-prob-03-10", levelId: "py-level-03", title: "FizzBuzz Single Step", type: "coding", difficulty: "easy", order: 10,
        description: "Given a single positive integer `N`:\n- If `N` is divisible by both 3 and 5 (i.e. by 15), print `FizzBuzz`\n- If `N` is divisible by 3 only, print `Fizz`\n- If `N` is divisible by 5 only, print `Buzz`\n- Otherwise, print `N` itself.",
        whyThisMatters: "FizzBuzz is the most famous interview test of rule precedence ordering.",
        concepts: ["modulo", "branching order", "precedence"], prerequisites: ["conditions", "modulo"], learningObjectives: ["Order conditionals so more specific cases precede general cases"], constraints: ["1 <= N <= 10^5"],
        examples: [{ input: "15", output: "FizzBuzz" }, { input: "9", output: "Fizz" }, { input: "7", output: "7" }],
        testCases: [
            { id: "tc1", input: "15", expectedOutput: "FizzBuzz", hidden: false },
            { id: "tc2", input: "9", expectedOutput: "Fizz", hidden: false },
            { id: "tc3", input: "10", expectedOutput: "Buzz", hidden: false },
            { id: "tc4", input: "7", expectedOutput: "7", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Implement FizzBuzz logic\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Check divisible by 15 first! (n % 15 == 0)"],
        howToThink: ["Order matters: 15 first, then 3, then 5, else n."],
        approach: "Check n % 15 == 0 first.", pseudocode: "if n % 15 == 0: 'FizzBuzz'\nelif n % 3 == 0: 'Fizz'\nelif n % 5 == 0: 'Buzz'\nelse: n", explanation: "If you check 3 or 5 first, 15 would be captured early and produce an incorrect result.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        if n % 15 == 0:\n            print('FizzBuzz')\n        elif n % 3 == 0:\n            print('Fizz')\n        elif n % 5 == 0:\n            print('Buzz')\n        else:\n            print(n)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Checking 3 before 15, causing 15 to print 'Fizz' instead of 'FizzBuzz'"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["fizzbuzz", "classic"]
    }
];

writeLevel(1, level1);
writeLevel(2, level2);
writeLevel(3, level3);
