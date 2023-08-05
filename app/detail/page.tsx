"use client"
import React, { useEffect } from 'react'
import { GamesProps } from '@/utils/types'
import { usePathname, useSearchParams } from 'next/navigation'
import gamesJson from '@/json/gamesJson.json'
import DetailGames from '@/pages/detailGames'

function Detail() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    useEffect(() => {
        const url = `${pathname}?${searchParams}`
    }, [pathname, searchParams])
    const id = searchParams!.get('id')
  return (
    <>
        {gamesJson.map((item:GamesProps) => (
            (Number(id) === item.id) ? 
                <DetailGames key={item.id} props={item} />
            : ""
        ))}
    </>
  )
}

export default Detail