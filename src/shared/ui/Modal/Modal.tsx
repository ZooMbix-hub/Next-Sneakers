'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '../IconButton';
import { useScrollLock } from './useScrollLock';
import s from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    content
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
        {content}
      </div>
    </div>
  );
}
