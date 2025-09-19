'use client';

import { useActionState } from 'react';
import { Typography } from '@/src/shared/ui/Typography';
import { TextField } from '@/src/shared/ui/TextField';
import { Button } from '@/src/shared/ui/Button';
import { Icon } from '@/src/assets';
import { signInFunc } from '../../actions';
import s from './Authorization.module.css';
import { PasswordField } from '@/src/shared/ui/PasswordField';

export function AuthorizationForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    signInFunc,
    undefined,
  );

  return (
    <form className={s.authForm} action={formAction}>
      <div className={s.field}>
        <Typography variant={'caption'}>
          {'Email'}
        </Typography>
        <TextField
          name={'email'}
          inputMode={'email'}
          prefixNode={<Icon.Mail />}
          required={true}
          placeholder={'Введите email'}
          isDanger={Boolean(errorMessage?.errors?.email)}
        />
        {errorMessage?.errors?.email && (
          <div>
            {
              errorMessage?.errors?.email.map((message, idx) => (
                <Typography key={idx} variant={'caption'} color={'danger1'}>
                  {message}
                </Typography>
              ))
            }
          </div>
        )}
      </div>
      <div className={s.field}>
        <Typography variant={'caption'}>
          {'Пароль'}
        </Typography>
        <PasswordField
          name={'password'}
          placeholder={'Введите пароль'}
          isDanger={Boolean(errorMessage?.errors?.password)}
        />
        {errorMessage?.errors?.password && (
          <div>
            {
              errorMessage?.errors?.password.map((message, idx) => (
                <Typography key={idx} variant={'caption'} color={'danger1'}>
                  {message}
                </Typography>
              ))
            }
          </div>
        )}
      </div>
      <Button disabled={isPending}>
        {'Войти'}
      </Button>
    </form>
  );
}
