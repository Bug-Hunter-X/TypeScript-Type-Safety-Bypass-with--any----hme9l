# TypeScript Type Safety Bypass with 'any[]'

This repository demonstrates a common error in TypeScript where the use of `any[]` bypasses type safety, leading to unexpected runtime errors.

The `bug.ts` file contains a function that processes an array of any data type.  The lack of type safety here allows a string to be passed into the function which was intended to receive only numbers. This can lead to runtime errors.

The `bugSolution.ts` file demonstrates how to fix this issue using a more specific type, such as a generic type parameter or a union type, instead of `any`. 