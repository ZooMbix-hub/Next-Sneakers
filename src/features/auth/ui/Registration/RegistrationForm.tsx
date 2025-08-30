'use client';

import { useActionState } from 'react';
import { Typography } from '@/src/shared/ui/Typography';
import { TextField } from '@/src/shared/ui/TextField';
import { Button } from '@/src/shared/ui/Button';
import { Icon } from '@/src/assets';
import { registerFunc } from '../../actions';
import s from './Registration.module.css';

export function RegistrationForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    registerFunc,
    undefined,
  );

  return (
    <form className={s.registrForm} action={formAction}>
      <div className={s.field}>
        <Typography variant={'caption'}>
          {'Email'}
        </Typography>
        <TextField
          name={'email'}
          inputMode={'email'}
          icon={<Icon.Mail />}
          required={true}
          placeholder={'Введите email'}
        />
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
        <Typography variant={'caption'}>
          {'Повторный пароль'}
        </Typography>
        <TextField
          name={'repeatPassword'}
          type={'password'}
          icon={<Icon.Key />}
          required={true}
          placeholder={'Введите пароль повторно'}
        />
      </div>
      <Button disabled={isPending}>
        {'Зарегистрироваться'}
      </Button>
    </form>
  );
}