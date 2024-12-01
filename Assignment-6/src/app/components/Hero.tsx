import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <div className=' bg-white w-full  text-center flex md:flex-col md:items-center   '>
                <div className=' h-[800px]  w-[50vw] justify-center items-center flex flex-col flex-start gap-[15px] lg:h-auto md:w-[90vw] md:h-auto py-5  '>
                    <div className='text-black font-bold w-auto sm:w-[500px] pt-36 ml-10 sm:ml-3'>
                        <h1 className='sm:text-5xl text-4xl '>Learn new skills online with ease</h1>
                        <br />
                        <p className='text-black text-lg sm:text-sm'>
                            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                        </p>
                    </div>
                    <div className='w-auto  flex ml-16 '>
                        <button className='w-[178px] h-[48px] border-[1px] rounded border-black bg-black text-white'>Start learning now</button>

                        <button className='w-[178px] h-[48px] border-[1px] ml-4 rounded border-black bg-white text-black'>Start learning now</button>
                    </div>
                </div>


                <div className=' w-[50vw]  h-auto flex justify-center md:h-auto md:w-[100vw]'>
                    <Image src="/images/icon/image.png" alt="" width={640} height={800} className=''/>
                </div>
            </div>


        </div>
    )
}

export default Hero