"use client"
import React, { useState } from 'react'
import { GamesProps } from '@/utils/types'
import Image from 'next/image'
import nominalTopUp from '@/json/nominalTopUp.json'
import { TopUpProps } from '@/utils/types'
import DetailTopUp from '@/components/detailTopUp'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import Link from 'next/link'


function DetailGames({props}:{props:GamesProps}) {
    const [value, setValue] = useState('');
    const [pointValue, setPointValue] = useState<number>(0);
    const [priceValue, setPriceValue] = useState<number>(0);
    const [isSuccess, setIsSuccess] = useState<number>(0);
    const [isError, setIsError] = useState<boolean>(false);

    const mainFunction = () => {
        setValue('')
        setIsSuccess(1)
        setTimeout(() => {
            setIsSuccess(0)
        }, 5000);
    }
  return (
    <>
        <div className='absolute pl-6 pt-4'>
            <Link href={"/"}>
                <button className="btn btn-warning tracking-wider hover:scale-105 ease-in duration-100"><CIcon className='' icon={icon.cilArrowCircleLeft} height={38} width={38}/> Kembali</button>
            </Link>
        </div>
        <div className='bg-base-100 flex justify-center items-start'>
            <div className="hero h-72 w-12/12 rounded-box" style={{backgroundImage: 'url(/banner/banner-promo.png)'}}>
                <div className="hero-overlay bg-opacity-40"></div>
            </div>
        </div>
        {/* Content Detail */}
        <div className="bg-base-200">
            <div className=" w-full flex gap-4 p-4 flex-col lg:flex-row">
                {/* Left Side */}
                <div className="card h-fit w-4/12 bg-gray-800 shadow-xl">
                    <div className='flex justify-center items-center'>
                        <Image src={props?.src}
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="apa"
                            className="rounded-box w-52 h-60 hover:scale-105 ease-in duration-200 absolute -top-32  object-cover
                            group-hover:opacity-50"
                        />
                    </div>
                    <div className="card-body items-center text-center mt-24">
                        <h2 className="card-title my-4">{props?.name}</h2>
                        <div className='min-w-fit space-y-8'>
                            <p className='text-justify'>
                                {`Top up Points hanya dalam hitungan detik! Cukup masukan Username ${props?.name} Anda. pilih jumlah Points yang Anda inginkan, selesaikan pembayaran dan Points akan secara langsung ditambahkan ke akun ${props?.name} Anda.`}
                            </p>
                            <p className='text-justify'>
                                {`Bayarlah menggunakan QRIS, GoPay, OVO, DANA, Bank Transfer, Telkomsel, ShopeePay, LinkAja, Alfamart, Indomaret, dan Kartu Kredit. Tanpa perlu registrasi ataupun login.`}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='flex flex-col gap-4 w-10/12'>
                    <div className="card bg-gray-800 shadow-xl">
                        <div className="card-body gap-0">
                            <div className='flex flex-row space-x-3'>
                                <div className="w-7 h-7 rotate-45 border-2 border-secondary flex justify-center items-center">
                                    <div className='rotate-fixed'>
                                        1
                                    </div>
                                </div>
                                <h2 className="card-title">Masukkan User ID
                                    <div className="tooltip tooltip-right font-light" data-tip="Untuk menemukan akun ID anda pada game">
                                        <CIcon className="hover:text-warning hover:cursor-help" icon={icon.cilLightbulb} height={20} width={20}/>
                                    </div>
                                </h2>
                            </div>
                            <div className="divider before:bg-primary after:bg-secondary"></div> 
                            <input type="text" value={value} onChange={e => { setValue(e.currentTarget.value); }} placeholder="username" className="input input-bordered input-accent w-full max-w-md" />
                            <label className={`label ${isError ? "" : "hidden"}`}>
                                <span className="label-text-alt text-error">Akun ID Tidak Boleh Kosong.</span>
                            </label>
                            <div className='text-justify mt-2'>
                                <p>Untuk menemukan ID Anda. Contoh. Westbourne#SEA</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-gray-800 shadow-xl">
                        <div className="card-body gap-0">
                            <div className='flex flex-row space-x-3'>
                                <div className="w-7 h-7 rotate-45 border-2 border-secondary flex justify-center items-center">
                                    <div className='rotate-fixed'>
                                        2
                                    </div>
                                </div>
                                <h2 className="card-title">Pilih Nominal Top Up</h2>
                            </div>
                            <div className="divider before:bg-primary after:bg-secondary"></div> 
                            <div className='grid grid-cols-3 gap-4 '>
                                {nominalTopUp.map((item:TopUpProps) => (
                                    <DetailTopUp key={item.id} props={item} setPoint={setPointValue} setPrice={setPriceValue} setIsError={setIsError} input={value}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className={`${isSuccess ? "transition duration-700 ease-in":"hidden"} toast toast-top toast-end`}>
            <div className="alert alert-success">
                <span>Berhasil Melakukan Top Up Rp. {priceValue}</span>
            </div>
        </div>
        <dialog id="modal_data" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Method: Post</h3>
                <p className="py-4 font-medium text-warning">{`[{ "akun_id": ${value}, "nominal_point": ${pointValue} }]`}</p>
                <div className="modal-action">
                    <button className="btn" onClick={mainFunction} >Close</button>
                </div>
            </form>
        </dialog>
    </>
  )
}

export default DetailGames