# Tailwind CSS Plugin: @apply Directive with Conditional Multiple Classes

This repository demonstrates a bug related to using Tailwind's `@apply` directive within a plugin to conditionally apply multiple utility classes.  The issue manifests when attempting to apply different sets of classes based on a prop, leading to inconsistent or missing styles. The problem is addressed and resolved within this repository.

## Bug Description:

When using `@apply` within a Tailwind plugin to apply different sets of utility classes conditionally (e.g., based on a prop), Tailwind might not apply all the classes correctly, resulting in missing or unexpected styles.  This behavior is inconsistent and difficult to debug.

## Solution:

The solution involves applying classes directly instead of using `@apply` for conditional application. This method ensures reliable and consistent styling across all conditions.