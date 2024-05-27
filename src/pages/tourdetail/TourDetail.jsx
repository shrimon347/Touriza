/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"
import img from "../../assets/bg.jpg"
import Navbar from "../../components/shared/Navbar"
import Title from "../../components/shared/Title"
import Footer from "../../components/shared/Footer"
export const TourDetail = () => {
    Title("Tour Details")
    const tour = useLoaderData()

    // console.log(tour);
    const { image, tourisSpotName, countryName, travelTime, averageCost, location, totalVisitorPerYear, description } = tour
    return (
        <div>
            <Navbar />
            <div>
                <div className="relative">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="absolute left-[43%] top-[200px]">
                        <p className="text-white "> {countryName} TOURIST SPOT </p>
                    </div>

                </div>

                <div className="max-w-7xl mx-auto mt-10">
                    <div>
                        <p className="text-xl font-mono">{countryName}</p>
                        <h2 className="text-3xl font-bold">{tourisSpotName}</h2>
                    </div>


                    <div className="flex border p-4 justify-between items-center">
                        <p>{travelTime}</p>
                        <p>18+</p>
                        <p>{totalVisitorPerYear}</p>
                        <p>Adventure</p>
                        <p>{averageCost}</p>
                    </div>
                    <div>
                        <div className="flex justify-center mt-10">
                            <img src={image} alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="mt-10 text-3xl font-mono font-bold">TOUR OVERVIEW</h2>
                            <p className="mt-10 font-normal">{description}</p>
                        </div>
                    </div>


                    <section className="text-gray-600 body-font relative mt-10">
                        <div className="absolute inset-0 bg-gray-300">
                            <iframe width="100%" height="100%"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                        </div>
                        <div className="container px-5 py-24 mx-auto flex">
                            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                                <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
