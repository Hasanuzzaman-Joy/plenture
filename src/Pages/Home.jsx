import { useLoaderData } from "react-router";
import Recent from "../Component/Recent";
import HomeSlider from "../Component/HomeSlider";
import About from "../Component/About";

const Home = () => {

    const plants = useLoaderData();

    return (
        <div className="w-full md:w-11/12 mx-auto pb-10 md:px-0 px-4">
            <HomeSlider />
            <About />
            <h1 className="text-4xl font-bold text-center pt-24 pb-10">Recently Added Plants</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                plants.map(plant => <Recent key={plant._id} plant={plant}/>)
            }
            </div>
        </div>
    );
};

export default Home;