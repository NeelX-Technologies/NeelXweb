// Common dark mode utility classes reference
// This file serves as a reference for dark mode class patterns used throughout the project

/**
 * Background Colors:
 * - bg-white → bg-white dark:bg-dark-900
 * - bg-dark-50 → bg-dark-50 dark:bg-dark-800
 * - bg-dark-100 → bg-dark-100 dark:bg-dark-700
 * - bg-dark-900 → bg-dark-900 dark:bg-black
 * 
 * Text Colors:
 * - text-dark-900 → text-dark-900 dark:text-white
 * - text-dark-800 → text-dark-800 dark:text-dark-100
 * - text-dark-700 → text-dark-700 dark:text-dark-200
 * - text-dark-600 → text-dark-600 dark:text-dark-300
 * - text-dark-500 → text-dark-500 dark:text-dark-400
 * 
 * Border Colors:
 * - border-dark-200 → border-dark-200 dark:border-dark-700
 * - border-dark-300 → border-dark-300 dark:border-dark-600
 * 
 * Cards & Containers:
 * - shadow-lg → shadow-lg dark:shadow-dark-950/50
 * - shadow-xl → shadow-xl dark:shadow-dark-950/50
 * - shadow-2xl → shadow-2xl dark:shadow-dark-950/50
 */

export const darkModeClasses = {
  backgrounds: {
    white: 'bg-white dark:bg-dark-900',
    light: 'bg-dark-50 dark:bg-dark-800',
    lighter: 'bg-dark-100 dark:bg-dark-700',
    dark: 'bg-dark-900 dark:bg-black',
  },
  text: {
    primary: 'text-dark-900 dark:text-white',
    secondary: 'text-dark-700 dark:text-dark-200',
    tertiary: 'text-dark-600 dark:text-dark-300',
    muted: 'text-dark-500 dark:text-dark-400',
  },
  borders: {
    light: 'border-dark-200 dark:border-dark-700',
    medium: 'border-dark-300 dark:border-dark-600',
  },
  shadows: {
    lg: 'shadow-lg dark:shadow-dark-950/50',
    xl: 'shadow-xl dark:shadow-dark-950/50',
    '2xl': 'shadow-2xl dark:shadow-dark-950/50',
  },
};
