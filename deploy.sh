#!/usr/bin/env bash

set -e

# 🧪 Science Projects Deployment Lab 🔬
# A fun and robust deployment script for your science website
# Usage: ./deploy.sh

# Color definitions
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Display a fun ASCII art banner
echo -e "${CYAN}"
cat << "EOF"
 _____   _____  _____  _____  _   _   _____  _____
/  ___/ /  ___||  ___||  _  \| | | | /  ___||  ___|
| |___  | |    | |__  | |_| || | | | | |___ | |__
\___  \ | |    |  __| |  ___/| | | | \___  \|  __|
 ___| | | |___ | |___ | |    | |_| |  ___| || |___
/_____/ \_____/|_____||_|    \_____/ /_____/|_____|
                                                     
 _____   _____  _____  _      _____  _   _  _____
|  _  \ |  ___||  _  \| |    |  _  \| | | ||  ___|
| | | | | |___ | |_| || |    | | | || | | || |___
| | | | |  ___||  ___/| |    | | | || | | ||  ___|
| |_| | | |___ | |    | |___ | |_| || |_| || |___
|_____/ |_____||_|    |_____||_____/\_____/|_____|
EOF
echo -e "${NC}"

# Helper functions
handle_error() {
  echo -e "${RED}🧪 EXPERIMENT FAILED: $1${NC}"
  echo -e "${YELLOW}🧬 Returning to original branch...${NC}"
  git checkout "$original_branch"
  exit 1
}

show_status() {
  echo -e "${BLUE}🔬 $1...${NC}"
}

show_success() {
  echo -e "${GREEN}⚛️ $1${NC}"
}

# Fun loading animation
show_loading() {
  local message=$1
  local pid=$!
  local spin='-\|/'
  local i=0
  echo -ne "${PURPLE}🧪 $message... ${NC}"
  while kill -0 $pid 2>/dev/null; do
    i=$(( (i+1) % 4 ))
    echo -ne "\r${PURPLE}🧪 $message... ${spin:$i:1} ${NC}"
    sleep .1
  done
  echo -ne "\r${GREEN}✅ $message... Done!${NC}\n"
}

# Check if git repository exists
if [ ! -d .git ]; then
  handle_error "This is not a git repository. Science requires proper organization!"
fi

# Record starting branch
START_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Exit safely on interrupt or error
trap 'git checkout "$START_BRANCH"; exit 1' INT TERM

echo -e "${CYAN}🚀 INITIATING SCIENCE DEPLOYMENT SEQUENCE AT $(date '+%Y-%m-%d %H:%M:%S')${NC}"
echo -e "${YELLOW}🔭 Preparing to launch your science projects into the digital universe!${NC}"

# Checkout main and push changes
show_status "Initiating molecular transfer to main branch"
git checkout main || handle_error "Molecular transfer to main branch failed! Check your quantum alignment."

# Commit any uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo -e "${YELLOW}🧫 Discovered uncommitted changes in the petri dish!${NC}"
  git add .
  git commit -m "🔬 Lab update $(date '+%Y-%m-%d %H:%M:%S')" || handle_error "Failed to commit changes on main - experiment contaminated!"
  show_success "Successfully preserved specimen changes in the main branch"
else
  show_status "Lab is clean - no uncommitted changes detected"
fi

# Push main branch
show_status "Launching main branch to remote observatory"
echo -e "${PURPLE}🚀 3... 2... 1... Ignition sequence started!${NC}"
git push origin main || handle_error "Launch failed! Check your rocket fuel (internet connection)."
show_success "Main branch successfully reached orbit"

# Install dependencies and build
show_status "Mixing chemical compounds (dependencies) and synthesizing site"
echo -e "${CYAN}⚗️ Combining elements to create your science website...${NC}"
(pnpm install && pnpm run build) || handle_error "Chemical reaction failed! Check your formula (code)."

# Verify dist directory exists after build
if [ ! -d dist ]; then
  handle_error "Experiment produced no results: 'dist' directory missing. Check your hypothesis (build configuration)."
fi
show_success "Eureka! Build synthesized successfully"

# Checkout or create deploy branch
if git show-ref --verify --quiet refs/heads/deploy; then
  show_status "Teleporting to deploy dimension"
  git checkout deploy || handle_error "Teleportation failed! Deploy branch unreachable."
  show_status "Recalibrating deploy branch to match main branch"
  git reset --hard main || handle_error "Recalibration failed! Temporal anomaly detected."
else
  show_status "Creating new deploy dimension from main branch matter"
  git checkout -b deploy main || handle_error "Failed to create deploy branch. Insufficient quantum energy."
fi

# Clean root (except .git)
show_status "Sterilizing laboratory environment"
echo -e "${YELLOW}🧹 Cleaning up workspace for optimal experiment conditions...${NC}"
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name 'dist' -exec rm -rf {} +

# Move build files into root directory
show_status "Transferring experimental results to observation chamber"
cp -r dist/* . || handle_error "Failed to transfer experimental data. Check your microscope (file system)."

# Add, commit, and push deploy branch
show_status "Documenting experimental results"
git add .
git commit -m "🔬 Deploy experiment results $(date '+%Y-%m-%d %H:%M:%S')" || show_status "No new results to document on deploy branch."

show_status "Publishing research findings to the scientific community"
echo -e "${PURPLE}📡 Broadcasting to the digital universe...${NC}"
git push origin deploy --force || handle_error "Publication failed! Check your satellite connection."
show_success "Research successfully published to deploy branch"

# Return to original branch
show_status "Returning time machine to original timeline: $START_BRANCH"
git checkout "$START_BRANCH" || handle_error "Failed to return to original timeline. Temporal paradox detected!"

# Final message
echo -e "${GREEN}🧪 SCIENTIFIC DEPLOYMENT SUCCESSFUL! 🔭${NC}"
echo -e "${CYAN}✨ Experiment completed at $(date '+%Y-%m-%d %H:%M:%S')! ✨${NC}"
echo -e "${YELLOW}📊 Your science projects are now live for the world to see! 🌍${NC}"