/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Country = ({ spot }) => {
    const {image,  countryName,description } = spot
    return (
        <div>
      

            <Link to={`/alltourspot/${countryName}`} className="">
            <div className="card w-96 bg-base-100 hover:shadow-2xl border">
                <figure><img className= "transition duration-300 ease-in-out hover:scale-110" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{countryName}</h2>
                    
                    <div>
                        <p>{description.slice(0,250)}....see More</p>
                    </div>
                </div>
            </div>
        </Link>
        </div>
        
    )
}

export default Country