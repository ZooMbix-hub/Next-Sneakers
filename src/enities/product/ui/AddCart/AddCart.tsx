import { IconButton } from '@/src/shared/ui/IconButton';
import { Icon } from '@/src/assets';

export function AddCart() {
  return (
    <IconButton>
      <Icon.Plus color={'var(--gray1)'} />
    </IconButton>
  );
}