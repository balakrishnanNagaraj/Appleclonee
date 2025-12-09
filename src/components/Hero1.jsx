import React from "react";
import img1 from "../assets/images/bgimg.png"
import img2 from "../assets/images/mac.jpg"
import img3 from "../assets/images/ipad.jpeg"

function Hero1(){
    return(
        <section className="relative overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
                <img src={img1} className="w-full h-auto" alt="Background" />
                
                {/* Floating Mac Image - Top Right */}
                <div className="absolute top-10 right-10 transform rotate-12 z-10">
                    <img src={img2} className="w-32 h-24 md:w-48 md:h-36 rounded-lg shadow-2xl animate-spin-y" alt="Mac"/>
                </div>
                
                {/* Floating iPad Image - Top Left */}
                <div className="absolute top-10 left-10 transform -rotate-12 z-10">
                    <img src={img3} className="w-24 h-32 md:w-36 md:h-48 rounded-lg shadow-2xl animate-spin-y" alt="iPad"/>
                </div>
                
                {/* Additional Mac Image - Bottom Left */}
                <div className="absolute bottom-10 left-16 transform rotate-6 z-10">
                    <img src={img2} className="w-28 h-20 md:w-40 md:h-28 rounded-lg shadow-2xl opacity-80 animate-spin-y" alt="Mac"/>
                </div>
                
                {/* Additional iPad Image - Bottom Right */}
                <div className="absolute bottom-10 right-20 transform -rotate-6 z-10">
                    <img src={img3} className="w-20 h-28 md:w-32 md:h-40 rounded-lg shadow-2xl opacity-80 animate-spin-y" alt="iPad"/>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-20">
                    <div className="bg-blue-600 rounded-3xl px-2 py-4 max-w-60 shadow-lg">
                        <h1 className="text-2xl md:text-4xl font-semibold text-white text-center">Buy Mac or iPad for college</h1>
                    </div>
                    
                    <div className="bg-blue-600 rounded-2xl px-1 py-1 max-w-60 shadow-lg">
                        <h1 className="text-lg md:text-xl font-bold text-white text-center">with education savings*</h1>
                    </div>
                    
                    <div className="bg-blue-600 rounded-3xl px-2 py-4 max-w-60 shadow-lg">
                        <h2 className="text-2xl md:text-4xl font-bold text-white text-center">Choose AirPods or an eligible accessory*</h2>
                    </div>
                    
                    <button className="bg-transparent text-blue-500 px-8 py-3 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg">
                        Shop
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero1;