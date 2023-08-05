"use client"
import React, {useState} from 'react'
import CatalogGame from '@/components/catalogGame'
import gamesJson from '@/json/gamesJson.json'
import { GamesProps } from '@/utils/types'

function Games() {
    const [tabState, setTabState] = useState<number>(1)
    const toggleTab = (index: number) => {
        setTabState(index)
    }
  return (
    <>
        <div className="flex items-center justify-center py-4">
            <div className="tabs">
                <a className={tabState === 1 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(1)}>For You</a> 
                <a className={tabState === 2 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(2)}>Strategy</a> 
                <a className={tabState === 3 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(3)}>MMORPG</a>
                <a className={tabState === 4 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(4)}>Simulation</a>
                <a className={tabState === 5 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(5)}>MOBA</a>
                <a className={tabState === 6 ? "tab tab-bordered tab-active" : "tab tab-bordered"} onClick={() => toggleTab(6)}>Battle Royale</a>
            </div>
        </div>
        <div className='grid grid-cols-6 gap-4 p-6'>
            {gamesJson.map((item:GamesProps) => (
                <CatalogGame key={item.id} props={item} propsFilter={tabState}/>
            ))}
        </div>
    </>
  )
}

export default Games