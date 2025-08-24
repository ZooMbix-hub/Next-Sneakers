'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { useScrollLock } from './useScrollLock';
import s from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title: string;
}

export function Modal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    content,
    title
  } = props;

  useScrollLock(isOpen);

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.contentModal} onClick={(event) => event.stopPropagation()}>
        <div className={s.iconButtonWrapper}>
          <IconButton onClick={onClose}>
            <Icon.Close />
          </IconButton>
        </div>
        <div className={s.typographyWrapper}>
          <Typography variant={'h3'} weight={'medium'}>
            {title}
          </Typography>
        </div>
        {content}
      </div>
    </div>
  );
}
