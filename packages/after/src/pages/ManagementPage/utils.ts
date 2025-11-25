import type { BadgeVariant } from "./types";

// Status/Role을 Badge variant로 매핑하는 헬퍼 함수
export const getStatusVariant = (status: string): BadgeVariant => {
  const map: Record<string, BadgeVariant> = {
    active: "success",
    published: "success",
    inactive: "warning",
    draft: "warning",
    suspended: "destructive",
    archived: "secondary",
  };
  return map[status] || "secondary";
};

export const getRoleVariant = (role: string): BadgeVariant => {
  const map: Record<string, BadgeVariant> = {
    admin: "destructive",
    moderator: "warning",
    user: "default",
    guest: "secondary",
  };
  return map[role] || "default";
};

export const getStatusLabel = (status: string): string => {
  const map: Record<string, string> = {
    active: "활성",
    inactive: "비활성",
    suspended: "정지",
    published: "게시됨",
    draft: "임시저장",
    archived: "보관됨",
  };
  return map[status] || status;
};

export const getRoleLabel = (role: string): string => {
  const map: Record<string, string> = {
    admin: "관리자",
    moderator: "운영자",
    user: "사용자",
    guest: "게스트",
  };
  return map[role] || role;
};
