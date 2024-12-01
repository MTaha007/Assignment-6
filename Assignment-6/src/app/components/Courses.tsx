import React from 'react'
import Image from 'next/image'

const Courses = () => {
    return (
        <div className="w-full  pt-10 ">
            {/* Courses Section Begins */}
            <div className="w-auto h-[118px]  ">
                <div className=" w-[90vw] h-[67px] text-black text-5xl font-bold text-center "> Courses</div>
                <div className=" w-[90vw] h-[27px] text-black text-center ">Your Ultimate Guide to learning</div>
            </div>
            <div className="w-[90vw] h-auto pt-[45px]  ">

                <div className="w-auto h-[40px] ml-[350px] flex justify-center mb-8 sm:ml-0 ">
                    <button className="w-[87px] h-[40px] text-black   text-center transition-all hover:text-black">Popular</button>
                    <button className="w-[140px] h-[40px] text-black   text-center">Recommended</button>
                    <button className="w-[109px] h-[40px] text-black   text-center">Best Price</button>
                </div>
                <div className="w-full grid grid-cols-3 grid-rows-2 justify-center place-items-center items-center gap-10 lg:grid-cols-2 sm:grid-cols-1 ml-5 sm:ml-12">
                    {/* card-1 starts */}
                    <div className="card1 w-auto shadow h-[534px] bg-[#F7F7F7]">
                        <div className="w-auto h-[300px] ">
                            <Image src="/images/icon/cards/Image.png" alt="" width={400} height={300} />
                        </div>
                        <div className="w-auto pt-[24px] h-[210px] ">
                            <div className=" h-[122px]  ">
                                <div className=" h-[24px] flex gap-4">
                                    <div className=" h-[24px] text-black font-bold"> Design</div>
                                    <div className="w-[48px] h-[24px]  text-black font-bold flex gap-2">
                                        <div className="w-[24px] h-[21px]">
                                            <Image src="/images/icon/star.png" alt="" width={24} height={21} /></div>
                                        <div className="w-[20px] h-[21px] text-black font-bold">5.0 </div>
                                    </div>
                                </div>
                                <div className="  h-[34px] pt-1  text-black font-bold text-2xl">
                                    UX/UI Design 201
                                </div>
                                <div className=" pt-1 h-[48px] font-medium text-black ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </div>
                            </div>
                            <div className=" h-[40px] flex gap-3">
                                <button className="w-[117px] h-[40px] border-[1px] border-black rounded text-black ">Enroll Now</button>
                                <div className="w-[77px] h-[40px] text-black text-center pt-3  font-bold">$400</div>
                            </div>
                        </div>
                    </div>
                    {/* card-1 ends */}
                    {/* card-2 starts */}
                    <div className="card-2 w-auto shadow h-[534px] bg-[#F7F7F7]">
                        <div className=" h-[300px] ">
                            <Image src="/images/icon/cards/card2.png" alt="" width={400} height={300} />
                        </div>
                        <div className="w- pt-[24px] h-[210px] ">
                            <div className=" h-[122px]  ">
                                <div className=" h-[24px] flex gap-4">
                                    <div className=" h-[24px] text-black font-bold"> Programming</div>
                                    <div className="w-[48px] h-[24px]  text-black font-bold flex gap-2">
                                        <div className="w-[24px] h-[21px]">
                                            <Image src="/images/icon/star.png" alt="" width={24} height={21} /></div>
                                        <div className="w-[20px] h-[21px] text-black font-bold">5.0 </div>
                                    </div>
                                </div>
                                <div className=" h-[34px] pt-1  text-black font-bold text-2xl">
                                    Introduction To Python
                                </div>
                                <div className=" pt-1 h-[48px] font-medium text-black ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </div>
                            </div>
                            <div className=" h-[40px] flex gap-3">
                                <button className="w-[117px] h-[40px] border-[1px] border-black rounded text-black ">Enroll Now</button>
                                <div className="w-[77px] h-[40px] text-black text-center pt-3  font-bold">$400</div>
                            </div>
                        </div>
                    </div>
                    {/* card-2 ends */}
                    {/* card-3 starts */}
                    <div className="card-3 w-auto shadow h-[534px] bg-[#F7F7F7]">
                        <div className=" h-[300px] ">
                            <Image src="/images/icon/cards/card3.png" alt="" width={400} height={300} />
                        </div>
                        <div className=" pt-[24px] h-[210px] ">
                            <div className=" h-[122px]  ">
                                <div className=" h-[24px] flex gap-4">
                                    <div className=" h-[24px] text-black font-bold">Business</div>
                                    <div className="w-[48px] h-[24px]  text-black font-bold flex gap-2">
                                        <div className="w-[24px] h-[21px]">
                                            <Image src="/images/icon/star.png" alt="" width={24} height={21} /></div>
                                        <div className="w-[20px] h-[21px] text-black font-bold">5.0 </div>
                                    </div>
                                </div>
                                <div className=" h-[34px] pt-1  text-black font-bold text-2xl">
                                    Data Analysis for Beginners
                                </div>
                                <div className=" pt-1 h-[48px] font-medium text-black ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </div>
                            </div>
                            <div className=" h-[40px] flex gap-3">
                                <button className="w-[117px] h-[40px] border-[1px] border-black rounded text-black ">Enroll Now</button>
                                <div className="w-[77px] h-[40px] text-black text-center pt-3  font-bold">$400</div>
                            </div>
                        </div>
                    </div>
                    {/* card-3 ends */}
                    {/* card-4 starts */}
                    <div className="card-4 w-auto shadow h-[534px] bg-[#F7F7F7] sm:hidden">
                        <div className=" h-[300px] ">
                            <Image src="/images/icon/cards/card4.png" alt="" width={400} height={300} />
                        </div>
                        <div className="pt-[24px] h-[210px] ">
                            <div className="h-[122px]  ">
                                <div className=" h-[24px] flex gap-4">
                                    <div className=" h-[24px] text-black font-bold"> Art</div>
                                    <div className="w-[48px] h-[24px]  text-black font-bold flex gap-2">
                                        <div className="w-[24px] h-[21px]">
                                            <Image src="/images/icon/star.png" alt="" width={24} height={21} /></div>
                                        <div className="w-[20px] h-[21px] text-black font-bold">5.0 </div>
                                    </div>
                                </div>
                                <div className="  h-[34px] pt-1  text-black font-bold text-2xl">
                                    Art Specialization
                                </div>
                                <div className=" pt-1 h-[48px] font-medium text-black ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </div>
                            </div>
                            <div className="h-[40px] flex gap-3">
                                <button className="w-[117px] h-[40px] border-[1px] border-black rounded text-black ">Enroll Now</button>
                                <div className="w-[77px] h-[40px] text-black text-center pt-3  font-bold">$400</div>
                            </div>
                        </div>
                    </div>
                    {/* card-4 ends */}

                    {/* card-5 starts */}
                    <div className="card-5 w-auto shadow h-[534px] bg-[#F7F7F7] sm:hidden">
                        <div className=" h-[300px] ">
                            <Image src="/images/icon/cards/card5.png" alt="" width={400} height={300} />
                        </div>
                        <div className=" pt-[24px] h-[210px] ">
                            <div className=" h-[122px]  ">
                                <div className=" h-[24px] flex gap-4">
                                    <div className=" h-[24px] text-black font-bold">Law</div>
                                    <div className="w-[48px] h-[24px]  text-black font-bold flex gap-2">
                                        <div className="w-[24px] h-[21px]">
                                            <Image src="/images/icon/star.png" alt="" width={24} height={21} /></div>
                                        <div className="w-[20px] h-[21px] text-black font-bold">5.0 </div>
                                    </div>
                                </div>
                                <div className=" h-[34px] pt-1  text-black font-bold text-2xl">
                                    Rule of Law
                                </div>
                                <div className=" pt-1 h-[48px] font-medium text-black ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </div>
                            </div>
                            <div className=" h-[40px] flex gap-3">
                                <button className="w-[117px] h-[40px] border-[1px] border-black rounded text-black ">Enroll Now</button>
                                <div className="w-[77px] h-[40px] text-black text-center pt-3  font-bold">$400</div>
                            </div>
                        </div>
                    </div>
                    {/* card-5 ends */}
                    {/* card-6 starts */}
                    <div className="card-6 w-auto shadow h-[534px] bg-[#F7F7F7] sm:hidden">
                        <div className=" h-[300px] ">
                            <Image src="/images/icon/cards/card6.png" alt="" width={400} height={300} />
                        </div>
                        <div className=" pt-[24px] h-[210px] ">
                            <div className="w-[382px] h-[122px]  ">
                                <div className=" h-[24px] flex gap-4">
                                    <div className=" h-[24px] text-black font-bold">Tech</div>
                                    <div className="w-[48px] h-[24px]  text-black font-bold flex gap-2">
                                        <div className="w-[24px] h-[21px]">
                                            <Image src="/images/icon/star.png" alt="" width={24} height={21} /></div>
                                        <div className="w-[20px] h-[21px] text-black font-bold">5.0 </div>
                                    </div>
                                </div>
                                <div className=" h-[34px] pt-1  text-black font-bold text-2xl">
                                    Introduction to Webflow
                                </div>
                                <div className=" pt-1 h-[48px] font-medium text-black ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </div>
                            </div>
                            <div className=" h-[40px] flex gap-3">
                                <button className="w-[117px] h-[40px] border-[1px] border-black rounded text-black ">Enroll Now</button>
                                <div className="w-[77px] h-[40px] text-black text-center pt-3  font-bold">$400</div>
                            </div>
                        </div>
                    </div>
                    {/* card-6 ends */}
                    <br />
                    <br />
                    <br />

                </div>
                <div className="w-full pt-10 flex justify-center">
                    <button className="w-[152px] h-[40px] rounded border-[1px] border-black text-black text-center " > View All Courses</button></div>

            </div>
            {/* Courses Section Ends */}
        </div>
    )
}

export default Courses