import { useState, useEffect } from "react";
import {
  Button,
  Badge,
  Input,
  Textarea,
  Label,
  Alert,
  AlertDescription,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Card,
  CardContent,
  NativeSelect,
} from "@/components/ui";
import { useDisclosure } from "@/hooks";
import { userService } from "@/services/userService";
import { postService } from "@/services/postService";
import type { User } from "@/services/userService";
import type { Post } from "@/services/postService";

type EntityType = "user" | "post";
type Entity = User | Post;

// Status/Role을 Badge variant로 매핑하는 헬퍼 함수
const getStatusVariant = (status: string) => {
  const map: Record<
    string,
    "success" | "warning" | "destructive" | "secondary" | "info"
  > = {
    active: "success",
    published: "success",
    inactive: "warning",
    draft: "warning",
    suspended: "destructive",
    archived: "secondary",
  };
  return map[status] || "secondary";
};

const getRoleVariant = (role: string) => {
  const map: Record<
    string,
    "destructive" | "warning" | "default" | "secondary"
  > = {
    admin: "destructive",
    moderator: "warning",
    user: "default",
    guest: "secondary",
  };
  return map[role] || "default";
};

const getStatusLabel = (status: string) => {
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

const getRoleLabel = (role: string) => {
  const map: Record<string, string> = {
    admin: "관리자",
    moderator: "운영자",
    user: "사용자",
    guest: "게스트",
  };
  return map[role] || role;
};

export const ManagementPage = () => {
  const [entityType, setEntityType] = useState<EntityType>("post");
  const [data, setData] = useState<Entity[]>([]);
  const [selectedItem, setSelectedItem] = useState<Entity | null>(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState<"success" | "destructive">(
    "success"
  );
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const createModal = useDisclosure();
  const editModal = useDisclosure();

  useEffect(() => {
    loadData();
    setFormData({});
    createModal.onClose();
    editModal.onClose();
    setSelectedItem(null);
  }, [entityType]);

  const loadData = async () => {
    try {
      const result =
        entityType === "user"
          ? await userService.getAll()
          : await postService.getAll();
      setData(result);
    } catch {
      showAlertMessage("데이터를 불러오는데 실패했습니다", "destructive");
    }
  };

  const showAlertMessage = (
    message: string,
    variant: "success" | "destructive"
  ) => {
    setAlertMessage(message);
    setAlertVariant(variant);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleCreate = async () => {
    try {
      if (entityType === "user") {
        await userService.create({
          username: formData.username,
          email: formData.email,
          role: (formData.role || "user") as "user" | "admin" | "moderator",
          status: (formData.status || "active") as
            | "active"
            | "inactive"
            | "suspended",
        });
      } else {
        await postService.create({
          title: formData.title,
          content: formData.content || "",
          author: formData.author,
          category: formData.category,
          status: (formData.status || "draft") as
            | "published"
            | "draft"
            | "archived",
        });
      }
      await loadData();
      createModal.onClose();
      setFormData({});
      showAlertMessage(
        `${entityType === "user" ? "사용자" : "게시글"}가 생성되었습니다`,
        "success"
      );
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "생성에 실패했습니다";
      showAlertMessage(message, "destructive");
    }
  };

  const handleEdit = (item: Entity) => {
    setSelectedItem(item);
    if (entityType === "user") {
      const user = item as User;
      setFormData({
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    } else {
      const post = item as Post;
      setFormData({
        title: post.title,
        content: post.content,
        author: post.author,
        category: post.category,
        status: post.status,
      });
    }
    editModal.onOpen();
  };

  const handleUpdate = async () => {
    if (!selectedItem) return;
    try {
      if (entityType === "user") {
        await userService.update(selectedItem.id, formData);
      } else {
        await postService.update(selectedItem.id, formData);
      }
      await loadData();
      editModal.onClose();
      setFormData({});
      setSelectedItem(null);
      showAlertMessage(
        `${entityType === "user" ? "사용자" : "게시글"}가 수정되었습니다`,
        "success"
      );
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "수정에 실패했습니다";
      showAlertMessage(message, "destructive");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      if (entityType === "user") {
        await userService.delete(id);
      } else {
        await postService.delete(id);
      }
      await loadData();
      showAlertMessage("삭제되었습니다", "success");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "삭제에 실패했습니다";
      showAlertMessage(message, "destructive");
    }
  };

  const handleStatusAction = async (
    id: number,
    action: "publish" | "archive" | "restore"
  ) => {
    if (entityType !== "post") return;
    try {
      if (action === "publish") await postService.publish(id);
      else if (action === "archive") await postService.archive(id);
      else if (action === "restore") await postService.restore(id);

      await loadData();
      const actionLabels = {
        publish: "게시",
        archive: "보관",
        restore: "복원",
      };
      showAlertMessage(`${actionLabels[action]}되었습니다`, "success");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "작업에 실패했습니다";
      showAlertMessage(message, "destructive");
    }
  };

  const getStats = () => {
    if (entityType === "user") {
      const users = data as User[];
      return [
        { label: "전체", value: users.length, variant: "info" as const },
        {
          label: "활성",
          value: users.filter((u) => u.status === "active").length,
          variant: "success" as const,
        },
        {
          label: "비활성",
          value: users.filter((u) => u.status === "inactive").length,
          variant: "warning" as const,
        },
        {
          label: "정지",
          value: users.filter((u) => u.status === "suspended").length,
          variant: "destructive" as const,
        },
        {
          label: "관리자",
          value: users.filter((u) => u.role === "admin").length,
          variant: "default" as const,
        },
      ];
    }
    const posts = data as Post[];
    return [
      { label: "전체", value: posts.length, variant: "info" as const },
      {
        label: "게시됨",
        value: posts.filter((p) => p.status === "published").length,
        variant: "success" as const,
      },
      {
        label: "임시저장",
        value: posts.filter((p) => p.status === "draft").length,
        variant: "warning" as const,
      },
      {
        label: "보관됨",
        value: posts.filter((p) => p.status === "archived").length,
        variant: "secondary" as const,
      },
      {
        label: "총 조회수",
        value: posts.reduce((sum, p) => sum + p.views, 0),
        variant: "default" as const,
      },
    ];
  };

  const stats = getStats();

  return (
    <div className="container py-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">관리 시스템</h1>
        <p className="text-muted-foreground">사용자와 게시글을 관리하세요</p>
      </div>

      {/* Main Content */}
      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Tabs */}
          <div className="flex gap-2 border-b pb-4">
            <Button
              variant={entityType === "post" ? "default" : "outline"}
              onClick={() => setEntityType("post")}
            >
              게시글
            </Button>
            <Button
              variant={entityType === "user" ? "default" : "outline"}
              onClick={() => setEntityType("user")}
            >
              사용자
            </Button>
          </div>

          {/* Actions */}
          <div className="flex justify-end">
            <Button onClick={createModal.onOpen}>새로 만들기</Button>
          </div>

          {/* Alert */}
          {showAlert && (
            <Alert
              variant={alertVariant}
              dismissible
              onDismiss={() => setShowAlert(false)}
            >
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg border bg-card text-card-foreground"
              >
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">
                  {stat.value.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
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
                          <Badge
                            variant={getStatusVariant((item as User).status)}
                          >
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
                          <Badge variant="outline">
                            {(item as Post).category}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={getStatusVariant((item as Post).status)}
                          >
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
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(item)}
                        >
                          수정
                        </Button>
                        {entityType === "post" && (
                          <>
                            {(item as Post).status === "draft" && (
                              <Button
                                size="sm"
                                variant="default"
                                onClick={() =>
                                  handleStatusAction(item.id, "publish")
                                }
                              >
                                게시
                              </Button>
                            )}
                            {(item as Post).status === "published" && (
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={() =>
                                  handleStatusAction(item.id, "archive")
                                }
                              >
                                보관
                              </Button>
                            )}
                            {(item as Post).status === "archived" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  handleStatusAction(item.id, "restore")
                                }
                              >
                                복원
                              </Button>
                            )}
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(item.id)}
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
        </CardContent>
      </Card>

      {/* Create Modal */}
      <Modal open={createModal.isOpen} onClose={createModal.onClose}>
        <ModalHeader onClose={createModal.onClose}>
          <ModalTitle>
            새 {entityType === "user" ? "사용자" : "게시글"} 만들기
          </ModalTitle>
        </ModalHeader>
        <ModalBody className="space-y-4">
          {entityType === "user" ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="username">사용자명</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="사용자명을 입력하세요"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">역할</Label>
                  <NativeSelect
                    id="role"
                    name="role"
                    value={formData.role || "user"}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="user">사용자</option>
                    <option value="moderator">운영자</option>
                    <option value="admin">관리자</option>
                  </NativeSelect>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">상태</Label>
                  <NativeSelect
                    id="status"
                    name="status"
                    value={formData.status || "active"}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="active">활성</option>
                    <option value="inactive">비활성</option>
                    <option value="suspended">정지</option>
                  </NativeSelect>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="title">제목</Label>
                <Input
                  id="title"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="게시글 제목을 입력하세요"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">작성자</Label>
                  <Input
                    id="author"
                    value={formData.author || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    placeholder="작성자명"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">카테고리</Label>
                  <NativeSelect
                    id="category"
                    name="category"
                    value={formData.category || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="" disabled>선택하세요</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="accessibility">Accessibility</option>
                  </NativeSelect>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">내용</Label>
                <Textarea
                  id="content"
                  value={formData.content || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="게시글 내용을 입력하세요"
                  rows={6}
                />
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={createModal.onClose}>
            취소
          </Button>
          <Button onClick={handleCreate}>생성</Button>
        </ModalFooter>
      </Modal>

      {/* Edit Modal */}
      <Modal open={editModal.isOpen} onClose={editModal.onClose}>
        <ModalHeader onClose={editModal.onClose}>
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
            <>
              <div className="space-y-2">
                <Label htmlFor="edit-username">사용자명</Label>
                <Input
                  id="edit-username"
                  name="username"
                  value={formData.username || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="사용자명을 입력하세요"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email">이메일</Label>
                <Input
                  id="edit-email"
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-role">역할</Label>
                  <NativeSelect
                    id="edit-role"
                    name="role"
                    value={formData.role || "user"}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="user">사용자</option>
                    <option value="moderator">운영자</option>
                    <option value="admin">관리자</option>
                  </NativeSelect>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-status">상태</Label>
                  <NativeSelect
                    id="edit-status"
                    name="status"
                    value={formData.status || "active"}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="active">활성</option>
                    <option value="inactive">비활성</option>
                    <option value="suspended">정지</option>
                  </NativeSelect>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="edit-title">제목</Label>
                <Input
                  id="edit-title"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="게시글 제목을 입력하세요"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-author">작성자</Label>
                  <Input
                    id="edit-author"
                    value={formData.author || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    placeholder="작성자명"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-category">카테고리</Label>
                  <NativeSelect
                    id="edit-category"
                    name="category"
                    value={formData.category || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="" disabled>선택하세요</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="accessibility">Accessibility</option>
                  </NativeSelect>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-content">내용</Label>
                <Textarea
                  id="edit-content"
                  value={formData.content || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="게시글 내용을 입력하세요"
                  rows={6}
                />
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={editModal.onClose}>
            취소
          </Button>
          <Button onClick={handleUpdate}>수정 완료</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
