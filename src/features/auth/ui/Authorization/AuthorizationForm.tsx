'use client';

import { useActionState } from 'react';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Authorization.module.css';

export function AuthorizationForm() {
  /* const {} = useActionState(); */

  return (
    <form className={s.authForm}>
      <div className={s.field}>
        <Typography variant={'caption'}>
          {'Email'}
        </Typography>
      </div>
      <div className={s.field}>
        <Typography variant={'caption'}>
          {'Пароль'}
        </Typography>
      </div>
      <button>{'Войти'}</button>
    </form>
  );
}
