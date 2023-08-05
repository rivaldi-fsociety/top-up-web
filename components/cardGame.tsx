import React, { useState } from 'react'
import Image from 'next/image'
import { GamesProps } from '@/utils/types'
import Link from "next/link";

function CardGame({props}:{props:GamesProps}) {
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  setTimeout(() => {
    setIsSkeleton(false)
  }, 50);
  return (
    <>
    {isSkeleton ? 
      <div className="animate-pulse cursor-default relative block w-56 h-72 bg-gray-900 group rounded-box" key={props.id}>
            <div className="bg-slate-900 rounded-box w-56 h-72"/>
      </div>
     : 
      <div className={`cursor-default relative block w-56 h-72 bg-gray-900 group rounded-box`} key={props.id}>
              <Image src={props.src}
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="apa"
                  className="rounded-box w-56 h-72 hover:scale-105 ease-in duration-200 absolute inset-0 object-cover
                  group-hover:opacity-50"
              />
          <div className="relative p-6">
              <div className="mt-48">
                  <div className="transition-all transform
                      translate-y-8 opacity-0
                      group-hover:opacity-100
                      group-hover:translate-y-0">
                      <div className="px-0">
                          <Link href={{ pathname: '/detail', query: { id:props.id } }}>
                              <button className="btn glass text-sm text-white">
                                  See Details
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    }
    </>
  )
}

export default CardGame