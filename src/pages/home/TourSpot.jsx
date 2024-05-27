/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const TourSpot = ({ tour }) => {
    const { _id, image, tourisSpotName, countryName, travelTime, averageCost, location, totalVisitorPerYear } = tour
    return (
        <div>
            <div className="card w-96 bg-base-100 hover:shadow-2xl border overflow-hidden">
                <div  className="relative overflow-hidden">
                <figure><img src={image} alt="Shoes" /></figure>

                </div>
                <div className="card-body">
                    <p className="font-medium text-md font-mono">{countryName}</p>
                    <h2 className="card-title">{tourisSpotName}</h2>
                    <div className="flex justify-between mb-5">
                        <div><p>{location}</p></div>
                        <div>
                            <p>Visitor: {totalVisitorPerYear}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-5">
                        <div><p>{travelTime}</p></div>
                        <div>
                            <p className="text-green-700 font-medium">{averageCost} </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="mt-10 text-center">
                            <Link to={`/touristspot/${_id}`}><button className="outline w-full outline-green-900 outline-2  transition duration-300  hover:bg-green-900 hover:text-white p-4">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourSpot