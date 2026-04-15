import React from 'react'

const About = () => {
    return (
        <section id="about" className="padding">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-40 items-center justify-center">
                    <div className="w-87.5 h-73.25">
                        <img src="./assets/about_img.png" alt="about_img" />
                    </div>
                    <div className="md:w-61 w-full">
                        <h4 className="text-primary text-[14px] leading-4 font-bold">
                            About Us
                        </h4>
                        <h2 className="text-[24px] text-secondary pt-3 font-bold">
                            Best Haircut Salons For Men Women
                        </h2>
                        <p className="text-[12px] text-p py-4.5">
                            faucibus nisl amet egestas blandit. Aliquet habitant cras pulvinar
                            neque donec urna. At facilisis mollis volutpat condimentum
                            vestibulum auctor ac pretium.
                        </p>
                        {/* button */}
                        <button className="px-5 py-3 text-sm font-medium text-white bg-primary cursor-pointer flex items-center gap-2 uppercase hover:bg-nav duration-300">
                            Read More
                            <div className="w-3 h-3">
                                <img src="./assets/right-arrow.png" alt />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
