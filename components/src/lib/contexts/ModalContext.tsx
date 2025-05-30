import { createContext, useState, useContext, ReactNode } from 'react';
import { ModalProps } from '../types/modalTypes';

interface ModalContextType {
  isModalOpened: boolean;
  openModalHandler: () => void;
  closeModalHandler: () => void;
  modalType: ModalProps['modalType'];
  titleText: string;
  closeType: ModalProps['closeType'];
  onClose?: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
  modalType: ModalProps['modalType'];
  titleText?: string;
  closeType: ModalProps['closeType'];
  onClose?: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({
  children,
  modalType,
  titleText = '',
  closeType,
  onClose,
}: ModalProviderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModalHandler = () => setIsModalOpened(true);
  const closeModalHandler = () => setIsModalOpened(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpened,
        openModalHandler,
        closeModalHandler,
        modalType,
        titleText,
        closeType,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal은 ModalProvider 내부에서 사용해야 합니다');
  }

  return context;
};
