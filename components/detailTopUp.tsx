import React from 'react'
import { TopUpProps } from '@/utils/types'

declare global {
    interface Window {
        modal_data: any;
    }
}

function DetailTopUp({props, setPoint, setPrice, setIsError, input}: {props : TopUpProps, setPoint:any, setPrice:any, setIsError:any, input:string}) {
    const showModalEvent = () =>{
        window.modal_data.showModal()
      }
      
      const setPointEvent = () =>{
        setPoint(props.point)
        setPrice(props.harga)
      }
    
      const mainFunction = () => {
        if(input == ''){
            setIsError(1)
            setTimeout(() => {
                setIsError(false)
            }, 3000);
        }else{
            showModalEvent()
            setPointEvent()
        }
      }
  return (
    <>
        <div className="card h-24 w-full bg-gray-700 shadow-xl space-y-2">
            <div className="pt-4 pl-4">
                <h2 className="font-semibold text-xl">{props.point} Points</h2>
            </div>
            <div className="pl-4">
                <h2 className="font-light text-md">Rp. {props.harga}</h2>
            </div>
            <div className='flex place-content-end absolute pl-52 pt-4'>
                <button className="btn btn-outline tracking-wider" onClick={mainFunction}>Pilih</button>
            </div>
        </div>
    </>
  )
}

export default DetailTopUp