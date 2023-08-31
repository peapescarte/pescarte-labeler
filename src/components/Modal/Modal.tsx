import { useEffect } from 'react';
import { ReactPortal } from '../ReactPortal';
import { ModalContainer, ModalOverlay } from './styles';

type ModalProps = {
  children: React.ReactNode;
  id: string;
  isOpen: boolean;
  onClickOutSide?: () => void;
};

export const Modal = ({ id, children, isOpen, onClickOutSide }: ModalProps) => {
  useEffect(() => {
    let disabledScroll = false;
    if (isOpen) {
      disabledScroll = true;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (disabledScroll) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal containerId={id}>
      <ModalOverlay onClick={() => onClickOutSide && onClickOutSide()}>
        <ModalContainer>
          <div style={{ cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </ModalContainer>
      </ModalOverlay>
    </ReactPortal>
  );
};
