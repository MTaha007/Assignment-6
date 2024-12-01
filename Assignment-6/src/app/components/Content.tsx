import React from 'react'
import Image from 'next/image'

const Content = () => {
  return (
    <div className='pt-8'>
      <div className="bg-[#F7F7F7]   h-[228px] flex sm:flex-col  ">
        <div className='pt-[70px] text-black font-bold'>
          <div className=" flex items-center m-2  text-2xl">
            Trusted by 2000+ companies <br /> worldwide.
            </div>
        </div>
        <div className='lg:pt-14 sm:pt-8 w-2/3 '>
          <div className='flex gap-4 items-center  '>
            <Image src="/images/icon/logo/11Airbnb Logo.svg" alt="" width={140} height={50} className=' border-[#676767] justify-center' />
            <Image src="/images/icon/logo/Airbnb Logo.svg" alt="" width={123.8} height={38.52} />
            <Image src="/images/icon/logo/Airbnb Logo1.svg" alt="" width={123.8} height={38.52} className=''/>
            <Image src="/images/icon/logo/4Airbnb Logo.png" alt="" width={123.8} height={38.52} className='sm:hidden' />
            <Image src="/images/icon/logo/6Airbnb Logo.svg" alt="" width={123.8} height={38.52} className='sm:hidden '/>
            <Image src="/images/icon/logo/5Airbnb Logo.png" alt="" width={123.8} height={38.52} className='sm:hidden '/>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Content