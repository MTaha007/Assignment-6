import React from 'react'

const Achivements = () => {
    return (
        <div className="w-full  h-auto">

            <div className=" pt-[90px] ">

                <div className=" h-[300px] text-black flex justify-center items-center flex-col md:h-auto">
                    <h1 className="ml-3 h-[58px] text-5xl font-bold ">Our Achivements</h1>
                    <h3 className="m-3 w-[90vw] text-center font-medium text-lg" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h3>
                </div>
                <div className="grid grid-cols-2 justify-center place-items-center items-center gap-10 w-screen sm:grid-cols-1  pt-6">
                    <div className="w-auto  h-[96px] pt-2 flex gap-x-[150px]">
                        <div className="w-auto h-[80px] grid place-items-center  ">
                            <div className="w-[91px] h-[48px] text-black font-bold text-5xl ">+200</div>
                            <div className="w-[59px] h-[48px] text-black font-medium ml-3 ">Courses</div>
                        </div>
                        <div className=" h-[80px] grid place-items-center ">
                            <div className=" h-[48px] text-black font-bold text-5xl">50K</div>
                            <div className=" h-[48px] text-black font-medium ">Mentors</div>
                        </div>
                    </div>
                    <div className="w- flex gap-x-[150px] ml-3 h-[96px]">
                        <div className=" h-[80px] grid place-items-center   ">
                            <div className=" h-[48px] text-black font-bold text-5xl ">370K</div>
                            <div className=" h-[48px] text-black font-medium ml-3 ">Students</div>
                        </div>
                        <div className=" h-[80px] grid place-items-center ">
                            <div className=" h-[48px] text-black font-bold text-5xl">100+</div>
                            <div className=" h-[48px] text-black font-medium ">Recognition</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default Achivements