const fs = require('fs');
const path = require('path');

function writeLevel(levelNum, problems) {
    const filename = `level-${levelNum < 10 ? '0' + levelNum : levelNum}.ts`;
    const filePath = path.join(__dirname, '../src/data/pythonProblems', filename);
    const content = `import { Problem } from '../types';\n\nexport const pyLevel${levelNum}Problems: Problem[] = ${JSON.stringify(problems, null, 4)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Generated ${filename} with ${problems.length} problems`);
}

// Level 4: Loops & Iteration
const level4 = [
    {
        id: "py-prob-04-01", levelId: "py-level-04", title: "Print 1 to N", type: "coding", difficulty: "beginner", order: 1,
        description: "Given a positive integer `N`, print all integers from `1` to `N` (inclusive) on a single line separated by spaces.\n\nUse Python's `range(1, N + 1)` in a `for` loop.",
        whyThisMatters: "The `range()` function is Python's primary generator for count-controlled loops.",
        concepts: ["for loops", "range", "iteration"], prerequisites: ["loops"], learningObjectives: ["Use range(start, stop) in for loops"], constraints: ["1 <= N <= 1000"],
        examples: [{ input: "5", output: "1 2 3 4 5" }],
        testCases: [
            { id: "tc1", input: "5", expectedOutput: "1 2 3 4 5", hidden: false },
            { id: "tc2", input: "1", expectedOutput: "1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print 1 to n space-separated\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Use print(*(range(1, n + 1))) or a for loop with end=' '."],
        howToThink: ["Generate numbers 1 to n, join or unpack with spaces."],
        approach: "Use print(*(range(1, n + 1))).", pseudocode: "print(*(range(1, n + 1)))", explanation: "range(1, n + 1) generates numbers from 1 up to n. Unpacking with * prints them space-separated.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(*(range(1, n + 1)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using range(1, n) which stops at n-1"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["loops", "range"]
    },
    {
        id: "py-prob-04-02", levelId: "py-level-04", title: "Sum from 1 to N", type: "coding", difficulty: "beginner", order: 2,
        description: "Given a positive integer `N`, calculate the sum of all integers from `1` to `N`:\n`1 + 2 + 3 + ... + N`.\nPrint the total sum.",
        whyThisMatters: "Accumulator loops (or `sum(range(1, N + 1))`) teach tracking state across iterations.",
        concepts: ["accumulator", "sum", "range"], prerequisites: ["for loops"], learningObjectives: ["Accumulate values in a loop or use sum()"], constraints: ["1 <= N <= 10^6"],
        examples: [{ input: "5", output: "15" }],
        testCases: [
            { id: "tc1", input: "5", expectedOutput: "15", hidden: false },
            { id: "tc2", input: "10", expectedOutput: "55", hidden: false },
            { id: "tc3", input: "100", expectedOutput: "5050", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute and print sum\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["You can use a loop or the formula n * (n + 1) // 2."],
        howToThink: ["Loop from 1 to n adding to total, or use n * (n + 1) // 2."],
        approach: "Use n * (n + 1) // 2 for O(1) math.", pseudocode: "print(n * (n + 1) // 2)", explanation: "Gauss formula computes the sum of the first N natural numbers in O(1) time.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(n * (n + 1) // 2)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Float division causing large numbers to become inaccurate"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["loops", "math"]
    },
    {
        id: "py-prob-04-03", levelId: "py-level-04", title: "Multiplication Table", type: "coding", difficulty: "beginner", order: 3,
        description: "Given an integer `N`, print the first 5 rows of its multiplication table in the format:\n`N x i = <result>`\nfor `i` from 1 to 5.",
        whyThisMatters: "Practices formatted output in loop iterations.",
        concepts: ["for loops", "f-strings", "multiplication"], prerequisites: ["for loops", "f-strings"], learningObjectives: ["Format iterated expressions with f-strings"], constraints: ["1 <= N <= 100"],
        examples: [{ input: "3", output: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15" }],
        testCases: [
            { id: "tc1", input: "3", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15", hidden: false },
            { id: "tc2", input: "7", expectedOutput: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print 5 rows of table\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Loop for i in range(1, 6): print(f'{n} x {i} = {n * i}')"],
        howToThink: ["Loop i from 1 to 5, print formatted line each time."],
        approach: "Loop i from 1 to 5 and print f-string.", pseudocode: "for i in range(1, 6):\n    print(f'{n} x {i} = {n * i}')", explanation: "Range(1, 6) iterates through values 1, 2, 3, 4, 5.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        for i in range(1, 6):\n            print(f'{n} x {i} = {n * i}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Stopping at range(1, 5) which misses i = 5"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["loops", "formatting"]
    },
    {
        id: "py-prob-04-04", levelId: "py-level-04", title: "Factorial of N", type: "coding", difficulty: "easy", order: 4,
        description: "Given a non-negative integer `N`, compute its factorial `N!`:\n`N! = N * (N - 1) * ... * 1` (with `0! = 1`).\nPrint `N!`.",
        whyThisMatters: "Factorial is foundational in combinations, permutations, and recursion.",
        concepts: ["factorial", "product accumulator", "math"], prerequisites: ["for loops"], learningObjectives: ["Compute product sequence with loop"], constraints: ["0 <= N <= 20"],
        examples: [{ input: "5", output: "120" }, { input: "0", output: "1" }],
        testCases: [
            { id: "tc1", input: "5", expectedOutput: "120", hidden: false },
            { id: "tc2", input: "0", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "6", expectedOutput: "720", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute and print factorial\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Initialize res = 1, then for i in range(2, n + 1): res *= i."],
        howToThink: ["Multiply 1 * 2 * ... * n. Note 0! = 1."],
        approach: "Accumulate product starting at 1.", pseudocode: "res = 1\nfor i in range(2, n + 1): res *= i\nprint(res)", explanation: "Standard iterative product computation.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        res = 1\n        for i in range(2, n + 1):\n            res *= i\n        print(res)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Handling 0! as 0 instead of 1"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["math", "loops"]
    },
    {
        id: "py-prob-04-05", levelId: "py-level-04", title: "Reverse Countdown", type: "coding", difficulty: "beginner", order: 5,
        description: "Given an integer `N`, print a countdown from `N` down to `1` separated by spaces.\n\nUse `range(N, 0, -1)` to decrement in steps of `-1`.",
        whyThisMatters: "Negative step values in `range(start, stop, step)` are common for backward traversals.",
        concepts: ["negative step", "countdown", "range step"], prerequisites: ["for loops"], learningObjectives: ["Use negative step in range()"], constraints: ["1 <= N <= 100"],
        examples: [{ input: "5", output: "5 4 3 2 1" }],
        testCases: [
            { id: "tc1", input: "5", expectedOutput: "5 4 3 2 1", hidden: false },
            { id: "tc2", input: "3", expectedOutput: "3 2 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print countdown\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["range(n, 0, -1) counts down to 1."],
        howToThink: ["range(start, stop, step) with step = -1."],
        approach: "Use print(*(range(n, 0, -1))).", pseudocode: "print(*(range(n, 0, -1)))", explanation: "range(n, 0, -1) steps backwards until stop value 0 is reached.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(*(range(n, 0, -1)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using step = 1 which results in an empty range"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["loops", "range"]
    },
    {
        id: "py-prob-04-06", levelId: "py-level-04", title: "Count Digits", type: "coding", difficulty: "easy", order: 6,
        description: "Given a non-negative integer `N`, count and print how many digits it contains.\n(e.g. `12345` has 5 digits, `0` has 1 digit).",
        whyThisMatters: "Digit manipulation via while loops or string length is standard in number theory problems.",
        concepts: ["while loop", "digits", "len"], prerequisites: ["loops"], learningObjectives: ["Count digits in an integer"], constraints: ["N >= 0"],
        examples: [{ input: "987654", output: "6" }, { input: "0", output: "1" }],
        testCases: [
            { id: "tc1", input: "987654", expectedOutput: "6", hidden: false },
            { id: "tc2", input: "0", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "100", expectedOutput: "3", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Print number of digits\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["len(str(n)) gives the count of digits directly."],
        howToThink: ["Convert to string or repeatedly divide by 10 in a while loop."],
        approach: "Use len(s).", pseudocode: "print(len(s))", explanation: "Length of the string representation matches digit count.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(len(s))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Special case 0 returning 0 if using while n > 0 without handling 0"], timeComplexity: "O(D)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["digits"]
    },
    {
        id: "py-prob-04-07", levelId: "py-level-04", title: "Sum of Digits", type: "coding", difficulty: "easy", order: 7,
        description: "Given a non-negative integer `N`, compute and print the sum of its individual digits.\n(For example, for `1234`, sum is `1 + 2 + 3 + 4 = 10`).",
        whyThisMatters: "Digit sums appear frequently in hashing, checksums (Luhn algorithm), and digital root calculations.",
        concepts: ["sum", "digits", "list comprehension"], prerequisites: ["loops"], learningObjectives: ["Extract and sum digits of a number"], constraints: ["N >= 0"],
        examples: [{ input: "1234", output: "10" }, { input: "999", output: "27" }],
        testCases: [
            { id: "tc1", input: "1234", expectedOutput: "10", hidden: false },
            { id: "tc2", input: "999", expectedOutput: "27", hidden: false },
            { id: "tc3", input: "0", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    # Compute sum of digits\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sum(int(ch) for ch in s)"],
        howToThink: ["Iterate through characters, convert each to int, and sum."],
        approach: "Sum converted integer characters.", pseudocode: "print(sum(int(c) for c in s))", explanation: "Generator expression converts each digit character to int and sums them cleanly.",
        solution: "import sys\n\ndef solve():\n    s = sys.stdin.read().strip()\n    if s:\n        print(sum(int(c) for c in s if c.isdigit()))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Leaving digits as strings causing concatenation"], timeComplexity: "O(D)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["digits", "sum"]
    },
    {
        id: "py-prob-04-08", levelId: "py-level-04", title: "Prime Number Test", type: "coding", difficulty: "medium", order: 8,
        description: "An integer `N > 1` is prime if it is only divisible by 1 and itself.\n\n**Task:**\nGiven an integer `N`, print `Prime` if it is a prime number, otherwise print `Not Prime`.\n\n*Optimization:* Check divisibility up to `int(N**0.5)` for O(sqrt(N)) efficiency.",
        whyThisMatters: "Trial division up to sqrt(N) is the canonical prime testing algorithm required in technical screenings.",
        concepts: ["prime numbers", "trial division", "sqrt optimization"], prerequisites: ["while loop", "for loops"], learningObjectives: ["Implement O(sqrt(N)) prime checking"], constraints: ["N >= 1"],
        examples: [{ input: "7", output: "Prime" }, { input: "9", output: "Not Prime" }, { input: "1", output: "Not Prime" }],
        testCases: [
            { id: "tc1", input: "7", expectedOutput: "Prime", hidden: false },
            { id: "tc2", input: "9", expectedOutput: "Not Prime", hidden: false },
            { id: "tc3", input: "1", expectedOutput: "Not Prime", hidden: false },
            { id: "tc4", input: "2", expectedOutput: "Prime", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Check if prime\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["If n < 2, return 'Not Prime'. Check divisors i from 2 up to int(n**0.5)."],
        howToThink: ["If a factor exists > sqrt(N), its matching factor must be < sqrt(N)."],
        approach: "Trial division up to sqrt(N).", pseudocode: "if n < 2: return 'Not Prime'\nfor i in range(2, int(n**0.5) + 1):\n    if n % i == 0: return 'Not Prime'\nreturn 'Prime'", explanation: "Testing up to sqrt(N) reduces operations from 1,000,000 to 1,000.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        if n < 2:\n            print('Not Prime')\n            return\n        is_prime = True\n        for i in range(2, int(n**0.5) + 1):\n            if n % i == 0:\n                is_prime = False\n                break\n        print('Prime' if is_prime else 'Not Prime')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Considering 1 as prime", "Checking up to N instead of sqrt(N) causing Time Limit Exceeded"], timeComplexity: "O(sqrt(N))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["math", "primes"]
    },
    {
        id: "py-prob-04-09", levelId: "py-level-04", title: "N-th Fibonacci Number", type: "coding", difficulty: "easy", order: 9,
        description: "The Fibonacci sequence starts `F(1) = 1, F(2) = 1`, and each subsequent term is the sum of the previous two:\n`F(n) = F(n-1) + F(n-2)`.\n\n**Task:**\nGiven a 1-based index `N`, print the N-th Fibonacci number.\n`F(1) = 1, F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5, F(6) = 8...`",
        whyThisMatters: "Iterative Fibonacci using two moving variables is the starting point for dynamic programming state compression.",
        concepts: ["fibonacci", "iterative dp", "state variables"], prerequisites: ["for loops"], learningObjectives: ["Compute Fibonacci in O(N) time and O(1) space"], constraints: ["1 <= N <= 50"],
        examples: [{ input: "6", output: "8" }, { input: "1", output: "1" }],
        testCases: [
            { id: "tc1", input: "6", expectedOutput: "8", hidden: false },
            { id: "tc2", input: "1", expectedOutput: "1", hidden: false },
            { id: "tc3", input: "10", expectedOutput: "55", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Compute N-th Fibonacci number\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Maintain a, b = 1, 1 and update a, b = b, a + b in a loop."],
        howToThink: ["If n <= 2 return 1. Else loop n-2 times shifting a, b."],
        approach: "Iteratively update two variables.", pseudocode: "a, b = 1, 1\nfor _ in range(n - 1): a, b = b, a + b\nprint(a)", explanation: "Two variable rotation runs in O(N) time and O(1) space.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        a, b = 1, 1\n        for _ in range(n - 1):\n            a, b = b, a + b\n        print(a)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Using slow exponential O(2^N) recursion"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["fibonacci", "dp"]
    },
    {
        id: "py-prob-04-10", levelId: "py-level-04", title: "Right-Angled Star Triangle", type: "coding", difficulty: "easy", order: 10,
        description: "Given an integer `N`, print a right-angled triangle of height `N` using asterisks `*`.\nLine 1 should have 1 asterisk, line 2 should have 2 asterisks, up to line N with N asterisks.",
        whyThisMatters: "Reinforces nested loop or loop string multiplication concepts.",
        concepts: ["nested loops", "patterns", "string multiplication"], prerequisites: ["loops", "strings"], learningObjectives: ["Generate growing row patterns in a loop"], constraints: ["1 <= N <= 20"],
        examples: [{ input: "3", output: "*\n**\n***" }],
        testCases: [
            { id: "tc1", input: "3", expectedOutput: "*\n**\n***", hidden: false },
            { id: "tc2", input: "1", expectedOutput: "*", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    n = int(sys.stdin.read().strip())\n    # Print triangle of stars\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["for i in range(1, n + 1): print('*' * i)"],
        howToThink: ["Row i prints i stars."],
        approach: "Loop i from 1 to n, printing '*' * i.", pseudocode: "for i in range(1, n + 1): print('*' * i)", explanation: "Python string multiplication '*' * i makes pattern generation concise.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        for i in range(1, n + 1):\n            print('*' * i)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["0-based range causing an empty first line"], timeComplexity: "O(N^2)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["patterns"]
    }
];

// Level 5: Functions & Scope
const level5 = [
    {
        id: "py-prob-05-01", levelId: "py-level-05", title: "Square Function", type: "coding", difficulty: "beginner", order: 1,
        description: "Define a function `square(x)` that returns the square of `x` (`x * x`).\nRead an integer from input, pass it to `square()`, and print the returned result.",
        whyThisMatters: "Functions encapsulate logic into testable, reusable units.",
        concepts: ["def", "return", "function definition"], prerequisites: ["functions"], learningObjectives: ["Define a function with def and return a value"], constraints: ["Integer input"],
        examples: [{ input: "6", output: "36" }],
        testCases: [
            { id: "tc1", input: "6", expectedOutput: "36", hidden: false },
            { id: "tc2", input: "-5", expectedOutput: "25", hidden: false }
        ],
        starterCode: "def square(x: int) -> int:\n    # Implement square function\n    pass\n\nimport sys\ndef solve():\n    n = int(sys.stdin.read().strip())\n    print(square(n))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["return x * x"],
        howToThink: ["Return x ** 2 or x * x from the function."],
        approach: "Define square returning x * x.", pseudocode: "def square(x): return x * x", explanation: "The return statement hands back the calculated value to the caller.",
        solution: "def square(x: int) -> int:\n    return x * x\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(square(n))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Printing inside the function instead of returning"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["functions"]
    },
    {
        id: "py-prob-05-02", levelId: "py-level-05", title: "Greatest Common Divisor (Euclidean GCD)", type: "coding", difficulty: "easy", order: 2,
        description: "Implement the Euclidean algorithm to find the Greatest Common Divisor (GCD) of two integers `A` and `B`:\n```python\ndef gcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n```\nRead two space-separated integers and print their GCD.",
        whyThisMatters: "Euclidean GCD is one of the most famous logarithmic O(log(min(A,B))) algorithms in computer science.",
        concepts: ["gcd", "euclidean algorithm", "functions"], prerequisites: ["functions", "while loop"], learningObjectives: ["Implement Euclidean GCD algorithm"], constraints: ["A, B > 0"],
        examples: [{ input: "48 18", output: "6" }, { input: "101 103", output: "1" }],
        testCases: [
            { id: "tc1", input: "48 18", expectedOutput: "6", hidden: false },
            { id: "tc2", input: "101 103", expectedOutput: "1", hidden: false }
        ],
        starterCode: "def gcd(a: int, b: int) -> int:\n    # Implement Euclidean GCD\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(gcd(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["while b: a, b = b, a % b then return a."],
        howToThink: ["Replace (a, b) with (b, a % b) until b becomes 0."],
        approach: "Euclidean algorithm loop.", pseudocode: "while b != 0: a, b = b, a % b\nreturn a", explanation: "Repeatedly taking remainder shrinks values exponentially.",
        solution: "def gcd(a: int, b: int) -> int:\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(gcd(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting to return a when b reaches 0"], timeComplexity: "O(log(min(A, B)))", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["math", "algorithms"]
    },
    {
        id: "py-prob-05-03", levelId: "py-level-05", title: "Palindrome Number Predicate", type: "coding", difficulty: "easy", order: 3,
        description: "Write a function `is_palindrome(n: int) -> bool` that returns `True` if an integer reads the same forwards and backwards, and `False` otherwise (negative numbers are not palindromes).\n\nRead an integer and print the result.",
        whyThisMatters: "Predicate functions (returning True/False) are the building blocks of filter operations.",
        concepts: ["predicates", "palindromes", "strings"], prerequisites: ["functions"], learningObjectives: ["Write clean boolean predicate functions"], constraints: ["Integer input"],
        examples: [{ input: "121", output: "True" }, { input: "-121", output: "False" }, { input: "10", output: "False" }],
        testCases: [
            { id: "tc1", input: "121", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "-121", expectedOutput: "False", hidden: false },
            { id: "tc3", input: "10", expectedOutput: "False", hidden: false }
        ],
        starterCode: "def is_palindrome(n: int) -> bool:\n    # Return True if palindrome else False\n    pass\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_palindrome(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Convert to string s = str(n). Return s == s[::-1] if n >= 0 else False."],
        howToThink: ["Negative numbers cannot be palindromes due to leading '-'. For positive, check str(n) == str(n)[::-1]."],
        approach: "Check if str(n) equals its reverse for non-negative n.", pseudocode: "if n < 0: return False\ns = str(n)\nreturn s == s[::-1]", explanation: "String slicing s[::-1] creates a reversed copy in O(N).",
        solution: "def is_palindrome(n: int) -> bool:\n    if n < 0:\n        return False\n    s = str(n)\n    return s == s[::-1]\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_palindrome(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing negative numbers like -121"], timeComplexity: "O(D)", spaceComplexity: "O(D)", interviewRelevance: "high", tags: ["palindromes", "functions"]
    },
    {
        id: "py-prob-05-04", levelId: "py-level-05", title: "Custom Power Function", type: "coding", difficulty: "easy", order: 4,
        description: "Write a function `power(base: int, exp: int) -> int` that computes `base ** exp` for non-negative `exp` using a loop.\nRead two space-separated integers and print the result.",
        whyThisMatters: "Building operations from scratch reinforces understanding of loop invariants and complexity.",
        concepts: ["exponentiation", "loops", "functions"], prerequisites: ["functions"], learningObjectives: ["Implement exponential accumulator"], constraints: ["base >= 0, exp >= 0"],
        examples: [{ input: "2 5", output: "32" }, { input: "5 0", output: "1" }],
        testCases: [
            { id: "tc1", input: "2 5", expectedOutput: "32", hidden: false },
            { id: "tc2", input: "5 0", expectedOutput: "1", hidden: false }
        ],
        starterCode: "def power(base: int, exp: int) -> int:\n    # Implement power calculation\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(power(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Multiply base by itself exp times. Handle exp == 0."],
        howToThink: ["res = 1, loop exp times res *= base."],
        approach: "Iterative multiplication.", pseudocode: "res = 1\nfor _ in range(exp): res *= base\nreturn res", explanation: "Accumulating exp times produces base^exp.",
        solution: "def power(base: int, exp: int) -> int:\n    res = 1\n    for _ in range(exp):\n        res *= base\n    return res\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(power(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Forgetting 0th power equals 1"], timeComplexity: "O(exp)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["functions", "math"]
    },
    {
        id: "py-prob-05-05", levelId: "py-level-05", title: "Multiple Return Values (Min & Max)", type: "coding", difficulty: "easy", order: 5,
        description: "In Python, a function can return multiple values separated by commas: `return min_val, max_val`.\nPython packs them into a tuple, which the caller can unpack!\n\n**Task:**\nWrite `find_min_max(arr)` returning `(min_val, max_val)`.\nRead a list of integers from input, call the function, and print `Min: <min_val>, Max: <max_val>`.",
        whyThisMatters: "Returning tuples eliminates the need for output parameters (`&` references) or pointer arguments common in C++.",
        concepts: ["multiple returns", "tuple packing", "unpacking"], prerequisites: ["functions"], learningObjectives: ["Return and unpack multiple values from a function"], constraints: ["Non-empty list"],
        examples: [{ input: "3 1 4 1 5 9 2 6", output: "Min: 1, Max: 9" }],
        testCases: [
            { id: "tc1", input: "3 1 4 1 5 9 2 6", expectedOutput: "Min: 1, Max: 9", hidden: false },
            { id: "tc2", input: "42", expectedOutput: "Min: 42, Max: 42", hidden: false }
        ],
        starterCode: "def find_min_max(arr: list[int]) -> tuple[int, int]:\n    # Return min and max as tuple\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        mn, mx = find_min_max(nums)\n        print(f'Min: {mn}, Max: {mx}')\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["return min(arr), max(arr)"],
        howToThink: ["Find min and max, return both as a tuple."],
        approach: "Return min(arr), max(arr).", pseudocode: "return min(arr), max(arr)", explanation: "Commas create a tuple automatically in Python return statements.",
        solution: "def find_min_max(arr: list[int]) -> tuple[int, int]:\n    return min(arr), max(arr)\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        mn, mx = find_min_max(nums)\n        print(f'Min: {mn}, Max: {mx}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Creating a single list instead of returning a tuple"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["functions", "tuples"]
    },
    {
        id: "py-prob-05-06", levelId: "py-level-05", title: "Variable Arguments (*args)", type: "coding", difficulty: "easy", order: 6,
        description: "Python allows functions to accept an arbitrary number of positional arguments using `*args`.\nInside the function, `args` is a tuple containing all passed arguments.\n\n**Task:**\nWrite `sum_all(*args) -> int` that returns the sum of all arguments passed to it.\nRead integers from input, pass them unpacked with `*nums`, and print the sum.",
        whyThisMatters: "`*args` and `**kwargs` are standard in Python library design and decorator patterns.",
        concepts: ["*args", "variable arguments", "tuple packing"], prerequisites: ["functions"], learningObjectives: ["Use *args for variable argument lists"], constraints: ["Arbitrary integers"],
        examples: [{ input: "10 20 30 40", output: "100" }],
        testCases: [
            { id: "tc1", input: "10 20 30 40", expectedOutput: "100", hidden: false },
            { id: "tc2", input: "5", expectedOutput: "5", hidden: false }
        ],
        starterCode: "def sum_all(*args: int) -> int:\n    # Sum all passed arguments\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(sum_all(*nums))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sum(args) works directly because args is a tuple."],
        howToThink: ["Use sum(args) inside the function."],
        approach: "Return sum(args).", pseudocode: "def sum_all(*args): return sum(args)", explanation: "*args collects all extra positional arguments into a tuple.",
        solution: "def sum_all(*args: int) -> int:\n    return sum(args)\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(sum_all(*nums))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Iterating over *args instead of args inside function"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["functions", "*args"]
    },
    {
        id: "py-prob-05-07", levelId: "py-level-05", title: "Default Parameter Values", type: "coding", difficulty: "beginner", order: 7,
        description: "Functions can provide default argument values: `def greet(name, greeting='Hello'):`.\n\n**Task:**\nDefine `format_title(title, author='Anonymous')` returning `f'{title} by {author}'`.\nRead two words `Title` and `Author` from input. If only `Title` is provided, use the default author.",
        whyThisMatters: "Default parameters provide backwards-compatible function signatures and cleaner APIs.",
        concepts: ["default parameters", "optional arguments"], prerequisites: ["functions"], learningObjectives: ["Define and invoke functions with default arguments"], constraints: ["Non-empty strings"],
        examples: [{ input: "Hamlet Shakespeare", output: "Hamlet by Shakespeare" }, { input: "LostScroll", output: "LostScroll by Anonymous" }],
        testCases: [
            { id: "tc1", input: "Hamlet Shakespeare", expectedOutput: "Hamlet by Shakespeare", hidden: false },
            { id: "tc2", input: "LostScroll", expectedOutput: "LostScroll by Anonymous", hidden: false }
        ],
        starterCode: "def format_title(title: str, author: str = 'Anonymous') -> str:\n    # Implement formatted string\n    pass\n\nimport sys\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) == 1:\n        print(format_title(words[0]))\n    elif len(words) >= 2:\n        print(format_title(words[0], words[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Return f'{title} by {author}'."],
        howToThink: ["Use default author='Anonymous' in signature."],
        approach: "Format with f-string.", pseudocode: "return f'{title} by {author}'", explanation: "Default arguments are substituted when the caller omits that parameter.",
        solution: "def format_title(title: str, author: str = 'Anonymous') -> str:\n    return f'{title} by {author}'\n\nimport sys\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) == 1:\n        print(format_title(words[0]))\n    elif len(words) >= 2:\n        print(format_title(words[0], words[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Placing non-default arguments after default arguments (SyntaxError)"], timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["functions"]
    },
    {
        id: "py-prob-05-08", levelId: "py-level-05", title: "Count Vowels in String Function", type: "coding", difficulty: "easy", order: 8,
        description: "Write a function `count_vowels(s: str) -> int` that counts how many vowels (`a, e, i, o, u`, case-insensitive) appear in string `s`.\nRead a string and print the count.",
        whyThisMatters: "Combining string traversal and modular helper functions.",
        concepts: ["strings", "vowels", "helper functions"], prerequisites: ["functions", "strings"], learningObjectives: ["Write modular string processing function"], constraints: ["String input"],
        examples: [{ input: "Interview", output: "4" }],
        testCases: [
            { id: "tc1", input: "Interview", expectedOutput: "4", hidden: false },
            { id: "tc2", input: "rhythm", expectedOutput: "0", hidden: false }
        ],
        starterCode: "def count_vowels(s: str) -> int:\n    # Count vowels in s\n    pass\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(count_vowels(s))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["vowels = set('aeiouAEIOU'), return sum(1 for ch in s if ch in vowels)."],
        howToThink: ["Count characters that belong to the vowel set."],
        approach: "Sum matches in a generator expression.", pseudocode: "return sum(1 for ch in s.lower() if ch in 'aeiou')", explanation: "Clean comprehension counting.",
        solution: "def count_vowels(s: str) -> int:\n    return sum(1 for ch in s.lower() if ch in 'aeiou')\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(count_vowels(s))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Missing uppercase vowels"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["functions", "strings"]
    },
    {
        id: "py-prob-05-09", levelId: "py-level-05", title: "Perfect Number Checker", type: "coding", difficulty: "easy", order: 9,
        description: "A positive integer `N` is perfect if it equals the sum of its proper divisors (divisors strictly less than `N`).\nFor example, `6` has proper divisors `1, 2, 3` and `1 + 2 + 3 = 6` (perfect).\n\n**Task:**\nWrite `is_perfect(n: int) -> bool` returning `True` or `False`. Print the result.",
        whyThisMatters: "Divisor extraction and validation are frequent in mathematical programming rounds.",
        concepts: ["divisors", "perfect numbers", "math"], prerequisites: ["functions"], learningObjectives: ["Extract proper divisors and verify sum equality"], constraints: ["N >= 1"],
        examples: [{ input: "6", output: "True" }, { input: "28", output: "True" }, { input: "12", output: "False" }],
        testCases: [
            { id: "tc1", input: "6", expectedOutput: "True", hidden: false },
            { id: "tc2", input: "28", expectedOutput: "True", hidden: false },
            { id: "tc3", input: "12", expectedOutput: "False", hidden: false }
        ],
        starterCode: "def is_perfect(n: int) -> bool:\n    # Check if n is a perfect number\n    pass\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_perfect(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Sum divisors from 1 to n-1. Compare with n."],
        howToThink: ["Find all proper divisors of n, check if their sum == n."],
        approach: "Sum divisors up to n-1.", pseudocode: "if n <= 1: return False\nreturn sum(i for i in range(1, n) if n % i == 0) == n", explanation: "Check if the sum of all factors strictly less than n equals n.",
        solution: "def is_perfect(n: int) -> bool:\n    if n <= 1:\n        return False\n    return sum(i for i in range(1, n) if n % i == 0) == n\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_perfect(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Including n in the divisor sum"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "medium", tags: ["math"]
    },
    {
        id: "py-prob-05-10", levelId: "py-level-05", title: "Higher-Order Function Application", type: "coding", difficulty: "easy", order: 10,
        description: "In Python, functions are first-class citizens: they can be passed as arguments to other functions!\n\n**Task:**\nDefine `apply_fn(arr: list[int], fn) -> list[int]` that applies function `fn` to every element in `arr`.\nUse a function `double(x) -> x * 2`. Read integers from input, apply `double`, and print the resulting elements space-separated.",
        whyThisMatters: "First-class functions enable callbacks, decorators, and functional programming constructs like `map()`.",
        concepts: ["first-class functions", "higher-order functions", "callbacks"], prerequisites: ["functions"], learningObjectives: ["Pass a function as an argument to another function"], constraints: ["List of integers"],
        examples: [{ input: "1 2 3 4", output: "2 4 6 8" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4", expectedOutput: "2 4 6 8", hidden: false },
            { id: "tc2", input: "5 10", expectedOutput: "10 20", hidden: false }
        ],
        starterCode: "def double(x: int) -> int:\n    return x * 2\n\ndef apply_fn(arr: list[int], fn) -> list[int]:\n    # Apply fn to each element in arr\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    result = apply_fn(nums, double)\n    print(*result)\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["return [fn(x) for x in arr]"],
        howToThink: ["Apply fn(x) inside a list comprehension."],
        approach: "List comprehension applying fn.", pseudocode: "return [fn(x) for x in arr]", explanation: "Demonstrates higher-order function capability in Python.",
        solution: "def double(x: int) -> int:\n    return x * 2\n\ndef apply_fn(arr: list[int], fn) -> list[int]:\n    return [fn(x) for x in arr]\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    result = apply_fn(nums, double)\n    print(*result)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Calling fn() without argument"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["functional", "functions"]
    }
];

// Level 6: Lists & List Operations
const level6 = [
    {
        id: "py-prob-06-01", levelId: "py-level-06", title: "List Sum and Average", type: "coding", difficulty: "beginner", order: 1,
        description: "Given a non-empty list of integers, compute and print:\n1. The sum of all elements (`sum(arr)`)\n2. The average of all elements rounded to 2 decimal places (`f'{avg:.2f}'`) on a new line.",
        whyThisMatters: "Basic statistics on arrays form the core of data aggregation tasks.",
        concepts: ["sum", "len", "average", "lists"], prerequisites: ["lists"], learningObjectives: ["Compute aggregate metrics on lists"], constraints: ["N >= 1"],
        examples: [{ input: "10 20 30 40 50", output: "150\n30.00" }],
        testCases: [
            { id: "tc1", input: "10 20 30 40 50", expectedOutput: "150\n30.00", hidden: false },
            { id: "tc2", input: "5", expectedOutput: "5\n5.00", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print sum and average (2 decimals)\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["total = sum(nums), avg = total / len(nums)."],
        howToThink: ["Calculate sum(nums), divide by len(nums), format with .2f."],
        approach: "Use built-in sum() and len().", pseudocode: "total = sum(nums)\navg = total / len(nums)\nprint(total)\nprint(f'{avg:.2f}')", explanation: "Built-in sum() is highly optimized in C for Python lists.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        total = sum(nums)\n        avg = total / len(nums)\n        print(total)\n        print(f'{avg:.2f}')\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Division by zero on empty lists"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["lists", "aggregates"]
    },
    {
        id: "py-prob-06-02", levelId: "py-level-06", title: "Find Maximum and Minimum", type: "coding", difficulty: "beginner", order: 2,
        description: "Read a list of integers from input. Print the maximum value on the first line, and the minimum value on the second line.",
        whyThisMatters: "Python's built-in `max()` and `min()` run in linear O(N) time.",
        concepts: ["max", "min", "lists"], prerequisites: ["lists"], learningObjectives: ["Find extrema in lists"], constraints: ["N >= 1"],
        examples: [{ input: "7 2 9 4 1 8", output: "9\n1" }],
        testCases: [
            { id: "tc1", input: "7 2 9 4 1 8", expectedOutput: "9\n1", hidden: false },
            { id: "tc2", input: "-10 -20 -30", expectedOutput: "-10\n-30", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print max and min\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(max(nums)), print(min(nums))"],
        howToThink: ["Use max() and min() functions on the list."],
        approach: "Apply max() and min().", pseudocode: "print(max(nums))\nprint(min(nums))", explanation: "One-pass linear search for extrema.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(max(nums))\n        print(min(nums))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Initializing min with 0 instead of infinity or first element"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["lists"]
    },
    {
        id: "py-prob-06-03", levelId: "py-level-06", title: "Reverse a List", type: "coding", difficulty: "beginner", order: 3,
        description: "Given a list of integers, print the elements in reverse order separated by spaces.\n\nIn Python, you can reverse a list with `arr[::-1]` or `arr.reverse()`.",
        whyThisMatters: "Slicing `[::-1]` is standard Python shorthand for sequence reversal.",
        concepts: ["slicing", "reverse", "negative step"], prerequisites: ["lists"], learningObjectives: ["Reverse a list using slice notation"], constraints: ["N >= 1"],
        examples: [{ input: "1 2 3 4 5", output: "5 4 3 2 1" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5", expectedOutput: "5 4 3 2 1", hidden: false },
            { id: "tc2", input: "10 20", expectedOutput: "20 10", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Print reversed list\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["print(*nums[::-1])"],
        howToThink: ["nums[::-1] creates a reversed list."],
        approach: "Use slice notation `[::-1]`.", pseudocode: "print(*nums[::-1])", explanation: "nums[::-1] steps backwards through the entire list.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        print(*nums[::-1])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Modifying in-place with .reverse() and trying to print its return value (which is None)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "low", tags: ["lists", "slicing"]
    },
    {
        id: "py-prob-06-04", levelId: "py-level-06", title: "Count Occurrences", type: "coding", difficulty: "beginner", order: 4,
        description: "Given a target integer `T` on the first line, followed by `N` integers on the second line:\nCount and print how many times `T` appears in the list.\n\nUse Python's `arr.count(T)` method.",
        whyThisMatters: "List methods like `count()`, `index()`, and `remove()` provide concise utility operations.",
        concepts: ["list count", "occurrences"], prerequisites: ["lists"], learningObjectives: ["Use list.count() method"], constraints: ["N >= 0"],
        examples: [{ input: "3\n1 3 5 3 7 3", output: "3" }],
        testCases: [
            { id: "tc1", input: "3\n1 3 5 3 7 3", expectedOutput: "3", hidden: false },
            { id: "tc2", input: "9\n1 2 3 4", expectedOutput: "0", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Count target in arr\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["arr.count(target)"],
        howToThink: ["Use arr.count(target)."],
        approach: "Use built-in list count.", pseudocode: "print(arr.count(target))", explanation: "list.count(x) iterates through the list counting matching elements in O(N).",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        print(arr.count(target))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Reading input tokens in reverse order"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "low", tags: ["lists"]
    },
    {
        id: "py-prob-06-05", levelId: "py-level-06", title: "Remove All Occurrences", type: "coding", difficulty: "easy", order: 5,
        description: "Given a target value `T` followed by a list of integers `arr`:\nCreate and print a new list with all occurrences of `T` removed, space-separated.\n(If no elements remain, print empty line).",
        whyThisMatters: "Filtering elements out of lists using comprehensions `[x for x in arr if x != T]` is the idiomatic Python way to filter.",
        concepts: ["list filtering", "comprehensions"], prerequisites: ["lists"], learningObjectives: ["Filter lists using list comprehension"], constraints: ["List of integers"],
        examples: [{ input: "2\n1 2 3 2 4 2 5", output: "1 3 4 5" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 3 2 4 2 5", expectedOutput: "1 3 4 5", hidden: false },
            { id: "tc2", input: "7\n7 7 7", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        # Filter out target\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["filtered = [x for x in arr if x != target], print(*filtered)."],
        howToThink: ["Keep only elements that do not equal target."],
        approach: "List comprehension with != condition.", pseudocode: "res = [x for x in arr if x != target]\nprint(*res)", explanation: "List comprehension creates a new filtered list without mutating the original.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        target = tokens[0]\n        arr = tokens[1:]\n        res = [x for x in arr if x != target]\n        print(*res)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Modifying list with .remove() during iteration (skips elements)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["filtering", "lists"]
    },
    {
        id: "py-prob-06-06", levelId: "py-level-06", title: "Second Largest Element", type: "coding", difficulty: "medium", order: 6,
        description: "Given an array of integers, find the second strictly largest unique value in the array.\nIf no distinct second largest element exists (e.g. all elements are equal or length < 2), print `-1`.",
        whyThisMatters: "A classic interview warmup testing unique deduplication and tracking two maxima simultaneously.",
        concepts: ["second largest", "sets", "extrema"], prerequisites: ["lists"], learningObjectives: ["Find second largest unique element in array"], constraints: ["N >= 1"],
        examples: [{ input: "12 35 1 10 34 1", output: "34" }, { input: "10 10 10", output: "-1" }],
        testCases: [
            { id: "tc1", input: "12 35 1 10 34 1", expectedOutput: "34", hidden: false },
            { id: "tc2", input: "10 10 10", expectedOutput: "-1", hidden: false },
            { id: "tc3", input: "5 20", expectedOutput: "5", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Find second largest unique\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["Convert to set to remove duplicates: unique = sorted(set(nums)). If len(unique) >= 2 return unique[-2] else -1."],
        howToThink: ["Deduplicate with set, sort ascending, check second to last element."],
        approach: "Deduplicate with set, sort and take [-2].", pseudocode: "unique = sorted(set(nums))\nif len(unique) < 2: print(-1)\nelse: print(unique[-2])", explanation: "set() removes duplicates in O(N), sorting unique values allows direct access to second largest.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    unique = sorted(set(nums))\n    if len(unique) < 2:\n        print(-1)\n    else:\n        print(unique[-2])\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Failing when the largest number appears multiple times"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["lists", "sorting"]
    },
    {
        id: "py-prob-06-07", levelId: "py-level-06", title: "Rotate List Right by K Steps", type: "coding", difficulty: "medium", order: 7,
        description: "Given an integer `K` followed by a list of `N` integers:\nRotate the array to the right by `K` steps.\nFor example, `[1, 2, 3, 4, 5]` rotated by `2` steps becomes `[4, 5, 1, 2, 3]`.\n\nPrint the rotated array space-separated.",
        whyThisMatters: "Array rotation using slice concatenation `arr[-k:] + arr[:-k]` is a classic Python interview demonstration.",
        concepts: ["array rotation", "slicing", "modulo"], prerequisites: ["lists", "slicing"], learningObjectives: ["Rotate array using modulo and slicing"], constraints: ["N >= 1, K >= 0"],
        examples: [{ input: "2\n1 2 3 4 5", output: "4 5 1 2 3" }],
        testCases: [
            { id: "tc1", input: "2\n1 2 3 4 5", expectedOutput: "4 5 1 2 3", hidden: false },
            { id: "tc2", input: "3\n1 2 3 4", output: "2 3 4 1", expectedOutput: "2 3 4 1", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        arr = tokens[1:]\n        # Rotate arr right by k\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["k = k % len(arr). Rotated list is arr[-k:] + arr[:-k]."],
        howToThink: ["Take effective k = k % n. The last k elements move to the front."],
        approach: "Use slicing: arr[-k:] + arr[:-k].", pseudocode: "k = k % len(arr)\nif k == 0: print(*arr)\nelse: print(*(arr[-k:] + arr[:-k]))", explanation: "Slice concatenation rotates the array in linear O(N) time with minimal code.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        k = tokens[0]\n        arr = tokens[1:]\n        n = len(arr)\n        if n == 0:\n            return\n        k = k % n\n        if k == 0:\n            print(*arr)\n        else:\n            print(*(arr[-k:] + arr[:-k]))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Not taking k % n when k > n"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "high", tags: ["rotation", "arrays"]
    },
    {
        id: "py-prob-06-08", levelId: "py-level-06", title: "Merge Two Sorted Lists", type: "coding", difficulty: "easy", order: 8,
        description: "Given two sorted integer lists `A` and `B` on separate lines:\nMerge them into a single sorted list and print the elements space-separated.",
        whyThisMatters: "Merge step is the heart of MergeSort and two-pointer merging.",
        concepts: ["merge sorted", "sorting", "lists"], prerequisites: ["lists"], learningObjectives: ["Merge two sorted arrays"], constraints: ["Lists are non-empty"],
        examples: [{ input: "1 3 5\n2 4 6", output: "1 2 3 4 5 6" }],
        testCases: [
            { id: "tc1", input: "1 3 5\n2 4 6", expectedOutput: "1 2 3 4 5 6", hidden: false },
            { id: "tc2", input: "10 20\n5 15 25", expectedOutput: "5 10 15 20 25", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    lines = sys.stdin.read().strip().split('\\n')\n    # Read both lists and merge\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["sorted(a + b) or two pointers."],
        howToThink: ["Combine both lists and sort."],
        approach: "Combine and sort with sorted(a + b).", pseudocode: "print(*sorted(a + b))", explanation: "Python's Timsort merges sorted segments in O(N) linear time.",
        solution: "import sys\n\ndef solve():\n    raw = sys.stdin.read().split()\n    if raw:\n        nums = list(map(int, raw))\n        print(*sorted(nums))\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Concatenating without sorting"], timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["sorting", "merge"]
    },
    {
        id: "py-prob-06-09", levelId: "py-level-06", title: "Filter Evens with List Comprehension", type: "coding", difficulty: "beginner", order: 9,
        description: "Read a list of integers from input.\nUse a list comprehension `[x for x in nums if x % 2 == 0]` to filter all even numbers.\nPrint the even numbers space-separated.",
        whyThisMatters: "List comprehensions are the most celebrated feature of Python, replacing boilerplate for-loops.",
        concepts: ["list comprehension", "filtering", "parity"], prerequisites: ["lists"], learningObjectives: ["Write filtered list comprehensions"], constraints: ["Integer inputs"],
        examples: [{ input: "1 2 3 4 5 6 7 8", output: "2 4 6 8" }],
        testCases: [
            { id: "tc1", input: "1 2 3 4 5 6 7 8", expectedOutput: "2 4 6 8", hidden: false },
            { id: "tc2", input: "1 3 5", expectedOutput: "", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    # Use list comprehension\n    evens = [x for x in nums if x % 2 == 0]\n    print(*evens)\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["evens = [x for x in nums if x % 2 == 0]"],
        howToThink: ["Comprehension syntax: [item for item in iterable if condition]."],
        approach: "List comprehension filtering.", pseudocode: "print(*(x for x in nums if x % 2 == 0))", explanation: "Idiomatic Python filter pattern.",
        solution: "import sys\n\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    evens = [x for x in nums if x % 2 == 0]\n    print(*evens)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Putting 'if' before 'for' (which is for ternary transformations, not filtering)"], timeComplexity: "O(N)", spaceComplexity: "O(N)", interviewRelevance: "medium", tags: ["comprehensions"]
    },
    {
        id: "py-prob-06-10", levelId: "py-level-06", title: "Matrix Diagonal Sum", type: "coding", difficulty: "easy", order: 10,
        description: "Given dimension `N` followed by an `N x N` 2D matrix of integers:\nCalculate and print the sum of the primary diagonal elements (`matrix[i][i]` for `i` from `0` to `N - 1`).",
        whyThisMatters: "2D list navigation using row and column indexing is mandatory for grid problems and matrix algorithms.",
        concepts: ["2D lists", "matrices", "diagonals"], prerequisites: ["lists"], learningObjectives: ["Index and traverse 2D lists / matrices"], constraints: ["1 <= N <= 100"],
        examples: [{ input: "3\n1 2 3\n4 5 6\n7 8 9", output: "15" }],
        testCases: [
            { id: "tc1", input: "3\n1 2 3\n4 5 6\n7 8 9", expectedOutput: "15", hidden: false },
            { id: "tc2", input: "2\n10 20\n30 40", expectedOutput: "50", hidden: false }
        ],
        starterCode: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        matrix_elements = tokens[1:]\n        # Reconstruct matrix and sum diagonal\n        pass\n\nif __name__ == '__main__':\n    solve()\n",
        hints: ["matrix[i][i] is at index i * n + i in the flat list of elements."],
        howToThink: ["Diagonal elements are at flat index i * n + i for i in range(n)."],
        approach: "Sum flat indices i * n + i.", pseudocode: "diag_sum = sum(matrix_elements[i * n + i] for i in range(n))\nprint(diag_sum)", explanation: "In an N x N matrix stored flat, position (i, i) is at offset i * N + i.",
        solution: "import sys\n\ndef solve():\n    tokens = list(map(int, sys.stdin.read().split()))\n    if tokens:\n        n = tokens[0]\n        elements = tokens[1:]\n        diag_sum = sum(elements[i * n + i] for i in range(n))\n        print(diag_sum)\n\nif __name__ == '__main__':\n    solve()\n",
        commonMistakes: ["Double counting or wrong flat index computation"], timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewRelevance: "high", tags: ["matrices", "2D lists"]
    }
];

writeLevel(4, level4);
writeLevel(5, level5);
writeLevel(6, level6);
