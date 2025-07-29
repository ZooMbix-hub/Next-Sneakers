import { Icon } from '@/src/assets';
import s from './AddCart.module.css';

export function AddCart() {
  return (
    <button className={s.addCart}>
      <Icon.Plus color={'var(--gray1)'} />
    </button>
  );
}