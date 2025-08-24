import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z, ZodError } from 'zod';
import { authConfig } from './auth.config';
import { db } from './db';

export async function getUser(email: string) {
  try {
    const { rows } = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    return rows[0];
  } catch (error: unknown) {
    console.error('Error executing query:', error);
    return null;
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error('Email и пароль обязательны');
          }

          const parsedCredentials = z
            .object({
              email: z.string().email(),
              password: z.string().min(6)
            })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);

            if (!user) {
              throw new Error('Неверный ввод данных');
            }

            /* const isPasswordValid = await bcryptjs.compare(password, user.password);

            if (!isPasswordValid) {
              throw new Error('Неверный ввод данных');
            } */

            return user;
          }
        } catch (error) {
          if (error instanceof ZodError) return null;

          return null;
        }
      },
    }),
  ],
});
