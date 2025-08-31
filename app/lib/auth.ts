import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
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
          const {email, password} = credentials;

          if (!email || !password) {
            throw new Error('Email и пароль обязательны');
          }

          /* TODO: добавить типизацию */
          const user = await getUser(email as string);

          if (!user) {
            throw new Error('Неверный ввод данных');
          }

          const isPasswordValid = await bcrypt.compare(password as string, user.password);

          if (!isPasswordValid) {
            throw new Error('Неверный ввод данных');
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
