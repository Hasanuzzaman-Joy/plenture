import { Link, useLoaderData } from "react-router";
import { format } from "date-fns";

const Plants = () => {

    const plantData = useLoaderData();

    // const { care, category, createdAt, description, email, healthStatus, lastWateredDate, name, nextWateringDate, plantName, plant_photo, wateringFrequency, _id } = plantData;

    return (
        <div className='w-full md:w-11/12 mx-auto py-10 md:px-0 px-4'>
            <h1 className="text-4xl font-bold text-center mb-6">Explore Plants on Plenture</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#f4f3f3]">
                <table className="table">
                    <thead className="bg-[#40b93c] text-white">
                        <tr>
                            <th>No.</th>
                            <th></th>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Care Level</th>
                            <th>Watering Frequency</th>
                            <th>Added</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            plantData.map((plant, index) => (
                                <tr>
                                    <th>{index+1}</th>
                                    <td>
                                        <img src={plant.plant_photo} alt="" className="w-14 rounded" />
                                    </td>
                                    <td>{plant.plantName}</td>
                                    <td>{plant.category}</td>
                                    <td>{plant.care}</td>
                                    <td>{plant.wateringFrequency}</td>
                                    <td>{format(new Date(plant.createdAt), 'dd MMMM, yyyy')}</td>
                                    <td><Link to={`/PlantDetails/${plant._id}`} className='btn bg-[#006838] text-white md:px-8'>View Details</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Plants;