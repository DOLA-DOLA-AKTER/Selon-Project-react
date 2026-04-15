import React from 'react'

const Service = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="bg-[#F7F7F7] padding">
                    <div className="text-center pb-10">
                        <h4 className="text-primary text-[14px] leading-4 font-bold uppercase">
                            Our Services
                        </h4>
                        <h2 className="text-[24px] text-secondary lg:pt-4 pt-3 font-bold">
                            <span className="block">Popular Hair Cutting </span>
                            And Salon
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-6 grid-cols-3 justify-between wrap-break-word lg:gap-8 gap-5 pb-13">
                        <div className="bg-[#D9D9D9] hover:bg-nav w-30 h-30 flex flex-col items-center justify-center duration-300">
                            <div className="w-10 h-10">
                                <img src="./assets/emoji-haircut.png" alt="about_img" />
                            </div>
                            <h4 className="text-primary text-[14px] leading-4 font-bold pt-4">
                                Trand Haircut
                            </h4>
                        </div>
                        <div className="bg-[#D9D9D9] hover:bg-nav w-30 h-30 flex flex-col items-center justify-center duration-300">
                            <div className="w-10 h-10">
                                <img src="./assets/emoji-haircut.png" alt="about_img" />
                            </div>
                            <h4 className="text-primary text-[14px] leading-4 font-bold pt-4">
                                Trand Haircut
                            </h4>
                        </div>
                        <div className="bg-[#D9D9D9] hover:bg-nav w-30 h-30 flex flex-col items-center justify-center duration-300">
                            <div className="w-10 h-10">
                                <img src="./assets/emoji-haircut.png" alt="about_img" />
                            </div>
                            <h4 className="text-primary text-[14px] leading-4 font-bold pt-4">
                                Trand Haircut
                            </h4>
                        </div>
                        <div className="bg-[#D9D9D9] hover:bg-nav w-30 h-30 flex flex-col items-center justify-center duration-300">
                            <div className="w-10 h-10">
                                <img src="./assets/emoji-haircut.png" alt="about_img" />
                            </div>
                            <h4 className="text-primary text-[14px] leading-4 font-bold pt-4">
                                Trand Haircut
                            </h4>
                        </div>
                        <div className="bg-[#D9D9D9] hover:bg-nav w-30 h-30 flex flex-col items-center justify-center duration-300">
                            <div className="w-10 h-10">
                                <img src="./assets/emoji-haircut.png" alt="about_img" />
                            </div>
                            <h4 className="text-primary text-[14px] leading-4 font-bold pt-4">
                                Trand Haircut
                            </h4>
                        </div>
                        <div className="bg-[#D9D9D9] hover:bg-nav w-30 h-30 flex flex-col items-center justify-center duration-300">
                            <div className="w-10 h-10">
                                <img src="./assets/emoji-haircut.png" alt="about_img" />
                            </div>
                            <h4 className="text-primary text-[14px] leading-4 font-bold pt-4">
                                Trand Haircut
                            </h4>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-40 gap-10 items-center justify-center">
                        <div className="w-82.5 h-55">
                            <img src="./assets/service-img.png" alt="service_img" />
                        </div>
                        <div className="md:w-61 w-full">
                            <h2 className="text-[24px] text-secondary pt-3">
                                Best Facial Hair Trim At Home Treatment
                            </h2>
                            <p className="text-[12px] text-p py-4.5">
                                faucibus nisl amet egestas blandit. Aliquet habitant cras
                                pulvinar neque donec urna. At facilisis mollis volutpat
                                condimentum vestibulum auctor ac pretium.
                            </p>
                            {/* button */}
                            <button className="px-5 py-3 text-sm font-medium text-white bg-primary cursor-pointer flex items-center gap-2 uppercase hover:bg-nav duration-300">
                                Book Appointment
                                <div className="w-3 h-3">
                                    <img src="./assets/right-arrow.png" alt />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Service
