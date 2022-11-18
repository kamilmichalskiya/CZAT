import React, { useRef, useEffect, useCallback } from 'react';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from './Modal-styled';

interface ModalProps {
  showModal: boolean;
  setShowModal: Function;
  children: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  });

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <ModalContent>{children}</ModalContent>
            <CloseModalButton aria-label="close modal" onClick={() => setShowModal((prev: boolean) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
