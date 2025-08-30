import type z from 'zod';

type ErrorKey = 'email' | 'password' | 'repeatPassword';

interface Errors {
  status: 'validation error';
  errors: {
    email?: string[];
    password?: string[];
    repeatPassword?: string[];
  }
}

const isErrorKey = (key: unknown): key is ErrorKey => {
  return typeof key === 'string' && ['email', 'password', 'repeatPassword'].includes(key);
};

export function getErrors(errors: z.core.$ZodIssue[]) {
  const formattedErrors: Errors = {
    status: 'validation error',
    errors: {}
  };

  errors.forEach((error) => {
    const [key] = error.path;

    if (isErrorKey(key)) {
      if (formattedErrors.errors[key]) {
        formattedErrors.errors[key].push(error.message);
      } else {
        formattedErrors.errors[key] = [error.message];
      }
    }
  });

  return formattedErrors;
};