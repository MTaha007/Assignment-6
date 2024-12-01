import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-[100vw]'>
      <div className=' sm:hidden flex w-[100vw] h-[54px] mx-auto px-4 items-center bg-[#F7F7F7] '>

        <div className='flex h-[54px] w-full text-black    '>
          <div className='w-[786px] border-black h-[54px] flex gap-x-10 items-center ml-16'>
            <div className=' h-[21px] font-bold flex'>Phone Number: 956 742 455 678 | Email:info@ddsgnr.com</div>
            
          </div>
          <div className=' h-[54px] inline-flex gap-x-4 ml-56 '>
            <Image src="/images/icon/facebook.svg" 
            alt="" 
            width={10} 
            height={12} 
            />

            <Image src="/images/icon/instagram.svg" 
            alt="" 
            width={16} 
            height={16} 
            />

            <Image src="/images/icon/vector.svg" 
            alt="" 
            width={16} 
            height={16} 
            />

            <Image src="/images/icon/linkedin.svg" 
            alt="" 
            width={16} 
            height={16} 
            />
          </div>
        </div>
      </div>
      <br className=' sm:' />

      <header className="bg-[#F7F7F7] h-[72px] w-auto flex justify-between font-bold  ">
        <div className="logo inline-flex items-center justify-end gap-x-1 w-[180px] h-[72px] ">
          <Image
            className="self-center"
            src="images/icon/logo.svg"
            alt="logo"
            width={32.58}
            height={30.38}
          />
          <h3 className="text-black text-2xl font-bold inline">Ddsgnr</h3>
        </div>
        <div className=" hidden md:block w-[48px] pt-5  ">
          <Image src="/images/Menu.png"
           alt="image"
           width={24}
           height={24}
           />
        </div>

        <nav className="sm:hidden lg:inline-flex   w-auto h-[42px] self-center ">
          <ul className="bg-white text-black font-bold inline-flex gap-x-12 h-[44px] w-[687px] justify-center  items-center">
            <li className="ml-1">Home</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Achivements</li>
            <li>About Us</li>
            <li className="pr-2">Testimonial</li>
          </ul>
          <div className="login inline-flex w-[191px] h-[43px] gap-x-4 justify-center bg-white">
            <Link href="">
              <button className="bg-white text-black w-[80px] h-[40px] border-[1px] rounded font-bold border-black">Login</button>
            </Link>
            <Link href="">
              <button className="bg-black text-white w-[80px] h-[40px] border-2 rounded border-transparent">Sign Up</button>
            </Link>
          </div>
        </nav>
      </header>

    </div>

  )
}

export default Header

