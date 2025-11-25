import {
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "@/components/ui";
import type { EntityType } from "../types";
import { UserFormFields } from "./UserFormFields";
import { PostFormFields } from "./PostFormFields";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  entityType: EntityType;
  formData: Record<string, string>;
  onFormDataChange: (data: Record<string, string>) => void;
  onCreate: () => void;
}

export const CreateModal = ({
  isOpen,
  onClose,
  entityType,
  formData,
  onFormDataChange,
  onCreate,
}: CreateModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader onClose={onClose}>
        <ModalTitle>
          새 {entityType === "user" ? "사용자" : "게시글"} 만들기
        </ModalTitle>
      </ModalHeader>
      <ModalBody className="space-y-4">
        {entityType === "user" ? (
          <UserFormFields formData={formData} onChange={onFormDataChange} />
        ) : (
          <PostFormFields formData={formData} onChange={onFormDataChange} />
        )}
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onCreate}>생성</Button>
      </ModalFooter>
    </Modal>
  );
};
