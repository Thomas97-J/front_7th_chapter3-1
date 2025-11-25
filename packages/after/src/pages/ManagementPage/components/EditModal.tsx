import {
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Alert,
  AlertDescription,
} from "@/components/ui";
import type { Post } from "@/services/postService";
import type { EntityType, Entity } from "../types";
import { UserFormFields } from "./UserFormFields";
import { PostFormFields } from "./PostFormFields";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  entityType: EntityType;
  selectedItem: Entity | null;
  formData: Record<string, string>;
  onFormDataChange: (data: Record<string, string>) => void;
  onUpdate: () => void;
}

export const EditModal = ({
  isOpen,
  onClose,
  entityType,
  selectedItem,
  formData,
  onFormDataChange,
  onUpdate,
}: EditModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalHeader onClose={onClose}>
        <ModalTitle>
          {entityType === "user" ? "사용자" : "게시글"} 수정
        </ModalTitle>
      </ModalHeader>
      <ModalBody className="space-y-4">
        {selectedItem && (
          <Alert variant="info">
            <AlertDescription>
              ID: {selectedItem.id} | 생성일: {selectedItem.createdAt}
              {entityType === "post" &&
                ` | 조회수: ${(selectedItem as Post).views}`}
            </AlertDescription>
          </Alert>
        )}

        {entityType === "user" ? (
          <UserFormFields
            formData={formData}
            onChange={onFormDataChange}
            idPrefix="edit-"
          />
        ) : (
          <PostFormFields
            formData={formData}
            onChange={onFormDataChange}
            idPrefix="edit-"
          />
        )}
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onUpdate}>수정 완료</Button>
      </ModalFooter>
    </Modal>
  );
};
