import { MailIcon } from "@heroicons/react/outline"

function Newsletter() {
    return (
        // Updated background and text
        <div id="newsletter" className="bg-gradient-to-r from-pink-200 to-rose-200 w-full px-8 h-[300px] lg:h-newsletter text-gray-900 text-center flex justify-center items-center">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">Subscribe to our newsletter</h2>
                <p className="mt-2 text-gray-700 text-base">Get notification about tips, new product and exclusive promo news just for you</p>
                <div className="bg-white lg:w-email mx-auto mt-8 rounded-xl flex items-center h-16 justify-between pl-6 shadow-md">
                    <div className="flex items-center h-full">
                        <label htmlFor="mail">
                            <MailIcon className="w-6 text-gray-500 mr-2" />
                        </label>
                        <input id="mail" className="text-gray-500 outline-none text-sm placeholder-slate-500 h-full w-64 font-medium" type="text" placeholder="Enter your email address" />
                    </div>
                    {/* Updated button color */}
                    <button className="bg-pink-600 text-white font-medium rounded-xl px-6 transition duration-200 h-14 mr-1 text-sm hover:bg-pink-700">Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter