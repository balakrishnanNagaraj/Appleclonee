import {
    FaApple

}

from "react-icons/fa"
import React from "react";
import img6 from "../assets/images/ipadpro.jpg"
import img7 from "../assets/images/iwatch.jpg"
import img8 from "../assets/images/man.jpg"
import img9 from "../assets/images/airpods.jpg"
import img10 from "../assets/images/macpro.jpg"
import img11 from "../assets/images/hand.jpg"



function Hero4() {
    return (
        <section className="relative overflow-hidden mx-5">
            <div className="flex h-80 md:h-96 gap-2 py-4">
                {/* First Image Section */}
                <div className="relative w-1/2">
                    <img src={img6} className="w-full h-full object-cover" alt="iPad Pro" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-10">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">iPad Pro</h1>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-xl text-white text-center">Unbelievably thin. Incredibly powerful.</h1>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                Learn More
                            </button>
                            <button className="bg-transparent text-blue-500 px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                                Buy
                            </button>
                        </div>
                        <div>
                            <h1 className="text-sm md:text-xl text-center mt-80">
                                <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Built</span> 
                                <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"> for Apple </span>
                                <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Intelligence.</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Second Image Section */}
                <div className="relative w-1/2">
                    <img src={img7} className="w-full h-full object-cover" alt="Apple Watch" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-10">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold text-black text-center">Apple Watch</h1>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-xl text-black text-center">Thinner. Smarter. Mightier.</h1>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                Learn More
                            </button>
                            <button className="bg-transparent text-blue-500 px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-80 md:h-96 gap-2 py-4">
                {/* First Image Section */}
                <div className="relative w-1/2">
                    <img src={img8} className="w-full h-full object-cover" alt="iPad Pro" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-10">
                        <div>
                            <h1 className="text-2xl md:text-7xl font-bold text-yellow-500 text-center">Mac for<br></br> Students</h1>
                        </div>
                        <div className="flex space-x-4 bottom-40">
                            <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second Image Section */}
                <div className="relative w-1/2">
                    <img src={img9} className="w-full h-full object-cover" alt="Apple Watch" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-10 mt-44">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">AirPods4</h1>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-xl text-white text-center">Thinner. Smarter. Mightier.</h1>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                Learn More
                            </button>
                            <button className="bg-transparent text-blue-500 px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-80 md:h-96 gap-2 py-4">
                {/* First Image Section */}
                <div className="relative w-1/2">
                    <img src={img10} className="w-full h-full object-cover" alt="iPad Pro" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-10">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">MacBook Pro</h1>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-xl text-white text-center">A work smart</h1>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                Learn More
                            </button>
                            <button className="bg-transparent text-blue-500 px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                                Buy
                            </button>
                        </div>
                        <div>
                            <h1 className="text-xs md:text-sm text-center mt-60">
                                <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Built</span> 
                                <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"> for Apple </span>
                                <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Intelligence.</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Second Image Section */}
                <div className="relative w-1/2">
                    <img src={img11} className="w-full h-full object-cover" alt="Apple Watch" />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-10">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold text-black text-center flex"><FaApple/>Traed In</h1>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-xl text-black text-center">Upgrade and save. It's that easy</h1>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                Get your estimate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Hero4;