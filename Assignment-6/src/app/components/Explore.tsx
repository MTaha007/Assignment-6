
import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <div className="w-full h-auto  ">
      {/* Explore section begins */}
        <div className="w-full h-[310px] pt-20 text-center">
          <div>
            <h1 className="text-black text-5xl  font-bold">Explore Courses By Category</h1>
          </div>
          <div>
            <h1 className="text-black font-bold pt-2 ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h1>
          </div>
        </div>
        <div className="bg-white  w-full h-[640px] grid grid-cols-3 grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 gap-4">
            {/* card 1 */}
          <div className="bg-[#F7F7F7]  w-[410px] h-[130px] flex rounded pt-4 sm:ml-12" >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/pen-tool-2.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold ">Design & Development</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-[#F7F7F7] w-[410px] h-[130px] rounded flex pt-4 sm:ml-12 " >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/volume-high.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Marketing</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div> 
          </div>
          {/* card 3 */}
          <div className="bg-[#F7F7F7] w-[410px] h-[130px] flex pt-4 rounded sm:ml-12 " >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/group.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Development</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
           {/* card 4 */}
          <div className="bg-[#F7F7F7] ml-1 w-[410px] h-[130px] rounded flex pt-4  sm:hidden" >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/microphone.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Communication</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
          {/* card 5 */}
          <div className="bg-[#F7F7F7] w-[410px] h-[130px] flex pt-4 rounded  sm:hidden" >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/link.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
          {/* card 6 */}
          <div className="bg-[#F7F7F7] w-[410px] h-[130px] flex pt-4 rounded sm:hidden" >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/arrow-2.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Self Development</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
          {/* card 7 */}
          <div className="bg-[#F7F7F7] ml-1 w-[410px] h-[130px] pt-4 flex rounded sm:hidden " >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
              <Image src="/images/icon/explore/briefcase.png" alt="" width={32} height={32} className="ml-8 pt-6" />
            </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Business</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
          {/* card 8 */}
          <div className="bg-[#F7F7F7] w-[410px] h-[130px] rounded pt-4 flex sm:hidden" >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
            <Image src="/images/icon/explore/book.png" alt="" width={32} height={32} className="ml-8 pt-6" />
          </div>
            <div className="w-[247px] h-[57px] text-black text-center pt-4  " >
              <h1 className="text-xl font-bold">Finance</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
            </div>
            {/* card 9 */}
          <div className="bg-[#F7F7F7] w-[410px] h-[130px] flex pt-4 rounded sm:hidden" >
            <div className="w-[100px] h-[100px] bg-white justify-center rounded ml-4 pt-2  ">
            <Image src="/images/icon/explore/1book.png" alt="" width={32} height={32} className="ml-8 pt-6" />
          </div>
            <div className="w-[247px] h-[57px] text-black text-center  pt-4  " >
              <h1 className="text-xl font-bold">Consulting</h1>
              <h3 className="font-semibold">50+ Courses Available</h3>
            </div>
          </div>
            
        </div>
        <div className=" flex w-full  justify-center">
              <button className="rounded border-[1px] text-black  border-black w-[155px] h-[48px] ">View All Courses </button>
            </div>
        {/* ?Explore section Ends */}
      </div>

  )
}

export default Explore