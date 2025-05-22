import { useLoaderData } from "react-router";
import Recent from "../Component/Recent";
import HomeSlider from "../Component/HomeSlider";
import About from "../Component/About";
import Faq from '../Component/Faq';
import { Suspense, useEffect } from "react";
import Loading from "../Component/Loading";
import Testimonial from "../Component/Testimonial";
import CTA from '../Component/CTA';


const Home = () => {
    useEffect(() => {
        document.title = "Plenture";
    }, [])

    const testimonialData = fetch('/testimonial.json').then(res => res.json());
    const faqData = fetch('/faq.json').then(res => res.json());

    const plants = useLoaderData();

    return (
        <>
            <div className="w-full md:w-11/12 mx-auto dark:-mt-1">
                <HomeSlider />
            </div>
            <div className="w-full md:w-11/12 mx-auto pb-10">
                <About />
                <h1 className="text-4xl font-bold text-center pt-24 pb-10 leading-14 px-4 md:px-0">Recently Added Plants in Plenture</h1>
                <div className=" md:px-0 px-4 grid gid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        plants.map(plant => <Recent key={plant._id} plant={plant} />)
                    }
                </div>
                <CTA />
                <div className='bg-[#f4f3f3] dark:bg-[#000000] pb-14 w-full mx-auto'>
                    <h1 className='text-4xl font-bold dark:text-[#ffffff] text-center pt-20 leading-14 px-4 md:px-0'>Client Experiences with Plenture</h1>
                    <Suspense fallback={<Loading />}>
                        <Testimonial testimonialData={testimonialData}></Testimonial>
                    </Suspense>
                </div>
                <Suspense fallback={<Loading />}>
                    <Faq faqData={faqData}></Faq>
                </Suspense>
            </div>
        </>
    );
};

export default Home;