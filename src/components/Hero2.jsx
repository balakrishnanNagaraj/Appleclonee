import React, { useRef, useEffect, useState } from "react";
import img4 from "../assets/images/phones.jpg"
import video from "../assets/videos/iphone.mp4"
// import mobileVideo from "../assets/videos/iphone-mobile.mp4"; // Uncomment and add file if available

function Hero2() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    // Play/pause video based on 'playing' state
    useEffect(() => {
        if (playing && videoRef.current) {
            videoRef.current.play().catch(() => {});
        } else if (!playing && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [playing]);

    // Responsive video source selection
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden mt-5">
            <div className="relative h-96 md:h-[500px]">
                {/* Show image, sentences, and buttons initially. On click, show video only. */}
                {!playing ? (
                    <>
                        <img 
                            src={img4} 
                            alt="Background" 
                            className="w-full h-full object-cover cursor-pointer" 
                            onClick={() => setPlaying(true)}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 space-y-2 z-20">
                            <div>
                                <h1 className="text-2xl md:text-6xl font-semibold text-black text-center">iPhone</h1>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl text-black text-center bottom-16">Meet the iPhone 16 family</h1>
                            </div>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
                                    Learn More
                                </button>
                                <button className="bg-transparent text-blue-500 px-4 py-2 border-blue-600 border-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg" onClick={() => setPlaying(true)}>
                                    Shop iPhone
                                </button>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-2xl text-center bottom-16"><span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">Built</span> <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">for Apple</span><span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Intelligence.</span></h1>
                            </div>
                        </div>
                    </>
                ) : (
                    <video 
                        ref={videoRef}
                        width="100%" 
                        height="100%" 
                        muted
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-cover max-h-96 md:max-h-[500px]"
                    >
                        <source src={isMobile ? video : video} type="video/mp4" />
                        {/* Replace both with mobileVideo and video if you add a mobile asset */}
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </section>
    )
}

export default Hero2;