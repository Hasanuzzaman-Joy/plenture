import { Link, useLoaderData } from "react-router";
import { format } from "date-fns";

const PlantDetails = () => {
    const plant = useLoaderData();

    const {
        care,
        category,
        createdAt,
        description,
        healthStatus,
        lastWateredDate,
        name,
        nextWateringDate,
        plantName,
        plant_photo,
        wateringFrequency,
        _id
    } = plant;

    return (
        <div className='w-full md:w-11/12 mx-auto py-10 md:px-0 px-4'>
            <div className="bg-[#f4f3f3] w-10/12 mx-auto rounded-xl shadow-lg overflow-hidden md:flex">
                <img
                    src={plant_photo}
                    alt={plantName}
                    className="w-full md:w-1/2 object-cover h-72 md:h-auto"
                />
                <div className="px-6 py-5 flex flex-col justify-center md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-[#006838]">{plantName}</h2>
                    <p className="text-gray-600 mb-5">{description}</p>

                    <div className="grid grid-cols-2 gap-4 space-y-3 text-sm text-gray-700">
                        <div>
                            <span className="font-semibold">Category:</span> {category}
                        </div>
                        <div>
                            <span className="font-semibold">Health:</span> {healthStatus}
                        </div>
                        <div>
                            <span className="font-semibold">Watering:</span> {wateringFrequency}
                        </div>
                        <div>
                            <span className="font-semibold">Care:</span> {care}
                        </div>
                        <div>
                            <span className="font-semibold">Last Watered:</span> {format(new Date(lastWateredDate), 'do MMM yyyy')}
                        </div>
                        <div>
                            <span className="font-semibold">Next Watering:</span> {format(new Date(nextWateringDate), 'do MMM yyyy')}
                        </div>
                        <div>
                            <span className="font-semibold">Created At:</span> {format(new Date(createdAt), 'do MMM yyyy')}
                        </div>
                        <div>
                            <span className="font-semibold">Added By:</span> {name}
                        </div>
                    </div>

                    <div className="pt-4">
                        <Link to='/plants' className="btn bg-[#40b93c] w-full">Back to All Plants</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
