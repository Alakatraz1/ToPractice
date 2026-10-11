<div align="center">

# ⚡ Interview Lab (C++ & Python 3)

### *The Ultimate Local-First Technical Interview Preparation & Mastery Suite*

<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=650&lines=540+Curated+Problems+Across+27+Levels;Zero+Cloud+Latency+%E2%80%A2+100%25+Offline+%E2%80%A2+Local+Compiler;Dual+Isolated+Tracks%3A+Modern+C%2B%2B+%26+Idiomatic+Python+3;From+Core+Basics+to+FAANG%2FIBM+Mock+Assessments" alt="Typing SVG" />
  </a>
</p>

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4%20Turbopack-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![C++17](https://img.shields.io/badge/C%2B%2B-17%20GCC-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)](https://isocpp.org/)
[![Python 3.12](https://img.shields.io/badge/Python-3.12+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Local Sandbox](https://img.shields.io/badge/Execution-100%25%20Local%20Sandbox-10B981?style=for-the-badge&logo=gnubash&logoColor=white)](#architecture)
[![OS Support](https://img.shields.io/badge/OS-Linux%20%7C%20macOS%20%7C%20Windows-F59E0B?style=for-the-badge&logo=linux&logoColor=white)](#quick-start)

<br/>

[✨ Features](#-key-features) •
[🚀 Quick Start](#-quick-start) •
[🗺️ Dual Curricula](#-curriculum-breakdown-27-levels-each) •
[🕹️ Modes](#-specialized-interview-modes) •
[🏗️ Architecture](#-system-architecture) •
[📊 Comparison](#-why-interview-lab-vs-alternatives)

<br/>

---

</div>

## 🌟 What is Interview Lab?

**Interview Lab** is a high-performance, full-stack, local-first coding interview laboratory and training course. It bridges the gap between passive online tutorials and high-pressure coding screens by offering a structured **27-level roadmap** with **540 handcrafted challenges**, complete with:

- **100% Offline Local Execution**: Compiles C++ via `g++` and executes Python scripts locally in isolated sub-process sandboxes with zero cloud roundtrips, zero queue delays, and zero paywalls.
- **Independent Dual Tracks**: Distinct curricula for **C++** (pointers, memory, STL, vectors, algorithmic design) and **Python 3** (comprehensions, slicing, `collections`, `heapq`, `bisect`, standard library algorithms). Progress in one never pollutes the other.
- **Pedagogical Guided Framework**: Every single problem includes a *"How to Think About It"* mental framework, multi-step progressive hints, pseudocode, asymptotic complexity breakdowns, and full solutions.
- **Seamless Flow**: In-editor navigation (`< Prev`, `Next >`, `Q X of 10`), one-click **Next Question** upon test success, and instant **Section Finale Transition** directly into the next level.

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3>⚡ Local Sub-Millisecond Execution</h3>
      Runs directly on your machine. C++ is compiled with <code>g++ -std=c++17 -O2</code>; Python is executed via native interpreter. Automatic timeout guards (2s) prevent infinite loops, and memory/output limits protect system health.
    </td>
    <td width="50%">
      <h3>🧠 Guided Thinking Framework</h3>
      Stuck on a problem? Don't jump to the solution. Unfold progressive hints, examine edge-case breakdowns, and follow structured reasoning steps before revealing production-grade solutions.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🎯 Strictly Isolated Dual Curricula</h3>
      Seamlessly switch between C++ and Python with a single click. The roadmap, problem recommendations, concept mastery scores, and local progress persist independently in isolated storage partitions.
    </td>
    <td width="50%">
      <h3>⏱️ Mock Assessment Mode</h3>
      Simulate live FAANG/IBM technical interviews under strict 30-minute timers with hidden test validation and zero hints. Builds real stress resilience.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🚨 Last-Minute Interview Prep</h3>
      Interview tomorrow? Access high-yield cheat sheets, critical algorithmic idioms, common traps, time complexity tables, and high-probability must-solve questions.
    </td>
    <td width="50%">
      <h3>📈 Automated Concept Mastery Tracker</h3>
      Tracks your mastery percentage across concepts (arrays, two pointers, graphs, DP, recursion). Automatically prescribes targeted review sessions when mastery drops below 70%.
    </td>
  </tr>
</table>

---

## 🚀 Quick Start

Interview Lab is built to **"just work"** on any operating system without complex manual setup.

### 📋 Prerequisites

| Dependency | Minimum Version | Verification Command |
| :--- | :--- | :--- |
| **Node.js** | `v18.0.0+` | `node -v` |
| **npm** | `v9.0.0+` | `npm -v` |
| **GCC (g++)** *(for C++)* | `v9.0+` | `g++ --version` |
| **Python** *(for Python 3)* | `v3.8+` | `python3 --version` or `python --version` |

> [!TIP]
> **Compiler Installation Helpers**:
> - **Ubuntu/Debian**: `sudo apt update && sudo apt install -y g++ python3 nodejs npm`
> - **macOS**: `xcode-select --install && brew install python node`
> - **Windows**: Install [MinGW-w64](https://www.mingw-w64.org/) or [Git Bash](https://gitforwindows.org/) / WSL. Ensure `python` is checked in "Add to PATH" during installation.

---

### 💻 One-Click Launch

#### Linux & macOS
Simply open your terminal in the project root and run:
```bash
chmod +x start.sh
./start.sh
```

#### Windows
Double-click `start.bat` or run in Command Prompt / PowerShell:
```cmd
start.bat
```

The startup script will automatically:
1. Verify compiler (`g++`) and Python runtime availability.
2. Install any missing Node dependencies.
3. Launch the Next.js Turbopack dev server.
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗺️ Curriculum Breakdown (27 Levels Each)

Interview Lab features **540 problems** (270 C++ problems and 270 Python problems), structured progressively so each level builds directly on foundations mastered previously:

```
[Level 1-8: Foundations]
   └─► [Level 9-13: Algorithmic Thinking & Standard Libraries]
          └─► [Level 14-16: Core Linear Data Structures]
                 └─► [Level 17-20: Advanced Algorithmic Patterns]
                        └─► [Level 21-24: Non-Linear, Trees, Graphs & DP]
                               └─► [Level 25-27: FAANG Assessment & Mock Loops]
```

<details open>
<summary><b>📚 View Complete 27-Level Syllabus</b></summary>
<br/>

| Level | Track | Topics & Key Skills Mastered | Problems |
| :---: | :--- | :--- | :---: |
| **01** | **Basics & I/O** | Program structure, `cout`/`print()`, formatting, syntax, comments | 10 C++ / 10 Py |
| **02** | **Variables & Types** | Type conversions, integer division (`//`), modulo, user input | 10 C++ / 10 Py |
| **03** | **Conditionals** | Branching logic, boolean algebra, chained comparisons, truthiness | 10 C++ / 10 Py |
| **04** | **Loops & Iteration** | `for`, `while`, `range()`, loop accumulators, break & continue | 10 C++ / 10 Py |
| **05** | **Functions & Scope** | Function definitions, default arguments, return types, tuple returns | 10 C++ / 10 Py |
| **06** | **Arrays & Lists** | Slicing, indexing, in-place modification, comprehensions, traversal | 10 C++ / 10 Py |
| **07** | **Strings** | String methods, reversals, ASCII codes, palindromes, f-strings | 10 C++ / 10 Py |
| **08** | **Collections** | Vectors (C++) / Tuples, Sets, Dictionaries (Python), deduplication | 10 C++ / 10 Py |
| **09** | **Problem Solving** | Pattern recognition, multi-step problem decomposition, edge cases | 10 C++ / 10 Py |
| **10** | **Searching** | Linear search, binary search intuition, logarithmic complexity, `bisect` | 10 C++ / 10 Py |
| **11** | **Sorting** | Timsort, `std::sort`, lambda custom keys, multi-criteria ordering | 10 C++ / 10 Py |
| **12** | **Complexity (Big-O)** | Asymptotic runtime, space complexity, data structure operation overhead | 10 C++ / 10 Py |
| **13** | **Standard Libraries** | STL fundamentals (C++) / `collections`, `itertools`, `math` (Python) | 10 C++ / 10 Py |
| **14** | **Hash Maps & Sets** | `unordered_map`/`dict`, two-sum pattern, frequency analysis, complements | 10 C++ / 10 Py |
| **15** | **Stacks & Queues** | LIFO/FIFO, bracket validation, monotonic stack, `std::queue`/`deque` | 10 C++ / 10 Py |
| **16** | **Linked Lists** | Node pointers, list reversals, Floyd's Tortoise and Hare cycle detection | 10 C++ / 10 Py |
| **17** | **Recursion & Backtracking** | Base cases, call stack, permutations, subsets, combinatorial search | 10 C++ / 10 Py |
| **18** | **Two Pointers** | Opposite ends, fast & slow pointers, 3Sum, container boundaries | 10 C++ / 10 Py |
| **19** | **Sliding Window** | Fixed & dynamic windows, maximum subarray sum, longest substring | 10 C++ / 10 Py |
| **20** | **Binary Search Mastery** | Search in rotated arrays, 2D matrix search, binary search on answers | 10 C++ / 10 Py |
| **21** | **Trees & BSTs** | `TreeNode`, DFS (pre/in/post), BFS level-order, LCA, BST validation | 10 C++ / 10 Py |
| **22** | **Graphs (BFS & DFS)** | Adjacency lists, shortest path, cycle detection, Kahn's topological sort | 10 C++ / 10 Py |
| **23** | **Greedy Algorithms** | Greedy choice property, interval scheduling, jump game, gas station | 10 C++ / 10 Py |
| **24** | **Dynamic Programming** | Memoization, tabulation, 1D & 2D DP (Knapsack, LCS, Coin Change) | 10 C++ / 10 Py |
| **25** | **Mixed Interview Prep** | LRU Cache, Trapping Rain Water, composite data structures | 10 C++ / 10 Py |
| **26** | **Company Assessments** | Real assessment tracks modeled after Google, Microsoft, Meta, IBM | 10 C++ / 10 Py |
| **27** | **Mock Technical Rounds** | Full-scale capstone technical loops, system design mini-simulations | 10 C++ / 10 Py |

</details>

---

## 🕹️ Specialized Interview Modes

### 1. 🏎️ The Main Problem Runner
- **Monaco Code Editor**: Full syntax highlighting, auto-indentation, bracket matching, and shortcut bindings (`Ctrl+Enter` to run code).
- **Interactive Question Bar**: Jump between problems (`< Prev`, `Next >`, `Question 3 of 10`) without losing context or leaving the workspace.
- **Section Transition**: Conquering the 10th problem in any section reveals the **"🎉 Section Complete! Start Level X"** launcher.
- **Comprehensive Solution Tab**: Approach notes, pseudocode, time/space complexity analysis, and line-by-line solution walkthroughs.

### 2. 🛡️ Mock Assessment Mode (`/interview`)
- Strict **30-minute timer**.
- **Hidden test cases** evaluated behind the scenes (exact input/output masked to prevent hardcoding).
- Hints and answer keys disabled to test real exam readiness.

### 3. ⚡ Last-Minute Interview Prep (`/last-minute`)
- High-yield **Revision Cheat Sheet** with syntax templates for both C++ and Python.
- **Top 10 Common Interview Traps** (integer overflow, off-by-one errors, shallow copies, memory bounds).
- **Asymptotic Big-O Cheat Sheet** comparing list, set, map, vector, and deque lookup/insert times.
- **Must-Solve Problem List** covering the highest ROI questions across all patterns.

### 4. 🧠 Concept Mastery & Remediation (`/review`)
- As you solve questions independently, with hints, or with solutions, Interview Lab dynamically adjusts your concept mastery score (0-100%).
- Targeted review sessions automatically pull problems for concepts where your score falls below 70%.

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                         │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │     Dashboard UI      │       │ Problem Runner Engine │  │
│  │ (Curriculum, Mastery) │       │ (Monaco, Hints, Tabs) │  │
│  └───────────┬───────────┘       └───────────┬───────────┘  │
│              │                               │              │
│              ▼                               ▼              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │   Isolated LocalStorage Engine                        │  │
│  │   • cpp_interview_lab_progress_v2_cpp                 │  │
│  │   • cpp_interview_lab_progress_v2_python              │  │
│  └───────────────────────────────────────────────────────┘  │
└──────────────────────────────┬──────────────────────────────┘
                               │ POST /api/run
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Next.js 16 Backend Layer                    │
│                                                             │
│       ┌──────────────────────────────────────────────┐      │
│       │           Local Sandbox Execution            │      │
│       │         (child_process.spawn Layer)          │      │
│       └──────────────┬────────────────┬──────────────┘      │
│                      │                │                     │
│                      ▼                ▼                     │
│               ┌─────────────┐  ┌─────────────┐              │
│               │ g++ (C++17) │  │ Python 3.12 │              │
│               │ -O2 Sandbox │  │ Subprocess  │              │
│               └─────────────┘  └─────────────┘              │
│                      │                │                     │
│                      ▼                ▼                     │
│            [Timeout & Memory Guards / Output Diff Engine]   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Why Interview Lab vs Alternatives?

| Feature | LeetCode | NeetCode | Interview Lab |
| :--- | :---: | :---: | :---: |
| **Execution Speed** | Server Queue (Slow) | Server Queue | **Instant Local Execution** |
| **Offline Support** | ❌ No | ❌ No | **✅ 100% Offline Capable** |
| **Language Separation** | Single mixed progress | Single mixed progress | **✅ Fully Isolated Curricula** |
| **Structured 1-to-27 Progression** | ❌ Flat list | Categorical | **✅ Progressive Dependency Curve** |
| **"How to Think" Framework** | ❌ Paid Editorial | ❌ Video Only | **✅ Built into every problem** |
| **Cost** | $35/mo Premium | $99+ | **✅ 100% Free & Open Source** |
| **Privacy** | Code stored in cloud | Code stored in cloud | **✅ Zero Telemetry / 100% Private** |

---

## 🛠️ Tech Stack

- **Core**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/) (`@monaco-editor/react`)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom dark-mode glassmorphic theme
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown & Math**: [React Markdown](https://github.com/remarkjs/react-markdown)
- **Local Compilers**: `g++` (GNU Compiler Collection), `python` / `python3` runtime

---

## 🤝 Contributing

Contributions, feedback, and new challenge contributions are always welcome!
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingProblem`).
3. Commit your Changes (`git commit -m 'Add amazing new interview challenge'`).
4. Push to the Branch (`git push origin feature/AmazingProblem`).
5. Open a Pull Request.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ❤️ for aspiring engineers preparing for technical interviews. Happy coding!</sub>
</div>
