Land the current feature branch to main:

1. Run `pnpm validate` (lint + build)
2. If validation fails, stop and report errors
3. Show `git log --oneline main..HEAD` for review
4. Switch to main: `git checkout main`
5. Fast-forward merge: `git merge --ff-only <branch>`
6. Show final status — do NOT push (human decides when to push)
