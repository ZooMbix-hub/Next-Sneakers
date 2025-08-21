'use client';

import { useState } from 'react';
import { Modal } from '@/src/shared/ui/Modal/Modal';
import { AuthorizationForm } from './AuthorizationForm';

export function Authorization() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <button onClick={openModal}>Войти</button>
      {
        isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            onClose={closeModal}
            content={<AuthorizationForm />}
          />
        )
      }
    </>
  );
}