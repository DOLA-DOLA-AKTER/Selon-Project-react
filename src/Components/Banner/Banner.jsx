import React from 'react'

const Banner = () => {
    return (
        <section id="banner">
            <div>
                <div
                    style={{backgroundImage: 'url(/assets/banner.png)',backgroundSize: 'cover',backgroundPosition: 'center'}}className="md:h-[466px] w-full">
                    <div className="container mx-auto">
                        <div className="w-full flex flex-col items-start py-16 px-4">
                            <h4 className="text-primary text-[14px] font-bold">
                                Welcome to Our Barber
                            </h4>

                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-10 mt-5">
                                <span className="block">
                                    Best Hair Salon for a
                                </span>
                                Professional Look
                            </h1>

                            <div className="flex gap-3">
                                <button className="px-5 py-3 text-sm font-medium text-white bg-primary border border-primary flex items-center gap-2 hover:bg-transparent hover:border hover:border-primary duration-300">
                                    BOOKING NOW
                                    <img src="/assets/right-arrow.png" alt="arrow" className="w-3 h-3" />
                                </button>

                                <button className="px-5 py-3 text-sm font-medium text-primary border border-primary flex items-center gap-2 hover:border hover:border-nav hover:bg-nav duration-300">
                                    BOOKING NOW
                                    <img src="/assets/color-arrow.png" alt="arrow" className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner
