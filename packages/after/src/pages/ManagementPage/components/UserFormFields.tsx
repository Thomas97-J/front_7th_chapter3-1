import { Input, Label, NativeSelect } from "@/components/ui";

interface UserFormFieldsProps {
  formData: Record<string, string>;
  onChange: (data: Record<string, string>) => void;
  idPrefix?: string;
}

export const UserFormFields = ({
  formData,
  onChange,
  idPrefix = "",
}: UserFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}username`}>사용자명</Label>
        <Input
          id={`${idPrefix}username`}
          name="username"
          value={formData.username || ""}
          onChange={(e) => onChange({ ...formData, username: e.target.value })}
          placeholder="사용자명을 입력하세요"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}email`}>이메일</Label>
        <Input
          id={`${idPrefix}email`}
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={(e) => onChange({ ...formData, email: e.target.value })}
          placeholder="이메일을 입력하세요"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}role`}>역할</Label>
          <NativeSelect
            id={`${idPrefix}role`}
            name="role"
            value={formData.role || "user"}
            onChange={(e) => onChange({ ...formData, role: e.target.value })}
          >
            <option value="user">사용자</option>
            <option value="moderator">운영자</option>
            <option value="admin">관리자</option>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}status`}>상태</Label>
          <NativeSelect
            id={`${idPrefix}status`}
            name="status"
            value={formData.status || "active"}
            onChange={(e) => onChange({ ...formData, status: e.target.value })}
          >
            <option value="active">활성</option>
            <option value="inactive">비활성</option>
            <option value="suspended">정지</option>
          </NativeSelect>
        </div>
      </div>
    </>
  );
};
