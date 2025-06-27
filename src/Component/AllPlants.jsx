import { Link } from "react-router";
import { format } from "date-fns";
import { use } from "react";

const AllPlants = ({ plants, setSortby }) => {

    const plantedTree = use(plants);

    const handleSort = (e) =>{
        setSortby(e.target.value);
    }

    return (
        <div className='w-full md:w-11/12 mx-auto py-10 md:px-0 px-4'>
            <h1 className="text-4xl font-bold text-center mb-6">Explore Plants on Plenture</h1>
            <div className=" w-1/2 md:w-3/12 mx-auto my-5">
                <label htmlFor="sort" className="block text-sm font-semibold mb-1 text-center">Sort by:</label>
                <select onChange={handleSort} name="sort" id="sort" className="w-full px-3 py-2 border rounded-md text-gray-700 dark:text-[#ffffff]"
                >
                    <option value="" className='dark:text-[#333333]'>Care Level</option>
                    <option value="easy" className='dark:text-[#333333]'>Easy</option>
                    <option value="moderate" className='dark:text-[#333333]'>Moderate</option>
                    <option value="difficult" className='dark:text-[#333333]'>Difficult</option>
                </select>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#FAFAF9]">
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
                            plantedTree.map((plant, index) => (
                                <tr className="dark:text-[#ffffff] dark:bg-[#0a0c13]" key={plant._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img src={plant.plant_photo} alt="" className="w-14 rounded" />
                                    </td>
                                    <td>{plant.plantName}</td>
                                    <td>{plant.category}</td>
                                    <td>{plant.care}</td>
                                    <td>{plant.wateringFrequency}</td>
                                    <td>{format(new Date(plant.createdAt), 'dd MMMM, yyyy')}</td>
                                    <td><Link to={`/dashboard/Plants/${plant._id}`} className='btn bg-[#006838] hover:bg-[#40b93c] transition-all text-white md:px-8'>View Details</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlants;