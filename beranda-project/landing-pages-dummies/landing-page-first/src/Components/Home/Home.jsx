import React from 'react'
import homeImg from "../../assets/Images/homeImage.png"
const Home = () => {
  return (
    <section className='relative top-[91px] left-[118px] flex flex-row gap-12 w-[1265px]'>
        <div className="absolute left-0 top-[72px] flex flex-col w-[486px] h-[347px]">
            <div className="text-blue-900 text-5xl">
                <h2>
                    Getting Quality Education <br /> Is Now More Easy
                </h2>
            </div>
            <div className="pt-6">
                <p className='text-xl'>
                    Provides you with the latest online learning system <br /> and material that help your knowledge growing
                </p>
            </div>
            <div className="pt-6 flex flex-row gap-6">
                <button className='text-white bg-blue-900 rounded-[12px] w-[131px] h-[41px] cursor-pointer'>
                    Get Started
                </button>
                <button className='text-blue-800 bg-[#ECECEC] rounded-[12px] w-[131px] h-[41px] hover:text-white hover:bg-gray-900 cursor-pointer'>
                    Get Free Trial
                </button>
            </div>
        </div>
        <div className="absolute right-10 -top-6">
            <img src={homeImg} className='scale-90' alt="home-image" />
        </div>
    </section>
  )
}
export default Home
