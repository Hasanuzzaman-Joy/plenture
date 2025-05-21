import { useLoaderData } from "react-router";
import Recent from "../Component/Recent";

const Home = () => {

    const plants = useLoaderData();

    return (
        <div className="w-full md:w-11/12 mx-auto py-10 md:px-0 px-4">
            <div className="grid grid-cols-3 gap-5">
            {
                plants.map(plant => <Recent key={plant._id} plant={plant}/>)
            }
            </div>
        </div>
    );
};

export default Home;