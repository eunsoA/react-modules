import { Modal, ModalProvider } from './lib';
import ModalOpenButton from './ModalOpenButton';
import { ReactNode } from 'react';
import { ModalColorType } from './lib/types/modalTypes';

interface ModalExampleProps {
  type: string;
  modalPosition: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
  modalType?: 'default' | 'alert' | 'confirm' | 'prompt';
  closeType: 'top' | 'bottom' | 'none';
  colorType?: ModalColorType;
  titleText: string;
  onClose?: () => void;
  children: ReactNode;
}

function ModalExample({
  type,
  modalPosition,
  modalSize,
  modalType = 'default',
  closeType,
  colorType,
  titleText,
  onClose,
  children,
}: ModalExampleProps) {
  return (
    <ModalProvider onClose={onClose}>
      <ModalOpenButton type={type} />
      <Modal
        modalPosition={modalPosition}
        modalSize={modalSize}
        modalType={modalType}
        closeType={closeType}
        colorType={colorType}
        titleText={titleText}
      >
        {children}
      </Modal>
    </ModalProvider>
  );
}

export default ModalExample;
