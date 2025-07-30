import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';

export function AddCart() {
  return (
    <IconButton>
      <Icon.Plus color={'var(--gray1)'} />
    </IconButton>
  );
}