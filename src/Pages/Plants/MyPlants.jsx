import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyPlants = () => {
    useEffect(() => {
        document.title = "Plenture | MyPlants";
    }, [])

    const { user } = useContext(AuthContext);
    const plants = useLoaderData();
    const filtered = plants.filter(plant => plant.email === user.email);
    const [plantItem, setPlantItem] = useState(filtered);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://plenture-server.vercel.app/plants/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const newPlantItem = plantItem.filter(plant => plant._id !== id);
                            setPlantItem(newPlantItem);

                            Swal.fire({
                                icon: "success",
                                title: "You've successfully deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className='w-full mx-auto py-10 md:px-0 px-4'>
            <h1 className="text-4xl font-bold text-center mb-6">My Plant Collection</h1>

            {
                plantItem.length > 0 ? (
                    <div className="overflow-x-auto rounded-box border border-base-content/5 dark:bg-[#0a0c13] bg-[#FAFAF9]">
                        <table className="table">
                            <thead className="bg-[#40b93c] text-white">
                                <tr>
                                    <th>No.</th>
                                    <th></th>
                                    <th>Plant Name</th>
                                    <th>Category</th>
                                    <th>Last Watered</th>
                                    <th>Upcoming Watering</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    plantItem.map((plant, index) => (
                                        <tr className="dark:text-[#ffffff]" key={plant._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <img src={plant.plant_photo} alt="" className="w-14 rounded" />
                                            </td>
                                            <td>{plant.plantName}</td>
                                            <td>{plant.category}</td>
                                            <td>{plant.lastWateredDate}</td>
                                            <td>{plant.nextWateringDate}</td>
                                            <td className="flex gap-2">
                                                <Link to={`/dashboard/updatePlant/${plant._id}`} className='btn bg-[#006838] hover:bg-[#40b93c] transition-all text-white md:px-8'>Update</Link>
                                                <button onClick={() => handleDelete(plant._id)} className='btn bg-[#006838] hover:bg-[#40b93c] transition-all text-white md:px-8'>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-[#FAFAF9] dark:bg-[#0a0c13] dark:border-white dark:border-[1px] text-center space-y-4 py-12 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold dark:text-white text-[#006838]">You have not added any plants yet.</h2>
                        <Link to="/addPlant" className="btn bg-[#006838] hover:bg-[#40b93c] transition-all text-white ">Add a Plant</Link>
                    </div>
                )
            }
        </div>
    );
};

export default MyPlants;
