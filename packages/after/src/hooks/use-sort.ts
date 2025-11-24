import { useState, useCallback, useMemo } from "react"

type SortDirection = "asc" | "desc"

interface UseSortOptions<T> {
  data: T[]
  initialSortKey?: keyof T
  initialDirection?: SortDirection
}

/**
 * 데이터 정렬 로직을 관리하는 훅
 */
export function useSort<T extends Record<string, unknown>>({
  data,
  initialSortKey,
  initialDirection = "asc",
}: UseSortOptions<T>) {
  const [sortKey, setSortKey] = useState<keyof T | undefined>(initialSortKey)
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialDirection)

  const sortedData = useMemo(() => {
    if (!sortKey) return data

    return [...data].sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]

      if (aVal === bVal) return 0
      if (aVal === null || aVal === undefined) return 1
      if (bVal === null || bVal === undefined) return -1

      let comparison = 0
      if (typeof aVal === "number" && typeof bVal === "number") {
        comparison = aVal - bVal
      } else {
        comparison = String(aVal).localeCompare(String(bVal))
      }

      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [data, sortKey, sortDirection])

  const toggleSort = useCallback((key: keyof T) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortDirection("asc")
    }
  }, [sortKey])

  const resetSort = useCallback(() => {
    setSortKey(undefined)
    setSortDirection("asc")
  }, [])

  return {
    sortedData,
    sortKey,
    sortDirection,
    toggleSort,
    resetSort,
  }
}
