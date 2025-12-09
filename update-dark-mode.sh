#!/bin/bash
# Dark Mode Update Script for NeelX Project
# This script adds dark mode classes throughout the project

echo "Updating all files with dark mode support..."

# Define replacements
declare -A replacements=(
  ["className=\"bg-white"]="className=\"bg-white dark:bg-dark-900"
  ["className=\"bg-dark-50"]="className=\"bg-dark-50 dark:bg-dark-800"
  ["className=\"bg-dark-100"]="className=\"bg-dark-100 dark:bg-dark-700"
  ["text-dark-900"]="text-dark-900 dark:text-white"
  ["text-dark-800"]="text-dark-800 dark:text-dark-100"
  ["text-dark-700"]="text-dark-700 dark:text-dark-200"
  ["text-dark-600"]="text-dark-600 dark:text-dark-300"
  ["border-dark-200"]="border-dark-200 dark:border-dark-700"
  ["border-dark-300"]="border-dark-300 dark:border-dark-600"
  ["shadow-lg"]="shadow-lg dark:shadow-dark-950/50"
  ["shadow-xl"]="shadow-xl dark:shadow-dark-950/50"
  ["shadow-2xl"]="shadow-2xl dark:shadow-dark-950/50"
)

echo "Script created for reference. Manual updates required for JSX files."
