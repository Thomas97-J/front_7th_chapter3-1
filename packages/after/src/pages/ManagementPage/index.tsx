import { Button, Card, Alert, AlertDescription } from "@/components/ui";
import { useManagement } from "./hooks/useManagement";
import { ManagementHeader } from "./components/ManagementHeader";
import { EntityTypeTabs } from "./components/EntityTypeTabs";
import { StatsGrid } from "./components/StatsGrid";
import { ManagementTable } from "./components/ManagementTable";
import { CreateModal } from "./components/CreateModal";
import { EditModal } from "./components/EditModal";

export const ManagementPage = () => {
  const {
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
    createModal,
    editModal,
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
    handleStatusAction,
    getStats,
  } = useManagement();

  const stats = getStats();

  return (
    <div className="min-h-screen flex justify-center items-center w-full bg-muted py-8">
      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ManagementHeader />

        <Card className="p-10 space-y-1">
          <EntityTypeTabs
            entityType={entityType}
            onEntityTypeChange={setEntityType}
          />

          <div className="flex justify-end">
            <Button onClick={createModal.onOpen}>새로 만들기</Button>
          </div>

          {showAlert && (
            <Alert
              variant={alertVariant}
              dismissible
              onDismiss={() => setShowAlert(false)}
            >
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}

          <StatsGrid stats={stats} />

          <ManagementTable
            entityType={entityType}
            data={data}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusAction={handleStatusAction}
          />
        </Card>

        <CreateModal
          isOpen={createModal.isOpen}
          onClose={createModal.onClose}
          entityType={entityType}
          formData={formData}
          onFormDataChange={setFormData}
          onCreate={handleCreate}
        />

        <EditModal
          isOpen={editModal.isOpen}
          onClose={editModal.onClose}
          entityType={entityType}
          selectedItem={selectedItem}
          formData={formData}
          onFormDataChange={setFormData}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};
