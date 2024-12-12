#!/bin/bash

# Ensure you are in the correct branch
git checkout main

# Remove the file containing the secret from all commits
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch supabase/.env.local" \
  --prune-empty --tag-name-filter cat -- --all

# Clean up and remove backup refs
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now --aggressive

