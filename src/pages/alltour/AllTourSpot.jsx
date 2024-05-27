/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import img from "../../assets/bg.jpg"
import Footer from "../../components/shared/Footer"
import Navbar from "../../components/shared/Navbar"
import TourData from "./TourData"
import Title from "../../components/shared/Title"

const AllTourSpot = () => {
    const loader = useLoaderData()
    Title("ALL Tour Spot")
    const [tourSpotList, setTourspotlist] = useState([])
    const [loading, setLoading] = useState(true)



    console.log(loader);
    useEffect(() => {



        fetch("https://tour-server-rouge.vercel.app/tour")
            .then(res => res.json())
            .then(data => {
                if (loader) {
                    const filteredData = data.filter(spot => spot.countryName === loader.countryName);
                    setTourspotlist(filteredData);
                    console.log(filteredData);
                    setLoading(false)
                }
                else {
                    setTourspotlist(data)
                    console.log(data);
                    setLoading(false)
                }

            })
    }, [loader])

    return (
        <div>
            <Navbar />
            <div className="relative">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="absolute left-[43%] top-[200px]">
                    <p className="text-white ">All TOURIST SPOT </p>
                </div>

            </div>
            {
                loading ? (<div className="text-center mt-10"><span className="loading loading-bars  loading-lg"></span></div>)
                    : <div className="mt-[120px] justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                        {
                            tourSpotList.map(tourplace => <TourData key={tourplace._id} tourplace={tourplace} />)
                        }
                    </div>
            }

            <Footer />
        </div>
    )
}

export default AllTourSpot  