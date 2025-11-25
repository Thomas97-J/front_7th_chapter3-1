import type { Meta, StoryObj } from "@storybook/react";
import { NativeSelect } from "./native-select";
import { Label } from "./label";

const meta = {
  title: "UI/Atoms/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </NativeSelect>
  ),
};

export const WithValue: Story = {
  render: () => (
    <NativeSelect defaultValue="option2">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </NativeSelect>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label htmlFor="country">Country</Label>
      <NativeSelect id="country">
        <option value="">Select a country</option>
        <option value="kr">South Korea</option>
        <option value="us">United States</option>
        <option value="jp">Japan</option>
        <option value="cn">China</option>
      </NativeSelect>
    </div>
  ),
};

export const UserRole: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      <Label htmlFor="role">Role</Label>
      <NativeSelect id="role" name="role">
        <option value="user">사용자</option>
        <option value="moderator">운영자</option>
        <option value="admin">관리자</option>
      </NativeSelect>
    </div>
  ),
};

export const UserStatus: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      <Label htmlFor="status">Status</Label>
      <NativeSelect id="status" name="status">
        <option value="active">활성</option>
        <option value="inactive">비활성</option>
        <option value="suspended">정지</option>
      </NativeSelect>
    </div>
  ),
};

export const PostCategory: Story = {
  render: () => (
    <div className="w-[250px] space-y-2">
      <Label htmlFor="category">Category</Label>
      <NativeSelect id="category" name="category">
        <option value="" disabled>
          선택하세요
        </option>
        <option value="development">Development</option>
        <option value="design">Design</option>
        <option value="accessibility">Accessibility</option>
      </NativeSelect>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="role-form">역할</Label>
          <NativeSelect id="role-form">
            <option value="user">사용자</option>
            <option value="moderator">운영자</option>
            <option value="admin">관리자</option>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status-form">상태</Label>
          <NativeSelect id="status-form">
            <option value="active">활성</option>
            <option value="inactive">비활성</option>
            <option value="suspended">정지</option>
          </NativeSelect>
        </div>
      </div>
    </div>
  ),
};
