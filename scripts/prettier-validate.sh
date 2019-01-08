#!/usr/bin/env bash

# Retrieve list of files that are:
# - Updated against master
# - Existing (filter out deleted, which are also reported by git diff)
# - Covered by prettier
PRETTIER_TARGET=$(git diff --name-only master...HEAD | perl -ne 'chomp(); if (-e $_) {print "$_\n"}' | egrep '\.css$|\.html$|\.js$|\.json$|\.md$|\.yaml$')

# Validate only if there are files to validate
if [ -n "${PRETTIER_TARGET}" ]
then
  BROKEN_FILES=$(npx prettier -l $PRETTIER_TARGET)
  if [ -n "${BROKEN_FILES}" ]
  then
    echo -e "\x1B[0;31mError: Following files do not match Prettier output\n\n${BROKEN_FILES}\x1B[0m\n"
    exit 1
  fi
fi
