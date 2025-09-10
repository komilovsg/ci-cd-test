'use client';

import { ContactModal } from './ContactModal';
import { useModal } from '@/contexts/ModalContext';

export function ModalContainer() {
  const { isContactModalOpen, closeContactModal } = useModal();

  return (
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={closeContactModal} 
    />
  );
}
