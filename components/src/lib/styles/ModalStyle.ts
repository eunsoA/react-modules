import styled from '@emotion/styled';
import {
  ModalPositionProps,
  ModalPositionAndSizeProps,
  ModalColorProps,
} from '../types/modalTypes';

export const ModalContainer = styled.div<ModalPositionProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${({ modalPosition }) => (modalPosition === 'center' ? 'center' : 'flex-end')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 990;
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1001;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBoxContainer = styled.div<ModalPositionAndSizeProps>`
  width: ${({ modalPosition }) => (modalPosition === 'center' ? '70%' : '100%')};
  max-width: ${({ modalPosition, modalSize }) => {
    if (modalPosition === 'bottom') return 'none';
    if (!modalSize) return '480px';

    switch (modalSize) {
      case 'small':
        return '320px';
      case 'medium':
        return '480px';
      case 'large':
        return '700px';
      default:
        return '480px';
    }
  }};
  height: fit-content;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: ${({ modalPosition }) =>
    modalPosition === 'center' ? '0.5rem' : '0.5rem 0.5rem 0rem 0rem'};
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBottomCloseBtn = styled.div<ModalColorProps>`
  color: ${({ colorType }) => (colorType === 'black' ? '#ffffff' : '#8b95a1')};
  background-color: ${({ colorType }) => (colorType === 'black' ? '#333333' : 'transparent')};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
  cursor: pointer;
  border-radius: ${({ colorType }) => (colorType === 'black' ? '4px' : '0')};
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  button {
    width: 80px;
    height: 36px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s;

    &:first-of-type {
      background-color: #ffffff;
      color: #333333;
      border-radius: 5px;
      border: 1px solid rgba(51, 51, 51, 0.25);

      &:hover {
        background-color: #ffffff;
      }
    }

    &:last-of-type {
      background-color: #333333;
      color: white;

      &:hover {
        background-color: #333333;
      }
    }
  }
`;

export const ModalInput = styled.div`
  margin: 16px 0px;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem;
    background-color: #ffffff;
    border: 1.015px solid #000;
    border-radius: 2px;
    font-size: 1rem;
    color: #000000;

    &:focus {
      outline: none;
    }
  }
`;
