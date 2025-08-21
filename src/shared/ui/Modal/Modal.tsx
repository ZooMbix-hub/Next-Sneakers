'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '../IconButton';
import s from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  content: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const {
    onClose,
    content
  } = props;

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
