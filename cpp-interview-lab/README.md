# C++ Interview Lab

A full-stack local web application that works as a structured C++ learning journey and interview simulator. 
It combines the benefits of a guided C++ course, LeetCode, and HackerRank.

## Requirements

- Node.js (v18+)
- npm
- g++ (GCC C++ Compiler)

## Verify Compiler

Before running, ensure `g++` is installed and available in your PATH:

```bash
g++ --version
```

If it's not installed:
- Ubuntu/Debian: `sudo apt install g++`
- macOS: `xcode-select --install`
- Windows: Install MinGW-w64 or use WSL

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Architecture

- **Next.js**: The frontend interface and backend API routes.
- **Node execution layer**: `child_process.spawn` is used to execute `g++` and the resulting binaries locally.
- **g++**: Locally installed compiler handles all C++ compilation.
- **Local Persistence**: User progress (completed problems, saved code, etc.) is stored in `localStorage`.

## Troubleshooting

- **g++ not found**: Ensure the compiler is installed and in your system PATH. The dashboard will show a red dot if it can't find `g++`.
- **Compiler timeout**: If you have an infinite loop in your code, the execution layer enforces a strict time limit (default 2s) and memory/output limits to prevent hanging.
- **Port already in use**: If port 3000 is taken, Next.js will automatically try 3001. Check the console output.
