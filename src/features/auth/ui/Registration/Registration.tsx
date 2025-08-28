'use client';

import { useState } from 'react';
import { Modal } from '@/src/shared/ui/Modal/Modal';
import { Button } from '@/src/shared/ui/Button';
import { RegistrationForm } from './RegistrationForm';

export function Registration() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <Button onClick={openModal}>Регистрация</Button>
      {
        isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            onClose={closeModal}
            content={<RegistrationForm />}
            title={'Регистрация'}
          />
        )
      }
    </>
  );
}