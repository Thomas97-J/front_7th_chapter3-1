import { useState, useMemo, useCallback } from "react"

interface UsePaginationOptions {
  totalItems: number
  pageSize?: number
  initialPage?: number
}

/**
 * 페이지네이션 로직을 관리하는 훅
 */
export function usePagination({
  totalItems,
  pageSize = 10,
  initialPage = 1,
}: UsePaginationOptions) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const totalPages = useMemo(
    () => Math.ceil(totalItems / pageSize),
    [totalItems, pageSize]
  )

  const canGoNext = currentPage < totalPages
  const canGoPrev = currentPage > 1

  const goToPage = useCallback(
    (page: number) => {
      const clampedPage = Math.max(1, Math.min(page, totalPages))
      setCurrentPage(clampedPage)
    },
    [totalPages]
  )

  const goToNextPage = useCallback(() => {
    if (canGoNext) {
      setCurrentPage((prev) => prev + 1)
    }
  }, [canGoNext])

  const goToPrevPage = useCallback(() => {
    if (canGoPrev) {
      setCurrentPage((prev) => prev - 1)
    }
  }, [canGoPrev])

  const goToFirstPage = useCallback(() => setCurrentPage(1), [])
  const goToLastPage = useCallback(() => setCurrentPage(totalPages), [totalPages])

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalItems)

  return {
    currentPage,
    totalPages,
    pageSize,
    startIndex,
    endIndex,
    canGoNext,
    canGoPrev,
    goToPage,
    goToNextPage,
    goToPrevPage,
    goToFirstPage,
    goToLastPage,
  }
}
