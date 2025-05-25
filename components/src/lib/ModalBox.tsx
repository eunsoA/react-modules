import ModalHeader from './ModalHeader';
import { useModalContext } from './contexts/ModalContext';
import { ModalBoxContainer, ModalBottomCloseBtn, ModalButtons } from './styles/ModalStyle';
import {
  ModalChildrenProps,
  ModalPositionAndSizeProps,
  ModalType,
  ModalCloseType,
  ModalColorType,
} from './types/modalTypes';

interface ModalBoxProps extends ModalChildrenProps, ModalPositionAndSizeProps {
  modalType: ModalType;
  titleText: string;
  closeType: ModalCloseType;
  colorType?: ModalColorType;
}

const ModalBox = ({
  children,
  modalPosition,
  modalSize,
  closeType,
  modalType,
  titleText,
  colorType,
}: ModalBoxProps) => {
  const { closeModalHandler, onClose } = useModalContext();

  const handleConfirm = () => {
    onClose?.();
    closeModalHandler();
  };

  const handleCancel = () => {
    closeModalHandler();
  };

  const renderModalButtons = () => {
    if (modalType === 'alert') {
      return (
        <ModalButtons>
          <button onClick={handleConfirm}>확인</button>
        </ModalButtons>
      );
    } else if (modalType === 'confirm' || modalType === 'prompt') {
      return (
        <ModalButtons>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleConfirm}>확인</button>
        </ModalButtons>
      );
    } else if (closeType === 'bottom') {
      return (
        <ModalBottomCloseBtn colorType={colorType} onClick={closeModalHandler}>
          닫기
        </ModalBottomCloseBtn>
      );
    }
  };

  return (
    <ModalBoxContainer modalPosition={modalPosition} modalSize={modalSize}>
      <ModalHeader titleText={titleText} closeType={closeType} />
      {children}
      {renderModalButtons()}
    </ModalBoxContainer>
  );
};

export default ModalBox;
