#!/usr/bin/env bash

# Retrieve list of files that are:
# - Updated against master
# - Existing (filter out deleted, which are also reported by git diff)
# - Covered by eslint
ESLINT_TARGET=$(git diff --name-only master...HEAD | perl -ne 'chomp(); if (-e $_) {print "$_\n"}' | egrep '\.js$') &&

# Validate only if there are files to validate
if [ -n "${ESLINT_TARGET}" ]
then
  ESLINT_ERRORS=$(./node_modules/.bin/eslint --color --ignore-pattern '!*' $ESLINT_TARGET)
  if [ -n "${ESLINT_ERRORS}" ]
  then
    echo -e "\x1B[0;31mError: ESLint validation failed\x1B[0m\n\n${ESLINT_ERRORS}\n"
    exit 1
  fi
fi
