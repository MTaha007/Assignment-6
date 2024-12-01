import React from 'react'
import Image from 'next/image'


const Reviews = () => {
  return (
    <div className="w-auto h-auto bg-[#F7F7F7]">
        <div className="heading text-black bg-[#F7F7F7] ">

          <br />
          <br />
          <h1 className="text-[48px] font-bold  ml-16 sm:text-center">
            Customer testimonials
          </h1>
          <br />
          <p className="text-[18px] ml-16 sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />
          <br />
        </div>
        {/* review 1 start */}

        <div className="box flex justify-center  bg-[#F7F7F7] h-[50vh] gap-x-9  sm:w-[90vw]  ">
          <div className="box1 w-[362.67px] h-[321.89px] border-2 border-solid border-black">
            <br /> <br />
            <Image
              className="inline  ml-8 mr-1" src="/images/icon/staff/bstar.png" alt="facebook" width={20} height={18.89}
            />
            <Image
              className="inline   "
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />
            <Image
              className="inline  ml-1"
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />
            <Image
              className="inline  ml-1 "
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />
            <Image
              className="inline  ml-1 "
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />{" "}
            <br /> <br />
            <p className="w-[352px] text-black ml-8 ">
              "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
              <br /> Suspendisse varius enim in eros <br /> elementum tristique.
              Duis cursus, mi <br /> quis viverra ornare."
            </p>
            <Image
              className="inline rounded-full ml-8 mr-1"
              src="/images/icon/staff/staff3.png"
              alt=""
              width={56}
              height={56}
            />
            <h4 className="inline text-[16px] text-black font-semibold ml-[17px]">
              James Nduku
            </h4>
            <p className="ml-[109px] text-black mt-[-15px]">Software Development</p>
          </div>
        
          {/* review 1 ends */}

          {/* review 2 start */}
          
          <div className="box1 w-[362.67px] h-[321.89px] border-2 border-solid border-black sm:hidden">
            <br /> <br />
            <Image
              className="inline  ml-8 mr-1" src="/images/icon/staff/bstar.png" alt="facebook" width={20} height={18.89}
            />
            <Image
              className="inline   "
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />
            <Image
              className="inline  ml-1"
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />
            <Image
              className="inline  ml-1 "
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />
            <Image
              className="inline  ml-1 "
              src="/images/icon/staff/bstar.png"
              alt="facebook"
              width={20}
              height={18.89}
            />{" "}
            <br /> <br />
            <p className="w-[352px] text-black ml-8 ">
              "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
              <br /> Suspendisse varius enim in eros <br /> elementum tristique.
              Duis cursus, mi <br /> quis viverra ornare."
            </p>
            <Image
              className="inline rounded-full  ml-8 mr-1"
              src="/images/icon/staff/staff1.png"
              alt="facebook"
              width={56}
              height={56}
            />
            <h4 className="inline text-[16px] text-black font-semibold ml-[17px]">
              Erick Kipkemboi
            </h4>
            <p className="ml-[109px] text-black mt-[-15px]">Scrum Master</p>
          </div>
          {/* review 2 ends */}

          {/* review 3 start */}
          <div className="box flex justify-center gap-x-8 bg-[#F7F7F7] h-[50vh] sm:hidden">
            <div className="box1 w-[362.67px] h-[321.89px] border-2 border-solid border-black">
              <br /> <br />
              <Image
                className="inline  ml-8 mr-1" src="/images/icon/staff/bstar.png" alt="facebook" width={20} height={18.89}
              />
              <Image
                className="inline   "
                src="/images/icon/staff/bstar.png"
                alt="facebook"
                width={20}
                height={18.89}
              />
              <Image
                className="inline  ml-1"
                src="/images/icon/staff/bstar.png"
                alt="facebook"
                width={20}
                height={18.89}
              />
              <Image
                className="inline  ml-1 "
                src="/images/icon/staff/bstar.png"
                alt="facebook"
                width={20}
                height={18.89}
              />
              <Image
                className="inline  ml-1 "
                src="/images/icon/staff/bstar.png"
                alt="facebook"
                width={20}
                height={18.89}
              />{" "}
              <br /> <br />
              <p className="w-[352px] text-black ml-8 ">
                "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br /> Suspendisse varius enim in eros <br /> elementum tristique.
                Duis cursus, mi <br /> quis viverra ornare."
              </p>
              <Image
                className="inline rounded-full ml-8 mr-1"
                src="/images/icon/staff/staff6.png"
                alt="facebook"
                width={56}
                height={56}
              />
              <h4 className="inline text-[16px] text-black font-semibold ml-[17px]">
                Stephen Kerubo
              </h4>
              <p className="ml-[109px] text-black mt-[-15px]">UI/UX Designer</p>
            </div>
            {/* review 3 ends */}


          </div>
        </div>
        <div className=" ml-8 pb-4">
          <Image src="/images/icon/staff/Slider Dots.png" alt="" width={72} height={8} />
        </div>
      </div>
)
}

export default Reviews