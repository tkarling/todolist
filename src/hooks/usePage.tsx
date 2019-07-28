import React, { useState } from 'react'

const usePage = (
  {
    pages,
    firstPage = 0
  }: {
    pages: () => any[]
    firstPage?: number
  } = {
    pages: () => [<div />],
    firstPage: 0
  }
) => {
  const [currentPageIndex, setCurrenPageIndex] = useState(firstPage)
  const currentPage = () => pages()[currentPageIndex]
  const nextPage = () => {
    setCurrenPageIndex(
      currentPageIndex === pages().length - 1 ? 0 : currentPageIndex + 1
    )
  }
  const prevPage = () => {
    setCurrenPageIndex(
      currentPageIndex === 0 ? pages().length - 1 : currentPageIndex - 1
    )
  }
  return {
    currentPage,
    nextPage,
    prevPage
  }
}
export default usePage
