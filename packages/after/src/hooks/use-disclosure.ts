import { useState, useCallback } from "react"

/**
 * Modal, Drawer 등의 open/close 상태를 관리하는 훅
 */
export function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  }
}
