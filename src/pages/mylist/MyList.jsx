import { useContext, useEffect, useState } from "react";
import { MdCancel, MdEditSquare } from "react-icons/md";
import {
    Link,
} from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Title from "../../components/shared/Title";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
    Title("MyList")
    const { user } = useContext(AuthContext)

    const url = `https://tour-server-rouge.vercel.app/tour?email=${user.email}`

    const [mylist, setMylist] = useState([])
    const [tour, setTour] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMylist(data)
                setLoading(false)
            })
       
    }, [url])

    const handleToDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tour-server-rouge.vercel.app/tour/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            console.log("delete");
                            console.log(tour);
                            const remaning = tour.filter(tours => tours._id !== _id)
                            console.log(remaning);
                            setTour(remaning)
                        }
                    });
            }
        });
    }
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                {
                    loading ? (<div className="text-center mt-10"><span className="loading loading-bars  loading-lg"></span></div>)
                        :
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th>
                                            Image
                                        </th>
                                        <th>Seasonality</th>
                                        <th> Travel Time</th>
                                        <th>Average Cost</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {
                                    mylist.map(list => (
                                        <tbody key={list._id}>

                                            <tr>
                                                <th>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={list.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{list.countryName}</div>
                                                            <div className="text-sm opacity-50">{list.tourisSpotName}</div>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    {list.seasonality}
                                                </td>
                                                <td>
                                                    {list.travelTime}
                                                </td>
                                                <td>{list.averageCost}</td>
                                                <th>
                                                    <Link to={`/updatetour/${list._id}`}><button className="text-3xl text-green-900"><MdEditSquare /></button></Link>

                                                </th>
                                                <th>
                                                    <button onClick={() => handleToDelete(list._id)} className="text-3xl text-green-900"><MdCancel /></button>
                                                </th>

                                            </tr>
                                        </tbody>

                                    ))
                                }


                            </table>
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default MyList