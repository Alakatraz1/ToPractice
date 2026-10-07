#!/bin/bash

echo "========================================="
echo " Starting C++ Interview Lab (Linux/Mac)  "
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v npm &> /dev/null
then
    echo "Error: Node.js and npm are not installed."
    echo "Please install Node.js from https://nodejs.org/ first."
    exit 1
fi

# Navigate to the project directory
cd cpp-interview-lab || { echo "Directory 'cpp-interview-lab' not found!"; exit 1; }

echo "Checking dependencies..."
# Install dependencies if node_modules doesn't exist to save time on subsequent runs
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies (this may take a minute)..."
    npm install
else
    echo "Dependencies already installed."
fi

echo ""
echo "Starting development server..."
echo "Please open http://localhost:3000 in your web browser once it says 'Ready'."
echo ""

# Start the Next.js development server
npm run dev
