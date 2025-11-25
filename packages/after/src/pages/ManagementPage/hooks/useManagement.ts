import { useState, useEffect } from "react";
import { useDisclosure } from "@/hooks";
import { userService } from "@/services/userService";
import { postService } from "@/services/postService";
import type { User } from "@/services/userService";
import type { Post } from "@/services/postService";
import type { EntityType, Entity, Stat } from "../types";

export const useManagement = () => {
  const [entityType, setEntityType] = useState<EntityType>("post");
  const [data, setData] = useState<Entity[]>([]);
  const [selectedItem, setSelectedItem] = useState<Entity | null>(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState<"success" | "destructive">("success");
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

  const getStats = (): Stat[] => {
    if (entityType === "user") {
      const users = data as User[];
      return [
        {
          label: "전체",
          value: users.length,
          color: "blue" as const,
          textColor: "text-blue-600",
        },
        {
          label: "활성",
          value: users.filter((u) => u.status === "active").length,
          color: "green" as const,
          textColor: "text-green-600",
        },
        {
          label: "비활성",
          value: users.filter((u) => u.status === "inactive").length,
          color: "orange" as const,
          textColor: "text-orange-600",
        },
        {
          label: "정지",
          value: users.filter((u) => u.status === "suspended").length,
          color: "red" as const,
          textColor: "text-red-600",
        },
        {
          label: "관리자",
          value: users.filter((u) => u.role === "admin").length,
          color: "gray" as const,
          textColor: "text-gray-700",
        },
      ];
    }
    const posts = data as Post[];
    return [
      {
        label: "전체",
        value: posts.length,
        color: "blue" as const,
        textColor: "text-blue-600",
      },
      {
        label: "게시됨",
        value: posts.filter((p) => p.status === "published").length,
        color: "green" as const,
        textColor: "text-green-600",
      },
      {
        label: "임시저장",
        value: posts.filter((p) => p.status === "draft").length,
        color: "orange" as const,
        textColor: "text-orange-600",
      },
      {
        label: "보관됨",
        value: posts.filter((p) => p.status === "archived").length,
        color: "red" as const,
        textColor: "text-red-600",
      },
      {
        label: "총 조회수",
        value: posts.reduce((sum, p) => sum + p.views, 0),
        color: "gray" as const,
        textColor: "text-gray-700",
      },
    ];
  };

  return {
    // State
    entityType,
    setEntityType,
    data,
    selectedItem,
    formData,
    setFormData,
    alertMessage,
    alertVariant,
    showAlert,
    setShowAlert,

    // Modals
    createModal,
    editModal,

    // Handlers
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
    handleStatusAction,

    // Utils
    getStats,
  };
};
