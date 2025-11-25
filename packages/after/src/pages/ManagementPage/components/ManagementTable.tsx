import {
  Badge,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui";
import type { User } from "@/services/userService";
import type { Post } from "@/services/postService";
import type { EntityType, Entity } from "../types";
import { getStatusVariant, getRoleVariant, getStatusLabel, getRoleLabel } from "../utils";

interface ManagementTableProps {
  entityType: EntityType;
  data: Entity[];
  onEdit: (item: Entity) => void;
  onDelete: (id: number) => void;
  onStatusAction: (id: number, action: "publish" | "archive" | "restore") => void;
}

export const ManagementTable = ({
  entityType,
  data,
  onEdit,
  onDelete,
  onStatusAction,
}: ManagementTableProps) => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">ID</TableHead>
            {entityType === "user" ? (
              <>
                <TableHead>사용자명</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead className="w-[100px]">역할</TableHead>
                <TableHead className="w-[100px]">상태</TableHead>
                <TableHead className="w-[120px]">생성일</TableHead>
              </>
            ) : (
              <>
                <TableHead>제목</TableHead>
                <TableHead className="w-[100px]">작성자</TableHead>
                <TableHead className="w-[120px]">카테고리</TableHead>
                <TableHead className="w-[100px]">상태</TableHead>
                <TableHead className="w-20">조회수</TableHead>
              </>
            )}
            <TableHead className="w-[200px]">관리</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              {entityType === "user" ? (
                <>
                  <TableCell>{(item as User).username}</TableCell>
                  <TableCell>{(item as User).email}</TableCell>
                  <TableCell>
                    <Badge variant={getRoleVariant((item as User).role)}>
                      {getRoleLabel((item as User).role)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant((item as User).status)}>
                      {getStatusLabel((item as User).status)}
                    </Badge>
                  </TableCell>
                  <TableCell>{(item as User).createdAt}</TableCell>
                </>
              ) : (
                <>
                  <TableCell>{(item as Post).title}</TableCell>
                  <TableCell>{(item as Post).author}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{(item as Post).category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant((item as Post).status)}>
                      {getStatusLabel((item as Post).status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {(item as Post).views?.toLocaleString()}
                  </TableCell>
                </>
              )}
              <TableCell>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" variant="outline" onClick={() => onEdit(item)}>
                    수정
                  </Button>
                  {entityType === "post" && (
                    <>
                      {(item as Post).status === "draft" && (
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => onStatusAction(item.id, "publish")}
                        >
                          게시
                        </Button>
                      )}
                      {(item as Post).status === "published" && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => onStatusAction(item.id, "archive")}
                        >
                          보관
                        </Button>
                      )}
                      {(item as Post).status === "archived" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onStatusAction(item.id, "restore")}
                        >
                          복원
                        </Button>
                      )}
                    </>
                  )}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(item.id)}
                  >
                    삭제
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
