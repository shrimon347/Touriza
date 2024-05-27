import Swal from 'sweetalert2'
import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import Title from '../../components/shared/Title'

const AddTour = () => {
    Title("Add tour Spot")
    const {user} = useContext(AuthContext)
    const handleAddTouristSpot = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const tourisSpotName = form.tourists_spot_name.value
        const countryName = form.country_Name.value
        const location = form.location.value
        const averageCost = form.average_cost.value
        const travelTime = form.travel_time.value
        const totalVisitorPerYear = form.totaVisitorsPerYear.value
        const seasonality = form.seasonality.value
        const image = form.photoUrl.value
        const description = form.description.value


        const newTour = { name,email:user.email, tourisSpotName,countryName,location,averageCost,travelTime,totalVisitorPerYear,seasonality,image,description }
        console.log(newTour);
        fetch('https://tour-server-rouge.vercel.app/tour', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tour Spot Added Successfully ',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

            event.target.reset()
    }
    return (
        <div>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        ADD TOURIST SPOT
                    </h2>
                    <form onSubmit={handleAddTouristSpot} >
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <label
                                    htmlFor="brand"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter your Name"
                                    required=""
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Tourist Spot Name
                                </label>
                                <input
                                    type="text"
                                    name="tourists_spot_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter Tour Spot Name"
                                    required=""
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="brand"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Country Name
                                </label>
                                <input
                                    type="text"
                                    name="country_Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter the place country name"
                                    required=""
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter the spot location"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Average Cost
                                </label>
                                <input
                                    type="text"
                                    name="average_cost"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter the average cost $100"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                   Travel Time
                                </label>
                                <input
                                    type="text"
                                    name="travel_time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Eneter the travel time"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                   Tota Visitors Per Year
                                </label>
                                <input
                                    type="text"
                                    name="totaVisitorsPerYear"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="like 4000 people"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Seasonality
                                </label>
                                <input
                                    type="text"
                                    name="seasonality"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="like summer or winter"
                                    required=""
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                   Tour Spot Image
                                </label>
                                <input
                                    type="text"
                                    name="photoUrl"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Photo url"
                                    required=""
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                   
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                   Description
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write about Tour"
                                    required=""
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className=" px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium w-full  bg-green-900  text-white  rounded-lg   hover:focus:bg-green-700"
                        >
                            Add Tourist Spot
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AddTour