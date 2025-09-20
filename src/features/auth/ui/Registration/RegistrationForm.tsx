'use client';

import { useActionState } from 'react';
import { Typography } from '@/src/shared/ui/Typography';
import { TextField } from '@/src/shared/ui/TextField';
import { PasswordField } from '@/src/shared/ui/PasswordField';
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
        <Typography variant={'caption'} weight={'medium'}>
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
        <Typography variant={'caption'} weight={'medium'}>
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
      <div className={s.field}>
        <Typography variant={'caption'} weight={'medium'}>
          {'Повторный пароль'}
        </Typography>
        <PasswordField
          name={'repeatPassword'}
          placeholder={'Введите пароль повторно'}
          isDanger={Boolean(errorMessage?.errors?.repeatPassword)}
        />
        {errorMessage?.errors?.repeatPassword && (
          <div>
            {
              errorMessage?.errors?.repeatPassword.map((message, idx) => (
                <Typography key={idx} variant={'caption'} color={'danger1'}>
                  {message}
                </Typography>
              ))
            }
          </div>
        )}
      </div>
      <Button disabled={isPending}>
        {'Зарегистрироваться'}
      </Button>
    </form>
  );
}