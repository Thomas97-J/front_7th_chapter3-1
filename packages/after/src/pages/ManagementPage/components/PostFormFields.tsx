import { Input, Label, Textarea, NativeSelect } from "@/components/ui";

interface PostFormFieldsProps {
  formData: Record<string, string>;
  onChange: (data: Record<string, string>) => void;
  idPrefix?: string;
}

export const PostFormFields = ({
  formData,
  onChange,
  idPrefix = "",
}: PostFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}title`}>제목</Label>
        <Input
          id={`${idPrefix}title`}
          value={formData.title || ""}
          onChange={(e) => onChange({ ...formData, title: e.target.value })}
          placeholder="게시글 제목을 입력하세요"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}author`}>작성자</Label>
          <Input
            id={`${idPrefix}author`}
            value={formData.author || ""}
            onChange={(e) => onChange({ ...formData, author: e.target.value })}
            placeholder="작성자명"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}category`}>카테고리</Label>
          <NativeSelect
            id={`${idPrefix}category`}
            name="category"
            value={formData.category || ""}
            onChange={(e) => onChange({ ...formData, category: e.target.value })}
          >
            <option value="" disabled>
              선택하세요
            </option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="accessibility">Accessibility</option>
          </NativeSelect>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}content`}>내용</Label>
        <Textarea
          id={`${idPrefix}content`}
          value={formData.content || ""}
          onChange={(e) => onChange({ ...formData, content: e.target.value })}
          placeholder="게시글 내용을 입력하세요"
          rows={6}
        />
      </div>
    </>
  );
};
