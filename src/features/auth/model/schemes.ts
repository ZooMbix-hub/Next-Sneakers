import { z } from 'zod';

export const registerScheme = z.object({
  email: z.email('Некорректный формат email')
    .min(1, 'Email обязателен для заполнения')
    .max(50, 'Email не должен превышать 50 символов')
    .transform(email => email.toLowerCase().trim()),

  password: z.string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(10, 'Пароль не должен превышать 10 символов')
    .regex(/[a-zA-Z]/, 'Пароль должен содержать хотя бы одну букву')
    .regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),

  repeatPassword: z.string()
    .min(1, 'Повтор пароля обязателен')
}).refine(
  (data) => data.password === data.repeatPassword, {
    message: 'Пароли не совпадают',
    path: ['repeatPassword']
  }
);

export const signInSchema = z.object({
  email: z.email('Некорректный формат email')
    .min(1, 'Email обязателен для заполнения')
    .transform(email => email.toLowerCase().trim()),

  password: z.string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(10, 'Пароль не должен превышать 10 символов')
});