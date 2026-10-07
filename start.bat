@echo off
title C++ Interview Lab
echo =========================================
echo  Starting C++ Interview Lab (Windows)
echo =========================================
echo.

:: Check if Node.js is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js and npm are not installed.
    echo Please install Node.js from https://nodejs.org/ first.
    pause
    exit /b 1
)

:: Navigate to the project directory
cd cpp-interview-lab
if %ERRORLEVEL% NEQ 0 (
    echo Directory 'cpp-interview-lab' not found!
    pause
    exit /b 1
)

echo Checking dependencies...
:: Install dependencies if node_modules doesn't exist
if not exist "node_modules\" (
    echo Installing dependencies (this may take a minute^)...
    call npm install
) else (
    echo Dependencies already installed.
)

echo.
echo Starting development server...
echo Please open http://localhost:3000 in your web browser once it says 'Ready'.
echo.

:: Start the Next.js development server
call npm run dev

pause
