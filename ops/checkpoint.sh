#!/bin/bash
# checkpoint.sh - Titanium Sealed Universe Protocol v4.0
# Safe commit with guardrail enforcement

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GUARDRAIL_SCRIPT="$PROJECT_ROOT/ops/guardrail.sh"

# Check for commit message
if [ -z "$1" ]; then
    echo -e "${RED}Error:${NC} Commit message required"
    echo ""
    echo "Usage: ./ops/checkpoint.sh \"Your commit message\""
    exit 1
fi

COMMIT_MSG="$1"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')

echo "=========================================="
echo "  Titanium Checkpoint"
echo "  $TIMESTAMP"
echo "=========================================="
echo ""

# Step 1: Run guardrails
echo -e "${BLUE}Step 1:${NC} Running guardrail check..."
echo ""

if ! "$GUARDRAIL_SCRIPT"; then
    echo ""
    echo -e "${RED}Checkpoint aborted.${NC} Fix guardrail issues first."
    exit 1
fi

echo ""

# Step 2: Stage all changes
echo -e "${BLUE}Step 2:${NC} Staging changes..."
cd "$PROJECT_ROOT"
git add -A
echo -e "${GREEN}Done.${NC}"
echo ""

# Step 3: Show what will be committed
echo -e "${BLUE}Step 3:${NC} Changes to be committed:"
git status --short
echo ""

# Step 4: Commit with timestamp
echo -e "${BLUE}Step 4:${NC} Creating commit..."
FULL_MSG="[$TIMESTAMP] $COMMIT_MSG"
git commit -m "$FULL_MSG"
echo ""

echo "=========================================="
echo -e "${GREEN}CHECKPOINT COMPLETE${NC}"
echo ""
echo "Commit: $FULL_MSG"
echo ""
echo "To push: git push origin main"
echo "=========================================="
