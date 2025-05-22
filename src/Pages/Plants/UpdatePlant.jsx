import { Tooltip } from 'react-tooltip';
import { GiPineTree } from "react-icons/gi";
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlant = () => {

    const planted = useLoaderData();

    const navigate = useNavigate();

    const { _id, plantName, plant_photo, category, description, care, wateringFrequency, lastWateredDate, nextWateringDate, healthStatus } = planted;

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const allData = Object.fromEntries(formData);

        fetch(`http://localhost:5000/updatePlant/${_id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(allData)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "You've successfully updated",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setTimeout(() => {
                        navigate('/myPlants')
                    }, 1300);
                }
            }
            )
    }

    return (
        <div className=' bg-[#f4f3f3] w-full md:w-11/12 mx-auto py-10 md:px-0 px-4'>
            <div className="max-w-[96%] md:max-w-[800px] mx-auto bg-base-100 p-4 rounded-md sm:p-8 shadow-xl" style={{
                boxShadow:
                    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            }}>
                <h2 className="mb-3 text-3xl font-bold text-center">Add a Plant for Care Tracking</h2>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <GiPineTree size={50} />
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleUpdate} className="space-y-8">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="photo" className="block text-sm font-semibold">Plant Image</label>
                                <input type="text" defaultValue={plant_photo} name="plant_photo" id="photo" placeholder="Add Your Plant Image Link" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="plantName" className="block text-sm font-semibold">Plant Name</label>
                                <input type="text" defaultValue={plantName} name="plantName" id="plantName" placeholder="Your Plant Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="category" className="block text-sm font-semibold">Category</label>
                            <select defaultValue={category} name="category" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 text-red-400" required>
                                <option value="">Select Category</option>
                                <option value="succulent">Succulent</option>
                                <option value="fern">Fern</option>
                                <option value="flowering">Flowering</option>
                                <option value="bonsai">Bonsai</option>
                                <option value="cactus">Cactus</option>
                                <option value="herb">Herb</option>
                                <option value="aquatic">Aquatic</option>
                                <option value="climber">Climber</option>
                                <option value="orchid">Orchid</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="description" className="block text-sm font-semibold">Description</label>
                            <textarea
                                defaultValue={description}
                                name="description"
                                id="description"
                                rows="4"
                                placeholder="Write a brief description about the plant..."
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 resize-none"
                            ></textarea>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="care" className="block text-sm font-semibold">Care Level</label>
                            <select defaultValue={care} name="care" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 text-red-400" required>
                                <option value="">Select Care Level</option>
                                <option value="easy">Easy</option>
                                <option value="moderate">Moderate</option>
                                <option value="difficult">Difficult</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="wateringFrequency" className="block text-sm font-semibold">Watering Frequency</label>
                            <input type="text" defaultValue={wateringFrequency} name="wateringFrequency" id="email" placeholder="Every 3-7 Days" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="wateringFrequency" className="block text-sm font-semibold">Last Watered Date</label>
                                <input type="date" defaultValue={lastWateredDate} name="lastWateredDate" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="wateringFrequency" className="block text-sm font-semibold">Next Watering Date</label>
                                <input type="date" defaultValue={nextWateringDate} name="nextWateringDate" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="healthStatus" className="block text-sm font-semibold">Health Status</label>
                            <input type="text" defaultValue={healthStatus} name="healthStatus" id="email" placeholder="Plant Health Status" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        data-tooltip-id="add-tooltip"
                        data-tooltip-content="Click here to add a new plant to your collections"
                        className="w-full px-8 py-2 font-semibold rounded-md bg-[#006838] hover:bg-[#40b93c] text-white border border-transparent cursor-pointer transition-all"
                    >
                        Update Plant
                    </button>
                </form>
            </div>
            <Tooltip id="add-tooltip" place="top" />
        </div>
    );
};

export default UpdatePlant;