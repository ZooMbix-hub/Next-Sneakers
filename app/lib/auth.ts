import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { getUser } from '@/src/entites/user/api';
import { authConfig } from './auth.config';

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
          const user = await getUser(email as string) as any;

          if (!user) {
            throw new Error('Неверный ввод данных');
          }

          /* TODO: добавить типизацию */
          const isPasswordValid = await bcrypt.compare(password as string, user.password);

          if (!isPasswordValid) {
            throw new Error('Неверный ввод данных');
          }

          return user;
        } catch (error) {
          return error;
        }
      },
    }),
  ],
});