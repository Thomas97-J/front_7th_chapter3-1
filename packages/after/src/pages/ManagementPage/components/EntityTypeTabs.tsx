import { Button } from "@/components/ui";
import type { EntityType } from "../types";

interface EntityTypeTabsProps {
  entityType: EntityType;
  onEntityTypeChange: (type: EntityType) => void;
}

export const EntityTypeTabs = ({
  entityType,
  onEntityTypeChange,
}: EntityTypeTabsProps) => {
  return (
    <div className="flex gap-2 border-b pb-4">
      <Button
        variant={entityType === "post" ? "default" : "outline"}
        onClick={() => onEntityTypeChange("post")}
      >
        게시글
      </Button>
      <Button
        variant={entityType === "user" ? "default" : "outline"}
        onClick={() => onEntityTypeChange("user")}
      >
        사용자
      </Button>
    </div>
  );
};
