import type z from 'zod';

export function getErrors<K extends string>(errors: z.core.$ZodIssue[]): Partial<Record<K, string[]>> {
  const formattedErrors: Partial<Record<K, string[]>> = {};

  for (const error of errors) {
    const [key] = error.path;

    if (formattedErrors[key as K]) {
      formattedErrors[key as K]!.push(error.message);
    } else {
      formattedErrors[key as K] = [error.message];
    }
  }

  return formattedErrors;
}