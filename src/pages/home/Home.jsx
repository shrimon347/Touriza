import { useEffect, useState } from "react"
import Footer from "../../components/shared/Footer"
import Navbar from "../../components/shared/Navbar"
import Slider from "../../components/shared/Slider"
import Title from "../../components/shared/Title"
import Country from "./Country"
import ImageGallery from "./ImageGallery"
import TourSpot from "./TourSpot"



const Home = () => {
    Title('Home')
    const [alltourspot, setAlltourspot] = useState([])
    const [countries, setCountry] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://tour-server-rouge.vercel.app/tour")
            .then(res => res.json())
            .then(data => {
                setAlltourspot(data)
                console.log(data);
                setLoading(false)
            })
        fetch("https://tour-server-rouge.vercel.app/country")
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <Slider />
            <ImageGallery />
            <div className="max-w-7xl mx-auto">
                {
                    loading ? (<div className="text-center mt-10"><span className="loading loading-bars  loading-lg"></span></div>)
                        :
                        <div>
                            <div className="mt-[100px]">
                                <p className="text-md font-mono text-center">Around The World</p>
                                <p className="text-4xl font-bold text-center mb-10">Best Visited Place</p>
                            </div>
                            <div className="mt-[120px] justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                                {
                                    alltourspot.map(tour => <TourSpot key={tour._id} tour={tour} />).slice(0, 5)
                                }
                            </div>
                        </div>


                }
            </div>
            <div className="max-w-7xl mx-auto">
                {
                    loading ? (<div className="text-center mt-10"><span className="loading loading-bars  loading-lg"></span></div>)
                        :
                        <div>
                            <div className="mt-[100px]">
                                <p className="text-md font-mono text-center">Around The World</p>
                                <p className="text-4xl font-bold text-center mb-10">Top Destination</p>
                            </div>
                            <div className="mt-[120px] justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                                {
                                    countries.map(spot => <Country key={spot._id} spot={spot} />)
                                }
                            </div>
                        </div>

                }
            </div>

            <Footer />
        </div>
    )
}

export default Home