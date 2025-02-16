import React from 'react'
import serviceA from "../../assets/Images/serviceA.png"
import serviceB from "../../assets/Images/serviceB.png"
import serviceC from "../../assets/Images/serviceC.png"
import serviceD from "../../assets/Images/serviceD.png"
import starLogo from "../../assets/Images/starLogo.png"
import arrowLeft from "../../assets/Images/arrow-left.png"
import arrowRight from "../../assets/Images/arrow-right.png"
const Services = () => {
  return (
    <section className='relative top-[607px] w-full flex flex-col'>
        <div className="absolute top-0 left-[542px]">
            <h2 className='text-black text-4xl text-center'>
                Our Best Service <br /> For Your Courses
            </h2>
        </div>
        <div className="relative flex flex-row justify-evenly gap-10 w-full pl-[76px] py-[120px]">
            <div className='absolute left-[76px] top-[272px]'>
                <img src={arrowLeft} className='' alt="" />
            </div>
            <div className="absolute flex flex-row justify-center gap-10 w-full left-0">
                <div className='w-[238px] h-[344px] bg-linear-to-t from-[#1C3FBD] to-[#A9B7FF] flex flex-col gap-3 rounded-[12px]'>
                    <img src={serviceA} className='scale-70' alt="" />
                    <h3 className='text-white text-3xl text-center'>Design <br /> UI/UX</h3>
                    <div className="pl-6 flex flex-row gap-2">
                        <button className='text-blue-900 text-xl bg-white rounded-[12px] w-[149px] h-[40px]'>
                            Get Started
                        </button>
                        <button className='w-10 h-10 rounded-[8px] bg-white'>
                            <img src={starLogo} className='pl-2' alt="" />
                        </button>
                    </div>
                </div>
                <div className='w-[238px] h-[344px] bg-linear-to-t from-[#1C79BD] to-[#D4A9FF] flex flex-col gap-3 rounded-[12px]'>
                    <img src={serviceB} className='scale-70' alt="" />
                    <h3 className='text-white text-3xl text-center'>Digital <br /> Marketing</h3>
                    <div className="pl-6 flex flex-row gap-2">
                        <button className='text-blue-900 text-xl bg-white/25 rounded-[12px] w-[149px] h-[40px] hover:bg-white'>
                            Get Started
                        </button>
                        <button className='w-10 h-10 rounded-[8px] bg-white/25 hover:bg-white'>
                            <img src={starLogo} className='pl-2' alt="" />
                        </button>
                    </div>
                </div>
                <div className='w-[238px] h-[344px] bg-linear-to-t from-[#1C2CBD] to-[#E3A9FF] flex flex-col gap-3 rounded-[12px]'>
                    <img src={serviceC} className='scale-70' alt="" />
                    <h3 className='text-white text-3xl text-center'>Flutter <br /> Developer</h3>
                    <div className="pl-6 flex flex-row gap-2">
                        <button className='text-blue-900 text-xl bg-white/25 rounded-[12px] w-[149px] h-[40px] hover:bg-white'>
                            Get Started
                        </button>
                        <button className='w-10 h-10 rounded-[8px] bg-white/25 hover:bg-white'>
                            <img src={starLogo} className='pl-2' alt="" />
                        </button>
                    </div>
                </div>
                <div className='w-[238px] h-[344px] bg-linear-to-t from-[#1F1CBD] to-[#A9F5FF] flex flex-col gap-3 rounded-[12px]'>
                    <img src={serviceD} className='scale-70' alt="" />
                    <h3 className='text-white text-3xl text-center'>Data <br /> Analyst</h3>
                    <div className="pl-6 flex flex-row gap-2">
                        <button className='text-blue-900 text-xl bg-white/25 rounded-[12px] w-[149px] h-[40px] hover:bg-white'>
                            Get Started
                        </button>
                        <button className='w-10 h-10 rounded-[8px] bg-white/25 hover:bg-white'>
                            <img src={starLogo} className='pl-2' alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute right-[56px] top-[262px]'>
                <img src={arrowRight} className='' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Services
