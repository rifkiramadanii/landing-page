import React from 'react'
import manA from "../../assets/Images/manA.png"
import manB from "../../assets/Images/manB.png"
import manC from "../../assets/Images/manC.png"
import stars from "../../assets/Images/stars.png"
const Reviews = () => {
  return (
    <section className='relative top-[875px] flex flex-col justify-center w-full items-center'>
        <div>
            <h2 className='text-black text-4xl text-center'>
                What Our Clients Say About Us
            </h2>
        </div>
        <div className='py-8'>
            <p className='text-xl text-gray-800 text-center'>
                It is a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at its layout.
            </p>
        </div>
        <div className='flex flex-row justify-evenly gap-14 items-center pt-12'>
            <div className='flex flex-col justify-center items-center align-middle bg-linear-to-b from-[#0C009B]/50 to-[#EA98FF] w-[242px] h-[324px] rounded-[12px]'>
                <div className='items-center px-10'>
                    <img src={manA} className='px-10' alt="" />
                    <h3 className='text-white text-2xl text-center'>Joe Root</h3>
                    <img src={stars} alt="" />
                </div>
                <div className='px-6 py-3'>
                    <p className='text-white text-justify'>
                        “It  is a long established fact that a reader will bee distracted by the readable content of a page when looking at its layout.”
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center align-middle bg-linear-to-b from-[#0C009B]/50 to-[#EA98FF] w-[242px] h-[324px] rounded-[12px] scale-120'>
                <div className='items-center px-10'>
                    <img src={manB} className='px-10' alt="" />
                    <h3 className='text-white text-2xl text-center'>Joe Root</h3>
                    <img src={stars} alt="" />
                </div>
                <div className='px-6 py-4'>
                    <p className='text-white text-justify'>
                        “It  is a long established fact that a reader will bee distracted by the readable content of a page when looking at its layout.”
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center align-middle bg-linear-to-b from-[#0C009B]/50 to-[#EA98FF] w-[242px] h-[324px] rounded-[12px]'>
                <div className='items-center px-10'>
                    <img src={manC} className='px-10' alt="" />
                    <h3 className='text-white text-2xl text-center'>Joe Root</h3>
                    <img src={stars} alt="" />
                </div>
                <div className='px-6 py-3'>
                    <p className='text-white text-justify'>
                        “It  is a long established fact that a reader will bee distracted by the readable content of a page when looking at its layout.”
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Reviews
