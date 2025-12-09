import {
    FaApple,
    FaSearch,
    FaShoppingBag
} from "react-icons/fa"

function Navbar(){
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto">
                <ul className="flex justify-center items-center gap-8 px-4 py-3 text-xs text-gray-900">
                    <li className="text-lg hover:text-gray-600 transition-colors cursor-pointer">
                        <FaApple/>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">Store</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">Mac</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">iPad</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">iPhone</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">Watch</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">AirPods</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">TV & Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">Entertainment</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">Accessories</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-600 transition-colors font-normal">Support</a>
                    </li>
                    <li className="text-base hover:text-gray-600 transition-colors cursor-pointer">
                        <FaSearch/>
                    </li>
                    <li className="text-base hover:text-gray-600 transition-colors cursor-pointer">
                        <FaShoppingBag/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;