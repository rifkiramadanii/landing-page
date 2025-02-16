import React from 'react'

const Footer = () => {
  return (
    <footer className='relative top-[965px] left-0 w-full rounded-tr-[224px] h-[418px] flex flex-col justify-start align-middle items-center bg-linear-to-t from-[#0F67BD] to-[#5EAFFF]'>
        <div className='pt-12'>
            <h2 className='text-white text-4xl'>Get Our News And Updates</h2>
        </div>
        <div className='py-8'>
            <p className='text-white text-xl'>
                It  is a long established fact that a reader will bee distracted <br /> by the readable content of a page when looking at its layout
            </p>
        </div>
        <div className='pt- w-[660px] h-[63px] bg-[#FFFFFF]/25 rounded-[12px]'>
            <input className='relative top-1 text-white text-xl pl-6 pt-1 w-[450px] h-[55px] active:border-0' type="text" placeholder='@ enter your Email'/>
            <button className='relative top-1 left-[35px] text-blue-900 text-2xl bg-white w-[170px] h-[53px] pt-0.5 rounded-[12px] hover:bg-blue-900 hover:text-white cursor-pointer'>
                Subscribe
            </button>
        </div>
    </footer>
  )
}

export default Footer
