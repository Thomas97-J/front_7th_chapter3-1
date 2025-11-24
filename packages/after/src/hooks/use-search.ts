import { useState, useMemo, useCallback } from "react"

interface UseSearchOptions<T> {
  data: T[]
  searchKeys?: (keyof T)[]
  debounceMs?: number
}

/**
 * 데이터 검색 로직을 관리하는 훅
 */
export function useSearch<T extends Record<string, unknown>>({
  data,
  searchKeys,
}: UseSearchOptions<T>) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data

    const lowerSearchTerm = searchTerm.toLowerCase()

    return data.filter((item) => {
      const keysToSearch = searchKeys || (Object.keys(item) as (keyof T)[])

      return keysToSearch.some((key) => {
        const value = item[key]
        if (value === null || value === undefined) return false
        return String(value).toLowerCase().includes(lowerSearchTerm)
      })
    })
  }, [data, searchTerm, searchKeys])

  const clearSearch = useCallback(() => setSearchTerm(""), [])

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
    clearSearch,
    hasResults: filteredData.length > 0,
    resultCount: filteredData.length,
  }
}
