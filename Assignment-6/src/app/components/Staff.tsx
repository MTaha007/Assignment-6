import React from 'react'
import Image from 'next/image'

const Staff = () => {
  return (
    <div className="w-auto h-auto pt-4 bg-[#F7F7F7] text-black  sm:h-auto">
        {/* staff section begins*/}
        <div className="w-auto h-[109px] ml-52 sm:ml-0 " >
          <h1 className="w-auto h-[58px] text-black font-bold text-center text-5xl">Our Team</h1>
          <p className="w-auto text-center text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 justify-center items-center gap-10 sm:grid-cols-1 sm:w-full  sm:justify-center ">
          {/* card1 starts */}
          <div className="w-auto h-[209px]  ">
            <div className=" flex justify-center h-[80px]  ">
              <Image src="/images/icon/staff/staff1.png" alt="" width={80} height={80} />
            </div>
            <div className=" h-[57px] text-center ">
              <h1 className="text-black font-bold">James Nduku</h1>
              <p className="text-black font-medium">Marketing Coordinator</p>
            </div>
            <br />
            <div className=" h-[24px] flex justify-center gap-3">
              <Image src="/images/icon/linkedin.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/vector.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/media3.png" alt="" width={24} height={24} />
            </div>
          </div>
          {/* card 1 ends */}
          {/* card 2 starts */}
          <div className="w-auto h-[209px] ">
            <div className=" flex justify-center h-[80px]  ">
              <Image src="/images/icon/staff/staff2.png" alt="" width={80} height={80} />
            </div>
            <div className=" h-[57px] text-center ">
              <h1 className="text-black font-bold">Joseph Munyambu</h1>
              <p className="text-black font-medium">Nursing Assitance</p>
            </div>
            <br />
            <div className=" h-[24px] flex justify-center gap-3">
              <Image src="/images/icon/linkedin.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/vector.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/media3.png" alt="" width={24} height={24} />
            </div>
          </div>
          {/* card 2 ends */}
          {/* card 3 starts */}
          <div className="w-auto h-[209px]   ">
            <div className=" flex justify-center h-[80px]  ">
              <Image src="/images/icon/staff/staff3.png" alt="" width={80} height={80} />
            </div>
            <div className=" h-[57px] text-center ">
              <h1 className="text-black font-bold">Joseph Ngumbau</h1>
              <p className="text-black font-medium">Medical Assistance</p>
            </div>
            <br />
            <div className=" h-[24px] flex justify-center gap-3">
              <Image src="/images/icon/linkedin.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/vector.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/media3.png" alt="" width={24} height={24} />
            </div>
          </div>
          {/* card 3 ends */}
          {/* card 4 starts */}
          <div className="w-auto h-[209px] sm:hidden ">
            <div className=" flex justify-center h-[80px]  ">
              <Image src="/images/icon/staff/staff4.png" alt="" width={80} height={80} />
            </div>
            <div className=" h-[57px] text-center ">
              <h1 className="text-black font-bold">Erick Kipkemboi</h1>
              <p className="text-black font-medium">Web designing</p>
            </div>
            <br />
            <div className=" h-[24px] flex justify-center gap-3">
              <Image src="/images/icon/linkedin.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/vector.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/media3.png" alt="" width={24} height={24} />
            </div>
          </div>
          {/* card 4 ends */}
          {/* card 5 starts */}
          <div className="w-auto h-[209px] sm:hidden ">
            <div className=" flex justify-center h-[80px]  ">
              <Image src="/images/icon/staff/staff5.png" alt="" width={80} height={80} />
            </div>
            <div className=" h-[57px] text-center ">
              <h1 className="text-black font-bold">Stephen Kerubo</h1>
              <p className="text-black font-medium">President of Sale</p>
            </div>
            <br />
            <div className=" h-[24px] flex justify-center gap-3">
              <Image src="/images/icon/linkedin.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/vector.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/media3.png" alt="" width={24} height={24} />
            </div>
          </div>
          {/* card 5 ends */}
          {/* card 6 starts */}

          <div className="w-auto h-[209px] sm:hidden ">
            <div className=" flex justify-center h-[80px]  ">
              <Image src="/images/icon/staff/staff6.png" alt="" width={80} height={80} />
            </div>
            <div className=" h-[57px] text-center ">
              <h1 className="text-black font-bold">John Leboo</h1>
              <p className="text-black font-medium">Dog Trainer</p>
            </div>
            <br />
            <div className=" h-[24px] flex justify-center  gap-3">
              <Image src="/images/icon/linkedin.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/vector.svg" alt="" width={24} height={24} />
              <Image src="/images/icon/media3.png" alt="" width={24} height={24} />
            </div>
          </div>
          {/* card 6 ends */}
        </div>
        <div className='hidden  w-full sm:flex justify-center pt-5 mb-5 '>
            <button className='text-black border-[1px] rounded border-black '>View More</button>
        </div>
        {/* staff section ends*/}
      </div>
  )
}

export default Staff