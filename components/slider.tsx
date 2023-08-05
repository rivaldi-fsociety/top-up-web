"use client"

import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import sliderJson from "@/json/sliderJson.json"
import { SliderProps } from '@/utils/types'

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  setTimeout(() => {
    setIsSkeleton(false)
  }, 50);

  return (
    <>
      {isSkeleton ?
          <div className="flex justify-center items-start pt-6">
              <div className="animate-pulse bg-slate-900  rounded-box w-10/12 h-80 drop-shadow-2xl" />
          </div>
       : 
        <div ref={sliderRef} className="keen-slider">
        {sliderJson.map((item:SliderProps) => (
              <div key={item.id} className="keen-slider__slide flex justify-center items-start pt-6">
                  <Image src={item.src} 
                      width="0"
                      height="0"
                      sizes="100vw"
                      alt="apa"
                      className="rounded-box w-10/12 h-80 drop-shadow-2xl"
                  />
              </div>
          ))}
        </div>
      }
    </>
  )
}
