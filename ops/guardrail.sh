#!/bin/bash
# guardrail.sh - Titanium Sealed Universe Protocol v4.0
# Validates state file freshness before commits

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
FRESHNESS_MINUTES=5
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "=========================================="
echo "  Titanium Guardrail Check"
echo "=========================================="
echo ""

# Track failures
FAILED=0

# Function to check file freshness
check_freshness() {
    local file="$1"
    local filepath="$PROJECT_ROOT/$file"

    if [ ! -f "$filepath" ]; then
        echo -e "${RED}[FAIL]${NC} $file - File not found!"
        FAILED=1
        return
    fi

    # Check if modified within FRESHNESS_MINUTES
    if find "$filepath" -mmin -$FRESHNESS_MINUTES 2>/dev/null | grep -q .; then
        echo -e "${GREEN}[PASS]${NC} $file - Fresh (modified within ${FRESHNESS_MINUTES}min)"
    else
        echo -e "${YELLOW}[WARN]${NC} $file - Stale (not modified within ${FRESHNESS_MINUTES}min)"
        FAILED=1
    fi
}

# Check protocol files
echo "Checking state files..."
echo ""
check_freshness "STATUS.md"
check_freshness "LOG.md"

echo ""
echo "=========================================="

if [ $FAILED -eq 1 ]; then
    echo -e "${YELLOW}GUARDRAIL WARNING${NC}"
    echo ""
    echo "State files may be stale. Before committing:"
    echo "  1. Update STATUS.md with current state"
    echo "  2. Add session entry to LOG.md"
    echo ""
    echo "Then run this check again."
    echo ""
    exit 1
else
    echo -e "${GREEN}GUARDRAIL PASSED${NC}"
    echo ""
    echo "All state files are fresh. Safe to commit."
    echo ""
    exit 0
fi
