import { ReactNode } from 'react';

export type ModalPosition = 'center' | 'bottom';
export type ModalSize = 'small' | 'medium' | 'large';
export type ModalType = 'default' | 'alert' | 'confirm' | 'prompt';
export type ModalCloseType = 'top' | 'bottom' | 'none';
export type ModalColorType = 'black' | 'white';

export interface ModalConfig {
  modalType: ModalType;
  modalPosition: ModalPosition;
  modalSize?: ModalSize;
  titleText?: string;
  closeType: ModalCloseType;
  colorType?: ModalColorType;
  children?: ReactNode;
  onClose?: () => void;
}

export interface ModalChildrenProps {
  children: ReactNode;
}

export interface ModalHeaderProps {
  titleText: string;
  hasCloseButton: boolean;
  onClose?: () => void;
}

export interface ModalPositionProps {
  modalPosition: ModalPosition;
}

export interface ModalPositionAndSizeProps {
  modalPosition: ModalPosition;
  modalSize?: ModalSize;
}

export interface ModalColorProps {
  colorType?: ModalColorType;
}
