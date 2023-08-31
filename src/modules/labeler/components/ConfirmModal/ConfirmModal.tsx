import { XSquare } from 'lucide-react';
import { Modal } from '../../../../components/Modal';
import {
  ConfirmModalBody,
  ConfirmModalButtons,
  ConfirmModalCancelButton,
  ConfirmModalContainer,
  ConfirmModalContinueButton,
  ConfirmModalFooter,
  ConfirmModalHeader,
  ConfirmModalHeaderTitle,
  ConfirmModalText,
  ModalCloseButton,
} from './styles';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  text: string;
  cancelButtonText: string;
  confirmButtonText: string;
}

export function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
  title,
  text,
  cancelButtonText,
  confirmButtonText,
}: ConfirmModalProps) {
  return (
    <Modal id="react-confirm-modal" isOpen={isOpen}>
      <ConfirmModalContainer>
        <ConfirmModalHeader>
          <ConfirmModalHeaderTitle>{title}</ConfirmModalHeaderTitle>
          <ModalCloseButton onClick={onCancel}>
            <XSquare />
          </ModalCloseButton>
        </ConfirmModalHeader>
        <ConfirmModalBody>
          <ConfirmModalText>{text}</ConfirmModalText>
        </ConfirmModalBody>
        <ConfirmModalFooter>
          <ConfirmModalButtons>
            <ConfirmModalContinueButton variant="secondary" onClick={onConfirm}>
              {confirmButtonText}
            </ConfirmModalContinueButton>
            <ConfirmModalCancelButton variant="primary" onClick={onCancel}>
              {cancelButtonText}
            </ConfirmModalCancelButton>
          </ConfirmModalButtons>
        </ConfirmModalFooter>
      </ConfirmModalContainer>
    </Modal>
  );
}
