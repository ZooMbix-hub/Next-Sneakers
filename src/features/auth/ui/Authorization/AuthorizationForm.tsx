'use client';

import { useActionState } from 'react';
import { Typography } from '@/src/shared/ui/Typography';
import { TextField } from '@/src/shared/ui/TextField';
import { Icon } from '@/src/assets';
import s from './Authorization.module.css';

export function AuthorizationForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    (arg1, arg2) => console.log(arg1, arg2),
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
          icon={<Icon.Mail />}
          required={true}
          placeholder={'Введите email'}
        />
      </div>
      <div className={s.field}>
        <Typography variant={'caption'}>
          {'Пароль'}
        </Typography>
        <TextField
          name={'password'}
          type={'password'}
          icon={<Icon.Key />}
          required={true}
          placeholder={'Введите пароль'}
        />
      </div>
      <button>{'Войти'}</button>
    </form>
  );
}
