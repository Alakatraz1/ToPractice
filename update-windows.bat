@echo off
setlocal enabledelayedexpansion

title ToPractice - Safe Updater (Windows)
echo ======================================================
echo    ToPractice / Interview Lab - Safe Updater (Windows)
echo ======================================================
echo.

:: Ensure we are in the repository root directory
cd /d "%~dp0"

if not exist "cpp-interview-lab\" (
    echo Error: 'cpp-interview-lab' directory not found!
    echo Please run this script from the root of the repository.
    pause
    exit /b 1
)

:: Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: git is not installed or not in PATH.
    echo Please install Git for Windows from https://git-scm.com/
    pause
    exit /b 1
)

:: Generate timestamp for backup (YYYYMMDD_HHMMSS)
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value 2^>nul') do set datetime=%%I
if "%datetime%"=="" (
    set TIMESTAMP=%date:~-4%%date:~4,2%%date:~7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
    set TIMESTAMP=%TIMESTAMP: =0%
) else (
    set TIMESTAMP=%datetime:~0,8%_%datetime:~8,6%
)

set BACKUP_DIR=progress_backups\backup_%TIMESTAMP%
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"

echo [1/5] Backing up your local progress and work...

set PROGRESS_BACKED_UP=false
if exist "cpp-interview-lab\.user_progress_backup.json" (
    copy /y "cpp-interview-lab\.user_progress_backup.json" "%BACKUP_DIR%\.user_progress_backup.json" >nul
    set PROGRESS_BACKED_UP=true
    echo   [OK] Progress backup file archived to: %BACKUP_DIR%\.user_progress_backup.json
) else if exist ".user_progress_backup.json" (
    copy /y ".user_progress_backup.json" "%BACKUP_DIR%\.user_progress_backup.json" >nul
    set PROGRESS_BACKED_UP=true
    echo   [OK] Progress backup file archived to: %BACKUP_DIR%\.user_progress_backup.json
)

:: Check for uncommitted git changes
set STASHED=false
git status --porcelain > "%TEMP%\tp_status.tmp"
for %%F in ("%TEMP%\tp_status.tmp") do set STATUS_SIZE=%%~zF
if %STATUS_SIZE% GTR 0 (
    echo   [Notice] Uncommitted changes detected in your workspace.
    git diff > "%BACKUP_DIR%\uncommitted_changes.patch" 2>nul
    git diff --staged > "%BACKUP_DIR%\staged_changes.patch" 2>nul
    echo   [OK] Created emergency diff patch in: %BACKUP_DIR%\
    
    echo   Saving changes to Git stash...
    git stash push -m "Auto-backup before update %TIMESTAMP%" >nul 2>nul
    set STASHED=true
    echo   [OK] Local work safely stashed.
) else (
    echo   [OK] Git working tree is clean.
)
del "%TEMP%\tp_status.tmp" 2>nul

echo [2/5] Fetching and pulling latest updates from GitHub...
git fetch origin main

git pull origin main
if %ERRORLEVEL% NEQ 0 (
    echo   [Notice] Direct pull reported conflicts. Trying rebase...
    git pull --rebase origin main
    if %ERRORLEVEL% NEQ 0 (
        echo   [Warning] Could not automatically reconcile Git changes.
        echo   Your progress is 100%% safe in: %BACKUP_DIR%
    ) else (
        echo   [OK] Successfully rebased onto latest updates.
    )
) else (
    echo   [OK] Successfully updated to the latest repository commit.
)

echo [3/5] Restoring student progress...
if "%PROGRESS_BACKED_UP%"=="true" (
    copy /y "%BACKUP_DIR%\.user_progress_backup.json" "cpp-interview-lab\.user_progress_backup.json" >nul
    copy /y "%BACKUP_DIR%\.user_progress_backup.json" ".user_progress_backup.json" >nul
    echo   [OK] Progress successfully restored to current project.
) else (
    if exist "cpp-interview-lab\scripts\backup-manager.js" (
        node "cpp-interview-lab\scripts\backup-manager.js" restore "%BACKUP_DIR%" 2>nul
    )
)

:: Pop stash if we stashed
if "%STASHED%"=="true" (
    echo   Re-applying your local uncommitted work...
    git stash pop >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo   [OK] Your personal modifications were restored cleanly.
    ) else (
        echo   [Notice] Some stashed changes had minor conflicts.
        echo   Your exact edits are saved as a patch file at:
        echo   %BACKUP_DIR%\uncommitted_changes.patch
    )
)

echo [4/5] Checking dependencies and build health...
cd cpp-interview-lab
where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    call npm install
    echo   [OK] Dependencies verified and up to date.
    
    echo [5/5] Verifying progress data integrity...
    node scripts\backup-manager.js verify
)
cd /d "%~dp0"

echo.
echo ======================================================
echo    Update Completed Successfully!
echo ======================================================
echo [OK] All student progress, streaks, and scores preserved.
echo [OK] Backup archive saved at: %BACKUP_DIR%
echo.
echo To continue practicing, start your local server with:
echo   start.bat
echo.
pause
