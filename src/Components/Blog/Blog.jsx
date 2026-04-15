import React from 'react'

const Blog = () => {
    return (
        <section id="blog" className="padding">
            <div className="container">
                <div>
                    <div className="text-center pb-10">
                        <h4 className="text-primary text-[14px] leading-4 font-semibold">
                            Blog and Article
                        </h4>
                        <h2 className="text-[24px] text-secondary lg:pt-4 pt-3 font-semibold">
                            <span className="md:block">Read Our Blog and News
                            </span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-7.5 items-center justify-center">
                        <div className="flex flex-col gap-1 w-67.5 hover:shadow-lg duration-300 p-3 rounded">
                            <div className="w-full ">
                                <img src="./assets/blog_img.png" alt="blog_img" />
                            </div>
                            <p className="text-[12px] text-black px-2 font-bold">
                                Tortor tortor ut diam velit ornare laoreet sodales in massa. Sit sociis arcu libero. Ac maecenas lorem
                                nisi rhoncus. Erat dolor sodales amet vitae id aliquet egestas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 w-67.5 hover:shadow-lg duration-300 p-3 rounded">
                            <div className="w-full ">
                                <img src="./assets/blog_img2.png" alt="blog_img" />
                            </div>
                            <p className="text-[12px] text-black px-2 font-bold">
                                Tortor tortor ut diam velit ornare laoreet sodales in massa. Sit sociis arcu libero. Ac maecenas lorem
                                nisi rhoncus. Erat dolor sodales amet vitae id aliquet egestas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 w-67.5 hover:shadow-lg duration-300 p-3 rounded">
                            <div className="w-full ">
                                <img src="./assets/blog_img3.png" alt="blog_img" />
                            </div>
                            <p className="text-[12px] text-black px-2 font-bold">
                                Tortor tortor ut diam velit ornare laoreet sodales in massa. Sit sociis arcu libero. Ac maecenas lorem
                                nisi rhoncus. Erat dolor sodales amet vitae id aliquet egestas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
