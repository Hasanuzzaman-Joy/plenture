import { Link } from "react-router";

const Recent = ({ plant }) => {

    return (
        <div className="card w-96 bg-[#f4f3f3] shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <figure className="h-60 overflow-hidden">
                <img
                    src={plant.plant_photo}
                    alt={plant.plantName}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#006838] text-2xl font-bold">
                    {plant.plantName}
                    <div className="badge rounded-[30px] bg-[#40b93c] ml-5 text-[12px] font-normal text-white capitalize">{plant.care}</div>
                </h2>

                <p className="text-gray-700 text-base">{plant.description}</p>

                <div className="my-2 space-y-2 text-base">
                    <p><span className="font-semibold">Category:</span> {plant.category}</p>
                    <p><span className="font-semibold">Watering:</span> {plant.wateringFrequency}</p>
                    <p><span className="font-semibold">Health:</span> {plant.healthStatus}</p>
                </div>

                <div className="text-sm text-gray-500">
                    Added by <span className="font-medium">{plant.name}</span>
                </div>

                <div className="card-actions mt-4 justify-between items-center">
                    <div className="badge badge-outline capitalize">{plant.category}</div>
                    <Link to={`/Plants/${plant._id}`} className="btn bg-[#006838] text-white hover:bg-[#40b93c] transition-all">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Recent;