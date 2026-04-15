import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#2E3C42] pt-40 ">
            <div className="container">
                <div className="flex md:flex-row flex-col gap-5 justify-between px-5">
                    <div>
                        <a href className><img src="./assets/Logo.png" alt="logo" className="text[32px]" />
                        </a>
                        <ul className="flex items-center gap-7.5 text-white text-[14px] pt-2.5">
                            <li className="hover:text-primary duration-300">Hair Wash</li>
                            <li className="hover:text-primary duration-300">Hair Massage</li>
                            <li className="hover:text-primary duration-300">Haircolor</li>
                            <li className="hover:text-primary duration-300">Hair Wash</li>
                        </ul>
                    </div>
                    <form action className="flex ">
                        <input type="email" placeholder="Email Address" className="text-white text-[13px] bg-transparent border border-primary pl-4" />
                        <button className="px-5 py-2.5 text-sm text-white bg-primary cursor-pointer flex items-center gap-2 uppercase">
                            Subscribe
                        </button>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
            <hr className="bg-[#878484] md:mt-15 mt-8 w-full h-0.5" />
            <div className="container">
                <div className="grid md:grid-cols-2 grid-cols-1 md:flex-row py-5 gap-7 px-5">
                    <div>
                        <p className="text-white text-[12px]">Copyright @ 2025, website by Logo</p>
                    </div>
                    <div className="flex flex-row gap-7.5 items-center">
                        <div className="w-6 h-6">
                            <img src="./assets/ic_baseline-facebook.png" alt />
                        </div>
                        <div className="w-6 h-6">
                            <img src="./assets/mdi_twitter.png" alt />
                        </div>
                        <div className="w-6 h-6">
                            <img src="./assets/ri_linkedin-fill.png" alt />
                        </div>
                        <div className="w-6 h-6">
                            <img src="./assets/mingcute_behance-fill.png" alt />
                        </div>
                        <div className="w-6 h-6">
                            <img src="./assets/icon-park-outline_dribble.png" alt />
                        </div>
                        <div className="w-6 h-6">
                            <img src="./assets/mingcute_snapchat-line.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
