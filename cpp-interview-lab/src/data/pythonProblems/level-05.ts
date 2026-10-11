import { Problem } from '../types';

export const pyLevel5Problems: Problem[] = [
    {
        "id": "py-prob-05-01",
        "levelId": "py-level-05",
        "title": "Square Function",
        "type": "coding",
        "difficulty": "beginner",
        "order": 1,
        "description": "Define a function `square(x)` that returns the square of `x` (`x * x`).\nRead an integer from input, pass it to `square()`, and print the returned result.",
        "whyThisMatters": "Functions encapsulate logic into testable, reusable units.",
        "concepts": [
            "def",
            "return",
            "function definition"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Define a function with def and return a value"
        ],
        "constraints": [
            "Integer input"
        ],
        "examples": [
            {
                "input": "6",
                "output": "36"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "6",
                "expectedOutput": "36",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-5",
                "expectedOutput": "25",
                "hidden": false
            }
        ],
        "starterCode": "def square(x: int) -> int:\n    # Implement square function\n    pass\n\nimport sys\ndef solve():\n    n = int(sys.stdin.read().strip())\n    print(square(n))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "return x * x"
        ],
        "howToThink": [
            "Return x ** 2 or x * x from the function."
        ],
        "approach": "Define square returning x * x.",
        "pseudocode": "def square(x): return x * x",
        "explanation": "The return statement hands back the calculated value to the caller.",
        "solution": "def square(x: int) -> int:\n    return x * x\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        n = int(raw)\n        print(square(n))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Printing inside the function instead of returning"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "functions"
        ]
    },
    {
        "id": "py-prob-05-02",
        "levelId": "py-level-05",
        "title": "Greatest Common Divisor (Euclidean GCD)",
        "type": "coding",
        "difficulty": "easy",
        "order": 2,
        "description": "Implement the Euclidean algorithm to find the Greatest Common Divisor (GCD) of two integers `A` and `B`:\n```python\ndef gcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n```\nRead two space-separated integers and print their GCD.",
        "whyThisMatters": "Euclidean GCD is one of the most famous logarithmic O(log(min(A,B))) algorithms in computer science.",
        "concepts": [
            "gcd",
            "euclidean algorithm",
            "functions"
        ],
        "prerequisites": [
            "functions",
            "while loop"
        ],
        "learningObjectives": [
            "Implement Euclidean GCD algorithm"
        ],
        "constraints": [
            "A, B > 0"
        ],
        "examples": [
            {
                "input": "48 18",
                "output": "6"
            },
            {
                "input": "101 103",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "48 18",
                "expectedOutput": "6",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "101 103",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "def gcd(a: int, b: int) -> int:\n    # Implement Euclidean GCD\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(gcd(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "while b: a, b = b, a % b then return a."
        ],
        "howToThink": [
            "Replace (a, b) with (b, a % b) until b becomes 0."
        ],
        "approach": "Euclidean algorithm loop.",
        "pseudocode": "while b != 0: a, b = b, a % b\nreturn a",
        "explanation": "Repeatedly taking remainder shrinks values exponentially.",
        "solution": "def gcd(a: int, b: int) -> int:\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(gcd(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting to return a when b reaches 0"
        ],
        "timeComplexity": "O(log(min(A, B)))",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "high",
        "tags": [
            "math",
            "algorithms"
        ]
    },
    {
        "id": "py-prob-05-03",
        "levelId": "py-level-05",
        "title": "Palindrome Number Predicate",
        "type": "coding",
        "difficulty": "easy",
        "order": 3,
        "description": "Write a function `is_palindrome(n: int) -> bool` that returns `True` if an integer reads the same forwards and backwards, and `False` otherwise (negative numbers are not palindromes).\n\nRead an integer and print the result.",
        "whyThisMatters": "Predicate functions (returning True/False) are the building blocks of filter operations.",
        "concepts": [
            "predicates",
            "palindromes",
            "strings"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Write clean boolean predicate functions"
        ],
        "constraints": [
            "Integer input"
        ],
        "examples": [
            {
                "input": "121",
                "output": "True"
            },
            {
                "input": "-121",
                "output": "False"
            },
            {
                "input": "10",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "121",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "-121",
                "expectedOutput": "False",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "10",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "def is_palindrome(n: int) -> bool:\n    # Return True if palindrome else False\n    pass\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_palindrome(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Convert to string s = str(n). Return s == s[::-1] if n >= 0 else False."
        ],
        "howToThink": [
            "Negative numbers cannot be palindromes due to leading '-'. For positive, check str(n) == str(n)[::-1]."
        ],
        "approach": "Check if str(n) equals its reverse for non-negative n.",
        "pseudocode": "if n < 0: return False\ns = str(n)\nreturn s == s[::-1]",
        "explanation": "String slicing s[::-1] creates a reversed copy in O(N).",
        "solution": "def is_palindrome(n: int) -> bool:\n    if n < 0:\n        return False\n    s = str(n)\n    return s == s[::-1]\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_palindrome(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Failing negative numbers like -121"
        ],
        "timeComplexity": "O(D)",
        "spaceComplexity": "O(D)",
        "interviewRelevance": "high",
        "tags": [
            "palindromes",
            "functions"
        ]
    },
    {
        "id": "py-prob-05-04",
        "levelId": "py-level-05",
        "title": "Custom Power Function",
        "type": "coding",
        "difficulty": "easy",
        "order": 4,
        "description": "Write a function `power(base: int, exp: int) -> int` that computes `base ** exp` for non-negative `exp` using a loop.\nRead two space-separated integers and print the result.",
        "whyThisMatters": "Building operations from scratch reinforces understanding of loop invariants and complexity.",
        "concepts": [
            "exponentiation",
            "loops",
            "functions"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Implement exponential accumulator"
        ],
        "constraints": [
            "base >= 0, exp >= 0"
        ],
        "examples": [
            {
                "input": "2 5",
                "output": "32"
            },
            {
                "input": "5 0",
                "output": "1"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "2 5",
                "expectedOutput": "32",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5 0",
                "expectedOutput": "1",
                "hidden": false
            }
        ],
        "starterCode": "def power(base: int, exp: int) -> int:\n    # Implement power calculation\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(power(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Multiply base by itself exp times. Handle exp == 0."
        ],
        "howToThink": [
            "res = 1, loop exp times res *= base."
        ],
        "approach": "Iterative multiplication.",
        "pseudocode": "res = 1\nfor _ in range(exp): res *= base\nreturn res",
        "explanation": "Accumulating exp times produces base^exp.",
        "solution": "def power(base: int, exp: int) -> int:\n    res = 1\n    for _ in range(exp):\n        res *= base\n    return res\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if len(nums) >= 2:\n        print(power(nums[0], nums[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Forgetting 0th power equals 1"
        ],
        "timeComplexity": "O(exp)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "functions",
            "math"
        ]
    },
    {
        "id": "py-prob-05-05",
        "levelId": "py-level-05",
        "title": "Multiple Return Values (Min & Max)",
        "type": "coding",
        "difficulty": "easy",
        "order": 5,
        "description": "In Python, a function can return multiple values separated by commas: `return min_val, max_val`.\nPython packs them into a tuple, which the caller can unpack!\n\n**Task:**\nWrite `find_min_max(arr)` returning `(min_val, max_val)`.\nRead a list of integers from input, call the function, and print `Min: <min_val>, Max: <max_val>`.",
        "whyThisMatters": "Returning tuples eliminates the need for output parameters (`&` references) or pointer arguments common in C++.",
        "concepts": [
            "multiple returns",
            "tuple packing",
            "unpacking"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Return and unpack multiple values from a function"
        ],
        "constraints": [
            "Non-empty list"
        ],
        "examples": [
            {
                "input": "3 1 4 1 5 9 2 6",
                "output": "Min: 1, Max: 9"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "3 1 4 1 5 9 2 6",
                "expectedOutput": "Min: 1, Max: 9",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "42",
                "expectedOutput": "Min: 42, Max: 42",
                "hidden": false
            }
        ],
        "starterCode": "def find_min_max(arr: list[int]) -> tuple[int, int]:\n    # Return min and max as tuple\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        mn, mx = find_min_max(nums)\n        print(f'Min: {mn}, Max: {mx}')\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "return min(arr), max(arr)"
        ],
        "howToThink": [
            "Find min and max, return both as a tuple."
        ],
        "approach": "Return min(arr), max(arr).",
        "pseudocode": "return min(arr), max(arr)",
        "explanation": "Commas create a tuple automatically in Python return statements.",
        "solution": "def find_min_max(arr: list[int]) -> tuple[int, int]:\n    return min(arr), max(arr)\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    if nums:\n        mn, mx = find_min_max(nums)\n        print(f'Min: {mn}, Max: {mx}')\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Creating a single list instead of returning a tuple"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "functions",
            "tuples"
        ]
    },
    {
        "id": "py-prob-05-06",
        "levelId": "py-level-05",
        "title": "Variable Arguments (*args)",
        "type": "coding",
        "difficulty": "easy",
        "order": 6,
        "description": "Python allows functions to accept an arbitrary number of positional arguments using `*args`.\nInside the function, `args` is a tuple containing all passed arguments.\n\n**Task:**\nWrite `sum_all(*args) -> int` that returns the sum of all arguments passed to it.\nRead integers from input, pass them unpacked with `*nums`, and print the sum.",
        "whyThisMatters": "`*args` and `**kwargs` are standard in Python library design and decorator patterns.",
        "concepts": [
            "*args",
            "variable arguments",
            "tuple packing"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Use *args for variable argument lists"
        ],
        "constraints": [
            "Arbitrary integers"
        ],
        "examples": [
            {
                "input": "10 20 30 40",
                "output": "100"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "10 20 30 40",
                "expectedOutput": "100",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5",
                "expectedOutput": "5",
                "hidden": false
            }
        ],
        "starterCode": "def sum_all(*args: int) -> int:\n    # Sum all passed arguments\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(sum_all(*nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "sum(args) works directly because args is a tuple."
        ],
        "howToThink": [
            "Use sum(args) inside the function."
        ],
        "approach": "Return sum(args).",
        "pseudocode": "def sum_all(*args): return sum(args)",
        "explanation": "*args collects all extra positional arguments into a tuple.",
        "solution": "def sum_all(*args: int) -> int:\n    return sum(args)\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    print(sum_all(*nums))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Iterating over *args instead of args inside function"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "functions",
            "*args"
        ]
    },
    {
        "id": "py-prob-05-07",
        "levelId": "py-level-05",
        "title": "Default Parameter Values",
        "type": "coding",
        "difficulty": "beginner",
        "order": 7,
        "description": "Functions can provide default argument values: `def greet(name, greeting='Hello'):`.\n\n**Task:**\nDefine `format_title(title, author='Anonymous')` returning `f'{title} by {author}'`.\nRead two words `Title` and `Author` from input. If only `Title` is provided, use the default author.",
        "whyThisMatters": "Default parameters provide backwards-compatible function signatures and cleaner APIs.",
        "concepts": [
            "default parameters",
            "optional arguments"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Define and invoke functions with default arguments"
        ],
        "constraints": [
            "Non-empty strings"
        ],
        "examples": [
            {
                "input": "Hamlet Shakespeare",
                "output": "Hamlet by Shakespeare"
            },
            {
                "input": "LostScroll",
                "output": "LostScroll by Anonymous"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Hamlet Shakespeare",
                "expectedOutput": "Hamlet by Shakespeare",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "LostScroll",
                "expectedOutput": "LostScroll by Anonymous",
                "hidden": false
            }
        ],
        "starterCode": "def format_title(title: str, author: str = 'Anonymous') -> str:\n    # Implement formatted string\n    pass\n\nimport sys\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) == 1:\n        print(format_title(words[0]))\n    elif len(words) >= 2:\n        print(format_title(words[0], words[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Return f'{title} by {author}'."
        ],
        "howToThink": [
            "Use default author='Anonymous' in signature."
        ],
        "approach": "Format with f-string.",
        "pseudocode": "return f'{title} by {author}'",
        "explanation": "Default arguments are substituted when the caller omits that parameter.",
        "solution": "def format_title(title: str, author: str = 'Anonymous') -> str:\n    return f'{title} by {author}'\n\nimport sys\ndef solve():\n    words = sys.stdin.read().split()\n    if len(words) == 1:\n        print(format_title(words[0]))\n    elif len(words) >= 2:\n        print(format_title(words[0], words[1]))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Placing non-default arguments after default arguments (SyntaxError)"
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "functions"
        ]
    },
    {
        "id": "py-prob-05-08",
        "levelId": "py-level-05",
        "title": "Count Vowels in String Function",
        "type": "coding",
        "difficulty": "easy",
        "order": 8,
        "description": "Write a function `count_vowels(s: str) -> int` that counts how many vowels (`a, e, i, o, u`, case-insensitive) appear in string `s`.\nRead a string and print the count.",
        "whyThisMatters": "Combining string traversal and modular helper functions.",
        "concepts": [
            "strings",
            "vowels",
            "helper functions"
        ],
        "prerequisites": [
            "functions",
            "strings"
        ],
        "learningObjectives": [
            "Write modular string processing function"
        ],
        "constraints": [
            "String input"
        ],
        "examples": [
            {
                "input": "Interview",
                "output": "4"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "Interview",
                "expectedOutput": "4",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "rhythm",
                "expectedOutput": "0",
                "hidden": false
            }
        ],
        "starterCode": "def count_vowels(s: str) -> int:\n    # Count vowels in s\n    pass\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(count_vowels(s))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "vowels = set('aeiouAEIOU'), return sum(1 for ch in s if ch in vowels)."
        ],
        "howToThink": [
            "Count characters that belong to the vowel set."
        ],
        "approach": "Sum matches in a generator expression.",
        "pseudocode": "return sum(1 for ch in s.lower() if ch in 'aeiou')",
        "explanation": "Clean comprehension counting.",
        "solution": "def count_vowels(s: str) -> int:\n    return sum(1 for ch in s.lower() if ch in 'aeiou')\n\nimport sys\ndef solve():\n    s = sys.stdin.read().strip()\n    print(count_vowels(s))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Missing uppercase vowels"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "low",
        "tags": [
            "functions",
            "strings"
        ]
    },
    {
        "id": "py-prob-05-09",
        "levelId": "py-level-05",
        "title": "Perfect Number Checker",
        "type": "coding",
        "difficulty": "easy",
        "order": 9,
        "description": "A positive integer `N` is perfect if it equals the sum of its proper divisors (divisors strictly less than `N`).\nFor example, `6` has proper divisors `1, 2, 3` and `1 + 2 + 3 = 6` (perfect).\n\n**Task:**\nWrite `is_perfect(n: int) -> bool` returning `True` or `False`. Print the result.",
        "whyThisMatters": "Divisor extraction and validation are frequent in mathematical programming rounds.",
        "concepts": [
            "divisors",
            "perfect numbers",
            "math"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Extract proper divisors and verify sum equality"
        ],
        "constraints": [
            "N >= 1"
        ],
        "examples": [
            {
                "input": "6",
                "output": "True"
            },
            {
                "input": "28",
                "output": "True"
            },
            {
                "input": "12",
                "output": "False"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "6",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "28",
                "expectedOutput": "True",
                "hidden": false
            },
            {
                "id": "tc3",
                "input": "12",
                "expectedOutput": "False",
                "hidden": false
            }
        ],
        "starterCode": "def is_perfect(n: int) -> bool:\n    # Check if n is a perfect number\n    pass\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_perfect(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "Sum divisors from 1 to n-1. Compare with n."
        ],
        "howToThink": [
            "Find all proper divisors of n, check if their sum == n."
        ],
        "approach": "Sum divisors up to n-1.",
        "pseudocode": "if n <= 1: return False\nreturn sum(i for i in range(1, n) if n % i == 0) == n",
        "explanation": "Check if the sum of all factors strictly less than n equals n.",
        "solution": "def is_perfect(n: int) -> bool:\n    if n <= 1:\n        return False\n    return sum(i for i in range(1, n) if n % i == 0) == n\n\nimport sys\ndef solve():\n    raw = sys.stdin.read().strip()\n    if raw:\n        print(is_perfect(int(raw)))\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Including n in the divisor sum"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)",
        "interviewRelevance": "medium",
        "tags": [
            "math"
        ]
    },
    {
        "id": "py-prob-05-10",
        "levelId": "py-level-05",
        "title": "Higher-Order Function Application",
        "type": "coding",
        "difficulty": "easy",
        "order": 10,
        "description": "In Python, functions are first-class citizens: they can be passed as arguments to other functions!\n\n**Task:**\nDefine `apply_fn(arr: list[int], fn) -> list[int]` that applies function `fn` to every element in `arr`.\nUse a function `double(x) -> x * 2`. Read integers from input, apply `double`, and print the resulting elements space-separated.",
        "whyThisMatters": "First-class functions enable callbacks, decorators, and functional programming constructs like `map()`.",
        "concepts": [
            "first-class functions",
            "higher-order functions",
            "callbacks"
        ],
        "prerequisites": [
            "functions"
        ],
        "learningObjectives": [
            "Pass a function as an argument to another function"
        ],
        "constraints": [
            "List of integers"
        ],
        "examples": [
            {
                "input": "1 2 3 4",
                "output": "2 4 6 8"
            }
        ],
        "testCases": [
            {
                "id": "tc1",
                "input": "1 2 3 4",
                "expectedOutput": "2 4 6 8",
                "hidden": false
            },
            {
                "id": "tc2",
                "input": "5 10",
                "expectedOutput": "10 20",
                "hidden": false
            }
        ],
        "starterCode": "def double(x: int) -> int:\n    return x * 2\n\ndef apply_fn(arr: list[int], fn) -> list[int]:\n    # Apply fn to each element in arr\n    pass\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    result = apply_fn(nums, double)\n    print(*result)\n\nif __name__ == '__main__':\n    solve()\n",
        "hints": [
            "return [fn(x) for x in arr]"
        ],
        "howToThink": [
            "Apply fn(x) inside a list comprehension."
        ],
        "approach": "List comprehension applying fn.",
        "pseudocode": "return [fn(x) for x in arr]",
        "explanation": "Demonstrates higher-order function capability in Python.",
        "solution": "def double(x: int) -> int:\n    return x * 2\n\ndef apply_fn(arr: list[int], fn) -> list[int]:\n    return [fn(x) for x in arr]\n\nimport sys\ndef solve():\n    nums = list(map(int, sys.stdin.read().split()))\n    result = apply_fn(nums, double)\n    print(*result)\n\nif __name__ == '__main__':\n    solve()\n",
        "commonMistakes": [
            "Calling fn() without argument"
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)",
        "interviewRelevance": "medium",
        "tags": [
            "functional",
            "functions"
        ]
    }
];
