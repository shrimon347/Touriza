import { Link } from "react-router-dom"
import img1 from "../../assets/slide/1.jpg"
import img2 from "../../assets/slide/2.jpg"
import img3 from "../../assets/slide/3.jpg"
import img4 from "../../assets/slide/4.jpg"
import img5 from "../../assets/slide/5.jpg"
import img6 from "../../assets/slide/6.jpg"

const ImageGallery = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-[100px]">
                <p className="text-md font-mono text-center">Around The World</p>
                <p className="text-4xl font-bold text-center mb-10">Top Destination</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                <div className="col-span-1 relative overflow-hidden ">
                    <img src={img1} alt="Cityscape" className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-125" />
                    <p className="absolute top-[50%] p-4 text-white font-medium  ">cityscape</p>
                </div>
                <div className="col-span-1 relative overflow-hidden">
                    <img src={img2} alt="Town by the water" className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-125" />
                    <p className="absolute top-[50%] p-4 text-white font-medium  ">cityscape</p>
                </div>
                <div className="relative overflow-hidden md:col-span-2 col-span-1">
                    <img src={img3} alt="Town by the water" className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-125" />
                    <p className="absolute top-[50%] p-4 text-white font-medium  ">cityscape</p>
                </div>

                <div className="col-span-1 relative overflow-hidden">
                    <img src={img4} alt="City and river" className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-125" />
                    <p className="absolute top-[50%] p-4 text-white font-medium  ">cityscape</p>
                </div>
                <div className="col-span-1 md:col-span-2 relative overflow-hidden">
                    <img src={img5} alt="Mountains and lake" className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-125" />
                    <p className="absolute top-[50%] p-4 text-white font-medium  ">cityscape</p>
                </div>
                <div className="col-span-1 relative overflow-hidden">
                    <img src={img6} alt="Famous tower" className=" w-full h-full object-cover transition duration-300 ease-in-out hover:scale-125" />
                    <p className="absolute top-[50%] p-4 text-white font-medium  ">cityscape</p>
                </div>
            </div>
            <div className="mt-10 text-center">
                <Link to="/alltourspot"><button className="outline outline-green-900 outline-2  transition duration-300  hover:bg-green-900 hover:text-white p-4">View All Destination</button></Link>
            </div>
        </div>
    )
}

export default ImageGallery