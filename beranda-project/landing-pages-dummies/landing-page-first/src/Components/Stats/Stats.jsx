import React from 'react'
import courseLogo from "../../assets/Images/logoCourse.png"
import mentorLogo from "../../assets/Images/logoMentors.png"
import studentLogo from "../../assets/Images/logoStudents.png"

const Stats = () => {
  return (
    <div className='relative top-[587px] left-[118px] bg-linear-to-t from-[#004990] to-[#0A86FF] w-[85%] h-[112px] rounded-[12px]'>
        <div className="absolute -pl-8 top-6 flex flex-row justify-evenly w-full">
            <div className="flex flex-row w-[244px] h-[73px] gap-1">
                <img src={courseLogo} className='scale-60' alt="" />
                <div className="flex flex-col">
                    <h1 className='text-4xl text-white'>
                        15K+
                    </h1>
                    <p className='text-white'>
                        Total Courses
                    </p>
                </div>
            </div>     
            <div className="flex flex-row w-[244px] h-[73px] gap-1">
                <img src={mentorLogo} className='scale-60' alt="" />
                <div className="flex flex-col">
                    <h1 className='text-4xl text-white'>
                        150K+
                    </h1>
                    <p className='text-white'>
                        Expert Mentors
                    </p>
                </div>
            </div>
            <div className="flex flex-row w-[244px] h-[73px] gap-1">
                <img src={studentLogo} className='scale-60' alt="" />
                <div className="flex flex-col">
                    <h1 className='text-4xl text-white'>
                        1500K+
                    </h1>
                    <p className='text-white'>
                        Students Globally
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Stats
