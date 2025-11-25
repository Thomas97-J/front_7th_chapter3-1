import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./modal";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

const meta = {
  title: "UI/Organisms/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This is the modal content.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Small Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>Small Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This is a small modal.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>Large Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              This is a large modal with more content space. You can fit more
              complex forms or information here.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const CreateUserForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>새 사용자 만들기</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>새 사용자 만들기</ModalTitle>
          </ModalHeader>
          <ModalBody className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">사용자명</Label>
              <Input
                id="username"
                name="username"
                placeholder="사용자명을 입력하세요"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">역할</Label>
                <select
                  id="role"
                  name="role"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs"
                >
                  <option value="user">사용자</option>
                  <option value="moderator">운영자</option>
                  <option value="admin">관리자</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">상태</Label>
                <select
                  id="status"
                  name="status"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs"
                >
                  <option value="active">활성</option>
                  <option value="inactive">비활성</option>
                  <option value="suspended">정지</option>
                </select>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button onClick={() => setOpen(false)}>생성</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const CreatePostForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>새 게시글 만들기</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>새 게시글 만들기</ModalTitle>
          </ModalHeader>
          <ModalBody className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">제목</Label>
              <Input id="title" placeholder="게시글 제목을 입력하세요" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">작성자</Label>
                <Input id="author" placeholder="작성자명" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <select
                  id="category"
                  name="category"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs"
                >
                  <option value="" disabled>
                    선택하세요
                  </option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="accessibility">Accessibility</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">내용</Label>
              <Textarea
                id="content"
                placeholder="게시글 내용을 입력하세요"
                rows={6}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button onClick={() => setOpen(false)}>생성</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <ModalHeader onClose={() => setOpen(false)}>
            <ModalTitle>Are you sure?</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              This action cannot be undone. This will permanently delete the
              item.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeOnOverlayClick={false}
        >
          <ModalHeader>
            <ModalTitle>Required Action</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>You must choose an option to continue.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Option 1</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Option 2
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const ContentOnly: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <ModalBody className="text-center py-8">
            <p className="text-lg font-semibold mb-4">Success!</p>
            <p className="text-muted-foreground mb-6">
              Your changes have been saved.
            </p>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </ModalBody>
        </Modal>
      </>
    );
  },
};
