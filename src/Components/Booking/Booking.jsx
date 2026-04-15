import React from 'react'

const Booking = () => {
    return (
        <section id="booking" className="w-full">
            <div style={{ backgroundImage: 'url(./assets/bg_img_2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-full w-full">
                <div className="container">
                    <div className="top-1/2 w-full flex flex-col md:flex-row items-center md:justify-between gap-10 padding">
                        <div className>
                            <h4 className="text-primary text-[14px] leading-6.5 font-bold">
                                Booking Now
                            </h4>
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-10.5 mt-8.75">
                                <span className="md:block">Book your appointment online </span>And call
                                our salon
                            </h1>
                            <button className="px-5 py-3 text-sm font-medium text-white bg-primary cursor-pointer flex items-center gap-2 uppercase hover:bg-secondary border border-primary hover:bg-transparent hover:border hover:border-primary duration-300">
                                Booking Appoinment
                                <div className="w-3 h-3">
                                    <img src="./assets/right-arrow.png" alt="arrow" />
                                </div>
                            </button>
                        </div>
                        <div className="bg-white w-37.5 h-37.5 flex flex-col items-center justify-center">
                            <div className="w-12.5 h-12.5">
                                <img src="./assets/phone2.png" alt />
                            </div>
                            <p className="text-center">
                                <span className="block">Call Now</span> +125 (895) 658
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking
