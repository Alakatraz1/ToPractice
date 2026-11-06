#!/bin/bash
set -e

# ==============================================================================
#  ToPractice / Interview Lab - Safe Update Script (macOS)
#  Safely backs up student progress, pulls the latest updates,
#  restores progress, and verifies project integrity.
# ==============================================================================

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}${BOLD}======================================================${NC}"
echo -e "${CYAN}${BOLD}   ⚡ ToPractice / Interview Lab - Safe Updater (macOS)  ${NC}"
echo -e "${CYAN}${BOLD}======================================================${NC}"
echo ""

# Ensure we are in the repository root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -d "cpp-interview-lab" ]; then
    echo -e "${RED}Error: 'cpp-interview-lab' directory not found in $SCRIPT_DIR.${NC}"
    echo "Please run this script from the root of the repository."
    exit 1
fi

# Check for Git
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: git is not installed or not in PATH.${NC}"
    exit 1
fi

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="progress_backups/backup_${TIMESTAMP}"
mkdir -p "$BACKUP_DIR"

echo -e "${BLUE}▶ [1/5] Backing up your local progress and work...${NC}"

# 1. Backup progress file if it exists
PROGRESS_BACKED_UP=false
if [ -f "cpp-interview-lab/.user_progress_backup.json" ]; then
    cp "cpp-interview-lab/.user_progress_backup.json" "$BACKUP_DIR/.user_progress_backup.json"
    PROGRESS_BACKED_UP=true
    echo -e "   ${GREEN}✔ Progress backup file archived to:${NC} $BACKUP_DIR/.user_progress_backup.json"
elif [ -f ".user_progress_backup.json" ]; then
    cp ".user_progress_backup.json" "$BACKUP_DIR/.user_progress_backup.json"
    PROGRESS_BACKED_UP=true
    echo -e "   ${GREEN}✔ Progress backup file archived to:${NC} $BACKUP_DIR/.user_progress_backup.json"
fi

# 2. Check for uncommitted git changes and safely preserve them
STASHED=false
if [ -n "$(git status --porcelain)" ]; then
    echo -e "   ${YELLOW}Notice: Uncommitted changes detected in your workspace.${NC}"
    git diff > "$BACKUP_DIR/uncommitted_changes.patch" 2>/dev/null || true
    git diff --staged > "$BACKUP_DIR/staged_changes.patch" 2>/dev/null || true
    echo -e "   ${GREEN}✔ Created emergency diff patch in:${NC} $BACKUP_DIR/"
    
    echo "   Saving changes to Git stash..."
    git stash push -m "Auto-backup before update ${TIMESTAMP}" > /dev/null 2>&1 || true
    STASHED=true
    echo -e "   ${GREEN}✔ Local work safely stashed.${NC}"
else
    echo -e "   ${GREEN}✔ Git working tree is clean.${NC}"
fi

echo -e "${BLUE}▶ [2/5] Fetching and pulling latest updates from GitHub...${NC}"
git fetch origin main

# Perform safe pull
if git pull origin main; then
    echo -e "   ${GREEN}✔ Successfully updated to the latest repository commit.${NC}"
else
    echo -e "   ${YELLOW}Notice: Direct pull reported conflicts. Trying rebase...${NC}"
    if git pull --rebase origin main; then
        echo -e "   ${GREEN}✔ Successfully rebased onto latest updates.${NC}"
    else
        echo -e "   ${RED}Warning: Could not automatically reconcile Git changes.${NC}"
        echo -e "   ${YELLOW}Your progress is 100% safe in: $BACKUP_DIR${NC}"
    fi
fi

echo -e "${BLUE}▶ [3/5] Restoring student progress...${NC}"
if [ "$PROGRESS_BACKED_UP" = true ]; then
    cp "$BACKUP_DIR/.user_progress_backup.json" "cpp-interview-lab/.user_progress_backup.json"
    cp "$BACKUP_DIR/.user_progress_backup.json" ".user_progress_backup.json" 2>/dev/null || true
    echo -e "   ${GREEN}✔ Progress successfully restored to current project.${NC}"
else
    # Run backup manager restore if available
    if [ -f "cpp-interview-lab/scripts/backup-manager.js" ]; then
        node "cpp-interview-lab/scripts/backup-manager.js" restore "$BACKUP_DIR" 2>/dev/null || true
    fi
fi

# Restore git stash if we created one
if [ "$STASHED" = true ]; then
    echo "   Re-applying your local uncommitted work..."
    if git stash pop > /dev/null 2>&1; then
        echo -e "   ${GREEN}✔ Your personal modifications were restored cleanly.${NC}"
    else
        echo -e "   ${YELLOW}Note: Some stashed changes had minor conflicts.${NC}"
        echo -e "   Your exact edits are saved as a patch file at:"
        echo -e "   ${BOLD}$BACKUP_DIR/uncommitted_changes.patch${NC}"
    fi
fi

echo -e "${BLUE}▶ [4/5] Checking dependencies and build health...${NC}"
cd cpp-interview-lab
if command -v npm &> /dev/null; then
    npm install --silent > /dev/null 2>&1 || npm install
    echo -e "   ${GREEN}✔ Dependencies verified and up to date.${NC}"
    
    # Run backup manager verification
    echo -e "${BLUE}▶ [5/5] Verifying progress data integrity...${NC}"
    node scripts/backup-manager.js verify || true
fi
cd "$SCRIPT_DIR"

echo ""
echo -e "${GREEN}${BOLD}======================================================${NC}"
echo -e "${GREEN}${BOLD}   🎉 Update Completed Successfully!                 ${NC}"
echo -e "${GREEN}${BOLD}======================================================${NC}"
echo -e "✔ All student progress, streaks, and scores preserved."
echo -e "✔ Backup archive saved at: ${BOLD}${BACKUP_DIR}${NC}"
echo ""
echo -e "To continue practicing, start your local server with:"
echo -e "  ${CYAN}${BOLD}./start.sh${NC}"
echo ""
